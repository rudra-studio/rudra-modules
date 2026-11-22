import { jsxs as g, jsx as c, Fragment as S } from "react/jsx-runtime";
import { useState as k, useEffect as $, useRef as j, useCallback as l } from "react";
import { SmileyyfyNavbar as q, LoveProposalStage as A } from "@rudra-studio/smileyyfy-ui";
function D(e) {
  const a = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || a.applicationState, e.pageState || a.pageState, e.pageData || a.pageData, {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? a?.$route ?? a?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? a?.$params ?? a?.routeParams ?? a?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? a?.$query ?? a?.queryParams ?? a?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? a?.$auth ?? a?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? a?.$config ?? a?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? a?.$env ?? a?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? a?.$locale ?? a?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? a?.$translations ?? a?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? a?.$i18n ?? a?.i18n;
  const d = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, b = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [T, v] = k(() => d ?? b());
  $(() => {
    d != null && v(d);
  }, [d]), $(() => {
    if (d != null || typeof document > "u") return;
    const t = document.documentElement, n = (u) => v(u?.detail?.theme ?? b()), i = new MutationObserver(n);
    return i.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      i.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [d]);
  const s = j(null), [y, f] = k("lg");
  $(() => {
    if (!s.current) return;
    const t = new ResizeObserver((n) => {
      for (let i of n) {
        const u = i.contentRect.width;
        u < 768 ? f("sm") : u < 1024 ? f("md") : f("lg");
      }
    });
    return t.observe(s.current), () => t.disconnect();
  }, []);
  const w = l((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = y === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : y === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [y]), N = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t;
  e.themeMode !== void 0 ? e.themeMode : e.data?.themeMode !== void 0 && e.data.themeMode, e.romanticTheme !== void 0 ? e.romanticTheme : e.data?.romanticTheme !== void 0 && e.data.romanticTheme, e.recipientName !== void 0 ? e.recipientName : e.data?.recipientName !== void 0 && e.data.recipientName, e.senderName !== void 0 ? e.senderName : e.data?.senderName !== void 0 && e.data.senderName;
  const O = l((t, n) => n, [{}]);
  l((t, n) => {
    const [i, ...u] = String(t || "").split(".");
    return i && u.length === 0 ? O(i, n) : n;
  }, [O]);
  const M = { out_prop_acc: { properties: { acceptance: { type: "object" } }, type: "object" } }, h = (t, n, i) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], o = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (u.length && !u.includes(o) && !(o === "integer" && u.includes("number"))) return i + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(t))) return i + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, r)) return i + "." + r + " is required.";
      for (const [r, m] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, r)) {
        const P = h(t[r], m, i + "." + r);
        if (P) return P;
      }
    }
    if (Array.isArray(t) && n.items) for (let r = 0; r < t.length; r++) {
      const m = h(t[r], n.items, i + "[" + r + "]");
      if (m) return m;
    }
    return "";
  };
  return l(async (t, n, i = !1) => {
    const u = M[t];
    if (!u) throw new Error("Module output '" + t + "' is not declared.");
    const o = h(n, u, "output." + t);
    if (o) throw new Error(o);
    const r = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof r != "function") return n;
    const m = r(t, n, { moduleId: e.moduleId, awaitHandlers: i });
    return i ? await m : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), /* @__PURE__ */ g("div", { ref: s, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ c("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/LoveProposalStage/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ c("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/smileyyfy-ui@1.1.0/components/SmileyyfyNavbar/styles.css", precedence: "rudra-library" }),
    N(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(S, { children: [
      "      ",
      /* @__PURE__ */ c(q, { id: "ui_prop_nav", themeMode: { kind: "binding", path: "themeMode", source: "input" }, tagline: { kind: "static", value: "Interactive Love Proposal Studio" }, activeTab: { kind: "static", value: "proposal" }, brandName: { kind: "static", value: "Smileyyfy" } })
    ] }),
    N(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(S, { children: [
      "      ",
      /* @__PURE__ */ c(A, { id: "ui_prop_stage", onAccept: { kind: "action", name: "handleAcceptProposal" }, themeMode: { kind: "binding", path: "themeMode", source: "input" }, senderName: { kind: "binding", path: "senderName", source: "input" }, recipientName: { kind: "binding", path: "recipientName", source: "input" }, romanticTheme: { kind: "binding", path: "romanticTheme", source: "input" }, headline: { kind: "static", value: "Will You Marry Me? 💖" } })
    ] })
  ] });
}
export {
  D as default
};
