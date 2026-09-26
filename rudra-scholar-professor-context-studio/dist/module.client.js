import { jsxs as h, jsx as P, Fragment as f } from "react/jsx-runtime";
import { useState as v, useEffect as re, useRef as me, useCallback as le } from "react";
import { Badge as Xs, Typography as K, Button as H, Alert as vr, Card as xr } from "@rudra-studio/rudra-core";
import { TreeView as wr } from "@rudra-studio/rudra-widgets";
import { Box as U } from "@rudra-studio/rudra-layout";
import { Select as _r, Input as ea, Textarea as Re, RadioGroup as ta } from "@rudra-studio/rudra-form";
import { BlackboardLesson as ra } from "@rudra-studio/chalkmind-math";
function da(c) {
  const ce = {}, k = c.serverData || c.serverState || {}, W = c.sharedState || {}, Y = c.applicationState || k.applicationState || {}, Z = c.pageState || k.pageState || {}, L = c.pageData || k.pageData || {}, Pr = {
    ...c.runtime?.functions || {},
    ...c.runtime?.actions || {},
    ...c.functions || {},
    ...c.actions || {}
  };
  c.$route ?? c.route ?? c.data?.$route ?? c.data?.route ?? c.runtime?.data?.$route ?? c.runtime?.route ?? k?.$route ?? k?.route, c.$params ?? c.routeParams ?? c.params ?? c.data?.$params ?? c.data?.routeParams ?? c.data?.params ?? c.runtime?.data?.$params ?? c.runtime?.route?.params ?? c.runtime?.routeParams ?? c.runtime?.params ?? k?.$params ?? k?.routeParams ?? k?.params, c.$query ?? c.queryParams ?? c.query ?? c.data?.$query ?? c.data?.queryParams ?? c.data?.query ?? c.runtime?.data?.$query ?? c.runtime?.route?.query ?? c.runtime?.queryParams ?? c.runtime?.query ?? k?.$query ?? k?.queryParams ?? k?.query, c.$auth ?? c.auth ?? c.data?.$auth ?? c.data?.auth ?? c.runtime?.data?.$auth ?? c.runtime?.authInfo ?? c.runtime?.auth ?? k?.$auth ?? k?.auth, c.$config ?? c.config ?? c.data?.$config ?? c.data?.config ?? c.runtime?.data?.$config ?? c.runtime?.config ?? k?.$config ?? k?.config, c.$env ?? c.env ?? c.data?.$env ?? c.data?.env ?? c.runtime?.data?.$env ?? c.runtime?.env ?? k?.$env ?? k?.env, c.$locale ?? c.locale ?? c.data?.$locale ?? c.data?.locale ?? c.runtime?.data?.$locale ?? c.runtime?.locale ?? k?.$locale ?? k?.locale, c.$translations ?? c.translations ?? c.data?.$translations ?? c.data?.translations ?? c.runtime?.data?.$translations ?? c.runtime?.translations ?? k?.$translations ?? k?.translations, c.$i18n ?? c.i18n ?? c.data?.$i18n ?? c.data?.i18n ?? c.runtime?.data?.$i18n ?? c.runtime?.i18n ?? k?.$i18n ?? k?.i18n;
  const te = c.$theme ?? c.theme ?? c.data?.$theme ?? c.runtime?.data?.$theme ?? c.runtime?.theme, Ne = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [sa, De] = v(() => te ?? Ne());
  re(() => {
    te != null && De(te);
  }, [te]), re(() => {
    if (te != null || typeof document > "u") return;
    const s = document.documentElement, r = (i) => De(i?.detail?.theme ?? Ne()), e = new MutationObserver(r);
    return e.observe(s, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      e.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [te]);
  const pe = me(null), [be, ye] = v("lg");
  re(() => {
    if (!pe.current) return;
    const s = new ResizeObserver((r) => {
      for (let e of r) {
        const i = e.contentRect.width;
        i < 768 ? ye("sm") : i < 1024 ? ye("md") : ye("lg");
      }
    });
    return s.observe(pe.current), () => s.disconnect();
  }, []);
  const T = le((s) => typeof s != "object" || s === null ? s : be === "sm" ? s.sm !== void 0 ? s.sm : s.md !== void 0 ? s.md : s.lg : be === "md" ? s.md !== void 0 ? s.md : s.sm !== void 0 ? s.sm : s.lg : s.lg !== void 0 ? s.lg : s.md !== void 0 ? s.md : s.sm, [be]), S = (s) => Array.isArray(s) ? s.length > 0 : typeof s == "string" ? s.trim() !== "" && s.trim().toLowerCase() !== "false" : !!s, he = c.accessProfile !== void 0 ? c.accessProfile : c.data?.accessProfile !== void 0 ? c.data.accessProfile : {}, ke = c.contextVersionNumber !== void 0 ? c.contextVersionNumber : c.data?.contextVersionNumber !== void 0 ? c.data.contextVersionNumber : 1, je = c.returnPath !== void 0 ? c.returnPath : c.data?.returnPath !== void 0 ? c.data.returnPath : "/professor/context", Le = c.syllabusText !== void 0 ? c.syllabusText : c.data?.syllabusText !== void 0 ? c.data.syllabusText : void 0, Oe = c.contextDraft !== void 0 ? c.contextDraft : c.data?.contextDraft !== void 0 ? c.data.contextDraft : {}, Me = c.contextVersionKey !== void 0 ? c.contextVersionKey : c.data?.contextVersionKey !== void 0 ? c.data.contextVersionKey : "", Ke = c.locale !== void 0 ? c.locale : c.data?.locale !== void 0 ? c.data.locale : "en", ge = c.userRole !== void 0 ? c.userRole : c.data?.userRole !== void 0 ? c.data.userRole : "", fe = c.verificationStatus !== void 0 ? c.verificationStatus : c.data?.verificationStatus !== void 0 ? c.data.verificationStatus : "pending", Se = c.authenticated !== void 0 ? c.authenticated : c.data?.authenticated !== void 0 ? c.data.authenticated : !1, O = { accessProfile: he, contextVersionNumber: ke, returnPath: je, syllabusText: Le, contextDraft: Oe, contextVersionKey: Me, locale: Ke, userRole: ge, verificationStatus: fe, authenticated: Se }, [Fe, Qe] = v(() => structuredClone("Find the eigenvalues of a 2 × 2 matrix")), [Ve, Tr] = v(() => structuredClone([{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }])), [Ar, ze] = v(() => structuredClone("")), [Ir, Ge] = v(() => structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), [He, Ue] = v(() => structuredClone("Selected topic problems")), [Be, Er] = v(() => structuredClone(!1)), [oe, $e] = v(() => structuredClone(!0)), [Je, We] = v(() => structuredClone("")), [Cr, qr] = v(() => structuredClone(!0)), [Ye, Rr] = v(() => structuredClone("")), [Nr, Ze] = v(() => structuredClone({})), [Xe, Dr] = v(() => structuredClone("Review the proposed hierarchy, add problems, then set it as context.")), [ne, et] = v(() => structuredClone(!1)), [ve, tt] = v(() => structuredClone("Select a problem to load its saved solution.")), [rt, st] = v(() => structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), [kr, jr] = v(() => structuredClone(["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."])), [xe, Lr] = v(() => structuredClone(!1)), [Or, at] = v(() => structuredClone("")), [ot, nt] = v(() => structuredClone([])), [it, lt] = v(() => structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), [Mr, Kr] = v(() => structuredClone(0)), [ct, Fr] = v(() => structuredClone("detailed")), [ut, Qr] = v(() => structuredClone("Review the example strategy, then approve it for the selected Topic.")), [Vr, dt] = v(() => structuredClone("")), [mt, pt] = v(() => structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), [J, zr] = v(() => structuredClone({ busy: !1, lessonEmpty: !0, previewDisabled: !0, unavailable: !0, versionDisabled: !0 })), [we, Gr] = v(() => structuredClone(!1)), [bt, Hr] = v(() => structuredClone("Hide syllabus panel")), [Ur, Br] = v(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [yt, ht] = v(() => structuredClone("Select one answer.")), [gt, ft] = v(() => structuredClone("Sign in with an approved professor account to use this studio.")), [St, vt] = v(() => structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), [xt, wt] = v(() => structuredClone(!0)), [$r, _t] = v(() => structuredClone("")), [Jr, Wr] = v(() => structuredClone("A is a 2 × 2 matrix, so I must have the same dimensions.")), [Pt, Tt] = v(() => structuredClone([])), [At, Yr] = v(() => structuredClone("What size identity matrix is required here?")), [Zr, It] = v(() => structuredClone([])), [Et, Xr] = v(() => structuredClone("grid rs-grid")), [Ct, qt] = v(() => structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), [Rt, es] = v(() => structuredClone("")), [ts, rs] = v(() => structuredClone(`Programme · B.E. Mathematics
  Semester · Semester 1
    Subject · Engineering Mathematics I
      Unit · Unit 1 · Matrices and systems
        Topic · Matrix operations
        Topic · Eigenvalues and diagonalisation`)), [Nt, ss] = v(() => structuredClone([])), [as, os] = v(() => structuredClone("b")), [ns, Dt] = v(() => structuredClone("")), [kt, jt] = v(() => structuredClone("")), [is, Lt] = v(() => structuredClone("")), [Ot, Mt] = v(() => structuredClone("Verification pending")), [ls, Kt] = v(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [Ft, Qt] = v(() => structuredClone("Select a saved syllabus or save this draft.")), [cs, Vt] = v(() => structuredClone("")), [zt, Gt] = v(() => structuredClone([])), [us, Ht] = v(() => structuredClone(0)), [Ut, Bt] = v(() => structuredClone("")), [ds, ms] = v(() => structuredClone("")), [$t, Jt] = v(() => structuredClone("Professor approval required")), [ps, bs] = v(() => structuredClone(!1)), [_e, ys] = v(() => structuredClone(!1)), [Wt, Yt] = v(() => structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), [Zt, Xt] = v(() => structuredClone("Representative problem · Linear algebra")), [er, hs] = v(() => structuredClone(!1)), [tr, rr] = v(() => structuredClone(!1)), [ie, sr] = v(() => structuredClone(!1)), [Pe, gs] = v(() => structuredClone(!0)), [ar, fs] = v(() => structuredClone("Engineering Mathematics I")), [Ss, or] = v(() => structuredClone({})), [nr, ir] = v(() => structuredClone(0)), [ue, lr] = v(() => structuredClone(!1)), [vs, cr] = v(() => structuredClone("")), [xs, ws] = v(() => structuredClone("")), [ur, dr] = v(() => structuredClone(!1)), [Te, _s] = v(() => structuredClone(`Preferred method
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
• Prefer a direct 2×2 method when it is clearer than row reduction.`)), [Ps, Ts] = v(() => structuredClone(`1. Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].
2. Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.
3. Diagonalise A = [[4, 1], [2, 3]] and verify the result.`)), n = { blackboardTitle: Fe, teacherQuestionOptions: Ve, selectedTopicTitle: Ar, finalHierarchy: Ir, selectedTopicHeading: He, isGeneratingStructure: Be, showSyllabusSetup: oe, problemSolutionText: Je, hasResolvedStrategy: Cr, syllabusDescription: Ye, problemSolution: Nr, structureStatus: Xe, hasSelectedTopic: ne, problemResolutionStatus: ve, syllabusDraftText: rt, suggestedProblems: kr, isSavingStrategy: xe, savedContextKey: Or, selectedTopicProblemItems: ot, blackboardSteps: it, resolvedStrategyVersion: Mr, newProblemSolutionMode: ct, strategyStatus: ut, selectedProblemText: Vr, blackboardLesson: mt, studioControls: J, isSavingSyllabus: we, sidebarToggleLabel: bt, strategyDraft: Ur, teacherAnswerFeedback: yt, accessGateMessage: gt, hierarchyItems: St, showAccessGate: xt, selectedProblemStatement: $r, teacherQuestionExplanation: Jr, selectedProblemIds: Pt, teacherQuestionPrompt: At, selectedTopicProblems: Zr, studioLayoutClass: Et, blackboardLearningGoal: Ct, newProblemText: Rt, finalHierarchyText: ts, savedSyllabusOptions: Nt, teacherQuestionCorrectValue: as, savedProblemId: ns, selectedSyllabusId: kt, savedSyllabusKey: is, accessBadgeLabel: Ot, resolvedStrategy: ls, syllabusStatus: Ft, selectedTopicPath: cs, selectedHierarchyIds: zt, savedSyllabusVersion: us, selectedTeacherAnswer: Ut, selectedTopicProblemsText: ds, accessGateTitle: $t, isOpeningSyllabus: ps, isLoadingSyllabi: _e, blackboardProblemStatement: Wt, blackboardProblemLabel: Zt, showNewProblemForm: er, canUseStudio: tr, hasProblemSolution: ie, showStudioSidebar: Pe, syllabusTitle: ar, contentPreviewPacket: Ss, activeStep: nr, isResolvingProblem: ue, selectedTopicId: vs, resolvedStrategyId: xs, isSyllabusSetupCollapsed: ur, strategyDraftText: Te, suggestedProblemsText: Ps }, o = le((s, r) => {
    switch (s) {
      case "blackboardTitle": {
        const e = typeof r == "function" ? r(n.blackboardTitle) : r;
        return n.blackboardTitle = e, Qe(e), e;
      }
      case "teacherQuestionOptions": {
        const e = typeof r == "function" ? r(n.teacherQuestionOptions) : r;
        return n.teacherQuestionOptions = e, Tr(e), e;
      }
      case "selectedTopicTitle": {
        const e = typeof r == "function" ? r(n.selectedTopicTitle) : r;
        return n.selectedTopicTitle = e, ze(e), e;
      }
      case "finalHierarchy": {
        const e = typeof r == "function" ? r(n.finalHierarchy) : r;
        return n.finalHierarchy = e, Ge(e), e;
      }
      case "selectedTopicHeading": {
        const e = typeof r == "function" ? r(n.selectedTopicHeading) : r;
        return n.selectedTopicHeading = e, Ue(e), e;
      }
      case "isGeneratingStructure": {
        const e = typeof r == "function" ? r(n.isGeneratingStructure) : r;
        return n.isGeneratingStructure = e, Er(e), e;
      }
      case "showSyllabusSetup": {
        const e = typeof r == "function" ? r(n.showSyllabusSetup) : r;
        return n.showSyllabusSetup = e, $e(e), e;
      }
      case "problemSolutionText": {
        const e = typeof r == "function" ? r(n.problemSolutionText) : r;
        return n.problemSolutionText = e, We(e), e;
      }
      case "hasResolvedStrategy": {
        const e = typeof r == "function" ? r(n.hasResolvedStrategy) : r;
        return n.hasResolvedStrategy = e, qr(e), e;
      }
      case "syllabusDescription": {
        const e = typeof r == "function" ? r(n.syllabusDescription) : r;
        return n.syllabusDescription = e, Rr(e), e;
      }
      case "problemSolution": {
        const e = typeof r == "function" ? r(n.problemSolution) : r;
        return n.problemSolution = e, Ze(e), e;
      }
      case "structureStatus": {
        const e = typeof r == "function" ? r(n.structureStatus) : r;
        return n.structureStatus = e, Dr(e), e;
      }
      case "hasSelectedTopic": {
        const e = typeof r == "function" ? r(n.hasSelectedTopic) : r;
        return n.hasSelectedTopic = e, et(e), e;
      }
      case "problemResolutionStatus": {
        const e = typeof r == "function" ? r(n.problemResolutionStatus) : r;
        return n.problemResolutionStatus = e, tt(e), e;
      }
      case "syllabusDraftText": {
        const e = typeof r == "function" ? r(n.syllabusDraftText) : r;
        return n.syllabusDraftText = e, st(e), e;
      }
      case "suggestedProblems": {
        const e = typeof r == "function" ? r(n.suggestedProblems) : r;
        return n.suggestedProblems = e, jr(e), e;
      }
      case "isSavingStrategy": {
        const e = typeof r == "function" ? r(n.isSavingStrategy) : r;
        return n.isSavingStrategy = e, Lr(e), e;
      }
      case "savedContextKey": {
        const e = typeof r == "function" ? r(n.savedContextKey) : r;
        return n.savedContextKey = e, at(e), e;
      }
      case "selectedTopicProblemItems": {
        const e = typeof r == "function" ? r(n.selectedTopicProblemItems) : r;
        return n.selectedTopicProblemItems = e, nt(e), e;
      }
      case "blackboardSteps": {
        const e = typeof r == "function" ? r(n.blackboardSteps) : r;
        return n.blackboardSteps = e, lt(e), e;
      }
      case "resolvedStrategyVersion": {
        const e = typeof r == "function" ? r(n.resolvedStrategyVersion) : r;
        return n.resolvedStrategyVersion = e, Kr(e), e;
      }
      case "newProblemSolutionMode": {
        const e = typeof r == "function" ? r(n.newProblemSolutionMode) : r;
        return n.newProblemSolutionMode = e, Fr(e), e;
      }
      case "strategyStatus": {
        const e = typeof r == "function" ? r(n.strategyStatus) : r;
        return n.strategyStatus = e, Qr(e), e;
      }
      case "selectedProblemText": {
        const e = typeof r == "function" ? r(n.selectedProblemText) : r;
        return n.selectedProblemText = e, dt(e), e;
      }
      case "blackboardLesson": {
        const e = typeof r == "function" ? r(n.blackboardLesson) : r;
        return n.blackboardLesson = e, pt(e), e;
      }
      case "studioControls": {
        const e = typeof r == "function" ? r(n.studioControls) : r;
        return n.studioControls = e, zr(e), e;
      }
      case "isSavingSyllabus": {
        const e = typeof r == "function" ? r(n.isSavingSyllabus) : r;
        return n.isSavingSyllabus = e, Gr(e), e;
      }
      case "sidebarToggleLabel": {
        const e = typeof r == "function" ? r(n.sidebarToggleLabel) : r;
        return n.sidebarToggleLabel = e, Hr(e), e;
      }
      case "strategyDraft": {
        const e = typeof r == "function" ? r(n.strategyDraft) : r;
        return n.strategyDraft = e, Br(e), e;
      }
      case "teacherAnswerFeedback": {
        const e = typeof r == "function" ? r(n.teacherAnswerFeedback) : r;
        return n.teacherAnswerFeedback = e, ht(e), e;
      }
      case "accessGateMessage": {
        const e = typeof r == "function" ? r(n.accessGateMessage) : r;
        return n.accessGateMessage = e, ft(e), e;
      }
      case "hierarchyItems": {
        const e = typeof r == "function" ? r(n.hierarchyItems) : r;
        return n.hierarchyItems = e, vt(e), e;
      }
      case "showAccessGate": {
        const e = typeof r == "function" ? r(n.showAccessGate) : r;
        return n.showAccessGate = e, wt(e), e;
      }
      case "selectedProblemStatement": {
        const e = typeof r == "function" ? r(n.selectedProblemStatement) : r;
        return n.selectedProblemStatement = e, _t(e), e;
      }
      case "teacherQuestionExplanation": {
        const e = typeof r == "function" ? r(n.teacherQuestionExplanation) : r;
        return n.teacherQuestionExplanation = e, Wr(e), e;
      }
      case "selectedProblemIds": {
        const e = typeof r == "function" ? r(n.selectedProblemIds) : r;
        return n.selectedProblemIds = e, Tt(e), e;
      }
      case "teacherQuestionPrompt": {
        const e = typeof r == "function" ? r(n.teacherQuestionPrompt) : r;
        return n.teacherQuestionPrompt = e, Yr(e), e;
      }
      case "selectedTopicProblems": {
        const e = typeof r == "function" ? r(n.selectedTopicProblems) : r;
        return n.selectedTopicProblems = e, It(e), e;
      }
      case "studioLayoutClass": {
        const e = typeof r == "function" ? r(n.studioLayoutClass) : r;
        return n.studioLayoutClass = e, Xr(e), e;
      }
      case "blackboardLearningGoal": {
        const e = typeof r == "function" ? r(n.blackboardLearningGoal) : r;
        return n.blackboardLearningGoal = e, qt(e), e;
      }
      case "newProblemText": {
        const e = typeof r == "function" ? r(n.newProblemText) : r;
        return n.newProblemText = e, es(e), e;
      }
      case "finalHierarchyText": {
        const e = typeof r == "function" ? r(n.finalHierarchyText) : r;
        return n.finalHierarchyText = e, rs(e), e;
      }
      case "savedSyllabusOptions": {
        const e = typeof r == "function" ? r(n.savedSyllabusOptions) : r;
        return n.savedSyllabusOptions = e, ss(e), e;
      }
      case "teacherQuestionCorrectValue": {
        const e = typeof r == "function" ? r(n.teacherQuestionCorrectValue) : r;
        return n.teacherQuestionCorrectValue = e, os(e), e;
      }
      case "savedProblemId": {
        const e = typeof r == "function" ? r(n.savedProblemId) : r;
        return n.savedProblemId = e, Dt(e), e;
      }
      case "selectedSyllabusId": {
        const e = typeof r == "function" ? r(n.selectedSyllabusId) : r;
        return n.selectedSyllabusId = e, jt(e), e;
      }
      case "savedSyllabusKey": {
        const e = typeof r == "function" ? r(n.savedSyllabusKey) : r;
        return n.savedSyllabusKey = e, Lt(e), e;
      }
      case "accessBadgeLabel": {
        const e = typeof r == "function" ? r(n.accessBadgeLabel) : r;
        return n.accessBadgeLabel = e, Mt(e), e;
      }
      case "resolvedStrategy": {
        const e = typeof r == "function" ? r(n.resolvedStrategy) : r;
        return n.resolvedStrategy = e, Kt(e), e;
      }
      case "syllabusStatus": {
        const e = typeof r == "function" ? r(n.syllabusStatus) : r;
        return n.syllabusStatus = e, Qt(e), e;
      }
      case "selectedTopicPath": {
        const e = typeof r == "function" ? r(n.selectedTopicPath) : r;
        return n.selectedTopicPath = e, Vt(e), e;
      }
      case "selectedHierarchyIds": {
        const e = typeof r == "function" ? r(n.selectedHierarchyIds) : r;
        return n.selectedHierarchyIds = e, Gt(e), e;
      }
      case "savedSyllabusVersion": {
        const e = typeof r == "function" ? r(n.savedSyllabusVersion) : r;
        return n.savedSyllabusVersion = e, Ht(e), e;
      }
      case "selectedTeacherAnswer": {
        const e = typeof r == "function" ? r(n.selectedTeacherAnswer) : r;
        return n.selectedTeacherAnswer = e, Bt(e), e;
      }
      case "selectedTopicProblemsText": {
        const e = typeof r == "function" ? r(n.selectedTopicProblemsText) : r;
        return n.selectedTopicProblemsText = e, ms(e), e;
      }
      case "accessGateTitle": {
        const e = typeof r == "function" ? r(n.accessGateTitle) : r;
        return n.accessGateTitle = e, Jt(e), e;
      }
      case "isOpeningSyllabus": {
        const e = typeof r == "function" ? r(n.isOpeningSyllabus) : r;
        return n.isOpeningSyllabus = e, bs(e), e;
      }
      case "isLoadingSyllabi": {
        const e = typeof r == "function" ? r(n.isLoadingSyllabi) : r;
        return n.isLoadingSyllabi = e, ys(e), e;
      }
      case "blackboardProblemStatement": {
        const e = typeof r == "function" ? r(n.blackboardProblemStatement) : r;
        return n.blackboardProblemStatement = e, Yt(e), e;
      }
      case "blackboardProblemLabel": {
        const e = typeof r == "function" ? r(n.blackboardProblemLabel) : r;
        return n.blackboardProblemLabel = e, Xt(e), e;
      }
      case "showNewProblemForm": {
        const e = typeof r == "function" ? r(n.showNewProblemForm) : r;
        return n.showNewProblemForm = e, hs(e), e;
      }
      case "canUseStudio": {
        const e = typeof r == "function" ? r(n.canUseStudio) : r;
        return n.canUseStudio = e, rr(e), e;
      }
      case "hasProblemSolution": {
        const e = typeof r == "function" ? r(n.hasProblemSolution) : r;
        return n.hasProblemSolution = e, sr(e), e;
      }
      case "showStudioSidebar": {
        const e = typeof r == "function" ? r(n.showStudioSidebar) : r;
        return n.showStudioSidebar = e, gs(e), e;
      }
      case "syllabusTitle": {
        const e = typeof r == "function" ? r(n.syllabusTitle) : r;
        return n.syllabusTitle = e, fs(e), e;
      }
      case "contentPreviewPacket": {
        const e = typeof r == "function" ? r(n.contentPreviewPacket) : r;
        return n.contentPreviewPacket = e, or(e), e;
      }
      case "activeStep": {
        const e = typeof r == "function" ? r(n.activeStep) : r;
        return n.activeStep = e, ir(e), e;
      }
      case "isResolvingProblem": {
        const e = typeof r == "function" ? r(n.isResolvingProblem) : r;
        return n.isResolvingProblem = e, lr(e), e;
      }
      case "selectedTopicId": {
        const e = typeof r == "function" ? r(n.selectedTopicId) : r;
        return n.selectedTopicId = e, cr(e), e;
      }
      case "resolvedStrategyId": {
        const e = typeof r == "function" ? r(n.resolvedStrategyId) : r;
        return n.resolvedStrategyId = e, ws(e), e;
      }
      case "isSyllabusSetupCollapsed": {
        const e = typeof r == "function" ? r(n.isSyllabusSetupCollapsed) : r;
        return n.isSyllabusSetupCollapsed = e, dr(e), e;
      }
      case "strategyDraftText": {
        const e = typeof r == "function" ? r(n.strategyDraftText) : r;
        return n.strategyDraftText = e, _s(e), e;
      }
      case "suggestedProblemsText": {
        const e = typeof r == "function" ? r(n.suggestedProblemsText) : r;
        return n.suggestedProblemsText = e, Ts(e), e;
      }
      default:
        return r;
    }
  }, [n]);
  le((s, r) => {
    const [e, ...i] = String(s || "").split(".");
    if (!e) return r;
    if (i.length === 0) return o(e, r);
    const t = (a) => {
      const p = Array.isArray(a) ? [...a] : { ...a || {} };
      let l = p;
      return i.forEach((u, m) => {
        m === i.length - 1 ? l[u] = r : (l[u] = Array.isArray(l[u]) ? [...l[u]] : { ...l[u] || {} }, l = l[u]);
      }), p;
    };
    switch (e) {
      case "blackboardTitle":
        return o("blackboardTitle", t), r;
      case "teacherQuestionOptions":
        return o("teacherQuestionOptions", t), r;
      case "selectedTopicTitle":
        return o("selectedTopicTitle", t), r;
      case "finalHierarchy":
        return o("finalHierarchy", t), r;
      case "selectedTopicHeading":
        return o("selectedTopicHeading", t), r;
      case "isGeneratingStructure":
        return o("isGeneratingStructure", t), r;
      case "showSyllabusSetup":
        return o("showSyllabusSetup", t), r;
      case "problemSolutionText":
        return o("problemSolutionText", t), r;
      case "hasResolvedStrategy":
        return o("hasResolvedStrategy", t), r;
      case "syllabusDescription":
        return o("syllabusDescription", t), r;
      case "problemSolution":
        return o("problemSolution", t), r;
      case "structureStatus":
        return o("structureStatus", t), r;
      case "hasSelectedTopic":
        return o("hasSelectedTopic", t), r;
      case "problemResolutionStatus":
        return o("problemResolutionStatus", t), r;
      case "syllabusDraftText":
        return o("syllabusDraftText", t), r;
      case "suggestedProblems":
        return o("suggestedProblems", t), r;
      case "isSavingStrategy":
        return o("isSavingStrategy", t), r;
      case "savedContextKey":
        return o("savedContextKey", t), r;
      case "selectedTopicProblemItems":
        return o("selectedTopicProblemItems", t), r;
      case "blackboardSteps":
        return o("blackboardSteps", t), r;
      case "resolvedStrategyVersion":
        return o("resolvedStrategyVersion", t), r;
      case "newProblemSolutionMode":
        return o("newProblemSolutionMode", t), r;
      case "strategyStatus":
        return o("strategyStatus", t), r;
      case "selectedProblemText":
        return o("selectedProblemText", t), r;
      case "blackboardLesson":
        return o("blackboardLesson", t), r;
      case "studioControls":
        return o("studioControls", t), r;
      case "isSavingSyllabus":
        return o("isSavingSyllabus", t), r;
      case "sidebarToggleLabel":
        return o("sidebarToggleLabel", t), r;
      case "strategyDraft":
        return o("strategyDraft", t), r;
      case "teacherAnswerFeedback":
        return o("teacherAnswerFeedback", t), r;
      case "accessGateMessage":
        return o("accessGateMessage", t), r;
      case "hierarchyItems":
        return o("hierarchyItems", t), r;
      case "showAccessGate":
        return o("showAccessGate", t), r;
      case "selectedProblemStatement":
        return o("selectedProblemStatement", t), r;
      case "teacherQuestionExplanation":
        return o("teacherQuestionExplanation", t), r;
      case "selectedProblemIds":
        return o("selectedProblemIds", t), r;
      case "teacherQuestionPrompt":
        return o("teacherQuestionPrompt", t), r;
      case "selectedTopicProblems":
        return o("selectedTopicProblems", t), r;
      case "studioLayoutClass":
        return o("studioLayoutClass", t), r;
      case "blackboardLearningGoal":
        return o("blackboardLearningGoal", t), r;
      case "newProblemText":
        return o("newProblemText", t), r;
      case "finalHierarchyText":
        return o("finalHierarchyText", t), r;
      case "savedSyllabusOptions":
        return o("savedSyllabusOptions", t), r;
      case "teacherQuestionCorrectValue":
        return o("teacherQuestionCorrectValue", t), r;
      case "savedProblemId":
        return o("savedProblemId", t), r;
      case "selectedSyllabusId":
        return o("selectedSyllabusId", t), r;
      case "savedSyllabusKey":
        return o("savedSyllabusKey", t), r;
      case "accessBadgeLabel":
        return o("accessBadgeLabel", t), r;
      case "resolvedStrategy":
        return o("resolvedStrategy", t), r;
      case "syllabusStatus":
        return o("syllabusStatus", t), r;
      case "selectedTopicPath":
        return o("selectedTopicPath", t), r;
      case "selectedHierarchyIds":
        return o("selectedHierarchyIds", t), r;
      case "savedSyllabusVersion":
        return o("savedSyllabusVersion", t), r;
      case "selectedTeacherAnswer":
        return o("selectedTeacherAnswer", t), r;
      case "selectedTopicProblemsText":
        return o("selectedTopicProblemsText", t), r;
      case "accessGateTitle":
        return o("accessGateTitle", t), r;
      case "isOpeningSyllabus":
        return o("isOpeningSyllabus", t), r;
      case "isLoadingSyllabi":
        return o("isLoadingSyllabi", t), r;
      case "blackboardProblemStatement":
        return o("blackboardProblemStatement", t), r;
      case "blackboardProblemLabel":
        return o("blackboardProblemLabel", t), r;
      case "showNewProblemForm":
        return o("showNewProblemForm", t), r;
      case "canUseStudio":
        return o("canUseStudio", t), r;
      case "hasProblemSolution":
        return o("hasProblemSolution", t), r;
      case "showStudioSidebar":
        return o("showStudioSidebar", t), r;
      case "syllabusTitle":
        return o("syllabusTitle", t), r;
      case "contentPreviewPacket":
        return o("contentPreviewPacket", t), r;
      case "activeStep":
        return o("activeStep", t), r;
      case "isResolvingProblem":
        return o("isResolvingProblem", t), r;
      case "selectedTopicId":
        return o("selectedTopicId", t), r;
      case "resolvedStrategyId":
        return o("resolvedStrategyId", t), r;
      case "isSyllabusSetupCollapsed":
        return o("isSyllabusSetupCollapsed", t), r;
      case "strategyDraftText":
        return o("strategyDraftText", t), r;
      case "suggestedProblemsText":
        return o("suggestedProblemsText", t), r;
      default:
        return r;
    }
  }, [o]);
  const As = { aiStructureGenerated: { properties: { hierarchy: { type: "object" }, languageCode: { type: "string" } }, type: "object" }, aiStructureRequested: { properties: { languageCode: { type: "string" }, sourceText: { type: "string" } }, type: "object" }, canUseStudio: { properties: { value: { type: "boolean" } }, type: "object" }, contentPreviewReady: { properties: { context: { type: "object" }, lesson: { type: "object" }, problem: { type: "object" }, schemaVersion: { type: "number" } }, required: ["schemaVersion", "context", "problem", "lesson"], type: "object" }, contextPublishRequested: { properties: { contextDraft: { type: "object" }, immutable: { type: "boolean" } }, type: "object" }, contextSetRequested: { properties: { contextDraft: { type: "object" }, strategy: { type: "object" }, strategyId: { type: "string" }, strategyVersion: { type: "number" } }, type: "object" }, lessonShareRequested: { properties: { expiresInHours: { type: "number" }, visibility: { type: "string" } }, type: "object" }, problemsAddRequested: { properties: { problems: { type: "array" }, topicId: { type: "string" } }, type: "object" }, resolvedStrategy: { properties: {}, type: "object" }, stepOperationRequested: { properties: { note: { type: "string" }, operation: { type: "string" }, stepId: { type: "string" } }, type: "object" }, suggestedProblemsText: { properties: { value: { type: "string" } }, type: "object" }, syllabusText: { properties: { value: { type: "string" } }, type: "object" } }, Ae = (s, r, e) => {
    if (!r || typeof r != "object") return "";
    const i = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], t = s === null ? "null" : Array.isArray(s) ? "array" : Number.isInteger(s) ? "integer" : typeof s;
    if (i.length && !i.includes(t) && !(t === "integer" && i.includes("number"))) return e + " must be " + i.join(" or ") + ".";
    if (r.enum && !r.enum.some((a) => JSON.stringify(a) === JSON.stringify(s))) return e + " is not an allowed value.";
    if (s && typeof s == "object" && !Array.isArray(s)) {
      for (const a of r.required || []) if (!Object.prototype.hasOwnProperty.call(s, a)) return e + "." + a + " is required.";
      for (const [a, p] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(s, a)) {
        const l = Ae(s[a], p, e + "." + a);
        if (l) return l;
      }
    }
    if (Array.isArray(s) && r.items) for (let a = 0; a < s.length; a++) {
      const p = Ae(s[a], r.items, e + "[" + a + "]");
      if (p) return p;
    }
    return "";
  }, se = le(async (s, r, e = !1) => {
    const i = As[s];
    if (!i) throw new Error("Module output '" + s + "' is not declared.");
    const t = Ae(r, i, "output." + s);
    if (t) throw new Error(t);
    const a = c.onOutput || c.onModuleOutput || c.runtime?.onOutput;
    if (typeof a != "function") return r;
    const p = a(s, r, { moduleId: c.moduleId, awaitHandlers: e });
    return e ? await p : r;
  }, [c.onOutput, c.onModuleOutput, c.runtime?.onOutput, c.moduleId]), mr = (s, r) => {
    const e = String(r || "").split(".").filter(Boolean);
    if (!(!e.length || e.some((i) => ["__proto__", "prototype", "constructor"].includes(i))))
      return e.reduce((i, t) => {
        if (!(!i || typeof i != "object"))
          return typeof i.get == "function" && !(t in i) ? i.get(t) : i[t];
      }, s);
  }, $ = (s, r) => {
    if (Array.isArray(s)) return s.map((i) => $(i, r));
    if (s && typeof s == "object") return Object.fromEntries(Object.entries(s).map(([i, t]) => [$(i, r), $(t, r)]));
    if (typeof s != "string") return s;
    const e = s.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return e ? mr(r, e[1]) : s.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (i, t) => {
      const a = mr(r, t);
      return a == null ? "" : typeof a == "object" ? JSON.stringify(a) : String(a);
    });
  };
  async function Is(s = {}) {
    o("syllabusDescription", (s || {}).value);
  }
  async function Es(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => {
        const t = n.showStudioSidebar === !1;
        return { show: t, label: t ? "Hide syllabus panel" : "Show syllabus panel", layoutClass: t ? "grid rs-grid" : "grid rs-grid rs-grid--sidebar-hidden" };
      })();
      e.sidebar_toggle_derive = i;
    }
    return o("showStudioSidebar", e.sidebar_toggle_derive.show), o("sidebarToggleLabel", e.sidebar_toggle_derive.label), o("studioLayoutClass", e.sidebar_toggle_derive.layoutClass), e.sidebar_toggle_derive;
  }
  async function Cs(s = {}) {
    const r = s || {}, e = {}, i = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(n).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    o("contentPreviewPacket", {}), o("savedContextKey", ""), await I({}), o("savedProblemId", ""), await I({}), o("hasProblemSolution", !1), await I({}), o("selectedSyllabusId", r.value), await I({}), o("isOpeningSyllabus", !0), await I({});
    try {
      {
        const a = $({ syllabusId: "{{ args.value }}", userIdentity: "" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.saved_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_query" };
      return e.error = a, i.saved_syllabus_query = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await I({}), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const m = (Array.isArray(i.saved_syllabus_query) ? i.saved_syllabus_query : [i.saved_syllabus_query])[0] || {}, d = m.result || m;
          if (!d || !d.id) throw new Error("The selected syllabus was not found.");
          const y = d.hierarchy && typeof d.hierarchy == "object" ? d.hierarchy : {}, x = (A, w = []) => {
            if (!A || !A.id) return null;
            const F = [...w, String(A.id)];
            return { id: String(A.id), label: String(A.type || "item").replace(/^./, (b) => b.toUpperCase()) + " · " + String(A.title || ""), data: { type: String(A.type || ""), title: String(A.title || ""), path: F.join("/"), problems: Array.isArray(A.problems) ? A.problems : [] }, children: Array.isArray(A.children) ? A.children.map((b) => x(b, F)).filter(Boolean) : [] };
          }, q = x(y);
          return { ...d, hierarchy: y, items: q ? [q] : [], hasHierarchy: !!q };
        })();
        i.saved_syllabus_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_parse" };
      return e.error = a, i.saved_syllabus_parse = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await I({}), { ok: !1 };
    }
    return o("savedSyllabusKey", i.saved_syllabus_parse.key), await I({}), o("savedSyllabusVersion", i.saved_syllabus_parse.versionNumber), await I({}), o("savedContextKey", i.saved_syllabus_parse.contextKey), await I({}), o("savedProblemId", ""), await I({}), o("hasProblemSolution", !1), await I({}), o("syllabusTitle", i.saved_syllabus_parse.title), o("syllabusDescription", i.saved_syllabus_parse.description), o("syllabusDraftText", i.saved_syllabus_parse.syllabusText), o("finalHierarchy", i.saved_syllabus_parse.hierarchy), o("hierarchyItems", i.saved_syllabus_parse.items), o("syllabusStatus", "Loaded " + i.saved_syllabus_parse.title + " · " + i.saved_syllabus_parse.status), o("showSyllabusSetup", !i.saved_syllabus_parse.hasHierarchy), o("isSyllabusSetupCollapsed", i.saved_syllabus_parse.hasHierarchy), o("isOpeningSyllabus", !1), await I({}), i.saved_syllabus_parse;
  }
  async function qs(s = {}) {
    o("showNewProblemForm", !1), o("newProblemText", "");
  }
  async function Rs(s = {}) {
    o("newProblemSolutionMode", (s || {}).value);
  }
  async function Ns(s = {}) {
    o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0);
  }
  async function Ds(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => {
        const t = String(r.value || ""), a = String(n.teacherQuestionCorrectValue || ""), p = String(O.locale || "en").toLowerCase(), l = !!t && t === a;
        return { value: t, feedback: (p === "hi" ? l ? "सही उत्तर।" : "फिर से प्रयास करें।" : p === "ta" ? l ? "சரியான பதில்." : "மீண்டும் முயற்சிக்கவும்." : l ? "Correct." : "Try again.") + (n.teacherQuestionExplanation ? " " + String(n.teacherQuestionExplanation) : "") };
      })();
      e.teacher_answer_read = i;
    }
    o("selectedTeacherAnswer", e.teacher_answer_read.value), o("teacherAnswerFeedback", e.teacher_answer_read.feedback);
  }
  async function ks(s = {}) {
    if ((function(e) {
      const i = !!(e.isSavingSyllabus || e.isGeneratingStructure || e.isResolvingProblem || e.isSavingStrategy || e.isLoadingSyllabi || e.isOpeningSyllabus), t = e.canUseStudio !== !0 || i, a = !!(e.selectedSyllabusId && e.savedSyllabusKey && e.savedContextKey && Number.isInteger(e.savedSyllabusVersion) && e.savedSyllabusVersion > 0);
      return {
        busy: i,
        unavailable: t,
        previewDisabled: t || !a || !e.hasProblemSolution || !e.savedProblemId,
        versionDisabled: t || !a || e.savedSyllabusVersion >= 1e5,
        lessonEmpty: !e.isResolvingProblem && !e.hasProblemSolution
      };
    })(n).versionDisabled)
      return { ok: !1, reason: "studio_unavailable" };
    o("contentPreviewPacket", {}), o("savedSyllabusVersion", Math.max(1, Number(n.savedSyllabusVersion || O.contextVersionNumber || 1)) + 1), await I({}), o("selectedSyllabusId", ""), await I({}), o("savedContextKey", ""), await I({}), o("savedProblemId", ""), await I({}), o("hasProblemSolution", !1), await I({}), o("syllabusStatus", "New version prepared. Save it before resolving or previewing lessons.");
  }
  async function Ie(s = {}) {
    const r = s || {}, e = {}, i = {};
    o("isResolvingProblem", !0), o("problemResolutionStatus", "Checking saved solutions for this hierarchy…"), o("hasProblemSolution", !1);
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = String(r.statement || "").trim();
          if (!u) throw new Error("Enter a problem statement.");
          if (!n.selectedTopicId) throw new Error("Select a Topic first.");
          const m = u.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim(), d = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context", y = Number(n.savedSyllabusVersion), x = Number(O.contextVersionNumber || 1), q = Number.isFinite(y) && y > 0 ? y : Math.max(1, Number.isFinite(x) ? x : 1), A = String(n.savedContextKey || O.contextVersionKey || "rudra-scholar:" + d).trim(), w = !!(n.selectedSyllabusId && n.savedContextKey && Number.isFinite(y) && y > 0), F = r.solutionMode === "quick" ? "quick" : "detailed", b = String(n.selectedTopicPath || n.selectedTopicId), R = String(O.locale || "en").toLowerCase(), Q = ["en", "hi", "ta"].includes(R) ? R : "en";
          return { statement: u, normalized: m, contextKey: A, versionNumber: q, canPersist: w, mode: F, topicPath: b, locale: Q, promptVersion: "v3-validated-mcq-blackboard" };
        })();
        i.problem_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_prepare" };
      return e.error = a, i.problem_prepare = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.problem_strategy_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_lookup" };
      return e.error = a, i.problem_strategy_lookup = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = Array.isArray(i.problem_strategy_lookup) ? i.problem_strategy_lookup : [], m = u[0], d = m && typeof m == "object" ? m.result || m : null;
          return { id: d ? String(d.strategyId || "") : "", version: d ? Number(d.strategyVersion || 0) : 0, strategy: d && d.strategy ? d.strategy : n.strategyDraft || {} };
        })();
        i.problem_strategy_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_result" };
      return e.error = a, i.problem_strategy_result = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", locale: "{{ stepResults.problem_prepare.locale }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.problem_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_lookup" };
      return e.error = a, i.problem_lookup = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = function(w, F = "") {
            if (!w || typeof w != "object" || Array.isArray(w)) throw new Error("A lesson object is required.");
            const b = (C, z, G = !1) => {
              if (C != null && typeof C != "string") throw new Error(z + " must be text.");
              const N = (C || "").trim();
              if (G && !N || N.length > 16e3) throw new Error("Invalid " + z + ".");
              return N;
            };
            if (!Array.isArray(w.steps) || !w.steps.length || w.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const R = /* @__PURE__ */ new Set(), Q = w.steps.map((C, z) => {
              if (!C || typeof C != "object" || Array.isArray(C)) throw new Error("Invalid lesson step.");
              const G = b(C.id, "step ID") || "step-" + (z + 1);
              if (R.has(G)) throw new Error("Step IDs must be unique.");
              R.add(G);
              const N = C.teacherQuestion;
              if (!N || !Array.isArray(N.options) || N.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const B = /* @__PURE__ */ new Set(), E = N.options.map((g) => {
                const _ = b(g?.value, "option ID", !0);
                if (B.has(_)) throw new Error("Answer option IDs must be unique.");
                return B.add(_), { value: _, label: b(g?.label, "option label", !0) };
              }), D = b(N.correctValue, "correct answer ID", !0);
              if (!B.has(D)) throw new Error("The correct answer must reference a supplied option.");
              const V = b(N.prompt || C.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(C.content) || !C.content.length || C.content.length > 60) throw new Error("Each step needs board content.");
              const ee = C.content.map((g) => {
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
                    const _ = g.type === "list" ? "items" : "lines";
                    if (!Array.isArray(g[_]) || !g[_].length) throw new Error("Invalid board list.");
                    return { ...g, [_]: g[_].map((j) => b(j, "list entry", !0)) };
                  }
                  case "matrix": {
                    const _ = g.matrix?.rows;
                    if (!Array.isArray(_) || !_.length || _.length > 30 || !Array.isArray(_[0]) || !_[0].length || _[0].length > 30 || _.some((j) => !Array.isArray(j) || j.length !== _[0].length || j.some((qe) => !["string", "number"].includes(typeof qe)))) throw new Error("Invalid matrix.");
                    return g;
                  }
                  case "table":
                    if (!Array.isArray(g.headers) || !g.headers.length || !Array.isArray(g.rows) || g.rows.some((_) => !Array.isArray(_) || _.length !== g.headers.length)) throw new Error("Invalid table.");
                    return { ...g, headers: g.headers.map((_) => b(_, "table heading")), rows: g.rows.map((_) => _.map((j) => b(j, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(g.nodes) || !Array.isArray(g.edges)) throw new Error("Invalid graph.");
                    const _ = /* @__PURE__ */ new Set();
                    for (const j of g.nodes) {
                      if (!j?.id || _.has(j.id) || !Number.isFinite(j.x) || !Number.isFinite(j.y)) throw new Error("Invalid graph node.");
                      _.add(j.id);
                    }
                    if (g.edges.some((j) => !_.has(j?.from) || !_.has(j?.to))) throw new Error("Invalid graph edge.");
                    return g;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), X = {
                id: G,
                title: b(C.title, "step title", !0),
                content: ee,
                teacherPrompt: V,
                teacherQuestion: { prompt: V, options: E, correctValue: D, explanation: b(N.explanation, "answer explanation", !0) }
              };
              for (const g of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) X[g] = b(C[g], g);
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
          }, m = i.problem_lookup, d = Array.isArray(m) ? m[0] : m, y = d?.result || d;
          if (!y?.solution) return { hit: !1 };
          let x;
          try {
            x = u(y.solution, i.problem_prepare.statement);
          } catch {
            return { hit: !1 };
          }
          const q = { ...y.solution, ...x };
          return { hit: !0, result: y, solution: q, board: x, question: x.steps[0].teacherQuestion, text: x.steps.map((A, w) => w + 1 + ". " + A.title).join(`
`) };
        })();
        i.problem_cache_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_cache_result" };
      return e.error = a, i.problem_cache_result = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    if (!i.problem_cache_result.hit) {
      try {
        {
          const t = r.event, a = L, p = n, l = await (async () => {
            const u = i.problem_prepare, m = i.problem_strategy_result.strategy || {};
            return ["You are a college mathematics professor creating an interactive blackboard lesson.", 'Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.', "Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.", "Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in " + (u.locale === "hi" ? "Hindi" : u.locale === "ta" ? "Tamil" : "English") + " only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.", "Follow this approved teaching strategy exactly: " + JSON.stringify(m), "Solution mode: " + u.mode + ".", "Language code: " + u.locale + ".", "Context hierarchy: " + JSON.stringify(n.finalHierarchy || {}), "Selected topic path: " + u.topicPath, "Problem: " + u.statement].join(`
`);
          })();
          i.problem_ai_prompt = l, e.customCodeResult = l;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_prompt" };
        return e.error = a, i.problem_ai_prompt = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
      }
      try {
        {
          const t = { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }, a = $({ prompt: "{{ stepResults.problem_ai_prompt }}" }, t) || {}, p = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(3e4) }), l = await p.json().catch(() => ({}));
          if (!p.ok) throw new Error(l.error || "Protected API request failed (" + p.status + ")");
          const u = l.data;
          i.problem_ai_call = u, e.apiResult = u;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_call" };
        return e.error = a, i.problem_ai_call = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
      }
      try {
        {
          const t = r.event, a = L, p = n, l = await (async () => {
            const u = function(w, F = "") {
              if (!w || typeof w != "object" || Array.isArray(w)) throw new Error("A lesson object is required.");
              const b = (C, z, G = !1) => {
                if (C != null && typeof C != "string") throw new Error(z + " must be text.");
                const N = (C || "").trim();
                if (G && !N || N.length > 16e3) throw new Error("Invalid " + z + ".");
                return N;
              };
              if (!Array.isArray(w.steps) || !w.steps.length || w.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
              const R = /* @__PURE__ */ new Set(), Q = w.steps.map((C, z) => {
                if (!C || typeof C != "object" || Array.isArray(C)) throw new Error("Invalid lesson step.");
                const G = b(C.id, "step ID") || "step-" + (z + 1);
                if (R.has(G)) throw new Error("Step IDs must be unique.");
                R.add(G);
                const N = C.teacherQuestion;
                if (!N || !Array.isArray(N.options) || N.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
                const B = /* @__PURE__ */ new Set(), E = N.options.map((g) => {
                  const _ = b(g?.value, "option ID", !0);
                  if (B.has(_)) throw new Error("Answer option IDs must be unique.");
                  return B.add(_), { value: _, label: b(g?.label, "option label", !0) };
                }), D = b(N.correctValue, "correct answer ID", !0);
                if (!B.has(D)) throw new Error("The correct answer must reference a supplied option.");
                const V = b(N.prompt || C.teacherPrompt, "teacher question", !0);
                if (!Array.isArray(C.content) || !C.content.length || C.content.length > 60) throw new Error("Each step needs board content.");
                const ee = C.content.map((g) => {
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
                      const _ = g.type === "list" ? "items" : "lines";
                      if (!Array.isArray(g[_]) || !g[_].length) throw new Error("Invalid board list.");
                      return { ...g, [_]: g[_].map((j) => b(j, "list entry", !0)) };
                    }
                    case "matrix": {
                      const _ = g.matrix?.rows;
                      if (!Array.isArray(_) || !_.length || _.length > 30 || !Array.isArray(_[0]) || !_[0].length || _[0].length > 30 || _.some((j) => !Array.isArray(j) || j.length !== _[0].length || j.some((qe) => !["string", "number"].includes(typeof qe)))) throw new Error("Invalid matrix.");
                      return g;
                    }
                    case "table":
                      if (!Array.isArray(g.headers) || !g.headers.length || !Array.isArray(g.rows) || g.rows.some((_) => !Array.isArray(_) || _.length !== g.headers.length)) throw new Error("Invalid table.");
                      return { ...g, headers: g.headers.map((_) => b(_, "table heading")), rows: g.rows.map((_) => _.map((j) => b(j, "table cell"))) };
                    case "graph": {
                      if (!Array.isArray(g.nodes) || !Array.isArray(g.edges)) throw new Error("Invalid graph.");
                      const _ = /* @__PURE__ */ new Set();
                      for (const j of g.nodes) {
                        if (!j?.id || _.has(j.id) || !Number.isFinite(j.x) || !Number.isFinite(j.y)) throw new Error("Invalid graph node.");
                        _.add(j.id);
                      }
                      if (g.edges.some((j) => !_.has(j?.from) || !_.has(j?.to))) throw new Error("Invalid graph edge.");
                      return g;
                    }
                    default:
                      throw new Error("Unsupported board content type.");
                  }
                }), X = {
                  id: G,
                  title: b(C.title, "step title", !0),
                  content: ee,
                  teacherPrompt: V,
                  teacherQuestion: { prompt: V, options: E, correctValue: D, explanation: b(N.explanation, "answer explanation", !0) }
                };
                for (const g of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) X[g] = b(C[g], g);
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
            }, m = i.problem_ai_call?.candidates?.[0]?.content?.parts, d = Array.isArray(m) ? m.map((A) => typeof A?.text == "string" ? A.text : "").join("") : "";
            if (!d.trim() || d.length > 2e5) throw new Error("Invalid AI lesson response.");
            const y = JSON.parse(d.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), x = u(y, i.problem_prepare.statement), q = { ...x, summary: typeof y.summary == "string" ? y.summary : "", answer: typeof y.answer == "string" ? y.answer : "", checks: Array.isArray(y.checks) ? y.checks.filter((A) => typeof A == "string") : [] };
            return { solution: q, board: x, question: x.steps[0].teacherQuestion, text: [q.summary, x.steps.map((A, w) => w + 1 + ". " + A.title).join(`
`), q.answer, q.checks.join(`
`)].filter(Boolean).join(`

`) };
          })();
          i.problem_ai_parse = l, e.customCodeResult = l;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_parse" };
        return e.error = a, i.problem_ai_parse = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
      }
      if (i.problem_prepare.canPersist) {
        try {
          {
            const a = $({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "gemini-2.5-flash", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
            i.problem_store = u, e.queryResult = u;
          }
        } catch (t) {
          const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_store" };
          return e.error = a, i.problem_store = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
        }
        try {
          {
            const t = r.event, a = L, p = n, l = await (async () => {
              const u = Array.isArray(i.problem_store) ? i.problem_store[0]?.result : null;
              if (!u?.problemId) throw new Error("Lesson was not saved. Use an owned draft version.");
              return u;
            })();
            i.stored_problem_check = l, e.customCodeResult = l;
          }
        } catch (t) {
          const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "stored_problem_check" };
          return e.error = a, i.stored_problem_check = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
        }
        return o("problemSolution", i.problem_ai_parse.solution), o("problemSolutionText", i.problem_ai_parse.text), o("blackboardLesson", i.problem_ai_parse.board), o("blackboardTitle", i.problem_ai_parse.board.title), o("blackboardProblemLabel", i.problem_ai_parse.board.problemLabel), o("blackboardProblemStatement", i.problem_ai_parse.board.problemStatement), o("blackboardLearningGoal", i.problem_ai_parse.board.learningGoal), o("blackboardSteps", i.problem_ai_parse.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", i.problem_ai_parse.question.prompt), o("teacherQuestionOptions", i.problem_ai_parse.question.options), o("teacherQuestionCorrectValue", i.problem_ai_parse.question.correctValue), o("teacherQuestionExplanation", i.problem_ai_parse.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", "AI lesson prepared · review every step; mathematical correctness is not independently verified."), o("isResolvingProblem", !1), o("hasProblemSolution", !0), n.problemSolution;
      } else
        return o("problemSolution", i.problem_ai_parse.solution), o("problemSolutionText", i.problem_ai_parse.text), o("blackboardLesson", i.problem_ai_parse.board), o("blackboardTitle", i.problem_ai_parse.board.title), o("blackboardProblemLabel", i.problem_ai_parse.board.problemLabel), o("blackboardProblemStatement", i.problem_ai_parse.board.problemStatement), o("blackboardLearningGoal", i.problem_ai_parse.board.learningGoal), o("blackboardSteps", i.problem_ai_parse.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", i.problem_ai_parse.question.prompt), o("teacherQuestionOptions", i.problem_ai_parse.question.options), o("teacherQuestionCorrectValue", i.problem_ai_parse.question.correctValue), o("teacherQuestionExplanation", i.problem_ai_parse.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", "AI lesson prepared · review every step; mathematical correctness is not independently verified."), o("isResolvingProblem", !1), o("hasProblemSolution", !0), n.problemSolution;
    }
  }
  async function Ee(s = {}) {
    const r = s || {}, e = {}, i = {};
    o("isLoadingSyllabi", !0), await I({});
    try {
      {
        const a = $({ userIdentity: "" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.syllabi_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_query" };
      return e.error = a, i.syllabi_query = { error: a }, o("isLoadingSyllabi", !1), await I({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => (Array.isArray(i.syllabi_query) ? i.syllabi_query : []).map((m) => ({ label: String(m.label || m.title || "Untitled syllabus"), value: String(m.value || m.id || "") })).filter((m) => m.value))();
        i.syllabi_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_parse" };
      return e.error = a, i.syllabi_parse = { error: a }, o("isLoadingSyllabi", !1), await I({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    return o("savedSyllabusOptions", i.syllabi_parse), o("isLoadingSyllabi", !1), await I({}), i.syllabi_parse;
  }
  async function js(s = {}) {
    o("newProblemText", (s || {}).value);
  }
  async function pr(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => {
        const t = O.accessProfile && typeof O.accessProfile == "object" ? O.accessProfile : {}, a = Object.keys(t).length > 0, p = a ? t.authenticated === !0 || t.isAuthenticated === !0 || !!(t.uid || t.userId || t.id) : O.authenticated === !0, l = a && Array.isArray(t.roles) ? t.roles.map(String) : [String(O.userRole || "")], u = String(a ? t.verificationStatus || "pending" : O.verificationStatus || "pending"), m = l.some((A) => ["professor", "educator", "admin", "institution_admin"].includes(A)), d = p && m && u === "approved";
        return { authenticated: p, roles: l, status: u, canUseStudio: d, title: p ? m ? u === "rejected" ? "Professor verification rejected" : "Professor approval required" : "Professor access required" : "Sign in required", message: p ? m ? u === "rejected" ? "Your professor verification was rejected. Contact your institution administrator." : "Your professor verification is pending. The studio will unlock after server-side approval." : "This workspace is available only to professors and institution administrators." : "Sign in and complete professor registration to use this studio.", badgeLabel: d ? "Verified professor" : u === "rejected" ? "Verification rejected" : "Verification pending" };
      })();
      e.prof_access_derive = i;
    }
    return o("canUseStudio", e.prof_access_derive.canUseStudio), await I({}), o("showAccessGate", !e.prof_access_derive.canUseStudio), o("accessGateTitle", e.prof_access_derive.title), o("accessGateMessage", e.prof_access_derive.message), o("accessBadgeLabel", e.prof_access_derive.badgeLabel), e.prof_access_derive;
  }
  async function Ls(s = {}) {
    const r = {};
    return (function(i) {
      const t = !!(i.isSavingSyllabus || i.isGeneratingStructure || i.isResolvingProblem || i.isSavingStrategy || i.isLoadingSyllabi || i.isOpeningSyllabus), a = i.canUseStudio !== !0 || t, p = !!(i.selectedSyllabusId && i.savedSyllabusKey && i.savedContextKey && Number.isInteger(i.savedSyllabusVersion) && i.savedSyllabusVersion > 0);
      return {
        busy: t,
        unavailable: a,
        previewDisabled: a || !p || !i.hasProblemSolution || !i.savedProblemId,
        versionDisabled: a || !p || i.savedSyllabusVersion >= 1e5,
        lessonEmpty: !i.isResolvingProblem && !i.hasProblemSolution
      };
    })(n).unavailable ? { ok: !1, reason: "studio_unavailable" } : (await gr({ status: "published" }), r.publish_saved_course);
  }
  async function Os(s = {}) {
    const r = s || {}, e = {}, i = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(n).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    o("isGeneratingStructure", !0), await I({}), o("structureStatus", "Generating a multilevel hierarchy with Gemini…");
    try {
      await se("aiStructureRequested", { languageCode: O.locale, sourceText: n.syllabusDraftText }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_emit" };
      return e.error = a, i.structure_emit = { error: a }, o("isGeneratingStructure", !1), await I({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = String(n.syllabusDraftText || "").trim();
          if (!u) throw new Error("Paste a syllabus before proposing a hierarchy.");
          return ["You are an academic curriculum architect.", "Return JSON only with Programme > Semester > Subject > Unit > Topic hierarchy.", "Every topic must contain a problems array with 2 to 4 representative college-level mathematics problems.", 'Shape: {"hierarchy":{"id":"...","type":"programme","title":"...","children":[{"id":"...","type":"semester","title":"...","children":[{"id":"...","type":"subject","title":"...","children":[{"id":"...","type":"unit","title":"...","children":[{"id":"...","type":"topic","title":"...","problems":["..."],"children":[]}]}]}]}]}}.', "Use stable lowercase-hyphen IDs.", "Detect the language of the supplied syllabus and keep every human-readable hierarchy title and representative problem in that same source language. Do not mix languages. Keep JSON keys and mathematical notation unchanged.", "Syllabus:", u].join(`
`);
        })();
        i.structure_prompt = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_prompt" };
      return e.error = a, i.structure_prompt = { error: a }, o("isGeneratingStructure", !1), await I({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }, a = $({ prompt: "{{ stepResults.structure_prompt }}" }, t) || {}, p = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(3e4) }), l = await p.json().catch(() => ({}));
        if (!p.ok) throw new Error(l.error || "Protected API request failed (" + p.status + ")");
        const u = l.data;
        i.structure_api = u, e.apiResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_api" };
      return e.error = a, i.structure_api = { error: a }, o("isGeneratingStructure", !1), await I({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = i.structure_api || {}, m = u?.candidates?.[0]?.content?.parts, d = Array.isArray(m) ? m.map((b) => String(b?.text || "")).join("") : "";
          if (!d.trim()) throw new Error("Gemini returned no curriculum structure.");
          const y = JSON.parse(d.trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "")), x = ["programme", "semester", "subject", "unit", "topic"], q = (b, R) => String(b || R).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || R, A = (b, R = 0, Q = "item") => {
            if (!b || typeof b != "object" || R > 4) return null;
            const C = String(b.title || "").trim().slice(0, 180);
            if (!C) return null;
            const z = x[Math.min(R, 4)], G = Array.isArray(b.children) ? b.children.slice(0, 16).map((B, E) => A(B, R + 1, z + "-" + E)).filter(Boolean) : [], N = z === "topic" && Array.isArray(b.problems) ? b.problems.map(String).map((B) => B.trim()).filter(Boolean).slice(0, 8) : [];
            return { id: q(b.id || C, Q), type: z, title: C, children: G, ...z === "topic" ? { problems: N.length ? N : ["Create a worked example for " + C + ".", "Add one conceptual verification question for " + C + ".", "Add one examination-style application problem for " + C + "."] } : {} };
          }, w = A(y.hierarchy || y, 0, "programme");
          if (!w) throw new Error("Gemini returned an invalid hierarchy.");
          const F = (b, R = []) => {
            const Q = [...R, b.id];
            return { id: b.id, label: b.type[0].toUpperCase() + b.type.slice(1) + " · " + b.title, data: { type: b.type, title: b.title, path: Q.join("/"), problems: b.problems || [] }, children: b.children.map((C) => F(C, Q)) };
          };
          return { hierarchy: w, items: [F(w)] };
        })();
        i.structure_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_parse" };
      return e.error = a, i.structure_parse = { error: a }, o("isGeneratingStructure", !1), await I({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    o("finalHierarchy", i.structure_parse.hierarchy), o("hierarchyItems", i.structure_parse.items), o("selectedHierarchyIds", []), o("hasSelectedTopic", !1), o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0), o("isGeneratingStructure", !1), await I({}), o("structureStatus", "Hierarchy ready. Select a Topic to view its problems.");
    try {
      await se("aiStructureGenerated", { hierarchy: i.structure_parse.hierarchy, languageCode: O.locale }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_generated" };
      return e.error = a, i.structure_generated = { error: a }, o("isGeneratingStructure", !1), await I({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    return i.structure_parse;
  }
  async function Ms(s = {}) {
    const r = s || {}, e = {}, i = {};
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => (function(m, d) {
          const y = structuredClone(d.strategyDraft || {}), x = Array.isArray(d.blackboardLesson?.steps) ? d.blackboardLesson.steps : [], q = m.stepId ? x.find((b) => b.id === m.stepId) : x[Number(d.activeStep || 0)];
          if (!q?.id || !String(q.title || "").trim()) throw new Error("Select a real lesson step before editing the strategy.");
          const A = String(m.operation || "keep");
          if (!["keep", "remove", "annotate"].includes(A)) throw new Error("Unsupported strategy edit.");
          const w = String(q.title).trim();
          for (const b of ["requiredSteps", "forbiddenShortcuts", "teachingNotes"]) y[b] = Array.isArray(y[b]) ? y[b].map(String) : [];
          if (A === "keep" && !y.requiredSteps.includes(w) && y.requiredSteps.push(w), A === "remove") {
            y.requiredSteps = y.requiredSteps.filter((R) => R !== w);
            const b = "Avoid this step when it is unnecessary: " + w;
            y.forbiddenShortcuts.includes(b) || y.forbiddenShortcuts.push(b);
          }
          if (A === "annotate") {
            const b = String(m.note || "").trim();
            if (!b || b.length > 2e3) throw new Error("Provide a teaching note of 1–2000 characters.");
            const R = w + ": " + b;
            y.teachingNotes.includes(R) || y.teachingNotes.push(R);
          }
          const F = [
            `Preferred method
` + String(y.preferredMethod || "Professor-guided method"),
            `Required steps
` + y.requiredSteps.map((b, R) => R + 1 + ". " + b).join(`
`),
            `Avoid
` + y.forbiddenShortcuts.map((b) => "• " + b).join(`
`),
            `Verification
` + (Array.isArray(y.verificationRules) ? y.verificationRules : []).map((b) => "• " + b).join(`
`),
            `Teaching notes
` + y.teachingNotes.map((b) => "• " + b).join(`
`)
          ].join(`

`);
          return { draft: y, text: F, operation: A, step: w, stepId: q.id };
        })(r, n))();
        i.strategy_edit = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "strategy_edit" };
      return e.error = a, i.strategy_edit = { error: a }, o("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy."), { ok: !1 };
    }
    o("strategyDraft", i.strategy_edit.draft), o("strategyDraftText", i.strategy_edit.text), o("strategyStatus", "Strategy draft updated from the representative solution. Approve it to create a new version.");
    try {
      await se("stepOperationRequested", { note: r.note || "", operation: r.operation, stepId: i.strategy_edit.stepId }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "edit_emit" };
      return e.error = a, i.edit_emit = { error: a }, o("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy."), { ok: !1 };
    }
    return i.strategy_edit.draft;
  }
  async function Ks(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {};
        return { id: String(t.id || ""), text: String(a.text || t.label || "") };
      })();
      e.problem_select_read = i;
    }
    return o("selectedProblemIds", [e.problem_select_read.id]), o("selectedProblemText", e.problem_select_read.text), o("selectedProblemStatement", e.problem_select_read.text), await Ie({ solutionMode: "detailed", statement: e.problem_select_read.text }), e.problem_select_resolve;
  }
  async function Fs(s = {}) {
    o("syllabusTitle", (s || {}).value);
  }
  async function Qs(s = {}) {
    const r = s || {}, e = {}, i = {};
    o("isSavingStrategy", !0), await I({});
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          if (!n.selectedSyllabusId || !n.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          if (!n.selectedTopicId) throw new Error("Select a Topic before approving a strategy.");
          const u = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context";
          return { contextKey: String(n.savedContextKey), versionNumber: Number(n.savedSyllabusVersion), locale: String(O.locale || "en"), scopePath: String(n.selectedTopicPath || n.selectedTopicId), scopeType: "topic", title: String(n.selectedTopicTitle || "Topic") + " teaching strategy", strategy: n.strategyDraft };
        })();
        i.context_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_prepare" };
      return e.error = a, i.context_prepare = { error: a }, o("isSavingStrategy", !1), await I({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.context_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.context_prepare.locale }}", scopePath: "{{ stepResults.context_prepare.scopePath }}", scopeType: "{{ stepResults.context_prepare.scopeType }}", strategy: "{{ stepResults.context_prepare.strategy }}", title: "{{ stepResults.context_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.context_prepare.versionNumber }}" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.context_save_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_query" };
      return e.error = a, i.context_save_query = { error: a }, o("isSavingStrategy", !1), await I({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = Array.isArray(i.context_save_query) ? i.context_save_query : [], m = u[0], d = m && typeof m == "object" ? m.result || m : {};
          if (!d.strategyId) throw new Error("Strategy was not saved. Use an owned draft version.");
          return { id: String(d.strategyId || ""), version: Number(d.strategyVersion || 0), strategy: d.strategy || i.context_prepare.strategy };
        })();
        i.context_save_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_parse" };
      return e.error = a, i.context_save_parse = { error: a }, o("isSavingStrategy", !1), await I({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    o("resolvedStrategyId", i.context_save_parse.id), o("resolvedStrategyVersion", i.context_save_parse.version), o("resolvedStrategy", i.context_save_parse.strategy), o("strategyStatus", "Approved strategy v" + i.context_save_parse.version + " saved for " + n.selectedTopicTitle + "."), o("structureStatus", "Selected hierarchy and teaching strategy are now the active context."), o("isSavingStrategy", !1), await I({});
    try {
      await se("contextSetRequested", { hierarchy: n.finalHierarchy, languageCode: O.locale, scopePath: n.selectedTopicPath, selectedTopicId: n.selectedTopicId, strategy: i.context_save_parse.strategy, strategyId: i.context_save_parse.id, strategyVersion: i.context_save_parse.version }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_emit" };
      return e.error = a, i.context_emit = { error: a }, o("isSavingStrategy", !1), await I({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    return { hierarchy: n.finalHierarchy, scopePath: n.selectedTopicPath, strategy: i.context_save_parse.strategy, strategyId: i.context_save_parse.id, strategyVersion: i.context_save_parse.version };
  }
  async function Vs(s = {}) {
    o("syllabusDraftText", (s || {}).value || "");
  }
  async function Ce(s = {}) {
    const r = {};
    return await pr({}), await yr({}), r.scenario_access;
  }
  async function zs(s = {}) {
    await se("lessonShareRequested", { expiresInHours: 168, visibility: "unlisted" }, !0);
  }
  async function br(s = {}) {
    const r = s || {}, e = {}, i = {};
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          if (!n.selectedSyllabusId || !n.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          const u = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context";
          return { contextKey: String(n.savedContextKey), versionNumber: Number(n.savedSyllabusVersion) };
        })();
        i.load_strategy_context = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_context" };
      return e.error = a, i.load_strategy_context = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.load_strategy_context.contextKey }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.load_strategy_context.versionNumber }}" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.load_strategy_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_query" };
      return e.error = a, i.load_strategy_query = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = Array.isArray(i.load_strategy_query) ? i.load_strategy_query : [], m = u[0], d = m && typeof m == "object" ? m.result || m : null, y = d && d.strategy ? d.strategy : n.strategyDraft, x = d ? Number(d.strategyVersion || 0) : 0, q = d ? String(d.strategyId || "") : "", A = Array.isArray(y.requiredSteps) ? y.requiredSteps : [], w = Array.isArray(y.forbiddenShortcuts) ? y.forbiddenShortcuts : [], F = Array.isArray(y.verificationRules) ? y.verificationRules : [], b = Array.isArray(y.teachingNotes) ? y.teachingNotes : [], R = [`Preferred method
` + String(y.preferredMethod || "Professor-guided method")];
          return A.length && R.push(`Required steps
` + A.map((Q, C) => C + 1 + ". " + Q).join(`
`)), w.length && R.push(`Avoid
` + w.map((Q) => "• " + Q).join(`
`)), F.length && R.push(`Verification
` + F.map((Q) => "• " + Q).join(`
`)), b.length && R.push(`Teaching notes
` + b.map((Q) => "• " + Q).join(`
`)), { strategy: y, version: x, id: q, text: R.join(`

`), status: d ? "Approved strategy v" + x + " loaded for " + r.topicTitle + "." : "No approved strategy yet. Refine the example and approve this draft." };
        })();
        i.load_strategy_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_parse" };
      return e.error = a, i.load_strategy_parse = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    return o("strategyDraft", i.load_strategy_parse.strategy), o("strategyDraftText", i.load_strategy_parse.text), o("resolvedStrategy", i.load_strategy_parse.strategy), o("resolvedStrategyId", i.load_strategy_parse.id), o("resolvedStrategyVersion", i.load_strategy_parse.version), o("strategyStatus", i.load_strategy_parse.status), i.load_strategy_parse;
  }
  async function yr(s = {}) {
    o("syllabusDraftText", O.syllabusText || "");
  }
  async function Gs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => {
        const t = String(n.newProblemText || "").trim();
        if (!t) throw new Error("Enter a problem statement.");
        if (!n.selectedTopicId) throw new Error("Select a Topic first.");
        const a = Array.isArray(n.selectedTopicProblems) ? n.selectedTopicProblems.map(String) : [], p = [.../* @__PURE__ */ new Set([...a, t])], l = p.map((u, m) => ({ id: n.selectedTopicId + "-problem-" + (m + 1), label: m + 1 + ". " + u, data: { type: "problem", topicId: n.selectedTopicId, text: u } }));
        return { text: t, problems: p, items: l };
      })();
      e.new_problem_prepare_item = i;
    }
    return o("selectedTopicProblems", e.new_problem_prepare_item.problems), o("selectedTopicProblemItems", e.new_problem_prepare_item.items), o("selectedProblemStatement", e.new_problem_prepare_item.text), o("showNewProblemForm", !1), await Ie({ solutionMode: n.newProblemSolutionMode, statement: e.new_problem_prepare_item.text }), o("newProblemText", ""), e.new_problem_resolve;
  }
  async function hr(s = {}) {
    const r = s || {}, e = {}, i = {};
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          if (!n.selectedSyllabusId || !n.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          const u = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context";
          return { contextKey: String(n.savedContextKey), versionNumber: Number(n.savedSyllabusVersion), locale: String(O.locale || "en") };
        })();
        i.topic_problem_context = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_context" };
      return e.error = a, i.topic_problem_context = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const a = $({ contextKey: "{{ stepResults.topic_problem_context.contextKey }}", locale: "{{ stepResults.topic_problem_context.locale }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.topic_problem_context.versionNumber }}" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.topic_problem_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_query" };
      return e.error = a, i.topic_problem_query = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = Array.isArray(i.topic_problem_query) ? i.topic_problem_query : [], m = u.map((q) => String(q && q.statement || "").trim()).filter(Boolean), d = Array.isArray(r.fallbackProblems) ? r.fallbackProblems.map(String) : [], y = [...new Set(m.length ? m : d)], x = y.map((q, A) => ({ id: String(r.topicId) + "-problem-" + (A + 1), label: A + 1 + ". " + q, data: { type: "problem", topicId: String(r.topicId), text: q, stored: m.length > 0 } }));
          return { problems: y, items: x, source: m.length ? "database" : "hierarchy" };
        })();
        i.topic_problem_merge = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_merge" };
      return e.error = a, i.topic_problem_merge = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    return o("selectedTopicProblems", i.topic_problem_merge.problems), o("selectedTopicProblemItems", i.topic_problem_merge.items), o("structureStatus", i.topic_problem_merge.source === "database" ? "Stored problems loaded for this Topic." : "Proposed problems shown. Select one to save its generated solution."), i.topic_problem_merge;
  }
  async function Hs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => (function(a, p) {
        const l = Array.isArray(p.studentLesson?.steps) ? p.studentLesson.steps : [], u = a.event ?? a.stepIndex ?? a.index ?? 0, m = Number(typeof u == "object" ? u?.nextIndex ?? u?.index : u), d = Math.max(0, Math.min(Math.max(0, l.length - 1), Number.isFinite(m) ? Math.floor(m) : 0)), y = l[d]?.teacherQuestion || {}, x = Number(p.progressPercent), q = Math.max(Number.isFinite(x) ? Math.min(100, Math.max(0, x)) : 0, l.length ? Math.round((d + 1) / l.length * 100) : 0);
        return { index: d, stepId: String(l[d]?.id || ""), prompt: String(y.prompt || ""), options: Array.isArray(y.options) ? y.options : [], correctValue: String(y.correctValue || ""), explanation: String(y.explanation || ""), progress: q, completed: q === 100 };
      })(r, { studentLesson: n.blackboardLesson, progressPercent: 0 }))();
      e.teacher_step_read = i;
    }
    o("activeStep", e.teacher_step_read.index), o("teacherQuestionPrompt", e.teacher_step_read.prompt), o("teacherQuestionOptions", e.teacher_step_read.options), o("teacherQuestionCorrectValue", e.teacher_step_read.correctValue), o("teacherQuestionExplanation", e.teacher_step_read.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", "");
  }
  async function Us(s = {}) {
    o("showNewProblemForm", !0), o("newProblemText", ""), o("problemResolutionStatus", "The database will be checked before AI is used.");
  }
  async function Bs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {}, p = a.type === "topic", l = p && Array.isArray(a.problems) ? a.problems.map(String) : [], u = l.map((m, d) => ({ id: String(t.id || "topic") + "-problem-" + (d + 1), label: d + 1 + ". " + m, data: { type: "problem", topicId: String(t.id || ""), text: m } }));
        return { id: String(t.id || ""), topic: p, title: String(a.title || t.label || ""), path: String(a.path || t.id || ""), problems: l, problemItems: u, text: l.map((m, d) => d + 1 + ". " + m).join(`
`) };
      })();
      e.select_node = i;
    }
    return o("selectedHierarchyIds", [e.select_node.id]), o("hasSelectedTopic", e.select_node.topic), o("selectedTopicId", e.select_node.topic ? e.select_node.id : ""), o("selectedTopicPath", e.select_node.path), o("hasProblemSolution", !1), await I({}), o("selectedTopicTitle", e.select_node.title), o("selectedTopicHeading", e.select_node.topic ? "Problems for " + e.select_node.title : "Select a Topic to view problems"), o("selectedTopicProblems", e.select_node.problems), o("selectedTopicProblemItems", e.select_node.problemItems), o("selectedProblemIds", []), o("selectedProblemText", ""), o("selectedTopicProblemsText", e.select_node.text), o("structureStatus", e.select_node.topic ? "Topic selected. Add problems or set the hierarchy as context." : "Select a Topic node to view its problems."), e.select_node.topic && (await hr({ fallbackProblems: e.select_node.problems, topicId: e.select_node.id, topicPath: e.select_node.path }), await br({ topicPath: e.select_node.path, topicTitle: e.select_node.title })), e.select_node;
  }
  async function gr(s = {}) {
    const r = s || {}, e = {}, i = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(n).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => (function(m, d, y) {
          if (!y.canUseStudio) throw new Error("Verified educator access is required.");
          const x = String(y.syllabusTitle || "").trim(), q = String(y.syllabusDraftText || "").trim();
          if (!x || x.length > 180 || !q || q.length > 1e5) throw new Error("Provide a title and syllabus text within the supported limits.");
          const A = y.finalHierarchy, w = [], F = /* @__PURE__ */ new Set();
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
          const C = String(y.savedSyllabusKey || "course-" + Q.toString(36)), z = Number(y.savedSyllabusVersion || d.contextVersionNumber || 1);
          if (!Number.isInteger(z) || z < 1 || z > 1e5) throw new Error("Invalid course version.");
          const G = m.status === "published" ? "published" : "draft";
          return { title: x, text: q, syllabusKey: C, versionNumber: z, description: String(y.syllabusDescription || "").trim(), languageCode: ["en", "hi", "ta"].includes(d.locale) ? d.locale : "en", hierarchy: A, problems: w, status: G, visibility: G === "published" ? "public" : "private" };
        })(r, O, n))();
        i.save_syllabus_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_prepare" };
      return e.error = a, i.save_syllabus_prepare = { error: a }, o("isSavingSyllabus", !1), await I({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("isSavingSyllabus", !0), await I({});
    try {
      {
        const a = $({ description: "{{ stepResults.save_syllabus_prepare.description }}", hierarchy: "{{ stepResults.save_syllabus_prepare.hierarchy }}", languageCode: "{{ stepResults.save_syllabus_prepare.languageCode }}", problems: "{{ stepResults.save_syllabus_prepare.problems }}", status: "{{ stepResults.save_syllabus_prepare.status }}", syllabusKey: "{{ stepResults.save_syllabus_prepare.syllabusKey }}", syllabusText: "{{ stepResults.save_syllabus_prepare.text }}", title: "{{ stepResults.save_syllabus_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.save_syllabus_prepare.versionNumber }}", visibility: "{{ stepResults.save_syllabus_prepare.visibility }}" }, { args: r, inputs: O, state: n, sharedState: W, applicationState: Y, pageState: Z, pageData: L, serverData: k, vars: e, stepResults: i }) || {};
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
        i.save_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_query" };
      return e.error = a, i.save_syllabus_query = { error: a }, o("isSavingSyllabus", !1), await I({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          const u = i.save_syllabus_query, m = Array.isArray(u) ? u[0]?.result : null;
          if (!m?.id || !m.contextKey) throw new Error("The version is immutable or could not be saved. Start a new version.");
          return m;
        })();
        i.save_syllabus_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_result" };
      return e.error = a, i.save_syllabus_result = { error: a }, o("isSavingSyllabus", !1), await I({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("selectedSyllabusId", i.save_syllabus_result.id), await I({}), o("savedSyllabusKey", i.save_syllabus_result.key), await I({}), o("savedSyllabusVersion", i.save_syllabus_result.versionNumber), await I({}), o("savedContextKey", i.save_syllabus_result.contextKey), await I({}), o("syllabusStatus", i.save_syllabus_prepare.status === "published" ? "Published for students under this professor." : "Syllabus draft saved.");
    try {
      await Ee({});
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_refresh" };
      return e.error = a, i.save_syllabus_refresh = { error: a }, o("isSavingSyllabus", !1), await I({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    return o("isSavingSyllabus", !1), await I({}), i.save_syllabus_result;
  }
  async function $s(s = {}) {
    o("showSyllabusSetup", !0), o("isSyllabusSetupCollapsed", !1);
  }
  async function Js(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => {
        if (!n.selectedTopicId) throw new Error("Select a Topic before adding problems.");
        const t = Array.isArray(n.selectedTopicProblems) ? n.selectedTopicProblems.map(String) : [], a = ["Explain the key theorem used in " + n.selectedTopicTitle + " and give a counterexample.", "Create a guided problem connecting " + n.selectedTopicTitle + " to another unit.", "Create an examination-style " + n.selectedTopicTitle + " problem with verification."], p = [.../* @__PURE__ */ new Set([...t, ...a])].slice(0, 10), l = JSON.parse(JSON.stringify(n.finalHierarchy)), u = (y) => {
          y.id === n.selectedTopicId && (y.problems = p), (y.children || []).forEach(u);
        };
        u(l);
        const m = (y) => ({ id: y.id, label: y.type[0].toUpperCase() + y.type.slice(1) + " · " + y.title, data: { type: y.type, title: y.title, problems: y.problems || [] }, children: (y.children || []).map(m) }), d = p.map((y, x) => ({ id: n.selectedTopicId + "-problem-" + (x + 1), label: x + 1 + ". " + y, data: { type: "problem", topicId: n.selectedTopicId, text: y } }));
        return { problems: p, problemItems: d, text: p.map((y, x) => x + 1 + ". " + y).join(`
`), hierarchy: l, items: [m(l)] };
      })();
      e.problems_expand = i;
    }
    o("selectedTopicProblems", e.problems_expand.problems), o("selectedTopicProblemItems", e.problems_expand.problemItems), o("selectedProblemIds", []), o("selectedTopicProblemsText", e.problems_expand.text), o("finalHierarchy", e.problems_expand.hierarchy), o("hierarchyItems", e.problems_expand.items), o("structureStatus", "Problems added to the selected Topic."), await se("problemsAddRequested", { hierarchy: e.problems_expand.hierarchy, problems: e.problems_expand.problems, topicId: n.selectedTopicId }, !0);
  }
  async function Ws(s = {}) {
    const r = s || {}, e = {}, i = {};
    if ((function(a) {
      const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: p,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(n).previewDisabled)
      return { ok: !1, reason: "studio_unavailable" };
    try {
      {
        const t = r.event, a = L, p = n, l = await (async () => {
          function u(d, y = "") {
            if (!d || typeof d != "object" || Array.isArray(d)) throw new Error("A lesson object is required.");
            const x = (w, F, b = !1) => {
              if (w != null && typeof w != "string") throw new Error(F + " must be text.");
              const R = (w || "").trim();
              if (b && !R || R.length > 16e3) throw new Error("Invalid " + F + ".");
              return R;
            };
            if (!Array.isArray(d.steps) || !d.steps.length || d.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const q = /* @__PURE__ */ new Set(), A = d.steps.map((w, F) => {
              if (!w || typeof w != "object" || Array.isArray(w)) throw new Error("Invalid lesson step.");
              const b = x(w.id, "step ID") || "step-" + (F + 1);
              if (q.has(b)) throw new Error("Step IDs must be unique.");
              q.add(b);
              const R = w.teacherQuestion;
              if (!R || !Array.isArray(R.options) || R.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const Q = /* @__PURE__ */ new Set(), C = R.options.map((E) => {
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
                teacherQuestion: { prompt: G, options: C, correctValue: z, explanation: x(R.explanation, "answer explanation", !0) }
              };
              for (const E of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) B[E] = x(w[E], E);
              return B;
            });
            return {
              title: x(d.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: x(d.problemLabel, "problem label") || "Problem",
              problemStatement: x(d.problemStatement || y, "problem statement", !0),
              learningGoal: x(d.learningGoal, "learning goal"),
              steps: A,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }
          function m(d) {
            if (!d || typeof d != "object" || Array.isArray(d) || !Object.keys(d).length) return { enabled: !1, valid: !1 };
            if (JSON.stringify(d).length > 25e4) throw new Error("Preview is too large.");
            if (d.schemaVersion !== 1) throw new Error("Unsupported preview schema.");
            const y = u(d.lesson, d.problem?.statement), x = d.context || {}, q = (A) => typeof A == "string" ? A.trim().slice(0, 500) : "";
            if (!q(x.syllabusId) || !q(x.contextKey) || !q(d.problem?.id)) throw new Error("Preview needs saved syllabus, context, and problem IDs.");
            return {
              enabled: !0,
              valid: !0,
              schemaVersion: 1,
              context: { syllabusId: q(x.syllabusId), contextKey: q(x.contextKey), versionNumber: Math.max(1, Math.floor(Number(x.versionNumber) || 1)), locale: ["en", "hi", "ta"].includes(x.locale) ? x.locale : "en", topicPath: q(x.topicPath) },
              problem: { id: q(d.problem.id), statement: y.problemStatement, solutionMode: d.problem.solutionMode === "quick" ? "quick" : "detailed" },
              lesson: y,
              boardSteps: y.steps.map(({ teacherQuestion: A, teacherPrompt: w, ...F }) => F),
              message: "Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified."
            };
          }
          if (!n.canUseStudio || !n.hasProblemSolution || !n.savedProblemId) throw new Error("Save and resolve a problem first.");
          return m({ schemaVersion: 1, context: { syllabusId: n.selectedSyllabusId, contextKey: n.savedContextKey, versionNumber: n.savedSyllabusVersion, locale: O.locale, topicPath: n.selectedTopicPath }, problem: { id: n.savedProblemId, statement: n.blackboardLesson.problemStatement, solutionMode: n.newProblemSolutionMode }, lesson: n.blackboardLesson });
        })();
        i.prepare_preview = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "prepare_preview" };
      return e.error = a, i.prepare_preview = { error: a }, o("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first."), { ok: !1 };
    }
    o("contentPreviewPacket", i.prepare_preview);
    try {
      await se("contentPreviewReady", i.prepare_preview, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "emit_preview_packet" };
      return e.error = a, i.emit_preview_packet = { error: a }, o("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first."), { ok: !1 };
    }
    return o("problemResolutionStatus", "Student preview prepared. Open it through the connected application."), i.prepare_preview;
  }
  async function I(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const i = await (async () => (function(a) {
        const p = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || p, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
        return {
          busy: p,
          unavailable: l,
          previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
          versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
          lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
        };
      })(n))();
      e.studio_controls_read = i;
    }
    o("studioControls", e.studio_controls_read);
  }
  const Ys = {
    setSyllabusDescription: Is,
    toggleStudioSidebar: Es,
    selectSavedSyllabus: Cs,
    closeNewProblemForm: qs,
    setNewProblemSolutionMode: Rs,
    collapseSyllabusSetup: Ns,
    selectTeacherAnswer: Ds,
    startNextSyllabusVersion: ks,
    resolveProblemSolution: Ie,
    loadProfessorSyllabi: Ee,
    setNewProblemText: js,
    initializeProfessorAccess: pr,
    publishContext: Ls,
    requestStructure: Os,
    editStep: Ms,
    selectProblem: Ks,
    setSyllabusTitle: Fs,
    setHierarchyContext: Qs,
    setSyllabusText: Vs,
    refreshProfessorScenario: Ce,
    shareLesson: zs,
    loadContextStrategy: br,
    syncSyllabusInput: yr,
    submitNewProblem: Gs,
    loadTopicProblems: hr,
    selectStep: Hs,
    openNewProblemForm: Us,
    selectHierarchyNode: Bs,
    saveProfessorSyllabus: gr,
    expandSyllabusSetup: $s,
    addProblems: Js,
    prepareContentPreview: Ws,
    refreshStudioControls: I
  }, Zs = {
    setSyllabusDescription: ["value"],
    toggleStudioSidebar: [],
    selectSavedSyllabus: ["value"],
    closeNewProblemForm: [],
    setNewProblemSolutionMode: ["value"],
    collapseSyllabusSetup: [],
    selectTeacherAnswer: ["value"],
    startNextSyllabusVersion: [],
    resolveProblemSolution: ["statement", "solutionMode"],
    loadProfessorSyllabi: [],
    setNewProblemText: ["value"],
    initializeProfessorAccess: [],
    publishContext: [],
    requestStructure: [],
    editStep: ["operation", "stepId", "note"],
    selectProblem: ["item", "index", "depth"],
    setSyllabusTitle: ["value"],
    setHierarchyContext: [],
    setSyllabusText: ["value"],
    refreshProfessorScenario: [],
    shareLesson: [],
    loadContextStrategy: ["topicPath", "topicTitle"],
    syncSyllabusInput: [],
    submitNewProblem: [],
    loadTopicProblems: ["topicPath", "topicId", "fallbackProblems"],
    selectStep: ["event", "stepIndex", "index"],
    openNewProblemForm: [],
    selectHierarchyNode: ["item", "index", "depth"],
    saveProfessorSyllabus: ["status"],
    expandSyllabusSetup: [],
    addProblems: [],
    prepareContentPreview: [],
    refreshStudioControls: []
  }, M = (s, r = {}, e = []) => {
    const i = Ys[s];
    if (i) {
      const u = Zs[s] || [];
      return i(Object.fromEntries(u.map((m, d) => {
        const y = Object.prototype.hasOwnProperty.call(r, m) ? r[m] : void 0;
        return [m, (y === "" || y === void 0) && e[d] !== void 0 ? e[d] : m === "event" && (y === "" || y === void 0) ? e[0] : y];
      })));
    }
    const t = Pr?.[s];
    if (typeof t == "function")
      return t(Object.keys(r).length > 0 ? r : e[0]);
    const [a, p] = String(s).split("."), l = typeof globalThis < "u" ? globalThis[a]?.[p] : void 0;
    if (typeof l == "function") return l(...Object.values(r));
    console.warn("Rudra action '" + s + "' is not available in this runtime.");
  }, ae = me(/* @__PURE__ */ new Map()), de = le((s, r, e, i) => {
    const t = ae.current.get(s);
    if (r === "exhaust" && t?.promise) return t.promise;
    r === "takeLatest" && t?.controller?.abort();
    const a = new AbortController(), p = () => Promise.resolve().then(() => e(a.signal)), l = r === "queue" && t?.promise ? t.promise.catch(() => {
    }).then(p) : p();
    return ae.current.set(s, { controller: a, promise: l }), l.catch((u) => {
      u?.name !== "AbortError" && console.error(i, u);
    }).finally(() => {
      ae.current.get(s)?.promise === l && ae.current.delete(s);
    }), l;
  }, []);
  re(() => () => {
    for (const s of ae.current.values()) s.controller?.abort();
    ae.current.clear();
  }, []), re(() => {
    de("professor_scenario_mountrefreshProfessorScenario", "takeLatest", (s) => Ce({}), "Module mount lifecycle failed:");
  }, []), re(() => {
    de("professor_syllabi_mountloadProfessorSyllabi", "takeLatest", (s) => Ee({ signal: s }), "Module mount lifecycle failed:");
  }, []);
  const fr = me(!1);
  re(() => {
    fr.current || (fr.current = !0), wt(structuredClone(!0)), Jt(structuredClone("Professor approval required")), ft(structuredClone("Sign in with an approved professor account to use this studio.")), Mt(structuredClone("Verification pending")), st(structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), jt(structuredClone("")), Qt(structuredClone("Select a saved syllabus or save this draft.")), $e(structuredClone(!0)), dr(structuredClone(!1)), Ge(structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), vt(structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), Gt(structuredClone([])), et(structuredClone(!1)), cr(structuredClone("")), Vt(structuredClone("")), ze(structuredClone("")), Ue(structuredClone("Selected topic problems")), It(structuredClone([])), nt(structuredClone([])), Tt(structuredClone([])), dt(structuredClone("")), _t(structuredClone("")), sr(structuredClone(!1)), Ze(structuredClone({})), We(structuredClone("")), tt(structuredClone("Select a problem to load its saved solution.")), lr(structuredClone(!1)), ir(structuredClone(0)), Bt(structuredClone("")), ht(structuredClone("Select one answer.")), pt(structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), Qe(structuredClone("Find the eigenvalues of a 2 × 2 matrix")), Xt(structuredClone("Representative problem · Linear algebra")), Yt(structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), qt(structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), lt(structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), rr(structuredClone(!1)), Kt(structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), Lt(structuredClone("")), Ht(structuredClone(0)), at(structuredClone("")), Dt(structuredClone("")), or(structuredClone({})), de("professor_scenario_inputsrefreshProfessorScenario", "takeLatest", (s) => Ce({}), "Module input lifecycle failed:");
  }, [JSON.stringify(he), JSON.stringify(ge), JSON.stringify(Se), JSON.stringify(Oe), JSON.stringify(ke), JSON.stringify(Me), JSON.stringify(Ke), JSON.stringify(je), JSON.stringify(fe), JSON.stringify(Le)]);
  const Sr = me(!1);
  return re(() => {
    Sr.current || (Sr.current = !0), de("studio_controls_inputsrefreshStudioControls", "takeLatest", (s) => I({}), "Module input lifecycle failed:");
  }, [JSON.stringify(Se), JSON.stringify(he), JSON.stringify(ge), JSON.stringify(fe)]), /* @__PURE__ */ h("div", { ref: pe, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ P("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/chalkmind-math@1.0.1/index.css", precedence: "rudra-library" }),
    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
      "      ",
      /* @__PURE__ */ h(U, { id: "root", className: "block rs-studio", children: [
        "      ",
        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
          "      ",
          /* @__PURE__ */ h(U, { id: "inner", className: "flex flex-col rs-studio-inner", children: [
            "      ",
            S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
              "      ",
              /* @__PURE__ */ h(U, { id: "head", className: "flex flex-wrap rs-studio-head", children: [
                "      ",
                S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                  "      ",
                  /* @__PURE__ */ h(U, { id: "head_copy", className: "flex flex-col rs-head-copy", children: [
                    "      ",
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(Xs, { id: "badge", label: /* @__PURE__ */ ((s) => s === void 0 ? "Verification pending" : s)(Ot), ariaLabel: "Professor verification status" })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "title", className: "rs-title", as: "h2", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor context studio" : s)(ce?.i18n?.title) })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "subtitle", className: "rs-muted", content: /* @__PURE__ */ ((s) => s === void 0 ? "Import a semester and steer representative solutions." : s)(ce?.i18n?.subtitle), as: "p" })
                    ] })
                  ] })
                ] }),
                S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                  "      ",
                  /* @__PURE__ */ P(H, { id: "sidebar_toggle", className: "rs-studio-action rs-sidebar-toggle", theme: "auto", variant: "outline", onAction: (...s) => M("toggleStudioSidebar", {}, s), "aria-controls": "left", "aria-expanded": /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(Pe), label: /* @__PURE__ */ ((s) => s === void 0 ? "Hide syllabus panel" : s)(bt) })
                ] })
              ] })
            ] }),
            S(xt) && /* @__PURE__ */ h(f, { children: [
              "      ",
              /* @__PURE__ */ h(vr, { id: "verification", title: /* @__PURE__ */ h(f, { children: [
                "      ",
                S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                  "      ",
                  /* @__PURE__ */ P(K, { id: "verification_title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor approval required" : s)($t) })
                ] })
              ] }), icon: /* @__PURE__ */ h(f, { children: [
                "      ",
                S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                  "      ",
                  /* @__PURE__ */ P(K, { id: "verification_icon", className: "rs-verification-icon", content: "!", as: "span" })
                ] })
              ] }), live: "polite", variant: "warning", appearance: "soft", children: [
                "      ",
                S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                  "      ",
                  /* @__PURE__ */ P(K, { id: "verification_message", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Sign in with an approved professor account to use this studio." : s)(gt) })
                ] })
              ] })
            ] }),
            S(tr) && /* @__PURE__ */ h(f, { children: [
              "      ",
              /* @__PURE__ */ h(U, { id: "grid", className: `${((s) => s == null || s === !1 || typeof s == "object" ? "" : "" + String(s))(/* @__PURE__ */ ((s) => s === void 0 ? "grid rs-grid" : s)(Et))}`, children: [
                "      ",
                S(/* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(Pe)) && /* @__PURE__ */ h(f, { children: [
                  "      ",
                  /* @__PURE__ */ h(xr, { id: "left", className: "rs-panel rs-authoring-panel", as: "section", theme: "auto", children: [
                    "      ",
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "syllabus_catalog", className: "block rs-syllabus-catalog", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "syllabus_catalog_title", as: "h4", content: "Your saved syllabi" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(_r, { id: "saved_syllabus_select", size: "md", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(kt), options: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Nt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.unavailable), placeholder: "Select a syllabus", name: "savedSyllabus", label: "Continue with a saved syllabus", radius: "md", onChangeValue: (...s) => M("selectSavedSyllabus", {}, s) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "refresh_syllabi", className: "rs-studio-action", loadingText: "Loading syllabi…", label: "Refresh syllabi", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(_e), variant: "ghost", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(_e), onAction: (...s) => M("loadProfessorSyllabi", {}, s) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "save_syllabus_draft", className: "rs-studio-action", label: "Save current syllabus", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(we), variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.unavailable), onAction: (...s) => M("saveProfessorSyllabus", { status: "draft" }, s), loadingText: "Saving syllabus…" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "publish_syllabus_students", className: "rs-studio-action", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.unavailable), onAction: (...s) => M("saveProfessorSyllabus", { status: "published" }, s), loadingText: "Publishing syllabus…", label: "Publish current syllabus for students", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(we) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "syllabus_catalog_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select a saved syllabus or save this draft." : s)(Ft) })
                        ] })
                      ] })
                    ] }),
                    S(oe) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "syllabus_metadata", className: "block rs-syllabus-metadata", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(ea, { id: "syllabus_title_input", required: !0, placeholder: "Engineering Mathematics I", onChangeValue: (...s) => M("setSyllabusTitle", {}, s), name: "syllabusTitle", size: "md", label: "Syllabus title", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(ar), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(J?.busy) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(Re, { id: "syllabus_description_input", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(J?.busy), placeholder: "What students will learn", onChangeValue: (...s) => M("setSyllabusDescription", {}, s), name: "syllabusDescription", rows: 3, label: "Description", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Ye) })
                        ] })
                      ] })
                    ] }),
                    S(ur) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(H, { id: "edit_syllabus_setup", className: "rs-studio-action", onAction: (...s) => M("expandSyllabusSetup", {}, s), label: "Edit syllabus / Regenerate", theme: "auto", variant: "outline" })
                    ] }),
                    S(oe) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "left_title", content: /* @__PURE__ */ ((s) => s === void 0 ? "Semester syllabus" : s)(ce?.i18n?.import), as: "h3" })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "structure_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Review the proposed hierarchy, add problems, then set it as context." : s)(Xe) })
                    ] }),
                    S(oe) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(Re, { id: "syllabus", name: "syllabus", rows: 10, label: "Paste one section or a complete semester", value: /* @__PURE__ */ ((s) => s === void 0 ? `Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation` : s)(rt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(J?.busy), helperText: "AI proposes programme → semester → subject → unit → topic. You approve before anything is saved.", onChangeValue: (...s) => M("setSyllabusText", {}, s) })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "final_hierarchy_title", content: "Final hierarchy", as: "h3" })
                    ] }),
                    S(oe) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "syllabus_actions", className: "flex flex-wrap rs-syllabus-actions", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "structure", className: "rs-studio-action", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.unavailable), onAction: (...s) => M("requestStructure", {}, s), loadingText: "Generating hierarchy…", label: "Propose structure with AI", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Be) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "collapse_syllabus_setup", className: "rs-studio-action", label: "Hide setup", theme: "auto", variant: "ghost", onAction: (...s) => M("collapseSyllabusSetup", {}, s) })
                        ] })
                      ] })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(vr, { id: "rules", appearance: "outlined", live: "off", title: "Reusable context draft", variant: "info", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "studio_rules_body", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Save your syllabus, review a lesson, and approve the teaching strategy before publishing." : s)(Te) })
                        ] })
                      ] })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(wr, { id: "tree", className: "w-full rs-tree-view", selectionMode: "single", expandOnItemClick: !0, items: /* @__PURE__ */ ((s) => s === void 0 ? [{ children: [{ children: [{ children: [{ children: [{ children: [], data: { problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }] : s)(St), showLines: !0, defaultExpandAll: !0, showDefaultIcons: !0, indent: 22, onItemClick: (...s) => M("selectHierarchyNode", {}, s), selectedIds: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(zt), children: (s) => (() => {
                        const r = { ...s || {}, item: s?.item ?? s, index: s?.index ?? s?.i ?? 0 };
                        return /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "hierarchy_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label) })
                        ] });
                      })() })
                    ] }),
                    S(ne) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "problems_title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "Selected topic problems" : s)(He) })
                    ] }),
                    S(ne) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(wr, { id: "problems_text", className: "rs-problem-list", items: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(ot), emptyText: "No problems yet. Use Add problems to create examples.", showLines: !1, selectedIds: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Pt), selectionMode: "single", showDefaultIcons: !0, expandOnItemClick: !0, indent: 20, onItemClick: (...s) => M("selectProblem", { depth: "", index: "", item: "" }, s), defaultExpandAll: !0, children: (s) => (() => {
                        const r = { ...s || {}, item: s?.item ?? s, index: s?.index ?? s?.i ?? 0 };
                        return /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "problem_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label) })
                        ] });
                      })() })
                    ] }),
                    S(er) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "new_problem_form", className: "block rs-new-problem-form", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "new_problem_title", as: "h4", content: "Add a context-scoped problem" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(Re, { id: "new_problem_input", rows: 5, required: !0, onChangeValue: (...s) => M("setNewProblemText", {}, s), name: "newProblem", label: "Problem statement", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Rt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(J?.busy), autoResize: !0, placeholder: "Enter a new problem for the selected topic" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(_r, { id: "new_problem_mode", value: /* @__PURE__ */ ((s) => s === void 0 ? "detailed" : s)(ct), radius: "md", options: [{ label: "Detailed steps", value: "detailed" }, { label: "Quick solution", value: "quick" }], onChangeValue: (...s) => M("setNewProblemSolutionMode", {}, s), name: "solutionMode", size: "md", label: "Solution style" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ h(U, { id: "new_problem_actions", className: "flex flex-wrap rs-new-problem-actions", children: [
                            "      ",
                            S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                              "      ",
                              /* @__PURE__ */ P(H, { id: "save_new_problem", className: "rs-studio-action", onAction: (...s) => M("submitNewProblem", {}, s), loadingText: "Checking saved solutions…", label: "Find or generate solution", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ue), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ue) })
                            ] }),
                            S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                              "      ",
                              /* @__PURE__ */ P(H, { id: "cancel_new_problem", className: "rs-studio-action", variant: "ghost", onAction: (...s) => M("closeNewProblemForm", {}, s), label: "Cancel", theme: "auto" })
                            ] })
                          ] })
                        ] })
                      ] })
                    ] }),
                    S(ie) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "problem_solution_panel", className: "block rs-problem-solution", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "problem_solution_text", className: "rs-problem-solution-text", as: "div", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Je) })
                        ] })
                      ] })
                    ] }),
                    S(ne) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "hierarchy_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "add_problems", className: "rs-studio-action", variant: "outline", onAction: (...s) => M("openNewProblemForm", {}, s), label: "Add new problem", theme: "auto" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                  "      ",
                  /* @__PURE__ */ h(xr, { id: "right", className: "rs-panel rs-solution-panel", as: "section", theme: "auto", children: [
                    "      ",
                    S(/* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.lessonEmpty)) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "studio_lesson_empty", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, select a topic, then choose or add a problem to review its lesson." })
                    ] }),
                    S(/* @__PURE__ */ ((s) => s === void 0 ? "" : s)(ve)) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "problem_solution_status", className: "rs-solution-source", as: "p", role: "status", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(ve), "aria-live": "polite" })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(K, { id: "right_title", as: "h3", content: /* @__PURE__ */ ((s) => s === void 0 ? "Steer a representative solution" : s)(ce?.i18n?.board) })
                    ] }),
                    S(ue) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "board_loading", className: "flex rs-board-loading", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "board_loading_indicator", className: "rs-loading-orb", as: "span", content: "" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "board_loading_text", as: "p", content: "Loading the saved solution or generating a new lesson…" })
                        ] })
                      ] })
                    ] }),
                    S(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ie)) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ P(ra, { id: "board", reducedMotion: !1, stepDurationMs: 5500, playing: !1, activeStep: /* @__PURE__ */ ((s) => s === void 0 ? 0 : s)(nr), speedLabel: "Normal", autoAdvance: !0, boardOptions: { animateCurrentStepOnly: !0, clearFutureSteps: !1, preserveRevealedSteps: !0, writingEffect: !0 }, captionsEnabled: !0, problemStatement: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : s)(Wt), onNext: (...s) => M("selectStep", {}, s), lessonKind: /* @__PURE__ */ ((s) => s === void 0 ? "worked-example" : s)(mt?.lessonKind), onStepSelect: (...s) => M("selectStep", {}, s), popupInitiallyOpen: !1, steps: /* @__PURE__ */ ((s) => s === void 0 ? [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: 0, value: "b" }, { label: 1, value: "c" }, { label: 3, value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }] : s)(it), title: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of a 2 × 2 matrix" : s)(Fe), showStepPopup: !0, editOperations: [], learningGoal: /* @__PURE__ */ ((s) => s === void 0 ? "Form the characteristic equation, solve it and verify the eigenvalues." : s)(Ct), problemLabel: /* @__PURE__ */ ((s) => s === void 0 ? "Representative problem · Linear algebra" : s)(Zt) })
                    ] }),
                    S(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ie)) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "teacher_question_panel", className: "block rs-teacher-question", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "teacher_question_title", className: "rs-teacher-question-title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "What size identity matrix is required here?" : s)(At) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(ta, { id: "teacher_question_choices", label: "Choose one answer", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Ut), layout: "vertical", options: /* @__PURE__ */ ((s) => s === void 0 ? [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }] : s)(Ve), colorScheme: "emerald", onChangeValue: (...s) => M("selectTeacherAnswer", {}, s), name: "teacherAnswer", size: "md" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "teacher_question_feedback", className: "rs-teacher-question-feedback", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select one answer." : s)(yt) })
                        ] })
                      ] })
                    ] }),
                    S(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(ie)) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "steer_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "keep", className: "rs-studio-action", label: "Keep", theme: "auto", variant: "primary", onAction: (...s) => M("editStep", { operation: "keep" }, s) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "remove", className: "rs-studio-action", variant: "outline", onAction: (...s) => M("editStep", { operation: "remove" }, s), label: "Remove", theme: "auto" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "annotate", className: "rs-studio-action", variant: "ghost", onAction: (...s) => M("editStep", { note: "Explain why this step belongs in similar problems.", operation: "annotate" }, s), label: "Add teaching note", theme: "auto" })
                        ] })
                      ] })
                    ] }),
                    S(ne) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "strategy_panel", className: "block rs-strategy-panel", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "strategy_title", as: "h3", content: "Teaching strategy for this Topic" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "strategy_status", className: "rs-strategy-status", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(ut) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "strategy_text", className: "rs-strategy-text", as: "div", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Te) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "set_context", className: "rs-studio-action", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(xe), onAction: (...s) => M("setHierarchyContext", {}, s), loadingText: "Saving strategy…", label: "Approve strategy as context", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(xe) })
                        ] })
                      ] })
                    ] }),
                    S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                      "      ",
                      /* @__PURE__ */ h(U, { id: "publish_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(K, { id: "studio_contract_note", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, resolve and review a lesson, then prepare a student preview. Published versions are read-only; start the next version to make changes." })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "preview_content", className: "rs-studio-action", label: "Prepare student preview", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.previewDisabled), onAction: (...s) => M("prepareContentPreview", {}, s) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "next_syllabus_version", className: "rs-studio-action", onAction: (...s) => M("startNextSyllabusVersion", {}, s), label: "Start next version", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.versionDisabled) })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "publish", className: "rs-studio-action", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(J?.unavailable), onAction: (...s) => M("publishContext", {}, s), label: "Publish immutable context version", theme: "auto", variant: "primary" })
                        ] }),
                        S(T({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ h(f, { children: [
                          "      ",
                          /* @__PURE__ */ P(H, { id: "share", className: "rs-studio-action", label: "Create student share link", theme: "auto", variant: "outline", onAction: (...s) => M("shareLesson", {}, s) })
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
    ] })
  ] });
}
export {
  da as default
};
