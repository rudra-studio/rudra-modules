import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { useRef as f, useState as u, useEffect as c, useCallback as g } from "react";
import { Link as b, Typography as l } from "@rudra-studio/rudra-core";
import { Box as o } from "@rudra-studio/rudra-layout";
function y(h) {
  const s = f(null), [i, n] = u("lg");
  c(() => {
    if (!s.current) return;
    const e = new ResizeObserver((m) => {
      for (let p of m) {
        const a = p.contentRect.width;
        a < 768 ? n("sm") : a < 1024 ? n("md") : n("lg");
      }
    });
    return e.observe(s.current), () => e.disconnect();
  }, []);
  const t = g((e) => typeof e != "object" || e === null ? e : i === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : i === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [i]);
  return /* @__PURE__ */ r("div", { ref: s, className: "rudra-module-wrapper", children: /* @__PURE__ */ d(b, { id: "el_1783799676168_2692lkp", className: `${t({ sm: "fixed z-[9999] bottom-4 left-4 sm:bottom-6 sm:left-6 group transition-transform duration-300 hover:-translate-y-1" }) || ""}`, href: t({ sm: "https://www.rudraapp.in/" }), children: [
    "      ",
    /* @__PURE__ */ d(o, { id: "el_1783799792520_qwkx02h", className: `${t({ sm: "relative flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-lg overflow-hidden" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ r(o, { id: "el_1783799849503_oyafi3f", className: `${t({ sm: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" }) || ""}` }),
      /* @__PURE__ */ r(o, { id: "el_1783799872086_a57m4kr", className: `${t({ sm: "relative flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-inner shrink-0" }) || ""}` }),
      /* @__PURE__ */ d(o, { id: "el_1783799853477_7k5wgt6", className: `flex ${t({ sm: "flex flex-col pr-1" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ r(l, { id: "el_1783800015674_xsvoscg", className: `${t({ sm: "text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 leading-none mb-[2px]" }) || ""}`, as: "h2", content: t({ sm: "Built With" }) }),
        /* @__PURE__ */ r(l, { id: "el_1783800017315_bmj64g9", className: `${t({ sm: "text-xs font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text leading-none tracking-tight" }) || ""} ${t({ sm: "text-base" }) || ""}`, as: "h2", content: t({ sm: "RUDRA" }) })
      ] })
    ] }),
    /* @__PURE__ */ r(o, { id: "el_1783799739257_jjb8whz", className: `${t({ sm: "absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" }) || ""}` })
  ] }) });
}
export {
  y as default
};
