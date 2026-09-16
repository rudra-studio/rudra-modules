import { jsx as y, jsxs as c, Fragment as h } from "react/jsx-runtime";
import ce, { useState as q, useEffect as C, useRef as oe, useCallback as V } from "react";
import { Box as A, Repeater as ke } from "@rudra-studio/rudra-layout";
import { Typography as _, Button as E, Alert as ct, Card as le } from "@rudra-studio/rudra-core";
import * as re from "lucide-react";
const we = (i) => String(i || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), lt = (i) => {
  let x = i;
  for (; x && typeof x == "object" && "type" in x && "value" in x; )
    x = x.value;
  return x;
};
function ue({ icon: i, size: x, color: w, strokeWidth: z, className: K = "", style: N, ...Q }) {
  const k = lt(i), [G, B] = q(null), X = k && typeof k == "object" ? JSON.stringify(k) : String(k || "");
  C(() => {
    const I = new AbortController();
    let U = "", F = "";
    if (B(null), typeof k == "string") {
      const P = k.trim();
      if (re[P]) return () => I.abort();
      P.startsWith("<svg") ? F = P : (/^https?:\/\//.test(P) || P.startsWith("/") || P.startsWith("data:image/svg")) && (U = P);
    } else k && typeof k == "object" && (k.iconType === "svg" && k.svgContent ? F = k.svgContent : k.iconType === "url" && k.url && (U = k.url));
    return F ? B(we(F)) : U && fetch(U, { signal: I.signal }).then((P) => {
      if (!P.ok) throw new Error("Icon request failed (" + P.status + ")");
      return P.text();
    }).then((P) => {
      P.trim().startsWith("<svg") && B(we(P));
    }).catch((P) => {
      P.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", P);
    }), () => I.abort();
  }, [X]);
  const D = k && typeof k == "object" ? k.props || {} : {}, f = { ...D };
  delete f.size, delete f.color, delete f.strokeWidth;
  const u = x ?? D.size ?? 24, Y = w ?? D.color ?? "currentColor", Z = z ?? D.strokeWidth ?? 1.5;
  let W = "";
  if (typeof k == "string" && re[k] ? W = k : k && typeof k == "object" && k.name && (!k.iconType || k.iconType === "lucide") && (W = k.name), W) {
    const I = re[W];
    if (I)
      return ce.createElement(I, {
        size: u,
        color: Y,
        strokeWidth: Z,
        className: K,
        style: N,
        ...f,
        ...Q
      });
  }
  if (G)
    return ce.createElement("span", {
      ...f,
      ...Q,
      className: ("rudra-universal-icon " + K).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: u,
        height: u,
        color: Y,
        ...N
      },
      dangerouslySetInnerHTML: {
        __html: G.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + Z + '">')
      }
    });
  const ee = re.LayoutGrid;
  return ce.createElement(ee, {
    size: u,
    color: Y,
    strokeWidth: Z,
    className: K,
    style: N,
    ...f,
    ...Q
  });
}
function ft(i) {
  const x = {}, w = i.serverData || i.serverState || {};
  i.sharedState, i.applicationState || w.applicationState, i.pageState || w.pageState;
  const z = i.pageData || w.pageData || {}, K = {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  };
  i.$route ?? i.route ?? i.data?.$route ?? i.data?.route ?? i.runtime?.data?.$route ?? i.runtime?.route ?? w?.$route ?? w?.route, i.$params ?? i.routeParams ?? i.params ?? i.data?.$params ?? i.data?.routeParams ?? i.data?.params ?? i.runtime?.data?.$params ?? i.runtime?.route?.params ?? i.runtime?.routeParams ?? i.runtime?.params ?? w?.$params ?? w?.routeParams ?? w?.params, i.$query ?? i.queryParams ?? i.query ?? i.data?.$query ?? i.data?.queryParams ?? i.data?.query ?? i.runtime?.data?.$query ?? i.runtime?.route?.query ?? i.runtime?.queryParams ?? i.runtime?.query ?? w?.$query ?? w?.queryParams ?? w?.query, i.$auth ?? i.auth ?? i.data?.$auth ?? i.data?.auth ?? i.runtime?.data?.$auth ?? i.runtime?.authInfo ?? i.runtime?.auth ?? w?.$auth ?? w?.auth, i.$config ?? i.config ?? i.data?.$config ?? i.data?.config ?? i.runtime?.data?.$config ?? i.runtime?.config ?? w?.$config ?? w?.config, i.$env ?? i.env ?? i.data?.$env ?? i.data?.env ?? i.runtime?.data?.$env ?? i.runtime?.env ?? w?.$env ?? w?.env, i.$locale ?? i.locale ?? i.data?.$locale ?? i.data?.locale ?? i.runtime?.data?.$locale ?? i.runtime?.locale ?? w?.$locale ?? w?.locale, i.$translations ?? i.translations ?? i.data?.$translations ?? i.data?.translations ?? i.runtime?.data?.$translations ?? i.runtime?.translations ?? w?.$translations ?? w?.translations, i.$i18n ?? i.i18n ?? i.data?.$i18n ?? i.data?.i18n ?? i.runtime?.data?.$i18n ?? i.runtime?.i18n ?? w?.$i18n ?? w?.i18n;
  const N = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, Q = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [k, G] = q(() => N ?? Q());
  C(() => {
    N != null && G(N);
  }, [N]), C(() => {
    if (N != null || typeof document > "u") return;
    const e = document.documentElement, o = (a) => G(a?.detail?.theme ?? Q()), t = new MutationObserver(o);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", o), o(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", o);
    };
  }, [N]);
  const B = oe(null), [X, D] = q("lg");
  C(() => {
    if (!B.current) return;
    const e = new ResizeObserver((o) => {
      for (let t of o) {
        const a = t.contentRect.width;
        a < 768 ? D("sm") : a < 1024 ? D("md") : D("lg");
      }
    });
    return e.observe(B.current), () => e.disconnect();
  }, []);
  const f = V((e) => typeof e != "object" || e === null ? e : X === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : X === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [X]), u = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, Y = i.subjectCards !== void 0 ? i.subjectCards : i.data?.subjectCards !== void 0 ? i.data.subjectCards : [{ description: "Vectors, matrices, linear maps, eigenvalues and diagonalisation.", locked: !1, redirectionLink: "/browse/engineering/semester-1/linear-algebra", title: "Linear algebra" }, { description: "Limits, derivatives, integration and multivariable reasoning.", locked: !1, redirectionLink: "/browse/engineering/semester-1/calculus", title: "Calculus" }, { description: "Logic, combinatorics, graphs and recurrence relations.", locked: !1, redirectionLink: "/browse/engineering/semester-1/discrete-mathematics", title: "Discrete mathematics" }], Z = i.pageMode !== void 0 ? i.pageMode : i.data?.pageMode !== void 0 ? i.data.pageMode : "landing", W = i.authenticated !== void 0 ? i.authenticated : i.data?.authenticated !== void 0 ? i.data.authenticated : !1, ee = i.locale !== void 0 ? i.locale : i.data?.locale !== void 0 ? i.data.locale : "en", I = i.subjectsLocked !== void 0 ? i.subjectsLocked : i.data?.subjectsLocked !== void 0 ? i.data.subjectsLocked : !1, U = i.programmeSlug !== void 0 ? i.programmeSlug : i.data?.programmeSlug !== void 0 ? i.data.programmeSlug : "engineering", F = i.initialSolveMode !== void 0 ? i.initialSolveMode : i.data?.initialSolveMode !== void 0 ? i.data.initialSolveMode : "answer", P = i.subjectSlug !== void 0 ? i.subjectSlug : i.data?.subjectSlug !== void 0 ? i.data.subjectSlug : "linear-algebra", je = i.returnPath !== void 0 ? i.returnPath : i.data?.returnPath !== void 0 ? i.data.returnPath : "/learn", de = i.autoSolveOnLoad !== void 0 ? i.autoSolveOnLoad : i.data?.autoSolveOnLoad !== void 0 ? i.data.autoSolveOnLoad : !0, Le = i.semesterSlug !== void 0 ? i.semesterSlug : i.data?.semesterSlug !== void 0 ? i.data.semesterSlug : "semester-1", me = i.accessProfile !== void 0 ? i.accessProfile : i.data?.accessProfile !== void 0 ? i.data.accessProfile : {}, b = { subjectCards: Y, pageMode: Z, authenticated: W, locale: ee, subjectsLocked: I, programmeSlug: U, initialSolveMode: F, subjectSlug: P, returnPath: je, autoSolveOnLoad: de, semesterSlug: Le, accessProfile: me }, [qe, Pe] = q(() => structuredClone(!1)), [he, Ae] = q(() => structuredClone(!1)), [fe, Me] = q(() => structuredClone(!0)), [Ee, Ne] = q(() => structuredClone({ authenticated: !1, isRegistered: !1, roles: [], verificationStatus: "not_required" })), [Te, Oe] = q(() => structuredClone("")), [pe, Ce] = q(() => structuredClone(!1)), [R, De] = q(() => structuredClone("answer")), [ge, Ie] = q(() => structuredClone("Solve the system 2x + y = 7 and −x + y = 1.")), [ye, Re] = q(() => structuredClone([{ checked: !1, description: "Subtract the second equation from the first. The y terms cancel.", equation: `(2x + y) − (−x + y) = 7 − 1
3x = 6`, id: "demo-step-1", marker: "01", number: 1, title: "Eliminate y" }])), [$e, ze] = q(() => structuredClone(!0)), [Be, We] = q(() => structuredClone("")), [be, Fe] = q(() => structuredClone("Quick answer")), [He, Qe] = q(() => structuredClone(!1)), [Se, Ue] = q(() => structuredClone("x = 2 and y = 3. Both equations are satisfied.")), [Je, Ke] = q(() => structuredClone("en")), [O, Ge] = q(() => structuredClone(1)), [ve, Xe] = q(() => structuredClone(!1)), S = { canOpenProfessorStudio: qe, isSubjectNavigating: he, showDemoSolution: fe, accessDecision: Ee, actionMessage: Te, showActionMessage: pe, demoSolutionMode: R, problemText: ge, demoVisibleSteps: ye, showAccessHint: $e, lastProblemControlId: Be, demoSolutionTitle: be, canLearn: He, demoSolutionText: Se, problemLanguage: Je, demoStepIndex: O, subjectNavigationFailed: ve }, l = V((e, o) => {
    switch (e) {
      case "canOpenProfessorStudio": {
        const t = typeof o == "function" ? o(S.canOpenProfessorStudio) : o;
        return S.canOpenProfessorStudio = t, Pe(t), t;
      }
      case "isSubjectNavigating": {
        const t = typeof o == "function" ? o(S.isSubjectNavigating) : o;
        return S.isSubjectNavigating = t, Ae(t), t;
      }
      case "showDemoSolution": {
        const t = typeof o == "function" ? o(S.showDemoSolution) : o;
        return S.showDemoSolution = t, Me(t), t;
      }
      case "accessDecision": {
        const t = typeof o == "function" ? o(S.accessDecision) : o;
        return S.accessDecision = t, Ne(t), t;
      }
      case "actionMessage": {
        const t = typeof o == "function" ? o(S.actionMessage) : o;
        return S.actionMessage = t, Oe(t), t;
      }
      case "showActionMessage": {
        const t = typeof o == "function" ? o(S.showActionMessage) : o;
        return S.showActionMessage = t, Ce(t), t;
      }
      case "demoSolutionMode": {
        const t = typeof o == "function" ? o(S.demoSolutionMode) : o;
        return S.demoSolutionMode = t, De(t), t;
      }
      case "problemText": {
        const t = typeof o == "function" ? o(S.problemText) : o;
        return S.problemText = t, Ie(t), t;
      }
      case "demoVisibleSteps": {
        const t = typeof o == "function" ? o(S.demoVisibleSteps) : o;
        return S.demoVisibleSteps = t, Re(t), t;
      }
      case "showAccessHint": {
        const t = typeof o == "function" ? o(S.showAccessHint) : o;
        return S.showAccessHint = t, ze(t), t;
      }
      case "lastProblemControlId": {
        const t = typeof o == "function" ? o(S.lastProblemControlId) : o;
        return S.lastProblemControlId = t, We(t), t;
      }
      case "demoSolutionTitle": {
        const t = typeof o == "function" ? o(S.demoSolutionTitle) : o;
        return S.demoSolutionTitle = t, Fe(t), t;
      }
      case "canLearn": {
        const t = typeof o == "function" ? o(S.canLearn) : o;
        return S.canLearn = t, Qe(t), t;
      }
      case "demoSolutionText": {
        const t = typeof o == "function" ? o(S.demoSolutionText) : o;
        return S.demoSolutionText = t, Ue(t), t;
      }
      case "problemLanguage": {
        const t = typeof o == "function" ? o(S.problemLanguage) : o;
        return S.problemLanguage = t, Ke(t), t;
      }
      case "demoStepIndex": {
        const t = typeof o == "function" ? o(S.demoStepIndex) : o;
        return S.demoStepIndex = t, Ge(t), t;
      }
      case "subjectNavigationFailed": {
        const t = typeof o == "function" ? o(S.subjectNavigationFailed) : o;
        return S.subjectNavigationFailed = t, Xe(t), t;
      }
      default:
        return o;
    }
  }, [S]);
  V((e, o) => {
    const [t, ...a] = String(e || "").split(".");
    if (!t) return o;
    if (a.length === 0) return l(t, o);
    const s = (n) => {
      const p = Array.isArray(n) ? [...n] : { ...n || {} };
      let r = p;
      return a.forEach((d, m) => {
        m === a.length - 1 ? r[d] = o : (r[d] = Array.isArray(r[d]) ? [...r[d]] : { ...r[d] || {} }, r = r[d]);
      }), p;
    };
    switch (t) {
      case "canOpenProfessorStudio":
        return l("canOpenProfessorStudio", s), o;
      case "isSubjectNavigating":
        return l("isSubjectNavigating", s), o;
      case "showDemoSolution":
        return l("showDemoSolution", s), o;
      case "accessDecision":
        return l("accessDecision", s), o;
      case "actionMessage":
        return l("actionMessage", s), o;
      case "showActionMessage":
        return l("showActionMessage", s), o;
      case "demoSolutionMode":
        return l("demoSolutionMode", s), o;
      case "problemText":
        return l("problemText", s), o;
      case "demoVisibleSteps":
        return l("demoVisibleSteps", s), o;
      case "showAccessHint":
        return l("showAccessHint", s), o;
      case "lastProblemControlId":
        return l("lastProblemControlId", s), o;
      case "demoSolutionTitle":
        return l("demoSolutionTitle", s), o;
      case "canLearn":
        return l("canLearn", s), o;
      case "demoSolutionText":
        return l("demoSolutionText", s), o;
      case "problemLanguage":
        return l("problemLanguage", s), o;
      case "demoStepIndex":
        return l("demoStepIndex", s), o;
      case "subjectNavigationFailed":
        return l("subjectNavigationFailed", s), o;
      default:
        return o;
    }
  }, [l]);
  const Ye = { accessRequired: { properties: { path: { type: "string" }, reason: { type: "string" }, returnPath: { type: "string" } }, required: ["reason", "returnPath", "path"], type: "object" }, imageProblemRequested: { properties: { context: { type: "object" } }, type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, type: "object" }, problemSubmitted: { properties: { context: { type: "object" }, languageCode: { type: "string" }, mode: { type: "string" }, problem: { type: "string" } }, required: ["problem", "mode", "languageCode"], type: "object" } }, ie = (e, o, t) => {
    if (!o || typeof o != "object") return "";
    const a = Array.isArray(o.type) ? o.type : o.type ? [o.type] : [], s = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (a.length && !a.includes(s) && !(s === "integer" && a.includes("number"))) return t + " must be " + a.join(" or ") + ".";
    if (o.enum && !o.enum.some((n) => JSON.stringify(n) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const n of o.required || []) if (!Object.prototype.hasOwnProperty.call(e, n)) return t + "." + n + " is required.";
      for (const [n, p] of Object.entries(o.properties || {})) if (Object.prototype.hasOwnProperty.call(e, n)) {
        const r = ie(e[n], p, t + "." + n);
        if (r) return r;
      }
    }
    if (Array.isArray(e) && o.items) for (let n = 0; n < e.length; n++) {
      const p = ie(e[n], o.items, t + "[" + n + "]");
      if (p) return p;
    }
    return "";
  }, H = V(async (e, o, t = !1) => {
    const a = Ye[e];
    if (!a) throw new Error("Module output '" + e + "' is not declared.");
    const s = ie(o, a, "output." + e);
    if (s) throw new Error(s);
    const n = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof n != "function") return o;
    const p = n(e, o, { moduleId: i.moduleId, awaitHandlers: t });
    return t ? await p : o;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]);
  async function Ze(e = {}) {
    const o = e || {}, t = {}, a = {};
    try {
      {
        const s = o.event, n = z, p = S, r = await (async () => {
          const d = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, m = Object.keys(d).length > 0, v = d.authenticated === !0 || d.isAuthenticated === !0 || !!(d.uid || d.userId || d.id) || b.authenticated === !0, g = v && d.isRegistered === !0, L = Array.isArray(d.roles) ? d.roles.map(String) : [], j = String(d.verificationStatus || "not_required"), $ = L.includes("professor") || L.includes("educator") || L.includes("admin") || L.includes("institution_admin"), T = g && $ && ["approved", "verified"].includes(j);
          return { authenticated: v, isRegistered: g, roles: L, verificationStatus: j, canLearn: g, canOpenProfessorStudio: T };
        })();
        a.image_access = r, t.customCodeResult = r;
      }
    } catch (s) {
      const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "image_access" };
      return t.error = n, a.image_access = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
    }
    if (a.image_access.canLearn) {
      l("actionMessage", ""), l("showActionMessage", !1);
      try {
        await H("imageProblemRequested", { context: { programmeSlug: b.programmeSlug, semesterSlug: b.semesterSlug, subjectSlug: b.subjectSlug } }, !0);
      } catch (s) {
        const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "image_emit" };
        return t.error = n, a.image_emit = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
      }
      return { ok: !0 };
    } else {
      l("actionMessage", "Sign in and complete your Scholar profile before uploading a problem image."), l("showActionMessage", !0);
      try {
        await te({ reason: "registration_required", returnPath: b.returnPath });
      } catch (s) {
        const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "image_denied_request" };
        return t.error = n, a.image_denied_request = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
      }
      return a.image_denied_request;
    }
  }
  async function te(e = {}) {
    const o = e || {}, t = {}, a = {};
    try {
      {
        const s = o.event, n = z, p = S, r = await (async () => {
          const d = String(o.reason || "registration_required"), m = String(o.returnPath || b.returnPath || "/learn"), v = d === "professor_approval_required" ? "/account/verification" : "/access", g = v === "/access" ? v + "?returnPath=" + encodeURIComponent(m) : v;
          return { reason: d, returnPath: m, path: g };
        })();
        a.access_request_prepare = r, t.customCodeResult = r;
      }
    } catch (s) {
      const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "access_request_prepare" };
      return t.error = n, a.access_request_prepare = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
    }
    try {
      await H("accessRequired", { path: a.access_request_prepare.path, reason: a.access_request_prepare.reason, returnPath: a.access_request_prepare.returnPath }, !0);
    } catch (s) {
      const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "access_request_emit" };
      return t.error = n, a.access_request_emit = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
    }
    try {
      await H("navigationRequested", { path: a.access_request_prepare.path }, !0);
    } catch (s) {
      const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "access_request_navigate" };
      return t.error = n, a.access_request_navigate = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
    }
    return a.access_request_prepare;
  }
  async function ne(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const a = await (async () => {
        const s = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {};
        Object.keys(s).length > 0;
        const n = s.authenticated === !0 || s.isAuthenticated === !0 || !!(s.uid || s.userId || s.id) || b.authenticated === !0, p = n && s.isRegistered === !0, r = Array.isArray(s.roles) ? s.roles.map(String) : [], d = String(s.verificationStatus || "not_required"), m = r.includes("professor") || r.includes("educator") || r.includes("admin") || r.includes("institution_admin"), v = p && m && ["approved", "verified"].includes(d);
        return { authenticated: n, isRegistered: p, roles: r, verificationStatus: d, canLearn: p, canOpenProfessorStudio: v };
      })();
      t.access_derive = a;
    }
    return l("accessDecision", t.access_derive), l("canLearn", t.access_derive.canLearn), l("canOpenProfessorStudio", t.access_derive.canOpenProfessorStudio), t.access_derive;
  }
  async function Ve(e = {}) {
    const o = e || {}, t = {}, a = {};
    try {
      {
        const s = o.event, n = z, p = S, r = await (async () => {
          const d = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, m = Object.keys(d).length > 0, v = d.authenticated === !0 || d.isAuthenticated === !0 || !!(d.uid || d.userId || d.id) || b.authenticated === !0, g = v && d.isRegistered === !0, L = Array.isArray(d.roles) ? d.roles.map(String) : [], j = String(d.verificationStatus || "not_required"), $ = L.includes("professor") || L.includes("educator") || L.includes("admin") || L.includes("institution_admin"), T = g && $ && ["approved", "verified"].includes(j);
          return { authenticated: v, isRegistered: g, roles: L, verificationStatus: j, canLearn: g, canOpenProfessorStudio: T };
        })();
        a.professor_access = r, t.customCodeResult = r;
      }
    } catch (s) {
      const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "professor_access" };
      return t.error = n, a.professor_access = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
    }
    if (a.professor_access.canOpenProfessorStudio) {
      try {
        await H("navigationRequested", { path: "/professor/context" }, !0);
      } catch (s) {
        const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "professor_open" };
        return t.error = n, a.professor_open = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
      }
      return { ok: !0, path: "/professor/context" };
    } else {
      try {
        {
          const s = o.event, n = z, p = S, r = await (async () => {
            const d = a.professor_access.isRegistered === !0;
            return {
              reason: d ? "professor_approval_required" : "registration_required",
              returnPath: "/professor/context",
              message: d ? "Professor tools require an approved educator role." : "Sign in and complete registration before opening Professor Studio."
            };
          })();
          a.professor_denied_prepare = r, t.customCodeResult = r;
        }
      } catch (s) {
        const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "professor_denied_prepare" };
        return t.error = n, a.professor_denied_prepare = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
      }
      l("actionMessage", a.professor_denied_prepare.message), l("showActionMessage", !0);
      try {
        await te({ reason: a.professor_denied_prepare.reason, returnPath: a.professor_denied_prepare.returnPath });
      } catch (s) {
        const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "professor_denied_request" };
        return t.error = n, a.professor_denied_request = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
      }
      return a.professor_denied_request;
    }
  }
  async function et(e = {}) {
    await H("navigationRequested", { path: (e || {}).path }, !0);
  }
  async function ae(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const a = await (async () => {
        const s = ["en", "hi", "ta"].includes(String(b.locale || "en")) ? String(b.locale || "en") : "en", n = ["answer", "steps"].includes(String(b.initialSolveMode || "answer")) ? String(b.initialSolveMode || "answer") : "answer", r = {
          en: {
            problem: "Solve the system 2x + y = 7 and −x + y = 1.",
            answerTitle: "Quick answer",
            answer: "x = 2 and y = 3. Both equations are satisfied.",
            stepsTitle: "Detailed solution",
            steps: "1. Subtract the second equation from the first: 3x = 6.  2. Therefore x = 2.  3. Substitute into −x + y = 1: −2 + y = 1.  4. Therefore y = 3.  5. Check: 2(2) + 3 = 7."
          },
          hi: {
            problem: "समीकरण 2x + y = 7 और −x + y = 1 हल कीजिए।",
            answerTitle: "त्वरित उत्तर",
            answer: "x = 2 और y = 3। दोनों समीकरण संतुष्ट होते हैं।",
            stepsTitle: "विस्तृत हल",
            steps: "1. पहले समीकरण में से दूसरा घटाएँ: 3x = 6।  2. इसलिए x = 2।  3. इसे −x + y = 1 में रखें: −2 + y = 1।  4. इसलिए y = 3।  5. जाँच: 2(2) + 3 = 7।"
          },
          ta: {
            problem: "2x + y = 7 மற்றும் −x + y = 1 என்ற சமன்பாடுகளைத் தீர்க்கவும்.",
            answerTitle: "விரைவு விடை",
            answer: "x = 2 மற்றும் y = 3. இரண்டு சமன்பாடுகளும் நிறைவேறுகின்றன.",
            stepsTitle: "விரிவான தீர்வு",
            steps: "1. முதல் சமன்பாட்டிலிருந்து இரண்டாவதை கழிக்கவும்: 3x = 6.  2. ஆகவே x = 2.  3. இதை −x + y = 1 இல் பதிலிடவும்: −2 + y = 1.  4. ஆகவே y = 3.  5. சரிபார்ப்பு: 2(2) + 3 = 7."
          }
        }[s];
        return { language: s, mode: n, problem: r.problem, title: n === "steps" ? r.stepsTitle : r.answerTitle, solution: n === "steps" ? r.steps : r.answer, show: b.autoSolveOnLoad !== !1 };
      })();
      t.demo_prepare = a;
    }
    l("problemText", t.demo_prepare.problem), l("demoSolutionTitle", t.demo_prepare.title), l("demoSolutionText", t.demo_prepare.solution), l("demoSolutionMode", t.demo_prepare.mode), l("showDemoSolution", t.demo_prepare.show);
    {
      o.event;
      const a = await (async () => {
        function s(p) {
          const r = [
            `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
            "x = 6 ÷ 3 = 2",
            "−2 + y = 1",
            "y = 1 + 2 = 3",
            `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
          ], d = {
            en: {
              method: "Elimination method",
              result: "The solution pair",
              verified: "Both equations checked",
              list: "Step-by-step solution",
              titles: ["Eliminate y", "Solve for x", "Substitute x = 2", "Solve for y", "Check both equations"],
              descriptions: [
                "Subtract the second equation from the first. The y terms cancel.",
                "Divide both sides by 3 to isolate x.",
                "Use the value of x in the second equation, −x + y = 1.",
                "Add 2 to both sides to isolate y.",
                "Substitute the pair into the original equations. Both sides match."
              ]
            },
            hi: {
              method: "विलोपन विधि",
              result: "हल का युग्म",
              verified: "दोनों समीकरणों की जाँच हुई",
              list: "चरण-दर-चरण हल",
              titles: ["y को हटाएँ", "x का मान निकालें", "x = 2 रखें", "y का मान निकालें", "दोनों समीकरण जाँचें"],
              descriptions: [
                "पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।",
                "x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।",
                "दूसरे समीकरण −x + y = 1 में x का मान रखें।",
                "y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।",
                "मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।"
              ]
            },
            ta: {
              method: "நீக்கல் முறை",
              result: "தீர்வு இணை",
              verified: "இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன",
              list: "படிப்படியான தீர்வு",
              titles: ["y-ஐ நீக்கவும்", "x-ஐக் கண்டறியவும்", "x = 2 எனப் பதிலிடவும்", "y-ஐக் கண்டறியவும்", "இரு சமன்பாடுகளையும் சரிபார்க்கவும்"],
              descriptions: [
                "முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.",
                "x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.",
                "இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.",
                "y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.",
                "மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்."
              ]
            }
          }, m = Object.hasOwn(d, String(p)) ? d[String(p)] : d.en;
          return {
            method: m.method,
            result: m.result,
            verified: m.verified,
            list: m.list,
            steps: m.titles.map((v, g) => ({
              id: `demo-step-${g + 1}`,
              number: g + 1,
              marker: String(g + 1).padStart(2, "0"),
              title: v,
              description: m.descriptions[g],
              equation: r[g],
              checked: g === 4
            }))
          };
        }
        return s(b.locale).steps.slice(0, 1);
      })();
      t.compact_step_prepare = a;
    }
    return l("demoStepIndex", 1), l("demoVisibleSteps", t.compact_step_prepare), t.demo_prepare;
  }
  async function tt(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const a = await (async () => {
        const s = (function(p) {
          const r = [], d = /* @__PURE__ */ new Set(), m = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, v = Object.hasOwn(m, String(p?.locale)) ? m[String(p.locale)] : m.en;
          if (!Array.isArray(p?.subjectCards)) return r;
          for (const g of p.subjectCards.slice(0, 100)) {
            if (!g || typeof g != "object" || Array.isArray(g)) continue;
            const L = typeof g.title == "string" ? g.title.trim().slice(0, 120) : "", j = typeof g.redirectionLink == "string" ? g.redirectionLink.trim() : "";
            if (!L || !j.startsWith("/") || j.startsWith("//") || j.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(j) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(j) || d.has(j)) continue;
            d.add(j);
            const $ = p.subjectsLocked === !0 || g.locked === !0, T = typeof g.lockedLabel == "string" && g.lockedLabel.trim() ? g.lockedLabel.trim().slice(0, 120) : v[1];
            r.push({ id: j, title: L, description: typeof g.description == "string" ? g.description.trim().slice(0, 600) : "", redirectionLink: j, locked: $, actionLabel: $ ? T : v[0] });
          }
          return r;
        })(b);
        return !S.isSubjectNavigating && s.find((n) => n.redirectionLink === o.event?.value && !n.locked) || null;
      })();
      t.subject_guard = a;
    }
    if (t.subject_guard) {
      l("subjectNavigationFailed", !1), l("isSubjectNavigating", !0);
      try {
        await H("navigationRequested", { path: t.subject_guard.redirectionLink }, !0);
      } catch (a) {
        const s = { message: a instanceof Error ? a.message : String(a), name: a instanceof Error ? a.name : "Error", status: typeof a?.status == "number" ? a.status : void 0, stepId: "subject_emit" };
        return t.subject_emit = { error: s }, l("subjectNavigationFailed", !0), l("isSubjectNavigating", !1), { ok: !1 };
      }
      return l("isSubjectNavigating", !1), { ok: !0 };
    } else
      return { ok: !1, reason: "unavailable_subject" };
  }
  async function st(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const a = await (async () => {
        function s(v) {
          const g = [
            `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
            "x = 6 ÷ 3 = 2",
            "−2 + y = 1",
            "y = 1 + 2 = 3",
            `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
          ], L = {
            en: {
              method: "Elimination method",
              result: "The solution pair",
              verified: "Both equations checked",
              list: "Step-by-step solution",
              titles: ["Eliminate y", "Solve for x", "Substitute x = 2", "Solve for y", "Check both equations"],
              descriptions: [
                "Subtract the second equation from the first. The y terms cancel.",
                "Divide both sides by 3 to isolate x.",
                "Use the value of x in the second equation, −x + y = 1.",
                "Add 2 to both sides to isolate y.",
                "Substitute the pair into the original equations. Both sides match."
              ]
            },
            hi: {
              method: "विलोपन विधि",
              result: "हल का युग्म",
              verified: "दोनों समीकरणों की जाँच हुई",
              list: "चरण-दर-चरण हल",
              titles: ["y को हटाएँ", "x का मान निकालें", "x = 2 रखें", "y का मान निकालें", "दोनों समीकरण जाँचें"],
              descriptions: [
                "पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।",
                "x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।",
                "दूसरे समीकरण −x + y = 1 में x का मान रखें।",
                "y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।",
                "मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।"
              ]
            },
            ta: {
              method: "நீக்கல் முறை",
              result: "தீர்வு இணை",
              verified: "இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன",
              list: "படிப்படியான தீர்வு",
              titles: ["y-ஐ நீக்கவும்", "x-ஐக் கண்டறியவும்", "x = 2 எனப் பதிலிடவும்", "y-ஐக் கண்டறியவும்", "இரு சமன்பாடுகளையும் சரிபார்க்கவும்"],
              descriptions: [
                "முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.",
                "x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.",
                "இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.",
                "y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.",
                "மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்."
              ]
            }
          }, j = Object.hasOwn(L, String(v)) ? L[String(v)] : L.en;
          return {
            method: j.method,
            result: j.result,
            verified: j.verified,
            list: j.list,
            steps: j.titles.map(($, T) => ({
              id: `demo-step-${T + 1}`,
              number: T + 1,
              marker: String(T + 1).padStart(2, "0"),
              title: $,
              description: j.descriptions[T],
              equation: g[T],
              checked: T === 4
            }))
          };
        }
        const n = s(b.locale).steps, p = Number.isInteger(S.demoStepIndex) ? Math.max(1, Math.min(5, S.demoStepIndex)) : 1, r = o.event?.value, d = r === "next" ? p + 1 : r === "previous" ? p - 1 : Number(r), m = Number.isInteger(d) ? Math.max(1, Math.min(5, d)) : p;
        return { index: m, steps: n.slice(m - 1, m) };
      })();
      t.select_step_prepare = a;
    }
    return l("demoStepIndex", t.select_step_prepare.index), l("demoVisibleSteps", t.select_step_prepare.steps), t.select_step_prepare;
  }
  async function ot(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const a = await (async () => {
        const s = ["en", "hi", "ta"].includes(String(b.locale || "en")) ? String(b.locale || "en") : "en", n = {
          en: { title: "Detailed solution", solution: "1. Subtract the second equation from the first: 3x = 6.  2. Therefore x = 2.  3. Substitute into −x + y = 1: −2 + y = 1.  4. Therefore y = 3.  5. Check: 2(2) + 3 = 7." },
          hi: { title: "विस्तृत हल", solution: "1. पहले समीकरण में से दूसरा घटाएँ: 3x = 6।  2. इसलिए x = 2।  3. इसे −x + y = 1 में रखें: −2 + y = 1।  4. इसलिए y = 3।  5. जाँच: 2(2) + 3 = 7।" },
          ta: { title: "விரிவான தீர்வு", solution: "1. முதல் சமன்பாட்டிலிருந்து இரண்டாவதை கழிக்கவும்: 3x = 6.  2. ஆகவே x = 2.  3. இதை −x + y = 1 இல் பதிலிடவும்: −2 + y = 1.  4. ஆகவே y = 3.  5. சரிபார்ப்பு: 2(2) + 3 = 7." }
        };
        return { language: s, title: n[s].title, solution: n[s].solution };
      })();
      t.showDetailedSolution_prepare = a;
    }
    l("demoSolutionTitle", t.showDetailedSolution_prepare.title), l("demoSolutionText", t.showDetailedSolution_prepare.solution), l("demoSolutionMode", "steps"), l("showDemoSolution", !0);
    {
      o.event;
      const a = await (async () => {
        function s(p) {
          const r = [
            `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
            "x = 6 ÷ 3 = 2",
            "−2 + y = 1",
            "y = 1 + 2 = 3",
            `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
          ], d = {
            en: {
              method: "Elimination method",
              result: "The solution pair",
              verified: "Both equations checked",
              list: "Step-by-step solution",
              titles: ["Eliminate y", "Solve for x", "Substitute x = 2", "Solve for y", "Check both equations"],
              descriptions: [
                "Subtract the second equation from the first. The y terms cancel.",
                "Divide both sides by 3 to isolate x.",
                "Use the value of x in the second equation, −x + y = 1.",
                "Add 2 to both sides to isolate y.",
                "Substitute the pair into the original equations. Both sides match."
              ]
            },
            hi: {
              method: "विलोपन विधि",
              result: "हल का युग्म",
              verified: "दोनों समीकरणों की जाँच हुई",
              list: "चरण-दर-चरण हल",
              titles: ["y को हटाएँ", "x का मान निकालें", "x = 2 रखें", "y का मान निकालें", "दोनों समीकरण जाँचें"],
              descriptions: [
                "पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।",
                "x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।",
                "दूसरे समीकरण −x + y = 1 में x का मान रखें।",
                "y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।",
                "मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।"
              ]
            },
            ta: {
              method: "நீக்கல் முறை",
              result: "தீர்வு இணை",
              verified: "இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன",
              list: "படிப்படியான தீர்வு",
              titles: ["y-ஐ நீக்கவும்", "x-ஐக் கண்டறியவும்", "x = 2 எனப் பதிலிடவும்", "y-ஐக் கண்டறியவும்", "இரு சமன்பாடுகளையும் சரிபார்க்கவும்"],
              descriptions: [
                "முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.",
                "x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.",
                "இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.",
                "y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.",
                "மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்."
              ]
            }
          }, m = Object.hasOwn(d, String(p)) ? d[String(p)] : d.en;
          return {
            method: m.method,
            result: m.result,
            verified: m.verified,
            list: m.list,
            steps: m.titles.map((v, g) => ({
              id: `demo-step-${g + 1}`,
              number: g + 1,
              marker: String(g + 1).padStart(2, "0"),
              title: v,
              description: m.descriptions[g],
              equation: r[g],
              checked: g === 4
            }))
          };
        }
        return s(b.locale).steps.slice(0, 1);
      })();
      t.compact_step_prepare = a;
    }
    return l("demoStepIndex", 1), l("demoVisibleSteps", t.compact_step_prepare), { mode: "steps", ok: !0, solution: t.showDetailedSolution_prepare.solution };
  }
  async function rt(e = {}) {
    const o = e || {}, t = {}, a = {};
    try {
      {
        const s = o.event, n = z, p = S, r = await (async () => {
          const d = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, m = Object.keys(d).length > 0, v = d.authenticated === !0 || d.isAuthenticated === !0 || !!(d.uid || d.userId || d.id) || b.authenticated === !0, g = v && d.isRegistered === !0, L = String(S.problemText || "").trim();
          return { authenticated: v, isRegistered: g, canLearn: g, problem: L, hasProblem: L.length > 0 };
        })();
        a.problem_check = r, t.customCodeResult = r;
      }
    } catch (s) {
      const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "problem_check" };
      return t.error = n, a.problem_check = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
    }
    if (a.problem_check.canLearn)
      if (a.problem_check.hasProblem) {
        l("actionMessage", ""), l("showActionMessage", !1);
        try {
          await H("problemSubmitted", { context: { programmeSlug: b.programmeSlug, semesterSlug: b.semesterSlug, subjectSlug: b.subjectSlug }, languageCode: b.locale || "en", mode: o.mode, problem: a.problem_check.problem }, !0);
        } catch (s) {
          const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "problem_emit" };
          return t.error = n, a.problem_emit = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
        }
        return { languageCode: b.locale || "en", mode: o.mode, ok: !0, problem: a.problem_check.problem };
      } else
        return l("actionMessage", "Enter a mathematics problem before continuing."), l("showActionMessage", !0), { ok: !1, reason: "empty_problem" };
    else {
      l("actionMessage", "Sign in and complete your Scholar profile to solve this problem."), l("showActionMessage", !0);
      try {
        await te({ reason: "registration_required", returnPath: b.returnPath });
      } catch (s) {
        const n = { message: s instanceof Error ? s.message : String(s), name: s instanceof Error ? s.name : "Error", status: typeof s?.status == "number" ? s.status : void 0, stepId: "problem_denied_request" };
        return t.error = n, a.problem_denied_request = { error: n }, l("actionMessage", "This action could not be completed. Please retry."), l("showActionMessage", !0), { ok: !1 };
      }
      return a.problem_denied_request;
    }
  }
  async function it(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const a = await (async () => {
        const s = ["en", "hi", "ta"].includes(String(b.locale || "en")) ? String(b.locale || "en") : "en", n = {
          en: { title: "Quick answer", solution: "x = 2 and y = 3. Both equations are satisfied." },
          hi: { title: "त्वरित उत्तर", solution: "x = 2 और y = 3। दोनों समीकरण संतुष्ट होते हैं।" },
          ta: { title: "விரைவு விடை", solution: "x = 2 மற்றும் y = 3. இரண்டு சமன்பாடுகளும் நிறைவேறுகின்றன." }
        };
        return { language: s, title: n[s].title, solution: n[s].solution };
      })();
      t.showQuickSolution_prepare = a;
    }
    return l("demoSolutionTitle", t.showQuickSolution_prepare.title), l("demoSolutionText", t.showQuickSolution_prepare.solution), l("demoSolutionMode", "answer"), l("showDemoSolution", !0), { mode: "answer", ok: !0, solution: t.showQuickSolution_prepare.solution };
  }
  const nt = {
    requestImage: Ze,
    requestScholarAccess: te,
    initializeDiscoveryAccess: ne,
    openProfessorStudio: Ve,
    navigate: et,
    initializeHomeDemo: ae,
    openDiscoverySubject: tt,
    selectDemoSolutionStep: st,
    showDetailedSolution: ot,
    submitProblem: rt,
    showQuickSolution: it
  }, at = {
    requestImage: [],
    requestScholarAccess: ["reason", "returnPath"],
    initializeDiscoveryAccess: [],
    openProfessorStudio: [],
    navigate: ["path"],
    initializeHomeDemo: [],
    openDiscoverySubject: ["event"],
    selectDemoSolutionStep: ["event"],
    showDetailedSolution: [],
    submitProblem: ["mode"],
    showQuickSolution: []
  }, M = (e, o = {}, t = []) => {
    const a = nt[e];
    if (a) {
      const d = at[e] || [];
      return a(Object.fromEntries(d.map((m, v) => {
        const g = Object.prototype.hasOwnProperty.call(o, m) ? o[m] : void 0;
        return [m, (g === "" || g === void 0) && t[v] !== void 0 ? t[v] : m === "event" && (g === "" || g === void 0) ? t[0] : g];
      })));
    }
    const s = K?.[e];
    if (typeof s == "function")
      return s(Object.keys(o).length > 0 ? o : t[0]);
    const [n, p] = String(e).split("."), r = typeof globalThis < "u" ? globalThis[n]?.[p] : void 0;
    if (typeof r == "function") return r(...Object.values(o));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, J = oe(/* @__PURE__ */ new Map()), se = V((e, o, t, a) => {
    const s = J.current.get(e);
    if (o === "exhaust" && s?.promise) return s.promise;
    o === "takeLatest" && s?.controller?.abort();
    const n = new AbortController(), p = () => Promise.resolve().then(() => t(n.signal)), r = o === "queue" && s?.promise ? s.promise.catch(() => {
    }).then(p) : p();
    return J.current.set(e, { controller: n, promise: r }), r.catch((d) => {
      d?.name !== "AbortError" && console.error(a, d);
    }).finally(() => {
      J.current.get(e)?.promise === r && J.current.delete(e);
    }), r;
  }, []);
  C(() => () => {
    for (const e of J.current.values()) e.controller?.abort();
    J.current.clear();
  }, []), C(() => {
    se("discovery_access_mountinitializeDiscoveryAccess", "takeLatest", (e) => ne({}), "Module mount lifecycle failed:");
  }, []), C(() => {
    se("discovery_demo_mountinitializeHomeDemo", "takeLatest", (e) => ae({}), "Module mount lifecycle failed:");
  }, []);
  const xe = oe(!1);
  C(() => {
    if (!xe.current) {
      xe.current = !0;
      return;
    }
    se("discovery_access_inputsinitializeDiscoveryAccess", "takeLatest", (e) => ne({}), "Module input lifecycle failed:");
  }, [W, me]);
  const _e = oe(!1);
  return C(() => {
    if (!_e.current) {
      _e.current = !0;
      return;
    }
    se("discovery_demo_inputsinitializeHomeDemo", "takeLatest", (e) => ae({}), "Module input lifecycle failed:");
  }, [ee, de, F]), /* @__PURE__ */ y("div", { ref: B, className: "rudra-module-wrapper", children: u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
    "      ",
    /* @__PURE__ */ c(A, { id: "root", className: "block rs-discovery", children: [
      "      ",
      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
        "      ",
        /* @__PURE__ */ c(A, { id: "hero", className: "block rs-hero", children: [
          "      ",
          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
            "      ",
            /* @__PURE__ */ c(A, { id: "hero_inner", className: "grid rs-hero-inner", children: [
              "      ",
              u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                "      ",
                /* @__PURE__ */ c(A, { id: "copy", className: "flex flex-col rs-stack", children: [
                  "      ",
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(_, { id: "kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "A mathematics studio for college" : e)(x?.i18n?.kicker) })
                  ] }),
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(_, { id: "title", className: "rs-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "See the reasoning. Steer the lesson." : e)(x?.i18n?.title), customColor: "#effff9" })
                  ] }),
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(_, { id: "lede", className: "rs-lede", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose programme, semester and subject, then learn step by step." : e)(x?.i18n?.lede) })
                  ] }),
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ c(A, { id: "hero_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ y(E, { id: "browse_cta", size: "lg", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse mathematics" : e)(x?.i18n?.browse), theme: "dark", variant: "primary", onAction: (...e) => M("navigate", { path: "/browse/engineering/semester-1" }, e) })
                      ] }),
                      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ y(E, { id: "prof_cta", size: "lg", label: "Professor Studio", theme: "dark", variant: "outline", onAction: (...e) => M("openProfessorStudio", {}, e) })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                "      ",
                /* @__PURE__ */ c(A, { id: "workbench", className: "flex flex-col rs-workbench", children: [
                  "      ",
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(_, { id: "prompt_title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Explore a worked example" : e)(x?.i18n?.prompt), as: "h3" })
                  ] }),
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(_, { id: "demo_disclosure", className: "rs-demo-disclosure", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Fixed worked example — no AI request is made here." : e)(x?.i18n?.demoNote) })
                  ] }),
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(_, { id: "problem_input", className: "rs-demo-problem", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Solve the system 2x + y = 7 and −x + y = 1." : e)(ge) })
                  ] }),
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ c(A, { id: "problem_actions", className: "grid rs-actions rs-solution-controls", children: [
                      "      ",
                      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ y(E, { id: "solve_now", id: "scholar-demo-quick", onAction: (...e) => M("showQuickSolution", {}, e), "aria-pressed": /* @__PURE__ */ ((e) => e === "answer")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(R)), "aria-controls": "scholar-demo-solution", additionalAttributes: {}, type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Show answer" : e)(x?.i18n?.solveNow), theme: "light", variant: "primary" })
                      ] }),
                      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ y(E, { id: "steps", "aria-pressed": /* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(R)), additionalAttributes: {}, type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Show detailed steps" : e)(x?.i18n?.solveSteps), theme: "light", "aria-controls": "scholar-demo-solution", id: "scholar-demo-detailed", variant: "outline", onAction: (...e) => M("showDetailedSolution", {}, e) })
                      ] }),
                      u(f({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ y(E, { id: "teacher", label: "Learn with professor", theme: "light", variant: "outline", onAction: (...e) => M("submitProblem", { mode: "professor" }, e) })
                      ] })
                    ] })
                  ] }),
                  u(fe) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ c(A, { id: "demo_solution", "data-solution-mode": /* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(R), "aria-live": "polite", "aria-labelledby": "scholar-demo-solution-title", className: "flex flex-col rs-solution", id: "scholar-demo-solution", role: "region", children: [
                      "      ",
                      u(/* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(R))) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ c(A, { id: "demo_step_picker", "aria-label": /* @__PURE__ */ ((e) => e === void 0 ? "Choose a solution step" : e)(x?.i18n?.demoStepPicker), className: "grid rs-step-picker", role: "group", children: [
                          "      ",
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(E, { id: "demo_step_pick_1", className: "rs-step-dot", id: "scholar-demo_step_pick_1", type: "button", label: "1", value: 1, onAction: (...e) => M("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1: Eliminate y" : e)(x?.i18n?.demoStepLabel1), "aria-pressed": /* @__PURE__ */ ((e) => e === 1)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)) })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(E, { id: "demo_step_pick_2", className: "rs-step-dot", type: "button", label: "2", value: 2, onAction: (...e) => M("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 2: Solve for x" : e)(x?.i18n?.demoStepLabel2), "aria-pressed": /* @__PURE__ */ ((e) => e === 2)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)), id: "scholar-demo_step_pick_2" })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(E, { id: "demo_step_pick_3", className: "rs-step-dot", id: "scholar-demo_step_pick_3", type: "button", label: "3", value: 3, onAction: (...e) => M("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 3: Substitute x = 2" : e)(x?.i18n?.demoStepLabel3), "aria-pressed": /* @__PURE__ */ ((e) => e === 3)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)) })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(E, { id: "demo_step_pick_4", className: "rs-step-dot", ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 4: Solve for y" : e)(x?.i18n?.demoStepLabel4), "aria-pressed": /* @__PURE__ */ ((e) => e === 4)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)), id: "scholar-demo_step_pick_4", type: "button", label: "4", value: 4, onAction: (...e) => M("selectDemoSolutionStep", {}, e) })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(E, { id: "demo_step_pick_5", className: "rs-step-dot", label: "5", value: 5, onAction: (...e) => M("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 5: Check both equations" : e)(x?.i18n?.demoStepLabel5), "aria-pressed": /* @__PURE__ */ ((e) => e === 5)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)), id: "scholar-demo_step_pick_5", type: "button" })
                          ] })
                        ] })
                      ] }),
                      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ c(A, { id: "demo_solution_header", className: "grid rs-solution-heading", children: [
                          "      ",
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ c(A, { id: "demo_solution_icon_wrap", "aria-hidden": !0, className: "flex rs-solution-mark", children: [
                              "      ",
                              u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                "      ",
                                /* @__PURE__ */ y(ue, { icon: "Sparkles", id: "demo_solution_icon", size: 20, strokeWidth: 1.8 })
                              ] })
                            ] })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ c(A, { id: "demo_solution_heading_copy", className: "flex flex-col rs-solution-heading-copy", children: [
                              "      ",
                              u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                "      ",
                                /* @__PURE__ */ y(_, { id: "demo_solution_title", className: "rs-demo-solution-title", as: "h3", id: "scholar-demo-solution-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Quick answer" : e)(be) })
                              ] }),
                              u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                "      ",
                                /* @__PURE__ */ y(_, { id: "demo_solution_method", className: "rs-solution-method", as: "p", content: ((e) => (function(t) {
                                  const a = [
                                    `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                                    "x = 6 ÷ 3 = 2",
                                    "−2 + y = 1",
                                    "y = 1 + 2 = 3",
                                    `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                                  ], s = {
                                    en: {
                                      method: "Elimination method",
                                      result: "The solution pair",
                                      verified: "Both equations checked",
                                      list: "Step-by-step solution",
                                      titles: ["Eliminate y", "Solve for x", "Substitute x = 2", "Solve for y", "Check both equations"],
                                      descriptions: [
                                        "Subtract the second equation from the first. The y terms cancel.",
                                        "Divide both sides by 3 to isolate x.",
                                        "Use the value of x in the second equation, −x + y = 1.",
                                        "Add 2 to both sides to isolate y.",
                                        "Substitute the pair into the original equations. Both sides match."
                                      ]
                                    },
                                    hi: {
                                      method: "विलोपन विधि",
                                      result: "हल का युग्म",
                                      verified: "दोनों समीकरणों की जाँच हुई",
                                      list: "चरण-दर-चरण हल",
                                      titles: ["y को हटाएँ", "x का मान निकालें", "x = 2 रखें", "y का मान निकालें", "दोनों समीकरण जाँचें"],
                                      descriptions: [
                                        "पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।",
                                        "x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।",
                                        "दूसरे समीकरण −x + y = 1 में x का मान रखें।",
                                        "y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।",
                                        "मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।"
                                      ]
                                    },
                                    ta: {
                                      method: "நீக்கல் முறை",
                                      result: "தீர்வு இணை",
                                      verified: "இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன",
                                      list: "படிப்படியான தீர்வு",
                                      titles: ["y-ஐ நீக்கவும்", "x-ஐக் கண்டறியவும்", "x = 2 எனப் பதிலிடவும்", "y-ஐக் கண்டறியவும்", "இரு சமன்பாடுகளையும் சரிபார்க்கவும்"],
                                      descriptions: [
                                        "முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.",
                                        "x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.",
                                        "இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.",
                                        "y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.",
                                        "மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்."
                                      ]
                                    }
                                  }, n = Object.hasOwn(s, String(t)) ? s[String(t)] : s.en;
                                  return {
                                    method: n.method,
                                    result: n.result,
                                    verified: n.verified,
                                    list: n.list,
                                    steps: n.titles.map((p, r) => ({
                                      id: `demo-step-${r + 1}`,
                                      number: r + 1,
                                      marker: String(r + 1).padStart(2, "0"),
                                      title: p,
                                      description: n.descriptions[r],
                                      equation: a[r],
                                      checked: r === 4
                                    }))
                                  };
                                })(e).method)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)) })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] }),
                      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ c(A, { id: "demo_solution_result", className: "flex flex-col rs-solution-result", children: [
                          "      ",
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(_, { id: "demo_solution_result_label", className: "rs-solution-eyebrow", as: "p", content: ((e) => (function(t) {
                              const a = [
                                `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                                "x = 6 ÷ 3 = 2",
                                "−2 + y = 1",
                                "y = 1 + 2 = 3",
                                `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                              ], s = {
                                en: {
                                  method: "Elimination method",
                                  result: "The solution pair",
                                  verified: "Both equations checked",
                                  list: "Step-by-step solution",
                                  titles: ["Eliminate y", "Solve for x", "Substitute x = 2", "Solve for y", "Check both equations"],
                                  descriptions: [
                                    "Subtract the second equation from the first. The y terms cancel.",
                                    "Divide both sides by 3 to isolate x.",
                                    "Use the value of x in the second equation, −x + y = 1.",
                                    "Add 2 to both sides to isolate y.",
                                    "Substitute the pair into the original equations. Both sides match."
                                  ]
                                },
                                hi: {
                                  method: "विलोपन विधि",
                                  result: "हल का युग्म",
                                  verified: "दोनों समीकरणों की जाँच हुई",
                                  list: "चरण-दर-चरण हल",
                                  titles: ["y को हटाएँ", "x का मान निकालें", "x = 2 रखें", "y का मान निकालें", "दोनों समीकरण जाँचें"],
                                  descriptions: [
                                    "पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।",
                                    "x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।",
                                    "दूसरे समीकरण −x + y = 1 में x का मान रखें।",
                                    "y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।",
                                    "मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।"
                                  ]
                                },
                                ta: {
                                  method: "நீக்கல் முறை",
                                  result: "தீர்வு இணை",
                                  verified: "இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன",
                                  list: "படிப்படியான தீர்வு",
                                  titles: ["y-ஐ நீக்கவும்", "x-ஐக் கண்டறியவும்", "x = 2 எனப் பதிலிடவும்", "y-ஐக் கண்டறியவும்", "இரு சமன்பாடுகளையும் சரிபார்க்கவும்"],
                                  descriptions: [
                                    "முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.",
                                    "x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.",
                                    "இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.",
                                    "y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.",
                                    "மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்."
                                  ]
                                }
                              }, n = Object.hasOwn(s, String(t)) ? s[String(t)] : s.en;
                              return {
                                method: n.method,
                                result: n.result,
                                verified: n.verified,
                                list: n.list,
                                steps: n.titles.map((p, r) => ({
                                  id: `demo-step-${r + 1}`,
                                  number: r + 1,
                                  marker: String(r + 1).padStart(2, "0"),
                                  title: p,
                                  description: n.descriptions[r],
                                  equation: a[r],
                                  checked: r === 4
                                }))
                              };
                            })(e).result)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)) })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ c(A, { id: "demo_solution_values", className: "grid rs-solution-values", children: [
                              "      ",
                              u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                "      ",
                                /* @__PURE__ */ y(_, { id: "demo_solution_x", className: "rs-solution-value", content: "x = 2", as: "p" })
                              ] }),
                              u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                "      ",
                                /* @__PURE__ */ y(_, { id: "demo_solution_y", className: "rs-solution-value", as: "p", content: "y = 3" })
                              ] })
                            ] })
                          ] }),
                          u(/* @__PURE__ */ ((e) => e === "answer")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(R))) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(_, { id: "demo_solution_body", className: "rs-demo-solution-body rs-solution-summary", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "x = 2 and y = 3." : e)(Se) })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(_, { id: "demo_solution_verified", className: "rs-solution-verified", as: "p", content: ((e) => (function(t) {
                              const a = [
                                `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                                "x = 6 ÷ 3 = 2",
                                "−2 + y = 1",
                                "y = 1 + 2 = 3",
                                `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                              ], s = {
                                en: {
                                  method: "Elimination method",
                                  result: "The solution pair",
                                  verified: "Both equations checked",
                                  list: "Step-by-step solution",
                                  titles: ["Eliminate y", "Solve for x", "Substitute x = 2", "Solve for y", "Check both equations"],
                                  descriptions: [
                                    "Subtract the second equation from the first. The y terms cancel.",
                                    "Divide both sides by 3 to isolate x.",
                                    "Use the value of x in the second equation, −x + y = 1.",
                                    "Add 2 to both sides to isolate y.",
                                    "Substitute the pair into the original equations. Both sides match."
                                  ]
                                },
                                hi: {
                                  method: "विलोपन विधि",
                                  result: "हल का युग्म",
                                  verified: "दोनों समीकरणों की जाँच हुई",
                                  list: "चरण-दर-चरण हल",
                                  titles: ["y को हटाएँ", "x का मान निकालें", "x = 2 रखें", "y का मान निकालें", "दोनों समीकरण जाँचें"],
                                  descriptions: [
                                    "पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।",
                                    "x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।",
                                    "दूसरे समीकरण −x + y = 1 में x का मान रखें।",
                                    "y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।",
                                    "मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।"
                                  ]
                                },
                                ta: {
                                  method: "நீக்கல் முறை",
                                  result: "தீர்வு இணை",
                                  verified: "இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன",
                                  list: "படிப்படியான தீர்வு",
                                  titles: ["y-ஐ நீக்கவும்", "x-ஐக் கண்டறியவும்", "x = 2 எனப் பதிலிடவும்", "y-ஐக் கண்டறியவும்", "இரு சமன்பாடுகளையும் சரிபார்க்கவும்"],
                                  descriptions: [
                                    "முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.",
                                    "x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.",
                                    "இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.",
                                    "y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.",
                                    "மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்."
                                  ]
                                }
                              }, n = Object.hasOwn(s, String(t)) ? s[String(t)] : s.en;
                              return {
                                method: n.method,
                                result: n.result,
                                verified: n.verified,
                                list: n.list,
                                steps: n.titles.map((p, r) => ({
                                  id: `demo-step-${r + 1}`,
                                  number: r + 1,
                                  marker: String(r + 1).padStart(2, "0"),
                                  title: p,
                                  description: n.descriptions[r],
                                  equation: a[r],
                                  checked: r === 4
                                }))
                              };
                            })(e).verified)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)) })
                          ] })
                        ] })
                      ] }),
                      u(/* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(R))) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ y(ke, { id: "demo_solution_steps", className: "grid rs-solution-steps", role: "list", items: /* @__PURE__ */ ((e) => e === void 0 ? [{ checked: !1, description: "Subtract the second equation from the first. The y terms cancel.", equation: `(2x + y) − (−x + y) = 7 − 1
3x = 6`, id: "demo-step-1", marker: 1, number: 1, title: "Eliminate y" }] : e)(ye), "aria-label": ((e) => (function(t) {
                          const a = [
                            `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                            "x = 6 ÷ 3 = 2",
                            "−2 + y = 1",
                            "y = 1 + 2 = 3",
                            `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                          ], s = {
                            en: {
                              method: "Elimination method",
                              result: "The solution pair",
                              verified: "Both equations checked",
                              list: "Step-by-step solution",
                              titles: ["Eliminate y", "Solve for x", "Substitute x = 2", "Solve for y", "Check both equations"],
                              descriptions: [
                                "Subtract the second equation from the first. The y terms cancel.",
                                "Divide both sides by 3 to isolate x.",
                                "Use the value of x in the second equation, −x + y = 1.",
                                "Add 2 to both sides to isolate y.",
                                "Substitute the pair into the original equations. Both sides match."
                              ]
                            },
                            hi: {
                              method: "विलोपन विधि",
                              result: "हल का युग्म",
                              verified: "दोनों समीकरणों की जाँच हुई",
                              list: "चरण-दर-चरण हल",
                              titles: ["y को हटाएँ", "x का मान निकालें", "x = 2 रखें", "y का मान निकालें", "दोनों समीकरण जाँचें"],
                              descriptions: [
                                "पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।",
                                "x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।",
                                "दूसरे समीकरण −x + y = 1 में x का मान रखें।",
                                "y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।",
                                "मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।"
                              ]
                            },
                            ta: {
                              method: "நீக்கல் முறை",
                              result: "தீர்வு இணை",
                              verified: "இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன",
                              list: "படிப்படியான தீர்வு",
                              titles: ["y-ஐ நீக்கவும்", "x-ஐக் கண்டறியவும்", "x = 2 எனப் பதிலிடவும்", "y-ஐக் கண்டறியவும்", "இரு சமன்பாடுகளையும் சரிபார்க்கவும்"],
                              descriptions: [
                                "முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.",
                                "x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.",
                                "இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.",
                                "y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.",
                                "மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்."
                              ]
                            }
                          }, n = Object.hasOwn(s, String(t)) ? s[String(t)] : s.en;
                          return {
                            method: n.method,
                            result: n.result,
                            verified: n.verified,
                            list: n.list,
                            steps: n.titles.map((p, r) => ({
                              id: `demo-step-${r + 1}`,
                              number: r + 1,
                              marker: String(r + 1).padStart(2, "0"),
                              title: p,
                              description: n.descriptions[r],
                              equation: a[r],
                              checked: r === 4
                            }))
                          };
                        })(e).list)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)), children: (e) => (() => {
                          const o = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                          return /* @__PURE__ */ c(h, { children: [
                            "      ",
                            u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                              "      ",
                              /* @__PURE__ */ c(A, { id: "demo_solution_step", "aria-posinset": /* @__PURE__ */ ((t) => t === void 0 ? 1 : t)(o?.item?.number), "aria-setsize": 5, className: `${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(((t) => "grid rs-solution-step" + (t ? " rs-solution-step--check" : ""))(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(o?.item?.checked)))}`, role: "listitem", children: [
                                "      ",
                                u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                  "      ",
                                  /* @__PURE__ */ y(_, { id: "demo_solution_step_marker", className: "rs-solution-step-marker", "aria-hidden": !0, as: "span", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(o?.item?.marker) })
                                ] }),
                                u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                  "      ",
                                  /* @__PURE__ */ c(A, { id: "demo_solution_step_content", className: "flex flex-col rs-solution-step-content", children: [
                                    "      ",
                                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                      "      ",
                                      /* @__PURE__ */ y(_, { id: "demo_solution_step_title", className: "rs-solution-step-title", as: "h4", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(o?.item?.title) })
                                    ] }),
                                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                      "      ",
                                      /* @__PURE__ */ y(_, { id: "demo_solution_step_description", className: "rs-solution-step-description", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(o?.item?.description) })
                                    ] }),
                                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                                      "      ",
                                      /* @__PURE__ */ y(_, { id: "demo_solution_step_equation", className: "rs-solution-step-equation", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(o?.item?.equation) })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] });
                        })() })
                      ] }),
                      u(/* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(R))) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ c(A, { id: "demo_step_navigation", className: "grid rs-step-navigation", children: [
                          "      ",
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(E, { id: "demo_step_previous", className: "rs-step-nav-button", id: "scholar-demo_step_previous", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Previous" : e)(x?.i18n?.demoPrevious), value: "previous", disabled: ((e) => e <= 1)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)), onAction: (...e) => M("selectDemoSolutionStep", {}, e) })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(_, { id: "demo_step_count", className: "rs-step-count", as: "span", content: ((e) => String(e) + " / 5")(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)) })
                          ] }),
                          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                            "      ",
                            /* @__PURE__ */ y(E, { id: "demo_step_next", className: "rs-step-nav-button", id: "scholar-demo_step_next", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next" : e)(x?.i18n?.demoNext), value: "next", disabled: ((e) => e >= 5)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(O)), onAction: (...e) => M("selectDemoSolutionStep", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(E, { id: "image", leftIcon: /* @__PURE__ */ c(h, { children: [
                      "      ",
                      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                        "      ",
                        /* @__PURE__ */ y(ue, { icon: "LockKeyhole", id: "image_lock_icon", size: 18, strokeWidth: 2 })
                      ] })
                    ] }), disabled: !0, onAction: (...e) => M("requestImage", {}, e), ariaLabel: "Image problem upload is locked until a post-release update", additionalAttributes: { disabled: !0, title: "Planned for a post-release update" }, id: "scholar-image-upload-locked", label: "Upload an image · Coming soon", theme: "light", variant: "ghost" })
                  ] }),
                  u(pe) && /* @__PURE__ */ c(h, { children: [
                    "      ",
                    /* @__PURE__ */ y(ct, { id: "problem_status", variant: "warning", appearance: "soft", live: "polite", title: "Action needed" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
        "      ",
        /* @__PURE__ */ c(A, { id: "subjects", className: "flex flex-col rs-subject-section", children: [
          "      ",
          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
            "      ",
            /* @__PURE__ */ y(_, { id: "subjects_heading", className: "rs-subjects-heading", content: /* @__PURE__ */ ((e) => e === void 0 ? "Start with a subject" : e)(x?.i18n?.popular), as: "h2" })
          ] }),
          u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
            "      ",
            /* @__PURE__ */ y(_, { id: "subjects_intro", className: "rs-subjects-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose a foundation subject and explore its concepts, examples, and problems." : e)(x?.i18n?.subjectsIntro) })
          ] }),
          u(((e) => (function(t) {
            const a = [], s = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, p = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
            if (!Array.isArray(t?.subjectCards)) return a;
            for (const r of t.subjectCards.slice(0, 100)) {
              if (!r || typeof r != "object" || Array.isArray(r)) continue;
              const d = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", m = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
              if (!d || !m.startsWith("/") || m.startsWith("//") || m.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(m) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(m) || s.has(m)) continue;
              s.add(m);
              const v = t.subjectsLocked === !0 || r.locked === !0, g = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : p[1];
              a.push({ id: m, title: d, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: m, locked: v, actionLabel: v ? g : p[0] });
            }
            return a;
          })(e).length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ c(h, { children: [
            "      ",
            /* @__PURE__ */ y(ke, { id: "subject_grid", className: "rs-subject-grid", items: ((e) => (function(t) {
              const a = [], s = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, p = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
              if (!Array.isArray(t?.subjectCards)) return a;
              for (const r of t.subjectCards.slice(0, 100)) {
                if (!r || typeof r != "object" || Array.isArray(r)) continue;
                const d = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", m = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                if (!d || !m.startsWith("/") || m.startsWith("//") || m.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(m) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(m) || s.has(m)) continue;
                s.add(m);
                const v = t.subjectsLocked === !0 || r.locked === !0, g = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : p[1];
                a.push({ id: m, title: d, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: m, locked: v, actionLabel: v ? g : p[0] });
              }
              return a;
            })(e))(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b)), children: (e) => (() => {
              const o = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
              return /* @__PURE__ */ c(h, { children: [
                "      ",
                u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                  "      ",
                  /* @__PURE__ */ c(le, { id: "linear", className: `flex ${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(((t) => "flex flex-col rs-subject-card" + (t ? " rs-subject-card--locked" : ""))(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(o?.item?.locked)))}`, as: "article", theme: "auto", children: [
                    "      ",
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(_, { id: "linear_title", className: "rs-subject-card-title", as: "h3", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(o?.item?.title) })
                    ] }),
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(_, { id: "linear_copy", className: "rs-subject-card-copy", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(o?.item?.description) })
                    ] }),
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(E, { id: "linear_go", leftIcon: /* @__PURE__ */ c(h, { children: [
                        "      ",
                        u(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(o?.item?.locked)) && /* @__PURE__ */ c(h, { children: [
                          "      ",
                          /* @__PURE__ */ y(ue, { icon: "LockKeyhole", id: "subject_lock_icon", size: 16, strokeWidth: 1.8 })
                        ] })
                      ] }), type: "button", label: /* @__PURE__ */ ((t) => t === void 0 ? "Open subject" : t)(o?.item?.actionLabel), variant: "outline", disabled: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(o?.item?.locked), fullWidth: !0, size: "md", theme: "auto", value: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(o?.item?.redirectionLink), loading: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(he), onAction: (...t) => M("openDiscoverySubject", {}, t) })
                    ] })
                  ] })
                ] }),
                u(f({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ c(h, { children: [
                  "      ",
                  /* @__PURE__ */ c(le, { id: "calculus", className: "flex flex-col rs-subject-card", theme: "auto", as: "article", children: [
                    "      ",
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(_, { id: "calculus_title", className: "rs-subject-card-title", as: "h3", content: "Calculus" })
                    ] }),
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(_, { id: "calculus_copy", className: "rs-subject-card-copy", as: "p", content: "Limits, derivatives, integration and multivariable reasoning." })
                    ] }),
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(E, { id: "calculus_go", size: "md", label: "Open subject", theme: "auto", variant: "outline", onAction: (...t) => M("navigate", { path: "/browse/engineering/semester-1/calculus" }, t), fullWidth: !0 })
                    ] })
                  ] })
                ] }),
                u(f({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ c(h, { children: [
                  "      ",
                  /* @__PURE__ */ c(le, { id: "discrete", className: "flex flex-col rs-subject-card", as: "article", theme: "auto", children: [
                    "      ",
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(_, { id: "discrete_title", className: "rs-subject-card-title", content: "Discrete mathematics", as: "h3" })
                    ] }),
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(_, { id: "discrete_copy", className: "rs-subject-card-copy", as: "p", content: "Logic, combinatorics, graphs and recurrence relations." })
                    ] }),
                    u(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(h, { children: [
                      "      ",
                      /* @__PURE__ */ y(E, { id: "discrete_go", variant: "outline", onAction: (...t) => M("navigate", { path: "/browse/engineering/semester-1/discrete-mathematics" }, t), fullWidth: !0, size: "md", label: "Open subject", theme: "auto" })
                    ] })
                  ] })
                ] })
              ] });
            })() })
          ] }),
          u(((e) => (function(t) {
            const a = [], s = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, p = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
            if (!Array.isArray(t?.subjectCards)) return a;
            for (const r of t.subjectCards.slice(0, 100)) {
              if (!r || typeof r != "object" || Array.isArray(r)) continue;
              const d = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", m = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
              if (!d || !m.startsWith("/") || m.startsWith("//") || m.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(m) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(m) || s.has(m)) continue;
              s.add(m);
              const v = t.subjectsLocked === !0 || r.locked === !0, g = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : p[1];
              a.push({ id: m, title: d, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: m, locked: v, actionLabel: v ? g : p[0] });
            }
            return a;
          })(e).length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ c(h, { children: [
            "      ",
            /* @__PURE__ */ y(_, { id: "subjects_empty", className: "rs-subject-empty", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No subjects are available here yet. Browse the course catalogue to continue." : e)(x?.i18n?.emptySubjects) })
          ] }),
          u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ve)) && /* @__PURE__ */ c(h, { children: [
            "      ",
            /* @__PURE__ */ y(_, { id: "subjects_error", className: "rs-subject-error", role: "alert", content: /* @__PURE__ */ ((e) => e === void 0 ? "This subject could not be opened. Please try again." : e)(x?.i18n?.subjectError), as: "p" })
          ] }),
          u(((e) => (function(t) {
            const a = [], s = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, p = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
            if (!Array.isArray(t?.subjectCards)) return a;
            for (const r of t.subjectCards.slice(0, 100)) {
              if (!r || typeof r != "object" || Array.isArray(r)) continue;
              const d = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", m = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
              if (!d || !m.startsWith("/") || m.startsWith("//") || m.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(m) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(m) || s.has(m)) continue;
              s.add(m);
              const v = t.subjectsLocked === !0 || r.locked === !0, g = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : p[1];
              a.push({ id: m, title: d, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: m, locked: v, actionLabel: v ? g : p[0] });
            }
            return a;
          })(e).length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ c(h, { children: [
            "      ",
            /* @__PURE__ */ y(E, { id: "subjects_browse", size: "lg", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse courses" : e)(x?.i18n?.browseCatalogue), theme: "auto", variant: "primary", onAction: (...e) => M("navigate", { path: "/browse" }, e) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ft as default
};
