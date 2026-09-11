import { jsx as f, jsxs as a, Fragment as d } from "react/jsx-runtime";
import ae, { useState as w, useEffect as J, useRef as ce, useCallback as K } from "react";
import * as ee from "lucide-react";
import { Form as ft, Input as b, Select as Ie, Textarea as gt, Checkbox as de } from "@rudra-studio/rudra-form";
import { Typography as q, Alert as te, Button as le } from "@rudra-studio/rudra-core";
import { Box as U } from "@rudra-studio/rudra-layout";
const Ae = (m) => String(m || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), pt = (m) => {
  let R = m;
  for (; R && typeof R == "object" && "type" in R && "value" in R; )
    R = R.value;
  return R;
};
function _({ icon: m, size: R, color: C, strokeWidth: Y, className: M = "", style: O, ...W }) {
  const y = pt(m), [I, T] = w(null), ue = y && typeof y == "object" ? JSON.stringify(y) : String(y || "");
  J(() => {
    const k = new AbortController();
    let B = "", L = "";
    if (T(null), typeof y == "string") {
      const S = y.trim();
      if (ee[S]) return () => k.abort();
      S.startsWith("<svg") ? L = S : (/^https?:\/\//.test(S) || S.startsWith("/") || S.startsWith("data:image/svg")) && (B = S);
    } else y && typeof y == "object" && (y.iconType === "svg" && y.svgContent ? L = y.svgContent : y.iconType === "url" && y.url && (B = y.url));
    return L ? T(Ae(L)) : B && fetch(B, { signal: k.signal }).then((S) => {
      if (!S.ok) throw new Error("Icon request failed (" + S.status + ")");
      return S.text();
    }).then((S) => {
      S.trim().startsWith("<svg") && T(Ae(S));
    }).catch((S) => {
      S.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", S);
    }), () => k.abort();
  }, [ue]);
  const E = y && typeof y == "object" ? y.props || {} : {}, A = { ...E };
  delete A.size, delete A.color, delete A.strokeWidth;
  const x = R ?? E.size ?? 24, F = C ?? E.color ?? "currentColor", g = Y ?? E.strokeWidth ?? 1.5;
  let u = "";
  if (typeof y == "string" && ee[y] ? u = y : y && typeof y == "object" && y.name && (!y.iconType || y.iconType === "lucide") && (u = y.name), u) {
    const k = ee[u];
    if (k)
      return ae.createElement(k, {
        size: x,
        color: F,
        strokeWidth: g,
        className: M,
        style: O,
        ...A,
        ...W
      });
  }
  if (I)
    return ae.createElement("span", {
      ...A,
      ...W,
      className: ("rudra-universal-icon " + M).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: x,
        height: x,
        color: F,
        ...O
      },
      dangerouslySetInnerHTML: {
        __html: I.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + g + '">')
      }
    });
  const X = ee.LayoutGrid;
  return ae.createElement(X, {
    size: x,
    color: F,
    strokeWidth: g,
    className: M,
    style: O,
    ...A,
    ...W
  });
}
function _t(m) {
  const R = {}, C = m.serverData || m.serverState || {}, Y = m.sharedState || {}, M = m.applicationState || C.applicationState || {}, O = m.pageState || C.pageState || {}, W = m.pageData || C.pageData || {}, y = {
    ...m.runtime?.functions || {},
    ...m.runtime?.actions || {},
    ...m.functions || {},
    ...m.actions || {}
  }, I = m.$theme ?? m.theme ?? m.data?.$theme ?? m.runtime?.data?.$theme ?? m.runtime?.theme, T = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [ue, E] = w(() => I ?? T());
  J(() => {
    I != null && E(I);
  }, [I]), J(() => {
    if (I != null || typeof document > "u") return;
    const e = document.documentElement, i = (n) => E(n?.detail?.theme ?? T()), t = new MutationObserver(i);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [I]);
  const A = ce(null), [x, F] = w("lg");
  J(() => {
    if (!A.current) return;
    const e = new ResizeObserver((i) => {
      for (let t of i) {
        const n = t.contentRect.width;
        n < 768 ? F("sm") : n < 1024 ? F("md") : F("lg");
      }
    });
    return e.observe(A.current), () => e.disconnect();
  }, []);
  const g = K((e) => typeof e != "object" || e === null ? e : x === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : x === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [x]), u = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, X = m.profile !== void 0 ? m.profile : m.data?.profile !== void 0 ? m.data.profile : {}, k = m.profileServiceEnabled !== void 0 ? m.profileServiceEnabled : m.data?.profileServiceEnabled !== void 0 ? m.data.profileServiceEnabled : !1, B = m.locale !== void 0 ? m.locale : m.data?.locale !== void 0 ? m.data.locale : "en", L = m.authenticated !== void 0 ? m.authenticated : m.data?.authenticated !== void 0 ? m.data.authenticated : !1, S = m.mode !== void 0 ? m.mode : m.data?.mode !== void 0 ? m.data.mode : "login", qe = m.authProvider !== void 0 ? m.authProvider : m.data?.authProvider !== void 0 ? m.data.authProvider : "firebase-google", xe = m.returnPath !== void 0 ? m.returnPath : m.data?.returnPath !== void 0 ? m.data.returnPath : "/learn", P = { profile: X, profileServiceEnabled: k, locale: B, authenticated: L, mode: S, authProvider: qe, returnPath: xe }, [j, ke] = w(() => structuredClone(!1)), [ie, Ce] = w(() => structuredClone(!1)), [me, Ee] = w(() => structuredClone(!0)), [Fe, Le] = w(() => structuredClone(!1)), [he, je] = w(() => structuredClone(!1)), [D, Ne] = w(() => structuredClone(!1)), [fe, Me] = w(() => structuredClone(!1)), [re, Oe] = w(() => structuredClone(!1)), [ge, We] = w(() => structuredClone(!1)), [pe, Te] = w(() => structuredClone("Next")), [Be, De] = w(() => structuredClone(1)), [G, Ge] = w(() => structuredClone(!0)), [ye, $e] = w(() => structuredClone(!1)), [Q, Ue] = w(() => structuredClone(!0)), [Je, Qe] = w(() => structuredClone("login")), [we, Ze] = w(() => structuredClone("")), [ve, He] = w(() => structuredClone({ privacyAccepted: !1, requestedRole: "student", termsAccepted: !1, verifiedEmail: "" })), [oe, Ke] = w(() => structuredClone(!1)), [Ye, Xe] = w(() => structuredClone(!0)), [Se, Ve] = w(() => structuredClone({})), [et, tt] = w(() => structuredClone("student")), [se, it] = w(() => structuredClone(!1)), [Re, rt] = w(() => structuredClone("Step 1 of 3 · Profile")), l = { showInstitutionFields: j, showRegistration: ie, showStudentInvitation: me, consentReady: Fe, privacyAccepted: he, showEducatorFields: D, showPending: fe, showRegistrationStep3: re, termsAccepted: ge, registrationPrimaryLabel: pe, registrationStep: Be, showLogin: G, showRegistrationBack: ye, showRegistrationStep1: Q, accessMode: Je, message: we, registrationInitialValues: ve, busy: oe, showStudentFields: Ye, authenticatedProfile: Se, requestedRole: et, showVerifiedRoleFields: se, registrationProgress: Re }, s = K((e, i) => {
    switch (e) {
      case "showInstitutionFields": {
        const t = typeof i == "function" ? i(l.showInstitutionFields) : i;
        return l.showInstitutionFields = t, ke(t), t;
      }
      case "showRegistration": {
        const t = typeof i == "function" ? i(l.showRegistration) : i;
        return l.showRegistration = t, Ce(t), t;
      }
      case "showStudentInvitation": {
        const t = typeof i == "function" ? i(l.showStudentInvitation) : i;
        return l.showStudentInvitation = t, Ee(t), t;
      }
      case "consentReady": {
        const t = typeof i == "function" ? i(l.consentReady) : i;
        return l.consentReady = t, Le(t), t;
      }
      case "privacyAccepted": {
        const t = typeof i == "function" ? i(l.privacyAccepted) : i;
        return l.privacyAccepted = t, je(t), t;
      }
      case "showEducatorFields": {
        const t = typeof i == "function" ? i(l.showEducatorFields) : i;
        return l.showEducatorFields = t, Ne(t), t;
      }
      case "showPending": {
        const t = typeof i == "function" ? i(l.showPending) : i;
        return l.showPending = t, Me(t), t;
      }
      case "showRegistrationStep3": {
        const t = typeof i == "function" ? i(l.showRegistrationStep3) : i;
        return l.showRegistrationStep3 = t, Oe(t), t;
      }
      case "termsAccepted": {
        const t = typeof i == "function" ? i(l.termsAccepted) : i;
        return l.termsAccepted = t, We(t), t;
      }
      case "registrationPrimaryLabel": {
        const t = typeof i == "function" ? i(l.registrationPrimaryLabel) : i;
        return l.registrationPrimaryLabel = t, Te(t), t;
      }
      case "registrationStep": {
        const t = typeof i == "function" ? i(l.registrationStep) : i;
        return l.registrationStep = t, De(t), t;
      }
      case "showLogin": {
        const t = typeof i == "function" ? i(l.showLogin) : i;
        return l.showLogin = t, Ge(t), t;
      }
      case "showRegistrationBack": {
        const t = typeof i == "function" ? i(l.showRegistrationBack) : i;
        return l.showRegistrationBack = t, $e(t), t;
      }
      case "showRegistrationStep1": {
        const t = typeof i == "function" ? i(l.showRegistrationStep1) : i;
        return l.showRegistrationStep1 = t, Ue(t), t;
      }
      case "accessMode": {
        const t = typeof i == "function" ? i(l.accessMode) : i;
        return l.accessMode = t, Qe(t), t;
      }
      case "message": {
        const t = typeof i == "function" ? i(l.message) : i;
        return l.message = t, Ze(t), t;
      }
      case "registrationInitialValues": {
        const t = typeof i == "function" ? i(l.registrationInitialValues) : i;
        return l.registrationInitialValues = t, He(t), t;
      }
      case "busy": {
        const t = typeof i == "function" ? i(l.busy) : i;
        return l.busy = t, Ke(t), t;
      }
      case "showStudentFields": {
        const t = typeof i == "function" ? i(l.showStudentFields) : i;
        return l.showStudentFields = t, Xe(t), t;
      }
      case "authenticatedProfile": {
        const t = typeof i == "function" ? i(l.authenticatedProfile) : i;
        return l.authenticatedProfile = t, Ve(t), t;
      }
      case "requestedRole": {
        const t = typeof i == "function" ? i(l.requestedRole) : i;
        return l.requestedRole = t, tt(t), t;
      }
      case "showVerifiedRoleFields": {
        const t = typeof i == "function" ? i(l.showVerifiedRoleFields) : i;
        return l.showVerifiedRoleFields = t, it(t), t;
      }
      case "registrationProgress": {
        const t = typeof i == "function" ? i(l.registrationProgress) : i;
        return l.registrationProgress = t, rt(t), t;
      }
      default:
        return i;
    }
  }, [l]);
  K((e, i) => {
    const [t, ...n] = String(e || "").split(".");
    if (!t) return i;
    if (n.length === 0) return s(t, i);
    const o = (r) => {
      const c = Array.isArray(r) ? [...r] : { ...r || {} };
      let h = c;
      return n.forEach((p, v) => {
        v === n.length - 1 ? h[p] = i : (h[p] = Array.isArray(h[p]) ? [...h[p]] : { ...h[p] || {} }, h = h[p]);
      }), c;
    };
    switch (t) {
      case "showInstitutionFields":
        return s("showInstitutionFields", o), i;
      case "showRegistration":
        return s("showRegistration", o), i;
      case "showStudentInvitation":
        return s("showStudentInvitation", o), i;
      case "consentReady":
        return s("consentReady", o), i;
      case "privacyAccepted":
        return s("privacyAccepted", o), i;
      case "showEducatorFields":
        return s("showEducatorFields", o), i;
      case "showPending":
        return s("showPending", o), i;
      case "showRegistrationStep3":
        return s("showRegistrationStep3", o), i;
      case "termsAccepted":
        return s("termsAccepted", o), i;
      case "registrationPrimaryLabel":
        return s("registrationPrimaryLabel", o), i;
      case "registrationStep":
        return s("registrationStep", o), i;
      case "showLogin":
        return s("showLogin", o), i;
      case "showRegistrationBack":
        return s("showRegistrationBack", o), i;
      case "showRegistrationStep1":
        return s("showRegistrationStep1", o), i;
      case "accessMode":
        return s("accessMode", o), i;
      case "message":
        return s("message", o), i;
      case "registrationInitialValues":
        return s("registrationInitialValues", o), i;
      case "busy":
        return s("busy", o), i;
      case "showStudentFields":
        return s("showStudentFields", o), i;
      case "authenticatedProfile":
        return s("authenticatedProfile", o), i;
      case "requestedRole":
        return s("requestedRole", o), i;
      case "showVerifiedRoleFields":
        return s("showVerifiedRoleFields", o), i;
      case "registrationProgress":
        return s("registrationProgress", o), i;
      default:
        return i;
    }
  }, [s]);
  const ot = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, ne = (e, i, t) => {
    if (!i || typeof i != "object") return "";
    const n = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], o = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (n.length && !n.includes(o) && !(o === "integer" && n.includes("number"))) return t + " must be " + n.join(" or ") + ".";
    if (i.enum && !i.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of i.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return t + "." + r + " is required.";
      for (const [r, c] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const h = ne(e[r], c, t + "." + r);
        if (h) return h;
      }
    }
    if (Array.isArray(e) && i.items) for (let r = 0; r < e.length; r++) {
      const c = ne(e[r], i.items, t + "[" + r + "]");
      if (c) return c;
    }
    return "";
  }, V = K(async (e, i, t = !1) => {
    const n = ot[e];
    if (!n) throw new Error("Module output '" + e + "' is not declared.");
    const o = ne(i, n, "output." + e);
    if (o) throw new Error(o);
    const r = m.onOutput || m.onModuleOutput || m.runtime?.onOutput;
    if (typeof r != "function") return i;
    const c = r(e, i, { moduleId: m.moduleId, awaitHandlers: t });
    return t ? await c : i;
  }, [m.onOutput, m.onModuleOutput, m.runtime?.onOutput, m.moduleId]), _e = (e, i) => {
    const t = String(i || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return t.reduce((n, o) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(o in n) ? n.get(o) : n[o];
      }, e);
  }, Z = (e, i) => {
    if (Array.isArray(e)) return e.map((n) => Z(n, i));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([n, o]) => [Z(n, i), Z(o, i)]));
    if (typeof e != "string") return e;
    const t = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? _e(i, t[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, o) => {
      const r = _e(i, o);
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
  };
  async function st(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const n = await (async () => {
        const o = Math.max(1, Math.min(3, Number(l.registrationStep || 1))), r = String(l.requestedRole || "student"), c = Math.max(1, o - 1);
        return {
          step: c,
          role: r,
          showStep1: c === 1,
          showStudent: c === 2 && r === "student",
          showStudentInvite: r === "student" && (c === 1 || c === 2),
          showEducator: c === 2 && r === "educator",
          showInstitution: c === 2 && r === "institution_admin",
          showVerified: c === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_back_prepare = n;
    }
    return s("registrationStep", t.wizard_back_prepare.step), s("registrationProgress", t.wizard_back_prepare.progress), s("registrationPrimaryLabel", t.wizard_back_prepare.primaryLabel), s("showRegistrationBack", t.wizard_back_prepare.showBack), s("showRegistrationStep1", t.wizard_back_prepare.showStep1), s("showStudentFields", t.wizard_back_prepare.showStudent), s("showStudentInvitation", t.wizard_back_prepare.showStudentInvite), s("showEducatorFields", t.wizard_back_prepare.showEducator), s("showInstitutionFields", t.wizard_back_prepare.showInstitution), s("showVerifiedRoleFields", t.wizard_back_prepare.showVerified), s("showRegistrationStep3", t.wizard_back_prepare.showStep3), t.wizard_back_prepare;
  }
  async function nt(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const n = await (async () => {
        const o = String(i.value || "student"), r = Math.max(1, Math.min(3, Number(l.registrationStep || 1)));
        return { role: o, showStudentInvitation: o === "student" && (r === 1 || r === 2) };
      })();
      t.role_prepare = n;
    }
    return s("requestedRole", t.role_prepare.role), s("showStudentInvitation", t.role_prepare.showStudentInvitation), t.role_prepare.role;
  }
  async function be(e = {}) {
    const i = e || {}, t = {}, n = {};
    {
      i.event;
      const o = await (async () => {
        const r = i.values && typeof i.values == "object" ? i.values : {}, c = l.authenticatedProfile && typeof l.authenticatedProfile == "object" ? l.authenticatedProfile : {}, h = (z) => String(r[z] || "").trim(), p = h("requestedRole") || String(l.requestedRole || "student"), v = String(c.email || h("verifiedEmail")).trim();
        if (!v) throw new Error("Your verified Google email is missing. Please sign in again.");
        if (!h("firstName") || !h("lastName")) throw new Error("First name and last name are required.");
        if (!["student", "educator", "institution_admin"].includes(p)) throw new Error("Choose a valid Scholar role.");
        if (p === "educator" && (!h("qualification") || !h("subjectExpertise") || !h("professionalStatement") || !h("institutionName") || !h("kycEvidence") || !h("country"))) throw new Error("Complete all professor verification fields.");
        if (p === "institution_admin" && (!h("institutionLegalName") || !h("institutionDisplayName") || !h("institutionType") || !h("institutionWebsite") || !h("institutionEmailDomain") || !h("institutionContact") || !h("country"))) throw new Error("Complete all institution verification fields.");
        if (r.termsAccepted !== !0 || r.privacyAccepted !== !0) throw new Error("Accept the Terms of Service and Privacy Notice to continue.");
        return { ...r, verifiedEmail: v, requestedRole: p, termsAccepted: !0, privacyAccepted: !0 };
      })();
      n.reg_validate = o, t.customCodeResult = o;
    }
    s("busy", !0), s("message", "");
    {
      const r = Z({ profile: "{{ stepResults.reg_validate }}" }, { args: i, inputs: P, state: l, sharedState: Y, applicationState: M, pageState: O, pageData: W, serverData: C, vars: t, stepResults: n }) || {};
      delete r.userIdentity, delete r.verifiedEmail, delete r.emailVerified, delete r.providerId;
      const c = [void 0, void 0, void 0, void 0, r.profile], h = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
      let p;
      if (typeof h == "function")
        p = await h({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: r, signal: i.signal });
      else {
        const v = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: r }), signal: i.signal }), z = await v.json().catch(() => ({}));
        if (!v.ok || z.success === !1) throw new Error(z.error || "Database query failed (" + v.status + ")");
        p = z.data;
      }
      n.reg_call = p, t.queryResult = p;
    }
    {
      i.event;
      const o = await (async () => {
        const r = n.reg_call, c = Array.isArray(r) ? r[0] : r, h = c && c.result ? c.result : c;
        if (!h || h.isRegistered !== !0) throw new Error(h && h.message || "Registration did not complete.");
        return h;
      })();
      n.reg_normalize = o, t.customCodeResult = o;
    }
    return V("registrationCompleted", { isRegistered: n.reg_normalize.isRegistered, onboardingStatus: n.reg_normalize.onboardingStatus, redirectPath: n.reg_normalize.redirectPath, requestedRole: n.reg_normalize.requestedRole, roles: n.reg_normalize.roles, verificationStatus: n.reg_normalize.verificationStatus }, !1).catch((o) => console.error("Module output delivery failed", o)), V("navigationRequested", { path: n.reg_normalize.redirectPath }, !1).catch((o) => console.error("Module output delivery failed", o)), s("authenticatedProfile", n.reg_normalize), s("accessMode", "resolving"), s("message", n.reg_normalize.message), s("busy", !1), n.reg_normalize;
  }
  async function at(e = {}) {
    const i = e || {}, t = {};
    s("privacyAccepted", i.value);
    {
      i.event;
      const n = await (async () => i.value === !0 && l.termsAccepted === !0)();
      t.privacyAccepted_ready = n;
    }
    return s("consentReady", t.privacyAccepted_ready), i.value;
  }
  async function ct(e = {}) {
    const i = e || {}, t = {};
    s("termsAccepted", i.value);
    {
      i.event;
      const n = await (async () => i.value === !0 && l.privacyAccepted === !0)();
      t.termsAccepted_ready = n;
    }
    return s("consentReady", t.termsAccepted_ready), i.value;
  }
  async function dt(e = {}) {
    const i = e || {}, t = {}, n = {};
    s("busy", !0), s("message", "");
    try {
      {
        const o = await N("RudraAuth.signIn", { provider: P.authProvider, returnPath: P.returnPath }, []);
        n.google_auth = o, t["RudraAuth.signInResult"] = o;
      }
    } catch (o) {
      {
        i.event;
        const r = await (async () => ({ message: String(o && o.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        n.google_error = r, t.customCodeResult = r;
      }
      return s("message", n.google_error.message), s("accessMode", "login"), s("busy", !1), { error: n.google_error.message, ok: !1 };
    }
    V("googleSignInRequested", { returnPath: P.returnPath }, !1).catch((o) => console.error("Module output delivery failed", o));
    {
      i.event;
      const o = await (async () => {
        const r = n.google_auth || {}, c = r.user || r.currentUser || r.profile || r;
        if (r.success === !1 || !c || !(c.uid || c.id || c.userId) || !c.email)
          throw new Error(r.error || "Google sign-in did not return a verified user.");
        return {
          uid: c.uid || c.id || c.userId,
          email: c.email,
          displayName: c.displayName || c.name || "",
          emailVerified: c.emailVerified === !0,
          providerId: c.providerId || r.providerId || "google"
        };
      })();
      n.normalize_auth = o, t.customCodeResult = o;
    }
    s("authenticatedProfile", n.normalize_auth), s("accessMode", "resolving");
    {
      const r = Z({}, { args: i, inputs: P, state: l, sharedState: Y, applicationState: M, pageState: O, pageData: W, serverData: C, vars: t, stepResults: n }) || {};
      delete r.userIdentity;
      const c = [void 0], h = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
      let p;
      if (typeof h == "function")
        p = await h({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: r, signal: i.signal });
      else {
        const v = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: r }), signal: i.signal }), z = await v.json().catch(() => ({}));
        if (!v.ok || z.success === !1) throw new Error(z.error || "Database query failed (" + v.status + ")");
        p = z.data;
      }
      n.resolve_access = p, t.queryResult = p;
    }
    {
      i.event;
      const o = await (async () => {
        const r = n.resolve_access, c = Array.isArray(r) ? r[0] : r, h = c && c.result ? c.result : c, p = !!(h && h.isRegistered === !0), v = p ? h : { ...l.authenticatedProfile, isRegistered: !1 };
        return {
          isRegistered: p,
          profile: v,
          registrationInitialValues: {
            verifiedEmail: String(v && v.email || ""),
            requestedRole: "student",
            termsAccepted: !1,
            privacyAccepted: !1
          },
          redirectPath: h && h.redirectPath || P.returnPath || "/learn"
        };
      })();
      n.normalize_access = o, t.customCodeResult = o;
    }
    return n.normalize_access.isRegistered ? (s("authenticatedProfile", n.normalize_access.profile), s("busy", !1), V("navigationRequested", { path: n.normalize_access.redirectPath }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_access) : (s("authenticatedProfile", n.normalize_access.profile), s("registrationInitialValues", n.normalize_access.registrationInitialValues), s("showStudentInvitation", !0), s("accessMode", "registration"), s("showLogin", !1), s("showRegistration", !0), s("showPending", !1), s("busy", !1), n.normalize_access);
  }
  async function Pe(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const n = await (async () => {
        const o = P.profile && typeof P.profile == "object" ? P.profile : {}, r = l.authenticatedProfile && typeof l.authenticatedProfile == "object" ? l.authenticatedProfile : {}, c = Object.keys(o).length ? o : r;
        let h = ["login", "registration", "resolving"].includes(P.mode) ? P.mode : "login";
        P.authenticated === !0 && c.isRegistered !== !0 && c.email && (h = "registration");
        const p = h === "resolving" && c.verificationStatus === "pending";
        return {
          mode: h,
          profile: c,
          initialValues: {
            verifiedEmail: String(c.email || ""),
            requestedRole: String(c.requestedRole || l.requestedRole || "student"),
            termsAccepted: !1,
            privacyAccepted: !1
          },
          showLogin: h === "login",
          showRegistration: h === "registration",
          showPending: p
        };
      })();
      t.init_context = n;
    }
    return s("authenticatedProfile", t.init_context.profile), s("registrationInitialValues", t.init_context.initialValues), s("showStudentInvitation", t.init_context.showStudentInvitation), s("accessMode", t.init_context.mode), s("showLogin", t.init_context.showLogin), s("showRegistration", t.init_context.showRegistration), s("showPending", t.init_context.showPending), t.init_context;
  }
  async function lt(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const n = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(l.registrationStep || 1))) === 3 }))();
      t.wizard_decide = n;
    }
    if (t.wizard_decide.isFinal)
      return await be({ values: i.values }), t.wizard_submit;
    {
      i.event;
      const n = await (async () => {
        const o = Math.max(1, Math.min(3, Number(l.registrationStep || 1))), r = String(i.values && i.values.requestedRole || l.requestedRole || "student"), c = Math.min(3, o + 1);
        return {
          step: c,
          role: r,
          showStep1: c === 1,
          showStudent: c === 2 && r === "student",
          showStudentInvite: r === "student" && (c === 1 || c === 2),
          showEducator: c === 2 && r === "educator",
          showInstitution: c === 2 && r === "institution_admin",
          showVerified: c === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_advance = n;
    }
    return s("requestedRole", t.wizard_advance.role), s("registrationStep", t.wizard_advance.step), s("registrationProgress", t.wizard_advance.progress), s("registrationPrimaryLabel", t.wizard_advance.primaryLabel), s("showRegistrationBack", t.wizard_advance.showBack), s("showRegistrationStep1", t.wizard_advance.showStep1), s("showStudentFields", t.wizard_advance.showStudent), s("showStudentInvitation", t.wizard_advance.showStudentInvite), s("showEducatorFields", t.wizard_advance.showEducator), s("showInstitutionFields", t.wizard_advance.showInstitution), s("showVerifiedRoleFields", t.wizard_advance.showVerified), s("showRegistrationStep3", t.wizard_advance.showStep3), t.wizard_advance;
  }
  const ut = {
    goBackRegistrationStep: st,
    setRequestedRole: nt,
    submitRegistration: be,
    setPrivacyAccepted: at,
    setTermsAccepted: ct,
    requestGoogleSignIn: dt,
    initializeAccessFlow: Pe,
    handleRegistrationSubmit: lt
  }, mt = {
    goBackRegistrationStep: [],
    setRequestedRole: ["value"],
    submitRegistration: ["values"],
    setPrivacyAccepted: ["value"],
    setTermsAccepted: ["value"],
    requestGoogleSignIn: [],
    initializeAccessFlow: [],
    handleRegistrationSubmit: ["values"]
  }, N = (e, i = {}, t = []) => {
    const n = ut[e];
    if (n) {
      const p = mt[e] || [];
      return n(Object.fromEntries(p.map((v, z) => {
        const H = Object.prototype.hasOwnProperty.call(i, v) ? i[v] : void 0;
        return [v, (H === "" || H === void 0) && t[z] !== void 0 ? t[z] : v === "event" && (H === "" || H === void 0) ? t[0] : H];
      })));
    }
    const o = y?.[e];
    if (typeof o == "function")
      return o(Object.keys(i).length > 0 ? i : t[0]);
    const [r, c] = String(e).split("."), h = typeof globalThis < "u" ? globalThis[r]?.[c] : void 0;
    if (typeof h == "function") return h(...Object.values(i));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, $ = ce(/* @__PURE__ */ new Map()), ht = K((e, i, t, n) => {
    const o = $.current.get(e);
    if (i === "exhaust" && o?.promise) return o.promise;
    i === "takeLatest" && o?.controller?.abort();
    const r = new AbortController(), c = () => Promise.resolve().then(() => t(r.signal)), h = i === "queue" && o?.promise ? o.promise.catch(() => {
    }).then(c) : c();
    return $.current.set(e, { controller: r, promise: h }), h.catch((p) => {
      p?.name !== "AbortError" && console.error(n, p);
    }).finally(() => {
      $.current.get(e)?.promise === h && $.current.delete(e);
    }), h;
  }, []);
  J(() => () => {
    for (const e of $.current.values()) e.controller?.abort();
    $.current.clear();
  }, []);
  const ze = ce(!1);
  return J(() => {
    ze.current || (ze.current = !0), ht("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (e) => Pe({}), "Module input lifecycle failed:");
  }, [L, S, X]), /* @__PURE__ */ f("div", { ref: A, className: "rudra-module-wrapper", children: u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
    "      ",
    /* @__PURE__ */ a(U, { id: "root", className: "rs-access", children: [
      "      ",
      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
        "      ",
        /* @__PURE__ */ a(U, { id: "panel", className: "rs-access-grid", children: [
          "      ",
          u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
            "      ",
            /* @__PURE__ */ a(U, { id: "story", className: "rs-access-story", children: [
              "      ",
              u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ a(U, { id: "story_badge", "aria-label": "College mathematics proof of concept", className: "rs-badge-row", children: [
                  "      ",
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(_, { icon: "GraduationCap", id: "story_badge_icon", size: 14, color: "#b8f7e7", strokeWidth: 2 })
                  ] }),
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(q, { id: "story_badge_label", className: "rs-badge-label", customColor: "#eafff8", as: "span", content: "College mathematics · POC" })
                  ] })
                ] })
              ] }),
              u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(q, { id: "title", className: "rs-access-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learn mathematics with context, not shortcuts." : e)(R?.i18n?.title), customColor: "#eafff8" })
              ] }),
              u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(q, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : e)(R?.i18n?.subtitle) })
              ] }),
              u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(te, { id: "trust", live: "off", title: "SQL is the authority", variant: "neutral", appearance: "outlined" })
              ] })
            ] })
          ] }),
          u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
            "      ",
            /* @__PURE__ */ a(U, { id: "form_area", className: "rs-access-form", children: [
              "      ",
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(q, { id: "signin_eyebrow", className: "rs-signin-eyebrow", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "WELCOME TO RUDRA SCHOLAR" : e)(R?.i18n?.welcome) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(q, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready to think through the next problem?" : e)(R?.i18n?.signInTitle) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(q, { id: "signin_intro", className: "rs-signin-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : e)(R?.i18n?.signInIntro) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(le, { id: "google", leftIcon: /* @__PURE__ */ a(d, { children: [
                  "      ",
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(_, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", size: 20, strokeWidth: 1.2 })
                  ] })
                ] }), variant: "outline", size: "lg", label: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in with Google" : e)(R?.i18n?.google), loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe), onAction: (...e) => N("requestGoogleSignIn", {}, e), ariaLabel: "Sign in with Google", fullWidth: !0, rightIcon: !1, id: "scholar-google-signin", theme: "auto" })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(q, { id: "notice", className: "rs-signin-note", content: /* @__PURE__ */ ((e) => e === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : e)(R?.i18n?.signInHelp), as: "p" })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(q, { id: "heading", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Create your Scholar account" : e)(R?.i18n?.profile) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ a(ft, { id: "profile_form", className: "rs-form", initialValues: /* @__PURE__ */ ((e) => e === void 0 ? { privacyAccepted: !1, requestedRole: "student", termsAccepted: !1, verifiedEmail: "" } : e)(ve), onSubmit: (...e) => N("handleRegistrationSubmit", {}, e), children: [
                  "      ",
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(q, { id: "registration_progress", className: "rs-registration-progress", content: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1 of 3 · Profile" : e)(Re), as: "p" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "email", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Mail", id: "email_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), disabled: !0, name: "verifiedEmail", size: "md", type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((e) => e === void 0 ? "Signed-in Google account" : e)(Se?.email) })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "first_name", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "UserRound", id: "first_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "First name", required: !0, name: "firstName" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "last_name", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "UserRound", id: "last_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "lastName", size: "md", type: "text", label: "Last name", required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(Ie, { id: "role", name: "requestedRole", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }], required: !0, onChangeValue: (...e) => N("setRequestedRole", {}, e) })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(me)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code", name: "institutionInvite", size: "md" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(te, { id: "kyc_intro", live: "off", title: "Role verification required", variant: "neutral", appearance: "outlined" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "qualification", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "GraduationCap", id: "qualification_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "Highest relevant qualification", required: !0, placeholder: "For example, M.Sc. Mathematics", name: "qualification" })
                  ] }),
                  u(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "kyc", label: "Legacy verification field disabled", required: !1, placeholder: "Secure upload reference — do not paste document data", name: "kycReference", size: "md", type: "text" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "expertise", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Sigma", id: "expertise_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "Mathematics expertise", required: !0, placeholder: "For example, Linear Algebra, Calculus", name: "subjectExpertise", size: "md" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(gt, { id: "professional_statement", name: "professionalStatement", size: "md", label: "Short professional statement", maxRows: 6, minRows: 3, required: !0, autoResize: !0, placeholder: "Briefly describe your teaching experience." })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "educator_institution", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "School", id: "educator_institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "institutionName", size: "md", type: "text", label: "College or university" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "evidence", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "KYC verification evidence", required: !0, placeholder: "Use an institution email or public staff-profile URL", name: "kycEvidence", size: "md" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_legal_name", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Landmark", id: "institution_legal_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionLegalName", size: "md", type: "text", label: "Institution legal name", required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_display_name", name: "institutionDisplayName", size: "md", type: "text", label: "Display name", required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(Ie, { id: "institution_type", name: "institutionType", label: "Institution type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }], required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_website", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Globe", id: "institution_website_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "url", label: "Official website", required: !0, placeholder: "https://example.edu", name: "institutionWebsite" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_domain", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "AtSign", id: "institution_domain_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, placeholder: "example.edu", name: "institutionEmailDomain", size: "md", type: "text", label: "Institutional email domain" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_contact", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "Administrative contact", required: !0, name: "institutionContact" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "country", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "MapPin", id: "country_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "country", size: "md", type: "text", label: "Country" })
                  ] }),
                  u(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(de, { id: "age_confirmed", name: "ageConfirmed", label: "I confirm I am 18 or older.", required: !1, colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators." })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(re)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(de, { id: "terms", name: "termsAccepted", label: "I accept the Terms of Service.", value: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ge), required: !0, colorScheme: "emerald", description: "Required before an account can be created.", onChangeValue: (...e) => N("setTermsAccepted", {}, e) })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(re)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(de, { id: "privacy", description: "Required before an account can be created.", onChangeValue: (...e) => N("setPrivacyAccepted", {}, e), name: "privacyAccepted", label: "I have read and accept the Privacy Notice.", value: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(he), required: !0, colorScheme: "emerald" })
                  ] }),
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ a(U, { id: "registration_actions", className: "rs-registration-actions", children: [
                      "      ",
                      u(ye) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(le, { id: "registration_back", leftIcon: /* @__PURE__ */ a(d, { children: [
                          "      ",
                          u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                            "      ",
                            /* @__PURE__ */ f(_, { icon: "ArrowLeft", id: "registration_back_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), size: "lg", label: "Back", onAction: (...e) => N("goBackRegistrationStep", {}, e), fullWidth: !0, additionalAttributes: {}, type: "button", theme: "auto", variant: "secondary", rightIcon: !1, id: "scholar-registration-back" })
                      ] }),
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(le, { id: "submit", size: "lg", type: "submit", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next" : e)(pe), theme: "auto", variant: "primary", leftIcon: !1, fullWidth: !0, id: "scholar-registration-primary", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe), disabled: void 0, rightIcon: !1 })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              u(we) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(te, { id: "message", appearance: "outlined", live: "polite", title: "Scholar access", variant: "neutral" })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(fe)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(te, { id: "pending_notice", live: "polite", title: "Professor verification pending", variant: "warning", appearance: "outlined" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  _t as default
};
