import { jsx as u, jsxs as i, Fragment as s } from "react/jsx-runtime";
import X, { useState as ie, useEffect as B, useRef as V, useCallback as U } from "react";
import { Box as F } from "@rudra-studio/rudra-layout";
import * as Z from "lucide-react";
import { Form as be, Input as w, Select as le, Textarea as _e, Checkbox as ee } from "@rudra-studio/rudra-form";
import { Typography as x, Alert as H, Button as te } from "@rudra-studio/rudra-core";
const de = (l) => String(l || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), Se = (l) => {
  let g = l;
  for (; g && typeof g == "object" && "type" in g && "value" in g; )
    g = g.value;
  return g;
};
function b({ icon: l, size: g, color: A, strokeWidth: J, className: j = "", style: O, ...L }) {
  const f = Se(l), [R, N] = ie(null), re = f && typeof f == "object" ? JSON.stringify(f) : String(f || "");
  B(() => {
    const q = new AbortController();
    let M = "", W = "";
    if (N(null), typeof f == "string") {
      const y = f.trim();
      if (Z[y]) return () => q.abort();
      y.startsWith("<svg") ? W = y : (/^https?:\/\//.test(y) || y.startsWith("/") || y.startsWith("data:image/svg")) && (M = y);
    } else f && typeof f == "object" && (f.iconType === "svg" && f.svgContent ? W = f.svgContent : f.iconType === "url" && f.url && (M = f.url));
    return W ? N(de(W)) : M && fetch(M, { signal: q.signal }).then((y) => {
      if (!y.ok) throw new Error("Icon request failed (" + y.status + ")");
      return y.text();
    }).then((y) => {
      y.trim().startsWith("<svg") && N(de(y));
    }).catch((y) => {
      y.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", y);
    }), () => q.abort();
  }, [re]);
  const C = f && typeof f == "object" ? f.props || {} : {}, z = { ...C };
  delete z.size, delete z.color, delete z.strokeWidth;
  const I = g ?? C.size ?? 24, E = A ?? C.color ?? "currentColor", h = J ?? C.strokeWidth ?? 1.5;
  let c = "";
  if (typeof f == "string" && Z[f] ? c = f : f && typeof f == "object" && f.name && (!f.iconType || f.iconType === "lucide") && (c = f.name), c) {
    const q = Z[c];
    if (q)
      return X.createElement(q, {
        size: I,
        color: E,
        strokeWidth: h,
        className: j,
        style: O,
        ...z,
        ...L
      });
  }
  if (R)
    return X.createElement("span", {
      ...z,
      ...L,
      className: ("rudra-universal-icon " + j).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: I,
        height: I,
        color: E,
        ...O
      },
      dangerouslySetInnerHTML: {
        __html: R.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + h + '">')
      }
    });
  const K = Z.LayoutGrid;
  return X.createElement(K, {
    size: I,
    color: E,
    strokeWidth: h,
    className: j,
    style: O,
    ...z,
    ...L
  });
}
function xe(l) {
  const g = {}, A = l.serverData || l.serverState || {}, J = l.sharedState || {}, j = l.applicationState || A.applicationState || {}, O = l.pageState || A.pageState || {}, L = l.pageData || A.pageData || {}, f = {
    ...l.runtime?.functions || {},
    ...l.runtime?.actions || {},
    ...l.functions || {},
    ...l.actions || {}
  }, R = l.$theme ?? l.theme ?? l.data?.$theme ?? l.runtime?.data?.$theme ?? l.runtime?.theme, N = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [re, C] = ie(() => R ?? N());
  B(() => {
    R != null && C(R);
  }, [R]), B(() => {
    if (R != null || typeof document > "u") return;
    const e = document.documentElement, n = (o) => C(o?.detail?.theme ?? N()), t = new MutationObserver(n);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [R]);
  const z = V(null), [I, E] = ie("lg");
  B(() => {
    if (!z.current) return;
    const e = new ResizeObserver((n) => {
      for (let t of n) {
        const o = t.contentRect.width;
        o < 768 ? E("sm") : o < 1024 ? E("md") : E("lg");
      }
    });
    return e.observe(z.current), () => e.disconnect();
  }, []);
  const h = U((e) => typeof e != "object" || e === null ? e : I === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : I === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [I]), c = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, K = l.returnPath !== void 0 ? l.returnPath : l.data?.returnPath !== void 0 ? l.data.returnPath : "/learn", q = l.profile !== void 0 ? l.profile : l.data?.profile !== void 0 ? l.data.profile : {}, M = l.profileServiceEnabled !== void 0 ? l.profileServiceEnabled : l.data?.profileServiceEnabled !== void 0 ? l.data.profileServiceEnabled : !1, W = l.locale !== void 0 ? l.locale : l.data?.locale !== void 0 ? l.data.locale : "en", y = l.authenticated !== void 0 ? l.authenticated : l.data?.authenticated !== void 0 ? l.data.authenticated : !1, oe = l.mode !== void 0 ? l.mode : l.data?.mode !== void 0 ? l.data.mode : "login", ue = l.authProvider !== void 0 ? l.authProvider : l.data?.authProvider !== void 0 ? l.data.authProvider : "firebase-google", S = { returnPath: K, profile: q, profileServiceEnabled: M, locale: W, authenticated: y, mode: oe, authProvider: ue }, P = {}, m = U((e, n) => n, [P]);
  U((e, n) => {
    const [t, ...o] = String(e || "").split(".");
    return t && o.length === 0 ? m(t, n) : n;
  }, [m]);
  const me = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, Y = (e, n, t) => {
    if (!n || typeof n != "object") return "";
    const o = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], d = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(d) && !(d === "integer" && o.includes("number"))) return t + " must be " + o.join(" or ") + ".";
    if (n.enum && !n.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of n.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return t + "." + r + " is required.";
      for (const [r, a] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const p = Y(e[r], a, t + "." + r);
        if (p) return p;
      }
    }
    if (Array.isArray(e) && n.items) for (let r = 0; r < e.length; r++) {
      const a = Y(e[r], n.items, t + "[" + r + "]");
      if (a) return a;
    }
    return "";
  }, Q = U(async (e, n, t = !1) => {
    const o = me[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const d = Y(n, o, "output." + e);
    if (d) throw new Error(d);
    const r = l.onOutput || l.onModuleOutput || l.runtime?.onOutput;
    if (typeof r != "function") return n;
    const a = r(e, n, { moduleId: l.moduleId, awaitHandlers: t });
    return t ? await a : n;
  }, [l.onOutput, l.onModuleOutput, l.runtime?.onOutput, l.moduleId]), ne = (e, n) => {
    const t = String(n || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return t.reduce((o, d) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(d in o) ? o.get(d) : o[d];
      }, e);
  }, D = (e, n) => {
    if (Array.isArray(e)) return e.map((o) => D(o, n));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([o, d]) => [D(o, n), D(d, n)]));
    if (typeof e != "string") return e;
    const t = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? ne(n, t[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, d) => {
      const r = ne(n, d);
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
  };
  async function he(e = {}) {
    const n = e || {}, t = {};
    {
      n.event;
      const o = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(P.registrationStep || 1))) === 3 }))();
      t.wizard_decide = o;
    }
    if (t.wizard_decide.isFinal)
      return await se({ values: n.values }), t.wizard_submit;
    {
      n.event;
      const o = await (async () => {
        const d = Math.max(1, Math.min(3, Number(P.registrationStep || 1))), r = String(n.values && n.values.requestedRole || P.requestedRole || "student"), a = Math.min(3, d + 1);
        return {
          step: a,
          role: r,
          showStep1: a === 1,
          showStudent: a === 2 && r === "student",
          showEducator: a === 2 && r === "educator",
          showInstitution: a === 2 && r === "institution_admin",
          showVerified: a === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: a === 3,
          showBack: a > 1,
          progress: a === 1 ? "Step 1 of 3 · Profile" : a === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: a === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_advance = o;
    }
    return m("requestedRole", t.wizard_advance.role), m("registrationStep", t.wizard_advance.step), m("registrationProgress", t.wizard_advance.progress), m("registrationPrimaryLabel", t.wizard_advance.primaryLabel), m("showRegistrationBack", t.wizard_advance.showBack), m("showRegistrationStep1", t.wizard_advance.showStep1), m("showStudentFields", t.wizard_advance.showStudent), m("showEducatorFields", t.wizard_advance.showEducator), m("showInstitutionFields", t.wizard_advance.showInstitution), m("showVerifiedRoleFields", t.wizard_advance.showVerified), m("showRegistrationStep3", t.wizard_advance.showStep3), t.wizard_advance;
  }
  async function ge(e = {}) {
    const n = e || {}, t = {};
    {
      n.event;
      const o = await (async () => {
        const d = Math.max(1, Math.min(3, Number(P.registrationStep || 1))), r = String(P.requestedRole || "student"), a = Math.max(1, d - 1);
        return {
          step: a,
          role: r,
          showStep1: a === 1,
          showStudent: a === 2 && r === "student",
          showEducator: a === 2 && r === "educator",
          showInstitution: a === 2 && r === "institution_admin",
          showVerified: a === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: a === 3,
          showBack: a > 1,
          progress: a === 1 ? "Step 1 of 3 · Profile" : a === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: a === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_back_prepare = o;
    }
    return m("registrationStep", t.wizard_back_prepare.step), m("registrationProgress", t.wizard_back_prepare.progress), m("registrationPrimaryLabel", t.wizard_back_prepare.primaryLabel), m("showRegistrationBack", t.wizard_back_prepare.showBack), m("showRegistrationStep1", t.wizard_back_prepare.showStep1), m("showStudentFields", t.wizard_back_prepare.showStudent), m("showEducatorFields", t.wizard_back_prepare.showEducator), m("showInstitutionFields", t.wizard_back_prepare.showInstitution), m("showVerifiedRoleFields", t.wizard_back_prepare.showVerified), m("showRegistrationStep3", t.wizard_back_prepare.showStep3), t.wizard_back_prepare;
  }
  async function fe(e = {}) {
    const n = e || {};
    return m("requestedRole", n.value), n.value;
  }
  async function se(e = {}) {
    const n = e || {}, t = {}, o = {};
    m("busy", !0), m("message", "");
    {
      const r = D({ profile: "{{ args.values }}" }, { args: n, inputs: S, state: P, sharedState: J, applicationState: j, pageState: O, pageData: L, serverData: A, vars: t, stepResults: o }) || {};
      delete r.userIdentity, delete r.verifiedEmail, delete r.emailVerified, delete r.providerId;
      const a = [void 0, void 0, void 0, void 0, r.profile], p = l.executeDatabaseQuery || l.runtime?.executeDatabaseQuery;
      let v;
      if (typeof p == "function")
        v = await p({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: a, namedParameters: r, signal: n.signal });
      else {
        const _ = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: a, namedParameters: r }), signal: n.signal }), k = await _.json().catch(() => ({}));
        if (!_.ok || k.success === !1) throw new Error(k.error || "Database query failed (" + _.status + ")");
        v = k.data;
      }
      o.reg_call = v, t.queryResult = v;
    }
    {
      n.event;
      const d = await (async () => {
        const r = o.reg_call, a = Array.isArray(r) ? r[0] : r, p = a && a.result ? a.result : a;
        if (!p || p.isRegistered !== !0) throw new Error(p && p.message || "Registration did not complete.");
        return p;
      })();
      o.reg_normalize = d, t.customCodeResult = d;
    }
    return Q("registrationCompleted", { isRegistered: o.reg_normalize.isRegistered, onboardingStatus: o.reg_normalize.onboardingStatus, redirectPath: o.reg_normalize.redirectPath, requestedRole: o.reg_normalize.requestedRole, roles: o.reg_normalize.roles, verificationStatus: o.reg_normalize.verificationStatus }, !1).catch((d) => console.error("Module output delivery failed", d)), Q("navigationRequested", { path: o.reg_normalize.redirectPath }, !1).catch((d) => console.error("Module output delivery failed", d)), m("authenticatedProfile", o.reg_normalize), m("accessMode", "resolving"), m("message", o.reg_normalize.message), m("busy", !1), o.reg_normalize;
  }
  async function pe(e = {}) {
    const n = e || {}, t = {}, o = {};
    m("busy", !0), m("message", "");
    try {
      {
        const d = await G("RudraAuth.signIn", { provider: S.authProvider, returnPath: S.returnPath }, []);
        o.google_auth = d, t["RudraAuth.signInResult"] = d;
      }
    } catch (d) {
      {
        n.event;
        const r = await (async () => ({ message: String(d && d.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        o.google_error = r, t.customCodeResult = r;
      }
      return m("message", o.google_error.message), m("accessMode", "login"), m("busy", !1), { error: o.google_error.message, ok: !1 };
    }
    Q("googleSignInRequested", { returnPath: S.returnPath }, !1).catch((d) => console.error("Module output delivery failed", d));
    {
      n.event;
      const d = await (async () => {
        const r = o.google_auth || {}, a = r.user || r.currentUser || r.profile || r;
        if (r.success === !1 || !a || !(a.uid || a.id || a.userId) || !a.email)
          throw new Error(r.error || "Google sign-in did not return a verified user.");
        return {
          uid: a.uid || a.id || a.userId,
          email: a.email,
          displayName: a.displayName || a.name || "",
          emailVerified: a.emailVerified === !0,
          providerId: a.providerId || r.providerId || "google"
        };
      })();
      o.normalize_auth = d, t.customCodeResult = d;
    }
    m("authenticatedProfile", o.normalize_auth), m("accessMode", "resolving");
    {
      const r = D({}, { args: n, inputs: S, state: P, sharedState: J, applicationState: j, pageState: O, pageData: L, serverData: A, vars: t, stepResults: o }) || {};
      delete r.userIdentity;
      const a = [void 0], p = l.executeDatabaseQuery || l.runtime?.executeDatabaseQuery;
      let v;
      if (typeof p == "function")
        v = await p({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: a, namedParameters: r, signal: n.signal });
      else {
        const _ = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: a, namedParameters: r }), signal: n.signal }), k = await _.json().catch(() => ({}));
        if (!_.ok || k.success === !1) throw new Error(k.error || "Database query failed (" + _.status + ")");
        v = k.data;
      }
      o.resolve_access = v, t.queryResult = v;
    }
    {
      n.event;
      const d = await (async () => {
        const r = o.resolve_access, a = Array.isArray(r) ? r[0] : r, p = a && a.result ? a.result : a, v = !!(p && p.isRegistered === !0), _ = v ? p : { ...P.authenticatedProfile, isRegistered: !1 };
        return {
          isRegistered: v,
          profile: _,
          redirectPath: p && p.redirectPath || S.returnPath || "/learn"
        };
      })();
      o.normalize_access = d, t.customCodeResult = d;
    }
    return o.normalize_access.isRegistered ? (m("authenticatedProfile", o.normalize_access.profile), m("busy", !1), Q("navigationRequested", { path: o.normalize_access.redirectPath }, !1).catch((d) => console.error("Module output delivery failed", d)), o.normalize_access) : (m("authenticatedProfile", o.normalize_access.profile), m("accessMode", "registration"), m("showLogin", !1), m("showRegistration", !0), m("showPending", !1), m("busy", !1), o.normalize_access);
  }
  async function ae(e = {}) {
    const n = e || {}, t = {};
    {
      n.event;
      const o = await (async () => {
        const d = S.profile && typeof S.profile == "object" ? S.profile : {};
        let r = ["login", "registration", "resolving"].includes(S.mode) ? S.mode : "login";
        S.authenticated === !0 && d.isRegistered === !1 && (r = "registration");
        const a = r === "resolving" && d.verificationStatus === "pending";
        return {
          mode: r,
          profile: d,
          showLogin: r === "login",
          showRegistration: r === "registration",
          showPending: a
        };
      })();
      t.init_context = o;
    }
    return m("authenticatedProfile", t.init_context.profile), m("accessMode", t.init_context.mode), m("showLogin", t.init_context.showLogin), m("showRegistration", t.init_context.showRegistration), m("showPending", t.init_context.showPending), t.init_context;
  }
  const ye = {
    handleRegistrationSubmit: he,
    goBackRegistrationStep: ge,
    setRequestedRole: fe,
    submitRegistration: se,
    requestGoogleSignIn: pe,
    initializeAccessFlow: ae
  }, ve = {
    handleRegistrationSubmit: ["values"],
    goBackRegistrationStep: [],
    setRequestedRole: ["value"],
    submitRegistration: ["values"],
    requestGoogleSignIn: [],
    initializeAccessFlow: []
  }, G = (e, n = {}, t = []) => {
    const o = ye[e];
    if (o) {
      const v = ve[e] || [];
      return o(Object.fromEntries(v.map((_, k) => {
        const $ = Object.prototype.hasOwnProperty.call(n, _) ? n[_] : void 0;
        return [_, ($ === "" || $ === void 0) && t[k] !== void 0 ? t[k] : _ === "event" && ($ === "" || $ === void 0) ? t[0] : $];
      })));
    }
    const d = f?.[e];
    if (typeof d == "function")
      return d(Object.keys(n).length > 0 ? n : t[0]);
    const [r, a] = String(e).split("."), p = typeof globalThis < "u" ? globalThis[r]?.[a] : void 0;
    if (typeof p == "function") return p(...Object.values(n));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, T = V(/* @__PURE__ */ new Map()), we = U((e, n, t, o) => {
    const d = T.current.get(e);
    if (n === "exhaust" && d?.promise) return d.promise;
    n === "takeLatest" && d?.controller?.abort();
    const r = new AbortController(), a = () => Promise.resolve().then(() => t(r.signal)), p = n === "queue" && d?.promise ? d.promise.catch(() => {
    }).then(a) : a();
    return T.current.set(e, { controller: r, promise: p }), p.catch((v) => {
      v?.name !== "AbortError" && console.error(o, v);
    }).finally(() => {
      T.current.get(e)?.promise === p && T.current.delete(e);
    }), p;
  }, []);
  B(() => () => {
    for (const e of T.current.values()) e.controller?.abort();
    T.current.clear();
  }, []);
  const ce = V(!1);
  return B(() => {
    ce.current || (ce.current = !0), we("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (e) => ae({}), "Module input lifecycle failed:");
  }, [y, oe, q]), /* @__PURE__ */ u("div", { ref: z, className: "rudra-module-wrapper", children: c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
    "      ",
    /* @__PURE__ */ i(F, { id: "root", className: "rs-access", children: [
      "      ",
      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
        "      ",
        /* @__PURE__ */ i(F, { id: "panel", className: "rs-access-grid", children: [
          "      ",
          c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
            "      ",
            /* @__PURE__ */ i(F, { id: "story", className: "rs-access-story", children: [
              "      ",
              c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ i(F, { id: "story_badge", "aria-label": "College mathematics proof of concept", className: "rs-badge-row", children: [
                  "      ",
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(b, { icon: "GraduationCap", id: "story_badge_icon", size: 14, color: "#b8f7e7", strokeWidth: 2 })
                  ] }),
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(x, { id: "story_badge_label", className: "rs-badge-label", as: "span", content: "College mathematics · POC", customColor: "#eafff8" })
                  ] })
                ] })
              ] }),
              c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(x, { id: "title", className: "rs-access-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learn mathematics with context, not shortcuts." : e)(g?.i18n?.title), customColor: "#eafff8", as: "h2" })
              ] }),
              c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(x, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : e)(g?.i18n?.subtitle) })
              ] }),
              c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(H, { id: "trust", title: "SQL is the authority", variant: "neutral", appearance: "outlined", live: "off" })
              ] })
            ] })
          ] }),
          c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
            "      ",
            /* @__PURE__ */ i(F, { id: "form_area", className: "rs-access-form", children: [
              "      ",
              c(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.showLogin)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(x, { id: "signin_eyebrow", className: "rs-signin-eyebrow", content: /* @__PURE__ */ ((e) => e === void 0 ? "WELCOME TO RUDRA SCHOLAR" : e)(g?.i18n?.welcome), as: "p" })
              ] }),
              c(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.showLogin)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(x, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready to think through the next problem?" : e)(g?.i18n?.signInTitle) })
              ] }),
              c(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.showLogin)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(x, { id: "signin_intro", className: "rs-signin-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : e)(g?.i18n?.signInIntro) })
              ] }),
              c(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.showLogin)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(te, { id: "google", leftIcon: /* @__PURE__ */ i(s, { children: [
                  "      ",
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(b, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", strokeWidth: 1.2, size: 20 })
                  ] })
                ] }), variant: "outline", ariaLabel: "Sign in with Google", fullWidth: !0, id: "scholar-google-signin", label: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in with Google" : e)(g?.i18n?.google), loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.busy), onAction: (...e) => G("requestGoogleSignIn", {}, e), rightIcon: !1, size: "lg", theme: "auto" })
              ] }),
              c(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.showLogin)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(x, { id: "notice", className: "rs-signin-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : e)(g?.i18n?.signInHelp) })
              ] }),
              c(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.showRegistration)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(x, { id: "heading", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Create your Scholar account" : e)(g?.i18n?.profile) })
              ] }),
              c(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.showRegistration)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ i(be, { id: "profile_form", className: "rs-form", onSubmit: (...e) => G("submitRegistration", {}, e), initialValues: { requestedRole: "student" }, children: [
                  "      ",
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(x, { id: "registration_progress", className: "rs-registration-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1 of 3 · Profile" : e)(g?.registrationProgress) })
                  ] }),
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "email", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "Mail", id: "email_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((e) => e === void 0 ? "Signed-in Google account" : e)(g?.authenticatedProfile?.email), disabled: !0, name: "verifiedEmail" })
                  ] }),
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "first_name", required: !0, name: "firstName", size: "md", type: "text", label: "First name" })
                  ] }),
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "last_name", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "UserRound", id: "last_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), label: "Last name", required: !0, name: "lastName", size: "md", type: "text" })
                  ] }),
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(le, { id: "role", name: "requestedRole", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }], required: !0, onChangeValue: (...e) => G("setRequestedRole", {}, e) })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "qualification", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "GraduationCap", id: "qualification_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), size: "md", type: "text", label: "Highest relevant qualification", required: !0, placeholder: "For example, M.Sc. Mathematics", name: "qualification" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "institution", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code", name: "institutionInvite", size: "md", type: "text" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(H, { id: "kyc_intro", variant: "neutral", appearance: "outlined", live: "off", title: "Role verification required" })
                  ] }),
                  c(h({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "kyc", name: "kycReference", size: "md", type: "text", label: "Legacy verification field disabled", required: !1, placeholder: "Secure upload reference — do not paste document data" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "expertise", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "Sigma", id: "expertise_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, placeholder: "For example, Linear Algebra, Calculus", name: "subjectExpertise", size: "md", type: "text", label: "Mathematics expertise" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(_e, { id: "professional_statement", placeholder: "Briefly describe your teaching experience.", name: "professionalStatement", size: "md", label: "Short professional statement", maxRows: 6, minRows: 3, required: !0, autoResize: !0 })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "educator_institution", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "School", id: "educator_institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), label: "College or university", required: !0, name: "institutionName", size: "md", type: "text" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "evidence", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "KYC verification evidence", required: !0, placeholder: "Use an institution email or public staff-profile URL", name: "kycEvidence" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "institution_legal_name", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "Landmark", id: "institution_legal_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionLegalName", size: "md", type: "text", label: "Institution legal name", required: !0 })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "institution_display_name", name: "institutionDisplayName", size: "md", type: "text", label: "Display name", required: !0 })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(le, { id: "institution_type", required: !0, name: "institutionType", label: "Institution type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }] })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "institution_website", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "Globe", id: "institution_website_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, placeholder: "https://example.edu", name: "institutionWebsite", size: "md", type: "url", label: "Official website" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "institution_domain", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "AtSign", id: "institution_domain_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionEmailDomain", size: "md", type: "text", label: "Institutional email domain", required: !0, placeholder: "example.edu" })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "institution_contact", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionContact", size: "md", type: "text", label: "Administrative contact", required: !0 })
                  ] }),
                  c(void 0) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(w, { id: "country", icon: /* @__PURE__ */ i(s, { children: [
                      "      ",
                      c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(b, { icon: "MapPin", id: "country_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "country", size: "md", type: "text", label: "Country", required: !0 })
                  ] }),
                  c(h({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(ee, { id: "age_confirmed", name: "ageConfirmed", label: "I confirm I am 18 or older.", required: !1, colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators." })
                  ] }),
                  c(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.showRegistration)) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(ee, { id: "terms", name: "termsAccepted", label: "I accept the Terms of Service.", required: !0, colorScheme: "emerald", description: "Required before an account can be created." })
                  ] }),
                  c(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.showRegistration)) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(ee, { id: "privacy", label: "I have read and accept the Privacy Notice.", required: !0, colorScheme: "emerald", description: "Required before an account can be created.", name: "privacyAccepted" })
                  ] }),
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ u(te, { id: "submit", size: "lg", label: "Continue", theme: "auto", leftIcon: !1, loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.busy), variant: "primary", fullWidth: !0, rightIcon: !1 })
                  ] }),
                  c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ i(F, { id: "registration_actions", className: "rs-registration-actions", children: [
                      "      ",
                      c(g?.showRegistrationBack) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ u(te, { id: "registration_back", leftIcon: /* @__PURE__ */ i(s, { children: [
                          "      ",
                          c(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ u(b, { icon: "ArrowLeft", id: "registration_back_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), theme: "auto", variant: "secondary", onAction: (...e) => G("goBackRegistrationStep", {}, e), fullWidth: !0, rightIcon: !1, size: "lg", type: "button", additionalAttributes: {}, id: "scholar-registration-back", label: "Back" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              c(g?.message) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(H, { id: "message", live: "polite", title: "Scholar access", variant: "neutral", appearance: "outlined" })
              ] }),
              c(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.showPending)) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ u(H, { id: "pending_notice", appearance: "outlined", live: "polite", title: "Professor verification pending", variant: "warning" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  xe as default
};
