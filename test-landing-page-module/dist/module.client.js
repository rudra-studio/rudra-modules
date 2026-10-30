import { jsxs as j, jsx as c } from "react/jsx-runtime";
import { useState as P, useEffect as h, useRef as v, useCallback as l } from "react";
import { FeatureCard as g, Footer as E, HeroSection as k, Navbar as A } from "@rudra-studio/landing-page-lib";
function N(t) {
  const i = t.serverData || t.serverState || {};
  t.sharedState, t.applicationState || i.applicationState, t.pageState || i.pageState, t.pageData || i.pageData, {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  }, t.$route ?? t.route ?? t.data?.$route ?? t.data?.route ?? t.runtime?.data?.$route ?? t.runtime?.route ?? i?.$route ?? i?.route, t.$params ?? t.routeParams ?? t.params ?? t.data?.$params ?? t.data?.routeParams ?? t.data?.params ?? t.runtime?.data?.$params ?? t.runtime?.route?.params ?? t.runtime?.routeParams ?? t.runtime?.params ?? i?.$params ?? i?.routeParams ?? i?.params, t.$query ?? t.queryParams ?? t.query ?? t.data?.$query ?? t.data?.queryParams ?? t.data?.query ?? t.runtime?.data?.$query ?? t.runtime?.route?.query ?? t.runtime?.queryParams ?? t.runtime?.query ?? i?.$query ?? i?.queryParams ?? i?.query, t.$auth ?? t.auth ?? t.data?.$auth ?? t.data?.auth ?? t.runtime?.data?.$auth ?? t.runtime?.authInfo ?? t.runtime?.auth ?? i?.$auth ?? i?.auth, t.$config ?? t.config ?? t.data?.$config ?? t.data?.config ?? t.runtime?.data?.$config ?? t.runtime?.config ?? i?.$config ?? i?.config, t.$env ?? t.env ?? t.data?.$env ?? t.data?.env ?? t.runtime?.data?.$env ?? t.runtime?.env ?? i?.$env ?? i?.env, t.$locale ?? t.locale ?? t.data?.$locale ?? t.data?.locale ?? t.runtime?.data?.$locale ?? t.runtime?.locale ?? i?.$locale ?? i?.locale, t.$translations ?? t.translations ?? t.data?.$translations ?? t.data?.translations ?? t.runtime?.data?.$translations ?? t.runtime?.translations ?? i?.$translations ?? i?.translations, t.$i18n ?? t.i18n ?? t.data?.$i18n ?? t.data?.i18n ?? t.runtime?.data?.$i18n ?? t.runtime?.i18n ?? i?.$i18n ?? i?.i18n;
  const d = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, b = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [x, w] = P(() => d ?? b());
  h(() => {
    d != null && w(d);
  }, [d]), h(() => {
    if (d != null || typeof document > "u") return;
    const e = document.documentElement, n = (u) => w(u?.detail?.theme ?? b()), a = new MutationObserver(n);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [d]);
  const f = v(null), [s, y] = P("lg");
  h(() => {
    if (!f.current) return;
    const e = new ResizeObserver((n) => {
      for (let a of n) {
        const u = a.contentRect.width;
        u < 768 ? y("sm") : u < 1024 ? y("md") : y("lg");
      }
    });
    return e.observe(f.current), () => e.disconnect();
  }, []), l((e) => {
    if (typeof e != "object" || e === null) return e;
    const n = s === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : s === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [s]);
  const O = l((e, n) => n, [{}]);
  l((e, n) => {
    const [a, ...u] = String(e || "").split(".");
    return a && u.length === 0 ? O(a, n) : n;
  }, [O]);
  const S = {}, $ = (e, n, a) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], m = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (u.length && !u.includes(m) && !(m === "integer" && u.includes("number"))) return a + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return a + "." + r + " is required.";
      for (const [r, o] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const q = $(e[r], o, a + "." + r);
        if (q) return q;
      }
    }
    if (Array.isArray(e) && n.items) for (let r = 0; r < e.length; r++) {
      const o = $(e[r], n.items, a + "[" + r + "]");
      if (o) return o;
    }
    return "";
  };
  return l(async (e, n, a = !1) => {
    const u = S[e];
    if (!u) throw new Error("Module output '" + e + "' is not declared.");
    const m = $(n, u, "output." + e);
    if (m) throw new Error(m);
    const r = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof r != "function") return n;
    const o = r(e, n, { moduleId: t.moduleId, awaitHandlers: a });
    return a ? await o : n;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]), /* @__PURE__ */ j("div", { ref: f, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ c(g, { id: "feature-three", title: "Production ready", description: "Publish responsive modules and applications with confidence.", icon: "✓" }),
    /* @__PURE__ */ c(E, { id: "landing-footer", theme: "dark" }),
    /* @__PURE__ */ c(k, { id: "landing-hero", theme: "light" }),
    /* @__PURE__ */ c(g, { id: "feature-one", icon: "✦", title: "Reusable building blocks", description: "Compose polished experiences quickly." }),
    /* @__PURE__ */ c(g, { id: "feature-two", icon: "◫", title: "Visual development", description: "Build complete applications without repetitive boilerplate." }),
    /* @__PURE__ */ c(A, { id: "landing-navbar", brand: "Rudra" })
  ] });
}
export {
  N as default
};
