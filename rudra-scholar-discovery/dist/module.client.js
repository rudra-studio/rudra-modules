import { jsx as g, jsxs as l, Fragment as p } from "react/jsx-runtime";
import he, { useState as L, useEffect as R, useRef as re, useCallback as ie } from "react";
import { Box as E, Repeater as De } from "@rudra-studio/rudra-layout";
import { Typography as k, Button as T, Alert as kt, Card as pe } from "@rudra-studio/rudra-core";
import { BlackboardLesson as jt } from "@rudra-studio/chalkmind-math";
import * as ae from "lucide-react";
const Te = (i) => String(i || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), At = (i) => {
  let x = i;
  for (; x && typeof x == "object" && "type" in x && "value" in x; )
    x = x.value;
  return x;
};
function fe({ icon: i, size: x, color: q, strokeWidth: Q, className: V = "", style: I, ...J }) {
  const P = At(i), [ee, H] = L(null), te = P && typeof P == "object" ? JSON.stringify(P) : String(P || "");
  R(() => {
    const $ = new AbortController();
    let U = "", K = "";
    if (H(null), typeof P == "string") {
      const M = P.trim();
      if (ae[M]) return () => $.abort();
      M.startsWith("<svg") ? K = M : (/^https?:\/\//.test(M) || M.startsWith("/") || M.startsWith("data:image/svg")) && (U = M);
    } else P && typeof P == "object" && (P.iconType === "svg" && P.svgContent ? K = P.svgContent : P.iconType === "url" && P.url && (U = P.url));
    return K ? H(Te(K)) : U && fetch(U, { signal: $.signal }).then((M) => {
      if (!M.ok) throw new Error("Icon request failed (" + M.status + ")");
      return M.text();
    }).then((M) => {
      M.trim().startsWith("<svg") && H(Te(M));
    }).catch((M) => {
      M.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", M);
    }), () => $.abort();
  }, [te]);
  const W = P && typeof P == "object" ? P.props || {} : {}, y = { ...W };
  delete y.size, delete y.color, delete y.strokeWidth;
  const h = x ?? W.size ?? 24, oe = q ?? W.color ?? "currentColor", X = Q ?? W.strokeWidth ?? 1.5;
  let Y = "";
  if (typeof P == "string" && ae[P] ? Y = P : P && typeof P == "object" && P.name && (!P.iconType || P.iconType === "lucide") && (Y = P.name), Y) {
    const $ = ae[Y];
    if ($)
      return he.createElement($, {
        size: h,
        color: oe,
        strokeWidth: X,
        className: V,
        style: I,
        ...y,
        ...J
      });
  }
  if (ee)
    return he.createElement("span", {
      ...y,
      ...J,
      className: ("rudra-universal-icon " + V).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: h,
        height: h,
        color: oe,
        ...I
      },
      dangerouslySetInnerHTML: {
        __html: ee.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + X + '">')
      }
    });
  const ce = ae.LayoutGrid;
  return he.createElement(ce, {
    size: h,
    color: oe,
    strokeWidth: X,
    className: V,
    style: I,
    ...y,
    ...J
  });
}
function Mt(i) {
  const x = {}, q = i.serverData || i.serverState || {};
  i.sharedState, i.applicationState || q.applicationState, i.pageState || q.pageState;
  const Q = i.pageData || q.pageData || {}, V = {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  };
  i.$route ?? i.route ?? i.data?.$route ?? i.data?.route ?? i.runtime?.data?.$route ?? i.runtime?.route ?? q?.$route ?? q?.route, i.$params ?? i.routeParams ?? i.params ?? i.data?.$params ?? i.data?.routeParams ?? i.data?.params ?? i.runtime?.data?.$params ?? i.runtime?.route?.params ?? i.runtime?.routeParams ?? i.runtime?.params ?? q?.$params ?? q?.routeParams ?? q?.params, i.$query ?? i.queryParams ?? i.query ?? i.data?.$query ?? i.data?.queryParams ?? i.data?.query ?? i.runtime?.data?.$query ?? i.runtime?.route?.query ?? i.runtime?.queryParams ?? i.runtime?.query ?? q?.$query ?? q?.queryParams ?? q?.query, i.$auth ?? i.auth ?? i.data?.$auth ?? i.data?.auth ?? i.runtime?.data?.$auth ?? i.runtime?.authInfo ?? i.runtime?.auth ?? q?.$auth ?? q?.auth, i.$config ?? i.config ?? i.data?.$config ?? i.data?.config ?? i.runtime?.data?.$config ?? i.runtime?.config ?? q?.$config ?? q?.config, i.$env ?? i.env ?? i.data?.$env ?? i.data?.env ?? i.runtime?.data?.$env ?? i.runtime?.env ?? q?.$env ?? q?.env, i.$locale ?? i.locale ?? i.data?.$locale ?? i.data?.locale ?? i.runtime?.data?.$locale ?? i.runtime?.locale ?? q?.$locale ?? q?.locale, i.$translations ?? i.translations ?? i.data?.$translations ?? i.data?.translations ?? i.runtime?.data?.$translations ?? i.runtime?.translations ?? q?.$translations ?? q?.translations, i.$i18n ?? i.i18n ?? i.data?.$i18n ?? i.data?.i18n ?? i.runtime?.data?.$i18n ?? i.runtime?.i18n ?? q?.$i18n ?? q?.i18n;
  const I = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, J = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [P, ee] = L(() => I ?? J());
  R(() => {
    I != null && ee(I);
  }, [I]), R(() => {
    if (I != null || typeof document > "u") return;
    const e = document.documentElement, s = (a) => ee(a?.detail?.theme ?? J()), t = new MutationObserver(s);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", s), s(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", s);
    };
  }, [I]);
  const H = re(null), [te, W] = L("lg");
  R(() => {
    if (!H.current) return;
    const e = new ResizeObserver((s) => {
      for (let t of s) {
        const a = t.contentRect.width;
        a < 768 ? W("sm") : a < 1024 ? W("md") : W("lg");
      }
    });
    return e.observe(H.current), () => e.disconnect();
  }, []);
  const y = ie((e) => typeof e != "object" || e === null ? e : te === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : te === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [te]), h = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, oe = i.programmeSlug !== void 0 ? i.programmeSlug : i.data?.programmeSlug !== void 0 ? i.data.programmeSlug : "engineering", X = i.initialSolveMode !== void 0 ? i.initialSolveMode : i.data?.initialSolveMode !== void 0 ? i.data.initialSolveMode : "answer", Y = i.subjectSlug !== void 0 ? i.subjectSlug : i.data?.subjectSlug !== void 0 ? i.data.subjectSlug : "linear-algebra", ce = i.pageMode !== void 0 ? i.pageMode : i.data?.pageMode !== void 0 ? i.data.pageMode : "landing", $ = i.authenticated !== void 0 ? i.authenticated : i.data?.authenticated !== void 0 ? i.data.authenticated : !1, U = i.locale !== void 0 ? i.locale : i.data?.locale !== void 0 ? i.data.locale : "en", K = i.accessProfile !== void 0 ? i.accessProfile : i.data?.accessProfile !== void 0 ? i.data.accessProfile : {}, M = i.subjectCards !== void 0 ? i.subjectCards : i.data?.subjectCards !== void 0 ? i.data.subjectCards : [{ description: "Vectors, matrices, linear maps, eigenvalues and diagonalisation.", locked: !1, redirectionLink: "/browse/engineering/semester-1/linear-algebra", title: "Linear algebra" }, { description: "Limits, derivatives, integration and multivariable reasoning.", locked: !1, redirectionLink: "/browse/engineering/semester-1/calculus", title: "Calculus" }, { description: "Logic, combinatorics, graphs and recurrence relations.", locked: !1, redirectionLink: "/browse/engineering/semester-1/discrete-mathematics", title: "Discrete mathematics" }], Ce = i.returnPath !== void 0 ? i.returnPath : i.data?.returnPath !== void 0 ? i.data.returnPath : "/learn", ye = i.autoSolveOnLoad !== void 0 ? i.autoSolveOnLoad : i.data?.autoSolveOnLoad !== void 0 ? i.data.autoSolveOnLoad : !0, Oe = i.semesterSlug !== void 0 ? i.semesterSlug : i.data?.semesterSlug !== void 0 ? i.data.semesterSlug : "semester-1", Ie = i.subjectsLocked !== void 0 ? i.subjectsLocked : i.data?.subjectsLocked !== void 0 ? i.data.subjectsLocked : !1, ge = i.contentPreview !== void 0 ? i.contentPreview : i.data?.contentPreview !== void 0 ? i.data.contentPreview : {}, b = { programmeSlug: oe, initialSolveMode: X, subjectSlug: Y, pageMode: ce, authenticated: $, locale: U, accessProfile: K, subjectCards: M, returnPath: Ce, autoSolveOnLoad: ye, semesterSlug: Oe, subjectsLocked: Ie, contentPreview: ge }, [be, Re] = L(() => structuredClone(!1)), [Se, $e] = L(() => structuredClone(!0)), [ve, ze] = L(() => structuredClone(!1)), [we, Be] = L(() => structuredClone(!1)), [We, Fe] = L(() => structuredClone(!0)), [Qe, He] = L(() => structuredClone(!1)), [xe, Ue] = L(() => structuredClone("Quick answer")), [F, Ke] = L(() => structuredClone("answer")), [_e, Ge] = L(() => structuredClone("x = 2 and y = 3. Both equations are satisfied.")), [Je, Xe] = L(() => structuredClone("")), [Ye, Ze] = L(() => structuredClone("en")), [ke, Ve] = L(() => structuredClone([{ checked: !1, description: "Subtract the second equation from the first. The y terms cancel.", equation: `(2x + y) − (−x + y) = 7 − 1
3x = 6`, id: "demo-step-1", marker: "01", number: 1, title: "Eliminate y" }])), [je, et] = L(() => structuredClone("Solve the system 2x + y = 7 and −x + y = 1.")), [tt, ot] = L(() => structuredClone({ authenticated: !1, isRegistered: !1, roles: [], verificationStatus: "not_required" })), [z, st] = L(() => structuredClone({ enabled: !1, valid: !1 })), [rt, it] = L(() => structuredClone(!1)), [B, nt] = L(() => structuredClone(1)), [at, ct] = L(() => structuredClone("")), [le, lt] = L(() => structuredClone(!0)), S = { subjectNavigationFailed: be, showDemoSolution: Se, showActionMessage: ve, isSubjectNavigating: we, showAccessHint: We, canOpenProfessorStudio: Qe, demoSolutionTitle: xe, demoSolutionMode: F, demoSolutionText: _e, actionMessage: Je, problemLanguage: Ye, demoVisibleSteps: ke, problemText: je, accessDecision: tt, contentPreviewDisplay: z, canLearn: rt, demoStepIndex: B, lastProblemControlId: at, showNormalDiscovery: le }, u = ie((e, s) => {
    switch (e) {
      case "subjectNavigationFailed": {
        const t = typeof s == "function" ? s(S.subjectNavigationFailed) : s;
        return S.subjectNavigationFailed = t, Re(t), t;
      }
      case "showDemoSolution": {
        const t = typeof s == "function" ? s(S.showDemoSolution) : s;
        return S.showDemoSolution = t, $e(t), t;
      }
      case "showActionMessage": {
        const t = typeof s == "function" ? s(S.showActionMessage) : s;
        return S.showActionMessage = t, ze(t), t;
      }
      case "isSubjectNavigating": {
        const t = typeof s == "function" ? s(S.isSubjectNavigating) : s;
        return S.isSubjectNavigating = t, Be(t), t;
      }
      case "showAccessHint": {
        const t = typeof s == "function" ? s(S.showAccessHint) : s;
        return S.showAccessHint = t, Fe(t), t;
      }
      case "canOpenProfessorStudio": {
        const t = typeof s == "function" ? s(S.canOpenProfessorStudio) : s;
        return S.canOpenProfessorStudio = t, He(t), t;
      }
      case "demoSolutionTitle": {
        const t = typeof s == "function" ? s(S.demoSolutionTitle) : s;
        return S.demoSolutionTitle = t, Ue(t), t;
      }
      case "demoSolutionMode": {
        const t = typeof s == "function" ? s(S.demoSolutionMode) : s;
        return S.demoSolutionMode = t, Ke(t), t;
      }
      case "demoSolutionText": {
        const t = typeof s == "function" ? s(S.demoSolutionText) : s;
        return S.demoSolutionText = t, Ge(t), t;
      }
      case "actionMessage": {
        const t = typeof s == "function" ? s(S.actionMessage) : s;
        return S.actionMessage = t, Xe(t), t;
      }
      case "problemLanguage": {
        const t = typeof s == "function" ? s(S.problemLanguage) : s;
        return S.problemLanguage = t, Ze(t), t;
      }
      case "demoVisibleSteps": {
        const t = typeof s == "function" ? s(S.demoVisibleSteps) : s;
        return S.demoVisibleSteps = t, Ve(t), t;
      }
      case "problemText": {
        const t = typeof s == "function" ? s(S.problemText) : s;
        return S.problemText = t, et(t), t;
      }
      case "accessDecision": {
        const t = typeof s == "function" ? s(S.accessDecision) : s;
        return S.accessDecision = t, ot(t), t;
      }
      case "contentPreviewDisplay": {
        const t = typeof s == "function" ? s(S.contentPreviewDisplay) : s;
        return S.contentPreviewDisplay = t, st(t), t;
      }
      case "canLearn": {
        const t = typeof s == "function" ? s(S.canLearn) : s;
        return S.canLearn = t, it(t), t;
      }
      case "demoStepIndex": {
        const t = typeof s == "function" ? s(S.demoStepIndex) : s;
        return S.demoStepIndex = t, nt(t), t;
      }
      case "lastProblemControlId": {
        const t = typeof s == "function" ? s(S.lastProblemControlId) : s;
        return S.lastProblemControlId = t, ct(t), t;
      }
      case "showNormalDiscovery": {
        const t = typeof s == "function" ? s(S.showNormalDiscovery) : s;
        return S.showNormalDiscovery = t, lt(t), t;
      }
      default:
        return s;
    }
  }, [S]);
  ie((e, s) => {
    const [t, ...a] = String(e || "").split(".");
    if (!t) return s;
    if (a.length === 0) return u(t, s);
    const o = (n) => {
      const m = Array.isArray(n) ? [...n] : { ...n || {} };
      let r = m;
      return a.forEach((c, d) => {
        d === a.length - 1 ? r[c] = s : (r[c] = Array.isArray(r[c]) ? [...r[c]] : { ...r[c] || {} }, r = r[c]);
      }), m;
    };
    switch (t) {
      case "subjectNavigationFailed":
        return u("subjectNavigationFailed", o), s;
      case "showDemoSolution":
        return u("showDemoSolution", o), s;
      case "showActionMessage":
        return u("showActionMessage", o), s;
      case "isSubjectNavigating":
        return u("isSubjectNavigating", o), s;
      case "showAccessHint":
        return u("showAccessHint", o), s;
      case "canOpenProfessorStudio":
        return u("canOpenProfessorStudio", o), s;
      case "demoSolutionTitle":
        return u("demoSolutionTitle", o), s;
      case "demoSolutionMode":
        return u("demoSolutionMode", o), s;
      case "demoSolutionText":
        return u("demoSolutionText", o), s;
      case "actionMessage":
        return u("actionMessage", o), s;
      case "problemLanguage":
        return u("problemLanguage", o), s;
      case "demoVisibleSteps":
        return u("demoVisibleSteps", o), s;
      case "problemText":
        return u("problemText", o), s;
      case "accessDecision":
        return u("accessDecision", o), s;
      case "contentPreviewDisplay":
        return u("contentPreviewDisplay", o), s;
      case "canLearn":
        return u("canLearn", o), s;
      case "demoStepIndex":
        return u("demoStepIndex", o), s;
      case "lastProblemControlId":
        return u("lastProblemControlId", o), s;
      case "showNormalDiscovery":
        return u("showNormalDiscovery", o), s;
      default:
        return s;
    }
  }, [u]);
  const ut = { accessRequired: { properties: { path: { type: "string" }, reason: { type: "string" }, returnPath: { type: "string" } }, required: ["reason", "returnPath", "path"], type: "object" }, imageProblemRequested: { properties: { context: { type: "object" } }, type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, type: "object" }, problemSubmitted: { properties: { context: { type: "object" }, languageCode: { type: "string" }, mode: { type: "string" }, problem: { type: "string" } }, required: ["problem", "mode", "languageCode"], type: "object" } }, ue = (e, s, t) => {
    if (!s || typeof s != "object") return "";
    const a = Array.isArray(s.type) ? s.type : s.type ? [s.type] : [], o = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (a.length && !a.includes(o) && !(o === "integer" && a.includes("number"))) return t + " must be " + a.join(" or ") + ".";
    if (s.enum && !s.enum.some((n) => JSON.stringify(n) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const n of s.required || []) if (!Object.prototype.hasOwnProperty.call(e, n)) return t + "." + n + " is required.";
      for (const [n, m] of Object.entries(s.properties || {})) if (Object.prototype.hasOwnProperty.call(e, n)) {
        const r = ue(e[n], m, t + "." + n);
        if (r) return r;
      }
    }
    if (Array.isArray(e) && s.items) for (let n = 0; n < e.length; n++) {
      const m = ue(e[n], s.items, t + "[" + n + "]");
      if (m) return m;
    }
    return "";
  }, G = ie(async (e, s, t = !1) => {
    const a = ut[e];
    if (!a) throw new Error("Module output '" + e + "' is not declared.");
    const o = ue(s, a, "output." + e);
    if (o) throw new Error(o);
    const n = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof n != "function") return s;
    const m = n(e, s, { moduleId: i.moduleId, awaitHandlers: t });
    return t ? await m : s;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]);
  async function Ae(e = {}) {
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
          const d = /* @__PURE__ */ new Set(), v = m.steps.map((f, j) => {
            if (!f || typeof f != "object" || Array.isArray(f)) throw new Error("Invalid lesson step.");
            const A = c(f.id, "step ID") || "step-" + (j + 1);
            if (d.has(A)) throw new Error("Step IDs must be unique.");
            d.add(A);
            const N = f.teacherQuestion;
            if (!N || !Array.isArray(N.options) || N.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
            const C = /* @__PURE__ */ new Set(), wt = N.options.map((w) => {
              const _ = c(w?.value, "option ID", !0);
              if (C.has(_)) throw new Error("Answer option IDs must be unique.");
              return C.add(_), { value: _, label: c(w?.label, "option label", !0) };
            }), Ee = c(N.correctValue, "correct answer ID", !0);
            if (!C.has(Ee)) throw new Error("The correct answer must reference a supplied option.");
            const Ne = c(N.prompt || f.teacherPrompt, "teacher question", !0);
            if (!Array.isArray(f.content) || !f.content.length || f.content.length > 60) throw new Error("Each step needs board content.");
            const xt = f.content.map((w) => {
              if (!w || typeof w != "object") throw new Error("Invalid board content.");
              switch (w.type) {
                case "heading":
                case "text":
                case "note":
                  return { ...w, text: c(w.text, "board text", !0) };
                case "equation":
                  return { ...w, visualText: c(w.visualText, "readable equation", !0), latex: c(w.latex, "equation") };
                case "definition":
                  return { ...w, term: c(w.term, "term", !0), text: c(w.text, "definition", !0) };
                case "theorem":
                  return { ...w, statement: c(w.statement, "theorem", !0) };
                case "list":
                case "proof": {
                  const _ = w.type === "list" ? "items" : "lines";
                  if (!Array.isArray(w[_]) || !w[_].length) throw new Error("Invalid board list.");
                  return { ...w, [_]: w[_].map((O) => c(O, "list entry", !0)) };
                }
                case "matrix": {
                  const _ = w.matrix?.rows;
                  if (!Array.isArray(_) || !_.length || _.length > 30 || !Array.isArray(_[0]) || !_[0].length || _[0].length > 30 || _.some((O) => !Array.isArray(O) || O.length !== _[0].length || O.some((_t) => !["string", "number"].includes(typeof _t)))) throw new Error("Invalid matrix.");
                  return w;
                }
                case "table":
                  if (!Array.isArray(w.headers) || !w.headers.length || !Array.isArray(w.rows) || w.rows.some((_) => !Array.isArray(_) || _.length !== w.headers.length)) throw new Error("Invalid table.");
                  return { ...w, headers: w.headers.map((_) => c(_, "table heading")), rows: w.rows.map((_) => _.map((O) => c(O, "table cell"))) };
                case "graph": {
                  if (!Array.isArray(w.nodes) || !Array.isArray(w.edges)) throw new Error("Invalid graph.");
                  const _ = /* @__PURE__ */ new Set();
                  for (const O of w.nodes) {
                    if (!O?.id || _.has(O.id) || !Number.isFinite(O.x) || !Number.isFinite(O.y)) throw new Error("Invalid graph node.");
                    _.add(O.id);
                  }
                  if (w.edges.some((O) => !_.has(O?.from) || !_.has(O?.to))) throw new Error("Invalid graph edge.");
                  return w;
                }
                default:
                  throw new Error("Unsupported board content type.");
              }
            }), Me = {
              id: A,
              title: c(f.title, "step title", !0),
              content: xt,
              teacherPrompt: Ne,
              teacherQuestion: { prompt: Ne, options: wt, correctValue: Ee, explanation: c(N.explanation, "answer explanation", !0) }
            };
            for (const w of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) Me[w] = c(f[w], w);
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
          if (!m || typeof m != "object" || Array.isArray(m) || !Object.keys(m).length) return { enabled: !1, valid: !1, showNormal: !0 };
          if (JSON.stringify(m).length > 25e4) throw new Error("Preview is too large.");
          if (m.schemaVersion !== 1) throw new Error("Unsupported preview schema.");
          const r = o(m.lesson, m.problem?.statement), c = m.context || {}, d = (v) => typeof v == "string" ? v.trim().slice(0, 500) : "";
          if (!d(c.syllabusId) || !d(c.contextKey) || !d(m.problem?.id)) throw new Error("Preview needs saved syllabus, context, and problem IDs.");
          return {
            enabled: !0,
            valid: !0,
            showNormal: !1,
            schemaVersion: 1,
            context: { syllabusId: d(c.syllabusId), contextKey: d(c.contextKey), versionNumber: Math.max(1, Math.floor(Number(c.versionNumber) || 1)), locale: ["en", "hi", "ta"].includes(c.locale) ? c.locale : "en", topicPath: d(c.topicPath) },
            problem: { id: d(m.problem.id), statement: r.problemStatement, solutionMode: m.problem.solutionMode === "quick" ? "quick" : "detailed" },
            lesson: r,
            boardSteps: r.steps.map(({ teacherQuestion: v, teacherPrompt: f, ...j }) => j),
            message: "Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified."
          };
        }
        try {
          return n(b.contentPreview);
        } catch {
          return { enabled: !0, valid: !1, showNormal: !1, message: "This preview is incomplete or invalid. Return to Studio and prepare it again." };
        }
      })();
      t.preview_validate = a;
    }
    return u("contentPreviewDisplay", t.preview_validate), u("showNormalDiscovery", t.preview_validate.showNormal), t.preview_validate;
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
    u("demoSolutionTitle", t.showDetailedSolution_prepare.title), u("demoSolutionText", t.showDetailedSolution_prepare.solution), u("demoSolutionMode", "steps"), u("showDemoSolution", !0);
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
          }, d = Object.hasOwn(c, String(m)) ? c[String(m)] : c.en;
          return {
            method: d.method,
            result: d.result,
            verified: d.verified,
            list: d.list,
            steps: d.titles.map((v, f) => ({
              id: `demo-step-${f + 1}`,
              number: f + 1,
              marker: String(f + 1).padStart(2, "0"),
              title: v,
              description: d.descriptions[f],
              equation: r[f],
              checked: f === 4
            }))
          };
        }
        return o(b.locale).steps.slice(0, 1);
      })();
      t.compact_step_prepare = a;
    }
    return u("demoStepIndex", 1), u("demoVisibleSteps", t.compact_step_prepare), { mode: "steps", ok: !0, solution: t.showDetailedSolution_prepare.solution };
  }
  async function mt(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, d = Object.keys(c).length > 0, v = c.authenticated === !0 || c.isAuthenticated === !0 || !!(c.uid || c.userId || c.id) || b.authenticated === !0, f = v && c.isRegistered === !0, j = Array.isArray(c.roles) ? c.roles.map(String) : [], A = String(c.verificationStatus || "not_required"), N = j.includes("professor") || j.includes("educator") || j.includes("admin") || j.includes("institution_admin"), C = f && N && ["approved", "verified"].includes(A);
          return { authenticated: v, isRegistered: f, roles: j, verificationStatus: A, canLearn: f, canOpenProfessorStudio: C };
        })();
        a.image_access = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "image_access" };
      return t.error = n, a.image_access = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
    }
    if (a.image_access.canLearn) {
      u("actionMessage", ""), u("showActionMessage", !1);
      try {
        await G("imageProblemRequested", { context: { programmeSlug: b.programmeSlug, semesterSlug: b.semesterSlug, subjectSlug: b.subjectSlug } }, !0);
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "image_emit" };
        return t.error = n, a.image_emit = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
      }
      return { ok: !0 };
    } else {
      u("actionMessage", "Sign in and complete your Scholar profile before uploading a problem image."), u("showActionMessage", !0);
      try {
        await ne({ reason: "registration_required", returnPath: b.returnPath });
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "image_denied_request" };
        return t.error = n, a.image_denied_request = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
      }
      return a.image_denied_request;
    }
  }
  async function ne(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = String(s.reason || "registration_required"), d = String(s.returnPath || b.returnPath || "/learn"), v = c === "professor_approval_required" ? "/account/verification" : "/access", f = v === "/access" ? v + "?returnPath=" + encodeURIComponent(d) : v;
          return { reason: c, returnPath: d, path: f };
        })();
        a.access_request_prepare = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "access_request_prepare" };
      return t.error = n, a.access_request_prepare = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
    }
    try {
      await G("accessRequired", { path: a.access_request_prepare.path, reason: a.access_request_prepare.reason, returnPath: a.access_request_prepare.returnPath }, !0);
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "access_request_emit" };
      return t.error = n, a.access_request_emit = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
    }
    try {
      await G("navigationRequested", { path: a.access_request_prepare.path }, !0);
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "access_request_navigate" };
      return t.error = n, a.access_request_navigate = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
    }
    return a.access_request_prepare;
  }
  async function ht(e = {}) {
    await G("navigationRequested", { path: (e || {}).path }, !0);
  }
  async function de(e = {}) {
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
    u("problemText", t.demo_prepare.problem), u("demoSolutionTitle", t.demo_prepare.title), u("demoSolutionText", t.demo_prepare.solution), u("demoSolutionMode", t.demo_prepare.mode), u("showDemoSolution", t.demo_prepare.show);
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
          }, d = Object.hasOwn(c, String(m)) ? c[String(m)] : c.en;
          return {
            method: d.method,
            result: d.result,
            verified: d.verified,
            list: d.list,
            steps: d.titles.map((v, f) => ({
              id: `demo-step-${f + 1}`,
              number: f + 1,
              marker: String(f + 1).padStart(2, "0"),
              title: v,
              description: d.descriptions[f],
              equation: r[f],
              checked: f === 4
            }))
          };
        }
        return o(b.locale).steps.slice(0, 1);
      })();
      t.compact_step_prepare = a;
    }
    return u("demoStepIndex", 1), u("demoVisibleSteps", t.compact_step_prepare), t.demo_prepare;
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
    return u("demoSolutionTitle", t.showQuickSolution_prepare.title), u("demoSolutionText", t.showQuickSolution_prepare.solution), u("demoSolutionMode", "answer"), u("showDemoSolution", !0), { mode: "answer", ok: !0, solution: t.showQuickSolution_prepare.solution };
  }
  async function ft(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        const o = (function(m) {
          const r = [], c = /* @__PURE__ */ new Set(), d = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, v = Object.hasOwn(d, String(m?.locale)) ? d[String(m.locale)] : d.en;
          if (!Array.isArray(m?.subjectCards)) return r;
          for (const f of m.subjectCards.slice(0, 100)) {
            if (!f || typeof f != "object" || Array.isArray(f)) continue;
            const j = typeof f.title == "string" ? f.title.trim().slice(0, 120) : "", A = typeof f.redirectionLink == "string" ? f.redirectionLink.trim() : "";
            if (!j || !A.startsWith("/") || A.startsWith("//") || A.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(A) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(A) || c.has(A)) continue;
            c.add(A);
            const N = m.subjectsLocked === !0 || f.locked === !0, C = typeof f.lockedLabel == "string" && f.lockedLabel.trim() ? f.lockedLabel.trim().slice(0, 120) : v[1];
            r.push({ id: A, title: j, description: typeof f.description == "string" ? f.description.trim().slice(0, 600) : "", redirectionLink: A, locked: N, actionLabel: N ? C : v[0] });
          }
          return r;
        })(b);
        return !S.isSubjectNavigating && o.find((n) => n.redirectionLink === s.event?.value && !n.locked) || null;
      })();
      t.subject_guard = a;
    }
    if (t.subject_guard) {
      u("subjectNavigationFailed", !1), u("isSubjectNavigating", !0);
      try {
        await G("navigationRequested", { path: t.subject_guard.redirectionLink }, !0);
      } catch (a) {
        const o = { message: a instanceof Error ? a.message : String(a), name: a instanceof Error ? a.name : "Error", status: typeof a?.status == "number" ? a.status : void 0, stepId: "subject_emit" };
        return t.subject_emit = { error: o }, u("subjectNavigationFailed", !0), u("isSubjectNavigating", !1), { ok: !1 };
      }
      return u("isSubjectNavigating", !1), { ok: !0 };
    } else
      return { ok: !1, reason: "unavailable_subject" };
  }
  async function yt(e = {}) {
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
            steps: A.titles.map((N, C) => ({
              id: `demo-step-${C + 1}`,
              number: C + 1,
              marker: String(C + 1).padStart(2, "0"),
              title: N,
              description: A.descriptions[C],
              equation: f[C],
              checked: C === 4
            }))
          };
        }
        const n = o(b.locale).steps, m = Number.isInteger(S.demoStepIndex) ? Math.max(1, Math.min(5, S.demoStepIndex)) : 1, r = s.event?.value, c = r === "next" ? m + 1 : r === "previous" ? m - 1 : Number(r), d = Number.isInteger(c) ? Math.max(1, Math.min(5, c)) : m;
        return { index: d, steps: n.slice(d - 1, d) };
      })();
      t.select_step_prepare = a;
    }
    return u("demoStepIndex", t.select_step_prepare.index), u("demoVisibleSteps", t.select_step_prepare.steps), t.select_step_prepare;
  }
  async function gt(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, d = Object.keys(c).length > 0, v = c.authenticated === !0 || c.isAuthenticated === !0 || !!(c.uid || c.userId || c.id) || b.authenticated === !0, f = v && c.isRegistered === !0, j = String(S.problemText || "").trim();
          return { authenticated: v, isRegistered: f, canLearn: f, problem: j, hasProblem: j.length > 0 };
        })();
        a.problem_check = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "problem_check" };
      return t.error = n, a.problem_check = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
    }
    if (a.problem_check.canLearn)
      if (a.problem_check.hasProblem) {
        u("actionMessage", ""), u("showActionMessage", !1);
        try {
          await G("problemSubmitted", { context: { programmeSlug: b.programmeSlug, semesterSlug: b.semesterSlug, subjectSlug: b.subjectSlug }, languageCode: b.locale || "en", mode: s.mode, problem: a.problem_check.problem }, !0);
        } catch (o) {
          const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "problem_emit" };
          return t.error = n, a.problem_emit = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
        }
        return { languageCode: b.locale || "en", mode: s.mode, ok: !0, problem: a.problem_check.problem };
      } else
        return u("actionMessage", "Enter a mathematics problem before continuing."), u("showActionMessage", !0), { ok: !1, reason: "empty_problem" };
    else {
      u("actionMessage", "Sign in and complete your Scholar profile to solve this problem."), u("showActionMessage", !0);
      try {
        await ne({ reason: "registration_required", returnPath: b.returnPath });
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "problem_denied_request" };
        return t.error = n, a.problem_denied_request = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
      }
      return a.problem_denied_request;
    }
  }
  async function me(e = {}) {
    const s = e || {}, t = {};
    {
      s.event;
      const a = await (async () => {
        const o = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {};
        Object.keys(o).length > 0;
        const n = o.authenticated === !0 || o.isAuthenticated === !0 || !!(o.uid || o.userId || o.id) || b.authenticated === !0, m = n && o.isRegistered === !0, r = Array.isArray(o.roles) ? o.roles.map(String) : [], c = String(o.verificationStatus || "not_required"), d = r.includes("professor") || r.includes("educator") || r.includes("admin") || r.includes("institution_admin"), v = m && d && ["approved", "verified"].includes(c);
        return { authenticated: n, isRegistered: m, roles: r, verificationStatus: c, canLearn: m, canOpenProfessorStudio: v };
      })();
      t.access_derive = a;
    }
    return u("accessDecision", t.access_derive), u("canLearn", t.access_derive.canLearn), u("canOpenProfessorStudio", t.access_derive.canOpenProfessorStudio), t.access_derive;
  }
  async function bt(e = {}) {
    const s = e || {}, t = {}, a = {};
    try {
      {
        const o = s.event, n = Q, m = S, r = await (async () => {
          const c = b.accessProfile && typeof b.accessProfile == "object" ? b.accessProfile : {}, d = Object.keys(c).length > 0, v = c.authenticated === !0 || c.isAuthenticated === !0 || !!(c.uid || c.userId || c.id) || b.authenticated === !0, f = v && c.isRegistered === !0, j = Array.isArray(c.roles) ? c.roles.map(String) : [], A = String(c.verificationStatus || "not_required"), N = j.includes("professor") || j.includes("educator") || j.includes("admin") || j.includes("institution_admin"), C = f && N && ["approved", "verified"].includes(A);
          return { authenticated: v, isRegistered: f, roles: j, verificationStatus: A, canLearn: f, canOpenProfessorStudio: C };
        })();
        a.professor_access = r, t.customCodeResult = r;
      }
    } catch (o) {
      const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "professor_access" };
      return t.error = n, a.professor_access = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
    }
    if (a.professor_access.canOpenProfessorStudio) {
      try {
        await G("navigationRequested", { path: "/professor/context" }, !0);
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "professor_open" };
        return t.error = n, a.professor_open = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
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
        return t.error = n, a.professor_denied_prepare = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
      }
      u("actionMessage", a.professor_denied_prepare.message), u("showActionMessage", !0);
      try {
        await ne({ reason: a.professor_denied_prepare.reason, returnPath: a.professor_denied_prepare.returnPath });
      } catch (o) {
        const n = { message: o instanceof Error ? o.message : String(o), name: o instanceof Error ? o.name : "Error", status: typeof o?.status == "number" ? o.status : void 0, stepId: "professor_denied_request" };
        return t.error = n, a.professor_denied_request = { error: n }, u("actionMessage", "This action could not be completed. Please retry."), u("showActionMessage", !0), { ok: !1 };
      }
      return a.professor_denied_request;
    }
  }
  const St = {
    initializeContentPreview: Ae,
    showDetailedSolution: dt,
    requestImage: mt,
    requestScholarAccess: ne,
    navigate: ht,
    initializeHomeDemo: de,
    showQuickSolution: pt,
    openDiscoverySubject: ft,
    selectDemoSolutionStep: yt,
    submitProblem: gt,
    initializeDiscoveryAccess: me,
    openProfessorStudio: bt
  }, vt = {
    initializeContentPreview: [],
    showDetailedSolution: [],
    requestImage: [],
    requestScholarAccess: ["reason", "returnPath"],
    navigate: ["path"],
    initializeHomeDemo: [],
    showQuickSolution: [],
    openDiscoverySubject: ["event"],
    selectDemoSolutionStep: ["event"],
    submitProblem: ["mode"],
    initializeDiscoveryAccess: [],
    openProfessorStudio: []
  }, D = (e, s = {}, t = []) => {
    const a = St[e];
    if (a) {
      const c = vt[e] || [];
      return a(Object.fromEntries(c.map((d, v) => {
        const f = Object.prototype.hasOwnProperty.call(s, d) ? s[d] : void 0;
        return [d, (f === "" || f === void 0) && t[v] !== void 0 ? t[v] : d === "event" && (f === "" || f === void 0) ? t[0] : f];
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
  R(() => () => {
    for (const e of Z.current.values()) e.controller?.abort();
    Z.current.clear();
  }, []), R(() => {
    se("discovery_access_mountinitializeDiscoveryAccess", "takeLatest", (e) => me({}), "Module mount lifecycle failed:");
  }, []), R(() => {
    se("discovery_demo_mountinitializeHomeDemo", "takeLatest", (e) => de({}), "Module mount lifecycle failed:");
  }, []);
  const Pe = re(!1);
  R(() => {
    if (!Pe.current) {
      Pe.current = !0;
      return;
    }
    se("discovery_access_inputsinitializeDiscoveryAccess", "takeLatest", (e) => me({}), "Module input lifecycle failed:");
  }, [$, K]);
  const qe = re(!1);
  R(() => {
    if (!qe.current) {
      qe.current = !0;
      return;
    }
    se("discovery_demo_inputsinitializeHomeDemo", "takeLatest", (e) => de({}), "Module input lifecycle failed:");
  }, [U, ye, X]);
  const Le = re(!1);
  return R(() => {
    Le.current || (Le.current = !0), se("content_preview_inputsinitializeContentPreview", "takeLatest", (e) => Ae({}), "Module input lifecycle failed:");
  }, [ge]), /* @__PURE__ */ g("div", { ref: H, className: "rudra-module-wrapper", children: h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
    "      ",
    /* @__PURE__ */ l(E, { id: "root", className: "block rs-discovery", children: [
      "      ",
      h(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(z?.enabled)) && /* @__PURE__ */ l(p, { children: [
        "      ",
        /* @__PURE__ */ l(E, { id: "content_preview_panel", className: "flex flex-col rs-content-preview", children: [
          "      ",
          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ g(k, { id: "content_preview_notice", className: "rs-content-preview-notice", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(z?.message), "aria-live": "polite" })
          ] }),
          h(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(z?.valid)) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ g(jt, { id: "content_preview_board", autoAdvance: !1, learningGoal: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(z?.lesson?.learningGoal), problemLabel: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(z?.lesson?.problemLabel), problemStatement: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(z?.lesson?.problemStatement), popupInitiallyOpen: !1, steps: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(z?.boardSteps), title: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(z?.lesson?.title), playing: !1, captionsEnabled: !0 })
          ] })
        ] })
      ] }),
      h(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(le)) && /* @__PURE__ */ l(p, { children: [
        "      ",
        /* @__PURE__ */ l(E, { id: "content_preview_normal_hero", className: "block", children: [
          "      ",
          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ l(E, { id: "hero", className: "block rs-hero", children: [
              "      ",
              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ l(E, { id: "hero_inner", className: "grid rs-hero-inner", children: [
                  "      ",
                  h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                    "      ",
                    /* @__PURE__ */ l(E, { id: "copy", className: "flex flex-col rs-stack", children: [
                      "      ",
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(k, { id: "kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "A mathematics studio for college" : e)(x?.i18n?.kicker) })
                      ] }),
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(k, { id: "title", className: "rs-title", customColor: "#effff9", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "See the reasoning. Steer the lesson." : e)(x?.i18n?.title) })
                      ] }),
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(k, { id: "lede", className: "rs-lede", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose programme, semester and subject, then learn step by step." : e)(x?.i18n?.lede) })
                      ] }),
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ l(E, { id: "hero_actions", className: "flex flex-wrap rs-actions", children: [
                          "      ",
                          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ g(T, { id: "browse_cta", size: "lg", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse mathematics" : e)(x?.i18n?.browse), theme: "dark", variant: "primary", onAction: (...e) => D("navigate", { path: "/browse/engineering/semester-1" }, e) })
                          ] }),
                          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ g(T, { id: "prof_cta", variant: "outline", onAction: (...e) => D("openProfessorStudio", {}, e), size: "lg", label: "Professor Studio", theme: "dark" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                    "      ",
                    /* @__PURE__ */ l(E, { id: "workbench", className: "flex flex-col rs-workbench", children: [
                      "      ",
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(k, { id: "prompt_title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Explore a worked example" : e)(x?.i18n?.prompt), as: "h3" })
                      ] }),
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(k, { id: "demo_disclosure", className: "rs-demo-disclosure", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Fixed worked example — no AI request is made here." : e)(x?.i18n?.demoNote) })
                      ] }),
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(k, { id: "problem_input", className: "rs-demo-problem", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Solve the system 2x + y = 7 and −x + y = 1." : e)(je) })
                      ] }),
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ l(E, { id: "problem_actions", className: "grid rs-actions rs-solution-controls", children: [
                          "      ",
                          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ g(T, { id: "solve_now", id: "scholar-demo-quick", label: /* @__PURE__ */ ((e) => e === void 0 ? "Show answer" : e)(x?.i18n?.solveNow), theme: "light", variant: "primary", onAction: (...e) => D("showQuickSolution", {}, e), "aria-pressed": /* @__PURE__ */ ((e) => e === "answer")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F)), additionalAttributes: {}, type: "button", "aria-controls": "scholar-demo-solution" })
                          ] }),
                          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ g(T, { id: "steps", id: "scholar-demo-detailed", label: /* @__PURE__ */ ((e) => e === void 0 ? "Show detailed steps" : e)(x?.i18n?.solveSteps), variant: "outline", "aria-pressed": /* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F)), type: "button", theme: "light", onAction: (...e) => D("showDetailedSolution", {}, e), "aria-controls": "scholar-demo-solution", additionalAttributes: {} })
                          ] }),
                          h(y({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ g(T, { id: "teacher", label: "Learn with professor", theme: "light", variant: "outline", onAction: (...e) => D("submitProblem", { mode: "professor" }, e) })
                          ] })
                        ] })
                      ] }),
                      h(Se) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ l(E, { id: "demo_solution", "aria-live": "polite", "aria-labelledby": "scholar-demo-solution-title", "data-solution-mode": /* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F), className: "flex flex-col rs-solution", id: "scholar-demo-solution", role: "region", children: [
                          "      ",
                          h(/* @__PURE__ */ ((e) => e === "steps")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F))) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ l(E, { id: "demo_step_picker", "aria-label": /* @__PURE__ */ ((e) => e === void 0 ? "Choose a solution step" : e)(x?.i18n?.demoStepPicker), className: "grid rs-step-picker", role: "group", children: [
                              "      ",
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(T, { id: "demo_step_pick_1", className: "rs-step-dot", "aria-pressed": /* @__PURE__ */ ((e) => e === 1)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)), id: "scholar-demo_step_pick_1", type: "button", label: "1", value: 1, onAction: (...e) => D("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 1: Eliminate y" : e)(x?.i18n?.demoStepLabel1) })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(T, { id: "demo_step_pick_2", className: "rs-step-dot", "aria-pressed": /* @__PURE__ */ ((e) => e === 2)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)), id: "scholar-demo_step_pick_2", type: "button", label: "2", value: 2, onAction: (...e) => D("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 2: Solve for x" : e)(x?.i18n?.demoStepLabel2) })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(T, { id: "demo_step_pick_3", className: "rs-step-dot", "aria-pressed": /* @__PURE__ */ ((e) => e === 3)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)), id: "scholar-demo_step_pick_3", type: "button", label: "3", value: 3, onAction: (...e) => D("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 3: Substitute x = 2" : e)(x?.i18n?.demoStepLabel3) })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(T, { id: "demo_step_pick_4", className: "rs-step-dot", ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 4: Solve for y" : e)(x?.i18n?.demoStepLabel4), "aria-pressed": /* @__PURE__ */ ((e) => e === 4)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)), id: "scholar-demo_step_pick_4", type: "button", label: "4", value: 4, onAction: (...e) => D("selectDemoSolutionStep", {}, e) })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(T, { id: "demo_step_pick_5", className: "rs-step-dot", "aria-pressed": /* @__PURE__ */ ((e) => e === 5)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)), id: "scholar-demo_step_pick_5", type: "button", label: "5", value: 5, onAction: (...e) => D("selectDemoSolutionStep", {}, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Step 5: Check both equations" : e)(x?.i18n?.demoStepLabel5) })
                              ] })
                            ] })
                          ] }),
                          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ l(E, { id: "demo_solution_header", className: "grid rs-solution-heading", children: [
                              "      ",
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ l(E, { id: "demo_solution_icon_wrap", "aria-hidden": !0, className: "flex rs-solution-mark", children: [
                                  "      ",
                                  h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ g(fe, { icon: "Sparkles", id: "demo_solution_icon", size: 20, strokeWidth: 1.8 })
                                  ] })
                                ] })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ l(E, { id: "demo_solution_heading_copy", className: "flex flex-col rs-solution-heading-copy", children: [
                                  "      ",
                                  h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ g(k, { id: "demo_solution_title", className: "rs-demo-solution-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Quick answer" : e)(xe), as: "h3", id: "scholar-demo-solution-title" })
                                  ] }),
                                  h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ g(k, { id: "demo_solution_method", className: "rs-solution-method", as: "p", content: ((e) => (function(t) {
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
                          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ l(E, { id: "demo_solution_result", className: "flex flex-col rs-solution-result", children: [
                              "      ",
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(k, { id: "demo_solution_result_label", className: "rs-solution-eyebrow", content: ((e) => (function(t) {
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
                                })(e).result)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)), as: "p" })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ l(E, { id: "demo_solution_values", className: "grid rs-solution-values", children: [
                                  "      ",
                                  h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ g(k, { id: "demo_solution_x", className: "rs-solution-value", as: "p", content: "x = 2" })
                                  ] }),
                                  h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                    "      ",
                                    /* @__PURE__ */ g(k, { id: "demo_solution_y", className: "rs-solution-value", as: "p", content: "y = 3" })
                                  ] })
                                ] })
                              ] }),
                              h(/* @__PURE__ */ ((e) => e === "answer")(/* @__PURE__ */ ((e) => e === void 0 ? "answer" : e)(F))) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(k, { id: "demo_solution_body", className: "rs-demo-solution-body rs-solution-summary", content: /* @__PURE__ */ ((e) => e === void 0 ? "x = 2 and y = 3." : e)(_e), as: "p" })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(k, { id: "demo_solution_verified", className: "rs-solution-verified", as: "p", content: ((e) => (function(t) {
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
                            /* @__PURE__ */ g(De, { id: "demo_solution_steps", className: "grid rs-solution-steps", role: "list", items: /* @__PURE__ */ ((e) => e === void 0 ? [{ checked: !1, description: "Subtract the second equation from the first. The y terms cancel.", equation: `(2x + y) − (−x + y) = 7 − 1
3x = 6`, id: "demo-step-1", marker: 1, number: 1, title: "Eliminate y" }] : e)(ke), "aria-label": ((e) => (function(t) {
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
                            })(e).list)(/* @__PURE__ */ ((e) => e === void 0 ? "en" : e)(b?.locale)), children: (e) => (() => {
                              const s = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                              return /* @__PURE__ */ l(p, { children: [
                                "      ",
                                h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                  "      ",
                                  /* @__PURE__ */ l(E, { id: "demo_solution_step", "aria-posinset": /* @__PURE__ */ ((t) => t === void 0 ? 1 : t)(s?.item?.number), "aria-setsize": 5, className: `${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(((t) => "grid rs-solution-step" + (t ? " rs-solution-step--check" : ""))(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.checked)))}`, role: "listitem", children: [
                                    "      ",
                                    h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                      "      ",
                                      /* @__PURE__ */ g(k, { id: "demo_solution_step_marker", className: "rs-solution-step-marker", as: "span", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.marker), "aria-hidden": !0 })
                                    ] }),
                                    h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                      "      ",
                                      /* @__PURE__ */ l(E, { id: "demo_solution_step_content", className: "flex flex-col rs-solution-step-content", children: [
                                        "      ",
                                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                          "      ",
                                          /* @__PURE__ */ g(k, { id: "demo_solution_step_title", className: "rs-solution-step-title", as: "h4", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.title) })
                                        ] }),
                                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                          "      ",
                                          /* @__PURE__ */ g(k, { id: "demo_solution_step_description", className: "rs-solution-step-description", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.description) })
                                        ] }),
                                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                          "      ",
                                          /* @__PURE__ */ g(k, { id: "demo_solution_step_equation", className: "rs-solution-step-equation", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.equation) })
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
                            /* @__PURE__ */ l(E, { id: "demo_step_navigation", className: "grid rs-step-navigation", children: [
                              "      ",
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(T, { id: "demo_step_previous", className: "rs-step-nav-button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Previous" : e)(x?.i18n?.demoPrevious), value: "previous", disabled: ((e) => e <= 1)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)), onAction: (...e) => D("selectDemoSolutionStep", {}, e), id: "scholar-demo_step_previous", type: "button" })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(k, { id: "demo_step_count", className: "rs-step-count", as: "span", content: ((e) => String(e) + " / 5")(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)) })
                              ] }),
                              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                                "      ",
                                /* @__PURE__ */ g(T, { id: "demo_step_next", className: "rs-step-nav-button", id: "scholar-demo_step_next", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next" : e)(x?.i18n?.demoNext), value: "next", disabled: ((e) => e >= 5)(/* @__PURE__ */ ((e) => e === void 0 ? 1 : e)(B)), onAction: (...e) => D("selectDemoSolutionStep", {}, e) })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] }),
                      h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(T, { id: "image", leftIcon: /* @__PURE__ */ l(p, { children: [
                          "      ",
                          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                            "      ",
                            /* @__PURE__ */ g(fe, { icon: "LockKeyhole", id: "image_lock_icon", size: 18, strokeWidth: 2 })
                          ] })
                        ] }), variant: "ghost", disabled: !0, onAction: (...e) => D("requestImage", {}, e), ariaLabel: "Image problem upload is locked until a post-release update", additionalAttributes: { disabled: !0, title: "Planned for a post-release update" }, id: "scholar-image-upload-locked", label: "Upload an image · Coming soon", theme: "light" })
                      ] }),
                      h(ve) && /* @__PURE__ */ l(p, { children: [
                        "      ",
                        /* @__PURE__ */ g(kt, { id: "problem_status", live: "polite", title: "Action needed", variant: "warning", appearance: "soft" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      h(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(le)) && /* @__PURE__ */ l(p, { children: [
        "      ",
        /* @__PURE__ */ l(E, { id: "content_preview_normal_subjects", className: "block", children: [
          "      ",
          h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
            "      ",
            /* @__PURE__ */ l(E, { id: "subjects", className: "flex flex-col rs-subject-section", children: [
              "      ",
              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ g(k, { id: "subjects_heading", className: "rs-subjects-heading", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Start with a subject" : e)(x?.i18n?.popular) })
              ] }),
              h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ g(k, { id: "subjects_intro", className: "rs-subjects-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose a foundation subject and explore its concepts, examples, and problems." : e)(x?.i18n?.subjectsIntro) })
              ] }),
              h(((e) => (function(t) {
                const a = [], o = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, m = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
                if (!Array.isArray(t?.subjectCards)) return a;
                for (const r of t.subjectCards.slice(0, 100)) {
                  if (!r || typeof r != "object" || Array.isArray(r)) continue;
                  const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", d = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                  if (!c || !d.startsWith("/") || d.startsWith("//") || d.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(d) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(d) || o.has(d)) continue;
                  o.add(d);
                  const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                  a.push({ id: d, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: d, locked: v, actionLabel: v ? f : m[0] });
                }
                return a;
              })(e).length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ g(De, { id: "subject_grid", className: "rs-subject-grid", items: ((e) => (function(t) {
                  const a = [], o = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, m = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
                  if (!Array.isArray(t?.subjectCards)) return a;
                  for (const r of t.subjectCards.slice(0, 100)) {
                    if (!r || typeof r != "object" || Array.isArray(r)) continue;
                    const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", d = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                    if (!c || !d.startsWith("/") || d.startsWith("//") || d.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(d) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(d) || o.has(d)) continue;
                    o.add(d);
                    const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                    a.push({ id: d, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: d, locked: v, actionLabel: v ? f : m[0] });
                  }
                  return a;
                })(e))(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b)), children: (e) => (() => {
                  const s = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                  return /* @__PURE__ */ l(p, { children: [
                    "      ",
                    h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                      "      ",
                      /* @__PURE__ */ l(pe, { id: "linear", className: `flex ${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(((t) => "flex flex-col rs-subject-card" + (t ? " rs-subject-card--locked" : ""))(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.locked)))}`, as: "article", theme: "auto", children: [
                        "      ",
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(k, { id: "linear_title", className: "rs-subject-card-title", as: "h3", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.title) })
                        ] }),
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(k, { id: "linear_copy", className: "rs-subject-card-copy", as: "p", content: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.description) })
                        ] }),
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(T, { id: "linear_go", leftIcon: /* @__PURE__ */ l(p, { children: [
                            "      ",
                            h(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.locked)) && /* @__PURE__ */ l(p, { children: [
                              "      ",
                              /* @__PURE__ */ g(fe, { icon: "LockKeyhole", id: "subject_lock_icon", size: 16, strokeWidth: 1.8 })
                            ] })
                          ] }), disabled: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(s?.item?.locked), size: "md", loading: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(we), variant: "outline", onAction: (...t) => D("openDiscoverySubject", {}, t), fullWidth: !0, type: "button", label: /* @__PURE__ */ ((t) => t === void 0 ? "Open subject" : t)(s?.item?.actionLabel), theme: "auto", value: /* @__PURE__ */ ((t) => t === void 0 ? "" : t)(s?.item?.redirectionLink) })
                        ] })
                      ] })
                    ] }),
                    h(y({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ l(p, { children: [
                      "      ",
                      /* @__PURE__ */ l(pe, { id: "calculus", className: "flex flex-col rs-subject-card", as: "article", theme: "auto", children: [
                        "      ",
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(k, { id: "calculus_title", className: "rs-subject-card-title", as: "h3", content: "Calculus" })
                        ] }),
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(k, { id: "calculus_copy", className: "rs-subject-card-copy", as: "p", content: "Limits, derivatives, integration and multivariable reasoning." })
                        ] }),
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(T, { id: "calculus_go", size: "md", label: "Open subject", theme: "auto", variant: "outline", onAction: (...t) => D("navigate", { path: "/browse/engineering/semester-1/calculus" }, t), fullWidth: !0 })
                        ] })
                      ] })
                    ] }),
                    h(y({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ l(p, { children: [
                      "      ",
                      /* @__PURE__ */ l(pe, { id: "discrete", className: "flex flex-col rs-subject-card", as: "article", theme: "auto", children: [
                        "      ",
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(k, { id: "discrete_title", className: "rs-subject-card-title", as: "h3", content: "Discrete mathematics" })
                        ] }),
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(k, { id: "discrete_copy", className: "rs-subject-card-copy", as: "p", content: "Logic, combinatorics, graphs and recurrence relations." })
                        ] }),
                        h(y({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(p, { children: [
                          "      ",
                          /* @__PURE__ */ g(T, { id: "discrete_go", onAction: (...t) => D("navigate", { path: "/browse/engineering/semester-1/discrete-mathematics" }, t), fullWidth: !0, size: "md", label: "Open subject", theme: "auto", variant: "outline" })
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
                  const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", d = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                  if (!c || !d.startsWith("/") || d.startsWith("//") || d.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(d) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(d) || o.has(d)) continue;
                  o.add(d);
                  const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                  a.push({ id: d, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: d, locked: v, actionLabel: v ? f : m[0] });
                }
                return a;
              })(e).length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ g(k, { id: "subjects_empty", className: "rs-subject-empty", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No subjects are available here yet. Browse the course catalogue to continue." : e)(x?.i18n?.emptySubjects) })
              ] }),
              h(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(be)) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ g(k, { id: "subjects_error", className: "rs-subject-error", as: "p", role: "alert", content: /* @__PURE__ */ ((e) => e === void 0 ? "This subject could not be opened. Please try again." : e)(x?.i18n?.subjectError) })
              ] }),
              h(((e) => (function(t) {
                const a = [], o = /* @__PURE__ */ new Set(), n = { en: ["Open subject", "Locked"], hi: ["विषय खोलें", "लॉक है"], ta: ["பாடத்தைத் திற", "பூட்டப்பட்டுள்ளது"] }, m = Object.hasOwn(n, String(t?.locale)) ? n[String(t.locale)] : n.en;
                if (!Array.isArray(t?.subjectCards)) return a;
                for (const r of t.subjectCards.slice(0, 100)) {
                  if (!r || typeof r != "object" || Array.isArray(r)) continue;
                  const c = typeof r.title == "string" ? r.title.trim().slice(0, 120) : "", d = typeof r.redirectionLink == "string" ? r.redirectionLink.trim() : "";
                  if (!c || !d.startsWith("/") || d.startsWith("//") || d.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(d) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(d) || o.has(d)) continue;
                  o.add(d);
                  const v = t.subjectsLocked === !0 || r.locked === !0, f = typeof r.lockedLabel == "string" && r.lockedLabel.trim() ? r.lockedLabel.trim().slice(0, 120) : m[1];
                  a.push({ id: d, title: c, description: typeof r.description == "string" ? r.description.trim().slice(0, 600) : "", redirectionLink: d, locked: v, actionLabel: v ? f : m[0] });
                }
                return a;
              })(e).length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? {} : e)(b))) && /* @__PURE__ */ l(p, { children: [
                "      ",
                /* @__PURE__ */ g(T, { id: "subjects_browse", size: "lg", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse courses" : e)(x?.i18n?.browseCatalogue), theme: "auto", variant: "primary", onAction: (...e) => D("navigate", { path: "/browse" }, e) })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Mt as default
};
