import { jsxs as y, jsx as l, Fragment as E } from "react/jsx-runtime";
import { useState as S, useEffect as O, useRef as A, useCallback as f } from "react";
import { SmileyyfyNavbar as N, WeddingInviteBuilder as x, RsvpParticipantTracker as I } from "@rudra-studio/smileyyfy-ui";
function W(e) {
  const i = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || i.applicationState, e.pageState || i.pageState, e.pageData || i.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? i?.$route ?? i?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? i?.$params ?? i?.routeParams ?? i?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? i?.$query ?? i?.queryParams ?? i?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? i?.$auth ?? i?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? i?.$config ?? i?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? i?.$env ?? i?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? i?.$locale ?? i?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? i?.$translations ?? i?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? i?.$i18n ?? i?.i18n;
  const o = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, P = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [D, j] = S(() => o ?? P());
  O(() => {
    o != null && j(o);
  }, [o]), O(() => {
    if (o != null || typeof document > "u") return;
    const t = document.documentElement, n = (d) => j(d?.detail?.theme ?? P()), a = new MutationObserver(n);
    return a.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [o]);
  const h = A(null), [g, b] = S("lg");
  O(() => {
    if (!h.current) return;
    const t = new ResizeObserver((n) => {
      for (let a of n) {
        const d = a.contentRect.width;
        d < 768 ? b("sm") : d < 1024 ? b("md") : b("lg");
      }
    });
    return t.observe(h.current), () => t.disconnect();
  }, []);
  const v = f((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = g === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : g === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [g]), $ = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.enableRsvpTracking !== void 0 ? e.enableRsvpTracking : e.data?.enableRsvpTracking !== void 0 && e.data.enableRsvpTracking, e.themeMode !== void 0 ? e.themeMode : e.data?.themeMode !== void 0 && e.data.themeMode, e.eventType !== void 0 ? e.eventType : e.data?.eventType !== void 0 && e.data.eventType, e.hostNames !== void 0 ? e.hostNames : e.data?.hostNames !== void 0 && e.data.hostNames;
  const [R, _] = S(() => structuredClone(!0)), k = { rsvpEnabled: R }, w = f((t, n) => {
    if (t === "rsvpEnabled") {
      const a = typeof n == "function" ? n(k.rsvpEnabled) : n;
      return k.rsvpEnabled = a, _(a), a;
    } else
      return n;
  }, [k]);
  f((t, n) => {
    const [a, ...d] = String(t || "").split(".");
    if (!a) return n;
    if (d.length === 0) return w(a, n);
    const m = (r) => {
      const c = Array.isArray(r) ? [...r] : { ...r || {} };
      let u = c;
      return d.forEach((s, q) => {
        q === d.length - 1 ? u[s] = n : (u[s] = Array.isArray(u[s]) ? [...u[s]] : { ...u[s] || {} }, u = u[s]);
      }), c;
    };
    return a === "rsvpEnabled" && w("rsvpEnabled", m), n;
  }, [w]);
  const M = { out_inv_pub: { properties: { invite: { type: "object" } }, type: "object" }, out_inv_rsvp: { properties: { guest: { type: "object" } }, type: "object" } }, T = (t, n, a) => {
    if (!n || typeof n != "object") return "";
    const d = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], m = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (d.length && !d.includes(m) && !(m === "integer" && d.includes("number"))) return a + " must be " + d.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(t))) return a + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, r)) return a + "." + r + " is required.";
      for (const [r, c] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, r)) {
        const u = T(t[r], c, a + "." + r);
        if (u) return u;
      }
    }
    if (Array.isArray(t) && n.items) for (let r = 0; r < t.length; r++) {
      const c = T(t[r], n.items, a + "[" + r + "]");
      if (c) return c;
    }
    return "";
  };
  return f(async (t, n, a = !1) => {
    const d = M[t];
    if (!d) throw new Error("Module output '" + t + "' is not declared.");
    const m = T(n, d, "output." + t);
    if (m) throw new Error(m);
    const r = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof r != "function") return n;
    const c = r(t, n, { moduleId: e.moduleId, awaitHandlers: a });
    return a ? await c : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ y("div", { ref: h, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/RsvpParticipantTracker/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/SmileyyfyNavbar/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/WeddingInviteBuilder/styles.css", precedence: "rudra-library" }),
    $(v({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(E, { children: [
      "      ",
      /* @__PURE__ */ l(N, { id: "ui_inv_nav", activeTab: { kind: "static", value: "invites" }, brandName: { kind: "static", value: "Smileyyfy" }, themeMode: { kind: "binding", path: "themeMode", source: "input" }, tagline: { kind: "static", value: "Wedding & Event Invite Studio" } })
    ] }),
    $(v({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(E, { children: [
      "      ",
      /* @__PURE__ */ l(x, { id: "ui_inv_builder", themeMode: { kind: "binding", path: "themeMode", source: "input" }, onToggleRsvp: { kind: "action", name: "handleToggleRsvp" }, onPublishInvite: { kind: "action", name: "handlePublishInvite" }, defaultEventType: { kind: "binding", path: "eventType", source: "input" }, defaultHostNames: { kind: "binding", path: "hostNames", source: "input" }, enableRsvpTracking: { kind: "binding", path: "enableRsvpTracking", source: "input" } })
    ] }),
    $(v({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(E, { children: [
      "      ",
      /* @__PURE__ */ l(I, { id: "ui_inv_rsvp_tracker", enabled: { kind: "binding", path: "rsvpEnabled", source: "localState" }, themeMode: { kind: "binding", path: "themeMode", source: "input" }, eventLabel: { kind: "static", value: "Guest & Participant RSVP Tracker (Optional)" }, onRsvpSubmit: { kind: "action", name: "handleRsvpSubmit" } })
    ] })
  ] });
}
export {
  W as default
};
