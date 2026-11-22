import { jsxs as h, jsx as c, Fragment as b } from "react/jsx-runtime";
import { useState as w, useEffect as T, useRef as q, useCallback as $ } from "react";
import { CoreNavbar as D, FeatureCardGrid as L, HeroBanner as x, StepWalkthroughGrid as R } from "@rudra-studio/rudra-core-ui";
function F(e) {
  const i = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || i.applicationState, e.pageState || i.pageState, e.pageData || i.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? i?.$route ?? i?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? i?.$params ?? i?.routeParams ?? i?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? i?.$query ?? i?.queryParams ?? i?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? i?.$auth ?? i?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? i?.$config ?? i?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? i?.$env ?? i?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? i?.$locale ?? i?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? i?.$translations ?? i?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? i?.$i18n ?? i?.i18n;
  const u = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, k = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [W, A] = w(() => u ?? k());
  T(() => {
    u != null && A(u);
  }, [u]), T(() => {
    if (u != null || typeof document > "u") return;
    const t = document.documentElement, n = (o) => A(o?.detail?.theme ?? k()), a = new MutationObserver(n);
    return a.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [u]);
  const S = q(null), [I, P] = w("lg");
  T(() => {
    if (!S.current) return;
    const t = new ResizeObserver((n) => {
      for (let a of n) {
        const o = a.contentRect.width;
        o < 768 ? P("sm") : o < 1024 ? P("md") : P("lg");
      }
    });
    return t.observe(S.current), () => t.disconnect();
  }, []);
  const y = $((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = I === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : I === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [I]), f = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.signedInUserEmail !== void 0 ? e.signedInUserEmail : e.data?.signedInUserEmail !== void 0 && e.data.signedInUserEmail, e.heroDescription !== void 0 ? e.heroDescription : e.data?.heroDescription !== void 0 && e.data.heroDescription, e.featureCards !== void 0 ? e.featureCards : e.data?.featureCards !== void 0 && e.data.featureCards, e.signedInUserName !== void 0 ? e.signedInUserName : e.data?.signedInUserName !== void 0 && e.data.signedInUserName, e.heroTitle !== void 0 ? e.heroTitle : e.data?.heroTitle !== void 0 && e.data.heroTitle, e.walkthroughSteps !== void 0 ? e.walkthroughSteps : e.data?.walkthroughSteps !== void 0 && e.data.walkthroughSteps, e.themeMode !== void 0 ? e.themeMode : e.data?.themeMode !== void 0 && e.data.themeMode;
  const [O, N] = w(() => structuredClone("overview")), [j, E] = w(() => structuredClone("hub")), g = { activeNavId: O, activeTab: j }, v = $((t, n) => {
    switch (t) {
      case "activeNavId": {
        const a = typeof n == "function" ? n(g.activeNavId) : n;
        return g.activeNavId = a, N(a), a;
      }
      case "activeTab": {
        const a = typeof n == "function" ? n(g.activeTab) : n;
        return g.activeTab = a, E(a), a;
      }
      default:
        return n;
    }
  }, [g]);
  $((t, n) => {
    const [a, ...o] = String(t || "").split(".");
    if (!a) return n;
    if (o.length === 0) return v(a, n);
    const l = (r) => {
      const s = Array.isArray(r) ? [...r] : { ...r || {} };
      let d = s;
      return o.forEach((m, _) => {
        _ === o.length - 1 ? d[m] = n : (d[m] = Array.isArray(d[m]) ? [...d[m]] : { ...d[m] || {} }, d = d[m]);
      }), s;
    };
    switch (a) {
      case "activeNavId":
        return v("activeNavId", l), n;
      case "activeTab":
        return v("activeTab", l), n;
      default:
        return n;
    }
  }, [v]);
  const M = { out_navigate: { properties: { target: { type: "string" } }, type: "object" } }, C = (t, n, a) => {
    if (!n || typeof n != "object") return "";
    const o = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], l = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (o.length && !o.includes(l) && !(l === "integer" && o.includes("number"))) return a + " must be " + o.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(t))) return a + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, r)) return a + "." + r + " is required.";
      for (const [r, s] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, r)) {
        const d = C(t[r], s, a + "." + r);
        if (d) return d;
      }
    }
    if (Array.isArray(t) && n.items) for (let r = 0; r < t.length; r++) {
      const s = C(t[r], n.items, a + "[" + r + "]");
      if (s) return s;
    }
    return "";
  };
  return $(async (t, n, a = !1) => {
    const o = M[t];
    if (!o) throw new Error("Module output '" + t + "' is not declared.");
    const l = C(n, o, "output." + t);
    if (l) throw new Error(l);
    const r = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof r != "function") return n;
    const s = r(t, n, { moduleId: e.moduleId, awaitHandlers: a });
    return a ? await s : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ h("div", { ref: S, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ c("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/CoreNavbar/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ c("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/FeatureCardGrid/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ c("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/HeroBanner/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ c("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/StepWalkthroughGrid/styles.css", precedence: "rudra-library" }),
    f(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
      "      ",
      /* @__PURE__ */ c(D, { id: "el_1795351921789_cjrbjpx", tagline: "Invites, Proposals \\u0026 Joyful Moments", navItems: [{ id: "overview", label: "Overview" }, { id: "features", label: "What It Does" }, { id: "templates", label: "Templates" }], brandMark: "😊", brandName: "Smileyyfy", themeMode: "light", activeItemId: "overview", onSelectItem: "fn: (id) =\\u003e console.log('Nav:', id)", onToggleTheme: "fn: (mode) =\\u003e console.log('Theme:', mode)" })
    ] }),
    f(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
      "      ",
      /* @__PURE__ */ c(L, { id: "el_1795351931684_q0nrgzt", kicker: "WHAT SMILEYYFY IS ABOUT", heading: "Everything You Need for Memorable Pages", themeMode: "light", subheading: "Compose modular sections for event invitations, romantic proposals, and milestone celebrations.", onCardAction: "fn: (item) =\\u003e console.log('Card:', item)", items: [{ actionLabel: "Open Invite Studio", badge: "Events", description: "Build shareable celebration pages with countdowns, event details, themes, and optional RSVP tracking.", icon: "💌", id: "invites", title: "Weddings, Birthdays & Invites" }] })
    ] }),
    f(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
      "      ",
      /* @__PURE__ */ c(x, { id: "el_1795351937148_bja38me", title: "Create Wedding Invites, Love Proposals \\u0026 Joyful Websites", themeMode: "light", onSecondaryAction: "fn: () =\\u003e console.log('Secondary CTA')", primaryActionLabel: "Start Building", badge: "✨ Interactive Celebration Studio", layout: "split", description: "Design expressive event invitations with optional RSVP tracking, romantic proposal pages with floating hearts \\u0026 flying buttons, and multilingual celebration pages without coding.", onPrimaryAction: "fn: () =\\u003e console.log('Primary CTA')", secondaryActionLabel: "Browse Templates" })
    ] }),
    f(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
      "      ",
      /* @__PURE__ */ c(R, { id: "el_1795352064212_7rd9cg7", heading: "How It Works", themeMode: "light", steps: [{ description: "Pick a wedding invite, love proposal, birthday celebration, or anniversary layout.", step: "01", title: "Choose a Template or Preset" }] })
    ] })
  ] });
}
export {
  F as default
};
