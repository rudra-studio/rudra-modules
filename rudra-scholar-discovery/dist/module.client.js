import { jsx as y, jsxs as l, Fragment as p } from "react/jsx-runtime";
import me, { useState as E, useEffect as $, useRef as re, useCallback as ie } from "react";
import { Typography as k, Button as C, Alert as wt, Card as he } from "@rudra-studio/rudra-core";
import { Box as L, Repeater as Ne } from "@rudra-studio/rudra-layout";
import { BlackboardLesson as _t } from "@rudra-studio/chalkmind-math";
import * as ce from "lucide-react";
const Te = (i) => String(i || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), kt = (i) => {
  let w = i;
  for (; w && typeof w == "object" && "type" in w && "value" in w; )
    w = w.value;
  return w;
};
function pe({ icon: i, size: w, color: q, strokeWidth: Q, className: V = "", style: D, ...G }) {
  const P = kt(i), [ee, H] = E(null), te = P && typeof P == "object" ? JSON.stringify(P) : String(P || "");
  $(() => {
    const W = new AbortController();
    let Y = "", U = "";
    if (H(null), typeof P == "string") {
      const M = P.trim();
      if (ce[M]) return () => W.abort();
      M.startsWith("<svg") ? U = M : (/^https?:\/\//.test(M) || M.startsWith("/") || M.startsWith("data:image/svg")) && (Y = M);
    } else P && typeof P == "object" && (P.iconType === "svg" && P.svgContent ? U = P.svgContent : P.iconType === "url" && P.url && (Y = P.url));
    return U ? H(Te(U)) : Y && fetch(Y, { signal: W.signal }).then((M) => {
      if (!M.ok) throw new Error("Icon request failed (" + M.status + ")");
      return M.text();
    }).then((M) => {
      M.trim().startsWith("<svg") && H(Te(M));
    }).catch((M) => {
      M.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", M);
    }), () => W.abort();
  }, [te]);
  const B = P && typeof P == "object" ? P.props || {} : {}, g = { ...B };
  delete g.size, delete g.color, delete g.strokeWidth;
  const h = w ?? B.size ?? 24, oe = q ?? B.color ?? "currentColor", J = Q ?? B.strokeWidth ?? 1.5;
  let X = "";
  if (typeof P == "string" && ce[P] ? X = P : P && typeof P == "object" && P.name && (!P.iconType || P.iconType === "lucide") && (X = P.name), X) {
    const W = ce[X];
    if (W)
      return me.createElement(W, {
        size: h,
        color: oe,
        strokeWidth: J,
        className: V,
        style: D,
        ...g,
        ...G
      });
  }
  if (ee)
    return me.createElement("span", {
      ...g,
      ...G,
      className: ("rudra-universal-icon " + V).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: h,
        height: h,
        color: oe,
        ...D
      },
      dangerouslySetInnerHTML: {
        __html: ee.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + J + '">')
      }
    });
  const ne = ce.LayoutGrid;
  return me.createElement(ne, {
    size: h,
    color: oe,
    strokeWidth: J,
    className: V,
    style: D,
    ...g,
    ...G
  });
}
function Et(i) {
  const w = {}, q = i.serverData || i.serverState || {};
  i.sharedState, i.applicationState || q.applicationState, i.pageState || q.pageState;
  const Q = i.pageData || q.pageData || {}, V = {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  };
  i.$route ?? i.route ?? i.data?.$route ?? i.data?.route ?? i.runtime?.data?.$route ?? i.runtime?.route ?? q?.$route ?? q?.route, i.$params ?? i.routeParams ?? i.params ?? i.data?.$params ?? i.data?.routeParams ?? i.data?.params ?? i.runtime?.data?.$params ?? i.runtime?.route?.params ?? i.runtime?.routeParams ?? i.runtime?.params ?? q?.$params ?? q?.routeParams ?? q?.params, i.$query ?? i.queryParams ?? i.query ?? i.data?.$query ?? i.data?.queryParams ?? i.data?.query ?? i.runtime?.data?.$query ?? i.runtime?.route?.query ?? i.runtime?.queryParams ?? i.runtime?.query ?? q?.$query ?? q?.queryParams ?? q?.query, i.$auth ?? i.auth ?? i.data?.$auth ?? i.data?.auth ?? i.runtime?.data?.$auth ?? i.runtime?.authInfo ?? i.runtime?.auth ?? q?.$auth ?? q?.auth, i.$config ?? i.config ?? i.data?.$config ?? i.data?.config ?? i.runtime?.data?.$config ?? i.runtime?.config ?? q?.$config ?? q?.config, i.$env ?? i.env ?? i.data?.$env ?? i.data?.env ?? i.runtime?.data?.$env ?? i.runtime?.env ?? q?.$env ?? q?.env, i.$locale ?? i.locale ?? i.data?.$locale ?? i.data?.locale ?? i.runtime?.data?.$locale ?? i.runtime?.locale ?? q?.$locale ?? q?.locale, i.$translations ?? i.translations ?? i.data?.$translations ?? i.data?.translations ?? i.runtime?.data?.$translations ?? i.runtime?.translations ?? q?.$translations ?? q?.translations, i.$i18n ?? i.i18n ?? i.data?.$i18n ?? i.data?.i18n ?? i.runtime?.data?.$i18n ?? i.runtime?.i18n ?? q?.$i18n ?? q?.i18n;
  const D = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, G = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [P, ee] = E(() => D ?? G());
  $(() => {
    D != null && ee(D);
  }, [D]), $(() => {
    if (D != null || typeof document > "u") return;
    const e = document.documentElement, s = (a) => ee(a?.detail?.theme ?? G()), t = new MutationObserver(s);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", s), s(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", s);
    };
  }, [D]);
  const H = re(null), [te, B] = E("lg");
  $(() => {
    if (!H.current) return;
    const e = new ResizeObserver((s) => {
      for (let t of s) {
        const a = t.contentRect.width;
        a < 768 ? B("sm") : a < 1024 ? B("md") : B("lg");
      }
    });
    return e.observe(H.current), () => e.disconnect();
  }, []);
  const g = ie((e) => typeof e != "object" || e === null ? e : te === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : te === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [te]), h = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, oe = i.subjectCards !== void 0 ? i.subjectCards : i.data?.subjectCards !== void 0 ? i.data.subjectCards : [{ description: "Vectors, matrices, linear maps, eigenvalues and diagonalisation.", locked: !1, redirectionLink: "/browse/engineering/semester-1/linear-algebra", title: "Linear algebra" }, { description: "Limits, derivatives, integration and multivariable reasoning.", locked: !1, redirectionLink: "/browse/engineering/semester-1/calculus", title: "Calculus" }, { description: "Logic, combinatorics, graphs and recurrence relations.", locked: !1, redirectionLink: "/browse/engineering/semester-1/discrete-mathematics", title: "Discrete mathematics" }], J = i.contentPreview !== void 0 ? i.contentPreview : i.data?.contentPreview !== void 0 ? i.data.contentPreview : {}, X = i.programmeSlug !== void 0 ? i.programmeSlug : i.data?.programmeSlug !== void 0 ? i.data.programmeSlug : "engineering", ne = i.initialSolveMode !== void 0 ? i.initialSolveMode : i.data?.initialSolveMode !== void 0 ? i.data.initialSolveMode : "answer", W = i.pageMode !== void 0 ? i.pageMode : i.data?.pageMode !== void 0 ? i.data.pageMode : "landing", Y = i.returnPath !== void 0 ? i.returnPath : i.data?.returnPath !== void 0 ? i.data.returnPath : "/learn", U = i.authenticated !== void 0 ? i.authenticated : i.data?.authenticated !== void 0 ? i.data.authenticated : !1, M = i.autoSolveOnLoad !== void 0 ? i.autoSolveOnLoad : i.data?.autoSolveOnLoad !== void 0 ? i.data.autoSolveOnLoad : !0, fe = i.locale !== void 0 ? i.locale : i.data?.locale !== void 0 ? i.data.locale : "en", Ce = i.subjectsLocked !== void 0 ? i.subjectsLocked : i.data?.subjectsLocked !== void 0 ? i.data.subjectsLocked : !1, Oe = i.subjectSlug !== void 0 ? i.subjectSlug : i.data?.subjectSlug !== void 0 ? i.data.subjectSlug : "linear-algebra", Ie = i.semesterSlug !== void 0 ? i.semesterSlug : i.data?.semesterSlug !== void 0 ? i.data.semesterSlug : "semester-1", ge = i.accessProfile !== void 0 ? i.accessProfile : i.data?.accessProfile !== void 0 ? i.data.accessProfile : {}, b = { subjectCards: oe, contentPreview: J, programmeSlug: X, initialSolveMode: ne, pageMode: W, returnPath: Y, authenticated: U, autoSolveOnLoad: M, locale: fe, subjectsLocked: Ce, subjectSlug: Oe, semesterSlug: Ie, accessProfile: ge }, [De, Re] = E(() => structuredClone(!1)), [ye, $e] = E(() => structuredClone("x = 2 and y = 3. Both equations are satisfied.")), [be, ze] = E(() => structuredClone(!1)), [R, Be] = E(() => structuredClone({ enabled: !1, valid: !1 })), [Se, We] = E(() => structuredClone(!1)), [ve, Fe] = E(() => structuredClone("Quick answer")), [xe, Qe] = E(() => structuredClone("Solve the system 2x + y = 7 and −x + y = 1.")), [He, Ue] = E(() => structuredClone("")), [F, Ke] = E(() => structuredClone("answer")), [Ge, Je] = E(() => structuredClone(!1)), [z, Xe] = E(() => structuredClone(1)), [we, Ye] = E(() => structuredClone(!1)), [Ze, Ve] = E(() => structuredClone(!0)), [_e, et] = E(() => structuredClone([{ checked: !1, description: "Subtract the second equation from the first. The y terms cancel.", equation: `(2x + y) − (−x + y) = 7 − 1
3x = 6`, id: "demo-step-1", marker: "01", number: 1, title: "Eliminate y" }])), [tt, ot] = E(() => structuredClone("")), [st, rt] = E(() => structuredClone("en")), [it, nt] = E(() => structuredClone({ authenticated: !1, isRegistered: !1, roles: [], verificationStatus: "not_required" })), [ke, at] = E(() => structuredClone(!0)), S = { canLearn: De, demoSolutionText: ye, subjectNavigationFailed: be, contentPreviewDisplay: R, isSubjectNavigating: Se, demoSolutionTitle: ve, problemText: xe, lastProblemControlId: He, demoSolutionMode: F, canOpenProfessorStudio: Ge, demoStepIndex: z, showActionMessage: we, showAccessHint: Ze, demoVisibleSteps: _e, actionMessage: tt, problemLanguage: st, accessDecision: it, showDemoSolution: ke }, d = ie((e, s) => {
    switch (e) {
      case "canLearn": {
        const t = typeof s == "function" ? s(S.canLearn) : s;
        return S.canLearn = t, Re(t), t;
      }
      case "demoSolutionText": {
        const t = typeof s == "function" ? s(S.demoSolutionText) : s;
        return S.demoSolutionText = t, $e(t), t;
      }
      case "subjectNavigationFailed": {
        const t = typeof s == "function" ? s(S.subjectNavigationFailed) : s;
        return S.subjectNavigationFailed = t, ze(t), t;
      }
      case "contentPreviewDisplay": {
        const t = typeof s == "function" ? s(S.contentPreviewDisplay) : s;
        return S.contentPreviewDisplay = t, Be(t), t;
      }
      case "isSubjectNavigating": {
        const t = typeof s == "function" ? s(S.isSubjectNavigating) : s;
        return S.isSubjectNavigating = t, We(t), t;
      }
      case "demoSolutionTitle": {
        const t = typeof s == "function" ? s(S.demoSolutionTitle) : s;
        return S.demoSolutionTitle = t, Fe(t), t;
      }
      case "problemText": {
        const t = typeof s == "function" ? s(S.problemText) : s;
        return S.problemText = t, Qe(t), t;
      }
      case "lastProblemControlId": {
        const t = typeof s == "function" ? s(S.lastProblemControlId) : s;
        return S.lastProblemControlId = t, Ue(t), t;
      }
      case "demoSolutionMode": {
        const t = typeof s == "function" ? s(S.demoSolutionMode) : s;
        return S.demoSolutionMode = t, Ke(t), t;
      }
      case "canOpenProfessorStudio": {
        const t = typeof s == "function" ? s(S.canOpenProfessorStudio) : s;
        return S.canOpenProfessorStudio = t, Je(t), t;
      }
      case "demoStepIndex": {
        const t = typeof s == "function" ? s(S.demoStepIndex) : s;
        return S.demoStepIndex = t, Xe(t), t;
      }
      case "showActionMessage": {
        const t = typeof s == "function" ? s(S.showActionMessage) : s;
        return S.showActionMessage = t, Ye(t), t;
      }
      case "showAccessHint": {
        const t = typeof s == "function" ? s(S.showAccessHint) : s;
        return S.showAccessHint = t, Ve(t), t;
      }
      case "demoVisibleSteps": {
        const t = typeof s == "function" ? s(S.demoVisibleSteps) : s;
        return S.demoVisibleSteps = t, et(t), t;
      }
      case "actionMessage": {
        const t = typeof s == "function" ? s(S.actionMessage) : s;
        return S.actionMessage = t, ot(t), t;
      }
      case "problemLanguage": {
        const t = typeof s == "function" ? s(S.problemLanguage) : s;
        return S.problemLanguage = t, rt(t), t;
      }
      case "accessDecision": {
        const t = typeof s == "function" ? s(S.accessDecision) : s;
        return S.accessDecision = t, nt(t), t;
      }
      case "showDemoSolution": {
        const t = typeof s == "function" ? s(S.showDemoSolution) : s;
        return S.showDemoSolution = t, at(t), t;
      }
      default:
        return s;
    }
  }, [S]);
  ie((e, s) => {
    const [t, ...a] = String(e || "").split(".");
    if (!t) return s;
    if (a.length === 0) return d(t, s);
    const o = (n) => {
      const m = Array.isArray(n) ? [...n] : { ...n || {} };
      let r = m;
      return a.forEach((c, u) => {
        u === a.length - 1 ? r[c] = s : (r[c] = Array.isArray(r[c]) ? [...r[c]] : { ...r[c] || {} }, r = r[c]);
      }), m;
    };
    switch (t) {
      case "canLearn":
        return d("canLearn", o), s;
      case "demoSolutionText":
        return d("demoSolutionText", o), s;
      case "subjectNavigationFailed":
        return d("subjectNavigationFailed", o), s;
      case "contentPreviewDisplay":
        return d("contentPreviewDisplay", o), s;
      case "isSubjectNavigating":
        return d("isSubjectNavigating", o), s;
      case "demoSolutionTitle":
        return d("demoSolutionTitle", o), s;
      case "problemText":
        return d("problemText", o), s;
      case "lastProblemControlId":
        return d("lastProblemControlId", o), s;
      case "demoSolutionMode":
        return d("demoSolutionMode", o), s;
      case "canOpenProfessorStudio":
        return d("canOpenProfessorStudio", o), s;
      case "demoStepIndex":
        return d("demoStepIndex", o), s;
      case "showActionMessage":
        return d("showActionMessage", o), s;
      case "showAccessHint":
        return d("showAccessHint", o), s;
      case "demoVisibleSteps":
        return d("demoVisibleSteps", o), s;
      case "actionMessage":
        return d("actionMessage", o), s;
      case "problemLanguage":
        return d("problemLanguage", o), s;
      case "accessDecision":
        return d("accessDecision", o), s;
      case "showDemoSolution":
        return d("showDemoSolution", o), s;
      default:
        return s;
    }
  }, [d]);
  const ct = { accessRequired: { properties: { path: { type: "string" }, reason: { type: "string" }, returnPath: { type: "string" } }, required: ["reason", "returnPath", "path"], type: "object" }, imageProblemRequested: { properties: { context: { type: "object" } }, type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, type: "object" }, problemSubmitted: { properties: { context: { type: "object" }, languageCode: { type: "string" }, mode: { type: "string" }, problem: { type: "string" } }, required: ["problem", "mode", "languageCode"], type: "object" } }, le = (e, s, t) => {
    if (!s || typeof s != "object") return "";
    const a = Array.isArray(s.type) ? s.type : s.type ? [s.type] : [], o = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (a.length && !a.includes(o) && !(o === "integer" && a.includes("number"))) return t + " must be " + a.join(" or ") + ".";
    if (s.enum && !s.enum.some((n) => JSON.stringify(n) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const n of s.required || []) if (!Object.prototype.hasOwnProperty.call(e, n)) return t + "." + n + " is required.";
      for (const [n, m] of Object.entries(s.properties || {})) if (Object.prototype.hasOwnProperty.call(e, n)) {
        const r = le(e[n], m, t + "." + n);
        if (r) return r;
      }
    }
    if (Array.isArray(e) && s.items) for (let n = 0; n < e.length; n++) {
      const m = le(e[n], s.items, t + "[" + n + "]");
      if (m) return m;
    }
    return "";
  }, K = ie(async (e, s, t = !1) => {
    const a = ct[e];
    if (!a) throw new Error("Module output '" + e + "' is not declared.");
    const o = le(s, a, "output." + e);
    if (o) throw new Error(o);
    const n = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof n != "function") return s;
    const m = n(e, s, { moduleId: i.moduleId, awaitHandlers: t });
    return t ? await m : s;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]);
  async function lt(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, u = Object.keys(c).length > 0, v = c.authenticated === !0 || c.isAuthenticated === !0 || !!(c.uid || c.userId || c.id) || b.authenticated === !0, f = v && c.isRegistered === !0, j = Array.isArray(c.roles) ? c.roles.map(String) : [], A = String(c.verificationStatus || "not_required"), N = j.includes("professor") || j.includes("educator") || j.includes("admin") || j.includes("institution_admin"), O = f && N && ["approved", "verified"].includes(A);
          return { authenticated: v, isRegistered: f, roles: j, verificationStatus: A, canLearn: f, canOpenProfessorStudio: O };
        })();
        a.image_access = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "image_access" };
      return t.error = n, a.image_access = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
    }
    if (a.image_access.canLearn) {
      d("actionMessage", ""), d("showActionMessage", !1);
      try {
        await K("imageProblemRequested", { context: { programmeSlug: b.programmeSlug, semesterSlug: b.semesterSlug, subjectSlug: b.subjectSlug } }, !0);
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "image_emit" };
        return t.error = n, a.image_emit = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
      }
      return { ok: !0 };
    } else {
      d("actionMessage", "Sign in and complete your Scholar profile before uploading a problem image."), d("showActionMessage", !0);
      try {
        await ae({ reason: "registration_required", returnPath: b.returnPath });
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "image_denied_request" };
        return t.error = n, a.image_denied_request = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
      }
      return a.image_denied_request;
    }
  }
  async function ut(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, u = Object.keys(c).length > 0, v = c.authenticated === !0 || c.isAuthenticated === !0 || !!(c.uid || c.userId || c.id) || b.authenticated === !0, f = v && c.isRegistered === !0, j = String(S.problemText || "").trim();
          return { authenticated: v, isRegistered: f, canLearn: f, problem: j, hasProblem: j.length > 0 };
        })();
        a.problem_check = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "problem_check" };
      return t.error = n, a.problem_check = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
    }
    if (a.problem_check.canLearn)
      if (a.problem_check.hasProblem) {
        d("actionMessage", ""), d("showActionMessage", !1);
        try {
          await K("problemSubmitted", { context: { programmeSlug: b.programmeSlug, semesterSlug: b.semesterSlug, subjectSlug: b.subjectSlug }, languageCode: b.locale || "en", mode: s.mode, problem: a.problem_check.problem }, !0);
        } catch (o) {
          const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "problem_emit" };
          return t.error = n, a.problem_emit = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
        }
        return { languageCode: b.locale || "en", mode: s.mode, ok: !0, problem: a.problem_check.problem };
      } else
        return d("actionMessage", "Enter a mathematics problem before continuing."), d("showActionMessage", !0), { ok: !1, reason: "empty_problem" };
    else {
      d("actionMessage", "Sign in and complete your Scholar profile to solve this problem."), d("showActionMessage", !0);
      try {
        await ae({ reason: "registration_required", returnPath: b.returnPath });
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "problem_denied_request" };
        return t.error = n, a.problem_denied_request = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
      }
      return a.problem_denied_request;
    }
  }
  async function ae(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = String(s.reason || "registration_required"), u = String(s.returnPath || b.returnPath || "/learn"), v = c === "professor_approval_required" ? "/account/verification" : "/access", f = v === "/access" ? v + "?returnPath=" + encodeURIComponent(u) : v;
          return { reason: c, returnPath: u, path: f };
        })();
        a.access_request_prepare = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "access_request_prepare" };
      return t.error = n, a.access_request_prepare = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
    }
    try {
      await K("accessRequired", { path: a.access_request_prepare.path, reason: a.access_request_prepare.reason, returnPath: a.access_request_prepare.returnPath }, !0);
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "access_request_emit" };
      return t.error = n, a.access_request_emit = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
    }
    try {
      await K("navigationRequested", { path: a.access_request_prepare.path }, !0);
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "access_request_navigate" };
      return t.error = n, a.access_request_navigate = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
    }
    return a.access_request_prepare;
  }
  async function ue(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        const o = ["en", "hi", "ta"].includes(String(b.locale || "en")) ? String(b.locale || "en") : "en", n = ["answer", "steps"].includes(String(b.initialSolveMode || "answer")) ? String(b.initialSolveMode || "answer") : "answer", r = {
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
        }[o];
        return { language: o, mode: n, problem: r.problem, title: n === "steps" ? r.stepsTitle : r.answerTitle, solution: n === "steps" ? r.steps : r.answer, show: b.autoSolveOnLoad !== !1 };
      })();
      t.demo_prepare = a;
    }
    d("problemText", t.demo_prepare.problem), d("demoSolutionTitle", t.demo_prepare.title), d("demoSolutionText", t.demo_prepare.solution), d("demoSolutionMode", t.demo_prepare.mode), d("showDemoSolution", t.demo_prepare.show);
    {
      s.event;
      const a = await (async () => {
        function o(m) {
          const r = [
            `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
            "x = 6 ÷ 3 = 2",
            "−2 + y = 1",
            "y = 1 + 2 = 3",
            `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
          ], c = {
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
          }, u = Object.hasOwn(c, String(m)) ? c[String(m)] : c.en;
          return {
            method: u.method,
            result: u.result,
            verified: u.verified,
            list: u.list,
            steps: u.titles.map((v, f) => ({
              id: `demo-step-${f + 1}`,
              number: f + 1,
              marker: String(f + 1).padStart(2, "0"),
              title: v,
              description: u.descriptions[f],
              equation: r[f],
              checked: f === 4
            }))
          };
        }
        return o(b.locale).steps.slice(0, 1);
      })();
      t.compact_step_prepare = a;
    }
    return d("demoStepIndex", 1), d("demoVisibleSteps", t.compact_step_prepare), t.demo_prepare;
  }
  async function dt(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        const o = ["en", "hi", "ta"].includes(String(b.locale || "en")) ? String(b.locale || "en") : "en", n = {
          en: { title: "Detailed solution", solution: "1. Subtract the second equation from the first: 3x = 6.  2. Therefore x = 2.  3. Substitute into −x + y = 1: −2 + y = 1.  4. Therefore y = 3.  5. Check: 2(2) + 3 = 7." },
          hi: { title: "विस्तृत हल", solution: "1. पहले समीकरण में से दूसरा घटाएँ: 3x = 6।  2. इसलिए x = 2।  3. इसे −x + y = 1 में रखें: −2 + y = 1।  4. इसलिए y = 3।  5. जाँच: 2(2) + 3 = 7।" },
          ta: { title: "விரிவான தீர்வு", solution: "1. முதல் சமன்பாட்டிலிருந்து இரண்டாவதை கழிக்கவும்: 3x = 6.  2. ஆகவே x = 2.  3. இதை −x + y = 1 இல் பதிலிடவும்: −2 + y = 1.  4. ஆகவே y = 3.  5. சரிபார்ப்பு: 2(2) + 3 = 7." }
        };
        return { language: o, title: n[o].title, solution: n[o].solution };
      })();
      t.showDetailedSolution_prepare = a;
    }
    d("demoSolutionTitle", t.showDetailedSolution_prepare.title), d("demoSolutionText", t.showDetailedSolution_prepare.solution), d("demoSolutionMode", "steps"), d("showDemoSolution", !0);
    {
      s.event;
      const a = await (async () => {
        function o(m) {
          const r = [
            `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
            "x = 6 ÷ 3 = 2",
            "−2 + y = 1",
            "y = 1 + 2 = 3",
            `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
          ], c = {
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
          }, u = Object.hasOwn(c, String(m)) ? c[String(m)] : c.en;
          return {
            method: u.method,
            result: u.result,
            verified: u.verified,
            list: u.list,
            steps: u.titles.map((v, f) => ({
              id: `demo-step-${f + 1}`,
              number: f + 1,
              marker: String(f + 1).padStart(2, "0"),
              title: v,
              description: u.descriptions[f],
              equation: r[f],
              checked: f === 4
            }))
          };
        }
        return o(b.locale).steps.slice(0, 1);
      })();
      t.compact_step_prepare = a;
    }
    return d("demoStepIndex", 1), d("demoVisibleSteps", t.compact_step_prepare), { mode: "steps", ok: !0, solution: t.showDetailedSolution_prepare.solution };
  }
  async function de(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        const o = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {};
        Object.keys(o).length > 0;
        const n = o.authenticated === !0 || o.isAuthenticated === !0 || !!(o.uid || o.userId || o.id) || b.authenticated === !0, m = n && o.isRegistered === !0, r = Array.isArray(o.roles) ? o.roles.map(String) : [], c = String(o.verificationStatus || "not_required"), u = r.includes("professor") || r.includes("educator") || r.includes("admin") || r.includes("institution_admin"), v = m && u && ["approved", "verified"].includes(c);
        return { authenticated: n, isRegistered: m, roles: r, verificationStatus: c, canLearn: m, canOpenProfessorStudio: v };
      })();
      t.access_derive = a;
    }
    return d("accessDecision", t.access_derive), d("canLearn", t.access_derive.canLearn), d("canOpenProfessorStudio", t.access_derive.canOpenProfessorStudio), t.access_derive;
  }
  async function mt(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, u = Object.keys(c).length > 0, v = c.authenticated === !0 || c.isAuthenticated === !0 || !!(c.uid || c.userId || c.id) || b.authenticated === !0, f = v && c.isRegistered === !0, j = Array.isArray(c.roles) ? c.roles.map(String) : [], A = String(c.verificationStatus || "not_required"), N = j.includes("professor") || j.includes("educator") || j.includes("admin") || j.includes("institution_admin"), O = f && N && ["approved", "verified"].includes(A);
          return { authenticated: v, isRegistered: f, roles: j, verificationStatus: A, canLearn: f, canOpenProfessorStudio: O };
        })();
        a.professor_access = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "professor_access" };
      return t.error = n, a.professor_access = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
    }
    if (a.professor_access.canOpenProfessorStudio) {
      try {
        await K("navigationRequested", { path: "/professor/context" }, !0);
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "professor_open" };
        return t.error = n, a.professor_open = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
      }
      return { ok: !0, path: "/professor/context" };
    } else {
      try {
        {
          const o = s.event, n = Q, m = S, r = await (async () => {
            const c = a.professor_access.isRegistered === !0;
            return {
              reason: c ? "professor_approval_required" : "registration_required",
              returnPath: "/professor/context",
              message: c ? "Professor tools require an approved educator role." : "Sign in and complete registration before opening Professor Studio."
            };
          })();
          a.professor_denied_prepare = r, t.customCodeResult = r;
        }
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "professor_denied_prepare" };
        return t.error = n, a.professor_denied_prepare = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
      }
      d("actionMessage", a.professor_denied_prepare.message), d("showActionMessage", !0);
      try {
        await ae({ reason: a.professor_denied_prepare.reason, returnPath: a.professor_denied_prepare.returnPath });
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "professor_denied_request" };
        return t.error = n, a.professor_denied_request = { error: n }, d("actionMessage", "This action could not be completed. Please retry."), d("showActionMessage", !0), { ok: !1 };
      }
      return a.professor_denied_request;
    }
  }
  async function ht(e = {}) {
    await K("navigationRequested", { path: (e || {}).path }, !0);
  }
  async function pt(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        const o = ["en", "hi", "ta"].includes(String(b.locale || "en")) ? String(b.locale || "en") : "en", n = {
          en: { title: "Quick answer", solution: "x = 2 and y = 3. Both equations are satisfied." },
          hi: { title: "त्वरित उत्तर", solution: "x = 2 और y = 3। दोनों समीकरण संतुष्ट होते हैं।" },
          ta: { title: "விரைவு விடை", solution: "x = 2 மற்றும் y = 3. இரண்டு சமன்பாடுகளும் நிறைவேறுகின்றன." }
        };
        return { language: o, title: n[o].title, solution: n[o].solution };
      })();
      t.showQuickSolution_prepare = a;
    }
    return d("demoSolutionTitle", t.showQuickSolution_prepare.title), d("demoSolutionText", t.showQuickSolution_prepare.solution), d("demoSolutionMode", "answer"), d("showDemoSolution", !0), { mode: "answer", ok: !0, solution: t.showQuickSolution_prepare.solution };
  }
  async function ft(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        const o = (function(m) {
          const r = [], c = /* @__PURE__ */ new Set(), u = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, v = Object.hasOwn(u, String(m?.locale)) ? u[String(m.locale)] : u.en;
          if (!Array.isArray(m?.subjectCards)) return r;
          for (const f of m.subjectCards.slice(0, 100)) {
            if (!f || typeof f != "object" || Array.isArray(f)) continue;
            const j = typeof f.title == "string" ? f.title.trim().slice(0, 120) : "", A = typeof f.redirectionLink == "string" ? f.redirectionLink.trim() : "";
            if (!j || !A.startsWith("/") || A.startsWith("//") || A.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(A) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(A) || c.has(A)) continue;
            c.add(A);
            const N = m.subjectsLocked === !0 || f.locked === !0, O = typeof f.lockedLabel == "string" && f.lockedLabel.trim() ? f.lockedLabel.trim().slice(0, 120) : v[1];
            r.push({ id: A, title: j, description: typeof f.description == "string" ? f.description.trim().slice(0, 600) : "", redirectionLink: A, locked: N, actionLabel: N ? O : v[0] });
          }
          return r;
        })(b);
        return !S.isSubjectNavigating && o.find((n) => n.redirectionLink === s.event?.value && !n.locked) || null;
      })();
      t.subject_guard = a;
    }
    if (t.subject_guard) {
      d("subjectNavigationFailed", !1), d("isSubjectNavigating", !0);
      try {
        await K("navigationRequested", { path: t.subject_guard.redirectionLink }, !0);
      } catch (a) {
        const o = { message: a instanceof Error ? a.message : String(a), name: a instanceof Error ? a.name : "Error", status: typeof a?.status == "number" ? a.status : void 0, stepId: "subject_emit" };
        return t.subject_emit = { error: o }, d("subjectNavigationFailed", !0), d("isSubjectNavigating", !1), { ok: !1 };
      }
      return d("isSubjectNavigating", !1), { ok: !0 };
    } else
      return { ok: !1, reason: "unavailable_subject" };
  }
  async function gt(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        function o(v) {
          const f = [
            `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
            "x = 6 ÷ 3 = 2",
            "−2 + y = 1",
            "y = 1 + 2 = 3",
            `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
          ], j = {
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
          }, A = Object.hasOwn(j, String(v)) ? j[String(v)] : j.en;
          return {
            method: A.method,
            result: A.result,
            verified: A.verified,
            list: A.list,
            steps: A.titles.map((N, O) => ({
              id: `demo-step-${O + 1}`,
              number: O + 1,
              marker: String(O + 1).padStart(2, "0"),
              title: N,
              description: A.descriptions[O],
              equation: f[O],
              checked: O === 4
            }))
          };
        }
        const n = o(b.locale).steps, m = Number.isInteger(S.demoStepIndex) ? Math.max(1, Math.min(5, S.demoStepIndex)) : 1, r = s.event?.value, c = r === "next" ? m + 1 : r === "previous" ? m - 1 : Number(r), u = Number.isInteger(c) ? Math.max(1, Math.min(5, c)) : m;
        return { index: u, steps: n.slice(u - 1, u) };
      })();
      t.select_step_prepare = a;
    }
    return d("demoStepIndex", t.select_step_prepare.index), d("demoVisibleSteps", t.select_step_prepare.steps), t.select_step_prepare;
  }
  async function je(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        function o(m, r = "") {
          if (!m || typeof m != "object" || Array.isArray(m)) throw new Error("A lesson object is required.");
          const c = (f, j, A = !1) => {
            if (f != null && typeof f != "string") throw new Error(j + " must be text.");
            const N = (f || "").trim();
            if (A && !N || N.length > 16e3) throw new Error("Invalid " + j + ".");
            return N;
          };
          if (!Array.isArray(m.steps) || !m.steps.length || m.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
          const u = /* @__PURE__ */ new Set(), v = m.steps.map((f, j) => {
            if (!f || typeof f != "object" || Array.isArray(f)) throw new Error("Invalid lesson step.");
            const A = c(f.id, "step ID") || "step-" + (j + 1);
            if (u.has(A)) throw new Error("Step IDs must be unique.");
            u.add(A);
            const N = f.teacherQuestion;
            if (!N || !Array.isArray(N.options) || N.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
            const O = /* @__PURE__ */ new Set(), St = N.options.map((x) => {
              const _ = c(x?.value, "option ID", !0);
              if (O.has(_)) throw new Error("Answer option IDs must be unique.");
              return O.add(_), { value: _, label: c(x?.label, "option label", !0) };
            }), Le = c(N.correctValue, "correct answer ID", !0);
            if (!O.has(Le)) throw new Error("The correct answer must reference a supplied option.");
            const Ee = c(N.prompt || f.teacherPrompt, "teacher question", !0);
            if (!Array.isArray(f.content) || !f.content.length || f.content.length > 60) throw new Error("Each step needs board content.");
            const vt = f.content.map((x) => {
              if (!x || typeof x != "object") throw new Error("Invalid board content.");
              switch (x.type) {
                case "heading":
                case "text":
                case "note":
                  return { ...x, text: c(x.text, "board text", !0) };
                case "equation":
                  return { ...x, visualText: c(x.visualText, "readable equation", !0), latex: c(x.latex, "equation") };
                case "definition":
                  return { ...x, term: c(x.term, "term", !0), text: c(x.text, "definition", !0) };
                case "theorem":
                  return { ...x, statement: c(x.statement, "theorem", !0) };
                case "list":
                case "proof": {
                  const _ = x.type === "list" ? "items" : "lines";
                  if (!Array.isArray(x[_]) || !x[_].length) throw new Error("Invalid board list.");
                  return { ...x, [_]: x[_].map((I) => c(I, "list entry", !0)) };
                }
                case "matrix": {
                  const _ = x.matrix?.rows;
                  if (!Array.isArray(_) || !_.length || _.length > 30 || !Array.isArray(_[0]) || !_[0].length || _[0].length > 30 || _.some((I) => !Array.isArray(I) || I.length !== _[0].length || I.some((xt) => !["string", "number"].includes(typeof xt)))) throw new Error("Invalid matrix.");
                  return x;
                }
                case "table":
                  if (!Array.isArray(x.headers) || !x.headers.length || !Array.isArray(x.rows) || x.rows.some((_) => !Array.isArray(_) || _.length !== x.headers.length)) throw new Error("Invalid table.");
                  return { ...x, headers: x.headers.map((_) => c(_, "table heading")), rows: x.rows.map((_) => _.map((I) => c(I, "table cell"))) };
                case "graph": {
                  if (!Array.isArray(x.nodes) || !Array.isArray(x.edges)) throw new Error("Invalid graph.");
                  const _ = /* @__PURE__ */ new Set();
                  for (const I of x.nodes) {
                    if (!I?.id || _.has(I.id) || !Number.isFinite(I.x) || !Number.isFinite(I.y)) throw new Error("Invalid graph node.");
                    _.add(I.id);
                  }
                  if (x.edges.some((I) => !_.has(I?.from) || !_.has(I?.to))) throw new Error("Invalid graph edge.");
                  return x;
                }
                default:
                  throw new Error("Unsupported board content type.");
              }
            }), Me = {
              id: A,
              title: c(f.title, "step title", !0),
              content: vt,
              teacherPrompt: Ee,
              teacherQuestion: { prompt: Ee, options: St, correctValue: Le, explanation: c(N.explanation, "answer explanation", !0) }
            };
            for (const x of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) Me[x] = c(f[x], x);
            return Me;
          });
          return {
            title: c(m.title, "lesson title", !0),
            lessonKind: "worked-example",
            problemLabel: c(m.problemLabel, "problem label") || "Problem",
            problemStatement: c(m.problemStatement || r, "problem statement", !0),
            learningGoal: c(m.learningGoal, "learning goal"),
            steps: v,
            verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
          };
        }
        function n(m) {
          if (!m || typeof m != "object" || Array.isArray(m) || !Object.keys(m).length) return { enabled: !1, valid: !1 };
          if (JSON.stringify(m).length > 25e4) throw new Error("Preview is too large.");
          if (m.schemaVersion !== 1) throw new Error("Unsupported preview schema.");
          const r = o(m.lesson, m.problem?.statement), c = m.context || {}, u = (v) => typeof v == "string" ? v.trim().slice(0, 500) : "";
          if (!u(c.syllabusId) || !u(c.contextKey) || !u(m.problem?.id)) throw new Error("Preview needs saved syllabus, context, and problem IDs.");
          return {
            enabled: !0,
            valid: !0,
            schemaVersion: 1,
            context: { syllabusId: u(c.syllabusId), contextKey: u(c.contextKey), versionNumber: Math.max(1, Math.floor(Number(c.versionNumber) || 1)), locale: ["en", "hi", "ta"].includes(c.locale) ? c.locale : "en", topicPath: u(c.topicPath) },
            problem: { id: u(m.problem.id), statement: r.problemStatement, solutionMode: m.problem.solutionMode === "quick" ? "quick" : "detailed" },
            lesson: r,
            boardSteps: r.steps.map(({ teacherQuestion: v, teacherPrompt: f, ...j }) => j),
            message: "Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified."
          };
        }
        try {
          return n(b.contentPreview);
        } catch {
          return { enabled: !0, valid: !1, message: "This preview is incomplete or invalid. Return to Studio and prepare it again." };
        }
      })();
      t.preview_validate = a;
    }
    return d("contentPreviewDisplay", t.preview_validate), t.preview_validate;
  }
  const yt = {
    requestImage: lt,
    submitProblem: ut,
    requestScholarAccess: ae,
    initializeHomeDemo: ue,
    showDetailedSolution: dt,
    initializeDiscoveryAccess: de,
    openProfessorStudio: mt,
    navigate: ht,
    showQuickSolution: pt,
    openDiscoverySubject: ft,
    selectDemoSolutionStep: gt,
    initializeContentPreview: je
  }, bt = {
    requestImage: [],
    submitProblem: ["mode"],
    requestScholarAccess: ["reason", "returnPath"],
    initializeHomeDemo: [],
    showDetailedSolution: [],
    initializeDiscoveryAccess: [],
    openProfessorStudio: [],
    navigate: ["path"],
    showQuickSolution: [],
    openDiscoverySubject: ["event"],
    selectDemoSolutionStep: ["event"],
    initializeContentPreview: []
  }, T = (e, s = {}, t = []) => {
    const a = yt[e];
    if (a) {
      const c = bt[e] || [];
      return a(Object.fromEntries(c.map((u, v) => {
        const f = Object.prototype.hasOwnProperty.call(s, u) ? s[u] : void 0;
        return [u, (f === "" || f === void 0) && t[v] !== void 0 ? t[v] : u === "event" && (f === "" || f === void 0) ? t[0] : f];
      })));
    }
    const o = V?.[e];
    if (typeof o == "function")
      return o(Object.keys(s).length > 0 ? s : t[0]);
    const [n, m] = String(e).split("."), r = typeof globalThis < "u" ? globalThis[n]?.[m] : void 0;
    if (typeof r == "function") return r(...Object.values(s));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, Z = re(/* @__PURE__ */ new Map()), se = ie((e, s, t, a) => {
    const o = Z.current.get(e);
    if (s === "exhaust" && o?.promise) return o.promise;
    s === "takeLatest" && o?.controller?.abort();
    const n = new AbortController(), m = () => Promise.resolve().then(() => t(n.signal)), r = s === "queue" && o?.promise ? o.promise.catch(() => {
    }).then(m) : m();
    return Z.current.set(e, { controller: n, promise: r }), r.catch((c) => {
      c?.name !== "AbortError" && console.error(a, c);
    }).finally(() => {
      Z.current.get(e)?.promise === r && Z.current.delete(e);
    }), r;
  }, []);
  $(() => () => {
    for (const e of Z.current.values()) e.controller?.abort();
    Z.current.clear();
  }, []), $(() => {
    se("discovery_access_mountinitializeDiscoveryAccess", "takeLatest", (e) => de({}), "Module mount lifecycle failed:");
  }, []), $(() => {
    se("discovery_demo_mountinitializeHomeDemo", "takeLatest", (e) => ue({}), "Module mount lifecycle failed:");
  }, []);
  const Ae = re(!1);
  $(() => {
    if (!Ae.current) {
      Ae.current = !0;
      return;
    }
    se("discovery_access_inputsinitializeDiscoveryAccess", "takeLatest", (e) => de({}), "Module input lifecycle failed:");
  }, [U, ge]);
  const Pe = re(!1);
  $(() => {
    if (!Pe.current) {
      Pe.current = !0;
      return;
    }
    se("discovery_demo_inputsinitializeHomeDemo", "takeLatest", (e) => ue({}), "Module input lifecycle failed:");
  }, [fe, M, ne]);
  const qe = re(!1);
  return $(() => {
    qe.current || (qe.current = !0), se("content_preview_inputsinitializeContentPreview", "takeLatest", (e) => je({}), "Module input lifecycle failed:");
  }, [J]), /* @__PURE__ */ y("div", { ref: H, className: "rudra-module-wrapper", children: h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
    "      ",
    /* @__PURE__ */ l(L, { id: "root", className: "block rs-discovery", children: [
      "      ",
      h(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(R?.enabled)) && /* @__PURE__ */ l(p, { children: [
        "      ",
        /* @__PURE__ */ l(L, { id: "content_preview_panel", className: "flex flex-col rs-content-preview", children: [
          "      ",
          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ y(k, { id: "content_preview_notice", className: "rs-content-preview-notice", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(R?.message), "aria-live": "polite" })
          ] }),
          h(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(R?.valid)) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ y(_t, { id: "content_preview_board", title: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(R?.lesson?.title), autoAdvance: !1, learningGoal: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(R?.lesson?.learningGoal), problemLabel: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(R?.lesson?.problemLabel), captionsEnabled: !0, popupInitiallyOpen: !1, steps: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(R?.boardSteps), playing: !1, problemStatement: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(R?.lesson?.problemStatement) })
          ] })
        ] })
      ] }),
      h(/* @__PURE__ */ ((e) => !e)(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(R?.enabled))) && /* @__PURE__ */ l(p, { children: [
        "      ",
        /* @__PURE__ */ l(L, { id: "content_preview_normal_hero", className: "block", children: [
          "      ",
          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ l(L, { id: "hero", className: "block rs-hero", children: [
              "      ",
              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ l(L, { id: "hero_inner", className: "grid rs-hero-inner", children: [
                  "      ",
                  h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                    "      ",
                    /* @__PURE__ */ l(L, { id: "copy", className: "flex flex-col rs-stack", children: [
                      "      ",
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(k, { id: "kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "A mathematics studio for college" : e)(w?.i18n?.kicker) })
                      ] }),
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(k, { id: "title", className: "rs-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "See the reasoning. Steer the lesson." : e)(w?.i18n?.title), customColor: "#effff9", as: "h2" })
                      ] }),
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(k, { id: "lede", className: "rs-lede", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose programme, semester and subject, then learn step by step." : e)(w?.i18n?.lede) })
                      ] }),
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ l(L, { id: "hero_actions", className: "flex flex-wrap rs-actions", children: [
                          "      ",
                          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ y(C, { id: "browse_cta", variant: "primary", onAction: (...e) => T("navigate", { path: "/browse/engineering/semester-1" }, e), size: "lg", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse mathematics" : e)(w?.i18n?.browse), theme: "dark" })
                          ] }),
                          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ y(C, { id: "prof_cta", size: "lg", label: "Professor Studio", theme: "dark", variant: "outline", onAction: (...e) => T("openProfessorStudio", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                    "      ",
                    /* @__PURE__ */ l(L, { id: "workbench", className: "flex flex-col rs-workbench", children: [
                      "      ",
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(k, { id: "prompt_title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Explore a worked example" : e)(w?.i18n?.prompt) })
                      ] }),
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(k, { id: "demo_disclosure", className: "rs-demo-disclosure", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Fixed worked example — no AI request is made here." : e)(w?.i18n?.demoNote) })
                      ] }),
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(k, { id: "problem_input", className: "rs-demo-problem", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Solve the system 2x + y = 7 and −x + y = 1." : e)(xe) })
                      ] }),
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ l(L, { id: "problem_actions", className: "grid rs-actions rs-solution-controls", children: [
                          "      ",
                          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ y(C, { id: "solve_now", onAction: (...e) => T("showQuickSolution", {}, e), "aria-pressed": /* @__PURE__ */ ((e) => e === "answer")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F)), type: "button", "aria-controls": "scholar-demo-solution", additionalAttributes: {}, id: "scholar-demo-quick", label: /* @__PURE__ */ ((e) => e === void 0 ? "Show answer" : e)(w?.i18n?.solveNow), theme: "light", variant: "primary" })
                          ] }),
                          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ y(C, { id: "steps", onAction: (...e) => T("showDetailedSolution", {}, e), "aria-controls": "scholar-demo-solution", additionalAttributes: {}, type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Show detailed steps" : e)(w?.i18n?.solveSteps), "aria-pressed": /* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F)), id: "scholar-demo-detailed", theme: "light", variant: "outline" })
                          ] }),
                          h(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ y(C, { id: "teacher", label: "Learn with professor", theme: "light", variant: "outline", onAction: (...e) => T("submitProblem", { mode: "professor" }, e) })
                          ] })
                        ] })
                      ] }),
                      h(ke) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ l(L, { id: "demo_solution", "data-solution-mode": /* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F), "aria-live": "polite", "aria-labelledby": "scholar-demo-solution-title", className: "flex flex-col rs-solution", id: "scholar-demo-solution", role: "region", children: [
                          "      ",
                          h(/* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F))) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ l(L, { id: "demo_step_picker", "aria-label": /* @__PURE__ */ ((e) => e === void 0 ? "Choose a solution step" : e)(w?.i18n?.demoStepPicker), className: "grid rs-step-picker", role: "group", children: [
                              "      ",
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(C, { id: "demo_step_pick_1", className: "rs-step-dot", onAction: (...e) => T("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1: Eliminate y" : e)(w?.i18n?.demoStepLabel1), "aria-pressed": /* @__PURE__ */ ((e) => e === 1)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)), id: "scholar-demo_step_pick_1", type: "button", label: "1", value: 1 })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(C, { id: "demo_step_pick_2", className: "rs-step-dot", "aria-pressed": /* @__PURE__ */ ((e) => e === 2)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)), id: "scholar-demo_step_pick_2", type: "button", label: "2", value: 2, onAction: (...e) => T("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 2: Solve for x" : e)(w?.i18n?.demoStepLabel2) })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(C, { id: "demo_step_pick_3", className: "rs-step-dot", onAction: (...e) => T("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 3: Substitute x = 2" : e)(w?.i18n?.demoStepLabel3), "aria-pressed": /* @__PURE__ */ ((e) => e === 3)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)), id: "scholar-demo_step_pick_3", type: "button", label: "3", value: 3 })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(C, { id: "demo_step_pick_4", className: "rs-step-dot", "aria-pressed": /* @__PURE__ */ ((e) => e === 4)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)), id: "scholar-demo_step_pick_4", type: "button", label: "4", value: 4, onAction: (...e) => T("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 4: Solve for y" : e)(w?.i18n?.demoStepLabel4) })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(C, { id: "demo_step_pick_5", className: "rs-step-dot", label: "5", value: 5, onAction: (...e) => T("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 5: Check both equations" : e)(w?.i18n?.demoStepLabel5), "aria-pressed": /* @__PURE__ */ ((e) => e === 5)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)), id: "scholar-demo_step_pick_5", type: "button" })
                              ] })
                            ] })
                          ] }),
                          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ l(L, { id: "demo_solution_header", className: "grid rs-solution-heading", children: [
                              "      ",
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ l(L, { id: "demo_solution_icon_wrap", "aria-hidden": !0, className: "flex rs-solution-mark", children: [
                                  "      ",
                                  h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ y(pe, { icon: "Sparkles", id: "demo_solution_icon", size: 20, strokeWidth: 1.8 })
                                  ] })
                                ] })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ l(L, { id: "demo_solution_heading_copy", className: "flex flex-col rs-solution-heading-copy", children: [
                                  "      ",
                                  h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ y(k, { id: "demo_solution_title", className: "rs-demo-solution-title", as: "h3", id: "scholar-demo-solution-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Quick answer" : e)(ve) })
                                  ] }),
                                  h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ y(k, { id: "demo_solution_method", className: "rs-solution-method", as: "p", content: ((e) => (function(t) {
                                      const a = [
                                        `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                                        "x = 6 ÷ 3 = 2",
                                        "−2 + y = 1",
                                        "y = 1 + 2 = 3",
                                        `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                                      ], o = {
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
                                      }, n = Object.hasOwn(o, String(t)) ? o[String(t)] : o.en;
                                      return {
                                        method: n.method,
                                        result: n.result,
                                        verified: n.verified,
                                        list: n.list,
                                        steps: n.titles.map((m, r) => ({
                                          id: `demo-step-${r + 1}`,
                                          number: r + 1,
                                          marker: String(r + 1).padStart(2, "0"),
                                          title: m,
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
                          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ l(L, { id: "demo_solution_result", className: "flex flex-col rs-solution-result", children: [
                              "      ",
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(k, { id: "demo_solution_result_label", className: "rs-solution-eyebrow", as: "p", content: ((e) => (function(t) {
                                  const a = [
                                    `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                                    "x = 6 ÷ 3 = 2",
                                    "−2 + y = 1",
                                    "y = 1 + 2 = 3",
                                    `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                                  ], o = {
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
                                  }, n = Object.hasOwn(o, String(t)) ? o[String(t)] : o.en;
                                  return {
                                    method: n.method,
                                    result: n.result,
                                    verified: n.verified,
                                    list: n.list,
                                    steps: n.titles.map((m, r) => ({
                                      id: `demo-step-${r + 1}`,
                                      number: r + 1,
                                      marker: String(r + 1).padStart(2, "0"),
                                      title: m,
                                      description: n.descriptions[r],
                                      equation: a[r],
                                      checked: r === 4
                                    }))
                                  };
                                })(e).result)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)) })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ l(L, { id: "demo_solution_values", className: "grid rs-solution-values", children: [
                                  "      ",
                                  h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ y(k, { id: "demo_solution_x", className: "rs-solution-value", as: "p", content: "x = 2" })
                                  ] }),
                                  h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ y(k, { id: "demo_solution_y", className: "rs-solution-value", as: "p", content: "y = 3" })
                                  ] })
                                ] })
                              ] }),
                              h(/* @__PURE__ */ ((e) => e === "answer")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F))) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(k, { id: "demo_solution_body", className: "rs-demo-solution-body rs-solution-summary", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "x = 2 and y = 3." : e)(ye) })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(k, { id: "demo_solution_verified", className: "rs-solution-verified", as: "p", content: ((e) => (function(t) {
                                  const a = [
                                    `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                                    "x = 6 ÷ 3 = 2",
                                    "−2 + y = 1",
                                    "y = 1 + 2 = 3",
                                    `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                                  ], o = {
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
                                  }, n = Object.hasOwn(o, String(t)) ? o[String(t)] : o.en;
                                  return {
                                    method: n.method,
                                    result: n.result,
                                    verified: n.verified,
                                    list: n.list,
                                    steps: n.titles.map((m, r) => ({
                                      id: `demo-step-${r + 1}`,
                                      number: r + 1,
                                      marker: String(r + 1).padStart(2, "0"),
                                      title: m,
                                      description: n.descriptions[r],
                                      equation: a[r],
                                      checked: r === 4
                                    }))
                                  };
                                })(e).verified)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)) })
                              ] })
                            ] })
                          ] }),
                          h(/* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F))) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ y(Ne, { id: "demo_solution_steps", className: "grid rs-solution-steps", items: /* @__PURE__ */ ((e) => e === void 0 ? [{ checked: !1, description: "Subtract the second equation from the first. The y terms cancel.", equation: `(2x + y) − (−x + y) = 7 − 1
3x = 6`, id: "demo-step-1", marker: 1, number: 1, title: "Eliminate y" }] : e)(_e), "aria-label": ((e) => (function(t) {
                              const a = [
                                `(2x + y) − (−x + y) = 7 − 1
3x = 6`,
                                "x = 6 ÷ 3 = 2",
                                "−2 + y = 1",
                                "y = 1 + 2 = 3",
                                `2(2) + 3 = 7 ✓
−2 + 3 = 1 ✓`
                              ], o = {
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
                              }, n = Object.hasOwn(o, String(t)) ? o[String(t)] : o.en;
                              return {
                                method: n.method,
                                result: n.result,
                                verified: n.verified,
                                list: n.list,
                                steps: n.titles.map((m, r) => ({
                                  id: `demo-step-${r + 1}`,
                                  number: r + 1,
                                  marker: String(r + 1).padStart(2, "0"),
                                  title: m,
                                  description: n.descriptions[r],
                                  equation: a[r],
                                  checked: r === 4
                                }))
                              };
                            })(e).list)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)), role: "list", children: (e) => (() => {
                              const s = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                              return /* @__PURE__ */ l(p, { children: [
                                "      ",
                                h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                  "      ",
                                  /* @__PURE__ */ l(L, { id: "demo_solution_step", "aria-setsize": 5, "aria-posinset": /* @__PURE__ */ ((t) => t === void 0 ? 1 : t)(s?.item?.number), className: `${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(((t) => "grid rs-solution-step" + (t ? " rs-solution-step--check" : ""))(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.checked)))}`, role: "listitem", children: [
                                    "      ",
                                    h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                      "      ",
                                      /* @__PURE__ */ y(k, { id: "demo_solution_step_marker", className: "rs-solution-step-marker", as: "span", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.marker), "aria-hidden": !0 })
                                    ] }),
                                    h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                      "      ",
                                      /* @__PURE__ */ l(L, { id: "demo_solution_step_content", className: "flex flex-col rs-solution-step-content", children: [
                                        "      ",
                                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                          "      ",
                                          /* @__PURE__ */ y(k, { id: "demo_solution_step_title", className: "rs-solution-step-title", as: "h4", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.title) })
                                        ] }),
                                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                          "      ",
                                          /* @__PURE__ */ y(k, { id: "demo_solution_step_description", className: "rs-solution-step-description", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.description) })
                                        ] }),
                                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                          "      ",
                                          /* @__PURE__ */ y(k, { id: "demo_solution_step_equation", className: "rs-solution-step-equation", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.equation) })
                                        ] })
                                      ] })
                                    ] })
                                  ] })
                                ] })
                              ] });
                            })() })
                          ] }),
                          h(/* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F))) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ l(L, { id: "demo_step_navigation", className: "grid rs-step-navigation", children: [
                              "      ",
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(C, { id: "demo_step_previous", className: "rs-step-nav-button", id: "scholar-demo_step_previous", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Previous" : e)(w?.i18n?.demoPrevious), value: "previous", disabled: ((e) => e <= 1)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)), onAction: (...e) => T("selectDemoSolutionStep", {}, e) })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(k, { id: "demo_step_count", className: "rs-step-count", as: "span", content: ((e) => String(e) + " / 5")(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)) })
                              ] }),
                              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ y(C, { id: "demo_step_next", className: "rs-step-nav-button", id: "scholar-demo_step_next", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next" : e)(w?.i18n?.demoNext), value: "next", disabled: ((e) => e >= 5)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(z)), onAction: (...e) => T("selectDemoSolutionStep", {}, e) })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] }),
                      h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(C, { id: "image", leftIcon: /* @__PURE__ */ l(p, { children: [
                          "      ",
                          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ y(pe, { icon: "LockKeyhole", id: "image_lock_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), label: "Upload an image · Coming soon", theme: "light", variant: "ghost", disabled: !0, onAction: (...e) => T("requestImage", {}, e), ariaLabel: "Image problem upload is locked until a post-release update", additionalAttributes: { disabled: !0, title: "Planned for a post-release update" }, id: "scholar-image-upload-locked" })
                      ] }),
                      h(we) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ y(wt, { id: "problem_status", live: "polite", title: "Action needed", variant: "warning", appearance: "soft" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      h(/* @__PURE__ */ ((e) => !e)(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(R?.enabled))) && /* @__PURE__ */ l(p, { children: [
        "      ",
        /* @__PURE__ */ l(L, { id: "content_preview_normal_subjects", className: "block", children: [
          "      ",
          h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ l(L, { id: "subjects", className: "flex flex-col rs-subject-section", children: [
              "      ",
              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ y(k, { id: "subjects_heading", className: "rs-subjects-heading", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Start with a subject" : e)(w?.i18n?.popular) })
              ] }),
              h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ y(k, { id: "subjects_intro", className: "rs-subjects-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose a foundation subject and explore its concepts, examples, and problems." : e)(w?.i18n?.subjectsIntro) })
              ] }),
              h(((e) => (function(t) {
                const a = [], o = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, m = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
                if (!Array.isArray(t?.subjectCards)) return a;
                for (const r of t.subjectCards.slice(0, 100)) {
                  if (!r || typeof r != "object" || Array.isArray(r)) continue;
                  const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", u = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                  if (!c || !u.startsWith("/") || u.startsWith("//") || u.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(u) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(u) || o.has(u)) continue;
                  o.add(u);
                  const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                  a.push({ id: u, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: u, locked: v, actionLabel: v ? f : m[0] });
                }
                return a;
              })(e).length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ y(Ne, { id: "subject_grid", className: "rs-subject-grid", items: ((e) => (function(t) {
                  const a = [], o = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, m = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
                  if (!Array.isArray(t?.subjectCards)) return a;
                  for (const r of t.subjectCards.slice(0, 100)) {
                    if (!r || typeof r != "object" || Array.isArray(r)) continue;
                    const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", u = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                    if (!c || !u.startsWith("/") || u.startsWith("//") || u.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(u) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(u) || o.has(u)) continue;
                    o.add(u);
                    const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                    a.push({ id: u, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: u, locked: v, actionLabel: v ? f : m[0] });
                  }
                  return a;
                })(e))(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b)), children: (e) => (() => {
                  const s = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                  return /* @__PURE__ */ l(p, { children: [
                    "      ",
                    h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                      "      ",
                      /* @__PURE__ */ l(he, { id: "linear", className: `flex ${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(((t) => "flex flex-col rs-subject-card" + (t ? " rs-subject-card--locked" : ""))(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.locked)))}`, as: "article", theme: "auto", children: [
                        "      ",
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(k, { id: "linear_title", className: "rs-subject-card-title", as: "h3", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.title) })
                        ] }),
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(k, { id: "linear_copy", className: "rs-subject-card-copy", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.description) })
                        ] }),
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(C, { id: "linear_go", leftIcon: /* @__PURE__ */ l(p, { children: [
                            "      ",
                            h(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.locked)) && /* @__PURE__ */ l(p, { children: [
                              "      ",
                              /* @__PURE__ */ y(pe, { icon: "LockKeyhole", id: "subject_lock_icon", size: 16, strokeWidth: 1.8 })
                            ] })
                          ] }), fullWidth: !0, type: "button", label: /* @__PURE__ */ ((t) => t === void 0 ? "Open subject" : t)(s?.item?.actionLabel), variant: "outline", size: "md", theme: "auto", value: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.redirectionLink), loading: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(Se), disabled: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.locked), onAction: (...t) => T("openDiscoverySubject", {}, t) })
                        ] })
                      ] })
                    ] }),
                    h(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ l(p, { children: [
                      "      ",
                      /* @__PURE__ */ l(he, { id: "calculus", className: "flex flex-col rs-subject-card", as: "article", theme: "auto", children: [
                        "      ",
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(k, { id: "calculus_title", className: "rs-subject-card-title", as: "h3", content: "Calculus" })
                        ] }),
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(k, { id: "calculus_copy", className: "rs-subject-card-copy", content: "Limits, derivatives, integration and multivariable reasoning.", as: "p" })
                        ] }),
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(C, { id: "calculus_go", size: "md", label: "Open subject", theme: "auto", variant: "outline", onAction: (...t) => T("navigate", { path: "/browse/engineering/semester-1/calculus" }, t), fullWidth: !0 })
                        ] })
                      ] })
                    ] }),
                    h(g({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ l(p, { children: [
                      "      ",
                      /* @__PURE__ */ l(he, { id: "discrete", className: "flex flex-col rs-subject-card", theme: "auto", as: "article", children: [
                        "      ",
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(k, { id: "discrete_title", className: "rs-subject-card-title", content: "Discrete mathematics", as: "h3" })
                        ] }),
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(k, { id: "discrete_copy", className: "rs-subject-card-copy", as: "p", content: "Logic, combinatorics, graphs and recurrence relations." })
                        ] }),
                        h(g({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ y(C, { id: "discrete_go", size: "md", label: "Open subject", theme: "auto", variant: "outline", onAction: (...t) => T("navigate", { path: "/browse/engineering/semester-1/discrete-mathematics" }, t), fullWidth: !0 })
                        ] })
                      ] })
                    ] })
                  ] });
                })() })
              ] }),
              h(((e) => (function(t) {
                const a = [], o = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, m = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
                if (!Array.isArray(t?.subjectCards)) return a;
                for (const r of t.subjectCards.slice(0, 100)) {
                  if (!r || typeof r != "object" || Array.isArray(r)) continue;
                  const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", u = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                  if (!c || !u.startsWith("/") || u.startsWith("//") || u.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(u) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(u) || o.has(u)) continue;
                  o.add(u);
                  const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                  a.push({ id: u, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: u, locked: v, actionLabel: v ? f : m[0] });
                }
                return a;
              })(e).length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ y(k, { id: "subjects_empty", className: "rs-subject-empty", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No subjects are available here yet. Browse the course catalogue to continue." : e)(w?.i18n?.emptySubjects) })
              ] }),
              h(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(be)) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ y(k, { id: "subjects_error", className: "rs-subject-error", as: "p", role: "alert", content: /* @__PURE__ */ ((e) => e === void 0 ? "This subject could not be opened. Please try again." : e)(w?.i18n?.subjectError) })
              ] }),
              h(((e) => (function(t) {
                const a = [], o = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, m = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
                if (!Array.isArray(t?.subjectCards)) return a;
                for (const r of t.subjectCards.slice(0, 100)) {
                  if (!r || typeof r != "object" || Array.isArray(r)) continue;
                  const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", u = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                  if (!c || !u.startsWith("/") || u.startsWith("//") || u.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(u) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(u) || o.has(u)) continue;
                  o.add(u);
                  const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                  a.push({ id: u, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: u, locked: v, actionLabel: v ? f : m[0] });
                }
                return a;
              })(e).length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ y(C, { id: "subjects_browse", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse courses" : e)(w?.i18n?.browseCatalogue), theme: "auto", variant: "primary", onAction: (...e) => T("navigate", { path: "/browse" }, e), size: "lg", type: "button" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Et as default
};
