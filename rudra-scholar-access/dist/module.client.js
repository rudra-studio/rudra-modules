import { jsx as f, jsxs as a, Fragment as d } from "react/jsx-runtime";
import ae, { useState as w, useEffect as J, useRef as ce, useCallback as K } from "react";
import { Box as U } from "@rudra-studio/rudra-layout";
import { Typography as x, Alert as V, Button as de } from "@rudra-studio/rudra-core";
import { Form as pt, Input as b, Select as Ie, Textarea as yt, Checkbox as le } from "@rudra-studio/rudra-form";
import * as ee from "lucide-react";
const xe = (m) => String(m || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), wt = (m) => {
  let S = m;
  for (; S && typeof S == "object" && "type" in S && "value" in S; )
    S = S.value;
  return S;
};
function _({ icon: m, size: S, color: C, strokeWidth: Y, className: N = "", style: M, ...O }) {
  const y = wt(m), [q, W] = w(null), ue = y && typeof y == "object" ? JSON.stringify(y) : String(y || "");
  J(() => {
    const I = new AbortController();
    let T = "", B = "";
    if (W(null), typeof y == "string") {
      const v = y.trim();
      if (ee[v]) return () => I.abort();
      v.startsWith("<svg") ? B = v : (/^https?:\/\//.test(v) || v.startsWith("/") || v.startsWith("data:image/svg")) && (T = v);
    } else y && typeof y == "object" && (y.iconType === "svg" && y.svgContent ? B = y.svgContent : y.iconType === "url" && y.url && (T = y.url));
    return B ? W(xe(B)) : T && fetch(T, { signal: I.signal }).then((v) => {
      if (!v.ok) throw new Error("Icon request failed (" + v.status + ")");
      return v.text();
    }).then((v) => {
      v.trim().startsWith("<svg") && W(xe(v));
    }).catch((v) => {
      v.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", v);
    }), () => I.abort();
  }, [ue]);
  const E = y && typeof y == "object" ? y.props || {} : {}, A = { ...E };
  delete A.size, delete A.color, delete A.strokeWidth;
  const k = S ?? E.size ?? 24, F = C ?? E.color ?? "currentColor", g = Y ?? E.strokeWidth ?? 1.5;
  let u = "";
  if (typeof y == "string" && ee[y] ? u = y : y && typeof y == "object" && y.name && (!y.iconType || y.iconType === "lucide") && (u = y.name), u) {
    const I = ee[u];
    if (I)
      return ae.createElement(I, {
        size: k,
        color: F,
        strokeWidth: g,
        className: N,
        style: M,
        ...A,
        ...O
      });
  }
  if (q)
    return ae.createElement("span", {
      ...A,
      ...O,
      className: ("rudra-universal-icon " + N).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: k,
        height: k,
        color: F,
        ...M
      },
      dangerouslySetInnerHTML: {
        __html: q.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + g + '">')
      }
    });
  const te = ee.LayoutGrid;
  return ae.createElement(te, {
    size: k,
    color: F,
    strokeWidth: g,
    className: N,
    style: M,
    ...A,
    ...O
  });
}
function Pt(m) {
  const S = {}, C = m.serverData || m.serverState || {}, Y = m.sharedState || {}, N = m.applicationState || C.applicationState || {}, M = m.pageState || C.pageState || {}, O = m.pageData || C.pageData || {}, y = {
    ...m.runtime?.functions || {},
    ...m.runtime?.actions || {},
    ...m.functions || {},
    ...m.actions || {}
  }, q = m.$theme ?? m.theme ?? m.data?.$theme ?? m.runtime?.data?.$theme ?? m.runtime?.theme, W = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [ue, E] = w(() => q ?? W());
  J(() => {
    q != null && E(q);
  }, [q]), J(() => {
    if (q != null || typeof document > "u") return;
    const e = document.documentElement, i = (s) => E(s?.detail?.theme ?? W()), t = new MutationObserver(i);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [q]);
  const A = ce(null), [k, F] = w("lg");
  J(() => {
    if (!A.current) return;
    const e = new ResizeObserver((i) => {
      for (let t of i) {
        const s = t.contentRect.width;
        s < 768 ? F("sm") : s < 1024 ? F("md") : F("lg");
      }
    });
    return e.observe(A.current), () => e.disconnect();
  }, []);
  const g = K((e) => typeof e != "object" || e === null ? e : k === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : k === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [k]), u = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, te = m.returnPath !== void 0 ? m.returnPath : m.data?.returnPath !== void 0 ? m.data.returnPath : "/learn", I = m.profile !== void 0 ? m.profile : m.data?.profile !== void 0 ? m.data.profile : {}, T = m.profileServiceEnabled !== void 0 ? m.profileServiceEnabled : m.data?.profileServiceEnabled !== void 0 ? m.data.profileServiceEnabled : !1, B = m.locale !== void 0 ? m.locale : m.data?.locale !== void 0 ? m.data.locale : "en", v = m.authenticated !== void 0 ? m.authenticated : m.data?.authenticated !== void 0 ? m.data.authenticated : !1, me = m.mode !== void 0 ? m.mode : m.data?.mode !== void 0 ? m.data.mode : "login", ke = m.authProvider !== void 0 ? m.authProvider : m.data?.authProvider !== void 0 ? m.data.authProvider : "firebase-google", P = { returnPath: te, profile: I, profileServiceEnabled: T, locale: B, authenticated: v, mode: me, authProvider: ke }, [Q, Ce] = w(() => structuredClone(!0)), [Ee, Fe] = w(() => structuredClone("login")), [he, Le] = w(() => structuredClone("")), [fe, je] = w(() => structuredClone({ privacyAccepted: !1, requestedRole: "student", termsAccepted: !1, verifiedEmail: "" })), [ie, Ne] = w(() => structuredClone(!1)), [Me, Oe] = w(() => structuredClone(!0)), [ge, We] = w(() => structuredClone({})), [Te, Be] = w(() => structuredClone("student")), [re, De] = w(() => structuredClone(!1)), [pe, Ge] = w(() => structuredClone("Step 1 of 3 · Profile")), [L, $e] = w(() => structuredClone(!1)), [se, Ue] = w(() => structuredClone(!1)), [ye, Je] = w(() => structuredClone(!0)), [Qe, Ze] = w(() => structuredClone(!1)), [we, He] = w(() => structuredClone(!1)), [D, Ke] = w(() => structuredClone(!1)), [Re, Ye] = w(() => structuredClone(!1)), [oe, Xe] = w(() => structuredClone(!1)), [ve, Ve] = w(() => structuredClone(!1)), [Se, et] = w(() => structuredClone(!1)), [_e, tt] = w(() => structuredClone("Next")), [it, rt] = w(() => structuredClone(1)), [G, st] = w(() => structuredClone(!0)), [be, ot] = w(() => structuredClone(!1)), l = { showRegistrationStep1: Q, accessMode: Ee, message: he, registrationInitialValues: fe, busy: ie, showStudentFields: Me, authenticatedProfile: ge, requestedRole: Te, showVerifiedRoleFields: re, registrationProgress: pe, showInstitutionFields: L, showRegistration: se, showStudentInvitation: ye, consentReady: Qe, privacyAccepted: we, showEducatorFields: D, showPending: Re, showRegistrationStep3: oe, termsAccepted: ve, consentRequired: Se, registrationPrimaryLabel: _e, registrationStep: it, showLogin: G, showRegistrationBack: be }, r = K((e, i) => {
    switch (e) {
      case "showRegistrationStep1": {
        const t = typeof i == "function" ? i(l.showRegistrationStep1) : i;
        return l.showRegistrationStep1 = t, Ce(t), t;
      }
      case "accessMode": {
        const t = typeof i == "function" ? i(l.accessMode) : i;
        return l.accessMode = t, Fe(t), t;
      }
      case "message": {
        const t = typeof i == "function" ? i(l.message) : i;
        return l.message = t, Le(t), t;
      }
      case "registrationInitialValues": {
        const t = typeof i == "function" ? i(l.registrationInitialValues) : i;
        return l.registrationInitialValues = t, je(t), t;
      }
      case "busy": {
        const t = typeof i == "function" ? i(l.busy) : i;
        return l.busy = t, Ne(t), t;
      }
      case "showStudentFields": {
        const t = typeof i == "function" ? i(l.showStudentFields) : i;
        return l.showStudentFields = t, Oe(t), t;
      }
      case "authenticatedProfile": {
        const t = typeof i == "function" ? i(l.authenticatedProfile) : i;
        return l.authenticatedProfile = t, We(t), t;
      }
      case "requestedRole": {
        const t = typeof i == "function" ? i(l.requestedRole) : i;
        return l.requestedRole = t, Be(t), t;
      }
      case "showVerifiedRoleFields": {
        const t = typeof i == "function" ? i(l.showVerifiedRoleFields) : i;
        return l.showVerifiedRoleFields = t, De(t), t;
      }
      case "registrationProgress": {
        const t = typeof i == "function" ? i(l.registrationProgress) : i;
        return l.registrationProgress = t, Ge(t), t;
      }
      case "showInstitutionFields": {
        const t = typeof i == "function" ? i(l.showInstitutionFields) : i;
        return l.showInstitutionFields = t, $e(t), t;
      }
      case "showRegistration": {
        const t = typeof i == "function" ? i(l.showRegistration) : i;
        return l.showRegistration = t, Ue(t), t;
      }
      case "showStudentInvitation": {
        const t = typeof i == "function" ? i(l.showStudentInvitation) : i;
        return l.showStudentInvitation = t, Je(t), t;
      }
      case "consentReady": {
        const t = typeof i == "function" ? i(l.consentReady) : i;
        return l.consentReady = t, Ze(t), t;
      }
      case "privacyAccepted": {
        const t = typeof i == "function" ? i(l.privacyAccepted) : i;
        return l.privacyAccepted = t, He(t), t;
      }
      case "showEducatorFields": {
        const t = typeof i == "function" ? i(l.showEducatorFields) : i;
        return l.showEducatorFields = t, Ke(t), t;
      }
      case "showPending": {
        const t = typeof i == "function" ? i(l.showPending) : i;
        return l.showPending = t, Ye(t), t;
      }
      case "showRegistrationStep3": {
        const t = typeof i == "function" ? i(l.showRegistrationStep3) : i;
        return l.showRegistrationStep3 = t, Xe(t), t;
      }
      case "termsAccepted": {
        const t = typeof i == "function" ? i(l.termsAccepted) : i;
        return l.termsAccepted = t, Ve(t), t;
      }
      case "consentRequired": {
        const t = typeof i == "function" ? i(l.consentRequired) : i;
        return l.consentRequired = t, et(t), t;
      }
      case "registrationPrimaryLabel": {
        const t = typeof i == "function" ? i(l.registrationPrimaryLabel) : i;
        return l.registrationPrimaryLabel = t, tt(t), t;
      }
      case "registrationStep": {
        const t = typeof i == "function" ? i(l.registrationStep) : i;
        return l.registrationStep = t, rt(t), t;
      }
      case "showLogin": {
        const t = typeof i == "function" ? i(l.showLogin) : i;
        return l.showLogin = t, st(t), t;
      }
      case "showRegistrationBack": {
        const t = typeof i == "function" ? i(l.showRegistrationBack) : i;
        return l.showRegistrationBack = t, ot(t), t;
      }
      default:
        return i;
    }
  }, [l]);
  K((e, i) => {
    const [t, ...s] = String(e || "").split(".");
    if (!t) return i;
    if (s.length === 0) return r(t, i);
    const n = (o) => {
      const c = Array.isArray(o) ? [...o] : { ...o || {} };
      let h = c;
      return s.forEach((p, R) => {
        R === s.length - 1 ? h[p] = i : (h[p] = Array.isArray(h[p]) ? [...h[p]] : { ...h[p] || {} }, h = h[p]);
      }), c;
    };
    switch (t) {
      case "showRegistrationStep1":
        return r("showRegistrationStep1", n), i;
      case "accessMode":
        return r("accessMode", n), i;
      case "message":
        return r("message", n), i;
      case "registrationInitialValues":
        return r("registrationInitialValues", n), i;
      case "busy":
        return r("busy", n), i;
      case "showStudentFields":
        return r("showStudentFields", n), i;
      case "authenticatedProfile":
        return r("authenticatedProfile", n), i;
      case "requestedRole":
        return r("requestedRole", n), i;
      case "showVerifiedRoleFields":
        return r("showVerifiedRoleFields", n), i;
      case "registrationProgress":
        return r("registrationProgress", n), i;
      case "showInstitutionFields":
        return r("showInstitutionFields", n), i;
      case "showRegistration":
        return r("showRegistration", n), i;
      case "showStudentInvitation":
        return r("showStudentInvitation", n), i;
      case "consentReady":
        return r("consentReady", n), i;
      case "privacyAccepted":
        return r("privacyAccepted", n), i;
      case "showEducatorFields":
        return r("showEducatorFields", n), i;
      case "showPending":
        return r("showPending", n), i;
      case "showRegistrationStep3":
        return r("showRegistrationStep3", n), i;
      case "termsAccepted":
        return r("termsAccepted", n), i;
      case "consentRequired":
        return r("consentRequired", n), i;
      case "registrationPrimaryLabel":
        return r("registrationPrimaryLabel", n), i;
      case "registrationStep":
        return r("registrationStep", n), i;
      case "showLogin":
        return r("showLogin", n), i;
      case "showRegistrationBack":
        return r("showRegistrationBack", n), i;
      default:
        return i;
    }
  }, [r]);
  const nt = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, ne = (e, i, t) => {
    if (!i || typeof i != "object") return "";
    const s = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], n = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (s.length && !s.includes(n) && !(n === "integer" && s.includes("number"))) return t + " must be " + s.join(" or ") + ".";
    if (i.enum && !i.enum.some((o) => JSON.stringify(o) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const o of i.required || []) if (!Object.prototype.hasOwnProperty.call(e, o)) return t + "." + o + " is required.";
      for (const [o, c] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(e, o)) {
        const h = ne(e[o], c, t + "." + o);
        if (h) return h;
      }
    }
    if (Array.isArray(e) && i.items) for (let o = 0; o < e.length; o++) {
      const c = ne(e[o], i.items, t + "[" + o + "]");
      if (c) return c;
    }
    return "";
  }, X = K(async (e, i, t = !1) => {
    const s = nt[e];
    if (!s) throw new Error("Module output '" + e + "' is not declared.");
    const n = ne(i, s, "output." + e);
    if (n) throw new Error(n);
    const o = m.onOutput || m.onModuleOutput || m.runtime?.onOutput;
    if (typeof o != "function") return i;
    const c = o(e, i, { moduleId: m.moduleId, awaitHandlers: t });
    return t ? await c : i;
  }, [m.onOutput, m.onModuleOutput, m.runtime?.onOutput, m.moduleId]), Pe = (e, i) => {
    const t = String(i || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((s) => ["__proto__", "prototype", "constructor"].includes(s))))
      return t.reduce((s, n) => {
        if (!(!s || typeof s != "object"))
          return typeof s.get == "function" && !(n in s) ? s.get(n) : s[n];
      }, e);
  }, Z = (e, i) => {
    if (Array.isArray(e)) return e.map((s) => Z(s, i));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([s, n]) => [Z(s, i), Z(n, i)]));
    if (typeof e != "string") return e;
    const t = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? Pe(i, t[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (s, n) => {
      const o = Pe(i, n);
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    });
  };
  async function at(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const s = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(l.registrationStep || 1))) === 3 }))();
      t.wizard_decide = s;
    }
    if (t.wizard_decide.isFinal)
      return await ze({ values: i.values }), t.wizard_submit;
    {
      i.event;
      const s = await (async () => {
        const n = Math.max(1, Math.min(3, Number(l.registrationStep || 1))), o = String(i.values && i.values.requestedRole || l.requestedRole || "student"), c = Math.min(3, n + 1);
        return {
          step: c,
          role: o,
          showStep1: c === 1,
          showStudent: c === 2 && o === "student",
          showStudentInvite: o === "student" && (c === 1 || c === 2),
          showEducator: c === 2 && o === "educator",
          showInstitution: c === 2 && o === "institution_admin",
          showVerified: c === 2 && (o === "educator" || o === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_advance = s;
    }
    return r("requestedRole", t.wizard_advance.role), r("registrationStep", t.wizard_advance.step), r("registrationProgress", t.wizard_advance.progress), r("registrationPrimaryLabel", t.wizard_advance.primaryLabel), r("showRegistrationBack", t.wizard_advance.showBack), r("showRegistrationStep1", t.wizard_advance.showStep1), r("showStudentFields", t.wizard_advance.showStudent), r("showStudentInvitation", t.wizard_advance.showStudentInvite), r("showEducatorFields", t.wizard_advance.showEducator), r("showInstitutionFields", t.wizard_advance.showInstitution), r("showVerifiedRoleFields", t.wizard_advance.showVerified), r("showRegistrationStep3", t.wizard_advance.showStep3), r("consentRequired", t.wizard_advance.showStep3), t.wizard_advance;
  }
  async function ct(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const s = await (async () => {
        const n = Math.max(1, Math.min(3, Number(l.registrationStep || 1))), o = String(l.requestedRole || "student"), c = Math.max(1, n - 1);
        return {
          step: c,
          role: o,
          showStep1: c === 1,
          showStudent: c === 2 && o === "student",
          showStudentInvite: o === "student" && (c === 1 || c === 2),
          showEducator: c === 2 && o === "educator",
          showInstitution: c === 2 && o === "institution_admin",
          showVerified: c === 2 && (o === "educator" || o === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_back_prepare = s;
    }
    return r("registrationStep", t.wizard_back_prepare.step), r("registrationProgress", t.wizard_back_prepare.progress), r("registrationPrimaryLabel", t.wizard_back_prepare.primaryLabel), r("showRegistrationBack", t.wizard_back_prepare.showBack), r("showRegistrationStep1", t.wizard_back_prepare.showStep1), r("showStudentFields", t.wizard_back_prepare.showStudent), r("showStudentInvitation", t.wizard_back_prepare.showStudentInvite), r("showEducatorFields", t.wizard_back_prepare.showEducator), r("showInstitutionFields", t.wizard_back_prepare.showInstitution), r("showVerifiedRoleFields", t.wizard_back_prepare.showVerified), r("showRegistrationStep3", t.wizard_back_prepare.showStep3), r("consentRequired", t.wizard_back_prepare.showStep3), t.wizard_back_prepare;
  }
  async function dt(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const s = await (async () => {
        const n = String(i.value || "student"), o = Math.max(1, Math.min(3, Number(l.registrationStep || 1)));
        return { role: n, showStudentInvitation: n === "student" && (o === 1 || o === 2) };
      })();
      t.role_prepare = s;
    }
    return r("requestedRole", t.role_prepare.role), r("showStudentInvitation", t.role_prepare.showStudentInvitation), t.role_prepare.role;
  }
  async function ze(e = {}) {
    const i = e || {}, t = {}, s = {};
    {
      i.event;
      const n = await (async () => {
        const o = i.values && typeof i.values == "object" ? i.values : {}, c = l.authenticatedProfile && typeof l.authenticatedProfile == "object" ? l.authenticatedProfile : {}, h = (z) => String(o[z] || "").trim(), p = h("requestedRole") || String(l.requestedRole || "student"), R = String(c.email || h("verifiedEmail")).trim();
        if (!R) throw new Error("Your verified Google email is missing. Please sign in again.");
        if (!h("firstName") || !h("lastName")) throw new Error("First name and last name are required.");
        if (!["student", "educator", "institution_admin"].includes(p)) throw new Error("Choose a valid Scholar role.");
        if (p === "educator" && (!h("qualification") || !h("subjectExpertise") || !h("professionalStatement") || !h("institutionName") || !h("kycEvidence") || !h("country"))) throw new Error("Complete all professor verification fields.");
        if (p === "institution_admin" && (!h("institutionLegalName") || !h("institutionDisplayName") || !h("institutionType") || !h("institutionWebsite") || !h("institutionEmailDomain") || !h("institutionContact") || !h("country"))) throw new Error("Complete all institution verification fields.");
        if (o.termsAccepted !== !0 || o.privacyAccepted !== !0) throw new Error("Accept the Terms of Service and Privacy Notice to continue.");
        return { ...o, verifiedEmail: R, requestedRole: p, termsAccepted: !0, privacyAccepted: !0 };
      })();
      s.reg_validate = n, t.customCodeResult = n;
    }
    r("busy", !0), r("message", "");
    {
      const o = Z({ profile: "{{ stepResults.reg_validate }}" }, { args: i, inputs: P, state: l, sharedState: Y, applicationState: N, pageState: M, pageData: O, serverData: C, vars: t, stepResults: s }) || {};
      delete o.userIdentity, delete o.verifiedEmail, delete o.emailVerified, delete o.providerId;
      const c = [void 0, void 0, void 0, void 0, o.profile], h = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
      let p;
      if (typeof h == "function")
        p = await h({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: o, signal: i.signal });
      else {
        const R = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: o }), signal: i.signal }), z = await R.json().catch(() => ({}));
        if (!R.ok || z.success === !1) throw new Error(z.error || "Database query failed (" + R.status + ")");
        p = z.data;
      }
      s.reg_call = p, t.queryResult = p;
    }
    {
      i.event;
      const n = await (async () => {
        const o = s.reg_call, c = Array.isArray(o) ? o[0] : o, h = c && c.result ? c.result : c;
        if (!h || h.isRegistered !== !0) throw new Error(h && h.message || "Registration did not complete.");
        return h;
      })();
      s.reg_normalize = n, t.customCodeResult = n;
    }
    return X("registrationCompleted", { isRegistered: s.reg_normalize.isRegistered, onboardingStatus: s.reg_normalize.onboardingStatus, redirectPath: s.reg_normalize.redirectPath, requestedRole: s.reg_normalize.requestedRole, roles: s.reg_normalize.roles, verificationStatus: s.reg_normalize.verificationStatus }, !1).catch((n) => console.error("Module output delivery failed", n)), X("navigationRequested", { path: s.reg_normalize.redirectPath }, !1).catch((n) => console.error("Module output delivery failed", n)), r("authenticatedProfile", s.reg_normalize), r("accessMode", "resolving"), r("message", s.reg_normalize.message), r("busy", !1), s.reg_normalize;
  }
  async function lt(e = {}) {
    const i = e || {}, t = {};
    r("privacyAccepted", i.value);
    {
      i.event;
      const s = await (async () => i.value === !0 && l.termsAccepted === !0)();
      t.privacyAccepted_ready = s;
    }
    r("consentReady", t.privacyAccepted_ready);
    {
      i.event;
      const s = await (async () => !(i.value === !0 && l.termsAccepted === !0))();
      t.privacyAccepted_missing = s;
    }
    return r("consentRequired", t.privacyAccepted_missing), i.value;
  }
  async function ut(e = {}) {
    const i = e || {}, t = {};
    r("termsAccepted", i.value);
    {
      i.event;
      const s = await (async () => i.value === !0 && l.privacyAccepted === !0)();
      t.termsAccepted_ready = s;
    }
    r("consentReady", t.termsAccepted_ready);
    {
      i.event;
      const s = await (async () => !(i.value === !0 && l.privacyAccepted === !0))();
      t.termsAccepted_missing = s;
    }
    return r("consentRequired", t.termsAccepted_missing), i.value;
  }
  async function mt(e = {}) {
    const i = e || {}, t = {}, s = {};
    r("busy", !0), r("message", "");
    try {
      {
        const n = await j("RudraAuth.signIn", { provider: P.authProvider, returnPath: P.returnPath }, []);
        s.google_auth = n, t["RudraAuth.signInResult"] = n;
      }
    } catch (n) {
      {
        i.event;
        const o = await (async () => ({ message: String(n && n.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        s.google_error = o, t.customCodeResult = o;
      }
      return r("message", s.google_error.message), r("accessMode", "login"), r("busy", !1), { error: s.google_error.message, ok: !1 };
    }
    X("googleSignInRequested", { returnPath: P.returnPath }, !1).catch((n) => console.error("Module output delivery failed", n));
    {
      i.event;
      const n = await (async () => {
        const o = s.google_auth || {}, c = o.user || o.currentUser || o.profile || o;
        if (o.success === !1 || !c || !(c.uid || c.id || c.userId) || !c.email)
          throw new Error(o.error || "Google sign-in did not return a verified user.");
        return {
          uid: c.uid || c.id || c.userId,
          email: c.email,
          displayName: c.displayName || c.name || "",
          emailVerified: c.emailVerified === !0,
          providerId: c.providerId || o.providerId || "google"
        };
      })();
      s.normalize_auth = n, t.customCodeResult = n;
    }
    r("authenticatedProfile", s.normalize_auth), r("accessMode", "resolving");
    {
      const o = Z({}, { args: i, inputs: P, state: l, sharedState: Y, applicationState: N, pageState: M, pageData: O, serverData: C, vars: t, stepResults: s }) || {};
      delete o.userIdentity;
      const c = [void 0], h = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
      let p;
      if (typeof h == "function")
        p = await h({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: o, signal: i.signal });
      else {
        const R = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: o }), signal: i.signal }), z = await R.json().catch(() => ({}));
        if (!R.ok || z.success === !1) throw new Error(z.error || "Database query failed (" + R.status + ")");
        p = z.data;
      }
      s.resolve_access = p, t.queryResult = p;
    }
    {
      i.event;
      const n = await (async () => {
        const o = s.resolve_access, c = Array.isArray(o) ? o[0] : o, h = c && c.result ? c.result : c, p = !!(h && h.isRegistered === !0), R = p ? h : { ...l.authenticatedProfile, isRegistered: !1 };
        return {
          isRegistered: p,
          profile: R,
          registrationInitialValues: {
            verifiedEmail: String(R && R.email || ""),
            requestedRole: "student",
            termsAccepted: !1,
            privacyAccepted: !1
          },
          redirectPath: h && h.redirectPath || P.returnPath || "/learn"
        };
      })();
      s.normalize_access = n, t.customCodeResult = n;
    }
    return s.normalize_access.isRegistered ? (r("authenticatedProfile", s.normalize_access.profile), r("busy", !1), X("navigationRequested", { path: s.normalize_access.redirectPath }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_access) : (r("authenticatedProfile", s.normalize_access.profile), r("registrationInitialValues", s.normalize_access.registrationInitialValues), r("showStudentInvitation", !0), r("accessMode", "registration"), r("showLogin", !1), r("showRegistration", !0), r("showPending", !1), r("busy", !1), s.normalize_access);
  }
  async function qe(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const s = await (async () => {
        const n = P.profile && typeof P.profile == "object" ? P.profile : {}, o = l.authenticatedProfile && typeof l.authenticatedProfile == "object" ? l.authenticatedProfile : {}, c = Object.keys(n).length ? n : o;
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
      t.init_context = s;
    }
    return r("authenticatedProfile", t.init_context.profile), r("registrationInitialValues", t.init_context.initialValues), r("showStudentInvitation", t.init_context.showStudentInvitation), r("accessMode", t.init_context.mode), r("showLogin", t.init_context.showLogin), r("showRegistration", t.init_context.showRegistration), r("showPending", t.init_context.showPending), t.init_context;
  }
  const ht = {
    handleRegistrationSubmit: at,
    goBackRegistrationStep: ct,
    setRequestedRole: dt,
    submitRegistration: ze,
    setPrivacyAccepted: lt,
    setTermsAccepted: ut,
    requestGoogleSignIn: mt,
    initializeAccessFlow: qe
  }, ft = {
    handleRegistrationSubmit: ["values"],
    goBackRegistrationStep: [],
    setRequestedRole: ["value"],
    submitRegistration: ["values"],
    setPrivacyAccepted: ["value"],
    setTermsAccepted: ["value"],
    requestGoogleSignIn: [],
    initializeAccessFlow: []
  }, j = (e, i = {}, t = []) => {
    const s = ht[e];
    if (s) {
      const p = ft[e] || [];
      return s(Object.fromEntries(p.map((R, z) => {
        const H = Object.prototype.hasOwnProperty.call(i, R) ? i[R] : void 0;
        return [R, (H === "" || H === void 0) && t[z] !== void 0 ? t[z] : R === "event" && (H === "" || H === void 0) ? t[0] : H];
      })));
    }
    const n = y?.[e];
    if (typeof n == "function")
      return n(Object.keys(i).length > 0 ? i : t[0]);
    const [o, c] = String(e).split("."), h = typeof globalThis < "u" ? globalThis[o]?.[c] : void 0;
    if (typeof h == "function") return h(...Object.values(i));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, $ = ce(/* @__PURE__ */ new Map()), gt = K((e, i, t, s) => {
    const n = $.current.get(e);
    if (i === "exhaust" && n?.promise) return n.promise;
    i === "takeLatest" && n?.controller?.abort();
    const o = new AbortController(), c = () => Promise.resolve().then(() => t(o.signal)), h = i === "queue" && n?.promise ? n.promise.catch(() => {
    }).then(c) : c();
    return $.current.set(e, { controller: o, promise: h }), h.catch((p) => {
      p?.name !== "AbortError" && console.error(s, p);
    }).finally(() => {
      $.current.get(e)?.promise === h && $.current.delete(e);
    }), h;
  }, []);
  J(() => () => {
    for (const e of $.current.values()) e.controller?.abort();
    $.current.clear();
  }, []);
  const Ae = ce(!1);
  return J(() => {
    Ae.current || (Ae.current = !0), gt("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (e) => qe({}), "Module input lifecycle failed:");
  }, [v, me, I]), /* @__PURE__ */ f("div", { ref: A, className: "rudra-module-wrapper", children: u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
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
                    /* @__PURE__ */ f(x, { id: "story_badge_label", className: "rs-badge-label", as: "span", content: "College mathematics · POC", customColor: "#eafff8" })
                  ] })
                ] })
              ] }),
              u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(x, { id: "title", className: "rs-access-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learn mathematics with context, not shortcuts." : e)(S?.i18n?.title), customColor: "#eafff8" })
              ] }),
              u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(x, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : e)(S?.i18n?.subtitle) })
              ] }),
              u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(V, { id: "trust", appearance: "outlined", live: "off", title: "SQL is the authority", variant: "neutral" })
              ] })
            ] })
          ] }),
          u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
            "      ",
            /* @__PURE__ */ a(U, { id: "form_area", className: "rs-access-form", children: [
              "      ",
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(x, { id: "signin_eyebrow", className: "rs-signin-eyebrow", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "WELCOME TO RUDRA SCHOLAR" : e)(S?.i18n?.welcome) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(x, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready to think through the next problem?" : e)(S?.i18n?.signInTitle) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(x, { id: "signin_intro", className: "rs-signin-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : e)(S?.i18n?.signInIntro) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(de, { id: "google", leftIcon: /* @__PURE__ */ a(d, { children: [
                  "      ",
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(_, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", size: 20, strokeWidth: 1.2 })
                  ] })
                ] }), size: "lg", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), fullWidth: !0, id: "scholar-google-signin", label: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in with Google" : e)(S?.i18n?.google), theme: "auto", variant: "outline", onAction: (...e) => j("requestGoogleSignIn", {}, e), ariaLabel: "Sign in with Google", rightIcon: !1 })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(G)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(x, { id: "notice", className: "rs-signin-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : e)(S?.i18n?.signInHelp) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(x, { id: "heading", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Create your Scholar account" : e)(S?.i18n?.profile) })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ a(pt, { id: "profile_form", className: "rs-form", onSubmit: (...e) => j("handleRegistrationSubmit", {}, e), initialValues: /* @__PURE__ */ ((e) => e === void 0 ? { privacyAccepted: !1, requestedRole: "student", termsAccepted: !1, verifiedEmail: "" } : e)(fe), children: [
                  "      ",
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(x, { id: "registration_progress", className: "rs-registration-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1 of 3 · Profile" : e)(pe) })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "email", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Mail", id: "email_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "verifiedEmail", size: "md", type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((e) => e === void 0 ? "Signed-in Google account" : e)(ge?.email), disabled: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "first_name", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "UserRound", id: "first_name_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "firstName", size: "md", type: "text", label: "First name", required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "last_name", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "UserRound", id: "last_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "lastName", size: "md", type: "text", label: "Last name" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Q)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(Ie, { id: "role", name: "requestedRole", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }], required: !0, onChangeValue: (...e) => j("setRequestedRole", {}, e) })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(ye)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code", name: "institutionInvite" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(re)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(V, { id: "kyc_intro", variant: "neutral", appearance: "outlined", live: "off", title: "Role verification required" })
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
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "expertise", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Sigma", id: "expertise_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), label: "Mathematics expertise", required: !0, placeholder: "For example, Linear Algebra, Calculus", name: "subjectExpertise", size: "md", type: "text" })
                  ] }),
                  u(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "kyc", size: "md", type: "text", label: "Legacy verification field disabled", required: !1, placeholder: "Secure upload reference — do not paste document data", name: "kycReference" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(yt, { id: "professional_statement", maxRows: 6, minRows: 3, required: !0, autoResize: !0, placeholder: "Briefly describe your teaching experience.", name: "professionalStatement", size: "md", label: "Short professional statement" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "educator_institution", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "School", id: "educator_institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionName", size: "md", type: "text", label: "College or university", required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "evidence", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), label: "KYC verification evidence", required: !0, placeholder: "Use an institution email or public staff-profile URL", name: "kycEvidence", size: "md", type: "text" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_legal_name", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Landmark", id: "institution_legal_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), label: "Institution legal name", required: !0, name: "institutionLegalName", size: "md", type: "text" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_display_name", name: "institutionDisplayName", size: "md", type: "text", label: "Display name", required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(Ie, { id: "institution_type", required: !0, name: "institutionType", label: "Institution type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }] })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_website", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Globe", id: "institution_website_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), placeholder: "https://example.edu", name: "institutionWebsite", size: "md", type: "url", label: "Official website", required: !0 })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_domain", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "AtSign", id: "institution_domain_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), type: "text", label: "Institutional email domain", required: !0, placeholder: "example.edu", name: "institutionEmailDomain", size: "md" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_contact", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "Administrative contact", required: !0, name: "institutionContact", size: "md" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(re)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "country", icon: /* @__PURE__ */ a(d, { children: [
                      "      ",
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "MapPin", id: "country_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "country", size: "md", type: "text", label: "Country", required: !0 })
                  ] }),
                  u(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(le, { id: "age_confirmed", name: "ageConfirmed", label: "I confirm I am 18 or older.", required: !1, colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators." })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(le, { id: "terms", description: "Required before an account can be created.", onChangeValue: (...e) => j("setTermsAccepted", {}, e), name: "termsAccepted", label: "I accept the Terms of Service.", value: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ve), required: !0, colorScheme: "emerald" })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(le, { id: "privacy", colorScheme: "emerald", description: "Required before an account can be created.", onChangeValue: (...e) => j("setPrivacyAccepted", {}, e), name: "privacyAccepted", label: "I have read and accept the Privacy Notice.", value: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(we), required: !0 })
                  ] }),
                  u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                    "      ",
                    /* @__PURE__ */ a(U, { id: "registration_actions", className: "rs-registration-actions", children: [
                      "      ",
                      u(be) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(de, { id: "registration_back", leftIcon: /* @__PURE__ */ a(d, { children: [
                          "      ",
                          u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                            "      ",
                            /* @__PURE__ */ f(_, { icon: "ArrowLeft", id: "registration_back_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), onAction: (...e) => j("goBackRegistrationStep", {}, e), rightIcon: !1, additionalAttributes: {}, label: "Back", variant: "secondary", fullWidth: !0, id: "scholar-registration-back", size: "lg", type: "button", theme: "auto" })
                      ] }),
                      u(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(de, { id: "submit", id: "scholar-registration-primary", type: "submit", theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(Se), rightIcon: !1, size: "lg", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next" : e)(_e), leftIcon: !1, fullWidth: !0 })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              u(he) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(V, { id: "message", live: "polite", title: "Scholar access", variant: "neutral", appearance: "outlined" })
              ] }),
              u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Re)) && /* @__PURE__ */ a(d, { children: [
                "      ",
                /* @__PURE__ */ f(V, { id: "pending_notice", live: "polite", title: "Professor verification pending", variant: "warning", appearance: "outlined" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Pt as default
};
