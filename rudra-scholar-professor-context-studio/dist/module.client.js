import { jsx as T, jsxs as y, Fragment as f } from "react/jsx-runtime";
import { useState as v, useEffect as re, useRef as me, useCallback as le } from "react";
import { Box as U } from "@rudra-studio/rudra-layout";
import { Badge as Hs, Typography as K, Alert as gr, Card as fr, Button as H } from "@rudra-studio/rudra-core";
import { Select as Sr, Input as Bs, Textarea as Ce, RadioGroup as $s } from "@rudra-studio/rudra-form";
import { BlackboardLesson as Ws } from "@rudra-studio/chalkmind-math";
import { TreeView as vr } from "@rudra-studio/rudra-widgets";
function aa(c) {
  const ce = {}, k = c.serverData || c.serverState || {}, Y = c.sharedState || {}, J = c.applicationState || k.applicationState || {}, Z = c.pageState || k.pageState || {}, L = c.pageData || k.pageData || {}, xr = {
    ...c.runtime?.functions || {},
    ...c.runtime?.actions || {},
    ...c.functions || {},
    ...c.actions || {}
  };
  c.$route ?? c.route ?? c.data?.$route ?? c.data?.route ?? c.runtime?.data?.$route ?? c.runtime?.route ?? k?.$route ?? k?.route, c.$params ?? c.routeParams ?? c.params ?? c.data?.$params ?? c.data?.routeParams ?? c.data?.params ?? c.runtime?.data?.$params ?? c.runtime?.route?.params ?? c.runtime?.routeParams ?? c.runtime?.params ?? k?.$params ?? k?.routeParams ?? k?.params, c.$query ?? c.queryParams ?? c.query ?? c.data?.$query ?? c.data?.queryParams ?? c.data?.query ?? c.runtime?.data?.$query ?? c.runtime?.route?.query ?? c.runtime?.queryParams ?? c.runtime?.query ?? k?.$query ?? k?.queryParams ?? k?.query, c.$auth ?? c.auth ?? c.data?.$auth ?? c.data?.auth ?? c.runtime?.data?.$auth ?? c.runtime?.authInfo ?? c.runtime?.auth ?? k?.$auth ?? k?.auth, c.$config ?? c.config ?? c.data?.$config ?? c.data?.config ?? c.runtime?.data?.$config ?? c.runtime?.config ?? k?.$config ?? k?.config, c.$env ?? c.env ?? c.data?.$env ?? c.data?.env ?? c.runtime?.data?.$env ?? c.runtime?.env ?? k?.$env ?? k?.env, c.$locale ?? c.locale ?? c.data?.$locale ?? c.data?.locale ?? c.runtime?.data?.$locale ?? c.runtime?.locale ?? k?.$locale ?? k?.locale, c.$translations ?? c.translations ?? c.data?.$translations ?? c.data?.translations ?? c.runtime?.data?.$translations ?? c.runtime?.translations ?? k?.$translations ?? k?.translations, c.$i18n ?? c.i18n ?? c.data?.$i18n ?? c.data?.i18n ?? c.runtime?.data?.$i18n ?? c.runtime?.i18n ?? k?.$i18n ?? k?.i18n;
  const te = c.$theme ?? c.theme ?? c.data?.$theme ?? c.runtime?.data?.$theme ?? c.runtime?.theme, Re = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Ys, Ne] = v(() => te ?? Re());
  re(() => {
    te != null && Ne(te);
  }, [te]), re(() => {
    if (te != null || typeof document > "u") return;
    const s = document.documentElement, r = (n) => Ne(n?.detail?.theme ?? Re()), e = new MutationObserver(r);
    return e.observe(s, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      e.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [te]);
  const pe = me(null), [be, ye] = v("lg");
  re(() => {
    if (!pe.current) return;
    const s = new ResizeObserver((r) => {
      for (let e of r) {
        const n = e.contentRect.width;
        n < 768 ? ye("sm") : n < 1024 ? ye("md") : ye("lg");
      }
    });
    return s.observe(pe.current), () => s.disconnect();
  }, []);
  const I = le((s) => typeof s != "object" || s === null ? s : be === "sm" ? s.sm !== void 0 ? s.sm : s.md !== void 0 ? s.md : s.lg : be === "md" ? s.md !== void 0 ? s.md : s.sm !== void 0 ? s.sm : s.lg : s.lg !== void 0 ? s.lg : s.md !== void 0 ? s.md : s.sm, [be]), S = (s) => Array.isArray(s) ? s.length > 0 : typeof s == "string" ? s.trim() !== "" && s.trim().toLowerCase() !== "false" : !!s, De = c.contextVersionKey !== void 0 ? c.contextVersionKey : c.data?.contextVersionKey !== void 0 ? c.data.contextVersionKey : "", he = c.accessProfile !== void 0 ? c.accessProfile : c.data?.accessProfile !== void 0 ? c.data.accessProfile : {}, ke = c.locale !== void 0 ? c.locale : c.data?.locale !== void 0 ? c.data.locale : "en", je = c.contextVersionNumber !== void 0 ? c.contextVersionNumber : c.data?.contextVersionNumber !== void 0 ? c.data.contextVersionNumber : 1, Le = c.returnPath !== void 0 ? c.returnPath : c.data?.returnPath !== void 0 ? c.data.returnPath : "/professor/context", Me = c.syllabusText !== void 0 ? c.syllabusText : c.data?.syllabusText !== void 0 ? c.data.syllabusText : void 0, ge = c.userRole !== void 0 ? c.userRole : c.data?.userRole !== void 0 ? c.data.userRole : "", fe = c.verificationStatus !== void 0 ? c.verificationStatus : c.data?.verificationStatus !== void 0 ? c.data.verificationStatus : "pending", Oe = c.contextDraft !== void 0 ? c.contextDraft : c.data?.contextDraft !== void 0 ? c.data.contextDraft : {}, Se = c.authenticated !== void 0 ? c.authenticated : c.data?.authenticated !== void 0 ? c.data.authenticated : !1, M = { contextVersionKey: De, accessProfile: he, locale: ke, contextVersionNumber: je, returnPath: Le, syllabusText: Me, userRole: ge, verificationStatus: fe, contextDraft: Oe, authenticated: Se }, [Ke, Fe] = v(() => structuredClone("Select a saved syllabus or save this draft.")), [wr, Ve] = v(() => structuredClone("")), [ve, _r] = v(() => structuredClone(!1)), [Qe, ze] = v(() => structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), [Pr, Tr] = v(() => structuredClone("")), [Ge, Ue] = v(() => structuredClone([])), [He, Be] = v(() => structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), [Ir, Ar] = v(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [Er, $e] = v(() => structuredClone("")), [We, qr] = v(() => structuredClone("Engineering Mathematics I")), [W, Cr] = v(() => structuredClone({ busy: !1, lessonEmpty: !0, previewDisabled: !0, unavailable: !0, versionDisabled: !0 })), [Ye, Rr] = v(() => structuredClone("")), [Je, Ze] = v(() => structuredClone([])), [Nr, Xe] = v(() => structuredClone(0)), [et, tt] = v(() => structuredClone("")), [Dr, kr] = v(() => structuredClone(["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."])), [rt, st] = v(() => structuredClone("Find the eigenvalues of a 2 × 2 matrix")), [at, jr] = v(() => structuredClone("Review the example strategy, then approve it for the selected Topic.")), [Lr, ot] = v(() => structuredClone({})), [nt, it] = v(() => structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), [Mr, Or] = v(() => structuredClone(!0)), [Kr, Fr] = v(() => structuredClone(`Programme · B.E. Mathematics
  Semester · Semester 1
    Subject · Engineering Mathematics I
      Unit · Unit 1 · Matrices and systems
        Topic · Matrix operations
        Topic · Eigenvalues and diagonalisation`)), [lt, Vr] = v(() => structuredClone([{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }])), [ct, ut] = v(() => structuredClone(!0)), [Qr, dt] = v(() => structuredClone("")), [xe, zr] = v(() => structuredClone(!1)), [Gr, mt] = v(() => structuredClone("")), [Ur, pt] = v(() => structuredClone("")), [bt, yt] = v(() => structuredClone("")), [Hr, Br] = v(() => structuredClone("")), [$r, ht] = v(() => structuredClone("")), [Wr, gt] = v(() => structuredClone("")), [ft, St] = v(() => structuredClone("Professor approval required")), [Yr, vt] = v(() => structuredClone([])), [Jr, Zr] = v(() => structuredClone(!1)), [Xr, xt] = v(() => structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), [wt, _t] = v(() => structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), [Pt, Tt] = v(() => structuredClone("Select one answer.")), [es, It] = v(() => structuredClone("")), [ts, rs] = v(() => structuredClone("A is a 2 × 2 matrix, so I must have the same dimensions.")), [At, Et] = v(() => structuredClone("Representative problem · Linear algebra")), [qt, Ct] = v(() => structuredClone(!1)), [Rt, ss] = v(() => structuredClone(!1)), [Nt, Dt] = v(() => structuredClone([])), [kt, jt] = v(() => structuredClone("Selected topic problems")), [Lt, as] = v(() => structuredClone([])), [Mt, os] = v(() => structuredClone("")), [we, ns] = v(() => structuredClone(`Preferred method
Characteristic-polynomial method

Required steps
1. Classify the problem and state the goal.
2. Name the governing theorem or definition before using it.
3. Show the determinant or algebraic expansion.
4. Solve symbolically before substituting numerical conclusions.
5. Verify the final result.

Avoid
• Do not skip the characteristic equation.
• Do not state roots without verification.

Verification
• Substitute each result into the defining equation.
• State why the verification is sufficient.

Teaching notes
• Prefer a direct 2×2 method when it is clearer than row reduction.`)), [_e, is] = v(() => structuredClone(!1)), [ls, Ot] = v(() => structuredClone({})), [Kt, cs] = v(() => structuredClone("Review the proposed hierarchy, add problems, then set it as context.")), [Ft, Vt] = v(() => structuredClone("Verification pending")), [Qt, zt] = v(() => structuredClone(0)), [Gt, us] = v(() => structuredClone(!1)), [oe, Ut] = v(() => structuredClone(!0)), [Ht, ds] = v(() => structuredClone("What size identity matrix is required here?")), [ne, Bt] = v(() => structuredClone(!1)), [$t, Wt] = v(() => structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), [ms, ps] = v(() => structuredClone(0)), [Yt, bs] = v(() => structuredClone("detailed")), [Jt, Zt] = v(() => structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), [Xt, er] = v(() => structuredClone("")), [tr, rr] = v(() => structuredClone(!1)), [ys, sr] = v(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [Pe, ar] = v(() => structuredClone("Select a problem to load its saved solution.")), [or, nr] = v(() => structuredClone("Sign in with an approved professor account to use this studio.")), [ie, ir] = v(() => structuredClone(!1)), [hs, gs] = v(() => structuredClone("b")), [fs, Ss] = v(() => structuredClone(`1. Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].
2. Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.
3. Diagonalise A = [[4, 1], [2, 3]] and verify the result.`)), [ue, lr] = v(() => structuredClone(!1)), i = { syllabusStatus: Ke, selectedTopicId: wr, isLoadingSyllabi: ve, blackboardLearningGoal: Qe, resolvedStrategyId: Pr, selectedProblemIds: Ge, syllabusDraftText: He, strategyDraft: Ir, selectedTopicPath: Er, syllabusTitle: We, studioControls: W, newProblemText: Ye, selectedHierarchyIds: Je, savedSyllabusVersion: Nr, selectedTeacherAnswer: et, suggestedProblems: Dr, blackboardTitle: rt, strategyStatus: at, contentPreviewPacket: Lr, hierarchyItems: nt, hasResolvedStrategy: Mr, finalHierarchyText: Kr, teacherQuestionOptions: lt, showAccessGate: ct, selectedProblemText: Qr, isSavingStrategy: xe, savedSyllabusKey: Gr, savedProblemId: Ur, selectedSyllabusId: bt, selectedTopicProblemsText: Hr, savedContextKey: $r, selectedTopicTitle: Wr, accessGateTitle: ft, selectedTopicProblems: Yr, isOpeningSyllabus: Jr, finalHierarchy: Xr, blackboardProblemStatement: wt, teacherAnswerFeedback: Pt, selectedProblemStatement: es, teacherQuestionExplanation: ts, blackboardProblemLabel: At, isSyllabusSetupCollapsed: qt, showNewProblemForm: Rt, selectedTopicProblemItems: Nt, selectedTopicHeading: kt, savedSyllabusOptions: Lt, syllabusDescription: Mt, strategyDraftText: we, isSavingSyllabus: _e, problemSolution: ls, structureStatus: Kt, accessBadgeLabel: Ft, activeStep: Qt, isGeneratingStructure: Gt, showSyllabusSetup: oe, teacherQuestionPrompt: Ht, hasSelectedTopic: ne, blackboardSteps: $t, resolvedStrategyVersion: ms, newProblemSolutionMode: Yt, blackboardLesson: Jt, problemSolutionText: Xt, canUseStudio: tr, resolvedStrategy: ys, problemResolutionStatus: Pe, accessGateMessage: or, hasProblemSolution: ie, teacherQuestionCorrectValue: hs, suggestedProblemsText: fs, isResolvingProblem: ue }, o = le((s, r) => {
    switch (s) {
      case "syllabusStatus": {
        const e = typeof r == "function" ? r(i.syllabusStatus) : r;
        return i.syllabusStatus = e, Fe(e), e;
      }
      case "selectedTopicId": {
        const e = typeof r == "function" ? r(i.selectedTopicId) : r;
        return i.selectedTopicId = e, Ve(e), e;
      }
      case "isLoadingSyllabi": {
        const e = typeof r == "function" ? r(i.isLoadingSyllabi) : r;
        return i.isLoadingSyllabi = e, _r(e), e;
      }
      case "blackboardLearningGoal": {
        const e = typeof r == "function" ? r(i.blackboardLearningGoal) : r;
        return i.blackboardLearningGoal = e, ze(e), e;
      }
      case "resolvedStrategyId": {
        const e = typeof r == "function" ? r(i.resolvedStrategyId) : r;
        return i.resolvedStrategyId = e, Tr(e), e;
      }
      case "selectedProblemIds": {
        const e = typeof r == "function" ? r(i.selectedProblemIds) : r;
        return i.selectedProblemIds = e, Ue(e), e;
      }
      case "syllabusDraftText": {
        const e = typeof r == "function" ? r(i.syllabusDraftText) : r;
        return i.syllabusDraftText = e, Be(e), e;
      }
      case "strategyDraft": {
        const e = typeof r == "function" ? r(i.strategyDraft) : r;
        return i.strategyDraft = e, Ar(e), e;
      }
      case "selectedTopicPath": {
        const e = typeof r == "function" ? r(i.selectedTopicPath) : r;
        return i.selectedTopicPath = e, $e(e), e;
      }
      case "syllabusTitle": {
        const e = typeof r == "function" ? r(i.syllabusTitle) : r;
        return i.syllabusTitle = e, qr(e), e;
      }
      case "studioControls": {
        const e = typeof r == "function" ? r(i.studioControls) : r;
        return i.studioControls = e, Cr(e), e;
      }
      case "newProblemText": {
        const e = typeof r == "function" ? r(i.newProblemText) : r;
        return i.newProblemText = e, Rr(e), e;
      }
      case "selectedHierarchyIds": {
        const e = typeof r == "function" ? r(i.selectedHierarchyIds) : r;
        return i.selectedHierarchyIds = e, Ze(e), e;
      }
      case "savedSyllabusVersion": {
        const e = typeof r == "function" ? r(i.savedSyllabusVersion) : r;
        return i.savedSyllabusVersion = e, Xe(e), e;
      }
      case "selectedTeacherAnswer": {
        const e = typeof r == "function" ? r(i.selectedTeacherAnswer) : r;
        return i.selectedTeacherAnswer = e, tt(e), e;
      }
      case "suggestedProblems": {
        const e = typeof r == "function" ? r(i.suggestedProblems) : r;
        return i.suggestedProblems = e, kr(e), e;
      }
      case "blackboardTitle": {
        const e = typeof r == "function" ? r(i.blackboardTitle) : r;
        return i.blackboardTitle = e, st(e), e;
      }
      case "strategyStatus": {
        const e = typeof r == "function" ? r(i.strategyStatus) : r;
        return i.strategyStatus = e, jr(e), e;
      }
      case "contentPreviewPacket": {
        const e = typeof r == "function" ? r(i.contentPreviewPacket) : r;
        return i.contentPreviewPacket = e, ot(e), e;
      }
      case "hierarchyItems": {
        const e = typeof r == "function" ? r(i.hierarchyItems) : r;
        return i.hierarchyItems = e, it(e), e;
      }
      case "hasResolvedStrategy": {
        const e = typeof r == "function" ? r(i.hasResolvedStrategy) : r;
        return i.hasResolvedStrategy = e, Or(e), e;
      }
      case "finalHierarchyText": {
        const e = typeof r == "function" ? r(i.finalHierarchyText) : r;
        return i.finalHierarchyText = e, Fr(e), e;
      }
      case "teacherQuestionOptions": {
        const e = typeof r == "function" ? r(i.teacherQuestionOptions) : r;
        return i.teacherQuestionOptions = e, Vr(e), e;
      }
      case "showAccessGate": {
        const e = typeof r == "function" ? r(i.showAccessGate) : r;
        return i.showAccessGate = e, ut(e), e;
      }
      case "selectedProblemText": {
        const e = typeof r == "function" ? r(i.selectedProblemText) : r;
        return i.selectedProblemText = e, dt(e), e;
      }
      case "isSavingStrategy": {
        const e = typeof r == "function" ? r(i.isSavingStrategy) : r;
        return i.isSavingStrategy = e, zr(e), e;
      }
      case "savedSyllabusKey": {
        const e = typeof r == "function" ? r(i.savedSyllabusKey) : r;
        return i.savedSyllabusKey = e, mt(e), e;
      }
      case "savedProblemId": {
        const e = typeof r == "function" ? r(i.savedProblemId) : r;
        return i.savedProblemId = e, pt(e), e;
      }
      case "selectedSyllabusId": {
        const e = typeof r == "function" ? r(i.selectedSyllabusId) : r;
        return i.selectedSyllabusId = e, yt(e), e;
      }
      case "selectedTopicProblemsText": {
        const e = typeof r == "function" ? r(i.selectedTopicProblemsText) : r;
        return i.selectedTopicProblemsText = e, Br(e), e;
      }
      case "savedContextKey": {
        const e = typeof r == "function" ? r(i.savedContextKey) : r;
        return i.savedContextKey = e, ht(e), e;
      }
      case "selectedTopicTitle": {
        const e = typeof r == "function" ? r(i.selectedTopicTitle) : r;
        return i.selectedTopicTitle = e, gt(e), e;
      }
      case "accessGateTitle": {
        const e = typeof r == "function" ? r(i.accessGateTitle) : r;
        return i.accessGateTitle = e, St(e), e;
      }
      case "selectedTopicProblems": {
        const e = typeof r == "function" ? r(i.selectedTopicProblems) : r;
        return i.selectedTopicProblems = e, vt(e), e;
      }
      case "isOpeningSyllabus": {
        const e = typeof r == "function" ? r(i.isOpeningSyllabus) : r;
        return i.isOpeningSyllabus = e, Zr(e), e;
      }
      case "finalHierarchy": {
        const e = typeof r == "function" ? r(i.finalHierarchy) : r;
        return i.finalHierarchy = e, xt(e), e;
      }
      case "blackboardProblemStatement": {
        const e = typeof r == "function" ? r(i.blackboardProblemStatement) : r;
        return i.blackboardProblemStatement = e, _t(e), e;
      }
      case "teacherAnswerFeedback": {
        const e = typeof r == "function" ? r(i.teacherAnswerFeedback) : r;
        return i.teacherAnswerFeedback = e, Tt(e), e;
      }
      case "selectedProblemStatement": {
        const e = typeof r == "function" ? r(i.selectedProblemStatement) : r;
        return i.selectedProblemStatement = e, It(e), e;
      }
      case "teacherQuestionExplanation": {
        const e = typeof r == "function" ? r(i.teacherQuestionExplanation) : r;
        return i.teacherQuestionExplanation = e, rs(e), e;
      }
      case "blackboardProblemLabel": {
        const e = typeof r == "function" ? r(i.blackboardProblemLabel) : r;
        return i.blackboardProblemLabel = e, Et(e), e;
      }
      case "isSyllabusSetupCollapsed": {
        const e = typeof r == "function" ? r(i.isSyllabusSetupCollapsed) : r;
        return i.isSyllabusSetupCollapsed = e, Ct(e), e;
      }
      case "showNewProblemForm": {
        const e = typeof r == "function" ? r(i.showNewProblemForm) : r;
        return i.showNewProblemForm = e, ss(e), e;
      }
      case "selectedTopicProblemItems": {
        const e = typeof r == "function" ? r(i.selectedTopicProblemItems) : r;
        return i.selectedTopicProblemItems = e, Dt(e), e;
      }
      case "selectedTopicHeading": {
        const e = typeof r == "function" ? r(i.selectedTopicHeading) : r;
        return i.selectedTopicHeading = e, jt(e), e;
      }
      case "savedSyllabusOptions": {
        const e = typeof r == "function" ? r(i.savedSyllabusOptions) : r;
        return i.savedSyllabusOptions = e, as(e), e;
      }
      case "syllabusDescription": {
        const e = typeof r == "function" ? r(i.syllabusDescription) : r;
        return i.syllabusDescription = e, os(e), e;
      }
      case "strategyDraftText": {
        const e = typeof r == "function" ? r(i.strategyDraftText) : r;
        return i.strategyDraftText = e, ns(e), e;
      }
      case "isSavingSyllabus": {
        const e = typeof r == "function" ? r(i.isSavingSyllabus) : r;
        return i.isSavingSyllabus = e, is(e), e;
      }
      case "problemSolution": {
        const e = typeof r == "function" ? r(i.problemSolution) : r;
        return i.problemSolution = e, Ot(e), e;
      }
      case "structureStatus": {
        const e = typeof r == "function" ? r(i.structureStatus) : r;
        return i.structureStatus = e, cs(e), e;
      }
      case "accessBadgeLabel": {
        const e = typeof r == "function" ? r(i.accessBadgeLabel) : r;
        return i.accessBadgeLabel = e, Vt(e), e;
      }
      case "activeStep": {
        const e = typeof r == "function" ? r(i.activeStep) : r;
        return i.activeStep = e, zt(e), e;
      }
      case "isGeneratingStructure": {
        const e = typeof r == "function" ? r(i.isGeneratingStructure) : r;
        return i.isGeneratingStructure = e, us(e), e;
      }
      case "showSyllabusSetup": {
        const e = typeof r == "function" ? r(i.showSyllabusSetup) : r;
        return i.showSyllabusSetup = e, Ut(e), e;
      }
      case "teacherQuestionPrompt": {
        const e = typeof r == "function" ? r(i.teacherQuestionPrompt) : r;
        return i.teacherQuestionPrompt = e, ds(e), e;
      }
      case "hasSelectedTopic": {
        const e = typeof r == "function" ? r(i.hasSelectedTopic) : r;
        return i.hasSelectedTopic = e, Bt(e), e;
      }
      case "blackboardSteps": {
        const e = typeof r == "function" ? r(i.blackboardSteps) : r;
        return i.blackboardSteps = e, Wt(e), e;
      }
      case "resolvedStrategyVersion": {
        const e = typeof r == "function" ? r(i.resolvedStrategyVersion) : r;
        return i.resolvedStrategyVersion = e, ps(e), e;
      }
      case "newProblemSolutionMode": {
        const e = typeof r == "function" ? r(i.newProblemSolutionMode) : r;
        return i.newProblemSolutionMode = e, bs(e), e;
      }
      case "blackboardLesson": {
        const e = typeof r == "function" ? r(i.blackboardLesson) : r;
        return i.blackboardLesson = e, Zt(e), e;
      }
      case "problemSolutionText": {
        const e = typeof r == "function" ? r(i.problemSolutionText) : r;
        return i.problemSolutionText = e, er(e), e;
      }
      case "canUseStudio": {
        const e = typeof r == "function" ? r(i.canUseStudio) : r;
        return i.canUseStudio = e, rr(e), e;
      }
      case "resolvedStrategy": {
        const e = typeof r == "function" ? r(i.resolvedStrategy) : r;
        return i.resolvedStrategy = e, sr(e), e;
      }
      case "problemResolutionStatus": {
        const e = typeof r == "function" ? r(i.problemResolutionStatus) : r;
        return i.problemResolutionStatus = e, ar(e), e;
      }
      case "accessGateMessage": {
        const e = typeof r == "function" ? r(i.accessGateMessage) : r;
        return i.accessGateMessage = e, nr(e), e;
      }
      case "hasProblemSolution": {
        const e = typeof r == "function" ? r(i.hasProblemSolution) : r;
        return i.hasProblemSolution = e, ir(e), e;
      }
      case "teacherQuestionCorrectValue": {
        const e = typeof r == "function" ? r(i.teacherQuestionCorrectValue) : r;
        return i.teacherQuestionCorrectValue = e, gs(e), e;
      }
      case "suggestedProblemsText": {
        const e = typeof r == "function" ? r(i.suggestedProblemsText) : r;
        return i.suggestedProblemsText = e, Ss(e), e;
      }
      case "isResolvingProblem": {
        const e = typeof r == "function" ? r(i.isResolvingProblem) : r;
        return i.isResolvingProblem = e, lr(e), e;
      }
      default:
        return r;
    }
  }, [i]);
  le((s, r) => {
    const [e, ...n] = String(s || "").split(".");
    if (!e) return r;
    if (n.length === 0) return o(e, r);
    const t = (a) => {
      const p = Array.isArray(a) ? [...a] : { ...a || {} };
      let l = p;
      return n.forEach((u, m) => {
        m === n.length - 1 ? l[u] = r : (l[u] = Array.isArray(l[u]) ? [...l[u]] : { ...l[u] || {} }, l = l[u]);
      }), p;
    };
    switch (e) {
      case "syllabusStatus":
        return o("syllabusStatus", t), r;
      case "selectedTopicId":
        return o("selectedTopicId", t), r;
      case "isLoadingSyllabi":
        return o("isLoadingSyllabi", t), r;
      case "blackboardLearningGoal":
        return o("blackboardLearningGoal", t), r;
      case "resolvedStrategyId":
        return o("resolvedStrategyId", t), r;
      case "selectedProblemIds":
        return o("selectedProblemIds", t), r;
      case "syllabusDraftText":
        return o("syllabusDraftText", t), r;
      case "strategyDraft":
        return o("strategyDraft", t), r;
      case "selectedTopicPath":
        return o("selectedTopicPath", t), r;
      case "syllabusTitle":
        return o("syllabusTitle", t), r;
      case "studioControls":
        return o("studioControls", t), r;
      case "newProblemText":
        return o("newProblemText", t), r;
      case "selectedHierarchyIds":
        return o("selectedHierarchyIds", t), r;
      case "savedSyllabusVersion":
        return o("savedSyllabusVersion", t), r;
      case "selectedTeacherAnswer":
        return o("selectedTeacherAnswer", t), r;
      case "suggestedProblems":
        return o("suggestedProblems", t), r;
      case "blackboardTitle":
        return o("blackboardTitle", t), r;
      case "strategyStatus":
        return o("strategyStatus", t), r;
      case "contentPreviewPacket":
        return o("contentPreviewPacket", t), r;
      case "hierarchyItems":
        return o("hierarchyItems", t), r;
      case "hasResolvedStrategy":
        return o("hasResolvedStrategy", t), r;
      case "finalHierarchyText":
        return o("finalHierarchyText", t), r;
      case "teacherQuestionOptions":
        return o("teacherQuestionOptions", t), r;
      case "showAccessGate":
        return o("showAccessGate", t), r;
      case "selectedProblemText":
        return o("selectedProblemText", t), r;
      case "isSavingStrategy":
        return o("isSavingStrategy", t), r;
      case "savedSyllabusKey":
        return o("savedSyllabusKey", t), r;
      case "savedProblemId":
        return o("savedProblemId", t), r;
      case "selectedSyllabusId":
        return o("selectedSyllabusId", t), r;
      case "selectedTopicProblemsText":
        return o("selectedTopicProblemsText", t), r;
      case "savedContextKey":
        return o("savedContextKey", t), r;
      case "selectedTopicTitle":
        return o("selectedTopicTitle", t), r;
      case "accessGateTitle":
        return o("accessGateTitle", t), r;
      case "selectedTopicProblems":
        return o("selectedTopicProblems", t), r;
      case "isOpeningSyllabus":
        return o("isOpeningSyllabus", t), r;
      case "finalHierarchy":
        return o("finalHierarchy", t), r;
      case "blackboardProblemStatement":
        return o("blackboardProblemStatement", t), r;
      case "teacherAnswerFeedback":
        return o("teacherAnswerFeedback", t), r;
      case "selectedProblemStatement":
        return o("selectedProblemStatement", t), r;
      case "teacherQuestionExplanation":
        return o("teacherQuestionExplanation", t), r;
      case "blackboardProblemLabel":
        return o("blackboardProblemLabel", t), r;
      case "isSyllabusSetupCollapsed":
        return o("isSyllabusSetupCollapsed", t), r;
      case "showNewProblemForm":
        return o("showNewProblemForm", t), r;
      case "selectedTopicProblemItems":
        return o("selectedTopicProblemItems", t), r;
      case "selectedTopicHeading":
        return o("selectedTopicHeading", t), r;
      case "savedSyllabusOptions":
        return o("savedSyllabusOptions", t), r;
      case "syllabusDescription":
        return o("syllabusDescription", t), r;
      case "strategyDraftText":
        return o("strategyDraftText", t), r;
      case "isSavingSyllabus":
        return o("isSavingSyllabus", t), r;
      case "problemSolution":
        return o("problemSolution", t), r;
      case "structureStatus":
        return o("structureStatus", t), r;
      case "accessBadgeLabel":
        return o("accessBadgeLabel", t), r;
      case "activeStep":
        return o("activeStep", t), r;
      case "isGeneratingStructure":
        return o("isGeneratingStructure", t), r;
      case "showSyllabusSetup":
        return o("showSyllabusSetup", t), r;
      case "teacherQuestionPrompt":
        return o("teacherQuestionPrompt", t), r;
      case "hasSelectedTopic":
        return o("hasSelectedTopic", t), r;
      case "blackboardSteps":
        return o("blackboardSteps", t), r;
      case "resolvedStrategyVersion":
        return o("resolvedStrategyVersion", t), r;
      case "newProblemSolutionMode":
        return o("newProblemSolutionMode", t), r;
      case "blackboardLesson":
        return o("blackboardLesson", t), r;
      case "problemSolutionText":
        return o("problemSolutionText", t), r;
      case "canUseStudio":
        return o("canUseStudio", t), r;
      case "resolvedStrategy":
        return o("resolvedStrategy", t), r;
      case "problemResolutionStatus":
        return o("problemResolutionStatus", t), r;
      case "accessGateMessage":
        return o("accessGateMessage", t), r;
      case "hasProblemSolution":
        return o("hasProblemSolution", t), r;
      case "teacherQuestionCorrectValue":
        return o("teacherQuestionCorrectValue", t), r;
      case "suggestedProblemsText":
        return o("suggestedProblemsText", t), r;
      case "isResolvingProblem":
        return o("isResolvingProblem", t), r;
      default:
        return r;
    }
  }, [o]);
  const vs = { aiStructureGenerated: { properties: { hierarchy: { type: "object" }, languageCode: { type: "string" } }, type: "object" }, aiStructureRequested: { properties: { languageCode: { type: "string" }, sourceText: { type: "string" } }, type: "object" }, canUseStudio: { properties: { value: { type: "boolean" } }, type: "object" }, contentPreviewReady: { properties: { context: { type: "object" }, lesson: { type: "object" }, problem: { type: "object" }, schemaVersion: { type: "number" } }, required: ["schemaVersion", "context", "problem", "lesson"], type: "object" }, contextPublishRequested: { properties: { contextDraft: { type: "object" }, immutable: { type: "boolean" } }, type: "object" }, contextSetRequested: { properties: { contextDraft: { type: "object" }, strategy: { type: "object" }, strategyId: { type: "string" }, strategyVersion: { type: "number" } }, type: "object" }, lessonShareRequested: { properties: { expiresInHours: { type: "number" }, visibility: { type: "string" } }, type: "object" }, problemsAddRequested: { properties: { problems: { type: "array" }, topicId: { type: "string" } }, type: "object" }, resolvedStrategy: { properties: {}, type: "object" }, stepOperationRequested: { properties: { note: { type: "string" }, operation: { type: "string" }, stepId: { type: "string" } }, type: "object" }, suggestedProblemsText: { properties: { value: { type: "string" } }, type: "object" }, syllabusText: { properties: { value: { type: "string" } }, type: "object" } }, Te = (s, r, e) => {
    if (!r || typeof r != "object") return "";
    const n = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], t = s === null ? "null" : Array.isArray(s) ? "array" : Number.isInteger(s) ? "integer" : typeof s;
    if (n.length && !n.includes(t) && !(t === "integer" && n.includes("number"))) return e + " must be " + n.join(" or ") + ".";
    if (r.enum && !r.enum.some((a) => JSON.stringify(a) === JSON.stringify(s))) return e + " is not an allowed value.";
    if (s && typeof s == "object" && !Array.isArray(s)) {
      for (const a of r.required || []) if (!Object.prototype.hasOwnProperty.call(s, a)) return e + "." + a + " is required.";
      for (const [a, p] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(s, a)) {
        const l = Te(s[a], p, e + "." + a);
        if (l) return l;
      }
    }
    if (Array.isArray(s) && r.items) for (let a = 0; a < s.length; a++) {
      const p = Te(s[a], r.items, e + "[" + a + "]");
      if (p) return p;
    }
    return "";
  }, se = le(async (s, r, e = !1) => {
    const n = vs[s];
    if (!n) throw new Error("Module output '" + s + "' is not declared.");
    const t = Te(r, n, "output." + s);
    if (t) throw new Error(t);
    const a = c.onOutput || c.onModuleOutput || c.runtime?.onOutput;
    if (typeof a != "function") return r;
    const p = a(s, r, { moduleId: c.moduleId, awaitHandlers: e });
    return e ? await p : r;
  }, [c.onOutput, c.onModuleOutput, c.runtime?.onOutput, c.moduleId]), cr = (s, r) => {
    const e = String(r || "").split(".").filter(Boolean);
    if (!(!e.length || e.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return e.reduce((n, t) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(t in n) ? n.get(t) : n[t];
      }, s);
  }, $ = (s, r) => {
    if (Array.isArray(s)) return s.map((n) => $(n, r));
    if (s && typeof s == "object") return Object.fromEntries(Object.entries(s).map(([n, t]) => [$(n, r), $(t, r)]));
    if (typeof s != "string") return s;
    const e = s.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return e ? cr(r, e[1]) : s.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, t) => {
      const a = cr(r, t);
      return a == null ? "" : typeof a == "object" ? JSON.stringify(a) : String(a);
    });
  };
  async function xs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {};
        return { id: String(t.id || ""), text: String(a.text || t.label || "") };
      })();
      e.problem_select_read = n;
    }
    return o("selectedProblemIds", [e.problem_select_read.id]), o("selectedProblemText", e.problem_select_read.text), o("selectedProblemStatement", e.problem_select_read.text), await Ae({ solutionMode: "detailed", statement: e.problem_select_read.text }), e.problem_select_resolve;
  }
  async function Ie(s = {}) {
    const r = {};
    return await br({}), await dr({}), r.scenario_access;
  }
  async function ws(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        if (!i.selectedTopicId) throw new Error("Select a Topic before adding problems.");
        const t = Array.isArray(i.selectedTopicProblems) ? i.selectedTopicProblems.map(String) : [], a = ["Explain the key theorem used in " + i.selectedTopicTitle + " and give a counterexample.", "Create a guided problem connecting " + i.selectedTopicTitle + " to another unit.", "Create an examination-style " + i.selectedTopicTitle + " problem with verification."], p = [.../* @__PURE__ */ new Set([...t, ...a])].slice(0, 10), l = JSON.parse(JSON.stringify(i.finalHierarchy)), u = (h) => {
          h.id === i.selectedTopicId && (h.problems = p), (h.children || []).forEach(u);
        };
        u(l);
        const m = (h) => ({ id: h.id, label: h.type[0].toUpperCase() + h.type.slice(1) + " · " + h.title, data: { type: h.type, title: h.title, problems: h.problems || [] }, children: (h.children || []).map(m) }), d = p.map((h, x) => ({ id: i.selectedTopicId + "-problem-" + (x + 1), label: x + 1 + ". " + h, data: { type: "problem", topicId: i.selectedTopicId, text: h } }));
        return { problems: p, problemItems: d, text: p.map((h, x) => x + 1 + ". " + h).join(`
`), hierarchy: l, items: [m(l)] };
      })();
      e.problems_expand = n;
    }
    o("selectedTopicProblems", e.problems_expand.problems), o("selectedTopicProblemItems", e.problems_expand.problemItems), o("selectedProblemIds", []), o("selectedTopicProblemsText", e.problems_expand.text), o("finalHierarchy", e.problems_expand.hierarchy), o("hierarchyItems", e.problems_expand.items), o("structureStatus", "Problems added to the selected Topic."), await se("problemsAddRequested", { hierarchy: e.problems_expand.hierarchy, problems: e.problems_expand.problems, topicId: i.selectedTopicId }, !0);
  }
  async function _s(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isSavingStrategy", !0), await _({});
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          if (!i.selectedTopicId) throw new Error("Select a Topic before approving a strategy.");
          const u = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context";
          return { contextKey: String(i.savedContextKey), versionNumber: Number(i.savedSyllabusVersion), locale: String(M.locale || "en"), scopePath: String(i.selectedTopicPath || i.selectedTopicId), scopeType: "topic", title: String(i.selectedTopicTitle || "Topic") + " teaching strategy", strategy: i.strategyDraft };
        })();
        n.context_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_prepare" };
      return e.error = a, n.context_prepare = { error: a }, o("isSavingStrategy", !1), await _({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.context_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.context_prepare.locale }}", scopePath: "{{ stepResults.context_prepare.scopePath }}", scopeType: "{{ stepResults.context_prepare.scopeType }}", strategy: "{{ stepResults.context_prepare.strategy }}", title: "{{ stepResults.context_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.context_prepare.versionNumber }}" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.contextKey, a.versionNumber, a.hierarchy, a.locale, a.scopePath, a.scopeType, a.title, a.strategy], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveContextStrategy", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveContextStrategy", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.context_save_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_query" };
      return e.error = a, n.context_save_query = { error: a }, o("isSavingStrategy", !1), await _({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = Array.isArray(n.context_save_query) ? n.context_save_query : [], m = u[0], d = m && typeof m == "object" ? m.result || m : {};
          if (!d.strategyId) throw new Error("Strategy was not saved. Use an owned draft version.");
          return { id: String(d.strategyId || ""), version: Number(d.strategyVersion || 0), strategy: d.strategy || n.context_prepare.strategy };
        })();
        n.context_save_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_parse" };
      return e.error = a, n.context_save_parse = { error: a }, o("isSavingStrategy", !1), await _({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    o("resolvedStrategyId", n.context_save_parse.id), o("resolvedStrategyVersion", n.context_save_parse.version), o("resolvedStrategy", n.context_save_parse.strategy), o("strategyStatus", "Approved strategy v" + n.context_save_parse.version + " saved for " + i.selectedTopicTitle + "."), o("structureStatus", "Selected hierarchy and teaching strategy are now the active context."), o("isSavingStrategy", !1), await _({});
    try {
      await se("contextSetRequested", { hierarchy: i.finalHierarchy, languageCode: M.locale, scopePath: i.selectedTopicPath, selectedTopicId: i.selectedTopicId, strategy: n.context_save_parse.strategy, strategyId: n.context_save_parse.id, strategyVersion: n.context_save_parse.version }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_emit" };
      return e.error = a, n.context_emit = { error: a }, o("isSavingStrategy", !1), await _({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    return { hierarchy: i.finalHierarchy, scopePath: i.selectedTopicPath, strategy: n.context_save_parse.strategy, strategyId: n.context_save_parse.id, strategyVersion: n.context_save_parse.version };
  }
  async function Ps(s = {}) {
    await se("lessonShareRequested", { expiresInHours: 168, visibility: "unlisted" }, !0);
  }
  async function ur(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          const u = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context";
          return { contextKey: String(i.savedContextKey), versionNumber: Number(i.savedSyllabusVersion) };
        })();
        n.load_strategy_context = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_context" };
      return e.error = a, n.load_strategy_context = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.load_strategy_context.contextKey }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.load_strategy_context.versionNumber }}" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.contextKey, a.versionNumber, a.topicPath], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.load_strategy_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_query" };
      return e.error = a, n.load_strategy_query = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = Array.isArray(n.load_strategy_query) ? n.load_strategy_query : [], m = u[0], d = m && typeof m == "object" ? m.result || m : null, h = d && d.strategy ? d.strategy : i.strategyDraft, x = d ? Number(d.strategyVersion || 0) : 0, C = d ? String(d.strategyId || "") : "", A = Array.isArray(h.requiredSteps) ? h.requiredSteps : [], w = Array.isArray(h.forbiddenShortcuts) ? h.forbiddenShortcuts : [], F = Array.isArray(h.verificationRules) ? h.verificationRules : [], b = Array.isArray(h.teachingNotes) ? h.teachingNotes : [], R = [`Preferred method
` + String(h.preferredMethod || "Professor-guided method")];
          return A.length && R.push(`Required steps
` + A.map((Q, q) => q + 1 + ". " + Q).join(`
`)), w.length && R.push(`Avoid
` + w.map((Q) => "• " + Q).join(`
`)), F.length && R.push(`Verification
` + F.map((Q) => "• " + Q).join(`
`)), b.length && R.push(`Teaching notes
` + b.map((Q) => "• " + Q).join(`
`)), { strategy: h, version: x, id: C, text: R.join(`

`), status: d ? "Approved strategy v" + x + " loaded for " + r.topicTitle + "." : "No approved strategy yet. Refine the example and approve this draft." };
        })();
        n.load_strategy_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_parse" };
      return e.error = a, n.load_strategy_parse = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    return o("strategyDraft", n.load_strategy_parse.strategy), o("strategyDraftText", n.load_strategy_parse.text), o("resolvedStrategy", n.load_strategy_parse.strategy), o("resolvedStrategyId", n.load_strategy_parse.id), o("resolvedStrategyVersion", n.load_strategy_parse.version), o("strategyStatus", n.load_strategy_parse.status), n.load_strategy_parse;
  }
  async function Ts(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    o("contentPreviewPacket", {}), o("savedContextKey", ""), await _({}), o("savedProblemId", ""), await _({}), o("hasProblemSolution", !1), await _({}), o("selectedSyllabusId", r.value), await _({}), o("isOpeningSyllabus", !0), await _({});
    try {
      {
        const a = $({ syllabusId: "{{ args.value }}", userIdentity: "" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.syllabusId], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarLoadProfessorSyllabus", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadProfessorSyllabus", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.saved_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_query" };
      return e.error = a, n.saved_syllabus_query = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await _({}), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const m = (Array.isArray(n.saved_syllabus_query) ? n.saved_syllabus_query : [n.saved_syllabus_query])[0] || {}, d = m.result || m;
          if (!d || !d.id) throw new Error("The selected syllabus was not found.");
          const h = d.hierarchy && typeof d.hierarchy == "object" ? d.hierarchy : {}, x = (A, w = []) => {
            if (!A || !A.id) return null;
            const F = [...w, String(A.id)];
            return { id: String(A.id), label: String(A.type || "item").replace(/^./, (b) => b.toUpperCase()) + " · " + String(A.title || ""), data: { type: String(A.type || ""), title: String(A.title || ""), path: F.join("/"), problems: Array.isArray(A.problems) ? A.problems : [] }, children: Array.isArray(A.children) ? A.children.map((b) => x(b, F)).filter(Boolean) : [] };
          }, C = x(h);
          return { ...d, hierarchy: h, items: C ? [C] : [], hasHierarchy: !!C };
        })();
        n.saved_syllabus_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_parse" };
      return e.error = a, n.saved_syllabus_parse = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await _({}), { ok: !1 };
    }
    return o("savedSyllabusKey", n.saved_syllabus_parse.key), await _({}), o("savedSyllabusVersion", n.saved_syllabus_parse.versionNumber), await _({}), o("savedContextKey", n.saved_syllabus_parse.contextKey), await _({}), o("savedProblemId", ""), await _({}), o("hasProblemSolution", !1), await _({}), o("syllabusTitle", n.saved_syllabus_parse.title), o("syllabusDescription", n.saved_syllabus_parse.description), o("syllabusDraftText", n.saved_syllabus_parse.syllabusText), o("finalHierarchy", n.saved_syllabus_parse.hierarchy), o("hierarchyItems", n.saved_syllabus_parse.items), o("syllabusStatus", "Loaded " + n.saved_syllabus_parse.title + " · " + n.saved_syllabus_parse.status), o("showSyllabusSetup", !n.saved_syllabus_parse.hasHierarchy), o("isSyllabusSetupCollapsed", n.saved_syllabus_parse.hasHierarchy), o("isOpeningSyllabus", !1), await _({}), n.saved_syllabus_parse;
  }
  async function dr(s = {}) {
    o("syllabusDraftText", M.syllabusText || "");
  }
  async function Is(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).previewDisabled)
      return { ok: !1, reason: "studio_unavailable" };
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          function u(d, h = "") {
            if (!d || typeof d != "object" || Array.isArray(d)) throw new Error("A lesson object is required.");
            const x = (w, F, b = !1) => {
              if (w != null && typeof w != "string") throw new Error(F + " must be text.");
              const R = (w || "").trim();
              if (b && !R || R.length > 16e3) throw new Error("Invalid " + F + ".");
              return R;
            };
            if (!Array.isArray(d.steps) || !d.steps.length || d.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const C = /* @__PURE__ */ new Set(), A = d.steps.map((w, F) => {
              if (!w || typeof w != "object" || Array.isArray(w)) throw new Error("Invalid lesson step.");
              const b = x(w.id, "step ID") || "step-" + (F + 1);
              if (C.has(b)) throw new Error("Step IDs must be unique.");
              C.add(b);
              const R = w.teacherQuestion;
              if (!R || !Array.isArray(R.options) || R.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const Q = /* @__PURE__ */ new Set(), q = R.options.map((E) => {
                const D = x(E?.value, "option ID", !0);
                if (Q.has(D)) throw new Error("Answer option IDs must be unique.");
                return Q.add(D), { value: D, label: x(E?.label, "option label", !0) };
              }), z = x(R.correctValue, "correct answer ID", !0);
              if (!Q.has(z)) throw new Error("The correct answer must reference a supplied option.");
              const G = x(R.prompt || w.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(w.content) || !w.content.length || w.content.length > 60) throw new Error("Each step needs board content.");
              const N = w.content.map((E) => {
                if (!E || typeof E != "object") throw new Error("Invalid board content.");
                switch (E.type) {
                  case "heading":
                  case "text":
                  case "note":
                    return { ...E, text: x(E.text, "board text", !0) };
                  case "equation":
                    return { ...E, visualText: x(E.visualText, "readable equation", !0), latex: x(E.latex, "equation") };
                  case "definition":
                    return { ...E, term: x(E.term, "term", !0), text: x(E.text, "definition", !0) };
                  case "theorem":
                    return { ...E, statement: x(E.statement, "theorem", !0) };
                  case "list":
                  case "proof": {
                    const D = E.type === "list" ? "items" : "lines";
                    if (!Array.isArray(E[D]) || !E[D].length) throw new Error("Invalid board list.");
                    return { ...E, [D]: E[D].map((V) => x(V, "list entry", !0)) };
                  }
                  case "matrix": {
                    const D = E.matrix?.rows;
                    if (!Array.isArray(D) || !D.length || D.length > 30 || !Array.isArray(D[0]) || !D[0].length || D[0].length > 30 || D.some((V) => !Array.isArray(V) || V.length !== D[0].length || V.some((ee) => !["string", "number"].includes(typeof ee)))) throw new Error("Invalid matrix.");
                    return E;
                  }
                  case "table":
                    if (!Array.isArray(E.headers) || !E.headers.length || !Array.isArray(E.rows) || E.rows.some((D) => !Array.isArray(D) || D.length !== E.headers.length)) throw new Error("Invalid table.");
                    return { ...E, headers: E.headers.map((D) => x(D, "table heading")), rows: E.rows.map((D) => D.map((V) => x(V, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(E.nodes) || !Array.isArray(E.edges)) throw new Error("Invalid graph.");
                    const D = /* @__PURE__ */ new Set();
                    for (const V of E.nodes) {
                      if (!V?.id || D.has(V.id) || !Number.isFinite(V.x) || !Number.isFinite(V.y)) throw new Error("Invalid graph node.");
                      D.add(V.id);
                    }
                    if (E.edges.some((V) => !D.has(V?.from) || !D.has(V?.to))) throw new Error("Invalid graph edge.");
                    return E;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), B = {
                id: b,
                title: x(w.title, "step title", !0),
                content: N,
                teacherPrompt: G,
                teacherQuestion: { prompt: G, options: q, correctValue: z, explanation: x(R.explanation, "answer explanation", !0) }
              };
              for (const E of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) B[E] = x(w[E], E);
              return B;
            });
            return {
              title: x(d.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: x(d.problemLabel, "problem label") || "Problem",
              problemStatement: x(d.problemStatement || h, "problem statement", !0),
              learningGoal: x(d.learningGoal, "learning goal"),
              steps: A,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }
          function m(d) {
            if (!d || typeof d != "object" || Array.isArray(d) || !Object.keys(d).length) return { enabled: !1, valid: !1 };
            if (JSON.stringify(d).length > 25e4) throw new Error("Preview is too large.");
            if (d.schemaVersion !== 1) throw new Error("Unsupported preview schema.");
            const h = u(d.lesson, d.problem?.statement), x = d.context || {}, C = (A) => typeof A == "string" ? A.trim().slice(0, 500) : "";
            if (!C(x.syllabusId) || !C(x.contextKey) || !C(d.problem?.id)) throw new Error("Preview needs saved syllabus, context, and problem IDs.");
            return {
              enabled: !0,
              valid: !0,
              schemaVersion: 1,
              context: { syllabusId: C(x.syllabusId), contextKey: C(x.contextKey), versionNumber: Math.max(1, Math.floor(Number(x.versionNumber) || 1)), locale: ["en", "hi", "ta"].includes(x.locale) ? x.locale : "en", topicPath: C(x.topicPath) },
              problem: { id: C(d.problem.id), statement: h.problemStatement, solutionMode: d.problem.solutionMode === "quick" ? "quick" : "detailed" },
              lesson: h,
              boardSteps: h.steps.map(({ teacherQuestion: A, teacherPrompt: w, ...F }) => F),
              message: "Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified."
            };
          }
          if (!i.canUseStudio || !i.hasProblemSolution || !i.savedProblemId) throw new Error("Save and resolve a problem first.");
          return m({ schemaVersion: 1, context: { syllabusId: i.selectedSyllabusId, contextKey: i.savedContextKey, versionNumber: i.savedSyllabusVersion, locale: M.locale, topicPath: i.selectedTopicPath }, problem: { id: i.savedProblemId, statement: i.blackboardLesson.problemStatement, solutionMode: i.newProblemSolutionMode }, lesson: i.blackboardLesson });
        })();
        n.prepare_preview = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "prepare_preview" };
      return e.error = a, n.prepare_preview = { error: a }, o("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first."), { ok: !1 };
    }
    o("contentPreviewPacket", n.prepare_preview);
    try {
      await se("contentPreviewReady", n.prepare_preview, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "emit_preview_packet" };
      return e.error = a, n.emit_preview_packet = { error: a }, o("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first."), { ok: !1 };
    }
    return o("problemResolutionStatus", "Student preview prepared. Open it through the connected application."), n.prepare_preview;
  }
  async function As(s = {}) {
    o("showNewProblemForm", !1), o("newProblemText", "");
  }
  async function Es(s = {}) {
    o("newProblemSolutionMode", (s || {}).value);
  }
  async function qs(s = {}) {
    const r = {};
    return (function(n) {
      const t = !!(n.isSavingSyllabus || n.isGeneratingStructure || n.isResolvingProblem || n.isSavingStrategy || n.isLoadingSyllabi || n.isOpeningSyllabus), a = n.canUseStudio !== !0 || t, p = !!(n.selectedSyllabusId && n.savedSyllabusKey && n.savedContextKey && Number.isInteger(n.savedSyllabusVersion) && n.savedSyllabusVersion > 0);
      return {
        busy: t,
        unavailable: a,
        previewDisabled: a || !p || !n.hasProblemSolution || !n.savedProblemId,
        versionDisabled: a || !p || n.savedSyllabusVersion >= 1e5,
        lessonEmpty: !n.isResolvingProblem && !n.hasProblemSolution
      };
    })(i).unavailable ? { ok: !1, reason: "studio_unavailable" } : (await pr({ status: "published" }), r.publish_saved_course);
  }
  async function Ae(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("savedProblemId", ""), await _({}), o("isResolvingProblem", !0), await _({}), o("problemResolutionStatus", "Checking saved solutions for this hierarchy…"), o("hasProblemSolution", !1), await _({});
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          const u = String(r.statement || "").trim();
          if (!u) throw new Error("Enter a problem statement.");
          if (!i.selectedTopicId) throw new Error("Select a Topic first.");
          const m = u.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim(), d = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context", h = String(i.savedContextKey), x = Number(i.savedSyllabusVersion), C = r.solutionMode === "quick" ? "quick" : "detailed", A = String(i.selectedTopicPath || i.selectedTopicId), w = String(M.locale || "en").toLowerCase(), F = ["en", "hi", "ta"].includes(w) ? w : "en";
          return { statement: u, normalized: m, contextKey: h, versionNumber: x, mode: C, topicPath: A, locale: F, promptVersion: "v3-validated-mcq-blackboard" };
        })();
        n.problem_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_prepare" };
      return e.error = a, n.problem_prepare = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.contextKey, a.versionNumber, a.topicPath], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.problem_strategy_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_lookup" };
      return e.error = a, n.problem_strategy_lookup = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = Array.isArray(n.problem_strategy_lookup) ? n.problem_strategy_lookup : [], m = u[0], d = m && typeof m == "object" ? m.result || m : null;
          return { id: d ? String(d.strategyId || "") : "", version: d ? Number(d.strategyVersion || 0) : 0, strategy: d && d.strategy ? d.strategy : i.strategyDraft || {} };
        })();
        n.problem_strategy_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_result" };
      return e.error = a, n.problem_strategy_result = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", locale: "{{ stepResults.problem_prepare.locale }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.contextKey, a.versionNumber, a.topicPath, a.locale, a.normalizedProblem, a.solutionMode, a.promptVersion, a.strategyVersion], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarFindProblemSolution", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarFindProblemSolution", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.problem_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_lookup" };
      return e.error = a, n.problem_lookup = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = function(w, F = "") {
            if (!w || typeof w != "object" || Array.isArray(w)) throw new Error("A lesson object is required.");
            const b = (q, z, G = !1) => {
              if (q != null && typeof q != "string") throw new Error(z + " must be text.");
              const N = (q || "").trim();
              if (G && !N || N.length > 16e3) throw new Error("Invalid " + z + ".");
              return N;
            };
            if (!Array.isArray(w.steps) || !w.steps.length || w.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const R = /* @__PURE__ */ new Set(), Q = w.steps.map((q, z) => {
              if (!q || typeof q != "object" || Array.isArray(q)) throw new Error("Invalid lesson step.");
              const G = b(q.id, "step ID") || "step-" + (z + 1);
              if (R.has(G)) throw new Error("Step IDs must be unique.");
              R.add(G);
              const N = q.teacherQuestion;
              if (!N || !Array.isArray(N.options) || N.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const B = /* @__PURE__ */ new Set(), E = N.options.map((g) => {
                const P = b(g?.value, "option ID", !0);
                if (B.has(P)) throw new Error("Answer option IDs must be unique.");
                return B.add(P), { value: P, label: b(g?.label, "option label", !0) };
              }), D = b(N.correctValue, "correct answer ID", !0);
              if (!B.has(D)) throw new Error("The correct answer must reference a supplied option.");
              const V = b(N.prompt || q.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(q.content) || !q.content.length || q.content.length > 60) throw new Error("Each step needs board content.");
              const ee = q.content.map((g) => {
                if (!g || typeof g != "object") throw new Error("Invalid board content.");
                switch (g.type) {
                  case "heading":
                  case "text":
                  case "note":
                    return { ...g, text: b(g.text, "board text", !0) };
                  case "equation":
                    return { ...g, visualText: b(g.visualText, "readable equation", !0), latex: b(g.latex, "equation") };
                  case "definition":
                    return { ...g, term: b(g.term, "term", !0), text: b(g.text, "definition", !0) };
                  case "theorem":
                    return { ...g, statement: b(g.statement, "theorem", !0) };
                  case "list":
                  case "proof": {
                    const P = g.type === "list" ? "items" : "lines";
                    if (!Array.isArray(g[P]) || !g[P].length) throw new Error("Invalid board list.");
                    return { ...g, [P]: g[P].map((j) => b(j, "list entry", !0)) };
                  }
                  case "matrix": {
                    const P = g.matrix?.rows;
                    if (!Array.isArray(P) || !P.length || P.length > 30 || !Array.isArray(P[0]) || !P[0].length || P[0].length > 30 || P.some((j) => !Array.isArray(j) || j.length !== P[0].length || j.some((qe) => !["string", "number"].includes(typeof qe)))) throw new Error("Invalid matrix.");
                    return g;
                  }
                  case "table":
                    if (!Array.isArray(g.headers) || !g.headers.length || !Array.isArray(g.rows) || g.rows.some((P) => !Array.isArray(P) || P.length !== g.headers.length)) throw new Error("Invalid table.");
                    return { ...g, headers: g.headers.map((P) => b(P, "table heading")), rows: g.rows.map((P) => P.map((j) => b(j, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(g.nodes) || !Array.isArray(g.edges)) throw new Error("Invalid graph.");
                    const P = /* @__PURE__ */ new Set();
                    for (const j of g.nodes) {
                      if (!j?.id || P.has(j.id) || !Number.isFinite(j.x) || !Number.isFinite(j.y)) throw new Error("Invalid graph node.");
                      P.add(j.id);
                    }
                    if (g.edges.some((j) => !P.has(j?.from) || !P.has(j?.to))) throw new Error("Invalid graph edge.");
                    return g;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), X = {
                id: G,
                title: b(q.title, "step title", !0),
                content: ee,
                teacherPrompt: V,
                teacherQuestion: { prompt: V, options: E, correctValue: D, explanation: b(N.explanation, "answer explanation", !0) }
              };
              for (const g of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) X[g] = b(q[g], g);
              return X;
            });
            return {
              title: b(w.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: b(w.problemLabel, "problem label") || "Problem",
              problemStatement: b(w.problemStatement || F, "problem statement", !0),
              learningGoal: b(w.learningGoal, "learning goal"),
              steps: Q,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }, m = n.problem_lookup, d = Array.isArray(m) ? m[0] : m, h = d?.result || d;
          if (!h?.solution) return { hit: !1 };
          let x;
          try {
            x = u(h.solution, n.problem_prepare.statement);
          } catch {
            return { hit: !1 };
          }
          const C = { ...h.solution, ...x };
          return { hit: !0, result: h, solution: C, board: x, question: x.steps[0].teacherQuestion, text: x.steps.map((A, w) => w + 1 + ". " + A.title).join(`
`) };
        })();
        n.problem_cache_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_cache_result" };
      return e.error = a, n.problem_cache_result = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    if (n.problem_cache_result.hit)
      return o("savedProblemId", n.problem_cache_result.result.problemId), await _({}), o("problemSolution", n.problem_cache_result.solution), o("problemSolutionText", n.problem_cache_result.text), o("blackboardLesson", n.problem_cache_result.board), o("blackboardTitle", n.problem_cache_result.board.title), o("blackboardProblemLabel", n.problem_cache_result.board.problemLabel), o("blackboardProblemStatement", n.problem_cache_result.board.problemStatement), o("blackboardLearningGoal", n.problem_cache_result.board.learningGoal), o("blackboardSteps", n.problem_cache_result.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", n.problem_cache_result.question.prompt), o("teacherQuestionOptions", n.problem_cache_result.question.options), o("teacherQuestionCorrectValue", n.problem_cache_result.question.correctValue), o("teacherQuestionExplanation", n.problem_cache_result.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", "Saved AI lesson · review every step; mathematical correctness is not independently verified."), o("isResolvingProblem", !1), await _({}), o("hasProblemSolution", !0), await _({}), i.problemSolution;
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = n.problem_prepare, m = n.problem_strategy_result.strategy || {};
          return ["You are a college mathematics professor creating an interactive blackboard lesson.", 'Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.', "Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.", "Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in " + (u.locale === "hi" ? "Hindi" : u.locale === "ta" ? "Tamil" : "English") + " only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.", "Follow this approved teaching strategy exactly: " + JSON.stringify(m), "Solution mode: " + u.mode + ".", "Language code: " + u.locale + ".", "Context hierarchy: " + JSON.stringify(i.finalHierarchy || {}), "Selected topic path: " + u.topicPath, "Problem: " + u.statement].join(`
`);
        })();
        n.problem_ai_prompt = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_prompt" };
      return e.error = a, n.problem_ai_prompt = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }, a = $({ prompt: "{{ stepResults.problem_ai_prompt }}" }, t) || {}, p = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(3e4) }), l = await p.json().catch(() => ({}));
        if (!p.ok) throw new Error(l.error || "Protected API request failed (" + p.status + ")");
        const u = l.data;
        n.problem_ai_call = u, e.apiResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_call" };
      return e.error = a, n.problem_ai_call = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = function(w, F = "") {
            if (!w || typeof w != "object" || Array.isArray(w)) throw new Error("A lesson object is required.");
            const b = (q, z, G = !1) => {
              if (q != null && typeof q != "string") throw new Error(z + " must be text.");
              const N = (q || "").trim();
              if (G && !N || N.length > 16e3) throw new Error("Invalid " + z + ".");
              return N;
            };
            if (!Array.isArray(w.steps) || !w.steps.length || w.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const R = /* @__PURE__ */ new Set(), Q = w.steps.map((q, z) => {
              if (!q || typeof q != "object" || Array.isArray(q)) throw new Error("Invalid lesson step.");
              const G = b(q.id, "step ID") || "step-" + (z + 1);
              if (R.has(G)) throw new Error("Step IDs must be unique.");
              R.add(G);
              const N = q.teacherQuestion;
              if (!N || !Array.isArray(N.options) || N.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const B = /* @__PURE__ */ new Set(), E = N.options.map((g) => {
                const P = b(g?.value, "option ID", !0);
                if (B.has(P)) throw new Error("Answer option IDs must be unique.");
                return B.add(P), { value: P, label: b(g?.label, "option label", !0) };
              }), D = b(N.correctValue, "correct answer ID", !0);
              if (!B.has(D)) throw new Error("The correct answer must reference a supplied option.");
              const V = b(N.prompt || q.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(q.content) || !q.content.length || q.content.length > 60) throw new Error("Each step needs board content.");
              const ee = q.content.map((g) => {
                if (!g || typeof g != "object") throw new Error("Invalid board content.");
                switch (g.type) {
                  case "heading":
                  case "text":
                  case "note":
                    return { ...g, text: b(g.text, "board text", !0) };
                  case "equation":
                    return { ...g, visualText: b(g.visualText, "readable equation", !0), latex: b(g.latex, "equation") };
                  case "definition":
                    return { ...g, term: b(g.term, "term", !0), text: b(g.text, "definition", !0) };
                  case "theorem":
                    return { ...g, statement: b(g.statement, "theorem", !0) };
                  case "list":
                  case "proof": {
                    const P = g.type === "list" ? "items" : "lines";
                    if (!Array.isArray(g[P]) || !g[P].length) throw new Error("Invalid board list.");
                    return { ...g, [P]: g[P].map((j) => b(j, "list entry", !0)) };
                  }
                  case "matrix": {
                    const P = g.matrix?.rows;
                    if (!Array.isArray(P) || !P.length || P.length > 30 || !Array.isArray(P[0]) || !P[0].length || P[0].length > 30 || P.some((j) => !Array.isArray(j) || j.length !== P[0].length || j.some((qe) => !["string", "number"].includes(typeof qe)))) throw new Error("Invalid matrix.");
                    return g;
                  }
                  case "table":
                    if (!Array.isArray(g.headers) || !g.headers.length || !Array.isArray(g.rows) || g.rows.some((P) => !Array.isArray(P) || P.length !== g.headers.length)) throw new Error("Invalid table.");
                    return { ...g, headers: g.headers.map((P) => b(P, "table heading")), rows: g.rows.map((P) => P.map((j) => b(j, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(g.nodes) || !Array.isArray(g.edges)) throw new Error("Invalid graph.");
                    const P = /* @__PURE__ */ new Set();
                    for (const j of g.nodes) {
                      if (!j?.id || P.has(j.id) || !Number.isFinite(j.x) || !Number.isFinite(j.y)) throw new Error("Invalid graph node.");
                      P.add(j.id);
                    }
                    if (g.edges.some((j) => !P.has(j?.from) || !P.has(j?.to))) throw new Error("Invalid graph edge.");
                    return g;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), X = {
                id: G,
                title: b(q.title, "step title", !0),
                content: ee,
                teacherPrompt: V,
                teacherQuestion: { prompt: V, options: E, correctValue: D, explanation: b(N.explanation, "answer explanation", !0) }
              };
              for (const g of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) X[g] = b(q[g], g);
              return X;
            });
            return {
              title: b(w.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: b(w.problemLabel, "problem label") || "Problem",
              problemStatement: b(w.problemStatement || F, "problem statement", !0),
              learningGoal: b(w.learningGoal, "learning goal"),
              steps: Q,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }, m = n.problem_ai_call?.candidates?.[0]?.content?.parts, d = Array.isArray(m) ? m.map((A) => typeof A?.text == "string" ? A.text : "").join("") : "";
          if (!d.trim() || d.length > 2e5) throw new Error("Invalid AI lesson response.");
          const h = JSON.parse(d.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), x = u(h, n.problem_prepare.statement), C = { ...x, summary: typeof h.summary == "string" ? h.summary : "", answer: typeof h.answer == "string" ? h.answer : "", checks: Array.isArray(h.checks) ? h.checks.filter((A) => typeof A == "string") : [] };
          return { solution: C, board: x, question: x.steps[0].teacherQuestion, text: [C.summary, x.steps.map((A, w) => w + 1 + ". " + A.title).join(`
`), C.answer, C.checks.join(`
`)].filter(Boolean).join(`

`) };
        })();
        n.problem_ai_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_parse" };
      return e.error = a, n.problem_ai_parse = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "gemini-2.5-flash", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.contextKey, a.versionNumber, a.hierarchy, a.locale, a.topicPath, a.topicId, a.statement, a.normalizedProblem, a.solutionMode, a.promptVersion, a.solution, a.provider, a.model, a.strategyId, a.strategyVersion, a.strategySnapshot], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.problem_store = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_store" };
      return e.error = a, n.problem_store = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = Array.isArray(n.problem_store) ? n.problem_store[0]?.result : null;
          if (!u?.problemId) throw new Error("Lesson was not saved. Use an owned draft version.");
          return u;
        })();
        n.stored_problem_check = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "stored_problem_check" };
      return e.error = a, n.stored_problem_check = { error: a }, o("isResolvingProblem", !1), await _({}), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    return o("savedProblemId", n.stored_problem_check.problemId), await _({}), o("problemSolution", n.problem_ai_parse.solution), o("problemSolutionText", n.problem_ai_parse.text), o("blackboardLesson", n.problem_ai_parse.board), o("blackboardTitle", n.problem_ai_parse.board.title), o("blackboardProblemLabel", n.problem_ai_parse.board.problemLabel), o("blackboardProblemStatement", n.problem_ai_parse.board.problemStatement), o("blackboardLearningGoal", n.problem_ai_parse.board.learningGoal), o("blackboardSteps", n.problem_ai_parse.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", n.problem_ai_parse.question.prompt), o("teacherQuestionOptions", n.problem_ai_parse.question.options), o("teacherQuestionCorrectValue", n.problem_ai_parse.question.correctValue), o("teacherQuestionExplanation", n.problem_ai_parse.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", "AI lesson prepared · review every step; mathematical correctness is not independently verified."), o("isResolvingProblem", !1), await _({}), o("hasProblemSolution", !0), await _({}), i.problemSolution;
  }
  async function Cs(s = {}) {
    o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0);
  }
  async function Rs(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    o("isGeneratingStructure", !0), await _({}), o("structureStatus", "Generating a multilevel hierarchy with Gemini…");
    try {
      await se("aiStructureRequested", { languageCode: M.locale, sourceText: i.syllabusDraftText }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_emit" };
      return e.error = a, n.structure_emit = { error: a }, o("isGeneratingStructure", !1), await _({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = String(i.syllabusDraftText || "").trim();
          if (!u) throw new Error("Paste a syllabus before proposing a hierarchy.");
          return ["You are an academic curriculum architect.", "Return JSON only with Programme > Semester > Subject > Unit > Topic hierarchy.", "Every topic must contain a problems array with 2 to 4 representative college-level mathematics problems.", 'Shape: {"hierarchy":{"id":"...","type":"programme","title":"...","children":[{"id":"...","type":"semester","title":"...","children":[{"id":"...","type":"subject","title":"...","children":[{"id":"...","type":"unit","title":"...","children":[{"id":"...","type":"topic","title":"...","problems":["..."],"children":[]}]}]}]}]}}.', "Use stable lowercase-hyphen IDs.", "Detect the language of the supplied syllabus and keep every human-readable hierarchy title and representative problem in that same source language. Do not mix languages. Keep JSON keys and mathematical notation unchanged.", "Syllabus:", u].join(`
`);
        })();
        n.structure_prompt = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_prompt" };
      return e.error = a, n.structure_prompt = { error: a }, o("isGeneratingStructure", !1), await _({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }, a = $({ prompt: "{{ stepResults.structure_prompt }}" }, t) || {}, p = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(3e4) }), l = await p.json().catch(() => ({}));
        if (!p.ok) throw new Error(l.error || "Protected API request failed (" + p.status + ")");
        const u = l.data;
        n.structure_api = u, e.apiResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_api" };
      return e.error = a, n.structure_api = { error: a }, o("isGeneratingStructure", !1), await _({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = n.structure_api || {}, m = u?.candidates?.[0]?.content?.parts, d = Array.isArray(m) ? m.map((b) => String(b?.text || "")).join("") : "";
          if (!d.trim()) throw new Error("Gemini returned no curriculum structure.");
          const h = JSON.parse(d.trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "")), x = ["programme", "semester", "subject", "unit", "topic"], C = (b, R) => String(b || R).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || R, A = (b, R = 0, Q = "item") => {
            if (!b || typeof b != "object" || R > 4) return null;
            const q = String(b.title || "").trim().slice(0, 180);
            if (!q) return null;
            const z = x[Math.min(R, 4)], G = Array.isArray(b.children) ? b.children.slice(0, 16).map((B, E) => A(B, R + 1, z + "-" + E)).filter(Boolean) : [], N = z === "topic" && Array.isArray(b.problems) ? b.problems.map(String).map((B) => B.trim()).filter(Boolean).slice(0, 8) : [];
            return { id: C(b.id || q, Q), type: z, title: q, children: G, ...z === "topic" ? { problems: N.length ? N : ["Create a worked example for " + q + ".", "Add one conceptual verification question for " + q + ".", "Add one examination-style application problem for " + q + "."] } : {} };
          }, w = A(h.hierarchy || h, 0, "programme");
          if (!w) throw new Error("Gemini returned an invalid hierarchy.");
          const F = (b, R = []) => {
            const Q = [...R, b.id];
            return { id: b.id, label: b.type[0].toUpperCase() + b.type.slice(1) + " · " + b.title, data: { type: b.type, title: b.title, path: Q.join("/"), problems: b.problems || [] }, children: b.children.map((q) => F(q, Q)) };
          };
          return { hierarchy: w, items: [F(w)] };
        })();
        n.structure_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_parse" };
      return e.error = a, n.structure_parse = { error: a }, o("isGeneratingStructure", !1), await _({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    o("finalHierarchy", n.structure_parse.hierarchy), o("hierarchyItems", n.structure_parse.items), o("selectedHierarchyIds", []), o("hasSelectedTopic", !1), o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0), o("isGeneratingStructure", !1), await _({}), o("structureStatus", "Hierarchy ready. Select a Topic to view its problems.");
    try {
      await se("aiStructureGenerated", { hierarchy: n.structure_parse.hierarchy, languageCode: M.locale }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_generated" };
      return e.error = a, n.structure_generated = { error: a }, o("isGeneratingStructure", !1), await _({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    return n.structure_parse;
  }
  async function Ns(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = String(i.newProblemText || "").trim();
        if (!t) throw new Error("Enter a problem statement.");
        if (!i.selectedTopicId) throw new Error("Select a Topic first.");
        const a = Array.isArray(i.selectedTopicProblems) ? i.selectedTopicProblems.map(String) : [], p = [.../* @__PURE__ */ new Set([...a, t])], l = p.map((u, m) => ({ id: i.selectedTopicId + "-problem-" + (m + 1), label: m + 1 + ". " + u, data: { type: "problem", topicId: i.selectedTopicId, text: u } }));
        return { text: t, problems: p, items: l };
      })();
      e.new_problem_prepare_item = n;
    }
    return o("selectedTopicProblems", e.new_problem_prepare_item.problems), o("selectedTopicProblemItems", e.new_problem_prepare_item.items), o("selectedProblemStatement", e.new_problem_prepare_item.text), o("showNewProblemForm", !1), await Ae({ solutionMode: i.newProblemSolutionMode, statement: e.new_problem_prepare_item.text }), o("newProblemText", ""), e.new_problem_resolve;
  }
  async function Ee(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isLoadingSyllabi", !0), await _({});
    try {
      {
        const a = $({ userIdentity: "" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListProfessorSyllabi", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListProfessorSyllabi", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.syllabi_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_query" };
      return e.error = a, n.syllabi_query = { error: a }, o("isLoadingSyllabi", !1), await _({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => (Array.isArray(n.syllabi_query) ? n.syllabi_query : []).map((m) => ({ label: String(m.label || m.title || "Untitled syllabus"), value: String(m.value || m.id || "") })).filter((m) => m.value))();
        n.syllabi_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_parse" };
      return e.error = a, n.syllabi_parse = { error: a }, o("isLoadingSyllabi", !1), await _({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    return o("savedSyllabusOptions", n.syllabi_parse), o("isLoadingSyllabi", !1), await _({}), n.syllabi_parse;
  }
  async function Ds(s = {}) {
    o("showNewProblemForm", !0), o("newProblemText", ""), o("problemResolutionStatus", "The database will be checked before AI is used.");
  }
  async function ks(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {}, p = a.type === "topic", l = p && Array.isArray(a.problems) ? a.problems.map(String) : [], u = l.map((m, d) => ({ id: String(t.id || "topic") + "-problem-" + (d + 1), label: d + 1 + ". " + m, data: { type: "problem", topicId: String(t.id || ""), text: m } }));
        return { id: String(t.id || ""), topic: p, title: String(a.title || t.label || ""), path: String(a.path || t.id || ""), problems: l, problemItems: u, text: l.map((m, d) => d + 1 + ". " + m).join(`
`) };
      })();
      e.select_node = n;
    }
    return o("selectedHierarchyIds", [e.select_node.id]), o("hasSelectedTopic", e.select_node.topic), o("selectedTopicId", e.select_node.topic ? e.select_node.id : ""), o("selectedTopicPath", e.select_node.path), o("hasProblemSolution", !1), await _({}), o("selectedTopicTitle", e.select_node.title), o("selectedTopicHeading", e.select_node.topic ? "Problems for " + e.select_node.title : "Select a Topic to view problems"), o("selectedTopicProblems", e.select_node.problems), o("selectedTopicProblemItems", e.select_node.problemItems), o("selectedProblemIds", []), o("selectedProblemText", ""), o("selectedTopicProblemsText", e.select_node.text), o("structureStatus", e.select_node.topic ? "Topic selected. Add problems or set the hierarchy as context." : "Select a Topic node to view its problems."), e.select_node.topic && (await mr({ fallbackProblems: e.select_node.problems, topicId: e.select_node.id, topicPath: e.select_node.path }), await ur({ topicPath: e.select_node.path, topicTitle: e.select_node.title })), e.select_node;
  }
  async function mr(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          const u = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context";
          return { contextKey: String(i.savedContextKey), versionNumber: Number(i.savedSyllabusVersion), locale: String(M.locale || "en") };
        })();
        n.topic_problem_context = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_context" };
      return e.error = a, n.topic_problem_context = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.topic_problem_context.contextKey }}", locale: "{{ stepResults.topic_problem_context.locale }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.topic_problem_context.versionNumber }}" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.contextKey, a.versionNumber, a.topicPath, a.locale], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListTopicProblems", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListTopicProblems", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.topic_problem_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_query" };
      return e.error = a, n.topic_problem_query = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = Array.isArray(n.topic_problem_query) ? n.topic_problem_query : [], m = u.map((C) => String(C && C.statement || "").trim()).filter(Boolean), d = Array.isArray(r.fallbackProblems) ? r.fallbackProblems.map(String) : [], h = [...new Set(m.length ? m : d)], x = h.map((C, A) => ({ id: String(r.topicId) + "-problem-" + (A + 1), label: A + 1 + ". " + C, data: { type: "problem", topicId: String(r.topicId), text: C, stored: m.length > 0 } }));
          return { problems: h, items: x, source: m.length ? "database" : "hierarchy" };
        })();
        n.topic_problem_merge = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_merge" };
      return e.error = a, n.topic_problem_merge = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    return o("selectedTopicProblems", n.topic_problem_merge.problems), o("selectedTopicProblemItems", n.topic_problem_merge.items), o("structureStatus", n.topic_problem_merge.source === "database" ? "Stored problems loaded for this Topic." : "Proposed problems shown. Select one to save its generated solution."), n.topic_problem_merge;
  }
  async function pr(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => (function(m, d, h) {
          if (!h.canUseStudio) throw new Error("Verified educator access is required.");
          const x = String(h.syllabusTitle || "").trim(), C = String(h.syllabusDraftText || "").trim();
          if (!x || x.length > 180 || !C || C.length > 1e5) throw new Error("Provide a title and syllabus text within the supported limits.");
          const A = h.finalHierarchy, w = [], F = /* @__PURE__ */ new Set();
          let b = 0;
          const R = (N, B = [], E = 0) => {
            if (!N || typeof N != "object" || E > 4 || ++b > 500 || !/^[a-z0-9][a-z0-9-]{0,79}$/.test(N.id || "") || !String(N.title || "").trim()) throw new Error("Generate a valid hierarchy before saving.");
            const D = [...B, N.id], V = D.join("/");
            if (F.has(V)) throw new Error("Hierarchy paths must be unique.");
            if (F.add(V), N.type === "topic") for (const ee of Array.isArray(N.problems) ? N.problems : []) {
              const X = String(ee || "").trim();
              if (!X || X.length > 16e3) throw new Error("Invalid topic problem.");
              w.push({ topicId: N.id, topicPath: V, statement: X, normalized: X.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim() });
            }
            for (const ee of Array.isArray(N.children) ? N.children : []) R(ee, D, E + 1);
          };
          if (R(A), !w.length || w.length > 500) throw new Error("Add 1–500 topic problems before saving.");
          let Q = 2166136261;
          for (const N of x.normalize("NFKC")) Q = Math.imul(Q ^ N.codePointAt(0), 16777619) >>> 0;
          const q = String(h.savedSyllabusKey || "course-" + Q.toString(36)), z = Number(h.savedSyllabusVersion || d.contextVersionNumber || 1);
          if (!Number.isInteger(z) || z < 1 || z > 1e5) throw new Error("Invalid course version.");
          const G = m.status === "published" ? "published" : "draft";
          return { title: x, text: C, syllabusKey: q, versionNumber: z, description: String(h.syllabusDescription || "").trim(), languageCode: ["en", "hi", "ta"].includes(d.locale) ? d.locale : "en", hierarchy: A, problems: w, status: G, visibility: G === "published" ? "public" : "private" };
        })(r, M, i))();
        n.save_syllabus_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_prepare" };
      return e.error = a, n.save_syllabus_prepare = { error: a }, o("isSavingSyllabus", !1), await _({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("isSavingSyllabus", !0), await _({});
    try {
      {
        const a = $({ description: "{{ stepResults.save_syllabus_prepare.description }}", hierarchy: "{{ stepResults.save_syllabus_prepare.hierarchy }}", languageCode: "{{ stepResults.save_syllabus_prepare.languageCode }}", problems: "{{ stepResults.save_syllabus_prepare.problems }}", status: "{{ stepResults.save_syllabus_prepare.status }}", syllabusKey: "{{ stepResults.save_syllabus_prepare.syllabusKey }}", syllabusText: "{{ stepResults.save_syllabus_prepare.text }}", title: "{{ stepResults.save_syllabus_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.save_syllabus_prepare.versionNumber }}", visibility: "{{ stepResults.save_syllabus_prepare.visibility }}" }, { args: r, inputs: M, state: i, sharedState: Y, applicationState: J, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const p = [void 0, a.syllabusKey, a.versionNumber, a.title, a.description, a.languageCode, a.syllabusText, a.hierarchy, a.status, a.visibility, a.problems], l = c.executeDatabaseQuery || c.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveProfessorSyllabus", parameters: p, namedParameters: a, signal: r.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveProfessorSyllabus", parameters: p, namedParameters: a }), signal: r.signal }), d = await m.json().catch(() => ({}));
          if (!m.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + m.status + ")");
          u = d.data;
        }
        n.save_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_query" };
      return e.error = a, n.save_syllabus_query = { error: a }, o("isSavingSyllabus", !1), await _({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => {
          const u = n.save_syllabus_query, m = Array.isArray(u) ? u[0]?.result : null;
          if (!m?.id || !m.contextKey) throw new Error("The version is immutable or could not be saved. Start a new version.");
          return m;
        })();
        n.save_syllabus_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_result" };
      return e.error = a, n.save_syllabus_result = { error: a }, o("isSavingSyllabus", !1), await _({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("selectedSyllabusId", n.save_syllabus_result.id), await _({}), o("savedSyllabusKey", n.save_syllabus_result.key), await _({}), o("savedSyllabusVersion", n.save_syllabus_result.versionNumber), await _({}), o("savedContextKey", n.save_syllabus_result.contextKey), await _({}), o("syllabusStatus", n.save_syllabus_prepare.status === "published" ? "Published for students under this professor." : "Syllabus draft saved.");
    try {
      await Ee({});
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_refresh" };
      return e.error = a, n.save_syllabus_refresh = { error: a }, o("isSavingSyllabus", !1), await _({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    return o("isSavingSyllabus", !1), await _({}), n.save_syllabus_result;
  }
  async function js(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = L, p = i, l = await (async () => (function(m, d) {
          const h = structuredClone(d.strategyDraft || {}), x = Array.isArray(d.blackboardLesson?.steps) ? d.blackboardLesson.steps : [], C = m.stepId ? x.find((b) => b.id === m.stepId) : x[Number(d.activeStep || 0)];
          if (!C?.id || !String(C.title || "").trim()) throw new Error("Select a real lesson step before editing the strategy.");
          const A = String(m.operation || "keep");
          if (!["keep", "remove", "annotate"].includes(A)) throw new Error("Unsupported strategy edit.");
          const w = String(C.title).trim();
          for (const b of ["requiredSteps", "forbiddenShortcuts", "teachingNotes"]) h[b] = Array.isArray(h[b]) ? h[b].map(String) : [];
          if (A === "keep" && !h.requiredSteps.includes(w) && h.requiredSteps.push(w), A === "remove") {
            h.requiredSteps = h.requiredSteps.filter((R) => R !== w);
            const b = "Avoid this step when it is unnecessary: " + w;
            h.forbiddenShortcuts.includes(b) || h.forbiddenShortcuts.push(b);
          }
          if (A === "annotate") {
            const b = String(m.note || "").trim();
            if (!b || b.length > 2e3) throw new Error("Provide a teaching note of 1–2000 characters.");
            const R = w + ": " + b;
            h.teachingNotes.includes(R) || h.teachingNotes.push(R);
          }
          const F = [
            `Preferred method
` + String(h.preferredMethod || "Professor-guided method"),
            `Required steps
` + h.requiredSteps.map((b, R) => R + 1 + ". " + b).join(`
`),
            `Avoid
` + h.forbiddenShortcuts.map((b) => "• " + b).join(`
`),
            `Verification
` + (Array.isArray(h.verificationRules) ? h.verificationRules : []).map((b) => "• " + b).join(`
`),
            `Teaching notes
` + h.teachingNotes.map((b) => "• " + b).join(`
`)
          ].join(`

`);
          return { draft: h, text: F, operation: A, step: w, stepId: C.id };
        })(r, i))();
        n.strategy_edit = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "strategy_edit" };
      return e.error = a, n.strategy_edit = { error: a }, o("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy."), { ok: !1 };
    }
    o("strategyDraft", n.strategy_edit.draft), o("strategyDraftText", n.strategy_edit.text), o("strategyStatus", "Strategy draft updated from the representative solution. Approve it to create a new version.");
    try {
      await se("stepOperationRequested", { note: r.note || "", operation: r.operation, stepId: n.strategy_edit.stepId }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "edit_emit" };
      return e.error = a, n.edit_emit = { error: a }, o("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy."), { ok: !1 };
    }
    return n.strategy_edit.draft;
  }
  async function Ls(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = String(r.value || ""), a = String(i.teacherQuestionCorrectValue || ""), p = String(M.locale || "en").toLowerCase(), l = !!t && t === a;
        return { value: t, feedback: (p === "hi" ? l ? "सही उत्तर।" : "फिर से प्रयास करें।" : p === "ta" ? l ? "சரியான பதில்." : "மீண்டும் முயற்சிக்கவும்." : l ? "Correct." : "Try again.") + (i.teacherQuestionExplanation ? " " + String(i.teacherQuestionExplanation) : "") };
      })();
      e.teacher_answer_read = n;
    }
    o("selectedTeacherAnswer", e.teacher_answer_read.value), o("teacherAnswerFeedback", e.teacher_answer_read.feedback);
  }
  async function _(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => (function(a) {
        const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
        return {
          busy: p,
          unavailable: l,
          previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
          versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
          lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
        };
      })(i))();
      e.studio_controls_read = n;
    }
    o("studioControls", e.studio_controls_read);
  }
  async function Ms(s = {}) {
    o("newProblemText", (s || {}).value);
  }
  async function Os(s = {}) {
    o("syllabusTitle", (s || {}).value);
  }
  async function br(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = M.accessProfile && typeof M.accessProfile == "object" ? M.accessProfile : {}, a = Object.keys(t).length > 0, p = a ? t.authenticated === !0 || t.isAuthenticated === !0 || !!(t.uid || t.userId || t.id) : M.authenticated === !0, l = a && Array.isArray(t.roles) ? t.roles.map(String) : [String(M.userRole || "")], u = String(a ? t.verificationStatus || "pending" : M.verificationStatus || "pending"), m = l.some((A) => ["professor", "educator", "admin", "institution_admin"].includes(A)), d = p && m && u === "approved";
        return { authenticated: p, roles: l, status: u, canUseStudio: d, title: p ? m ? u === "rejected" ? "Professor verification rejected" : "Professor approval required" : "Professor access required" : "Sign in required", message: p ? m ? u === "rejected" ? "Your professor verification was rejected. Contact your institution administrator." : "Your professor verification is pending. The studio will unlock after server-side approval." : "This workspace is available only to professors and institution administrators." : "Sign in and complete professor registration to use this studio.", badgeLabel: d ? "Verified professor" : u === "rejected" ? "Verification rejected" : "Verification pending" };
      })();
      e.prof_access_derive = n;
    }
    return o("canUseStudio", e.prof_access_derive.canUseStudio), await _({}), o("showAccessGate", !e.prof_access_derive.canUseStudio), o("accessGateTitle", e.prof_access_derive.title), o("accessGateMessage", e.prof_access_derive.message), o("accessBadgeLabel", e.prof_access_derive.badgeLabel), e.prof_access_derive;
  }
  async function Ks(s = {}) {
    if ((function(e) {
      const n = !!(e.isSavingSyllabus || e.isGeneratingStructure || e.isResolvingProblem || e.isSavingStrategy || e.isLoadingSyllabi || e.isOpeningSyllabus), t = e.canUseStudio !== !0 || n, a = !!(e.selectedSyllabusId && e.savedSyllabusKey && e.savedContextKey && Number.isInteger(e.savedSyllabusVersion) && e.savedSyllabusVersion > 0);
      return {
        busy: n,
        unavailable: t,
        previewDisabled: t || !a || !e.hasProblemSolution || !e.savedProblemId,
        versionDisabled: t || !a || e.savedSyllabusVersion >= 1e5,
        lessonEmpty: !e.isResolvingProblem && !e.hasProblemSolution
      };
    })(i).versionDisabled)
      return { ok: !1, reason: "studio_unavailable" };
    o("contentPreviewPacket", {}), o("savedSyllabusVersion", Math.max(1, Number(i.savedSyllabusVersion || M.contextVersionNumber || 1)) + 1), await _({}), o("selectedSyllabusId", ""), await _({}), o("savedContextKey", ""), await _({}), o("savedProblemId", ""), await _({}), o("hasProblemSolution", !1), await _({}), o("syllabusStatus", "New version prepared. Save it before resolving or previewing lessons.");
  }
  async function Fs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => (function(a, p) {
        const l = Array.isArray(p.studentLesson?.steps) ? p.studentLesson.steps : [], u = a.event ?? a.stepIndex ?? a.index ?? 0, m = Number(typeof u == "object" ? u?.nextIndex ?? u?.index : u), d = Math.max(0, Math.min(Math.max(0, l.length - 1), Number.isFinite(m) ? Math.floor(m) : 0)), h = l[d]?.teacherQuestion || {}, x = Number(p.progressPercent), C = Math.max(Number.isFinite(x) ? Math.min(100, Math.max(0, x)) : 0, l.length ? Math.round((d + 1) / l.length * 100) : 0);
        return { index: d, stepId: String(l[d]?.id || ""), prompt: String(h.prompt || ""), options: Array.isArray(h.options) ? h.options : [], correctValue: String(h.correctValue || ""), explanation: String(h.explanation || ""), progress: C, completed: C === 100 };
      })(r, { studentLesson: i.blackboardLesson, progressPercent: 0 }))();
      e.teacher_step_read = n;
    }
    o("activeStep", e.teacher_step_read.index), o("teacherQuestionPrompt", e.teacher_step_read.prompt), o("teacherQuestionOptions", e.teacher_step_read.options), o("teacherQuestionCorrectValue", e.teacher_step_read.correctValue), o("teacherQuestionExplanation", e.teacher_step_read.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", "");
  }
  async function Vs(s = {}) {
    o("syllabusDraftText", (s || {}).value || "");
  }
  async function Qs(s = {}) {
    o("showSyllabusSetup", !0), o("isSyllabusSetupCollapsed", !1);
  }
  async function zs(s = {}) {
    o("syllabusDescription", (s || {}).value);
  }
  const Gs = {
    selectProblem: xs,
    refreshProfessorScenario: Ie,
    addProblems: ws,
    setHierarchyContext: _s,
    shareLesson: Ps,
    loadContextStrategy: ur,
    selectSavedSyllabus: Ts,
    syncSyllabusInput: dr,
    prepareContentPreview: Is,
    closeNewProblemForm: As,
    setNewProblemSolutionMode: Es,
    publishContext: qs,
    resolveProblemSolution: Ae,
    collapseSyllabusSetup: Cs,
    requestStructure: Rs,
    submitNewProblem: Ns,
    loadProfessorSyllabi: Ee,
    openNewProblemForm: Ds,
    selectHierarchyNode: ks,
    loadTopicProblems: mr,
    saveProfessorSyllabus: pr,
    editStep: js,
    selectTeacherAnswer: Ls,
    refreshStudioControls: _,
    setNewProblemText: Ms,
    setSyllabusTitle: Os,
    initializeProfessorAccess: br,
    startNextSyllabusVersion: Ks,
    selectStep: Fs,
    setSyllabusText: Vs,
    expandSyllabusSetup: Qs,
    setSyllabusDescription: zs
  }, Us = {
    selectProblem: ["item", "index", "depth"],
    refreshProfessorScenario: [],
    addProblems: [],
    setHierarchyContext: [],
    shareLesson: [],
    loadContextStrategy: ["topicPath", "topicTitle"],
    selectSavedSyllabus: ["value"],
    syncSyllabusInput: [],
    prepareContentPreview: [],
    closeNewProblemForm: [],
    setNewProblemSolutionMode: ["value"],
    publishContext: [],
    resolveProblemSolution: ["statement", "solutionMode"],
    collapseSyllabusSetup: [],
    requestStructure: [],
    submitNewProblem: [],
    loadProfessorSyllabi: [],
    openNewProblemForm: [],
    selectHierarchyNode: ["item", "index", "depth"],
    loadTopicProblems: ["topicPath", "topicId", "fallbackProblems"],
    saveProfessorSyllabus: ["status"],
    editStep: ["operation", "stepId", "note"],
    selectTeacherAnswer: ["value"],
    refreshStudioControls: [],
    setNewProblemText: ["value"],
    setSyllabusTitle: ["value"],
    initializeProfessorAccess: [],
    startNextSyllabusVersion: [],
    selectStep: ["event", "stepIndex", "index"],
    setSyllabusText: ["value"],
    expandSyllabusSetup: [],
    setSyllabusDescription: ["value"]
  }, O = (s, r = {}, e = []) => {
    const n = Gs[s];
    if (n) {
      const u = Us[s] || [];
      return n(Object.fromEntries(u.map((m, d) => {
        const h = Object.prototype.hasOwnProperty.call(r, m) ? r[m] : void 0;
        return [m, (h === "" || h === void 0) && e[d] !== void 0 ? e[d] : m === "event" && (h === "" || h === void 0) ? e[0] : h];
      })));
    }
    const t = xr?.[s];
    if (typeof t == "function")
      return t(Object.keys(r).length > 0 ? r : e[0]);
    const [a, p] = String(s).split("."), l = typeof globalThis < "u" ? globalThis[a]?.[p] : void 0;
    if (typeof l == "function") return l(...Object.values(r));
    console.warn("Rudra action '" + s + "' is not available in this runtime.");
  }, ae = me(/* @__PURE__ */ new Map()), de = le((s, r, e, n) => {
    const t = ae.current.get(s);
    if (r === "exhaust" && t?.promise) return t.promise;
    r === "takeLatest" && t?.controller?.abort();
    const a = new AbortController(), p = () => Promise.resolve().then(() => e(a.signal)), l = r === "queue" && t?.promise ? t.promise.catch(() => {
    }).then(p) : p();
    return ae.current.set(s, { controller: a, promise: l }), l.catch((u) => {
      u?.name !== "AbortError" && console.error(n, u);
    }).finally(() => {
      ae.current.get(s)?.promise === l && ae.current.delete(s);
    }), l;
  }, []);
  re(() => () => {
    for (const s of ae.current.values()) s.controller?.abort();
    ae.current.clear();
  }, []), re(() => {
    de("professor_scenario_mountrefreshProfessorScenario", "takeLatest", (s) => Ie({}), "Module mount lifecycle failed:");
  }, []), re(() => {
    de("professor_syllabi_mountloadProfessorSyllabi", "takeLatest", (s) => Ee({ signal: s }), "Module mount lifecycle failed:");
  }, []);
  const yr = me(!1);
  re(() => {
    yr.current || (yr.current = !0), ut(structuredClone(!0)), St(structuredClone("Professor approval required")), nr(structuredClone("Sign in with an approved professor account to use this studio.")), Vt(structuredClone("Verification pending")), Be(structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), yt(structuredClone("")), Fe(structuredClone("Select a saved syllabus or save this draft.")), Ut(structuredClone(!0)), Ct(structuredClone(!1)), xt(structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), it(structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), Ze(structuredClone([])), Bt(structuredClone(!1)), Ve(structuredClone("")), $e(structuredClone("")), gt(structuredClone("")), jt(structuredClone("Selected topic problems")), vt(structuredClone([])), Dt(structuredClone([])), Ue(structuredClone([])), dt(structuredClone("")), It(structuredClone("")), ir(structuredClone(!1)), Ot(structuredClone({})), er(structuredClone("")), ar(structuredClone("Select a problem to load its saved solution.")), lr(structuredClone(!1)), zt(structuredClone(0)), tt(structuredClone("")), Tt(structuredClone("Select one answer.")), Zt(structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), st(structuredClone("Find the eigenvalues of a 2 × 2 matrix")), Et(structuredClone("Representative problem · Linear algebra")), _t(structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), ze(structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), Wt(structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), rr(structuredClone(!1)), sr(structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), mt(structuredClone("")), Xe(structuredClone(0)), ht(structuredClone("")), pt(structuredClone("")), ot(structuredClone({})), de("professor_scenario_inputsrefreshProfessorScenario", "takeLatest", (s) => Ie({}), "Module input lifecycle failed:");
  }, [he, ge, Se, Oe, je, De, ke, Le, fe, Me]);
  const hr = me(!1);
  return re(() => {
    hr.current || (hr.current = !0), de("studio_controls_inputsrefreshStudioControls", "takeLatest", (s) => _({}), "Module input lifecycle failed:");
  }, [Se, he, ge, fe]), /* @__PURE__ */ T("div", { ref: pe, className: "rudra-module-wrapper", children: S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
    "      ",
    /* @__PURE__ */ y(U, { id: "root", className: "block rs-studio", children: [
      "      ",
      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
        "      ",
        /* @__PURE__ */ y(U, { id: "inner", className: "flex flex-col rs-studio-inner", children: [
          "      ",
          S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
            "      ",
            /* @__PURE__ */ y(U, { id: "head", className: "flex flex-wrap rs-studio-head", children: [
              "      ",
              S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                "      ",
                /* @__PURE__ */ y(U, { id: "head_copy", className: "flex flex-col rs-head-copy", children: [
                  "      ",
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(Hs, { id: "badge", label: /* @__PURE__ */ ((s) => s === void 0 ? "Verification pending" : s)(Ft), ariaLabel: "Professor verification status" })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "title", className: "rs-title", as: "h2", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor context studio" : s)(ce?.i18n?.title) })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Import a semester and steer representative solutions." : s)(ce?.i18n?.subtitle) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          S(ct) && /* @__PURE__ */ y(f, { children: [
            "      ",
            /* @__PURE__ */ y(gr, { id: "verification", title: /* @__PURE__ */ y(f, { children: [
              "      ",
              S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                "      ",
                /* @__PURE__ */ T(K, { id: "verification_title", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor approval required" : s)(ft), as: "h4" })
              ] })
            ] }), icon: /* @__PURE__ */ y(f, { children: [
              "      ",
              S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                "      ",
                /* @__PURE__ */ T(K, { id: "verification_icon", className: "rs-verification-icon", as: "span", content: "!" })
              ] })
            ] }), variant: "warning", appearance: "soft", live: "polite", children: [
              "      ",
              S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                "      ",
                /* @__PURE__ */ T(K, { id: "verification_message", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Sign in with an approved professor account to use this studio." : s)(or) })
              ] })
            ] })
          ] }),
          S(tr) && /* @__PURE__ */ y(f, { children: [
            "      ",
            /* @__PURE__ */ y(U, { id: "grid", className: "grid rs-grid", children: [
              "      ",
              S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                "      ",
                /* @__PURE__ */ y(fr, { id: "left", className: "rs-panel", as: "section", theme: "auto", children: [
                  "      ",
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "syllabus_catalog", className: "block rs-syllabus-catalog", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "syllabus_catalog_title", as: "h4", content: "Your saved syllabi" })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(Sr, { id: "saved_syllabus_select", placeholder: "Select a syllabus", onChangeValue: (...s) => O("selectSavedSyllabus", {}, s), name: "savedSyllabus", size: "md", label: "Continue with a saved syllabus", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(bt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.unavailable), radius: "md", options: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Lt) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "refresh_syllabi", className: "rs-studio-action", variant: "ghost", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ve), onAction: (...s) => O("loadProfessorSyllabi", {}, s), loadingText: "Loading syllabi…", label: "Refresh syllabi", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ve) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "save_syllabus_draft", className: "rs-studio-action", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.unavailable), onAction: (...s) => O("saveProfessorSyllabus", { status: "draft" }, s), loadingText: "Saving syllabus…", label: "Save current syllabus", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(_e) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "publish_syllabus_students", className: "rs-studio-action", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.unavailable), onAction: (...s) => O("saveProfessorSyllabus", { status: "published" }, s), loadingText: "Publishing syllabus…", label: "Publish current syllabus for students", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(_e) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "syllabus_catalog_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select a saved syllabus or save this draft." : s)(Ke) })
                      ] })
                    ] })
                  ] }),
                  S(oe) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "syllabus_metadata", className: "block rs-syllabus-metadata", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(Bs, { id: "syllabus_title_input", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(W?.busy), required: !0, placeholder: "Engineering Mathematics I", onChangeValue: (...s) => O("setSyllabusTitle", {}, s), name: "syllabusTitle", size: "md", label: "Syllabus title", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(We) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(Ce, { id: "syllabus_description_input", placeholder: "What students will learn", onChangeValue: (...s) => O("setSyllabusDescription", {}, s), name: "syllabusDescription", rows: 3, label: "Description", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Mt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(W?.busy) })
                      ] })
                    ] })
                  ] }),
                  S(oe) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "left_title", as: "h3", content: /* @__PURE__ */ ((s) => s === void 0 ? "Semester syllabus" : s)(ce?.i18n?.import) })
                  ] }),
                  S(qt) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(H, { id: "edit_syllabus_setup", className: "rs-studio-action", label: "Edit syllabus / Regenerate", theme: "auto", variant: "outline", onAction: (...s) => O("expandSyllabusSetup", {}, s) })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "structure_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Review the proposed hierarchy, add problems, then set it as context." : s)(Kt) })
                  ] }),
                  S(oe) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(Ce, { id: "syllabus", name: "syllabus", rows: 10, label: "Paste one section or a complete semester", value: /* @__PURE__ */ ((s) => s === void 0 ? `Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation` : s)(He), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(W?.busy), helperText: "AI proposes programme → semester → subject → unit → topic. You approve before anything is saved.", onChangeValue: (...s) => O("setSyllabusText", {}, s) })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(gr, { id: "rules", variant: "info", appearance: "outlined", live: "off", title: "Reusable context draft", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "studio_rules_body", content: /* @__PURE__ */ ((s) => s === void 0 ? "Save your syllabus, review a lesson, and approve the teaching strategy before publishing." : s)(we), as: "p" })
                      ] })
                    ] })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "final_hierarchy_title", as: "h3", content: "Final hierarchy" })
                  ] }),
                  S(oe) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "syllabus_actions", className: "flex flex-wrap rs-syllabus-actions", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "structure", className: "rs-studio-action", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Gt), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.unavailable), onAction: (...s) => O("requestStructure", {}, s), loadingText: "Generating hierarchy…", label: "Propose structure with AI", theme: "auto" })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "collapse_syllabus_setup", className: "rs-studio-action", onAction: (...s) => O("collapseSyllabusSetup", {}, s), label: "Hide setup", theme: "auto", variant: "ghost" })
                      ] })
                    ] })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(vr, { id: "tree", className: "w-full rs-tree-view", items: /* @__PURE__ */ ((s) => s === void 0 ? [{ children: [{ children: [{ children: [{ children: [{ children: [], data: { problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }] : s)(nt), selectedIds: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Je), selectionMode: "single", showDefaultIcons: !0, indent: 22, showLines: !0, onItemClick: (...s) => O("selectHierarchyNode", {}, s), defaultExpandAll: !0, expandOnItemClick: !0, children: (s) => (() => {
                      const r = { ...s || {}, item: s?.item ?? s, index: s?.index ?? s?.i ?? 0 };
                      return /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "hierarchy_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label) })
                      ] });
                    })() })
                  ] }),
                  S(ne) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "problems_title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "Selected topic problems" : s)(kt) })
                  ] }),
                  S(ne) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(vr, { id: "problems_text", className: "rs-problem-list", showLines: !1, onItemClick: (...s) => O("selectProblem", {}, s), selectedIds: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Ge), defaultExpandAll: !0, showDefaultIcons: !0, expandOnItemClick: !0, items: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Nt), emptyText: "No problems yet. Use Add problems to create examples.", selectionMode: "single", indent: 20, children: (s) => (() => {
                      const r = { ...s || {}, item: s?.item ?? s, index: s?.index ?? s?.i ?? 0 };
                      return /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "problem_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label) })
                      ] });
                    })() })
                  ] }),
                  S(Rt) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "new_problem_form", className: "block rs-new-problem-form", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "new_problem_title", as: "h4", content: "Add a context-scoped problem" })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(Ce, { id: "new_problem_input", label: "Problem statement", onChangeValue: (...s) => O("setNewProblemText", {}, s), value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Ye), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(W?.busy), required: !0, autoResize: !0, placeholder: "Enter a new problem for the selected topic", name: "newProblem", rows: 5 })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(Sr, { id: "new_problem_mode", onChangeValue: (...s) => O("setNewProblemSolutionMode", {}, s), name: "solutionMode", size: "md", label: "Solution style", value: /* @__PURE__ */ ((s) => s === void 0 ? "detailed" : s)(Yt), radius: "md", options: [{ label: "Detailed steps", value: "detailed" }, { label: "Quick solution", value: "quick" }] })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ y(U, { id: "new_problem_actions", className: "flex flex-wrap rs-new-problem-actions", children: [
                          "      ",
                          S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                            "      ",
                            /* @__PURE__ */ T(H, { id: "save_new_problem", className: "rs-studio-action", loadingText: "Checking saved solutions…", label: "Find or generate solution", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ue), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ue), onAction: (...s) => O("submitNewProblem", {}, s) })
                          ] }),
                          S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                            "      ",
                            /* @__PURE__ */ T(H, { id: "cancel_new_problem", className: "rs-studio-action", label: "Cancel", theme: "auto", variant: "ghost", onAction: (...s) => O("closeNewProblemForm", {}, s) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  S(ie) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "problem_solution_panel", className: "block rs-problem-solution", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "problem_solution_text", className: "rs-problem-solution-text", as: "div", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Xt) })
                      ] })
                    ] })
                  ] }),
                  S(ne) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "hierarchy_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "add_problems", className: "rs-studio-action", variant: "outline", onAction: (...s) => O("openNewProblemForm", {}, s), label: "Add new problem", theme: "auto" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                "      ",
                /* @__PURE__ */ y(fr, { id: "right", className: "rs-panel", as: "section", theme: "auto", children: [
                  "      ",
                  S(/* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.lessonEmpty)) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "studio_lesson_empty", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, select a topic, then choose or add a problem to review its lesson." })
                  ] }),
                  S(/* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Pe)) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "problem_solution_status", className: "rs-solution-source", as: "p", role: "status", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Pe), "aria-live": "polite" })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(K, { id: "right_title", as: "h3", content: /* @__PURE__ */ ((s) => s === void 0 ? "Steer a representative solution" : s)(ce?.i18n?.board) })
                  ] }),
                  S(ue) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "board_loading", className: "flex rs-board-loading", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "board_loading_indicator", className: "rs-loading-orb", as: "span", content: "" })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "board_loading_text", as: "p", content: "Loading the saved solution or generating a new lesson…" })
                      ] })
                    ] })
                  ] }),
                  S(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ie)) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ T(Ws, { id: "board", learningGoal: /* @__PURE__ */ ((s) => s === void 0 ? "Form the characteristic equation, solve it and verify the eigenvalues." : s)(Qe), problemLabel: /* @__PURE__ */ ((s) => s === void 0 ? "Representative problem · Linear algebra" : s)(At), stepDurationMs: 5500, boardOptions: { animateCurrentStepOnly: !0, clearFutureSteps: !1, preserveRevealedSteps: !0, writingEffect: !0 }, showStepPopup: !0, lessonKind: /* @__PURE__ */ ((s) => s === void 0 ? "worked-example" : s)(Jt?.lessonKind), speedLabel: "Normal", autoAdvance: !0, editOperations: [], captionsEnabled: !0, problemStatement: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : s)(wt), onStepSelect: (...s) => O("selectStep", {}, s), popupInitiallyOpen: !1, reducedMotion: !1, steps: /* @__PURE__ */ ((s) => s === void 0 ? [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: 0, value: "b" }, { label: 1, value: "c" }, { label: 3, value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }] : s)($t), title: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of a 2 × 2 matrix" : s)(rt), onNext: (...s) => O("selectStep", {}, s), playing: !1, activeStep: /* @__PURE__ */ ((s) => s === void 0 ? 0 : s)(Qt) })
                  ] }),
                  S(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ie)) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "teacher_question_panel", className: "block rs-teacher-question", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "teacher_question_title", className: "rs-teacher-question-title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "What size identity matrix is required here?" : s)(Ht) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T($s, { id: "teacher_question_choices", label: "Choose one answer", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(et), layout: "vertical", options: /* @__PURE__ */ ((s) => s === void 0 ? [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }] : s)(lt), colorScheme: "emerald", onChangeValue: (...s) => O("selectTeacherAnswer", {}, s), name: "teacherAnswer", size: "md" })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "teacher_question_feedback", className: "rs-teacher-question-feedback", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select one answer." : s)(Pt) })
                      ] })
                    ] })
                  ] }),
                  S(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ie)) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "steer_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "keep", className: "rs-studio-action", label: "Keep", theme: "auto", variant: "primary", onAction: (...s) => O("editStep", { operation: "keep" }, s) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "remove", className: "rs-studio-action", label: "Remove", theme: "auto", variant: "outline", onAction: (...s) => O("editStep", { operation: "remove" }, s) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "annotate", className: "rs-studio-action", label: "Add teaching note", theme: "auto", variant: "ghost", onAction: (...s) => O("editStep", { note: "Explain why this step belongs in similar problems.", operation: "annotate" }, s) })
                      ] })
                    ] })
                  ] }),
                  S(ne) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "strategy_panel", className: "block rs-strategy-panel", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "strategy_title", as: "h3", content: "Teaching strategy for this Topic" })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "strategy_status", className: "rs-strategy-status", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(at) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "strategy_text", className: "rs-strategy-text", as: "div", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(we) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "set_context", className: "rs-studio-action", label: "Approve strategy as context", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(xe), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(xe), onAction: (...s) => O("setHierarchyContext", {}, s), loadingText: "Saving strategy…" })
                      ] })
                    ] })
                  ] }),
                  S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(U, { id: "publish_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "next_syllabus_version", className: "rs-studio-action", label: "Start next version", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.versionDisabled), onAction: (...s) => O("startNextSyllabusVersion", {}, s) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(K, { id: "studio_contract_note", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, resolve and review a lesson, then prepare a student preview. Published versions are read-only; start the next version to make changes." })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "preview_content", className: "rs-studio-action", label: "Prepare student preview", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.previewDisabled), onAction: (...s) => O("prepareContentPreview", {}, s) })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "publish", className: "rs-studio-action", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(W?.unavailable), onAction: (...s) => O("publishContext", {}, s), label: "Publish immutable context version", theme: "auto" })
                      ] }),
                      S(I({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ T(H, { id: "share", className: "rs-studio-action", onAction: (...s) => O("shareLesson", {}, s), label: "Create student share link", theme: "auto", variant: "outline" })
                      ] })
                    ] })
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
  aa as default
};
