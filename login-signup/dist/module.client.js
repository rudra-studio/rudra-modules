import { jsx as o, jsxs as d, Fragment as q } from "react/jsx-runtime";
import { useState as f, useEffect as L, useRef as J, useCallback as _ } from "react";
import { Box as h } from "@rudra-studio/rudra-layout";
import { Typography as b, Button as S } from "@rudra-studio/rudra-core";
import { Separator as H } from "@rudra-studio/rudra-widgets";
import { JSONForm as K } from "@rudra-studio/rudra-form";
import { Command as Q } from "lucide-react";
function oe(e) {
  const R = {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, m = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, A = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [z, $] = f(() => m ?? A());
  L(() => {
    m != null && $(m);
  }, [m]), L(() => {
    if (m != null || typeof document > "u") return;
    const t = document.documentElement, i = (n) => $(n?.detail?.theme ?? A()), a = new MutationObserver(i);
    return a.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [m]);
  const x = J(null), [k, F] = f("lg");
  L(() => {
    if (!x.current) return;
    const t = new ResizeObserver((i) => {
      for (let a of i) {
        const n = a.contentRect.width;
        n < 768 ? F("sm") : n < 1024 ? F("md") : F("lg");
      }
    });
    return t.observe(x.current), () => t.disconnect();
  }, []);
  const r = _((t) => typeof t != "object" || t === null ? t : k === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : k === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [k]), [X, D] = f(e.isLoading !== void 0 ? e.isLoading : e.data?.isLoading !== void 0 ? e.data.isLoading : e.runtime?.data?.isLoading !== void 0 ? e.runtime.data.isLoading : e.serverData?.isLoading !== void 0 ? e.serverData.isLoading : e.serverState?.isLoading !== void 0 ? e.serverState.isLoading : !1), [C, U] = f(e.signInForm !== void 0 ? e.signInForm : e.data?.signInForm !== void 0 ? e.data.signInForm : e.runtime?.data?.signInForm !== void 0 ? e.runtime.data.signInForm : e.serverData?.signInForm !== void 0 ? e.serverData.signInForm : e.serverState?.signInForm !== void 0 ? e.serverState.signInForm : [{ fields: [{ id: "email", label: "Email Address", placeholder: "hello@rudra.com", required: !0, type: "email" }, { id: "password", label: "Password", placeholder: "Enter your password", required: !0, type: "password" }], title: "Welcome Back" }]), [P, j] = f(e.signUpForm !== void 0 ? e.signUpForm : e.data?.signUpForm !== void 0 ? e.data.signUpForm : e.runtime?.data?.signUpForm !== void 0 ? e.runtime.data.signUpForm : e.serverData?.signUpForm !== void 0 ? e.serverData.signUpForm : e.serverState?.signUpForm !== void 0 ? e.serverState.signUpForm : [{ fields: [{ icon: "Mail", id: "email", label: "Email Address", placeholder: "you@example.com", required: !0, type: "email" }, { icon: "Lock", id: "password", label: "Password", placeholder: "Create a strong password", required: !0, type: "password" }, { icon: "Lock", id: "confirmPassword", label: "Confirm Password", placeholder: "Type your password again", required: !0, type: "password" }], title: "Create Account" }]), [c, E] = f(e.form !== void 0 ? e.form : e.data?.form !== void 0 ? e.data.form : e.runtime?.data?.form !== void 0 ? e.runtime.data.form : e.serverData?.form !== void 0 ? e.serverData.form : e.serverState?.form !== void 0 ? e.serverState.form : "signup"), [Y, N] = f(e.loading !== void 0 ? e.loading : e.data?.loading !== void 0 ? e.data.loading : e.runtime?.data?.loading !== void 0 ? e.runtime.data.loading : e.serverData?.loading !== void 0 ? e.serverData.loading : e.serverState?.loading !== void 0 ? e.serverState.loading : { github: !1, google: !1, signIn: !1, signUp: !1 }), w = _((t, i) => {
    switch (t) {
      case "isLoading":
        return D(i), i;
      case "signInForm":
        return U(i), i;
      case "signUpForm":
        return j(i), i;
      case "form":
        return E(i), i;
      case "loading":
        return N(i), i;
      default:
        return i;
    }
  }, []);
  _((t, i) => {
    const [a, ...n] = String(t || "").split(".");
    if (!a) return i;
    if (n.length === 0) return w(a, i);
    const s = (y) => {
      const v = Array.isArray(y) ? [...y] : { ...y || {} };
      let l = v;
      return n.forEach((u, I) => {
        I === n.length - 1 ? l[u] = i : (l[u] = Array.isArray(l[u]) ? [...l[u]] : { ...l[u] || {} }, l = l[u]);
      }), v;
    };
    switch (a) {
      case "isLoading":
        return D(s), i;
      case "signInForm":
        return U(s), i;
      case "signUpForm":
        return j(s), i;
      case "form":
        return E(s), i;
      case "loading":
        return N(s), i;
      default:
        return i;
    }
  }, [w]);
  const O = _(async (t, i, a) => {
    const n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      t
    ), s = n[i] || n.default;
    if (typeof s != "function") throw new Error("Library function '" + i + "' was not exported by " + t);
    return s(a);
  }, []);
  async function T(t = {}) {
    await g("RudraSystem.setTheme", { themeName: "dark" }, []);
  }
  async function M(t = {}) {
    if (c === "login") {
      w("form", "signup");
      return;
    } else {
      w("form", "login");
      return;
    }
  }
  async function V(t = {}) {
    const i = t || {};
    if (c === "login") {
      await g("RudraAuth.signIn", { email: i.formData.email, password: i.formData.password, provider: "firebase" }, []);
      return;
    } else {
      await g("RudraAuth.signUp", { email: i.formData.email, password: i.formData.password, provider: "firebase" }, []);
      return;
    }
  }
  async function W(t = {}) {
    const i = t || {}, a = {};
    let n;
    return c === "login" ? !0 : (a.isPasswordMatched = await O("https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core@1.0.67/utils/IsEqual.js", "IsEqual", { source: argss.inputVaues.password, target: i.inputValues.confirmPassword }), n = a.isPasswordMatched, n ? !0 : "Passwords not matching");
  }
  const B = {
    newFunction_1: T,
    changeForm: M,
    login: V,
    validate: W
  }, G = {
    newFunction_1: ["event"],
    changeForm: ["event"],
    login: ["formData"],
    validate: ["inputValues"]
  }, g = (t, i = {}, a = []) => {
    const n = B[t];
    if (n) {
      if (Object.keys(i).length > 0) return n(i);
      const u = G[t] || [];
      return n(Object.fromEntries(u.map((I, p) => [I, a[p]])));
    }
    const s = R?.[t];
    if (typeof s == "function")
      return s(Object.keys(i).length > 0 ? i : a[0]);
    const [y, v] = String(t).split("."), l = typeof globalThis < "u" ? globalThis[y]?.[v] : void 0;
    if (typeof l == "function") return l(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ o("div", { ref: x, className: "rudra-module-wrapper", children: /* @__PURE__ */ d(h, { id: "el_1784440852141_9p5ixo5", className: `${r({ sm: "min-h-screen w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#050505] p-4 relative selection:bg-gray-200 dark:selection:bg-gray-800" }) || ""}`, children: [
    "      ",
    /* @__PURE__ */ d(h, { id: "el_1784469915002_zplnz8y", className: `flex ${r({ sm: "w-full max-w-[400px] z-10 bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800/60 rounded-2xl shadow-2xl p-8 relative overflow-hidden" }) || ""} ${r({ sm: "flex-col" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ d(h, { id: "el_1784469967247_ctu08ym", className: `flex ${r({ sm: "flex flex-col items-center mb-6 w-full" }) || ""} ${r({ sm: "flex-col" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ d(h, { id: "el_1784646228082_r208bzv", className: `${r({ sm: "w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm" }) || ""}`, children: [
          "      ",
          /* @__PURE__ */ o(Q, { id: "el_1784646302450_lcydbe3", size: 20, color: z === "dark" ? "black" : "white", strokeWidth: 1.2 })
        ] }),
        /* @__PURE__ */ o(b, { id: "el_1784647076610_5ykfkc9", className: `${r({ sm: "text-xl font-semibold text-gray-900 dark:text-white tracking-tight" }) || ""}`, as: "h2", content: c === "login" ? "Welcome Back" : "Create an Account" }),
        /* @__PURE__ */ o(b, { id: "el_1784647187929_yb4jnky", className: `${r({ sm: "text-sm text-gray-500 mt-1" }) || ""}`, as: "h2", content: c === "login" ? "Enter your credentials to continue" : "Start building your next application" })
      ] }),
      /* @__PURE__ */ d(h, { id: "el_1784647320002_5rofwo5", className: `grid flex ${r({ sm: "grid grid-cols-2 gap-3 mb-6" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ d(S, { id: "el_1784647347690_dv24ei4", className: `flex ${r({ sm: "flex items-center justify-center gap-1 w-full py-2.5 px-2 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none" }) || ""}`, leftIcon: /* @__PURE__ */ d(q, { children: [
          "      ",
          /* @__PURE__ */ o("div", { id: "el_1784647380402_ugkvyow", strokeWidth: 1.2, size: 20, color: "#111827" })
        ] }), additionalAttributes: [], onClick: (...t) => g("RudraAuth.signIn", { email: "", password: "", provider: "google" }, t), rightIcon: !1, children: [
          "      ",
          /* @__PURE__ */ o(b, { id: "el_1784647392306_nkqxhoc", as: "h2", content: r({ sm: "Google" }) })
        ] }),
        /* @__PURE__ */ d(S, { id: "el_1784647340113_83munsr", className: `flex ${r({ sm: "flex items-center justify-center gap-2 w-full py-2.5 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none" }) || ""}`, leftIcon: /* @__PURE__ */ d(q, { children: [
          "      ",
          /* @__PURE__ */ o("div", { id: "el_1784647382825_ovg66eb", color: r({ lg: "#b94181", sm: "#111827" }), strokeWidth: 1.2, size: 20 })
        ] }), onClick: (...t) => g("RudraAuth.signIn", { email: "", password: "", provider: "github" }, t), rightIcon: !1, additionalAttributes: [], children: [
          "      ",
          /* @__PURE__ */ o(b, { id: "el_1784647394313_ucblp5p", as: "h2", content: r({ sm: "Github" }) })
        ] })
      ] }),
      /* @__PURE__ */ o(H, { id: "el_1784881718225_8dil8m7", text: r({ lg: "Or continue with", sm: "or continue with" }) }),
      /* @__PURE__ */ o(
        K,
        {
          id: "el_1784896105217_0ix4495",
          classN: `${r({ sm: "bg-transparent border-transparent" }) || ""}`,
          buttonRadius: r({ sm: "lg" }),
          onSubmit: (...t) => g("login", {}, t),
          validate: (...t) => g("validate", {}, t),
          buttonSize: r({ lg: "md", sm: "sm" }),
          submitLabel: c === "login" ? "Login" : "Sign Up",
          buttonVariant: r({ sm: "solid" }),
          schema: c === "login" ? C : P
        }
      ),
      /* @__PURE__ */ d(h, { id: "el_1784899743809_h3gnwzz", className: `flex ${r({ sm: "mt-6 text-center text-sm text-gray-600 dark:text-gray-400 gap-y-4 gap-x-4 gap-1" }) || ""} ${r({ sm: "flex-wrap" }) || ""} ${r({ sm: "justify-center" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ o(b, { id: "el_1784899807185_qdgfchp", content: c === "login" ? "Don't have an account?" : "Already have an account?", as: r({ sm: "p" }) }),
        /* @__PURE__ */ d(S, { id: "el_1784900445842_35qrqg6", className: `${r({ sm: "font-semibold text-black dark:text-white hover:underline underline-offset-4 disabled:opacity-50 transition-colors" }) || ""}`, rightIcon: !1, additionalAttributes: [], onClick: (...t) => g("changeForm", {}, t), leftIcon: !1, children: [
          "      ",
          /* @__PURE__ */ o(b, { id: "el_1784900498465_8p13mqa", content: c === "login" ? "Sign Up" : "Login", as: r({ sm: "p" }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  oe as default
};
