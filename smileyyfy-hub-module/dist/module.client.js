import { jsxs as m, jsx as l, Fragment as v } from "react/jsx-runtime";
import { useState as M, useEffect as w, useRef as j, useCallback as s } from "react";
import { SmileyyfyNavbar as _, FloatingHeartsCanvas as q, OccasionTemplateGallery as A } from "@rudra-studio/smileyyfy-ui";
function R(e) {
  const i = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || i.applicationState, e.pageState || i.pageState, e.pageData || i.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? i?.$route ?? i?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? i?.$params ?? i?.routeParams ?? i?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? i?.$query ?? i?.queryParams ?? i?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? i?.$auth ?? i?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? i?.$config ?? i?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? i?.$env ?? i?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? i?.$locale ?? i?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? i?.$translations ?? i?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? i?.$i18n ?? i?.i18n;
  const d = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, k = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [E, T] = M(() => d ?? k());
  w(() => {
    d != null && T(d);
  }, [d]), w(() => {
    if (d != null || typeof document > "u") return;
    const t = document.documentElement, n = (u) => T(u?.detail?.theme ?? k()), a = new MutationObserver(n);
    return a.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [d]);
  const y = j(null), [f, h] = M("lg");
  w(() => {
    if (!y.current) return;
    const t = new ResizeObserver((n) => {
      for (let a of n) {
        const u = a.contentRect.width;
        u < 768 ? h("sm") : u < 1024 ? h("md") : h("lg");
      }
    });
    return t.observe(y.current), () => t.disconnect();
  }, []);
  const g = s((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = f === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : f === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [f]), b = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.effectType !== void 0 ? e.effectType : e.data?.effectType !== void 0 && e.data.effectType, e.themeMode !== void 0 ? e.themeMode : e.data?.themeMode !== void 0 && e.data.themeMode, e.heroTitle !== void 0 ? e.heroTitle : e.data?.heroTitle !== void 0 && e.data.heroTitle;
  const O = s((t, n) => n, [{}]);
  s((t, n) => {
    const [a, ...u] = String(t || "").split(".");
    return a && u.length === 0 ? O(a, n) : n;
  }, [O]);
  const P = { out_hub_nav: { properties: { tab: { type: "string" } }, type: "object" }, out_hub_tpl: { properties: { template: { type: "object" } }, type: "object" } }, $ = (t, n, a) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], c = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (u.length && !u.includes(c) && !(c === "integer" && u.includes("number"))) return a + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(t))) return a + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, r)) return a + "." + r + " is required.";
      for (const [r, o] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, r)) {
        const S = $(t[r], o, a + "." + r);
        if (S) return S;
      }
    }
    if (Array.isArray(t) && n.items) for (let r = 0; r < t.length; r++) {
      const o = $(t[r], n.items, a + "[" + r + "]");
      if (o) return o;
    }
    return "";
  };
  return s(async (t, n, a = !1) => {
    const u = P[t];
    if (!u) throw new Error("Module output '" + t + "' is not declared.");
    const c = $(n, u, "output." + t);
    if (c) throw new Error(c);
    const r = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof r != "function") return n;
    const o = r(t, n, { moduleId: e.moduleId, awaitHandlers: a });
    return a ? await o : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ m("div", { ref: y, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/FloatingHeartsCanvas/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/OccasionTemplateGallery/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/SmileyyfyNavbar/styles.css", precedence: "rudra-library" }),
    b(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(v, { children: [
      "      ",
      /* @__PURE__ */ l(_, { id: "ui_hub_nav", activeTab: { kind: "static", value: "hub" }, brandName: { kind: "static", value: "Smileyyfy" }, themeMode: { kind: "binding", path: "themeMode", source: "input" }, onNavigate: { kind: "action", name: "handleNavigate" }, tagline: { kind: "static", value: "Invites, Proposals & Joyful Moments" } })
    ] }),
    b(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(v, { children: [
      "      ",
      /* @__PURE__ */ l(q, { id: "ui_hub_hero", active: { kind: "static", value: !0 }, intensity: { kind: "static", value: "festive" }, themeMode: { kind: "binding", path: "themeMode", source: "input" }, effectType: { kind: "binding", path: "effectType", source: "input" }, bannerTitle: { kind: "binding", path: "heroTitle", source: "input" }, bannerSubtitle: { kind: "static", value: "Design shareable wedding & event invites with optional RSVP tracking, romantic love proposal sites with flying buttons & floating hearts, and many more celebration templates." } })
    ] }),
    b(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(v, { children: [
      "      ",
      /* @__PURE__ */ l(A, { id: "ui_hub_gallery", heading: { kind: "static", value: "Celebration Templates — Invites, Proposals & Many More" }, themeMode: { kind: "binding", path: "themeMode", source: "input" }, subheading: { kind: "static", value: "Pick a reusable Smileyyfy experience to customize with your own text, photos, and animations." }, onSelectTemplate: { kind: "action", name: "handleSelectTemplate" } })
    ] })
  ] });
}
export {
  R as default
};
