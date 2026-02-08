import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LayoutDashboard,
  Users,
  MapPin,
  Clock,
  Trash2,
  ArrowLeft,
  RefreshCw,
  Search,
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const [statsRes, signupsRes] = await Promise.all([
        axios.get(`${API}/signups/stats`),
        axios.get(`${API}/signups`),
      ]);
      setStats(statsRes.data);
      setSignups(signupsRes.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    try {
      await axios.delete(`${API}/signups/${id}`);
      toast.success("Lead deleted");
      fetchData();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  const filteredSignups = signups.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.company_name.toLowerCase().includes(q) ||
      s.city.toLowerCase().includes(q) ||
      s.whatsapp.includes(q)
    );
  });

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-teal-700/20 border-t-teal-700 rounded-full animate-spin" />
          <p className="text-sm text-slate-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-semibold text-slate-900">Leads Dashboard</span>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-teal-700" />
              </div>
              <p className="text-sm font-medium text-slate-500">Total Leads</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">
              {stats?.total_signups || 0}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-sm font-medium text-slate-500">Cities</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">
              {stats?.cities?.length || 0}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {stats?.cities?.slice(0, 5).map((city) => (
                <Badge
                  key={city}
                  variant="secondary"
                  className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-100"
                >
                  {city}
                </Badge>
              ))}
              {(stats?.cities?.length || 0) > 5 && (
                <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-500 hover:bg-slate-100">
                  +{stats.cities.length - 5}
                </Badge>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-violet-600" />
              </div>
              <p className="text-sm font-medium text-slate-500">Latest Signup</p>
            </div>
            <p className="text-sm font-semibold text-slate-900">
              {signups.length > 0 ? signups[0].name : "No signups yet"}
            </p>
            {signups.length > 0 && (
              <p className="text-xs text-slate-400 mt-1">
                {formatDate(signups[0].created_at)}
              </p>
            )}
          </div>
        </div>

        {/* Search + Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-900">
              All Leads ({filteredSignups.length})
            </h3>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by name, company, city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-10 border-gray-200 rounded-lg text-sm"
              />
            </div>
          </div>

          {filteredSignups.length === 0 ? (
            <div className="py-16 text-center">
              <Users className="w-10 h-10 text-slate-200 mx-auto mb-3" />
              <p className="text-sm text-slate-400">
                {signups.length === 0
                  ? "No leads yet. Share your landing page to start collecting signups."
                  : "No results match your search."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">
                      Name
                    </th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">
                      Company
                    </th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">
                      City
                    </th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">
                      WhatsApp
                    </th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">
                      Date
                    </th>
                    <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSignups.map((signup) => (
                    <tr
                      key={signup.id}
                      className="border-b border-gray-50 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-slate-800">
                          {signup.name}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-sm text-slate-600">
                          {signup.company_name}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-100"
                        >
                          {signup.city}
                        </Badge>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-sm text-slate-600">
                          {signup.whatsapp}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-xs text-slate-400">
                          {formatDate(signup.created_at)}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => handleDelete(signup.id)}
                          className="p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Delete lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
