import { jsx as f, jsxs as l, Fragment as m } from "react/jsx-runtime";
import p, { useState as V, useEffect as D, useRef as Y, useCallback as z } from "react";
import { OrganizationLogo as ee, ActivityItem as U, ChartCard as te } from "@rudra-studio/leadflow-ui";
import { Typography as k, Button as ae } from "@rudra-studio/rudra-core";
import { Box as S } from "@rudra-studio/rudra-layout";
import * as W from "lucide-react";
const K = (e) => String(e || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), ie = (e) => {
  let r = e;
  for (; r && typeof r == "object" && "type" in r && "value" in r; )
    r = r.value;
  return r;
};
function x({ icon: e, size: r, color: F, strokeWidth: b, className: O = "", style: M, ...C }) {
  const o = ie(e), [j, N] = V(null), i = o && typeof o == "object" ? JSON.stringify(o) : String(o || "");
  D(() => {
    const $ = new AbortController();
    let L = "", v = "";
    if (N(null), typeof o == "string") {
      const h = o.trim();
      if (W[h]) return () => $.abort();
      h.startsWith("<svg") ? v = h : (/^https?:\/\//.test(h) || h.startsWith("/") || h.startsWith("data:image/svg")) && (L = h);
    } else o && typeof o == "object" && (o.iconType === "svg" && o.svgContent ? v = o.svgContent : o.iconType === "url" && o.url && (L = o.url));
    return v ? N(K(v)) : L && fetch(L, { signal: $.signal }).then((h) => {
      if (!h.ok) throw new Error("Icon request failed (" + h.status + ")");
      return h.text();
    }).then((h) => {
      h.trim().startsWith("<svg") && N(K(h));
    }).catch((h) => {
      h.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", h);
    }), () => $.abort();
  }, [i]);
  const d = o && typeof o == "object" ? o.props || {} : {}, _ = { ...d };
  delete _.size, delete _.color, delete _.strokeWidth;
  const A = r ?? d.size ?? 24, I = F ?? d.color ?? "currentColor", R = b ?? d.strokeWidth ?? 1.5;
  let w = "";
  if (typeof o == "string" && W[o] ? w = o : o && typeof o == "object" && o.name && (!o.iconType || o.iconType === "lucide") && (w = o.name), w) {
    const $ = W[w];
    if ($)
      return p.createElement($, {
        size: A,
        color: I,
        strokeWidth: R,
        className: O,
        style: M,
        ..._,
        ...C
      });
  }
  if (j)
    return p.createElement("span", {
      ..._,
      ...C,
      className: ("rudra-universal-icon " + O).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: A,
        height: A,
        color: I,
        ...M
      },
      dangerouslySetInnerHTML: {
        __html: j.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + R + '">')
      }
    });
  const q = W.LayoutGrid;
  return p.createElement(q, {
    size: A,
    color: I,
    strokeWidth: R,
    className: O,
    style: M,
    ..._,
    ...C
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
  const b = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, O = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [M, C] = V(() => b ?? O());
  D(() => {
    b != null && C(b);
  }, [b]), D(() => {
    if (b != null || typeof document > "u") return;
    const t = document.documentElement, a = (u) => C(u?.detail?.theme ?? O()), n = new MutationObserver(a);
    return n.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", a), a(), () => {
      n.disconnect(), window.removeEventListener("rudra:theme-change", a);
    };
  }, [b]);
  const o = Y(null), [j, N] = V("lg");
  D(() => {
    if (!o.current) return;
    const t = new ResizeObserver((a) => {
      for (let n of a) {
        const u = n.contentRect.width;
        u < 768 ? N("sm") : u < 1024 ? N("md") : N("lg");
      }
    });
    return t.observe(o.current), () => t.disconnect();
  }, []);
  const i = z((t) => {
    if (typeof t != "object" || t === null) return t;
    const a = j === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : j === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return a && typeof a == "object" && a.type === "static" && Object.prototype.hasOwnProperty.call(a, "value") ? a.value : a;
  }, [j]), d = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, _ = e.heroDescription !== void 0 ? e.heroDescription : e.data?.heroDescription !== void 0 ? e.data.heroDescription : "Capture, nurture and convert more leads with AI-powered outreach and CRM.", A = e.brandName !== void 0 ? e.brandName : e.data?.brandName !== void 0 ? e.data.brandName : "LeadFlow", I = e.redirectTo !== void 0 ? e.redirectTo : e.data?.redirectTo !== void 0 ? e.data.redirectTo : "/", R = e.heroTitle !== void 0 ? e.heroTitle : e.data?.heroTitle !== void 0 ? e.data.heroTitle : "Turn conversations into pipeline", w = { heroDescription: _, brandName: A, redirectTo: I, heroTitle: R }, [q, $] = V(() => structuredClone(!1)), L = { isLoading: q }, v = z((t, a) => {
    if (t === "isLoading") {
      const n = typeof a == "function" ? a(L.isLoading) : a;
      return L.isLoading = n, $(n), n;
    } else
      return a;
  }, [L]);
  z((t, a) => {
    const [n, ...u] = String(t || "").split(".");
    if (!n) return a;
    if (u.length === 0) return v(n, a);
    const c = (s) => {
      const g = Array.isArray(s) ? [...s] : { ...s || {} };
      let y = g;
      return u.forEach((T, E) => {
        E === u.length - 1 ? y[T] = a : (y[T] = Array.isArray(y[T]) ? [...y[T]] : { ...y[T] || {} }, y = y[T]);
      }), g;
    };
    return n === "isLoading" && v("isLoading", c), a;
  }, [v]);
  const h = { auth_failure: { properties: { message: { type: "string" }, provider: { type: "string" } }, required: ["provider", "message"], type: "object" }, auth_success: { properties: { provider: { type: "string" }, user: { type: "object" } }, required: ["provider"], type: "object" } }, G = (t, a, n) => {
    if (!a || typeof a != "object") return "";
    const u = Array.isArray(a.type) ? a.type : a.type ? [a.type] : [], c = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (u.length && !u.includes(c) && !(c === "integer" && u.includes("number"))) return n + " must be " + u.join(" or ") + ".";
    if (a.enum && !a.enum.some((s) => JSON.stringify(s) === JSON.stringify(t))) return n + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const s of a.required || []) if (!Object.prototype.hasOwnProperty.call(t, s)) return n + "." + s + " is required.";
      for (const [s, g] of Object.entries(a.properties || {})) if (Object.prototype.hasOwnProperty.call(t, s)) {
        const y = G(t[s], g, n + "." + s);
        if (y) return y;
      }
    }
    if (Array.isArray(t) && a.items) for (let s = 0; s < t.length; s++) {
      const g = G(t[s], a.items, n + "[" + s + "]");
      if (g) return g;
    }
    return "";
  }, H = z(async (t, a, n = !1) => {
    const u = h[t];
    if (!u) throw new Error("Module output '" + t + "' is not declared.");
    const c = G(a, u, "output." + t);
    if (c) throw new Error(c);
    const s = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof s != "function") return a;
    const g = s(t, a, { moduleId: e.moduleId, awaitHandlers: n });
    return n ? await g : a;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]);
  async function Q(t = {}) {
    const a = t || {}, n = {}, u = {};
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
        a.event;
        const g = await (async () => ({ message: String(s && s.message || "Unable to sign in with Google.") }))();
        u.auth_google_error = g, n.customCodeResult = g;
      }
      return v("isLoading", !1), H("auth_failure", { message: u.auth_google_error.message, provider: "google" }, !1).catch((g) => console.error("Module output delivery failed", g)), { message: u.auth_google_error.message, success: !1 };
    }
    v("isLoading", !1), H("auth_success", { provider: "google", user: n.authResult.user }, !1).catch((c) => console.error("Module output delivery failed", c));
    {
      const c = await B("RudraSystem.navigate", { path: w.redirectTo, replace: !0 }, []);
      u.auth_google_navigate = c, n["RudraSystem.navigateResult"] = c;
    }
    return n.authResult;
  }
  const Z = {
    signInWithGoogle: Q
  }, X = {
    signInWithGoogle: []
  }, B = (t, a = {}, n = []) => {
    const u = Z[t];
    if (u) {
      const T = X[t] || [];
      return u(Object.fromEntries(T.map((E, J) => {
        const P = Object.prototype.hasOwnProperty.call(a, E) ? a[E] : void 0;
        return [E, (P === "" || P === void 0) && n[J] !== void 0 ? n[J] : E === "event" && (P === "" || P === void 0) ? n[0] : P];
      })));
    }
    const c = F?.[t];
    if (typeof c == "function")
      return c(Object.keys(a).length > 0 ? a : n[0]);
    const [s, g] = String(t).split("."), y = typeof globalThis < "u" ? globalThis[s]?.[g] : void 0;
    if (typeof y == "function") return y(...Object.values(a));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ f("div", { ref: o, className: "rudra-module-wrapper", children: d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
    "      ",
    /* @__PURE__ */ l(S, { id: "auth_shell", className: `${i({ sm: "lf-auth-module" }) || ""}`, children: [
      "      ",
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
        "      ",
        /* @__PURE__ */ l(S, { id: "auth_header", className: `${i({ sm: "lf-auth-header" }) || ""}`, children: [
          "      ",
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ f(ee, { id: "auth_brand", className: `${i({ sm: "lf-auth-brand" }) || ""}`, size: i({ sm: "large" }), variant: i({ lg: "identity", sm: "identity" }), initials: "LF", ariaLabel: "LeadFlow", showSubtitle: !1, organizationId: "leadflow", name: w?.brandName, shape: "rounded", disabled: !0, editable: !1, showName: !0 })
          ] })
        ] })
      ] }),
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
        "      ",
        /* @__PURE__ */ l(S, { id: "auth_grid", className: `${i({ sm: "lf-auth-grid" }) || ""}`, children: [
          "      ",
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ l(S, { id: "auth_story", className: `${i({ sm: "lf-auth-story" }) || ""}`, children: [
              "      ",
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "auth_eyebrow", className: `${i({ sm: "lf-auth-eyebrow" }) || ""}`, as: "p", content: "BUILT FOR MODERN REVENUE TEAMS" })
              ] }),
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "auth_title", className: `${i({ sm: "lf-auth-title" }) || ""}`, as: "h1", content: /* @__PURE__ */ ((t) => t === void 0 ? "Turn conversations into pipeline" : t)(w?.heroTitle) })
              ] }),
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "auth_description", className: `${i({ sm: "lf-auth-description" }) || ""}`, as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "Capture, nurture and convert more leads with AI-powered outreach and CRM." : t)(w?.heroDescription) })
              ] }),
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ l(S, { id: "auth_features", className: `${i({ sm: "lf-auth-features" }) || ""}`, children: [
                  "      ",
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(U, { id: "auth_feature_pipeline", id: "pipeline", icon: /* @__PURE__ */ f(x, { icon: "PanelsTopLeft" }), type: "lead", title: "Manage your pipeline", ariaLabel: "Manage your pipeline", clickable: !1, description: "Keep every opportunity moving with a clear shared view.", showConnector: !1 })
                  ] }),
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(U, { id: "auth_feature_automation", title: "Automate outreach", ariaLabel: "Automate outreach", clickable: !1, description: "Reach the right lead at the right moment.", showConnector: !1, id: "automation", icon: /* @__PURE__ */ f(x, { icon: "Zap" }), type: "email" })
                  ] }),
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(U, { id: "auth_feature_growth", clickable: !1, description: "Turn coordinated conversations into measurable growth.", showConnector: !1, id: "growth", icon: /* @__PURE__ */ f(x, { icon: "UsersRound" }), type: "won", title: "Close more deals", ariaLabel: "Close more deals" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ l(S, { id: "auth_action_column", className: `${i({ sm: "lf-auth-action-column" }) || ""}`, children: [
              "      ",
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ l(S, { id: "auth_action_panel", className: `${i({ sm: "lf-auth-action-panel" }) || ""}`, children: [
                  "      ",
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ l(ae, { id: "auth_google_button", leftIcon: /* @__PURE__ */ l(m, { children: [
                      "      ",
                      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                        "      ",
                        /* @__PURE__ */ f(x, { icon: i({ sm: { iconType: "svg", svgContent: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="width:100%;height:100%;" stroke-width="1.2"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg>' } }), id: "auth_google_icon", size: i({ lg: 21, sm: 20 }), strokeWidth: i({ lg: 1.2, sm: 1.2 }) })
                      ] })
                    ] }), loadingText: "Signing in…", size: "lg", variant: "outline", rightIcon: !1, theme: "auto", loading: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(q), onAction: (...t) => B("signInWithGoogle", {}, t), ariaLabel: "Sign in with Google", fullWidth: !0, children: [
                      "      ",
                      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                        "      ",
                        /* @__PURE__ */ f(k, { id: "auth_google_label", className: "lf-google-label p-1", as: "span", content: "Sign in with Google" })
                      ] })
                    ] })
                  ] }),
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(k, { id: "auth_legal", className: `${i({ sm: "lf-auth-legal" }) || ""}`, as: "p", content: "By continuing, you agree to the Terms of Use and Privacy Policy." })
                  ] })
                ] })
              ] }),
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ l(S, { id: "auth_visuals", className: `${i({ sm: "lf-auth-visuals" }) || ""}`, children: [
                  "      ",
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ f(te, { id: "auth_pipeline_chart", className: `${i({ lg: "-rotate-3" }) || ""}`, data: i({ lg: { type: "static", value: [{ displayValue: "₹3.2L", label: "New", value: 32e4 }, { displayValue: "₹4.8L", label: "Qualified", value: 48e4 }, { displayValue: "₹3.9L", label: "Proposal", value: 39e4 }, { displayValue: "₹2.7L", label: "Negotiation", value: 27e4 }, { displayValue: "₹4.2L", label: "Won", value: 42e4 }] }, sm: { type: "static", value: [{ displayValue: "₹3.2L", label: "New", value: 32e4 }, { displayValue: "₹4.8L", label: "Qualified", value: 48e4 }, { displayValue: "₹3.9L", label: "Proposal", value: 39e4 }, { displayValue: "₹2.7L", label: "Negotiation", value: 27e4 }, { displayValue: "₹4.2L", label: "Won", value: 42e4 }] } }), emptyText: "No pipeline data available", trendValue: i({ lg: "12%", sm: "12.5%" }), title: "Pipeline Overview", showGrid: !0, size: i({ lg: "small", sm: "medium" }), trend: "up", chartType: i({ lg: "bar", sm: "bar" }), showLabels: !0, value: "₹18.4L", accent: "indigo", trendLabel: "vs last month", showTooltip: !0, description: "Current pipeline value by stage" })
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
