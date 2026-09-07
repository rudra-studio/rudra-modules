import { jsxs as r, jsx as u, Fragment as i } from "react/jsx-runtime";
import { useState as N, useEffect as T, useRef as ae, useCallback as A } from "react";
import { Box as d, Repeater as ie } from "@rudra-studio/rudra-layout";
import { Typography as _, Button as O, Avatar as oe, Link as B } from "@rudra-studio/rudra-core";
function de(t) {
  const p = {}, R = t.serverData || t.serverState || {};
  t.sharedState, t.applicationState || R.applicationState, t.pageState || R.pageState, t.pageData || R.pageData;
  const P = {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  }, y = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, z = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [D, E] = N(() => y ?? z());
  T(() => {
    y != null && E(y);
  }, [y]), T(() => {
    if (y != null || typeof document > "u") return;
    const e = document.documentElement, n = (c) => E(c?.detail?.theme ?? z()), a = new MutationObserver(n);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [y]);
  const S = ae(null), [j, U] = N("lg");
  T(() => {
    if (!S.current) return;
    const e = new ResizeObserver((n) => {
      for (let a of n) {
        const c = a.contentRect.width;
        c < 768 ? U("sm") : c < 1024 ? U("md") : U("lg");
      }
    });
    return e.observe(S.current), () => e.disconnect();
  }, []);
  const l = A((e) => typeof e != "object" || e === null ? e : j === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : j === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [j]), o = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, W = t.linkedinUrl !== void 0 ? t.linkedinUrl : t.data?.linkedinUrl !== void 0 ? t.data.linkedinUrl : "https://www.linkedin.com", F = t.xUrl !== void 0 ? t.xUrl : t.data?.xUrl !== void 0 ? t.data.xUrl : "https://x.com";
  t.displayName !== void 0 ? t.displayName : t.data?.displayName !== void 0 && t.data.displayName, t.locale !== void 0 ? t.locale : t.data?.locale !== void 0 && t.data.locale, t.children !== void 0 ? t.children : t.data?.children !== void 0 && t.data.children;
  const J = t.navOptions !== void 0 ? t.navOptions : t.data?.navOptions !== void 0 ? t.data.navOptions : [{ href: "/", label: "Explore" }, { href: "/browse", label: "Browse" }, { href: "/professor/context", label: "Professor" }];
  t.avatarUrl !== void 0 ? t.avatarUrl : t.data?.avatarUrl !== void 0 && t.data.avatarUrl, t.authenticated !== void 0 ? t.authenticated : t.data?.authenticated !== void 0 && t.data.authenticated;
  const X = t.title !== void 0 ? t.title : t.data?.title !== void 0 ? t.data.title : "Rudra Scholar", G = t.copyrightText !== void 0 ? t.copyrightText : t.data?.copyrightText !== void 0 ? t.data.copyrightText : "© 2026 Rudra Scholar", w = { linkedinUrl: W, xUrl: F, navOptions: J, title: X, copyrightText: G }, [q, K] = N(() => structuredClone(!1)), [$, Q] = N(() => structuredClone(!1)), x = { accountMenuOpen: q, languageMenuOpen: $ }, g = A((e, n) => {
    switch (e) {
      case "accountMenuOpen": {
        const a = typeof n == "function" ? n(x.accountMenuOpen) : n;
        return x.accountMenuOpen = a, K(a), a;
      }
      case "languageMenuOpen": {
        const a = typeof n == "function" ? n(x.languageMenuOpen) : n;
        return x.languageMenuOpen = a, Q(a), a;
      }
      default:
        return n;
    }
  }, [x]);
  A((e, n) => {
    const [a, ...c] = String(e || "").split(".");
    if (!a) return n;
    if (c.length === 0) return g(a, n);
    const h = (s) => {
      const f = Array.isArray(s) ? [...s] : { ...s || {} };
      let m = f;
      return c.forEach((b, M) => {
        M === c.length - 1 ? m[b] = n : (m[b] = Array.isArray(m[b]) ? [...m[b]] : { ...m[b] || {} }, m = m[b]);
      }), f;
    };
    switch (a) {
      case "accountMenuOpen":
        return g("accountMenuOpen", h), n;
      case "languageMenuOpen":
        return g("languageMenuOpen", h), n;
      default:
        return n;
    }
  }, [g]);
  const Y = { localeChanged: { properties: { locale: { type: "string" } }, required: ["locale"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, signOutRequested: { properties: { source: { type: "string" } }, required: ["source"], type: "object" } }, I = (e, n, a) => {
    if (!n || typeof n != "object") return "";
    const c = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], h = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (c.length && !c.includes(h) && !(h === "integer" && c.includes("number"))) return a + " must be " + c.join(" or ") + ".";
    if (n.enum && !n.enum.some((s) => JSON.stringify(s) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const s of n.required || []) if (!Object.prototype.hasOwnProperty.call(e, s)) return a + "." + s + " is required.";
      for (const [s, f] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const m = I(e[s], f, a + "." + s);
        if (m) return m;
      }
    }
    if (Array.isArray(e) && n.items) for (let s = 0; s < e.length; s++) {
      const f = I(e[s], n.items, a + "[" + s + "]");
      if (f) return f;
    }
    return "";
  }, L = A(async (e, n, a = !1) => {
    const c = Y[e];
    if (!c) throw new Error("Module output '" + e + "' is not declared.");
    const h = I(n, c, "output." + e);
    if (h) throw new Error(h);
    const s = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof s != "function") return n;
    const f = s(e, n, { moduleId: t.moduleId, awaitHandlers: a });
    return a ? await f : n;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]);
  async function Z(e = {}) {
    const n = e || {}, a = {};
    {
      n.event;
      const c = await (async () => !x.languageMenuOpen)();
      a.language_next = c;
    }
    g("languageMenuOpen", a.language_next), g("accountMenuOpen", !1);
  }
  async function H(e = {}) {
    const n = e || {}, a = {};
    {
      n.event;
      const c = await (async () => !x.accountMenuOpen)();
      a.account_next = c;
    }
    g("accountMenuOpen", a.account_next), g("languageMenuOpen", !1);
  }
  async function V(e = {}) {
    const n = e || {};
    g("accountMenuOpen", !1), L("navigationRequested", { path: n.path }, !1).catch((a) => console.error("Module output delivery failed", a));
  }
  async function ee(e = {}) {
    g("accountMenuOpen", !1), L("signOutRequested", { source: "shared-shell" }, !1).catch((n) => console.error("Module output delivery failed", n));
  }
  async function te(e = {}) {
    const n = e || {};
    g("languageMenuOpen", !1), L("localeChanged", { locale: n.locale }, !1).catch((a) => console.error("Module output delivery failed", a));
  }
  const ne = {
    toggleLanguageMenu: Z,
    toggleAccountMenu: H,
    navigate: V,
    signOut: ee,
    selectLanguage: te
  }, re = {
    toggleLanguageMenu: [],
    toggleAccountMenu: [],
    navigate: ["path"],
    signOut: [],
    selectLanguage: ["locale"]
  }, v = (e, n = {}, a = []) => {
    const c = ne[e];
    if (c) {
      const b = re[e] || [];
      return c(Object.fromEntries(b.map((M, C) => {
        const k = Object.prototype.hasOwnProperty.call(n, M) ? n[M] : void 0;
        return [M, (k === "" || k === void 0) && a[C] !== void 0 ? a[C] : M === "event" && (k === "" || k === void 0) ? a[0] : k];
      })));
    }
    const h = P?.[e];
    if (typeof h == "function")
      return h(Object.keys(n).length > 0 ? n : a[0]);
    const [s, f] = String(e).split("."), m = typeof globalThis < "u" ? globalThis[s]?.[f] : void 0;
    if (typeof m == "function") return m(...Object.values(n));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ r("div", { ref: S, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ u("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-layout@1.0.26/components/Box/styles.css", precedence: "rudra-library" }),
    /* @__PURE__ */ u("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-layout@1.0.26/components/Repeater/styles.css", precedence: "rudra-library" }),
    o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
      "      ",
      /* @__PURE__ */ r(d, { id: "shell", "data-theme": /* @__PURE__ */ ((e) => e === void 0 ? "light" : e)(D), className: "block rs-shell", children: [
        "      ",
        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ r(d, { id: "header", role: "banner", className: "block rs-header", children: [
            "      ",
            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(d, { id: "header_inner", className: "grid rs-header-inner", children: [
                "      ",
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ u(_, { id: "brand", className: "rs-brand", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Rudra Scholar" : e)(w?.title) })
                ] }),
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ u(ie, { id: "nav", "aria-label": "Primary navigation", className: "flex flex-wrap items-center gap-2 rs-nav", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(w?.navOptions), children: (e) => (() => {
                    const n = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                    return /* @__PURE__ */ r(i, { children: [
                      "      ",
                      o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ u(O, { id: "nav_item", className: "rs-nav-button", rightIcon: !1, size: "sm", label: /* @__PURE__ */ ((a) => a === void 0 ? "Link" : a)(n?.item?.label), theme: "auto", variant: "ghost", leftIcon: !1, onAction: (...a) => v("navigate", {}, a) })
                      ] })
                    ] });
                  })() })
                ] }),
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ r(d, { id: "header_actions", className: "flex items-center rs-header-actions", children: [
                    "      ",
                    o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ r(d, { id: "language_control", className: "block rs-dropdown", children: [
                        "      ",
                        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ u(O, { id: "language_trigger", className: "rs-control-button", size: "sm", label: void 0, onAction: (...e) => v("toggleLanguageMenu", {}, e), ariaLabel: "Choose language", rightIcon: !1, theme: "auto", variant: "ghost", leftIcon: !1 })
                        ] }),
                        o($) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ r(d, { id: "language_menu", role: "menu", "aria-label": "Language", className: "block rs-menu rs-language-menu", children: [
                            "      ",
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(O, { id: "lang_en", className: "rs-menu-button", size: "sm", theme: "auto", variant: "ghost", onAction: (...e) => v("selectLanguage", {}, e), fullWidth: !0, rightIcon: !1, label: "English", leftIcon: !1 })
                            ] }),
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(O, { id: "lang_hi", className: "rs-menu-button", size: "sm", label: "हिन्दी", theme: "auto", variant: "ghost", fullWidth: !0, rightIcon: !1, leftIcon: !1, onAction: (...e) => v("selectLanguage", {}, e) })
                            ] })
                          ] })
                        ] })
                      ] })
                    ] }),
                    o(void 0) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ u(O, { id: "sign_in", className: "rs-nav-button rs-sign-in", onAction: (...e) => v("navigate", {}, e), rightIcon: !1, size: "sm", label: "Sign in", theme: "auto", variant: "outline", leftIcon: !1 })
                    ] }),
                    o(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(p?.$auth?.isAuthenticated)) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ r(d, { id: "account_control", className: "block rs-dropdown", children: [
                        "      ",
                        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ r(O, { id: "account_trigger", className: "rs-avatar-button", size: "sm", theme: "auto", variant: "ghost", leftIcon: !1, onAction: (...e) => v("toggleAccountMenu", {}, e), ariaLabel: "Open account menu", rightIcon: !1, children: [
                            "      ",
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(oe, { id: "avatar", name: /* @__PURE__ */ ((e) => e === void 0 ? "My account" : e)(p?.$auth?.user?.profile?.name), size: "md", shape: "circle", theme: "auto", status: "none", loading: "lazy", alt: /* @__PURE__ */ ((e) => e === void 0 ? "My account" : e)(p?.$auth?.user?.profile?.name), src: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(p?.$auth?.user?.profile?.avatar) })
                            ] })
                          ] })
                        ] }),
                        o(q) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ r(d, { id: "account_menu", role: "menu", "aria-label": "Account", className: "block rs-menu rs-account-menu", children: [
                            "      ",
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(O, { id: "metrics", className: "rs-menu-button", variant: "ghost", onAction: (...e) => v("navigate", {}, e), rightIcon: !1, size: "sm", label: "Usage \\u0026 metrics", theme: "auto", leftIcon: !1, fullWidth: !0 })
                            ] }),
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(O, { id: "logout", className: "rs-menu-button rs-danger", size: "sm", label: "Sign out", onAction: (...e) => v("signOut", {}, e), theme: "auto", variant: "ghost", leftIcon: !1, fullWidth: !0, rightIcon: !1 })
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
        ] }),
        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ r(d, { id: "page_content", id: "rs-page-content", role: "main", tabIndex: -1, className: "block rs-main", children: [
            "      ",
            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(d, { id: "el_1788753560389_x3pqf9a", children: [
                "      ",
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ u(d, { id: "el_1788753588621_u0zi0vw" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
          "      ",
          /* @__PURE__ */ r(d, { id: "footer", role: "contentinfo", className: "block rs-footer", children: [
            "      ",
            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ r(d, { id: "footer_inner", className: "flex items-center rs-footer-inner", children: [
                "      ",
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ u(_, { id: "copyright", className: "rs-copyright", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "© 2026 Rudra Scholar" : e)(w?.copyrightText) })
                ] }),
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ r(d, { id: "socials", "aria-label": "Social links", className: "flex items-center rs-socials", children: [
                    "      ",
                    o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ r(B, { id: "linkedin", className: "rs-social-link", rel: "noopener noreferrer", href: /* @__PURE__ */ ((e) => e === void 0 ? "https://www.linkedin.com" : e)(w?.linkedinUrl), target: "_blank", children: [
                        "      ",
                        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ u(_, { id: "linkedin_text", className: "rs-social-mark", as: "span", content: "in" })
                        ] })
                      ] })
                    ] }),
                    o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ r(B, { id: "x", className: "rs-social-link", rel: "noopener noreferrer", href: /* @__PURE__ */ ((e) => e === void 0 ? "https://x.com" : e)(w?.xUrl), target: "_blank", children: [
                        "      ",
                        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ u(_, { id: "x_text", className: "rs-social-mark", as: "span", content: "X" })
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
    ] }),
    o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
      "      ",
      /* @__PURE__ */ u(d, { id: "el_1788753553389_7ev6zjd" })
    ] })
  ] });
}
export {
  de as default
};
