import { jsxs as h, jsx as l, Fragment as I } from "react/jsx-runtime";
import { useState as k, useEffect as b, useRef as q, useCallback as c } from "react";
import { SmileyyfyNavbar as j, GoogleSignInButton as M } from "@rudra-studio/smileyyfy-ui";
function L(e) {
  const a = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || a.applicationState, e.pageState || a.pageState, e.pageData || a.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? a?.$route ?? a?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? a?.$params ?? a?.routeParams ?? a?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? a?.$query ?? a?.queryParams ?? a?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? a?.$auth ?? a?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? a?.$config ?? a?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? a?.$env ?? a?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? a?.$locale ?? a?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? a?.$translations ?? a?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? a?.$i18n ?? a?.i18n;
  const u = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, $ = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [P, v] = k(() => u ?? $());
  b(() => {
    u != null && v(u);
  }, [u]), b(() => {
    if (u != null || typeof document > "u") return;
    const t = document.documentElement, n = (d) => v(d?.detail?.theme ?? $()), i = new MutationObserver(n);
    return i.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      i.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [u]);
  const s = q(null), [g, f] = k("lg");
  b(() => {
    if (!s.current) return;
    const t = new ResizeObserver((n) => {
      for (let i of n) {
        const d = i.contentRect.width;
        d < 768 ? f("sm") : d < 1024 ? f("md") : f("lg");
      }
    });
    return t.observe(s.current), () => t.disconnect();
  }, []);
  const w = c((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = g === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : g === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [g]), N = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.activeTab !== void 0 ? e.activeTab : e.data?.activeTab !== void 0 && e.data.activeTab, e.brandName !== void 0 ? e.brandName : e.data?.brandName !== void 0 && e.data.brandName, e.tagline !== void 0 ? e.tagline : e.data?.tagline !== void 0 && e.data.tagline, e.signedInUserName !== void 0 ? e.signedInUserName : e.data?.signedInUserName !== void 0 && e.data.signedInUserName, e.signedInUserEmail !== void 0 ? e.signedInUserEmail : e.data?.signedInUserEmail !== void 0 && e.data.signedInUserEmail, e.themeMode !== void 0 ? e.themeMode : e.data?.themeMode !== void 0 && e.data.themeMode;
  const S = c((t, n) => n, [{}]);
  c((t, n) => {
    const [i, ...d] = String(t || "").split(".");
    return i && d.length === 0 ? S(i, n) : n;
  }, [S]);
  const T = { out_hdr_signout: { properties: {}, type: "object" } }, y = (t, n, i) => {
    if (!n || typeof n != "object") return "";
    const d = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], o = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (d.length && !d.includes(o) && !(o === "integer" && d.includes("number"))) return i + " must be " + d.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(t))) return i + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, r)) return i + "." + r + " is required.";
      for (const [r, m] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, r)) {
        const O = y(t[r], m, i + "." + r);
        if (O) return O;
      }
    }
    if (Array.isArray(t) && n.items) for (let r = 0; r < t.length; r++) {
      const m = y(t[r], n.items, i + "[" + r + "]");
      if (m) return m;
    }
    return "";
  };
  return c(async (t, n, i = !1) => {
    const d = T[t];
    if (!d) throw new Error("Module output '" + t + "' is not declared.");
    const o = y(n, d, "output." + t);
    if (o) throw new Error(o);
    const r = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof r != "function") return n;
    const m = r(t, n, { moduleId: e.moduleId, awaitHandlers: i });
    return i ? await m : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ h("div", { ref: s, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.4.1/components/GoogleSignInButton/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.4.1/components/SmileyyfyNavbar/styles.css", precedence: "rudra-library" }),
    N(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(I, { children: [
      "      ",
      /* @__PURE__ */ l(j, { id: "el_hdr_navbar", tagline: { kind: "binding", path: "inputs.tagline" }, activeTab: { kind: "binding", path: "inputs.activeTab" }, brandName: { kind: "binding", path: "inputs.brandName" }, themeMode: { kind: "binding", path: "inputs.themeMode" }, onNavigate: { kind: "action", name: "emitHdrNavigate", params: { outputName: "onNavigate" } }, onToggleTheme: { kind: "action", name: "emitHdrThemeToggle", params: { outputName: "onToggleTheme" } } })
    ] }),
    N(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(I, { children: [
      "      ",
      /* @__PURE__ */ l(M, { id: "el_hdr_signin_btn", themeMode: { kind: "binding", path: "inputs.themeMode" }, styleVariant: "blush", size: "sm", label: "Continue with Google", disabled: !1, onSignIn: { kind: "action", name: "emitHdrSignIn", params: { outputName: "onGoogleSignIn" } }, userName: { kind: "binding", path: "inputs.signedInUserName" }, fullWidth: !1, loadingLabel: "Signing in...", signedInLabel: "Signed in", loading: !1, onSignOut: { kind: "action", name: "emitHdrSignOut", params: { outputName: "onSignOut" } } })
    ] })
  ] });
}
export {
  L as default
};
