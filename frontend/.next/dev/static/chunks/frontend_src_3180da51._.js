(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/data/mock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "audienceData",
    ()=>audienceData,
    "footerData",
    ()=>footerData,
    "formData",
    ()=>formData,
    "heroData",
    ()=>heroData,
    "preLaunchData",
    ()=>preLaunchData,
    "problemData",
    ()=>problemData,
    "siteConfig",
    ()=>siteConfig,
    "solutionData",
    ()=>solutionData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var siteConfig = {
    name: "SiteBoard",
    tagline: "Your Project. One Board.",
    poweredBy: "Aiclex Technologies",
    domain: "SiteBoard.in"
};
var heroData = {
    headline: "Stop guessing which plot is available.",
    subheadline: "One simple board to see project-wise plot status — Available, Booked, Sold — in real time.",
    cta: "Join Pre-Launch Access"
};
var problemData = {
    title: "Sound familiar?",
    items: [
        {
            text: "Managing plots on Excel and registers",
            icon: "FileSpreadsheet"
        },
        {
            text: "Confusion between booked and sold plots",
            icon: "AlertTriangle"
        },
        {
            text: 'Daily calls asking "Which plot is available?"',
            icon: "PhoneCall"
        },
        {
            text: "Risk of double booking",
            icon: "ShieldAlert"
        }
    ]
};
var solutionData = {
    title: "One board. Complete clarity.",
    description: "SiteBoard gives you a single, clear view of your entire project. No updates by agents. No confusion. Just visibility.",
    indicators: [
        {
            label: "Available",
            color: "#16A34A",
            bgColor: "#DCFCE7"
        },
        {
            label: "Booked",
            color: "#CA8A04",
            bgColor: "#FEF9C3"
        },
        {
            label: "Sold",
            color: "#DC2626",
            bgColor: "#FEE2E2"
        }
    ]
};
var audienceData = {
    title: "Built for people who build.",
    items: [
        {
            title: "Plotting Project Owners",
            description: "Track every plot across your layout with zero confusion.",
            icon: "MapPin"
        },
        {
            title: "Real Estate Developers",
            description: "Get real-time status across all your active projects.",
            icon: "Building2"
        },
        {
            title: "Builder Companies",
            description: "Manage multiple projects and teams from one place.",
            icon: "Briefcase"
        }
    ]
};
var preLaunchData = {
    title: "We're in private pre-launch.",
    description: "SiteBoard is currently in private pre-launch. We are inviting selected real estate companies to help us shape the product.",
    badge: "Pre-Launch"
};
var formData = {
    title: "Request Early Access",
    subtitle: "Be among the first to experience SiteBoard.",
    fields: [
        {
            name: "name",
            label: "Name",
            placeholder: "Your full name",
            type: "text"
        },
        {
            name: "companyName",
            label: "Company Name",
            placeholder: "Your company name",
            type: "text"
        },
        {
            name: "city",
            label: "City",
            placeholder: "e.g. Pune, Mumbai, Ahmedabad",
            type: "text"
        },
        {
            name: "whatsapp",
            label: "WhatsApp Number",
            placeholder: "+91 XXXXX XXXXX",
            type: "tel"
        }
    ],
    button: "Request Early Access"
};
var footerData = {
    copyright: "© ".concat(new Date().getFullYear(), " SiteBoard.in"),
    poweredBy: "Powered by Aiclex Technologies",
    tagline: "Pre-launch version | India-focused real estate system"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mock.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
var LOGO_URL = "https://customer-assets.emergentagent.com/job_real-estate-preview/artifacts/tjyon02e_ChatGPT%20Image%20Feb%208%2C%202026%2C%2002_18_41%20PM.png";
var Header = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), scrolled = _useState[0], setScrolled = _useState[1];
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": function() {
            var handleScroll = {
                "Header.useEffect.handleScroll": function() {
                    setScrolled(window.scrollY > 20);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Header.useEffect": function() {
                    return window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    var scrollToForm = function() {
        var el = document.getElementById("signup-form");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-3 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: function() {
                        return router.push("/");
                    },
                    className: "flex items-center gap-1 cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: LOGO_URL,
                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name,
                        className: "h-16 w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Header.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Header.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: scrollToForm,
                    className: "hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-[#1565C0] rounded-lg hover:bg-[#0D47A1] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
                    children: "Get Early Access"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Header.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Header.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Header.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, _this);
};
_s(Header, "fi0BcWAfCa6oGoQWepS+7cqr4mo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/ui/badge.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(_0) {
    var className = _0.className, variant = _0.variant, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_0, [
        "className",
        "variant"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant: variant
        }), className)
    }, props), void 0, false, {
        fileName: "[project]/frontend/src/components/ui/badge.jsx",
        lineNumber: 31,
        columnNumber: 11
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/graphics/RealEstateGraphics.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildingSkyline",
    ()=>BuildingSkyline,
    "MapPinBuilding",
    ()=>MapPinBuilding,
    "PlotGridPattern",
    ()=>PlotGridPattern
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var BuildingSkyline = function(param) {
    var _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 1200 200",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        preserveAspectRatio: "xMidYMax slice",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "50",
                y: "60",
                width: "40",
                height: "140",
                rx: "2",
                fill: "currentColor",
                opacity: "0.07"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 12,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "56",
                y: "70",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 13,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "68",
                y: "70",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 14,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "56",
                y: "86",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 15,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "68",
                y: "86",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 16,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "56",
                y: "102",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 17,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "68",
                y: "102",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 18,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "56",
                y: "118",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 19,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "68",
                y: "118",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 20,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "100",
                y: "90",
                width: "60",
                height: "110",
                rx: "2",
                fill: "currentColor",
                opacity: "0.06"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 23,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "108",
                y: "98",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 24,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "124",
                y: "98",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 25,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "140",
                y: "98",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 26,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "108",
                y: "112",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 27,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "124",
                y: "112",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 28,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "140",
                y: "112",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 29,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "180",
                y: "30",
                width: "35",
                height: "170",
                rx: "2",
                fill: "currentColor",
                opacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 32,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "186",
                y: "38",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 33,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "196",
                y: "38",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 34,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "186",
                y: "52",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 35,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "196",
                y: "52",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 36,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "186",
                y: "66",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 37,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "196",
                y: "66",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 38,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "186",
                y: "80",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 39,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "196",
                y: "80",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 40,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "230",
                y: "70",
                width: "50",
                height: "130",
                rx: "2",
                fill: "currentColor",
                opacity: "0.065"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 43,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "238",
                y: "80",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.035"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 44,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "252",
                y: "80",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.035"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 45,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "266",
                y: "80",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.035"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 46,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "300",
                y: "120",
                width: "45",
                height: "80",
                rx: "2",
                fill: "currentColor",
                opacity: "0.055"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 49,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "850",
                y: "80",
                width: "45",
                height: "120",
                rx: "2",
                fill: "currentColor",
                opacity: "0.06"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 52,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "858",
                y: "88",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 53,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "872",
                y: "88",
                width: "8",
                height: "10",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 54,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "910",
                y: "40",
                width: "38",
                height: "160",
                rx: "2",
                fill: "currentColor",
                opacity: "0.075"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 56,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "916",
                y: "50",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 57,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "928",
                y: "50",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 58,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "916",
                y: "64",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 59,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "928",
                y: "64",
                width: "6",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 60,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "960",
                y: "95",
                width: "55",
                height: "105",
                rx: "2",
                fill: "currentColor",
                opacity: "0.06"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 62,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "968",
                y: "103",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 63,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "984",
                y: "103",
                width: "10",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.03"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 64,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1030",
                y: "65",
                width: "42",
                height: "135",
                rx: "2",
                fill: "currentColor",
                opacity: "0.07"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 66,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1036",
                y: "73",
                width: "8",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.035"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 67,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1050",
                y: "73",
                width: "8",
                height: "8",
                rx: "1",
                fill: "currentColor",
                opacity: "0.035"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 68,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1085",
                y: "110",
                width: "50",
                height: "90",
                rx: "2",
                fill: "currentColor",
                opacity: "0.055"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 70,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1150",
                y: "85",
                width: "35",
                height: "115",
                rx: "2",
                fill: "currentColor",
                opacity: "0.065"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 71,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
        lineNumber: 4,
        columnNumber: 3
    }, _this);
};
_c = BuildingSkyline;
var PlotGridPattern = function(param) {
    var _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 300 200",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            0,
            1,
            2,
            3,
            4
        ].map(function(row) {
            return [
                0,
                1,
                2,
                3,
                4,
                5
            ].map(function(col) {
                var colors = [
                    "#16A34A",
                    "#CA8A04",
                    "#DC2626"
                ];
                var bgColors = [
                    "#DCFCE7",
                    "#FEF9C3",
                    "#FEE2E2"
                ];
                var idx = (row * 6 + col) % 3;
                var randomIdx = Math.floor(Math.sin(row * 7 + col * 13) * 10000) % 3;
                var finalIdx = Math.abs(randomIdx) % 3;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 10 + col * 48,
                        y: 10 + row * 38,
                        width: "40",
                        height: "30",
                        rx: "4",
                        fill: bgColors[finalIdx],
                        stroke: colors[finalIdx],
                        strokeWidth: "1",
                        opacity: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, _this)
                }, "".concat(row, "-").concat(col), false, {
                    fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, _this);
            });
        })
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
        lineNumber: 76,
        columnNumber: 3
    }, _this);
};
_c1 = PlotGridPattern;
var MapPinBuilding = function(param) {
    var _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 140",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 135C60 135 105 88 105 55C105 30.1472 84.8528 10 60 10C35.1472 10 15 30.1472 15 55C15 88 60 135 60 135Z",
                fill: "#1565C0",
                opacity: "0.1",
                stroke: "#1565C0",
                strokeWidth: "2",
                strokeOpacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 120,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "35",
                width: "40",
                height: "40",
                rx: "3",
                fill: "#1565C0",
                opacity: "0.15"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 129,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "46",
                y: "41",
                width: "8",
                height: "6",
                rx: "1",
                fill: "#1565C0",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 130,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "58",
                y: "41",
                width: "8",
                height: "6",
                rx: "1",
                fill: "#1565C0",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 131,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "46",
                y: "51",
                width: "8",
                height: "6",
                rx: "1",
                fill: "#1565C0",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 132,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "58",
                y: "51",
                width: "8",
                height: "6",
                rx: "1",
                fill: "#1565C0",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 133,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "54",
                y: "61",
                width: "12",
                height: "14",
                rx: "1",
                fill: "#1565C0",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
                lineNumber: 134,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/graphics/RealEstateGraphics.jsx",
        lineNumber: 113,
        columnNumber: 3
    }, _this);
};
_c2 = MapPinBuilding;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BuildingSkyline");
__turbopack_context__.k.register(_c1, "PlotGridPattern");
__turbopack_context__.k.register(_c2, "MapPinBuilding");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$graphics$2f$RealEstateGraphics$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/graphics/RealEstateGraphics.jsx [app-client] (ecmascript)");
"use client";
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
;
var BUILDING_IMG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format";
var HeroSection = function() {
    var scrollToForm = function() {
        var el = document.getElementById("signup-form");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    var scrollToProblems = function() {
        var el = document.getElementById("problem-section");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[92vh] flex items-center justify-center bg-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: BUILDING_IMG,
                    alt: "",
                    className: "w-full h-full object-cover opacity-[0.03]"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/HeroSection.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/HeroSection.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.025]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    style: {
                        backgroundImage: "linear-gradient(#1565C0 1px, transparent 1px), linear-gradient(90deg, #1565C0 1px, transparent 1px)",
                        backgroundSize: "60px 60px"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/HeroSection.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/HeroSection.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/HeroSection.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$graphics$2f$RealEstateGraphics$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildingSkyline"], {
                className: "absolute bottom-0 left-0 right-0 w-full h-48 text-[#1565C0]"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/HeroSection.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-3xl mx-auto px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "mb-8 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-blue-50 text-[#1565C0] border border-blue-100 hover:bg-blue-50",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].tagline
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HeroSection.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroData"].headline
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HeroSection.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroData"].subheadline
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HeroSection.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollToForm,
                        className: "group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#1565C0] rounded-xl hover:bg-[#0D47A1] transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroData"].cta,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/HeroSection.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/HeroSection.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 text-sm text-slate-400",
                        children: "Free for early members · No credit card required"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HeroSection.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/HeroSection.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToProblems,
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-300 hover:text-slate-500 transition-colors duration-200 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs tracking-wider uppercase",
                        children: "Learn more"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HeroSection.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-5 h-5 animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HeroSection.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/HeroSection.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/HeroSection.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, _this);
};
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/PreLaunchSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreLaunchSection",
    ()=>PreLaunchSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/badge.jsx [app-client] (ecmascript)");
