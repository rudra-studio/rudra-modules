import { jsxs as O, jsx as N, Fragment as _ } from "react/jsx-runtime";
import { useState as y, useEffect as w, useRef as k, useCallback as h } from "react";
import { OccasionTemplateGallery as D } from "@rudra-studio/smileyyfy-ui";
function V(e) {
  const i = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || i.applicationState, e.pageState || i.pageState, e.pageData || i.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? i?.$route ?? i?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? i?.$params ?? i?.routeParams ?? i?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? i?.$query ?? i?.queryParams ?? i?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? i?.$auth ?? i?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? i?.$config ?? i?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? i?.$env ?? i?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? i?.$locale ?? i?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? i?.$translations ?? i?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? i?.$i18n ?? i?.i18n;
  const c = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, T = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [U, I] = y(() => c ?? T());
  w(() => {
    c != null && I(c);
  }, [c]), w(() => {
    if (c != null || typeof document > "u") return;
    const t = document.documentElement, n = (u) => I(u?.detail?.theme ?? T()), a = new MutationObserver(n);
    return a.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [c]);
  const g = k(null), [$, b] = y("lg");
  w(() => {
    if (!g.current) return;
    const t = new ResizeObserver((n) => {
      for (let a of n) {
        const u = a.contentRect.width;
        u < 768 ? b("sm") : u < 1024 ? b("md") : b("lg");
      }
    });
    return t.observe(g.current), () => t.disconnect();
  }, []);
  const P = h((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = $ === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : $ === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [$]), S = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.signedInUserName !== void 0 ? e.signedInUserName : e.data?.signedInUserName !== void 0 && e.data.signedInUserName, e.signedInUserEmail !== void 0 ? e.signedInUserEmail : e.data?.signedInUserEmail !== void 0 && e.data.signedInUserEmail, e.heroTitle !== void 0 ? e.heroTitle : e.data?.heroTitle !== void 0 && e.data.heroTitle, e.heroDescription !== void 0 ? e.heroDescription : e.data?.heroDescription !== void 0 && e.data.heroDescription, e.themeMode !== void 0 ? e.themeMode : e.data?.themeMode !== void 0 && e.data.themeMode;
  const [q, A] = y(() => structuredClone("hub")), [E, j] = y(() => structuredClone("overview")), l = { activeTab: q, activeNavId: E }, f = h((t, n) => {
    switch (t) {
      case "activeTab": {
        const a = typeof n == "function" ? n(l.activeTab) : n;
        return l.activeTab = a, A(a), a;
      }
      case "activeNavId": {
        const a = typeof n == "function" ? n(l.activeNavId) : n;
        return l.activeNavId = a, j(a), a;
      }
      default:
        return n;
    }
  }, [l]);
  h((t, n) => {
    const [a, ...u] = String(t || "").split(".");
    if (!a) return n;
    if (u.length === 0) return f(a, n);
    const m = (r) => {
      const o = Array.isArray(r) ? [...r] : { ...r || {} };
      let d = o;
      return u.forEach((s, x) => {
        x === u.length - 1 ? d[s] = n : (d[s] = Array.isArray(d[s]) ? [...d[s]] : { ...d[s] || {} }, d = d[s]);
      }), o;
    };
    switch (a) {
      case "activeTab":
        return f("activeTab", m), n;
      case "activeNavId":
        return f("activeNavId", m), n;
      default:
        return n;
    }
  }, [f]);
  const M = { out_navigate: { properties: { target: { type: "string" } }, type: "object" } }, v = (t, n, a) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], m = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (u.length && !u.includes(m) && !(m === "integer" && u.includes("number"))) return a + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(t))) return a + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, r)) return a + "." + r + " is required.";
      for (const [r, o] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, r)) {
        const d = v(t[r], o, a + "." + r);
        if (d) return d;
      }
    }
    if (Array.isArray(t) && n.items) for (let r = 0; r < t.length; r++) {
      const o = v(t[r], n.items, a + "[" + r + "]");
      if (o) return o;
    }
    return "";
  };
  return h(async (t, n, a = !1) => {
    const u = M[t];
    if (!u) throw new Error("Module output '" + t + "' is not declared.");
    const m = v(n, u, "output." + t);
    if (m) throw new Error(m);
    const r = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof r != "function") return n;
    const o = r(t, n, { moduleId: e.moduleId, awaitHandlers: a });
    return a ? await o : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ O("div", { ref: g, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ N("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.4.1/components/OccasionTemplateGallery/styles.css", precedence: "rudra-library" }),
    S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ O(_, { children: [
      "      ",
      /* @__PURE__ */ N(D, { id: "el_core_nav", heading: "Celebration Templates — Invites, Proposals \\u0026 Many More", themeMode: { kind: "binding", path: "inputs.themeMode" }, subheading: "Pick a reusable Smileyyfy experience to customize with your own text, photos, and animations.", onSelectTemplate: { kind: "action", name: "emitSelectTemplate", params: { outputName: "onSelectTemplate" } } })
    ] })
  ] });
}
export {
  V as default
};
