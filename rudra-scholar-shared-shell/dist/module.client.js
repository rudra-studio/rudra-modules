import { jsxs as r, jsx as l, Fragment as i } from "react/jsx-runtime";
import { useState as L, useEffect as E, useRef as te, useCallback as M } from "react";
import { Link as re, Button as h, Badge as ne, Typography as k } from "@rudra-studio/rudra-core";
import { Box as u } from "@rudra-studio/rudra-layout";
function le(n) {
  const S = {}, q = n.serverData || n.serverState || {};
  n.sharedState, n.applicationState || q.applicationState, n.pageState || q.pageState, n.pageData || q.pageData;
  const B = {
    ...n.runtime?.functions || {},
    ...n.runtime?.actions || {},
    ...n.functions || {},
    ...n.actions || {}
  }, y = n.$theme ?? n.theme ?? n.data?.$theme ?? n.runtime?.data?.$theme ?? n.runtime?.theme, C = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [D, T] = L(() => y ?? C());
  E(() => {
    y != null && T(y);
  }, [y]), E(() => {
    if (y != null || typeof document > "u") return;
    const e = document.documentElement, t = (d) => T(d?.detail?.theme ?? C()), a = new MutationObserver(t);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [y]);
  const O = te(null), [R, _] = L("lg");
  E(() => {
    if (!O.current) return;
    const e = new ResizeObserver((t) => {
      for (let a of t) {
        const d = a.contentRect.width;
        d < 768 ? _("sm") : d < 1024 ? _("md") : _("lg");
      }
    });
    return e.observe(O.current), () => e.disconnect();
  }, []);
  const o = M((e) => typeof e != "object" || e === null ? e : R === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : R === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [R]), s = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e;
  n.children !== void 0 ? n.children : n.data?.children !== void 0 && n.data.children;
  const $ = n.authenticated !== void 0 ? n.authenticated : n.data?.authenticated !== void 0 ? n.data.authenticated : !1;
  n.userRole !== void 0 ? n.userRole : n.data?.userRole !== void 0 && n.data.userRole, n.displayName !== void 0 ? n.displayName : n.data?.displayName !== void 0 && n.data.displayName, n.locale !== void 0 ? n.locale : n.data?.locale !== void 0 && n.data.locale, n.remainingSeconds !== void 0 ? n.remainingSeconds : n.data?.remainingSeconds !== void 0 && n.data.remainingSeconds;
  const J = n.notice !== void 0 ? n.notice : n.data?.notice !== void 0 ? n.data.notice : "College mathematics pilot · For learners aged 18 and above.", x = { authenticated: $, notice: J }, [F, z] = L(() => structuredClone("")), j = { statusMessage: F }, v = M((e, t) => {
    if (e === "statusMessage") {
      const a = typeof t == "function" ? t(j.statusMessage) : t;
      return j.statusMessage = a, z(a), a;
    } else
      return t;
  }, [j]);
  M((e, t) => {
    const [a, ...d] = String(e || "").split(".");
    if (!a) return t;
    if (d.length === 0) return v(a, t);
    const b = (c) => {
      const f = Array.isArray(c) ? [...c] : { ...c || {} };
      let g = f;
      return d.forEach((N, A) => {
        A === d.length - 1 ? g[N] = t : (g[N] = Array.isArray(g[N]) ? [...g[N]] : { ...g[N] || {} }, g = g[N]);
      }), f;
    };
    return a === "statusMessage" && v("statusMessage", b), t;
  }, [v]);
  const U = { feedbackRequested: { properties: { source: { type: "string" } }, required: ["source"], type: "object" }, localeChanged: { properties: { locale: { type: "string" } }, required: ["locale"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, signInRequested: { properties: { source: { type: "string" } }, required: ["source"], type: "object" }, signOutRequested: { properties: { source: { type: "string" } }, required: ["source"], type: "object" } }, I = (e, t, a) => {
    if (!t || typeof t != "object") return "";
    const d = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], b = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (d.length && !d.includes(b) && !(b === "integer" && d.includes("number"))) return a + " must be " + d.join(" or ") + ".";
    if (t.enum && !t.enum.some((c) => JSON.stringify(c) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const c of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, c)) return a + "." + c + " is required.";
      for (const [c, f] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, c)) {
        const g = I(e[c], f, a + "." + c);
        if (g) return g;
      }
    }
    if (Array.isArray(e) && t.items) for (let c = 0; c < e.length; c++) {
      const f = I(e[c], t.items, a + "[" + c + "]");
      if (f) return f;
    }
    return "";
  }, p = M(async (e, t, a = !1) => {
    const d = U[e];
    if (!d) throw new Error("Module output '" + e + "' is not declared.");
    const b = I(t, d, "output." + e);
    if (b) throw new Error(b);
    const c = n.onOutput || n.onModuleOutput || n.runtime?.onOutput;
    if (typeof c != "function") return t;
    const f = c(e, t, { moduleId: n.moduleId, awaitHandlers: a });
    return a ? await f : t;
  }, [n.onOutput, n.onModuleOutput, n.runtime?.onOutput, n.moduleId]);
  async function G(e = {}) {
    const t = e || {};
    p("navigationRequested", { path: t.path }, !1).catch((a) => console.error("Module output delivery failed", a)), v("statusMessage", "Navigation requested: " + t.path);
  }
  async function H(e = {}) {
    p("feedbackRequested", { source: "shared-shell" }, !1).catch((t) => console.error("Module output delivery failed", t)), v("statusMessage", "Feedback requested.");
  }
  async function K(e = {}) {
    p("signInRequested", { source: "shared-shell" }, !1).catch((t) => console.error("Module output delivery failed", t)), v("statusMessage", "Sign-in requested.");
  }
  async function Q(e = {}) {
    const t = e || {};
    p("localeChanged", { locale: t.locale }, !1).catch((a) => console.error("Module output delivery failed", a)), v("statusMessage", "Language requested: " + t.locale);
  }
  async function W(e = {}) {
    p("signOutRequested", { source: "shared-shell" }, !1).catch((t) => console.error("Module output delivery failed", t)), v("statusMessage", "Sign-out requested.");
  }
  async function X(e = {}) {
    p("localeChanged", { locale: (e || {}).locale }, !1).catch((a) => console.error("Module output delivery failed", a));
  }
  async function Y(e = {}) {
    p("signInRequested", { source: "shared-header" }, !1).catch((t) => console.error("Module output delivery failed", t));
  }
  async function Z(e = {}) {
    p("feedbackRequested", { source: "shared-footer" }, !1).catch((t) => console.error("Module output delivery failed", t));
  }
  const V = {
    navigate: G,
    feedback: H,
    signIn: K,
    changeLocale: Q,
    signOut: W,
    setLocale: X,
    requestSignIn: Y,
    requestFeedback: Z
  }, ee = {
    navigate: ["path"],
    feedback: [],
    signIn: [],
    changeLocale: ["locale"],
    signOut: [],
    setLocale: ["locale"],
    requestSignIn: [],
    requestFeedback: []
  }, m = (e, t = {}, a = []) => {
    const d = V[e];
    if (d) {
      const N = ee[e] || [];
      return d(Object.fromEntries(N.map((A, P) => {
        const w = Object.prototype.hasOwnProperty.call(t, A) ? t[A] : void 0;
        return [A, (w === "" || w === void 0) && a[P] !== void 0 ? a[P] : A === "event" && (w === "" || w === void 0) ? a[0] : w];
      })));
    }
    const b = B?.[e];
    if (typeof b == "function")
      return b(Object.keys(t).length > 0 ? t : a[0]);
    const [c, f] = String(e).split("."), g = typeof globalThis < "u" ? globalThis[c]?.[f] : void 0;
    if (typeof g == "function") return g(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ r("div", { ref: O, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ l("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-layout@1.0.25/components/Box/styles.css", precedence: "rudra-library" }),
    s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
      "      ",
      /* @__PURE__ */ r(u, { id: "shell", "data-theme": /* @__PURE__ */ ((e) => e === void 0 ? "light" : e)(D), className: "block rs-shell", children: [
        "      ",
        s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ l(re, { id: "skip", className: "rs-shell-skip", href: "#rs-page-content" })
        ] }),
        s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ r(u, { id: "header", role: "banner", className: "block rs-shell-header", children: [
            "      ",
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(u, { id: "header_inner", className: "block rs-shell-header-inner", children: [
                "      ",
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(h, { id: "brand", className: "rs-shell-brand", leftIcon: !1, onAction: (...e) => m("navigate", {}, e), rightIcon: !1, id: "brand", label: "Rudra Scholar", theme: "auto" })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ r(u, { id: "navigation", role: "navigation", "aria-label": "Main navigation", className: "block rs-shell-nav", children: [
                    "      ",
                    s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "explore", className: "rs-shell-button", rightIcon: !1, id: "explore", label: "Explore", theme: "auto", leftIcon: !1, onAction: (...e) => m("navigate", {}, e) })
                    ] }),
                    s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "pricing", className: "rs-shell-button", theme: "auto", leftIcon: !1, onAction: (...e) => m("navigate", {}, e), rightIcon: !1, id: "pricing", label: "Learning time" })
                    ] }),
                    s(void 0) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "educator", className: "rs-shell-button", id: "educator", label: "Educator studio", theme: "auto", onAction: (...e) => m("navigate", {}, e) })
                    ] })
                  ] })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ r(u, { id: "account", className: "block rs-shell-account", children: [
                    "      ",
                    s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "usage", className: "rs-shell-button rs-shell-usage", id: "usage", label: void 0, theme: "auto", onAction: (...e) => m("navigate", {}, e) })
                    ] }),
                    s(void 0) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "signin", className: "rs-shell-button rs-shell-primary", id: "signin", label: "Sign in", theme: "auto", onAction: (...e) => m("signIn", {}, e) })
                    ] }),
                    s(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(x?.authenticated)) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "profile", className: "rs-shell-button", onAction: (...e) => m("navigate", {}, e), ariaLabel: "My account", id: "profile", label: void 0, theme: "auto" })
                    ] }),
                    s(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(x?.authenticated)) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "signout", className: "rs-shell-button", id: "signout", label: "Sign out", theme: "auto", onAction: (...e) => m("signOut", {}, e) })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(u, { id: "nav", className: "rs-nav", children: [
                "      ",
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(h, { id: "home", label: /* @__PURE__ */ ((e) => e === void 0 ? "Home" : e)(S?.i18n?.home), theme: "auto", variant: "ghost", onAction: (...e) => m("navigate", {}, e) })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(h, { id: "browse", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse problems" : e)(S?.i18n?.browse), theme: "auto", variant: "ghost", onAction: (...e) => m("navigate", {}, e) })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(h, { id: "professor", label: /* @__PURE__ */ ((e) => e === void 0 ? "Professor studio" : e)(S?.i18n?.professor), theme: "auto", variant: "ghost", onAction: (...e) => m("navigate", {}, e) })
                ] })
              ] })
            ] }),
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(u, { id: "tools", className: "rs-tools", children: [
                "      ",
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(ne, { id: "meter", className: "inline-flex px-2.5 py-1 text-xs gap-1.5", label: "{{ Math.ceil((inputs.remainingSeconds || 0)/60) }} min", ariaLabel: "Remaining learning minutes" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ l(u, { id: "page", className: "rs-page" })
        ] }),
        s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ r(u, { id: "utility", className: "block rs-shell-utility", children: [
            "      ",
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ l(k, { id: "notice", className: "rs-shell-notice", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(x?.notice), as: "p" })
            ] }),
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(u, { id: "languages", role: "group", "aria-label": "Language", className: "block rs-shell-languages", children: [
                "      ",
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(h, { id: "locale_en", className: "rs-shell-button rs-shell-language", label: "English", theme: "auto", onAction: (...e) => m("changeLocale", {}, e), "aria-pressed": void 0, id: "locale_en", lang: "en" })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(h, { id: "locale_hi", className: "rs-shell-button rs-shell-language", onAction: (...e) => m("changeLocale", {}, e), "aria-pressed": void 0, id: "locale_hi", lang: "hi", label: "हिन्दी", theme: "auto" })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(h, { id: "locale_ta", className: "rs-shell-button rs-shell-language", "aria-pressed": void 0, id: "locale_ta", lang: "ta", label: "தமிழ்", theme: "auto", onAction: (...e) => m("changeLocale", {}, e) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ l(u, { id: "page_content", role: "main", tabIndex: -1, id: "rs-page-content", className: "block rs-shell-content" })
        ] }),
        s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ r(u, { id: "action_status", role: "status", "aria-live": "polite", "aria-atomic": "true", className: "block rs-shell-status", children: [
            "      ",
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ l(k, { id: "status_text", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(F) })
            ] })
          ] })
        ] }),
        s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ r(u, { id: "footer", role: "contentinfo", className: "block rs-shell-footer", children: [
            "      ",
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(u, { id: "footer_inner", className: "block rs-shell-footer-inner", children: [
                "      ",
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ r(u, { id: "footer_brand", className: "block rs-shell-footer-brand", children: [
                    "      ",
                    s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(k, { id: "footer_title", className: "rs-shell-footer-title", as: "p", content: "Rudra Scholar" })
                    ] }),
                    s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(k, { id: "footer_promise", className: "rs-shell-muted", as: "p", content: "Understand the reasoning, not only the answer." })
                    ] })
                  ] })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ r(u, { id: "footer_actions", className: "block rs-shell-footer-actions", children: [
                    "      ",
                    s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ l(h, { id: "feedback", className: "rs-shell-button", theme: "auto", onAction: (...e) => m("feedback", {}, e), id: "feedback", label: "Send feedback" })
                    ] })
                  ] })
                ] }),
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(k, { id: "copyright", className: "rs-shell-muted", content: "© 2026 Rudra Scholar", as: "p" })
                ] })
              ] })
            ] }),
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ l(k, { id: "footer_copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "© 2026 Rudra Scholar." : e)(S?.i18n?.copyright) })
            ] }),
            s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(u, { id: "footer_row", className: "rs-foot-row", children: [
                "      ",
                s(o({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ l(k, { id: "footer_note", as: "p", content: "AI work should be reviewed. Private lessons and account pages are not indexed.", customColor: "var(--rudra-color-muted)" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  le as default
};