"use client";
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
var CONSTRUCTION_IMG = "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?w=1200&q=80&auto=compress";
var PreLaunchSection = function() {
    var scrollToForm = function() {
        var el = document.getElementById("signup-form");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 sm:py-32 bg-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: CONSTRUCTION_IMG,
                    alt: "",
                    className: "w-full h-full object-cover opacity-[0.04]"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 w-32 h-32 opacity-[0.06]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 100 100",
                    fill: "none",
                    children: [
                        0,
                        1,
                        2,
                        3,
                        4
                    ].map(function(r) {
                        return [
                            0,
                            1,
                            2,
                            3,
                            4
                        ].map(function(c) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: 10 + c * 20,
                                cy: 10 + r * 20,
                                r: "3",
                                fill: "#1565C0"
                            }, "".concat(r, "-").concat(c), false, {
                                fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, _this);
                        });
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 right-10 w-32 h-32 opacity-[0.06]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 100 100",
                    fill: "none",
                    children: [
                        0,
                        1,
                        2,
                        3,
                        4
                    ].map(function(r) {
                        return [
                            0,
                            1,
                            2,
                            3,
                            4
                        ].map(function(c) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: 10 + c * 20,
                                cy: 10 + r * 20,
                                r: "3",
                                fill: "#1565C0"
                            }, "".concat(r, "-").concat(c), false, {
                                fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, _this);
                        });
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-3xl mx-auto px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "mb-6 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-100 hover:bg-amber-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-3.5 h-3.5 mr-1.5 inline"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, _this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preLaunchData"].badge
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preLaunchData"].title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preLaunchData"].description
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollToForm,
                        className: "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#1565C0] bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
                        children: "Apply for Early Access"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/PreLaunchSection.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, _this);
};
_c = PreLaunchSection;
var _c;
__turbopack_context__.k.register(_c, "PreLaunchSection");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/ui/input.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = function(_0, _1) {
    var _ref = [
        _0,
        _1
    ], _ref1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref), _ref2 = _ref1[0], _rest = _ref1.slice(1), className = _ref2.className, type = _ref2.type, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref2, [
        "className",
        "type"
    ]), _rest1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_rest, 1), ref = _rest1[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref
    }, props), void 0, false, {
        fileName: "[project]/frontend/src/components/ui/input.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, _this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/ui/label.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
;
var labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = function(_0, _1) {
    var _ref = [
        _0,
        _1
    ], _ref1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref), _ref2 = _ref1[0], _rest = _ref1.slice(1), className = _ref2.className, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref2, [
        "className"
    ]), _rest1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_rest, 1), ref = _rest1[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className)
    }, props), void 0, false, {
        fileName: "[project]/frontend/src/components/ui/label.jsx",
        lineNumber: 12,
        columnNumber: 3
    }, _this);
});
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API",
    ()=>API
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var BACKEND_URL = ("TURBOPACK compile-time value", "https://real-estate-preview.preview.emergentagent.com");
var API = "".concat(BACKEND_URL, "/api");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/SignupForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignupForm",
    ()=>SignupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/api.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
