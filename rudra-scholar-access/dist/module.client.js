import { jsx as h, jsxs as o, Fragment as a } from "react/jsx-runtime";
import ie, { useState as w, useEffect as G, useRef as re, useCallback as Q } from "react";
import * as K from "lucide-react";
import { Typography as q, Alert as Y, Button as oe } from "@rudra-studio/rudra-core";
import { Form as ot, Input as S, Select as ye, Textarea as st, Checkbox as se } from "@rudra-studio/rudra-form";
import { Box as D } from "@rudra-studio/rudra-layout";
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
  let l = "";
  if (typeof p == "string" && K[p] ? l = p : p && typeof p == "object" && p.name && (!p.iconType || p.iconType === "lucide") && (l = p.name), l) {
    const C = K[l];
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
    const e = document.documentElement, i = (s) => E(s?.detail?.theme ?? W()), t = new MutationObserver(i);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [P]);
  const k = re(null), [I, A] = w("lg");
  G(() => {
    if (!k.current) return;
    const e = new ResizeObserver((i) => {
      for (let t of i) {
        const s = t.contentRect.width;
        s < 768 ? A("sm") : s < 1024 ? A("md") : A("lg");
      }
    });
    return e.observe(k.current), () => e.disconnect();
  }, []);
  const g = Q((e) => typeof e != "object" || e === null ? e : I === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : I === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [I]), l = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, X = u.profileServiceEnabled !== void 0 ? u.profileServiceEnabled : u.data?.profileServiceEnabled !== void 0 ? u.data.profileServiceEnabled : !1, C = u.locale !== void 0 ? u.locale : u.data?.locale !== void 0 ? u.data.locale : "en", L = u.authenticated !== void 0 ? u.authenticated : u.data?.authenticated !== void 0 ? u.data.authenticated : !1, j = u.mode !== void 0 ? u.mode : u.data?.mode !== void 0 ? u.data.mode : "login", b = u.authProvider !== void 0 ? u.authProvider : u.data?.authProvider !== void 0 ? u.data.authProvider : "firebase-google", be = u.returnPath !== void 0 ? u.returnPath : u.data?.returnPath !== void 0 ? u.data.returnPath : "/learn", ae = u.profile !== void 0 ? u.profile : u.data?.profile !== void 0 ? u.data.profile : {}, z = { profileServiceEnabled: X, locale: C, authenticated: L, mode: j, authProvider: b, returnPath: be, profile: ae }, [_e, Re] = w(() => structuredClone(!0)), [ce, Se] = w(() => structuredClone({})), [de, ve] = w(() => structuredClone("")), [ze, Pe] = w(() => structuredClone({ requestedRole: "student", verifiedEmail: "" })), [ke, xe] = w(() => structuredClone(1)), [le, qe] = w(() => structuredClone(!1)), [Ie, Ce] = w(() => structuredClone(!1)), [Fe, Ee] = w(() => structuredClone(!0)), [Ae, Le] = w(() => structuredClone("login")), [ue, je] = w(() => structuredClone("Step 1 of 3 · Profile")), [Me, Oe] = w(() => structuredClone(!1)), [Ne, We] = w(() => structuredClone("student")), [he, Be] = w(() => structuredClone(!1)), [V, Te] = w(() => structuredClone(!1)), [De, Ge] = w(() => structuredClone(!1)), [ee, Ve] = w(() => structuredClone(!1)), [B, $e] = w(() => structuredClone(!0)), [Ue, Je] = w(() => structuredClone("Next")), [Qe, Ze] = w(() => structuredClone(!1)), m = { showStudentFields: _e, authenticatedProfile: ce, message: de, registrationInitialValues: ze, registrationStep: ke, showPending: le, showRegistrationStep3: Ie, showRegistrationStep1: Fe, accessMode: Ae, registrationProgress: ue, showInstitutionFields: Me, requestedRole: Ne, showRegistrationBack: he, showRegistration: V, showEducatorFields: De, busy: ee, showLogin: B, registrationPrimaryLabel: Ue, showVerifiedRoleFields: Qe }, d = Q((e, i) => {
    switch (e) {
      case "showStudentFields": {
        const t = typeof i == "function" ? i(m.showStudentFields) : i;
        return m.showStudentFields = t, Re(t), t;
      }
      case "authenticatedProfile": {
        const t = typeof i == "function" ? i(m.authenticatedProfile) : i;
        return m.authenticatedProfile = t, Se(t), t;
      }
      case "message": {
        const t = typeof i == "function" ? i(m.message) : i;
        return m.message = t, ve(t), t;
      }
      case "registrationInitialValues": {
        const t = typeof i == "function" ? i(m.registrationInitialValues) : i;
        return m.registrationInitialValues = t, Pe(t), t;
      }
      case "registrationStep": {
        const t = typeof i == "function" ? i(m.registrationStep) : i;
        return m.registrationStep = t, xe(t), t;
      }
      case "showPending": {
        const t = typeof i == "function" ? i(m.showPending) : i;
        return m.showPending = t, qe(t), t;
      }
      case "showRegistrationStep3": {
        const t = typeof i == "function" ? i(m.showRegistrationStep3) : i;
        return m.showRegistrationStep3 = t, Ce(t), t;
      }
      case "showRegistrationStep1": {
        const t = typeof i == "function" ? i(m.showRegistrationStep1) : i;
        return m.showRegistrationStep1 = t, Ee(t), t;
      }
      case "accessMode": {
        const t = typeof i == "function" ? i(m.accessMode) : i;
        return m.accessMode = t, Le(t), t;
      }
      case "registrationProgress": {
        const t = typeof i == "function" ? i(m.registrationProgress) : i;
        return m.registrationProgress = t, je(t), t;
      }
      case "showInstitutionFields": {
        const t = typeof i == "function" ? i(m.showInstitutionFields) : i;
        return m.showInstitutionFields = t, Oe(t), t;
      }
      case "requestedRole": {
        const t = typeof i == "function" ? i(m.requestedRole) : i;
        return m.requestedRole = t, We(t), t;
      }
      case "showRegistrationBack": {
        const t = typeof i == "function" ? i(m.showRegistrationBack) : i;
        return m.showRegistrationBack = t, Be(t), t;
      }
      case "showRegistration": {
        const t = typeof i == "function" ? i(m.showRegistration) : i;
        return m.showRegistration = t, Te(t), t;
      }
      case "showEducatorFields": {
        const t = typeof i == "function" ? i(m.showEducatorFields) : i;
        return m.showEducatorFields = t, Ge(t), t;
      }
      case "busy": {
        const t = typeof i == "function" ? i(m.busy) : i;
        return m.busy = t, Ve(t), t;
      }
      case "showLogin": {
        const t = typeof i == "function" ? i(m.showLogin) : i;
        return m.showLogin = t, $e(t), t;
      }
      case "registrationPrimaryLabel": {
        const t = typeof i == "function" ? i(m.registrationPrimaryLabel) : i;
        return m.registrationPrimaryLabel = t, Je(t), t;
      }
      case "showVerifiedRoleFields": {
        const t = typeof i == "function" ? i(m.showVerifiedRoleFields) : i;
        return m.showVerifiedRoleFields = t, Ze(t), t;
      }
      default:
        return i;
    }
  }, [m]);
  Q((e, i) => {
    const [t, ...s] = String(e || "").split(".");
    if (!t) return i;
    if (s.length === 0) return d(t, i);
    const n = (r) => {
      const c = Array.isArray(r) ? [...r] : { ...r || {} };
      let f = c;
      return s.forEach((y, R) => {
        R === s.length - 1 ? f[y] = i : (f[y] = Array.isArray(f[y]) ? [...f[y]] : { ...f[y] || {} }, f = f[y]);
      }), c;
    };
    switch (t) {
      case "showStudentFields":
        return d("showStudentFields", n), i;
      case "authenticatedProfile":
        return d("authenticatedProfile", n), i;
      case "message":
        return d("message", n), i;
      case "registrationInitialValues":
        return d("registrationInitialValues", n), i;
      case "registrationStep":
        return d("registrationStep", n), i;
      case "showPending":
        return d("showPending", n), i;
      case "showRegistrationStep3":
        return d("showRegistrationStep3", n), i;
      case "showRegistrationStep1":
        return d("showRegistrationStep1", n), i;
      case "accessMode":
        return d("accessMode", n), i;
      case "registrationProgress":
        return d("registrationProgress", n), i;
      case "showInstitutionFields":
        return d("showInstitutionFields", n), i;
      case "requestedRole":
        return d("requestedRole", n), i;
      case "showRegistrationBack":
        return d("showRegistrationBack", n), i;
      case "showRegistration":
        return d("showRegistration", n), i;
      case "showEducatorFields":
        return d("showEducatorFields", n), i;
      case "busy":
        return d("busy", n), i;
      case "showLogin":
        return d("showLogin", n), i;
      case "registrationPrimaryLabel":
        return d("registrationPrimaryLabel", n), i;
      case "showVerifiedRoleFields":
        return d("showVerifiedRoleFields", n), i;
      default:
        return i;
    }
  }, [d]);
  const He = { googleSignInRequested: { properties: { returnPath: { type: "string" } }, required: ["returnPath"], type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, required: ["path"], type: "object" }, registrationCompleted: { properties: { isRegistered: { type: "boolean" }, onboardingStatus: { type: "string" }, redirectPath: { type: "string" }, requestedRole: { type: "string" }, roles: { items: { type: "string" }, type: "array" }, verificationStatus: { type: "string" } }, type: "object" } }, te = (e, i, t) => {
    if (!i || typeof i != "object") return "";
    const s = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], n = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (s.length && !s.includes(n) && !(n === "integer" && s.includes("number"))) return t + " must be " + s.join(" or ") + ".";
    if (i.enum && !i.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of i.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return t + "." + r + " is required.";
      for (const [r, c] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const f = te(e[r], c, t + "." + r);
        if (f) return f;
      }
    }
    if (Array.isArray(e) && i.items) for (let r = 0; r < e.length; r++) {
      const c = te(e[r], i.items, t + "[" + r + "]");
      if (c) return c;
    }
    return "";
  }, H = Q(async (e, i, t = !1) => {
    const s = He[e];
    if (!s) throw new Error("Module output '" + e + "' is not declared.");
    const n = te(i, s, "output." + e);
    if (n) throw new Error(n);
    const r = u.onOutput || u.onModuleOutput || u.runtime?.onOutput;
    if (typeof r != "function") return i;
    const c = r(e, i, { moduleId: u.moduleId, awaitHandlers: t });
    return t ? await c : i;
  }, [u.onOutput, u.onModuleOutput, u.runtime?.onOutput, u.moduleId]), me = (e, i) => {
    const t = String(i || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((s) => ["__proto__", "prototype", "constructor"].includes(s))))
      return t.reduce((s, n) => {
        if (!(!s || typeof s != "object"))
          return typeof s.get == "function" && !(n in s) ? s.get(n) : s[n];
      }, e);
  }, $ = (e, i) => {
    if (Array.isArray(e)) return e.map((s) => $(s, i));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([s, n]) => [$(s, i), $(n, i)]));
    if (typeof e != "string") return e;
    const t = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? me(i, t[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (s, n) => {
      const r = me(i, n);
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
  };
  async function Ke(e = {}) {
    const i = e || {}, t = {}, s = {};
    d("busy", !0), d("message", "");
    try {
      {
        const n = await U("RudraAuth.signIn", { provider: z.authProvider, returnPath: z.returnPath }, []);
        s.google_auth = n, t["RudraAuth.signInResult"] = n;
      }
    } catch (n) {
      {
        i.event;
        const r = await (async () => ({ message: String(n && n.message || "Sign-in succeeded, but Scholar access could not be resolved. Please try again.") }))();
        s.google_error = r, t.customCodeResult = r;
      }
      return d("message", s.google_error.message), d("accessMode", "login"), d("busy", !1), { error: s.google_error.message, ok: !1 };
    }
    H("googleSignInRequested", { returnPath: z.returnPath }, !1).catch((n) => console.error("Module output delivery failed", n));
    {
      i.event;
      const n = await (async () => {
        const r = s.google_auth || {}, c = r.user || r.currentUser || r.profile || r;
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
      s.normalize_auth = n, t.customCodeResult = n;
    }
    d("authenticatedProfile", s.normalize_auth), d("accessMode", "resolving");
    {
      const r = $({}, { args: i, inputs: z, state: m, sharedState: Z, applicationState: M, pageState: O, pageData: N, serverData: F, vars: t, stepResults: s }) || {};
      delete r.userIdentity;
      const c = [void 0], f = u.executeDatabaseQuery || u.runtime?.executeDatabaseQuery;
      let y;
      if (typeof f == "function")
        y = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: r, signal: i.signal });
      else {
        const R = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters: c, namedParameters: r }), signal: i.signal }), x = await R.json().catch(() => ({}));
        if (!R.ok || x.success === !1) throw new Error(x.error || "Database query failed (" + R.status + ")");
        y = x.data;
      }
      s.resolve_access = y, t.queryResult = y;
    }
    {
      i.event;
      const n = await (async () => {
        const r = s.resolve_access, c = Array.isArray(r) ? r[0] : r, f = c && c.result ? c.result : c, y = !!(f && f.isRegistered === !0), R = y ? f : { ...m.authenticatedProfile, isRegistered: !1 };
        return {
          isRegistered: y,
          profile: R,
          redirectPath: f && f.redirectPath || z.returnPath || "/learn"
        };
      })();
      s.normalize_access = n, t.customCodeResult = n;
    }
    return s.normalize_access.isRegistered ? (d("authenticatedProfile", s.normalize_access.profile), d("busy", !1), H("navigationRequested", { path: s.normalize_access.redirectPath }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_access) : (d("authenticatedProfile", s.normalize_access.profile), d("accessMode", "registration"), d("showLogin", !1), d("showRegistration", !0), d("showPending", !1), d("busy", !1), s.normalize_access);
  }
  async function ge(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const s = await (async () => {
        const n = z.profile && typeof z.profile == "object" ? z.profile : {};
        let r = ["login", "registration", "resolving"].includes(z.mode) ? z.mode : "login";
        z.authenticated === !0 && n.isRegistered === !1 && (r = "registration");
        const c = r === "resolving" && n.verificationStatus === "pending";
        return {
          mode: r,
          profile: n,
          showLogin: r === "login",
          showRegistration: r === "registration",
          showPending: c
        };
      })();
      t.init_context = s;
    }
    return d("authenticatedProfile", t.init_context.profile), d("accessMode", t.init_context.mode), d("showLogin", t.init_context.showLogin), d("showRegistration", t.init_context.showRegistration), d("showPending", t.init_context.showPending), t.init_context;
  }
  async function Ye(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const s = await (async () => ({ isFinal: Math.max(1, Math.min(3, Number(m.registrationStep || 1))) === 3 }))();
      t.wizard_decide = s;
    }
    if (t.wizard_decide.isFinal)
      return await fe({ values: i.values }), t.wizard_submit;
    {
      i.event;
      const s = await (async () => {
        const n = Math.max(1, Math.min(3, Number(m.registrationStep || 1))), r = String(i.values && i.values.requestedRole || m.requestedRole || "student"), c = Math.min(3, n + 1);
        return {
          step: c,
          role: r,
          showStep1: c === 1,
          showStudent: c === 2 && r === "student",
          showEducator: c === 2 && r === "educator",
          showInstitution: c === 2 && r === "institution_admin",
          showVerified: c === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_advance = s;
    }
    return d("requestedRole", t.wizard_advance.role), d("registrationStep", t.wizard_advance.step), d("registrationProgress", t.wizard_advance.progress), d("registrationPrimaryLabel", t.wizard_advance.primaryLabel), d("showRegistrationBack", t.wizard_advance.showBack), d("showRegistrationStep1", t.wizard_advance.showStep1), d("showStudentFields", t.wizard_advance.showStudent), d("showEducatorFields", t.wizard_advance.showEducator), d("showInstitutionFields", t.wizard_advance.showInstitution), d("showVerifiedRoleFields", t.wizard_advance.showVerified), d("showRegistrationStep3", t.wizard_advance.showStep3), t.wizard_advance;
  }
  async function Xe(e = {}) {
    const i = e || {}, t = {};
    {
      i.event;
      const s = await (async () => {
        const n = Math.max(1, Math.min(3, Number(m.registrationStep || 1))), r = String(m.requestedRole || "student"), c = Math.max(1, n - 1);
        return {
          step: c,
          role: r,
          showStep1: c === 1,
          showStudent: c === 2 && r === "student",
          showEducator: c === 2 && r === "educator",
          showInstitution: c === 2 && r === "institution_admin",
          showVerified: c === 2 && (r === "educator" || r === "institution_admin"),
          showStep3: c === 3,
          showBack: c > 1,
          progress: c === 1 ? "Step 1 of 3 · Profile" : c === 2 ? "Step 2 of 3 · Role details" : "Step 3 of 3 · Review and consent",
          primaryLabel: c === 3 ? "Create account" : "Next"
        };
      })();
      t.wizard_back_prepare = s;
    }
    return d("registrationStep", t.wizard_back_prepare.step), d("registrationProgress", t.wizard_back_prepare.progress), d("registrationPrimaryLabel", t.wizard_back_prepare.primaryLabel), d("showRegistrationBack", t.wizard_back_prepare.showBack), d("showRegistrationStep1", t.wizard_back_prepare.showStep1), d("showStudentFields", t.wizard_back_prepare.showStudent), d("showEducatorFields", t.wizard_back_prepare.showEducator), d("showInstitutionFields", t.wizard_back_prepare.showInstitution), d("showVerifiedRoleFields", t.wizard_back_prepare.showVerified), d("showRegistrationStep3", t.wizard_back_prepare.showStep3), t.wizard_back_prepare;
  }
  async function et(e = {}) {
    const i = e || {};
    return d("requestedRole", i.value), i.value;
  }
  async function fe(e = {}) {
    const i = e || {}, t = {}, s = {};
    d("busy", !0), d("message", "");
    {
      const r = $({ profile: "{{ args.values }}" }, { args: i, inputs: z, state: m, sharedState: Z, applicationState: M, pageState: O, pageData: N, serverData: F, vars: t, stepResults: s }) || {};
      delete r.userIdentity, delete r.verifiedEmail, delete r.emailVerified, delete r.providerId;
      const c = [void 0, void 0, void 0, void 0, r.profile], f = u.executeDatabaseQuery || u.runtime?.executeDatabaseQuery;
      let y;
      if (typeof f == "function")
        y = await f({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: r, signal: i.signal });
      else {
        const R = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters: c, namedParameters: r }), signal: i.signal }), x = await R.json().catch(() => ({}));
        if (!R.ok || x.success === !1) throw new Error(x.error || "Database query failed (" + R.status + ")");
        y = x.data;
      }
      s.reg_call = y, t.queryResult = y;
    }
    {
      i.event;
      const n = await (async () => {
        const r = s.reg_call, c = Array.isArray(r) ? r[0] : r, f = c && c.result ? c.result : c;
        if (!f || f.isRegistered !== !0) throw new Error(f && f.message || "Registration did not complete.");
        return f;
      })();
      s.reg_normalize = n, t.customCodeResult = n;
    }
    return H("registrationCompleted", { isRegistered: s.reg_normalize.isRegistered, onboardingStatus: s.reg_normalize.onboardingStatus, redirectPath: s.reg_normalize.redirectPath, requestedRole: s.reg_normalize.requestedRole, roles: s.reg_normalize.roles, verificationStatus: s.reg_normalize.verificationStatus }, !1).catch((n) => console.error("Module output delivery failed", n)), H("navigationRequested", { path: s.reg_normalize.redirectPath }, !1).catch((n) => console.error("Module output delivery failed", n)), d("authenticatedProfile", s.reg_normalize), d("accessMode", "resolving"), d("message", s.reg_normalize.message), d("busy", !1), s.reg_normalize;
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
    const s = tt[e];
    if (s) {
      const y = it[e] || [];
      return s(Object.fromEntries(y.map((R, x) => {
        const J = Object.prototype.hasOwnProperty.call(i, R) ? i[R] : void 0;
        return [R, (J === "" || J === void 0) && t[x] !== void 0 ? t[x] : R === "event" && (J === "" || J === void 0) ? t[0] : J];
      })));
    }
    const n = p?.[e];
    if (typeof n == "function")
      return n(Object.keys(i).length > 0 ? i : t[0]);
    const [r, c] = String(e).split("."), f = typeof globalThis < "u" ? globalThis[r]?.[c] : void 0;
    if (typeof f == "function") return f(...Object.values(i));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, T = re(/* @__PURE__ */ new Map()), rt = Q((e, i, t, s) => {
    const n = T.current.get(e);
    if (i === "exhaust" && n?.promise) return n.promise;
    i === "takeLatest" && n?.controller?.abort();
    const r = new AbortController(), c = () => Promise.resolve().then(() => t(r.signal)), f = i === "queue" && n?.promise ? n.promise.catch(() => {
    }).then(c) : c();
    return T.current.set(e, { controller: r, promise: f }), f.catch((y) => {
      y?.name !== "AbortError" && console.error(s, y);
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
  }, [L, j, ae]), /* @__PURE__ */ h("div", { ref: k, className: "rudra-module-wrapper", children: l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
    "      ",
    /* @__PURE__ */ o(D, { id: "root", className: "rs-access", children: [
      "      ",
      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
        "      ",
        /* @__PURE__ */ o(D, { id: "panel", className: "rs-access-grid", children: [
          "      ",
          l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
            "      ",
            /* @__PURE__ */ o(D, { id: "story", className: "rs-access-story", children: [
              "      ",
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ o(D, { id: "story_badge", "aria-label": "College mathematics proof of concept", className: "rs-badge-row", children: [
                  "      ",
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(v, { icon: "GraduationCap", id: "story_badge_icon", size: 14, color: "#b8f7e7", strokeWidth: 2 })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(q, { id: "story_badge_label", className: "rs-badge-label", as: "span", content: "College mathematics · POC", customColor: "#eafff8" })
                  ] })
                ] })
              ] }),
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(q, { id: "title", className: "rs-access-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learn mathematics with context, not shortcuts." : e)(_?.i18n?.title), customColor: "#eafff8" })
              ] }),
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(q, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Work through challenging problems step by step—with explanations that make the ideas stick." : e)(_?.i18n?.subtitle) })
              ] }),
              l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(Y, { id: "trust", appearance: "outlined", live: "off", title: "SQL is the authority", variant: "neutral" })
              ] })
            ] })
          ] }),
          l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
            "      ",
            /* @__PURE__ */ o(D, { id: "form_area", className: "rs-access-form", children: [
              "      ",
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(q, { id: "signin_eyebrow", className: "rs-signin-eyebrow", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "WELCOME TO RUDRA SCHOLAR" : e)(_?.i18n?.welcome) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(q, { id: "signin_title", className: "rs-signin-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready to think through the next problem?" : e)(_?.i18n?.signInTitle) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(q, { id: "signin_intro", className: "rs-signin-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in to continue your lessons, saved work, and learning progress." : e)(_?.i18n?.signInIntro) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(oe, { id: "google", leftIcon: /* @__PURE__ */ o(a, { children: [
                  "      ",
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(v, { icon: { iconType: "url", url: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }, id: "google_logo", size: 20, strokeWidth: 1.2 })
                  ] })
                ] }), theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee), onAction: (...e) => U("requestGoogleSignIn", {}, e), id: "scholar-google-signin", size: "lg", variant: "outline", ariaLabel: "Sign in with Google", fullWidth: !0, rightIcon: !1, label: /* @__PURE__ */ ((e) => e === void 0 ? "Sign in with Google" : e)(_?.i18n?.google) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(B)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(q, { id: "notice", className: "rs-signin-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : e)(_?.i18n?.signInHelp) })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(q, { id: "heading", content: /* @__PURE__ */ ((e) => e === void 0 ? "Create your Scholar account" : e)(_?.i18n?.profile), as: "h3" })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ o(ot, { id: "profile_form", className: "rs-form", initialValues: { requestedRole: "student" }, onSubmit: (...e) => U("submitRegistration", {}, e), children: [
                  "      ",
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(q, { id: "registration_progress", className: "rs-registration-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1 of 3 · Profile" : e)(ue) })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "email", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "Mail", id: "email_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "verifiedEmail", size: "md", type: "email", label: "Verified Google email", value: /* @__PURE__ */ ((e) => e === void 0 ? "Signed-in Google account" : e)(ce?.email), disabled: !0 })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "first_name", name: "firstName", size: "md", type: "text", label: "First name", required: !0 })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "last_name", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "UserRound", id: "last_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), type: "text", label: "Last name", required: !0, name: "lastName", size: "md" })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(ye, { id: "role", required: !0, onChangeValue: (...e) => U("setRequestedRole", {}, e), name: "requestedRole", label: "Create account as", value: "student", radius: "md", options: [{ label: "Student", value: "student" }, { label: "Professor / teacher", value: "educator" }, { label: "Institution administrator", value: "institution_admin" }] })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "qualification", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "GraduationCap", id: "qualification_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), size: "md", type: "text", label: "Highest relevant qualification", required: !0, placeholder: "For example, M.Sc. Mathematics", name: "qualification" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "institution", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "TicketCheck", id: "institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), label: "Institution invite code (optional)", required: !1, placeholder: "Enter a verified college invite code", name: "institutionInvite", size: "md", type: "text" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(Y, { id: "kyc_intro", live: "off", title: "Role verification required", variant: "neutral", appearance: "outlined" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "expertise", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "Sigma", id: "expertise_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "subjectExpertise", size: "md", type: "text", label: "Mathematics expertise", required: !0, placeholder: "For example, Linear Algebra, Calculus" })
                  ] }),
                  l(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "kyc", name: "kycReference", size: "md", type: "text", label: "Legacy verification field disabled", required: !1, placeholder: "Secure upload reference — do not paste document data" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(st, { id: "professional_statement", autoResize: !0, placeholder: "Briefly describe your teaching experience.", name: "professionalStatement", size: "md", label: "Short professional statement", maxRows: 6, minRows: 3, required: !0 })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "educator_institution", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "School", id: "educator_institution_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, name: "institutionName", size: "md", type: "text", label: "College or university" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "evidence", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "BadgeCheck", id: "evidence_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "kycEvidence", size: "md", type: "text", label: "KYC verification evidence", required: !0, placeholder: "Use an institution email or public staff-profile URL" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "institution_legal_name", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "Landmark", id: "institution_legal_name_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionLegalName", size: "md", type: "text", label: "Institution legal name", required: !0 })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "institution_display_name", size: "md", type: "text", label: "Display name", required: !0, name: "institutionDisplayName" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(ye, { id: "institution_type", name: "institutionType", label: "Institution type", value: "college", options: [{ label: "College", value: "college" }, { label: "University", value: "university" }], required: !0 })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "institution_website", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "Globe", id: "institution_website_field_icon", strokeWidth: 1.8, size: 18 })
                      ] })
                    ] }), name: "institutionWebsite", size: "md", type: "url", label: "Official website", required: !0, placeholder: "https://example.edu" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "institution_domain", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "AtSign", id: "institution_domain_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), required: !0, placeholder: "example.edu", name: "institutionEmailDomain", size: "md", type: "text", label: "Institutional email domain" })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "institution_contact", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "Contact", id: "institution_contact_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "institutionContact", size: "md", type: "text", label: "Administrative contact", required: !0 })
                  ] }),
                  l(void 0) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(S, { id: "country", icon: /* @__PURE__ */ o(a, { children: [
                      "      ",
                      l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(v, { icon: "MapPin", id: "country_field_icon", size: 18, strokeWidth: 1.8 })
                      ] })
                    ] }), name: "country", size: "md", type: "text", label: "Country", required: !0 })
                  ] }),
                  l(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(se, { id: "age_confirmed", label: "I confirm I am 18 or older.", required: !1, colorScheme: "emerald", description: "The initial proof of concept is limited to college learners and adult educators.", name: "ageConfirmed" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(se, { id: "terms", name: "termsAccepted", label: "I accept the Terms of Service.", required: !0, colorScheme: "emerald", description: "Required before an account can be created." })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(oe, { id: "submit", fullWidth: !0, rightIcon: !1, size: "lg", label: "Continue", theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee), leftIcon: !1, variant: "primary" })
                  ] }),
                  l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(V)) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ h(se, { id: "privacy", label: "I have read and accept the Privacy Notice.", required: !0, colorScheme: "emerald", description: "Required before an account can be created.", name: "privacyAccepted" })
                  ] }),
                  l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                    "      ",
                    /* @__PURE__ */ o(D, { id: "registration_actions", className: "rs-registration-actions", children: [
                      "      ",
                      l(he) && /* @__PURE__ */ o(a, { children: [
                        "      ",
                        /* @__PURE__ */ h(oe, { id: "registration_back", leftIcon: /* @__PURE__ */ o(a, { children: [
                          "      ",
                          l(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ o(a, { children: [
                            "      ",
                            /* @__PURE__ */ h(v, { icon: "ArrowLeft", id: "registration_back_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), fullWidth: !0, rightIcon: !1, additionalAttributes: {}, id: "scholar-registration-back", onAction: (...e) => U("goBackRegistrationStep", {}, e), size: "lg", type: "button", label: "Back", theme: "auto", variant: "secondary" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              l(de) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(Y, { id: "message", live: "polite", title: "Scholar access", variant: "neutral", appearance: "outlined" })
              ] }),
              l(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(le)) && /* @__PURE__ */ o(a, { children: [
                "      ",
                /* @__PURE__ */ h(Y, { id: "pending_notice", title: "Professor verification pending", variant: "warning", appearance: "outlined", live: "polite" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ht as default
};
