import { jsx as f, jsxs as l, Fragment as m } from "react/jsx-runtime";
import U, { useState as V, useEffect as D, useRef as Y, useCallback as z } from "react";
import { OrganizationLogo as ee, ActivityItem as H, ChartCard as te } from "@rudra-studio/leadflow-ui";
import { Typography as k, Button as ae } from "@rudra-studio/rudra-core";
import { Box as S } from "@rudra-studio/rudra-layout";
import * as W from "lucide-react";
const Q = (e) => String(e || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), ie = (e) => {
  let r = e;
  for (; r && typeof r == "object" && "type" in r && "value" in r; )
    r = r.value;
  return r;
};
function x({ icon: e, size: r, color: F, strokeWidth: b, className: C = "", style: M, ...O }) {
  const o = ie(e), [A, N] = V(null), a = o && typeof o == "object" ? JSON.stringify(o) : String(o || "");
  D(() => {
    const $ = new AbortController();
    let L = "", v = "";
    if (N(null), typeof o == "string") {
      const h = o.trim();
      if (W[h]) return () => $.abort();
      h.startsWith("<svg") ? v = h : (/^https?:\/\//.test(h) || h.startsWith("/") || h.startsWith("data:image/svg")) && (L = h);
    } else o && typeof o == "object" && (o.iconType === "svg" && o.svgContent ? v = o.svgContent : o.iconType === "url" && o.url && (L = o.url));
    return v ? N(Q(v)) : L && fetch(L, { signal: $.signal }).then((h) => {
      if (!h.ok) throw new Error("Icon request failed (" + h.status + ")");
      return h.text();
    }).then((h) => {
      h.trim().startsWith("<svg") && N(Q(h));
    }).catch((h) => {
      h.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", h);
    }), () => $.abort();
  }, [a]);
  const d = o && typeof o == "object" ? o.props || {} : {}, _ = { ...d };
  delete _.size, delete _.color, delete _.strokeWidth;
  const E = r ?? d.size ?? 24, I = F ?? d.color ?? "currentColor", R = b ?? d.strokeWidth ?? 1.5;
  let w = "";
  if (typeof o == "string" && W[o] ? w = o : o && typeof o == "object" && o.name && (!o.iconType || o.iconType === "lucide") && (w = o.name), w) {
    const $ = W[w];
    if ($)
      return U.createElement($, {
        size: E,
        color: I,
        strokeWidth: R,
        className: C,
        style: M,
        ..._,
        ...O
      });
  }
  if (A)
    return U.createElement("span", {
      ..._,
      ...O,
      className: ("rudra-universal-icon " + C).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: E,
        height: E,
        color: I,
        ...M
      },
      dangerouslySetInnerHTML: {
        __html: A.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + R + '">')
      }
    });
  const q = W.LayoutGrid;
  return U.createElement(q, {
    size: E,
    color: I,
    strokeWidth: R,
    className: C,
    style: M,
    ..._,
    ...O
  });
}
function ue(e) {
  const r = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || r.applicationState, e.pageState || r.pageState, e.pageData || r.pageData;
  const F = {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  };
  e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? r?.$route ?? r?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? r?.$params ?? r?.routeParams ?? r?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? r?.$query ?? r?.queryParams ?? r?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? r?.$auth ?? r?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? r?.$config ?? r?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? r?.$env ?? r?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? r?.$locale ?? r?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? r?.$translations ?? r?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? r?.$i18n ?? r?.i18n;
  const b = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, C = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [M, O] = V(() => b ?? C());
  D(() => {
    b != null && O(b);
  }, [b]), D(() => {
    if (b != null || typeof document > "u") return;
    const t = document.documentElement, i = (u) => O(u?.detail?.theme ?? C()), n = new MutationObserver(i);
    return n.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      n.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [b]);
  const o = Y(null), [A, N] = V("lg");
  D(() => {
    if (!o.current) return;
    const t = new ResizeObserver((i) => {
      for (let n of i) {
        const u = n.contentRect.width;
        u < 768 ? N("sm") : u < 1024 ? N("md") : N("lg");
      }
    });
    return t.observe(o.current), () => t.disconnect();
  }, []);
  const a = z((t) => typeof t != "object" || t === null ? t : A === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : A === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [A]), d = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, _ = e.heroDescription !== void 0 ? e.heroDescription : e.data?.heroDescription !== void 0 ? e.data.heroDescription : "Capture, nurture and convert more leads with AI-powered outreach and CRM.", E = e.brandName !== void 0 ? e.brandName : e.data?.brandName !== void 0 ? e.data.brandName : "LeadFlow", I = e.redirectTo !== void 0 ? e.redirectTo : e.data?.redirectTo !== void 0 ? e.data.redirectTo : "/", R = e.heroTitle !== void 0 ? e.heroTitle : e.data?.heroTitle !== void 0 ? e.data.heroTitle : "Turn conversations into pipeline", w = { heroDescription: _, brandName: E, redirectTo: I, heroTitle: R }, [q, $] = V(() => structuredClone(!1)), L = { isLoading: q }, v = z((t, i) => {
    if (t === "isLoading") {
      const n = typeof i == "function" ? i(L.isLoading) : i;
      return L.isLoading = n, $(n), n;
    } else
      return i;
  }, [L]);
  z((t, i) => {
    const [n, ...u] = String(t || "").split(".");
    if (!n) return i;
    if (u.length === 0) return v(n, i);
    const c = (s) => {
      const g = Array.isArray(s) ? [...s] : { ...s || {} };
      let y = g;
      return u.forEach((T, j) => {
        j === u.length - 1 ? y[T] = i : (y[T] = Array.isArray(y[T]) ? [...y[T]] : { ...y[T] || {} }, y = y[T]);
      }), g;
    };
    return n === "isLoading" && v("isLoading", c), i;
  }, [v]);
  const h = { auth_failure: { properties: { message: { type: "string" }, provider: { type: "string" } }, required: ["provider", "message"], type: "object" }, auth_success: { properties: { provider: { type: "string" }, user: { type: "object" } }, required: ["provider"], type: "object" } }, G = (t, i, n) => {
    if (!i || typeof i != "object") return "";
    const u = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], c = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (u.length && !u.includes(c) && !(c === "integer" && u.includes("number"))) return n + " must be " + u.join(" or ") + ".";
    if (i.enum && !i.enum.some((s) => JSON.stringify(s) === JSON.stringify(t))) return n + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const s of i.required || []) if (!Object.prototype.hasOwnProperty.call(t, s)) return n + "." + s + " is required.";
      for (const [s, g] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(t, s)) {
        const y = G(t[s], g, n + "." + s);
        if (y) return y;
      }
    }
    if (Array.isArray(t) && i.items) for (let s = 0; s < t.length; s++) {
      const g = G(t[s], i.items, n + "[" + s + "]");
      if (g) return g;
    }
    return "";
  }, J = z(async (t, i, n = !1) => {
    const u = h[t];
    if (!u) throw new Error("Module output '" + t + "' is not declared.");
    const c = G(i, u, "output." + t);
    if (c) throw new Error(c);
    const s = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof s != "function") return i;
    const g = s(t, i, { moduleId: e.moduleId, awaitHandlers: n });
    return n ? await g : i;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]);
  async function p(t = {}) {
    const i = t || {}, n = {}, u = {};
    v("isLoading", !0);
    try {
      {
        const c = await B("RudraAuth.signIn", { email: "", password: "", provider: "google" }, []);
        u.auth_google_auth = c, n.authResult = c;
      }
    } catch (c) {
      const s = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "auth_google_auth" };
      n.error = s, u.auth_google_auth = { error: s };
      {
        i.event;
        const g = await (async () => ({ message: String(s && s.message || "Unable to sign in with Google.") }))();
        u.auth_google_error = g, n.customCodeResult = g;
      }
      return v("isLoading", !1), J("auth_failure", { message: u.auth_google_error.message, provider: "google" }, !1).catch((g) => console.error("Module output delivery failed", g)), { message: u.auth_google_error.message, success: !1 };
    }
    v("isLoading", !1), J("auth_success", { provider: "google", user: n.authResult.user }, !1).catch((c) => console.error("Module output delivery failed", c));
    {
      const c = await B("RudraSystem.navigate", { path: w.redirectTo, replace: !0 }, []);
      u.auth_google_navigate = c, n["RudraSystem.navigateResult"] = c;
    }
    return n.authResult;
  }
  const Z = {
    signInWithGoogle: p
  }, X = {
    signInWithGoogle: []
  }, B = (t, i = {}, n = []) => {
    const u = Z[t];
    if (u) {
      const T = X[t] || [];
      return u(Object.fromEntries(T.map((j, K) => {
        const P = Object.prototype.hasOwnProperty.call(i, j) ? i[j] : void 0;
        return [j, (P === "" || P === void 0) && n[K] !== void 0 ? n[K] : j === "event" && (P === "" || P === void 0) ? n[0] : P];
      })));
    }
    const c = F?.[t];
    if (typeof c == "function")
      return c(Object.keys(i).length > 0 ? i : n[0]);
    const [s, g] = String(t).split("."), y = typeof globalThis < "u" ? globalThis[s]?.[g] : void 0;
    if (typeof y == "function") return y(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ f("div", { ref: o, className: "rudra-module-wrapper", children: d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
    "      ",
    /* @__PURE__ */ l(S, { id: "auth_shell", className: `${a({ sm: "lf-auth-module" }) || ""}`, children: [
      "      ",
      d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
        "      ",
        /* @__PURE__ */ l(S, { id: "auth_header", className: `${a({ sm: "lf-auth-header" }) || ""}`, children: [
          "      ",
          d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ f(ee, { id: "auth_brand", className: `${a({ sm: "lf-auth-brand" }) || ""}`, shape: "rounded", variant: a({ lg: "identity", sm: "identity" }), disabled: !0, showName: !0, ariaLabel: "LeadFlow", name: w?.brandName, size: a({ sm: "large" }), editable: !1, initials: "LF", showSubtitle: !1, organizationId: "leadflow" })
          ] })
        ] })
      ] }),
      d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
        "      ",
        /* @__PURE__ */ l(S, { id: "auth_grid", className: `${a({ sm: "lf-auth-grid" }) || ""}`, children: [
          "      ",
          d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ l(S, { id: "auth_story", className: `${a({ sm: "lf-auth-story" }) || ""}`, children: [
              "      ",
              d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "auth_eyebrow", className: `${a({ sm: "lf-auth-eyebrow" }) || ""}`, as: "p", content: "BUILT FOR MODERN REVENUE TEAMS" })
              ] }),
              d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "auth_title", className: `${a({ sm: "lf-auth-title" }) || ""}`, as: "h1", content: /* @__PURE__ */ ((t) => t === void 0 ? "Turn conversations into pipeline" : t)(w?.heroTitle) })
              ] }),
              d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "auth_description", className: `${a({ sm: "lf-auth-description" }) || ""}`, as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "Capture, nurture and convert more leads with AI-powered outreach and CRM." : t)(w?.heroDescription) })
              ] }),
              d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ l(S, { id: "auth_features", className: `${a({ sm: "lf-auth-features" }) || ""}`, children: [
                  "      ",
                  d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(H, { id: "auth_feature_pipeline", description: "Keep every opportunity moving with a clear shared view.", showConnector: !1, id: "pipeline", icon: /* @__PURE__ */ f(x, { icon: "PanelsTopLeft" }), type: "lead", title: "Manage your pipeline", ariaLabel: "Manage your pipeline", clickable: !1 })
                  ] }),
                  d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(H, { id: "auth_feature_automation", id: "automation", icon: /* @__PURE__ */ f(x, { icon: "Zap" }), type: "email", title: "Automate outreach", ariaLabel: "Automate outreach", clickable: !1, description: "Reach the right lead at the right moment.", showConnector: !1 })
                  ] }),
                  d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(H, { id: "auth_feature_growth", title: "Close more deals", ariaLabel: "Close more deals", clickable: !1, description: "Turn coordinated conversations into measurable growth.", showConnector: !1, id: "growth", icon: /* @__PURE__ */ f(x, { icon: "UsersRound" }), type: "won" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ l(S, { id: "auth_action_column", className: `${a({ sm: "lf-auth-action-column" }) || ""}`, children: [
              "      ",
              d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ l(S, { id: "auth_action_panel", className: `${a({ sm: "lf-auth-action-panel" }) || ""}`, children: [
                  "      ",
                  d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ l(ae, { id: "auth_google_button", leftIcon: /* @__PURE__ */ l(m, { children: [
                      "      ",
                      d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                        "      ",
                        /* @__PURE__ */ f(x, { icon: a({ sm: { iconType: "svg", svgContent: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="width:100%;height:100%;" stroke-width="1.2"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg>' } }), id: "auth_google_icon", size: a({ lg: 21, sm: 20 }), strokeWidth: a({ lg: 1.2, sm: 1.2 }) })
                      ] })
                    ] }), variant: "outline", onAction: (...t) => B("signInWithGoogle", {}, t), rightIcon: !1, size: "lg", loading: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(q), ariaLabel: "Sign in with Google", fullWidth: !0, loadingText: "Signing in…", theme: "auto", children: [
                      "      ",
                      d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                        "      ",
                        /* @__PURE__ */ f(k, { id: "auth_google_label", className: "lf-google-label p-1", content: "Sign in with Google", as: "span" })
                      ] })
                    ] })
                  ] }),
                  d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(k, { id: "auth_legal", className: `${a({ sm: "lf-auth-legal" }) || ""}`, as: "p", content: "By continuing, you agree to the Terms of Use and Privacy Policy." })
                  ] })
                ] })
              ] }),
              d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ l(S, { id: "auth_visuals", className: `${a({ sm: "lf-auth-visuals" }) || ""}`, children: [
                  "      ",
                  d(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(te, { id: "auth_pipeline_chart", className: `${a({ lg: "-rotate-3" }) || ""}`, emptyText: "No pipeline data available", description: "Current pipeline value by stage", size: a({ lg: "small", sm: "medium" }), trendLabel: "vs last month", trendValue: a({ lg: "12%", sm: "12.5%" }), data: a({ lg: { type: "static", value: [{ displayValue: "₹3.2L", label: "New", value: 32e4 }, { displayValue: "₹4.8L", label: "Qualified", value: 48e4 }, { displayValue: "₹3.9L", label: "Proposal", value: 39e4 }, { displayValue: "₹2.7L", label: "Negotiation", value: 27e4 }, { displayValue: "₹4.2L", label: "Won", value: 42e4 }] }, sm: { type: "static", value: [{ displayValue: "₹3.2L", label: "New", value: 32e4 }, { displayValue: "₹4.8L", label: "Qualified", value: 48e4 }, { displayValue: "₹3.9L", label: "Proposal", value: 39e4 }, { displayValue: "₹2.7L", label: "Negotiation", value: 27e4 }, { displayValue: "₹4.2L", label: "Won", value: 42e4 }] } }), accent: "indigo", showLabels: !0, showTooltip: !0, title: "Pipeline Overview", value: "₹18.4L", showGrid: !0, chartType: a({ lg: "bar", sm: "bar" }), trend: "up" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ue as default
};
