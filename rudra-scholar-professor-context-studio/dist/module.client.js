import { jsxs as y, jsx as R, Fragment as f } from "react/jsx-runtime";
import { useState as w, useEffect as le, useRef as ge, useCallback as pe } from "react";
import { Box as ee } from "@rudra-studio/rudra-layout";
import { Badge as zs, Typography as $, Button as X, Alert as Ks, Card as hr } from "@rudra-studio/rudra-core";
import { Select as gr, Input as Us, Textarea as Le, RadioGroup as Hs } from "@rudra-studio/rudra-form";
import { TreeView as Bs } from "@rudra-studio/rudra-widgets";
import { BlackboardLesson as $s } from "@rudra-studio/chalkmind-math";
function sa(m) {
  const oe = {}, M = m.serverData || m.serverState || {}, te = m.sharedState || {}, re = m.applicationState || M.applicationState || {}, se = m.pageState || M.pageState || {}, F = m.pageData || M.pageData || {}, fr = {
    ...m.runtime?.functions || {},
    ...m.runtime?.actions || {},
    ...m.functions || {},
    ...m.actions || {}
  };
  m.$route ?? m.route ?? m.data?.$route ?? m.data?.route ?? m.runtime?.data?.$route ?? m.runtime?.route ?? M?.$route ?? M?.route, m.$params ?? m.routeParams ?? m.params ?? m.data?.$params ?? m.data?.routeParams ?? m.data?.params ?? m.runtime?.data?.$params ?? m.runtime?.route?.params ?? m.runtime?.routeParams ?? m.runtime?.params ?? M?.$params ?? M?.routeParams ?? M?.params, m.$query ?? m.queryParams ?? m.query ?? m.data?.$query ?? m.data?.queryParams ?? m.data?.query ?? m.runtime?.data?.$query ?? m.runtime?.route?.query ?? m.runtime?.queryParams ?? m.runtime?.query ?? M?.$query ?? M?.queryParams ?? M?.query, m.$auth ?? m.auth ?? m.data?.$auth ?? m.data?.auth ?? m.runtime?.data?.$auth ?? m.runtime?.authInfo ?? m.runtime?.auth ?? M?.$auth ?? M?.auth, m.$config ?? m.config ?? m.data?.$config ?? m.data?.config ?? m.runtime?.data?.$config ?? m.runtime?.config ?? M?.$config ?? M?.config, m.$env ?? m.env ?? m.data?.$env ?? m.data?.env ?? m.runtime?.data?.$env ?? m.runtime?.env ?? M?.$env ?? M?.env, m.$locale ?? m.locale ?? m.data?.$locale ?? m.data?.locale ?? m.runtime?.data?.$locale ?? m.runtime?.locale ?? M?.$locale ?? M?.locale, m.$translations ?? m.translations ?? m.data?.$translations ?? m.data?.translations ?? m.runtime?.data?.$translations ?? m.runtime?.translations ?? M?.$translations ?? M?.translations, m.$i18n ?? m.i18n ?? m.data?.$i18n ?? m.data?.i18n ?? m.runtime?.data?.$i18n ?? m.runtime?.i18n ?? M?.$i18n ?? M?.i18n;
  const ne = m.$theme ?? m.theme ?? m.data?.$theme ?? m.runtime?.data?.$theme ?? m.runtime?.theme, Oe = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Js, Me] = w(() => ne ?? Oe());
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
  const N = pe((s) => typeof s != "object" || s === null ? s : Se === "sm" ? s.sm !== void 0 ? s.sm : s.md !== void 0 ? s.md : s.lg : Se === "md" ? s.md !== void 0 ? s.md : s.sm !== void 0 ? s.sm : s.lg : s.lg !== void 0 ? s.lg : s.md !== void 0 ? s.md : s.sm, [Se]), v = (s) => Array.isArray(s) ? s.length > 0 : typeof s == "string" ? s.trim() !== "" && s.trim().toLowerCase() !== "false" : !!s, we = m.verificationStatus !== void 0 ? m.verificationStatus : m.data?.verificationStatus !== void 0 ? m.data.verificationStatus : "pending", Fe = m.contextVersionKey !== void 0 ? m.contextVersionKey : m.data?.contextVersionKey !== void 0 ? m.data.contextVersionKey : "", Ge = m.contextDraft !== void 0 ? m.contextDraft : m.data?.contextDraft !== void 0 ? m.data.contextDraft : {}, Qe = m.contextVersionNumber !== void 0 ? m.contextVersionNumber : m.data?.contextVersionNumber !== void 0 ? m.data.contextVersionNumber : 1, Ve = m.returnPath !== void 0 ? m.returnPath : m.data?.returnPath !== void 0 ? m.data.returnPath : "/professor/context", _e = m.authenticated !== void 0 ? m.authenticated : m.data?.authenticated !== void 0 ? m.data.authenticated : !1, ze = m.syllabusText !== void 0 ? m.syllabusText : m.data?.syllabusText !== void 0 ? m.data.syllabusText : void 0, Ke = m.locale !== void 0 ? m.locale : m.data?.locale !== void 0 ? m.data.locale : "en", xe = m.accessProfile !== void 0 ? m.accessProfile : m.data?.accessProfile !== void 0 ? m.data.accessProfile : {}, Pe = m.userRole !== void 0 ? m.userRole : m.data?.userRole !== void 0 ? m.data.userRole : "", Q = { verificationStatus: we, contextVersionKey: Fe, contextDraft: Ge, contextVersionNumber: Qe, returnPath: Ve, authenticated: _e, syllabusText: ze, locale: Ke, accessProfile: xe, userRole: Pe }, [Te, Sr] = w(() => structuredClone(`Preferred method
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
• Prefer a direct 2×2 method when it is clearer than row reduction.`)), [vr, Ue] = w(() => structuredClone("")), [Ae, wr] = w(() => structuredClone(!0)), [He, Be] = w(() => structuredClone("")), [Ie, _r] = w(() => structuredClone(!1)), [$e, Je] = w(() => structuredClone("Select one answer.")), [Ye, xr] = w(() => structuredClone("detailed")), [We, Ze] = w(() => structuredClone("Sign in with an approved professor account to use this studio.")), [Pr, Xe] = w(() => structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), [de, et] = w(() => structuredClone(!0)), [Tr, tt] = w(() => structuredClone("Selected topic problems")), [Ar, Ir] = w(() => structuredClone(!0)), [rt, st] = w(() => structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), [at, Er] = w(() => structuredClone("")), [ot, nt] = w(() => structuredClone("Find the eigenvalues of a 2 × 2 matrix")), [it, qr] = w(() => structuredClone("Review the proposed hierarchy, add problems, then set it as context.")), [lt, ct] = w(() => structuredClone("")), [me, ut] = w(() => structuredClone(!1)), [be, dt] = w(() => structuredClone(!1)), [mt, pt] = w(() => structuredClone("Professor approval required")), [Cr, bt] = w(() => structuredClone("")), [Rr, yt] = w(() => structuredClone({})), [ht, Nr] = w(() => structuredClone(!1)), [kr, gt] = w(() => structuredClone("")), [ft, St] = w(() => structuredClone("Verification pending")), [vt, wt] = w(() => structuredClone("Select a saved syllabus or save this draft.")), [_t, xt] = w(() => structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), [jr, Dr] = w(() => structuredClone("A is a 2 × 2 matrix, so I must have the same dimensions.")), [Pt, Lr] = w(() => structuredClone("Engineering Mathematics I")), [Ee, Tt] = w(() => structuredClone("Select a problem to load its saved solution.")), [Or, Mr] = w(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [Fr, At] = w(() => structuredClone([])), [Gr, Qr] = w(() => structuredClone("")), [Vr, zr] = w(() => structuredClone("b")), [It, Et] = w(() => structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), [Kr, Ur] = w(() => structuredClone(`Programme · B.E. Mathematics
  Semester · Semester 1
    Subject · Engineering Mathematics I
      Unit · Unit 1 · Matrices and systems
        Topic · Matrix operations
        Topic · Eigenvalues and diagonalisation`)), [qt, Hr] = w(() => structuredClone("Hide syllabus panel")), [qe, Br] = w(() => structuredClone(!1)), [Ct, $r] = w(() => structuredClone("grid rs-grid")), [Jr, Rt] = w(() => structuredClone("")), [Yr, Wr] = w(() => structuredClone(0)), [Zr, Nt] = w(() => structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), [kt, Xr] = w(() => structuredClone("")), [jt, Dt] = w(() => structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), [es, ts] = w(() => structuredClone(`1. Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].
2. Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.
3. Diagonalise A = [[4, 1], [2, 3]] and verify the result.`)), [Lt, Ot] = w(() => structuredClone(!1)), [Mt, Ft] = w(() => structuredClone(!1)), [Gt, Qt] = w(() => structuredClone(0)), [Vt, zt] = w(() => structuredClone(!0)), [rs, Kt] = w(() => structuredClone("")), [Ut, Ht] = w(() => structuredClone([])), [ss, as] = w(() => structuredClone(["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."])), [Bt, os] = w(() => structuredClone("Review the example strategy, then approve it for the selected Topic.")), [ye, $t] = w(() => structuredClone(!1)), [Jt, Yt] = w(() => structuredClone("")), [ns, Wt] = w(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [Zt, Xt] = w(() => structuredClone("Representative problem · Linear algebra")), [er, is] = w(() => structuredClone([])), [tr, rr] = w(() => structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), [sr, ls] = w(() => structuredClone([{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }])), [cs, us] = w(() => structuredClone("")), [ds, ar] = w(() => structuredClone([])), [Ce, ms] = w(() => structuredClone(!1)), [or, nr] = w(() => structuredClone([])), [Re, ps] = w(() => structuredClone(!1)), [ir, bs] = w(() => structuredClone("What size identity matrix is required here?")), i = { strategyDraftText: Te, selectedTopicId: vr, showStudioSidebar: Ae, problemSolutionText: He, isLoadingSyllabi: Ie, teacherAnswerFeedback: $e, newProblemSolutionMode: Ye, accessGateMessage: We, finalHierarchy: Pr, showSyllabusSetup: de, selectedTopicHeading: Tr, hasResolvedStrategy: Ar, syllabusDraftText: rt, newProblemText: at, blackboardTitle: ot, structureStatus: it, selectedSyllabusId: lt, hasProblemSolution: me, isResolvingProblem: be, accessGateTitle: mt, selectedTopicPath: Cr, problemSolution: Rr, showNewProblemForm: ht, selectedTopicTitle: kr, accessBadgeLabel: ft, syllabusStatus: vt, blackboardLearningGoal: _t, teacherQuestionExplanation: jr, syllabusTitle: Pt, problemResolutionStatus: Ee, strategyDraft: Or, selectedHierarchyIds: Fr, selectedTopicProblemsText: Gr, teacherQuestionCorrectValue: Vr, blackboardProblemStatement: It, finalHierarchyText: Kr, sidebarToggleLabel: qt, isSavingSyllabus: qe, studioLayoutClass: Ct, selectedProblemStatement: Jr, resolvedStrategyVersion: Yr, hierarchyItems: Zr, syllabusDescription: kt, blackboardLesson: jt, suggestedProblemsText: es, isSyllabusSetupCollapsed: Lt, canUseStudio: Mt, activeStep: Gt, showAccessGate: Vt, selectedProblemText: rs, selectedProblemIds: Ut, suggestedProblems: ss, strategyStatus: Bt, hasSelectedTopic: ye, selectedTeacherAnswer: Jt, resolvedStrategy: ns, blackboardProblemLabel: Zt, savedSyllabusOptions: er, blackboardSteps: tr, teacherQuestionOptions: sr, resolvedStrategyId: cs, selectedTopicProblems: ds, isGeneratingStructure: Ce, selectedTopicProblemItems: or, isSavingStrategy: Re, teacherQuestionPrompt: ir }, o = pe((s, r) => {
    switch (s) {
      case "strategyDraftText": {
        const e = typeof r == "function" ? r(i.strategyDraftText) : r;
        return i.strategyDraftText = e, Sr(e), e;
      }
      case "selectedTopicId": {
        const e = typeof r == "function" ? r(i.selectedTopicId) : r;
        return i.selectedTopicId = e, Ue(e), e;
      }
      case "showStudioSidebar": {
        const e = typeof r == "function" ? r(i.showStudioSidebar) : r;
        return i.showStudioSidebar = e, wr(e), e;
      }
      case "problemSolutionText": {
        const e = typeof r == "function" ? r(i.problemSolutionText) : r;
        return i.problemSolutionText = e, Be(e), e;
      }
      case "isLoadingSyllabi": {
        const e = typeof r == "function" ? r(i.isLoadingSyllabi) : r;
        return i.isLoadingSyllabi = e, _r(e), e;
      }
      case "teacherAnswerFeedback": {
        const e = typeof r == "function" ? r(i.teacherAnswerFeedback) : r;
        return i.teacherAnswerFeedback = e, Je(e), e;
      }
      case "newProblemSolutionMode": {
        const e = typeof r == "function" ? r(i.newProblemSolutionMode) : r;
        return i.newProblemSolutionMode = e, xr(e), e;
      }
      case "accessGateMessage": {
        const e = typeof r == "function" ? r(i.accessGateMessage) : r;
        return i.accessGateMessage = e, Ze(e), e;
      }
      case "finalHierarchy": {
        const e = typeof r == "function" ? r(i.finalHierarchy) : r;
        return i.finalHierarchy = e, Xe(e), e;
      }
      case "showSyllabusSetup": {
        const e = typeof r == "function" ? r(i.showSyllabusSetup) : r;
        return i.showSyllabusSetup = e, et(e), e;
      }
      case "selectedTopicHeading": {
        const e = typeof r == "function" ? r(i.selectedTopicHeading) : r;
        return i.selectedTopicHeading = e, tt(e), e;
      }
      case "hasResolvedStrategy": {
        const e = typeof r == "function" ? r(i.hasResolvedStrategy) : r;
        return i.hasResolvedStrategy = e, Ir(e), e;
      }
      case "syllabusDraftText": {
        const e = typeof r == "function" ? r(i.syllabusDraftText) : r;
        return i.syllabusDraftText = e, st(e), e;
      }
      case "newProblemText": {
        const e = typeof r == "function" ? r(i.newProblemText) : r;
        return i.newProblemText = e, Er(e), e;
      }
      case "blackboardTitle": {
        const e = typeof r == "function" ? r(i.blackboardTitle) : r;
        return i.blackboardTitle = e, nt(e), e;
      }
      case "structureStatus": {
        const e = typeof r == "function" ? r(i.structureStatus) : r;
        return i.structureStatus = e, qr(e), e;
      }
      case "selectedSyllabusId": {
        const e = typeof r == "function" ? r(i.selectedSyllabusId) : r;
        return i.selectedSyllabusId = e, ct(e), e;
      }
      case "hasProblemSolution": {
        const e = typeof r == "function" ? r(i.hasProblemSolution) : r;
        return i.hasProblemSolution = e, ut(e), e;
      }
      case "isResolvingProblem": {
        const e = typeof r == "function" ? r(i.isResolvingProblem) : r;
        return i.isResolvingProblem = e, dt(e), e;
      }
      case "accessGateTitle": {
        const e = typeof r == "function" ? r(i.accessGateTitle) : r;
        return i.accessGateTitle = e, pt(e), e;
      }
      case "selectedTopicPath": {
        const e = typeof r == "function" ? r(i.selectedTopicPath) : r;
        return i.selectedTopicPath = e, bt(e), e;
      }
      case "problemSolution": {
        const e = typeof r == "function" ? r(i.problemSolution) : r;
        return i.problemSolution = e, yt(e), e;
      }
      case "showNewProblemForm": {
        const e = typeof r == "function" ? r(i.showNewProblemForm) : r;
        return i.showNewProblemForm = e, Nr(e), e;
      }
      case "selectedTopicTitle": {
        const e = typeof r == "function" ? r(i.selectedTopicTitle) : r;
        return i.selectedTopicTitle = e, gt(e), e;
      }
      case "accessBadgeLabel": {
        const e = typeof r == "function" ? r(i.accessBadgeLabel) : r;
        return i.accessBadgeLabel = e, St(e), e;
      }
      case "syllabusStatus": {
        const e = typeof r == "function" ? r(i.syllabusStatus) : r;
        return i.syllabusStatus = e, wt(e), e;
      }
      case "blackboardLearningGoal": {
        const e = typeof r == "function" ? r(i.blackboardLearningGoal) : r;
        return i.blackboardLearningGoal = e, xt(e), e;
      }
      case "teacherQuestionExplanation": {
        const e = typeof r == "function" ? r(i.teacherQuestionExplanation) : r;
        return i.teacherQuestionExplanation = e, Dr(e), e;
      }
      case "syllabusTitle": {
        const e = typeof r == "function" ? r(i.syllabusTitle) : r;
        return i.syllabusTitle = e, Lr(e), e;
      }
      case "problemResolutionStatus": {
        const e = typeof r == "function" ? r(i.problemResolutionStatus) : r;
        return i.problemResolutionStatus = e, Tt(e), e;
      }
      case "strategyDraft": {
        const e = typeof r == "function" ? r(i.strategyDraft) : r;
        return i.strategyDraft = e, Mr(e), e;
      }
      case "selectedHierarchyIds": {
        const e = typeof r == "function" ? r(i.selectedHierarchyIds) : r;
        return i.selectedHierarchyIds = e, At(e), e;
      }
      case "selectedTopicProblemsText": {
        const e = typeof r == "function" ? r(i.selectedTopicProblemsText) : r;
        return i.selectedTopicProblemsText = e, Qr(e), e;
      }
      case "teacherQuestionCorrectValue": {
        const e = typeof r == "function" ? r(i.teacherQuestionCorrectValue) : r;
        return i.teacherQuestionCorrectValue = e, zr(e), e;
      }
      case "blackboardProblemStatement": {
        const e = typeof r == "function" ? r(i.blackboardProblemStatement) : r;
        return i.blackboardProblemStatement = e, Et(e), e;
      }
      case "finalHierarchyText": {
        const e = typeof r == "function" ? r(i.finalHierarchyText) : r;
        return i.finalHierarchyText = e, Ur(e), e;
      }
      case "sidebarToggleLabel": {
        const e = typeof r == "function" ? r(i.sidebarToggleLabel) : r;
        return i.sidebarToggleLabel = e, Hr(e), e;
      }
      case "isSavingSyllabus": {
        const e = typeof r == "function" ? r(i.isSavingSyllabus) : r;
        return i.isSavingSyllabus = e, Br(e), e;
      }
      case "studioLayoutClass": {
        const e = typeof r == "function" ? r(i.studioLayoutClass) : r;
        return i.studioLayoutClass = e, $r(e), e;
      }
      case "selectedProblemStatement": {
        const e = typeof r == "function" ? r(i.selectedProblemStatement) : r;
        return i.selectedProblemStatement = e, Rt(e), e;
      }
      case "resolvedStrategyVersion": {
        const e = typeof r == "function" ? r(i.resolvedStrategyVersion) : r;
        return i.resolvedStrategyVersion = e, Wr(e), e;
      }
      case "hierarchyItems": {
        const e = typeof r == "function" ? r(i.hierarchyItems) : r;
        return i.hierarchyItems = e, Nt(e), e;
      }
      case "syllabusDescription": {
        const e = typeof r == "function" ? r(i.syllabusDescription) : r;
        return i.syllabusDescription = e, Xr(e), e;
      }
      case "blackboardLesson": {
        const e = typeof r == "function" ? r(i.blackboardLesson) : r;
        return i.blackboardLesson = e, Dt(e), e;
      }
      case "suggestedProblemsText": {
        const e = typeof r == "function" ? r(i.suggestedProblemsText) : r;
        return i.suggestedProblemsText = e, ts(e), e;
      }
      case "isSyllabusSetupCollapsed": {
        const e = typeof r == "function" ? r(i.isSyllabusSetupCollapsed) : r;
        return i.isSyllabusSetupCollapsed = e, Ot(e), e;
      }
      case "canUseStudio": {
        const e = typeof r == "function" ? r(i.canUseStudio) : r;
        return i.canUseStudio = e, Ft(e), e;
      }
      case "activeStep": {
        const e = typeof r == "function" ? r(i.activeStep) : r;
        return i.activeStep = e, Qt(e), e;
      }
      case "showAccessGate": {
        const e = typeof r == "function" ? r(i.showAccessGate) : r;
        return i.showAccessGate = e, zt(e), e;
      }
      case "selectedProblemText": {
        const e = typeof r == "function" ? r(i.selectedProblemText) : r;
        return i.selectedProblemText = e, Kt(e), e;
      }
      case "selectedProblemIds": {
        const e = typeof r == "function" ? r(i.selectedProblemIds) : r;
        return i.selectedProblemIds = e, Ht(e), e;
      }
      case "suggestedProblems": {
        const e = typeof r == "function" ? r(i.suggestedProblems) : r;
        return i.suggestedProblems = e, as(e), e;
      }
      case "strategyStatus": {
        const e = typeof r == "function" ? r(i.strategyStatus) : r;
        return i.strategyStatus = e, os(e), e;
      }
      case "hasSelectedTopic": {
        const e = typeof r == "function" ? r(i.hasSelectedTopic) : r;
        return i.hasSelectedTopic = e, $t(e), e;
      }
      case "selectedTeacherAnswer": {
        const e = typeof r == "function" ? r(i.selectedTeacherAnswer) : r;
        return i.selectedTeacherAnswer = e, Yt(e), e;
      }
      case "resolvedStrategy": {
        const e = typeof r == "function" ? r(i.resolvedStrategy) : r;
        return i.resolvedStrategy = e, Wt(e), e;
      }
      case "blackboardProblemLabel": {
        const e = typeof r == "function" ? r(i.blackboardProblemLabel) : r;
        return i.blackboardProblemLabel = e, Xt(e), e;
      }
      case "savedSyllabusOptions": {
        const e = typeof r == "function" ? r(i.savedSyllabusOptions) : r;
        return i.savedSyllabusOptions = e, is(e), e;
      }
      case "blackboardSteps": {
        const e = typeof r == "function" ? r(i.blackboardSteps) : r;
        return i.blackboardSteps = e, rr(e), e;
      }
      case "teacherQuestionOptions": {
        const e = typeof r == "function" ? r(i.teacherQuestionOptions) : r;
        return i.teacherQuestionOptions = e, ls(e), e;
      }
      case "resolvedStrategyId": {
        const e = typeof r == "function" ? r(i.resolvedStrategyId) : r;
        return i.resolvedStrategyId = e, us(e), e;
      }
      case "selectedTopicProblems": {
        const e = typeof r == "function" ? r(i.selectedTopicProblems) : r;
        return i.selectedTopicProblems = e, ar(e), e;
      }
      case "isGeneratingStructure": {
        const e = typeof r == "function" ? r(i.isGeneratingStructure) : r;
        return i.isGeneratingStructure = e, ms(e), e;
      }
      case "selectedTopicProblemItems": {
        const e = typeof r == "function" ? r(i.selectedTopicProblemItems) : r;
        return i.selectedTopicProblemItems = e, nr(e), e;
      }
      case "isSavingStrategy": {
        const e = typeof r == "function" ? r(i.isSavingStrategy) : r;
        return i.isSavingStrategy = e, ps(e), e;
      }
      case "teacherQuestionPrompt": {
        const e = typeof r == "function" ? r(i.teacherQuestionPrompt) : r;
        return i.teacherQuestionPrompt = e, bs(e), e;
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
      return n.forEach((u, p) => {
        p === n.length - 1 ? l[u] = r : (l[u] = Array.isArray(l[u]) ? [...l[u]] : { ...l[u] || {} }, l = l[u]);
      }), c;
    };
    switch (e) {
      case "strategyDraftText":
        return o("strategyDraftText", t), r;
      case "selectedTopicId":
        return o("selectedTopicId", t), r;
      case "showStudioSidebar":
        return o("showStudioSidebar", t), r;
      case "problemSolutionText":
        return o("problemSolutionText", t), r;
      case "isLoadingSyllabi":
        return o("isLoadingSyllabi", t), r;
      case "teacherAnswerFeedback":
        return o("teacherAnswerFeedback", t), r;
      case "newProblemSolutionMode":
        return o("newProblemSolutionMode", t), r;
      case "accessGateMessage":
        return o("accessGateMessage", t), r;
      case "finalHierarchy":
        return o("finalHierarchy", t), r;
      case "showSyllabusSetup":
        return o("showSyllabusSetup", t), r;
      case "selectedTopicHeading":
        return o("selectedTopicHeading", t), r;
      case "hasResolvedStrategy":
        return o("hasResolvedStrategy", t), r;
      case "syllabusDraftText":
        return o("syllabusDraftText", t), r;
      case "newProblemText":
        return o("newProblemText", t), r;
      case "blackboardTitle":
        return o("blackboardTitle", t), r;
      case "structureStatus":
        return o("structureStatus", t), r;
      case "selectedSyllabusId":
        return o("selectedSyllabusId", t), r;
      case "hasProblemSolution":
        return o("hasProblemSolution", t), r;
      case "isResolvingProblem":
        return o("isResolvingProblem", t), r;
      case "accessGateTitle":
        return o("accessGateTitle", t), r;
      case "selectedTopicPath":
        return o("selectedTopicPath", t), r;
      case "problemSolution":
        return o("problemSolution", t), r;
      case "showNewProblemForm":
        return o("showNewProblemForm", t), r;
      case "selectedTopicTitle":
        return o("selectedTopicTitle", t), r;
      case "accessBadgeLabel":
        return o("accessBadgeLabel", t), r;
      case "syllabusStatus":
        return o("syllabusStatus", t), r;
      case "blackboardLearningGoal":
        return o("blackboardLearningGoal", t), r;
      case "teacherQuestionExplanation":
        return o("teacherQuestionExplanation", t), r;
      case "syllabusTitle":
        return o("syllabusTitle", t), r;
      case "problemResolutionStatus":
        return o("problemResolutionStatus", t), r;
      case "strategyDraft":
        return o("strategyDraft", t), r;
      case "selectedHierarchyIds":
        return o("selectedHierarchyIds", t), r;
      case "selectedTopicProblemsText":
        return o("selectedTopicProblemsText", t), r;
      case "teacherQuestionCorrectValue":
        return o("teacherQuestionCorrectValue", t), r;
      case "blackboardProblemStatement":
        return o("blackboardProblemStatement", t), r;
      case "finalHierarchyText":
        return o("finalHierarchyText", t), r;
      case "sidebarToggleLabel":
        return o("sidebarToggleLabel", t), r;
      case "isSavingSyllabus":
        return o("isSavingSyllabus", t), r;
      case "studioLayoutClass":
        return o("studioLayoutClass", t), r;
      case "selectedProblemStatement":
        return o("selectedProblemStatement", t), r;
      case "resolvedStrategyVersion":
        return o("resolvedStrategyVersion", t), r;
      case "hierarchyItems":
        return o("hierarchyItems", t), r;
      case "syllabusDescription":
        return o("syllabusDescription", t), r;
      case "blackboardLesson":
        return o("blackboardLesson", t), r;
      case "suggestedProblemsText":
        return o("suggestedProblemsText", t), r;
      case "isSyllabusSetupCollapsed":
        return o("isSyllabusSetupCollapsed", t), r;
      case "canUseStudio":
        return o("canUseStudio", t), r;
      case "activeStep":
        return o("activeStep", t), r;
      case "showAccessGate":
        return o("showAccessGate", t), r;
      case "selectedProblemText":
        return o("selectedProblemText", t), r;
      case "selectedProblemIds":
        return o("selectedProblemIds", t), r;
      case "suggestedProblems":
        return o("suggestedProblems", t), r;
      case "strategyStatus":
        return o("strategyStatus", t), r;
      case "hasSelectedTopic":
        return o("hasSelectedTopic", t), r;
      case "selectedTeacherAnswer":
        return o("selectedTeacherAnswer", t), r;
      case "resolvedStrategy":
        return o("resolvedStrategy", t), r;
      case "blackboardProblemLabel":
        return o("blackboardProblemLabel", t), r;
      case "savedSyllabusOptions":
        return o("savedSyllabusOptions", t), r;
      case "blackboardSteps":
        return o("blackboardSteps", t), r;
      case "teacherQuestionOptions":
        return o("teacherQuestionOptions", t), r;
      case "resolvedStrategyId":
        return o("resolvedStrategyId", t), r;
      case "selectedTopicProblems":
        return o("selectedTopicProblems", t), r;
      case "isGeneratingStructure":
        return o("isGeneratingStructure", t), r;
      case "selectedTopicProblemItems":
        return o("selectedTopicProblemItems", t), r;
      case "isSavingStrategy":
        return o("isSavingStrategy", t), r;
      case "teacherQuestionPrompt":
        return o("teacherQuestionPrompt", t), r;
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
    const a = m.onOutput || m.onModuleOutput || m.runtime?.onOutput;
    if (typeof a != "function") return r;
    const c = a(s, r, { moduleId: m.moduleId, awaitHandlers: e });
    return e ? await c : r;
  }, [m.onOutput, m.onModuleOutput, m.runtime?.onOutput, m.moduleId]), lr = (s, r) => {
    const e = String(r || "").split(".").filter(Boolean);
    if (!(!e.length || e.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return e.reduce((n, t) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(t in n) ? n.get(t) : n[t];
      }, s);
  }, Z = (s, r) => {
    if (Array.isArray(s)) return s.map((n) => Z(n, r));
    if (s && typeof s == "object") return Object.fromEntries(Object.entries(s).map(([n, t]) => [Z(n, r), Z(t, r)]));
    if (typeof s != "string") return s;
    const e = s.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return e ? lr(r, e[1]) : s.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, t) => {
      const a = lr(r, t);
      return a == null ? "" : typeof a == "object" ? JSON.stringify(a) : String(a);
    });
  };
  async function cr(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          const u = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context";
          return { contextKey: String(i.savedContextKey), versionNumber: Number(i.savedSyllabusVersion), locale: String(Q.locale || "en") };
        })();
        n.topic_problem_context = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_context" };
      return e.error = a, n.topic_problem_context = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const a = Z({ contextKey: "{{ stepResults.topic_problem_context.contextKey }}", locale: "{{ stepResults.topic_problem_context.locale }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.topic_problem_context.versionNumber }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath, a.locale], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListTopicProblems", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListTopicProblems", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
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
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = Array.isArray(n.topic_problem_query) ? n.topic_problem_query : [], p = u.map((q) => String(q && q.statement || "").trim()).filter(Boolean), d = Array.isArray(r.fallbackProblems) ? r.fallbackProblems.map(String) : [], b = [...new Set(p.length ? p : d)], h = b.map((q, C) => ({ id: String(r.topicId) + "-problem-" + (C + 1), label: C + 1 + ". " + q, data: { type: "problem", topicId: String(r.topicId), text: q, stored: p.length > 0 } }));
          return { problems: b, items: h, source: p.length ? "database" : "hierarchy" };
        })();
        n.topic_problem_merge = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "topic_problem_merge" };
      return e.error = a, n.topic_problem_merge = { error: a }, o("structureStatus", "Topic problems could not be loaded. Please retry."), { ok: !1 };
    }
    return o("selectedTopicProblems", n.topic_problem_merge.problems), o("selectedTopicProblemItems", n.topic_problem_merge.items), o("structureStatus", n.topic_problem_merge.source === "database" ? "Stored problems loaded for this Topic." : "Proposed problems shown. Select one to save its generated solution."), n.topic_problem_merge;
  }
  async function ke(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isResolvingProblem", !0), o("problemResolutionStatus", "Checking saved solutions for this hierarchy…"), o("hasProblemSolution", !1);
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = String(r.statement || "").trim();
          if (!u) throw new Error("Enter a problem statement.");
          if (!i.selectedTopicId) throw new Error("Select a Topic first.");
          const p = u.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim(), d = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context", b = Number(i.savedSyllabusVersion), h = Number(Q.contextVersionNumber || 1), q = Number.isFinite(b) && b > 0 ? b : Math.max(1, Number.isFinite(h) ? h : 1), C = String(i.savedContextKey || Q.contextVersionKey || "rudra-scholar:" + d).trim(), _ = !!(i.selectedSyllabusId && i.savedContextKey && Number.isFinite(b) && b > 0), V = r.solutionMode === "quick" ? "quick" : "detailed", S = String(i.selectedTopicPath || i.selectedTopicId), k = String(Q.locale || "en").toLowerCase(), P = ["en", "hi", "ta"].includes(k) ? k : "en";
          return { statement: u, normalized: p, contextKey: C, versionNumber: q, canPersist: _, mode: V, topicPath: S, locale: P, promptVersion: "v3-validated-mcq-blackboard" };
        })();
        n.problem_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_prepare" };
      return e.error = a, n.problem_prepare = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = Z({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
          u = d.data;
        }
        n.problem_strategy_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_lookup" };
      return e.error = a, n.problem_strategy_lookup = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = Array.isArray(n.problem_strategy_lookup) ? n.problem_strategy_lookup : [], p = u[0], d = p && typeof p == "object" ? p.result || p : null;
          return { id: d ? String(d.strategyId || "") : "", version: d ? Number(d.strategyVersion || 0) : 0, strategy: d && d.strategy ? d.strategy : i.strategyDraft || {} };
        })();
        n.problem_strategy_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_strategy_result" };
      return e.error = a, n.problem_strategy_result = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const a = Z({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", locale: "{{ stepResults.problem_prepare.locale }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath, a.locale, a.normalizedProblem, a.solutionMode, a.promptVersion, a.strategyVersion], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarFindProblemSolution", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarFindProblemSolution", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
          u = d.data;
        }
        n.problem_lookup = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_lookup" };
      return e.error = a, n.problem_lookup = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = function(_, V = "") {
            if (!_ || typeof _ != "object" || Array.isArray(_)) throw new Error("A lesson object is required.");
            const S = (L, g, z = !1) => {
              if (L != null && typeof L != "string") throw new Error(g + " must be text.");
              const T = (L || "").trim();
              if (z && !T || T.length > 16e3) throw new Error("Invalid " + g + ".");
              return T;
            };
            if (!Array.isArray(_.steps) || !_.steps.length || _.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const k = /* @__PURE__ */ new Set(), P = _.steps.map((L, g) => {
              if (!L || typeof L != "object" || Array.isArray(L)) throw new Error("Invalid lesson step.");
              const z = S(L.id, "step ID") || "step-" + (g + 1);
              if (k.has(z)) throw new Error("Step IDs must be unique.");
              k.add(z);
              const T = L.teacherQuestion;
              if (!T || !Array.isArray(T.options) || T.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const G = /* @__PURE__ */ new Set(), A = T.options.map((j) => {
                const K = S(j?.value, "option ID", !0);
                if (G.has(K)) throw new Error("Answer option IDs must be unique.");
                return G.add(K), { value: K, label: S(j?.label, "option label", !0) };
              }), x = S(T.correctValue, "correct answer ID", !0);
              if (!G.has(x)) throw new Error("The correct answer must reference a supplied option.");
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
                teacherQuestion: { prompt: D, options: A, correctValue: x, explanation: S(T.explanation, "answer explanation", !0) }
              };
              for (const j of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) J[j] = S(L[j], j);
              return J;
            });
            return {
              title: S(_.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: S(_.problemLabel, "problem label") || "Problem",
              problemStatement: S(_.problemStatement || V, "problem statement", !0),
              learningGoal: S(_.learningGoal, "learning goal"),
              steps: P,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }, p = n.problem_lookup, d = Array.isArray(p) ? p[0] : p, b = d?.result || d;
          if (!b?.solution) return { hit: !1 };
          let h;
          try {
            h = u(b.solution, n.problem_prepare.statement);
          } catch {
            return { hit: !1 };
          }
          const q = { ...b.solution, ...h };
          return { hit: !0, result: b, solution: q, board: h, question: h.steps[0].teacherQuestion, text: h.steps.map((C, _) => _ + 1 + ". " + C.title).join(`
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
          const t = r.event, a = F, c = i, l = await (async () => {
            const u = n.problem_prepare, p = n.problem_strategy_result.strategy || {};
            return ["You are a college mathematics professor creating an interactive blackboard lesson.", 'Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.', "Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.", "Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in " + (u.locale === "hi" ? "Hindi" : u.locale === "ta" ? "Tamil" : "English") + " only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.", "Follow this approved teaching strategy exactly: " + JSON.stringify(p), "Solution mode: " + u.mode + ".", "Language code: " + u.locale + ".", "Context hierarchy: " + JSON.stringify(i.finalHierarchy || {}), "Selected topic path: " + u.topicPath, "Problem: " + u.statement].join(`
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
          const t = { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }, a = Z({ model: "gemini-3.8-flash", prompt: "{{ stepResults.problem_ai_prompt }}" }, t) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(6e4) }), l = await c.json().catch(() => ({}));
          if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
          const u = l.data;
          n.problem_ai_call = u, e.apiResult = u;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_call" };
        if (e.error = a, n.problem_ai_call = { error: a }, [429, 500, 502, 503, 504].includes(Number(a.status))) {
          try {
            {
              const c = { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }, l = Z({ model: "gemini-3.7-flash", prompt: "{{ stepResults.problem_ai_prompt }}" }, c) || {}, u = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: l, context: c }), signal: r.signal || AbortSignal.timeout(6e4) }), p = await u.json().catch(() => ({}));
              if (!u.ok) throw new Error(p.error || "Protected API request failed (" + u.status + ")");
              const d = p.data;
              n.problem_ai_fallback = d, e.apiResult = d;
            }
          } catch (c) {
            const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "problem_ai_fallback" };
            return e.error = l, n.problem_ai_fallback = { error: l }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
          }
          try {
            {
              const c = r.event, l = F, u = i, p = await (async () => {
                const d = function(g, z = "") {
                  if (!g || typeof g != "object" || Array.isArray(g)) throw new Error("A lesson object is required.");
                  const T = (x, D, Y = !1) => {
                    if (x != null && typeof x != "string") throw new Error(D + " must be text.");
                    const J = (x || "").trim();
                    if (Y && !J || J.length > 16e3) throw new Error("Invalid " + D + ".");
                    return J;
                  };
                  if (!Array.isArray(g.steps) || !g.steps.length || g.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
                  const G = /* @__PURE__ */ new Set(), A = g.steps.map((x, D) => {
                    if (!x || typeof x != "object" || Array.isArray(x)) throw new Error("Invalid lesson step.");
                    const Y = T(x.id, "step ID") || "step-" + (D + 1);
                    if (G.has(Y)) throw new Error("Step IDs must be unique.");
                    G.add(Y);
                    const J = x.teacherQuestion;
                    if (!J || !Array.isArray(J.options) || J.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
                    const j = /* @__PURE__ */ new Set(), K = J.options.map((I) => {
                      const H = T(I?.value, "option ID", !0);
                      if (j.has(H)) throw new Error("Answer option IDs must be unique.");
                      return j.add(H), { value: H, label: T(I?.label, "option label", !0) };
                    }), W = T(J.correctValue, "correct answer ID", !0);
                    if (!j.has(W)) throw new Error("The correct answer must reference a supplied option.");
                    const ce = T(J.prompt || x.teacherPrompt, "teacher question", !0);
                    if (!Array.isArray(x.content) || !x.content.length || x.content.length > 60) throw new Error("Each step needs board content.");
                    const O = x.content.map((I) => {
                      if (!I || typeof I != "object") throw new Error("Invalid board content.");
                      switch (I.type) {
                        case "heading":
                        case "text":
                        case "note":
                          return { ...I, text: T(I.text, "board text", !0) };
                        case "equation":
                          return { ...I, visualText: T(I.visualText, "readable equation", !0), latex: T(I.latex, "equation") };
                        case "definition":
                          return { ...I, term: T(I.term, "term", !0), text: T(I.text, "definition", !0) };
                        case "theorem":
                          return { ...I, statement: T(I.statement, "theorem", !0) };
                        case "list":
                        case "proof": {
                          const H = I.type === "list" ? "items" : "lines";
                          if (!Array.isArray(I[H]) || !I[H].length) throw new Error("Invalid board list.");
                          return { ...I, [H]: I[H].map((ae) => T(ae, "list entry", !0)) };
                        }
                        case "matrix": {
                          const H = I.matrix?.rows;
                          if (!Array.isArray(H) || !H.length || H.length > 30 || !Array.isArray(H[0]) || !H[0].length || H[0].length > 30 || H.some((ae) => !Array.isArray(ae) || ae.length !== H[0].length || ae.some((Vs) => !["string", "number"].includes(typeof Vs)))) throw new Error("Invalid matrix.");
                          return I;
                        }
                        case "table":
                          if (!Array.isArray(I.headers) || !I.headers.length || !Array.isArray(I.rows) || I.rows.some((H) => !Array.isArray(H) || H.length !== I.headers.length)) throw new Error("Invalid table.");
                          return { ...I, headers: I.headers.map((H) => T(H, "table heading")), rows: I.rows.map((H) => H.map((ae) => T(ae, "table cell"))) };
                        case "graph": {
                          if (!Array.isArray(I.nodes) || !Array.isArray(I.edges)) throw new Error("Invalid graph.");
                          const H = /* @__PURE__ */ new Set();
                          for (const ae of I.nodes) {
                            if (!ae?.id || H.has(ae.id) || !Number.isFinite(ae.x) || !Number.isFinite(ae.y)) throw new Error("Invalid graph node.");
                            H.add(ae.id);
                          }
                          if (I.edges.some((ae) => !H.has(ae?.from) || !H.has(ae?.to))) throw new Error("Invalid graph edge.");
                          return I;
                        }
                        default:
                          throw new Error("Unsupported board content type.");
                      }
                    }), U = {
                      id: Y,
                      title: T(x.title, "step title", !0),
                      content: O,
                      teacherPrompt: ce,
                      teacherQuestion: { prompt: ce, options: K, correctValue: W, explanation: T(J.explanation, "answer explanation", !0) }
                    };
                    for (const I of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) U[I] = T(x[I], I);
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
                }, b = n.problem_ai_fallback?.candidates ? n.problem_ai_fallback : null, q = (b || n.problem_ai_call)?.candidates?.[0]?.content?.parts, C = Array.isArray(q) ? q.map((L) => typeof L?.text == "string" ? L.text : "").join("") : "";
                if (!C.trim() || C.length > 2e5) throw new Error("Invalid AI lesson response.");
                const _ = JSON.parse(C.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), V = d(_, n.problem_prepare.statement), S = { ...V, summary: typeof _.summary == "string" ? _.summary : "", answer: typeof _.answer == "string" ? _.answer : "", checks: Array.isArray(_.checks) ? _.checks.filter((L) => typeof L == "string") : [] }, k = !!b, P = k ? "gemini-3.7-flash" : "gemini-3.8-flash";
                return { solution: S, board: V, question: V.steps[0].teacherQuestion, text: [S.summary, V.steps.map((L, g) => g + 1 + ". " + L.title).join(`
`), S.answer, S.checks.join(`
`)].filter(Boolean).join(`

`), model: P, fallback: k, status: k ? "AI lesson prepared with Gemini 3.7 Flash fallback · review every step; mathematical correctness is not independently verified." : "AI lesson prepared with Gemini 3.8 Flash · review every step; mathematical correctness is not independently verified." };
              })();
              n.problem_ai_parse = p, e.customCodeResult = p;
            }
          } catch (c) {
            const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "problem_ai_parse" };
            return e.error = l, n.problem_ai_parse = { error: l }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
          }
          if (n.problem_prepare.canPersist) {
            try {
              {
                const l = Z({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "{{ stepResults.problem_ai_parse.model }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
                delete l.userIdentity;
                const u = [void 0, l.contextKey, l.versionNumber, l.hierarchy, l.locale, l.topicPath, l.topicId, l.statement, l.normalizedProblem, l.solutionMode, l.promptVersion, l.solution, l.provider, l.model, l.strategyId, l.strategyVersion, l.strategySnapshot], p = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
                let d;
                if (typeof p == "function")
                  d = await p({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters: u, namedParameters: l, signal: r.signal });
                else {
                  const b = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters: u, namedParameters: l }), signal: r.signal }), h = await b.json().catch(() => ({}));
                  if (!b.ok || h.success === !1) throw new Error(h.error || "Database query failed (" + b.status + ")");
                  d = h.data;
                }
                n.problem_store = d, e.queryResult = d;
              }
            } catch (c) {
              const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "problem_store" };
              return e.error = l, n.problem_store = { error: l }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
            }
            try {
              {
                const c = r.event, l = F, u = i, p = await (async () => {
                  const d = Array.isArray(n.problem_store) ? n.problem_store[0]?.result : null;
                  if (!d?.problemId) throw new Error("Lesson was not saved. Use an owned draft version.");
                  return d;
                })();
                n.stored_problem_check = p, e.customCodeResult = p;
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
      if ([429, 500, 502, 503, 504].includes(Number(error.status))) {
        try {
          {
            const t = { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }, a = Z({ model: "gemini-3.7-flash", prompt: "{{ stepResults.problem_ai_prompt }}" }, t) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(6e4) }), l = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
            const u = l.data;
            n.problem_ai_fallback = u, e.apiResult = u;
          }
        } catch (t) {
          const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_ai_fallback" };
          return e.error = a, n.problem_ai_fallback = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
        }
        try {
          {
            const t = r.event, a = F, c = i, l = await (async () => {
              const u = function(P, L = "") {
                if (!P || typeof P != "object" || Array.isArray(P)) throw new Error("A lesson object is required.");
                const g = (G, A, x = !1) => {
                  if (G != null && typeof G != "string") throw new Error(A + " must be text.");
                  const D = (G || "").trim();
                  if (x && !D || D.length > 16e3) throw new Error("Invalid " + A + ".");
                  return D;
                };
                if (!Array.isArray(P.steps) || !P.steps.length || P.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
                const z = /* @__PURE__ */ new Set(), T = P.steps.map((G, A) => {
                  if (!G || typeof G != "object" || Array.isArray(G)) throw new Error("Invalid lesson step.");
                  const x = g(G.id, "step ID") || "step-" + (A + 1);
                  if (z.has(x)) throw new Error("Step IDs must be unique.");
                  z.add(x);
                  const D = G.teacherQuestion;
                  if (!D || !Array.isArray(D.options) || D.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
                  const Y = /* @__PURE__ */ new Set(), J = D.options.map((O) => {
                    const U = g(O?.value, "option ID", !0);
                    if (Y.has(U)) throw new Error("Answer option IDs must be unique.");
                    return Y.add(U), { value: U, label: g(O?.label, "option label", !0) };
                  }), j = g(D.correctValue, "correct answer ID", !0);
                  if (!Y.has(j)) throw new Error("The correct answer must reference a supplied option.");
                  const K = g(D.prompt || G.teacherPrompt, "teacher question", !0);
                  if (!Array.isArray(G.content) || !G.content.length || G.content.length > 60) throw new Error("Each step needs board content.");
                  const W = G.content.map((O) => {
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
                        return { ...O, [U]: O[U].map((I) => g(I, "list entry", !0)) };
                      }
                      case "matrix": {
                        const U = O.matrix?.rows;
                        if (!Array.isArray(U) || !U.length || U.length > 30 || !Array.isArray(U[0]) || !U[0].length || U[0].length > 30 || U.some((I) => !Array.isArray(I) || I.length !== U[0].length || I.some((H) => !["string", "number"].includes(typeof H)))) throw new Error("Invalid matrix.");
                        return O;
                      }
                      case "table":
                        if (!Array.isArray(O.headers) || !O.headers.length || !Array.isArray(O.rows) || O.rows.some((U) => !Array.isArray(U) || U.length !== O.headers.length)) throw new Error("Invalid table.");
                        return { ...O, headers: O.headers.map((U) => g(U, "table heading")), rows: O.rows.map((U) => U.map((I) => g(I, "table cell"))) };
                      case "graph": {
                        if (!Array.isArray(O.nodes) || !Array.isArray(O.edges)) throw new Error("Invalid graph.");
                        const U = /* @__PURE__ */ new Set();
                        for (const I of O.nodes) {
                          if (!I?.id || U.has(I.id) || !Number.isFinite(I.x) || !Number.isFinite(I.y)) throw new Error("Invalid graph node.");
                          U.add(I.id);
                        }
                        if (O.edges.some((I) => !U.has(I?.from) || !U.has(I?.to))) throw new Error("Invalid graph edge.");
                        return O;
                      }
                      default:
                        throw new Error("Unsupported board content type.");
                    }
                  }), ce = {
                    id: x,
                    title: g(G.title, "step title", !0),
                    content: W,
                    teacherPrompt: K,
                    teacherQuestion: { prompt: K, options: J, correctValue: j, explanation: g(D.explanation, "answer explanation", !0) }
                  };
                  for (const O of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) ce[O] = g(G[O], O);
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
              }, p = n.problem_ai_fallback?.candidates ? n.problem_ai_fallback : null, b = (p || n.problem_ai_call)?.candidates?.[0]?.content?.parts, h = Array.isArray(b) ? b.map((k) => typeof k?.text == "string" ? k.text : "").join("") : "";
              if (!h.trim() || h.length > 2e5) throw new Error("Invalid AI lesson response.");
              const q = JSON.parse(h.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), C = u(q, n.problem_prepare.statement), _ = { ...C, summary: typeof q.summary == "string" ? q.summary : "", answer: typeof q.answer == "string" ? q.answer : "", checks: Array.isArray(q.checks) ? q.checks.filter((k) => typeof k == "string") : [] }, V = !!p, S = V ? "gemini-3.7-flash" : "gemini-3.8-flash";
              return { solution: _, board: C, question: C.steps[0].teacherQuestion, text: [_.summary, C.steps.map((k, P) => P + 1 + ". " + k.title).join(`
`), _.answer, _.checks.join(`
`)].filter(Boolean).join(`

`), model: S, fallback: V, status: V ? "AI lesson prepared with Gemini 3.7 Flash fallback · review every step; mathematical correctness is not independently verified." : "AI lesson prepared with Gemini 3.8 Flash · review every step; mathematical correctness is not independently verified." };
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
              const a = Z({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "{{ stepResults.problem_ai_parse.model }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
              delete a.userIdentity;
              const c = [void 0, a.contextKey, a.versionNumber, a.hierarchy, a.locale, a.topicPath, a.topicId, a.statement, a.normalizedProblem, a.solutionMode, a.promptVersion, a.solution, a.provider, a.model, a.strategyId, a.strategyVersion, a.strategySnapshot], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
              let u;
              if (typeof l == "function")
                u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: a, signal: r.signal });
              else {
                const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
                if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
                u = d.data;
              }
              n.problem_store = u, e.queryResult = u;
            }
          } catch (t) {
            const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "problem_store" };
            return e.error = a, n.problem_store = { error: a }, o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
          }
          try {
            {
              const t = r.event, a = F, c = i, l = await (async () => {
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
      } else
        return o("isResolvingProblem", !1), o("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review."), { ok: !1 };
    }
  }
  async function ur(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = Q.accessProfile && typeof Q.accessProfile == "object" ? Q.accessProfile : {}, a = Object.keys(t).length > 0, c = a ? t.authenticated === !0 || t.isAuthenticated === !0 || !!(t.uid || t.userId || t.id) : Q.authenticated === !0, l = a && Array.isArray(t.roles) ? t.roles.map(String) : [String(Q.userRole || "")], u = String(a ? t.verificationStatus || "pending" : Q.verificationStatus || "pending"), p = l.some((C) => ["professor", "educator", "admin", "institution_admin"].includes(C)), d = c && p && u === "approved";
        return { authenticated: c, roles: l, status: u, canUseStudio: d, title: c ? p ? u === "rejected" ? "Professor verification rejected" : "Professor approval required" : "Professor access required" : "Sign in required", message: c ? p ? u === "rejected" ? "Your professor verification was rejected. Contact your institution administrator." : "Your professor verification is pending. The studio will unlock after server-side approval." : "This workspace is available only to professors and institution administrators." : "Sign in and complete professor registration to use this studio.", badgeLabel: d ? "Verified professor" : u === "rejected" ? "Verification rejected" : "Verification pending" };
      })();
      e.prof_access_derive = n;
    }
    return o("canUseStudio", e.prof_access_derive.canUseStudio), await E({}), o("showAccessGate", !e.prof_access_derive.canUseStudio), o("accessGateTitle", e.prof_access_derive.title), o("accessGateMessage", e.prof_access_derive.message), o("accessBadgeLabel", e.prof_access_derive.badgeLabel), e.prof_access_derive;
  }
  async function hs(s = {}) {
    o("newProblemSolutionMode", (s || {}).value);
  }
  async function gs(s = {}) {
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
    o("contentPreviewPacket", {}), o("savedContextKey", ""), await E({}), o("savedProblemId", ""), await E({}), o("hasProblemSolution", !1), await E({}), o("selectedSyllabusId", r.value), await E({}), o("isOpeningSyllabus", !0), await E({});
    try {
      {
        const a = Z({ syllabusId: "{{ args.value }}", userIdentity: "" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.syllabusId], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarLoadProfessorSyllabus", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadProfessorSyllabus", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
          u = d.data;
        }
        n.saved_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_query" };
      return e.error = a, n.saved_syllabus_query = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await E({}), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          const p = (Array.isArray(n.saved_syllabus_query) ? n.saved_syllabus_query : [n.saved_syllabus_query])[0] || {}, d = p.result || p;
          if (!d || !d.id) throw new Error("The selected syllabus was not found.");
          const b = d.hierarchy && typeof d.hierarchy == "object" ? d.hierarchy : {}, h = (C, _ = []) => {
            if (!C || !C.id) return null;
            const V = [..._, String(C.id)];
            return { id: String(C.id), label: String(C.type || "item").replace(/^./, (S) => S.toUpperCase()) + " · " + String(C.title || ""), data: { type: String(C.type || ""), title: String(C.title || ""), path: V.join("/"), problems: Array.isArray(C.problems) ? C.problems : [] }, children: Array.isArray(C.children) ? C.children.map((S) => h(S, V)).filter(Boolean) : [] };
          }, q = h(b);
          return { ...d, hierarchy: b, items: q ? [q] : [], hasHierarchy: !!q };
        })();
        n.saved_syllabus_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "saved_syllabus_parse" };
      return e.error = a, n.saved_syllabus_parse = { error: a }, o("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus."), o("isOpeningSyllabus", !1), await E({}), { ok: !1 };
    }
    return o("savedSyllabusKey", n.saved_syllabus_parse.key), await E({}), o("savedSyllabusVersion", n.saved_syllabus_parse.versionNumber), await E({}), o("savedContextKey", n.saved_syllabus_parse.contextKey), await E({}), o("savedProblemId", ""), await E({}), o("hasProblemSolution", !1), await E({}), o("syllabusTitle", n.saved_syllabus_parse.title), o("syllabusDescription", n.saved_syllabus_parse.description), o("syllabusDraftText", n.saved_syllabus_parse.syllabusText), o("finalHierarchy", n.saved_syllabus_parse.hierarchy), o("hierarchyItems", n.saved_syllabus_parse.items), o("syllabusStatus", "Loaded " + n.saved_syllabus_parse.title + " · " + n.saved_syllabus_parse.status), o("showSyllabusSetup", !n.saved_syllabus_parse.hasHierarchy), o("isSyllabusSetupCollapsed", n.saved_syllabus_parse.hasHierarchy), o("isOpeningSyllabus", !1), await E({}), n.saved_syllabus_parse;
  }
  async function dr(s = {}) {
    o("syllabusDraftText", Q.syllabusText || "");
  }
  async function fs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = String(i.newProblemText || "").trim();
        if (!t) throw new Error("Enter a problem statement.");
        if (!i.selectedTopicId) throw new Error("Select a Topic first.");
        const a = Array.isArray(i.selectedTopicProblems) ? i.selectedTopicProblems.map(String) : [], c = [.../* @__PURE__ */ new Set([...a, t])], l = c.map((u, p) => ({ id: i.selectedTopicId + "-problem-" + (p + 1), label: p + 1 + ". " + u, data: { type: "problem", topicId: i.selectedTopicId, text: u } }));
        return { text: t, problems: c, items: l };
      })();
      e.new_problem_prepare_item = n;
    }
    return o("selectedTopicProblems", e.new_problem_prepare_item.problems), o("selectedTopicProblemItems", e.new_problem_prepare_item.items), o("selectedProblemStatement", e.new_problem_prepare_item.text), o("showNewProblemForm", !1), await ke({ solutionMode: i.newProblemSolutionMode, statement: e.new_problem_prepare_item.text }), o("newProblemText", ""), e.new_problem_resolve;
  }
  async function Ss(s = {}) {
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
  async function vs(s = {}) {
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
        const t = r.event, a = F, c = i, l = await (async () => {
          function u(d, b = "") {
            if (!d || typeof d != "object" || Array.isArray(d)) throw new Error("A lesson object is required.");
            const h = (_, V, S = !1) => {
              if (_ != null && typeof _ != "string") throw new Error(V + " must be text.");
              const k = (_ || "").trim();
              if (S && !k || k.length > 16e3) throw new Error("Invalid " + V + ".");
              return k;
            };
            if (!Array.isArray(d.steps) || !d.steps.length || d.steps.length > 80) throw new Error("A lesson needs 1–80 steps.");
            const q = /* @__PURE__ */ new Set(), C = d.steps.map((_, V) => {
              if (!_ || typeof _ != "object" || Array.isArray(_)) throw new Error("Invalid lesson step.");
              const S = h(_.id, "step ID") || "step-" + (V + 1);
              if (q.has(S)) throw new Error("Step IDs must be unique.");
              q.add(S);
              const k = _.teacherQuestion;
              if (!k || !Array.isArray(k.options) || k.options.length !== 4) throw new Error("Every teacher check needs exactly four choices.");
              const P = /* @__PURE__ */ new Set(), L = k.options.map((A) => {
                const x = h(A?.value, "option ID", !0);
                if (P.has(x)) throw new Error("Answer option IDs must be unique.");
                return P.add(x), { value: x, label: h(A?.label, "option label", !0) };
              }), g = h(k.correctValue, "correct answer ID", !0);
              if (!P.has(g)) throw new Error("The correct answer must reference a supplied option.");
              const z = h(k.prompt || _.teacherPrompt, "teacher question", !0);
              if (!Array.isArray(_.content) || !_.content.length || _.content.length > 60) throw new Error("Each step needs board content.");
              const T = _.content.map((A) => {
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
                    const x = A.type === "list" ? "items" : "lines";
                    if (!Array.isArray(A[x]) || !A[x].length) throw new Error("Invalid board list.");
                    return { ...A, [x]: A[x].map((D) => h(D, "list entry", !0)) };
                  }
                  case "matrix": {
                    const x = A.matrix?.rows;
                    if (!Array.isArray(x) || !x.length || x.length > 30 || !Array.isArray(x[0]) || !x[0].length || x[0].length > 30 || x.some((D) => !Array.isArray(D) || D.length !== x[0].length || D.some((Y) => !["string", "number"].includes(typeof Y)))) throw new Error("Invalid matrix.");
                    return A;
                  }
                  case "table":
                    if (!Array.isArray(A.headers) || !A.headers.length || !Array.isArray(A.rows) || A.rows.some((x) => !Array.isArray(x) || x.length !== A.headers.length)) throw new Error("Invalid table.");
                    return { ...A, headers: A.headers.map((x) => h(x, "table heading")), rows: A.rows.map((x) => x.map((D) => h(D, "table cell"))) };
                  case "graph": {
                    if (!Array.isArray(A.nodes) || !Array.isArray(A.edges)) throw new Error("Invalid graph.");
                    const x = /* @__PURE__ */ new Set();
                    for (const D of A.nodes) {
                      if (!D?.id || x.has(D.id) || !Number.isFinite(D.x) || !Number.isFinite(D.y)) throw new Error("Invalid graph node.");
                      x.add(D.id);
                    }
                    if (A.edges.some((D) => !x.has(D?.from) || !x.has(D?.to))) throw new Error("Invalid graph edge.");
                    return A;
                  }
                  default:
                    throw new Error("Unsupported board content type.");
                }
              }), G = {
                id: S,
                title: h(_.title, "step title", !0),
                content: T,
                teacherPrompt: z,
                teacherQuestion: { prompt: z, options: L, correctValue: g, explanation: h(k.explanation, "answer explanation", !0) }
              };
              for (const A of ["narration", "explanation", "simpleExplanation", "visualExplanation", "why", "commonMistake"]) G[A] = h(_[A], A);
              return G;
            });
            return {
              title: h(d.title, "lesson title", !0),
              lessonKind: "worked-example",
              problemLabel: h(d.problemLabel, "problem label") || "Problem",
              problemStatement: h(d.problemStatement || b, "problem statement", !0),
              learningGoal: h(d.learningGoal, "learning goal"),
              steps: C,
              verification: { status: "unverified", message: "AI-generated teaching content. Mathematical correctness has not been independently verified." }
            };
          }
          function p(d) {
            if (!d || typeof d != "object" || Array.isArray(d) || !Object.keys(d).length) return { enabled: !1, valid: !1 };
            if (JSON.stringify(d).length > 25e4) throw new Error("Preview is too large.");
            if (d.schemaVersion !== 1) throw new Error("Unsupported preview schema.");
            const b = u(d.lesson, d.problem?.statement), h = d.context || {}, q = (C) => typeof C == "string" ? C.trim().slice(0, 500) : "";
            if (!q(h.syllabusId) || !q(h.contextKey) || !q(d.problem?.id)) throw new Error("Preview needs saved syllabus, context, and problem IDs.");
            return {
              enabled: !0,
              valid: !0,
              schemaVersion: 1,
              context: { syllabusId: q(h.syllabusId), contextKey: q(h.contextKey), versionNumber: Math.max(1, Math.floor(Number(h.versionNumber) || 1)), locale: ["en", "hi", "ta"].includes(h.locale) ? h.locale : "en", topicPath: q(h.topicPath) },
              problem: { id: q(d.problem.id), statement: b.problemStatement, solutionMode: d.problem.solutionMode === "quick" ? "quick" : "detailed" },
              lesson: b,
              boardSteps: b.steps.map(({ teacherQuestion: C, teacherPrompt: _, ...V }) => V),
              message: "Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified."
            };
          }
          if (!i.canUseStudio || !i.hasProblemSolution || !i.savedProblemId) throw new Error("Save and resolve a problem first.");
          return p({ schemaVersion: 1, context: { syllabusId: i.selectedSyllabusId, contextKey: i.savedContextKey, versionNumber: i.savedSyllabusVersion, locale: Q.locale, topicPath: i.selectedTopicPath }, problem: { id: i.savedProblemId, statement: i.blackboardLesson.problemStatement, solutionMode: i.newProblemSolutionMode }, lesson: i.blackboardLesson });
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
  async function ws(s = {}) {
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
    o("contentPreviewPacket", {}), o("savedSyllabusVersion", Math.max(1, Number(i.savedSyllabusVersion || Q.contextVersionNumber || 1)) + 1), await E({}), o("selectedSyllabusId", ""), await E({}), o("savedContextKey", ""), await E({}), o("savedProblemId", ""), await E({}), o("hasProblemSolution", !1), await E({}), o("syllabusStatus", "New version prepared. Save it before resolving or previewing lessons.");
  }
  async function _s(s = {}) {
    o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0);
  }
  async function xs(s = {}) {
    o("showNewProblemForm", !0), o("newProblemText", ""), o("problemResolutionStatus", "The database will be checked before AI is used.");
  }
  async function Ps(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isSavingStrategy", !0), await E({});
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          if (!i.selectedSyllabusId || !i.savedContextKey) throw new Error("Save this syllabus first so its lessons have a stable course identity.");
          if (!i.selectedTopicId) throw new Error("Select a Topic before approving a strategy.");
          const u = i.finalHierarchy && i.finalHierarchy.id ? String(i.finalHierarchy.id) : "context";
          return { contextKey: String(i.savedContextKey), versionNumber: Number(i.savedSyllabusVersion), locale: String(Q.locale || "en"), scopePath: String(i.selectedTopicPath || i.selectedTopicId), scopeType: "topic", title: String(i.selectedTopicTitle || "Topic") + " teaching strategy", strategy: i.strategyDraft };
        })();
        n.context_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_prepare" };
      return e.error = a, n.context_prepare = { error: a }, o("isSavingStrategy", !1), await E({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const a = Z({ contextKey: "{{ stepResults.context_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.context_prepare.locale }}", scopePath: "{{ stepResults.context_prepare.scopePath }}", scopeType: "{{ stepResults.context_prepare.scopeType }}", strategy: "{{ stepResults.context_prepare.strategy }}", title: "{{ stepResults.context_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.context_prepare.versionNumber }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.hierarchy, a.locale, a.scopePath, a.scopeType, a.title, a.strategy], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveContextStrategy", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveContextStrategy", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
          u = d.data;
        }
        n.context_save_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_query" };
      return e.error = a, n.context_save_query = { error: a }, o("isSavingStrategy", !1), await E({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = Array.isArray(n.context_save_query) ? n.context_save_query : [], p = u[0], d = p && typeof p == "object" ? p.result || p : {};
          if (!d.strategyId) throw new Error("Strategy was not saved. Use an owned draft version.");
          return { id: String(d.strategyId || ""), version: Number(d.strategyVersion || 0), strategy: d.strategy || n.context_prepare.strategy };
        })();
        n.context_save_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_save_parse" };
      return e.error = a, n.context_save_parse = { error: a }, o("isSavingStrategy", !1), await E({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    o("resolvedStrategyId", n.context_save_parse.id), o("resolvedStrategyVersion", n.context_save_parse.version), o("resolvedStrategy", n.context_save_parse.strategy), o("strategyStatus", "Approved strategy v" + n.context_save_parse.version + " saved for " + i.selectedTopicTitle + "."), o("structureStatus", "Selected hierarchy and teaching strategy are now the active context."), o("isSavingStrategy", !1), await E({});
    try {
      await ie("contextSetRequested", { hierarchy: i.finalHierarchy, languageCode: Q.locale, scopePath: i.selectedTopicPath, selectedTopicId: i.selectedTopicId, strategy: n.context_save_parse.strategy, strategyId: n.context_save_parse.id, strategyVersion: n.context_save_parse.version }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "context_emit" };
      return e.error = a, n.context_emit = { error: a }, o("isSavingStrategy", !1), await E({}), o("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing."), { ok: !1 };
    }
    return { hierarchy: i.finalHierarchy, scopePath: i.selectedTopicPath, strategy: n.context_save_parse.strategy, strategyId: n.context_save_parse.id, strategyVersion: n.context_save_parse.version };
  }
  async function Ts(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => (function(p, d) {
          const b = structuredClone(d.strategyDraft || {}), h = Array.isArray(d.blackboardLesson?.steps) ? d.blackboardLesson.steps : [], q = p.stepId ? h.find((S) => S.id === p.stepId) : h[Number(d.activeStep || 0)];
          if (!q?.id || !String(q.title || "").trim()) throw new Error("Select a real lesson step before editing the strategy.");
          const C = String(p.operation || "keep");
          if (!["keep", "remove", "annotate"].includes(C)) throw new Error("Unsupported strategy edit.");
          const _ = String(q.title).trim();
          for (const S of ["requiredSteps", "forbiddenShortcuts", "teachingNotes"]) b[S] = Array.isArray(b[S]) ? b[S].map(String) : [];
          if (C === "keep" && !b.requiredSteps.includes(_) && b.requiredSteps.push(_), C === "remove") {
            b.requiredSteps = b.requiredSteps.filter((k) => k !== _);
            const S = "Avoid this step when it is unnecessary: " + _;
            b.forbiddenShortcuts.includes(S) || b.forbiddenShortcuts.push(S);
          }
          if (C === "annotate") {
            const S = String(p.note || "").trim();
            if (!S || S.length > 2e3) throw new Error("Provide a teaching note of 1–2000 characters.");
            const k = _ + ": " + S;
            b.teachingNotes.includes(k) || b.teachingNotes.push(k);
          }
          const V = [
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
          return { draft: b, text: V, operation: C, step: _, stepId: q.id };
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
  async function As(s = {}) {
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
    o("isGeneratingStructure", !0), await E({}), o("structureStatus", "Generating a multilevel hierarchy with Gemini…");
    try {
      await ie("aiStructureRequested", { languageCode: Q.locale, sourceText: i.syllabusDraftText }, !0);
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_emit" };
      return e.error = a, n.structure_emit = { error: a }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = String(i.syllabusDraftText || "").trim();
          if (!u) throw new Error("Paste a syllabus before proposing a hierarchy.");
          return ["You are an academic curriculum architect.", "Return JSON only with Programme > Semester > Subject > Unit > Topic hierarchy.", "Every topic must contain a problems array with 2 to 4 representative college-level mathematics problems.", 'Shape: {"hierarchy":{"id":"...","type":"programme","title":"...","children":[{"id":"...","type":"semester","title":"...","children":[{"id":"...","type":"subject","title":"...","children":[{"id":"...","type":"unit","title":"...","children":[{"id":"...","type":"topic","title":"...","problems":["..."],"children":[]}]}]}]}]}}.', "Use stable lowercase-hyphen IDs.", "Detect the language of the supplied syllabus and keep every human-readable hierarchy title and representative problem in that same source language. Do not mix languages. Keep JSON keys and mathematical notation unchanged.", "Syllabus:", u].join(`
`);
        })();
        n.structure_prompt = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_prompt" };
      return e.error = a, n.structure_prompt = { error: a }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    try {
      {
        const t = { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }, a = Z({ model: "gemini-3.8-flash", prompt: "{{ stepResults.structure_prompt }}" }, t) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(6e4) }), l = await c.json().catch(() => ({}));
        if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
        const u = l.data;
        n.structure_api = u, e.apiResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_api" };
      if (e.error = a, n.structure_api = { error: a }, [429, 500, 502, 503, 504].includes(Number(a.status))) {
        try {
          {
            const c = { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }, l = Z({ model: "gemini-3.7-flash", prompt: "{{ stepResults.structure_prompt }}" }, c) || {}, u = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: l, context: c }), signal: r.signal || AbortSignal.timeout(6e4) }), p = await u.json().catch(() => ({}));
            if (!u.ok) throw new Error(p.error || "Protected API request failed (" + u.status + ")");
            const d = p.data;
            n.structure_api_fallback = d, e.apiResult = d;
          }
        } catch (c) {
          const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "structure_api_fallback" };
          return e.error = l, n.structure_api_fallback = { error: l }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
        }
        try {
          {
            const c = r.event, l = F, u = i, p = await (async () => {
              const d = !!n.structure_api_fallback?.candidates, b = d ? n.structure_api_fallback : n.structure_api || {}, h = b?.candidates?.[0]?.content?.parts, q = Array.isArray(h) ? h.map((g) => String(g?.text || "")).join("") : "";
              if (!q.trim()) throw new Error("Gemini returned no curriculum structure.");
              const C = JSON.parse(q.trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "")), _ = ["programme", "semester", "subject", "unit", "topic"], V = (g, z) => String(g || z).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || z, S = (g, z = 0, T = "item") => {
                if (!g || typeof g != "object" || z > 4) return null;
                const G = String(g.title || "").trim().slice(0, 180);
                if (!G) return null;
                const A = _[Math.min(z, 4)], x = Array.isArray(g.children) ? g.children.slice(0, 16).map((Y, J) => S(Y, z + 1, A + "-" + J)).filter(Boolean) : [], D = A === "topic" && Array.isArray(g.problems) ? g.problems.map(String).map((Y) => Y.trim()).filter(Boolean).slice(0, 8) : [];
                return { id: V(g.id || G, T), type: A, title: G, children: x, ...A === "topic" ? { problems: D.length ? D : ["Create a worked example for " + G + ".", "Add one conceptual verification question for " + G + ".", "Add one examination-style application problem for " + G + "."] } : {} };
              }, k = S(C.hierarchy || C, 0, "programme");
              if (!k) throw new Error("Gemini returned an invalid hierarchy.");
              const P = (g, z = []) => {
                const T = [...z, g.id];
                return { id: g.id, label: g.type[0].toUpperCase() + g.type.slice(1) + " · " + g.title, data: { type: g.type, title: g.title, path: T.join("/"), problems: g.problems || [] }, children: g.children.map((G) => P(G, T)) };
              }, L = d ? "gemini-3.7-flash" : "gemini-3.8-flash";
              return { hierarchy: k, items: [P(k)], model: L, fallback: d, status: d ? "Hierarchy ready using Gemini 3.7 Flash fallback. Select a Topic to view its problems." : "Hierarchy ready using Gemini 3.8 Flash. Select a Topic to view its problems." };
            })();
            n.structure_parse = p, e.customCodeResult = p;
          }
        } catch (c) {
          const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "structure_parse" };
          return e.error = l, n.structure_parse = { error: l }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
        }
        o("finalHierarchy", n.structure_parse.hierarchy), o("hierarchyItems", n.structure_parse.items), o("selectedHierarchyIds", []), o("hasSelectedTopic", !1), o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0), o("isGeneratingStructure", !1), await E({}), o("structureStatus", n.structure_parse.status);
        try {
          await ie("aiStructureGenerated", { hierarchy: n.structure_parse.hierarchy, languageCode: Q.locale }, !0);
        } catch (c) {
          const l = { message: c instanceof Error ? c.message : String(c), name: c instanceof Error ? c.name : "Error", status: typeof c?.status == "number" ? c.status : void 0, stepId: "structure_generated" };
          return e.error = l, n.structure_generated = { error: l }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
        }
        return n.structure_parse;
      } else
        return o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
    }
    if ([429, 500, 502, 503, 504].includes(Number(error.status))) {
      try {
        {
          const t = { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }, a = Z({ model: "gemini-3.7-flash", prompt: "{{ stepResults.structure_prompt }}" }, t) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: a, context: t }), signal: r.signal || AbortSignal.timeout(6e4) }), l = await c.json().catch(() => ({}));
          if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
          const u = l.data;
          n.structure_api_fallback = u, e.apiResult = u;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_api_fallback" };
        return e.error = a, n.structure_api_fallback = { error: a }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
      }
      try {
        {
          const t = r.event, a = F, c = i, l = await (async () => {
            const u = !!n.structure_api_fallback?.candidates, p = u ? n.structure_api_fallback : n.structure_api || {}, d = p?.candidates?.[0]?.content?.parts, b = Array.isArray(d) ? d.map((P) => String(P?.text || "")).join("") : "";
            if (!b.trim()) throw new Error("Gemini returned no curriculum structure.");
            const h = JSON.parse(b.trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "")), q = ["programme", "semester", "subject", "unit", "topic"], C = (P, L) => String(P || L).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || L, _ = (P, L = 0, g = "item") => {
              if (!P || typeof P != "object" || L > 4) return null;
              const z = String(P.title || "").trim().slice(0, 180);
              if (!z) return null;
              const T = q[Math.min(L, 4)], G = Array.isArray(P.children) ? P.children.slice(0, 16).map((x, D) => _(x, L + 1, T + "-" + D)).filter(Boolean) : [], A = T === "topic" && Array.isArray(P.problems) ? P.problems.map(String).map((x) => x.trim()).filter(Boolean).slice(0, 8) : [];
              return { id: C(P.id || z, g), type: T, title: z, children: G, ...T === "topic" ? { problems: A.length ? A : ["Create a worked example for " + z + ".", "Add one conceptual verification question for " + z + ".", "Add one examination-style application problem for " + z + "."] } : {} };
            }, V = _(h.hierarchy || h, 0, "programme");
            if (!V) throw new Error("Gemini returned an invalid hierarchy.");
            const S = (P, L = []) => {
              const g = [...L, P.id];
              return { id: P.id, label: P.type[0].toUpperCase() + P.type.slice(1) + " · " + P.title, data: { type: P.type, title: P.title, path: g.join("/"), problems: P.problems || [] }, children: P.children.map((z) => S(z, g)) };
            }, k = u ? "gemini-3.7-flash" : "gemini-3.8-flash";
            return { hierarchy: V, items: [S(V)], model: k, fallback: u, status: u ? "Hierarchy ready using Gemini 3.7 Flash fallback. Select a Topic to view its problems." : "Hierarchy ready using Gemini 3.8 Flash. Select a Topic to view its problems." };
          })();
          n.structure_parse = l, e.customCodeResult = l;
        }
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_parse" };
        return e.error = a, n.structure_parse = { error: a }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
      }
      o("finalHierarchy", n.structure_parse.hierarchy), o("hierarchyItems", n.structure_parse.items), o("selectedHierarchyIds", []), o("hasSelectedTopic", !1), o("showSyllabusSetup", !1), o("isSyllabusSetupCollapsed", !0), o("isGeneratingStructure", !1), await E({}), o("structureStatus", n.structure_parse.status);
      try {
        await ie("aiStructureGenerated", { hierarchy: n.structure_parse.hierarchy, languageCode: Q.locale }, !0);
      } catch (t) {
        const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "structure_generated" };
        return e.error = a, n.structure_generated = { error: a }, o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
      }
      return n.structure_parse;
    } else
      return o("isGeneratingStructure", !1), await E({}), o("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept."), { ok: !1 };
  }
  async function Is(s = {}) {
    o("syllabusDescription", (s || {}).value);
  }
  async function Es(s = {}) {
    o("newProblemText", (s || {}).value);
  }
  async function qs(s = {}) {
    o("syllabusDraftText", (s || {}).value || "");
  }
  async function Cs(s = {}) {
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
  async function je(s = {}) {
    const r = s || {}, e = {}, n = {};
    o("isLoadingSyllabi", !0), await E({});
    try {
      {
        const a = Z({ userIdentity: "" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListProfessorSyllabi", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListProfessorSyllabi", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
          u = d.data;
        }
        n.syllabi_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_query" };
      return e.error = a, n.syllabi_query = { error: a }, o("isLoadingSyllabi", !1), await E({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => (Array.isArray(n.syllabi_query) ? n.syllabi_query : []).map((p) => ({ label: String(p.label || p.title || "Untitled syllabus"), value: String(p.value || p.id || "") })).filter((p) => p.value))();
        n.syllabi_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "syllabi_parse" };
      return e.error = a, n.syllabi_parse = { error: a }, o("isLoadingSyllabi", !1), await E({}), o("syllabusStatus", "Saved syllabi could not be loaded. Please retry."), { ok: !1 };
    }
    return o("savedSyllabusOptions", n.syllabi_parse), o("isLoadingSyllabi", !1), await E({}), n.syllabi_parse;
  }
  async function Rs(s = {}) {
    o("syllabusTitle", (s || {}).value);
  }
  async function E(s = {}) {
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
  async function De(s = {}) {
    const r = {};
    return await ur({}), await dr({}), r.scenario_access;
  }
  async function mr(s = {}) {
    const r = s || {}, e = {}, n = {};
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
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
        const a = Z({ contextKey: "{{ stepResults.load_strategy_context.contextKey }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.load_strategy_context.versionNumber }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.contextKey, a.versionNumber, a.topicPath], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
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
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = Array.isArray(n.load_strategy_query) ? n.load_strategy_query : [], p = u[0], d = p && typeof p == "object" ? p.result || p : null, b = d && d.strategy ? d.strategy : i.strategyDraft, h = d ? Number(d.strategyVersion || 0) : 0, q = d ? String(d.strategyId || "") : "", C = Array.isArray(b.requiredSteps) ? b.requiredSteps : [], _ = Array.isArray(b.forbiddenShortcuts) ? b.forbiddenShortcuts : [], V = Array.isArray(b.verificationRules) ? b.verificationRules : [], S = Array.isArray(b.teachingNotes) ? b.teachingNotes : [], k = [`Preferred method
` + String(b.preferredMethod || "Professor-guided method")];
          return C.length && k.push(`Required steps
` + C.map((P, L) => L + 1 + ". " + P).join(`
`)), _.length && k.push(`Avoid
` + _.map((P) => "• " + P).join(`
`)), V.length && k.push(`Verification
` + V.map((P) => "• " + P).join(`
`)), S.length && k.push(`Teaching notes
` + S.map((P) => "• " + P).join(`
`)), { strategy: b, version: h, id: q, text: k.join(`

`), status: d ? "Approved strategy v" + h + " loaded for " + r.topicTitle + "." : "No approved strategy yet. Refine the example and approve this draft." };
        })();
        n.load_strategy_parse = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "load_strategy_parse" };
      return e.error = a, n.load_strategy_parse = { error: a }, o("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes."), { ok: !1 };
    }
    return o("strategyDraft", n.load_strategy_parse.strategy), o("strategyDraftText", n.load_strategy_parse.text), o("resolvedStrategy", n.load_strategy_parse.strategy), o("resolvedStrategyId", n.load_strategy_parse.id), o("resolvedStrategyVersion", n.load_strategy_parse.version), o("strategyStatus", n.load_strategy_parse.status), n.load_strategy_parse;
  }
  async function Ns(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {};
        return { id: String(t.id || ""), text: String(a.text || t.label || "") };
      })();
      e.problem_select_read = n;
    }
    return o("selectedProblemIds", [e.problem_select_read.id]), o("selectedProblemText", e.problem_select_read.text), o("selectedProblemStatement", e.problem_select_read.text), await ke({ solutionMode: "detailed", statement: e.problem_select_read.text }), e.problem_select_resolve;
  }
  async function ks(s = {}) {
    o("showSyllabusSetup", !0), o("isSyllabusSetupCollapsed", !1);
  }
  async function js(s = {}) {
    o("showNewProblemForm", !1), o("newProblemText", "");
  }
  async function Ds(s = {}) {
    await ie("lessonShareRequested", { expiresInHours: 168, visibility: "unlisted" }, !0);
  }
  async function Ls(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = r.item && typeof r.item == "object" ? r.item : {}, a = t.data && typeof t.data == "object" ? t.data : {}, c = a.type === "topic", l = c && Array.isArray(a.problems) ? a.problems.map(String) : [], u = l.map((p, d) => ({ id: String(t.id || "topic") + "-problem-" + (d + 1), label: d + 1 + ". " + p, data: { type: "problem", topicId: String(t.id || ""), text: p } }));
        return { id: String(t.id || ""), topic: c, title: String(a.title || t.label || ""), path: String(a.path || t.id || ""), problems: l, problemItems: u, text: l.map((p, d) => d + 1 + ". " + p).join(`
`) };
      })();
      e.select_node = n;
    }
    return o("selectedHierarchyIds", [e.select_node.id]), o("hasSelectedTopic", e.select_node.topic), o("selectedTopicId", e.select_node.topic ? e.select_node.id : ""), o("selectedTopicPath", e.select_node.path), o("hasProblemSolution", !1), await E({}), o("selectedTopicTitle", e.select_node.title), o("selectedTopicHeading", e.select_node.topic ? "Problems for " + e.select_node.title : "Select a Topic to view problems"), o("selectedTopicProblems", e.select_node.problems), o("selectedTopicProblemItems", e.select_node.problemItems), o("selectedProblemIds", []), o("selectedProblemText", ""), o("selectedTopicProblemsText", e.select_node.text), o("structureStatus", e.select_node.topic ? "Topic selected. Add problems or set the hierarchy as context." : "Select a Topic node to view its problems."), e.select_node.topic && (await cr({ fallbackProblems: e.select_node.problems, topicId: e.select_node.id, topicPath: e.select_node.path }), await mr({ topicPath: e.select_node.path, topicTitle: e.select_node.title })), e.select_node;
  }
  async function Os(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => (function(a, c) {
        const l = Array.isArray(c.studentLesson?.steps) ? c.studentLesson.steps : [], u = a.event ?? a.stepIndex ?? a.index ?? 0, p = Number(typeof u == "object" ? u?.nextIndex ?? u?.index : u), d = Math.max(0, Math.min(Math.max(0, l.length - 1), Number.isFinite(p) ? Math.floor(p) : 0)), b = l[d]?.teacherQuestion || {}, h = Number(c.progressPercent), q = Math.max(Number.isFinite(h) ? Math.min(100, Math.max(0, h)) : 0, l.length ? Math.round((d + 1) / l.length * 100) : 0);
        return { index: d, stepId: String(l[d]?.id || ""), prompt: String(b.prompt || ""), options: Array.isArray(b.options) ? b.options : [], correctValue: String(b.correctValue || ""), explanation: String(b.explanation || ""), progress: q, completed: q === 100 };
      })(r, { studentLesson: i.blackboardLesson, progressPercent: 0 }))();
      e.teacher_step_read = n;
    }
    o("activeStep", e.teacher_step_read.index), o("teacherQuestionPrompt", e.teacher_step_read.prompt), o("teacherQuestionOptions", e.teacher_step_read.options), o("teacherQuestionCorrectValue", e.teacher_step_read.correctValue), o("teacherQuestionExplanation", e.teacher_step_read.explanation), o("selectedTeacherAnswer", ""), o("teacherAnswerFeedback", "");
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
        const t = r.event, a = F, c = i, l = await (async () => (function(p, d, b) {
          if (!b.canUseStudio) throw new Error("Verified educator access is required.");
          const h = String(b.syllabusTitle || "").trim(), q = String(b.syllabusDraftText || "").trim();
          if (!h || h.length > 180 || !q || q.length > 1e5) throw new Error("Provide a title and syllabus text within the supported limits.");
          const C = b.finalHierarchy, _ = [], V = /* @__PURE__ */ new Set();
          let S = 0;
          const k = (T, G = [], A = 0) => {
            if (!T || typeof T != "object" || A > 4 || ++S > 500 || !/^[a-z0-9][a-z0-9-]{0,79}$/.test(T.id || "") || !String(T.title || "").trim()) throw new Error("Generate a valid hierarchy before saving.");
            const x = [...G, T.id], D = x.join("/");
            if (V.has(D)) throw new Error("Hierarchy paths must be unique.");
            if (V.add(D), T.type === "topic") for (const Y of Array.isArray(T.problems) ? T.problems : []) {
              const J = String(Y || "").trim();
              if (!J || J.length > 16e3) throw new Error("Invalid topic problem.");
              _.push({ topicId: T.id, topicPath: D, statement: J, normalized: J.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim() });
            }
            for (const Y of Array.isArray(T.children) ? T.children : []) k(Y, x, A + 1);
          };
          if (k(C), _.length > 500) throw new Error("A course can contain at most 500 topic problems.");
          let P = 2166136261;
          for (const T of h.normalize("NFKC")) P = Math.imul(P ^ T.codePointAt(0), 16777619) >>> 0;
          const L = String(b.savedSyllabusKey || "course-" + P.toString(36)), g = Number(b.savedSyllabusVersion || d.contextVersionNumber || 1);
          if (!Number.isInteger(g) || g < 1 || g > 1e5) throw new Error("Invalid course version.");
          const z = p.status === "published" ? "published" : "draft";
          return { title: h, text: q, syllabusKey: L, versionNumber: g, description: String(b.syllabusDescription || "").trim(), languageCode: ["en", "hi", "ta"].includes(d.locale) ? d.locale : "en", hierarchy: C, problems: _, status: z, visibility: z === "published" ? "public" : "private" };
        })(r, Q, i))();
        n.save_syllabus_prepare = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_prepare" };
      return e.error = a, n.save_syllabus_prepare = { error: a }, o("isSavingSyllabus", !1), await E({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("isSavingSyllabus", !0), await E({});
    try {
      {
        const a = Z({ description: "{{ stepResults.save_syllabus_prepare.description }}", hierarchy: "{{ stepResults.save_syllabus_prepare.hierarchy }}", languageCode: "{{ stepResults.save_syllabus_prepare.languageCode }}", problems: "{{ stepResults.save_syllabus_prepare.problems }}", status: "{{ stepResults.save_syllabus_prepare.status }}", syllabusKey: "{{ stepResults.save_syllabus_prepare.syllabusKey }}", syllabusText: "{{ stepResults.save_syllabus_prepare.text }}", title: "{{ stepResults.save_syllabus_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.save_syllabus_prepare.versionNumber }}", visibility: "{{ stepResults.save_syllabus_prepare.visibility }}" }, { args: r, inputs: Q, state: i, sharedState: te, applicationState: re, pageState: se, pageData: F, serverData: M, vars: e, stepResults: n }) || {};
        delete a.userIdentity;
        const c = [void 0, a.syllabusKey, a.versionNumber, a.title, a.description, a.languageCode, a.syllabusText, a.hierarchy, a.status, a.visibility, a.problems], l = m.executeDatabaseQuery || m.runtime?.executeDatabaseQuery;
        let u;
        if (typeof l == "function")
          u = await l({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveProfessorSyllabus", parameters: c, namedParameters: a, signal: r.signal });
        else {
          const p = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveProfessorSyllabus", parameters: c, namedParameters: a }), signal: r.signal }), d = await p.json().catch(() => ({}));
          if (!p.ok || d.success === !1) throw new Error(d.error || "Database query failed (" + p.status + ")");
          u = d.data;
        }
        n.save_syllabus_query = u, e.queryResult = u;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_query" };
      return e.error = a, n.save_syllabus_query = { error: a }, o("isSavingSyllabus", !1), await E({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    try {
      {
        const t = r.event, a = F, c = i, l = await (async () => {
          const u = n.save_syllabus_query, p = Array.isArray(u) ? u[0]?.result : null;
          if (!p?.id || !p.contextKey) throw new Error("The version is immutable or could not be saved. Start a new version.");
          return p;
        })();
        n.save_syllabus_result = l, e.customCodeResult = l;
      }
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_result" };
      return e.error = a, n.save_syllabus_result = { error: a }, o("isSavingSyllabus", !1), await E({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    o("selectedSyllabusId", n.save_syllabus_result.id), await E({}), o("savedSyllabusKey", n.save_syllabus_result.key), await E({}), o("savedSyllabusVersion", n.save_syllabus_result.versionNumber), await E({}), o("savedContextKey", n.save_syllabus_result.contextKey), await E({}), o("syllabusStatus", n.save_syllabus_prepare.status === "published" ? "Published for students under this professor." : "Syllabus draft saved.");
    try {
      await je({});
    } catch (t) {
      const a = { message: t instanceof Error ? t.message : String(t), name: t instanceof Error ? t.name : "Error", status: typeof t?.status == "number" ? t.status : void 0, stepId: "save_syllabus_refresh" };
      return e.error = a, n.save_syllabus_refresh = { error: a }, o("isSavingSyllabus", !1), await E({}), o("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing."), { ok: !1 };
    }
    return o("isSavingSyllabus", !1), await E({}), n.save_syllabus_result;
  }
  async function Ms(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        if (!i.selectedTopicId) throw new Error("Select a Topic before adding problems.");
        const t = Array.isArray(i.selectedTopicProblems) ? i.selectedTopicProblems.map(String) : [], a = ["Explain the key theorem used in " + i.selectedTopicTitle + " and give a counterexample.", "Create a guided problem connecting " + i.selectedTopicTitle + " to another unit.", "Create an examination-style " + i.selectedTopicTitle + " problem with verification."], c = [.../* @__PURE__ */ new Set([...t, ...a])].slice(0, 10), l = JSON.parse(JSON.stringify(i.finalHierarchy)), u = (b) => {
          b.id === i.selectedTopicId && (b.problems = c), (b.children || []).forEach(u);
        };
        u(l);
        const p = (b) => ({ id: b.id, label: b.type[0].toUpperCase() + b.type.slice(1) + " · " + b.title, data: { type: b.type, title: b.title, problems: b.problems || [] }, children: (b.children || []).map(p) }), d = c.map((b, h) => ({ id: i.selectedTopicId + "-problem-" + (h + 1), label: h + 1 + ". " + b, data: { type: "problem", topicId: i.selectedTopicId, text: b } }));
        return { problems: c, problemItems: d, text: c.map((b, h) => h + 1 + ". " + b).join(`
`), hierarchy: l, items: [p(l)] };
      })();
      e.problems_expand = n;
    }
    o("selectedTopicProblems", e.problems_expand.problems), o("selectedTopicProblemItems", e.problems_expand.problemItems), o("selectedProblemIds", []), o("selectedTopicProblemsText", e.problems_expand.text), o("finalHierarchy", e.problems_expand.hierarchy), o("hierarchyItems", e.problems_expand.items), o("structureStatus", "Problems added to the selected Topic."), await ie("problemsAddRequested", { hierarchy: e.problems_expand.hierarchy, problems: e.problems_expand.problems, topicId: i.selectedTopicId }, !0);
  }
  async function Fs(s = {}) {
    const r = s || {}, e = {};
    {
      r.event;
      const n = await (async () => {
        const t = String(r.value || ""), a = String(i.teacherQuestionCorrectValue || ""), c = String(Q.locale || "en").toLowerCase(), l = !!t && t === a;
        return { value: t, feedback: (c === "hi" ? l ? "सही उत्तर।" : "फिर से प्रयास करें।" : c === "ta" ? l ? "சரியான பதில்." : "மீண்டும் முயற்சிக்கவும்." : l ? "Correct." : "Try again.") + (i.teacherQuestionExplanation ? " " + String(i.teacherQuestionExplanation) : "") };
      })();
      e.teacher_answer_read = n;
    }
    o("selectedTeacherAnswer", e.teacher_answer_read.value), o("teacherAnswerFeedback", e.teacher_answer_read.feedback);
  }
  const Gs = {
    loadTopicProblems: cr,
    resolveProblemSolution: ke,
    initializeProfessorAccess: ur,
    setNewProblemSolutionMode: hs,
    selectSavedSyllabus: gs,
    syncSyllabusInput: dr,
    submitNewProblem: fs,
    publishContext: Ss,
    prepareContentPreview: vs,
    startNextSyllabusVersion: ws,
    collapseSyllabusSetup: _s,
    openNewProblemForm: xs,
    setHierarchyContext: Ps,
    editStep: Ts,
    requestStructure: As,
    setSyllabusDescription: Is,
    setNewProblemText: Es,
    setSyllabusText: qs,
    toggleStudioSidebar: Cs,
    loadProfessorSyllabi: je,
    setSyllabusTitle: Rs,
    refreshStudioControls: E,
    refreshProfessorScenario: De,
    loadContextStrategy: mr,
    selectProblem: Ns,
    expandSyllabusSetup: ks,
    closeNewProblemForm: js,
    shareLesson: Ds,
    selectHierarchyNode: Ls,
    selectStep: Os,
    saveProfessorSyllabus: pr,
    addProblems: Ms,
    selectTeacherAnswer: Fs
  }, Qs = {
    loadTopicProblems: ["topicPath", "topicId", "fallbackProblems"],
    resolveProblemSolution: ["statement", "solutionMode"],
    initializeProfessorAccess: [],
    setNewProblemSolutionMode: ["value"],
    selectSavedSyllabus: ["value"],
    syncSyllabusInput: [],
    submitNewProblem: [],
    publishContext: [],
    prepareContentPreview: [],
    startNextSyllabusVersion: [],
    collapseSyllabusSetup: [],
    openNewProblemForm: [],
    setHierarchyContext: [],
    editStep: ["operation", "stepId", "note"],
    requestStructure: [],
    setSyllabusDescription: ["value"],
    setNewProblemText: ["value"],
    setSyllabusText: ["value"],
    toggleStudioSidebar: [],
    loadProfessorSyllabi: [],
    setSyllabusTitle: ["value"],
    refreshStudioControls: [],
    refreshProfessorScenario: [],
    loadContextStrategy: ["topicPath", "topicTitle"],
    selectProblem: ["item", "index", "depth"],
    expandSyllabusSetup: [],
    closeNewProblemForm: [],
    shareLesson: [],
    selectHierarchyNode: ["item", "index", "depth"],
    selectStep: ["event", "stepIndex", "index"],
    saveProfessorSyllabus: ["status"],
    addProblems: [],
    selectTeacherAnswer: ["value"]
  }, B = (s, r = {}, e = []) => {
    const n = Gs[s];
    if (n) {
      const u = Qs[s] || [];
      return n(Object.fromEntries(u.map((p, d) => {
        const b = Object.prototype.hasOwnProperty.call(r, p) ? r[p] : void 0;
        return [p, (b === "" || b === void 0) && e[d] !== void 0 ? e[d] : p === "event" && (b === "" || b === void 0) ? e[0] : b];
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
    he("professor_syllabi_mountloadProfessorSyllabi", "takeLatest", (s) => je({ signal: s }), "Module mount lifecycle failed:");
  }, []);
  const br = ge(!1);
  le(() => {
    br.current || (br.current = !0), zt(structuredClone(!0)), pt(structuredClone("Professor approval required")), Ze(structuredClone("Sign in with an approved professor account to use this studio.")), St(structuredClone("Verification pending")), st(structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), ct(structuredClone("")), wt(structuredClone("Select a saved syllabus or save this draft.")), et(structuredClone(!0)), Ot(structuredClone(!1)), Xe(structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), Nt(structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), At(structuredClone([])), $t(structuredClone(!1)), Ue(structuredClone("")), bt(structuredClone("")), gt(structuredClone("")), tt(structuredClone("Selected topic problems")), ar(structuredClone([])), nr(structuredClone([])), Ht(structuredClone([])), Kt(structuredClone("")), Rt(structuredClone("")), ut(structuredClone(!1)), yt(structuredClone({})), Be(structuredClone("")), Tt(structuredClone("Select a problem to load its saved solution.")), dt(structuredClone(!1)), Qt(structuredClone(0)), Yt(structuredClone("")), Je(structuredClone("Select one answer.")), Dt(structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), nt(structuredClone("Find the eigenvalues of a 2 × 2 matrix")), Xt(structuredClone("Representative problem · Linear algebra")), Et(structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), xt(structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), rr(structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), Ft(structuredClone(!1)), Wt(structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), he("professor_scenario_inputsrefreshProfessorScenario", "takeLatest", (s) => De({}), "Module input lifecycle failed:");
  }, [JSON.stringify(xe), JSON.stringify(Pe), JSON.stringify(_e), JSON.stringify(Ge), JSON.stringify(Qe), JSON.stringify(Fe), JSON.stringify(Ke), JSON.stringify(Ve), JSON.stringify(we), JSON.stringify(ze)]);
  const yr = ge(!1);
  return le(() => {
    yr.current || (yr.current = !0), he("studio_controls_inputsrefreshStudioControls", "takeLatest", (s) => E({}), "Module input lifecycle failed:");
  }, [JSON.stringify(_e), JSON.stringify(xe), JSON.stringify(Pe), JSON.stringify(we)]), /* @__PURE__ */ y("div", { ref: fe, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ R("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@rudra-studio/chalkmind-math@1.0.1/index.css", precedence: "rudra-library" }),
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
                      /* @__PURE__ */ R(zs, { id: "badge", label: /* @__PURE__ */ ((s) => s === void 0 ? "Verification pending" : s)(ft), ariaLabel: "Professor verification status" })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "title", className: "rs-title", as: "h2", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor context studio" : s)(oe?.i18n?.title) })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Import a semester and steer representative solutions." : s)(oe?.i18n?.subtitle) })
                    ] })
                  ] })
                ] }),
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ R(X, { id: "sidebar_toggle", className: "rs-studio-action rs-sidebar-toggle", onAction: (...s) => B("toggleStudioSidebar", {}, s), "aria-controls": "left", "aria-expanded": /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(Ae), label: /* @__PURE__ */ ((s) => s === void 0 ? "Hide syllabus panel" : s)(qt), theme: "auto", variant: "outline" })
                ] })
              ] })
            ] }),
            v(Vt) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ y(Ks, { id: "verification", icon: /* @__PURE__ */ y(f, { children: [
                "      ",
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ R($, { id: "verification_icon", className: "rs-verification-icon", as: "span", content: "!" })
                ] })
              ] }), title: /* @__PURE__ */ y(f, { children: [
                "      ",
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ R($, { id: "verification_title", content: /* @__PURE__ */ ((s) => s === void 0 ? "Professor approval required" : s)(mt), as: "h4" })
                ] })
              ] }), appearance: "soft", live: "polite", variant: "warning", children: [
                "      ",
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ R($, { id: "verification_message", content: /* @__PURE__ */ ((s) => s === void 0 ? "Sign in with an approved professor account to use this studio." : s)(We), as: "p" })
                ] })
              ] })
            ] }),
            v(Mt) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ y(ee, { id: "grid", className: `${((s) => s == null || s === !1 || typeof s == "object" ? "" : "" + String(s))(/* @__PURE__ */ ((s) => s === void 0 ? "grid rs-grid" : s)(Ct))}`, children: [
                "      ",
                v(/* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(Ae)) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ y(hr, { id: "left", className: "rs-panel rs-authoring-panel", as: "section", theme: "auto", children: [
                    "      ",
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "syllabus_catalog", className: "block rs-syllabus-catalog", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(gr, { id: "saved_syllabus_select", radius: "md", options: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(er), placeholder: "Select a syllabus", name: "savedSyllabus", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(lt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(oe?.studioControls?.unavailable), onChangeValue: (...s) => B("selectSavedSyllabus", {}, s), size: "md", label: "Continue with a saved syllabus" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "refresh_syllabi", className: "rs-studio-action", loadingText: "Loading syllabi…", label: "Refresh syllabi", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ie), variant: "ghost", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ie), onAction: (...s) => B("loadProfessorSyllabi", {}, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "save_syllabus_draft", className: "rs-studio-action", loadingText: "Saving syllabus…", label: "Save current syllabus", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(qe), variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(oe?.studioControls?.unavailable), onAction: (...s) => B("saveProfessorSyllabus", { status: "draft" }, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "publish_syllabus_students", className: "rs-studio-action", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(oe?.studioControls?.unavailable), onAction: (...s) => B("saveProfessorSyllabus", { status: "published" }, s), loadingText: "Publishing syllabus…", label: "Publish current syllabus for students", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(qe), variant: "primary" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "syllabus_catalog_status", className: "rs-muted", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select a saved syllabus or save this draft." : s)(vt), as: "p" })
                        ] })
                      ] })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "syllabus_metadata", className: "block rs-syllabus-metadata", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(Us, { id: "syllabus_title_input", label: "Syllabus title", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Pt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(oe?.studioControls?.busy), required: !0, placeholder: "Engineering Mathematics I", onChangeValue: (...s) => B("setSyllabusTitle", {}, s), name: "syllabusTitle", size: "md" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(Le, { id: "syllabus_description_input", onChangeValue: (...s) => B("setSyllabusDescription", {}, s), name: "syllabusDescription", rows: 3, label: "Description", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(kt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(oe?.studioControls?.busy), placeholder: "What students will learn" })
                        ] })
                      ] })
                    ] }),
                    v(Lt) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R(X, { id: "edit_syllabus_setup", className: "rs-studio-action", label: "Edit syllabus / Regenerate", theme: "auto", variant: "outline", onAction: (...s) => B("expandSyllabusSetup", {}, s) })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "left_title", content: /* @__PURE__ */ ((s) => s === void 0 ? "Semester syllabus" : s)(oe?.i18n?.import), as: "h3" })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "structure_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Review the proposed hierarchy, add problems, then set it as context." : s)(it) })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R(Le, { id: "syllabus", name: "syllabus", rows: 10, label: "Paste one section or a complete semester", value: /* @__PURE__ */ ((s) => s === void 0 ? `Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation` : s)(rt), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(oe?.studioControls?.busy), helperText: "AI proposes programme → semester → subject → unit → topic. You approve before anything is saved.", onChangeValue: (...s) => B("setSyllabusText", {}, s) })
                    ] }),
                    v(de) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "syllabus_actions", className: "flex flex-wrap rs-syllabus-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "structure", className: "rs-studio-action", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ce), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Ce), onAction: (...s) => B("requestStructure", {}, s), loadingText: "Generating hierarchy…", label: "Propose structure with AI", theme: "auto" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "collapse_syllabus_setup", className: "rs-studio-action", variant: "ghost", onAction: (...s) => B("collapseSyllabusSetup", {}, s), label: "Hide setup", theme: "auto" })
                        ] })
                      ] })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "final_hierarchy_title", as: "h3", content: "Final hierarchy" })
                    ] }),
                    v(ye) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R(Bs, { id: "problems_text", className: "rs-problem-list", selectionMode: "single", showDefaultIcons: !0, expandOnItemClick: !0, items: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(or), indent: 20, defaultExpandAll: !0, emptyText: "No problems yet. Use Add problems to create examples.", showLines: !1, onItemClick: (...s) => B("selectProblem", { depth: "", index: "", item: "" }, s), selectedIds: /* @__PURE__ */ ((s) => s === void 0 ? [] : s)(Ut), children: (s) => (() => {
                        const r = { ...s || {}, item: s?.item ?? s, index: s?.index ?? s?.i ?? 0 };
                        return /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "hierarchy_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label) }),
                          /* @__PURE__ */ R($, { id: "problem_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Untitled item" : e)(r?.item?.label) })
                        ] });
                      })() })
                    ] }),
                    v(ht) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "new_problem_form", className: "block rs-new-problem-form", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "new_problem_title", as: "h4", content: "Add a context-scoped problem" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(Le, { id: "new_problem_input", name: "newProblem", label: "Problem statement", required: !0, rows: 5, value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(at), disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(oe?.studioControls?.busy), autoResize: !0, placeholder: "Enter a new problem for the selected topic", onChangeValue: (...s) => B("setNewProblemText", {}, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(gr, { id: "new_problem_mode", value: /* @__PURE__ */ ((s) => s === void 0 ? "detailed" : s)(Ye), radius: "md", options: [{ label: "Detailed steps", value: "detailed" }, { label: "Quick solution", value: "quick" }], onChangeValue: (...s) => B("setNewProblemSolutionMode", {}, s), name: "solutionMode", size: "md", label: "Solution style" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ y(ee, { id: "new_problem_actions", className: "flex flex-wrap rs-new-problem-actions", children: [
                            "      ",
                            v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                              "      ",
                              /* @__PURE__ */ R(X, { id: "save_new_problem", className: "rs-studio-action", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(be), onAction: (...s) => B("submitNewProblem", {}, s), loadingText: "Checking saved solutions…", label: "Find or generate solution", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(be) })
                            ] }),
                            v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                              "      ",
                              /* @__PURE__ */ R(X, { id: "cancel_new_problem", className: "rs-studio-action", variant: "ghost", onAction: (...s) => B("closeNewProblemForm", {}, s), label: "Cancel", theme: "auto" })
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
                          /* @__PURE__ */ R($, { id: "problem_solution_text", className: "rs-problem-solution-text", as: "div", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(He) })
                        ] })
                      ] })
                    ] }),
                    v(ye) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "hierarchy_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "add_problems", className: "rs-studio-action", label: "Add new problem", theme: "auto", variant: "outline", onAction: (...s) => B("openNewProblemForm", {}, s) })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ y(hr, { id: "right", className: "rs-panel rs-solution-panel", as: "section", theme: "auto", children: [
                    "      ",
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "right_title", content: /* @__PURE__ */ ((s) => s === void 0 ? "Steer a representative solution" : s)(oe?.i18n?.board), as: "h3" })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Ee)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "problem_solution_status", className: "rs-solution-source", as: "p", role: "status", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Ee), "aria-live": "polite" })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(oe?.studioControls?.lessonEmpty)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($, { id: "studio_lesson_empty", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, select a topic, then choose or add a problem to review its lesson." })
                    ] }),
                    v(be) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "board_loading", className: "flex rs-board-loading", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "board_loading_indicator", className: "rs-loading-orb", content: "", as: "span" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "board_loading_text", as: "p", content: "Loading the saved solution or generating a new lesson…" })
                        ] })
                      ] })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(me)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ R($s, { id: "board", problemStatement: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : s)(It), popupInitiallyOpen: !1, title: /* @__PURE__ */ ((s) => s === void 0 ? "Find the eigenvalues of a 2 × 2 matrix" : s)(ot), autoAdvance: !0, onNext: (...s) => B("selectStep", {}, s), playing: !1, lessonKind: /* @__PURE__ */ ((s) => s === void 0 ? "worked-example" : s)(jt?.lessonKind), speedLabel: "Normal", onStepSelect: (...s) => B("selectStep", {}, s), steps: /* @__PURE__ */ ((s) => s === void 0 ? [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: 0, value: "b" }, { label: 1, value: "c" }, { label: 3, value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }] : s)(tr), activeStep: /* @__PURE__ */ ((s) => s === void 0 ? 0 : s)(Gt), boardOptions: { animateCurrentStepOnly: !0, clearFutureSteps: !1, preserveRevealedSteps: !0, writingEffect: !0 }, problemLabel: /* @__PURE__ */ ((s) => s === void 0 ? "Representative problem · Linear algebra" : s)(Zt), reducedMotion: !1, showStepPopup: !0, editOperations: [], stepDurationMs: 5500, learningGoal: /* @__PURE__ */ ((s) => s === void 0 ? "Form the characteristic equation, solve it and verify the eigenvalues." : s)(_t), captionsEnabled: !0 })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(me)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "teacher_question_panel", className: "block rs-teacher-question", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "teacher_question_title", className: "rs-teacher-question-title", as: "h4", content: /* @__PURE__ */ ((s) => s === void 0 ? "What size identity matrix is required here?" : s)(ir) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(Hs, { id: "teacher_question_choices", label: "Choose one answer", value: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Jt), layout: "vertical", options: /* @__PURE__ */ ((s) => s === void 0 ? [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }] : s)(sr), colorScheme: "emerald", onChangeValue: (...s) => B("selectTeacherAnswer", {}, s), name: "teacherAnswer", size: "md" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "teacher_question_feedback", className: "rs-teacher-question-feedback", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Select one answer." : s)($e) })
                        ] })
                      ] })
                    ] }),
                    v(/* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(me)) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "steer_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "keep", className: "rs-studio-action", variant: "primary", onAction: (...s) => B("editStep", { operation: "keep" }, s), label: "Keep", theme: "auto" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "remove", className: "rs-studio-action", label: "Remove", theme: "auto", variant: "outline", onAction: (...s) => B("editStep", { operation: "remove" }, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "annotate", className: "rs-studio-action", label: "Add teaching note", theme: "auto", variant: "ghost", onAction: (...s) => B("editStep", { note: "Explain why this step belongs in similar problems.", operation: "annotate" }, s) })
                        ] })
                      ] })
                    ] }),
                    v(ye) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "strategy_panel", className: "block rs-strategy-panel", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "strategy_title", as: "h3", content: "Teaching strategy for this Topic" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "studio_rules_body", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "Save your syllabus, review a lesson, and approve the teaching strategy before publishing." : s)(Te) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "strategy_status", className: "rs-strategy-status", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Bt) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "strategy_text", className: "rs-strategy-text", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(Te), as: "div" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "set_context", className: "rs-studio-action", loadingText: "Saving strategy…", label: "Approve strategy as context", theme: "auto", loading: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Re), variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !1 : s)(Re), onAction: (...s) => B("setHierarchyContext", {}, s) })
                        ] })
                      ] })
                    ] }),
                    v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                      "      ",
                      /* @__PURE__ */ y(ee, { id: "publish_actions", className: "flex flex-wrap rs-actions", children: [
                        "      ",
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "preview_content", className: "rs-studio-action", label: "Prepare student preview", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(oe?.studioControls?.previewDisabled), onAction: (...s) => B("prepareContentPreview", {}, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R($, { id: "studio_contract_note", className: "rs-studio-contract-note", as: "p", content: "Save your syllabus, resolve and review a lesson, then prepare a student preview. Published versions are read-only; start the next version to make changes." })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "publish", className: "rs-studio-action", variant: "primary", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(oe?.studioControls?.unavailable), onAction: (...s) => B("publishContext", {}, s), label: "Publish immutable context version", theme: "auto" })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "next_syllabus_version", className: "rs-studio-action", label: "Start next version", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((s) => s === void 0 ? !0 : s)(oe?.studioControls?.versionDisabled), onAction: (...s) => B("startNextSyllabusVersion", {}, s) })
                        ] }),
                        v(N({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                          "      ",
                          /* @__PURE__ */ R(X, { id: "share", className: "rs-studio-action", onAction: (...s) => B("shareLesson", {}, s), label: "Create student share link", theme: "auto", variant: "outline" })
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
