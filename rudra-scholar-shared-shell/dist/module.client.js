import { jsxs as r, Fragment as i, jsx as u } from "react/jsx-runtime";
import { useState as A, useEffect as T, useRef as ie, useCallback as _ } from "react";
import { Box as d, Repeater as oe } from "@rudra-studio/rudra-layout";
import { Typography as p, Button as b, Avatar as le, Link as P } from "@rudra-studio/rudra-core";
function me(t) {
  const N = {}, S = t.serverData || t.serverState || {};
  t.sharedState, t.applicationState || S.applicationState, t.pageState || S.pageState, t.pageData || S.pageData;
  const B = {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  }, y = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, z = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [D, E] = A(() => y ?? z());
  T(() => {
    y != null && E(y);
  }, [y]), T(() => {
    if (y != null || typeof document > "u") return;
    const e = document.documentElement, n = (c) => E(c?.detail?.theme ?? z()), a = new MutationObserver(n);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [y]);
  const R = ie(null), [U, I] = A("lg");
  T(() => {
    if (!R.current) return;
    const e = new ResizeObserver((n) => {
      for (let a of n) {
        const c = a.contentRect.width;
        c < 768 ? I("sm") : c < 1024 ? I("md") : I("lg");
      }
    });
    return e.observe(R.current), () => e.disconnect();
  }, []);
  const l = _((e) => typeof e != "object" || e === null ? e : U === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : U === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [U]), o = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, W = t.linkedinUrl !== void 0 ? t.linkedinUrl : t.data?.linkedinUrl !== void 0 ? t.data.linkedinUrl : "https://www.linkedin.com", F = t.xUrl !== void 0 ? t.xUrl : t.data?.xUrl !== void 0 ? t.data.xUrl : "https://x.com";
  t.displayName !== void 0 ? t.displayName : t.data?.displayName !== void 0 && t.data.displayName, t.locale !== void 0 ? t.locale : t.data?.locale !== void 0 && t.data.locale;
  const J = t.children !== void 0 ? t.children : t.data?.children !== void 0 ? t.data.children : void 0, X = t.navOptions !== void 0 ? t.navOptions : t.data?.navOptions !== void 0 ? t.data.navOptions : [{ href: "/", label: "Explore" }, { href: "/browse", label: "Browse" }, { href: "/professor/context", label: "Professor" }];
  t.avatarUrl !== void 0 ? t.avatarUrl : t.data?.avatarUrl !== void 0 && t.data.avatarUrl, t.authenticated !== void 0 ? t.authenticated : t.data?.authenticated !== void 0 && t.data.authenticated;
  const G = t.title !== void 0 ? t.title : t.data?.title !== void 0 ? t.data.title : "Rudra Scholar", K = t.copyrightText !== void 0 ? t.copyrightText : t.data?.copyrightText !== void 0 ? t.data.copyrightText : "© 2026 Rudra Scholar", M = { linkedinUrl: W, xUrl: F, children: J, navOptions: X, title: G, copyrightText: K }, [q, Q] = A(() => structuredClone(!1)), [$, Y] = A(() => structuredClone(!1)), x = { accountMenuOpen: q, languageMenuOpen: $ }, g = _((e, n) => {
    switch (e) {
      case "accountMenuOpen": {
        const a = typeof n == "function" ? n(x.accountMenuOpen) : n;
        return x.accountMenuOpen = a, Q(a), a;
      }
      case "languageMenuOpen": {
        const a = typeof n == "function" ? n(x.languageMenuOpen) : n;
        return x.languageMenuOpen = a, Y(a), a;
      }
      default:
        return n;
    }
  }, [x]);
  _((e, n) => {
    const [a, ...c] = String(e || "").split(".");
    if (!a) return n;
    if (c.length === 0) return g(a, n);
    const h = (s) => {
      const f = Array.isArray(s) ? [...s] : { ...s || {} };
      let m = f;
      return c.forEach((O, w) => {
        w === c.length - 1 ? m[O] = n : (m[O] = Array.isArray(m[O]) ? [...m[O]] : { ...m[O] || {} }, m = m[O]);
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
  const Z = { localeChanged: { properties: { locale: { type: "string" } }, required: ["locale"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, signOutRequested: { properties: { source: { type: "string" } }, required: ["source"], type: "object" } }, L = (e, n, a) => {
    if (!n || typeof n != "object") return "";
    const c = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], h = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (c.length && !c.includes(h) && !(h === "integer" && c.includes("number"))) return a + " must be " + c.join(" or ") + ".";
    if (n.enum && !n.enum.some((s) => JSON.stringify(s) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const s of n.required || []) if (!Object.prototype.hasOwnProperty.call(e, s)) return a + "." + s + " is required.";
      for (const [s, f] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const m = L(e[s], f, a + "." + s);
        if (m) return m;
      }
    }
    if (Array.isArray(e) && n.items) for (let s = 0; s < e.length; s++) {
      const f = L(e[s], n.items, a + "[" + s + "]");
      if (f) return f;
    }
    return "";
  }, j = _(async (e, n, a = !1) => {
    const c = Z[e];
    if (!c) throw new Error("Module output '" + e + "' is not declared.");
    const h = L(n, c, "output." + e);
    if (h) throw new Error(h);
    const s = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof s != "function") return n;
    const f = s(e, n, { moduleId: t.moduleId, awaitHandlers: a });
    return a ? await f : n;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]);
  async function H(e = {}) {
    const n = e || {}, a = {};
    {
      n.event;
      const c = await (async () => !x.languageMenuOpen)();
      a.language_next = c;
    }
    g("languageMenuOpen", a.language_next), g("accountMenuOpen", !1);
  }
  async function V(e = {}) {
    const n = e || {}, a = {};
    {
      n.event;
      const c = await (async () => !x.accountMenuOpen)();
      a.account_next = c;
    }
    g("accountMenuOpen", a.account_next), g("languageMenuOpen", !1);
  }
  async function ee(e = {}) {
    const n = e || {};
    g("accountMenuOpen", !1), j("navigationRequested", { path: n.path }, !1).catch((a) => console.error("Module output delivery failed", a));
  }
  async function te(e = {}) {
    g("accountMenuOpen", !1), j("signOutRequested", { source: "shared-shell" }, !1).catch((n) => console.error("Module output delivery failed", n));
  }
  async function ne(e = {}) {
    const n = e || {};
    g("languageMenuOpen", !1), j("localeChanged", { locale: n.locale }, !1).catch((a) => console.error("Module output delivery failed", a));
  }
  const re = {
    toggleLanguageMenu: H,
    toggleAccountMenu: V,
    navigate: ee,
    signOut: te,
    selectLanguage: ne
  }, ae = {
    toggleLanguageMenu: [],
    toggleAccountMenu: [],
    navigate: ["path"],
    signOut: [],
    selectLanguage: ["locale"]
  }, v = (e, n = {}, a = []) => {
    const c = re[e];
    if (c) {
      const O = ae[e] || [];
      return c(Object.fromEntries(O.map((w, C) => {
        const k = Object.prototype.hasOwnProperty.call(n, w) ? n[w] : void 0;
        return [w, (k === "" || k === void 0) && a[C] !== void 0 ? a[C] : w === "event" && (k === "" || k === void 0) ? a[0] : k];
      })));
    }
    const h = B?.[e];
    if (typeof h == "function")
      return h(Object.keys(n).length > 0 ? n : a[0]);
    const [s, f] = String(e).split("."), m = typeof globalThis < "u" ? globalThis[s]?.[f] : void 0;
    if (typeof m == "function") return m(...Object.values(n));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ r("div", { ref: R, className: "rudra-module-wrapper", children: [
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
                  /* @__PURE__ */ u(p, { id: "brand", className: "rs-brand", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Rudra Scholar" : e)(M?.title) })
                ] }),
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ u(oe, { id: "nav", "aria-label": "Primary navigation", className: "flex flex-wrap items-center gap-2 rs-nav", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(M?.navOptions), children: (e) => (() => {
                    const n = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                    return /* @__PURE__ */ r(i, { children: [
                      "      ",
                      o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { id: "nav_item", className: "rs-nav-button", size: "sm", label: /* @__PURE__ */ ((a) => a === void 0 ? "Link" : a)(n?.item?.label), theme: "auto", variant: "ghost", leftIcon: !1, onAction: (...a) => v("navigate", {}, a), rightIcon: !1 })
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
                          /* @__PURE__ */ u(b, { id: "language_trigger", className: "rs-control-button", theme: "auto", onAction: (...e) => v("toggleLanguageMenu", {}, e), ariaLabel: "Choose language", rightIcon: !1, size: "sm", label: void 0, variant: "ghost", leftIcon: !1 })
                        ] }),
                        o($) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ r(d, { id: "language_menu", role: "menu", "aria-label": "Language", className: "block rs-menu rs-language-menu", children: [
                            "      ",
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(b, { id: "lang_en", className: "rs-menu-button", leftIcon: !1, onAction: (...e) => v("selectLanguage", {}, e), fullWidth: !0, size: "sm", label: "English", theme: "auto", variant: "ghost", rightIcon: !1 })
                            ] }),
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(b, { id: "lang_hi", className: "rs-menu-button", label: "हिन्दी", variant: "ghost", onAction: (...e) => v("selectLanguage", {}, e), fullWidth: !0, rightIcon: !1, size: "sm", theme: "auto", leftIcon: !1 })
                            ] })
                          ] })
                        ] })
                      ] })
                    ] }),
                    o(void 0) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ u(b, { id: "sign_in", className: "rs-nav-button rs-sign-in", label: "Sign in", theme: "auto", variant: "outline", leftIcon: !1, onAction: (...e) => v("navigate", {}, e), rightIcon: !1, size: "sm" })
                    ] }),
                    o(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(N?.$auth?.isAuthenticated)) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ r(d, { id: "account_control", className: "block rs-dropdown", children: [
                        "      ",
                        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ r(b, { id: "account_trigger", className: "rs-avatar-button", theme: "auto", onAction: (...e) => v("toggleAccountMenu", {}, e), size: "sm", variant: "ghost", leftIcon: !1, ariaLabel: "Open account menu", rightIcon: !1, children: [
                            "      ",
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(le, { id: "avatar", shape: "circle", theme: "auto", status: "none", loading: "lazy", alt: /* @__PURE__ */ ((e) => e === void 0 ? "My account" : e)(N?.$auth?.user?.profile?.name), src: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(N?.$auth?.user?.profile?.avatar), name: /* @__PURE__ */ ((e) => e === void 0 ? "My account" : e)(N?.$auth?.user?.profile?.name), size: "md" })
                            ] })
                          ] })
                        ] }),
                        o(q) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ r(d, { id: "account_menu", role: "menu", "aria-label": "Account", className: "block rs-menu rs-account-menu", children: [
                            "      ",
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(b, { id: "metrics", className: "rs-menu-button", rightIcon: !1, label: "Usage \\u0026 metrics", theme: "auto", size: "sm", variant: "ghost", leftIcon: !1, onAction: (...e) => v("navigate", {}, e), fullWidth: !0 })
                            ] }),
                            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                              "      ",
                              /* @__PURE__ */ u(b, { id: "logout", className: "rs-menu-button rs-danger", fullWidth: !0, rightIcon: !1, size: "sm", theme: "auto", label: "Sign out", variant: "ghost", leftIcon: !1, onAction: (...e) => v("signOut", {}, e) })
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
              /* @__PURE__ */ u(d, { id: "el_1788753560389_x3pqf9a" })
            ] }),
            o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
              "      ",
              /* @__PURE__ */ u(d, { id: "el_1788753588621_u0zi0vw", children: M?.children })
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
                  /* @__PURE__ */ u(p, { id: "copyright", className: "rs-copyright", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "© 2026 Rudra Scholar" : e)(M?.copyrightText) })
                ] }),
                o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                  "      ",
                  /* @__PURE__ */ r(d, { id: "socials", "aria-label": "Social links", className: "flex items-center rs-socials", children: [
                    "      ",
                    o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ r(P, { id: "linkedin", className: "rs-social-link", rel: "noopener noreferrer", href: /* @__PURE__ */ ((e) => e === void 0 ? "https://www.linkedin.com" : e)(M?.linkedinUrl), target: "_blank", children: [
                        "      ",
                        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ u(p, { id: "linkedin_text", className: "rs-social-mark", as: "span", content: "in" })
                        ] })
                      ] })
                    ] }),
                    o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                      "      ",
                      /* @__PURE__ */ r(P, { id: "x", className: "rs-social-link", target: "_blank", rel: "noopener noreferrer", href: /* @__PURE__ */ ((e) => e === void 0 ? "https://x.com" : e)(M?.xUrl), children: [
                        "      ",
                        o(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(i, { children: [
                          "      ",
                          /* @__PURE__ */ u(p, { id: "x_text", className: "rs-social-mark", as: "span", content: "X" })
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
  me as default
};