var SignupForm = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        companyName: "",
        city: "",
        whatsapp: ""
    }), 2), formValues = _useState[0], setFormValues = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), submitted = _useState1[0], setSubmitted = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loading = _useState2[0], setLoading = _useState2[1];
    var handleChange = function(e) {
        setFormValues(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, e.target.name, e.target.value));
        });
    };
    var handleSubmit = function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var err;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        if (!formValues.name.trim() || !formValues.companyName.trim() || !formValues.city.trim() || !formValues.whatsapp.trim()) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all fields.");
                            return [
                                2
                            ];
                        }
                        setLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"], "/signups"), {
                                name: formValues.name,
                                company_name: formValues.companyName,
                                city: formValues.city,
                                whatsapp: formValues.whatsapp
                            })
                        ];
                    case 2:
                        _state.sent();
                        setSubmitted(true);
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("You're on the list! We'll reach out soon.");
                        return [
                            3,
                            5
                        ];
                    case 3:
                        err = _state.sent();
                        console.error(err);
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Something went wrong. Please try again.");
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setLoading(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "signup-form",
            className: "py-24 sm:py-32 bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-8 h-8 text-[#1565C0]"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/SignupForm.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-slate-900 mb-3",
                        children: "You're on the list!"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/SignupForm.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 leading-relaxed",
                        children: "Thank you for your interest in SiteBoard. We'll reach out to you on WhatsApp with next steps soon."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/SignupForm.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/SignupForm.jsx",
                lineNumber: 60,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/SignupForm.jsx",
            lineNumber: 59,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "signup-form",
        className: "py-24 sm:py-32 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-lg mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formData"].title
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-500",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formData"].subtitle
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/SignupForm.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "bg-white rounded-2xl border border-gray-100 p-8 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formData"].fields.map(function(field) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: field.name,
                                            className: "text-sm font-medium text-slate-700 mb-1.5 block",
                                            children: field.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: field.name,
                                            name: field.name,
                                            type: field.type,
                                            placeholder: field.placeholder,
                                            value: formValues[field.name],
                                            onChange: handleChange,
                                            className: "h-11 border-gray-200 focus:border-[#1565C0] focus:ring-[#1565C0] rounded-lg text-slate-800 placeholder:text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, field.name, true, {
                                    fileName: "[project]/frontend/src/components/SignupForm.jsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "mt-7 w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#1565C0] rounded-xl hover:bg-[#0D47A1] transition-all duration-200 shadow-lg shadow-blue-600/15 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/SignupForm.jsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, _this),
                                    "Submitting..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/SignupForm.jsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formData"].button,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/SignupForm.jsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-center text-xs text-slate-400",
                            children: "Your details are safe. We only use WhatsApp to reach out."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/SignupForm.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/SignupForm.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/SignupForm.jsx",
            lineNumber: 78,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/SignupForm.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, _this);
};
_s(SignupForm, "TeCOXqGGHaOWHK2N9QEQfJz64dk=");
_c = SignupForm;
var _c;
__turbopack_context__.k.register(_c, "SignupForm");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_3180da51._.js.map