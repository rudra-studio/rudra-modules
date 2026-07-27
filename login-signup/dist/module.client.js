import { jsx as l, jsxs as g, Fragment as V } from "react/jsx-runtime";
import R, { useState as w, useEffect as W, useRef as Z, useCallback as N } from "react";
import { JSONForm as ee } from "@rudra-studio/rudra-form";
import * as T from "lucide-react";
import { Box as A } from "@rudra-studio/rudra-layout";
import { Typography as $, Button as P } from "@rudra-studio/rudra-core";
import { Separator as te } from "@rudra-studio/rudra-widgets";
const B = (e) => String(e || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), ie = (e) => {
  let c = e;
  for (; c && typeof c == "object" && "type" in c && "value" in c; )
    c = c.value;
  return c;
};
function O({ icon: e, size: c, color: u, strokeWidth: z, className: S = "", style: p, ...x }) {
  const n = ie(e), [L, r] = w(null), M = n && typeof n == "object" ? JSON.stringify(n) : String(n || "");
  W(() => {
    const F = new AbortController();
    let I = "", h = "";
    if (r(null), typeof n == "string") {
      const o = n.trim();
      if (T[o]) return () => F.abort();
      o.startsWith("<svg") ? h = o : (/^https?:\/\//.test(o) || o.startsWith("/") || o.startsWith("data:image/svg")) && (I = o);
    } else n && typeof n == "object" && (n.iconType === "svg" && n.svgContent ? h = n.svgContent : n.iconType === "url" && n.url && (I = n.url));
    return h ? r(B(h)) : I && fetch(I, { signal: F.signal }).then((o) => {
      if (!o.ok) throw new Error("Icon request failed (" + o.status + ")");
      return o.text();
    }).then((o) => {
      o.trim().startsWith("<svg") && r(B(o));
    }).catch((o) => {
      o.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", o);
    }), () => F.abort();
  }, [M]);
  const _ = n && typeof n == "object" ? n.props || {} : {}, b = { ..._ };
  delete b.size, delete b.color, delete b.strokeWidth;
  const k = c ?? _.size ?? 24, E = u ?? _.color ?? "currentColor", j = z ?? _.strokeWidth ?? 1.5;
  let d = "";
  if (typeof n == "string" && T[n] ? d = n : n && typeof n == "object" && n.name && (!n.iconType || n.iconType === "lucide") && (d = n.name), d) {
    const F = T[d];
    if (F)
      return R.createElement(F, {
        size: k,
        color: E,
        strokeWidth: j,
        className: S,
        style: p,
        ...b,
        ...x
      });
  }
  if (L)
    return R.createElement("span", {
      ...b,
      ...x,
      className: ("rudra-universal-icon " + S).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: k,
        height: k,
        color: E,
        ...p
      },
      dangerouslySetInnerHTML: {
        __html: L.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + j + '">')
      }
    });
  const C = T.LayoutGrid;
  return R.createElement(C, {
    size: k,
    color: E,
    strokeWidth: j,
    className: S,
    style: p,
    ...b,
    ...x
  });
}
function le(e) {
  const c = {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, u = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, z = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [S, p] = w(() => u ?? z());
  W(() => {
    u != null && p(u);
  }, [u]), W(() => {
    if (u != null || typeof document > "u") return;
    const t = document.documentElement, i = (a) => p(a?.detail?.theme ?? z()), s = new MutationObserver(i);
    return s.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      s.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [u]);
  const x = Z(null), [n, L] = w("lg");
  W(() => {
    if (!x.current) return;
    const t = new ResizeObserver((i) => {
      for (let s of i) {
        const a = s.contentRect.width;
        a < 768 ? L("sm") : a < 1024 ? L("md") : L("lg");
      }
    });
    return t.observe(x.current), () => t.disconnect();
  }, []);
  const r = N((t) => typeof t != "object" || t === null ? t : n === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : n === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [n]), [M, _] = w(e.isLoading !== void 0 ? e.isLoading : e.data?.isLoading !== void 0 ? e.data.isLoading : e.runtime?.data?.isLoading !== void 0 ? e.runtime.data.isLoading : e.serverData?.isLoading !== void 0 ? e.serverData.isLoading : e.serverState?.isLoading !== void 0 ? e.serverState.isLoading : !1), [b, k] = w(e.signInForm !== void 0 ? e.signInForm : e.data?.signInForm !== void 0 ? e.data.signInForm : e.runtime?.data?.signInForm !== void 0 ? e.runtime.data.signInForm : e.serverData?.signInForm !== void 0 ? e.serverData.signInForm : e.serverState?.signInForm !== void 0 ? e.serverState.signInForm : [{ fields: [{ id: "email", label: "Email Address", placeholder: "hello@rudra.com", required: !0, type: "email" }, { id: "password", label: "Password", placeholder: "Enter your password", required: !0, type: "password" }], title: "Welcome Back" }]), [E, j] = w(e.signUpForm !== void 0 ? e.signUpForm : e.data?.signUpForm !== void 0 ? e.data.signUpForm : e.runtime?.data?.signUpForm !== void 0 ? e.runtime.data.signUpForm : e.serverData?.signUpForm !== void 0 ? e.serverData.signUpForm : e.serverState?.signUpForm !== void 0 ? e.serverState.signUpForm : [{ fields: [{ icon: "Mail", id: "email", label: "Email Address", placeholder: "you@example.com", required: !0, type: "email" }, { icon: "Lock", id: "password", label: "Password", placeholder: "Create a strong password", required: !0, type: "password" }, { icon: "Lock", id: "confirmPassword", label: "Confirm Password", placeholder: "Type your password again", required: !0, type: "password" }], title: "Create Account" }]), [d, C] = w(e.form !== void 0 ? e.form : e.data?.form !== void 0 ? e.data.form : e.runtime?.data?.form !== void 0 ? e.runtime.data.form : e.serverData?.form !== void 0 ? e.serverData.form : e.serverState?.form !== void 0 ? e.serverState.form : "login"), [F, I] = w(e.loading !== void 0 ? e.loading : e.data?.loading !== void 0 ? e.data.loading : e.runtime?.data?.loading !== void 0 ? e.runtime.data.loading : e.serverData?.loading !== void 0 ? e.serverData.loading : e.serverState?.loading !== void 0 ? e.serverState.loading : { github: !1, google: !1, signIn: !1, signUp: !1 }), h = N((t, i) => {
    switch (t) {
      case "isLoading":
        return _(i), i;
      case "signInForm":
        return k(i), i;
      case "signUpForm":
        return j(i), i;
      case "form":
        return C(i), i;
      case "loading":
        return I(i), i;
      default:
        return i;
    }
  }, []);
  N((t, i) => {
    const [s, ...a] = String(t || "").split(".");
    if (!s) return i;
    if (a.length === 0) return h(s, i);
    const m = (U) => {
      const D = Array.isArray(U) ? [...U] : { ...U || {} };
      let f = D;
      return a.forEach((v, q) => {
        q === a.length - 1 ? f[v] = i : (f[v] = Array.isArray(f[v]) ? [...f[v]] : { ...f[v] || {} }, f = f[v]);
      }), D;
    };
    switch (s) {
      case "isLoading":
        return _(m), i;
      case "signInForm":
        return k(m), i;
      case "signUpForm":
        return j(m), i;
      case "form":
        return C(m), i;
      case "loading":
        return I(m), i;
      default:
        return i;
    }
  }, [h]);
  const o = N(async (t, i, s) => {
    const a = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      t
    ), m = a[i] || a.default;
    if (typeof m != "function") throw new Error("Library function '" + i + "' was not exported by " + t);
    return m(s);
  }, []);
  async function G(t = {}) {
    await y("RudraSystem.setTheme", { themeName: "dark" }, []);
  }
  async function J(t = {}) {
    if (d === "login") {
      h("form", "signup");
      return;
    } else {
      h("form", "login");
      return;
    }
  }
  async function H(t = {}) {
    const i = t || {};
    if (d === "login") {
      await y("RudraAuth.signIn", { email: i.formData.email, password: i.formData.password, provider: "firebase" }, []);
      return;
    } else {
      await y("RudraAuth.signUp", { email: i.formData.email, password: i.formData.password, provider: "firebase" }, []);
      return;
    }
  }
  async function K(t = {}) {
    const i = t || {}, s = {};
    let a;
    return d === "login" ? !0 : (s.isPasswordMatched = await o("https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core@1.0.67/utils/IsEqual.js", "IsEqual", { source: i.inputValues.password, target: i.inputValues.confirmPassword }), a = s.isPasswordMatched, a ? !0 : "Passwords not matching");
  }
  const Q = {
    newFunction_1: G,
    changeForm: J,
    login: H,
    validate: K
  }, X = {
    newFunction_1: ["event"],
    changeForm: ["event"],
    login: ["formData"],
    validate: ["inputValues"]
  }, y = (t, i = {}, s = []) => {
    const a = Q[t];
    if (a) {
      if (Object.keys(i).length > 0) return a(i);
      const v = X[t] || [];
      return a(Object.fromEntries(v.map((q, Y) => [q, s[Y]])));
    }
    const m = c?.[t];
    if (typeof m == "function")
      return m(Object.keys(i).length > 0 ? i : s[0]);
    const [U, D] = String(t).split("."), f = typeof globalThis < "u" ? globalThis[U]?.[D] : void 0;
    if (typeof f == "function") return f(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ l("div", { ref: x, className: "rudra-module-wrapper", children: /* @__PURE__ */ g(A, { id: "el_1784440852141_9p5ixo5", className: `${r({ sm: "min-h-screen w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#050505] p-4 relative selection:bg-gray-200 dark:selection:bg-gray-800" }) || ""}`, children: [
    "      ",
    /* @__PURE__ */ g(A, { id: "el_1784469915002_zplnz8y", className: `flex ${r({ sm: "w-full max-w-[400px] z-10 bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800/60 rounded-2xl shadow-2xl p-8 relative overflow-hidden" }) || ""} ${r({ sm: "flex-col" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ g(A, { id: "el_1784469967247_ctu08ym", className: `flex ${r({ sm: "flex flex-col items-center mb-6 w-full" }) || ""} ${r({ sm: "flex-col" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ g(A, { id: "el_1784646228082_r208bzv", className: `${r({ sm: "w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm" }) || ""}`, children: [
          "      ",
          /* @__PURE__ */ l(O, { icon: "Command", id: "el_1784646302450_lcydbe3", color: S === "dark" ? "black" : "white", strokeWidth: 1.2, size: 20 })
        ] }),
        /* @__PURE__ */ l($, { id: "el_1784647076610_5ykfkc9", className: `${r({ sm: "text-xl font-semibold text-gray-900 dark:text-white tracking-tight" }) || ""}`, as: "h2", content: d === "login" ? "Welcome Back" : "Create an Account" }),
        /* @__PURE__ */ l($, { id: "el_1784647187929_yb4jnky", className: `${r({ sm: "text-sm text-gray-500 mt-1" }) || ""}`, as: "h2", content: d === "login" ? "Enter your credentials to continue" : "Start building your next application" })
      ] }),
      /* @__PURE__ */ g(A, { id: "el_1784647320002_5rofwo5", className: `grid flex ${r({ sm: "grid grid-cols-2 gap-3 mb-6" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ g(P, { id: "el_1784647347690_dv24ei4", className: `flex ${r({ sm: "flex items-center justify-center gap-1 w-full py-2.5 px-2 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none" }) || ""}`, leftIcon: /* @__PURE__ */ g(V, { children: [
          "      ",
          /* @__PURE__ */ l(O, { icon: r({ sm: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" } }), id: "el_1784647380402_ugkvyow", size: 20, color: "#111827", strokeWidth: 1.2 })
        ] }), onClick: (...t) => y("RudraAuth.signIn", { email: "", password: "", provider: "google" }, t), rightIcon: !1, additionalAttributes: [], children: [
          "      ",
          /* @__PURE__ */ l($, { id: "el_1784647392306_nkqxhoc", as: "h2", content: r({ sm: "Google" }) })
        ] }),
        /* @__PURE__ */ g(P, { id: "el_1784647340113_83munsr", className: `flex ${r({ sm: "flex items-center justify-center gap-2 w-full py-2.5 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none" }) || ""}`, leftIcon: /* @__PURE__ */ g(V, { children: [
          "      ",
          /* @__PURE__ */ l(O, { icon: S === "dark" ? "https://cdn.simpleicons.org/github/white" : "https://cdn.simpleicons.org/github", id: "el_1784647382825_ovg66eb", strokeWidth: 1.2, size: 20, color: r({ lg: "#b94181", sm: "#111827" }) })
        ] }), rightIcon: !1, additionalAttributes: [], onClick: (...t) => y("RudraAuth.signIn", { email: "", password: "", provider: "github" }, t), children: [
          "      ",
          /* @__PURE__ */ l($, { id: "el_1784647394313_ucblp5p", as: "h2", content: r({ sm: "Github" }) })
        ] })
      ] }),
      /* @__PURE__ */ l(te, { id: "el_1784881718225_8dil8m7", text: r({ lg: "Or continue with", sm: "or continue with" }) }),
      /* @__PURE__ */ l(
        ee,
        {
          id: "el_1784896105217_0ix4495",
          classN: `${r({ sm: "bg-transparent border-transparent" }) || ""}`,
          buttonSize: r({ lg: "md", sm: "sm" }),
          submitLabel: d === "login" ? "Login" : "Sign Up",
          buttonRadius: r({ sm: "lg" }),
          validate: (...t) => y("validate", {}, t),
          buttonVariant: r({ sm: "solid" }),
          schema: d === "login" ? b : E,
          onSubmit: (...t) => y("login", {}, t)
        }
      ),
      /* @__PURE__ */ g(A, { id: "el_1784899743809_h3gnwzz", className: `flex ${r({ sm: "mt-6 text-center text-sm text-gray-600 dark:text-gray-400 gap-y-4 gap-x-4 gap-1" }) || ""} ${r({ sm: "flex-wrap" }) || ""} ${r({ sm: "justify-center" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ l($, { id: "el_1784899807185_qdgfchp", as: r({ sm: "p" }), content: d === "login" ? "Don't have an account?" : "Already have an account?" }),
        /* @__PURE__ */ g(P, { id: "el_1784900445842_35qrqg6", className: `${r({ sm: "font-semibold text-black dark:text-white hover:underline underline-offset-4 disabled:opacity-50 transition-colors" }) || ""}`, onClick: (...t) => y("changeForm", {}, t), leftIcon: !1, rightIcon: !1, additionalAttributes: [], children: [
          "      ",
          /* @__PURE__ */ l($, { id: "el_1784900498465_8p13mqa", as: r({ sm: "p" }), content: d === "login" ? "Sign Up" : "Login" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  le as default
};
