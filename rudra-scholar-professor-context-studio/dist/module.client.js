import { jsx as v, jsxs as d, Fragment as y } from "react/jsx-runtime";
import { useState as f, useEffect as V, useRef as de, useCallback as Z } from "react";
import { TreeView as tr } from "@rudra-studio/rudra-widgets";
import { Box as N } from "@rudra-studio/rudra-layout";
import { Badge as vs, Typography as A, Alert as rr, Card as sr, Button as E } from "@rudra-studio/rudra-core";
import { Select as ar, Input as _s, Textarea as me, RadioGroup as ws } from "@rudra-studio/rudra-form";
import { BlackboardLesson as Ps } from "@rudra-studio/chalkmind-math";
function js(p) {
  const X = {}, j = p.serverData || p.serverState || {}, L = p.sharedState || {}, M = p.applicationState || j.applicationState || {}, Q = p.pageState || j.pageState || {}, O = p.pageData || j.pageData || {}, or = {
    ...p.runtime?.functions || {},
    ...p.runtime?.actions || {},
    ...p.functions || {},
    ...p.actions || {}
  }, z = p.$theme ?? p.theme ?? p.data?.$theme ?? p.runtime?.data?.$theme ?? p.runtime?.theme, pe = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Ts, be] = f(() => z ?? pe());
  V(() => {
    z != null && be(z);
  }, [z]), V(() => {
    if (z != null || typeof document > "u") return;
    const r = document.documentElement, e = (o) => be(o?.detail?.theme ?? pe()), t = new MutationObserver(e);
    return t.observe(r, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", e), e(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", e);
    };
  }, [z]);
  const ee = de(null), [te, re] = f("lg");
  V(() => {
    if (!ee.current) return;
    const r = new ResizeObserver((e) => {
      for (let t of e) {
        const o = t.contentRect.width;
        o < 768 ? re("sm") : o < 1024 ? re("md") : re("lg");
      }
    });
    return r.observe(ee.current), () => r.disconnect();
  }, []);
  const S = Z((r) => typeof r != "object" || r === null ? r : te === "sm" ? r.sm !== void 0 ? r.sm : r.md !== void 0 ? r.md : r.lg : te === "md" ? r.md !== void 0 ? r.md : r.sm !== void 0 ? r.sm : r.lg : r.lg !== void 0 ? r.lg : r.md !== void 0 ? r.md : r.sm, [te]), g = (r) => Array.isArray(r) ? r.length > 0 : typeof r == "string" ? r.trim() !== "" && r.trim().toLowerCase() !== "false" : !!r, he = p.authenticated !== void 0 ? p.authenticated : p.data?.authenticated !== void 0 ? p.data.authenticated : !1, ye = p.verificationStatus !== void 0 ? p.verificationStatus : p.data?.verificationStatus !== void 0 ? p.data.verificationStatus : "pending", ge = p.contextVersionKey !== void 0 ? p.contextVersionKey : p.data?.contextVersionKey !== void 0 ? p.data.contextVersionKey : "", fe = p.contextDraft !== void 0 ? p.contextDraft : p.data?.contextDraft !== void 0 ? p.data.contextDraft : {}, Se = p.returnPath !== void 0 ? p.returnPath : p.data?.returnPath !== void 0 ? p.data.returnPath : "/professor/context", xe = p.syllabusText !== void 0 ? p.syllabusText : p.data?.syllabusText !== void 0 ? p.data.syllabusText : void 0, ve = p.userRole !== void 0 ? p.userRole : p.data?.userRole !== void 0 ? p.data.userRole : "", _e = p.accessProfile !== void 0 ? p.accessProfile : p.data?.accessProfile !== void 0 ? p.data.accessProfile : {}, we = p.locale !== void 0 ? p.locale : p.data?.locale !== void 0 ? p.data.locale : "en", Pe = p.contextVersionNumber !== void 0 ? p.contextVersionNumber : p.data?.contextVersionNumber !== void 0 ? p.data.contextVersionNumber : 1, P = { authenticated: he, verificationStatus: ye, contextVersionKey: ge, contextDraft: fe, returnPath: Se, syllabusText: xe, userRole: ve, accessProfile: _e, locale: we, contextVersionNumber: Pe }, [nr, ir] = f(() => structuredClone(`1. Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].
2. Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.
3. Diagonalise A = [[4, 1], [2, 3]] and verify the result.`)), [Te, Ae] = f(() => structuredClone([])), [lr, cr] = f(() => structuredClone(!0)), [qe, ur] = f(() => structuredClone(!1)), [Ce, Ie] = f(() => structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), [Re, dr] = f(() => structuredClone("detailed")), [mr, ke] = f(() => structuredClone([])), [Ne, pr] = f(() => structuredClone("Review the proposed hierarchy, add problems, then set it as context.")), [je, br] = f(() => structuredClone(!1)), [De, hr] = f(() => structuredClone("")), [B, Ee] = f(() => structuredClone(!1)), [Le, Me] = f(() => structuredClone("Representative problem · Linear algebra")), [Qe, Oe] = f(() => structuredClone("Select a problem to load its saved solution.")), [Fe, ze] = f(() => structuredClone([])), [Ge, Ve] = f(() => structuredClone(!1)), [He, yr] = f(() => structuredClone(`Preferred method
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
• Prefer a direct 2×2 method when it is clearer than row reduction.`)), [Be, Ke] = f(() => structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), [gr, fr] = f(() => structuredClone(0)), [K, Ue] = f(() => structuredClone(!0)), [We, Je] = f(() => structuredClone("Select one answer.")), [$e, Ye] = f(() => structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), [Ze, Xe] = f(() => structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), [et, Sr] = f(() => structuredClone(!1)), [xr, vr] = f(() => structuredClone("b")), [tt, rt] = f(() => structuredClone([])), [_r, wr] = f(() => structuredClone("")), [Pr, st] = f(() => structuredClone("")), [at, ot] = f(() => structuredClone(0)), [nt, Tr] = f(() => structuredClone([])), [Ar, qr] = f(() => structuredClone(`Programme · B.E. Mathematics
  Semester · Semester 1
    Subject · Engineering Mathematics I
      Unit · Unit 1 · Matrices and systems
        Topic · Matrix operations
        Topic · Eigenvalues and diagonalisation`)), [it, Cr] = f(() => structuredClone(!1)), [lt, ct] = f(() => structuredClone("")), [se, ut] = f(() => structuredClone(!1)), [Ir, dt] = f(() => structuredClone("")), [mt, pt] = f(() => structuredClone("Find the eigenvalues of a 2 × 2 matrix")), [Rr, bt] = f(() => structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), [kr, Nr] = f(() => structuredClone("")), [jr, ht] = f(() => structuredClone("")), [ae, Dr] = f(() => structuredClone(!1)), [Er, Lr] = f(() => structuredClone(["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."])), [yt, Mr] = f(() => structuredClone("")), [gt, Qr] = f(() => structuredClone([{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }])), [Or, ft] = f(() => structuredClone({})), [St, xt] = f(() => structuredClone("Sign in with an approved professor account to use this studio.")), [vt, _t] = f(() => structuredClone("Selected topic problems")), [wt, Pt] = f(() => structuredClone("")), [Fr, Tt] = f(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [At, qt] = f(() => structuredClone(!1)), [Ct, It] = f(() => structuredClone("Select a saved syllabus or save this draft.")), [Rt, zr] = f(() => structuredClone("What size identity matrix is required here?")), [kt, Nt] = f(() => structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), [Gr, Vr] = f(() => structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), [jt, Dt] = f(() => structuredClone("Verification pending")), [Et, Lt] = f(() => structuredClone(!1)), [Mt, Qt] = f(() => structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), [Ot, Hr] = f(() => structuredClone("Engineering Mathematics I")), [Br, Ft] = f(() => structuredClone("")), [Kr, Ur] = f(() => structuredClone("A is a 2 × 2 matrix, so I must have the same dimensions.")), [zt, Gt] = f(() => structuredClone("")), [Vt, Ht] = f(() => structuredClone(!0)), [Bt, Kt] = f(() => structuredClone("Professor approval required")), [Wr, Ut] = f(() => structuredClone("")), [Wt, Jr] = f(() => structuredClone("Review the example strategy, then approve it for the selected Topic.")), n = { suggestedProblemsText: nr, selectedHierarchyIds: Te, hasResolvedStrategy: lr, isSavingStrategy: qe, syllabusDraftText: Ce, newProblemSolutionMode: Re, selectedTopicProblems: mr, structureStatus: Ne, isGeneratingStructure: je, syllabusDescription: De, hasSelectedTopic: B, blackboardProblemLabel: Le, problemResolutionStatus: Qe, selectedTopicProblemItems: Fe, canUseStudio: Ge, strategyDraftText: He, blackboardLearningGoal: Be, resolvedStrategyVersion: gr, showSyllabusSetup: K, teacherAnswerFeedback: We, blackboardSteps: $e, hierarchyItems: Ze, isLoadingSyllabi: et, teacherQuestionCorrectValue: xr, selectedProblemIds: tt, resolvedStrategyId: _r, selectedTopicPath: Pr, activeStep: at, savedSyllabusOptions: nt, finalHierarchyText: Ar, showNewProblemForm: it, problemSolutionText: lt, isResolvingProblem: se, selectedProblemStatement: Ir, blackboardTitle: mt, finalHierarchy: Rr, selectedTopicProblemsText: kr, selectedTopicId: jr, isSavingSyllabus: ae, suggestedProblems: Er, newProblemText: yt, teacherQuestionOptions: gt, problemSolution: Or, accessGateMessage: St, selectedTopicHeading: vt, selectedSyllabusId: wt, resolvedStrategy: Fr, isSyllabusSetupCollapsed: At, syllabusStatus: Ct, teacherQuestionPrompt: Rt, blackboardProblemStatement: kt, strategyDraft: Gr, accessBadgeLabel: jt, hasProblemSolution: Et, blackboardLesson: Mt, syllabusTitle: Ot, selectedProblemText: Br, teacherQuestionExplanation: Kr, selectedTeacherAnswer: zt, showAccessGate: Vt, accessGateTitle: Bt, selectedTopicTitle: Wr, strategyStatus: Wt }, a = Z((r, e) => {
    switch (r) {
      case "suggestedProblemsText": {
        const t = typeof e == "function" ? e(n.suggestedProblemsText) : e;
        return n.suggestedProblemsText = t, ir(t), t;
      }
      case "selectedHierarchyIds": {
        const t = typeof e == "function" ? e(n.selectedHierarchyIds) : e;
        return n.selectedHierarchyIds = t, Ae(t), t;
      }
      case "hasResolvedStrategy": {
        const t = typeof e == "function" ? e(n.hasResolvedStrategy) : e;
        return n.hasResolvedStrategy = t, cr(t), t;
      }
      case "isSavingStrategy": {
        const t = typeof e == "function" ? e(n.isSavingStrategy) : e;
        return n.isSavingStrategy = t, ur(t), t;
      }
      case "syllabusDraftText": {
        const t = typeof e == "function" ? e(n.syllabusDraftText) : e;
        return n.syllabusDraftText = t, Ie(t), t;
      }
      case "newProblemSolutionMode": {
        const t = typeof e == "function" ? e(n.newProblemSolutionMode) : e;
        return n.newProblemSolutionMode = t, dr(t), t;
      }
      case "selectedTopicProblems": {
        const t = typeof e == "function" ? e(n.selectedTopicProblems) : e;
        return n.selectedTopicProblems = t, ke(t), t;
      }
      case "structureStatus": {
        const t = typeof e == "function" ? e(n.structureStatus) : e;
        return n.structureStatus = t, pr(t), t;
      }
      case "isGeneratingStructure": {
        const t = typeof e == "function" ? e(n.isGeneratingStructure) : e;
        return n.isGeneratingStructure = t, br(t), t;
      }
      case "syllabusDescription": {
        const t = typeof e == "function" ? e(n.syllabusDescription) : e;
        return n.syllabusDescription = t, hr(t), t;
      }
      case "hasSelectedTopic": {
        const t = typeof e == "function" ? e(n.hasSelectedTopic) : e;
        return n.hasSelectedTopic = t, Ee(t), t;
      }
      case "blackboardProblemLabel": {
        const t = typeof e == "function" ? e(n.blackboardProblemLabel) : e;
        return n.blackboardProblemLabel = t, Me(t), t;
      }
      case "problemResolutionStatus": {
        const t = typeof e == "function" ? e(n.problemResolutionStatus) : e;
        return n.problemResolutionStatus = t, Oe(t), t;
      }
      case "selectedTopicProblemItems": {
        const t = typeof e == "function" ? e(n.selectedTopicProblemItems) : e;
        return n.selectedTopicProblemItems = t, ze(t), t;
      }
      case "canUseStudio": {
        const t = typeof e == "function" ? e(n.canUseStudio) : e;
        return n.canUseStudio = t, Ve(t), t;
      }
      case "strategyDraftText": {
        const t = typeof e == "function" ? e(n.strategyDraftText) : e;
        return n.strategyDraftText = t, yr(t), t;
      }
      case "blackboardLearningGoal": {
        const t = typeof e == "function" ? e(n.blackboardLearningGoal) : e;
        return n.blackboardLearningGoal = t, Ke(t), t;
      }
      case "resolvedStrategyVersion": {
        const t = typeof e == "function" ? e(n.resolvedStrategyVersion) : e;
        return n.resolvedStrategyVersion = t, fr(t), t;
      }
      case "showSyllabusSetup": {
        const t = typeof e == "function" ? e(n.showSyllabusSetup) : e;
        return n.showSyllabusSetup = t, Ue(t), t;
      }
      case "teacherAnswerFeedback": {
        const t = typeof e == "function" ? e(n.teacherAnswerFeedback) : e;
        return n.teacherAnswerFeedback = t, Je(t), t;
      }
      case "blackboardSteps": {
        const t = typeof e == "function" ? e(n.blackboardSteps) : e;
        return n.blackboardSteps = t, Ye(t), t;
      }
      case "hierarchyItems": {
        const t = typeof e == "function" ? e(n.hierarchyItems) : e;
        return n.hierarchyItems = t, Xe(t), t;
      }
      case "isLoadingSyllabi": {
        const t = typeof e == "function" ? e(n.isLoadingSyllabi) : e;
        return n.isLoadingSyllabi = t, Sr(t), t;
      }
      case "teacherQuestionCorrectValue": {
        const t = typeof e == "function" ? e(n.teacherQuestionCorrectValue) : e;
        return n.teacherQuestionCorrectValue = t, vr(t), t;
      }
      case "selectedProblemIds": {
        const t = typeof e == "function" ? e(n.selectedProblemIds) : e;
        return n.selectedProblemIds = t, rt(t), t;
      }
      case "resolvedStrategyId": {
        const t = typeof e == "function" ? e(n.resolvedStrategyId) : e;
        return n.resolvedStrategyId = t, wr(t), t;
      }
      case "selectedTopicPath": {
        const t = typeof e == "function" ? e(n.selectedTopicPath) : e;
        return n.selectedTopicPath = t, st(t), t;
      }
      case "activeStep": {
        const t = typeof e == "function" ? e(n.activeStep) : e;
        return n.activeStep = t, ot(t), t;
      }
      case "savedSyllabusOptions": {
        const t = typeof e == "function" ? e(n.savedSyllabusOptions) : e;
        return n.savedSyllabusOptions = t, Tr(t), t;
      }
      case "finalHierarchyText": {
        const t = typeof e == "function" ? e(n.finalHierarchyText) : e;
        return n.finalHierarchyText = t, qr(t), t;
      }
      case "showNewProblemForm": {
        const t = typeof e == "function" ? e(n.showNewProblemForm) : e;
        return n.showNewProblemForm = t, Cr(t), t;
      }
      case "problemSolutionText": {
        const t = typeof e == "function" ? e(n.problemSolutionText) : e;
        return n.problemSolutionText = t, ct(t), t;
      }
      case "isResolvingProblem": {
        const t = typeof e == "function" ? e(n.isResolvingProblem) : e;
        return n.isResolvingProblem = t, ut(t), t;
      }
      case "selectedProblemStatement": {
        const t = typeof e == "function" ? e(n.selectedProblemStatement) : e;
        return n.selectedProblemStatement = t, dt(t), t;
      }
      case "blackboardTitle": {
        const t = typeof e == "function" ? e(n.blackboardTitle) : e;
        return n.blackboardTitle = t, pt(t), t;
      }
      case "finalHierarchy": {
        const t = typeof e == "function" ? e(n.finalHierarchy) : e;
        return n.finalHierarchy = t, bt(t), t;
      }
      case "selectedTopicProblemsText": {
        const t = typeof e == "function" ? e(n.selectedTopicProblemsText) : e;
        return n.selectedTopicProblemsText = t, Nr(t), t;
      }
      case "selectedTopicId": {
        const t = typeof e == "function" ? e(n.selectedTopicId) : e;
        return n.selectedTopicId = t, ht(t), t;
      }
      case "isSavingSyllabus": {
        const t = typeof e == "function" ? e(n.isSavingSyllabus) : e;
        return n.isSavingSyllabus = t, Dr(t), t;
      }
      case "suggestedProblems": {
        const t = typeof e == "function" ? e(n.suggestedProblems) : e;
        return n.suggestedProblems = t, Lr(t), t;
      }
      case "newProblemText": {
        const t = typeof e == "function" ? e(n.newProblemText) : e;
        return n.newProblemText = t, Mr(t), t;
      }
      case "teacherQuestionOptions": {
        const t = typeof e == "function" ? e(n.teacherQuestionOptions) : e;
        return n.teacherQuestionOptions = t, Qr(t), t;
      }
      case "problemSolution": {
        const t = typeof e == "function" ? e(n.problemSolution) : e;
        return n.problemSolution = t, ft(t), t;
      }
      case "accessGateMessage": {
        const t = typeof e == "function" ? e(n.accessGateMessage) : e;
        return n.accessGateMessage = t, xt(t), t;
      }
      case "selectedTopicHeading": {
        const t = typeof e == "function" ? e(n.selectedTopicHeading) : e;
        return n.selectedTopicHeading = t, _t(t), t;
      }
      case "selectedSyllabusId": {
        const t = typeof e == "function" ? e(n.selectedSyllabusId) : e;
        return n.selectedSyllabusId = t, Pt(t), t;
      }
      case "resolvedStrategy": {
        const t = typeof e == "function" ? e(n.resolvedStrategy) : e;
        return n.resolvedStrategy = t, Tt(t), t;
      }
      case "isSyllabusSetupCollapsed": {
        const t = typeof e == "function" ? e(n.isSyllabusSetupCollapsed) : e;
        return n.isSyllabusSetupCollapsed = t, qt(t), t;
      }
      case "syllabusStatus": {
        const t = typeof e == "function" ? e(n.syllabusStatus) : e;
        return n.syllabusStatus = t, It(t), t;
      }
      case "teacherQuestionPrompt": {
        const t = typeof e == "function" ? e(n.teacherQuestionPrompt) : e;
        return n.teacherQuestionPrompt = t, zr(t), t;
      }
      case "blackboardProblemStatement": {
        const t = typeof e == "function" ? e(n.blackboardProblemStatement) : e;
        return n.blackboardProblemStatement = t, Nt(t), t;
      }
      case "strategyDraft": {
        const t = typeof e == "function" ? e(n.strategyDraft) : e;
        return n.strategyDraft = t, Vr(t), t;
      }
      case "accessBadgeLabel": {
        const t = typeof e == "function" ? e(n.accessBadgeLabel) : e;
        return n.accessBadgeLabel = t, Dt(t), t;
      }
      case "hasProblemSolution": {
        const t = typeof e == "function" ? e(n.hasProblemSolution) : e;
        return n.hasProblemSolution = t, Lt(t), t;
      }
      case "blackboardLesson": {
        const t = typeof e == "function" ? e(n.blackboardLesson) : e;
        return n.blackboardLesson = t, Qt(t), t;
      }
      case "syllabusTitle": {
        const t = typeof e == "function" ? e(n.syllabusTitle) : e;
        return n.syllabusTitle = t, Hr(t), t;
      }
      case "selectedProblemText": {
        const t = typeof e == "function" ? e(n.selectedProblemText) : e;
        return n.selectedProblemText = t, Ft(t), t;
      }
      case "teacherQuestionExplanation": {
        const t = typeof e == "function" ? e(n.teacherQuestionExplanation) : e;
        return n.teacherQuestionExplanation = t, Ur(t), t;
      }
      case "selectedTeacherAnswer": {
        const t = typeof e == "function" ? e(n.selectedTeacherAnswer) : e;
        return n.selectedTeacherAnswer = t, Gt(t), t;
      }
      case "showAccessGate": {
        const t = typeof e == "function" ? e(n.showAccessGate) : e;
        return n.showAccessGate = t, Ht(t), t;
      }
      case "accessGateTitle": {
        const t = typeof e == "function" ? e(n.accessGateTitle) : e;
        return n.accessGateTitle = t, Kt(t), t;
      }
      case "selectedTopicTitle": {
        const t = typeof e == "function" ? e(n.selectedTopicTitle) : e;
        return n.selectedTopicTitle = t, Ut(t), t;
      }
      case "strategyStatus": {
        const t = typeof e == "function" ? e(n.strategyStatus) : e;
        return n.strategyStatus = t, Jr(t), t;
      }
      default:
        return e;
    }
  }, [n]);
  Z((r, e) => {
    const [t, ...o] = String(r || "").split(".");
    if (!t) return e;
    if (o.length === 0) return a(t, e);
    const i = (s) => {
      const c = Array.isArray(s) ? [...s] : { ...s || {} };
      let u = c;
      return o.forEach((l, m) => {
        m === o.length - 1 ? u[l] = e : (u[l] = Array.isArray(u[l]) ? [...u[l]] : { ...u[l] || {} }, u = u[l]);
      }), c;
    };
    switch (t) {
      case "suggestedProblemsText":
        return a("suggestedProblemsText", i), e;
      case "selectedHierarchyIds":
        return a("selectedHierarchyIds", i), e;
      case "hasResolvedStrategy":
        return a("hasResolvedStrategy", i), e;
      case "isSavingStrategy":
        return a("isSavingStrategy", i), e;
      case "syllabusDraftText":
        return a("syllabusDraftText", i), e;
      case "newProblemSolutionMode":
        return a("newProblemSolutionMode", i), e;
      case "selectedTopicProblems":
        return a("selectedTopicProblems", i), e;
      case "structureStatus":
        return a("structureStatus", i), e;
      case "isGeneratingStructure":
        return a("isGeneratingStructure", i), e;
      case "syllabusDescription":
        return a("syllabusDescription", i), e;
      case "hasSelectedTopic":
        return a("hasSelectedTopic", i), e;
      case "blackboardProblemLabel":
        return a("blackboardProblemLabel", i), e;
      case "problemResolutionStatus":
        return a("problemResolutionStatus", i), e;
      case "selectedTopicProblemItems":
        return a("selectedTopicProblemItems", i), e;
      case "canUseStudio":
        return a("canUseStudio", i), e;
      case "strategyDraftText":
        return a("strategyDraftText", i), e;
      case "blackboardLearningGoal":
        return a("blackboardLearningGoal", i), e;
      case "resolvedStrategyVersion":
        return a("resolvedStrategyVersion", i), e;
      case "showSyllabusSetup":
        return a("showSyllabusSetup", i), e;
      case "teacherAnswerFeedback":
        return a("teacherAnswerFeedback", i), e;
      case "blackboardSteps":
        return a("blackboardSteps", i), e;
      case "hierarchyItems":
        return a("hierarchyItems", i), e;
      case "isLoadingSyllabi":
        return a("isLoadingSyllabi", i), e;
      case "teacherQuestionCorrectValue":
        return a("teacherQuestionCorrectValue", i), e;
      case "selectedProblemIds":
        return a("selectedProblemIds", i), e;
      case "resolvedStrategyId":
        return a("resolvedStrategyId", i), e;
      case "selectedTopicPath":
        return a("selectedTopicPath", i), e;
      case "activeStep":
        return a("activeStep", i), e;
      case "savedSyllabusOptions":
        return a("savedSyllabusOptions", i), e;
      case "finalHierarchyText":
        return a("finalHierarchyText", i), e;
      case "showNewProblemForm":
        return a("showNewProblemForm", i), e;
      case "problemSolutionText":
        return a("problemSolutionText", i), e;
      case "isResolvingProblem":
        return a("isResolvingProblem", i), e;
      case "selectedProblemStatement":
        return a("selectedProblemStatement", i), e;
      case "blackboardTitle":
        return a("blackboardTitle", i), e;
      case "finalHierarchy":
        return a("finalHierarchy", i), e;
      case "selectedTopicProblemsText":
        return a("selectedTopicProblemsText", i), e;
      case "selectedTopicId":
        return a("selectedTopicId", i), e;
      case "isSavingSyllabus":
        return a("isSavingSyllabus", i), e;
      case "suggestedProblems":
        return a("suggestedProblems", i), e;
      case "newProblemText":
        return a("newProblemText", i), e;
      case "teacherQuestionOptions":
        return a("teacherQuestionOptions", i), e;
      case "problemSolution":
        return a("problemSolution", i), e;
      case "accessGateMessage":
        return a("accessGateMessage", i), e;
      case "selectedTopicHeading":
        return a("selectedTopicHeading", i), e;
      case "selectedSyllabusId":
        return a("selectedSyllabusId", i), e;
      case "resolvedStrategy":
        return a("resolvedStrategy", i), e;
      case "isSyllabusSetupCollapsed":
        return a("isSyllabusSetupCollapsed", i), e;
      case "syllabusStatus":
        return a("syllabusStatus", i), e;
      case "teacherQuestionPrompt":
        return a("teacherQuestionPrompt", i), e;
      case "blackboardProblemStatement":
        return a("blackboardProblemStatement", i), e;
      case "strategyDraft":
        return a("strategyDraft", i), e;
      case "accessBadgeLabel":
        return a("accessBadgeLabel", i), e;
      case "hasProblemSolution":
        return a("hasProblemSolution", i), e;
      case "blackboardLesson":
        return a("blackboardLesson", i), e;
      case "syllabusTitle":
        return a("syllabusTitle", i), e;
      case "selectedProblemText":
        return a("selectedProblemText", i), e;
      case "teacherQuestionExplanation":
        return a("teacherQuestionExplanation", i), e;
      case "selectedTeacherAnswer":
        return a("selectedTeacherAnswer", i), e;
      case "showAccessGate":
        return a("showAccessGate", i), e;
      case "accessGateTitle":
        return a("accessGateTitle", i), e;
      case "selectedTopicTitle":
        return a("selectedTopicTitle", i), e;
      case "strategyStatus":
        return a("strategyStatus", i), e;
      default:
        return e;
    }
  }, [a]);
  const $r = { aiStructureGenerated: { properties: { hierarchy: { type: "object" }, languageCode: { type: "string" } }, type: "object" }, aiStructureRequested: { properties: { languageCode: { type: "string" }, sourceText: { type: "string" } }, type: "object" }, canUseStudio: { properties: { value: { type: "boolean" } }, type: "object" }, contextPublishRequested: { properties: { contextDraft: { type: "object" }, immutable: { type: "boolean" } }, type: "object" }, contextSetRequested: { properties: { contextDraft: { type: "object" }, strategy: { type: "object" }, strategyId: { type: "string" }, strategyVersion: { type: "number" } }, type: "object" }, lessonShareRequested: { properties: { expiresInHours: { type: "number" }, visibility: { type: "string" } }, type: "object" }, problemsAddRequested: { properties: { problems: { type: "array" }, topicId: { type: "string" } }, type: "object" }, resolvedStrategy: { properties: {}, type: "object" }, stepOperationRequested: { properties: { note: { type: "string" }, operation: { type: "string" }, stepId: { type: "string" } }, type: "object" }, suggestedProblemsText: { properties: { value: { type: "string" } }, type: "object" }, syllabusText: { properties: { value: { type: "string" } }, type: "object" } }, oe = (r, e, t) => {
    if (!e || typeof e != "object") return "";
    const o = Array.isArray(e.type) ? e.type : e.type ? [e.type] : [], i = r === null ? "null" : Array.isArray(r) ? "array" : Number.isInteger(r) ? "integer" : typeof r;
    if (o.length && !o.includes(i) && !(i === "integer" && o.includes("number"))) return t + " must be " + o.join(" or ") + ".";
    if (e.enum && !e.enum.some((s) => JSON.stringify(s) === JSON.stringify(r))) return t + " is not an allowed value.";
    if (r && typeof r == "object" && !Array.isArray(r)) {
      for (const s of e.required || []) if (!Object.prototype.hasOwnProperty.call(r, s)) return t + "." + s + " is required.";
      for (const [s, c] of Object.entries(e.properties || {})) if (Object.prototype.hasOwnProperty.call(r, s)) {
        const u = oe(r[s], c, t + "." + s);
        if (u) return u;
      }
    }
    if (Array.isArray(r) && e.items) for (let s = 0; s < r.length; s++) {
      const c = oe(r[s], e.items, t + "[" + s + "]");
      if (c) return c;
    }
    return "";
  }, G = Z(async (r, e, t = !1) => {
    const o = $r[r];
    if (!o) throw new Error("Module output '" + r + "' is not declared.");
    const i = oe(e, o, "output." + r);
    if (i) throw new Error(i);
    const s = p.onOutput || p.onModuleOutput || p.runtime?.onOutput;
    if (typeof s != "function") return e;
    const c = s(r, e, { moduleId: p.moduleId, awaitHandlers: t });
    return t ? await c : e;
  }, [p.onOutput, p.onModuleOutput, p.runtime?.onOutput, p.moduleId]), Jt = (r, e) => {
    const t = String(e || "").split(".").filter(Boolean);
    if (!(!t.length || t.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return t.reduce((o, i) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(i in o) ? o.get(i) : o[i];
      }, r);
  }, D = (r, e) => {
    if (Array.isArray(r)) return r.map((o) => D(o, e));
    if (r && typeof r == "object") return Object.fromEntries(Object.entries(r).map(([o, i]) => [D(o, e), D(i, e)]));
    if (typeof r != "string") return r;
    const t = r.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return t ? Jt(e, t[1]) : r.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, i) => {
      const s = Jt(e, i);
      return s == null ? "" : typeof s == "object" ? JSON.stringify(s) : String(s);
    });
  };
  async function Yr(r = {}) {
    a("showSyllabusSetup", !1), a("isSyllabusSetupCollapsed", !0);
  }
  async function Zr(r = {}) {
    a("syllabusDraftText", (r || {}).value || "");
  }
  async function ne(r = {}) {
    const e = r || {}, t = {}, o = {};
    a("isLoadingSyllabi", !0);
    {
      const s = D({ userIdentity: "" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListProfessorSyllabi", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListProfessorSyllabi", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.syllabi_query = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => (Array.isArray(o.syllabi_query) ? o.syllabi_query : []).map((c) => ({ label: String(c.label || c.title || "Untitled syllabus"), value: String(c.value || c.id || "") })).filter((c) => c.value))();
      o.syllabi_parse = i, t.customCodeResult = i;
    }
    return a("savedSyllabusOptions", o.syllabi_parse), a("isLoadingSyllabi", !1), o.syllabi_parse;
  }
  async function $t(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        const i = P.accessProfile && typeof P.accessProfile == "object" ? P.accessProfile : {}, s = Object.keys(i).length > 0, c = s ? i.authenticated === !0 || i.isAuthenticated === !0 || !!(i.uid || i.userId || i.id) : P.authenticated === !0, u = s && Array.isArray(i.roles) ? i.roles.map(String) : [String(P.userRole || "")], l = String(s ? i.verificationStatus || "pending" : P.verificationStatus || "pending"), m = u.some((_) => ["professor", "educator", "admin", "institution_admin"].includes(_)), b = c && m && l === "approved";
        return { authenticated: c, roles: u, status: l, canUseStudio: b, title: c ? m ? l === "rejected" ? "Professor verification rejected" : "Professor approval required" : "Professor access required" : "Sign in required", message: c ? m ? l === "rejected" ? "Your professor verification was rejected. Contact your institution administrator." : "Your professor verification is pending. The studio will unlock after server-side approval." : "This workspace is available only to professors and institution administrators." : "Sign in and complete professor registration to use this studio.", badgeLabel: b ? "Verified professor" : l === "rejected" ? "Verification rejected" : "Verification pending" };
      })();
      t.prof_access_derive = o;
    }
    return a("canUseStudio", t.prof_access_derive.canUseStudio), a("showAccessGate", !t.prof_access_derive.canUseStudio), a("accessGateTitle", t.prof_access_derive.title), a("accessGateMessage", t.prof_access_derive.message), a("accessBadgeLabel", t.prof_access_derive.badgeLabel), t.prof_access_derive;
  }
  async function Xr(r = {}) {
    a("newProblemText", (r || {}).value);
  }
  async function es(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        if (!n.selectedTopicId) throw new Error("Select a Topic before adding problems.");
        const i = Array.isArray(n.selectedTopicProblems) ? n.selectedTopicProblems.map(String) : [], s = ["Explain the key theorem used in " + n.selectedTopicTitle + " and give a counterexample.", "Create a guided problem connecting " + n.selectedTopicTitle + " to another unit.", "Create an examination-style " + n.selectedTopicTitle + " problem with verification."], c = [.../* @__PURE__ */ new Set([...i, ...s])].slice(0, 10), u = JSON.parse(JSON.stringify(n.finalHierarchy)), l = (h) => {
          h.id === n.selectedTopicId && (h.problems = c), (h.children || []).forEach(l);
        };
        l(u);
        const m = (h) => ({ id: h.id, label: h.type[0].toUpperCase() + h.type.slice(1) + " · " + h.title, data: { type: h.type, title: h.title, problems: h.problems || [] }, children: (h.children || []).map(m) }), b = c.map((h, w) => ({ id: n.selectedTopicId + "-problem-" + (w + 1), label: w + 1 + ". " + h, data: { type: "problem", topicId: n.selectedTopicId, text: h } }));
        return { problems: c, problemItems: b, text: c.map((h, w) => w + 1 + ". " + h).join(`
`), hierarchy: u, items: [m(u)] };
      })();
      t.problems_expand = o;
    }
    a("selectedTopicProblems", t.problems_expand.problems), a("selectedTopicProblemItems", t.problems_expand.problemItems), a("selectedProblemIds", []), a("selectedTopicProblemsText", t.problems_expand.text), a("finalHierarchy", t.problems_expand.hierarchy), a("hierarchyItems", t.problems_expand.items), a("structureStatus", "Problems added to the selected Topic."), G("problemsAddRequested", { hierarchy: t.problems_expand.hierarchy, problems: t.problems_expand.problems, topicId: n.selectedTopicId }, !1).catch((o) => console.error("Module output delivery failed", o));
  }
  async function ts(r = {}) {
    a("showSyllabusSetup", !0), a("isSyllabusSetupCollapsed", !1);
  }
  async function rs(r = {}) {
    a("newProblemSolutionMode", (r || {}).value);
  }
  async function ss(r = {}) {
    G("lessonShareRequested", { expiresInHours: 168, visibility: "unlisted" }, !1).catch((e) => console.error("Module output delivery failed", e));
  }
  async function as(r = {}) {
    a("showNewProblemForm", !0), a("newProblemText", ""), a("problemResolutionStatus", "The database will be checked before AI is used.");
  }
  async function os(r = {}) {
    const e = r || {}, t = {}, o = {};
    {
      e.event;
      const i = await (async () => {
        const s = String(n.syllabusTitle || "").trim(), c = String(n.syllabusDraftText || "").trim();
        if (!s) throw new Error("Enter a syllabus title.");
        if (!c) throw new Error("Enter syllabus content.");
        const u = s.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 100) || "syllabus", l = e.status === "published" ? "published" : "draft";
        return { title: s, text: c, syllabusKey: u, status: l, visibility: l === "published" ? "public" : "private", description: String(n.syllabusDescription || "").trim(), languageCode: "und", versionNumber: Math.max(1, Number(P.contextVersionNumber || 1)), hierarchy: n.finalHierarchy && typeof n.finalHierarchy == "object" ? n.finalHierarchy : {} };
      })();
      o.save_syllabus_prepare = i, t.customCodeResult = i;
    }
    a("isSavingSyllabus", !0);
    {
      const s = D({ description: "{{ stepResults.save_syllabus_prepare.description }}", hierarchy: "{{ stepResults.save_syllabus_prepare.hierarchy }}", languageCode: "{{ stepResults.save_syllabus_prepare.languageCode }}", status: "{{ stepResults.save_syllabus_prepare.status }}", syllabusKey: "{{ stepResults.save_syllabus_prepare.syllabusKey }}", syllabusText: "{{ stepResults.save_syllabus_prepare.text }}", title: "{{ stepResults.save_syllabus_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.save_syllabus_prepare.versionNumber }}", visibility: "{{ stepResults.save_syllabus_prepare.visibility }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0, s.syllabusKey, s.versionNumber, s.title, s.description, s.languageCode, s.syllabusText, s.hierarchy, s.status, s.visibility], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveProfessorSyllabus", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveProfessorSyllabus", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.save_syllabus_query = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const c = (Array.isArray(o.save_syllabus_query) ? o.save_syllabus_query : [o.save_syllabus_query])[0] || {};
        return c.result || c;
      })();
      o.save_syllabus_result = i, t.customCodeResult = i;
    }
    return a("selectedSyllabusId", o.save_syllabus_result.id), a("syllabusStatus", o.save_syllabus_prepare.status === "published" ? "Published for students under this professor." : "Syllabus draft saved."), await ne({}), a("isSavingSyllabus", !1), o.save_syllabus_result;
  }
  async function ns(r = {}) {
    a("syllabusDescription", (r || {}).value);
  }
  async function is(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        const i = n.strategyDraft && typeof n.strategyDraft == "object" ? n.strategyDraft : {}, s = JSON.parse(JSON.stringify(i)), c = Math.max(0, Number(n.activeStep || 0)), u = ["Classify the problem and state the goal.", "Form the characteristic equation and show the determinant expansion.", "Solve symbolically and verify every result."], l = u[Math.min(c, u.length - 1)], m = String(e.operation || "keep");
        if (s.requiredSteps = Array.isArray(s.requiredSteps) ? s.requiredSteps : [], s.forbiddenShortcuts = Array.isArray(s.forbiddenShortcuts) ? s.forbiddenShortcuts : [], s.teachingNotes = Array.isArray(s.teachingNotes) ? s.teachingNotes : [], m === "keep" && !s.requiredSteps.includes(l) && s.requiredSteps.push(l), m === "remove") {
          s.requiredSteps = s.requiredSteps.filter((w) => w !== l);
          const h = "Avoid this step when it is unnecessary: " + l;
          s.forbiddenShortcuts.includes(h) || s.forbiddenShortcuts.push(h);
        }
        if (m === "annotate") {
          const h = String(e.note || "Explain why this step belongs in similar problems.").trim();
          h && !s.teachingNotes.includes(h) && s.teachingNotes.push(h);
        }
        const b = [`Preferred method
` + String(s.preferredMethod || "Professor-guided method"), `Required steps
` + s.requiredSteps.map((h, w) => w + 1 + ". " + h).join(`
`), `Avoid
` + s.forbiddenShortcuts.map((h) => "• " + h).join(`
`), `Verification
` + (s.verificationRules || []).map((h) => "• " + h).join(`
`), `Teaching notes
` + s.teachingNotes.map((h) => "• " + h).join(`
`)];
        return { draft: s, text: b.join(`

`), operation: m, step: l };
      })();
      t.strategy_edit = o;
    }
    return a("strategyDraft", t.strategy_edit.draft), a("strategyDraftText", t.strategy_edit.text), a("strategyStatus", "Strategy draft updated from the representative solution. Approve it to create a new version."), G("stepOperationRequested", { note: e.note || "", operation: e.operation, stepId: e.stepId || "" }, !1).catch((o) => console.error("Module output delivery failed", o)), t.strategy_edit.draft;
  }
  async function ls(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        const i = String(e.value || ""), s = String(n.teacherQuestionCorrectValue || ""), c = String(P.locale || "en").toLowerCase(), u = !!i && i === s;
        return { value: i, feedback: (c === "hi" ? u ? "सही उत्तर।" : "फिर से प्रयास करें।" : c === "ta" ? u ? "சரியான பதில்." : "மீண்டும் முயற்சிக்கவும்." : u ? "Correct." : "Try again.") + (n.teacherQuestionExplanation ? " " + String(n.teacherQuestionExplanation) : "") };
      })();
      t.teacher_answer_read = o;
    }
    a("selectedTeacherAnswer", t.teacher_answer_read.value), a("teacherAnswerFeedback", t.teacher_answer_read.feedback);
  }
  async function cs(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        const i = e.item && typeof e.item == "object" ? e.item : {}, s = i.data && typeof i.data == "object" ? i.data : {}, c = s.type === "topic", u = c && Array.isArray(s.problems) ? s.problems.map(String) : [], l = u.map((m, b) => ({ id: String(i.id || "topic") + "-problem-" + (b + 1), label: b + 1 + ". " + m, data: { type: "problem", topicId: String(i.id || ""), text: m } }));
        return { id: String(i.id || ""), topic: c, title: String(s.title || i.label || ""), path: String(s.path || i.id || ""), problems: u, problemItems: l, text: u.map((m, b) => b + 1 + ". " + m).join(`
`) };
      })();
      t.select_node = o;
    }
    return a("selectedHierarchyIds", [t.select_node.id]), a("hasSelectedTopic", t.select_node.topic), a("selectedTopicId", t.select_node.topic ? t.select_node.id : ""), a("selectedTopicPath", t.select_node.path), a("hasProblemSolution", !1), a("selectedTopicTitle", t.select_node.title), a("selectedTopicHeading", t.select_node.topic ? "Problems for " + t.select_node.title : "Select a Topic to view problems"), a("selectedTopicProblems", t.select_node.problems), a("selectedTopicProblemItems", t.select_node.problemItems), a("selectedProblemIds", []), a("selectedProblemText", ""), a("selectedTopicProblemsText", t.select_node.text), a("structureStatus", t.select_node.topic ? "Topic selected. Add problems or set the hierarchy as context." : "Select a Topic node to view its problems."), t.select_node.topic && (await Yt({ fallbackProblems: t.select_node.problems, topicId: t.select_node.id, topicPath: t.select_node.path }), await Zt({ topicPath: t.select_node.path, topicTitle: t.select_node.title })), t.select_node;
  }
  async function us(r = {}) {
    a("showNewProblemForm", !1), a("newProblemText", "");
  }
  async function Yt(r = {}) {
    const e = r || {}, t = {}, o = {};
    {
      e.event;
      const i = await (async () => {
        const s = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context";
        return { contextKey: String(P.contextVersionKey || "").trim() || "rudra-scholar:" + s, versionNumber: Math.max(1, Number(P.contextVersionNumber || 1)), locale: String(P.locale || "en") };
      })();
      o.topic_problem_context = i, t.customCodeResult = i;
    }
    {
      const s = D({ contextKey: "{{ stepResults.topic_problem_context.contextKey }}", locale: "{{ stepResults.topic_problem_context.locale }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.topic_problem_context.versionNumber }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0, s.contextKey, s.versionNumber, s.topicPath, s.locale], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListTopicProblems", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarListTopicProblems", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.topic_problem_query = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const s = Array.isArray(o.topic_problem_query) ? o.topic_problem_query : [], c = s.map((b) => String(b && b.statement || "").trim()).filter(Boolean), u = Array.isArray(e.fallbackProblems) ? e.fallbackProblems.map(String) : [], l = [...new Set(c.length ? c : u)], m = l.map((b, h) => ({ id: String(e.topicId) + "-problem-" + (h + 1), label: h + 1 + ". " + b, data: { type: "problem", topicId: String(e.topicId), text: b, stored: c.length > 0 } }));
        return { problems: l, items: m, source: c.length ? "database" : "hierarchy" };
      })();
      o.topic_problem_merge = i, t.customCodeResult = i;
    }
    return a("selectedTopicProblems", o.topic_problem_merge.problems), a("selectedTopicProblemItems", o.topic_problem_merge.items), a("structureStatus", o.topic_problem_merge.source === "database" ? "Stored problems loaded for this Topic." : "Proposed problems shown. Select one to save its generated solution."), o.topic_problem_merge;
  }
  async function ds(r = {}) {
    const e = r || {}, t = {}, o = {};
    a("isGeneratingStructure", !0), a("structureStatus", "Generating a multilevel hierarchy with Gemini…"), G("aiStructureRequested", { languageCode: P.locale, sourceText: n.syllabusDraftText }, !1).catch((i) => console.error("Module output delivery failed", i));
    {
      e.event;
      const i = await (async () => {
        const s = String(n.syllabusDraftText || "").trim();
        if (!s) throw new Error("Paste a syllabus before proposing a hierarchy.");
        return ["You are an academic curriculum architect.", "Return JSON only with Programme > Semester > Subject > Unit > Topic hierarchy.", "Every topic must contain a problems array with 2 to 4 representative college-level mathematics problems.", 'Shape: {"hierarchy":{"id":"...","type":"programme","title":"...","children":[{"id":"...","type":"semester","title":"...","children":[{"id":"...","type":"subject","title":"...","children":[{"id":"...","type":"unit","title":"...","children":[{"id":"...","type":"topic","title":"...","problems":["..."],"children":[]}]}]}]}]}}.', "Use stable lowercase-hyphen IDs.", "Detect the language of the supplied syllabus and keep every human-readable hierarchy title and representative problem in that same source language. Do not mix languages. Keep JSON keys and mathematical notation unchanged.", "Syllabus:", s].join(`
`);
      })();
      o.structure_prompt = i, t.customCodeResult = i;
    }
    {
      const i = { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }, s = D({ prompt: "{{ stepResults.structure_prompt }}" }, i) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues: s, context: i }), signal: e.signal || AbortSignal.timeout(3e4) }), u = await c.json().catch(() => ({}));
      if (!c.ok) throw new Error(u.error || "Protected API request failed (" + c.status + ")");
      const l = u.data;
      o.structure_api = l, t.apiResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const s = o.structure_api || {}, c = s?.candidates?.[0]?.content?.parts, u = Array.isArray(c) ? c.map((_) => String(_?.text || "")).join("") : "";
        if (!u.trim()) throw new Error("Gemini returned no curriculum structure.");
        const l = JSON.parse(u.trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "")), m = ["programme", "semester", "subject", "unit", "topic"], b = (_, C) => String(_ || C).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || C, h = (_, C = 0, x = "item") => {
          if (!_ || typeof _ != "object" || C > 4) return null;
          const I = String(_.title || "").trim().slice(0, 180);
          if (!I) return null;
          const R = m[Math.min(C, 4)], ue = Array.isArray(_.children) ? _.children.slice(0, 16).map((U, W) => h(U, C + 1, R + "-" + W)).filter(Boolean) : [], F = R === "topic" && Array.isArray(_.problems) ? _.problems.map(String).map((U) => U.trim()).filter(Boolean).slice(0, 8) : [];
          return { id: b(_.id || I, x), type: R, title: I, children: ue, ...R === "topic" ? { problems: F.length ? F : ["Create a worked example for " + I + ".", "Add one conceptual verification question for " + I + ".", "Add one examination-style application problem for " + I + "."] } : {} };
        }, w = h(l.hierarchy || l, 0, "programme");
        if (!w) throw new Error("Gemini returned an invalid hierarchy.");
        const k = (_, C = []) => {
          const x = [...C, _.id];
          return { id: _.id, label: _.type[0].toUpperCase() + _.type.slice(1) + " · " + _.title, data: { type: _.type, title: _.title, path: x.join("/"), problems: _.problems || [] }, children: _.children.map((I) => k(I, x)) };
        };
        return { hierarchy: w, items: [k(w)] };
      })();
      o.structure_parse = i, t.customCodeResult = i;
    }
    return a("finalHierarchy", o.structure_parse.hierarchy), a("hierarchyItems", o.structure_parse.items), a("selectedHierarchyIds", []), a("hasSelectedTopic", !1), a("showSyllabusSetup", !1), a("isSyllabusSetupCollapsed", !0), a("isGeneratingStructure", !1), a("structureStatus", "Hierarchy ready. Select a Topic to view its problems."), G("aiStructureGenerated", { hierarchy: o.structure_parse.hierarchy, languageCode: P.locale }, !1).catch((i) => console.error("Module output delivery failed", i)), o.structure_parse;
  }
  async function Zt(r = {}) {
    const e = r || {}, t = {}, o = {};
    {
      e.event;
      const i = await (async () => {
        const s = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context";
        return { contextKey: String(P.contextVersionKey || "").trim() || "rudra-scholar:" + s, versionNumber: Math.max(1, Number(P.contextVersionNumber || 1)) };
      })();
      o.load_strategy_context = i, t.customCodeResult = i;
    }
    {
      const s = D({ contextKey: "{{ stepResults.load_strategy_context.contextKey }}", topicPath: "{{ args.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.load_strategy_context.versionNumber }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0, s.contextKey, s.versionNumber, s.topicPath], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.load_strategy_query = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const s = Array.isArray(o.load_strategy_query) ? o.load_strategy_query : [], c = s[0], u = c && typeof c == "object" ? c.result || c : null, l = u && u.strategy ? u.strategy : n.strategyDraft, m = u ? Number(u.strategyVersion || 0) : 0, b = u ? String(u.strategyId || "") : "", h = Array.isArray(l.requiredSteps) ? l.requiredSteps : [], w = Array.isArray(l.forbiddenShortcuts) ? l.forbiddenShortcuts : [], k = Array.isArray(l.verificationRules) ? l.verificationRules : [], _ = Array.isArray(l.teachingNotes) ? l.teachingNotes : [], C = [`Preferred method
` + String(l.preferredMethod || "Professor-guided method")];
        return h.length && C.push(`Required steps
` + h.map((x, I) => I + 1 + ". " + x).join(`
`)), w.length && C.push(`Avoid
` + w.map((x) => "• " + x).join(`
`)), k.length && C.push(`Verification
` + k.map((x) => "• " + x).join(`
`)), _.length && C.push(`Teaching notes
` + _.map((x) => "• " + x).join(`
`)), { strategy: l, version: m, id: b, text: C.join(`

`), status: u ? "Approved strategy v" + m + " loaded for " + e.topicTitle + "." : "No approved strategy yet. Refine the example and approve this draft." };
      })();
      o.load_strategy_parse = i, t.customCodeResult = i;
    }
    return a("strategyDraft", o.load_strategy_parse.strategy), a("strategyDraftText", o.load_strategy_parse.text), a("resolvedStrategy", o.load_strategy_parse.strategy), a("resolvedStrategyId", o.load_strategy_parse.id), a("resolvedStrategyVersion", o.load_strategy_parse.version), a("strategyStatus", o.load_strategy_parse.status), o.load_strategy_parse;
  }
  async function ms(r = {}) {
    a("syllabusTitle", (r || {}).value);
  }
  async function ps(r = {}) {
    const e = r || {}, t = {}, o = {};
    a("selectedSyllabusId", e.value);
    {
      const s = D({ syllabusId: "{{ args.value }}", userIdentity: "" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0, s.syllabusId], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarLoadProfessorSyllabus", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadProfessorSyllabus", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.saved_syllabus_query = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const c = (Array.isArray(o.saved_syllabus_query) ? o.saved_syllabus_query : [o.saved_syllabus_query])[0] || {}, u = c.result || c;
        if (!u || !u.id) throw new Error("The selected syllabus was not found.");
        const l = u.hierarchy && typeof u.hierarchy == "object" ? u.hierarchy : {}, m = (h, w = []) => {
          if (!h || !h.id) return null;
          const k = [...w, String(h.id)];
          return { id: String(h.id), label: String(h.type || "item").replace(/^./, (_) => _.toUpperCase()) + " · " + String(h.title || ""), data: { type: String(h.type || ""), title: String(h.title || ""), path: k.join("/"), problems: Array.isArray(h.problems) ? h.problems : [] }, children: Array.isArray(h.children) ? h.children.map((_) => m(_, k)).filter(Boolean) : [] };
        }, b = m(l);
        return { ...u, hierarchy: l, items: b ? [b] : [], hasHierarchy: !!b };
      })();
      o.saved_syllabus_parse = i, t.customCodeResult = i;
    }
    return a("syllabusTitle", o.saved_syllabus_parse.title), a("syllabusDescription", o.saved_syllabus_parse.description), a("syllabusDraftText", o.saved_syllabus_parse.syllabusText), a("finalHierarchy", o.saved_syllabus_parse.hierarchy), a("hierarchyItems", o.saved_syllabus_parse.items), a("syllabusStatus", "Loaded " + o.saved_syllabus_parse.title + " · " + o.saved_syllabus_parse.status), a("showSyllabusSetup", !o.saved_syllabus_parse.hasHierarchy), a("isSyllabusSetupCollapsed", o.saved_syllabus_parse.hasHierarchy), o.saved_syllabus_parse;
  }
  async function bs(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        const i = e.item && typeof e.item == "object" ? e.item : {}, s = i.data && typeof i.data == "object" ? i.data : {};
        return { id: String(i.id || ""), text: String(s.text || i.label || "") };
      })();
      t.problem_select_read = o;
    }
    return a("selectedProblemIds", [t.problem_select_read.id]), a("selectedProblemText", t.problem_select_read.text), a("selectedProblemStatement", t.problem_select_read.text), await ie({ solutionMode: "detailed", statement: t.problem_select_read.text }), t.problem_select_resolve;
  }
  async function hs(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        const i = String(n.newProblemText || "").trim();
        if (!i) throw new Error("Enter a problem statement.");
        if (!n.selectedTopicId) throw new Error("Select a Topic first.");
        const s = Array.isArray(n.selectedTopicProblems) ? n.selectedTopicProblems.map(String) : [], c = [.../* @__PURE__ */ new Set([...s, i])], u = c.map((l, m) => ({ id: n.selectedTopicId + "-problem-" + (m + 1), label: m + 1 + ". " + l, data: { type: "problem", topicId: n.selectedTopicId, text: l } }));
        return { text: i, problems: c, items: u };
      })();
      t.new_problem_prepare_item = o;
    }
    return a("selectedTopicProblems", t.new_problem_prepare_item.problems), a("selectedTopicProblemItems", t.new_problem_prepare_item.items), a("selectedProblemStatement", t.new_problem_prepare_item.text), a("showNewProblemForm", !1), await ie({ solutionMode: n.newProblemSolutionMode, statement: t.new_problem_prepare_item.text }), a("newProblemText", ""), t.new_problem_resolve;
  }
  async function ys(r = {}) {
    const e = r || {}, t = {};
    {
      e.event;
      const o = await (async () => {
        const i = Math.max(0, Number(e.stepIndex ?? e.index ?? 0)), s = n.blackboardLesson && typeof n.blackboardLesson == "object" ? n.blackboardLesson : {}, c = Array.isArray(s.steps) ? s.steps : [], u = c[i] || c[0] || {}, l = u.teacherQuestion && typeof u.teacherQuestion == "object" ? u.teacherQuestion : { prompt: String(u.teacherPrompt || ""), options: [], correctValue: "", explanation: "" };
        return { index: i, prompt: String(l.prompt || u.teacherPrompt || ""), options: Array.isArray(l.options) ? l.options : [], correctValue: String(l.correctValue || ""), explanation: String(l.explanation || "") };
      })();
      t.teacher_step_read = o;
    }
    a("activeStep", t.teacher_step_read.index), a("teacherQuestionPrompt", t.teacher_step_read.prompt), a("teacherQuestionOptions", t.teacher_step_read.options), a("teacherQuestionCorrectValue", t.teacher_step_read.correctValue), a("teacherQuestionExplanation", t.teacher_step_read.explanation), a("selectedTeacherAnswer", ""), a("teacherAnswerFeedback", "");
  }
  async function Xt(r = {}) {
    a("syllabusDraftText", P.syllabusText || "");
  }
  async function ie(r = {}) {
    const e = r || {}, t = {}, o = {};
    a("isResolvingProblem", !0), a("problemResolutionStatus", "Checking saved solutions for this hierarchy…"), a("hasProblemSolution", !1);
    {
      e.event;
      const i = await (async () => {
        const s = String(e.statement || "").trim();
        if (!s) throw new Error("Enter a problem statement.");
        if (!n.selectedTopicId) throw new Error("Select a Topic first.");
        const c = s.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim(), u = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context", l = String(P.contextVersionKey || "").trim() || "rudra-scholar:" + u, m = Math.max(1, Number(P.contextVersionNumber || 1)), b = e.solutionMode === "quick" ? "quick" : "detailed", h = String(n.selectedTopicPath || n.selectedTopicId), w = String(P.locale || "en").toLowerCase(), k = ["en", "hi", "ta"].includes(w) ? w : "en";
        return { statement: s, normalized: c, contextKey: l, versionNumber: m, mode: b, topicPath: h, locale: k, promptVersion: "v2-mcq-blackboard" };
      })();
      o.problem_prepare = i, t.customCodeResult = i;
    }
    {
      const s = D({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0, s.contextKey, s.versionNumber, s.topicPath], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.problem_strategy_lookup = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const s = Array.isArray(o.problem_strategy_lookup) ? o.problem_strategy_lookup : [], c = s[0], u = c && typeof c == "object" ? c.result || c : null;
        return { id: u ? String(u.strategyId || "") : "", version: u ? Number(u.strategyVersion || 0) : 0, strategy: u && u.strategy ? u.strategy : n.strategyDraft || {} };
      })();
      o.problem_strategy_result = i, t.customCodeResult = i;
    }
    {
      const s = D({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", locale: "{{ stepResults.problem_prepare.locale }}", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0, s.contextKey, s.versionNumber, s.topicPath, s.locale, s.normalizedProblem, s.solutionMode, s.promptVersion, s.strategyVersion], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarFindProblemSolution", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarFindProblemSolution", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.problem_lookup = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const s = o.problem_lookup, c = Array.isArray(s) ? s[0] : s, u = c && typeof c == "object" ? c.result || c : null;
        if (!u || !u.solution) return { hit: !1 };
        const l = u.solution || {}, m = Array.isArray(l.steps) ? l.steps : [];
        if (!(m.length > 0 && m.every((_) => _ && typeof _ == "object" && _.teacherQuestion && Array.isArray(_.teacherQuestion.options) && _.teacherQuestion.options.length >= 2))) return { hit: !1 };
        const h = { title: String(l.title || l.summary || "Worked solution"), lessonKind: "worked-example", problemLabel: String(l.problemLabel || "Problem"), problemStatement: String(l.problemStatement || o.problem_prepare.statement), learningGoal: String(l.learningGoal || l.summary || ""), steps: m.map((_, C) => ({ ..._, id: String(_.id || "step-" + (C + 1)), teacherPrompt: String(_.teacherQuestion.prompt || _.teacherPrompt || "") })) }, w = Array.isArray(l.checks) ? l.checks : [], k = [l.summary, m.map((_, C) => C + 1 + ". " + String(_.title || _.explanation || "")).join(`
`), l.answer, w.map(String).join(`
`)].filter(Boolean);
        return { hit: !0, result: u, solution: l, board: h, question: h.steps[0].teacherQuestion, text: k.join(`

`) };
      })();
      o.problem_cache_result = i, t.customCodeResult = i;
    }
    if (o.problem_cache_result.hit) {
      a("problemSolution", o.problem_cache_result.solution), a("problemSolutionText", o.problem_cache_result.text), a("blackboardLesson", o.problem_cache_result.board), a("blackboardTitle", o.problem_cache_result.board.title), a("blackboardProblemLabel", o.problem_cache_result.board.problemLabel), a("blackboardProblemStatement", o.problem_cache_result.board.problemStatement), a("blackboardLearningGoal", o.problem_cache_result.board.learningGoal), a("blackboardSteps", o.problem_cache_result.board.steps), a("activeStep", 0), a("teacherQuestionPrompt", o.problem_cache_result.question.prompt), a("teacherQuestionOptions", o.problem_cache_result.question.options), a("teacherQuestionCorrectValue", o.problem_cache_result.question.correctValue), a("teacherQuestionExplanation", o.problem_cache_result.question.explanation), a("selectedTeacherAnswer", ""), a("teacherAnswerFeedback", ""), a("problemResolutionStatus", "Loaded a saved solution created with strategy v" + o.problem_strategy_result.version + ". AI was not called.");
      {
        e.event;
        const i = await (async () => {
          const s = o.problem_prepare, c = o.problem_strategy_result.strategy || {};
          return ["You are a college mathematics professor creating an interactive blackboard lesson.", 'Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.', "Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.", "Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in " + (s.locale === "hi" ? "Hindi" : s.locale === "ta" ? "Tamil" : "English") + " only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.", "Follow this approved teaching strategy exactly: " + JSON.stringify(c), "Solution mode: " + s.mode + ".", "Language code: " + s.locale + ".", "Context hierarchy: " + JSON.stringify(n.finalHierarchy || {}), "Selected topic path: " + s.topicPath, "Problem: " + s.statement].join(`
`);
        })();
        o.problem_ai_prompt = i, t.customCodeResult = i;
      }
      {
        const i = { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }, s = D({ prompt: "{{ stepResults.problem_ai_prompt }}" }, i) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: s, context: i }), signal: e.signal || AbortSignal.timeout(3e4) }), u = await c.json().catch(() => ({}));
        if (!c.ok) throw new Error(u.error || "Protected API request failed (" + c.status + ")");
        const l = u.data;
        o.problem_ai_call = l, t.apiResult = l;
      }
      {
        e.event;
        const i = await (async () => {
          const c = (o.problem_ai_call || {})?.candidates?.[0]?.content?.parts, u = Array.isArray(c) ? c.map((x) => String(x?.text || "")).join("") : "";
          if (!u.trim()) throw new Error("Gemini returned no solution.");
          const l = JSON.parse(u.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), m = /* @__PURE__ */ new Set(["heading", "text", "equation", "matrix", "list", "definition", "theorem", "proof", "table", "graph", "note"]), b = Array.isArray(l.steps) ? l.steps : [];
          if (!b.length) throw new Error("Gemini returned no lesson steps.");
          const h = b.map((x, I) => {
            const R = x && x.teacherQuestion && typeof x.teacherQuestion == "object" ? x.teacherQuestion : {}, F = (Array.isArray(R.options) ? R.options : []).slice(0, 4).map((q, Y) => typeof q == "object" ? { label: String(q.label || ""), value: String(q.value || String.fromCharCode(97 + Y)) } : { label: String(q), value: String.fromCharCode(97 + Y) }).filter((q) => q.label);
            if (F.length < 2) throw new Error("Gemini must provide multiple-choice options for every step.");
            const W = new Set(F.map((q) => q.value)).has(String(R.correctValue || "")) ? String(R.correctValue) : F[0].value, J = { prompt: String(R.prompt || x.teacherPrompt || ""), options: F, correctValue: W, explanation: String(R.explanation || "") }, $ = Array.isArray(x.content) ? x.content.filter((q) => q && m.has(q.type)) : [];
            return { id: String(x.id || "step-" + (I + 1)), title: String(x.title || "Step " + (I + 1)), narration: String(x.narration || x.explanation || ""), explanation: String(x.explanation || ""), simpleExplanation: String(x.simpleExplanation || ""), why: String(x.why || ""), commonMistake: String(x.commonMistake || ""), content: $.length ? $ : [{ type: "text", text: String(x.explanation || "") }], teacherPrompt: J.prompt, teacherQuestion: J };
          }), w = { title: String(l.title || l.summary || "Worked solution"), problemLabel: String(l.problemLabel || "Problem"), problemStatement: String(l.problemStatement || o.problem_prepare.statement), learningGoal: String(l.learningGoal || l.summary || ""), summary: String(l.summary || ""), steps: h, answer: String(l.answer || ""), checks: Array.isArray(l.checks) ? l.checks.map(String) : [] }, k = { title: w.title, lessonKind: "worked-example", problemLabel: w.problemLabel, problemStatement: w.problemStatement, learningGoal: w.learningGoal, steps: h }, _ = h[0].teacherQuestion, C = [w.summary, h.map((x, I) => I + 1 + ". " + x.title).join(`
`), w.answer, w.checks.join(`
`)].filter(Boolean);
          return { solution: w, board: k, question: _, text: C.join(`

`) };
        })();
        o.problem_ai_parse = i, t.customCodeResult = i;
      }
      {
        const s = D({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "gemini-2.5-flash", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
        delete s.userIdentity;
        const c = [void 0, s.contextKey, s.versionNumber, s.hierarchy, s.locale, s.topicPath, s.topicId, s.statement, s.normalizedProblem, s.solutionMode, s.promptVersion, s.solution, s.provider, s.model, s.strategyId, s.strategyVersion, s.strategySnapshot], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let l;
        if (typeof u == "function")
          l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: s, signal: e.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
          if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
          l = b.data;
        }
        o.problem_store = l, t.queryResult = l;
      }
      return a("problemSolution", o.problem_ai_parse.solution), a("problemSolutionText", o.problem_ai_parse.text), a("blackboardLesson", o.problem_ai_parse.board), a("blackboardTitle", o.problem_ai_parse.board.title), a("blackboardProblemLabel", o.problem_ai_parse.board.problemLabel), a("blackboardProblemStatement", o.problem_ai_parse.board.problemStatement), a("blackboardLearningGoal", o.problem_ai_parse.board.learningGoal), a("blackboardSteps", o.problem_ai_parse.board.steps), a("activeStep", 0), a("teacherQuestionPrompt", o.problem_ai_parse.question.prompt), a("teacherQuestionOptions", o.problem_ai_parse.question.options), a("teacherQuestionCorrectValue", o.problem_ai_parse.question.correctValue), a("teacherQuestionExplanation", o.problem_ai_parse.question.explanation), a("selectedTeacherAnswer", ""), a("teacherAnswerFeedback", ""), a("problemResolutionStatus", "New problem solved with approved strategy v" + o.problem_strategy_result.version + " and saved for reuse."), a("isResolvingProblem", !1), a("hasProblemSolution", !0), n.problemSolution;
    } else {
      {
        e.event;
        const i = await (async () => {
          const s = o.problem_prepare, c = o.problem_strategy_result.strategy || {};
          return ["You are a college mathematics professor creating an interactive blackboard lesson.", 'Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.', "Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.", "Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in " + (s.locale === "hi" ? "Hindi" : s.locale === "ta" ? "Tamil" : "English") + " only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.", "Follow this approved teaching strategy exactly: " + JSON.stringify(c), "Solution mode: " + s.mode + ".", "Language code: " + s.locale + ".", "Context hierarchy: " + JSON.stringify(n.finalHierarchy || {}), "Selected topic path: " + s.topicPath, "Problem: " + s.statement].join(`
`);
        })();
        o.problem_ai_prompt = i, t.customCodeResult = i;
      }
      {
        const i = { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }, s = D({ prompt: "{{ stepResults.problem_ai_prompt }}" }, i) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues: s, context: i }), signal: e.signal || AbortSignal.timeout(3e4) }), u = await c.json().catch(() => ({}));
        if (!c.ok) throw new Error(u.error || "Protected API request failed (" + c.status + ")");
        const l = u.data;
        o.problem_ai_call = l, t.apiResult = l;
      }
      {
        e.event;
        const i = await (async () => {
          const c = (o.problem_ai_call || {})?.candidates?.[0]?.content?.parts, u = Array.isArray(c) ? c.map((x) => String(x?.text || "")).join("") : "";
          if (!u.trim()) throw new Error("Gemini returned no solution.");
          const l = JSON.parse(u.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")), m = /* @__PURE__ */ new Set(["heading", "text", "equation", "matrix", "list", "definition", "theorem", "proof", "table", "graph", "note"]), b = Array.isArray(l.steps) ? l.steps : [];
          if (!b.length) throw new Error("Gemini returned no lesson steps.");
          const h = b.map((x, I) => {
            const R = x && x.teacherQuestion && typeof x.teacherQuestion == "object" ? x.teacherQuestion : {}, F = (Array.isArray(R.options) ? R.options : []).slice(0, 4).map((q, Y) => typeof q == "object" ? { label: String(q.label || ""), value: String(q.value || String.fromCharCode(97 + Y)) } : { label: String(q), value: String.fromCharCode(97 + Y) }).filter((q) => q.label);
            if (F.length < 2) throw new Error("Gemini must provide multiple-choice options for every step.");
            const W = new Set(F.map((q) => q.value)).has(String(R.correctValue || "")) ? String(R.correctValue) : F[0].value, J = { prompt: String(R.prompt || x.teacherPrompt || ""), options: F, correctValue: W, explanation: String(R.explanation || "") }, $ = Array.isArray(x.content) ? x.content.filter((q) => q && m.has(q.type)) : [];
            return { id: String(x.id || "step-" + (I + 1)), title: String(x.title || "Step " + (I + 1)), narration: String(x.narration || x.explanation || ""), explanation: String(x.explanation || ""), simpleExplanation: String(x.simpleExplanation || ""), why: String(x.why || ""), commonMistake: String(x.commonMistake || ""), content: $.length ? $ : [{ type: "text", text: String(x.explanation || "") }], teacherPrompt: J.prompt, teacherQuestion: J };
          }), w = { title: String(l.title || l.summary || "Worked solution"), problemLabel: String(l.problemLabel || "Problem"), problemStatement: String(l.problemStatement || o.problem_prepare.statement), learningGoal: String(l.learningGoal || l.summary || ""), summary: String(l.summary || ""), steps: h, answer: String(l.answer || ""), checks: Array.isArray(l.checks) ? l.checks.map(String) : [] }, k = { title: w.title, lessonKind: "worked-example", problemLabel: w.problemLabel, problemStatement: w.problemStatement, learningGoal: w.learningGoal, steps: h }, _ = h[0].teacherQuestion, C = [w.summary, h.map((x, I) => I + 1 + ". " + x.title).join(`
`), w.answer, w.checks.join(`
`)].filter(Boolean);
          return { solution: w, board: k, question: _, text: C.join(`

`) };
        })();
        o.problem_ai_parse = i, t.customCodeResult = i;
      }
      {
        const s = D({ contextKey: "{{ stepResults.problem_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.problem_prepare.locale }}", model: "gemini-2.5-flash", normalizedProblem: "{{ stepResults.problem_prepare.normalized }}", promptVersion: "{{ stepResults.problem_prepare.promptVersion }}", provider: "gemini", solution: "{{ stepResults.problem_ai_parse.solution }}", solutionMode: "{{ stepResults.problem_prepare.mode }}", statement: "{{ stepResults.problem_prepare.statement }}", strategyId: "{{ stepResults.problem_strategy_result.id }}", strategySnapshot: "{{ stepResults.problem_strategy_result.strategy }}", strategyVersion: "{{ stepResults.problem_strategy_result.version }}", topicId: "{{ state.selectedTopicId }}", topicPath: "{{ stepResults.problem_prepare.topicPath }}", userIdentity: "", versionNumber: "{{ stepResults.problem_prepare.versionNumber }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
        delete s.userIdentity;
        const c = [void 0, s.contextKey, s.versionNumber, s.hierarchy, s.locale, s.topicPath, s.topicId, s.statement, s.normalizedProblem, s.solutionMode, s.promptVersion, s.solution, s.provider, s.model, s.strategyId, s.strategyVersion, s.strategySnapshot], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
        let l;
        if (typeof u == "function")
          l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: s, signal: e.signal });
        else {
          const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
          if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
          l = b.data;
        }
        o.problem_store = l, t.queryResult = l;
      }
      return a("problemSolution", o.problem_ai_parse.solution), a("problemSolutionText", o.problem_ai_parse.text), a("blackboardLesson", o.problem_ai_parse.board), a("blackboardTitle", o.problem_ai_parse.board.title), a("blackboardProblemLabel", o.problem_ai_parse.board.problemLabel), a("blackboardProblemStatement", o.problem_ai_parse.board.problemStatement), a("blackboardLearningGoal", o.problem_ai_parse.board.learningGoal), a("blackboardSteps", o.problem_ai_parse.board.steps), a("activeStep", 0), a("teacherQuestionPrompt", o.problem_ai_parse.question.prompt), a("teacherQuestionOptions", o.problem_ai_parse.question.options), a("teacherQuestionCorrectValue", o.problem_ai_parse.question.correctValue), a("teacherQuestionExplanation", o.problem_ai_parse.question.explanation), a("selectedTeacherAnswer", ""), a("teacherAnswerFeedback", ""), a("problemResolutionStatus", "New problem solved with approved strategy v" + o.problem_strategy_result.version + " and saved for reuse."), a("isResolvingProblem", !1), a("hasProblemSolution", !0), n.problemSolution;
    }
  }
  async function gs(r = {}) {
    const e = r || {}, t = {}, o = {};
    a("isSavingStrategy", !0);
    {
      e.event;
      const i = await (async () => {
        if (!n.selectedTopicId) throw new Error("Select a Topic before approving a strategy.");
        const s = n.finalHierarchy && n.finalHierarchy.id ? String(n.finalHierarchy.id) : "context";
        return { contextKey: String(P.contextVersionKey || "").trim() || "rudra-scholar:" + s, versionNumber: Math.max(1, Number(P.contextVersionNumber || 1)), locale: String(P.locale || "en"), scopePath: String(n.selectedTopicPath || n.selectedTopicId), scopeType: "topic", title: String(n.selectedTopicTitle || "Topic") + " teaching strategy", strategy: n.strategyDraft };
      })();
      o.context_prepare = i, t.customCodeResult = i;
    }
    {
      const s = D({ contextKey: "{{ stepResults.context_prepare.contextKey }}", hierarchy: "{{ state.finalHierarchy }}", locale: "{{ stepResults.context_prepare.locale }}", scopePath: "{{ stepResults.context_prepare.scopePath }}", scopeType: "{{ stepResults.context_prepare.scopeType }}", strategy: "{{ stepResults.context_prepare.strategy }}", title: "{{ stepResults.context_prepare.title }}", userIdentity: "", versionNumber: "{{ stepResults.context_prepare.versionNumber }}" }, { args: e, inputs: P, state: n, sharedState: L, applicationState: M, pageState: Q, pageData: O, serverData: j, vars: t, stepResults: o }) || {};
      delete s.userIdentity;
      const c = [void 0, s.contextKey, s.versionNumber, s.hierarchy, s.locale, s.scopePath, s.scopeType, s.title, s.strategy], u = p.executeDatabaseQuery || p.runtime?.executeDatabaseQuery;
      let l;
      if (typeof u == "function")
        l = await u({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveContextStrategy", parameters: c, namedParameters: s, signal: e.signal });
      else {
        const m = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSaveContextStrategy", parameters: c, namedParameters: s }), signal: e.signal }), b = await m.json().catch(() => ({}));
        if (!m.ok || b.success === !1) throw new Error(b.error || "Database query failed (" + m.status + ")");
        l = b.data;
      }
      o.context_save_query = l, t.queryResult = l;
    }
    {
      e.event;
      const i = await (async () => {
        const s = Array.isArray(o.context_save_query) ? o.context_save_query : [], c = s[0], u = c && typeof c == "object" ? c.result || c : {};
        return { id: String(u.strategyId || ""), version: Number(u.strategyVersion || 0), strategy: u.strategy || o.context_prepare.strategy };
      })();
      o.context_save_parse = i, t.customCodeResult = i;
    }
    return a("resolvedStrategyId", o.context_save_parse.id), a("resolvedStrategyVersion", o.context_save_parse.version), a("resolvedStrategy", o.context_save_parse.strategy), a("strategyStatus", "Approved strategy v" + o.context_save_parse.version + " saved for " + n.selectedTopicTitle + "."), a("structureStatus", "Selected hierarchy and teaching strategy are now the active context."), a("isSavingStrategy", !1), G("contextSetRequested", { hierarchy: n.finalHierarchy, languageCode: P.locale, scopePath: n.selectedTopicPath, selectedTopicId: n.selectedTopicId, strategy: o.context_save_parse.strategy, strategyId: o.context_save_parse.id, strategyVersion: o.context_save_parse.version }, !1).catch((i) => console.error("Module output delivery failed", i)), { hierarchy: n.finalHierarchy, scopePath: n.selectedTopicPath, strategy: o.context_save_parse.strategy, strategyId: o.context_save_parse.id, strategyVersion: o.context_save_parse.version };
  }
  async function le(r = {}) {
    const e = {};
    return await $t({}), await Xt({}), e.scenario_access;
  }
  async function fs(r = {}) {
    G("contextPublishRequested", { contextDraft: P.contextDraft, immutable: !0 }, !1).catch((e) => console.error("Module output delivery failed", e));
  }
  const Ss = {
    collapseSyllabusSetup: Yr,
    setSyllabusText: Zr,
    loadProfessorSyllabi: ne,
    initializeProfessorAccess: $t,
    setNewProblemText: Xr,
    addProblems: es,
    expandSyllabusSetup: ts,
    setNewProblemSolutionMode: rs,
    shareLesson: ss,
    openNewProblemForm: as,
    saveProfessorSyllabus: os,
    setSyllabusDescription: ns,
    editStep: is,
    selectTeacherAnswer: ls,
    selectHierarchyNode: cs,
    closeNewProblemForm: us,
    loadTopicProblems: Yt,
    requestStructure: ds,
    loadContextStrategy: Zt,
    setSyllabusTitle: ms,
    selectSavedSyllabus: ps,
    selectProblem: bs,
    submitNewProblem: hs,
    selectStep: ys,
    syncSyllabusInput: Xt,
    resolveProblemSolution: ie,
    setHierarchyContext: gs,
    refreshProfessorScenario: le,
    publishContext: fs
  }, xs = {
    collapseSyllabusSetup: [],
    setSyllabusText: ["value"],
    loadProfessorSyllabi: [],
    initializeProfessorAccess: [],
    setNewProblemText: ["value"],
    addProblems: [],
    expandSyllabusSetup: [],
    setNewProblemSolutionMode: ["value"],
    shareLesson: [],
    openNewProblemForm: [],
    saveProfessorSyllabus: ["status"],
    setSyllabusDescription: ["value"],
    editStep: ["operation", "stepId", "note"],
    selectTeacherAnswer: ["value"],
    selectHierarchyNode: ["item", "index", "depth"],
    closeNewProblemForm: [],
    loadTopicProblems: ["topicPath", "topicId", "fallbackProblems"],
    requestStructure: [],
    loadContextStrategy: ["topicPath", "topicTitle"],
    setSyllabusTitle: ["value"],
    selectSavedSyllabus: ["value"],
    selectProblem: ["item", "index", "depth"],
    submitNewProblem: [],
    selectStep: ["stepIndex", "index"],
    syncSyllabusInput: [],
    resolveProblemSolution: ["statement", "solutionMode"],
    setHierarchyContext: [],
    refreshProfessorScenario: [],
    publishContext: []
  }, T = (r, e = {}, t = []) => {
    const o = Ss[r];
    if (o) {
      const l = xs[r] || [];
      return o(Object.fromEntries(l.map((m, b) => {
        const h = Object.prototype.hasOwnProperty.call(e, m) ? e[m] : void 0;
        return [m, (h === "" || h === void 0) && t[b] !== void 0 ? t[b] : m === "event" && (h === "" || h === void 0) ? t[0] : h];
      })));
    }
    const i = or?.[r];
    if (typeof i == "function")
      return i(Object.keys(e).length > 0 ? e : t[0]);
    const [s, c] = String(r).split("."), u = typeof globalThis < "u" ? globalThis[s]?.[c] : void 0;
    if (typeof u == "function") return u(...Object.values(e));
    console.warn("Rudra action '" + r + "' is not available in this runtime.");
  }, H = de(/* @__PURE__ */ new Map()), ce = Z((r, e, t, o) => {
    const i = H.current.get(r);
    if (e === "exhaust" && i?.promise) return i.promise;
    e === "takeLatest" && i?.controller?.abort();
    const s = new AbortController(), c = () => Promise.resolve().then(() => t(s.signal)), u = e === "queue" && i?.promise ? i.promise.catch(() => {
    }).then(c) : c();
    return H.current.set(r, { controller: s, promise: u }), u.catch((l) => {
      l?.name !== "AbortError" && console.error(o, l);
    }).finally(() => {
      H.current.get(r)?.promise === u && H.current.delete(r);
    }), u;
  }, []);
  V(() => () => {
    for (const r of H.current.values()) r.controller?.abort();
    H.current.clear();
  }, []), V(() => {
    ce("professor_scenario_mountrefreshProfessorScenario", "takeLatest", (r) => le({}), "Module mount lifecycle failed:");
  }, []), V(() => {
    ce("professor_syllabi_mountloadProfessorSyllabi", "takeLatest", (r) => ne({ signal: r }), "Module mount lifecycle failed:");
  }, []);
  const er = de(!1);
  return V(() => {
    er.current || (er.current = !0), Ht(structuredClone(!0)), Kt(structuredClone("Professor approval required")), xt(structuredClone("Sign in with an approved professor account to use this studio.")), Dt(structuredClone("Verification pending")), Ie(structuredClone(`Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation`)), Pt(structuredClone("")), It(structuredClone("Select a saved syllabus or save this draft.")), Ue(structuredClone(!0)), qt(structuredClone(!1)), bt(structuredClone({ children: [{ children: [{ children: [{ children: [{ children: [], id: "matrix-operations", title: "Matrix operations", type: "topic" }, { children: [], id: "eigenvalues", title: "Eigenvalues and diagonalisation", type: "topic" }], id: "matrices", title: "Unit 1 · Matrices and systems", type: "unit" }], id: "engineering-mathematics-i", title: "Engineering Mathematics I", type: "subject" }], id: "semester-1", title: "Semester 1", type: "semester" }], id: "engineering-mathematics", title: "B.E. Mathematics", type: "programme" })), Xe(structuredClone([{ children: [{ children: [{ children: [{ children: [{ children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues", problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i/matrices", problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { path: "engineering-mathematics/semester-1/engineering-mathematics-i", problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { path: "engineering-mathematics/semester-1", problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { path: "engineering-mathematics", problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }])), Ae(structuredClone([])), Ee(structuredClone(!1)), ht(structuredClone("")), st(structuredClone("")), Ut(structuredClone("")), _t(structuredClone("Selected topic problems")), ke(structuredClone([])), ze(structuredClone([])), rt(structuredClone([])), Ft(structuredClone("")), dt(structuredClone("")), Lt(structuredClone(!1)), ft(structuredClone({})), ct(structuredClone("")), Oe(structuredClone("Select a problem to load its saved solution.")), ut(structuredClone(!1)), ot(structuredClone(0)), Gt(structuredClone("")), Je(structuredClone("Select one answer.")), Qt(structuredClone({ learningGoal: "Form the characteristic equation, solve it and verify the eigenvalues.", lessonKind: "worked-example", problemLabel: "Representative problem · Linear algebra", problemStatement: "Find the eigenvalues of A = [[2, 1], [1, 2]].", steps: [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }], title: "Find the eigenvalues of a 2 × 2 matrix" })), pt(structuredClone("Find the eigenvalues of a 2 × 2 matrix")), Me(structuredClone("Representative problem · Linear algebra")), Nt(structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]].")), Ke(structuredClone("Form the characteristic equation, solve it and verify the eigenvalues.")), Ye(structuredClone([{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: "0", value: "b" }, { label: "1", value: "c" }, { label: "3", value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }])), Ve(structuredClone(!1)), Tt(structuredClone({ exampleProblem: "Find the eigenvalues of A = [[2, 1], [1, 2]].", explanationDepth: "detailed", forbiddenShortcuts: ["Do not skip the characteristic equation.", "Do not state roots without verification."], preferredMethod: "Characteristic-polynomial method", requiredSteps: ["Classify the problem and state the goal.", "Name the governing theorem or definition before using it.", "Show the determinant or algebraic expansion.", "Solve symbolically before substituting numerical conclusions.", "Verify the final result."], scopeType: "topic", teachingNotes: ["Prefer a direct 2×2 method when it is clearer than row reduction."], verificationRules: ["Substitute each result into the defining equation.", "State why the verification is sufficient."] })), ce("professor_scenario_inputsrefreshProfessorScenario", "takeLatest", (r) => le({}), "Module input lifecycle failed:");
  }, [_e, ve, he, fe, Pe, ge, we, Se, ye, xe]), /* @__PURE__ */ v("div", { ref: ee, className: "rudra-module-wrapper", children: g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
    "      ",
    /* @__PURE__ */ d(N, { id: "root", className: "block rs-studio", children: [
      "      ",
      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
        "      ",
        /* @__PURE__ */ d(N, { id: "inner", className: "flex flex-col rs-studio-inner", children: [
          "      ",
          g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
            "      ",
            /* @__PURE__ */ d(N, { id: "head", className: "flex flex-wrap rs-studio-head", children: [
              "      ",
              g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                "      ",
                /* @__PURE__ */ d(N, { id: "head_copy", className: "flex flex-col rs-head-copy", children: [
                  "      ",
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(vs, { id: "badge", label: /* @__PURE__ */ ((r) => r === void 0 ? "Verification pending" : r)(jt), ariaLabel: "Professor verification status" })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(A, { id: "title", className: "rs-title", content: /* @__PURE__ */ ((r) => r === void 0 ? "Professor context studio" : r)(X?.i18n?.title), as: "h2" })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(A, { id: "subtitle", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((r) => r === void 0 ? "Import a semester and steer representative solutions." : r)(X?.i18n?.subtitle) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          g(Vt) && /* @__PURE__ */ d(y, { children: [
            "      ",
            /* @__PURE__ */ d(rr, { id: "verification", icon: /* @__PURE__ */ d(y, { children: [
              "      ",
              g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                "      ",
                /* @__PURE__ */ v(A, { id: "verification_icon", className: "rs-verification-icon", as: "span", content: "!" })
              ] })
            ] }), title: /* @__PURE__ */ d(y, { children: [
              "      ",
              g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                "      ",
                /* @__PURE__ */ v(A, { id: "verification_title", as: "h4", content: /* @__PURE__ */ ((r) => r === void 0 ? "Professor approval required" : r)(Bt) })
              ] })
            ] }), variant: "warning", appearance: "soft", live: "polite", children: [
              "      ",
              g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                "      ",
                /* @__PURE__ */ v(A, { id: "verification_message", as: "p", content: /* @__PURE__ */ ((r) => r === void 0 ? "Sign in with an approved professor account to use this studio." : r)(St) })
              ] })
            ] })
          ] }),
          g(Ge) && /* @__PURE__ */ d(y, { children: [
            "      ",
            /* @__PURE__ */ d(N, { id: "grid", className: "grid rs-grid", children: [
              "      ",
              g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                "      ",
                /* @__PURE__ */ d(sr, { id: "left", className: "rs-panel", as: "section", theme: "auto", children: [
                  "      ",
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "syllabus_catalog", className: "block rs-syllabus-catalog", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "syllabus_catalog_title", as: "h4", content: "Your saved syllabi" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(ar, { id: "saved_syllabus_select", name: "savedSyllabus", size: "md", label: "Continue with a saved syllabus", value: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(wt), radius: "md", options: /* @__PURE__ */ ((r) => r === void 0 ? [] : r)(nt), placeholder: "Select a syllabus", onChangeValue: (...r) => T("selectSavedSyllabus", {}, r) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "refresh_syllabi", onAction: (...r) => T("loadProfessorSyllabi", {}, r), loadingText: "Loading syllabi…", label: "Refresh syllabi", theme: "auto", loading: /* @__PURE__ */ ((r) => r === void 0 ? !1 : r)(et), variant: "ghost" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "save_syllabus_draft", onAction: (...r) => T("saveProfessorSyllabus", {}, r), loadingText: "Saving syllabus…", label: "Save current syllabus", theme: "auto", loading: /* @__PURE__ */ ((r) => r === void 0 ? !1 : r)(ae), variant: "outline" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "publish_syllabus_students", loading: /* @__PURE__ */ ((r) => r === void 0 ? !1 : r)(ae), variant: "primary", onAction: (...r) => T("saveProfessorSyllabus", {}, r), loadingText: "Publishing syllabus…", label: "Publish current syllabus for students", theme: "auto" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "syllabus_catalog_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((r) => r === void 0 ? "Select a saved syllabus or save this draft." : r)(Ct) })
                      ] })
                    ] })
                  ] }),
                  g(K) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "syllabus_metadata", className: "block rs-syllabus-metadata", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(_s, { id: "syllabus_title_input", name: "syllabusTitle", size: "md", label: "Syllabus title", value: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(Ot), required: !0, placeholder: "Engineering Mathematics I", onChangeValue: (...r) => T("setSyllabusTitle", {}, r) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(me, { id: "syllabus_description_input", name: "syllabusDescription", rows: 3, label: "Description", value: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(De), placeholder: "What students will learn", onChangeValue: (...r) => T("setSyllabusDescription", {}, r) })
                      ] })
                    ] })
                  ] }),
                  g(At) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(E, { id: "edit_syllabus_setup", label: "Edit syllabus / Regenerate", theme: "auto", variant: "outline", onAction: (...r) => T("expandSyllabusSetup", {}, r) })
                  ] }),
                  g(K) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(A, { id: "left_title", as: "h3", content: /* @__PURE__ */ ((r) => r === void 0 ? "Semester syllabus" : r)(X?.i18n?.import) })
                  ] }),
                  g(K) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(me, { id: "syllabus", label: "Paste one section or a complete semester", value: /* @__PURE__ */ ((r) => r === void 0 ? `Semester 1 · Linear Algebra
Unit 1: Matrices and systems
Unit 2: Vector spaces
Unit 3: Eigenvalues and diagonalisation` : r)(Ce), helperText: "AI proposes programme → semester → subject → unit → topic. You approve before anything is saved.", onChangeValue: (...r) => T("setSyllabusText", {}, r), name: "syllabus", rows: 10 })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(A, { id: "structure_status", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((r) => r === void 0 ? "Review the proposed hierarchy, add problems, then set it as context." : r)(Ne) })
                  ] }),
                  g(K) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "syllabus_actions", className: "flex flex-wrap rs-syllabus-actions", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "structure", loadingText: "Generating hierarchy…", label: "Propose structure with AI", theme: "auto", loading: /* @__PURE__ */ ((r) => r === void 0 ? !1 : r)(je), variant: "primary", onAction: (...r) => T("requestStructure", {}, r) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "collapse_syllabus_setup", theme: "auto", variant: "ghost", onAction: (...r) => T("collapseSyllabusSetup", {}, r), label: "Hide setup" })
                      ] })
                    ] })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(rr, { id: "rules", appearance: "outlined", live: "off", title: "Reusable context draft", variant: "info" })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(A, { id: "final_hierarchy_title", as: "h3", content: "Final hierarchy" })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(tr, { id: "tree", className: "w-full rs-tree-view", items: /* @__PURE__ */ ((r) => r === void 0 ? [{ children: [{ children: [{ children: [{ children: [{ children: [], data: { problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Matrix operations", type: "topic" }, id: "matrix-operations", label: "Topic · Matrix operations" }, { children: [], data: { problems: ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], title: "Eigenvalues and diagonalisation", type: "topic" }, id: "eigenvalues", label: "Topic · Eigenvalues and diagonalisation" }], data: { problems: [], title: "Unit 1 · Matrices and systems", type: "unit" }, id: "matrices", label: "Unit · Unit 1 · Matrices and systems" }], data: { problems: [], title: "Engineering Mathematics I", type: "subject" }, id: "engineering-mathematics-i", label: "Subject · Engineering Mathematics I" }], data: { problems: [], title: "Semester 1", type: "semester" }, id: "semester-1", label: "Semester · Semester 1" }], data: { problems: [], title: "B.E. Mathematics", type: "programme" }, id: "engineering-mathematics", label: "Programme · B.E. Mathematics" }] : r)(Ze), indent: 22, showLines: !0, selectedIds: /* @__PURE__ */ ((r) => r === void 0 ? [] : r)(Te), defaultExpandAll: !0, expandOnItemClick: !0, onItemClick: (...r) => T("selectHierarchyNode", {}, r), selectionMode: "single", showDefaultIcons: !0, children: (r) => (() => {
                      const e = { ...r || {}, item: r?.item ?? r, index: r?.index ?? r?.i ?? 0 };
                      return /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "hierarchy_item_label", className: "rs-tree-label-text", content: /* @__PURE__ */ ((t) => t === void 0 ? "Untitled item" : t)(e?.item?.label), as: "span" })
                      ] });
                    })() })
                  ] }),
                  g(B) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(A, { id: "problems_title", as: "h4", content: /* @__PURE__ */ ((r) => r === void 0 ? "Selected topic problems" : r)(vt) })
                  ] }),
                  g(B) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(tr, { id: "problems_text", className: "rs-problem-list", items: /* @__PURE__ */ ((r) => r === void 0 ? [] : r)(Fe), showLines: !1, selectedIds: /* @__PURE__ */ ((r) => r === void 0 ? [] : r)(tt), selectionMode: "single", showDefaultIcons: !0, expandOnItemClick: !0, indent: 20, emptyText: "No problems yet. Use Add problems to create examples.", onItemClick: (...r) => T("selectProblem", {}, r), defaultExpandAll: !0, children: (r) => (() => {
                      const e = { ...r || {}, item: r?.item ?? r, index: r?.index ?? r?.i ?? 0 };
                      return /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "problem_item_label", className: "rs-tree-label-text", as: "span", content: /* @__PURE__ */ ((t) => t === void 0 ? "Untitled item" : t)(e?.item?.label) })
                      ] });
                    })() })
                  ] }),
                  g(it) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "new_problem_form", className: "block rs-new-problem-form", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "new_problem_title", as: "h4", content: "Add a context-scoped problem" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(me, { id: "new_problem_input", autoResize: !0, placeholder: "Enter a new problem for the selected topic", onChangeValue: (...r) => T("setNewProblemText", {}, r), name: "newProblem", rows: 5, label: "Problem statement", value: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(yt), required: !0 })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(ar, { id: "new_problem_mode", label: "Solution style", value: /* @__PURE__ */ ((r) => r === void 0 ? "detailed" : r)(Re), radius: "md", options: [{ label: "Detailed steps", value: "detailed" }, { label: "Quick solution", value: "quick" }], onChangeValue: (...r) => T("setNewProblemSolutionMode", {}, r), name: "solutionMode", size: "md" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ d(N, { id: "new_problem_actions", className: "flex flex-wrap rs-new-problem-actions", children: [
                          "      ",
                          g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                            "      ",
                            /* @__PURE__ */ v(E, { id: "save_new_problem", loading: /* @__PURE__ */ ((r) => r === void 0 ? !1 : r)(se), variant: "primary", onAction: (...r) => T("submitNewProblem", {}, r), loadingText: "Checking saved solutions…", label: "Find or generate solution", theme: "auto" })
                          ] }),
                          g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                            "      ",
                            /* @__PURE__ */ v(E, { id: "cancel_new_problem", onAction: (...r) => T("closeNewProblemForm", {}, r), label: "Cancel", theme: "auto", variant: "ghost" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  g(Et) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "problem_solution_panel", className: "block rs-problem-solution", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "problem_solution_status", className: "rs-solution-source", content: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(Qe), as: "p" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "problem_solution_text", className: "rs-problem-solution-text", as: "div", content: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(lt) })
                      ] })
                    ] })
                  ] }),
                  g(B) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "hierarchy_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "add_problems", label: "Add new problem", theme: "auto", variant: "outline", onAction: (...r) => T("openNewProblemForm", {}, r) })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                "      ",
                /* @__PURE__ */ d(sr, { id: "right", className: "rs-panel", theme: "auto", as: "section", children: [
                  "      ",
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(A, { id: "right_title", as: "h3", content: /* @__PURE__ */ ((r) => r === void 0 ? "Steer a representative solution" : r)(X?.i18n?.board) })
                  ] }),
                  g(se) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "board_loading", className: "flex rs-board-loading", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "board_loading_indicator", className: "rs-loading-orb", as: "span", content: "" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "board_loading_text", as: "p", content: "Loading the saved solution or generating a new lesson…" })
                      ] })
                    ] })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ v(Ps, { id: "board", speedLabel: "Normal", learningGoal: /* @__PURE__ */ ((r) => r === void 0 ? "Form the characteristic equation, solve it and verify the eigenvalues." : r)(Be), problemLabel: /* @__PURE__ */ ((r) => r === void 0 ? "Representative problem · Linear algebra" : r)(Le), steps: /* @__PURE__ */ ((r) => r === void 0 ? [{ content: [{ label: "Given", latex: "A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}", type: "equation", visualText: "A = [[2, 1], [1, 2]]" }, { term: "Eigenvalue", text: "A scalar λ for which Av = λv for some non-zero vector v.", type: "definition" }], explanation: "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", id: "classify", narration: "First identify the matrix and the required eigenvalue equation.", teacherPrompt: "What size identity matrix is required here?", teacherQuestion: { correctValue: "b", explanation: "A is a 2 × 2 matrix, so I must have the same dimensions.", options: [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }], prompt: "What size identity matrix is required here?" }, title: "Classify the system", why: "This converts a matrix question into a polynomial equation." }, { content: [{ label: "Characteristic determinant", latex: "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", type: "equation", visualText: "det(A − λI) = (2 − λ)² − 1 = 0" }, { latex: "\\lambda^2-4\\lambda+3=0", type: "equation", visualText: "λ² − 4λ + 3 = 0" }], explanation: "The determinant is (2 minus lambda) squared minus one.", id: "determinant", narration: "Subtract lambda on the diagonal, then compute the determinant.", teacherPrompt: "Why is the off-diagonal product equal to one?", teacherQuestion: { correctValue: "a", explanation: "The off-diagonal entries are both 1, so their product is 1.", options: [{ label: "Because 1 × 1 = 1", value: "a" }, { label: "Because 2 − λ = 1", value: "b" }, { label: "Because det(A) = 1", value: "c" }, { label: "Because λ is always 1", value: "d" }], prompt: "Why is the off-diagonal product equal to one?" }, title: "Form the characteristic equation", why: "A non-zero eigenvector exists only when A minus lambda I is singular." }, { content: [{ label: "Eigenvalues", latex: "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", type: "equation", visualText: "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { text: "Both values make det(A − λI) equal zero.", tone: "success", type: "note" }], explanation: "The characteristic polynomial factors into lambda minus one times lambda minus three.", id: "solve", narration: "Factor the polynomial and verify each value.", teacherPrompt: "Which eigenvalue corresponds to [1, 1]?", teacherQuestion: { correctValue: "d", explanation: "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", options: [{ label: "−1", value: "a" }, { label: 0, value: "b" }, { label: 1, value: "c" }, { label: 3, value: "d" }], prompt: "Which eigenvalue corresponds to [1, 1]?" }, title: "Solve and verify", why: "Substitution verifies both determinant values are zero." }] : r)($e), playing: !1, activeStep: /* @__PURE__ */ ((r) => r === void 0 ? 0 : r)(at), lessonKind: /* @__PURE__ */ ((r) => r === void 0 ? "worked-example" : r)(Mt?.lessonKind), onStepSelect: (...r) => T("selectStep", {}, r), reducedMotion: !1, boardOptions: { animateCurrentStepOnly: !0, clearFutureSteps: !1, preserveRevealedSteps: !0, writingEffect: !0 }, showStepPopup: !0, stepDurationMs: 5500, popupInitiallyOpen: !0, title: /* @__PURE__ */ ((r) => r === void 0 ? "Find the eigenvalues of a 2 × 2 matrix" : r)(mt), autoAdvance: !1, editOperations: [], captionsEnabled: !0, problemStatement: /* @__PURE__ */ ((r) => r === void 0 ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : r)(kt) })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "teacher_question_panel", className: "block rs-teacher-question", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "teacher_question_title", className: "rs-teacher-question-title", as: "h4", content: /* @__PURE__ */ ((r) => r === void 0 ? "What size identity matrix is required here?" : r)(Rt) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(ws, { id: "teacher_question_choices", colorScheme: "emerald", onChangeValue: (...r) => T("selectTeacherAnswer", {}, r), name: "teacherAnswer", size: "md", label: "Choose one answer", value: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(zt), layout: "vertical", options: /* @__PURE__ */ ((r) => r === void 0 ? [{ label: "1 × 1", value: "a" }, { label: "2 × 2", value: "b" }, { label: "2 × 3", value: "c" }, { label: "3 × 3", value: "d" }] : r)(gt) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "teacher_question_feedback", className: "rs-teacher-question-feedback", as: "p", content: /* @__PURE__ */ ((r) => r === void 0 ? "Select one answer." : r)(We) })
                      ] })
                    ] })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "steer_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "keep", label: "Keep", theme: "auto", variant: "primary", onAction: (...r) => T("editStep", {}, r) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "remove", label: "Remove", theme: "auto", variant: "outline", onAction: (...r) => T("editStep", {}, r) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "annotate", theme: "auto", variant: "ghost", onAction: (...r) => T("editStep", {}, r), label: "Add teaching note" })
                      ] })
                    ] })
                  ] }),
                  g(B) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "strategy_panel", className: "block rs-strategy-panel", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "strategy_title", content: "Teaching strategy for this Topic", as: "h3" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "strategy_status", className: "rs-strategy-status", as: "p", content: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(Wt) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(A, { id: "strategy_text", className: "rs-strategy-text", content: /* @__PURE__ */ ((r) => r === void 0 ? "" : r)(He), as: "div" })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "set_context", loadingText: "Saving strategy…", label: "Approve strategy as context", theme: "auto", loading: /* @__PURE__ */ ((r) => r === void 0 ? !1 : r)(qe), variant: "primary", onAction: (...r) => T("setHierarchyContext", {}, r) })
                      ] })
                    ] })
                  ] }),
                  g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                    "      ",
                    /* @__PURE__ */ d(N, { id: "publish_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "publish", label: "Publish immutable context version", theme: "auto", variant: "primary", onAction: (...r) => T("publishContext", {}, r) })
                      ] }),
                      g(S({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ d(y, { children: [
                        "      ",
                        /* @__PURE__ */ v(E, { id: "share", label: "Create student share link", theme: "auto", variant: "outline", onAction: (...r) => T("shareLesson", {}, r) })
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
  js as default
};
