import { jsxs as y, jsx as C, Fragment as f } from "react/jsx-runtime";
import { useState as w, useEffect as le, useRef as ge, useCallback as pe } from "react";
import { Badge as zs, Typography as $, Button as Z, Alert as Ks, Card as hr } from "@rudra-studio/rudra-core";
import { Box as ee } from "@rudra-studio/rudra-layout";
import { Select as gr, Input as Us, Textarea as Le, RadioGroup as Hs } from "@rudra-studio/rudra-form";
import { BlackboardLesson as Bs } from "@rudra-studio/chalkmind-math";
import { TreeView as $s } from "@rudra-studio/rudra-widgets";
function sa(p) {
  const re = {}, F = p.serverData || p.serverState || {}, se = p.sharedState || {}, ae = p.applicationState || F.applicationState || {}, oe = p.pageState || F.pageState || {}, G = p.pageData || F.pageData || {}, fr = {
    ...p.runtime?.functions || {},
    ...p.runtime?.actions || {},
    ...p.functions || {},
    ...p.actions || {}
  };
  p.$route ?? p.route ?? p.data?.$route ?? p.data?.route ?? p.runtime?.data?.$route ?? p.runtime?.route ?? F?.$route ?? F?.route, p.$params ?? p.routeParams ?? p.params ?? p.data?.$params ?? p.data?.routeParams ?? p.data?.params ?? p.runtime?.data?.$params ?? p.runtime?.route?.params ?? p.runtime?.routeParams ?? p.runtime?.params ?? F?.$params ?? F?.routeParams ?? F?.params, p.$query ?? p.queryParams ?? p.query ?? p.data?.$query ?? p.data?.queryParams ?? p.data?.query ?? p.runtime?.data?.$query ?? p.runtime?.route?.query ?? p.runtime?.queryParams ?? p.runtime?.query ?? F?.$query ?? F?.queryParams ?? F?.query, p.$auth ?? p.auth ?? p.data?.$auth ?? p.data?.auth ?? p.runtime?.data?.$auth ?? p.runtime?.authInfo ?? p.runtime?.auth ?? F?.$auth ?? F?.auth, p.$config ?? p.config ?? p.data?.$config ?? p.data?.config ?? p.runtime?.data?.$config ?? p.runtime?.config ?? F?.$config ?? F?.config, p.$env ?? p.env ?? p.data?.$env ?? p.data?.env ?? p.runtime?.data?.$env ?? p.runtime?.env ?? F?.$env ?? F?.env, p.$locale ?? p.locale ?? p.data?.$locale ?? p.data?.locale ?? p.runtime?.data?.$locale ?? p.runtime?.locale ?? F?.$locale ?? F?.locale, p.$translations ?? p.translations ?? p.data?.$translations ?? p.data?.translations ?? p.runtime?.data?.$translations ?? p.runtime?.translations ?? F?.$translations ?? F?.translations, p.$i18n ?? p.i18n ?? p.data?.$i18n ?? p.data?.i18n ?? p.runtime?.data?.$i18n ?? p.runtime?.i18n ?? F?.$i18n ?? F?.i18n;
  const ne = p.$theme ?? p.theme ?? p.data?.$theme ?? p.runtime?.data?.$theme ?? p.runtime?.theme, Oe = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Js, Me] = w(() => ne ?? Oe());
  le(() => {
    ne != null && Me(ne);
  }, [ne]), le(() => {
    if (ne != null || typeof document > "u") return;
    const s = document.documentElement, r = (n) => Me(n?.detail?.theme ?? Oe()), e = new MutationObserver(r);
    return e.observe(s, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      e.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [ne]);
  const fe = ge(null), [Se, ve] = w("lg");
  le(() => {
    if (!fe.current) return;
    const s = new ResizeObserver((r) => {
      for (let e of r) {
        const n = e.contentRect.width;
        n < 768 ? ve("sm") : n < 1024 ? ve("md") : ve("lg");
      }
    });
    return s.observe(fe.current), () => s.disconnect();
  }, []);
  const N = pe((s) => typeof s != "object" || s === null ? s : Se === "sm" ? s.sm !== void 0 ? s.sm : s.md !== void 0 ? s.md : s.lg : Se === "md" ? s.md !== void 0 ? s.md : s.sm !== void 0 ? s.sm : s.lg : s.lg !== void 0 ? s.lg : s.md !== void 0 ? s.md : s.sm, [Se]), v = (s) => Array.isArray(s) ? s.length > 0 : typeof s == "string" ? s.trim() !== "" && s.trim().toLowerCase() !== "false" : !!s, we = p.userRole !== void 0 ? p.userRole : p.data?.userRole !== void 0 ? p.data.userRole : "", Fe = p.contextVersionKey !== void 0 ? p.contextVersionKey : p.data?.contextVersionKey !== void 0 ? p.data.contextVersionKey : "", Ge = p.returnPath !== void 0 ? p.returnPath : p.data?.returnPath !== void 0 ? p.data.returnPath : "/professor/context", Qe = p.locale !== void 0 ? p.locale : p.data?.locale !== void 0 ? p.data.locale : "en", xe = p.authenticated !== void 0 ? p.authenticated : p.data?.authenticated !== void 0 ? p.data.authenticated : !1, _e = p.accessProfile !== void 0 ? p.accessProfile : p.data?.accessProfile !== void 0 ? p.data.accessProfile : {}, Pe = p.verificationStatus !== void 0 ? p.verificationStatus : p.data?.verificationStatus !== void 0 ? p.data.verificationStatus : "pending", Ve = p.syllabusText !== void 0 ? p.syllabusText : p.data?.syllabusText !== void 0 ? p.data.syllabusText : void 0, ze = p.contextDraft !== void 0 ? p.contextDraft : p.data?.contextDraft !== void 0 ? p.data.contextDraft : {}, Ke = p.contextVersionNumber !== void 0 ? p.contextVersionNumber : p.data?.contextVersionNumber !== void 0 ? p.data.contextVersionNumber : 1, V = { userRole: we, contextVersionKey: Fe, returnPath: Ge, locale: Qe, authenticated: xe, accessProfile: _e, verificationStatus: Pe, syllabusText: Ve, contextDraft: ze, contextVersionNumber: Ke }, [Ue, He] = w(() => structuredClone(!1)), [Be, Sr] = w(() => structuredClone("Hide syllabus panel")), [vr, $e] = w(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [wr, Je] = w(() => structuredClone({})), [Ye, xr] = w(() => structuredClone("Review the proposed hierarchy, add problems, then set it as context.")), [_r, We] = w(() => structuredClone("")), [Pr, Tr] = w(() => structuredClone(`Programme · B.E. Mathematics
  Semester · Semester 1
    Subject · Engineering Mathematics I
      Unit · Unit 1 · Matrices and systems
        Topic · Matrix operations
        Topic · Eigenvalues and diagonalisation`)), [Ar, Ze] = w(() => structuredClone("")), [Xe, Ir] = w(() => structuredClone("What size identity matrix is required here?")), [Er, et] = w(() => structuredClone("")), [qr, tt] = w(() => structuredClone("")), [Cr, rt] = w(() => structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), [Te, Rr] = w(() => structuredClone(!1)), [st, at] = w(() => structuredClone(0)), [Nr, ot] = w(() => structuredClone("Selected topic problems")), [kr, jr] = w(() => structuredClone("b")), [nt, Dr] = w(() => structuredClone("grid rs-grid")), [it, Lr] = w(() => structuredClone("detailed")), [lt, Or] = w(() => structuredClone([])), [ct, ut] = w(() => structuredClone(!0)), [Mr, Fr] = w(() => structuredClone(!0)), [Gr, Qr] = w(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [Ae, Vr] = w(() => structuredClone(!1)), [dt, mt] = w(() => structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), [zr, Kr] = w(() => structuredClone(`1. Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].
2. Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.
3. Diagonalise A = [[4, 1], [2, 3]] and verify the result.`)), [pt, bt] = w(() => structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), [yt, Ur] = w(() => structuredClone("Engineering Mathematics I")), [ht, gt] = w(() => structuredClone("")), [Hr, ft] = w(() => structuredClone("")), [St, vt] = w(() => structuredClone("Sign in with an approved professor account to use this studio.")), [Ie, Br] = w(() => structuredClone(`Preferred method
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
• Prefer a direct 2×2 method when it is clearer than row reduction.`)), [$r, wt] = w(() => structuredClone([])), [xt, _t] = w(() => structuredClone("")), [be, Pt] = w(() => structuredClone(!1)), [Tt, At] = w(() => structuredClone(!1)), [de, It] = w(() => structuredClone(!0)), [Jr, Yr] = w(() => structuredClone(0)), [Et, qt] = w(() => structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), [Ct, Rt] = w(() => structuredClone([])), [Wr, Zr] = w(() => structuredClone(["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."])), [Xr, Nt] = w(() => structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), [es, ts] = w(() => structuredClone("")), [kt, jt] = w(() => structuredClone("Select one answer.")), [Ee, rs] = w(() => structuredClone(!0)), [ss, Dt] = w(() => structuredClone([])), [Lt, as] = w(() => structuredClone([{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }])), [Ot, os] = w(() => structuredClone("")), [Mt, ns] = w(() => structuredClone("Review the example strategy, then approve it for the selected Topic.")), [Ft, Gt] = w(() => structuredClone("Find the eigenvalues of a 2 × 2 matrix")), [Qt, is] = w(() => structuredClone(!1)), [Vt, zt] = w(() => structuredClone("Professor approval required")), [ls, cs] = w(() => structuredClone("")), [Kt, Ut] = w(() => structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), [Ht, Bt] = w(() => structuredClone("Representative problem · Linear algebra")), [$t, Jt] = w(() => structuredClone("Verification pending")), [Yt, Wt] = w(() => structuredClone([])), [Zt, us] = w(() => structuredClone("")), [qe, Xt] = w(() => structuredClone("Select a problem to load its saved solution.")), [Ce, ds] = w(() => structuredClone(!1)), [er, tr] = w(() => structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), [me, rr] = w(() => structuredClone(!1)), [Re, ms] = w(() => structuredClone(!1)), [ye, sr] = w(() => structuredClone(!1)), [ar, or] = w(() => structuredClone("Select a saved syllabus or save this draft.")), [ps, bs] = w(() => structuredClone("A is a 2 × 2 matrix, so I must have the same dimensions.")), [nr, ir] = w(() => structuredClone("")), i = { canUseStudio: Ue, sidebarToggleLabel: Be, resolvedStrategy: vr, problemSolution: wr, structureStatus: Ye, selectedTopicId: _r, finalHierarchyText: Pr, selectedTopicPath: Ar, teacherQuestionPrompt: Xe, selectedProblemText: Er, selectedTopicTitle: qr, finalHierarchy: Cr, isSavingStrategy: Te, activeStep: st, selectedTopicHeading: Nr, teacherQuestionCorrectValue: kr, studioLayoutClass: nt, newProblemSolutionMode: it, savedSyllabusOptions: lt, showAccessGate: ct, hasResolvedStrategy: Mr, strategyDraft: Gr, isLoadingSyllabi: Ae, blackboardLearningGoal: dt, suggestedProblemsText: zr, syllabusDraftText: pt, syllabusTitle: yt, problemSolutionText: ht, selectedProblemStatement: Hr, accessGateMessage: St, strategyDraftText: Ie, selectedTopicProblems: $r, selectedSyllabusId: xt, isResolvingProblem: be, isSyllabusSetupCollapsed: Tt, showSyllabusSetup: de, resolvedStrategyVersion: Jr, blackboardSteps: Et, selectedTopicProblemItems: Ct, suggestedProblems: Wr, hierarchyItems: Xr, resolvedStrategyId: es, teacherAnswerFeedback: kt, showStudioSidebar: Ee, selectedHierarchyIds: ss, teacherQuestionOptions: Lt, syllabusDescription: Ot, strategyStatus: Mt, blackboardTitle: Ft, showNewProblemForm: Qt, accessGateTitle: Vt, selectedTopicProblemsText: ls, blackboardLesson: Kt, blackboardProblemLabel: Ht, accessBadgeLabel: $t, selectedProblemIds: Yt, newProblemText: Zt, problemResolutionStatus: qe, isGeneratingStructure: Ce, blackboardProblemStatement: er, hasProblemSolution: me, isSavingSyllabus: Re, hasSelectedTopic: ye, syllabusStatus: ar, teacherQuestionExplanation: ps, selectedTeacherAnswer: nr }, o = pe((s, r) => {
    switch (s) {
      case "canUseStudio": {
        const e = typeof r == "function" ? r(i.canUseStudio) : r;
        return i.canUseStudio = e, He(e), e;
      }
      case "sidebarToggleLabel": {
        const e = typeof r == "function" ? r(i.sidebarToggleLabel) : r;
        return i.sidebarToggleLabel = e, Sr(e), e;
      }
      case "resolvedStrategy": {
        const e = typeof r == "function" ? r(i.resolvedStrategy) : r;
        return i.resolvedStrategy = e, $e(e), e;
      }
      case "problemSolution": {
        const e = typeof r == "function" ? r(i.problemSolution) : r;
        return i.problemSolution = e, Je(e), e;
      }
      case "structureStatus": {
        const e = typeof r == "function" ? r(i.structureStatus) : r;
        return i.structureStatus = e, xr(e), e;
      }
      case "selectedTopicId": {
        const e = typeof r == "function" ? r(i.selectedTopicId) : r;
        return i.selectedTopicId = e, We(e), e;
      }
      case "finalHierarchyText": {
        const e = typeof r == "function" ? r(i.finalHierarchyText) : r;
        return i.finalHierarchyText = e, Tr(e), e;
      }
      case "selectedTopicPath": {
        const e = typeof r == "function" ? r(i.selectedTopicPath) : r;
        return i.selectedTopicPath = e, Ze(e), e;
      }
      case "teacherQuestionPrompt": {
        const e = typeof r == "function" ? r(i.teacherQuestionPrompt) : r;
        return i.teacherQuestionPrompt = e, Ir(e), e;
      }
      case "selectedProblemText": {
        const e = typeof r == "function" ? r(i.selectedProblemText) : r;
        return i.selectedProblemText = e, et(e), e;
      }
      case "selectedTopicTitle": {
        const e = typeof r == "function" ? r(i.selectedTopicTitle) : r;
        return i.selectedTopicTitle = e, tt(e), e;
      }
      case "finalHierarchy": {
        const e = typeof r == "function" ? r(i.finalHierarchy) : r;
        return i.finalHierarchy = e, rt(e), e;
      }
      case "isSavingStrategy": {
        const e = typeof r == "function" ? r(i.isSavingStrategy) : r;
        return i.isSavingStrategy = e, Rr(e), e;
      }
      case "activeStep": {
        const e = typeof r == "function" ? r(i.activeStep) : r;
        return i.activeStep = e, at(e), e;
      }
      case "selectedTopicHeading": {
        const e = typeof r == "function" ? r(i.selectedTopicHeading) : r;
        return i.selectedTopicHeading = e, ot(e), e;
      }
      case "teacherQuestionCorrectValue": {
        const e = typeof r == "function" ? r(i.teacherQuestionCorrectValue) : r;
        return i.teacherQuestionCorrectValue = e, jr(e), e;
      }
      case "studioLayoutClass": {
        const e = typeof r == "function" ? r(i.studioLayoutClass) : r;
        return i.studioLayoutClass = e, Dr(e), e;
      }
      case "newProblemSolutionMode": {
        const e = typeof r == "function" ? r(i.newProblemSolutionMode) : r;
        return i.newProblemSolutionMode = e, Lr(e), e;
      }
      case "savedSyllabusOptions": {
        const e = typeof r == "function" ? r(i.savedSyllabusOptions) : r;
        return i.savedSyllabusOptions = e, Or(e), e;
      }
      case "showAccessGate": {
        const e = typeof r == "function" ? r(i.showAccessGate) : r;
        return i.showAccessGate = e, ut(e), e;
      }
      case "hasResolvedStrategy": {
        const e = typeof r == "function" ? r(i.hasResolvedStrategy) : r;
        return i.hasResolvedStrategy = e, Fr(e), e;
      }
      case "strategyDraft": {
        const e = typeof r == "function" ? r(i.strategyDraft) : r;
        return i.strategyDraft = e, Qr(e), e;
      }
      case "isLoadingSyllabi": {
        const e = typeof r == "function" ? r(i.isLoadingSyllabi) : r;
        return i.isLoadingSyllabi = e, Vr(e), e;
      }
      case "blackboardLearningGoal": {
        const e = typeof r == "function" ? r(i.blackboardLearningGoal) : r;
        return i.blackboardLearningGoal = e, mt(e), e;
      }
      case "suggestedProblemsText": {
        const e = typeof r == "function" ? r(i.suggestedProblemsText) : r;
        return i.suggestedProblemsText = e, Kr(e), e;
      }
      case "syllabusDraftText": {
        const e = typeof r == "function" ? r(i.syllabusDraftText) : r;
        return i.syllabusDraftText = e, bt(e), e;
      }
      case "syllabusTitle": {
        const e = typeof r == "function" ? r(i.syllabusTitle) : r;
        return i.syllabusTitle = e, Ur(e), e;
      }
      case "problemSolutionText": {
        const e = typeof r == "function" ? r(i.problemSolutionText) : r;
        return i.problemSolutionText = e, gt(e), e;
      }
      case "selectedProblemStatement": {
        const e = typeof r == "function" ? r(i.selectedProblemStatement) : r;
        return i.selectedProblemStatement = e, ft(e), e;
      }
      case "accessGateMessage": {
        const e = typeof r == "function" ? r(i.accessGateMessage) : r;
        return i.accessGateMessage = e, vt(e), e;
      }
      case "strategyDraftText": {
        const e = typeof r == "function" ? r(i.strategyDraftText) : r;
        return i.strategyDraftText = e, Br(e), e;
      }
      case "selectedTopicProblems": {
        const e = typeof r == "function" ? r(i.selectedTopicProblems) : r;
        return i.selectedTopicProblems = e, wt(e), e;
      }
      case "selectedSyllabusId": {
        const e = typeof r == "function" ? r(i.selectedSyllabusId) : r;
        return i.selectedSyllabusId = e, _t(e), e;
      }
      case "isResolvingProblem": {
        const e = typeof r == "function" ? r(i.isResolvingProblem) : r;
        return i.isResolvingProblem = e, Pt(e), e;
      }
      case "isSyllabusSetupCollapsed": {
        const e = typeof r == "function" ? r(i.isSyllabusSetupCollapsed) : r;
        return i.isSyllabusSetupCollapsed = e, At(e), e;
      }
      case "showSyllabusSetup": {
        const e = typeof r == "function" ? r(i.showSyllabusSetup) : r;
        return i.showSyllabusSetup = e, It(e), e;
      }
      case "resolvedStrategyVersion": {
        const e = typeof r == "function" ? r(i.resolvedStrategyVersion) : r;
        return i.resolvedStrategyVersion = e, Yr(e), e;
      }
      case "blackboardSteps": {
        const e = typeof r == "function" ? r(i.blackboardSteps) : r;
        return i.blackboardSteps = e, qt(e), e;
      }
      case "selectedTopicProblemItems": {
        const e = typeof r == "function" ? r(i.selectedTopicProblemItems) : r;
        return i.selectedTopicProblemItems = e, Rt(e), e;
      }
      case "suggestedProblems": {
        const e = typeof r == "function" ? r(i.suggestedProblems) : r;
        return i.suggestedProblems = e, Zr(e), e;
      }
      case "hierarchyItems": {
        const e = typeof r == "function" ? r(i.hierarchyItems) : r;
        return i.hierarchyItems = e, Nt(e), e;
      }
      case "resolvedStrategyId": {
        const e = typeof r == "function" ? r(i.resolvedStrategyId) : r;
        return i.resolvedStrategyId = e, ts(e), e;
      }
      case "teacherAnswerFeedback": {
        const e = typeof r == "function" ? r(i.teacherAnswerFeedback) : r;
        return i.teacherAnswerFeedback = e, jt(e), e;
      }
      case "showStudioSidebar": {
        const e = typeof r == "function" ? r(i.showStudioSidebar) : r;
        return i.showStudioSidebar = e, rs(e), e;
      }
      case "selectedHierarchyIds": {
        const e = typeof r == "function" ? r(i.selectedHierarchyIds) : r;
        return i.selectedHierarchyIds = e, Dt(e), e;
      }
      case "teacherQuestionOptions": {
        const e = typeof r == "function" ? r(i.teacherQuestionOptions) : r;
        return i.teacherQuestionOptions = e, as(e), e;
      }
      case "syllabusDescription": {
        const e = typeof r == "function" ? r(i.syllabusDescription) : r;
        return i.syllabusDescription = e, os(e), e;
      }
      case "strategyStatus": {
        const e = typeof r == "function" ? r(i.strategyStatus) : r;
        return i.strategyStatus = e, ns(e), e;
      }
      case "blackboardTitle": {
        const e = typeof r == "function" ? r(i.blackboardTitle) : r;
        return i.blackboardTitle = e, Gt(e), e;
      }
      case "showNewProblemForm": {
        const e = typeof r == "function" ? r(i.showNewProblemForm) : r;
        return i.showNewProblemForm = e, is(e), e;
      }
      case "accessGateTitle": {
        const e = typeof r == "function" ? r(i.accessGateTitle) : r;
        return i.accessGateTitle = e, zt(e), e;
      }
      case "selectedTopicProblemsText": {
        const e = typeof r == "function" ? r(i.selectedTopicProblemsText) : r;
        return i.selectedTopicProblemsText = e, cs(e), e;
      }
      case "blackboardLesson": {
        const e = typeof r == "function" ? r(i.blackboardLesson) : r;
        return i.blackboardLesson = e, Ut(e), e;
      }
      case "blackboardProblemLabel": {
        const e = typeof r == "function" ? r(i.blackboardProblemLabel) : r;
        return i.blackboardProblemLabel = e, Bt(e), e;
      }
      case "accessBadgeLabel": {
        const e = typeof r == "function" ? r(i.accessBadgeLabel) : r;
        return i.accessBadgeLabel = e, Jt(e), e;
      }
      case "selectedProblemIds": {
        const e = typeof r == "function" ? r(i.selectedProblemIds) : r;
        return i.selectedProblemIds = e, Wt(e), e;
      }
      case "newProblemText": {
        const e = typeof r == "function" ? r(i.newProblemText) : r;
        return i.newProblemText = e, us(e), e;
      }
      case "problemResolutionStatus": {
        const e = typeof r == "function" ? r(i.problemResolutionStatus) : r;
        return i.problemResolutionStatus = e, Xt(e), e;
      }
      case "isGeneratingStructure": {
        const e = typeof r == "function" ? r(i.isGeneratingStructure) : r;
        return i.isGeneratingStructure = e, ds(e), e;
      }
      case "blackboardProblemStatement": {
        const e = typeof r == "function" ? r(i.blackboardProblemStatement) : r;
        return i.blackboardProblemStatement = e, tr(e), e;
      }
      case "hasProblemSolution": {
        const e = typeof r == "function" ? r(i.hasProblemSolution) : r;
        return i.hasProblemSolution = e, rr(e), e;
      }
      case "isSavingSyllabus": {
        const e = typeof r == "function" ? r(i.isSavingSyllabus) : r;
        return i.isSavingSyllabus = e, ms(e), e;
      }
      case "hasSelectedTopic": {
        const e = typeof r == "function" ? r(i.hasSelectedTopic) : r;
        return i.hasSelectedTopic = e, sr(e), e;
      }
      case "syllabusStatus": {
        const e = typeof r == "function" ? r(i.syllabusStatus) : r;
        return i.syllabusStatus = e, or(e), e;
      }
      case "teacherQuestionExplanation": {
        const e = typeof r == "function" ? r(i.teacherQuestionExplanation) : r;
        return i.teacherQuestionExplanation = e, bs(e), e;
      }
      case "selectedTeacherAnswer": {
        const e = typeof r == "function" ? r(i.selectedTeacherAnswer) : r;
        return i.selectedTeacherAnswer = e, ir(e), e;
      }
      default:
        return r;
    }
  }, [i]);
  pe((s, r) => {
    const [e, ...n] = String(s || "").split(".");
    if (!e) return r;
    if (n.length === 0) return o(e, r);
    const t = (a) => {
      const c = Array.isArray(a) ? [...a] : { ...a || {} };
      let l = c;
      return n.forEach((u, d) => {
        d === n.length - 1 ? l[u] = r : (l[u] = Array.isArray(l[u]) ? [...l[u]] : { ...l[u] || {} }, l = l[u]);
      }), c;
    };
    switch (e) {
      case "canUseStudio":
        return o("canUseStudio", t), r;
      case "sidebarToggleLabel":
        return o("sidebarToggleLabel", t), r;
      case "resolvedStrategy":
        return o("resolvedStrategy", t), r;
      case "problemSolution":
        return o("problemSolution", t), r;
      case "structureStatus":
        return o("structureStatus", t), r;
      case "selectedTopicId":
        return o("selectedTopicId", t), r;
      case "finalHierarchyText":
        return o("finalHierarchyText", t), r;
      case "selectedTopicPath":
        return o("selectedTopicPath", t), r;
      case "teacherQuestionPrompt":
        return o("teacherQuestionPrompt", t), r;
      case "selectedProblemText":
        return o("selectedProblemText", t), r;
      case "selectedTopicTitle":
        return o("selectedTopicTitle", t), r;
      case "finalHierarchy":
        return o("finalHierarchy", t), r;
      case "isSavingStrategy":
        return o("isSavingStrategy", t), r;
      case "activeStep":
        return o("activeStep", t), r;
      case "selectedTopicHeading":
        return o("selectedTopicHeading", t), r;
      case "teacherQuestionCorrectValue":
        return o("teacherQuestionCorrectValue", t), r;
      case "studioLayoutClass":
        return o("studioLayoutClass", t), r;
      case "newProblemSolutionMode":
        return o("newProblemSolutionMode", t), r;
      case "savedSyllabusOptions":
        return o("savedSyllabusOptions", t), r;
      case "showAccessGate":
        return o("showAccessGate", t), r;
      case "hasResolvedStrategy":
        return o("hasResolvedStrategy", t), r;
      case "strategyDraft":
        return o("strategyDraft", t), r;
      case "isLoadingSyllabi":
        return o("isLoadingSyllabi", t), r;
      case "blackboardLearningGoal":
        return o("blackboardLearningGoal", t), r;
      case "suggestedProblemsText":
        return o("suggestedProblemsText", t), r;
      case "syllabusDraftText":
        return o("syllabusDraftText", t), r;
      case "syllabusTitle":
        return o("syllabusTitle", t), r;
      case "problemSolutionText":
        return o("problemSolutionText", t), r;
      case "selectedProblemStatement":
        return o("selectedProblemStatement", t), r;
      case "accessGateMessage":
        return o("accessGateMessage", t), r;
      case "strategyDraftText":
        return o("strategyDraftText", t), r;
      case "selectedTopicProblems":
        return o("selectedTopicProblems", t), r;
      case "selectedSyllabusId":
        return o("selectedSyllabusId", t), r;
      case "isResolvingProblem":
        return o("isResolvingProblem", t), r;
      case "isSyllabusSetupCollapsed":
        return o("isSyllabusSetupCollapsed", t), r;
      case "showSyllabusSetup":
        return o("showSyllabusSetup", t), r;
      case "resolvedStrategyVersion":
        return o("resolvedStrategyVersion", t), r;
      case "blackboardSteps":
        return o("blackboardSteps", t), r;
      case "selectedTopicProblemItems":
        return o("selectedTopicProblemItems", t), r;
      case "suggestedProblems":
        return o("suggestedProblems", t), r;
      case "hierarchyItems":
        return o("hierarchyItems", t), r;
      case "resolvedStrategyId":
        return o("resolvedStrategyId", t), r;
      case "teacherAnswerFeedback":
        return o("teacherAnswerFeedback", t), r;
      case "showStudioSidebar":
        return o("showStudioSidebar", t), r;
      case "selectedHierarchyIds":
        return o("selectedHierarchyIds", t), r;
      case "teacherQuestionOptions":
        return o("teacherQuestionOptions", t), r;
      case "syllabusDescription":
        return o("syllabusDescription", t), r;
      case "strategyStatus":
        return o("strategyStatus", t), r;
      case "blackboardTitle":
        return o("blackboardTitle", t), r;
      case "showNewProblemForm":
        return o("showNewProblemForm", t), r;
      case "accessGateTitle":
        return o("accessGateTitle", t), r;
      case "selectedTopicProblemsText":
        return o("selectedTopicProblemsText", t), r;
      case "blackboardLesson":
        return o("blackboardLesson", t), r;
      case "blackboardProblemLabel":
        return o("blackboardProblemLabel", t), r;
      case "accessBadgeLabel":
        return o("accessBadgeLabel", t), r;
      case "selectedProblemIds":
        return o("selectedProblemIds", t), r;
      case "newProblemText":
        return o("newProblemText", t), r;
      case "problemResolutionStatus":
        return o("problemResolutionStatus", t), r;
      case "isGeneratingStructure":
        return o("isGeneratingStructure", t), r;
      case "blackboardProblemStatement":
        return o("blackboardProblemStatement", t), r;
      case "hasProblemSolution":
        return o("hasProblemSolution", t), r;
      case "isSavingSyllabus":
        return o("isSavingSyllabus", t), r;
      case "hasSelectedTopic":
        return o("hasSelectedTopic", t), r;
      case "syllabusStatus":
        return o("syllabusStatus", t), r;
      case "teacherQuestionExplanation":
        return o("teacherQuestionExplanation", t), r;
      case "selectedTeacherAnswer":
        return o("selectedTeacherAnswer", t), r;
      default:
        return r;
    }
  }, [o]);
  const ys = { aiStructureGenerated: { properties: { hierarchy: { type: "object" }, languageCode: { type: "string" } }, type: "object" }, aiStructureRequested: { properties: { languageCode: { type: "string" }, sourceText: { type: "string" } }, type: "object" }, canUseStudio: { properties: { value: { type: "boolean" } }, type: "object" }, contentPreviewReady: { properties: { context: { type: "object" }, lesson: { type: "object" }, problem: { type: "object" }, schemaVersion: { type: "number" } }, required: ["schemaVersion", "context", "problem", "lesson"], type: "object" }, contextPublishRequested: { properties: { contextDraft: { type: "object" }, immutable: { type: "boolean" } }, type: "object" }, contextSetRequested: { properties: { contextDraft: { type: "object" }, strategy: { type: "object" }, strategyId: { type: "string" }, strategyVersion: { type: "number" } }, type: "object" }, lessonShareRequested: { properties: { expiresInHours: { type: "number" }, visibility: { type: "string" } }, type: "object" }, problemsAddRequested: { properties: { problems: { type: "array" }, topicId: { type: "string" } }, type: "object" }, resolvedStrategy: { properties: {}, type: "object" }, stepOperationRequested: { properties: { note: { type: "string" }, operation: { type: "string" }, stepId: { type: "string" } }, type: "object" }, suggestedProblemsText: { properties: { value: { type: "string" } }, type: "object" }, syllabusText: { properties: { value: { type: "string" } }, type: "object" } }, Ne = (s, r, e) => {
    if (!r || typeof r != "object") return "";
    const n = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], t = s === null ? "null" : Array.isArray(s) ? "array" : Number.isInteger(s) ? "integer" : typeof s;
    if (n.length && !n.includes(t) && !(t === "integer" && n.includes("number"))) return e + " must be " + n.join(" or ") + ".";
    if (r.enum && !r.enum.some((a) => JSON.stringify(a) === JSON.stringify(s))) return e + " is not an allowed value.";
    if (s && typeof s == "object" && !Array.isArray(s)) {
      for (const a of r.required || []) if (!Object.prototype.hasOwnProperty.call(s, a)) return e + "." + a + " is required.";
      for (const [a, c] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(s, a)) {
        const l = Ne(s[a], c, e + "." + a);
        if (l) return l;
      }
    }
    if (Array.isArray(s) && r.items) for (let a = 0; a < s.length; a++) {
      const c = Ne(s[a], r.items, e + "[" + a + "]");
      if (c) return c;
    }
    return "";
  }, ie = pe(async (s, r, e = !1) => {
    const n = ys[s];
    if (!n) throw new Error("Module output '" + s + "' is not declared.");
    const t = Ne(r, n, "output." + s);
    if (t) throw new Error(t);
    const a = p.onOutput || p.onModuleOutput || p.runtime?.onOutput;
    if (typeof a != "function") return r;
    const c = a(s, r, { moduleId: p.moduleId, awaitHandlers: e });
    return e ? await c : r;
  }, [p.onOutput, p.onModuleOutput, p.runtime?.onOutput, p.moduleId]), lr = (s, r) => {
    const e = String(r || "").split(".").filter(Boolean);
    if (!(!e.length || e.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return e.reduce((n, t) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(t in n) ? n.get(t) : n[t];
      }, s);
  }, X = (s, r) => {
    if (Array.isArray(s)) return s.map((n) => X(n, r));
    if (s && typeof s == "object") return Object.fromEntries(Object.entries(s).map(([n, t]) => [X(n, r), X(t, r)]));
    if (typeof s != "string") return s;
    const e = s.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return e ? lr(r, e[1]) : s.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, t) => {
      const a = lr(r, t);
      return a == null ? "" : typeof a == "object" ? JSON.stringify(a) : String(a);
    });
  };
  async function hs(s = {}) {
    await ie("lessonShareRequested", { expiresInHours: 168, visibility: "unlisted" }, !0);
  }
  async function gs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        if (!i.selectedTopicId) throw new Error("Select a Topic before adding problems.");
        const t = Array.isArray(i.selectedTopicProblems) ? i.selectedTopicProblems.map(String) : [], a = ["Explain the key theorem used in " + i.selectedTopicTitle + " and give a counterexample.", "Create a guided problem connecting " + i.selectedTopicTitle + " to another unit.", "Create an examination-style " + i.selectedTopicTitle + " problem with verification."], c = [.../* @__PURE__ */ new Set([...t, ...a])].slice(0, 10), l = JSON.parse(JSON.stringify(i.finalHierarchy)), u = (b) => {
          b.id === i.selectedTopicId && (b.problems = c), (b.children || []).forEach(u);
        };
        u(l);
        const d = (b) => ({ id: b.id, label: b.type[0].toUpperCase() + b.type.slice(1) + " · " + b.title, data: { type: b.type, title: b.title, problems: b.problems || [] }, children: (b.children || []).map(d) }), m = c.map((b, h) => ({ id: i.selectedTopicId + "-problem-" + (h + 1), label: h + 1 + ". " + b, data: { type: "problem", topicId: i.selectedTopicId, text: b } }));
        return { problems: c, problemItems: m, text: c.map((b, h) => h + 1 + ". " + b).join(`
`), hierarchy: l, items: [d(l)] };
      })();
      e.problems_expand = n;
    }
    o("selectedTopicProblems", e.problems_expand.problems), o("selectedTopicProblemItems", e.problems_expand.problemItems), o("selectedProblemIds", []), o("selectedTopicProblemsText", e.problems_expand.text), o("finalHierarchy", e.problems_expand.hierarchy), o("hierarchyItems", e.problems_expand.items), o("structureStatus", "Problems added to the selected Topic."), await ie("problemsAddRequested", { hierarchy: e.problems_expand.hierarchy, problems: e.problems_expand.problems, topicId: i.selectedTopicId }, !0);
  }
  async function fs(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isSavingStrategy", !0), await R({});
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          if (!i.selectedTopicId) throw new Error("Select a Topic before approving a strategy.");
          const u = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context";
          return { contextKey: String(i.savedContextKey), versionNumber: Number(i.savedSyllabusVersion), locale: String(V.locale || "en"), scopePath: String(i.selectedTopicPath || i.selectedTopicId), scopeType: "topic", title: String(i.selectedTopicTitle || "Topic") + " teaching strategy", strategy: i.strategyDraft };
        })();
        n.context_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_prepare" };
      return e.error = a, n.context_prepare = { error: a }, o("isSavingStrategy", !1), await R({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const a = X({ contextKey: "{{ stepResults.context_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.context_prepare.locale }}", scopePath: "{{ stepResults.context_prepare.scopePath }}", scopeType: "{{ stepResults.context_prepare.scopeType }}", strategy: "{{ stepResults.context_prepare.strategy }}", title: "{{ stepResults.context_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.context_prepare.versionNumber }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.hierarchy, a.locale, a.scopePath, a.scopeType, a.title, a.strategy], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveContextStrategy", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveContextStrategy", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.context_save_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_query" };
      return e.error = a, n.context_save_query = { error: a }, o("isSavingStrategy", !1), await R({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = Array.isArray(n.context_save_query) ? n.context_save_query : [], d = u[0], m = d && typeof d == "object" ? d.result || d : {};
          if (!m.strategyId) throw new Error("Strategy was not saved. Use an owned draft version.");
          return { id: String(m.strategyId || ""), version: Number(m.strategyVersion || 0), strategy: m.strategy || n.context_prepare.strategy };
        })();
        n.context_save_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_parse" };
      return e.error = a, n.context_save_parse = { error: a }, o("isSavingStrategy", !1), await R({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    o("resolvedStrategyId", n.context_save_parse.id), o("resolvedStrategyVersion", n.context_save_parse.version), o("resolvedStrategy", n.context_save_parse.strategy), o("strategyStatus", "Approved strategy v" + n.context_save_parse.version + " saved for " + i.selectedTopicTitle + "."), o("structureStatus", "Selected hierarchy and teaching strategy are now the active context."), o("isSavingStrategy", !1), await R({});
    try {
      await ie("contextSetRequested", { hierarchy: i.finalHierarchy, languageCode: V.locale, scopePath: i.selectedTopicPath, selectedTopicId: i.selectedTopicId, strategy: n.context_save_parse.strategy, strategyId: n.context_save_parse.id, strategyVersion: n.context_save_parse.version }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_emit" };
      return e.error = a, n.context_emit = { error: a }, o("isSavingStrategy", !1), await R({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    return { hierarchy: i.finalHierarchy, scopePath: i.selectedTopicPath, strategy: n.context_save_parse.strategy, strategyId: n.context_save_parse.id, strategyVersion: n.context_save_parse.version };
  }
  async function cr(s = {}) {
    o("syllabusDraftText", V.syllabusText || "");
  }
  async function Ss(s = {}) {
    o("showSyllabusSetup", !0), o("isSyllabusSetupCollapsed", !1);
  }
  async function vs(s = {}) {
    const r = {};
    return (function(n) {
      const t = !!(n.isSavingSyllabus || n.isGeneratingStructure || n.isResolvingProblem || n.isSavingStrategy || n.isLoadingSyllabi || n.isOpeningSyllabus), a = n.canUseStudio !== !0 || t, c = !!(n.selectedSyllabusId && n.savedSyllabusKey && n.savedContextKey && Number.isInteger(n.savedSyllabusVersion) && n.savedSyllabusVersion > 0);
      return {
        busy: t,
        unavailable: a,
        previewDisabled: a || !c || !n.hasProblemSolution || !n.savedProblemId,
        versionDisabled: a || !c || n.savedSyllabusVersion >= 1e5,
        lessonEmpty: !n.isResolvingProblem && !n.hasProblemSolution
      };
    })(i).unavailable ? { ok: !1, reason: "studio_unavailable" } : (await pr({ status: "published" }), r.publish_saved_course);
  }
  async function ws(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {}, c = a.type === "topic", l = c && Array.isArray(a.problems) ? a.problems.map(String) : [], u = l.map((d, m) => ({ id: String(t.id || "topic") + "-problem-" + (m + 1), label: m + 1 + ". " + d, data: { type: "problem", topicId: String(t.id || ""), text: d } }));
        return { id: String(t.id || ""), topic: c, title: String(a.title || t.label || ""), path: String(a.path || t.id || ""), problems: l, problemItems: u, text: l.map((d, m) => m + 1 + ". " + d).join(`
`) };
      })();
      e.select_node = n;
    }
    return o("selectedHierarchyIds", [e.select_node.id]), o("hasSelectedTopic", e.select_node.topic), o("selectedTopicId", e.select_node.topic ? e.select_node.id : ""), o("selectedTopicPath", e.select_node.path), o("hasProblemSolution", !1), await R({}), o("selectedTopicTitle", e.select_node.title), o("selectedTopicHeading", e.select_node.topic ? "Problems for " + e.select_node.title : "Select a Topic to view problems"), o("selectedTopicProblems", e.select_node.problems), o("selectedTopicProblemItems", e.select_node.problemItems), o("selectedProblemIds", []), o("selectedProblemText", ""), o("selectedTopicProblemsText", e.select_node.text), o("structureStatus", e.select_node.topic ? "Topic selected. Add problems or set the hierarchy as context." : "Select a Topic node to view its problems."), e.select_node.topic && (await ur({ fallbackProblems: e.select_node.problems, topicId: e.select_node.id, topicPath: e.select_node.path }), await mr({ topicPath: e.select_node.path, topicTitle: e.select_node.title })), e.select_node;
  }
  async function xs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => (function(a, c) {
        const l = Array.isArray(c.studentLesson?.steps) ? c.studentLesson.steps : [], u = a.event ?? a.stepIndex ?? a.index ?? 0, d = Number(typeof u == "object" ? u?.nextIndex ?? u?.index : u), m = Math.max(0, Math.min(Math.max(0, l.length - 1), Number.isFinite(d) ? Math.floor(d) : 0)), b = l[m]?.teacherQuestion || {}, h = Number(c.progressPercent), I = Math.max(Number.isFinite(h) ? Math.min(100, Math.max(0, h)) : 0, l.length ? Math.round((m + 1) / l.length * 100) : 0);
        return { index: m, stepId: String(l[m]?.id || ""), prompt: String(b.prompt || ""), options: Array.isArray(b.options) ? b.options : [], correctValue: String(b.correctValue || ""), explanation: String(b.explanation || ""), progress: I, completed: I === 100 };
      })(r, { studentLesson: i.blackboardLesson, progressPercent: 0 }))();
      e.teacher_step_read = n;
    }
    o("activeStep", e.teacher_step_read.index), o("teacherQuestionPrompt", e.teacher_step_read.prompt), o("teacherQuestionOptions", e.teacher_step_read.options), o("teacherQuestionCorrectValue", e.teacher_step_read.correctValue), o("teacherQuestionExplanation", e.teacher_step_read.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", "");
  }
  async function _s(s = {}) {
    o("showNewProblemForm", !1), o("newProblemText", "");
  }
  async function R(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => (function(a) {
        const c = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || c, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
        return {
          busy: c,
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
  async function Ps(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {};
        return { id: String(t.id || ""), text: String(a.text || t.label || "") };
      })();
      e.problem_select_read = n;
    }
    return o("selectedProblemIds", [e.problem_select_read.id]), o("selectedProblemText", e.problem_select_read.text), o("selectedProblemStatement", e.problem_select_read.text), await je({ solutionMode: "detailed", statement: e.problem_select_read.text }), e.problem_select_resolve;
  }
  async function Ts(s = {}) {
    o("newProblemSolutionMode", (s || {}).value);
  }
  async function ur(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          const u = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context";
          return { contextKey: String(i.savedContextKey), versionNumber: Number(i.savedSyllabusVersion), locale: String(V.locale || "en") };
        })();
        n.topic_problem_context = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_context" };
      return e.error = a, n.topic_problem_context = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const a = X({ contextKey: "{{ stepResults.topic_problem_context.contextKey }}", locale: "{{ stepResults.topic_problem_context.locale }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.topic_problem_context.versionNumber }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath, a.locale], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListTopicProblems", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListTopicProblems", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.topic_problem_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_query" };
      return e.error = a, n.topic_problem_query = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = Array.isArray(n.topic_problem_query) ? n.topic_problem_query : [], d = u.map((I) => String(I && I.statement || "").trim()).filter(Boolean), m = Array.isArray(r.fallbackProblems) ? r.fallbackProblems.map(String) : [], b = [...new Set(d.length ? d : m)], h = b.map((I, q) => ({ id: String(r.topicId) + "-problem-" + (q + 1), label: q + 1 + ". " + I, data: { type: "problem", topicId: String(r.topicId), text: I, stored: d.length > 0 } }));
          return { problems: b, items: h, source: d.length ? "database" : "hierarchy" };
        })();
        n.topic_problem_merge = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_merge" };
      return e.error = a, n.topic_problem_merge = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    return o("selectedTopicProblems", n.topic_problem_merge.problems), o("selectedTopicProblemItems", n.topic_problem_merge.items), o("structureStatus", n.topic_problem_merge.source === "database" ? "Stored problems loaded for this Topic." : "Proposed problems shown. Select one to save its generated solution."), n.topic_problem_merge;
  }
  async function As(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = i.showStudioSidebar === !1;
        return { show: t, label: t ? "Hide syllabus panel" : "Show syllabus panel", layoutClass: t ? "grid rs-grid" : "grid rs-grid rs-grid--sidebar-hidden" };
      })();
      e.sidebar_toggle_derive = n;
    }
    return o("showStudioSidebar", e.sidebar_toggle_derive.show), o("sidebarToggleLabel", e.sidebar_toggle_derive.label), o("studioLayoutClass", e.sidebar_toggle_derive.layoutClass), e.sidebar_toggle_derive;
  }
  async function ke(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isLoadingSyllabi", !0), await R({});
    try {
      {
        const a = X({ userIdentity: "" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListProfessorSyllabi", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListProfessorSyllabi", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.syllabi_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_query" };
      return e.error = a, n.syllabi_query = { error: a }, o("isLoadingSyllabi", !1), await R({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => (Array.isArray(n.syllabi_query) ? n.syllabi_query : []).map((d) => ({ label: String(d.label || d.title || "Untitled syllabus"), value: String(d.value || d.id || "") })).filter((d) => d.value))();
        n.syllabi_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_parse" };
      return e.error = a, n.syllabi_parse = { error: a }, o("isLoadingSyllabi", !1), await R({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    return o("savedSyllabusOptions", n.syllabi_parse), o("isLoadingSyllabi", !1), await R({}), n.syllabi_parse;
  }
  async function Is(s = {}) {
    o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0);
  }
  async function Es(s = {}) {
    o("showNewProblemForm", !0), o("newProblemText", ""), o("problemResolutionStatus", "The database will be checked before AI is used.");
  }
  async function qs(s = {}) {
    o("newProblemText", (s || {}).value);
  }
  async function Cs(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const c = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || c, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: c,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).previewDisabled)
      return { ok: !1, reason: "studio_unavailable" };
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          function u(m, b = "") {
            if (!m || typeof m != "object" || Array.isArray(m)) throw new Error("A lesson object is required.");
            const h = (x, Q, S = !1) => {
              if (x != null && typeof x != "string") throw new Error(Q + " must be text.");
              const k = (x || "").trim();
              if (S && !k || k.length > 16e3) throw new Error("Invalid " + Q + ".");
              return k;
            };
            if (!Array.isArray(m.steps) || !m.steps.length || m.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const I = /* @__PURE__ */ new Set(), q = m.steps.map((x, Q) => {
              if (!x || typeof x != "object" || Array.isArray(x)) throw new Error("Invalid lesson step.");
              const S = h(x.id, "step ID") || "step-" + (Q + 1);
              if (I.has(S)) throw new Error("Step IDs must be unique.");
              I.add(S);
              const k = x.teacherQuestion;
              if (!k || !Array.isArray(k.options) || k.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const P = /* @__PURE__ */ new Set(), L = k.options.map((A) => {
                const _ = h(A?.value, "option ID", !0);
                if (P.has(_)) throw new Error("Answer option IDs must be unique.");
                return P.add(_), { value: _, label: h(A?.label, "option label", !0) };
              }), g = h(k.correctValue, "correct answer ID", !0);
              if (!P.has(g)) throw new Error("The correct answer must reference a supplied option.");
              const z = h(k.prompt || x.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(x.content) || !x.content.length || x.content.length > 60) throw new Error("Each step needs board content.");
              const T = x.content.map((A) => {
                if (!A || typeof A != "object") throw new Error("Invalid board content.");
                switch (A.type) {
                  case "heading":
                  case "text":
                  case "note":
                    return { ...A, text: h(A.text, "board text", !0) };
                  case "equation":
                    return { ...A, visualText: h(A.visualText, "readable equation", !0), latex: h(A.latex, "equation") };
                  case "definition":
                    return { ...A, term: h(A.term, "term", !0), text: h(A.text, "definition", !0) };
                  case "theorem":
                    return { ...A, statement: h(A.statement, "theorem", !0) };
                  case "list":
                  case "proof": {
                    const _ = A.type === "list" ? "items" : "lines";
                    if (!Array.isArray(A[_]) || !A[_].length) throw new Error("Invalid board list.");
                    return { ...A, [_]: A[_].map((D) => h(D, "list entry", !0)) };
                  }
                  case "matrix": {
                    const _ = A.matrix?.rows;
                    if (!Array.isArray(_) || !_.length || _.length > 30 || !Array.isArray(_[0]) || !_[0].length || _[0].length > 30 || _.some((D) => !Array.isArray(D) || D.length !== _[0].length || D.some((Y) => !["string", "number"].includes(typeof Y)))) throw new Error("Invalid matrix.");
                    return A;
                  }
                  case "table":
                    if (!Array.isArray(A.headers) || !A.headers.length || !Array.isArray(A.rows) || A.rows.some((_) => !Array.isArray(_) || _.length !== A.headers.length)) throw new Error("Invalid table.");
                    return { ...A, headers: A.headers.map((_) => h(_, "table heading")), rows: A.rows.map((_) => _.map((D) => h(D, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(A.nodes) || !Array.isArray(A.edges)) throw new Error("Invalid graph.");
                    const _ = /* @__PURE__ */ new Set();
                    for (const D of A.nodes) {
                      if (!D?.id || _.has(D.id) || !Number.isFinite(D.x) || !Number.isFinite(D.y)) throw new Error("Invalid graph node.");
                      _.add(D.id);
                    }
                    if (A.edges.some((D) => !_.has(D?.from) || !_.has(D?.to))) throw new Error("Invalid graph edge.");
                    return A;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), M = {
                id: S,
                title: h(x.title, "step title", !0),
                content: T,
                teacherPrompt: z,
                teacherQuestion: { prompt: z, options: L, correctValue: g, explanation: h(k.explanation, "answer explanation", !0) }
              };
              for (const A of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) M[A] = h(x[A], A);
              return M;
            });
            return {
              title: h(m.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: h(m.problemLabel, "problem label") || "Problem",
              problemStatement: h(m.problemStatement || b, "problem statement", !0),
              learningGoal: h(m.learningGoal, "learning goal"),
              steps: q,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }
          function d(m) {
            if (!m || typeof m != "object" || Array.isArray(m) || !Object.keys(m).length) return { enabled: !1, valid: !1 };
            if (JSON.stringify(m).length > 25e4) throw new Error("Preview is too large.");
            if (m.schemaVersion !== 1) throw new Error("Unsupported preview schema.");
            const b = u(m.lesson, m.problem?.statement), h = m.context || {}, I = (q) => typeof q == "string" ? q.trim().slice(0, 500) : "";
            if (!I(h.syllabusId) || !I(h.contextKey) || !I(m.problem?.id)) throw new Error("Preview needs saved syllabus, context, and problem IDs.");
            return {
              enabled: !0,
              valid: !0,
              schemaVersion: 1,
              context: { syllabusId: I(h.syllabusId), contextKey: I(h.contextKey), versionNumber: Math.max(1, Math.floor(Number(h.versionNumber) || 1)), locale: ["en", "hi", "ta"].includes(h.locale) ? h.locale : "en", topicPath: I(h.topicPath) },
              problem: { id: I(m.problem.id), statement: b.problemStatement, solutionMode: m.problem.solutionMode === "quick" ? "quick" : "detailed" },
              lesson: b,
              boardSteps: b.steps.map(({ teacherQuestion: q, teacherPrompt: x, ...Q }) => Q),
              message: "Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified."
            };
          }
          if (!i.canUseStudio || !i.hasProblemSolution || !i.savedProblemId) throw new Error("Save and resolve a problem first.");
          return d({ schemaVersion: 1, context: { syllabusId: i.selectedSyllabusId, contextKey: i.savedContextKey, versionNumber: i.savedSyllabusVersion, locale: V.locale, topicPath: i.selectedTopicPath }, problem: { id: i.savedProblemId, statement: i.blackboardLesson.problemStatement, solutionMode: i.newProblemSolutionMode }, lesson: i.blackboardLesson });
        })();
        n.prepare_preview = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "prepare_preview" };
      return e.error = a, n.prepare_preview = { error: a }, o("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first."), { ok: !1 };
    }
    o("contentPreviewPacket", n.prepare_preview);
    try {
      await ie("contentPreviewReady", n.prepare_preview, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "emit_preview_packet" };
      return e.error = a, n.emit_preview_packet = { error: a }, o("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first."), { ok: !1 };
    }
    return o("problemResolutionStatus", "Student preview prepared. Open it through the connected application."), n.prepare_preview;
  }
  async function Rs(s = {}) {
    o("syllabusDraftText", (s || {}).value || "");
  }
  async function je(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isResolvingProblem", !0), o("problemResolutionStatus", "Checking saved solutions for this hierarchy…"), o("hasProblemSolution", !1);
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = String(r.statement || "").trim();
          if (!u) throw new Error("Enter a problem statement.");
          if (!i.selectedTopicId) throw new Error("Select a Topic first.");
          const d = u.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim(), m = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context", b = Number(i.savedSyllabusVersion), h = Number(V.contextVersionNumber || 1), I = Number.isFinite(b) && b > 0 ? b : Math.max(1, Number.isFinite(h) ? h : 1), q = String(i.savedContextKey || V.contextVersionKey || "rudra-scholar:" + m).trim(), x = !!(i.selectedSyllabusId && i.savedContextKey && Number.isFinite(b) && b > 0), Q = r.solutionMode === "quick" ? "quick" : "detailed", S = String(i.selectedTopicPath || i.selectedTopicId), k = String(V.locale || "en").toLowerCase(), P = ["en", "hi", "ta"].includes(k) ? k : "en";
          return { statement: u, normalized: d, contextKey: q, versionNumber: I, canPersist: x, mode: Q, topicPath: S, locale: P, promptVersion: "v3-validated-mcq-blackboard" };
        })();
        n.problem_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_prepare" };
      return e.error = a, n.problem_prepare = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = X({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.problem_strategy_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_lookup" };
      return e.error = a, n.problem_strategy_lookup = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = Array.isArray(n.problem_strategy_lookup) ? n.problem_strategy_lookup : [], d = u[0], m = d && typeof d == "object" ? d.result || d : null;
          return { id: m ? String(m.strategyId || "") : "", version: m ? Number(m.strategyVersion || 0) : 0, strategy: m && m.strategy ? m.strategy : i.strategyDraft || {} };
        })();
        n.problem_strategy_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_result" };
      return e.error = a, n.problem_strategy_result = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = X({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", locale: "{{ stepResults.problem_prepare.locale }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath, a.locale, a.normalizedProblem, a.solutionMode, a.promptVersion, a.strategyVersion], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarFindProblemSolution", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarFindProblemSolution", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.problem_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_lookup" };
      return e.error = a, n.problem_lookup = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = function(x, Q = "") {
            if (!x || typeof x != "object" || Array.isArray(x)) throw new Error("A lesson object is required.");
            const S = (L, g, z = !1) => {
              if (L != null && typeof L != "string") throw new Error(g + " must be text.");
              const T = (L || "").trim();
              if (z && !T || T.length > 16e3) throw new Error("Invalid " + g + ".");
              return T;
            };
            if (!Array.isArray(x.steps) || !x.steps.length || x.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const k = /* @__PURE__ */ new Set(), P = x.steps.map((L, g) => {
              if (!L || typeof L != "object" || Array.isArray(L)) throw new Error("Invalid lesson step.");
              const z = S(L.id, "step ID") || "step-" + (g + 1);
              if (k.has(z)) throw new Error("Step IDs must be unique.");
              k.add(z);
              const T = L.teacherQuestion;
              if (!T || !Array.isArray(T.options) || T.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const M = /* @__PURE__ */ new Set(), A = T.options.map((j) => {
                const K = S(j?.value, "option ID", !0);
                if (M.has(K)) throw new Error("Answer option IDs must be unique.");
                return M.add(K), { value: K, label: S(j?.label, "option label", !0) };
              }), _ = S(T.correctValue, "correct answer ID", !0);
              if (!M.has(_)) throw new Error("The correct answer must reference a supplied option.");
              const D = S(T.prompt || L.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(L.content) || !L.content.length || L.content.length > 60) throw new Error("Each step needs board content.");
              const Y = L.content.map((j) => {
                if (!j || typeof j != "object") throw new Error("Invalid board content.");
                switch (j.type) {
                  case "heading":
                  case "text":
                  case "note":
                    return { ...j, text: S(j.text, "board text", !0) };
                  case "equation":
                    return { ...j, visualText: S(j.visualText, "readable equation", !0), latex: S(j.latex, "equation") };
                  case "definition":
                    return { ...j, term: S(j.term, "term", !0), text: S(j.text, "definition", !0) };
                  case "theorem":
                    return { ...j, statement: S(j.statement, "theorem", !0) };
                  case "list":
                  case "proof": {
                    const K = j.type === "list" ? "items" : "lines";
                    if (!Array.isArray(j[K]) || !j[K].length) throw new Error("Invalid board list.");
                    return { ...j, [K]: j[K].map((W) => S(W, "list entry", !0)) };
                  }
                  case "matrix": {
                    const K = j.matrix?.rows;
                    if (!Array.isArray(K) || !K.length || K.length > 30 || !Array.isArray(K[0]) || !K[0].length || K[0].length > 30 || K.some((W) => !Array.isArray(W) || W.length !== K[0].length || W.some((ce) => !["string", "number"].includes(typeof ce)))) throw new Error("Invalid matrix.");
                    return j;
                  }
                  case "table":
                    if (!Array.isArray(j.headers) || !j.headers.length || !Array.isArray(j.rows) || j.rows.some((K) => !Array.isArray(K) || K.length !== j.headers.length)) throw new Error("Invalid table.");
                    return { ...j, headers: j.headers.map((K) => S(K, "table heading")), rows: j.rows.map((K) => K.map((W) => S(W, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(j.nodes) || !Array.isArray(j.edges)) throw new Error("Invalid graph.");
                    const K = /* @__PURE__ */ new Set();
                    for (const W of j.nodes) {
                      if (!W?.id || K.has(W.id) || !Number.isFinite(W.x) || !Number.isFinite(W.y)) throw new Error("Invalid graph node.");
                      K.add(W.id);
                    }
                    if (j.edges.some((W) => !K.has(W?.from) || !K.has(W?.to))) throw new Error("Invalid graph edge.");
                    return j;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), J = {
                id: z,
                title: S(L.title, "step title", !0),
                content: Y,
                teacherPrompt: D,
                teacherQuestion: { prompt: D, options: A, correctValue: _, explanation: S(T.explanation, "answer explanation", !0) }
              };
              for (const j of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) J[j] = S(L[j], j);
              return J;
            });
            return {
              title: S(x.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: S(x.problemLabel, "problem label") || "Problem",
              problemStatement: S(x.problemStatement || Q, "problem statement", !0),
              learningGoal: S(x.learningGoal, "learning goal"),
              steps: P,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }, d = n.problem_lookup, m = Array.isArray(d) ? d[0] : d, b = m?.result || m;
          if (!b?.solution) return { hit: !1 };
          let h;
          try {
            h = u(b.solution, n.problem_prepare.statement);
          } catch {
            return { hit: !1 };
          }
          const I = { ...b.solution, ...h };
          return { hit: !0, result: b, solution: I, board: h, question: h.steps[0].teacherQuestion, text: h.steps.map((q, x) => x + 1 + ". " + q.title).join(`
`) };
        })();
        n.problem_cache_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_cache_result" };
      return e.error = a, n.problem_cache_result = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    if (!n.problem_cache_result.hit) {
      try {
        {
          const t = r.event, a = G, c = i, l = await (async () => {
            const u = n.problem_prepare, d = n.problem_strategy_result.strategy || {};
            return ["You are a college mathematics professor creating an interactive blackboard lesson.", 'Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.', "Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.", "Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in " + (u.locale === "hi" ? "Hindi" : u.locale === "ta" ? "Tamil" : "English") + " only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.", "Follow this approved teaching strategy exactly: " + JSON.stringify(d), "Solution mode: " + u.mode + ".", "Language code: " + u.locale + ".", "Context hierarchy: " + JSON.stringify(i.finalHierarchy || {}), "Selected topic path: " + u.topicPath, "Problem: " + u.statement].join(`
`);
          })();
          n.problem_ai_prompt = l, e.customCodeResult = l;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_prompt" };
        return e.error = a, n.problem_ai_prompt = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
      }
      try {
        {
          const t = { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }, a = X({ model: "gemini-3.5-flash-lite", prompt: "{{ stepResults.problem_ai_prompt }}" }, t) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(6e4) }), l = await c.json().catch(() => ({}));
          if (!c.ok) {
            const d = new Error(l.error || "Protected API request failed (" + c.status + ")");
            throw d.status = c.status, d;
          }
          const u = l.data;
          n.problem_ai_call = u, e.apiResult = u;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_call" };
        if (e.error = a, n.problem_ai_call = { error: a }, [429, 500, 502, 503, 504].includes(Number(a.status))) {
          try {
            {
              const c = { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }, l = X({ model: "gemini-3.6-flash", prompt: "{{ stepResults.problem_ai_prompt }}" }, c) || {}, u = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: l, context: c }), signal: r.signal || AbortSignal.timeout(6e4) }), d = await u.json().catch(() => ({}));
              if (!u.ok) {
                const b = new Error(d.error || "Protected API request failed (" + u.status + ")");
                throw b.status = u.status, b;
              }
              const m = d.data;
              n.problem_ai_fallback = m, e.apiResult = m;
            }
          } catch (c) {
            const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "problem_ai_fallback" };
            return e.error = l, n.problem_ai_fallback = { error: l }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
          }
          try {
            {
              const c = r.event, l = G, u = i, d = await (async () => {
                const m = function(g, z = "") {
                  if (!g || typeof g != "object" || Array.isArray(g)) throw new Error("A lesson object is required.");
                  const T = (_, D, Y = !1) => {
                    if (_ != null && typeof _ != "string") throw new Error(D + " must be text.");
                    const J = (_ || "").trim();
                    if (Y && !J || J.length > 16e3) throw new Error("Invalid " + D + ".");
                    return J;
                  };
                  if (!Array.isArray(g.steps) || !g.steps.length || g.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
                  const M = /* @__PURE__ */ new Set(), A = g.steps.map((_, D) => {
                    if (!_ || typeof _ != "object" || Array.isArray(_)) throw new Error("Invalid lesson step.");
                    const Y = T(_.id, "step ID") || "step-" + (D + 1);
                    if (M.has(Y)) throw new Error("Step IDs must be unique.");
                    M.add(Y);
                    const J = _.teacherQuestion;
                    if (!J || !Array.isArray(J.options) || J.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
                    const j = /* @__PURE__ */ new Set(), K = J.options.map((E) => {
                      const H = T(E?.value, "option ID", !0);
                      if (j.has(H)) throw new Error("Answer option IDs must be unique.");
                      return j.add(H), { value: H, label: T(E?.label, "option label", !0) };
                    }), W = T(J.correctValue, "correct answer ID", !0);
                    if (!j.has(W)) throw new Error("The correct answer must reference a supplied option.");
                    const ce = T(J.prompt || _.teacherPrompt, "teacher question", !0);
                    if (!Array.isArray(_.content) || !_.content.length || _.content.length > 60) throw new Error("Each step needs board content.");
                    const O = _.content.map((E) => {
                      if (!E || typeof E != "object") throw new Error("Invalid board content.");
                      switch (E.type) {
                        case "heading":
                        case "text":
                        case "note":
                          return { ...E, text: T(E.text, "board text", !0) };
                        case "equation":
                          return { ...E, visualText: T(E.visualText, "readable equation", !0), latex: T(E.latex, "equation") };
                        case "definition":
                          return { ...E, term: T(E.term, "term", !0), text: T(E.text, "definition", !0) };
                        case "theorem":
                          return { ...E, statement: T(E.statement, "theorem", !0) };
                        case "list":
                        case "proof": {
                          const H = E.type === "list" ? "items" : "lines";
                          if (!Array.isArray(E[H]) || !E[H].length) throw new Error("Invalid board list.");
                          return { ...E, [H]: E[H].map((te) => T(te, "list entry", !0)) };
                        }
                        case "matrix": {
                          const H = E.matrix?.rows;
                          if (!Array.isArray(H) || !H.length || H.length > 30 || !Array.isArray(H[0]) || !H[0].length || H[0].length > 30 || H.some((te) => !Array.isArray(te) || te.length !== H[0].length || te.some((Vs) => !["string", "number"].includes(typeof Vs)))) throw new Error("Invalid matrix.");
                          return E;
                        }
                        case "table":
                          if (!Array.isArray(E.headers) || !E.headers.length || !Array.isArray(E.rows) || E.rows.some((H) => !Array.isArray(H) || H.length !== E.headers.length)) throw new Error("Invalid table.");
                          return { ...E, headers: E.headers.map((H) => T(H, "table heading")), rows: E.rows.map((H) => H.map((te) => T(te, "table cell"))) };
                        case "graph": {
                          if (!Array.isArray(E.nodes) || !Array.isArray(E.edges)) throw new Error("Invalid graph.");
                          const H = /* @__PURE__ */ new Set();
                          for (const te of E.nodes) {
                            if (!te?.id || H.has(te.id) || !Number.isFinite(te.x) || !Number.isFinite(te.y)) throw new Error("Invalid graph node.");
                            H.add(te.id);
                          }
                          if (E.edges.some((te) => !H.has(te?.from) || !H.has(te?.to))) throw new Error("Invalid graph edge.");
                          return E;
                        }
                        default:
                          throw new Error("Unsupported board content type.");
                      }
                    }), U = {
                      id: Y,
                      title: T(_.title, "step title", !0),
                      content: O,
                      teacherPrompt: ce,
                      teacherQuestion: { prompt: ce, options: K, correctValue: W, explanation: T(J.explanation, "answer explanation", !0) }
                    };
                    for (const E of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) U[E] = T(_[E], E);
                    return U;
                  });
                  return {
                    title: T(g.title, "lesson title", !0),
                    lessonKind: "worked-example",
                    problemLabel: T(g.problemLabel, "problem label") || "Problem",
                    problemStatement: T(g.problemStatement || z, "problem statement", !0),
                    learningGoal: T(g.learningGoal, "learning goal"),
                    steps: A,
                    verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
                  };
                }, b = n.problem_ai_fallback?.candidates ? n.problem_ai_fallback : null, I = (b || n.problem_ai_call)?.candidates?.[0]?.content?.parts, q = Array.isArray(I) ? I.map((L) => typeof L?.text == "string" ? L.text : "").join("") : "";
                if (!q.trim() || q.length > 2e5) throw new Error("Invalid AI lesson response.");
                const x = JSON.parse(q.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), Q = m(x, n.problem_prepare.statement), S = { ...Q, summary: typeof x.summary == "string" ? x.summary : "", answer: typeof x.answer == "string" ? x.answer : "", checks: Array.isArray(x.checks) ? x.checks.filter((L) => typeof L == "string") : [] }, k = !!b, P = k ? "gemini-3.6-flash" : "gemini-3.5-flash-lite";
                return { solution: S, board: Q, question: Q.steps[0].teacherQuestion, text: [S.summary, Q.steps.map((L, g) => g + 1 + ". " + L.title).join(`
`), S.answer, S.checks.join(`
`)].filter(Boolean).join(`

`), model: P, fallback: k, status: k ? "AI lesson prepared with Gemini 3.6 Flash fallback · review every step; mathematical correctness is not independently verified." : "AI lesson prepared with Gemini 3.5 Flash-Lite · review every step; mathematical correctness is not independently verified." };
              })();
              n.problem_ai_parse = d, e.customCodeResult = d;
            }
          } catch (c) {
            const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "problem_ai_parse" };
            return e.error = l, n.problem_ai_parse = { error: l }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
          }
          if (n.problem_prepare.canPersist) {
            try {
              {
                const l = X({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "{{ stepResults.problem_ai_parse.model }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
                delete l.userIdentity;
                const u = [void 0, l.contextKey, l.versionNumber, l.hierarchy, l.locale, l.topicPath, l.topicId, l.statement, l.normalizedProblem, l.solutionMode, l.promptVersion, l.solution, l.provider, l.model, l.strategyId, l.strategyVersion, l.strategySnapshot], d = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
                let m;
                if (typeof d == "function")
                  m = await d({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters: u, namedParameters: l, signal: r.signal });
                else {
                  const b = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters: u, namedParameters: l }), signal: r.signal }), h = await b.json().catch(() => ({}));
                  if (!b.ok || h.success === !1) {
                    const I = new Error(h.error || "Database query failed (" + b.status + ")");
                    throw I.status = b.status, I;
                  }
                  m = h.data;
                }
                n.problem_store = m, e.queryResult = m;
              }
            } catch (c) {
              const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "problem_store" };
              return e.error = l, n.problem_store = { error: l }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
            }
            try {
              {
                const c = r.event, l = G, u = i, d = await (async () => {
                  const m = Array.isArray(n.problem_store) ? n.problem_store[0]?.result : null;
                  if (!m?.problemId) throw new Error("Lesson was not saved. Use an owned draft version.");
                  return m;
                })();
                n.stored_problem_check = d, e.customCodeResult = d;
              }
            } catch (c) {
              const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "stored_problem_check" };
              return e.error = l, n.stored_problem_check = { error: l }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
            }
            return o("problemSolution", n.problem_ai_parse.solution), o("problemSolutionText", n.problem_ai_parse.text), o("blackboardLesson", n.problem_ai_parse.board), o("blackboardTitle", n.problem_ai_parse.board.title), o("blackboardProblemLabel", n.problem_ai_parse.board.problemLabel), o("blackboardProblemStatement", n.problem_ai_parse.board.problemStatement), o("blackboardLearningGoal", n.problem_ai_parse.board.learningGoal), o("blackboardSteps", n.problem_ai_parse.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", n.problem_ai_parse.question.prompt), o("teacherQuestionOptions", n.problem_ai_parse.question.options), o("teacherQuestionCorrectValue", n.problem_ai_parse.question.correctValue), o("teacherQuestionExplanation", n.problem_ai_parse.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", n.problem_ai_parse.status), o("isResolvingProblem", !1), o("hasProblemSolution", !0), i.problemSolution;
          } else
            return o("problemSolution", n.problem_ai_parse.solution), o("problemSolutionText", n.problem_ai_parse.text), o("blackboardLesson", n.problem_ai_parse.board), o("blackboardTitle", n.problem_ai_parse.board.title), o("blackboardProblemLabel", n.problem_ai_parse.board.problemLabel), o("blackboardProblemStatement", n.problem_ai_parse.board.problemStatement), o("blackboardLearningGoal", n.problem_ai_parse.board.learningGoal), o("blackboardSteps", n.problem_ai_parse.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", n.problem_ai_parse.question.prompt), o("teacherQuestionOptions", n.problem_ai_parse.question.options), o("teacherQuestionCorrectValue", n.problem_ai_parse.question.correctValue), o("teacherQuestionExplanation", n.problem_ai_parse.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", n.problem_ai_parse.status), o("isResolvingProblem", !1), o("hasProblemSolution", !0), i.problemSolution;
        } else
          return o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
      }
      try {
        {
          const t = r.event, a = G, c = i, l = await (async () => {
            const u = function(P, L = "") {
              if (!P || typeof P != "object" || Array.isArray(P)) throw new Error("A lesson object is required.");
              const g = (M, A, _ = !1) => {
                if (M != null && typeof M != "string") throw new Error(A + " must be text.");
                const D = (M || "").trim();
                if (_ && !D || D.length > 16e3) throw new Error("Invalid " + A + ".");
                return D;
              };
              if (!Array.isArray(P.steps) || !P.steps.length || P.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
              const z = /* @__PURE__ */ new Set(), T = P.steps.map((M, A) => {
                if (!M || typeof M != "object" || Array.isArray(M)) throw new Error("Invalid lesson step.");
                const _ = g(M.id, "step ID") || "step-" + (A + 1);
                if (z.has(_)) throw new Error("Step IDs must be unique.");
                z.add(_);
                const D = M.teacherQuestion;
                if (!D || !Array.isArray(D.options) || D.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
                const Y = /* @__PURE__ */ new Set(), J = D.options.map((O) => {
                  const U = g(O?.value, "option ID", !0);
                  if (Y.has(U)) throw new Error("Answer option IDs must be unique.");
                  return Y.add(U), { value: U, label: g(O?.label, "option label", !0) };
                }), j = g(D.correctValue, "correct answer ID", !0);
                if (!Y.has(j)) throw new Error("The correct answer must reference a supplied option.");
                const K = g(D.prompt || M.teacherPrompt, "teacher question", !0);
                if (!Array.isArray(M.content) || !M.content.length || M.content.length > 60) throw new Error("Each step needs board content.");
                const W = M.content.map((O) => {
                  if (!O || typeof O != "object") throw new Error("Invalid board content.");
                  switch (O.type) {
                    case "heading":
                    case "text":
                    case "note":
                      return { ...O, text: g(O.text, "board text", !0) };
                    case "equation":
                      return { ...O, visualText: g(O.visualText, "readable equation", !0), latex: g(O.latex, "equation") };
                    case "definition":
                      return { ...O, term: g(O.term, "term", !0), text: g(O.text, "definition", !0) };
                    case "theorem":
                      return { ...O, statement: g(O.statement, "theorem", !0) };
                    case "list":
                    case "proof": {
                      const U = O.type === "list" ? "items" : "lines";
                      if (!Array.isArray(O[U]) || !O[U].length) throw new Error("Invalid board list.");
                      return { ...O, [U]: O[U].map((E) => g(E, "list entry", !0)) };
                    }
                    case "matrix": {
                      const U = O.matrix?.rows;
                      if (!Array.isArray(U) || !U.length || U.length > 30 || !Array.isArray(U[0]) || !U[0].length || U[0].length > 30 || U.some((E) => !Array.isArray(E) || E.length !== U[0].length || E.some((H) => !["string", "number"].includes(typeof H)))) throw new Error("Invalid matrix.");
                      return O;
                    }
                    case "table":
                      if (!Array.isArray(O.headers) || !O.headers.length || !Array.isArray(O.rows) || O.rows.some((U) => !Array.isArray(U) || U.length !== O.headers.length)) throw new Error("Invalid table.");
                      return { ...O, headers: O.headers.map((U) => g(U, "table heading")), rows: O.rows.map((U) => U.map((E) => g(E, "table cell"))) };
                    case "graph": {
                      if (!Array.isArray(O.nodes) || !Array.isArray(O.edges)) throw new Error("Invalid graph.");
                      const U = /* @__PURE__ */ new Set();
                      for (const E of O.nodes) {
                        if (!E?.id || U.has(E.id) || !Number.isFinite(E.x) || !Number.isFinite(E.y)) throw new Error("Invalid graph node.");
                        U.add(E.id);
                      }
                      if (O.edges.some((E) => !U.has(E?.from) || !U.has(E?.to))) throw new Error("Invalid graph edge.");
                      return O;
                    }
                    default:
                      throw new Error("Unsupported board content type.");
                  }
                }), ce = {
                  id: _,
                  title: g(M.title, "step title", !0),
                  content: W,
                  teacherPrompt: K,
                  teacherQuestion: { prompt: K, options: J, correctValue: j, explanation: g(D.explanation, "answer explanation", !0) }
                };
                for (const O of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) ce[O] = g(M[O], O);
                return ce;
              });
              return {
                title: g(P.title, "lesson title", !0),
                lessonKind: "worked-example",
                problemLabel: g(P.problemLabel, "problem label") || "Problem",
                problemStatement: g(P.problemStatement || L, "problem statement", !0),
                learningGoal: g(P.learningGoal, "learning goal"),
                steps: T,
                verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
              };
            }, d = n.problem_ai_fallback?.candidates ? n.problem_ai_fallback : null, b = (d || n.problem_ai_call)?.candidates?.[0]?.content?.parts, h = Array.isArray(b) ? b.map((k) => typeof k?.text == "string" ? k.text : "").join("") : "";
            if (!h.trim() || h.length > 2e5) throw new Error("Invalid AI lesson response.");
            const I = JSON.parse(h.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), q = u(I, n.problem_prepare.statement), x = { ...q, summary: typeof I.summary == "string" ? I.summary : "", answer: typeof I.answer == "string" ? I.answer : "", checks: Array.isArray(I.checks) ? I.checks.filter((k) => typeof k == "string") : [] }, Q = !!d, S = Q ? "gemini-3.6-flash" : "gemini-3.5-flash-lite";
            return { solution: x, board: q, question: q.steps[0].teacherQuestion, text: [x.summary, q.steps.map((k, P) => P + 1 + ". " + k.title).join(`
`), x.answer, x.checks.join(`
`)].filter(Boolean).join(`

`), model: S, fallback: Q, status: Q ? "AI lesson prepared with Gemini 3.6 Flash fallback · review every step; mathematical correctness is not independently verified." : "AI lesson prepared with Gemini 3.5 Flash-Lite · review every step; mathematical correctness is not independently verified." };
          })();
          n.problem_ai_parse = l, e.customCodeResult = l;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_parse" };
        return e.error = a, n.problem_ai_parse = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
      }
      if (n.problem_prepare.canPersist) {
        try {
          {
            const a = X({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "{{ stepResults.problem_ai_parse.model }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
            delete a.userIdentity;
            const c = [void 0, a.contextKey, a.versionNumber, a.hierarchy, a.locale, a.topicPath, a.topicId, a.statement, a.normalizedProblem, a.solutionMode, a.promptVersion, a.solution, a.provider, a.model, a.strategyId, a.strategyVersion, a.strategySnapshot], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
            let u;
            if (typeof l == "function")
              u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: a, signal: r.signal });
            else {
              const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
              if (!d.ok || m.success === !1) {
                const b = new Error(m.error || "Database query failed (" + d.status + ")");
                throw b.status = d.status, b;
              }
              u = m.data;
            }
            n.problem_store = u, e.queryResult = u;
          }
        } catch (t) {
          const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_store" };
          return e.error = a, n.problem_store = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
        }
        try {
          {
            const t = r.event, a = G, c = i, l = await (async () => {
              const u = Array.isArray(n.problem_store) ? n.problem_store[0]?.result : null;
              if (!u?.problemId) throw new Error("Lesson was not saved. Use an owned draft version.");
              return u;
            })();
            n.stored_problem_check = l, e.customCodeResult = l;
          }
        } catch (t) {
          const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "stored_problem_check" };
          return e.error = a, n.stored_problem_check = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
        }
        return o("problemSolution", n.problem_ai_parse.solution), o("problemSolutionText", n.problem_ai_parse.text), o("blackboardLesson", n.problem_ai_parse.board), o("blackboardTitle", n.problem_ai_parse.board.title), o("blackboardProblemLabel", n.problem_ai_parse.board.problemLabel), o("blackboardProblemStatement", n.problem_ai_parse.board.problemStatement), o("blackboardLearningGoal", n.problem_ai_parse.board.learningGoal), o("blackboardSteps", n.problem_ai_parse.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", n.problem_ai_parse.question.prompt), o("teacherQuestionOptions", n.problem_ai_parse.question.options), o("teacherQuestionCorrectValue", n.problem_ai_parse.question.correctValue), o("teacherQuestionExplanation", n.problem_ai_parse.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", n.problem_ai_parse.status), o("isResolvingProblem", !1), o("hasProblemSolution", !0), i.problemSolution;
      } else
        return o("problemSolution", n.problem_ai_parse.solution), o("problemSolutionText", n.problem_ai_parse.text), o("blackboardLesson", n.problem_ai_parse.board), o("blackboardTitle", n.problem_ai_parse.board.title), o("blackboardProblemLabel", n.problem_ai_parse.board.problemLabel), o("blackboardProblemStatement", n.problem_ai_parse.board.problemStatement), o("blackboardLearningGoal", n.problem_ai_parse.board.learningGoal), o("blackboardSteps", n.problem_ai_parse.board.steps), o("activeStep", 0), o("teacherQuestionPrompt", n.problem_ai_parse.question.prompt), o("teacherQuestionOptions", n.problem_ai_parse.question.options), o("teacherQuestionCorrectValue", n.problem_ai_parse.question.correctValue), o("teacherQuestionExplanation", n.problem_ai_parse.question.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", ""), o("problemResolutionStatus", n.problem_ai_parse.status), o("isResolvingProblem", !1), o("hasProblemSolution", !0), i.problemSolution;
    }
  }
  async function Ns(s = {}) {
    o("syllabusTitle", (s || {}).value);
  }
  async function dr(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = V.accessProfile && typeof V.accessProfile == "object" ? V.accessProfile : {}, a = Object.keys(t).length > 0, c = a ? t.authenticated === !0 || t.isAuthenticated === !0 || !!(t.uid || t.userId || t.id) : V.authenticated === !0, l = a && Array.isArray(t.roles) ? t.roles.map(String) : [String(V.userRole || "")], u = String(a ? t.verificationStatus || "pending" : V.verificationStatus || "pending"), d = l.some((q) => ["professor", "educator", "admin", "institution_admin"].includes(q)), m = c && d && u === "approved";
        return { authenticated: c, roles: l, status: u, canUseStudio: m, title: c ? d ? u === "rejected" ? "Professor verification rejected" : "Professor approval required" : "Professor access required" : "Sign in required", message: c ? d ? u === "rejected" ? "Your professor verification was rejected. Contact your institution administrator." : "Your professor verification is pending. The studio will unlock after server-side approval." : "This workspace is available only to professors and institution administrators." : "Sign in and complete professor registration to use this studio.", badgeLabel: m ? "Verified professor" : u === "rejected" ? "Verification rejected" : "Verification pending" };
      })();
      e.prof_access_derive = n;
    }
    return o("canUseStudio", e.prof_access_derive.canUseStudio), await R({}), o("showAccessGate", !e.prof_access_derive.canUseStudio), o("accessGateTitle", e.prof_access_derive.title), o("accessGateMessage", e.prof_access_derive.message), o("accessBadgeLabel", e.prof_access_derive.badgeLabel), e.prof_access_derive;
  }
  async function mr(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
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
        const a = X({ contextKey: "{{ stepResults.load_strategy_context.contextKey }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.load_strategy_context.versionNumber }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.load_strategy_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_query" };
      return e.error = a, n.load_strategy_query = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = Array.isArray(n.load_strategy_query) ? n.load_strategy_query : [], d = u[0], m = d && typeof d == "object" ? d.result || d : null, b = m && m.strategy ? m.strategy : i.strategyDraft, h = m ? Number(m.strategyVersion || 0) : 0, I = m ? String(m.strategyId || "") : "", q = Array.isArray(b.requiredSteps) ? b.requiredSteps : [], x = Array.isArray(b.forbiddenShortcuts) ? b.forbiddenShortcuts : [], Q = Array.isArray(b.verificationRules) ? b.verificationRules : [], S = Array.isArray(b.teachingNotes) ? b.teachingNotes : [], k = [`Preferred method
` + String(b.preferredMethod || "Professor-guided method")];
          return q.length && k.push(`Required steps
` + q.map((P, L) => L + 1 + ". " + P).join(`
`)), x.length && k.push(`Avoid
` + x.map((P) => "• " + P).join(`
`)), Q.length && k.push(`Verification
` + Q.map((P) => "• " + P).join(`
`)), S.length && k.push(`Teaching notes
` + S.map((P) => "• " + P).join(`
`)), { strategy: b, version: h, id: I, text: k.join(`

`), status: m ? "Approved strategy v" + h + " loaded for " + r.topicTitle + "." : "No approved strategy yet. Refine the example and approve this draft." };
        })();
        n.load_strategy_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_parse" };
      return e.error = a, n.load_strategy_parse = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    return o("strategyDraft", n.load_strategy_parse.strategy), o("strategyDraftText", n.load_strategy_parse.text), o("resolvedStrategy", n.load_strategy_parse.strategy), o("resolvedStrategyId", n.load_strategy_parse.id), o("resolvedStrategyVersion", n.load_strategy_parse.version), o("strategyStatus", n.load_strategy_parse.status), n.load_strategy_parse;
  }
  async function ks(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = String(r.value || ""), a = String(i.teacherQuestionCorrectValue || ""), c = String(V.locale || "en").toLowerCase(), l = !!t && t === a;
        return { value: t, feedback: (c === "hi" ? l ? "सही उत्तर।" : "फिर से प्रयास करें।" : c === "ta" ? l ? "சரியான பதில்." : "மீண்டும் முயற்சிக்கவும்." : l ? "Correct." : "Try again.") + (i.teacherQuestionExplanation ? " " + String(i.teacherQuestionExplanation) : "") };
      })();
      e.teacher_answer_read = n;
    }
    o("selectedTeacherAnswer", e.teacher_answer_read.value), o("teacherAnswerFeedback", e.teacher_answer_read.feedback);
  }
  async function js(s = {}) {
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
    o("contentPreviewPacket", {}), o("savedSyllabusVersion", Math.max(1, Number(i.savedSyllabusVersion || V.contextVersionNumber || 1)) + 1), await R({}), o("selectedSyllabusId", ""), await R({}), o("savedContextKey", ""), await R({}), o("savedProblemId", ""), await R({}), o("hasProblemSolution", !1), await R({}), o("syllabusStatus", "New version prepared. Save it before resolving or previewing lessons.");
  }
  async function Ds(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const c = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || c, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: c,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    o("contentPreviewPacket", {}), o("savedContextKey", ""), await R({}), o("savedProblemId", ""), await R({}), o("hasProblemSolution", !1), await R({}), o("selectedSyllabusId", r.value), await R({}), o("isOpeningSyllabus", !0), await R({});
    try {
      {
        const a = X({ syllabusId: "{{ args.value }}", userIdentity: "" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.syllabusId], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarLoadProfessorSyllabus", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadProfessorSyllabus", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.saved_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_query" };
      return e.error = a, n.saved_syllabus_query = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await R({}), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const d = (Array.isArray(n.saved_syllabus_query) ? n.saved_syllabus_query : [n.saved_syllabus_query])[0] || {}, m = d.result || d;
          if (!m || !m.id) throw new Error("The selected syllabus was not found.");
          const b = m.hierarchy && typeof m.hierarchy == "object" ? m.hierarchy : {}, h = (q, x = []) => {
            if (!q || !q.id) return null;
            const Q = [...x, String(q.id)];
            return { id: String(q.id), label: String(q.type || "item").replace(/^./, (S) => S.toUpperCase()) + " · " + String(q.title || ""), data: { type: String(q.type || ""), title: String(q.title || ""), path: Q.join("/"), problems: Array.isArray(q.problems) ? q.problems : [] }, children: Array.isArray(q.children) ? q.children.map((S) => h(S, Q)).filter(Boolean) : [] };
          }, I = h(b);
          return { ...m, hierarchy: b, items: I ? [I] : [], hasHierarchy: !!I };
        })();
        n.saved_syllabus_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_parse" };
      return e.error = a, n.saved_syllabus_parse = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await R({}), { ok: !1 };
    }
    return o("savedSyllabusKey", n.saved_syllabus_parse.key), await R({}), o("savedSyllabusVersion", n.saved_syllabus_parse.versionNumber), await R({}), o("savedContextKey", n.saved_syllabus_parse.contextKey), await R({}), o("savedProblemId", ""), await R({}), o("hasProblemSolution", !1), await R({}), o("syllabusTitle", n.saved_syllabus_parse.title), o("syllabusDescription", n.saved_syllabus_parse.description), o("syllabusDraftText", n.saved_syllabus_parse.syllabusText), o("finalHierarchy", n.saved_syllabus_parse.hierarchy), o("hierarchyItems", n.saved_syllabus_parse.items), o("syllabusStatus", "Loaded " + n.saved_syllabus_parse.title + " · " + n.saved_syllabus_parse.status), o("showSyllabusSetup", !n.saved_syllabus_parse.hasHierarchy), o("isSyllabusSetupCollapsed", n.saved_syllabus_parse.hasHierarchy), o("isOpeningSyllabus", !1), await R({}), n.saved_syllabus_parse;
  }
  async function pr(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const c = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || c, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: c,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => (function(d, m, b) {
          if (!b.canUseStudio) throw new Error("Verified educator access is required.");
          const h = String(b.syllabusTitle || "").trim(), I = String(b.syllabusDraftText || "").trim();
          if (!h || h.length > 180 || !I || I.length > 1e5) throw new Error("Provide a title and syllabus text within the supported limits.");
          const q = b.finalHierarchy, x = [], Q = /* @__PURE__ */ new Set();
          let S = 0;
          const k = (T, M = [], A = 0) => {
            if (!T || typeof T != "object" || A > 4 || ++S > 500 || !/^[a-z0-9][a-z0-9-]{0,79}$/.test(T.id || "") || !String(T.title || "").trim()) throw new Error("Generate a valid hierarchy before saving.");
            const _ = [...M, T.id], D = _.join("/");
            if (Q.has(D)) throw new Error("Hierarchy paths must be unique.");
            if (Q.add(D), T.type === "topic") for (const Y of Array.isArray(T.problems) ? T.problems : []) {
              const J = String(Y || "").trim();
              if (!J || J.length > 16e3) throw new Error("Invalid topic problem.");
              x.push({ topicId: T.id, topicPath: D, statement: J, normalized: J.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim() });
            }
            for (const Y of Array.isArray(T.children) ? T.children : []) k(Y, _, A + 1);
          };
          if (k(q), x.length > 500) throw new Error("A course can contain at most 500 topic problems.");
          let P = 2166136261;
          for (const T of h.normalize("NFKC")) P = Math.imul(P ^ T.codePointAt(0), 16777619) >>> 0;
          const L = String(b.savedSyllabusKey || "course-" + P.toString(36)), g = Number(b.savedSyllabusVersion || m.contextVersionNumber || 1);
          if (!Number.isInteger(g) || g < 1 || g > 1e5) throw new Error("Invalid course version.");
          const z = d.status === "published" ? "published" : "draft";
          return { title: h, text: I, syllabusKey: L, versionNumber: g, description: String(b.syllabusDescription || "").trim(), languageCode: ["en", "hi", "ta"].includes(m.locale) ? m.locale : "en", hierarchy: q, problems: x, status: z, visibility: z === "published" ? "public" : "private" };
        })(r, V, i))();
        n.save_syllabus_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_prepare" };
      return e.error = a, n.save_syllabus_prepare = { error: a }, o("isSavingSyllabus", !1), await R({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("isSavingSyllabus", !0), await R({});
    try {
      {
        const a = X({ description: "{{ stepResults.save_syllabus_prepare.description }}", hierarchy: "{{ stepResults.save_syllabus_prepare.hierarchy }}", languageCode: "{{ stepResults.save_syllabus_prepare.languageCode }}", problems: "{{ stepResults.save_syllabus_prepare.problems }}", status: "{{ stepResults.save_syllabus_prepare.status }}", syllabusKey: "{{ stepResults.save_syllabus_prepare.syllabusKey }}", syllabusText: "{{ stepResults.save_syllabus_prepare.text }}", title: "{{ stepResults.save_syllabus_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.save_syllabus_prepare.versionNumber }}", visibility: "{{ stepResults.save_syllabus_prepare.visibility }}" }, { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.syllabusKey, a.versionNumber, a.title, a.description, a.languageCode, a.syllabusText, a.hierarchy, a.status, a.visibility, a.problems], l = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveProfessorSyllabus", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const d = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveProfessorSyllabus", parameters: c, namedParameters: a }), signal: r.signal }), m = await d.json().catch(() => ({}));
          if (!d.ok || m.success === !1) {
            const b = new Error(m.error || "Database query failed (" + d.status + ")");
            throw b.status = d.status, b;
          }
          u = m.data;
        }
        n.save_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_query" };
      return e.error = a, n.save_syllabus_query = { error: a }, o("isSavingSyllabus", !1), await R({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = n.save_syllabus_query, d = Array.isArray(u) ? u[0]?.result : null;
          if (!d?.id || !d.contextKey) throw new Error("The version is immutable or could not be saved. Start a new version.");
          return d;
        })();
        n.save_syllabus_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_result" };
      return e.error = a, n.save_syllabus_result = { error: a }, o("isSavingSyllabus", !1), await R({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("selectedSyllabusId", n.save_syllabus_result.id), await R({}), o("savedSyllabusKey", n.save_syllabus_result.key), await R({}), o("savedSyllabusVersion", n.save_syllabus_result.versionNumber), await R({}), o("savedContextKey", n.save_syllabus_result.contextKey), await R({}), o("syllabusStatus", n.save_syllabus_prepare.status === "published" ? "Published for students under this professor." : "Syllabus draft saved.");
    try {
      await ke({});
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_refresh" };
      return e.error = a, n.save_syllabus_refresh = { error: a }, o("isSavingSyllabus", !1), await R({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    return o("isSavingSyllabus", !1), await R({}), n.save_syllabus_result;
  }
  async function De(s = {}) {
    const r = {};
    return await dr({}), await cr({}), r.scenario_access;
  }
  async function Ls(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => (function(d, m) {
          const b = structuredClone(m.strategyDraft || {}), h = Array.isArray(m.blackboardLesson?.steps) ? m.blackboardLesson.steps : [], I = d.stepId ? h.find((S) => S.id === d.stepId) : h[Number(m.activeStep || 0)];
          if (!I?.id || !String(I.title || "").trim()) throw new Error("Select a real lesson step before editing the strategy.");
          const q = String(d.operation || "keep");
          if (!["keep", "remove", "annotate"].includes(q)) throw new Error("Unsupported strategy edit.");
          const x = String(I.title).trim();
          for (const S of ["requiredSteps", "forbiddenShortcuts", "teachingNotes"]) b[S] = Array.isArray(b[S]) ? b[S].map(String) : [];
          if (q === "keep" && !b.requiredSteps.includes(x) && b.requiredSteps.push(x), q === "remove") {
            b.requiredSteps = b.requiredSteps.filter((k) => k !== x);
            const S = "Avoid this step when it is unnecessary: " + x;
            b.forbiddenShortcuts.includes(S) || b.forbiddenShortcuts.push(S);
          }
          if (q === "annotate") {
            const S = String(d.note || "").trim();
            if (!S || S.length > 2e3) throw new Error("Provide a teaching note of 1–2000 characters.");
            const k = x + ": " + S;
            b.teachingNotes.includes(k) || b.teachingNotes.push(k);
          }
          const Q = [
            `Preferred method
` + String(b.preferredMethod || "Professor-guided method"),
            `Required steps
` + b.requiredSteps.map((S, k) => k + 1 + ". " + S).join(`
`),
            `Avoid
` + b.forbiddenShortcuts.map((S) => "• " + S).join(`
`),
            `Verification
` + (Array.isArray(b.verificationRules) ? b.verificationRules : []).map((S) => "• " + S).join(`
`),
            `Teaching notes
` + b.teachingNotes.map((S) => "• " + S).join(`
`)
          ].join(`

`);
          return { draft: b, text: Q, operation: q, step: x, stepId: I.id };
        })(r, i))();
        n.strategy_edit = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "strategy_edit" };
      return e.error = a, n.strategy_edit = { error: a }, o("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy."), { ok: !1 };
    }
    o("strategyDraft", n.strategy_edit.draft), o("strategyDraftText", n.strategy_edit.text), o("strategyStatus", "Strategy draft updated from the representative solution. Approve it to create a new version.");
    try {
      await ie("stepOperationRequested", { note: r.note || "", operation: r.operation, stepId: n.strategy_edit.stepId }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "edit_emit" };
      return e.error = a, n.edit_emit = { error: a }, o("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy."), { ok: !1 };
    }
    return n.strategy_edit.draft;
  }
  async function Os(s = {}) {
    const r = s || {}, e = {}, n = {};
    if ((function(a) {
      const c = !!(a.isSavingSyllabus || a.isGeneratingStructure || a.isResolvingProblem || a.isSavingStrategy || a.isLoadingSyllabi || a.isOpeningSyllabus), l = a.canUseStudio !== !0 || c, u = !!(a.selectedSyllabusId && a.savedSyllabusKey && a.savedContextKey && Number.isInteger(a.savedSyllabusVersion) && a.savedSyllabusVersion > 0);
      return {
        busy: c,
        unavailable: l,
        previewDisabled: l || !u || !a.hasProblemSolution || !a.savedProblemId,
        versionDisabled: l || !u || a.savedSyllabusVersion >= 1e5,
        lessonEmpty: !a.isResolvingProblem && !a.hasProblemSolution
      };
    })(i).unavailable)
      return { ok: !1, reason: "studio_unavailable" };
    o("isGeneratingStructure", !0), await R({}), o("structureStatus", "Generating a multilevel hierarchy with Gemini…");
    try {
      await ie("aiStructureRequested", { languageCode: V.locale, sourceText: i.syllabusDraftText }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_emit" };
      return e.error = a, n.structure_emit = { error: a }, o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = String(i.syllabusDraftText || "").trim();
          if (!u) throw new Error("Paste a syllabus before proposing a hierarchy.");
          return ["You are an academic curriculum architect.", "Return JSON only with Programme > Semester > Subject > Unit > Topic hierarchy.", "Every topic must contain a problems array with 2 to 4 representative college-level mathematics problems.", 'Shape: {"hierarchy":{"id":"...","type":"programme","title":"...","children":[{"id":"...","type":"semester","title":"...","children":[{"id":"...","type":"subject","title":"...","children":[{"id":"...","type":"unit","title":"...","children":[{"id":"...","type":"topic","title":"...","problems":["..."],"children":[]}]}]}]}]}}.', "Use stable lowercase-hyphen IDs.", "Detect the language of the supplied syllabus and keep every human-readable hierarchy title and representative problem in that same source language. Do not mix languages. Keep JSON keys and mathematical notation unchanged.", "Syllabus:", u].join(`
`);
        })();
        n.structure_prompt = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_prompt" };
      return e.error = a, n.structure_prompt = { error: a }, o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }, a = X({ model: "gemini-3.5-flash-lite", prompt: "{{ stepResults.structure_prompt }}" }, t) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(6e4) }), l = await c.json().catch(() => ({}));
        if (!c.ok) {
          const d = new Error(l.error || "Protected API request failed (" + c.status + ")");
          throw d.status = c.status, d;
        }
        const u = l.data;
        n.structure_api = u, e.apiResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_api" };
      if (e.error = a, n.structure_api = { error: a }, [429, 500, 502, 503, 504].includes(Number(a.status))) {
        try {
          {
            const c = { args: r, inputs: V, state: i, sharedState: se, applicationState: ae, pageState: oe, pageData: G, serverData: F, vars: e, stepResults: n }, l = X({ model: "gemini-3.6-flash", prompt: "{{ stepResults.structure_prompt }}" }, c) || {}, u = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: l, context: c }), signal: r.signal || AbortSignal.timeout(6e4) }), d = await u.json().catch(() => ({}));
            if (!u.ok) {
              const b = new Error(d.error || "Protected API request failed (" + u.status + ")");
              throw b.status = u.status, b;
            }
            const m = d.data;
            n.structure_api_fallback = m, e.apiResult = m;
          }
        } catch (c) {
          const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "structure_api_fallback" };
          return e.error = l, n.structure_api_fallback = { error: l }, o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
        }
        try {
          {
            const c = r.event, l = G, u = i, d = await (async () => {
              const m = !!n.structure_api_fallback?.candidates, b = m ? n.structure_api_fallback : n.structure_api || {}, h = b?.candidates?.[0]?.content?.parts, I = Array.isArray(h) ? h.map((g) => String(g?.text || "")).join("") : "";
              if (!I.trim()) throw new Error("Gemini returned no curriculum structure.");
              const q = JSON.parse(I.trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "")), x = ["programme", "semester", "subject", "unit", "topic"], Q = (g, z) => String(g || z).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || z, S = (g, z = 0, T = "item") => {
                if (!g || typeof g != "object" || z > 4) return null;
                const M = String(g.title || "").trim().slice(0, 180);
                if (!M) return null;
                const A = x[Math.min(z, 4)], _ = Array.isArray(g.children) ? g.children.slice(0, 16).map((Y, J) => S(Y, z + 1, A + "-" + J)).filter(Boolean) : [], D = A === "topic" && Array.isArray(g.problems) ? g.problems.map(String).map((Y) => Y.trim()).filter(Boolean).slice(0, 8) : [];
                return { id: Q(g.id || M, T), type: A, title: M, children: _, ...A === "topic" ? { problems: D.length ? D : ["Create a worked example for " + M + ".", "Add one conceptual verification question for " + M + ".", "Add one examination-style application problem for " + M + "."] } : {} };
              }, k = S(q.hierarchy || q, 0, "programme");
              if (!k) throw new Error("Gemini returned an invalid hierarchy.");
              const P = (g, z = []) => {
                const T = [...z, g.id];
                return { id: g.id, label: g.type[0].toUpperCase() + g.type.slice(1) + " · " + g.title, data: { type: g.type, title: g.title, path: T.join("/"), problems: g.problems || [] }, children: g.children.map((M) => P(M, T)) };
              }, L = m ? "gemini-3.6-flash" : "gemini-3.5-flash-lite";
              return { hierarchy: k, items: [P(k)], model: L, fallback: m, status: m ? "Hierarchy ready using Gemini 3.6 Flash fallback. Select a Topic to view its problems." : "Hierarchy ready using Gemini 3.5 Flash-Lite. Select a Topic to view its problems." };
            })();
            n.structure_parse = d, e.customCodeResult = d;
          }
        } catch (c) {
          const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "structure_parse" };
          return e.error = l, n.structure_parse = { error: l }, o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
        }
        o("finalHierarchy", n.structure_parse.hierarchy), o("hierarchyItems", n.structure_parse.items), o("selectedHierarchyIds", []), o("hasSelectedTopic", !1), o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0), o("isGeneratingStructure", !1), await R({}), o("structureStatus", n.structure_parse.status);
        try {
          await ie("aiStructureGenerated", { hierarchy: n.structure_parse.hierarchy, languageCode: V.locale }, !0);
        } catch (c) {
          const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "structure_generated" };
          return e.error = l, n.structure_generated = { error: l }, o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
        }
        return n.structure_parse;
      } else
        return o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = G, c = i, l = await (async () => {
          const u = !!n.structure_api_fallback?.candidates, d = u ? n.structure_api_fallback : n.structure_api || {}, m = d?.candidates?.[0]?.content?.parts, b = Array.isArray(m) ? m.map((P) => String(P?.text || "")).join("") : "";
          if (!b.trim()) throw new Error("Gemini returned no curriculum structure.");
          const h = JSON.parse(b.trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "")), I = ["programme", "semester", "subject", "unit", "topic"], q = (P, L) => String(P || L).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || L, x = (P, L = 0, g = "item") => {
            if (!P || typeof P != "object" || L > 4) return null;
            const z = String(P.title || "").trim().slice(0, 180);
            if (!z) return null;
            const T = I[Math.min(L, 4)], M = Array.isArray(P.children) ? P.children.slice(0, 16).map((_, D) => x(_, L + 1, T + "-" + D)).filter(Boolean) : [], A = T === "topic" && Array.isArray(P.problems) ? P.problems.map(String).map((_) => _.trim()).filter(Boolean).slice(0, 8) : [];
            return { id: q(P.id || z, g), type: T, title: z, children: M, ...T === "topic" ? { problems: A.length ? A : ["Create a worked example for " + z + ".", "Add one conceptual verification question for " + z + ".", "Add one examination-style application problem for " + z + "."] } : {} };
          }, Q = x(h.hierarchy || h, 0, "programme");
          if (!Q) throw new Error("Gemini returned an invalid hierarchy.");
          const S = (P, L = []) => {
            const g = [...L, P.id];
            return { id: P.id, label: P.type[0].toUpperCase() + P.type.slice(1) + " · " + P.title, data: { type: P.type, title: P.title, path: g.join("/"), problems: P.problems || [] }, children: P.children.map((z) => S(z, g)) };
          }, k = u ? "gemini-3.6-flash" : "gemini-3.5-flash-lite";
          return { hierarchy: Q, items: [S(Q)], model: k, fallback: u, status: u ? "Hierarchy ready using Gemini 3.6 Flash fallback. Select a Topic to view its problems." : "Hierarchy ready using Gemini 3.5 Flash-Lite. Select a Topic to view its problems." };
        })();
        n.structure_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_parse" };
      return e.error = a, n.structure_parse = { error: a }, o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    o("finalHierarchy", n.structure_parse.hierarchy), o("hierarchyItems", n.structure_parse.items), o("selectedHierarchyIds", []), o("hasSelectedTopic", !1), o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0), o("isGeneratingStructure", !1), await R({}), o("structureStatus", n.structure_parse.status);
    try {
      await ie("aiStructureGenerated", { hierarchy: n.structure_parse.hierarchy, languageCode: V.locale }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_generated" };
      return e.error = a, n.structure_generated = { error: a }, o("isGeneratingStructure", !1), await R({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    return n.structure_parse;
  }
  async function Ms(s = {}) {
    o("syllabusDescription", (s || {}).value);
  }
  async function Fs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = String(i.newProblemText || "").trim();
        if (!t) throw new Error("Enter a problem statement.");
        if (!i.selectedTopicId) throw new Error("Select a Topic first.");
        const a = Array.isArray(i.selectedTopicProblems) ? i.selectedTopicProblems.map(String) : [], c = [.../* @__PURE__ */ new Set([...a, t])], l = c.map((u, d) => ({ id: i.selectedTopicId + "-problem-" + (d + 1), label: d + 1 + ". " + u, data: { type: "problem", topicId: i.selectedTopicId, text: u } }));
        return { text: t, problems: c, items: l };
      })();
      e.new_problem_prepare_item = n;
    }
    return o("selectedTopicProblems", e.new_problem_prepare_item.problems), o("selectedTopicProblemItems", e.new_problem_prepare_item.items), o("selectedProblemStatement", e.new_problem_prepare_item.text), o("showNewProblemForm", !1), await je({ solutionMode: i.newProblemSolutionMode, statement: e.new_problem_prepare_item.text }), o("newProblemText", ""), e.new_problem_resolve;
  }
  const Gs = {
    shareLesson: hs,
    addProblems: gs,
    setHierarchyContext: fs,
    syncSyllabusInput: cr,
    expandSyllabusSetup: Ss,
    publishContext: vs,
    selectHierarchyNode: ws,
    selectStep: xs,
    closeNewProblemForm: _s,
    refreshStudioControls: R,
    selectProblem: Ps,
    setNewProblemSolutionMode: Ts,
    loadTopicProblems: ur,
    toggleStudioSidebar: As,
    loadProfessorSyllabi: ke,
    collapseSyllabusSetup: Is,
    openNewProblemForm: Es,
    setNewProblemText: qs,
    prepareContentPreview: Cs,
    setSyllabusText: Rs,
    resolveProblemSolution: je,
    setSyllabusTitle: Ns,
    initializeProfessorAccess: dr,
    loadContextStrategy: mr,
    selectTeacherAnswer: ks,
    startNextSyllabusVersion: js,
    selectSavedSyllabus: Ds,
    saveProfessorSyllabus: pr,
    refreshProfessorScenario: De,
    editStep: Ls,
    requestStructure: Os,
    setSyllabusDescription: Ms,
    submitNewProblem: Fs
  }, Qs = {
    shareLesson: [],
    addProblems: [],
    setHierarchyContext: [],
    syncSyllabusInput: [],
    expandSyllabusSetup: [],
    publishContext: [],
    selectHierarchyNode: ["item", "index", "depth"],
    selectStep: ["event", "stepIndex", "index"],
    closeNewProblemForm: [],
    refreshStudioControls: [],
    selectProblem: ["item", "index", "depth"],
    setNewProblemSolutionMode: ["value"],
    loadTopicProblems: ["topicPath", "topicId", "fallbackProblems"],
    toggleStudioSidebar: [],
    loadProfessorSyllabi: [],
    collapseSyllabusSetup: [],
    openNewProblemForm: [],
    setNewProblemText: ["value"],
    prepareContentPreview: [],
    setSyllabusText: ["value"],
    resolveProblemSolution: ["statement", "solutionMode"],
    setSyllabusTitle: ["value"],
    initializeProfessorAccess: [],
    loadContextStrategy: ["topicPath", "topicTitle"],
    selectTeacherAnswer: ["value"],
    startNextSyllabusVersion: [],
    selectSavedSyllabus: ["value"],
    saveProfessorSyllabus: ["status"],
    refreshProfessorScenario: [],
    editStep: ["operation", "stepId", "note"],
    requestStructure: [],
    setSyllabusDescription: ["value"],
    submitNewProblem: []
  }, B = (s, r = {}, e = []) => {
    const n = Gs[s];
    if (n) {
      const u = Qs[s] || [];
      return n(Object.fromEntries(u.map((d, m) => {
        const b = Object.prototype.hasOwnProperty.call(r, d) ? r[d] : void 0;
        return [d, (b === "" || b === void 0) && e[m] !== void 0 ? e[m] : d === "event" && (b === "" || b === void 0) ? e[0] : b];
      })));
    }
    const t = fr?.[s];
    if (typeof t == "function")
      return t(Object.keys(r).length > 0 ? r : e[0]);
    const [a, c] = String(s).split("."), l = typeof globalThis < "u" ? globalThis[a]?.[c] : void 0;
    if (typeof l == "function") return l(...Object.values(r));
    console.warn("Rudra action '" + s + "' is not available in this runtime.");
  }, ue = ge(/* @__PURE__ */ new Map()), he = pe((s, r, e, n) => {
    const t = ue.current.get(s);
    if (r === "exhaust" && t?.promise) return t.promise;
    r === "takeLatest" && t?.controller?.abort();
    const a = new AbortController(), c = () => Promise.resolve().then(() => e(a.signal)), l = r === "queue" && t?.promise ? t.promise.catch(() => {
    }).then(c) : c();
    return ue.current.set(s, { controller: a, promise: l }), l.catch((u) => {
      u?.name !== "AbortError" && console.error(n, u);
    }).finally(() => {
      ue.current.get(s)?.promise === l && ue.current.delete(s);
    }), l;
  }, []);
  le(() => () => {
    for (const s of ue.current.values()) s.controller?.abort();
    ue.current.clear();
  }, []), le(() => {
    he("professor_scenario_mountrefreshProfessorScenario", "takeLatest", (s) => De({}), "Module mount lifecycle failed:");
  }, []), le(() => {
    he("professor_syllabi_mountloadProfessorSyllabi", "takeLatest", (s) => ke({ signal: s }), "Module mount lifecycle failed:");
  }, []);
  const br = ge(!1);
  le(() => {
    br.current || (br.current = !0), ut(structuredClone(!0)), zt(structuredClone("Professor approval required")), vt(structuredClone("Sign in with an approved professor account to use this studio.")), Jt(structuredClone("Verification pending")), bt(structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), _t(structuredClone("")), or(structuredClone("Select a saved syllabus or save this draft.")), It(structuredClone(!0)), At(structuredClone(!1)), rt(structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), Nt(structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), Dt(structuredClone([])), sr(structuredClone(!1)), We(structuredClone("")), Ze(structuredClone("")), tt(structuredClone("")), ot(structuredClone("Selected topic problems")), wt(structuredClone([])), Rt(structuredClone([])), Wt(structuredClone([])), et(structuredClone("")), ft(structuredClone("")), rr(structuredClone(!1)), Je(structuredClone({})), gt(structuredClone("")), Xt(structuredClone("Select a problem to load its saved solution.")), Pt(structuredClone(!1)), at(structuredClone(0)), ir(structuredClone("")), jt(structuredClone("Select one answer.")), Ut(structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), Gt(structuredClone("Find the eigenvalues of a 2 × 2 matrix")), Bt(structuredClone("Representative problem · Linear algebra")), tr(structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), mt(structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), qt(structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), He(structuredClone(!1)), $e(structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), he("professor_scenario_inputsrefreshProfessorScenario", "takeLatest", (s) => De({}), "Module input lifecycle failed:");
  }, [JSON.stringify(_e), JSON.stringify(we), JSON.stringify(xe), JSON.stringify(ze), JSON.stringify(Ke), JSON.stringify(Fe), JSON.stringify(Qe), JSON.stringify(Ge), JSON.stringify(Pe), JSON.stringify(Ve)]);
  const yr = ge(!1);
  return le(() => {
    yr.current || (yr.current = !0), he("studio_controls_inputsrefreshStudioControls", "takeLatest", (s) => R({}), "Module input lifecycle failed:");
  }, [JSON.stringify(xe), JSON.stringify(_e), JSON.stringify(we), JSON.stringify(Pe)]), /* @__PURE__ */ y("div", { ref: fe, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ C("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/chalkmind-math@1.0.1/index.css", precedence: "rudra-library" }),
    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
      "      ",
      /* @__PURE__ */ y(ee, { id: "root", className: "block rs-studio", children: [
        "      ",
        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
          "      ",
          /* @__PURE__ */ y(ee, { id: "inner", className: "flex flex-col rs-studio-inner", children: [
            "      ",
            v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ y(ee, { id: "head", className: "flex flex-wrap rs-studio-head", children: [
                "      ",
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ y(ee, { id: "head_copy", className: "flex flex-col rs-head-copy", children: [
                    "      ",
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C(zs, { id: "badge", label: /* @__PURE__ */ ((s) => s === void 0 ? "Verification pending" : s)($t), ariaLabel: "Professor verification status" })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "title", className: "rs-title", as: "h2", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor context studio" : s)(re?.i18n?.title) })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Import a semester and steer representative solutions." : s)(re?.i18n?.subtitle) })
                    ] })
                  ] })
                ] }),
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ C(Z, { id: "sidebar_toggle", className: "rs-studio-action rs-sidebar-toggle", theme: "auto", variant: "outline", onAction: (...s) => B("toggleStudioSidebar", {}, s), "aria-controls": "left", "aria-expanded": /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(Ee), label: /* @__PURE__ */ ((s) => s === void 0 ? "Hide syllabus panel" : s)(Be) })
                ] })
              ] })
            ] }),
            v(ct) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ y(Ks, { id: "verification", title: /* @__PURE__ */ y(f, { children: [
                "      ",
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ C($, { id: "verification_title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor approval required" : s)(Vt) })
                ] })
              ] }), icon: /* @__PURE__ */ y(f, { children: [
                "      ",
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ C($, { id: "verification_icon", className: "rs-verification-icon", as: "span", content: "!" })
                ] })
              ] }), variant: "warning", appearance: "soft", live: "polite", children: [
                "      ",
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ C($, { id: "verification_message", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Sign in with an approved professor account to use this studio." : s)(St) })
                ] })
              ] })
            ] }),
            v(Ue) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ y(ee, { id: "grid", className: `${((s) => s == null || s === !1 || typeof s == "object" ? "" : "" + String(s))(/* @__PURE__ */ ((s) => s === void 0 ? "grid rs-grid" : s)(nt))}`, children: [
                "      ",
                v(/* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(Ee)) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ y(hr, { id: "left", className: "rs-panel rs-authoring-panel", as: "section", theme: "auto", children: [
                    "      ",
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "syllabus_catalog", className: "block rs-syllabus-catalog", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(gr, { id: "saved_syllabus_select", name: "savedSyllabus", size: "md", radius: "md", options: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(lt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(re?.studioControls?.unavailable), placeholder: "Select a syllabus", label: "Continue with a saved syllabus", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(xt), onChangeValue: (...s) => B("selectSavedSyllabus", {}, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "refresh_syllabi", className: "rs-studio-action", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ae), variant: "ghost", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ae), onAction: (...s) => B("loadProfessorSyllabi", {}, s), loadingText: "Loading syllabi…", label: "Refresh syllabi" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "save_syllabus_draft", className: "rs-studio-action", onAction: (...s) => B("saveProfessorSyllabus", { status: "draft" }, s), loadingText: "Saving syllabus…", label: "Save current syllabus", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Re), variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(re?.studioControls?.unavailable) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "publish_syllabus_students", className: "rs-studio-action", label: "Publish current syllabus for students", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Re), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(re?.studioControls?.unavailable), onAction: (...s) => B("saveProfessorSyllabus", { status: "published" }, s), loadingText: "Publishing syllabus…" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "syllabus_catalog_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select a saved syllabus or save this draft." : s)(ar) })
                        ] })
                      ] })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "syllabus_metadata", className: "block rs-syllabus-metadata", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Us, { id: "syllabus_title_input", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(re?.studioControls?.busy), required: !0, placeholder: "Engineering Mathematics I", onChangeValue: (...s) => B("setSyllabusTitle", {}, s), name: "syllabusTitle", size: "md", label: "Syllabus title", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(yt) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Le, { id: "syllabus_description_input", placeholder: "What students will learn", onChangeValue: (...s) => B("setSyllabusDescription", {}, s), name: "syllabusDescription", rows: 3, label: "Description", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Ot), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(re?.studioControls?.busy) })
                        ] })
                      ] })
                    ] }),
                    v(Tt) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C(Z, { id: "edit_syllabus_setup", className: "rs-studio-action", variant: "outline", onAction: (...s) => B("expandSyllabusSetup", {}, s), label: "Edit syllabus / Regenerate", theme: "auto" })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "left_title", as: "h3", content: /* @__PURE__ */ ((s) => s === void 0 ? "Semester syllabus" : s)(re?.i18n?.import) })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "structure_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Review the proposed hierarchy, add problems, then set it as context." : s)(Ye) })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C(Le, { id: "syllabus", label: "Paste one section or a complete semester", value: /* @__PURE__ */ ((s) => s === void 0 ? `Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation` : s)(pt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(re?.studioControls?.busy), helperText: "AI proposes programme → semester → subject → unit → topic. You approve before anything is saved.", onChangeValue: (...s) => B("setSyllabusText", {}, s), name: "syllabus", rows: 10 })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "syllabus_actions", className: "flex flex-wrap rs-syllabus-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "structure", className: "rs-studio-action", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ce), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ce), onAction: (...s) => B("requestStructure", {}, s), loadingText: "Generating hierarchy…", label: "Propose structure with AI" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "collapse_syllabus_setup", className: "rs-studio-action", variant: "ghost", onAction: (...s) => B("collapseSyllabusSetup", {}, s), label: "Hide setup", theme: "auto" })
                        ] })
                      ] })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "final_hierarchy_title", content: "Final hierarchy", as: "h3" })
                    ] }),
                    v(ye) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($s, { id: "problems_text", className: "rs-problem-list", expandOnItemClick: !0, items: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Ct), emptyText: "No problems yet. Use Add problems to create examples.", onItemClick: (...s) => B("selectProblem", { depth: "", index: "", item: "" }, s), selectedIds: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Yt), showDefaultIcons: !0, indent: 20, showLines: !1, selectionMode: "single", defaultExpandAll: !0, children: (s) => (() => {
                        const r = { ...s || {}, item: s?.item ?? s, index: s?.index ?? s?.i ?? 0 };
                        return /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "problem_item_label", className: "rs-tree-label-text", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label), as: "span" }),
                          /* @__PURE__ */ C($, { id: "hierarchy_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label) })
                        ] });
                      })() })
                    ] }),
                    v(Qt) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "new_problem_form", className: "block rs-new-problem-form", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "new_problem_title", content: "Add a context-scoped problem", as: "h4" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Le, { id: "new_problem_input", label: "Problem statement", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Zt), required: !0, placeholder: "Enter a new problem for the selected topic", onChangeValue: (...s) => B("setNewProblemText", {}, s), name: "newProblem", rows: 5, disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(re?.studioControls?.busy), autoResize: !0 })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(gr, { id: "new_problem_mode", value: /* @__PURE__ */ ((s) => s === void 0 ? "detailed" : s)(it), radius: "md", options: [{ label: "Detailed steps", value: "detailed" }, { label: "Quick solution", value: "quick" }], onChangeValue: (...s) => B("setNewProblemSolutionMode", {}, s), name: "solutionMode", size: "md", label: "Solution style" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ y(ee, { id: "new_problem_actions", className: "flex flex-wrap rs-new-problem-actions", children: [
                            "      ",
                            v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                              "      ",
                              /* @__PURE__ */ C(Z, { id: "save_new_problem", className: "rs-studio-action", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(be), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(be), onAction: (...s) => B("submitNewProblem", {}, s), loadingText: "Checking saved solutions…", label: "Find or generate solution", theme: "auto" })
                            ] }),
                            v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                              "      ",
                              /* @__PURE__ */ C(Z, { id: "cancel_new_problem", className: "rs-studio-action", label: "Cancel", theme: "auto", variant: "ghost", onAction: (...s) => B("closeNewProblemForm", {}, s) })
                            ] })
                          ] })
                        ] })
                      ] })
                    ] }),
                    v(me) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "problem_solution_panel", className: "block rs-problem-solution", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "problem_solution_text", className: "rs-problem-solution-text", as: "div", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(ht) })
                        ] })
                      ] })
                    ] }),
                    v(ye) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "hierarchy_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "add_problems", className: "rs-studio-action", label: "Add new problem", theme: "auto", variant: "outline", onAction: (...s) => B("openNewProblemForm", {}, s) })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ y(hr, { id: "right", className: "rs-panel rs-solution-panel", as: "section", theme: "auto", children: [
                    "      ",
                    v(/* @__PURE__ */ ((s) => s === void 0 ? "" : s)(qe)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "problem_solution_status", className: "rs-solution-source", as: "p", role: "status", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(qe), "aria-live": "polite" })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(re?.studioControls?.lessonEmpty)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "studio_lesson_empty", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, select a topic, then choose or add a problem to review its lesson." })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C($, { id: "right_title", as: "h3", content: /* @__PURE__ */ ((s) => s === void 0 ? "Steer a representative solution" : s)(re?.i18n?.board) })
                    ] }),
                    v(be) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "board_loading", className: "flex rs-board-loading", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "board_loading_indicator", className: "rs-loading-orb", as: "span", content: "" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "board_loading_text", as: "p", content: "Loading the saved solution or generating a new lesson…" })
                        ] })
                      ] })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(me)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ C(Bs, { id: "board", steps: /* @__PURE__ */ ((s) => s === void 0 ? [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: 0, value: "b" }, { label: 1, value: "c" }, { label: 3, value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }] : s)(Et), onNext: (...s) => B("selectStep", {}, s), playing: !1, activeStep: /* @__PURE__ */ ((s) => s === void 0 ? 0 : s)(st), boardOptions: { animateCurrentStepOnly: !0, clearFutureSteps: !1, preserveRevealedSteps: !0, writingEffect: !0 }, reducedMotion: !1, showStepPopup: !0, captionsEnabled: !0, title: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of a 2 × 2 matrix" : s)(Ft), lessonKind: /* @__PURE__ */ ((s) => s === void 0 ? "worked-example" : s)(Kt?.lessonKind), stepDurationMs: 5500, learningGoal: /* @__PURE__ */ ((s) => s === void 0 ? "Form the characteristic equation, solve it and verify the eigenvalues." : s)(dt), onStepSelect: (...s) => B("selectStep", {}, s), editOperations: [], popupInitiallyOpen: !1, speedLabel: "Normal", autoAdvance: !0, problemLabel: /* @__PURE__ */ ((s) => s === void 0 ? "Representative problem · Linear algebra" : s)(Ht), problemStatement: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : s)(er) })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(me)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "teacher_question_panel", className: "block rs-teacher-question", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "teacher_question_title", className: "rs-teacher-question-title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "What size identity matrix is required here?" : s)(Xe) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Hs, { id: "teacher_question_choices", size: "md", label: "Choose one answer", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(nr), layout: "vertical", options: /* @__PURE__ */ ((s) => s === void 0 ? [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }] : s)(Lt), colorScheme: "emerald", onChangeValue: (...s) => B("selectTeacherAnswer", {}, s), name: "teacherAnswer" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "teacher_question_feedback", className: "rs-teacher-question-feedback", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select one answer." : s)(kt) })
                        ] })
                      ] })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(me)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "steer_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "keep", className: "rs-studio-action", variant: "primary", onAction: (...s) => B("editStep", { operation: "keep" }, s), label: "Keep", theme: "auto" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "remove", className: "rs-studio-action", label: "Remove", theme: "auto", variant: "outline", onAction: (...s) => B("editStep", { operation: "remove" }, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "annotate", className: "rs-studio-action", label: "Add teaching note", theme: "auto", variant: "ghost", onAction: (...s) => B("editStep", { note: "Explain why this step belongs in similar problems.", operation: "annotate" }, s) })
                        ] })
                      ] })
                    ] }),
                    v(ye) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "strategy_panel", className: "block rs-strategy-panel", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "studio_rules_body", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Save your syllabus, review a lesson, and approve the teaching strategy before publishing." : s)(Ie) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "strategy_title", as: "h3", content: "Teaching strategy for this Topic" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "strategy_status", className: "rs-strategy-status", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Mt) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "strategy_text", className: "rs-strategy-text", as: "div", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Ie) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "set_context", className: "rs-studio-action", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Te), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Te), onAction: (...s) => B("setHierarchyContext", {}, s), loadingText: "Saving strategy…", label: "Approve strategy as context", theme: "auto" })
                        ] })
                      ] })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "publish_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "preview_content", className: "rs-studio-action", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(re?.studioControls?.previewDisabled), onAction: (...s) => B("prepareContentPreview", {}, s), label: "Prepare student preview" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "publish", className: "rs-studio-action", label: "Publish immutable context version", theme: "auto", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(re?.studioControls?.unavailable), onAction: (...s) => B("publishContext", {}, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "next_syllabus_version", className: "rs-studio-action", onAction: (...s) => B("startNextSyllabusVersion", {}, s), label: "Start next version", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(re?.studioControls?.versionDisabled) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C($, { id: "studio_contract_note", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, resolve and review a lesson, then prepare a student preview. Published versions are read-only; start the next version to make changes." })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ C(Z, { id: "share", className: "rs-studio-action", variant: "outline", onAction: (...s) => B("shareLesson", {}, s), label: "Create student share link", theme: "auto" })
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
  sa as default
};
