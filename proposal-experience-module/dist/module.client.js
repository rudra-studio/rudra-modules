import { jsxs as A, jsx as _, Fragment as D } from "react/jsx-runtime";
import { useState as g, useEffect as h, useRef as V, useCallback as v } from "react";
import { ProposalExperience as Q } from "@rudra-studio/marry-me-proposal";
function B(e) {
  const i = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || i.applicationState, e.pageState || i.pageState, e.pageData || i.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? i?.$route ?? i?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? i?.$params ?? i?.routeParams ?? i?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? i?.$query ?? i?.queryParams ?? i?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? i?.$auth ?? i?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? i?.$config ?? i?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? i?.$env ?? i?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? i?.$locale ?? i?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? i?.$translations ?? i?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? i?.$i18n ?? i?.i18n;
  const m = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, S = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [W, P] = g(() => m ?? S());
  h(() => {
    m != null && P(m);
  }, [m]), h(() => {
    if (m != null || typeof document > "u") return;
    const t = document.documentElement, n = (o) => P(o?.detail?.theme ?? S()), r = new MutationObserver(n);
    return r.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      r.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [m]);
  const $ = V(null), [N, b] = g("lg");
  h(() => {
    if (!$.current) return;
    const t = new ResizeObserver((n) => {
      for (let r of n) {
        const o = r.contentRect.width;
        o < 768 ? b("sm") : o < 1024 ? b("md") : b("lg");
      }
    });
    return t.observe($.current), () => t.disconnect();
  }, []);
  const I = v((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = N === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : N === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [N]), O = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.partnerName !== void 0 ? e.partnerName : e.data?.partnerName !== void 0 && e.data.partnerName, e.senderName !== void 0 ? e.senderName : e.data?.senderName !== void 0 && e.data.senderName, e.youtubeVideoId !== void 0 ? e.youtubeVideoId : e.data?.youtubeVideoId !== void 0 && e.data.youtubeVideoId, e.defaultLanguage !== void 0 ? e.defaultLanguage : e.data?.defaultLanguage !== void 0 && e.data.defaultLanguage;
  const [q, k] = g(() => structuredClone("Ashika")), [E, x] = g(() => structuredClone("Sivasankar")), [j, L] = g(() => structuredClone("8T7WQrcyE9s")), l = { resolvedPartnerName: q, resolvedSenderName: E, resolvedVideoId: j }, f = v((t, n) => {
    switch (t) {
      case "resolvedPartnerName": {
        const r = typeof n == "function" ? n(l.resolvedPartnerName) : n;
        return l.resolvedPartnerName = r, k(r), r;
      }
      case "resolvedSenderName": {
        const r = typeof n == "function" ? n(l.resolvedSenderName) : n;
        return l.resolvedSenderName = r, x(r), r;
      }
      case "resolvedVideoId": {
        const r = typeof n == "function" ? n(l.resolvedVideoId) : n;
        return l.resolvedVideoId = r, L(r), r;
      }
      default:
        return n;
    }
  }, [l]);
  v((t, n) => {
    const [r, ...o] = String(t || "").split(".");
    if (!r) return n;
    if (o.length === 0) return f(r, n);
    const d = (a) => {
      const c = Array.isArray(a) ? [...a] : { ...a || {} };
      let u = c;
      return o.forEach((s, R) => {
        R === o.length - 1 ? u[s] = n : (u[s] = Array.isArray(u[s]) ? [...u[s]] : { ...u[s] || {} }, u = u[s]);
      }), c;
    };
    switch (r) {
      case "resolvedPartnerName":
        return f("resolvedPartnerName", d), n;
      case "resolvedSenderName":
        return f("resolvedSenderName", d), n;
      case "resolvedVideoId":
        return f("resolvedVideoId", d), n;
      default:
        return n;
    }
  }, [f]);
  const T = { out_on_accept: { properties: { acceptedAt: { type: "string" }, partnerName: { type: "string" }, senderName: { type: "string" } }, type: "object" } }, w = (t, n, r) => {
    if (!n || typeof n != "object") return "";
    const o = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], d = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (o.length && !o.includes(d) && !(d === "integer" && o.includes("number"))) return r + " must be " + o.join(" or ") + ".";
    if (n.enum && !n.enum.some((a) => JSON.stringify(a) === JSON.stringify(t))) return r + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const a of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, a)) return r + "." + a + " is required.";
      for (const [a, c] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, a)) {
        const u = w(t[a], c, r + "." + a);
        if (u) return u;
      }
    }
    if (Array.isArray(t) && n.items) for (let a = 0; a < t.length; a++) {
      const c = w(t[a], n.items, r + "[" + a + "]");
      if (c) return c;
    }
    return "";
  };
  v(async (t, n, r = !1) => {
    const o = T[t];
    if (!o) throw new Error("Module output '" + t + "' is not declared.");
    const d = w(n, o, "output." + t);
    if (d) throw new Error(d);
    const a = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof a != "function") return n;
    const c = a(t, n, { moduleId: e.moduleId, awaitHandlers: r });
    return r ? await c : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]);
  async function C(t = {}) {
    (t || {}).event, await (async () => {
      const r = typeof window < "u" ? window.location.search : "", o = new URLSearchParams(r), d = (o.get("partnerName") || "").trim() || "Ashika", a = (o.get("senderName") || "").trim() || "Sivasankar", c = (o.get("videoId") || o.get("youtubeVideoId") || "").trim() || "8T7WQrcyE9";
      return { partnerName: d, senderName: a, youtubeVideoId: c };
    })(), f("", null);
  }
  const y = V(/* @__PURE__ */ new Map()), M = v((t, n, r, o) => {
    const d = y.current.get(t);
    if (n === "exhaust" && d?.promise) return d.promise;
    n === "takeLatest" && d?.controller?.abort();
    const a = new AbortController(), c = () => Promise.resolve().then(() => r(a.signal)), u = n === "queue" && d?.promise ? d.promise.catch(() => {
    }).then(c) : c();
    return y.current.set(t, { controller: a, promise: u }), u.catch((s) => {
      s?.name !== "AbortError" && console.error(o, s);
    }).finally(() => {
      y.current.get(t)?.promise === u && y.current.delete(t);
    }), u;
  }, []);
  return h(() => () => {
    for (const t of y.current.values()) t.controller?.abort();
    y.current.clear();
  }, []), h(() => {
    M("lc_mount_query_overridesfn_resolve_query_overrides", "takeLatest", (t) => C({}), "Module mount lifecycle failed:");
  }, []), /* @__PURE__ */ A("div", { ref: $, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ _("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/marry-me-proposal@1.2.0/components/ProposalExperience/styles.css", precedence: "rudra-library" }),
    O(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ A(D, { children: [
      "      ",
      /* @__PURE__ */ _(Q, { id: "el_proposal_experience", onAccept: { kind: "action", value: "console.log('Ashika said YES!')" }, senderName: { kind: "binding", path: "resolvedSenderName", source: "localState" }, partnerName: { kind: "binding", path: "resolvedPartnerName", source: "localState" }, youtubeVideoId: { kind: "binding", path: "resolvedVideoId", source: "localState" }, defaultLanguage: { kind: "static", value: "ml" } })
    ] })
  ] });
}
export {
  B as default
};
