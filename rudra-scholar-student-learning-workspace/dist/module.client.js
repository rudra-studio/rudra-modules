import { jsx as I, jsxs as p, Fragment as w } from "react/jsx-runtime";
import { useState as j, useEffect as Y, useRef as ie, useCallback as le } from "react";
import { BlackboardLesson as Ye } from "@rudra-studio/chalkmind-math";
import { Container as $t, Box as J } from "@rudra-studio/rudra-layout";
import { RadioGroup as zt } from "@rudra-studio/rudra-form";
import { Typography as T, Button as ce, Alert as he, Card as Wt } from "@rudra-studio/rudra-core";
function Ht(a) {
  const D = {}, E = a.serverData || a.serverState || {}, Z = a.sharedState || {}, H = a.applicationState || E.applicationState || {}, X = a.pageState || E.pageState || {}, z = a.pageData || E.pageData || {}, Ze = {
    ...a.runtime?.functions || {},
    ...a.runtime?.actions || {},
    ...a.functions || {},
    ...a.actions || {}
  };
  a.$route ?? a.route ?? a.data?.$route ?? a.data?.route ?? a.runtime?.data?.$route ?? a.runtime?.route ?? E?.$route ?? E?.route, a.$params ?? a.routeParams ?? a.params ?? a.data?.$params ?? a.data?.routeParams ?? a.data?.params ?? a.runtime?.data?.$params ?? a.runtime?.route?.params ?? a.runtime?.routeParams ?? a.runtime?.params ?? E?.$params ?? E?.routeParams ?? E?.params, a.$query ?? a.queryParams ?? a.query ?? a.data?.$query ?? a.data?.queryParams ?? a.data?.query ?? a.runtime?.data?.$query ?? a.runtime?.route?.query ?? a.runtime?.queryParams ?? a.runtime?.query ?? E?.$query ?? E?.queryParams ?? E?.query, a.$auth ?? a.auth ?? a.data?.$auth ?? a.data?.auth ?? a.runtime?.data?.$auth ?? a.runtime?.authInfo ?? a.runtime?.auth ?? E?.$auth ?? E?.auth, a.$config ?? a.config ?? a.data?.$config ?? a.data?.config ?? a.runtime?.data?.$config ?? a.runtime?.config ?? E?.$config ?? E?.config, a.$env ?? a.env ?? a.data?.$env ?? a.data?.env ?? a.runtime?.data?.$env ?? a.runtime?.env ?? E?.$env ?? E?.env, a.$locale ?? a.locale ?? a.data?.$locale ?? a.data?.locale ?? a.runtime?.data?.$locale ?? a.runtime?.locale ?? E?.$locale ?? E?.locale, a.$translations ?? a.translations ?? a.data?.$translations ?? a.data?.translations ?? a.runtime?.data?.$translations ?? a.runtime?.translations ?? E?.$translations ?? E?.translations, a.$i18n ?? a.i18n ?? a.data?.$i18n ?? a.data?.i18n ?? a.runtime?.data?.$i18n ?? a.runtime?.i18n ?? E?.$i18n ?? E?.i18n;
  const V = a.$theme ?? a.theme ?? a.data?.$theme ?? a.runtime?.data?.$theme ?? a.runtime?.theme, Ie = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Jt, Ce] = j(() => V ?? Ie());
  Y(() => {
    V != null && Ce(V);
  }, [V]), Y(() => {
    if (V != null || typeof document > "u") return;
    const e = document.documentElement, r = (n) => Ce(n?.detail?.theme ?? Ie()), o = new MutationObserver(r);
    return o.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [V]);
  const ye = ie(null), [ge, fe] = j("lg");
  Y(() => {
    if (!ye.current) return;
    const e = new ResizeObserver((r) => {
      for (let o of r) {
        const n = o.contentRect.width;
        n < 768 ? fe("sm") : n < 1024 ? fe("md") : fe("lg");
      }
    });
    return e.observe(ye.current), () => e.disconnect();
  }, []);
  const P = le((e) => typeof e != "object" || e === null ? e : ge === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : ge === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [ge]), S = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, qe = a.locale !== void 0 ? a.locale : a.data?.locale !== void 0 ? a.data.locale : "en", Le = a.loading !== void 0 ? a.loading : a.data?.loading !== void 0 ? a.data.loading : !1, we = a.problem !== void 0 ? a.problem : a.data?.problem !== void 0 ? a.data.problem : { cached: !0, id: "11111111-1111-4111-8111-111111111121", solutionMode: "detailed", statement: "Find the eigenvalues of A = [[2, 1], [1, 2]]." }, Re = a.contentPreview !== void 0 ? a.contentPreview : a.data?.contentPreview !== void 0 ? a.data.contentPreview : {}, Ne = a.authenticated !== void 0 ? a.authenticated : a.data?.authenticated !== void 0 ? a.data.authenticated : !0, He = a.initialProgressPercent !== void 0 ? a.initialProgressPercent : a.data?.initialProgressPercent !== void 0 ? a.data.initialProgressPercent : 0, Xe = a.courseContext !== void 0 ? a.courseContext : a.data?.courseContext !== void 0 ? a.data.courseContext : { contextKey: "rudra-scholar:engineering-mathematics", courseTitle: "Engineering Mathematics I", professorName: "Dr. Meera Iyer", sectionTitle: "Matrices and Eigenvalues", syllabusId: "11111111-1111-4111-8111-111111111112", topicPath: "engineering-mathematics/semester-1/linear-algebra/eigenvalues", versionNumber: 1 }, Ve = a.errorMessage !== void 0 ? a.errorMessage : a.data?.errorMessage !== void 0 ? a.data.errorMessage : "", et = a.remainingMinutes !== void 0 ? a.remainingMinutes : a.data?.remainingMinutes !== void 0 ? a.data.remainingMinutes : 90, tt = a.lesson !== void 0 ? a.lesson : a.data?.lesson !== void 0 ? a.data.lesson : { learningGoal: "Form the characteristic equation, solve it, and verify both eigenvalues.", lessonKind: "worked-example", problemLabel: "Linear algebra · Eigenvalues", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ commonMistake: "Do not change the off-diagonal entries.", content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }], explanation: "Eigenvalues satisfy det(A − λI) = 0.", id: "step-1", narration: "Subtract lambda from the diagonal.", simpleExplanation: "Make the matrix singular.", teacherPrompt: "Which equation determines the eigenvalues?", teacherQuestion: { correctValue: "a", explanation: "Eigenvalues make A − λI singular, so its determinant is zero.", options: [{ label: "det(A − λI) = 0", value: "a" }, { label: "det(A + λI) = 1", value: "b" }, { label: "A + I = 0", value: "c" }, { label: "trace(A) = 0", value: "d" }], prompt: "Which equation determines the eigenvalues?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A − λI is singular." }, { commonMistake: "Keep the signs consistent when expanding.", content: [{ label: "Polynomial", latex: "\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)", type: "equation", visualText: "λ² − 4λ + 3 = (λ − 1)(λ − 3)" }], explanation: "The equation becomes λ² − 4λ + 3 = 0.", id: "step-2", narration: "Expand the determinant and factor the polynomial.", simpleExplanation: "Find two numbers whose product is three and sum is four.", teacherPrompt: "Which pair contains both roots?", teacherQuestion: { correctValue: "c", explanation: "The factors vanish at λ = 1 and λ = 3.", options: [{ label: "−1 and −3", value: "a" }, { label: "0 and 2", value: "b" }, { label: "1 and 3", value: "c" }, { label: "2 and 4", value: "d" }], prompt: "Which pair contains both roots?" }, title: "Expand and factor", why: "Factoring reveals the roots directly." }, { commonMistake: "Do not verify only one root.", content: [{ text: "The eigenvalues are λ = 1 and λ = 3.", tone: "success", type: "note" }], explanation: "Both values satisfy the characteristic equation.", id: "step-3", narration: "Check that each result makes the determinant zero.", simpleExplanation: "Put each value back into the equation.", teacherPrompt: "Which eigenvalue corresponds to the vector [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to the vector [1, 1]?" }, title: "Verify the result", why: "Verification confirms that no algebraic error changed the answer." }], title: "Eigenvalues of a 2 × 2 matrix" }, rt = a.solutionSource !== void 0 ? a.solutionSource : a.data?.solutionSource !== void 0 ? a.data.solutionSource : "Saved solution · AI was not called", g = { locale: qe, loading: Le, problem: we, contentPreview: Re, authenticated: Ne, initialProgressPercent: He, courseContext: Xe, errorMessage: Ve, remainingMinutes: et, lesson: tt, solutionSource: rt }, [be, ot] = j(() => structuredClone(!1)), [Se, st] = j(() => structuredClone("")), [je, nt] = j(() => structuredClone(!1)), [Qe, at] = j(() => structuredClone(!1)), [K, it] = j(() => structuredClone({ enabled: !1, valid: !1 })), [lt, ct] = j(() => structuredClone("")), [xe, ut] = j(() => structuredClone("")), [ue, dt] = j(() => structuredClone([])), [Me, mt] = j(() => structuredClone(0)), [pt, ht] = j(() => structuredClone("")), [Oe, yt] = j(() => structuredClone(!1)), [gt, ft] = j(() => structuredClone("")), [ve, wt] = j(() => structuredClone([])), [ee, bt] = j(() => structuredClone({ busy: !1, completeDisabled: !0, empty: !0, submitDisabled: !0 })), [Te, St] = j(() => structuredClone("")), [xt, vt] = j(() => structuredClone("")), [Ae, At] = j(() => structuredClone("")), [Pt, _t] = j(() => structuredClone(0)), [Pe, De] = j(() => structuredClone("")), [ke, Et] = j(() => structuredClone(0)), [Fe, $e] = j(() => structuredClone("")), [It, Ct] = j(() => structuredClone(!1)), [oe, qt] = j(() => structuredClone({})), u = { isLessonLoading: be, completionFeedback: Se, isAnswerSubmitting: je, completionFailed: Qe, contentPreviewDisplay: K, teacherQuestionCorrectValue: lt, lessonError: xe, boardSteps: ue, progressPercent: Me, teacherQuestionExplanation: pt, isCompletingProblem: Oe, loadedProblemId: gt, teacherQuestionOptions: ve, learningControls: ee, teacherQuestionPrompt: Te, completedProblemId: xt, lessonSource: Ae, sessionStartedAt: Pt, teacherAnswerFeedback: Pe, activeStep: ke, selectedTeacherAnswer: Fe, answerSubmitted: It, studentLesson: oe }, i = le((e, r) => {
    switch (e) {
      case "isLessonLoading": {
        const o = typeof r == "function" ? r(u.isLessonLoading) : r;
        return u.isLessonLoading = o, ot(o), o;
      }
      case "completionFeedback": {
        const o = typeof r == "function" ? r(u.completionFeedback) : r;
        return u.completionFeedback = o, st(o), o;
      }
      case "isAnswerSubmitting": {
        const o = typeof r == "function" ? r(u.isAnswerSubmitting) : r;
        return u.isAnswerSubmitting = o, nt(o), o;
      }
      case "completionFailed": {
        const o = typeof r == "function" ? r(u.completionFailed) : r;
        return u.completionFailed = o, at(o), o;
      }
      case "contentPreviewDisplay": {
        const o = typeof r == "function" ? r(u.contentPreviewDisplay) : r;
        return u.contentPreviewDisplay = o, it(o), o;
      }
      case "teacherQuestionCorrectValue": {
        const o = typeof r == "function" ? r(u.teacherQuestionCorrectValue) : r;
        return u.teacherQuestionCorrectValue = o, ct(o), o;
      }
      case "lessonError": {
        const o = typeof r == "function" ? r(u.lessonError) : r;
        return u.lessonError = o, ut(o), o;
      }
      case "boardSteps": {
        const o = typeof r == "function" ? r(u.boardSteps) : r;
        return u.boardSteps = o, dt(o), o;
      }
      case "progressPercent": {
        const o = typeof r == "function" ? r(u.progressPercent) : r;
        return u.progressPercent = o, mt(o), o;
      }
      case "teacherQuestionExplanation": {
        const o = typeof r == "function" ? r(u.teacherQuestionExplanation) : r;
        return u.teacherQuestionExplanation = o, ht(o), o;
      }
      case "isCompletingProblem": {
        const o = typeof r == "function" ? r(u.isCompletingProblem) : r;
        return u.isCompletingProblem = o, yt(o), o;
      }
      case "loadedProblemId": {
        const o = typeof r == "function" ? r(u.loadedProblemId) : r;
        return u.loadedProblemId = o, ft(o), o;
      }
      case "teacherQuestionOptions": {
        const o = typeof r == "function" ? r(u.teacherQuestionOptions) : r;
        return u.teacherQuestionOptions = o, wt(o), o;
      }
      case "learningControls": {
        const o = typeof r == "function" ? r(u.learningControls) : r;
        return u.learningControls = o, bt(o), o;
      }
      case "teacherQuestionPrompt": {
        const o = typeof r == "function" ? r(u.teacherQuestionPrompt) : r;
        return u.teacherQuestionPrompt = o, St(o), o;
      }
      case "completedProblemId": {
        const o = typeof r == "function" ? r(u.completedProblemId) : r;
        return u.completedProblemId = o, vt(o), o;
      }
      case "lessonSource": {
        const o = typeof r == "function" ? r(u.lessonSource) : r;
        return u.lessonSource = o, At(o), o;
      }
      case "sessionStartedAt": {
        const o = typeof r == "function" ? r(u.sessionStartedAt) : r;
        return u.sessionStartedAt = o, _t(o), o;
      }
      case "teacherAnswerFeedback": {
        const o = typeof r == "function" ? r(u.teacherAnswerFeedback) : r;
        return u.teacherAnswerFeedback = o, De(o), o;
      }
      case "activeStep": {
        const o = typeof r == "function" ? r(u.activeStep) : r;
        return u.activeStep = o, Et(o), o;
      }
      case "selectedTeacherAnswer": {
        const o = typeof r == "function" ? r(u.selectedTeacherAnswer) : r;
        return u.selectedTeacherAnswer = o, $e(o), o;
      }
      case "answerSubmitted": {
        const o = typeof r == "function" ? r(u.answerSubmitted) : r;
        return u.answerSubmitted = o, Ct(o), o;
      }
      case "studentLesson": {
        const o = typeof r == "function" ? r(u.studentLesson) : r;
        return u.studentLesson = o, qt(o), o;
      }
      default:
        return r;
    }
  }, [u]);
  le((e, r) => {
    const [o, ...n] = String(e || "").split(".");
    if (!o) return r;
    if (n.length === 0) return i(o, r);
    const t = (s) => {
      const c = Array.isArray(s) ? [...s] : { ...s || {} };
      let d = c;
      return n.forEach((l, m) => {
        m === n.length - 1 ? d[l] = r : (d[l] = Array.isArray(d[l]) ? [...d[l]] : { ...d[l] || {} }, d = d[l]);
      }), c;
    };
    switch (o) {
      case "isLessonLoading":
        return i("isLessonLoading", t), r;
      case "completionFeedback":
        return i("completionFeedback", t), r;
      case "isAnswerSubmitting":
        return i("isAnswerSubmitting", t), r;
      case "completionFailed":
        return i("completionFailed", t), r;
      case "contentPreviewDisplay":
        return i("contentPreviewDisplay", t), r;
      case "teacherQuestionCorrectValue":
        return i("teacherQuestionCorrectValue", t), r;
      case "lessonError":
        return i("lessonError", t), r;
      case "boardSteps":
        return i("boardSteps", t), r;
      case "progressPercent":
        return i("progressPercent", t), r;
      case "teacherQuestionExplanation":
        return i("teacherQuestionExplanation", t), r;
      case "isCompletingProblem":
        return i("isCompletingProblem", t), r;
      case "loadedProblemId":
        return i("loadedProblemId", t), r;
      case "teacherQuestionOptions":
        return i("teacherQuestionOptions", t), r;
      case "learningControls":
        return i("learningControls", t), r;
      case "teacherQuestionPrompt":
        return i("teacherQuestionPrompt", t), r;
      case "completedProblemId":
        return i("completedProblemId", t), r;
      case "lessonSource":
        return i("lessonSource", t), r;
      case "sessionStartedAt":
        return i("sessionStartedAt", t), r;
      case "teacherAnswerFeedback":
        return i("teacherAnswerFeedback", t), r;
      case "activeStep":
        return i("activeStep", t), r;
      case "selectedTeacherAnswer":
        return i("selectedTeacherAnswer", t), r;
      case "answerSubmitted":
        return i("answerSubmitted", t), r;
      case "studentLesson":
        return i("studentLesson", t), r;
      default:
        return r;
    }
  }, [i]);
  const Lt = { answerSubmitted: { properties: { correct: { type: "boolean" }, locale: { type: "string" }, problemId: { type: "string" }, selectedValue: { type: "string" }, stepId: { type: "string" } }, required: ["problemId", "stepId", "selectedValue", "correct", "locale"], type: "object" }, backRequested: { properties: { courseContext: { type: "object" } }, type: "object" }, lessonProgressed: { properties: { completed: { type: "boolean" }, problemId: { type: "string" }, progressPercent: { type: "number" }, stepIndex: { type: "number" } }, required: ["problemId", "stepIndex", "progressPercent", "completed"], type: "object" }, nextProblemRequested: { properties: { problemId: { type: "string" }, topicPath: { type: "string" } }, type: "object" }, problemCompleted: { properties: { problemId: { type: "string" }, progressPercent: { type: "number" } }, required: ["problemId", "progressPercent"], type: "object" }, solutionRequested: { properties: { courseContext: { type: "object" }, locale: { type: "string" }, problem: { type: "object" } }, required: ["problem", "courseContext", "locale"], type: "object" } }, _e = (e, r, o) => {
    if (!r || typeof r != "object") return "";
    const n = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], t = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (n.length && !n.includes(t) && !(t === "integer" && n.includes("number"))) return o + " must be " + n.join(" or ") + ".";
    if (r.enum && !r.enum.some((s) => JSON.stringify(s) === JSON.stringify(e))) return o + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const s of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, s)) return o + "." + s + " is required.";
      for (const [s, c] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const d = _e(e[s], c, o + "." + s);
        if (d) return d;
      }
    }
    if (Array.isArray(e) && r.items) for (let s = 0; s < e.length; s++) {
      const c = _e(e[s], r.items, o + "[" + s + "]");
      if (c) return c;
    }
    return "";
  }, re = le(async (e, r, o = !1) => {
    const n = Lt[e];
    if (!n) throw new Error("Module output '" + e + "' is not declared.");
    const t = _e(r, n, "output." + e);
    if (t) throw new Error(t);
    const s = a.onOutput || a.onModuleOutput || a.runtime?.onOutput;
    if (typeof s != "function") return r;
    const c = s(e, r, { moduleId: a.moduleId, awaitHandlers: o });
    return o ? await c : r;
  }, [a.onOutput, a.onModuleOutput, a.runtime?.onOutput, a.moduleId]), ze = (e, r) => {
    const o = String(r || "").split(".").filter(Boolean);
    if (!(!o.length || o.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return o.reduce((n, t) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(t in n) ? n.get(t) : n[t];
      }, e);
  }, B = (e, r) => {
    if (Array.isArray(e)) return e.map((n) => B(n, r));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([n, t]) => [B(n, r), B(t, r)]));
    if (typeof e != "string") return e;
    const o = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return o ? ze(r, o[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, t) => {
      const s = ze(r, t);
      return s == null ? "" : typeof s == "object" ? JSON.stringify(s) : String(s);
    });
  };
  async function We(e = {}) {
    const r = e || {}, o = {}, n = {};
    if (g.contentPreview && Object.keys(g.contentPreview).length > 0)
      return { previewOnly: !0 };
    {
      r.event;
      const t = await (async () => {
        const s = Number(r.activeSeconds || 0), c = Number(u.sessionStartedAt || 0), d = c > 0 ? Math.floor((Date.now() - c) / 1e3) : 0;
        return { seconds: Math.max(0, Math.min(300, s > 0 ? s : d)) };
      })();
      n.time_prepare = t, o.customCodeResult = t;
    }
    {
      const s = B({ activeSeconds: "{{ stepResults.time_prepare.seconds }}", email: "", problemId: "{{ inputs.problem.id }}" }, { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }) || {};
      delete s.email;
      const c = [void 0, s.activeSeconds, s.problemId], d = a.executeDatabaseQuery || a.runtime?.executeDatabaseQuery;
      let l;
      if (typeof d == "function")
        l = await d({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarRecordActiveLearningTime", parameters: c, namedParameters: s, signal: r.signal });
      else {
        const m = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarRecordActiveLearningTime", parameters: c, namedParameters: s }), signal: r.signal }), h = await m.json().catch(() => ({}));
        if (!m.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + m.status + ")");
        l = h.data;
      }
      n.time_record = l, o.queryResult = l;
    }
    return n.time_record[0].result;
  }
  async function Ee(e = {}) {
    const r = e || {}, o = {}, n = {};
    if (g.contentPreview && Object.keys(g.contentPreview).length > 0)
      return { previewOnly: !0 };
    i("loadedProblemId", ""), await y({}), i("completionFeedback", ""), i("completionFailed", !1), i("isLessonLoading", !0), await y({}), i("lessonError", ""), await y({}), i("lessonSource", ""), i("answerSubmitted", !1), await y({}), i("teacherQuestionOptions", []), i("teacherQuestionPrompt", ""), i("teacherAnswerFeedback", ""), i("selectedTeacherAnswer", ""), await y({}), i("boardSteps", []), await y({}), i("studentLesson", {});
    try {
      {
        const t = r.event, s = z, c = u, d = await (async () => {
          const l = g.problem && typeof g.problem == "object" ? g.problem : {}, m = String(l.id || "").trim();
          if (!m) throw new Error("Select a problem first.");
          const h = String(g.locale || "en").toLowerCase(), x = ["en", "hi", "ta"].includes(h) ? h : "en";
          return { problemId: m, statement: String(l.statement || ""), mode: l.solutionMode === "quick" ? "quick" : "detailed", locale: x, promptVersion: "v3-validated-mcq-blackboard" };
        })();
        n.solution_prepare = d, o.customCodeResult = d;
      }
    } catch (t) {
      const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_prepare" };
      return o.error = s, n.solution_prepare = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
    }
    try {
      {
        const s = B({ email: "", locale: "{{ stepResults.solution_prepare.locale }}", problemId: "{{ stepResults.solution_prepare.problemId }}", promptVersion: "{{ stepResults.solution_prepare.promptVersion }}", solutionMode: "{{ stepResults.solution_prepare.mode }}" }, { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }) || {};
        delete s.email;
        const c = [void 0, s.problemId, s.locale, s.solutionMode, s.promptVersion], d = a.executeDatabaseQuery || a.runtime?.executeDatabaseQuery;
        let l;
        if (typeof d == "function")
          l = await d({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarLoadStudentProblem", parameters: c, namedParameters: s, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadStudentProblem", parameters: c, namedParameters: s }), signal: r.signal }), h = await m.json().catch(() => ({}));
          if (!m.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + m.status + ")");
          l = h.data;
        }
        n.solution_lookup = l, o.queryResult = l;
      }
    } catch (t) {
      const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_lookup" };
      return o.error = s, n.solution_lookup = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
    }
    try {
      {
        const t = r.event, s = z, c = u, d = await (async () => {
          const l = function(F, M = "") {
            if (!F || typeof F != "object" || Array.isArray(F)) throw new Error("A lesson object is required.");
            const L = (b, O, U = !1) => {
              if (b != null && typeof b != "string") throw new Error(O + " must be text.");
              const W = (b || "").trim();
              if (U && !W || W.length > 16e3) throw new Error("Invalid " + O + ".");
              return W;
            };
            if (!Array.isArray(F.steps) || !F.steps.length || F.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const G = /* @__PURE__ */ new Set(), f = F.steps.map((b, O) => {
              if (!b || typeof b != "object" || Array.isArray(b)) throw new Error("Invalid lesson step.");
              const U = L(b.id, "step ID") || "step-" + (O + 1);
              if (G.has(U)) throw new Error("Step IDs must be unique.");
              G.add(U);
              const W = b.teacherQuestion;
              if (!W || !Array.isArray(W.options) || W.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const ae = /* @__PURE__ */ new Set(), me = W.options.map((A) => {
                const q = L(A?.value, "option ID", !0);
                if (ae.has(q)) throw new Error("Answer option IDs must be unique.");
                return ae.add(q), { value: q, label: L(A?.label, "option label", !0) };
              }), v = L(W.correctValue, "correct answer ID", !0);
              if (!ae.has(v)) throw new Error("The correct answer must reference a supplied option.");
              const _ = L(W.prompt || b.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(b.content) || !b.content.length || b.content.length > 60) throw new Error("Each step needs board content.");
              const k = b.content.map((A) => {
                if (!A || typeof A != "object") throw new Error("Invalid board content.");
                switch (A.type) {
                  case "heading":
                  case "text":
                  case "note":
                    return { ...A, text: L(A.text, "board text", !0) };
                  case "equation":
                    return { ...A, visualText: L(A.visualText, "readable equation", !0), latex: L(A.latex, "equation") };
                  case "definition":
                    return { ...A, term: L(A.term, "term", !0), text: L(A.text, "definition", !0) };
                  case "theorem":
                    return { ...A, statement: L(A.statement, "theorem", !0) };
                  case "list":
                  case "proof": {
                    const q = A.type === "list" ? "items" : "lines";
                    if (!Array.isArray(A[q]) || !A[q].length) throw new Error("Invalid board list.");
                    return { ...A, [q]: A[q].map(($) => L($, "list entry", !0)) };
                  }
                  case "matrix": {
                    const q = A.matrix?.rows;
                    if (!Array.isArray(q) || !q.length || q.length > 30 || !Array.isArray(q[0]) || !q[0].length || q[0].length > 30 || q.some(($) => !Array.isArray($) || $.length !== q[0].length || $.some((Ft) => !["string", "number"].includes(typeof Ft)))) throw new Error("Invalid matrix.");
                    return A;
                  }
                  case "table":
                    if (!Array.isArray(A.headers) || !A.headers.length || !Array.isArray(A.rows) || A.rows.some((q) => !Array.isArray(q) || q.length !== A.headers.length)) throw new Error("Invalid table.");
                    return { ...A, headers: A.headers.map((q) => L(q, "table heading")), rows: A.rows.map((q) => q.map(($) => L($, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(A.nodes) || !Array.isArray(A.edges)) throw new Error("Invalid graph.");
                    const q = /* @__PURE__ */ new Set();
                    for (const $ of A.nodes) {
                      if (!$?.id || q.has($.id) || !Number.isFinite($.x) || !Number.isFinite($.y)) throw new Error("Invalid graph node.");
                      q.add($.id);
                    }
                    if (A.edges.some(($) => !q.has($?.from) || !q.has($?.to))) throw new Error("Invalid graph edge.");
                    return A;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), pe = {
                id: U,
                title: L(b.title, "step title", !0),
                content: k,
                teacherPrompt: _,
                teacherQuestion: { prompt: _, options: me, correctValue: v, explanation: L(W.explanation, "answer explanation", !0) }
              };
              for (const A of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) pe[A] = L(b[A], A);
              return pe;
            });
            return {
              title: L(F.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: L(F.problemLabel, "problem label") || "Problem",
              problemStatement: L(F.problemStatement || M, "problem statement", !0),
              learningGoal: L(F.learningGoal, "learning goal"),
              steps: f,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }, h = (Array.isArray(n.solution_lookup) ? n.solution_lookup : [])[0]?.result || {};
          if (!h.problemId || !String(h.statement || "").trim()) throw new Error("This problem is not available.");
          n.solution_prepare.statement = h.statement;
          let x = null;
          try {
            h.cached && h.lesson && (x = l(h.lesson, h.statement));
          } catch {
          }
          const N = x?.steps || [], R = Number(h.activeStep), Q = Math.max(0, Math.min(Math.max(0, N.length - 1), Number.isFinite(R) ? Math.floor(R) : 0)), C = Number(h.progressPercent);
          return { hit: !!x, result: h, lesson: x, boardSteps: N.map(({ teacherQuestion: ne, teacherPrompt: F, ...M }) => M), activeStep: Q, progress: Number.isFinite(C) ? Math.max(0, Math.min(100, C)) : 0, question: N[Q]?.teacherQuestion || { prompt: "", options: [], correctValue: "", explanation: "" } };
        })();
        n.solution_cache = d, o.customCodeResult = d;
      }
    } catch (t) {
      const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_cache" };
      return o.error = s, n.solution_cache = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
    }
    if (n.solution_cache.hit) {
      i("studentLesson", n.solution_cache.lesson), i("boardSteps", n.solution_cache.boardSteps), await y({}), i("activeStep", n.solution_cache.activeStep), i("progressPercent", n.solution_cache.progress), i("teacherQuestionPrompt", n.solution_cache.question.prompt), i("teacherQuestionOptions", n.solution_cache.question.options), i("teacherQuestionCorrectValue", n.solution_cache.question.correctValue), i("teacherQuestionExplanation", n.solution_cache.question.explanation), i("lessonSource", "Saved AI lesson · not independently verified"), i("isLessonLoading", !1), await y({}), i("loadedProblemId", n.solution_prepare.problemId), await y({});
      try {
        await re("solutionRequested", { courseContext: g.courseContext, locale: g.locale, problem: g.problem }, !0);
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_emit" };
        return o.error = s, n.solution_emit = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      return u.studentLesson;
    } else {
      try {
        {
          const s = B({ email: "", problemId: "{{ stepResults.solution_prepare.problemId }}" }, { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }) || {};
          delete s.email;
          const c = [void 0, s.problemId], d = a.executeDatabaseQuery || a.runtime?.executeDatabaseQuery;
          let l;
          if (typeof d == "function")
            l = await d({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarResolveStudentStrategy", parameters: c, namedParameters: s, signal: r.signal });
          else {
            const m = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveStudentStrategy", parameters: c, namedParameters: s }), signal: r.signal }), h = await m.json().catch(() => ({}));
            if (!m.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + m.status + ")");
            l = h.data;
          }
          n.solution_strategy = l, o.queryResult = l;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_strategy" };
        return o.error = s, n.solution_strategy = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      try {
        {
          const t = r.event, s = z, c = u, d = await (async () => {
            const m = (Array.isArray(n.solution_strategy) ? n.solution_strategy : [])[0] || {}, h = m.result && typeof m.result == "object" ? m.result : {};
            return { strategyId: String(h.strategyId || ""), strategyVersion: Math.max(1, Number(h.strategyVersion || 1)), strategy: h.strategy && typeof h.strategy == "object" ? h.strategy : { preferredMethod: "Explain from definitions, show every algebraic step, and verify the final answer.", explanationDepth: "detailed" } };
          })();
          n.solution_strategy_parse = d, o.customCodeResult = d;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_strategy_parse" };
        return o.error = s, n.solution_strategy_parse = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      try {
        {
          const t = r.event, s = z, c = u, d = await (async () => {
            const l = n.solution_prepare, m = n.solution_strategy_parse;
            return ["You are a college mathematics professor creating an interactive Blackboard lesson.", "Return JSON only with keys title, lessonKind, problemLabel, problemStatement, learningGoal, steps.", "Create at least three steps. Every step must contain id, title, narration, explanation, simpleExplanation, why, commonMistake, content, teacherPrompt, and teacherQuestion.", "Every teacherQuestion must contain prompt, exactly four options with label and value, one correctValue, and explanation.", "Generate every human-readable field in " + (l.locale === "hi" ? "Hindi" : l.locale === "ta" ? "Tamil" : "English") + " only. Keep mathematical notation and JSON keys unchanged.", "Use this approved hierarchy strategy: " + JSON.stringify(m.strategy), "Problem: " + l.statement, "Solution mode: " + l.mode].join(`
`);
          })();
          n.solution_prompt = d, o.customCodeResult = d;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_prompt" };
        return o.error = s, n.solution_prompt = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      try {
        {
          const t = { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }, s = B({ prompt: "{{ stepResults.solution_prompt }}" }, t) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtptmzag000004jix1ok7kyi", apiId: "geminiStudentProblemSolution", argumentValues: s, context: t }), signal: r.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
          if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
          const l = d.data;
          n.solution_ai = l, o.apiResult = l;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_ai" };
        return o.error = s, n.solution_ai = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      try {
        {
          const t = r.event, s = z, c = u, d = await (async () => {
            const l = function(R, Q = "") {
              if (!R || typeof R != "object" || Array.isArray(R)) throw new Error("A lesson object is required.");
              const C = (M, L, G = !1) => {
                if (M != null && typeof M != "string") throw new Error(L + " must be text.");
                const f = (M || "").trim();
                if (G && !f || f.length > 16e3) throw new Error("Invalid " + L + ".");
                return f;
              };
              if (!Array.isArray(R.steps) || !R.steps.length || R.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
              const ne = /* @__PURE__ */ new Set(), F = R.steps.map((M, L) => {
                if (!M || typeof M != "object" || Array.isArray(M)) throw new Error("Invalid lesson step.");
                const G = C(M.id, "step ID") || "step-" + (L + 1);
                if (ne.has(G)) throw new Error("Step IDs must be unique.");
                ne.add(G);
                const f = M.teacherQuestion;
                if (!f || !Array.isArray(f.options) || f.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
                const b = /* @__PURE__ */ new Set(), O = f.options.map((v) => {
                  const _ = C(v?.value, "option ID", !0);
                  if (b.has(_)) throw new Error("Answer option IDs must be unique.");
                  return b.add(_), { value: _, label: C(v?.label, "option label", !0) };
                }), U = C(f.correctValue, "correct answer ID", !0);
                if (!b.has(U)) throw new Error("The correct answer must reference a supplied option.");
                const W = C(f.prompt || M.teacherPrompt, "teacher question", !0);
                if (!Array.isArray(M.content) || !M.content.length || M.content.length > 60) throw new Error("Each step needs board content.");
                const ae = M.content.map((v) => {
                  if (!v || typeof v != "object") throw new Error("Invalid board content.");
                  switch (v.type) {
                    case "heading":
                    case "text":
                    case "note":
                      return { ...v, text: C(v.text, "board text", !0) };
                    case "equation":
                      return { ...v, visualText: C(v.visualText, "readable equation", !0), latex: C(v.latex, "equation") };
                    case "definition":
                      return { ...v, term: C(v.term, "term", !0), text: C(v.text, "definition", !0) };
                    case "theorem":
                      return { ...v, statement: C(v.statement, "theorem", !0) };
                    case "list":
                    case "proof": {
                      const _ = v.type === "list" ? "items" : "lines";
                      if (!Array.isArray(v[_]) || !v[_].length) throw new Error("Invalid board list.");
                      return { ...v, [_]: v[_].map((k) => C(k, "list entry", !0)) };
                    }
                    case "matrix": {
                      const _ = v.matrix?.rows;
                      if (!Array.isArray(_) || !_.length || _.length > 30 || !Array.isArray(_[0]) || !_[0].length || _[0].length > 30 || _.some((k) => !Array.isArray(k) || k.length !== _[0].length || k.some((pe) => !["string", "number"].includes(typeof pe)))) throw new Error("Invalid matrix.");
                      return v;
                    }
                    case "table":
                      if (!Array.isArray(v.headers) || !v.headers.length || !Array.isArray(v.rows) || v.rows.some((_) => !Array.isArray(_) || _.length !== v.headers.length)) throw new Error("Invalid table.");
                      return { ...v, headers: v.headers.map((_) => C(_, "table heading")), rows: v.rows.map((_) => _.map((k) => C(k, "table cell"))) };
                    case "graph": {
                      if (!Array.isArray(v.nodes) || !Array.isArray(v.edges)) throw new Error("Invalid graph.");
                      const _ = /* @__PURE__ */ new Set();
                      for (const k of v.nodes) {
                        if (!k?.id || _.has(k.id) || !Number.isFinite(k.x) || !Number.isFinite(k.y)) throw new Error("Invalid graph node.");
                        _.add(k.id);
                      }
                      if (v.edges.some((k) => !_.has(k?.from) || !_.has(k?.to))) throw new Error("Invalid graph edge.");
                      return v;
                    }
                    default:
                      throw new Error("Unsupported board content type.");
                  }
                }), me = {
                  id: G,
                  title: C(M.title, "step title", !0),
                  content: ae,
                  teacherPrompt: W,
                  teacherQuestion: { prompt: W, options: O, correctValue: U, explanation: C(f.explanation, "answer explanation", !0) }
                };
                for (const v of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) me[v] = C(M[v], v);
                return me;
              });
              return {
                title: C(R.title, "lesson title", !0),
                lessonKind: "worked-example",
                problemLabel: C(R.problemLabel, "problem label") || "Problem",
                problemStatement: C(R.problemStatement || Q, "problem statement", !0),
                learningGoal: C(R.learningGoal, "learning goal"),
                steps: F,
                verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
              };
            }, m = n.solution_ai?.candidates?.[0]?.content?.parts, h = Array.isArray(m) ? m.map((N) => typeof N?.text == "string" ? N.text : "").join("") : "";
            if (!h.trim() || h.length > 2e5) throw new Error("Invalid AI lesson response.");
            const x = l(JSON.parse(h.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), n.solution_prepare.statement);
            return { lesson: x, boardSteps: x.steps.map(({ teacherQuestion: N, teacherPrompt: R, ...Q }) => Q), question: x.steps[0].teacherQuestion };
          })();
          n.solution_ai_parse = d, o.customCodeResult = d;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_ai_parse" };
        return o.error = s, n.solution_ai_parse = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      try {
        {
          const s = B({ email: "", problemId: "{{ stepResults.solution_prepare.problemId }}", promptVersion: "{{ stepResults.solution_prepare.promptVersion }}", solution: "{{ stepResults.solution_ai_parse.lesson }}", solutionMode: "{{ stepResults.solution_prepare.mode }}", strategyId: "{{ stepResults.solution_strategy_parse.strategyId }}", strategySnapshot: "{{ stepResults.solution_strategy_parse.strategy }}", strategyVersion: "{{ stepResults.solution_strategy_parse.strategyVersion }}" }, { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }) || {};
          delete s.email;
          const c = [void 0, s.problemId, s.solutionMode, s.promptVersion, s.solution, s.strategyId, s.strategyVersion, s.strategySnapshot], d = a.executeDatabaseQuery || a.runtime?.executeDatabaseQuery;
          let l;
          if (typeof d == "function")
            l = await d({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarStoreStudentSolution", parameters: c, namedParameters: s, signal: r.signal });
          else {
            const m = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreStudentSolution", parameters: c, namedParameters: s }), signal: r.signal }), h = await m.json().catch(() => ({}));
            if (!m.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + m.status + ")");
            l = h.data;
          }
          n.solution_store = l, o.queryResult = l;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_store" };
        return o.error = s, n.solution_store = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      i("studentLesson", n.solution_ai_parse.lesson), i("boardSteps", n.solution_ai_parse.boardSteps), await y({}), i("activeStep", 0), i("progressPercent", 0), i("teacherQuestionPrompt", n.solution_ai_parse.question.prompt), i("teacherQuestionOptions", n.solution_ai_parse.question.options), i("teacherQuestionCorrectValue", n.solution_ai_parse.question.correctValue), i("teacherQuestionExplanation", n.solution_ai_parse.question.explanation), i("lessonSource", "New AI lesson · not independently verified"), i("isLessonLoading", !1), await y({}), i("loadedProblemId", n.solution_prepare.problemId), await y({});
      try {
        await re("solutionRequested", { courseContext: g.courseContext, locale: g.locale, problem: g.problem }, !0);
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "solution_emit" };
        return o.error = s, n.solution_emit = { error: s }, i("isLessonLoading", !1), await y({}), i("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem."), await y({}), null;
      }
      return u.studentLesson;
    }
  }
  async function Rt(e = {}) {
    const r = e || {}, o = {}, n = {};
    if (g.contentPreview && Object.keys(g.contentPreview).length > 0)
      return { previewOnly: !0 };
    if ((function(s, c) {
      return !!s.problem?.id && s.authenticated !== !1 && !s.loading && !c.isLessonLoading && !c.isAnswerSubmitting && !c.isCompletingProblem && c.loadedProblemId === String(s.problem.id) && c.completedProblemId !== String(s.problem.id) && Array.isArray(c.boardSteps) && c.boardSteps.length > 0;
    })(g, u)) {
      i("isCompletingProblem", !0), await y({});
      {
        r.event;
        const t = await (async () => ({ problemId: String(g.problem.id), locale: String(g.locale || "en"), activeStep: Number(u.activeStep || 0) }))();
        n.complete_capture = t, o.customCodeResult = t;
      }
      i("completionFeedback", ""), i("completionFailed", !1);
      try {
        {
          const s = B({ activeStep: "{{ stepResults.complete_capture.activeStep }}", email: "", locale: "{{ stepResults.complete_capture.locale }}", problemId: "{{ stepResults.complete_capture.problemId }}", progressPercent: 100, status: "completed" }, { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }) || {};
          delete s.email;
          const c = [void 0, s.problemId, s.locale, s.activeStep, s.progressPercent, s.status], d = a.executeDatabaseQuery || a.runtime?.executeDatabaseQuery;
          let l;
          if (typeof d == "function")
            l = await d({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarSaveStudentProgress", parameters: c, namedParameters: s, signal: r.signal });
          else {
            const m = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveStudentProgress", parameters: c, namedParameters: s }), signal: r.signal }), h = await m.json().catch(() => ({}));
            if (!m.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + m.status + ")");
            l = h.data;
          }
          n.complete_persist = l, o.queryResult = l;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "complete_persist" };
        if (o.error = s, n.complete_persist = { error: s }, g.problem.id === n.complete_capture.problemId && u.loadedProblemId === n.complete_capture.problemId) {
          {
            r.event;
            const c = await (async () => (function d(l) {
              return {
                en: { saved: "Completion saved. Ready for the next problem?", failed: "Completion could not be saved. Your progress is unchanged. Please retry.", notified: "Completion saved. Use Next problem to continue." },
                hi: { saved: "पूर्णता सहेजी गई। अगले प्रश्न के लिए तैयार हैं?", failed: "पूर्णता सहेजी नहीं जा सकी। आपकी प्रगति नहीं बदली है। फिर प्रयास करें।", notified: "पूर्णता सहेजी गई। आगे बढ़ने के लिए अगला प्रश्न चुनें।" },
                ta: { saved: "நிறைவு சேமிக்கப்பட்டது. அடுத்த கேள்விக்குத் தயாரா?", failed: "நிறைவைச் சேமிக்க முடியவில்லை. உங்கள் முன்னேற்றம் மாறவில்லை. மீண்டும் முயலவும்.", notified: "நிறைவு சேமிக்கப்பட்டது. தொடர அடுத்த கேள்வியைத் தேர்ந்தெடுக்கவும்." }
              }[l] || d("en");
            })(g.locale).failed)();
            n.complete_failed_copy = c, o.customCodeResult = c;
          }
          return i("completionFeedback", n.complete_failed_copy), i("completionFailed", !0), i("isCompletingProblem", !1), await y({}), { ok: !1, reason: "save_failed" };
        } else
          return i("isCompletingProblem", !1), await y({}), { ok: !1, reason: "lesson_changed" };
      }
      try {
        {
          const t = r.event, s = z, c = u, d = await (async () => (function(m, h) {
            const x = Array.isArray(m) ? m[0]?.result : null;
            if (x?.problemId !== h || x?.status !== "completed" || Number(x?.progressPercent) !== 100)
              throw new Error("Completion was not confirmed by storage.");
            return !0;
          })(n.complete_persist, n.complete_capture.problemId))();
          n.complete_verify = d, o.customCodeResult = d;
        }
      } catch (t) {
        const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "complete_verify" };
        if (o.error = s, n.complete_verify = { error: s }, g.problem.id === n.complete_capture.problemId && u.loadedProblemId === n.complete_capture.problemId) {
          {
            r.event;
            const c = await (async () => (function d(l) {
              return {
                en: { saved: "Completion saved. Ready for the next problem?", failed: "Completion could not be saved. Your progress is unchanged. Please retry.", notified: "Completion saved. Use Next problem to continue." },
                hi: { saved: "पूर्णता सहेजी गई। अगले प्रश्न के लिए तैयार हैं?", failed: "पूर्णता सहेजी नहीं जा सकी। आपकी प्रगति नहीं बदली है। फिर प्रयास करें।", notified: "पूर्णता सहेजी गई। आगे बढ़ने के लिए अगला प्रश्न चुनें।" },
                ta: { saved: "நிறைவு சேமிக்கப்பட்டது. அடுத்த கேள்விக்குத் தயாரா?", failed: "நிறைவைச் சேமிக்க முடியவில்லை. உங்கள் முன்னேற்றம் மாறவில்லை. மீண்டும் முயலவும்.", notified: "நிறைவு சேமிக்கப்பட்டது. தொடர அடுத்த கேள்வியைத் தேர்ந்தெடுக்கவும்." }
              }[l] || d("en");
            })(g.locale).failed)();
            n.complete_failed_copy = c, o.customCodeResult = c;
          }
          return i("completionFeedback", n.complete_failed_copy), i("completionFailed", !0), i("isCompletingProblem", !1), await y({}), { ok: !1, reason: "save_failed" };
        } else
          return i("isCompletingProblem", !1), await y({}), { ok: !1, reason: "lesson_changed" };
      }
      if (g.problem.id === n.complete_capture.problemId && u.loadedProblemId === n.complete_capture.problemId) {
        i("progressPercent", 100), i("completedProblemId", n.complete_capture.problemId), await y({});
        {
          r.event;
          const t = await (async () => (function s(c) {
            return {
              en: { saved: "Completion saved. Ready for the next problem?", failed: "Completion could not be saved. Your progress is unchanged. Please retry.", notified: "Completion saved. Use Next problem to continue." },
              hi: { saved: "पूर्णता सहेजी गई। अगले प्रश्न के लिए तैयार हैं?", failed: "पूर्णता सहेजी नहीं जा सकी। आपकी प्रगति नहीं बदली है। फिर प्रयास करें।", notified: "पूर्णता सहेजी गई। आगे बढ़ने के लिए अगला प्रश्न चुनें।" },
              ta: { saved: "நிறைவு சேமிக்கப்பட்டது. அடுத்த கேள்விக்குத் தயாரா?", failed: "நிறைவைச் சேமிக்க முடியவில்லை. உங்கள் முன்னேற்றம் மாறவில்லை. மீண்டும் முயலவும்.", notified: "நிறைவு சேமிக்கப்பட்டது. தொடர அடுத்த கேள்வியைத் தேர்ந்தெடுக்கவும்." }
            }[c] || s("en");
          })(g.locale))();
          n.complete_copy = t, o.customCodeResult = t;
        }
        i("completionFeedback", n.complete_copy.saved);
        try {
          await re("problemCompleted", { problemId: n.complete_capture.problemId, progressPercent: 100 }, !0);
        } catch (t) {
          const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "complete_emit" };
          return o.error = s, n.complete_emit = { error: s }, i("completionFeedback", n.complete_copy.notified), i("isCompletingProblem", !1), await y({}), { notificationFailed: !0, ok: !0 };
        }
        return i("isCompletingProblem", !1), await y({}), { ok: !0 };
      } else
        return i("isCompletingProblem", !1), await y({}), { ok: !1, reason: "lesson_changed" };
    } else
      return { ok: !1, reason: "lesson_unavailable" };
  }
  async function Je(e = {}) {
    const r = e || {}, o = {};
    {
      r.event;
      const n = await (async () => Date.now())();
      o.session_now = n;
    }
    i("sessionStartedAt", o.session_now), await Ee({});
  }
  async function Nt(e = {}) {
    const r = e || {}, o = {};
    {
      r.event;
      const n = await (async () => {
        const t = u.studentLesson && typeof u.studentLesson == "object" ? u.studentLesson : g.lesson && typeof g.lesson == "object" ? g.lesson : {}, s = Array.isArray(t.steps) ? t.steps : [], c = Math.max(0, Number(u.activeStep || 0)), d = Math.max(0, Math.min(Math.max(0, s.length - 1), c)), l = s[d] || s[0] || {}, m = l.teacherQuestion && typeof l.teacherQuestion == "object" ? l.teacherQuestion : { prompt: String(l.teacherPrompt || ""), options: [], correctValue: "", explanation: "" };
        return { index: d, prompt: String(m.prompt || ""), options: Array.isArray(m.options) ? m.options : [], correctValue: String(m.correctValue || ""), explanation: String(m.explanation || ""), progress: Math.max(0, Math.min(100, Number(u.progressPercent || g.initialProgressPercent || 0))) };
      })();
      o.init_read = n;
    }
    i("activeStep", o.init_read.index), i("teacherQuestionPrompt", o.init_read.prompt), i("teacherQuestionOptions", o.init_read.options), i("teacherQuestionCorrectValue", o.init_read.correctValue), i("teacherQuestionExplanation", o.init_read.explanation), i("selectedTeacherAnswer", ""), await y({}), i("teacherAnswerFeedback", ""), i("progressPercent", o.init_read.progress);
  }
  async function jt(e = {}) {
    const r = e || {}, o = {}, n = {};
    if (g.contentPreview && Object.keys(g.contentPreview).length > 0)
      return { previewOnly: !0 };
    if (u.isCompletingProblem || u.isAnswerSubmitting || u.isLessonLoading)
      return { ok: !1, reason: "lesson_busy" };
    {
      r.event;
      const t = await (async () => (function(c, d) {
        const l = Array.isArray(d.studentLesson?.steps) ? d.studentLesson.steps : [], m = c.event ?? c.stepIndex ?? c.index ?? 0, h = Number(typeof m == "object" ? m?.nextIndex ?? m?.index : m), x = Math.max(0, Math.min(Math.max(0, l.length - 1), Number.isFinite(h) ? Math.floor(h) : 0)), N = l[x]?.teacherQuestion || {}, R = Number(d.progressPercent), Q = Math.max(Number.isFinite(R) ? Math.min(100, Math.max(0, R)) : 0, l.length ? Math.round((x + 1) / l.length * 100) : 0);
        return { index: x, stepId: String(l[x]?.id || ""), prompt: String(N.prompt || ""), options: Array.isArray(N.options) ? N.options : [], correctValue: String(N.correctValue || ""), explanation: String(N.explanation || ""), progress: Q, completed: Q === 100 };
      })(r, u))();
      n.step_read = t, o.customCodeResult = t;
    }
    i("answerSubmitted", !1), await y({}), i("activeStep", n.step_read.index), i("teacherQuestionPrompt", n.step_read.prompt), i("teacherQuestionOptions", n.step_read.options), i("teacherQuestionCorrectValue", n.step_read.correctValue), i("teacherQuestionExplanation", n.step_read.explanation), i("selectedTeacherAnswer", ""), await y({}), i("teacherAnswerFeedback", ""), i("progressPercent", n.step_read.progress);
    {
      const s = B({ activeStep: "{{ stepResults.step_read.index }}", email: "", locale: "{{ inputs.locale }}", problemId: "{{ inputs.problem.id }}", progressPercent: "{{ stepResults.step_read.progress }}", status: "{{ stepResults.step_read.completed ? 'completed' : 'in_progress' }}" }, { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }) || {};
      delete s.email;
      const c = [void 0, s.problemId, s.locale, s.activeStep, s.progressPercent, s.status], d = a.executeDatabaseQuery || a.runtime?.executeDatabaseQuery;
      let l;
      if (typeof d == "function")
        l = await d({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarSaveStudentProgress", parameters: c, namedParameters: s, signal: r.signal });
      else {
        const m = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveStudentProgress", parameters: c, namedParameters: s }), signal: r.signal }), h = await m.json().catch(() => ({}));
        if (!m.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + m.status + ")");
        l = h.data;
      }
      n.step_persist = l, o.queryResult = l;
    }
    await re("lessonProgressed", { completed: n.step_read.completed, problemId: g.problem.id, progressPercent: n.step_read.progress, stepIndex: n.step_read.index }, !0);
  }
  async function Qt(e = {}) {
    const r = e || {};
    if (u.isCompletingProblem || u.isAnswerSubmitting || u.isLessonLoading)
      return { ok: !1, reason: "lesson_busy" };
    i("selectedTeacherAnswer", r.value), await y({}), i("answerSubmitted", !1), await y({}), i("teacherAnswerFeedback", "");
  }
  async function Mt(e = {}) {
    if (u.isCompletingProblem || u.isAnswerSubmitting || u.isLessonLoading)
      return { ok: !1, reason: "lesson_busy" };
    await re("backRequested", { courseContext: g.courseContext }, !0);
  }
  async function Ot(e = {}) {
    const r = e || {}, o = {}, n = {};
    if (g.contentPreview && Object.keys(g.contentPreview).length > 0)
      return { previewOnly: !0 };
    if (u.isCompletingProblem || u.isAnswerSubmitting || u.isLessonLoading || u.answerSubmitted)
      return { ok: !1, reason: "lesson_busy" };
    i("isAnswerSubmitting", !0), await y({});
    try {
      {
        const t = r.event, s = z, c = u, d = await (async () => {
          const l = String(u.selectedTeacherAnswer || ""), h = (Array.isArray(u.studentLesson?.steps) ? u.studentLesson.steps : [])[Number(u.activeStep || 0)], x = h?.teacherQuestion;
          if (!h?.id || !x || !x.options?.some((C) => C.value === l)) throw new Error("Choose an answer first.");
          const N = l === x.correctValue, R = String(g.locale || "en"), Q = R === "hi" ? N ? "सही उत्तर।" : "फिर से प्रयास करें।" : R === "ta" ? N ? "சரியான பதில்." : "மீண்டும் முயற்சிக்கவும்." : N ? "Correct." : "Try again.";
          return { value: l, correct: N, stepId: h.id, details: { progressPercent: Number(u.progressPercent || 0), topicPath: String(g.courseContext?.topicPath || "") }, feedback: Q + " " + String(x.explanation || "") };
        })();
        n.answer_read = d, o.customCodeResult = d;
      }
    } catch (t) {
      const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "answer_read" };
      return o.error = s, n.answer_read = { error: s }, i("isAnswerSubmitting", !1), await y({}), i("teacherAnswerFeedback", "Your answer could not be saved. Please select an answer and retry."), null;
    }
    try {
      {
        const s = B({ details: "{{ stepResults.answer_read.details }}", email: "", isCorrect: "{{ stepResults.answer_read.correct }}", locale: "{{ inputs.locale }}", problemId: "{{ inputs.problem.id }}", selectedValue: "{{ stepResults.answer_read.value }}", stepId: "{{ stepResults.answer_read.stepId }}" }, { args: r, inputs: g, state: u, sharedState: Z, applicationState: H, pageState: X, pageData: z, serverData: E, vars: o, stepResults: n }) || {};
        delete s.email;
        const c = [void 0, s.problemId, s.locale, s.stepId, s.selectedValue, s.isCorrect, s.details], d = a.executeDatabaseQuery || a.runtime?.executeDatabaseQuery;
        let l;
        if (typeof d == "function")
          l = await d({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarRecordStudentAttempt", parameters: c, namedParameters: s, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarRecordStudentAttempt", parameters: c, namedParameters: s }), signal: r.signal }), h = await m.json().catch(() => ({}));
          if (!m.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + m.status + ")");
          l = h.data;
        }
        n.answer_persist = l, o.queryResult = l;
      }
    } catch (t) {
      const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "answer_persist" };
      return o.error = s, n.answer_persist = { error: s }, i("isAnswerSubmitting", !1), await y({}), i("teacherAnswerFeedback", "Your answer could not be saved. Please select an answer and retry."), null;
    }
    i("selectedTeacherAnswer", n.answer_read.value), await y({}), i("teacherAnswerFeedback", n.answer_read.feedback);
    try {
      await re("answerSubmitted", { correct: n.answer_read.correct, locale: g.locale, problemId: g.problem.id, selectedValue: n.answer_read.value, stepId: n.answer_read.stepId }, !0);
    } catch (t) {
      const s = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "answer_emit" };
      return o.error = s, n.answer_emit = { error: s }, i("isAnswerSubmitting", !1), await y({}), i("teacherAnswerFeedback", "Your answer could not be saved. Please select an answer and retry."), null;
    }
    return i("answerSubmitted", !0), await y({}), i("isAnswerSubmitting", !1), await y({}), n.answer_read;
  }
  async function y(e = {}) {
    const r = e || {}, o = {};
    {
      r.event;
      const n = await (async () => {
        function t(s, c) {
          return !!s.problem?.id && s.authenticated !== !1 && !s.loading && !c.isLessonLoading && !c.isAnswerSubmitting && !c.isCompletingProblem && c.loadedProblemId === String(s.problem.id) && c.completedProblemId !== String(s.problem.id) && Array.isArray(c.boardSteps) && c.boardSteps.length > 0;
        }
        return (function(c, d) {
          const l = !!(c.loading || d.isLessonLoading || d.isAnswerSubmitting || d.isCompletingProblem);
          return {
            busy: l,
            completeDisabled: !t(c, d),
            submitDisabled: l || !d.selectedTeacherAnswer || !!d.answerSubmitted,
            empty: !c.loading && !d.isLessonLoading && !d.lessonError && !d.boardSteps?.length
          };
        })(g, u);
      })();
      o.learning_controls_compute = n;
    }
    i("learningControls", o.learning_controls_compute);
  }
  async function Be(e = {}) {
    const r = e || {}, o = {};
    {
      r.event;
      const n = await (async () => {
        function t(c, d = "") {
          if (!c || typeof c != "object" || Array.isArray(c)) throw new Error("A lesson object is required.");
          const l = (x, N, R = !1) => {
            if (x != null && typeof x != "string") throw new Error(N + " must be text.");
            const Q = (x || "").trim();
            if (R && !Q || Q.length > 16e3) throw new Error("Invalid " + N + ".");
            return Q;
          };
          if (!Array.isArray(c.steps) || !c.steps.length || c.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
          const m = /* @__PURE__ */ new Set(), h = c.steps.map((x, N) => {
            if (!x || typeof x != "object" || Array.isArray(x)) throw new Error("Invalid lesson step.");
            const R = l(x.id, "step ID") || "step-" + (N + 1);
            if (m.has(R)) throw new Error("Step IDs must be unique.");
            m.add(R);
            const Q = x.teacherQuestion;
            if (!Q || !Array.isArray(Q.options) || Q.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
            const C = /* @__PURE__ */ new Set(), ne = Q.options.map((f) => {
              const b = l(f?.value, "option ID", !0);
              if (C.has(b)) throw new Error("Answer option IDs must be unique.");
              return C.add(b), { value: b, label: l(f?.label, "option label", !0) };
            }), F = l(Q.correctValue, "correct answer ID", !0);
            if (!C.has(F)) throw new Error("The correct answer must reference a supplied option.");
            const M = l(Q.prompt || x.teacherPrompt, "teacher question", !0);
            if (!Array.isArray(x.content) || !x.content.length || x.content.length > 60) throw new Error("Each step needs board content.");
            const L = x.content.map((f) => {
              if (!f || typeof f != "object") throw new Error("Invalid board content.");
              switch (f.type) {
                case "heading":
                case "text":
                case "note":
                  return { ...f, text: l(f.text, "board text", !0) };
                case "equation":
                  return { ...f, visualText: l(f.visualText, "readable equation", !0), latex: l(f.latex, "equation") };
                case "definition":
                  return { ...f, term: l(f.term, "term", !0), text: l(f.text, "definition", !0) };
                case "theorem":
                  return { ...f, statement: l(f.statement, "theorem", !0) };
                case "list":
                case "proof": {
                  const b = f.type === "list" ? "items" : "lines";
                  if (!Array.isArray(f[b]) || !f[b].length) throw new Error("Invalid board list.");
                  return { ...f, [b]: f[b].map((O) => l(O, "list entry", !0)) };
                }
                case "matrix": {
                  const b = f.matrix?.rows;
                  if (!Array.isArray(b) || !b.length || b.length > 30 || !Array.isArray(b[0]) || !b[0].length || b[0].length > 30 || b.some((O) => !Array.isArray(O) || O.length !== b[0].length || O.some((U) => !["string", "number"].includes(typeof U)))) throw new Error("Invalid matrix.");
                  return f;
                }
                case "table":
                  if (!Array.isArray(f.headers) || !f.headers.length || !Array.isArray(f.rows) || f.rows.some((b) => !Array.isArray(b) || b.length !== f.headers.length)) throw new Error("Invalid table.");
                  return { ...f, headers: f.headers.map((b) => l(b, "table heading")), rows: f.rows.map((b) => b.map((O) => l(O, "table cell"))) };
                case "graph": {
                  if (!Array.isArray(f.nodes) || !Array.isArray(f.edges)) throw new Error("Invalid graph.");
                  const b = /* @__PURE__ */ new Set();
                  for (const O of f.nodes) {
                    if (!O?.id || b.has(O.id) || !Number.isFinite(O.x) || !Number.isFinite(O.y)) throw new Error("Invalid graph node.");
                    b.add(O.id);
                  }
                  if (f.edges.some((O) => !b.has(O?.from) || !b.has(O?.to))) throw new Error("Invalid graph edge.");
                  return f;
                }
                default:
                  throw new Error("Unsupported board content type.");
              }
            }), G = {
              id: R,
              title: l(x.title, "step title", !0),
              content: L,
              teacherPrompt: M,
              teacherQuestion: { prompt: M, options: ne, correctValue: F, explanation: l(Q.explanation, "answer explanation", !0) }
            };
            for (const f of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) G[f] = l(x[f], f);
            return G;
          });
          return {
            title: l(c.title, "lesson title", !0),
            lessonKind: "worked-example",
            problemLabel: l(c.problemLabel, "problem label") || "Problem",
            problemStatement: l(c.problemStatement || d, "problem statement", !0),
            learningGoal: l(c.learningGoal, "learning goal"),
            steps: h,
            verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
          };
        }
        function s(c) {
          if (!c || typeof c != "object" || Array.isArray(c) || !Object.keys(c).length) return { enabled: !1, valid: !1 };
          if (JSON.stringify(c).length > 25e4) throw new Error("Preview is too large.");
          if (c.schemaVersion !== 1) throw new Error("Unsupported preview schema.");
          const d = t(c.lesson, c.problem?.statement), l = c.context || {}, m = (h) => typeof h == "string" ? h.trim().slice(0, 500) : "";
          if (!m(l.syllabusId) || !m(l.contextKey) || !m(c.problem?.id)) throw new Error("Preview needs saved syllabus, context, and problem IDs.");
          return {
            enabled: !0,
            valid: !0,
            schemaVersion: 1,
            context: { syllabusId: m(l.syllabusId), contextKey: m(l.contextKey), versionNumber: Math.max(1, Math.floor(Number(l.versionNumber) || 1)), locale: ["en", "hi", "ta"].includes(l.locale) ? l.locale : "en", topicPath: m(l.topicPath) },
            problem: { id: m(c.problem.id), statement: d.problemStatement, solutionMode: c.problem.solutionMode === "quick" ? "quick" : "detailed" },
            lesson: d,
            boardSteps: d.steps.map(({ teacherQuestion: h, teacherPrompt: x, ...N }) => N),
            message: "Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified."
          };
        }
        try {
          return s(g.contentPreview);
        } catch {
          return { enabled: !0, valid: !1, message: "This preview is incomplete or invalid. Return to Studio and prepare it again." };
        }
      })();
      o.preview_validate = n;
    }
    return i("contentPreviewDisplay", o.preview_validate), o.preview_validate;
  }
  async function Tt(e = {}) {
    if (u.isCompletingProblem || u.isAnswerSubmitting || u.isLessonLoading)
      return { ok: !1, reason: "lesson_busy" };
    await re("nextProblemRequested", { problemId: g.problem.id, topicPath: g.courseContext.topicPath }, !0);
  }
  const Dt = {
    recordStudentSessionTime: We,
    requestStudentSolution: Ee,
    completeStudentProblem: Rt,
    startStudentSession: Je,
    initializeStudentLesson: Nt,
    selectStudentStep: jt,
    selectStudentAnswer: Qt,
    requestStudentBack: Mt,
    submitStudentAnswer: Ot,
    refreshLearningControls: y,
    initializeContentPreview: Be,
    requestNextProblem: Tt
  }, kt = {
    recordStudentSessionTime: ["activeSeconds"],
    requestStudentSolution: [],
    completeStudentProblem: [],
    startStudentSession: [],
    initializeStudentLesson: [],
    selectStudentStep: ["event", "stepIndex", "index"],
    selectStudentAnswer: ["value"],
    requestStudentBack: [],
    submitStudentAnswer: [],
    refreshLearningControls: [],
    initializeContentPreview: [],
    requestNextProblem: []
  }, te = (e, r = {}, o = []) => {
    const n = Dt[e];
    if (n) {
      const l = kt[e] || [];
      return n(Object.fromEntries(l.map((m, h) => {
        const x = Object.prototype.hasOwnProperty.call(r, m) ? r[m] : void 0;
        return [m, (x === "" || x === void 0) && o[h] !== void 0 ? o[h] : m === "event" && (x === "" || x === void 0) ? o[0] : x];
      })));
    }
    const t = Ze?.[e];
    if (typeof t == "function")
      return t(Object.keys(r).length > 0 ? r : o[0]);
    const [s, c] = String(e).split("."), d = typeof globalThis < "u" ? globalThis[s]?.[c] : void 0;
    if (typeof d == "function") return d(...Object.values(r));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, se = ie(/* @__PURE__ */ new Map()), de = le((e, r, o, n) => {
    const t = se.current.get(e);
    if (r === "exhaust" && t?.promise) return t.promise;
    r === "takeLatest" && t?.controller?.abort();
    const s = new AbortController(), c = () => Promise.resolve().then(() => o(s.signal)), d = r === "queue" && t?.promise ? t.promise.catch(() => {
    }).then(c) : c();
    return se.current.set(e, { controller: s, promise: d }), d.catch((l) => {
      l?.name !== "AbortError" && console.error(n, l);
    }).finally(() => {
      se.current.get(e)?.promise === d && se.current.delete(e);
    }), d;
  }, []);
  Y(() => () => {
    for (const e of se.current.values()) e.controller?.abort();
    se.current.clear();
  }, []), Y(() => {
    de("student_mountstartStudentSession", "takeLatest", (e) => Je({}), "Module mount lifecycle failed:");
  }, []);
  const Ge = ie(!1);
  Y(() => {
    if (!Ge.current) {
      Ge.current = !0;
      return;
    }
    $e(structuredClone("")), De(structuredClone("")), de("student_problem_changerequestStudentSolution", "takeLatest", (e) => Ee({ signal: e }), "Module input lifecycle failed:");
  }, [we, qe]);
  const Ke = ie(!1);
  Y(() => {
    Ke.current || (Ke.current = !0), de("learning_controls_inputsrefreshLearningControls", "takeLatest", (e) => y({}), "Module input lifecycle failed:");
  }, [Ne, Le, we]);
  const Ue = ie(!1);
  return Y(() => {
    Ue.current || (Ue.current = !0), de("content_preview_inputsinitializeContentPreview", "takeLatest", (e) => Be({}), "Module input lifecycle failed:");
  }, [Re]), Y(() => () => {
    We({}).catch((e) => console.error("Module unmount lifecycle failed:", e));
  }, []), /* @__PURE__ */ I("div", { ref: ye, className: "rudra-module-wrapper", children: S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
    "      ",
    /* @__PURE__ */ p($t, { id: "root", className: "rs-student-workspace", as: "main", maxWidth: "full", children: [
      "      ",
      S(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(K?.enabled)) && /* @__PURE__ */ p(w, { children: [
        "      ",
        /* @__PURE__ */ p(J, { id: "content_preview_panel", className: "flex flex-col rs-content-preview", children: [
          "      ",
          S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
            "      ",
            /* @__PURE__ */ I(T, { id: "content_preview_notice", className: "rs-content-preview-notice", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(K?.message), "aria-live": "polite" })
          ] }),
          S(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(K?.valid)) && /* @__PURE__ */ p(w, { children: [
            "      ",
            /* @__PURE__ */ I(Ye, { id: "content_preview_board", problemStatement: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(K?.lesson?.problemStatement), steps: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(K?.boardSteps), title: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(K?.lesson?.title), autoAdvance: !1, problemLabel: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(K?.lesson?.problemLabel), popupInitiallyOpen: !1, playing: !1, learningGoal: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(K?.lesson?.learningGoal), captionsEnabled: !0 })
          ] })
        ] })
      ] }),
      S(/* @__PURE__ */ ((e) => !e)(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(K?.enabled))) && /* @__PURE__ */ p(w, { children: [
        "      ",
        /* @__PURE__ */ p(J, { id: "content_preview_normal_stack", className: "block", children: [
          "      ",
          S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
            "      ",
            /* @__PURE__ */ p(J, { id: "stack", className: "flex flex-col rs-student-stack", children: [
              "      ",
              S(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee?.empty)) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(J, { id: "learning_empty", className: "flex flex-col rs-learning-empty", children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "learning_empty_title", className: "rs-question-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Your next discovery starts here" : e)(D?.i18n?.emptyTitle) })
                  ] }),
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "learning_empty_body", className: "rs-lesson-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select a problem from your course, then load its step-by-step lesson." : e)(D?.i18n?.emptyBody) })
                  ] })
                ] })
              ] }),
              S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(J, { id: "topbar", className: "flex flex-wrap rs-topbar", children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(ce, { id: "back_button", className: "rs-learning-button", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee?.busy), onAction: (...e) => te("requestStudentBack", {}, e), label: /* @__PURE__ */ ((e) => e === void 0 ? "← Back to course" : e)(D?.i18n?.back), theme: "auto" })
                  ] }),
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ p(J, { id: "course_meta", className: "flex flex-col rs-course-meta", children: [
                      "      ",
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "course_title", className: "rs-course-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics course" : e)(g?.courseContext?.courseTitle) })
                      ] }),
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ p(J, { id: "course_context", className: "flex flex-wrap rs-course-context", children: [
                          "      ",
                          S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                            "      ",
                            /* @__PURE__ */ I(T, { id: "professor_name", className: "rs-muted", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(g?.courseContext?.professorName) })
                          ] }),
                          S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                            "      ",
                            /* @__PURE__ */ I(T, { id: "context_separator", className: "rs-separator", as: "span", content: "·" })
                          ] }),
                          S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                            "      ",
                            /* @__PURE__ */ I(T, { id: "section_title", className: "rs-muted", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course section" : e)(g?.courseContext?.sectionTitle) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ p(J, { id: "time_badge", className: "flex rs-time-badge", children: [
                      "      ",
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "time_value", className: "rs-time-value", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.remainingMinutes) })
                      ] }),
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "time_unit", className: "rs-time-unit", content: /* @__PURE__ */ ((e) => e === void 0 ? "min left" : e)(D?.i18n?.minutesLeft), as: "span" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              S(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(be)) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(he, { id: "loading_alert", className: "rs-lesson-alert", title: /* @__PURE__ */ p(w, { children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "loading_alert_title", className: "rs-lesson-copy", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? "Preparing your lesson" : e)(D?.i18n?.preparing) })
                  ] })
                ] }), appearance: "soft", live: "polite", variant: "info", children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "loading_alert_text", className: "rs-lesson-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Loading the saved solution or generating a new lesson…" : e)(D?.i18n?.loading) })
                  ] })
                ] })
              ] }),
              S(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(xe)) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(he, { id: "error_alert", className: "rs-lesson-alert", title: /* @__PURE__ */ p(w, { children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "error_alert_title", className: "rs-lesson-copy", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? "Lesson unavailable" : e)(D?.i18n?.unavailable) })
                  ] })
                ] }), live: "assertive", variant: "error", appearance: "soft", children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "error_alert_text", className: "rs-lesson-copy", content: /* @__PURE__ */ ((e) => e === void 0 ? "Unable to load this lesson." : e)(xe), as: "p" })
                  ] })
                ] })
              ] }),
              S(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Ae)) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(he, { id: "source_alert", className: "rs-lesson-alert", title: /* @__PURE__ */ p(w, { children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "source_alert_title", className: "rs-lesson-copy", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? "Solution source" : e)(D?.i18n?.source) })
                  ] })
                ] }), appearance: "soft", live: "polite", variant: "info", children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "source_alert_text", className: "rs-lesson-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Ae) })
                  ] })
                ] })
              ] }),
              S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(J, { id: "lesson_grid", className: "grid rs-lesson-grid", children: [
                  "      ",
                  S(((e) => Array.isArray(e) && e.length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ue))) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ p(J, { id: "board_panel", className: "block rs-board-panel", children: [
                      "      ",
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(Ye, { id: "board", title: /* @__PURE__ */ ((e) => e === void 0 ? "Your lesson" : e)(oe?.title), boardOptions: { allowStepSelection: !0, showCaptions: !0, showControls: !0, showHeader: !0, showLearningGoal: !0, showNextControl: !0, showPlaybackControl: !0, showPopup: !0, showProblem: !0, showProgress: !0, showRepeatControl: !0, showSpeed: !0, showStepNumbers: !0, showTeacherButton: !1 }, problemLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(oe?.problemLabel), reducedMotion: !1, onNext: (...e) => te("selectStudentStep", {}, e), autoAdvance: !0, onStepSelect: (...e) => te("selectStudentStep", {}, e), editOperations: [], stepDurationMs: 5500, playing: !1, speedLabel: "Normal", learningGoal: /* @__PURE__ */ ((e) => e === void 0 ? "Understand and verify every step." : e)(oe?.learningGoal), showStepPopup: !0, problemStatement: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(oe?.problemStatement), popupInitiallyOpen: !1, steps: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ue), activeStep: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(ke), lessonKind: /* @__PURE__ */ ((e) => e === void 0 ? "worked-example" : e)(oe?.lessonKind), captionsEnabled: !0 })
                      ] })
                    ] })
                  ] }),
                  S(((e) => Array.isArray(e) && e.length === 4)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ve))) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ p(Wt, { id: "question_panel", className: "rs-question-card", as: "aside", theme: "auto", children: [
                      "      ",
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "question_kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Teacher check" : e)(D?.i18n?.teacherCheck) })
                      ] }),
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "question_title", className: "rs-question-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select the best answer." : e)(Te) })
                      ] }),
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(zt, { id: "question_choices", value: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Fe), layout: "vertical", options: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ve), colorScheme: "emerald", onChangeValue: (...e) => te("selectStudentAnswer", {}, e), size: "md", label: /* @__PURE__ */ ((e) => e === void 0 ? "Choose one answer" : e)(D?.i18n?.choose), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee?.busy), name: "studentAnswer" })
                      ] }),
                      S(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Pe)) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "answer_feedback", className: "rs-answer-feedback", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select one answer." : e)(Pe), "aria-live": "polite" })
                      ] }),
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ p(J, { id: "question_actions", className: "flex flex-wrap rs-question-actions", children: [
                          "      ",
                          S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                            "      ",
                            /* @__PURE__ */ I(ce, { id: "submit_answer", className: "rs-learning-button rs-learning-primary", label: /* @__PURE__ */ ((e) => e === void 0 ? "Submit answer" : e)(D?.i18n?.submit), theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(je), variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(ee?.submitDisabled), onAction: (...e) => te("submitStudentAnswer", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              S(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem?.statement)) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ I(ce, { id: "request_solution", className: "rs-learning-button", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee?.busy), onAction: (...e) => te("requestStudentSolution", {}, e), loadingText: /* @__PURE__ */ ((e) => e === void 0 ? "Preparing lesson…" : e)(D?.i18n?.loadingAction), label: /* @__PURE__ */ ((e) => e === void 0 ? "Load / retry lesson" : e)(D?.i18n?.loadRetry), theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(be), variant: "primary" })
              ] }),
              S(((e) => Array.isArray(e) && e.length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ue))) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(J, { id: "learning_footer", className: "flex flex-wrap rs-learning-footer", children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ p(J, { id: "progress_box", className: "flex flex-col rs-progress-box", children: [
                      "      ",
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "progress_label", className: "rs-muted", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Lesson progress" : e)(D?.i18n?.progress) })
                      ] }),
                      S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                        "      ",
                        /* @__PURE__ */ I(T, { id: "progress_value", className: "rs-progress-value", as: "strong", content: ((e) => {
                          const r = Number(e);
                          return (Number.isFinite(r) ? Math.round(Math.max(0, Math.min(100, r))) : 0) + "%";
                        })(/* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(Me)) })
                      ] })
                    ] })
                  ] }),
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(ce, { id: "complete_button", className: "rs-learning-button rs-learning-primary", onAction: (...e) => te("completeStudentProblem", {}, e), loadingText: /* @__PURE__ */ ((e) => e === void 0 ? "Saving…" : e)(D?.i18n?.saving), label: /* @__PURE__ */ ((e) => e === void 0 ? "Mark complete" : e)(D?.i18n?.complete), theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Oe), variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(ee?.completeDisabled) })
                  ] }),
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(ce, { id: "next_button", className: "rs-learning-button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Next problem" : e)(D?.i18n?.next), theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee?.busy), onAction: (...e) => te("requestNextProblem", {}, e) })
                  ] })
                ] })
              ] }),
              S(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Se)) && /* @__PURE__ */ p(w, { children: [
                "      ",
                /* @__PURE__ */ p(he, { id: "completion_alert", className: "rs-lesson-alert", title: /* @__PURE__ */ p(w, { children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "completion_alert_title", className: "rs-lesson-copy", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? "Completion status" : e)(D?.i18n?.completion) })
                  ] })
                ] }), appearance: "soft", live: "polite", variant: /* @__PURE__ */ ((e) => e ? "error" : "success")(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(Qe)), children: [
                  "      ",
                  S(P({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(w, { children: [
                    "      ",
                    /* @__PURE__ */ I(T, { id: "completion_alert_text", className: "rs-lesson-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Se) })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Ht as default
};
