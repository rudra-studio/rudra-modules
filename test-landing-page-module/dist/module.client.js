import { jsx as O } from "react/jsx-runtime";
import { useState as q, useEffect as $, useRef as S, useCallback as c } from "react";
import { LandingPage as j } from "@rudra-studio/landing-page-lib";
function M(t) {
  const a = t.serverData || t.serverState || {};
  t.sharedState, t.applicationState || a.applicationState, t.pageState || a.pageState, t.pageData || a.pageData, {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  }, t.$route ?? t.route ?? t.data?.$route ?? t.data?.route ?? t.runtime?.data?.$route ?? t.runtime?.route ?? a?.$route ?? a?.route, t.$params ?? t.routeParams ?? t.params ?? t.data?.$params ?? t.data?.routeParams ?? t.data?.params ?? t.runtime?.data?.$params ?? t.runtime?.route?.params ?? t.runtime?.routeParams ?? t.runtime?.params ?? a?.$params ?? a?.routeParams ?? a?.params, t.$query ?? t.queryParams ?? t.query ?? t.data?.$query ?? t.data?.queryParams ?? t.data?.query ?? t.runtime?.data?.$query ?? t.runtime?.route?.query ?? t.runtime?.queryParams ?? t.runtime?.query ?? a?.$query ?? a?.queryParams ?? a?.query, t.$auth ?? t.auth ?? t.data?.$auth ?? t.data?.auth ?? t.runtime?.data?.$auth ?? t.runtime?.authInfo ?? t.runtime?.auth ?? a?.$auth ?? a?.auth, t.$config ?? t.config ?? t.data?.$config ?? t.data?.config ?? t.runtime?.data?.$config ?? t.runtime?.config ?? a?.$config ?? a?.config, t.$env ?? t.env ?? t.data?.$env ?? t.data?.env ?? t.runtime?.data?.$env ?? t.runtime?.env ?? a?.$env ?? a?.env, t.$locale ?? t.locale ?? t.data?.$locale ?? t.data?.locale ?? t.runtime?.data?.$locale ?? t.runtime?.locale ?? a?.$locale ?? a?.locale, t.$translations ?? t.translations ?? t.data?.$translations ?? t.data?.translations ?? t.runtime?.data?.$translations ?? t.runtime?.translations ?? a?.$translations ?? a?.translations, t.$i18n ?? t.i18n ?? t.data?.$i18n ?? t.data?.i18n ?? t.runtime?.data?.$i18n ?? t.runtime?.i18n ?? a?.$i18n ?? a?.i18n;
  const d = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, g = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [E, h] = q(() => d ?? g());
  $(() => {
    d != null && h(d);
  }, [d]), $(() => {
    if (d != null || typeof document > "u") return;
    const e = document.documentElement, n = (u) => h(u?.detail?.theme ?? g()), r = new MutationObserver(n);
    return r.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      r.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [d]);
  const l = S(null), [f, y] = q("lg");
  $(() => {
    if (!l.current) return;
    const e = new ResizeObserver((n) => {
      for (let r of n) {
        const u = r.contentRect.width;
        u < 768 ? y("sm") : u < 1024 ? y("md") : y("lg");
      }
    });
    return e.observe(l.current), () => e.disconnect();
  }, []), c((e) => {
    if (typeof e != "object" || e === null) return e;
    const n = f === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : f === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [f]);
  const w = c((e, n) => n, [{}]);
  c((e, n) => {
    const [r, ...u] = String(e || "").split(".");
    return r && u.length === 0 ? w(r, n) : n;
  }, [w]);
  const P = {}, s = (e, n, r) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], o = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (u.length && !u.includes(o) && !(o === "integer" && u.includes("number"))) return r + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((i) => JSON.stringify(i) === JSON.stringify(e))) return r + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const i of n.required || []) if (!Object.prototype.hasOwnProperty.call(e, i)) return r + "." + i + " is required.";
      for (const [i, m] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(e, i)) {
        const b = s(e[i], m, r + "." + i);
        if (b) return b;
      }
    }
    if (Array.isArray(e) && n.items) for (let i = 0; i < e.length; i++) {
      const m = s(e[i], n.items, r + "[" + i + "]");
      if (m) return m;
    }
    return "";
  };
  return c(async (e, n, r = !1) => {
    const u = P[e];
    if (!u) throw new Error("Module output '" + e + "' is not declared.");
    const o = s(n, u, "output." + e);
    if (o) throw new Error(o);
    const i = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof i != "function") return n;
    const m = i(e, n, { moduleId: t.moduleId, awaitHandlers: r });
    return r ? await m : n;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]), /* @__PURE__ */ O("div", { ref: l, className: "rudra-module-wrapper", children: /* @__PURE__ */ O(j, { id: "landing-page", headline: "From idea to working application.", brand: "Rudra", theme: "{{$theme}}" }) });
}
export {
  M as default
};
