import { jsx as g, jsxs as c, Fragment as l } from "react/jsx-runtime";
import ce, { useState as R, useEffect as Z, useRef as de, useCallback as Y } from "react";
import { Typography as x, Alert as ee, Button as le } from "@rudra-studio/rudra-core";
import { Form as wt, Input as q, Select as Ee, Textarea as vt, Checkbox as ue } from "@rudra-studio/rudra-form";
import { Box as Q } from "@rudra-studio/rudra-layout";
import * as te from "lucide-react";
const ke = (i) => String(i || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), _t = (i) => {
  let b = i;
  for (; b && typeof b == "object" && "type" in b && "value" in b; )
    b = b.value;
  return b;
};
function P({ icon: i, size: b, color: _, strokeWidth: X, className: W = "", style: T, ...E }) {
  const v = _t(i), [A, B] = R(null), me = v && typeof v == "object" ? JSON.stringify(v) : String(v || "");
  Z(() => {
    const F = new AbortController();
    let j = "", N = "";
    if (B(null), typeof v == "string") {
      const S = v.trim();
      if (te[S]) return () => F.abort();
      S.startsWith("<svg") ? N = S : (/^https?:\/\//.test(S) || S.startsWith("/") || S.startsWith("data:image/svg")) && (j = S);
    } else v && typeof v == "object" && (v.iconType === "svg" && v.svgContent ? N = v.svgContent : v.iconType === "url" && v.url && (j = v.url));
    return N ? B(ke(N)) : j && fetch(j, { signal: F.signal }).then((S) => {
      if (!S.ok) throw new Error("Icon request failed (" + S.status + ")");
      return S.text();
    }).then((S) => {
      S.trim().startsWith("<svg") && B(ke(S));
    }).catch((S) => {
      S.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", S);
    }), () => F.abort();
  }, [me]);
  const L = v && typeof v == "object" ? v.props || {} : {}, k = { ...L };
  delete k.size, delete k.color, delete k.strokeWidth;
  const C = b ?? L.size ?? 24, $ = _ ?? L.color ?? "currentColor", w = X ?? L.strokeWidth ?? 1.5;
  let m = "";
  if (typeof v == "string" && te[v] ? m = v : v && typeof v == "object" && v.name && (!v.iconType || v.iconType === "lucide") && (m = v.name), m) {
    const F = te[m];
    if (F)
      return ce.createElement(F, {
        size: C,
        color: $,
        strokeWidth: w,
        className: W,
        style: T,
        ...k,
        ...E
      });
  }
  if (A)
    return ce.createElement("span", {
      ...k,
      ...E,
      className: ("rudra-universal-icon " + W).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: C,
        height: C,
        color: $,
        ...T
      },
      dangerouslySetInnerHTML: {
        __html: A.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + w + '">')
      }
    });
  const re = te.LayoutGrid;
  return ce.createElement(re, {
    size: C,
    color: $,
    strokeWidth: w,
    className: W,
    style: T,
    ...k,
    ...E
  });
}
function zt(i) {
  const b = {}, _ = i.serverData || i.serverState || {}, X = i.sharedState || {}, W = i.applicationState || _.applicationState || {}, T = i.pageState || _.pageState || {}, E = i.pageData || _.pageData || {}, v = {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  };
  i.$route ?? i.route ?? i.data?.$route ?? i.data?.route ?? i.runtime?.data?.$route ?? i.runtime?.route ?? _?.$route ?? _?.route, i.$params ?? i.routeParams ?? i.params ?? i.data?.$params ?? i.data?.routeParams ?? i.data?.params ?? i.runtime?.data?.$params ?? i.runtime?.route?.params ?? i.runtime?.routeParams ?? i.runtime?.params ?? _?.$params ?? _?.routeParams ?? _?.params, i.$query ?? i.queryParams ?? i.query ?? i.data?.$query ?? i.data?.queryParams ?? i.data?.query ?? i.runtime?.data?.$query ?? i.runtime?.route?.query ?? i.runtime?.queryParams ?? i.runtime?.query ?? _?.$query ?? _?.queryParams ?? _?.query, i.$auth ?? i.auth ?? i.data?.$auth ?? i.data?.auth ?? i.runtime?.data?.$auth ?? i.runtime?.authInfo ?? i.runtime?.auth ?? _?.$auth ?? _?.auth, i.$config ?? i.config ?? i.data?.$config ?? i.data?.config ?? i.runtime?.data?.$config ?? i.runtime?.config ?? _?.$config ?? _?.config, i.$env ?? i.env ?? i.data?.$env ?? i.data?.env ?? i.runtime?.data?.$env ?? i.runtime?.env ?? _?.$env ?? _?.env, i.$locale ?? i.locale ?? i.data?.$locale ?? i.data?.locale ?? i.runtime?.data?.$locale ?? i.runtime?.locale ?? _?.$locale ?? _?.locale, i.$translations ?? i.translations ?? i.data?.$translations ?? i.data?.translations ?? i.runtime?.data?.$translations ?? i.runtime?.translations ?? _?.$translations ?? _?.translations, i.$i18n ?? i.i18n ?? i.data?.$i18n ?? i.data?.i18n ?? i.runtime?.data?.$i18n ?? i.runtime?.i18n ?? _?.$i18n ?? _?.i18n;
  const A = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, B = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [me, L] = R(() => A ?? B());
  Z(() => {
    A != null && L(A);
  }, [A]), Z(() => {
    if (A != null || typeof document > "u") return;
    const e = document.documentElement, r = (n) => L(n?.detail?.theme ?? B()), t = new MutationObserver(r);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [A]);
  const k = de(null), [C, $] = R("lg");
  Z(() => {
    if (!k.current) return;
    const e = new ResizeObserver((r) => {
      for (let t of r) {
        const n = t.contentRect.width;
        n < 768 ? $("sm") : n < 1024 ? $("md") : $("lg");
      }
    });
    return e.observe(k.current), () => e.disconnect();
  }, []);
  const w = Y((e) => typeof e != "object" || e === null ? e : C === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : C === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [C]), m = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, re = i.profileServiceEnabled !== void 0 ? i.profileServiceEnabled : i.data?.profileServiceEnabled !== void 0 ? i.data.profileServiceEnabled : !1, F = i.locale !== void 0 ? i.locale : i.data?.locale !== void 0 ? i.data.locale : "en", j = i.authenticated !== void 0 ? i.authenticated : i.data?.authenticated !== void 0 ? i.data.authenticated : !1, N = i.mode !== void 0 ? i.mode : i.data?.mode !== void 0 ? i.data.mode : "login", S = i.authProvider !== void 0 ? i.authProvider : i.data?.authProvider !== void 0 ? i.data.authProvider : "firebase-google", xe = i.returnPath !== void 0 ? i.returnPath : i.data?.returnPath !== void 0 ? i.data.returnPath : "/learn", ge = i.profile !== void 0 ? i.profile : i.data?.profile !== void 0 ? i.data.profile : {}, I = { profileServiceEnabled: re, locale: F, authenticated: j, mode: N, authProvider: S, returnPath: xe, profile: ge }, [he, Ce] = R(() => structuredClone(!1)), [H, Fe] = R(() => structuredClone(!0)), [ie, Le] = R(() => structuredClone(!1)), [se, $e] = R(() => structuredClone(!1)), [fe, je] = R(() => structuredClone(!1)), [ne, Ne] = R(() => structuredClone(!1)), [Me, Oe] = R(() => structuredClone(1)), [We, Te] = R(() => structuredClone(!0)), [ye, Be] = R(() => structuredClone({})), [pe, De] = R(() => structuredClone("Next")), [D, Ge] = R(() => structuredClone(!0)), [Ue, Je] = R(() => structuredClone("login")), [G, Qe] = R(() => structuredClone(!1)), [we, Ze] = R(() => structuredClone("Step 1 of 3 · Profile")), [ve, He] = R(() => structuredClone(!0)), [_e, Ke] = R(() => structuredClone(!1)), [Re, Ye] = R(() => structuredClone({ privacyAccepted: !1, requestedRole: "student", termsAccepted: !1, verifiedEmail: "" })), [M, Xe] = R(() => structuredClone(!1)), [Se, Ve] = R(() => structuredClone(!1)), [be, et] = R(() => structuredClone("")), [tt, rt] = R(() => structuredClone(!1)), [oe, it] = R(() => structuredClone(!1)), [st, nt] = R(() => structuredClone("student")), [Pe, ot] = R(() => structuredClone(!1)), u = { showRegistrationBack: he, showRegistrationStep1: H, busy: ie, showVerifiedRoleFields: se, termsAccepted: fe, showRegistrationStep3: ne, registrationStep: Me, showStudentFields: We, authenticatedProfile: ye, registrationPrimaryLabel: pe, showLogin: D, accessMode: Ue, showEducatorFields: G, registrationProgress: we, showStudentInvitation: ve, showPending: _e, registrationInitialValues: Re, showInstitutionFields: M, privacyAccepted: Se, message: be, consentReady: tt, showRegistration: oe, requestedRole: st, consentRequired: Pe }, o = Y((e, r) => {
    switch (e) {
      case "showRegistrationBack": {
        const t = typeof r == "function" ? r(u.showRegistrationBack) : r;
        return u.showRegistrationBack = t, Ce(t), t;
      }
      case "showRegistrationStep1": {
        const t = typeof r == "function" ? r(u.showRegistrationStep1) : r;
        return u.showRegistrationStep1 = t, Fe(t), t;
      }
      case "busy": {
        const t = typeof r == "function" ? r(u.busy) : r;
        return u.busy = t, Le(t), t;
      }
      case "showVerifiedRoleFields": {
        const t = typeof r == "function" ? r(u.showVerifiedRoleFields) : r;
        return u.showVerifiedRoleFields = t, $e(t), t;
      }
      case "termsAccepted": {
        const t = typeof r == "function" ? r(u.termsAccepted) : r;
        return u.termsAccepted = t, je(t), t;
      }
      case "showRegistrationStep3": {
        const t = typeof r == "function" ? r(u.showRegistrationStep3) : r;
        return u.showRegistrationStep3 = t, Ne(t), t;
      }
      case "registrationStep": {
        const t = typeof r == "function" ? r(u.registrationStep) : r;
        return u.registrationStep = t, Oe(t), t;
      }
      case "showStudentFields": {
        const t = typeof r == "function" ? r(u.showStudentFields) : r;
        return u.showStudentFields = t, Te(t), t;
      }
      case "authenticatedProfile": {
        const t = typeof r == "function" ? r(u.authenticatedProfile) : r;
        return u.authenticatedProfile = t, Be(t), t;
      }
      case "registrationPrimaryLabel": {
        const t = typeof r == "function" ? r(u.registrationPrimaryLabel) : r;
        return u.registrationPrimaryLabel = t, De(t), t;
      }
      case "showLogin": {
        const t = typeof r == "function" ? r(u.showLogin) : r;
        return u.showLogin = t, Ge(t), t;
      }
      case "accessMode": {
        const t = typeof r == "function" ? r(u.accessMode) : r;
        return u.accessMode = t, Je(t), t;
      }
      case "showEducatorFields": {
        const t = typeof r == "function" ? r(u.showEducatorFields) : r;
        return u.showEducatorFields = t, Qe(t), t;
      }
      case "registrationProgress": {
        const t = typeof r == "function" ? r(u.registrationProgress) : r;
        return u.registrationProgress = t, Ze(t), t;
      }
      case "showStudentInvitation": {
        const t = typeof r == "function" ? r(u.showStudentInvitation) : r;
        return u.showStudentInvitation = t, He(t), t;
      }
      case "showPending": {
        const t = typeof r == "function" ? r(u.showPending) : r;
        return u.showPending = t, Ke(t), t;
      }
      case "registrationInitialValues": {
        const t = typeof r == "function" ? r(u.registrationInitialValues) : r;
        return u.registrationInitialValues = t, Ye(t), t;
      }
      case "showInstitutionFields": {
        const t = typeof r == "function" ? r(u.showInstitutionFields) : r;
        return u.showInstitutionFields = t, Xe(t), t;
      }
      case "privacyAccepted": {
        const t = typeof r == "function" ? r(u.privacyAccepted) : r;
        return u.privacyAccepted = t, Ve(t), t;
      }
      case "message": {
        const t = typeof r == "function" ? r(u.message) : r;
        return u.message = t, et(t), t;
      }
      case "consentReady": {
        const t = typeof r == "function" ? r(u.consentReady) : r;
        return u.consentReady = t, rt(t), t;
      }
      case "showRegistration": {
        const t = typeof r == "function" ? r(u.showRegistration) : r;
        return u.showRegistration = t, it(t), t;
      }
      case "requestedRole": {
        const t = typeof r == "function" ? r(u.requestedRole) : r;
        return u.requestedRole = t, nt(t), t;
      }
      case "consentRequired": {
        const t = typeof r == "function" ? r(u.consentRequired) : r;
        return u.consentRequired = t, ot(t), t;
      }
      default:
        return r;
    }
  }, [u]);
  Y((e, r) => {
    const [t, ...n] = String(e || "").split(".");
    if (!t) return r;
    if (n.length === 0) return o(t, r);
    const s = (a) => {
      const d = Array.isArray(a) ? [...a] : { ...a || {} };
      let f = d;
      return n.forEach((h, y) => {
        y === n.length - 1 ? f[h] = r : (f[h] = Array.isArray(f[h]) ? [...f[h]] : { ...f[h] || {} }, f = f[h]);
      }), d;
    };
    switch (t) {
      case "showRegistrationBack":
        return o("showRegistrationBack", s), r;
      case "showRegistrationStep1":
        return o("showRegistrationStep1", s), r;
      case "busy":
        return o("busy", s), r;
      case "showVerifiedRoleFields":
        return o("showVerifiedRoleFields", s), r;
      case "termsAccepted":
        return o("termsAccepted", s), r;
      case "showRegistrationStep3":
        return o("showRegistrationStep3", s), r;
      case "registrationStep":
        return o("registrationStep", s), r;
      case "showStudentFields":
        return o("showStudentFields", s), r;
      case "authenticatedProfile":
        return o("authenticatedProfile", s), r;
      case "registrationPrimaryLabel":
        return o("registrationPrimaryLabel", s), r;
      case "showLogin":
        return o("showLogin", s), r;
      case "accessMode":
        return o("accessMode", s), r;
      case "showEducatorFields":
        return o("showEducatorFields", s), r;
      case "registrationProgress":
        return o("registrationProgress", s), r;
      case "showStudentInvitation":
        return o("showStudentInvitation", s), r;
      case "showPending":
        return o("showPending", s), r;
      case "registrationInitialValues":
        return o("registrationInitialValues", s), r;
      case "showInstitutionFields":
        return o("showInstitutionFields", s), r;
      case "privacyAccepted":
        return o("privacyAccepted", s), r;
      case "message":
        return o("message", s), r;
      case "consentReady":
        return o("consentReady", s), r;
      case "showRegistration":
        return o("showRegistration", s), r;
      case "requestedRole":
        return o("requestedRole", s), r;
      case "consentRequired":
        return o("consentRequired", s), r;
      default:
        return r;
    }
  }, [o]);
  const at = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, ae = (e, r, t) => {
    if (!r || typeof r != "object") return "";
    const n = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], s = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (n.length && !n.includes(s) && !(s === "integer" && n.includes("number"))) return t + " must be " + n.join(" or ") + ".";
    if (r.enum && !r.enum.some((a) => JSON.stringify(a) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const a of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, a)) return t + "." + a + " is required.";
      for (const [a, d] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, a)) {
        const f = ae(e[a], d, t + "." + a);
        if (f) return f;
      }
    }
    if (Array.isArray(e) && r.items) for (let a = 0; a < e.length; a++) {
      const d = ae(e[a], r.items, t + "[" + a + "]");
      if (d) return d;
    }
    return "";
  }, V = Y(async (e, r, t = !1) => {
    const n = at[e];
    if (!n) throw new Error("Module output '" + e + "' is not declared.");
    const s = ae(r, n, "output." + e);
    if (s) throw new Error(s);
    const a = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof a != "function") return r;
    const d = a(e, r, { moduleId: i.moduleId, awaitHandlers: t });
    return t ? await d : r;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]), qe = (e, r) => {
    const t = String(r || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return t.reduce((n, s) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(s in n) ? n.get(s) : n[s];
      }, e);
  }, K = (e, r) => {
    if (Array.isArray(e)) return e.map((n) => K(n, r));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([n, s]) => [K(n, r), K(s, r)]));
    if (typeof e != "string") return e;
    const t = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? qe(r, t[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, s) => {
      const a = qe(r, s);
      return a == null ? "" : typeof a == "object" ? JSON.stringify(a) : String(a);
    });
  };
  async function ze(e = {}) {
    const r = e || {}, t = {}, n = {};
    try {
      {
        const s = r.event, a = E, d = u, f = await (async () => {
          const h = r.values && typeof r.values == "object" ? r.values : {}, y = u.authenticatedProfile && typeof u.authenticatedProfile == "object" ? u.authenticatedProfile : {}, p = (pt) => String(h[pt] || "").trim(), z = p("requestedRole") || String(u.requestedRole || "student"), J = String(y.email || p("verifiedEmail")).trim();
          if (!J) throw new Error("Your verified Google email is missing. Please sign in again.");
          if (!p("firstName") || !p("lastName")) throw new Error("First name and last name are required.");
          if (!["student", "educator", "institution_admin"].includes(z)) throw new Error("Choose a valid Scholar role.");
          if (z === "educator" && (!p("qualification") || !p("subjectExpertise") || !p("professionalStatement") || !p("institutionName") || !p("kycEvidence") || !p("country"))) throw new Error("Complete all professor verification fields.");
          if (z === "institution_admin" && (!p("institutionLegalName") || !p("institutionDisplayName") || !p("institutionType") || !p("institutionWebsite") || !p("institutionEmailDomain") || !p("institutionContact") || !p("country"))) throw new Error("Complete all institution verification fields.");
          if (h.termsAccepted !== !0 || h.privacyAccepted !== !0) throw new Error("Accept the Terms of Service and Privacy Notice to continue.");
          return { ...h, verifiedEmail: J, requestedRole: z, termsAccepted: !0, privacyAccepted: !0 };
        })();
        n.reg_validate = f, t.customCodeResult = f;
      }
    } catch (s) {
      const a = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "reg_validate" };
      t.error = a, n.reg_validate = { error: a };
      {
        r.event;
        const d = await (async () => ({ message: String(a && a.message || "Registration failed. Please try again.") }))();
        n.reg_error = d, t.customCodeResult = d;
      }
      return o("message", n.reg_error.message), o("busy", !1), { error: n.reg_error.message, ok: !1 };
    }
    o("busy", !0), o("message", "");
    try {
      {
        const a = K({ profile: "{{ stepResults.reg_validate }}" }, { args: r, inputs: I, state: u, sharedState: X, applicationState: W, pageState: T, pageData: E, serverData: _, vars: t, stepResults: n }) || {};
        delete a.userIdentity, delete a.verifiedEmail, delete a.emailVerified, delete a.providerId;
        const d = [void 0, void 0, void 0, void 0, a.profile], f = i.executeDatabaseQuery || i.runtime?.executeDatabaseQuery;
        let h;
        if (typeof f == "function")
          h = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: d, namedParameters: a, signal: r.signal });
        else {
          const y = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: d, namedParameters: a }), signal: r.signal }), p = await y.json().catch(() => ({}));
          if (!y.ok || p.success === !1) throw new Error(p.error || "Database query failed (" + y.status + ")");
          h = p.data;
        }
        n.reg_call = h, t.queryResult = h;
      }
    } catch (s) {
      const a = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "reg_call" };
      t.error = a, n.reg_call = { error: a };
      {
        r.event;
        const d = await (async () => ({ message: String(a && a.message || "Registration failed. Please try again.") }))();
        n.reg_error = d, t.customCodeResult = d;
      }
      return o("message", n.reg_error.message), o("busy", !1), { error: n.reg_error.message, ok: !1 };
    }
    try {
      {
        const s = r.event, a = E, d = u, f = await (async () => {
          const h = n.reg_call, y = Array.isArray(h) ? h[0] : h, p = y && y.result ? y.result : y;
          if (!p || p.isRegistered !== !0) throw new Error(p && p.message || "Registration did not complete.");
          return p;
        })();
        n.reg_normalize = f, t.customCodeResult = f;
      }
    } catch (s) {
      const a = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "reg_normalize" };
      t.error = a, n.reg_normalize = { error: a };
      {
        r.event;
        const d = await (async () => ({ message: String(a && a.message || "Registration failed. Please try again.") }))();
        n.reg_error = d, t.customCodeResult = d;
      }
      return o("message", n.reg_error.message), o("busy", !1), { error: n.reg_error.message, ok: !1 };
    }
    return await V("registrationCompleted", { isRegistered: n.reg_normalize.isRegistered, onboardingStatus: n.reg_normalize.onboardingStatus, redirectPath: n.reg_normalize.redirectPath, requestedRole: n.reg_normalize.requestedRole, roles: n.reg_normalize.roles, verificationStatus: n.reg_normalize.verificationStatus }, !0), await V("navigationRequested", { path: n.reg_normalize.redirectPath }, !0), o("authenticatedProfile", n.reg_normalize), o("accessMode", "resolving"), o("message", n.reg_normalize.message), o("busy", !1), n.reg_normalize;
  }
  async function ct(e = {}) {
    const r = e || {}, t = {};
    o("privacyAccepted", r.value);
    {
      r.event;
      const n = await (async () => r.value === !0 && u.termsAccepted === !0)();
      t.privacyAccepted_ready = n;
    }
    o("consentReady", t.privacyAccepted_ready);
    {
      r.event;
      const n = await (async () => !(r.value === !0 && u.termsAccepted === !0))();
      t.privacyAccepted_missing = n;
    }
    return o("consentRequired", t.privacyAccepted_missing), r.value;
  }
  async function dt(e = {}) {
    const r = e || {}, t = {};
    o("termsAccepted", r.value);
    {
      r.event;
      const n = await (async () => r.value === !0 && u.privacyAccepted === !0)();
      t.termsAccepted_ready = n;
    }
    o("consentReady", t.termsAccepted_ready);
    {
      r.event;
      const n = await (async () => !(r.value === !0 && u.privacyAccepted === !0))();
      t.termsAccepted_missing = n;
    }
    return o("consentRequired", t.termsAccepted_missing), r.value;
  }
  async function lt(e = {}) {
    const r = e || {}, t = {}, n = {};
    o("busy", !0), o("message", "");
    try {
      {
        const s = await O("RudraAuth.signIn", { provider: I.authProvider, returnPath: I.returnPath }, []);
        n.google_auth = s, t["RudraAuth.signInResult"] = s;
      }
    } catch (s) {
      const a = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "google_auth" };
      t.error = a, n.google_auth = { error: a };
      {
        r.event;
        const d = await (async () => ({ message: String(a && a.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        n.google_error = d, t.customCodeResult = d;
      }
      return o("message", n.google_error.message), o("accessMode", "login"), o("busy", !1), { error: n.google_error.message, ok: !1 };
    }
    await V("googleSignInRequested", { returnPath: I.returnPath }, !0);
    try {
      {
        const s = r.event, a = E, d = u, f = await (async () => {
          const h = n.google_auth || {}, y = h.user || h.currentUser || h.profile || h;
          if (h.success === !1 || !y || !(y.uid || y.id || y.userId) || !y.email)
            throw new Error(h.error || "Google sign-in did not return a verified user.");
          return {
            uid: y.uid || y.id || y.userId,
            email: y.email,
            displayName: y.displayName || y.name || "",
            emailVerified: y.emailVerified === !0,
            providerId: y.providerId || h.providerId || "google"
          };
        })();
        n.normalize_auth = f, t.customCodeResult = f;
      }
    } catch (s) {
      const a = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "normalize_auth" };
      t.error = a, n.normalize_auth = { error: a };
      {
        r.event;
        const d = await (async () => ({ message: String(a && a.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        n.google_error = d, t.customCodeResult = d;
      }
      return o("message", n.google_error.message), o("accessMode", "login"), o("busy", !1), { error: n.google_error.message, ok: !1 };
    }
    o("authenticatedProfile", n.normalize_auth), o("accessMode", "resolving");
    try {
      {
        const a = K({}, { args: r, inputs: I, state: u, sharedState: X, applicationState: W, pageState: T, pageData: E, serverData: _, vars: t, stepResults: n }) || {};
        delete a.userIdentity, delete a.verifiedEmail, delete a.emailVerified;
        const d = [void 0, void 0, void 0], f = i.executeDatabaseQuery || i.runtime?.executeDatabaseQuery;
        let h;
        if (typeof f == "function")
          h = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: d, namedParameters: a, signal: r.signal });
        else {
          const y = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: d, namedParameters: a }), signal: r.signal }), p = await y.json().catch(() => ({}));
          if (!y.ok || p.success === !1) throw new Error(p.error || "Database query failed (" + y.status + ")");
          h = p.data;
        }
        n.resolve_access = h, t.queryResult = h;
      }
    } catch (s) {
      const a = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "resolve_access" };
      t.error = a, n.resolve_access = { error: a };
      {
        r.event;
        const d = await (async () => ({ message: String(a && a.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        n.google_error = d, t.customCodeResult = d;
      }
      return o("message", n.google_error.message), o("accessMode", "login"), o("busy", !1), { error: n.google_error.message, ok: !1 };
    }
    try {
      {
        const s = r.event, a = E, d = u, f = await (async () => {
          const h = n.resolve_access, y = Array.isArray(h) ? h[0] : h, p = y && y.result ? y.result : y, z = !!(p && p.isRegistered === !0), J = z ? p : { ...u.authenticatedProfile, isRegistered: !1 };
          return {
            isRegistered: z,
            profile: J,
            registrationInitialValues: {
              verifiedEmail: String(J && J.email || ""),
              requestedRole: "student",
              termsAccepted: !1,
              privacyAccepted: !1
            },
            redirectPath: p && p.redirectPath || I.returnPath || "/learn"
          };
        })();
        n.normalize_access = f, t.customCodeResult = f;
      }
    } catch (s) {
      const a = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "normalize_access" };
      t.error = a, n.normalize_access = { error: a };
      {
        r.event;
        const d = await (async () => ({ message: String(a && a.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        n.google_error = d, t.customCodeResult = d;
      }
      return o("message", n.google_error.message), o("accessMode", "login"), o("busy", !1), { error: n.google_error.message, ok: !1 };
    }
    return n.normalize_access.isRegistered ? (o("authenticatedProfile", n.normalize_access.profile), o("busy", !1), await V("navigationRequested", { path: n.normalize_access.redirectPath }, !0), n.normalize_access) : (o("authenticatedProfile", n.normalize_access.profile), o("registrationInitialValues", n.normalize_access.registrationInitialValues), o("showStudentInvitation", !0), o("accessMode", "registration"), o("showLogin", !1), o("showRegistration", !0), o("showPending", !1), o("busy", !1), n.normalize_access);
  }
  async function ut(e = {}) {
    const r = e || {}, t = {};
    {
      r.event;
      const n = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(u.registrationStep || 1))) === 3 }))();
      t.wizard_decide = n;
    }
    if (t.wizard_decide.isFinal)
      return await ze({ values: r.values }), t.wizard_submit;
    {
      r.event;
      const n = await (async () => {
        const s = Math.max(1, Math.min(3, Number(u.registrationStep || 1))), a = String(r.values && r.values.requestedRole || u.requestedRole || "student"), d = Math.min(3, s + 1);
        return {
          step: d,
          role: a,
          showStep1: d === 1,
          showStudent: d === 2 && a === "student",
          showStudentInvite: a === "student" && (d === 1 || d === 2),
          showEducator: d === 2 && a === "educator",
          showInstitution: d === 2 && a === "institution_admin",
          showVerified: d === 2 && (a === "educator" || a === "institution_admin"),
          showStep3: d === 3,
          showBack: d > 1,
          progress: d === 1 ? "Step 1 of 3 · Profile" : d === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: d === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_advance = n;
    }
    return o("requestedRole", t.wizard_advance.role), o("registrationStep", t.wizard_advance.step), o("registrationProgress", t.wizard_advance.progress), o("registrationPrimaryLabel", t.wizard_advance.primaryLabel), o("showRegistrationBack", t.wizard_advance.showBack), o("showRegistrationStep1", t.wizard_advance.showStep1), o("showStudentFields", t.wizard_advance.showStudent), o("showStudentInvitation", t.wizard_advance.showStudentInvite), o("showEducatorFields", t.wizard_advance.showEducator), o("showInstitutionFields", t.wizard_advance.showInstitution), o("showVerifiedRoleFields", t.wizard_advance.showVerified), o("showRegistrationStep3", t.wizard_advance.showStep3), o("consentRequired", t.wizard_advance.showStep3), t.wizard_advance;
  }
  async function mt(e = {}) {
    const r = e || {}, t = {};
    {
      r.event;
      const n = await (async () => {
        const s = Math.max(1, Math.min(3, Number(u.registrationStep || 1))), a = String(u.requestedRole || "student"), d = Math.max(1, s - 1);
        return {
          step: d,
          role: a,
          showStep1: d === 1,
          showStudent: d === 2 && a === "student",
          showStudentInvite: a === "student" && (d === 1 || d === 2),
          showEducator: d === 2 && a === "educator",
          showInstitution: d === 2 && a === "institution_admin",
          showVerified: d === 2 && (a === "educator" || a === "institution_admin"),
          showStep3: d === 3,
          showBack: d > 1,
          progress: d === 1 ? "Step 1 of 3 · Profile" : d === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: d === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_back_prepare = n;
    }
    return o("registrationStep", t.wizard_back_prepare.step), o("registrationProgress", t.wizard_back_prepare.progress), o("registrationPrimaryLabel", t.wizard_back_prepare.primaryLabel), o("showRegistrationBack", t.wizard_back_prepare.showBack), o("showRegistrationStep1", t.wizard_back_prepare.showStep1), o("showStudentFields", t.wizard_back_prepare.showStudent), o("showStudentInvitation", t.wizard_back_prepare.showStudentInvite), o("showEducatorFields", t.wizard_back_prepare.showEducator), o("showInstitutionFields", t.wizard_back_prepare.showInstitution), o("showVerifiedRoleFields", t.wizard_back_prepare.showVerified), o("showRegistrationStep3", t.wizard_back_prepare.showStep3), o("consentRequired", t.wizard_back_prepare.showStep3), t.wizard_back_prepare;
  }
  async function gt(e = {}) {
    const r = e || {}, t = {};
    {
      r.event;
      const n = await (async () => {
        const s = String(r.value || "student"), a = Math.max(1, Math.min(3, Number(u.registrationStep || 1)));
        return { role: s, showStudentInvitation: s === "student" && (a === 1 || a === 2) };
      })();
      t.role_prepare = n;
    }
    return o("requestedRole", t.role_prepare.role), o("showStudentInvitation", t.role_prepare.showStudentInvitation), t.role_prepare.role;
  }
  async function Ie(e = {}) {
    const r = e || {}, t = {};
    {
      r.event;
      const n = await (async () => {
        const s = I.profile && typeof I.profile == "object" ? I.profile : {}, a = u.authenticatedProfile && typeof u.authenticatedProfile == "object" ? u.authenticatedProfile : {}, d = Object.keys(s).length ? s : a;
        let f = ["login", "registration", "resolving"].includes(I.mode) ? I.mode : "login";
        I.authenticated === !0 && d.isRegistered !== !0 && d.email && (f = "registration");
        const h = f === "resolving" && d.verificationStatus === "pending";
        return {
          mode: f,
          profile: d,
          initialValues: {
            verifiedEmail: String(d.email || ""),
            requestedRole: String(d.requestedRole || u.requestedRole || "student"),
            termsAccepted: !1,
            privacyAccepted: !1
          },
          showLogin: f === "login",
          showRegistration: f === "registration",
          showPending: h
        };
      })();
      t.init_context = n;
    }
    return o("authenticatedProfile", t.init_context.profile), o("registrationInitialValues", t.init_context.initialValues), o("showStudentInvitation", t.init_context.showStudentInvitation), o("accessMode", t.init_context.mode), o("showLogin", t.init_context.showLogin), o("showRegistration", t.init_context.showRegistration), o("showPending", t.init_context.showPending), t.init_context;
  }
  const ht = {
    submitRegistration: ze,
    setPrivacyAccepted: ct,
    setTermsAccepted: dt,
    requestGoogleSignIn: lt,
    handleRegistrationSubmit: ut,
    goBackRegistrationStep: mt,
    setRequestedRole: gt,
    initializeAccessFlow: Ie
  }, ft = {
    submitRegistration: ["values"],
    setPrivacyAccepted: ["value"],
    setTermsAccepted: ["value"],
    requestGoogleSignIn: [],
    handleRegistrationSubmit: ["values"],
    goBackRegistrationStep: [],
    setRequestedRole: ["value"],
    initializeAccessFlow: []
  }, O = (e, r = {}, t = []) => {
    const n = ht[e];
    if (n) {
      const h = ft[e] || [];
      return n(Object.fromEntries(h.map((y, p) => {
        const z = Object.prototype.hasOwnProperty.call(r, y) ? r[y] : void 0;
        return [y, (z === "" || z === void 0) && t[p] !== void 0 ? t[p] : y === "event" && (z === "" || z === void 0) ? t[0] : z];
      })));
    }
    const s = v?.[e];
    if (typeof s == "function")
      return s(Object.keys(r).length > 0 ? r : t[0]);
    const [a, d] = String(e).split("."), f = typeof globalThis < "u" ? globalThis[a]?.[d] : void 0;
    if (typeof f == "function") return f(...Object.values(r));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, U = de(/* @__PURE__ */ new Map()), yt = Y((e, r, t, n) => {
    const s = U.current.get(e);
    if (r === "exhaust" && s?.promise) return s.promise;
    r === "takeLatest" && s?.controller?.abort();
    const a = new AbortController(), d = () => Promise.resolve().then(() => t(a.signal)), f = r === "queue" && s?.promise ? s.promise.catch(() => {
    }).then(d) : d();
    return U.current.set(e, { controller: a, promise: f }), f.catch((h) => {
      h?.name !== "AbortError" && console.error(n, h);
    }).finally(() => {
      U.current.get(e)?.promise === f && U.current.delete(e);
    }), f;
  }, []);
  Z(() => () => {
    for (const e of U.current.values()) e.controller?.abort();
    U.current.clear();
  }, []);
  const Ae = de(!1);
  return Z(() => {
    Ae.current || (Ae.current = !0), yt("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (e) => Ie({}), "Module input lifecycle failed:");
  }, [j, N, ge]), /* @__PURE__ */ g("div", { ref: k, className: "rudra-module-wrapper", children: m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
    "      ",
    /* @__PURE__ */ c(Q, { id: "root", className: "rs-access", children: [
      "      ",
      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
        "      ",
        /* @__PURE__ */ c(Q, { id: "panel", className: "rs-access-grid", children: [
          "      ",
          m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
            "      ",
            /* @__PURE__ */ c(Q, { id: "story", className: "rs-access-story", children: [
              "      ",
              m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ c(Q, { id: "story_badge", "aria-label": "College mathematics proof of concept", className: "rs-badge-row", children: [
                  "      ",
                  m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(P, { icon: "GraduationCap", id: "story_badge_icon", color: "#b8f7e7", strokeWidth: 2, size: 14 })
                  ] }),
                  m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(x, { id: "story_badge_label", className: "rs-badge-label", customColor: "#eafff8", as: "span", content: "College mathematics · POC" })
                  ] })
                ] })
              ] }),
              m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(x, { id: "title", className: "rs-access-title", customColor: "#eafff8", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learn mathematics with context, not shortcuts." : e)(b?.i18n?.title) })
              ] }),
              m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(x, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : e)(b?.i18n?.subtitle) })
              ] }),
              m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(ee, { id: "trust", appearance: "outlined", live: "off", title: "SQL is the authority", variant: "neutral" })
              ] })
            ] })
          ] }),
          m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
            "      ",
            /* @__PURE__ */ c(Q, { id: "form_area", className: "rs-access-form", children: [
              "      ",
              m(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(D)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(x, { id: "signin_eyebrow", className: "rs-signin-eyebrow", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "WELCOME TO RUDRA SCHOLAR" : e)(b?.i18n?.welcome) })
              ] }),
              m(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(D)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(x, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready to think through the next problem?" : e)(b?.i18n?.signInTitle) })
              ] }),
              m(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(D)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(x, { id: "signin_intro", className: "rs-signin-intro", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : e)(b?.i18n?.signInIntro), as: "p" })
              ] }),
              m(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(D)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(le, { id: "google", leftIcon: /* @__PURE__ */ c(l, { children: [
                  "      ",
                  m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(P, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", size: 20, strokeWidth: 1.2 })
                  ] })
                ] }), variant: "outline", onAction: (...e) => O("requestGoogleSignIn", {}, e), ariaLabel: "Sign in with Google", label: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in with Google" : e)(b?.i18n?.google), fullWidth: !0, rightIcon: !1, id: "scholar-google-signin", size: "lg", theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie) })
              ] }),
              m(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(D)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(x, { id: "notice", className: "rs-signin-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : e)(b?.i18n?.signInHelp) })
              ] }),
              m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(x, { id: "heading", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Create your Scholar account" : e)(b?.i18n?.profile) })
              ] }),
              m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ c(wt, { id: "profile_form", className: "rs-form", onSubmit: (...e) => O("handleRegistrationSubmit", {}, e), initialValues: /* @__PURE__ */ ((e) => e === void 0 ? { privacyAccepted: !1, requestedRole: "student", termsAccepted: !1, verifiedEmail: "" } : e)(Re), children: [
                  "      ",
                  m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(x, { id: "registration_progress", className: "rs-registration-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1 of 3 · Profile" : e)(we) })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(H)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "email", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "Mail", id: "email_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((e) => e === void 0 ? "Signed-in Google account" : e)(ye?.email), disabled: !0, name: "verifiedEmail", size: "md" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(H)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "first_name", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "UserRound", id: "first_name_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "firstName", size: "md", type: "text", label: "First name", required: !0 })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(H)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "last_name", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "UserRound", id: "last_name_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "lastName", size: "md", type: "text", label: "Last name", required: !0 })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(H)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(Ee, { id: "role", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }], required: !0, onChangeValue: (...e) => O("setRequestedRole", {}, e), name: "requestedRole" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(G)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "qualification", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "GraduationCap", id: "qualification_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "qualification", size: "md", type: "text", label: "Highest relevant qualification", required: !0, placeholder: "For example, M.Sc. Mathematics" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(ve)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "institution", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionInvite", size: "md", type: "text", label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(ee, { id: "kyc_intro", variant: "neutral", appearance: "outlined", live: "off", title: "Role verification required" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(G)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "expertise", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "Sigma", id: "expertise_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), type: "text", label: "Mathematics expertise", required: !0, placeholder: "For example, Linear Algebra, Calculus", name: "subjectExpertise", size: "md" })
                  ] }),
                  m(w({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "kyc", required: !1, placeholder: "Secure upload reference — do not paste document data", name: "kycReference", size: "md", type: "text", label: "Legacy verification field disabled" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(G)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(vt, { id: "professional_statement", placeholder: "Briefly describe your teaching experience.", name: "professionalStatement", size: "md", label: "Short professional statement", maxRows: 6, minRows: 3, required: !0, autoResize: !0 })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(G)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "educator_institution", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "School", id: "educator_institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "institutionName", size: "md", type: "text", label: "College or university" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(G)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "evidence", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "kycEvidence", size: "md", type: "text", label: "KYC verification evidence", required: !0, placeholder: "Use an institution email or public staff-profile URL" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(M)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "institution_legal_name", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "Landmark", id: "institution_legal_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionLegalName", size: "md", type: "text", label: "Institution legal name", required: !0 })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(M)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "institution_display_name", required: !0, name: "institutionDisplayName", size: "md", type: "text", label: "Display name" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(M)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(Ee, { id: "institution_type", name: "institutionType", label: "Institution type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }], required: !0 })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(M)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "institution_website", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "Globe", id: "institution_website_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "institutionWebsite", size: "md", type: "url", label: "Official website", required: !0, placeholder: "https://example.edu" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(M)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "institution_domain", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "AtSign", id: "institution_domain_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionEmailDomain", size: "md", type: "text", label: "Institutional email domain", required: !0, placeholder: "example.edu" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(M)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "institution_contact", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "Administrative contact", required: !0, name: "institutionContact", size: "md" })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(q, { id: "country", icon: /* @__PURE__ */ c(l, { children: [
                      "      ",
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(P, { icon: "MapPin", id: "country_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "country", size: "md", type: "text", label: "Country", required: !0 })
                  ] }),
                  m(w({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(ue, { id: "age_confirmed", colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators.", name: "ageConfirmed", label: "I confirm I am 18 or older.", required: !1 })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ne)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(ue, { id: "terms", onChangeValue: (...e) => O("setTermsAccepted", {}, e), name: "termsAccepted", label: "I accept the Terms of Service.", value: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(fe), required: !0, colorScheme: "emerald", description: "Required before an account can be created." })
                  ] }),
                  m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ne)) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ g(ue, { id: "privacy", required: !0, colorScheme: "emerald", description: "Required before an account can be created.", onChangeValue: (...e) => O("setPrivacyAccepted", {}, e), name: "privacyAccepted", label: "I have read and accept the Privacy Notice.", value: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Se) })
                  ] }),
                  m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                    "      ",
                    /* @__PURE__ */ c(Q, { id: "registration_actions", className: "rs-registration-actions", children: [
                      "      ",
                      m(he) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(le, { id: "registration_back", leftIcon: /* @__PURE__ */ c(l, { children: [
                          "      ",
                          m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                            "      ",
                            /* @__PURE__ */ g(P, { icon: "ArrowLeft", id: "registration_back_icon", strokeWidth: 2, size: 18 })
                          ] })
                        ] }), type: "button", theme: "auto", variant: "secondary", onAction: (...e) => O("goBackRegistrationStep", {}, e), fullWidth: !0, additionalAttributes: {}, id: "scholar-registration-back", label: "Back", rightIcon: !1, size: "lg" })
                      ] }),
                      m(w({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                        "      ",
                        /* @__PURE__ */ g(le, { id: "submit", id: "scholar-registration-primary", size: "lg", theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), leftIcon: !1, fullWidth: !0, rightIcon: !1, type: "submit", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next" : e)(pe), variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(Pe) })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              m(be) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(ee, { id: "message", live: "polite", title: "Scholar access", variant: "neutral", appearance: "outlined" })
              ] }),
              m(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_e)) && /* @__PURE__ */ c(l, { children: [
                "      ",
                /* @__PURE__ */ g(ee, { id: "pending_notice", appearance: "outlined", live: "polite", title: "Professor verification pending", variant: "warning" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  zt as default
};
