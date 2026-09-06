import { jsx as x, jsxs as h, Fragment as b } from "react/jsx-runtime";
import { useState as v, useEffect as V, useRef as H, useCallback as F } from "react";
import { Container as et, Box as L } from "@rudra-studio/rudra-layout";
import { Button as J, Typography as C, Alert as Y, Card as tt } from "@rudra-studio/rudra-core";
import { BlackboardLesson as ot } from "@rudra-studio/chalkmind-math";
import { RadioGroup as st } from "@rudra-studio/rudra-form";
function dt(c) {
  const B = {}, P = c.serverData || c.serverState || {}, k = c.sharedState || {}, I = c.applicationState || P.applicationState || {}, E = c.pageState || P.pageState || {}, R = c.pageData || P.pageData || {}, Se = {
    ...c.runtime?.functions || {},
    ...c.runtime?.actions || {},
    ...c.functions || {},
    ...c.actions || {}
  }, T = c.$theme ?? c.theme ?? c.data?.$theme ?? c.runtime?.data?.$theme ?? c.runtime?.theme, X = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [rt, ee] = v(() => T ?? X());
  V(() => {
    T != null && ee(T);
  }, [T]), V(() => {
    if (T != null || typeof document > "u") return;
    const e = document.documentElement, t = (r) => ee(r?.detail?.theme ?? X()), s = new MutationObserver(t);
    return s.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      s.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [T]);
  const G = H(null), [W, K] = v("lg");
  V(() => {
    if (!G.current) return;
    const e = new ResizeObserver((t) => {
      for (let s of t) {
        const r = s.contentRect.width;
        r < 768 ? K("sm") : r < 1024 ? K("md") : K("lg");
      }
    });
    return e.observe(G.current), () => e.disconnect();
  }, []);
  const f = F((e) => typeof e != "object" || e === null ? e : W === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : W === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [W]), y = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, xe = c.loading !== void 0 ? c.loading : c.data?.loading !== void 0 ? c.data.loading : !1, we = c.authenticated !== void 0 ? c.authenticated : c.data?.authenticated !== void 0 ? c.data.authenticated : !0, te = c.problem !== void 0 ? c.problem : c.data?.problem !== void 0 ? c.data.problem : { cached: !0, id: "11111111-1111-4111-8111-111111111121", solutionMode: "detailed", statement: "Find the eigenvalues of A = [[2, 1], [1, 2]]." }, ve = c.initialProgressPercent !== void 0 ? c.initialProgressPercent : c.data?.initialProgressPercent !== void 0 ? c.data.initialProgressPercent : 0, _e = c.lesson !== void 0 ? c.lesson : c.data?.lesson !== void 0 ? c.data.lesson : { learningGoal: "Form the characteristic equation, solve it, and verify both eigenvalues.", lessonKind: "worked-example", problemLabel: "Linear algebra · Eigenvalues", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ commonMistake: "Do not change the off-diagonal entries.", content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }], explanation: "Eigenvalues satisfy det(A − λI) = 0.", id: "step-1", narration: "Subtract lambda from the diagonal.", simpleExplanation: "Make the matrix singular.", teacherPrompt: "Which equation determines the eigenvalues?", teacherQuestion: { correctValue: "a", explanation: "Eigenvalues make A − λI singular, so its determinant is zero.", options: [{ label: "det(A − λI) = 0", value: "a" }, { label: "det(A + λI) = 1", value: "b" }, { label: "A + I = 0", value: "c" }, { label: "trace(A) = 0", value: "d" }], prompt: "Which equation determines the eigenvalues?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A − λI is singular." }, { commonMistake: "Keep the signs consistent when expanding.", content: [{ label: "Polynomial", latex: "\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)", type: "equation", visualText: "λ² − 4λ + 3 = (λ − 1)(λ − 3)" }], explanation: "The equation becomes λ² − 4λ + 3 = 0.", id: "step-2", narration: "Expand the determinant and factor the polynomial.", simpleExplanation: "Find two numbers whose product is three and sum is four.", teacherPrompt: "Which pair contains both roots?", teacherQuestion: { correctValue: "c", explanation: "The factors vanish at λ = 1 and λ = 3.", options: [{ label: "−1 and −3", value: "a" }, { label: "0 and 2", value: "b" }, { label: "1 and 3", value: "c" }, { label: "2 and 4", value: "d" }], prompt: "Which pair contains both roots?" }, title: "Expand and factor", why: "Factoring reveals the roots directly." }, { commonMistake: "Do not verify only one root.", content: [{ text: "The eigenvalues are λ = 1 and λ = 3.", tone: "success", type: "note" }], explanation: "Both values satisfy the characteristic equation.", id: "step-3", narration: "Check that each result makes the determinant zero.", simpleExplanation: "Put each value back into the equation.", teacherPrompt: "Which eigenvalue corresponds to the vector [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to the vector [1, 1]?" }, title: "Verify the result", why: "Verification confirms that no algebraic error changed the answer." }], title: "Eigenvalues of a 2 × 2 matrix" }, Pe = c.solutionSource !== void 0 ? c.solutionSource : c.data?.solutionSource !== void 0 ? c.data.solutionSource : "Saved solution · AI was not called", qe = c.courseContext !== void 0 ? c.courseContext : c.data?.courseContext !== void 0 ? c.data.courseContext : { contextKey: "rudra-scholar:engineering-mathematics", courseTitle: "Engineering Mathematics I", professorName: "Dr. Meera Iyer", sectionTitle: "Matrices and Eigenvalues", syllabusId: "11111111-1111-4111-8111-111111111112", topicPath: "engineering-mathematics/semester-1/linear-algebra/eigenvalues", versionNumber: 1 }, Ae = c.errorMessage !== void 0 ? c.errorMessage : c.data?.errorMessage !== void 0 ? c.data.errorMessage : "", ke = c.remainingMinutes !== void 0 ? c.remainingMinutes : c.data?.remainingMinutes !== void 0 ? c.data.remainingMinutes : 90, oe = c.locale !== void 0 ? c.locale : c.data?.locale !== void 0 ? c.data.locale : "en", g = { loading: xe, authenticated: we, problem: te, initialProgressPercent: ve, lesson: _e, solutionSource: Pe, courseContext: qe, errorMessage: Ae, remainingMinutes: ke, locale: oe }, [Ie, Ee] = v(() => structuredClone(0)), [se, Re] = v(() => structuredClone(!1)), [re, Ce] = v(() => structuredClone(0)), [ne, Qe] = v(() => structuredClone([{ label: "det(A − λI) = 0", value: "a" }, { label: "det(A + λI) = 1", value: "b" }, { label: "A + I = 0", value: "c" }, { label: "trace(A) = 0", value: "d" }])), [je, Me] = v(() => structuredClone("Eigenvalues make A − λI singular, so its determinant is zero.")), [ae, ie] = v(() => structuredClone("")), [le, Le] = v(() => structuredClone("")), [Te, Oe] = v(() => structuredClone("Saved solution · AI was not called")), [D, Ne] = v(() => structuredClone({ learningGoal: "Form the characteristic equation, solve it, and verify both eigenvalues.", lessonKind: "worked-example", problemLabel: "Linear algebra · Eigenvalues", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ commonMistake: "Do not change the off-diagonal entries.", content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }], explanation: "Eigenvalues satisfy det(A − λI) = 0.", id: "step-1", narration: "Subtract lambda from the diagonal.", simpleExplanation: "Make the matrix singular.", teacherPrompt: "Which equation determines the eigenvalues?", teacherQuestion: { correctValue: "a", explanation: "Eigenvalues make A − λI singular, so its determinant is zero.", options: [{ label: "det(A − λI) = 0", value: "a" }, { label: "det(A + λI) = 1", value: "b" }, { label: "A + I = 0", value: "c" }, { label: "trace(A) = 0", value: "d" }], prompt: "Which equation determines the eigenvalues?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A − λI is singular." }, { commonMistake: "Keep the signs consistent when expanding.", content: [{ label: "Polynomial", latex: "\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)", type: "equation", visualText: "λ² − 4λ + 3 = (λ − 1)(λ − 3)" }], explanation: "The equation becomes λ² − 4λ + 3 = 0.", id: "step-2", narration: "Expand the determinant and factor the polynomial.", simpleExplanation: "Find two numbers whose product is three and sum is four.", teacherPrompt: "Which pair contains both roots?", teacherQuestion: { correctValue: "c", explanation: "The factors vanish at λ = 1 and λ = 3.", options: [{ label: "−1 and −3", value: "a" }, { label: "0 and 2", value: "b" }, { label: "1 and 3", value: "c" }, { label: "2 and 4", value: "d" }], prompt: "Which pair contains both roots?" }, title: "Expand and factor", why: "Factoring reveals the roots directly." }, { commonMistake: "Do not verify only one root.", content: [{ text: "The eigenvalues are λ = 1 and λ = 3.", tone: "success", type: "note" }], explanation: "Both values satisfy the characteristic equation.", id: "step-3", narration: "Check that each result makes the determinant zero.", simpleExplanation: "Put each value back into the equation.", teacherPrompt: "Which eigenvalue corresponds to the vector [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to the vector [1, 1]?" }, title: "Verify the result", why: "Verification confirms that no algebraic error changed the answer." }], title: "Eigenvalues of a 2 × 2 matrix" })), [ce, Ve] = v(() => structuredClone([{ commonMistake: "Do not change the off-diagonal entries.", content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }], explanation: "Eigenvalues satisfy det(A − λI) = 0.", id: "step-1", narration: "Subtract lambda from the diagonal.", simpleExplanation: "Make the matrix singular.", title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A − λI is singular." }, { commonMistake: "Keep the signs consistent when expanding.", content: [{ label: "Polynomial", latex: "\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)", type: "equation", visualText: "λ² − 4λ + 3 = (λ − 1)(λ − 3)" }], explanation: "The equation becomes λ² − 4λ + 3 = 0.", id: "step-2", narration: "Expand the determinant and factor the polynomial.", simpleExplanation: "Find two numbers whose product is three and sum is four.", title: "Expand and factor", why: "Factoring reveals the roots directly." }, { commonMistake: "Do not verify only one root.", content: [{ text: "The eigenvalues are λ = 1 and λ = 3.", tone: "success", type: "note" }], explanation: "Both values satisfy the characteristic equation.", id: "step-3", narration: "Check that each result makes the determinant zero.", simpleExplanation: "Put each value back into the equation.", title: "Verify the result", why: "Verification confirms that no algebraic error changed the answer." }])), [ue, De] = v(() => structuredClone("Which equation determines the eigenvalues?")), [ze, Fe] = v(() => structuredClone("a")), [de, pe] = v(() => structuredClone("Select one answer.")), [me, Je] = v(() => structuredClone(0)), p = { sessionStartedAt: Ie, isLessonLoading: se, activeStep: re, teacherQuestionOptions: ne, teacherQuestionExplanation: je, selectedTeacherAnswer: ae, lessonError: le, lessonSource: Te, studentLesson: D, boardSteps: ce, teacherQuestionPrompt: ue, teacherQuestionCorrectValue: ze, teacherAnswerFeedback: de, progressPercent: me }, u = F((e, t) => {
    switch (e) {
      case "sessionStartedAt": {
        const s = typeof t == "function" ? t(p.sessionStartedAt) : t;
        return p.sessionStartedAt = s, Ee(s), s;
      }
      case "isLessonLoading": {
        const s = typeof t == "function" ? t(p.isLessonLoading) : t;
        return p.isLessonLoading = s, Re(s), s;
      }
      case "activeStep": {
        const s = typeof t == "function" ? t(p.activeStep) : t;
        return p.activeStep = s, Ce(s), s;
      }
      case "teacherQuestionOptions": {
        const s = typeof t == "function" ? t(p.teacherQuestionOptions) : t;
        return p.teacherQuestionOptions = s, Qe(s), s;
      }
      case "teacherQuestionExplanation": {
        const s = typeof t == "function" ? t(p.teacherQuestionExplanation) : t;
        return p.teacherQuestionExplanation = s, Me(s), s;
      }
      case "selectedTeacherAnswer": {
        const s = typeof t == "function" ? t(p.selectedTeacherAnswer) : t;
        return p.selectedTeacherAnswer = s, ie(s), s;
      }
      case "lessonError": {
        const s = typeof t == "function" ? t(p.lessonError) : t;
        return p.lessonError = s, Le(s), s;
      }
      case "lessonSource": {
        const s = typeof t == "function" ? t(p.lessonSource) : t;
        return p.lessonSource = s, Oe(s), s;
      }
      case "studentLesson": {
        const s = typeof t == "function" ? t(p.studentLesson) : t;
        return p.studentLesson = s, Ne(s), s;
      }
      case "boardSteps": {
        const s = typeof t == "function" ? t(p.boardSteps) : t;
        return p.boardSteps = s, Ve(s), s;
      }
      case "teacherQuestionPrompt": {
        const s = typeof t == "function" ? t(p.teacherQuestionPrompt) : t;
        return p.teacherQuestionPrompt = s, De(s), s;
      }
      case "teacherQuestionCorrectValue": {
        const s = typeof t == "function" ? t(p.teacherQuestionCorrectValue) : t;
        return p.teacherQuestionCorrectValue = s, Fe(s), s;
      }
      case "teacherAnswerFeedback": {
        const s = typeof t == "function" ? t(p.teacherAnswerFeedback) : t;
        return p.teacherAnswerFeedback = s, pe(s), s;
      }
      case "progressPercent": {
        const s = typeof t == "function" ? t(p.progressPercent) : t;
        return p.progressPercent = s, Je(s), s;
      }
      default:
        return t;
    }
  }, [p]);
  F((e, t) => {
    const [s, ...r] = String(e || "").split(".");
    if (!s) return t;
    if (r.length === 0) return u(s, t);
    const n = (o) => {
      const l = Array.isArray(o) ? [...o] : { ...o || {} };
      let a = l;
      return r.forEach((i, d) => {
        d === r.length - 1 ? a[i] = t : (a[i] = Array.isArray(a[i]) ? [...a[i]] : { ...a[i] || {} }, a = a[i]);
      }), l;
    };
    switch (s) {
      case "sessionStartedAt":
        return u("sessionStartedAt", n), t;
      case "isLessonLoading":
        return u("isLessonLoading", n), t;
      case "activeStep":
        return u("activeStep", n), t;
      case "teacherQuestionOptions":
        return u("teacherQuestionOptions", n), t;
      case "teacherQuestionExplanation":
        return u("teacherQuestionExplanation", n), t;
      case "selectedTeacherAnswer":
        return u("selectedTeacherAnswer", n), t;
      case "lessonError":
        return u("lessonError", n), t;
      case "lessonSource":
        return u("lessonSource", n), t;
      case "studentLesson":
        return u("studentLesson", n), t;
      case "boardSteps":
        return u("boardSteps", n), t;
      case "teacherQuestionPrompt":
        return u("teacherQuestionPrompt", n), t;
      case "teacherQuestionCorrectValue":
        return u("teacherQuestionCorrectValue", n), t;
      case "teacherAnswerFeedback":
        return u("teacherAnswerFeedback", n), t;
      case "progressPercent":
        return u("progressPercent", n), t;
      default:
        return t;
    }
  }, [u]);
  const Be = { answerSubmitted: { properties: { correct: { type: "boolean" }, locale: { type: "string" }, problemId: { type: "string" }, selectedValue: { type: "string" }, stepId: { type: "string" } }, required: ["problemId", "stepId", "selectedValue", "correct", "locale"], type: "object" }, backRequested: { properties: { courseContext: { type: "object" } }, type: "object" }, lessonProgressed: { properties: { completed: { type: "boolean" }, problemId: { type: "string" }, progressPercent: { type: "number" }, stepIndex: { type: "number" } }, required: ["problemId", "stepIndex", "progressPercent", "completed"], type: "object" }, nextProblemRequested: { properties: { problemId: { type: "string" }, topicPath: { type: "string" } }, type: "object" }, problemCompleted: { properties: { problemId: { type: "string" }, progressPercent: { type: "number" } }, required: ["problemId", "progressPercent"], type: "object" }, solutionRequested: { properties: { courseContext: { type: "object" }, locale: { type: "string" }, problem: { type: "object" } }, required: ["problem", "courseContext", "locale"], type: "object" } }, $ = (e, t, s) => {
    if (!t || typeof t != "object") return "";
    const r = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], n = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (r.length && !r.includes(n) && !(n === "integer" && r.includes("number"))) return s + " must be " + r.join(" or ") + ".";
    if (t.enum && !t.enum.some((o) => JSON.stringify(o) === JSON.stringify(e))) return s + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const o of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, o)) return s + "." + o + " is required.";
      for (const [o, l] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, o)) {
        const a = $(e[o], l, s + "." + o);
        if (a) return a;
      }
    }
    if (Array.isArray(e) && t.items) for (let o = 0; o < e.length; o++) {
      const l = $(e[o], t.items, s + "[" + o + "]");
      if (l) return l;
    }
    return "";
  }, O = F(async (e, t, s = !1) => {
    const r = Be[e];
    if (!r) throw new Error("Module output '" + e + "' is not declared.");
    const n = $(t, r, "output." + e);
    if (n) throw new Error(n);
    const o = c.onOutput || c.onModuleOutput || c.runtime?.onOutput;
    if (typeof o != "function") return t;
    const l = o(e, t, { moduleId: c.moduleId, awaitHandlers: s });
    return s ? await l : t;
  }, [c.onOutput, c.onModuleOutput, c.runtime?.onOutput, c.moduleId]), he = (e, t) => {
    const s = String(t || "").split(".").filter(Boolean);
    if (!(!s.length || s.some((r) => ["__proto__", "prototype", "constructor"].includes(r))))
      return s.reduce((r, n) => {
        if (!(!r || typeof r != "object"))
          return typeof r.get == "function" && !(n in r) ? r.get(n) : r[n];
      }, e);
  }, q = (e, t) => {
    if (Array.isArray(e)) return e.map((r) => q(r, t));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([r, n]) => [q(r, t), q(n, t)]));
    if (typeof e != "string") return e;
    const s = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return s ? he(t, s[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (r, n) => {
      const o = he(t, n);
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    });
  };
  async function Ge(e = {}) {
    O("nextProblemRequested", { problemId: g.problem.id, topicPath: g.courseContext.topicPath }, !1).catch((t) => console.error("Module output delivery failed", t));
  }
  async function ge(e = {}) {
    const t = e || {}, s = {}, r = {};
    {
      t.event;
      const n = await (async () => {
        const o = Number(t.activeSeconds || 0), l = Number(p.sessionStartedAt || 0), a = l > 0 ? Math.floor((Date.now() - l) / 1e3) : 0;
        return { seconds: Math.max(0, Math.min(300, o > 0 ? o : a)) };
      })();
      r.time_prepare = n, s.customCodeResult = n;
    }
    {
      const o = q({ activeSeconds: "{{ stepResults.time_prepare.seconds }}", email: "", problemId: "{{ inputs.problem.id }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
      delete o.email;
      const l = [void 0, o.activeSeconds, o.problemId], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
      let i;
      if (typeof a == "function")
        i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarRecordActiveLearningTime", parameters: l, namedParameters: o, signal: t.signal });
      else {
        const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarRecordActiveLearningTime", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
        if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
        i = m.data;
      }
      r.time_record = i, s.queryResult = i;
    }
    return r.time_record[0].result;
  }
  async function Z(e = {}) {
    const t = e || {}, s = {}, r = {};
    u("isLessonLoading", !0), u("lessonError", "");
    {
      t.event;
      const n = await (async () => {
        const o = g.problem && typeof g.problem == "object" ? g.problem : {}, l = String(o.id || "").trim();
        if (!l) throw new Error("Select a problem first.");
        const a = String(g.locale || "en").toLowerCase(), i = ["en", "hi", "ta"].includes(a) ? a : "en";
        return { problemId: l, statement: String(o.statement || ""), mode: o.solutionMode === "quick" ? "quick" : "detailed", locale: i, promptVersion: "v2-student-mcq-blackboard" };
      })();
      r.solution_prepare = n, s.customCodeResult = n;
    }
    {
      const o = q({ email: "", locale: "{{ stepResults.solution_prepare.locale }}", problemId: "{{ stepResults.solution_prepare.problemId }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
      delete o.email;
      const l = [void 0, o.problemId, o.locale], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
      let i;
      if (typeof a == "function")
        i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarLoadStudentProblem", parameters: l, namedParameters: o, signal: t.signal });
      else {
        const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadStudentProblem", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
        if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
        i = m.data;
      }
      r.solution_lookup = i, s.queryResult = i;
    }
    {
      t.event;
      const n = await (async () => {
        const l = (Array.isArray(r.solution_lookup) ? r.solution_lookup : [])[0] || {}, a = l.result && typeof l.result == "object" ? l.result : {}, i = a.lesson && typeof a.lesson == "object" ? a.lesson : null, d = Array.isArray(i?.steps) ? i.steps : [], m = !!(a.cached && i && d.length), _ = Math.max(0, Math.min(Math.max(0, d.length - 1), Number(a.activeStep || 0))), Q = d[_]?.teacherQuestion || {}, S = d.map((A) => {
          const w = { ...A };
          return delete w.teacherQuestion, delete w.teacherPrompt, w;
        });
        return { hit: m, result: a, lesson: i, boardSteps: S, activeStep: _, progress: Number(a.progressPercent || 0), question: { prompt: String(Q.prompt || d[_]?.teacherPrompt || ""), options: Array.isArray(Q.options) ? Q.options : [], correctValue: String(Q.correctValue || ""), explanation: String(Q.explanation || "") } };
      })();
      r.solution_cache = n, s.customCodeResult = n;
    }
    if (r.solution_cache.hit) {
      u("studentLesson", r.solution_cache.lesson), u("boardSteps", r.solution_cache.boardSteps), u("activeStep", r.solution_cache.activeStep), u("progressPercent", r.solution_cache.progress), u("teacherQuestionPrompt", r.solution_cache.question.prompt), u("teacherQuestionOptions", r.solution_cache.question.options), u("teacherQuestionCorrectValue", r.solution_cache.question.correctValue), u("teacherQuestionExplanation", r.solution_cache.question.explanation), u("lessonSource", "Saved solution · AI was not called");
      {
        const o = q({ email: "", problemId: "{{ stepResults.solution_prepare.problemId }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
        delete o.email;
        const l = [void 0, o.problemId], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let i;
        if (typeof a == "function")
          i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarResolveStudentStrategy", parameters: l, namedParameters: o, signal: t.signal });
        else {
          const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveStudentStrategy", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
          i = m.data;
        }
        r.solution_strategy = i, s.queryResult = i;
      }
      {
        t.event;
        const n = await (async () => {
          const l = (Array.isArray(r.solution_strategy) ? r.solution_strategy : [])[0] || {}, a = l.result && typeof l.result == "object" ? l.result : {};
          return { strategyId: String(a.strategyId || ""), strategyVersion: Math.max(1, Number(a.strategyVersion || 1)), strategy: a.strategy && typeof a.strategy == "object" ? a.strategy : { preferredMethod: "Explain from definitions, show every algebraic step, and verify the final answer.", explanationDepth: "detailed" } };
        })();
        r.solution_strategy_parse = n, s.customCodeResult = n;
      }
      {
        t.event;
        const n = await (async () => {
          const o = r.solution_prepare, l = r.solution_strategy_parse;
          return ["You are a college mathematics professor creating an interactive Blackboard lesson.", "Return JSON only with keys title, lessonKind, problemLabel, problemStatement, learningGoal, steps.", "Create at least three steps. Every step must contain id, title, narration, explanation, simpleExplanation, why, commonMistake, content, teacherPrompt, and teacherQuestion.", "Every teacherQuestion must contain prompt, exactly four options with label and value, one correctValue, and explanation.", "Generate every human-readable field in " + (o.locale === "hi" ? "Hindi" : o.locale === "ta" ? "Tamil" : "English") + " only. Keep mathematical notation and JSON keys unchanged.", "Use this approved hierarchy strategy: " + JSON.stringify(l.strategy), "Problem: " + o.statement, "Solution mode: " + o.mode].join(`
`);
        })();
        r.solution_prompt = n, s.customCodeResult = n;
      }
      {
        const n = { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }, o = q({ prompt: "{{ stepResults.solution_prompt }}" }, n) || {}, l = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtptmzag000004jix1ok7kyi", apiId: "geminiStudentProblemSolution", argumentValues: o, context: n }), signal: t.signal || AbortSignal.timeout(3e4) }), a = await l.json().catch(() => ({}));
        if (!l.ok) throw new Error(a.error || "Protected API request failed (" + l.status + ")");
        const i = a.data;
        r.solution_ai = i, s.apiResult = i;
      }
      {
        t.event;
        const n = await (async () => {
          const l = (r.solution_ai || {})?.candidates?.[0]?.content?.parts, a = Array.isArray(l) ? l.map((S) => String(S?.text || "")).join("") : "";
          if (!a.trim()) throw new Error("Gemini returned no lesson.");
          const i = JSON.parse(a.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), d = Array.isArray(i.steps) ? i.steps : [];
          if (!d.length) throw new Error("Gemini returned no lesson steps.");
          const m = d.map((S, A) => {
            const w = S?.teacherQuestion || {}, j = Array.isArray(w.options) ? w.options.slice(0, 4) : [];
            if (j.length !== 4) throw new Error("Every teacher check must provide four choices.");
            const U = new Set(j.map((M) => String(M.value))).has(String(w.correctValue)) ? String(w.correctValue) : String(j[0].value);
            return { ...S, id: String(S.id || "step-" + (A + 1)), teacherPrompt: String(w.prompt || S.teacherPrompt || ""), teacherQuestion: { prompt: String(w.prompt || S.teacherPrompt || ""), options: j.map((M) => ({ label: String(M.label || ""), value: String(M.value || "") })), correctValue: U, explanation: String(w.explanation || "") } };
          }), _ = { title: String(i.title || "Worked solution"), lessonKind: "worked-example", problemLabel: String(i.problemLabel || "Problem"), problemStatement: String(i.problemStatement || r.solution_prepare.statement), learningGoal: String(i.learningGoal || ""), steps: m }, Q = m.map((S) => {
            const A = { ...S };
            return delete A.teacherQuestion, delete A.teacherPrompt, A;
          });
          return { lesson: _, boardSteps: Q, question: m[0].teacherQuestion };
        })();
        r.solution_ai_parse = n, s.customCodeResult = n;
      }
      {
        const o = q({ email: "", problemId: "{{ stepResults.solution_prepare.problemId }}", promptVersion: "{{ stepResults.solution_prepare.promptVersion }}", solution: "{{ stepResults.solution_ai_parse.lesson }}", solutionMode: "{{ stepResults.solution_prepare.mode }}", strategyId: "{{ stepResults.solution_strategy_parse.strategyId }}", strategySnapshot: "{{ stepResults.solution_strategy_parse.strategy }}", strategyVersion: "{{ stepResults.solution_strategy_parse.strategyVersion }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
        delete o.email;
        const l = [void 0, o.problemId, o.solutionMode, o.promptVersion, o.solution, o.strategyId, o.strategyVersion, o.strategySnapshot], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let i;
        if (typeof a == "function")
          i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarStoreStudentSolution", parameters: l, namedParameters: o, signal: t.signal });
        else {
          const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreStudentSolution", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
          i = m.data;
        }
        r.solution_store = i, s.queryResult = i;
      }
      return u("studentLesson", r.solution_ai_parse.lesson), u("boardSteps", r.solution_ai_parse.boardSteps), u("activeStep", 0), u("progressPercent", 0), u("teacherQuestionPrompt", r.solution_ai_parse.question.prompt), u("teacherQuestionOptions", r.solution_ai_parse.question.options), u("teacherQuestionCorrectValue", r.solution_ai_parse.question.correctValue), u("teacherQuestionExplanation", r.solution_ai_parse.question.explanation), u("lessonSource", "New solution generated with the approved strategy and saved for reuse"), u("isLessonLoading", !1), O("solutionRequested", { courseContext: g.courseContext, locale: g.locale, problem: g.problem }, !1).catch((n) => console.error("Module output delivery failed", n)), p.studentLesson;
    } else {
      {
        const o = q({ email: "", problemId: "{{ stepResults.solution_prepare.problemId }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
        delete o.email;
        const l = [void 0, o.problemId], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let i;
        if (typeof a == "function")
          i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarResolveStudentStrategy", parameters: l, namedParameters: o, signal: t.signal });
        else {
          const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveStudentStrategy", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
          i = m.data;
        }
        r.solution_strategy = i, s.queryResult = i;
      }
      {
        t.event;
        const n = await (async () => {
          const l = (Array.isArray(r.solution_strategy) ? r.solution_strategy : [])[0] || {}, a = l.result && typeof l.result == "object" ? l.result : {};
          return { strategyId: String(a.strategyId || ""), strategyVersion: Math.max(1, Number(a.strategyVersion || 1)), strategy: a.strategy && typeof a.strategy == "object" ? a.strategy : { preferredMethod: "Explain from definitions, show every algebraic step, and verify the final answer.", explanationDepth: "detailed" } };
        })();
        r.solution_strategy_parse = n, s.customCodeResult = n;
      }
      {
        t.event;
        const n = await (async () => {
          const o = r.solution_prepare, l = r.solution_strategy_parse;
          return ["You are a college mathematics professor creating an interactive Blackboard lesson.", "Return JSON only with keys title, lessonKind, problemLabel, problemStatement, learningGoal, steps.", "Create at least three steps. Every step must contain id, title, narration, explanation, simpleExplanation, why, commonMistake, content, teacherPrompt, and teacherQuestion.", "Every teacherQuestion must contain prompt, exactly four options with label and value, one correctValue, and explanation.", "Generate every human-readable field in " + (o.locale === "hi" ? "Hindi" : o.locale === "ta" ? "Tamil" : "English") + " only. Keep mathematical notation and JSON keys unchanged.", "Use this approved hierarchy strategy: " + JSON.stringify(l.strategy), "Problem: " + o.statement, "Solution mode: " + o.mode].join(`
`);
        })();
        r.solution_prompt = n, s.customCodeResult = n;
      }
      {
        const n = { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }, o = q({ prompt: "{{ stepResults.solution_prompt }}" }, n) || {}, l = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtptmzag000004jix1ok7kyi", apiId: "geminiStudentProblemSolution", argumentValues: o, context: n }), signal: t.signal || AbortSignal.timeout(3e4) }), a = await l.json().catch(() => ({}));
        if (!l.ok) throw new Error(a.error || "Protected API request failed (" + l.status + ")");
        const i = a.data;
        r.solution_ai = i, s.apiResult = i;
      }
      {
        t.event;
        const n = await (async () => {
          const l = (r.solution_ai || {})?.candidates?.[0]?.content?.parts, a = Array.isArray(l) ? l.map((S) => String(S?.text || "")).join("") : "";
          if (!a.trim()) throw new Error("Gemini returned no lesson.");
          const i = JSON.parse(a.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), d = Array.isArray(i.steps) ? i.steps : [];
          if (!d.length) throw new Error("Gemini returned no lesson steps.");
          const m = d.map((S, A) => {
            const w = S?.teacherQuestion || {}, j = Array.isArray(w.options) ? w.options.slice(0, 4) : [];
            if (j.length !== 4) throw new Error("Every teacher check must provide four choices.");
            const U = new Set(j.map((M) => String(M.value))).has(String(w.correctValue)) ? String(w.correctValue) : String(j[0].value);
            return { ...S, id: String(S.id || "step-" + (A + 1)), teacherPrompt: String(w.prompt || S.teacherPrompt || ""), teacherQuestion: { prompt: String(w.prompt || S.teacherPrompt || ""), options: j.map((M) => ({ label: String(M.label || ""), value: String(M.value || "") })), correctValue: U, explanation: String(w.explanation || "") } };
          }), _ = { title: String(i.title || "Worked solution"), lessonKind: "worked-example", problemLabel: String(i.problemLabel || "Problem"), problemStatement: String(i.problemStatement || r.solution_prepare.statement), learningGoal: String(i.learningGoal || ""), steps: m }, Q = m.map((S) => {
            const A = { ...S };
            return delete A.teacherQuestion, delete A.teacherPrompt, A;
          });
          return { lesson: _, boardSteps: Q, question: m[0].teacherQuestion };
        })();
        r.solution_ai_parse = n, s.customCodeResult = n;
      }
      {
        const o = q({ email: "", problemId: "{{ stepResults.solution_prepare.problemId }}", promptVersion: "{{ stepResults.solution_prepare.promptVersion }}", solution: "{{ stepResults.solution_ai_parse.lesson }}", solutionMode: "{{ stepResults.solution_prepare.mode }}", strategyId: "{{ stepResults.solution_strategy_parse.strategyId }}", strategySnapshot: "{{ stepResults.solution_strategy_parse.strategy }}", strategyVersion: "{{ stepResults.solution_strategy_parse.strategyVersion }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
        delete o.email;
        const l = [void 0, o.problemId, o.solutionMode, o.promptVersion, o.solution, o.strategyId, o.strategyVersion, o.strategySnapshot], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let i;
        if (typeof a == "function")
          i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarStoreStudentSolution", parameters: l, namedParameters: o, signal: t.signal });
        else {
          const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreStudentSolution", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
          i = m.data;
        }
        r.solution_store = i, s.queryResult = i;
      }
      return u("studentLesson", r.solution_ai_parse.lesson), u("boardSteps", r.solution_ai_parse.boardSteps), u("activeStep", 0), u("progressPercent", 0), u("teacherQuestionPrompt", r.solution_ai_parse.question.prompt), u("teacherQuestionOptions", r.solution_ai_parse.question.options), u("teacherQuestionCorrectValue", r.solution_ai_parse.question.correctValue), u("teacherQuestionExplanation", r.solution_ai_parse.question.explanation), u("lessonSource", "New solution generated with the approved strategy and saved for reuse"), u("isLessonLoading", !1), O("solutionRequested", { courseContext: g.courseContext, locale: g.locale, problem: g.problem }, !1).catch((n) => console.error("Module output delivery failed", n)), p.studentLesson;
    }
  }
  async function We(e = {}) {
    const t = e || {}, s = {}, r = {};
    u("progressPercent", 100);
    {
      const o = q({ activeStep: "{{ state.activeStep }}", email: "", locale: "{{ inputs.locale }}", problemId: "{{ inputs.problem.id }}", progressPercent: 100, status: "completed" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
      delete o.email;
      const l = [void 0, o.problemId, o.locale, o.activeStep, o.progressPercent, o.status], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
      let i;
      if (typeof a == "function")
        i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarSaveStudentProgress", parameters: l, namedParameters: o, signal: t.signal });
      else {
        const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveStudentProgress", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
        if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
        i = m.data;
      }
      r.complete_persist = i, s.queryResult = i;
    }
    O("problemCompleted", { problemId: g.problem.id, progressPercent: 100 }, !1).catch((n) => console.error("Module output delivery failed", n));
  }
  async function Ke(e = {}) {
    O("backRequested", { courseContext: g.courseContext }, !1).catch((t) => console.error("Module output delivery failed", t));
  }
  async function $e(e = {}) {
    const t = e || {}, s = {};
    {
      t.event;
      const r = await (async () => {
        const n = p.studentLesson && typeof p.studentLesson == "object" ? p.studentLesson : g.lesson && typeof g.lesson == "object" ? g.lesson : {}, o = Array.isArray(n.steps) ? n.steps : [], l = Math.max(0, Number(p.activeStep || 0)), a = Math.max(0, Math.min(Math.max(0, o.length - 1), l)), i = o[a] || o[0] || {}, d = i.teacherQuestion && typeof i.teacherQuestion == "object" ? i.teacherQuestion : { prompt: String(i.teacherPrompt || ""), options: [], correctValue: "", explanation: "" };
        return { index: a, prompt: String(d.prompt || ""), options: Array.isArray(d.options) ? d.options : [], correctValue: String(d.correctValue || ""), explanation: String(d.explanation || ""), progress: Math.max(0, Math.min(100, Number(p.progressPercent || g.initialProgressPercent || 0))) };
      })();
      s.init_read = r;
    }
    u("activeStep", s.init_read.index), u("teacherQuestionPrompt", s.init_read.prompt), u("teacherQuestionOptions", s.init_read.options), u("teacherQuestionCorrectValue", s.init_read.correctValue), u("teacherQuestionExplanation", s.init_read.explanation), u("selectedTeacherAnswer", ""), u("teacherAnswerFeedback", ""), u("progressPercent", s.init_read.progress);
  }
  async function Ze(e = {}) {
    const t = e || {}, s = {}, r = {};
    {
      t.event;
      const n = await (async () => {
        const o = Array.isArray(p.studentLesson?.steps) ? p.studentLesson.steps : [], l = Math.max(0, Math.min(Math.max(0, o.length - 1), Number(t.stepIndex ?? t.index ?? 0))), a = o[l] || {}, i = a.teacherQuestion && typeof a.teacherQuestion == "object" ? a.teacherQuestion : { prompt: String(a.teacherPrompt || ""), options: [], correctValue: "", explanation: "" }, d = o.length ? Math.round((l + 1) / o.length * 100) : 0;
        return { index: l, stepId: String(a.id || "step-" + (l + 1)), prompt: String(i.prompt || ""), options: Array.isArray(i.options) ? i.options : [], correctValue: String(i.correctValue || ""), explanation: String(i.explanation || ""), progress: d, completed: !!(o.length && l === o.length - 1) };
      })();
      r.step_read = n, s.customCodeResult = n;
    }
    u("activeStep", r.step_read.index), u("teacherQuestionPrompt", r.step_read.prompt), u("teacherQuestionOptions", r.step_read.options), u("teacherQuestionCorrectValue", r.step_read.correctValue), u("teacherQuestionExplanation", r.step_read.explanation), u("selectedTeacherAnswer", ""), u("teacherAnswerFeedback", ""), u("progressPercent", r.step_read.progress);
    {
      const o = q({ activeStep: "{{ stepResults.step_read.index }}", email: "", locale: "{{ inputs.locale }}", problemId: "{{ inputs.problem.id }}", progressPercent: "{{ stepResults.step_read.progress }}", status: "{{ stepResults.step_read.completed ? 'completed' : 'in_progress' }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
      delete o.email;
      const l = [void 0, o.problemId, o.locale, o.activeStep, o.progressPercent, o.status], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
      let i;
      if (typeof a == "function")
        i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarSaveStudentProgress", parameters: l, namedParameters: o, signal: t.signal });
      else {
        const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveStudentProgress", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
        if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
        i = m.data;
      }
      r.step_persist = i, s.queryResult = i;
    }
    O("lessonProgressed", { completed: r.step_read.completed, problemId: g.problem.id, progressPercent: r.step_read.progress, stepIndex: r.step_read.index }, !1).catch((n) => console.error("Module output delivery failed", n));
  }
  async function ye(e = {}) {
    const t = e || {}, s = {};
    {
      t.event;
      const r = await (async () => Date.now())();
      s.session_now = r;
    }
    u("sessionStartedAt", s.session_now), await Z({});
  }
  async function Ue(e = {}) {
    const t = e || {}, s = {}, r = {};
    {
      t.event;
      const n = await (async () => {
        const o = String(t.value || ""), l = String(p.teacherQuestionCorrectValue || ""), a = !!o && o === l, i = String(g.locale || "en").toLowerCase(), d = i === "hi" ? a ? "सही उत्तर।" : "फिर से प्रयास करें।" : i === "ta" ? a ? "சரியான பதில்." : "மீண்டும் முயற்சிக்கவும்." : a ? "Correct." : "Try again.", _ = (Array.isArray(g.lesson?.steps) ? g.lesson.steps : [])[Number(p.activeStep || 0)] || {};
        return { value: o, correct: a, stepId: String(_.id || ""), feedback: d + (p.teacherQuestionExplanation ? " " + String(p.teacherQuestionExplanation) : "") };
      })();
      r.answer_read = n, s.customCodeResult = n;
    }
    u("selectedTeacherAnswer", r.answer_read.value), u("teacherAnswerFeedback", r.answer_read.feedback);
    {
      const o = q({ details: { progressPercent: "{{ state.progressPercent }}", topicPath: "{{ inputs.courseContext.topicPath }}" }, email: "", isCorrect: "{{ stepResults.answer_read.correct }}", locale: "{{ inputs.locale }}", problemId: "{{ inputs.problem.id }}", selectedValue: "{{ stepResults.answer_read.value }}", stepId: "{{ stepResults.answer_read.stepId }}" }, { args: t, inputs: g, state: p, sharedState: k, applicationState: I, pageState: E, pageData: R, serverData: P, vars: s, stepResults: r }) || {};
      delete o.email;
      const l = [void 0, o.problemId, o.locale, o.stepId, o.selectedValue, o.isCorrect, o.details], a = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
      let i;
      if (typeof a == "function")
        i = await a({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarRecordStudentAttempt", parameters: l, namedParameters: o, signal: t.signal });
      else {
        const d = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarRecordStudentAttempt", parameters: l, namedParameters: o }), signal: t.signal }), m = await d.json().catch(() => ({}));
        if (!d.ok || m.success === !1) throw new Error(m.error || "Database query failed (" + d.status + ")");
        i = m.data;
      }
      r.answer_persist = i, s.queryResult = i;
    }
    O("answerSubmitted", { correct: r.answer_read.correct, locale: g.locale, problemId: g.problem.id, selectedValue: r.answer_read.value, stepId: r.answer_read.stepId }, !1).catch((n) => console.error("Module output delivery failed", n));
  }
  const He = {
    requestNextProblem: Ge,
    recordStudentSessionTime: ge,
    requestStudentSolution: Z,
    completeStudentProblem: We,
    requestStudentBack: Ke,
    initializeStudentLesson: $e,
    selectStudentStep: Ze,
    startStudentSession: ye,
    selectStudentAnswer: Ue
  }, Ye = {
    requestNextProblem: [],
    recordStudentSessionTime: ["activeSeconds"],
    requestStudentSolution: [],
    completeStudentProblem: [],
    requestStudentBack: [],
    initializeStudentLesson: [],
    selectStudentStep: ["stepIndex", "index"],
    startStudentSession: [],
    selectStudentAnswer: ["value"]
  }, N = (e, t = {}, s = []) => {
    const r = He[e];
    if (r) {
      const i = Ye[e] || [];
      return r(Object.fromEntries(i.map((d, m) => {
        const _ = Object.prototype.hasOwnProperty.call(t, d) ? t[d] : void 0;
        return [d, (_ === "" || _ === void 0) && s[m] !== void 0 ? s[m] : d === "event" && (_ === "" || _ === void 0) ? s[0] : _];
      })));
    }
    const n = Se?.[e];
    if (typeof n == "function")
      return n(Object.keys(t).length > 0 ? t : s[0]);
    const [o, l] = String(e).split("."), a = typeof globalThis < "u" ? globalThis[o]?.[l] : void 0;
    if (typeof a == "function") return a(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, z = H(/* @__PURE__ */ new Map()), be = F((e, t, s, r) => {
    const n = z.current.get(e);
    if (t === "exhaust" && n?.promise) return n.promise;
    t === "takeLatest" && n?.controller?.abort();
    const o = new AbortController(), l = () => Promise.resolve().then(() => s(o.signal)), a = t === "queue" && n?.promise ? n.promise.catch(() => {
    }).then(l) : l();
    return z.current.set(e, { controller: o, promise: a }), a.catch((i) => {
      i?.name !== "AbortError" && console.error(r, i);
    }).finally(() => {
      z.current.get(e)?.promise === a && z.current.delete(e);
    }), a;
  }, []);
  V(() => () => {
    for (const e of z.current.values()) e.controller?.abort();
    z.current.clear();
  }, []), V(() => {
    be("student_mountstartStudentSession", "takeLatest", (e) => ye({}), "Module mount lifecycle failed:");
  }, []);
  const fe = H(!1);
  return V(() => {
    if (!fe.current) {
      fe.current = !0;
      return;
    }
    ie(structuredClone("")), pe(structuredClone("Select one answer.")), be("student_problem_changerequestStudentSolution", "takeLatest", (e) => Z({ signal: e }), "Module input lifecycle failed:");
  }, [te, oe]), V(() => () => {
    ge({}).catch((e) => console.error("Module unmount lifecycle failed:", e));
  }, []), /* @__PURE__ */ x("div", { ref: G, className: "rudra-module-wrapper", children: y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
    "      ",
    /* @__PURE__ */ h(et, { id: "root", className: "rs-student-workspace", as: "main", maxWidth: "full", children: [
      "      ",
      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
        "      ",
        /* @__PURE__ */ h(L, { id: "stack", className: "flex flex-col rs-student-stack", children: [
          "      ",
          y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
            "      ",
            /* @__PURE__ */ h(L, { id: "topbar", className: "flex flex-wrap rs-topbar", children: [
              "      ",
              y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                "      ",
                /* @__PURE__ */ x(J, { id: "back_button", label: "← Back to course", theme: "auto", variant: "ghost", onAction: (...e) => N("requestStudentBack", {}, e) })
              ] }),
              y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                "      ",
                /* @__PURE__ */ h(L, { id: "course_meta", className: "flex flex-col rs-course-meta", children: [
                  "      ",
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(C, { id: "course_title", className: "rs-course-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics course" : e)(g?.courseContext?.courseTitle) })
                  ] }),
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ h(L, { id: "course_context", className: "flex flex-wrap rs-course-context", children: [
                      "      ",
                      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                        "      ",
                        /* @__PURE__ */ x(C, { id: "professor_name", className: "rs-muted", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(g?.courseContext?.professorName) })
                      ] }),
                      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                        "      ",
                        /* @__PURE__ */ x(C, { id: "context_separator", className: "rs-separator", as: "span", content: "·" })
                      ] }),
                      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                        "      ",
                        /* @__PURE__ */ x(C, { id: "section_title", className: "rs-muted", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course section" : e)(g?.courseContext?.sectionTitle), as: "span" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                "      ",
                /* @__PURE__ */ h(L, { id: "time_badge", className: "flex rs-time-badge", children: [
                  "      ",
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(C, { id: "time_value", className: "rs-time-value", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.remainingMinutes) })
                  ] }),
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(C, { id: "time_unit", className: "rs-time-unit", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "min left" : e)(B?.i18n?.minutesLeft) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          y(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ h(b, { children: [
            "      ",
            /* @__PURE__ */ x(Y, { id: "loading_alert", title: "Preparing your lesson", variant: "info", appearance: "soft", live: "polite" })
          ] }),
          y(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(le)) && /* @__PURE__ */ h(b, { children: [
            "      ",
            /* @__PURE__ */ x(Y, { id: "error_alert", live: "assertive", title: "Lesson unavailable", variant: "danger", appearance: "soft" })
          ] }),
          y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
            "      ",
            /* @__PURE__ */ x(Y, { id: "source_alert", live: "polite", title: "Solution source", variant: "success", appearance: "soft" })
          ] }),
          y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
            "      ",
            /* @__PURE__ */ h(L, { id: "lesson_grid", className: "grid rs-lesson-grid", children: [
              "      ",
              y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                "      ",
                /* @__PURE__ */ h(L, { id: "board_panel", className: "block rs-board-panel", children: [
                  "      ",
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(ot, { id: "board", onNext: (...e) => N("selectStudentStep", {}, e), boardOptions: { allowStepSelection: !0, showCaptions: !0, showControls: !0, showHeader: !0, showLearningGoal: !0, showNextControl: !0, showPlaybackControl: !0, showPopup: !0, showProblem: !0, showProgress: !0, showRepeatControl: !0, showSpeed: !0, showStepNumbers: !0, showTeacherButton: !1 }, showStepPopup: !0, popupInitiallyOpen: !1, playing: !1, speedLabel: "Normal", steps: /* @__PURE__ */ ((e) => e === void 0 ? [{ commonMistake: "Do not change the off-diagonal entries.", content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }], explanation: "Eigenvalues satisfy det(A − λI) = 0.", id: "step-1", narration: "Subtract lambda from the diagonal.", simpleExplanation: "Make the matrix singular.", title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A − λI is singular." }, { commonMistake: "Keep the signs consistent when expanding.", content: [{ label: "Polynomial", latex: "\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)", type: "equation", visualText: "λ² − 4λ + 3 = (λ − 1)(λ − 3)" }], explanation: "The equation becomes λ² − 4λ + 3 = 0.", id: "step-2", narration: "Expand the determinant and factor the polynomial.", simpleExplanation: "Find two numbers whose product is three and sum is four.", title: "Expand and factor", why: "Factoring reveals the roots directly." }, { commonMistake: "Do not verify only one root.", content: [{ text: "The eigenvalues are λ = 1 and λ = 3.", tone: "success", type: "note" }], explanation: "Both values satisfy the characteristic equation.", id: "step-3", narration: "Check that each result makes the determinant zero.", simpleExplanation: "Put each value back into the equation.", title: "Verify the result", why: "Verification confirms that no algebraic error changed the answer." }] : e)(ce), title: /* @__PURE__ */ ((e) => e === void 0 ? "Eigenvalues of a 2 × 2 matrix" : e)(D?.title), activeStep: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(re), learningGoal: /* @__PURE__ */ ((e) => e === void 0 ? "Understand and verify every step." : e)(D?.learningGoal), onStepSelect: (...e) => N("selectStudentStep", {}, e), problemLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(D?.problemLabel), editOperations: [], stepDurationMs: 5500, lessonKind: /* @__PURE__ */ ((e) => e === void 0 ? "worked-example" : e)(D?.lessonKind), autoAdvance: !1, reducedMotion: !1, captionsEnabled: !0, problemStatement: /* @__PURE__ */ ((e) => e === void 0 ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : e)(D?.problemStatement) })
                  ] })
                ] })
              ] }),
              y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                "      ",
                /* @__PURE__ */ h(tt, { id: "question_panel", className: "rs-question-card", theme: "auto", as: "aside", children: [
                  "      ",
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(C, { id: "question_kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Teacher check" : e)(B?.i18n?.teacherCheck) })
                  ] }),
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(C, { id: "question_title", className: "rs-question-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select the best answer." : e)(ue) })
                  ] }),
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(st, { id: "question_choices", onChangeValue: (...e) => N("selectStudentAnswer", {}, e), name: "studentAnswer", size: "md", label: "Choose one answer", value: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(ae), layout: "vertical", options: /* @__PURE__ */ ((e) => e === void 0 ? [{ label: "det(A − λI) = 0", value: "a" }, { label: "det(A + λI) = 1", value: "b" }, { label: "A + I = 0", value: "c" }, { label: "trace(A) = 0", value: "d" }] : e)(ne), colorScheme: "emerald" })
                  ] }),
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ x(C, { id: "answer_feedback", className: "rs-answer-feedback", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select one answer." : e)(de) })
                  ] }),
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ h(L, { id: "progress_box", className: "flex flex-col rs-progress-box", children: [
                      "      ",
                      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                        "      ",
                        /* @__PURE__ */ x(C, { id: "progress_label", className: "rs-muted", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Lesson progress" : e)(B?.i18n?.progress) })
                      ] }),
                      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                        "      ",
                        /* @__PURE__ */ x(C, { id: "progress_value", className: "rs-progress-value", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(me) })
                      ] })
                    ] })
                  ] }),
                  y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                    "      ",
                    /* @__PURE__ */ h(L, { id: "question_actions", className: "flex flex-wrap rs-question-actions", children: [
                      "      ",
                      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                        "      ",
                        /* @__PURE__ */ x(J, { id: "complete_button", onAction: (...e) => N("completeStudentProblem", {}, e), label: "Mark complete", theme: "auto", variant: "primary" })
                      ] }),
                      y(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(b, { children: [
                        "      ",
                        /* @__PURE__ */ x(J, { id: "next_button", label: "Next problem", theme: "auto", variant: "outline", onAction: (...e) => N("requestNextProblem", {}, e) })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          y(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem?.statement)) && /* @__PURE__ */ h(b, { children: [
            "      ",
            /* @__PURE__ */ x(J, { id: "request_solution", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.loading), variant: "primary", onAction: (...e) => N("requestStudentSolution", {}, e), loadingText: "Preparing lesson…", label: "Load solution", theme: "auto" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  dt as default
};
