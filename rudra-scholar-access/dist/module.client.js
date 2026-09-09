import { jsx as f, jsxs as s, Fragment as d } from "react/jsx-runtime";
import ae, { useState as y, useEffect as U, useRef as ce, useCallback as K } from "react";
import { Typography as k, Alert as V, Button as de } from "@rudra-studio/rudra-core";
import { Box as $ } from "@rudra-studio/rudra-layout";
import { Form as nt, Input as b, Select as ze, Textarea as at, Checkbox as le } from "@rudra-studio/rudra-form";
import * as ee from "lucide-react";
const Ie = (u) => String(u || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), ct = (u) => {
  let v = u;
  for (; v && typeof v == "object" && "type" in v && "value" in v; )
    v = v.value;
  return v;
};
function _({ icon: u, size: v, color: E, strokeWidth: Y, className: N = "", style: M, ...O }) {
  const w = ct(u), [I, W] = y(null), ue = w && typeof w == "object" ? JSON.stringify(w) : String(w || "");
  U(() => {
    const x = new AbortController();
    let L = "", T = "";
    if (W(null), typeof w == "string") {
      const R = w.trim();
      if (ee[R]) return () => x.abort();
      R.startsWith("<svg") ? T = R : (/^https?:\/\//.test(R) || R.startsWith("/") || R.startsWith("data:image/svg")) && (L = R);
    } else w && typeof w == "object" && (w.iconType === "svg" && w.svgContent ? T = w.svgContent : w.iconType === "url" && w.url && (L = w.url));
    return T ? W(Ie(T)) : L && fetch(L, { signal: x.signal }).then((R) => {
      if (!R.ok) throw new Error("Icon request failed (" + R.status + ")");
      return R.text();
    }).then((R) => {
      R.trim().startsWith("<svg") && W(Ie(R));
    }).catch((R) => {
      R.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", R);
    }), () => x.abort();
  }, [ue]);
  const A = w && typeof w == "object" ? w.props || {} : {}, q = { ...A };
  delete q.size, delete q.color, delete q.strokeWidth;
  const C = v ?? A.size ?? 24, F = E ?? A.color ?? "currentColor", g = Y ?? A.strokeWidth ?? 1.5;
  let l = "";
  if (typeof w == "string" && ee[w] ? l = w : w && typeof w == "object" && w.name && (!w.iconType || w.iconType === "lucide") && (l = w.name), l) {
    const x = ee[l];
    if (x)
      return ae.createElement(x, {
        size: C,
        color: F,
        strokeWidth: g,
        className: N,
        style: M,
        ...q,
        ...O
      });
  }
  if (I)
    return ae.createElement("span", {
      ...q,
      ...O,
      className: ("rudra-universal-icon " + N).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: C,
        height: C,
        color: F,
        ...M
      },
      dangerouslySetInnerHTML: {
        __html: I.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + g + '">')
      }
    });
  const te = ee.LayoutGrid;
  return ae.createElement(te, {
    size: C,
    color: F,
    strokeWidth: g,
    className: N,
    style: M,
    ...q,
    ...O
  });
}
function ft(u) {
  const v = {}, E = u.serverData || u.serverState || {}, Y = u.sharedState || {}, N = u.applicationState || E.applicationState || {}, M = u.pageState || E.pageState || {}, O = u.pageData || E.pageData || {}, w = {
    ...u.runtime?.functions || {},
    ...u.runtime?.actions || {},
    ...u.functions || {},
    ...u.actions || {}
  }, I = u.$theme ?? u.theme ?? u.data?.$theme ?? u.runtime?.data?.$theme ?? u.runtime?.theme, W = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [ue, A] = y(() => I ?? W());
  U(() => {
    I != null && A(I);
  }, [I]), U(() => {
    if (I != null || typeof document > "u") return;
    const e = document.documentElement, i = (a) => A(a?.detail?.theme ?? W()), t = new MutationObserver(i);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [I]);
  const q = ce(null), [C, F] = y("lg");
  U(() => {
    if (!q.current) return;
    const e = new ResizeObserver((i) => {
      for (let t of i) {
        const a = t.contentRect.width;
        a < 768 ? F("sm") : a < 1024 ? F("md") : F("lg");
      }
    });
    return e.observe(q.current), () => e.disconnect();
  }, []);
  const g = K((e) => typeof e != "object" || e === null ? e : C === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : C === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [C]), l = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, te = u.locale !== void 0 ? u.locale : u.data?.locale !== void 0 ? u.data.locale : "en", x = u.authenticated !== void 0 ? u.authenticated : u.data?.authenticated !== void 0 ? u.data.authenticated : !1, L = u.mode !== void 0 ? u.mode : u.data?.mode !== void 0 ? u.data.mode : "login", T = u.authProvider !== void 0 ? u.authProvider : u.data?.authProvider !== void 0 ? u.data.authProvider : "firebase-google", R = u.returnPath !== void 0 ? u.returnPath : u.data?.returnPath !== void 0 ? u.data.returnPath : "/learn", he = u.profile !== void 0 ? u.profile : u.data?.profile !== void 0 ? u.data.profile : {}, qe = u.profileServiceEnabled !== void 0 ? u.profileServiceEnabled : u.data?.profileServiceEnabled !== void 0 ? u.data.profileServiceEnabled : !1, P = { locale: te, authenticated: x, mode: L, authProvider: T, returnPath: R, profile: he, profileServiceEnabled: qe }, [me, xe] = y(() => structuredClone("")), [fe, ke] = y(() => structuredClone({ requestedRole: "student", verifiedEmail: "" })), [ge, Ce] = y(() => structuredClone({})), [Ee, Ae] = y(() => structuredClone("student")), [pe, Fe] = y(() => structuredClone(!1)), [ie, Le] = y(() => structuredClone(!1)), [J, je] = y(() => structuredClone(!0)), [we, Ne] = y(() => structuredClone("Next")), [re, Me] = y(() => structuredClone(!1)), [Oe, We] = y(() => structuredClone(1)), [B, Te] = y(() => structuredClone(!0)), [Be, De] = y(() => structuredClone(!0)), [oe, Ge] = y(() => structuredClone(!1)), [ye, $e] = y(() => structuredClone(!1)), [Se, Ue] = y(() => structuredClone(!0)), [D, Je] = y(() => structuredClone(!1)), [Qe, Ze] = y(() => structuredClone("login")), [Re, He] = y(() => structuredClone("Step 1 of 3 · Profile")), [se, Ke] = y(() => structuredClone(!1)), [j, Ye] = y(() => structuredClone(!1)), m = { message: me, registrationInitialValues: fe, authenticatedProfile: ge, requestedRole: Ee, showRegistrationBack: pe, showRegistrationStep3: ie, showRegistrationStep1: J, registrationPrimaryLabel: we, showVerifiedRoleFields: re, registrationStep: Oe, showLogin: B, showStudentFields: Be, showRegistration: oe, showPending: ye, showStudentInvitation: Se, showEducatorFields: D, accessMode: Qe, registrationProgress: Re, busy: se, showInstitutionFields: j }, c = K((e, i) => {
    switch (e) {
      case "message": {
        const t = typeof i == "function" ? i(m.message) : i;
        return m.message = t, xe(t), t;
      }
      case "registrationInitialValues": {
        const t = typeof i == "function" ? i(m.registrationInitialValues) : i;
        return m.registrationInitialValues = t, ke(t), t;
      }
      case "authenticatedProfile": {
        const t = typeof i == "function" ? i(m.authenticatedProfile) : i;
        return m.authenticatedProfile = t, Ce(t), t;
      }
      case "requestedRole": {
        const t = typeof i == "function" ? i(m.requestedRole) : i;
        return m.requestedRole = t, Ae(t), t;
      }
      case "showRegistrationBack": {
        const t = typeof i == "function" ? i(m.showRegistrationBack) : i;
        return m.showRegistrationBack = t, Fe(t), t;
      }
      case "showRegistrationStep3": {
        const t = typeof i == "function" ? i(m.showRegistrationStep3) : i;
        return m.showRegistrationStep3 = t, Le(t), t;
      }
      case "showRegistrationStep1": {
        const t = typeof i == "function" ? i(m.showRegistrationStep1) : i;
        return m.showRegistrationStep1 = t, je(t), t;
      }
      case "registrationPrimaryLabel": {
        const t = typeof i == "function" ? i(m.registrationPrimaryLabel) : i;
        return m.registrationPrimaryLabel = t, Ne(t), t;
      }
      case "showVerifiedRoleFields": {
        const t = typeof i == "function" ? i(m.showVerifiedRoleFields) : i;
        return m.showVerifiedRoleFields = t, Me(t), t;
      }
      case "registrationStep": {
        const t = typeof i == "function" ? i(m.registrationStep) : i;
        return m.registrationStep = t, We(t), t;
      }
      case "showLogin": {
        const t = typeof i == "function" ? i(m.showLogin) : i;
        return m.showLogin = t, Te(t), t;
      }
      case "showStudentFields": {
        const t = typeof i == "function" ? i(m.showStudentFields) : i;
        return m.showStudentFields = t, De(t), t;
      }
      case "showRegistration": {
        const t = typeof i == "function" ? i(m.showRegistration) : i;
        return m.showRegistration = t, Ge(t), t;
      }
      case "showPending": {
        const t = typeof i == "function" ? i(m.showPending) : i;
        return m.showPending = t, $e(t), t;
      }
      case "showStudentInvitation": {
        const t = typeof i == "function" ? i(m.showStudentInvitation) : i;
        return m.showStudentInvitation = t, Ue(t), t;
      }
      case "showEducatorFields": {
        const t = typeof i == "function" ? i(m.showEducatorFields) : i;
        return m.showEducatorFields = t, Je(t), t;
      }
      case "accessMode": {
        const t = typeof i == "function" ? i(m.accessMode) : i;
        return m.accessMode = t, Ze(t), t;
      }
      case "registrationProgress": {
        const t = typeof i == "function" ? i(m.registrationProgress) : i;
        return m.registrationProgress = t, He(t), t;
      }
      case "busy": {
        const t = typeof i == "function" ? i(m.busy) : i;
        return m.busy = t, Ke(t), t;
      }
      case "showInstitutionFields": {
        const t = typeof i == "function" ? i(m.showInstitutionFields) : i;
        return m.showInstitutionFields = t, Ye(t), t;
      }
      default:
        return i;
    }
  }, [m]);
  K((e, i) => {
    const [t, ...a] = String(e || "").split(".");
    if (!t) return i;
    if (a.length === 0) return c(t, i);
    const o = (r) => {
      const n = Array.isArray(r) ? [...r] : { ...r || {} };
      let h = n;
      return a.forEach((p, S) => {
        S === a.length - 1 ? h[p] = i : (h[p] = Array.isArray(h[p]) ? [...h[p]] : { ...h[p] || {} }, h = h[p]);
      }), n;
    };
    switch (t) {
      case "message":
        return c("message", o), i;
      case "registrationInitialValues":
        return c("registrationInitialValues", o), i;
      case "authenticatedProfile":
        return c("authenticatedProfile", o), i;
      case "requestedRole":
        return c("requestedRole", o), i;
      case "showRegistrationBack":
        return c("showRegistrationBack", o), i;
      case "showRegistrationStep3":
        return c("showRegistrationStep3", o), i;
      case "showRegistrationStep1":
        return c("showRegistrationStep1", o), i;
      case "registrationPrimaryLabel":
        return c("registrationPrimaryLabel", o), i;
      case "showVerifiedRoleFields":
        return c("showVerifiedRoleFields", o), i;
      case "registrationStep":
        return c("registrationStep", o), i;
      case "showLogin":
        return c("showLogin", o), i;
      case "showStudentFields":
        return c("showStudentFields", o), i;
      case "showRegistration":
        return c("showRegistration", o), i;
      case "showPending":
        return c("showPending", o), i;
      case "showStudentInvitation":
        return c("showStudentInvitation", o), i;
      case "showEducatorFields":
        return c("showEducatorFields", o), i;
      case "accessMode":
        return c("accessMode", o), i;
      case "registrationProgress":
        return c("registrationProgress", o), i;
      case "busy":
        return c("busy", o), i;
      case "showInstitutionFields":
        return c("showInstitutionFields", o), i;
      default:
        return i;
    }
  }, [c]);
  const Xe = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, ne = (e, i, t) => {
    if (!i || typeof i != "object") return "";
    const a = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], o = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (a.length && !a.includes(o) && !(o === "integer" && a.includes("number"))) return t + " must be " + a.join(" or ") + ".";
    if (i.enum && !i.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of i.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return t + "." + r + " is required.";
      for (const [r, n] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const h = ne(e[r], n, t + "." + r);
        if (h) return h;
      }
    }
    if (Array.isArray(e) && i.items) for (let r = 0; r < e.length; r++) {
      const n = ne(e[r], i.items, t + "[" + r + "]");
      if (n) return n;
    }
    return "";
  }, X = K(async (e, i, t = !1) => {
    const a = Xe[e];
    if (!a) throw new Error("Module output '" + e + "' is not declared.");
    const o = ne(i, a, "output." + e);
    if (o) throw new Error(o);
    const r = u.onOutput || u.onModuleOutput || u.runtime?.onOutput;
    if (typeof r != "function") return i;
    const n = r(e, i, { moduleId: u.moduleId, awaitHandlers: t });
    return t ? await n : i;
  }, [u.onOutput, u.onModuleOutput, u.runtime?.onOutput, u.moduleId]), ve = (e, i) => {
    const t = String(i || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((a) => ["__proto__", "prototype", "constructor"].includes(a))))
      return t.reduce((a, o) => {
        if (!(!a || typeof a != "object"))
          return typeof a.get == "function" && !(o in a) ? a.get(o) : a[o];
      }, e);
  }, Q = (e, i) => {
    if (Array.isArray(e)) return e.map((a) => Q(a, i));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([a, o]) => [Q(a, i), Q(o, i)]));
    if (typeof e != "string") return e;
    const t = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? ve(i, t[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (a, o) => {
      const r = ve(i, o);
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
  };
  async function _e(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const a = await (async () => {
        const o = P.profile && typeof P.profile == "object" ? P.profile : {}, r = m.authenticatedProfile && typeof m.authenticatedProfile == "object" ? m.authenticatedProfile : {}, n = Object.keys(o).length ? o : r;
        let h = ["login", "registration", "resolving"].includes(P.mode) ? P.mode : "login";
        P.authenticated === !0 && n.isRegistered !== !0 && n.email && (h = "registration");
        const p = h === "resolving" && n.verificationStatus === "pending";
        return {
          mode: h,
          profile: n,
          initialValues: {
            verifiedEmail: String(n.email || ""),
            requestedRole: String(n.requestedRole || m.requestedRole || "student"),
            termsAccepted: !1,
            privacyAccepted: !1
          },
          showLogin: h === "login",
          showRegistration: h === "registration",
          showPending: p
        };
      })();
      t.init_context = a;
    }
    return c("authenticatedProfile", t.init_context.profile), c("registrationInitialValues", t.init_context.initialValues), c("showStudentInvitation", t.init_context.showStudentInvitation), c("accessMode", t.init_context.mode), c("showLogin", t.init_context.showLogin), c("showRegistration", t.init_context.showRegistration), c("showPending", t.init_context.showPending), t.init_context;
  }
  async function Ve(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const a = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(m.registrationStep || 1))) === 3 }))();
      t.wizard_decide = a;
    }
    if (t.wizard_decide.isFinal)
      return await be({ values: i.values }), t.wizard_submit;
    {
      i.event;
      const a = await (async () => {
        const o = Math.max(1, Math.min(3, Number(m.registrationStep || 1))), r = String(i.values && i.values.requestedRole || m.requestedRole || "student"), n = Math.min(3, o + 1);
        return {
          step: n,
          role: r,
          showStep1: n === 1,
          showStudent: n === 2 && r === "student",
          showStudentInvite: r === "student" && (n === 1 || n === 2),
          showEducator: n === 2 && r === "educator",
          showInstitution: n === 2 && r === "institution_admin",
          showVerified: n === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: n === 3,
          showBack: n > 1,
          progress: n === 1 ? "Step 1 of 3 · Profile" : n === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: n === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_advance = a;
    }
    return c("requestedRole", t.wizard_advance.role), c("registrationStep", t.wizard_advance.step), c("registrationProgress", t.wizard_advance.progress), c("registrationPrimaryLabel", t.wizard_advance.primaryLabel), c("showRegistrationBack", t.wizard_advance.showBack), c("showRegistrationStep1", t.wizard_advance.showStep1), c("showStudentFields", t.wizard_advance.showStudent), c("showStudentInvitation", t.wizard_advance.showStudentInvite), c("showEducatorFields", t.wizard_advance.showEducator), c("showInstitutionFields", t.wizard_advance.showInstitution), c("showVerifiedRoleFields", t.wizard_advance.showVerified), c("showRegistrationStep3", t.wizard_advance.showStep3), t.wizard_advance;
  }
  async function et(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const a = await (async () => {
        const o = Math.max(1, Math.min(3, Number(m.registrationStep || 1))), r = String(m.requestedRole || "student"), n = Math.max(1, o - 1);
        return {
          step: n,
          role: r,
          showStep1: n === 1,
          showStudent: n === 2 && r === "student",
          showStudentInvite: r === "student" && (n === 1 || n === 2),
          showEducator: n === 2 && r === "educator",
          showInstitution: n === 2 && r === "institution_admin",
          showVerified: n === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: n === 3,
          showBack: n > 1,
          progress: n === 1 ? "Step 1 of 3 · Profile" : n === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: n === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_back_prepare = a;
    }
    return c("registrationStep", t.wizard_back_prepare.step), c("registrationProgress", t.wizard_back_prepare.progress), c("registrationPrimaryLabel", t.wizard_back_prepare.primaryLabel), c("showRegistrationBack", t.wizard_back_prepare.showBack), c("showRegistrationStep1", t.wizard_back_prepare.showStep1), c("showStudentFields", t.wizard_back_prepare.showStudent), c("showStudentInvitation", t.wizard_back_prepare.showStudentInvite), c("showEducatorFields", t.wizard_back_prepare.showEducator), c("showInstitutionFields", t.wizard_back_prepare.showInstitution), c("showVerifiedRoleFields", t.wizard_back_prepare.showVerified), c("showRegistrationStep3", t.wizard_back_prepare.showStep3), t.wizard_back_prepare;
  }
  async function tt(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const a = await (async () => {
        const o = String(i.value || "student"), r = Math.max(1, Math.min(3, Number(m.registrationStep || 1)));
        return { role: o, showStudentInvitation: o === "student" && (r === 1 || r === 2) };
      })();
      t.role_prepare = a;
    }
    return c("requestedRole", t.role_prepare.role), c("showStudentInvitation", t.role_prepare.showStudentInvitation), t.role_prepare.role;
  }
  async function be(e = {}) {
    const i = e || {}, t = {}, a = {};
    {
      i.event;
      const o = await (async () => {
        const r = i.values && typeof i.values == "object" ? i.values : {}, n = m.authenticatedProfile && typeof m.authenticatedProfile == "object" ? m.authenticatedProfile : {}, h = (z) => String(r[z] || "").trim(), p = h("requestedRole") || String(m.requestedRole || "student"), S = String(n.email || h("verifiedEmail")).trim();
        if (!S) throw new Error("Your verified Google email is missing. Please sign in again.");
        if (!h("firstName") || !h("lastName")) throw new Error("First name and last name are required.");
        if (!["student", "educator", "institution_admin"].includes(p)) throw new Error("Choose a valid Scholar role.");
        if (p === "educator" && (!h("qualification") || !h("subjectExpertise") || !h("professionalStatement") || !h("institutionName") || !h("kycEvidence") || !h("country"))) throw new Error("Complete all professor verification fields.");
        if (p === "institution_admin" && (!h("institutionLegalName") || !h("institutionDisplayName") || !h("institutionType") || !h("institutionWebsite") || !h("institutionEmailDomain") || !h("institutionContact") || !h("country"))) throw new Error("Complete all institution verification fields.");
        if (r.termsAccepted !== !0 || r.privacyAccepted !== !0) throw new Error("Accept the Terms of Service and Privacy Notice to continue.");
        return { ...r, verifiedEmail: S, requestedRole: p, termsAccepted: !0, privacyAccepted: !0 };
      })();
      a.reg_validate = o, t.customCodeResult = o;
    }
    c("busy", !0), c("message", "");
    {
      const r = Q({ profile: "{{ stepResults.reg_validate }}" }, { args: i, inputs: P, state: m, sharedState: Y, applicationState: N, pageState: M, pageData: O, serverData: E, vars: t, stepResults: a }) || {};
      delete r.userIdentity, delete r.verifiedEmail, delete r.emailVerified, delete r.providerId;
      const n = [void 0, void 0, void 0, void 0, r.profile], h = u.executeDatabaseQuery || u.runtime?.executeDatabaseQuery;
      let p;
      if (typeof h == "function")
        p = await h({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: n, namedParameters: r, signal: i.signal });
      else {
        const S = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: n, namedParameters: r }), signal: i.signal }), z = await S.json().catch(() => ({}));
        if (!S.ok || z.success === !1) throw new Error(z.error || "Database query failed (" + S.status + ")");
        p = z.data;
      }
      a.reg_call = p, t.queryResult = p;
    }
    {
      i.event;
      const o = await (async () => {
        const r = a.reg_call, n = Array.isArray(r) ? r[0] : r, h = n && n.result ? n.result : n;
        if (!h || h.isRegistered !== !0) throw new Error(h && h.message || "Registration did not complete.");
        return h;
      })();
      a.reg_normalize = o, t.customCodeResult = o;
    }
    return X("registrationCompleted", { isRegistered: a.reg_normalize.isRegistered, onboardingStatus: a.reg_normalize.onboardingStatus, redirectPath: a.reg_normalize.redirectPath, requestedRole: a.reg_normalize.requestedRole, roles: a.reg_normalize.roles, verificationStatus: a.reg_normalize.verificationStatus }, !1).catch((o) => console.error("Module output delivery failed", o)), X("navigationRequested", { path: a.reg_normalize.redirectPath }, !1).catch((o) => console.error("Module output delivery failed", o)), c("authenticatedProfile", a.reg_normalize), c("accessMode", "resolving"), c("message", a.reg_normalize.message), c("busy", !1), a.reg_normalize;
  }
  async function it(e = {}) {
    const i = e || {}, t = {}, a = {};
    c("busy", !0), c("message", "");
    try {
      {
        const o = await Z("RudraAuth.signIn", { provider: P.authProvider, returnPath: P.returnPath }, []);
        a.google_auth = o, t["RudraAuth.signInResult"] = o;
      }
    } catch (o) {
      {
        i.event;
        const r = await (async () => ({ message: String(o && o.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        a.google_error = r, t.customCodeResult = r;
      }
      return c("message", a.google_error.message), c("accessMode", "login"), c("busy", !1), { error: a.google_error.message, ok: !1 };
    }
    X("googleSignInRequested", { returnPath: P.returnPath }, !1).catch((o) => console.error("Module output delivery failed", o));
    {
      i.event;
      const o = await (async () => {
        const r = a.google_auth || {}, n = r.user || r.currentUser || r.profile || r;
        if (r.success === !1 || !n || !(n.uid || n.id || n.userId) || !n.email)
          throw new Error(r.error || "Google sign-in did not return a verified user.");
        return {
          uid: n.uid || n.id || n.userId,
          email: n.email,
          displayName: n.displayName || n.name || "",
          emailVerified: n.emailVerified === !0,
          providerId: n.providerId || r.providerId || "google"
        };
      })();
      a.normalize_auth = o, t.customCodeResult = o;
    }
    c("authenticatedProfile", a.normalize_auth), c("accessMode", "resolving");
    {
      const r = Q({}, { args: i, inputs: P, state: m, sharedState: Y, applicationState: N, pageState: M, pageData: O, serverData: E, vars: t, stepResults: a }) || {};
      delete r.userIdentity;
      const n = [void 0], h = u.executeDatabaseQuery || u.runtime?.executeDatabaseQuery;
      let p;
      if (typeof h == "function")
        p = await h({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: n, namedParameters: r, signal: i.signal });
      else {
        const S = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: n, namedParameters: r }), signal: i.signal }), z = await S.json().catch(() => ({}));
        if (!S.ok || z.success === !1) throw new Error(z.error || "Database query failed (" + S.status + ")");
        p = z.data;
      }
      a.resolve_access = p, t.queryResult = p;
    }
    {
      i.event;
      const o = await (async () => {
        const r = a.resolve_access, n = Array.isArray(r) ? r[0] : r, h = n && n.result ? n.result : n, p = !!(h && h.isRegistered === !0), S = p ? h : { ...m.authenticatedProfile, isRegistered: !1 };
        return {
          isRegistered: p,
          profile: S,
          registrationInitialValues: {
            verifiedEmail: String(S && S.email || ""),
            requestedRole: "student",
            termsAccepted: !1,
            privacyAccepted: !1
          },
          redirectPath: h && h.redirectPath || P.returnPath || "/learn"
        };
      })();
      a.normalize_access = o, t.customCodeResult = o;
    }
    return a.normalize_access.isRegistered ? (c("authenticatedProfile", a.normalize_access.profile), c("busy", !1), X("navigationRequested", { path: a.normalize_access.redirectPath }, !1).catch((o) => console.error("Module output delivery failed", o)), a.normalize_access) : (c("authenticatedProfile", a.normalize_access.profile), c("registrationInitialValues", a.normalize_access.registrationInitialValues), c("showStudentInvitation", !0), c("accessMode", "registration"), c("showLogin", !1), c("showRegistration", !0), c("showPending", !1), c("busy", !1), a.normalize_access);
  }
  const rt = {
    initializeAccessFlow: _e,
    handleRegistrationSubmit: Ve,
    goBackRegistrationStep: et,
    setRequestedRole: tt,
    submitRegistration: be,
    requestGoogleSignIn: it
  }, ot = {
    initializeAccessFlow: [],
    handleRegistrationSubmit: ["values"],
    goBackRegistrationStep: [],
    setRequestedRole: ["value"],
    submitRegistration: ["values"],
    requestGoogleSignIn: []
  }, Z = (e, i = {}, t = []) => {
    const a = rt[e];
    if (a) {
      const p = ot[e] || [];
      return a(Object.fromEntries(p.map((S, z) => {
        const H = Object.prototype.hasOwnProperty.call(i, S) ? i[S] : void 0;
        return [S, (H === "" || H === void 0) && t[z] !== void 0 ? t[z] : S === "event" && (H === "" || H === void 0) ? t[0] : H];
      })));
    }
    const o = w?.[e];
    if (typeof o == "function")
      return o(Object.keys(i).length > 0 ? i : t[0]);
    const [r, n] = String(e).split("."), h = typeof globalThis < "u" ? globalThis[r]?.[n] : void 0;
    if (typeof h == "function") return h(...Object.values(i));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, G = ce(/* @__PURE__ */ new Map()), st = K((e, i, t, a) => {
    const o = G.current.get(e);
    if (i === "exhaust" && o?.promise) return o.promise;
    i === "takeLatest" && o?.controller?.abort();
    const r = new AbortController(), n = () => Promise.resolve().then(() => t(r.signal)), h = i === "queue" && o?.promise ? o.promise.catch(() => {
    }).then(n) : n();
    return G.current.set(e, { controller: r, promise: h }), h.catch((p) => {
      p?.name !== "AbortError" && console.error(a, p);
    }).finally(() => {
      G.current.get(e)?.promise === h && G.current.delete(e);
    }), h;
  }, []);
  U(() => () => {
    for (const e of G.current.values()) e.controller?.abort();
    G.current.clear();
  }, []);
  const Pe = ce(!1);
  return U(() => {
    Pe.current || (Pe.current = !0), st("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (e) => _e({}), "Module input lifecycle failed:");
  }, [x, L, he]), /* @__PURE__ */ f("div", { ref: q, className: "rudra-module-wrapper", children: l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
    "      ",
    /* @__PURE__ */ s($, { id: "root", className: "rs-access", children: [
      "      ",
      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
        "      ",
        /* @__PURE__ */ s($, { id: "panel", className: "rs-access-grid", children: [
          "      ",
          l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
            "      ",
            /* @__PURE__ */ s($, { id: "story", className: "rs-access-story", children: [
              "      ",
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ s($, { id: "story_badge", "aria-label": "College mathematics proof of concept", className: "rs-badge-row", children: [
                  "      ",
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(_, { icon: "GraduationCap", id: "story_badge_icon", size: 14, color: "#b8f7e7", strokeWidth: 2 })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(k, { id: "story_badge_label", className: "rs-badge-label", customColor: "#eafff8", as: "span", content: "College mathematics · POC" })
                  ] })
                ] })
              ] }),
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "title", className: "rs-access-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learn mathematics with context, not shortcuts." : e)(v?.i18n?.title), customColor: "#eafff8" })
              ] }),
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : e)(v?.i18n?.subtitle) })
              ] }),
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(V, { id: "trust", title: "SQL is the authority", variant: "neutral", appearance: "outlined", live: "off" })
              ] })
            ] })
          ] }),
          l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
            "      ",
            /* @__PURE__ */ s($, { id: "form_area", className: "rs-access-form", children: [
              "      ",
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "signin_eyebrow", className: "rs-signin-eyebrow", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "WELCOME TO RUDRA SCHOLAR" : e)(v?.i18n?.welcome) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready to think through the next problem?" : e)(v?.i18n?.signInTitle) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "signin_intro", className: "rs-signin-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : e)(v?.i18n?.signInIntro) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(de, { id: "google", leftIcon: /* @__PURE__ */ s(d, { children: [
                  "      ",
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(_, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", size: 20, strokeWidth: 1.2 })
                  ] })
                ] }), label: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in with Google" : e)(v?.i18n?.google), theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se), variant: "outline", onAction: (...e) => Z("requestGoogleSignIn", {}, e), ariaLabel: "Sign in with Google", fullWidth: !0, id: "scholar-google-signin", size: "lg", rightIcon: !1 })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "notice", className: "rs-signin-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : e)(v?.i18n?.signInHelp) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(k, { id: "heading", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Create your Scholar account" : e)(v?.i18n?.profile) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ s(nt, { id: "profile_form", className: "rs-form", onSubmit: (...e) => Z("handleRegistrationSubmit", {}, e), initialValues: /* @__PURE__ */ ((e) => e === void 0 ? { privacyAccepted: !1, requestedRole: "student", termsAccepted: !1, verifiedEmail: "" } : e)(fe), children: [
                  "      ",
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(k, { id: "registration_progress", className: "rs-registration-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1 of 3 · Profile" : e)(Re) })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(J)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "email", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Mail", id: "email_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "verifiedEmail", size: "md", type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((e) => e === void 0 ? "Signed-in Google account" : e)(ge?.email), disabled: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(J)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "first_name", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "UserRound", id: "first_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "First name", required: !0, name: "firstName", size: "md" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(J)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "last_name", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "UserRound", id: "last_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "lastName", size: "md", type: "text", label: "Last name", required: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(J)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(ze, { id: "role", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }], required: !0, onChangeValue: (...e) => Z("setRequestedRole", {}, e), name: "requestedRole" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(Se)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionInvite", size: "md", type: "text", label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "qualification", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "GraduationCap", id: "qualification_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), placeholder: "For example, M.Sc. Mathematics", name: "qualification", size: "md", type: "text", label: "Highest relevant qualification", required: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(re)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(V, { id: "kyc_intro", appearance: "outlined", live: "off", title: "Role verification required", variant: "neutral" })
                  ] }),
                  l(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "kyc", placeholder: "Secure upload reference — do not paste document data", name: "kycReference", size: "md", type: "text", label: "Legacy verification field disabled", required: !1 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "expertise", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Sigma", id: "expertise_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), placeholder: "For example, Linear Algebra, Calculus", name: "subjectExpertise", size: "md", type: "text", label: "Mathematics expertise", required: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(at, { id: "professional_statement", autoResize: !0, placeholder: "Briefly describe your teaching experience.", name: "professionalStatement", size: "md", label: "Short professional statement", maxRows: 6, minRows: 3, required: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "educator_institution", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "School", id: "educator_institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionName", size: "md", type: "text", label: "College or university", required: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "evidence", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "KYC verification evidence", required: !0, placeholder: "Use an institution email or public staff-profile URL", name: "kycEvidence", size: "md" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_legal_name", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Landmark", id: "institution_legal_name_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "institutionLegalName", size: "md", type: "text", label: "Institution legal name", required: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_display_name", type: "text", label: "Display name", required: !0, name: "institutionDisplayName", size: "md" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(ze, { id: "institution_type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }], required: !0, name: "institutionType", label: "Institution type" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_website", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Globe", id: "institution_website_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "url", label: "Official website", required: !0, placeholder: "https://example.edu", name: "institutionWebsite", size: "md" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_domain", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "AtSign", id: "institution_domain_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "Institutional email domain", required: !0, placeholder: "example.edu", name: "institutionEmailDomain", size: "md" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(j)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "institution_contact", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionContact", size: "md", type: "text", label: "Administrative contact", required: !0 })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(re)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(b, { id: "country", icon: /* @__PURE__ */ s(d, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(_, { icon: "MapPin", id: "country_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "country", size: "md", type: "text", label: "Country", required: !0 })
                  ] }),
                  l(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(le, { id: "age_confirmed", name: "ageConfirmed", label: "I confirm I am 18 or older.", required: !1, colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators." })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(le, { id: "terms", name: "termsAccepted", label: "I accept the Terms of Service.", required: !0, colorScheme: "emerald", description: "Required before an account can be created." })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie)) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ f(le, { id: "privacy", name: "privacyAccepted", label: "I have read and accept the Privacy Notice.", required: !0, colorScheme: "emerald", description: "Required before an account can be created." })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                    "      ",
                    /* @__PURE__ */ s($, { id: "registration_actions", className: "rs-registration-actions", children: [
                      "      ",
                      l(pe) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(de, { id: "registration_back", leftIcon: /* @__PURE__ */ s(d, { children: [
                          "      ",
                          l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                            "      ",
                            /* @__PURE__ */ f(_, { icon: "ArrowLeft", id: "registration_back_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), type: "button", theme: "auto", fullWidth: !0, id: "scholar-registration-back", size: "lg", label: "Back", variant: "secondary", onAction: (...e) => Z("goBackRegistrationStep", {}, e), rightIcon: !1, additionalAttributes: {} })
                      ] }),
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(d, { children: [
                        "      ",
                        /* @__PURE__ */ f(de, { id: "submit", rightIcon: !1, id: "scholar-registration-primary", type: "submit", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next" : e)(we), theme: "auto", fullWidth: !0, size: "lg", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se), variant: "primary", leftIcon: !1 })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              l(me) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(V, { id: "message", title: "Scholar access", variant: "neutral", appearance: "outlined", live: "polite" })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ye)) && /* @__PURE__ */ s(d, { children: [
                "      ",
                /* @__PURE__ */ f(V, { id: "pending_notice", variant: "warning", appearance: "outlined", live: "polite", title: "Professor verification pending" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ft as default
};
