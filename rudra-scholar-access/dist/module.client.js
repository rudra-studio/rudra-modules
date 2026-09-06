import { jsx as m, jsxs as r, Fragment as n } from "react/jsx-runtime";
import ee, { useState as w, useEffect as V, useRef as te, useCallback as U } from "react";
import { Box as T } from "@rudra-studio/rudra-layout";
import * as Z from "lucide-react";
import { Form as ot, Input as R, Select as ge, Textarea as nt, Checkbox as ie } from "@rudra-studio/rudra-form";
import { Typography as I, Alert as H, Button as re } from "@rudra-studio/rudra-core";
const fe = (l) => String(l || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), st = (l) => {
  let _ = l;
  for (; _ && typeof _ == "object" && "type" in _ && "value" in _; )
    _ = _.value;
  return _;
};
function v({ icon: l, size: _, color: F, strokeWidth: J, className: L = "", style: M, ...j }) {
  const p = st(l), [z, O] = w(null), oe = p && typeof p == "object" ? JSON.stringify(p) : String(p || "");
  V(() => {
    const x = new AbortController();
    let N = "", W = "";
    if (O(null), typeof p == "string") {
      const b = p.trim();
      if (Z[b]) return () => x.abort();
      b.startsWith("<svg") ? W = b : (/^https?:\/\//.test(b) || b.startsWith("/") || b.startsWith("data:image/svg")) && (N = b);
    } else p && typeof p == "object" && (p.iconType === "svg" && p.svgContent ? W = p.svgContent : p.iconType === "url" && p.url && (N = p.url));
    return W ? O(fe(W)) : N && fetch(N, { signal: x.signal }).then((b) => {
      if (!b.ok) throw new Error("Icon request failed (" + b.status + ")");
      return b.text();
    }).then((b) => {
      b.trim().startsWith("<svg") && O(fe(b));
    }).catch((b) => {
      b.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", b);
    }), () => x.abort();
  }, [oe]);
  const E = p && typeof p == "object" ? p.props || {} : {}, k = { ...E };
  delete k.size, delete k.color, delete k.strokeWidth;
  const C = _ ?? E.size ?? 24, A = F ?? E.color ?? "currentColor", g = J ?? E.strokeWidth ?? 1.5;
  let d = "";
  if (typeof p == "string" && Z[p] ? d = p : p && typeof p == "object" && p.name && (!p.iconType || p.iconType === "lucide") && (d = p.name), d) {
    const x = Z[d];
    if (x)
      return ee.createElement(x, {
        size: C,
        color: A,
        strokeWidth: g,
        className: L,
        style: M,
        ...k,
        ...j
      });
  }
  if (z)
    return ee.createElement("span", {
      ...k,
      ...j,
      className: ("rudra-universal-icon " + L).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: C,
        height: C,
        color: A,
        ...M
      },
      dangerouslySetInnerHTML: {
        __html: z.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + g + '">')
      }
    });
  const K = Z.LayoutGrid;
  return ee.createElement(K, {
    size: C,
    color: A,
    strokeWidth: g,
    className: L,
    style: M,
    ...k,
    ...j
  });
}
function mt(l) {
  const _ = {}, F = l.serverData || l.serverState || {}, J = l.sharedState || {}, L = l.applicationState || F.applicationState || {}, M = l.pageState || F.pageState || {}, j = l.pageData || F.pageData || {}, p = {
    ...l.runtime?.functions || {},
    ...l.runtime?.actions || {},
    ...l.functions || {},
    ...l.actions || {}
  }, z = l.$theme ?? l.theme ?? l.data?.$theme ?? l.runtime?.data?.$theme ?? l.runtime?.theme, O = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [oe, E] = w(() => z ?? O());
  V(() => {
    z != null && E(z);
  }, [z]), V(() => {
    if (z != null || typeof document > "u") return;
    const i = document.documentElement, t = (s) => E(s?.detail?.theme ?? O()), e = new MutationObserver(t);
    return e.observe(i, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      e.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [z]);
  const k = te(null), [C, A] = w("lg");
  V(() => {
    if (!k.current) return;
    const i = new ResizeObserver((t) => {
      for (let e of t) {
        const s = e.contentRect.width;
        s < 768 ? A("sm") : s < 1024 ? A("md") : A("lg");
      }
    });
    return i.observe(k.current), () => i.disconnect();
  }, []);
  const g = U((i) => typeof i != "object" || i === null ? i : C === "sm" ? i.sm !== void 0 ? i.sm : i.md !== void 0 ? i.md : i.lg : C === "md" ? i.md !== void 0 ? i.md : i.sm !== void 0 ? i.sm : i.lg : i.lg !== void 0 ? i.lg : i.md !== void 0 ? i.md : i.sm, [C]), d = (i) => Array.isArray(i) ? i.length > 0 : typeof i == "string" ? i.trim() !== "" && i.trim().toLowerCase() !== "false" : !!i, K = l.returnPath !== void 0 ? l.returnPath : l.data?.returnPath !== void 0 ? l.data.returnPath : "/learn", x = l.profile !== void 0 ? l.profile : l.data?.profile !== void 0 ? l.data.profile : {}, N = l.profileServiceEnabled !== void 0 ? l.profileServiceEnabled : l.data?.profileServiceEnabled !== void 0 ? l.data.profileServiceEnabled : !1, W = l.locale !== void 0 ? l.locale : l.data?.locale !== void 0 ? l.data.locale : "en", b = l.authenticated !== void 0 ? l.authenticated : l.data?.authenticated !== void 0 ? l.data.authenticated : !1, ne = l.mode !== void 0 ? l.mode : l.data?.mode !== void 0 ? l.data.mode : "login", pe = l.authProvider !== void 0 ? l.authProvider : l.data?.authProvider !== void 0 ? l.data.authProvider : "firebase-google", P = { returnPath: K, profile: x, profileServiceEnabled: N, locale: W, authenticated: b, mode: ne, authProvider: pe }, [ye, we] = w(() => structuredClone(!1)), [be, _e] = w(() => structuredClone(!1)), [Se, Re] = w(() => structuredClone(!0)), [se, ve] = w(() => structuredClone({})), [Pe, ze] = w(() => structuredClone(!1)), [ke, qe] = w(() => structuredClone(!1)), [xe, Ie] = w(() => structuredClone(1)), [ae, Ce] = w(() => structuredClone(!1)), [ce, Fe] = w(() => structuredClone("Step 1 of 3 · Profile")), [Ee, Ae] = w(() => structuredClone(!1)), [Le, Me] = w(() => structuredClone("student")), [je, Oe] = w(() => structuredClone(!0)), [Ne, We] = w(() => structuredClone(!1)), [Be, Te] = w(() => structuredClone("Next")), [Y, Ve] = w(() => structuredClone(!1)), [de, De] = w(() => structuredClone("")), [Ge, $e] = w(() => structuredClone("login")), [Ue, Je] = w(() => structuredClone({ requestedRole: "student", verifiedEmail: "" })), [Qe, Ze] = w(() => structuredClone(!0)), h = { showEducatorFields: ye, showInstitutionFields: be, showRegistrationStep1: Se, authenticatedProfile: se, showPending: Pe, showRegistrationStep3: ke, registrationStep: xe, showRegistrationBack: ae, registrationProgress: ce, showRegistration: Ee, requestedRole: Le, showLogin: je, showVerifiedRoleFields: Ne, registrationPrimaryLabel: Be, busy: Y, message: de, accessMode: Ge, registrationInitialValues: Ue, showStudentFields: Qe }, u = U((i, t) => {
    switch (i) {
      case "showEducatorFields": {
        const e = typeof t == "function" ? t(h.showEducatorFields) : t;
        return h.showEducatorFields = e, we(e), e;
      }
      case "showInstitutionFields": {
        const e = typeof t == "function" ? t(h.showInstitutionFields) : t;
        return h.showInstitutionFields = e, _e(e), e;
      }
      case "showRegistrationStep1": {
        const e = typeof t == "function" ? t(h.showRegistrationStep1) : t;
        return h.showRegistrationStep1 = e, Re(e), e;
      }
      case "authenticatedProfile": {
        const e = typeof t == "function" ? t(h.authenticatedProfile) : t;
        return h.authenticatedProfile = e, ve(e), e;
      }
      case "showPending": {
        const e = typeof t == "function" ? t(h.showPending) : t;
        return h.showPending = e, ze(e), e;
      }
      case "showRegistrationStep3": {
        const e = typeof t == "function" ? t(h.showRegistrationStep3) : t;
        return h.showRegistrationStep3 = e, qe(e), e;
      }
      case "registrationStep": {
        const e = typeof t == "function" ? t(h.registrationStep) : t;
        return h.registrationStep = e, Ie(e), e;
      }
      case "showRegistrationBack": {
        const e = typeof t == "function" ? t(h.showRegistrationBack) : t;
        return h.showRegistrationBack = e, Ce(e), e;
      }
      case "registrationProgress": {
        const e = typeof t == "function" ? t(h.registrationProgress) : t;
        return h.registrationProgress = e, Fe(e), e;
      }
      case "showRegistration": {
        const e = typeof t == "function" ? t(h.showRegistration) : t;
        return h.showRegistration = e, Ae(e), e;
      }
      case "requestedRole": {
        const e = typeof t == "function" ? t(h.requestedRole) : t;
        return h.requestedRole = e, Me(e), e;
      }
      case "showLogin": {
        const e = typeof t == "function" ? t(h.showLogin) : t;
        return h.showLogin = e, Oe(e), e;
      }
      case "showVerifiedRoleFields": {
        const e = typeof t == "function" ? t(h.showVerifiedRoleFields) : t;
        return h.showVerifiedRoleFields = e, We(e), e;
      }
      case "registrationPrimaryLabel": {
        const e = typeof t == "function" ? t(h.registrationPrimaryLabel) : t;
        return h.registrationPrimaryLabel = e, Te(e), e;
      }
      case "busy": {
        const e = typeof t == "function" ? t(h.busy) : t;
        return h.busy = e, Ve(e), e;
      }
      case "message": {
        const e = typeof t == "function" ? t(h.message) : t;
        return h.message = e, De(e), e;
      }
      case "accessMode": {
        const e = typeof t == "function" ? t(h.accessMode) : t;
        return h.accessMode = e, $e(e), e;
      }
      case "registrationInitialValues": {
        const e = typeof t == "function" ? t(h.registrationInitialValues) : t;
        return h.registrationInitialValues = e, Je(e), e;
      }
      case "showStudentFields": {
        const e = typeof t == "function" ? t(h.showStudentFields) : t;
        return h.showStudentFields = e, Ze(e), e;
      }
      default:
        return t;
    }
  }, [h]);
  U((i, t) => {
    const [e, ...s] = String(i || "").split(".");
    if (!e) return t;
    if (s.length === 0) return u(e, t);
    const a = (o) => {
      const c = Array.isArray(o) ? [...o] : { ...o || {} };
      let f = c;
      return s.forEach((y, S) => {
        S === s.length - 1 ? f[y] = t : (f[y] = Array.isArray(f[y]) ? [...f[y]] : { ...f[y] || {} }, f = f[y]);
      }), c;
    };
    switch (e) {
      case "showEducatorFields":
        return u("showEducatorFields", a), t;
      case "showInstitutionFields":
        return u("showInstitutionFields", a), t;
      case "showRegistrationStep1":
        return u("showRegistrationStep1", a), t;
      case "authenticatedProfile":
        return u("authenticatedProfile", a), t;
      case "showPending":
        return u("showPending", a), t;
      case "showRegistrationStep3":
        return u("showRegistrationStep3", a), t;
      case "registrationStep":
        return u("registrationStep", a), t;
      case "showRegistrationBack":
        return u("showRegistrationBack", a), t;
      case "registrationProgress":
        return u("registrationProgress", a), t;
      case "showRegistration":
        return u("showRegistration", a), t;
      case "requestedRole":
        return u("requestedRole", a), t;
      case "showLogin":
        return u("showLogin", a), t;
      case "showVerifiedRoleFields":
        return u("showVerifiedRoleFields", a), t;
      case "registrationPrimaryLabel":
        return u("registrationPrimaryLabel", a), t;
      case "busy":
        return u("busy", a), t;
      case "message":
        return u("message", a), t;
      case "accessMode":
        return u("accessMode", a), t;
      case "registrationInitialValues":
        return u("registrationInitialValues", a), t;
      case "showStudentFields":
        return u("showStudentFields", a), t;
      default:
        return t;
    }
  }, [u]);
  const He = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, X = (i, t, e) => {
    if (!t || typeof t != "object") return "";
    const s = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], a = i === null ? "null" : Array.isArray(i) ? "array" : Number.isInteger(i) ? "integer" : typeof i;
    if (s.length && !s.includes(a) && !(a === "integer" && s.includes("number"))) return e + " must be " + s.join(" or ") + ".";
    if (t.enum && !t.enum.some((o) => JSON.stringify(o) === JSON.stringify(i))) return e + " is not an allowed value.";
    if (i && typeof i == "object" && !Array.isArray(i)) {
      for (const o of t.required || []) if (!Object.prototype.hasOwnProperty.call(i, o)) return e + "." + o + " is required.";
      for (const [o, c] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(i, o)) {
        const f = X(i[o], c, e + "." + o);
        if (f) return f;
      }
    }
    if (Array.isArray(i) && t.items) for (let o = 0; o < i.length; o++) {
      const c = X(i[o], t.items, e + "[" + o + "]");
      if (c) return c;
    }
    return "";
  }, Q = U(async (i, t, e = !1) => {
    const s = He[i];
    if (!s) throw new Error("Module output '" + i + "' is not declared.");
    const a = X(t, s, "output." + i);
    if (a) throw new Error(a);
    const o = l.onOutput || l.onModuleOutput || l.runtime?.onOutput;
    if (typeof o != "function") return t;
    const c = o(i, t, { moduleId: l.moduleId, awaitHandlers: e });
    return e ? await c : t;
  }, [l.onOutput, l.onModuleOutput, l.runtime?.onOutput, l.moduleId]), le = (i, t) => {
    const e = String(t || "").split(".").filter(Boolean);
    if (!(!e.length || e.some((s) => ["__proto__", "prototype", "constructor"].includes(s))))
      return e.reduce((s, a) => {
        if (!(!s || typeof s != "object"))
          return typeof s.get == "function" && !(a in s) ? s.get(a) : s[a];
      }, i);
  }, D = (i, t) => {
    if (Array.isArray(i)) return i.map((s) => D(s, t));
    if (i && typeof i == "object") return Object.fromEntries(Object.entries(i).map(([s, a]) => [D(s, t), D(a, t)]));
    if (typeof i != "string") return i;
    const e = i.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return e ? le(t, e[1]) : i.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (s, a) => {
      const o = le(t, a);
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    });
  };
  async function ue(i = {}) {
    const t = i || {}, e = {};
    {
      t.event;
      const s = await (async () => {
        const a = P.profile && typeof P.profile == "object" ? P.profile : {};
        let o = ["login", "registration", "resolving"].includes(P.mode) ? P.mode : "login";
        return P.authenticated === !0 && a.isRegistered === !1 && (o = "registration"), { mode: o, profile: a };
      })();
      e.init_context = s;
    }
    return u("authenticatedProfile", e.init_context.profile), u("accessMode", e.init_context.mode), e.init_context;
  }
  async function Ke(i = {}) {
    const t = i || {}, e = {};
    {
      t.event;
      const s = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(h.registrationStep || 1))) === 3 }))();
      e.wizard_decide = s;
    }
    if (e.wizard_decide.isFinal)
      return await me({ values: t.values }), e.wizard_submit;
    {
      t.event;
      const s = await (async () => {
        const a = Math.max(1, Math.min(3, Number(h.registrationStep || 1))), o = String(t.values && t.values.requestedRole || h.requestedRole || "student"), c = Math.min(3, a + 1);
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
      e.wizard_advance = s;
    }
    return u("requestedRole", e.wizard_advance.role), u("registrationStep", e.wizard_advance.step), u("registrationProgress", e.wizard_advance.progress), u("registrationPrimaryLabel", e.wizard_advance.primaryLabel), u("showRegistrationBack", e.wizard_advance.showBack), u("showRegistrationStep1", e.wizard_advance.showStep1), u("showStudentFields", e.wizard_advance.showStudent), u("showEducatorFields", e.wizard_advance.showEducator), u("showInstitutionFields", e.wizard_advance.showInstitution), u("showVerifiedRoleFields", e.wizard_advance.showVerified), u("showRegistrationStep3", e.wizard_advance.showStep3), e.wizard_advance;
  }
  async function Ye(i = {}) {
    const t = i || {}, e = {};
    {
      t.event;
      const s = await (async () => {
        const a = Math.max(1, Math.min(3, Number(h.registrationStep || 1))), o = String(h.requestedRole || "student"), c = Math.max(1, a - 1);
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
      e.wizard_back_prepare = s;
    }
    return u("registrationStep", e.wizard_back_prepare.step), u("registrationProgress", e.wizard_back_prepare.progress), u("registrationPrimaryLabel", e.wizard_back_prepare.primaryLabel), u("showRegistrationBack", e.wizard_back_prepare.showBack), u("showRegistrationStep1", e.wizard_back_prepare.showStep1), u("showStudentFields", e.wizard_back_prepare.showStudent), u("showEducatorFields", e.wizard_back_prepare.showEducator), u("showInstitutionFields", e.wizard_back_prepare.showInstitution), u("showVerifiedRoleFields", e.wizard_back_prepare.showVerified), u("showRegistrationStep3", e.wizard_back_prepare.showStep3), e.wizard_back_prepare;
  }
  async function Xe(i = {}) {
    const t = i || {};
    return u("requestedRole", t.value), t.value;
  }
  async function me(i = {}) {
    const t = i || {}, e = {}, s = {};
    u("busy", !0), u("message", "");
    {
      const o = D({ profile: "{{ args.values }}" }, { args: t, inputs: P, state: h, sharedState: J, applicationState: L, pageState: M, pageData: j, serverData: F, vars: e, stepResults: s }) || {};
      delete o.userIdentity, delete o.verifiedEmail, delete o.emailVerified, delete o.providerId;
      const c = [void 0, void 0, void 0, void 0, o.profile], f = l.executeDatabaseQuery || l.runtime?.executeDatabaseQuery;
      let y;
      if (typeof f == "function")
        y = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: o, signal: t.signal });
      else {
        const S = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: o }), signal: t.signal }), q = await S.json().catch(() => ({}));
        if (!S.ok || q.success === !1) throw new Error(q.error || "Database query failed (" + S.status + ")");
        y = q.data;
      }
      s.reg_call = y, e.queryResult = y;
    }
    {
      t.event;
      const a = await (async () => {
        const o = s.reg_call, c = Array.isArray(o) ? o[0] : o, f = c && c.result ? c.result : c;
        if (!f || f.isRegistered !== !0) throw new Error(f && f.message || "Registration did not complete.");
        return f;
      })();
      s.reg_normalize = a, e.customCodeResult = a;
    }
    return Q("registrationCompleted", { isRegistered: s.reg_normalize.isRegistered, onboardingStatus: s.reg_normalize.onboardingStatus, redirectPath: s.reg_normalize.redirectPath, requestedRole: s.reg_normalize.requestedRole, roles: s.reg_normalize.roles, verificationStatus: s.reg_normalize.verificationStatus }, !1).catch((a) => console.error("Module output delivery failed", a)), Q("navigationRequested", { path: s.reg_normalize.redirectPath }, !1).catch((a) => console.error("Module output delivery failed", a)), u("authenticatedProfile", s.reg_normalize), u("accessMode", "resolving"), u("message", s.reg_normalize.message), u("busy", !1), s.reg_normalize;
  }
  async function et(i = {}) {
    const t = i || {}, e = {}, s = {};
    u("busy", !0), u("message", ""), await G("RudraAuth.signIn", { provider: P.authProvider, returnPath: P.returnPath }, []), Q("googleSignInRequested", { returnPath: P.returnPath }, !1).catch((a) => console.error("Module output delivery failed", a));
    {
      t.event;
      const a = await (async () => {
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
      s.normalize_auth = a, e.customCodeResult = a;
    }
    u("authenticatedProfile", s.normalize_auth), u("accessMode", "resolving");
    {
      const o = D({}, { args: t, inputs: P, state: h, sharedState: J, applicationState: L, pageState: M, pageData: j, serverData: F, vars: e, stepResults: s }) || {};
      delete o.userIdentity;
      const c = [void 0], f = l.executeDatabaseQuery || l.runtime?.executeDatabaseQuery;
      let y;
      if (typeof f == "function")
        y = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: o, signal: t.signal });
      else {
        const S = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: o }), signal: t.signal }), q = await S.json().catch(() => ({}));
        if (!S.ok || q.success === !1) throw new Error(q.error || "Database query failed (" + S.status + ")");
        y = q.data;
      }
      s.resolve_access = y, e.queryResult = y;
    }
    {
      t.event;
      const a = await (async () => {
        const o = s.resolve_access, c = Array.isArray(o) ? o[0] : o, f = c && c.result ? c.result : c, y = !!(f && f.isRegistered === !0), S = y ? f : { ...h.authenticatedProfile, isRegistered: !1 };
        return {
          isRegistered: y,
          profile: S,
          redirectPath: f && f.redirectPath || P.returnPath || "/learn"
        };
      })();
      s.normalize_access = a, e.customCodeResult = a;
    }
    return s.normalize_access.isRegistered ? (u("authenticatedProfile", s.normalize_access.profile), u("busy", !1), Q("navigationRequested", { path: s.normalize_access.redirectPath }, !1).catch((a) => console.error("Module output delivery failed", a)), s.normalize_access) : (u("authenticatedProfile", s.normalize_access.profile), u("accessMode", "registration"), u("busy", !1), s.normalize_access);
  }
  const tt = {
    initializeAccessFlow: ue,
    handleRegistrationSubmit: Ke,
    goBackRegistrationStep: Ye,
    setRequestedRole: Xe,
    submitRegistration: me,
    requestGoogleSignIn: et
  }, it = {
    initializeAccessFlow: [],
    handleRegistrationSubmit: ["values"],
    goBackRegistrationStep: [],
    setRequestedRole: ["value"],
    submitRegistration: ["values"],
    requestGoogleSignIn: []
  }, G = (i, t = {}, e = []) => {
    const s = tt[i];
    if (s) {
      const y = it[i] || [];
      return s(Object.fromEntries(y.map((S, q) => {
        const $ = Object.prototype.hasOwnProperty.call(t, S) ? t[S] : void 0;
        return [S, ($ === "" || $ === void 0) && e[q] !== void 0 ? e[q] : S === "event" && ($ === "" || $ === void 0) ? e[0] : $];
      })));
    }
    const a = p?.[i];
    if (typeof a == "function")
      return a(Object.keys(t).length > 0 ? t : e[0]);
    const [o, c] = String(i).split("."), f = typeof globalThis < "u" ? globalThis[o]?.[c] : void 0;
    if (typeof f == "function") return f(...Object.values(t));
    console.warn("Rudra action '" + i + "' is not available in this runtime.");
  }, B = te(/* @__PURE__ */ new Map()), rt = U((i, t, e, s) => {
    const a = B.current.get(i);
    if (t === "exhaust" && a?.promise) return a.promise;
    t === "takeLatest" && a?.controller?.abort();
    const o = new AbortController(), c = () => Promise.resolve().then(() => e(o.signal)), f = t === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(c) : c();
    return B.current.set(i, { controller: o, promise: f }), f.catch((y) => {
      y?.name !== "AbortError" && console.error(s, y);
    }).finally(() => {
      B.current.get(i)?.promise === f && B.current.delete(i);
    }), f;
  }, []);
  V(() => () => {
    for (const i of B.current.values()) i.controller?.abort();
    B.current.clear();
  }, []);
  const he = te(!1);
  return V(() => {
    he.current || (he.current = !0), rt("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (i) => ue({}), "Module input lifecycle failed:");
  }, [b, ne, x]), /* @__PURE__ */ m("div", { ref: k, className: "rudra-module-wrapper", children: d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
    "      ",
    /* @__PURE__ */ r(T, { id: "root", className: "rs-access", children: [
      "      ",
      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
        "      ",
        /* @__PURE__ */ r(T, { id: "panel", className: "rs-access-grid", children: [
          "      ",
          d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
            "      ",
            /* @__PURE__ */ r(T, { id: "story", className: "rs-access-story", children: [
              "      ",
              d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ r(T, { id: "story_badge", "aria-label": "College mathematics proof of concept", className: "rs-badge-row", children: [
                  "      ",
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(v, { icon: "GraduationCap", id: "story_badge_icon", strokeWidth: 2, size: 14, color: "#b8f7e7" })
                  ] }),
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(I, { id: "story_badge_label", className: "rs-badge-label", as: "span", content: "College mathematics · POC", customColor: "#eafff8" })
                  ] })
                ] })
              ] }),
              d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(I, { id: "title", className: "rs-access-title", customColor: "#eafff8", as: "h2", content: /* @__PURE__ */ ((i) => i === void 0 ? "Learn mathematics with context, not shortcuts." : i)(_?.i18n?.title) })
              ] }),
              d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(I, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((i) => i === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : i)(_?.i18n?.subtitle) })
              ] }),
              d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(H, { id: "trust", live: "off", title: "SQL is the authority", variant: "neutral", appearance: "outlined" })
              ] })
            ] })
          ] }),
          d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
            "      ",
            /* @__PURE__ */ r(T, { id: "form_area", className: "rs-access-form", children: [
              "      ",
              d({ sourceProp: { dataPath: "state.accessMode", type: "binding" }, transformFunction: "(value) => value === 'login'" }) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(I, { id: "signin_eyebrow", className: "rs-signin-eyebrow", as: "p", content: /* @__PURE__ */ ((i) => i === void 0 ? "WELCOME TO RUDRA SCHOLAR" : i)(_?.i18n?.welcome) })
              ] }),
              d({ sourceProp: { dataPath: "state.accessMode", type: "binding" }, transformFunction: "(value) => value === 'login'" }) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(I, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((i) => i === void 0 ? "Ready to think through the next problem?" : i)(_?.i18n?.signInTitle) })
              ] }),
              d({ sourceProp: { dataPath: "state.accessMode", type: "binding" }, transformFunction: "(value) => value === 'login'" }) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(I, { id: "signin_intro", className: "rs-signin-intro", as: "p", content: /* @__PURE__ */ ((i) => i === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : i)(_?.i18n?.signInIntro) })
              ] }),
              d({ sourceProp: { dataPath: "state.accessMode", type: "binding" }, transformFunction: "(value) => value === 'login'" }) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(re, { id: "google", leftIcon: /* @__PURE__ */ r(n, { children: [
                  "      ",
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(v, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", size: 20, strokeWidth: 1.2 })
                  ] })
                ] }), id: "scholar-google-signin", size: "lg", label: /* @__PURE__ */ ((i) => i === void 0 ? "Sign in with Google" : i)(_?.i18n?.google), loading: /* @__PURE__ */ ((i) => i === void 0 ? !1 : i)(Y), onAction: (...i) => G("requestGoogleSignIn", {}, i), ariaLabel: "Sign in with Google", rightIcon: !1, theme: "auto", variant: "outline", fullWidth: !0 })
              ] }),
              d({ sourceProp: { dataPath: "state.accessMode", type: "binding" }, transformFunction: "(value) => value === 'login'" }) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(I, { id: "notice", className: "rs-signin-note", as: "p", content: /* @__PURE__ */ ((i) => i === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : i)(_?.i18n?.signInHelp) })
              ] }),
              d(void 0) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(I, { id: "heading", content: /* @__PURE__ */ ((i) => i === void 0 ? "Create your Scholar account" : i)(_?.i18n?.profile), as: "h3" })
              ] }),
              d(void 0) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ r(ot, { id: "profile_form", className: "rs-form", onSubmit: (...i) => G("submitRegistration", {}, i), initialValues: { requestedRole: "student" }, children: [
                  "      ",
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(I, { id: "registration_progress", className: "rs-registration-progress", as: "p", content: /* @__PURE__ */ ((i) => i === void 0 ? "Step 1 of 3 · Profile" : i)(ce) })
                  ] }),
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "email", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "Mail", id: "email_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), disabled: !0, name: "verifiedEmail", size: "md", type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((i) => i === void 0 ? "Signed-in Google account" : i)(se?.email) })
                  ] }),
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "first_name", name: "firstName", size: "md", type: "text", label: "First name", required: !0 })
                  ] }),
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "last_name", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "UserRound", id: "last_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "lastName", size: "md", type: "text", label: "Last name", required: !0 })
                  ] }),
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(ge, { id: "role", onChangeValue: (...i) => G("setRequestedRole", {}, i), name: "requestedRole", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }], required: !0 })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(H, { id: "kyc_intro", live: "off", title: "Role verification required", variant: "neutral", appearance: "outlined" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "institution", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionInvite", size: "md", type: "text", label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "qualification", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "GraduationCap", id: "qualification_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "Highest relevant qualification", required: !0, placeholder: "For example, M.Sc. Mathematics", name: "qualification" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "expertise", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "Sigma", id: "expertise_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "subjectExpertise", size: "md", type: "text", label: "Mathematics expertise", required: !0, placeholder: "For example, Linear Algebra, Calculus" })
                  ] }),
                  d(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "kyc", size: "md", type: "text", label: "Legacy verification field disabled", required: !1, placeholder: "Secure upload reference — do not paste document data", name: "kycReference" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(nt, { id: "professional_statement", maxRows: 6, minRows: 3, required: !0, autoResize: !0, placeholder: "Briefly describe your teaching experience.", name: "professionalStatement", size: "md", label: "Short professional statement" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "educator_institution", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "School", id: "educator_institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "institutionName", size: "md", type: "text", label: "College or university" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "evidence", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), placeholder: "Use an institution email or public staff-profile URL", name: "kycEvidence", size: "md", type: "text", label: "KYC verification evidence", required: !0 })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "institution_legal_name", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "Landmark", id: "institution_legal_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "institutionLegalName", size: "md", type: "text", label: "Institution legal name" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "institution_display_name", name: "institutionDisplayName", size: "md", type: "text", label: "Display name", required: !0 })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(ge, { id: "institution_type", name: "institutionType", label: "Institution type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }], required: !0 })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "institution_website", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "Globe", id: "institution_website_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), placeholder: "https://example.edu", name: "institutionWebsite", size: "md", type: "url", label: "Official website", required: !0 })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "institution_domain", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "AtSign", id: "institution_domain_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "Institutional email domain", required: !0, placeholder: "example.edu", name: "institutionEmailDomain" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "institution_contact", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "Administrative contact", required: !0, name: "institutionContact", size: "md" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(R, { id: "country", icon: /* @__PURE__ */ r(n, { children: [
                      "      ",
                      d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(v, { icon: "MapPin", id: "country_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "country", size: "md", type: "text", label: "Country" })
                  ] }),
                  d(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(ie, { id: "age_confirmed", name: "ageConfirmed", label: "I confirm I am 18 or older.", required: !1, colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators." })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(ie, { id: "terms", description: "Required before an account can be created.", name: "termsAccepted", label: "I accept the Terms of Service.", required: !0, colorScheme: "emerald" })
                  ] }),
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(re, { id: "submit", fullWidth: !0, size: "lg", label: "Continue", theme: "auto", loading: /* @__PURE__ */ ((i) => i === void 0 ? !1 : i)(Y), variant: "primary" })
                  ] }),
                  d(void 0) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ m(ie, { id: "privacy", name: "privacyAccepted", label: "I have read and accept the Privacy Notice.", required: !0, colorScheme: "emerald", description: "Required before an account can be created." })
                  ] }),
                  d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                    "      ",
                    /* @__PURE__ */ r(T, { id: "registration_actions", className: "rs-registration-actions", children: [
                      "      ",
                      d(ae) && /* @__PURE__ */ r(n, { children: [
                        "      ",
                        /* @__PURE__ */ m(re, { id: "registration_back", leftIcon: /* @__PURE__ */ r(n, { children: [
                          "      ",
                          d(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(n, { children: [
                            "      ",
                            /* @__PURE__ */ m(v, { icon: "ArrowLeft", id: "registration_back_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), label: "Back", variant: "secondary", additionalAttributes: {}, theme: "auto", onAction: (...i) => G("goBackRegistrationStep", {}, i), fullWidth: !0, id: "scholar-registration-back", size: "lg", type: "button" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              d(de) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(H, { id: "message", live: "polite", title: "Scholar access", variant: "neutral", appearance: "outlined" })
              ] }),
              d(void 0) && /* @__PURE__ */ r(n, { children: [
                "      ",
                /* @__PURE__ */ m(H, { id: "pending_notice", appearance: "outlined", live: "polite", title: "Professor verification pending", variant: "warning" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  mt as default
};
