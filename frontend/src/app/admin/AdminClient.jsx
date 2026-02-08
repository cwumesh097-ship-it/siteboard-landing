"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API } from "../../lib/api";
import {
  Users,
  MapPin,
  Clock,
  Trash2,
  LogOut,
  RefreshCw,
  Search,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Building2,
} from "lucide-react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Badge } from "../../components/ui/badge";
import { toast } from "sonner";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_real-estate-preview/artifacts/tjyon02e_ChatGPT%20Image%20Feb%208%2C%202026%2C%2002_18_41%20PM.png";

/* ======================== LOGIN FORM ======================== */
const AdminLoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/admin/login`, { email, password });
      if (res.data.success) {
        sessionStorage.setItem("sb_admin", "true");
        onLogin();
        toast.success("Welcome back!");
      }
    } catch (err) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <img src={LOGO_URL} alt="SiteBoard" className="h-16 w-auto object-contain mx-auto mb-5" />
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Admin Login</h1>
          <p className="text-sm text-slate-500">Sign in to access the leads dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1.5 block">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input id="email" type="email" placeholder="admin@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 h-11 border-gray-200 focus:border-[#1565C0] focus:ring-[#1565C0] rounded-lg" />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-slate-700 mb-1.5 block">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input id="password" type={showPass ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 pr-10 h-11 border-gray-200 focus:border-[#1565C0] focus:ring-[#1565C0] rounded-lg" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          <button type="submit" disabled={loading} className="mt-7 w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#1565C0] rounded-xl hover:bg-[#0D47A1] transition-all duration-200 shadow-lg shadow-blue-600/15 disabled:opacity-60">
            {loading ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Signing in...</span> : "Sign In"}
          </button>
        </form>
        <p className="text-center text-xs text-slate-400 mt-6">Powered by Aiclex Technologies</p>
      </div>
    </div>
  );
};

/* ======================== DASHBOARD ======================== */
const AdminDashboard = ({ onLogout }) => {
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

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleRefresh = () => { setRefreshing(true); fetchData(); };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    try {
      await axios.delete(`${API}/signups/${id}`);
      toast.success("Lead deleted");
      fetchData();
    } catch (err) { toast.error("Failed to delete"); }
  };

  const filteredSignups = signups.filter((s) => {
    const q = search.toLowerCase();
    return s.name.toLowerCase().includes(q) || s.company_name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) || s.whatsapp.includes(q);
  });

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-sm text-slate-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="SiteBoard" className="h-14 w-auto object-contain" />
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1565C0]" />
              <span className="text-sm font-semibold text-slate-900">Leads Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleRefresh} disabled={refreshing} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50">
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Users className="w-5 h-5 text-[#1565C0]" /></div>
              <p className="text-sm font-medium text-slate-500">Total Leads</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">{stats?.total_signups || 0}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><MapPin className="w-5 h-5 text-amber-600" /></div>
              <p className="text-sm font-medium text-slate-500">Cities</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">{stats?.cities?.length || 0}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {stats?.cities?.slice(0, 5).map((city) => (<Badge key={city} variant="secondary" className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-100">{city}</Badge>))}
              {(stats?.cities?.length || 0) > 5 && <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-500 hover:bg-slate-100">+{stats.cities.length - 5}</Badge>}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center"><Clock className="w-5 h-5 text-emerald-600" /></div>
              <p className="text-sm font-medium text-slate-500">Latest Signup</p>
            </div>
            <p className="text-sm font-semibold text-slate-900">{signups.length > 0 ? signups[0].name : "No signups yet"}</p>
            {signups.length > 0 && <p className="text-xs text-slate-400 mt-1">{formatDate(signups[0].created_at)}</p>}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-900">All Leads ({filteredSignups.length})</h3>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search by name, company, city..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 h-10 border-gray-200 rounded-lg text-sm" />
            </div>
          </div>
          {filteredSignups.length === 0 ? (
            <div className="py-16 text-center">
              <Users className="w-10 h-10 text-slate-200 mx-auto mb-3" />
              <p className="text-sm text-slate-400">{signups.length === 0 ? "No leads yet. Share your landing page to start collecting signups." : "No results match your search."}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Name</th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Company</th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">City</th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">WhatsApp</th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Date</th>
                    <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSignups.map((signup) => (
                    <tr key={signup.id} className="border-b border-gray-50 hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-4"><p className="text-sm font-medium text-slate-800">{signup.name}</p></td>
                      <td className="px-5 py-4"><p className="text-sm text-slate-600">{signup.company_name}</p></td>
                      <td className="px-5 py-4"><Badge variant="secondary" className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-100">{signup.city}</Badge></td>
                      <td className="px-5 py-4"><p className="text-sm text-slate-600">{signup.whatsapp}</p></td>
                      <td className="px-5 py-4"><p className="text-xs text-slate-400">{formatDate(signup.created_at)}</p></td>
                      <td className="px-5 py-4 text-right">
                        <button onClick={() => handleDelete(signup.id)} className="p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors" title="Delete lead">
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
};

/* ======================== ADMIN PAGE ======================== */
export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem("sb_admin") === "true";
    }
    return false;
  });

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    sessionStorage.removeItem("sb_admin");
    setIsLoggedIn(false);
    toast.success("Logged out");
  };

  if (!isLoggedIn) return <AdminLoginForm onLogin={handleLogin} />;
  return <AdminDashboard onLogout={handleLogout} />;
}
