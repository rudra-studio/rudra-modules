import { jsxs as x, jsx as q } from "react/jsx-runtime";
import { useState as b, useEffect as S, useRef as k, useCallback as f } from "react";
import { WelcomeCard as _ } from "@rudra-studio/local-agent-smoke-ui-ux-ux";
function v(e) {
  const a = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || a.applicationState, e.pageState || a.pageState, e.pageData || a.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? a?.$route ?? a?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? a?.$params ?? a?.routeParams ?? a?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? a?.$query ?? a?.queryParams ?? a?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? a?.$auth ?? a?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? a?.$config ?? a?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? a?.$env ?? a?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? a?.$locale ?? a?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? a?.$translations ?? a?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? a?.$i18n ?? a?.i18n;
  const m = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, O = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [M, P] = b(() => m ?? O());
  S(() => {
    m != null && P(m);
  }, [m]), S(() => {
    if (m != null || typeof document > "u") return;
    const t = document.documentElement, n = (u) => P(u?.detail?.theme ?? O()), r = new MutationObserver(n);
    return r.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      r.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [m]);
  const s = k(null), [y, g] = b("lg");
  S(() => {
    if (!s.current) return;
    const t = new ResizeObserver((n) => {
      for (let r of n) {
        const u = r.contentRect.width;
        u < 768 ? g("sm") : u < 1024 ? g("md") : g("lg");
      }
    });
    return t.observe(s.current), () => t.disconnect();
  }, []), f((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = y === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : y === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [y]), e.homePage !== void 0 ? e.homePage : e.data?.homePage !== void 0 && e.data.homePage;
  const [A, C] = b(() => structuredClone({ message: "The generated Module is ready for verification.", status: "ready", title: "Local Agent Build" })), $ = { welcomeCardState: A }, h = f((t, n) => {
    if (t === "welcomeCardState") {
      const r = typeof n == "function" ? n($.welcomeCardState) : n;
      return $.welcomeCardState = r, C(r), r;
    } else
      return n;
  }, [$]);
  f((t, n) => {
    const [r, ...u] = String(t || "").split(".");
    if (!r) return n;
    if (u.length === 0) return h(r, n);
    const c = (i) => {
      const o = Array.isArray(i) ? [...i] : { ...i || {} };
      let d = o;
      return u.forEach((l, E) => {
        E === u.length - 1 ? d[l] = n : (d[l] = Array.isArray(d[l]) ? [...d[l]] : { ...d[l] || {} }, d = d[l]);
      }), o;
    };
    return r === "welcomeCardState" && h("welcomeCardState", c), n;
  }, [h]);
  const j = {}, w = (t, n, r) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], c = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (u.length && !u.includes(c) && !(c === "integer" && u.includes("number"))) return r + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((i) => JSON.stringify(i) === JSON.stringify(t))) return r + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const i of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, i)) return r + "." + i + " is required.";
      for (const [i, o] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, i)) {
        const d = w(t[i], o, r + "." + i);
        if (d) return d;
      }
    }
    if (Array.isArray(t) && n.items) for (let i = 0; i < t.length; i++) {
      const o = w(t[i], n.items, r + "[" + i + "]");
      if (o) return o;
    }
    return "";
  };
  return f(async (t, n, r = !1) => {
    const u = j[t];
    if (!u) throw new Error("Module output '" + t + "' is not declared.");
    const c = w(n, u, "output." + t);
    if (c) throw new Error(c);
    const i = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof i != "function") return n;
    const o = i(t, n, { moduleId: e.moduleId, awaitHandlers: r });
    return r ? await o : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ x("div", { ref: s, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ q("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/local-agent-smoke-ui-ux-ux@1.0.0/components/WelcomeCard/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ q(_, { id: "container" })
  ] });
}
export {
  v as default
};
