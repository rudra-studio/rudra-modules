import { jsxs as n, Fragment as s, jsx as m } from "react/jsx-runtime";
import { useState as T, useEffect as _, useRef as E, useCallback as g } from "react";
import { Link as w, Typography as u } from "@rudra-studio/rudra-core";
import { Box as b } from "@rudra-studio/rudra-layout";
function C(i) {
  const k = i.serverData || i.serverState || {};
  i.sharedState, i.applicationState || k.applicationState, i.pageState || k.pageState, i.pageData || k.pageData, {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  };
  const c = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, R = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [L, $] = T(() => c ?? R());
  _(() => {
    c != null && $(c);
  }, [c]), _(() => {
    if (c != null || typeof document > "u") return;
    const e = document.documentElement, r = (o) => $(o?.detail?.theme ?? R()), l = new MutationObserver(r);
    return l.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      l.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [c]);
  const p = E(null), [v, x] = T("lg");
  _(() => {
    if (!p.current) return;
    const e = new ResizeObserver((r) => {
      for (let l of r) {
        const o = l.contentRect.width;
        o < 768 ? x("sm") : o < 1024 ? x("md") : x("lg");
      }
    });
    return e.observe(p.current), () => e.disconnect();
  }, []);
  const t = g((e) => typeof e != "object" || e === null ? e : v === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : v === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [v]), a = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, B = i.visualTheme !== void 0 ? i.visualTheme : i.data?.visualTheme !== void 0 ? i.data.visualTheme : "light", j = i.visible !== void 0 ? i.visible : i.data?.visible !== void 0 ? i.data.visible : !0, N = { visualTheme: B, visible: j }, O = g((e, r) => r, []);
  g((e, r) => {
    const [l, ...o] = String(e || "").split(".");
    return l && o.length === 0 ? O(l, r) : r;
  }, [O]), g(async (e, r, l) => {
    const o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), h = o[r] || o.default;
    if (typeof h != "function") throw new Error("Library function '" + r + "' was not exported by " + e);
    return h(l);
  }, []);
  const A = {}, y = (e, r, l) => {
    if (!r || typeof r != "object") return "";
    const o = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], h = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(h) && !(h === "integer" && o.includes("number"))) return l + " must be " + o.join(" or ") + ".";
    if (r.enum && !r.enum.some((d) => JSON.stringify(d) === JSON.stringify(e))) return l + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const d of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, d)) return l + "." + d + " is required.";
      for (const [d, f] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, d)) {
        const S = y(e[d], f, l + "." + d);
        if (S) return S;
      }
    }
    if (Array.isArray(e) && r.items) for (let d = 0; d < e.length; d++) {
      const f = y(e[d], r.items, l + "[" + d + "]");
      if (f) return f;
    }
    return "";
  };
  return g(async (e, r, l = !1) => {
    const o = A[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const h = y(r, o, "output." + e);
    if (h) throw new Error(h);
    const d = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof d != "function") return r;
    const f = d(e, r, { moduleId: i.moduleId, awaitHandlers: l });
    return l ? await f : r;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]), /* @__PURE__ */ n("div", { ref: p, className: "rudra-module-wrapper", children: [
    a(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(N?.visible)) && /* @__PURE__ */ n(s, { children: [
      "      ",
      /* @__PURE__ */ n(w, { id: "watermark_root", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${((e) => e == null || e === !1 || typeof e == "object" ? "" : "" + String(e))(/* @__PURE__ */ ((e) => e === void 0 ? "glass" : e)(N?.visualTheme))}`, target: t({ sm: "_blank" }), rel: t({ sm: "noopener noreferrer" }), href: t({ sm: "https://www.rudraapp.in/" }), children: [
        "      ",
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ n(b, { id: "watermark_mark", className: `${t({ sm: "rudra-watermark-mark" }) || ""}`, children: [
            "      ",
            a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
              "      ",
              /* @__PURE__ */ m(u, { id: "watermark_letter", className: `${t({ sm: "rudra-watermark-letter" }) || ""}`, as: "span", content: t({ sm: "R" }) })
            ] })
          ] })
        ] }),
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ m(u, { id: "watermark_label", className: `${t({ sm: "rudra-watermark-label" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
        ] })
      ] })
    ] }),
    a(!1) && /* @__PURE__ */ n(s, { children: [
      "      ",
      /* @__PURE__ */ n(w, { id: "watermark_glass", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/75 px-3 py-2 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-slate-700/60 dark:bg-slate-950/75" }) || ""}`, href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), rel: t({ sm: "noopener noreferrer" }), children: [
        "      ",
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ n(b, { id: "watermark_glass_mark", className: `flex ${t({ sm: "grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-sm" }) || ""}`, children: [
            "      ",
            a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
              "      ",
              /* @__PURE__ */ m(u, { id: "watermark_glass_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
            ] })
          ] })
        ] }),
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ m(u, { id: "watermark_glass_label", className: `${t({ sm: "text-xs font-semibold tracking-tight text-slate-700 dark:text-slate-100" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
        ] })
      ] })
    ] }),
    a(!1) && /* @__PURE__ */ n(s, { children: [
      "      ",
      /* @__PURE__ */ n(w, { id: "watermark_light", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-md transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2" }) || ""}`, href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), rel: t({ sm: "noopener noreferrer" }), children: [
        "      ",
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ n(b, { id: "watermark_light_mark", className: `flex ${t({ sm: "grid size-5 shrink-0 place-items-center rounded-full bg-violet-600 shadow-sm" }) || ""}`, children: [
            "      ",
            a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
              "      ",
              /* @__PURE__ */ m(u, { id: "watermark_light_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
            ] })
          ] })
        ] }),
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ m(u, { id: "watermark_light_label", className: `${t({ sm: "text-xs font-semibold tracking-tight text-slate-800" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
        ] })
      ] })
    ] }),
    a(!1) && /* @__PURE__ */ n(s, { children: [
      "      ",
      /* @__PURE__ */ n(w, { id: "watermark_dark", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:border-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" }) || ""}`, target: t({ sm: "_blank" }), rel: t({ sm: "noopener noreferrer" }), href: t({ sm: "https://www.rudraapp.in/" }), children: [
        "      ",
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ n(b, { id: "watermark_dark_mark", className: `flex ${t({ sm: "grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-sm" }) || ""}`, children: [
            "      ",
            a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
              "      ",
              /* @__PURE__ */ m(u, { id: "watermark_dark_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
            ] })
          ] })
        ] }),
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ m(u, { id: "watermark_dark_label", className: `${t({ sm: "text-xs font-semibold tracking-tight text-slate-100" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
        ] })
      ] })
    ] }),
    a(!1) && /* @__PURE__ */ n(s, { children: [
      "      ",
      /* @__PURE__ */ n(w, { id: "watermark_minimal", "aria-label": "Built with Rudra — visit the Rudra home page", className: `${t({ sm: "rudra-watermark inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-violet-300" }) || ""}`, rel: t({ sm: "noopener noreferrer" }), href: t({ sm: "https://www.rudraapp.in/" }), target: t({ sm: "_blank" }), children: [
        "      ",
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ n(b, { id: "watermark_minimal_mark", className: `flex ${t({ sm: "grid size-4 shrink-0 place-items-center rounded bg-violet-600" }) || ""}`, children: [
            "      ",
            a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
              "      ",
              /* @__PURE__ */ m(u, { id: "watermark_minimal_letter", className: `${t({ sm: "text-[10px] font-black leading-none text-white" }) || ""}`, as: "span", content: t({ sm: "R" }) })
            ] })
          ] })
        ] }),
        a(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(s, { children: [
          "      ",
          /* @__PURE__ */ m(u, { id: "watermark_minimal_label", className: `${t({ sm: "text-[11px] font-semibold tracking-tight" }) || ""}`, as: "span", content: t({ sm: "Built with Rudra" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  C as default
};
