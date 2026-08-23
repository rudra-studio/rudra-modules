import { jsxs as o, jsx as l } from "react/jsx-runtime";
import { useState as N, useEffect as y, useRef as S, useCallback as f } from "react";
import { Link as h, Typography as d } from "@rudra-studio/rudra-core";
import { Box as w } from "@rudra-studio/rudra-layout";
function z(i) {
  const g = i.serverData || i.serverState || {};
  i.sharedState, i.applicationState || g.applicationState, i.pageState || g.pageState, i.pageData || g.pageData, {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  };
  const m = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, v = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [B, _] = N(() => m ?? v());
  y(() => {
    m != null && _(m);
  }, [m]), y(() => {
    if (m != null || typeof document > "u") return;
    const e = document.documentElement, r = (n) => _(n?.detail?.theme ?? v()), a = new MutationObserver(r);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [m]);
  const b = S(null), [k, p] = N("lg");
  y(() => {
    if (!b.current) return;
    const e = new ResizeObserver((r) => {
      for (let a of r) {
        const n = a.contentRect.width;
        n < 768 ? p("sm") : n < 1024 ? p("md") : p("lg");
      }
    });
    return e.observe(b.current), () => e.disconnect();
  }, []);
  const t = f((e) => typeof e != "object" || e === null ? e : k === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : k === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [k]);
  i.visualTheme !== void 0 ? i.visualTheme : i.data?.visualTheme !== void 0 && i.data.visualTheme;
  const R = f((e, r) => r, []);
  f((e, r) => {
    const [a, ...n] = String(e || "").split(".");
    return a && n.length === 0 ? R(a, r) : r;
  }, [R]), f(async (e, r, a) => {
    const n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), u = n[r] || n.default;
    if (typeof u != "function") throw new Error("Library function '" + r + "' was not exported by " + e);
    return u(a);
  }, []);
  const O = {}, x = (e, r, a) => {
    if (!r || typeof r != "object") return "";
    const n = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], u = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (n.length && !n.includes(u) && !(u === "integer" && n.includes("number"))) return a + " must be " + n.join(" or ") + ".";
    if (r.enum && !r.enum.some((s) => JSON.stringify(s) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const s of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, s)) return a + "." + s + " is required.";
      for (const [s, c] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const $ = x(e[s], c, a + "." + s);
        if ($) return $;
      }
    }
    if (Array.isArray(e) && r.items) for (let s = 0; s < e.length; s++) {
      const c = x(e[s], r.items, a + "[" + s + "]");
      if (c) return c;
    }
    return "";
  };
  return f(async (e, r, a = !1) => {
    const n = O[e];
    if (!n) throw new Error("Module output '" + e + "' is not declared.");
    const u = x(r, n, "output." + e);
    if (u) throw new Error(u);
    const s = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof s != "function") return r;
    const c = s(e, r, { moduleId: i.moduleId, awaitHandlers: a });
    return a ? await c : r;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]), /* @__PURE__ */ o("div", { ref: b, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ o(h, { id: "watermark_glass", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/75 px-3 py-2 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-slate-700/60 dark:bg-slate-950/75" }) || ""}`, rel: t({ sm: "noopener noreferrer" }), href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), children: [
      "      ",
      /* @__PURE__ */ o(w, { id: "watermark_glass_mark", className: `flex ${t({ sm: "grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-sm" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ l(d, { id: "watermark_glass_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
      ] }),
      /* @__PURE__ */ l(d, { id: "watermark_glass_label", className: `${t({ sm: "text-xs font-semibold tracking-tight text-slate-700 dark:text-slate-100" }) || ""}`, content: t({ sm: "Built with Rudra" }), as: "span" })
    ] }),
    /* @__PURE__ */ o(h, { id: "watermark_root", "aria-label": "Built with Rudra — visit the Rudra home page", rel: t({ sm: "noopener noreferrer" }), href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), children: [
      "      ",
      /* @__PURE__ */ o(w, { id: "watermark_mark", className: `${t({ sm: "rudra-watermark-mark" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ l(d, { id: "watermark_letter", className: `${t({ sm: "rudra-watermark-letter" }) || ""}`, as: "span", content: t({ sm: "R" }) })
      ] }),
      /* @__PURE__ */ l(d, { id: "watermark_label", className: `${t({ sm: "rudra-watermark-label" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
    ] }),
    /* @__PURE__ */ o(h, { id: "watermark_light", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-md transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2" }) || ""}`, rel: t({ sm: "noopener noreferrer" }), href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), children: [
      "      ",
      /* @__PURE__ */ o(w, { id: "watermark_light_mark", className: `flex ${t({ sm: "grid size-5 shrink-0 place-items-center rounded-full bg-violet-600 shadow-sm" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ l(d, { id: "watermark_light_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
      ] }),
      /* @__PURE__ */ l(d, { id: "watermark_light_label", className: `${t({ sm: "text-xs font-semibold tracking-tight text-slate-800" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
    ] }),
    /* @__PURE__ */ o(h, { id: "watermark_dark", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:border-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" }) || ""}`, href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), rel: t({ sm: "noopener noreferrer" }), children: [
      "      ",
      /* @__PURE__ */ o(w, { id: "watermark_dark_mark", className: `flex ${t({ sm: "grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-sm" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ l(d, { id: "watermark_dark_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
      ] }),
      /* @__PURE__ */ l(d, { id: "watermark_dark_label", className: `${t({ sm: "text-xs font-semibold tracking-tight text-slate-100" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
    ] }),
    /* @__PURE__ */ o(h, { id: "watermark_minimal", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-violet-300" }) || ""}`, href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), rel: t({ sm: "noopener noreferrer" }), children: [
      "      ",
      /* @__PURE__ */ o(w, { id: "watermark_minimal_mark", className: `flex ${t({ sm: "grid size-4 shrink-0 place-items-center rounded bg-violet-600" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ l(d, { id: "watermark_minimal_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
      ] }),
      /* @__PURE__ */ l(d, { id: "watermark_minimal_label", className: `${t({ sm: "text-[11px] font-semibold tracking-tight" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
    ] })
  ] });
}
export {
  z as default
};
