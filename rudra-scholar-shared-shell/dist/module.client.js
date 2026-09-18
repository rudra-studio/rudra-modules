import { jsx as f, jsxs as r, Fragment as i } from "react/jsx-runtime";
import { useState as E, useEffect as I, useRef as K, useCallback as U } from "react";
import { Box as w, Repeater as p } from "@rudra-studio/rudra-layout";
import { Typography as T, Button as x, Avatar as $e, Link as V } from "@rudra-studio/rudra-core";
function Ee(t) {
  const g = t.serverData || t.serverState || {};
  t.sharedState, t.applicationState || g.applicationState, t.pageState || g.pageState, t.pageData || g.pageData;
  const ee = {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  };
  t.$route ?? t.route ?? t.data?.$route ?? t.data?.route ?? t.runtime?.data?.$route ?? t.runtime?.route ?? g?.$route ?? g?.route, t.$params ?? t.routeParams ?? t.params ?? t.data?.$params ?? t.data?.routeParams ?? t.data?.params ?? t.runtime?.data?.$params ?? t.runtime?.route?.params ?? t.runtime?.routeParams ?? t.runtime?.params ?? g?.$params ?? g?.routeParams ?? g?.params, t.$query ?? t.queryParams ?? t.query ?? t.data?.$query ?? t.data?.queryParams ?? t.data?.query ?? t.runtime?.data?.$query ?? t.runtime?.route?.query ?? t.runtime?.queryParams ?? t.runtime?.query ?? g?.$query ?? g?.queryParams ?? g?.query, t.$auth ?? t.auth ?? t.data?.$auth ?? t.data?.auth ?? t.runtime?.data?.$auth ?? t.runtime?.authInfo ?? t.runtime?.auth ?? g?.$auth ?? g?.auth, t.$config ?? t.config ?? t.data?.$config ?? t.data?.config ?? t.runtime?.data?.$config ?? t.runtime?.config ?? g?.$config ?? g?.config, t.$env ?? t.env ?? t.data?.$env ?? t.data?.env ?? t.runtime?.data?.$env ?? t.runtime?.env ?? g?.$env ?? g?.env, t.$locale ?? t.locale ?? t.data?.$locale ?? t.data?.locale ?? t.runtime?.data?.$locale ?? t.runtime?.locale ?? g?.$locale ?? g?.locale, t.$translations ?? t.translations ?? t.data?.$translations ?? t.data?.translations ?? t.runtime?.data?.$translations ?? t.runtime?.translations ?? g?.$translations ?? g?.translations, t.$i18n ?? t.i18n ?? t.data?.$i18n ?? t.data?.i18n ?? t.runtime?.data?.$i18n ?? t.runtime?.i18n ?? g?.$i18n ?? g?.i18n;
  const k = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, X = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [te, G] = E(() => k ?? X());
  I(() => {
    k != null && G(k);
  }, [k]), I(() => {
    if (k != null || typeof document > "u") return;
    const e = document.documentElement, n = (u) => G(u?.detail?.theme ?? X()), a = new MutationObserver(n);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [k]);
  const j = K(null), [z, C] = E("lg");
  I(() => {
    if (!j.current) return;
    const e = new ResizeObserver((n) => {
      for (let a of n) {
        const u = a.contentRect.width;
        u < 768 ? C("sm") : u < 1024 ? C("md") : C("lg");
      }
    });
    return e.observe(j.current), () => e.disconnect();
  }, []);
  const c = U((e) => typeof e != "object" || e === null ? e : z === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : z === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [z]), o = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, ne = t.locale !== void 0 ? t.locale : t.data?.locale !== void 0 ? t.data.locale : "en", ae = t.linkedinUrl !== void 0 ? t.linkedinUrl : t.data?.linkedinUrl !== void 0 ? t.data.linkedinUrl : "https://www.linkedin.com", re = t.xUrl !== void 0 ? t.xUrl : t.data?.xUrl !== void 0 ? t.data.xUrl : "https://x.com", ie = t.children !== void 0 ? t.children : t.data?.children !== void 0 ? t.data.children : void 0, oe = t.navOptions !== void 0 ? t.navOptions : t.data?.navOptions !== void 0 ? t.data.navOptions : [{ href: "/", label: "Explore" }, { href: "/browse", label: "Browse" }, { href: "/professor/context", label: "Professor" }], le = t.avatarUrl !== void 0 ? t.avatarUrl : t.data?.avatarUrl !== void 0 ? t.data.avatarUrl : "", Q = t.authenticated !== void 0 ? t.authenticated : t.data?.authenticated !== void 0 ? t.data.authenticated : !1, ue = t.title !== void 0 ? t.title : t.data?.title !== void 0 ? t.data.title : "Rudra Scholar", ce = t.copyrightText !== void 0 ? t.copyrightText : t.data?.copyrightText !== void 0 ? t.data.copyrightText : "© 2026 Rudra Scholar", se = t.displayName !== void 0 ? t.displayName : t.data?.displayName !== void 0 ? t.data.displayName : "My account", b = { locale: ne, linkedinUrl: ae, xUrl: re, children: ie, navOptions: oe, avatarUrl: le, authenticated: Q, title: ue, copyrightText: ce, displayName: se }, [D, de] = E(() => structuredClone(!1)), [F, me] = E(() => structuredClone(!1)), [_, ge] = E(() => structuredClone(!1)), N = { accountMenuOpen: D, languageMenuOpen: F, mobileNavOpen: _ }, d = U((e, n) => {
    switch (e) {
      case "accountMenuOpen": {
        const a = typeof n == "function" ? n(N.accountMenuOpen) : n;
        return N.accountMenuOpen = a, de(a), a;
      }
      case "languageMenuOpen": {
        const a = typeof n == "function" ? n(N.languageMenuOpen) : n;
        return N.languageMenuOpen = a, me(a), a;
      }
      case "mobileNavOpen": {
        const a = typeof n == "function" ? n(N.mobileNavOpen) : n;
        return N.mobileNavOpen = a, ge(a), a;
      }
      default:
        return n;
    }
  }, [N]);
  U((e, n) => {
    const [a, ...u] = String(e || "").split(".");
    if (!a) return n;
    if (u.length === 0) return d(a, n);
    const h = (s) => {
      const v = Array.isArray(s) ? [...s] : { ...s || {} };
      let l = v;
      return u.forEach((m, O) => {
        O === u.length - 1 ? l[m] = n : (l[m] = Array.isArray(l[m]) ? [...l[m]] : { ...l[m] || {} }, l = l[m]);
      }), v;
    };
    switch (a) {
      case "accountMenuOpen":
        return d("accountMenuOpen", h), n;
      case "languageMenuOpen":
        return d("languageMenuOpen", h), n;
      case "mobileNavOpen":
        return d("mobileNavOpen", h), n;
      default:
        return n;
    }
  }, [d]);
  const he = { localeChanged: { properties: { locale: { type: "string" } }, required: ["locale"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, signOutRequested: { properties: { source: { type: "string" } }, required: ["source"], type: "object" } }, W = (e, n, a) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], h = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (u.length && !u.includes(h) && !(h === "integer" && u.includes("number"))) return a + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((s) => JSON.stringify(s) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const s of n.required || []) if (!Object.prototype.hasOwnProperty.call(e, s)) return a + "." + s + " is required.";
      for (const [s, v] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const l = W(e[s], v, a + "." + s);
        if (l) return l;
      }
    }
    if (Array.isArray(e) && n.items) for (let s = 0; s < e.length; s++) {
      const v = W(e[s], n.items, a + "[" + s + "]");
      if (v) return v;
    }
    return "";
  }, P = U(async (e, n, a = !1) => {
    const u = he[e];
    if (!u) throw new Error("Module output '" + e + "' is not declared.");
    const h = W(n, u, "output." + e);
    if (h) throw new Error(h);
    const s = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof s != "function") return n;
    const v = s(e, n, { moduleId: t.moduleId, awaitHandlers: a });
    return a ? await v : n;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]);
  async function fe(e = {}) {
    const n = e || {}, a = {};
    {
      n.event;
      const u = await (async () => (function(s, v) {
        const l = s.event, m = { account: !!v.accountMenuOpen, language: !!v.languageMenuOpen, navigation: !!v.mobileNavOpen }, O = l?.target, $ = O?.closest?.(".rs-shell");
        if (!$) return m;
        const A = (M) => {
          if (M?.closest?.(".rs-mobile-navigation, .rs-mobile-nav-toggle")) return "navigation";
          const Z = M?.closest?.(".rs-dropdown")?.querySelector('[aria-haspopup="menu"]')?.id;
          return Z === "rs-account-trigger" ? "account" : Z === "rs-language-trigger" ? "language" : null;
        }, J = (M) => ({ account: M === "account" && m.account, language: M === "language" && m.language, navigation: M === "navigation" && m.navigation });
        if (l.type === "pointerdown") return J(A(O));
        if (l.type === "blur") return J($.contains(l.relatedTarget) ? A(l.relatedTarget) : null);
        const B = A(O);
        if (l.key === "Escape" && (m.account || m.language || m.navigation)) {
          l.preventDefault();
          const M = B || (m.navigation ? "navigation" : m.account ? "account" : "language");
          return $.querySelector(M === "navigation" ? "#rs-mobile-nav-trigger" : M === "account" ? "#rs-account-trigger" : "#rs-language-trigger")?.focus(), J(null);
        }
        if (!["account", "language"].includes(B) || !["ArrowDown", "ArrowUp", "Home", "End"].includes(l.key)) return m;
        const H = O.closest(".rs-dropdown"), Se = H.querySelector('[aria-haspopup="menu"]');
        l.preventDefault();
        const R = Array.from(H.querySelectorAll('[role="menuitem"]:not(:disabled)'));
        if (O === Se) {
          m.account = B === "account", m.language = B === "language", m.navigation = !1;
          const M = l.key;
          requestAnimationFrame(() => {
            const q = Array.from(H.querySelectorAll('[role="menuitem"]:not(:disabled)'));
            (M === "ArrowUp" ? q[q.length - 1] : q[0])?.focus();
          });
        } else if (R.length) {
          const M = R.indexOf(O.closest('[role="menuitem"]')), q = l.key === "Home" ? 0 : l.key === "End" ? R.length - 1 : (M + (l.key === "ArrowDown" ? 1 : -1) + R.length) % R.length;
          R[q]?.focus();
        }
        return m;
      })(n, N))();
      a.menu_event = u;
    }
    d("accountMenuOpen", a.menu_event.account), d("languageMenuOpen", a.menu_event.language), d("mobileNavOpen", a.menu_event.navigation);
  }
  async function ve(e = {}) {
    await L({}), d("accountMenuOpen", !1), await P("signOutRequested", { source: "shared-shell" }, !0);
  }
  async function ye(e = {}) {
    const n = e || {}, a = {};
    d("mobileNavOpen", !1);
    {
      n.event;
      const u = await (async () => !N.languageMenuOpen)();
      a.language_next = u;
    }
    d("languageMenuOpen", a.language_next), d("accountMenuOpen", !1);
  }
  async function be(e = {}) {
    const n = e || {}, a = {};
    d("mobileNavOpen", !1);
    {
      n.event;
      const u = await (async () => !N.accountMenuOpen)();
      a.account_next = u;
    }
    d("accountMenuOpen", a.account_next), d("languageMenuOpen", !1);
  }
  async function Oe(e = {}) {
    const n = e || {}, a = {};
    d("mobileNavOpen", !1), d("accountMenuOpen", !1), d("languageMenuOpen", !1);
    {
      n.event;
      const u = await (async () => {
        const h = n.event?.value;
        return typeof h == "string" && h.startsWith("/") ? h : "/";
      })();
      a.nav_button_path = u;
    }
    await P("navigationRequested", { path: a.nav_button_path }, !0);
  }
  async function Me(e = {}) {
    const n = e || {}, a = {};
    {
      n.event;
      const u = await (async () => !N.mobileNavOpen)();
      a.mobile_next = u;
    }
    d("accountMenuOpen", !1), d("languageMenuOpen", !1), d("mobileNavOpen", a.mobile_next);
  }
  async function we(e = {}) {
    const n = e || {};
    await L({}), d("accountMenuOpen", !1), await P("navigationRequested", { path: n.path }, !0);
  }
  async function Ne(e = {}) {
    const n = e || {};
    await L({}), d("languageMenuOpen", !1), await P("localeChanged", { locale: n.locale }, !0);
  }
  async function L(e = {}) {
    d("mobileNavOpen", !1), d("accountMenuOpen", !1), d("languageMenuOpen", !1);
  }
  const xe = {
    handleShellMenuEvent: fe,
    signOut: ve,
    toggleLanguageMenu: ye,
    toggleAccountMenu: be,
    navigateFromButton: Oe,
    toggleMobileNavigation: Me,
    navigate: we,
    selectLanguage: Ne,
    closeShellMenus: L
  }, Ae = {
    handleShellMenuEvent: ["event"],
    signOut: [],
    toggleLanguageMenu: [],
    toggleAccountMenu: [],
    navigateFromButton: ["event"],
    toggleMobileNavigation: [],
    navigate: ["path"],
    selectLanguage: ["locale"],
    closeShellMenus: []
  }, y = (e, n = {}, a = []) => {
    const u = xe[e];
    if (u) {
      const m = Ae[e] || [];
      return u(Object.fromEntries(m.map((O, $) => {
        const A = Object.prototype.hasOwnProperty.call(n, O) ? n[O] : void 0;
        return [O, (A === "" || A === void 0) && a[$] !== void 0 ? a[$] : O === "event" && (A === "" || A === void 0) ? a[0] : A];
      })));
    }
    const h = ee?.[e];
    if (typeof h == "function")
      return h(Object.keys(n).length > 0 ? n : a[0]);
    const [s, v] = String(e).split("."), l = typeof globalThis < "u" ? globalThis[s]?.[v] : void 0;
    if (typeof l == "function") return l(...Object.values(n));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, S = K(/* @__PURE__ */ new Map()), ke = U((e, n, a, u) => {
    const h = S.current.get(e);
    if (n === "exhaust" && h?.promise) return h.promise;
    n === "takeLatest" && h?.controller?.abort();
    const s = new AbortController(), v = () => Promise.resolve().then(() => a(s.signal)), l = n === "queue" && h?.promise ? h.promise.catch(() => {
    }).then(v) : v();
    return S.current.set(e, { controller: s, promise: l }), l.catch((m) => {
      m?.name !== "AbortError" && console.error(u, m);
    }).finally(() => {
      S.current.get(e)?.promise === l && S.current.delete(e);
    }), l;
  }, []);
  I(() => () => {
    for (const e of S.current.values()) e.controller?.abort();
    S.current.clear();
  }, []);
  const Y = K(!1);
  return I(() => {
    if (!Y.current) {
      Y.current = !0;
      return;
    }
    ke("shell_auth_changedcloseShellMenus", "takeLatest", (e) => L({}), "Module input lifecycle failed:");
  }, [Q]), /* @__PURE__ */ f("div", { ref: j, className: "rudra-module-wrapper", children: o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
    "      ",
    /* @__PURE__ */ r(w, { id: "shell", "data-theme": /* @__PURE__ */ ((e) => e === void 0 ? "light" : e)(te), className: "block rs-shell", onBlur: (...e) => y("handleShellMenuEvent", {}, e), onKeyDown: (...e) => y("handleShellMenuEvent", {}, e), onPointerDownCapture: (...e) => y("handleShellMenuEvent", {}, e), children: [
      "      ",
      o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
        "      ",
        /* @__PURE__ */ r(w, { id: "header", role: "banner", className: "block rs-header", children: [
          "      ",
          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
            "      ",
            /* @__PURE__ */ r(w, { id: "header_inner", className: "grid rs-header-inner", children: [
              "      ",
              o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                "      ",
                /* @__PURE__ */ f(T, { id: "brand", className: "rs-brand", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Rudra Scholar" : e)(b?.title) })
              ] }),
              o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                "      ",
                /* @__PURE__ */ f(p, { id: "nav", "aria-label": "Primary navigation", className: "flex flex-wrap items-center gap-2 rs-nav", role: "navigation", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(b?.navOptions), children: (e) => (() => {
                  const n = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                  return /* @__PURE__ */ r(i, { children: [
                    "      ",
                    o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ f(x, { id: "nav_item", className: "rs-nav-button", variant: "ghost", leftIcon: !1, onAction: (...a) => y("navigateFromButton", {}, a), rightIcon: !1, size: "sm", label: /* @__PURE__ */ ((a) => a === void 0 ? "Link" : a)(n?.item?.label), theme: "auto", value: /* @__PURE__ */ ((a) => a === void 0 ? "/" : a)(n?.item?.href) })
                    ] })
                  ] });
                })() })
              ] }),
              o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                "      ",
                /* @__PURE__ */ r(w, { id: "header_actions", className: "flex items-center rs-header-actions", children: [
                  "      ",
                  o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                    "      ",
                    /* @__PURE__ */ r(w, { id: "language_control", className: "block rs-dropdown", children: [
                      "      ",
                      o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ f(x, { id: "language_trigger", className: "rs-control-button", rightIcon: !1, "aria-expanded": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(F), additionalAttributes: { "aria-controls": "rs-language-menu", "aria-haspopup": "menu", id: "rs-language-trigger" }, id: "rs-language-trigger", size: "sm", variant: "ghost", ariaLabel: "Choose language", label: ((e) => ({ en: "English", hi: "हिन्दी", ta: "தமிழ்" })[e] || "English")(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)), theme: "auto", leftIcon: !1, onAction: (...e) => y("toggleLanguageMenu", {}, e) })
                      ] }),
                      o(F) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ r(w, { id: "language_menu", "aria-label": "Language", "aria-labelledby": "rs-language-trigger", id: "rs-language-menu", role: "menu", className: "block rs-menu rs-language-menu", children: [
                          "      ",
                          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                            "      ",
                            /* @__PURE__ */ f(x, { id: "lang_en", className: "rs-menu-button", theme: "auto", variant: "ghost", leftIcon: !1, onAction: (...e) => y("selectLanguage", { locale: "en" }, e), additionalAttributes: { role: "menuitem" }, label: "English", fullWidth: !0, rightIcon: !1, size: "sm" })
                          ] }),
                          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                            "      ",
                            /* @__PURE__ */ f(x, { id: "lang_hi", className: "rs-menu-button", rightIcon: !1, variant: "ghost", leftIcon: !1, fullWidth: !0, additionalAttributes: { role: "menuitem" }, size: "sm", label: "हिन्दी", theme: "auto", onAction: (...e) => y("selectLanguage", { locale: "hi" }, e) })
                          ] }),
                          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                            "      ",
                            /* @__PURE__ */ f(x, { id: "lang_ta", className: "rs-menu-button", size: "sm", label: "தமிழ்", theme: "auto", leftIcon: !1, onAction: (...e) => y("selectLanguage", { locale: "ta" }, e), fullWidth: !0, additionalAttributes: { role: "menuitem" }, variant: "ghost", rightIcon: !1 })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  o(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(b?.authenticated)) && /* @__PURE__ */ r(i, { children: [
                    "      ",
                    /* @__PURE__ */ r(w, { id: "account_control", className: "block rs-dropdown", children: [
                      "      ",
                      o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ r(x, { id: "account_trigger", className: "rs-avatar-button", size: "sm", theme: "auto", variant: "ghost", onAction: (...e) => y("toggleAccountMenu", {}, e), ariaLabel: "Account menu", rightIcon: !1, additionalAttributes: { "aria-controls": "rs-account-menu", "aria-haspopup": "menu", id: "rs-account-trigger" }, id: "rs-account-trigger", leftIcon: !1, "aria-expanded": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D), children: [
                          "      ",
                          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                            "      ",
                            /* @__PURE__ */ f($e, { id: "avatar", alt: /* @__PURE__ */ ((e) => e === void 0 ? "My account" : e)(b?.displayName), src: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(b?.avatarUrl), name: /* @__PURE__ */ ((e) => e === void 0 ? "My account" : e)(b?.displayName), theme: "auto", status: "none", referrerPolicy: "no-referrer", size: "md", shape: "circle", loading: "lazy" })
                          ] })
                        ] })
                      ] }),
                      o(D) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ r(w, { id: "account_menu", id: "rs-account-menu", role: "menu", "aria-label": "Account", "aria-labelledby": "rs-account-trigger", className: "block rs-menu rs-account-menu", children: [
                          "      ",
                          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                            "      ",
                            /* @__PURE__ */ f(x, { id: "metrics", className: "rs-menu-button", size: "sm", theme: "auto", leftIcon: !1, onAction: (...e) => y("navigate", { path: "/account/usage" }, e), fullWidth: !0, rightIcon: !1, additionalAttributes: { role: "menuitem" }, label: "Usage \\u0026 metrics", variant: "ghost" })
                          ] }),
                          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                            "      ",
                            /* @__PURE__ */ f(x, { id: "logout", className: "rs-menu-button rs-danger", variant: "ghost", leftIcon: !1, onAction: (...e) => y("signOut", {}, e), fullWidth: !0, size: "sm", theme: "auto", ariaLabel: "Sign out of Rudra Scholar", rightIcon: !1, additionalAttributes: { role: "menuitem" }, label: "Sign out" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  o(/* @__PURE__ */ ((e) => !e)(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(b?.authenticated))) && /* @__PURE__ */ r(i, { children: [
                    "      ",
                    /* @__PURE__ */ f(x, { id: "sign_in", className: "rs-nav-button rs-sign-in", size: "sm", onAction: (...e) => y("navigate", { path: "/access" }, e), rightIcon: !1, label: "Sign in", theme: "auto", variant: "outline", leftIcon: !1, ariaLabel: "Sign in to Rudra Scholar" })
                  ] }),
                  o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                    "      ",
                    /* @__PURE__ */ f(x, { id: "mobile_nav_trigger", className: "rs-mobile-nav-toggle", additionalAttributes: { "aria-controls": "rs-mobile-navigation" }, type: "button", label: /* @__PURE__ */ ((e) => e ? "×" : "☰")(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_)), onAction: (...e) => y("toggleMobileNavigation", {}, e), "aria-expanded": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_), id: "rs-mobile-nav-trigger", leftIcon: !1, ariaLabel: /* @__PURE__ */ ((e) => e ? "Close navigation" : "Open navigation")(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_)), rightIcon: !1 })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          o(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_)) && /* @__PURE__ */ r(i, { children: [
            "      ",
            /* @__PURE__ */ f(p, { id: "mobile_navigation", className: "rs-mobile-navigation", id: "rs-mobile-navigation", role: "navigation", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(b?.navOptions), "aria-label": "Mobile primary navigation", children: (e) => (() => {
              const n = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
              return /* @__PURE__ */ r(i, { children: [
                "      ",
                o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ f(x, { id: "mobile_nav_item", className: "rs-nav-button", leftIcon: !1, size: "sm", label: /* @__PURE__ */ ((a) => a === void 0 ? "Link" : a)(n?.item?.label), variant: "ghost", onAction: (...a) => y("navigateFromButton", {}, a), rightIcon: !1, theme: "auto", value: /* @__PURE__ */ ((a) => a === void 0 ? "/" : a)(n?.item?.href) })
                ] })
              ] });
            })() })
          ] })
        ] })
      ] }),
      o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
        "      ",
        /* @__PURE__ */ r(w, { id: "page_content", id: "rs-page-content", role: "main", tabIndex: -1, className: "block rs-main", children: [
          "      ",
          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
            "      ",
            /* @__PURE__ */ f(w, { id: "el_1788753588621_u0zi0vw", className: "block rs-page-slot", children: b?.children })
          ] })
        ] })
      ] }),
      o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
        "      ",
        /* @__PURE__ */ r(w, { id: "footer", role: "contentinfo", className: "block rs-footer", children: [
          "      ",
          o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
            "      ",
            /* @__PURE__ */ r(w, { id: "footer_inner", className: "flex items-center rs-footer-inner", children: [
              "      ",
              o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                "      ",
                /* @__PURE__ */ f(T, { id: "copyright", className: "rs-copyright", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "© 2026 Rudra Scholar" : e)(b?.copyrightText) })
              ] }),
              o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                "      ",
                /* @__PURE__ */ r(w, { id: "socials", "aria-label": "Social links", className: "flex items-center rs-socials", children: [
                  "      ",
                  o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                    "      ",
                    /* @__PURE__ */ r(V, { id: "linkedin", className: "rs-social-link", rel: "noopener noreferrer", href: /* @__PURE__ */ ((e) => e === void 0 ? "https://www.linkedin.com" : e)(b?.linkedinUrl), target: "_blank", children: [
                      "      ",
                      o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ f(T, { id: "linkedin_text", className: "rs-social-mark", as: "span", content: "in" })
                      ] })
                    ] })
                  ] }),
                  o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                    "      ",
                    /* @__PURE__ */ r(V, { id: "x", className: "rs-social-link", rel: "noopener noreferrer", href: /* @__PURE__ */ ((e) => e === void 0 ? "https://x.com" : e)(b?.xUrl), target: "_blank", children: [
                      "      ",
                      o(c({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ f(T, { id: "x_text", className: "rs-social-mark", as: "span", content: "X" })
                      ] })
                    ] })
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
  Ee as default
};
