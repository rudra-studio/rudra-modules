import { jsxs as y, jsx as m, Fragment as f } from "react/jsx-runtime";
import { useState as O, useEffect as N, useRef as q, useCallback as b } from "react";
import { SmileyyfyNavbar as E, FloatingHeartsCanvas as x, GoogleSignInButton as C, OccasionTemplateGallery as U } from "@rudra-studio/smileyyfy-ui";
function D(e) {
  const i = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || i.applicationState, e.pageState || i.pageState, e.pageData || i.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? i?.$route ?? i?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? i?.$params ?? i?.routeParams ?? i?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? i?.$query ?? i?.queryParams ?? i?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? i?.$auth ?? i?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? i?.$config ?? i?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? i?.$env ?? i?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? i?.$locale ?? i?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? i?.$translations ?? i?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? i?.$i18n ?? i?.i18n;
  const l = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, I = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [G, M] = O(() => l ?? I());
  N(() => {
    l != null && M(l);
  }, [l]), N(() => {
    if (l != null || typeof document > "u") return;
    const t = document.documentElement, n = (d) => M(d?.detail?.theme ?? I()), a = new MutationObserver(n);
    return a.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [l]);
  const $ = q(null), [v, S] = O("lg");
  N(() => {
    if (!$.current) return;
    const t = new ResizeObserver((n) => {
      for (let a of n) {
        const d = a.contentRect.width;
        d < 768 ? S("sm") : d < 1024 ? S("md") : S("lg");
      }
    });
    return t.observe($.current), () => t.disconnect();
  }, []);
  const g = b((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = v === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : v === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [v]), h = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.themeMode !== void 0 ? e.themeMode : e.data?.themeMode !== void 0 && e.data.themeMode, e.signedInUserName !== void 0 ? e.signedInUserName : e.data?.signedInUserName !== void 0 && e.data.signedInUserName, e.signedInUserEmail !== void 0 ? e.signedInUserEmail : e.data?.signedInUserEmail !== void 0 && e.data.signedInUserEmail, e.heroTitle !== void 0 ? e.heroTitle : e.data?.heroTitle !== void 0 && e.data.heroTitle, e.heroSubtitle !== void 0 ? e.heroSubtitle : e.data?.heroSubtitle !== void 0 && e.data.heroSubtitle;
  const [P, _] = O(() => structuredClone("hub")), T = { activeTab: P }, w = b((t, n) => {
    if (t === "activeTab") {
      const a = typeof n == "function" ? n(T.activeTab) : n;
      return T.activeTab = a, _(a), a;
    } else
      return n;
  }, [T]);
  b((t, n) => {
    const [a, ...d] = String(t || "").split(".");
    if (!a) return n;
    if (d.length === 0) return w(a, n);
    const s = (r) => {
      const o = Array.isArray(r) ? [...r] : { ...r || {} };
      let u = o;
      return d.forEach((c, A) => {
        A === d.length - 1 ? u[c] = n : (u[c] = Array.isArray(u[c]) ? [...u[c]] : { ...u[c] || {} }, u = u[c]);
      }), o;
    };
    return a === "activeTab" && w("activeTab", s), n;
  }, [w]);
  const j = { out_sign_out: { properties: {}, type: "object" } }, k = (t, n, a) => {
    if (!n || typeof n != "object") return "";
    const d = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], s = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (d.length && !d.includes(s) && !(s === "integer" && d.includes("number"))) return a + " must be " + d.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(t))) return a + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, r)) return a + "." + r + " is required.";
      for (const [r, o] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, r)) {
        const u = k(t[r], o, a + "." + r);
        if (u) return u;
      }
    }
    if (Array.isArray(t) && n.items) for (let r = 0; r < t.length; r++) {
      const o = k(t[r], n.items, a + "[" + r + "]");
      if (o) return o;
    }
    return "";
  };
  return b(async (t, n, a = !1) => {
    const d = j[t];
    if (!d) throw new Error("Module output '" + t + "' is not declared.");
    const s = k(n, d, "output." + t);
    if (s) throw new Error(s);
    const r = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof r != "function") return n;
    const o = r(t, n, { moduleId: e.moduleId, awaitHandlers: a });
    return a ? await o : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ y("div", { ref: $, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ m("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.4.1/components/FloatingHeartsCanvas/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ m("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.4.1/components/GoogleSignInButton/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ m("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.4.1/components/OccasionTemplateGallery/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ m("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.4.1/components/SmileyyfyNavbar/styles.css", precedence: "rudra-library" }),
    h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
      "      ",
      /* @__PURE__ */ m(E, { id: "el_landing_navbar", tagline: { kind: "static", value: "Invites, Proposals & Joyful Moments" }, activeTab: { kind: "binding", path: "localState.activeTab" }, brandName: { kind: "static", value: "Smileyyfy" }, themeMode: { kind: "binding", path: "inputs.themeMode" }, onNavigate: { kind: "action", name: "setActiveTabAndEmit", params: { outputName: "onNavigate" } }, onToggleTheme: { kind: "action", name: "emitThemeToggle", params: { outputName: "onToggleTheme" } } })
    ] }),
    h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
      "      ",
      /* @__PURE__ */ m(x, { id: "el_landing_hero", bannerSubtitle: { kind: "binding", path: "inputs.heroSubtitle" }, active: !0, intensity: "burst", themeMode: { kind: "binding", path: "inputs.themeMode" }, effectType: "hearts", bannerTitle: { kind: "binding", path: "inputs.heroTitle" } })
    ] }),
    h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
      "      ",
      /* @__PURE__ */ m(C, { id: "el_landing_signin", loadingLabel: "Signing in...", styleVariant: "blush", signedInLabel: "Signed in", size: "lg", label: "Continue with Google", loading: !1, onSignIn: { kind: "action", name: "emitGoogleSignIn", params: { outputName: "onGoogleSignIn" } }, fullWidth: !1, disabled: !1, userName: { kind: "binding", path: "inputs.signedInUserName" }, onSignOut: { kind: "action", name: "emitSignOut", params: { outputName: "onSignOut" } }, themeMode: { kind: "binding", path: "inputs.themeMode" } })
    ] }),
    h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
      "      ",
      /* @__PURE__ */ m(U, { id: "el_landing_gallery", heading: "Celebration Templates — Invites, Proposals \\u0026 Many More", themeMode: { kind: "binding", path: "inputs.themeMode" }, subheading: "Pick a reusable Smileyyfy experience to customize with your own text, photos, and animations.", onSelectTemplate: { kind: "action", name: "emitSelectTemplate", params: { outputName: "onSelectTemplate" } } })
    ] })
  ] });
}
export {
  D as default
};
