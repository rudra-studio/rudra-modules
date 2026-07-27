import { jsx as s, jsxs as d, Fragment as L } from "react/jsx-runtime";
import { useRef as T, useState as u, useEffect as V, useCallback as p } from "react";
import { Box as f } from "@rudra-studio/rudra-layout";
import { Typography as h, Button as F } from "@rudra-studio/rudra-core";
import { Separator as W } from "@rudra-studio/rudra-widgets";
import { JSONForm as B } from "@rudra-studio/rudra-form";
import { Command as G } from "lucide-react";
function re(i) {
  const N = i.actions || i.runtime?.actions || {}, x = T(null), [_, k] = u("lg");
  V(() => {
    if (!x.current) return;
    const e = new ResizeObserver((t) => {
      for (let o of t) {
        const n = o.contentRect.width;
        n < 768 ? k("sm") : n < 1024 ? k("md") : k("lg");
      }
    });
    return e.observe(x.current), () => e.disconnect();
  }, []);
  const r = p((e) => typeof e != "object" || e === null ? e : _ === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : _ === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [_]), [J, A] = u(i.isLoading !== void 0 ? i.isLoading : i.serverData?.isLoading !== void 0 ? i.serverData.isLoading : !1), [q, I] = u(i.signInForm !== void 0 ? i.signInForm : i.serverData?.signInForm !== void 0 ? i.serverData.signInForm : [{ fields: [{ id: "email", label: "Email Address", placeholder: "hello@rudra.com", required: !0, type: "email" }, { id: "password", label: "Password", placeholder: "Enter your password", required: !0, type: "password" }], title: "Welcome Back" }]), [R, $] = u(i.signUpForm !== void 0 ? i.signUpForm : i.serverData?.signUpForm !== void 0 ? i.serverData.signUpForm : [{ fields: [{ icon: "Mail", id: "email", label: "Email Address", placeholder: "you@example.com", required: !0, type: "email" }, { icon: "Lock", id: "password", label: "Password", placeholder: "Create a strong password", required: !0, type: "password" }, { icon: "Lock", id: "confirmPassword", label: "Confirm Password", placeholder: "Type your password again", required: !0, type: "password" }], title: "Create Account" }]), [c, D] = u(i.form !== void 0 ? i.form : i.serverData?.form !== void 0 ? i.serverData.form : "signup"), [H, j] = u(i.loading !== void 0 ? i.loading : i.serverData?.loading !== void 0 ? i.serverData.loading : { github: !1, google: !1, signIn: !1, signUp: !1 }), y = p((e, t) => {
    switch (e) {
      case "isLoading":
        return A(t), t;
      case "signInForm":
        return I(t), t;
      case "signUpForm":
        return $(t), t;
      case "form":
        return D(t), t;
      case "loading":
        return j(t), t;
      default:
        return t;
    }
  }, []);
  p((e, t) => {
    const [o, ...n] = String(e || "").split(".");
    if (!o) return t;
    if (n.length === 0) return y(o, t);
    const a = (b) => {
      const w = Array.isArray(b) ? [...b] : { ...b || {} };
      let l = w;
      return n.forEach((g, v) => {
        v === n.length - 1 ? l[g] = t : (l[g] = Array.isArray(l[g]) ? [...l[g]] : { ...l[g] || {} }, l = l[g]);
      }), w;
    };
    switch (o) {
      case "isLoading":
        return A(a), t;
      case "signInForm":
        return I(a), t;
      case "signUpForm":
        return $(a), t;
      case "form":
        return D(a), t;
      case "loading":
        return j(a), t;
      default:
        return t;
    }
  }, [y]);
  const S = p(async (e, t, o) => {
    const n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), a = n[t] || n.default;
    if (typeof a != "function") throw new Error("Library function '" + t + "' was not exported by " + e);
    return a(o);
  }, []);
  async function z(e = {}) {
    await m("RudraSystem.setTheme", { themeName: "dark" }, []);
  }
  async function U(e = {}) {
    if (c === "login") {
      y("form", "signup");
      return;
    } else {
      y("form", "login");
      return;
    }
  }
  async function C(e = {}) {
    const t = e || {};
    if (c === "login") {
      await m("RudraAuth.signIn", { email: t.formData.email, password: t.formData.password, provider: "firebase" }, []);
      return;
    } else {
      await m("RudraAuth.signUp", { email: t.formData.email, password: t.formData.password, provider: "firebase" }, []);
      return;
    }
  }
  async function E(e = {}) {
    const t = e || {}, o = {};
    let n;
    return c === "login" ? !0 : (o.isPasswordMatched = await S("https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core@1.0.67/utils/IsEqual.js", "IsEqual", { source: argss.inputVaues.password, target: t.inputValues.confirmPassword }), n = o.isPasswordMatched, n ? !0 : "Passwords not matching");
  }
  const P = {
    newFunction_1: z,
    changeForm: U,
    login: C,
    validate: E
  }, O = {
    newFunction_1: ["event"],
    changeForm: ["event"],
    login: ["formData"],
    validate: ["inputValues"]
  }, m = (e, t = {}, o = []) => {
    const n = P[e];
    if (n) {
      if (Object.keys(t).length > 0) return n(t);
      const g = O[e] || [];
      return n(Object.fromEntries(g.map((v, M) => [v, o[M]])));
    }
    const a = N?.[e];
    if (typeof a == "function")
      return a(Object.keys(t).length > 0 ? t : o[0]);
    const [b, w] = String(e).split("."), l = typeof globalThis < "u" ? globalThis[b]?.[w] : void 0;
    if (typeof l == "function") return l(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ s("div", { ref: x, className: "rudra-module-wrapper", children: /* @__PURE__ */ d(f, { id: "el_1784440852141_9p5ixo5", className: `${r({ sm: "min-h-screen w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#050505] p-4 relative selection:bg-gray-200 dark:selection:bg-gray-800" }) || ""}`, children: [
    "      ",
    /* @__PURE__ */ d(f, { id: "el_1784469915002_zplnz8y", className: `flex ${r({ sm: "w-full max-w-[400px] z-10 bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800/60 rounded-2xl shadow-2xl p-8 relative overflow-hidden" }) || ""} ${r({ sm: "flex-col" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ d(f, { id: "el_1784469967247_ctu08ym", className: `flex ${r({ sm: "flex flex-col items-center mb-6 w-full" }) || ""} ${r({ sm: "flex-col" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ d(f, { id: "el_1784646228082_r208bzv", className: `${r({ sm: "w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm" }) || ""}`, children: [
          "      ",
          /* @__PURE__ */ s(G, { id: "el_1784646302450_lcydbe3", size: 20, color: $theme === "dark" ? "black" : "white", strokeWidth: 1.2 })
        ] }),
        /* @__PURE__ */ s(h, { id: "el_1784647076610_5ykfkc9", className: `${r({ sm: "text-xl font-semibold text-gray-900 dark:text-white tracking-tight" }) || ""}`, as: "h2", content: c === "login" ? "Welcome Back" : "Create an Account" }),
        /* @__PURE__ */ s(h, { id: "el_1784647187929_yb4jnky", className: `${r({ sm: "text-sm text-gray-500 mt-1" }) || ""}`, as: "h2", content: c === "login" ? "Enter your credentials to continue" : "Start building your next application" })
      ] }),
      /* @__PURE__ */ d(f, { id: "el_1784647320002_5rofwo5", className: `grid flex ${r({ sm: "grid grid-cols-2 gap-3 mb-6" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ d(F, { id: "el_1784647347690_dv24ei4", className: `flex ${r({ sm: "flex items-center justify-center gap-1 w-full py-2.5 px-2 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none" }) || ""}`, leftIcon: /* @__PURE__ */ d(L, { children: [
          "      ",
          /* @__PURE__ */ s("div", { id: "el_1784647380402_ugkvyow", size: 20, color: "#111827", strokeWidth: 1.2 })
        ] }), rightIcon: !1, additionalAttributes: [], onClick: (...e) => m("RudraAuth.signIn", { email: "", password: "", provider: "google" }, e), children: [
          "      ",
          /* @__PURE__ */ s(h, { id: "el_1784647392306_nkqxhoc", as: "h2", content: r({ sm: "Google" }) })
        ] }),
        /* @__PURE__ */ d(F, { id: "el_1784647340113_83munsr", className: `flex ${r({ sm: "flex items-center justify-center gap-2 w-full py-2.5 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none" }) || ""}`, leftIcon: /* @__PURE__ */ d(L, { children: [
          "      ",
          /* @__PURE__ */ s("div", { id: "el_1784647382825_ovg66eb", size: 20, color: r({ lg: "#b94181", sm: "#111827" }), strokeWidth: 1.2 })
        ] }), rightIcon: !1, additionalAttributes: [], onClick: (...e) => m("RudraAuth.signIn", { email: "", password: "", provider: "github" }, e), children: [
          "      ",
          /* @__PURE__ */ s(h, { id: "el_1784647394313_ucblp5p", as: "h2", content: r({ sm: "Github" }) })
        ] })
      ] }),
      /* @__PURE__ */ s(W, { id: "el_1784881718225_8dil8m7", text: r({ lg: "Or continue with", sm: "or continue with" }) }),
      /* @__PURE__ */ s(
        B,
        {
          id: "el_1784896105217_0ix4495",
          classN: `${r({ sm: "bg-transparent border-transparent" }) || ""}`,
          schema: c === "login" ? q : R,
          onSubmit: (...e) => m("login", {}, e),
          buttonSize: r({ lg: "md", sm: "sm" }),
          submitLabel: c === "login" ? "Login" : "Sign Up",
          buttonRadius: r({ sm: "lg" }),
          buttonVariant: r({ sm: "solid" }),
          validate: (...e) => m("validate", {}, e)
        }
      ),
      /* @__PURE__ */ d(f, { id: "el_1784899743809_h3gnwzz", className: `flex ${r({ sm: "mt-6 text-center text-sm text-gray-600 dark:text-gray-400 gap-y-4 gap-x-4 gap-1" }) || ""} ${r({ sm: "flex-wrap" }) || ""} ${r({ sm: "justify-center" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ s(h, { id: "el_1784899807185_qdgfchp", as: r({ sm: "p" }), content: c === "login" ? "Don't have an account?" : "Already have an account?" }),
        /* @__PURE__ */ d(F, { id: "el_1784900445842_35qrqg6", className: `${r({ sm: "font-semibold text-black dark:text-white hover:underline underline-offset-4 disabled:opacity-50 transition-colors" }) || ""}`, leftIcon: !1, rightIcon: !1, additionalAttributes: [], onClick: (...e) => m("changeForm", {}, e), children: [
          "      ",
          /* @__PURE__ */ s(h, { id: "el_1784900498465_8p13mqa", as: r({ sm: "p" }), content: c === "login" ? "Sign Up" : "Login" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  re as default
};
