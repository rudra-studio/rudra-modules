import { jsxs as r, jsx as h, Fragment as s } from "react/jsx-runtime";
import ie, { useState as w, useEffect as G, useRef as re, useCallback as Q } from "react";
import * as K from "lucide-react";
import { Form as ot, Input as S, Select as ye, Textarea as st, Checkbox as oe } from "@rudra-studio/rudra-form";
import { Box as D } from "@rudra-studio/rudra-layout";
import { Typography as q, Alert as Y, Button as se } from "@rudra-studio/rudra-core";
const we = (u) => String(u || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), nt = (u) => {
  let _ = u;
  for (; _ && typeof _ == "object" && "type" in _ && "value" in _; )
    _ = _.value;
  return _;
};
function v({ icon: u, size: _, color: F, strokeWidth: Z, className: M = "", style: O, ...N }) {
  const p = nt(u), [P, W] = w(null), ne = p && typeof p == "object" ? JSON.stringify(p) : String(p || "");
  G(() => {
    const C = new AbortController();
    let L = "", j = "";
    if (W(null), typeof p == "string") {
      const b = p.trim();
      if (K[b]) return () => C.abort();
      b.startsWith("<svg") ? j = b : (/^https?:\/\//.test(b) || b.startsWith("/") || b.startsWith("data:image/svg")) && (L = b);
    } else p && typeof p == "object" && (p.iconType === "svg" && p.svgContent ? j = p.svgContent : p.iconType === "url" && p.url && (L = p.url));
    return j ? W(we(j)) : L && fetch(L, { signal: C.signal }).then((b) => {
      if (!b.ok) throw new Error("Icon request failed (" + b.status + ")");
      return b.text();
    }).then((b) => {
      b.trim().startsWith("<svg") && W(we(b));
    }).catch((b) => {
      b.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", b);
    }), () => C.abort();
  }, [ne]);
  const E = p && typeof p == "object" ? p.props || {} : {}, k = { ...E };
  delete k.size, delete k.color, delete k.strokeWidth;
  const I = _ ?? E.size ?? 24, A = F ?? E.color ?? "currentColor", g = Z ?? E.strokeWidth ?? 1.5;
  let d = "";
  if (typeof p == "string" && K[p] ? d = p : p && typeof p == "object" && p.name && (!p.iconType || p.iconType === "lucide") && (d = p.name), d) {
    const C = K[d];
    if (C)
      return ie.createElement(C, {
        size: I,
        color: A,
        strokeWidth: g,
        className: M,
        style: O,
        ...k,
        ...N
      });
  }
  if (P)
    return ie.createElement("span", {
      ...k,
      ...N,
      className: ("rudra-universal-icon " + M).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: I,
        height: I,
        color: A,
        ...O
      },
      dangerouslySetInnerHTML: {
        __html: P.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + g + '">')
      }
    });
  const X = K.LayoutGrid;
  return ie.createElement(X, {
    size: I,
    color: A,
    strokeWidth: g,
    className: M,
    style: O,
    ...k,
    ...N
  });
}
function ht(u) {
  const _ = {}, F = u.serverData || u.serverState || {}, Z = u.sharedState || {}, M = u.applicationState || F.applicationState || {}, O = u.pageState || F.pageState || {}, N = u.pageData || F.pageData || {}, p = {
    ...u.runtime?.functions || {},
    ...u.runtime?.actions || {},
    ...u.functions || {},
    ...u.actions || {}
  }, P = u.$theme ?? u.theme ?? u.data?.$theme ?? u.runtime?.data?.$theme ?? u.runtime?.theme, W = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [ne, E] = w(() => P ?? W());
  G(() => {
    P != null && E(P);
  }, [P]), G(() => {
    if (P != null || typeof document > "u") return;
    const e = document.documentElement, i = (n) => E(n?.detail?.theme ?? W()), t = new MutationObserver(i);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [P]);
  const k = re(null), [I, A] = w("lg");
  G(() => {
    if (!k.current) return;
    const e = new ResizeObserver((i) => {
      for (let t of i) {
        const n = t.contentRect.width;
        n < 768 ? A("sm") : n < 1024 ? A("md") : A("lg");
      }
    });
    return e.observe(k.current), () => e.disconnect();
  }, []);
  const g = Q((e) => typeof e != "object" || e === null ? e : I === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : I === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [I]), d = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, X = u.profileServiceEnabled !== void 0 ? u.profileServiceEnabled : u.data?.profileServiceEnabled !== void 0 ? u.data.profileServiceEnabled : !1, C = u.locale !== void 0 ? u.locale : u.data?.locale !== void 0 ? u.data.locale : "en", L = u.authenticated !== void 0 ? u.authenticated : u.data?.authenticated !== void 0 ? u.data.authenticated : !1, j = u.mode !== void 0 ? u.mode : u.data?.mode !== void 0 ? u.data.mode : "login", b = u.authProvider !== void 0 ? u.authProvider : u.data?.authProvider !== void 0 ? u.data.authProvider : "firebase-google", be = u.returnPath !== void 0 ? u.returnPath : u.data?.returnPath !== void 0 ? u.data.returnPath : "/learn", ae = u.profile !== void 0 ? u.profile : u.data?.profile !== void 0 ? u.data.profile : {}, z = { profileServiceEnabled: X, locale: C, authenticated: L, mode: j, authProvider: b, returnPath: be, profile: ae }, [_e, Re] = w(() => structuredClone(!1)), [Se, ve] = w(() => structuredClone(!0)), [ze, Pe] = w(() => structuredClone("login")), [ke, xe] = w(() => structuredClone("Next")), [qe, Ie] = w(() => structuredClone(!1)), [ce, Ce] = w(() => structuredClone("")), [de, Fe] = w(() => structuredClone("Step 1 of 3 · Profile")), [Ee, Ae] = w(() => structuredClone({ requestedRole: "student", verifiedEmail: "" })), [Le, je] = w(() => structuredClone(1)), [ee, Me] = w(() => structuredClone(!1)), [le, Oe] = w(() => structuredClone(!1)), [B, Ne] = w(() => structuredClone(!0)), [We, Be] = w(() => structuredClone(!0)), [Te, De] = w(() => structuredClone(!1)), [ue, Ge] = w(() => structuredClone({})), [Ve, $e] = w(() => structuredClone("student")), [he, Ue] = w(() => structuredClone(!1)), [V, Je] = w(() => structuredClone(!1)), [Qe, Ze] = w(() => structuredClone(!1)), m = { showEducatorFields: _e, showRegistrationStep1: Se, accessMode: ze, registrationPrimaryLabel: ke, showVerifiedRoleFields: qe, message: ce, registrationProgress: de, registrationInitialValues: Ee, registrationStep: Le, busy: ee, showPending: le, showLogin: B, showStudentFields: We, showInstitutionFields: Te, authenticatedProfile: ue, requestedRole: Ve, showRegistrationBack: he, showRegistration: V, showRegistrationStep3: Qe }, l = Q((e, i) => {
    switch (e) {
      case "showEducatorFields": {
        const t = typeof i == "function" ? i(m.showEducatorFields) : i;
        return m.showEducatorFields = t, Re(t), t;
      }
      case "showRegistrationStep1": {
        const t = typeof i == "function" ? i(m.showRegistrationStep1) : i;
        return m.showRegistrationStep1 = t, ve(t), t;
      }
      case "accessMode": {
        const t = typeof i == "function" ? i(m.accessMode) : i;
        return m.accessMode = t, Pe(t), t;
      }
      case "registrationPrimaryLabel": {
        const t = typeof i == "function" ? i(m.registrationPrimaryLabel) : i;
        return m.registrationPrimaryLabel = t, xe(t), t;
      }
      case "showVerifiedRoleFields": {
        const t = typeof i == "function" ? i(m.showVerifiedRoleFields) : i;
        return m.showVerifiedRoleFields = t, Ie(t), t;
      }
      case "message": {
        const t = typeof i == "function" ? i(m.message) : i;
        return m.message = t, Ce(t), t;
      }
      case "registrationProgress": {
        const t = typeof i == "function" ? i(m.registrationProgress) : i;
        return m.registrationProgress = t, Fe(t), t;
      }
      case "registrationInitialValues": {
        const t = typeof i == "function" ? i(m.registrationInitialValues) : i;
        return m.registrationInitialValues = t, Ae(t), t;
      }
      case "registrationStep": {
        const t = typeof i == "function" ? i(m.registrationStep) : i;
        return m.registrationStep = t, je(t), t;
      }
      case "busy": {
        const t = typeof i == "function" ? i(m.busy) : i;
        return m.busy = t, Me(t), t;
      }
      case "showPending": {
        const t = typeof i == "function" ? i(m.showPending) : i;
        return m.showPending = t, Oe(t), t;
      }
      case "showLogin": {
        const t = typeof i == "function" ? i(m.showLogin) : i;
        return m.showLogin = t, Ne(t), t;
      }
      case "showStudentFields": {
        const t = typeof i == "function" ? i(m.showStudentFields) : i;
        return m.showStudentFields = t, Be(t), t;
      }
      case "showInstitutionFields": {
        const t = typeof i == "function" ? i(m.showInstitutionFields) : i;
        return m.showInstitutionFields = t, De(t), t;
      }
      case "authenticatedProfile": {
        const t = typeof i == "function" ? i(m.authenticatedProfile) : i;
        return m.authenticatedProfile = t, Ge(t), t;
      }
      case "requestedRole": {
        const t = typeof i == "function" ? i(m.requestedRole) : i;
        return m.requestedRole = t, $e(t), t;
      }
      case "showRegistrationBack": {
        const t = typeof i == "function" ? i(m.showRegistrationBack) : i;
        return m.showRegistrationBack = t, Ue(t), t;
      }
      case "showRegistration": {
        const t = typeof i == "function" ? i(m.showRegistration) : i;
        return m.showRegistration = t, Je(t), t;
      }
      case "showRegistrationStep3": {
        const t = typeof i == "function" ? i(m.showRegistrationStep3) : i;
        return m.showRegistrationStep3 = t, Ze(t), t;
      }
      default:
        return i;
    }
  }, [m]);
  Q((e, i) => {
    const [t, ...n] = String(e || "").split(".");
    if (!t) return i;
    if (n.length === 0) return l(t, i);
    const a = (o) => {
      const c = Array.isArray(o) ? [...o] : { ...o || {} };
      let f = c;
      return n.forEach((y, R) => {
        R === n.length - 1 ? f[y] = i : (f[y] = Array.isArray(f[y]) ? [...f[y]] : { ...f[y] || {} }, f = f[y]);
      }), c;
    };
    switch (t) {
      case "showEducatorFields":
        return l("showEducatorFields", a), i;
      case "showRegistrationStep1":
        return l("showRegistrationStep1", a), i;
      case "accessMode":
        return l("accessMode", a), i;
      case "registrationPrimaryLabel":
        return l("registrationPrimaryLabel", a), i;
      case "showVerifiedRoleFields":
        return l("showVerifiedRoleFields", a), i;
      case "message":
        return l("message", a), i;
      case "registrationProgress":
        return l("registrationProgress", a), i;
      case "registrationInitialValues":
        return l("registrationInitialValues", a), i;
      case "registrationStep":
        return l("registrationStep", a), i;
      case "busy":
        return l("busy", a), i;
      case "showPending":
        return l("showPending", a), i;
      case "showLogin":
        return l("showLogin", a), i;
      case "showStudentFields":
        return l("showStudentFields", a), i;
      case "showInstitutionFields":
        return l("showInstitutionFields", a), i;
      case "authenticatedProfile":
        return l("authenticatedProfile", a), i;
      case "requestedRole":
        return l("requestedRole", a), i;
      case "showRegistrationBack":
        return l("showRegistrationBack", a), i;
      case "showRegistration":
        return l("showRegistration", a), i;
      case "showRegistrationStep3":
        return l("showRegistrationStep3", a), i;
      default:
        return i;
    }
  }, [l]);
  const He = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, te = (e, i, t) => {
    if (!i || typeof i != "object") return "";
    const n = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], a = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (n.length && !n.includes(a) && !(a === "integer" && n.includes("number"))) return t + " must be " + n.join(" or ") + ".";
    if (i.enum && !i.enum.some((o) => JSON.stringify(o) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const o of i.required || []) if (!Object.prototype.hasOwnProperty.call(e, o)) return t + "." + o + " is required.";
      for (const [o, c] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(e, o)) {
        const f = te(e[o], c, t + "." + o);
        if (f) return f;
      }
    }
    if (Array.isArray(e) && i.items) for (let o = 0; o < e.length; o++) {
      const c = te(e[o], i.items, t + "[" + o + "]");
      if (c) return c;
    }
    return "";
  }, H = Q(async (e, i, t = !1) => {
    const n = He[e];
    if (!n) throw new Error("Module output '" + e + "' is not declared.");
    const a = te(i, n, "output." + e);
    if (a) throw new Error(a);
    const o = u.onOutput || u.onModuleOutput || u.runtime?.onOutput;
    if (typeof o != "function") return i;
    const c = o(e, i, { moduleId: u.moduleId, awaitHandlers: t });
    return t ? await c : i;
  }, [u.onOutput, u.onModuleOutput, u.runtime?.onOutput, u.moduleId]), me = (e, i) => {
    const t = String(i || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return t.reduce((n, a) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(a in n) ? n.get(a) : n[a];
      }, e);
  }, $ = (e, i) => {
    if (Array.isArray(e)) return e.map((n) => $(n, i));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([n, a]) => [$(n, i), $(a, i)]));
    if (typeof e != "string") return e;
    const t = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? me(i, t[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, a) => {
      const o = me(i, a);
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    });
  };
  async function Ke(e = {}) {
    const i = e || {}, t = {}, n = {};
    l("busy", !0), l("message", ""), await U("RudraAuth.signIn", { provider: z.authProvider, returnPath: z.returnPath }, []), H("googleSignInRequested", { returnPath: z.returnPath }, !1).catch((a) => console.error("Module output delivery failed", a));
    {
      i.event;
      const a = await (async () => {
        const o = n.google_auth || {}, c = o.user || o.currentUser || o.profile || o;
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
      n.normalize_auth = a, t.customCodeResult = a;
    }
    l("authenticatedProfile", n.normalize_auth), l("accessMode", "resolving");
    {
      const o = $({}, { args: i, inputs: z, state: m, sharedState: Z, applicationState: M, pageState: O, pageData: N, serverData: F, vars: t, stepResults: n }) || {};
      delete o.userIdentity;
      const c = [void 0], f = u.executeDatabaseQuery || u.runtime?.executeDatabaseQuery;
      let y;
      if (typeof f == "function")
        y = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: o, signal: i.signal });
      else {
        const R = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: o }), signal: i.signal }), x = await R.json().catch(() => ({}));
        if (!R.ok || x.success === !1) throw new Error(x.error || "Database query failed (" + R.status + ")");
        y = x.data;
      }
      n.resolve_access = y, t.queryResult = y;
    }
    {
      i.event;
      const a = await (async () => {
        const o = n.resolve_access, c = Array.isArray(o) ? o[0] : o, f = c && c.result ? c.result : c, y = !!(f && f.isRegistered === !0), R = y ? f : { ...m.authenticatedProfile, isRegistered: !1 };
        return {
          isRegistered: y,
          profile: R,
          redirectPath: f && f.redirectPath || z.returnPath || "/learn"
        };
      })();
      n.normalize_access = a, t.customCodeResult = a;
    }
    return n.normalize_access.isRegistered ? (l("authenticatedProfile", n.normalize_access.profile), l("busy", !1), H("navigationRequested", { path: n.normalize_access.redirectPath }, !1).catch((a) => console.error("Module output delivery failed", a)), n.normalize_access) : (l("authenticatedProfile", n.normalize_access.profile), l("accessMode", "registration"), l("busy", !1), n.normalize_access);
  }
  async function ge(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const n = await (async () => {
        const a = z.profile && typeof z.profile == "object" ? z.profile : {};
        let o = ["login", "registration", "resolving"].includes(z.mode) ? z.mode : "login";
        z.authenticated === !0 && a.isRegistered === !1 && (o = "registration");
        const c = o === "resolving" && a.verificationStatus === "pending";
        return {
          mode: o,
          profile: a,
          showLogin: o === "login",
          showRegistration: o === "registration",
          showPending: c
        };
      })();
      t.init_context = n;
    }
    return l("authenticatedProfile", t.init_context.profile), l("accessMode", t.init_context.mode), l("showLogin", t.init_context.showLogin), l("showRegistration", t.init_context.showRegistration), l("showPending", t.init_context.showPending), t.init_context;
  }
  async function Ye(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const n = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(m.registrationStep || 1))) === 3 }))();
      t.wizard_decide = n;
    }
    if (t.wizard_decide.isFinal)
      return await fe({ values: i.values }), t.wizard_submit;
    {
      i.event;
      const n = await (async () => {
        const a = Math.max(1, Math.min(3, Number(m.registrationStep || 1))), o = String(i.values && i.values.requestedRole || m.requestedRole || "student"), c = Math.min(3, a + 1);
        return {
          step: c,
          role: o,
          showStep1: c === 1,
          showStudent: c === 2 && o === "student",
          showEducator: c === 2 && o === "educator",
          showInstitution: c === 2 && o === "institution_admin",
          showVerified: c === 2 && (o === "educator" || o === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_advance = n;
    }
    return l("requestedRole", t.wizard_advance.role), l("registrationStep", t.wizard_advance.step), l("registrationProgress", t.wizard_advance.progress), l("registrationPrimaryLabel", t.wizard_advance.primaryLabel), l("showRegistrationBack", t.wizard_advance.showBack), l("showRegistrationStep1", t.wizard_advance.showStep1), l("showStudentFields", t.wizard_advance.showStudent), l("showEducatorFields", t.wizard_advance.showEducator), l("showInstitutionFields", t.wizard_advance.showInstitution), l("showVerifiedRoleFields", t.wizard_advance.showVerified), l("showRegistrationStep3", t.wizard_advance.showStep3), t.wizard_advance;
  }
  async function Xe(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const n = await (async () => {
        const a = Math.max(1, Math.min(3, Number(m.registrationStep || 1))), o = String(m.requestedRole || "student"), c = Math.max(1, a - 1);
        return {
          step: c,
          role: o,
          showStep1: c === 1,
          showStudent: c === 2 && o === "student",
          showEducator: c === 2 && o === "educator",
          showInstitution: c === 2 && o === "institution_admin",
          showVerified: c === 2 && (o === "educator" || o === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_back_prepare = n;
    }
    return l("registrationStep", t.wizard_back_prepare.step), l("registrationProgress", t.wizard_back_prepare.progress), l("registrationPrimaryLabel", t.wizard_back_prepare.primaryLabel), l("showRegistrationBack", t.wizard_back_prepare.showBack), l("showRegistrationStep1", t.wizard_back_prepare.showStep1), l("showStudentFields", t.wizard_back_prepare.showStudent), l("showEducatorFields", t.wizard_back_prepare.showEducator), l("showInstitutionFields", t.wizard_back_prepare.showInstitution), l("showVerifiedRoleFields", t.wizard_back_prepare.showVerified), l("showRegistrationStep3", t.wizard_back_prepare.showStep3), t.wizard_back_prepare;
  }
  async function et(e = {}) {
    const i = e || {};
    return l("requestedRole", i.value), i.value;
  }
  async function fe(e = {}) {
    const i = e || {}, t = {}, n = {};
    l("busy", !0), l("message", "");
    {
      const o = $({ profile: "{{ args.values }}" }, { args: i, inputs: z, state: m, sharedState: Z, applicationState: M, pageState: O, pageData: N, serverData: F, vars: t, stepResults: n }) || {};
      delete o.userIdentity, delete o.verifiedEmail, delete o.emailVerified, delete o.providerId;
      const c = [void 0, void 0, void 0, void 0, o.profile], f = u.executeDatabaseQuery || u.runtime?.executeDatabaseQuery;
      let y;
      if (typeof f == "function")
        y = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: o, signal: i.signal });
      else {
        const R = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: o }), signal: i.signal }), x = await R.json().catch(() => ({}));
        if (!R.ok || x.success === !1) throw new Error(x.error || "Database query failed (" + R.status + ")");
        y = x.data;
      }
      n.reg_call = y, t.queryResult = y;
    }
    {
      i.event;
      const a = await (async () => {
        const o = n.reg_call, c = Array.isArray(o) ? o[0] : o, f = c && c.result ? c.result : c;
        if (!f || f.isRegistered !== !0) throw new Error(f && f.message || "Registration did not complete.");
        return f;
      })();
      n.reg_normalize = a, t.customCodeResult = a;
    }
    return H("registrationCompleted", { isRegistered: n.reg_normalize.isRegistered, onboardingStatus: n.reg_normalize.onboardingStatus, redirectPath: n.reg_normalize.redirectPath, requestedRole: n.reg_normalize.requestedRole, roles: n.reg_normalize.roles, verificationStatus: n.reg_normalize.verificationStatus }, !1).catch((a) => console.error("Module output delivery failed", a)), H("navigationRequested", { path: n.reg_normalize.redirectPath }, !1).catch((a) => console.error("Module output delivery failed", a)), l("authenticatedProfile", n.reg_normalize), l("accessMode", "resolving"), l("message", n.reg_normalize.message), l("busy", !1), n.reg_normalize;
  }
  const tt = {
    requestGoogleSignIn: Ke,
    initializeAccessFlow: ge,
    handleRegistrationSubmit: Ye,
    goBackRegistrationStep: Xe,
    setRequestedRole: et,
    submitRegistration: fe
  }, it = {
    requestGoogleSignIn: [],
    initializeAccessFlow: [],
    handleRegistrationSubmit: ["values"],
    goBackRegistrationStep: [],
    setRequestedRole: ["value"],
    submitRegistration: ["values"]
  }, U = (e, i = {}, t = []) => {
    const n = tt[e];
    if (n) {
      const y = it[e] || [];
      return n(Object.fromEntries(y.map((R, x) => {
        const J = Object.prototype.hasOwnProperty.call(i, R) ? i[R] : void 0;
        return [R, (J === "" || J === void 0) && t[x] !== void 0 ? t[x] : R === "event" && (J === "" || J === void 0) ? t[0] : J];
      })));
    }
    const a = p?.[e];
    if (typeof a == "function")
      return a(Object.keys(i).length > 0 ? i : t[0]);
    const [o, c] = String(e).split("."), f = typeof globalThis < "u" ? globalThis[o]?.[c] : void 0;
    if (typeof f == "function") return f(...Object.values(i));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, T = re(/* @__PURE__ */ new Map()), rt = Q((e, i, t, n) => {
    const a = T.current.get(e);
    if (i === "exhaust" && a?.promise) return a.promise;
    i === "takeLatest" && a?.controller?.abort();
    const o = new AbortController(), c = () => Promise.resolve().then(() => t(o.signal)), f = i === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(c) : c();
    return T.current.set(e, { controller: o, promise: f }), f.catch((y) => {
      y?.name !== "AbortError" && console.error(n, y);
    }).finally(() => {
      T.current.get(e)?.promise === f && T.current.delete(e);
    }), f;
  }, []);
  G(() => () => {
    for (const e of T.current.values()) e.controller?.abort();
    T.current.clear();
  }, []);
  const pe = re(!1);
  return G(() => {
    pe.current || (pe.current = !0), rt("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (e) => ge({}), "Module input lifecycle failed:");
  }, [L, j, ae]), /* @__PURE__ */ r("div", { ref: k, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ h("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-layout@1.0.26/components/Box/styles.css", precedence: "rudra-library" }),
    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
      "      ",
      /* @__PURE__ */ r(D, { id: "root", className: "rs-access", children: [
        "      ",
        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
          "      ",
          /* @__PURE__ */ r(D, { id: "panel", className: "rs-access-grid", children: [
            "      ",
            d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
              "      ",
              /* @__PURE__ */ r(D, { id: "story", className: "rs-access-story", children: [
                "      ",
                d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ r(D, { id: "story_badge", "aria-label": "College mathematics proof of concept", className: "rs-badge-row", children: [
                    "      ",
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(v, { icon: "GraduationCap", id: "story_badge_icon", size: 14, color: "#b8f7e7", strokeWidth: 2 })
                    ] }),
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(q, { id: "story_badge_label", className: "rs-badge-label", customColor: "#eafff8", as: "span", content: "College mathematics · POC" })
                    ] })
                  ] })
                ] }),
                d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(q, { id: "title", className: "rs-access-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learn mathematics with context, not shortcuts." : e)(_?.i18n?.title), customColor: "#eafff8" })
                ] }),
                d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(q, { id: "subtitle", className: "rs-muted", content: /* @__PURE__ */ ((e) => e === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : e)(_?.i18n?.subtitle), as: "p" })
                ] }),
                d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(Y, { id: "trust", appearance: "outlined", live: "off", title: "SQL is the authority", variant: "neutral" })
                ] })
              ] })
            ] }),
            d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
              "      ",
              /* @__PURE__ */ r(D, { id: "form_area", className: "rs-access-form", children: [
                "      ",
                d(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(q, { id: "signin_eyebrow", className: "rs-signin-eyebrow", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "WELCOME TO RUDRA SCHOLAR" : e)(_?.i18n?.welcome) })
                ] }),
                d(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(q, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready to think through the next problem?" : e)(_?.i18n?.signInTitle) })
                ] }),
                d(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(q, { id: "signin_intro", className: "rs-signin-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : e)(_?.i18n?.signInIntro) })
                ] }),
                d(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(se, { id: "google", leftIcon: /* @__PURE__ */ r(s, { children: [
                    "      ",
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(v, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", strokeWidth: 1.2, size: 20 })
                    ] })
                  ] }), label: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in with Google" : e)(_?.i18n?.google), onAction: (...e) => U("requestGoogleSignIn", {}, e), id: "scholar-google-signin", theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee), variant: "outline", ariaLabel: "Sign in with Google", fullWidth: !0, rightIcon: !1, size: "lg" })
                ] }),
                d(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(q, { id: "notice", className: "rs-signin-note", content: /* @__PURE__ */ ((e) => e === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : e)(_?.i18n?.signInHelp), as: "p" })
                ] }),
                d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(q, { id: "heading", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Create your Scholar account" : e)(_?.i18n?.profile) })
                ] }),
                d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ r(ot, { id: "profile_form", className: "rs-form", onSubmit: (...e) => U("submitRegistration", {}, e), initialValues: { requestedRole: "student" }, children: [
                    "      ",
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(q, { id: "registration_progress", className: "rs-registration-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1 of 3 · Profile" : e)(de) })
                    ] }),
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "email", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "Mail", id: "email_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), name: "verifiedEmail", size: "md", type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((e) => e === void 0 ? "Signed-in Google account" : e)(ue?.email), disabled: !0 })
                    ] }),
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "first_name", name: "firstName", size: "md", type: "text", label: "First name", required: !0 })
                    ] }),
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "last_name", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "UserRound", id: "last_name_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), name: "lastName", size: "md", type: "text", label: "Last name", required: !0 })
                    ] }),
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(ye, { id: "role", name: "requestedRole", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }], required: !0, onChangeValue: (...e) => U("setRequestedRole", {}, e) })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "qualification", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "GraduationCap", id: "qualification_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), required: !0, placeholder: "For example, M.Sc. Mathematics", name: "qualification", size: "md", type: "text", label: "Highest relevant qualification" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(Y, { id: "kyc_intro", live: "off", title: "Role verification required", variant: "neutral", appearance: "outlined" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "institution", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), type: "text", label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code", name: "institutionInvite", size: "md" })
                    ] }),
                    d(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "kyc", required: !1, placeholder: "Secure upload reference — do not paste document data", name: "kycReference", size: "md", type: "text", label: "Legacy verification field disabled" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "expertise", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "Sigma", id: "expertise_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), placeholder: "For example, Linear Algebra, Calculus", name: "subjectExpertise", size: "md", type: "text", label: "Mathematics expertise", required: !0 })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(st, { id: "professional_statement", label: "Short professional statement", maxRows: 6, minRows: 3, required: !0, autoResize: !0, placeholder: "Briefly describe your teaching experience.", name: "professionalStatement", size: "md" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "educator_institution", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "School", id: "educator_institution_field_icon", strokeWidth: 1.8, size: 18 })
                        ] })
                      ] }), type: "text", label: "College or university", required: !0, name: "institutionName", size: "md" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "evidence", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), label: "KYC verification evidence", required: !0, placeholder: "Use an institution email or public staff-profile URL", name: "kycEvidence", size: "md", type: "text" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "institution_legal_name", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "Landmark", id: "institution_legal_name_field_icon", strokeWidth: 1.8, size: 18 })
                        ] })
                      ] }), type: "text", label: "Institution legal name", required: !0, name: "institutionLegalName", size: "md" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "institution_display_name", required: !0, name: "institutionDisplayName", size: "md", type: "text", label: "Display name" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(ye, { id: "institution_type", label: "Institution type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }], required: !0, name: "institutionType" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "institution_website", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "Globe", id: "institution_website_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), label: "Official website", required: !0, placeholder: "https://example.edu", name: "institutionWebsite", size: "md", type: "url" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "institution_domain", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "AtSign", id: "institution_domain_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), size: "md", type: "text", label: "Institutional email domain", required: !0, placeholder: "example.edu", name: "institutionEmailDomain" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "institution_contact", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), label: "Administrative contact", required: !0, name: "institutionContact", size: "md", type: "text" })
                    ] }),
                    d(void 0) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(S, { id: "country", icon: /* @__PURE__ */ r(s, { children: [
                        "      ",
                        d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(v, { icon: "MapPin", id: "country_field_icon", size: 18, strokeWidth: 1.8 })
                        ] })
                      ] }), name: "country", size: "md", type: "text", label: "Country", required: !0 })
                    ] }),
                    d(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(oe, { id: "age_confirmed", name: "ageConfirmed", label: "I confirm I am 18 or older.", required: !1, colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators." })
                    ] }),
                    d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(oe, { id: "terms", name: "termsAccepted", label: "I accept the Terms of Service.", required: !0, colorScheme: "emerald", description: "Required before an account can be created." })
                    ] }),
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(se, { id: "submit", label: "Continue", theme: "auto", leftIcon: !1, fullWidth: !0, rightIcon: !1, size: "lg", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee), variant: "primary" })
                    ] }),
                    d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ h(oe, { id: "privacy", description: "Required before an account can be created.", name: "privacyAccepted", label: "I have read and accept the Privacy Notice.", required: !0, colorScheme: "emerald" })
                    ] }),
                    d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                      "      ",
                      /* @__PURE__ */ r(D, { id: "registration_actions", className: "rs-registration-actions", children: [
                        "      ",
                        d(he) && /* @__PURE__ */ r(s, { children: [
                          "      ",
                          /* @__PURE__ */ h(se, { id: "registration_back", leftIcon: /* @__PURE__ */ r(s, { children: [
                            "      ",
                            d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(s, { children: [
                              "      ",
                              /* @__PURE__ */ h(v, { icon: "ArrowLeft", id: "registration_back_icon", size: 18, strokeWidth: 2 })
                            ] })
                          ] }), id: "scholar-registration-back", type: "button", theme: "auto", variant: "secondary", onAction: (...e) => U("goBackRegistrationStep", {}, e), rightIcon: !1, additionalAttributes: {}, size: "lg", label: "Back", fullWidth: !0 })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                d(ce) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(Y, { id: "message", variant: "neutral", appearance: "outlined", live: "polite", title: "Scholar access" })
                ] }),
                d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(le)) && /* @__PURE__ */ r(s, { children: [
                  "      ",
                  /* @__PURE__ */ h(Y, { id: "pending_notice", live: "polite", title: "Professor verification pending", variant: "warning", appearance: "outlined" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ht as default
};
