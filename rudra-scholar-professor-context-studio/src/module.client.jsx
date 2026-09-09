import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { TreeView as RudraWidgetsTreeView } from '@rudra-studio/rudra-widgets';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { Button as RudraCoreButton, Typography as RudraCoreTypography, Card as RudraCoreCard, Alert as RudraCoreAlert, Badge as RudraCoreBadge } from '@rudra-studio/rudra-core';
import { Input as RudraFormInput, Textarea as RudraFormTextarea, Select as RudraFormSelect, RadioGroup as RudraFormRadioGroup } from '@rudra-studio/rudra-form';
import { BlackboardLesson as ChalkmindMathBlackboardLesson } from '@rudra-studio/chalkmind-math';

export default function CompiledModule(props) {
  const _scope = {};
  const serverData = props.serverData || props.serverState || {};
  const serverState = serverData;
  const sharedState = props.sharedState || {};
  const applicationState = props.applicationState || serverData.applicationState || {};
  const pageState = props.pageState || serverData.pageState || {};
  const pageData = props.pageData || serverData.pageData || {};

  const _externalActions = {
    ...(props.runtime?.functions || {}),
    ...(props.runtime?.actions || {}),
    ...(props.functions || {}),
    ...(props.actions || {}),
  };
  const _explicitTheme = props.$theme ?? props.theme ?? props.data?.$theme ?? props.runtime?.data?.$theme ?? props.runtime?.theme;
  const _getDocumentTheme = () => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.dataset.theme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  };
  const [$theme, set_$theme] = useState(() => _explicitTheme ?? _getDocumentTheme());

  useEffect(() => {
    if (_explicitTheme !== undefined && _explicitTheme !== null) set_$theme(_explicitTheme);
  }, [_explicitTheme]);

  useEffect(() => {
    if (_explicitTheme !== undefined && _explicitTheme !== null || typeof document === 'undefined') return;
    const root = document.documentElement;
    const syncTheme = (event) => set_$theme(event?.detail?.theme ?? _getDocumentTheme());
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    window.addEventListener('rudra:theme-change', syncTheme);
    syncTheme();
    return () => {
      observer.disconnect();
      window.removeEventListener('rudra:theme-change', syncTheme);
    };
  }, [_explicitTheme]);
  const wrapperRef = useRef(null);
  const [viewport, setViewport] = useState('lg');
  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        if (width < 768) setViewport('sm');
        else if (width < 1024) setViewport('md');
        else setViewport('lg');
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const getResponsiveProp = useCallback((val) => {
    if (typeof val !== 'object' || val === null) return val;
    if (viewport === 'sm') return val.sm !== undefined ? val.sm : (val.md !== undefined ? val.md : val.lg);
    if (viewport === 'md') return val.md !== undefined ? val.md : (val.sm !== undefined ? val.sm : val.lg);
    return val.lg !== undefined ? val.lg : (val.md !== undefined ? val.md : val.sm);
  }, [viewport]);

  const isVisibleValue = (value) => Array.isArray(value) ? value.length > 0 : (typeof value === 'string' ? value.trim() !== '' && value.trim().toLowerCase() !== 'false' : Boolean(value));

  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const verificationStatus = props.verificationStatus !== undefined ? props.verificationStatus : (props.data?.verificationStatus !== undefined ? props.data.verificationStatus : "pending");
  const contextVersionKey = props.contextVersionKey !== undefined ? props.contextVersionKey : (props.data?.contextVersionKey !== undefined ? props.data.contextVersionKey : "");
  const contextDraft = props.contextDraft !== undefined ? props.contextDraft : (props.data?.contextDraft !== undefined ? props.data.contextDraft : {});
  const returnPath = props.returnPath !== undefined ? props.returnPath : (props.data?.returnPath !== undefined ? props.data.returnPath : "/professor/context");
  const syllabusText = props.syllabusText !== undefined ? props.syllabusText : (props.data?.syllabusText !== undefined ? props.data.syllabusText : undefined);
  const userRole = props.userRole !== undefined ? props.userRole : (props.data?.userRole !== undefined ? props.data.userRole : "");
  const accessProfile = props.accessProfile !== undefined ? props.accessProfile : (props.data?.accessProfile !== undefined ? props.data.accessProfile : {});
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const contextVersionNumber = props.contextVersionNumber !== undefined ? props.contextVersionNumber : (props.data?.contextVersionNumber !== undefined ? props.data.contextVersionNumber : 1);
  const inputs = { "authenticated": authenticated, "verificationStatus": verificationStatus, "contextVersionKey": contextVersionKey, "contextDraft": contextDraft, "returnPath": returnPath, "syllabusText": syllabusText, "userRole": userRole, "accessProfile": accessProfile, "locale": locale, "contextVersionNumber": contextVersionNumber };
  const [suggestedProblemsText, set_suggestedProblemsText] = useState(() => structuredClone("1. Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].\n2. Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.\n3. Diagonalise A = [[4, 1], [2, 3]] and verify the result."));
  const [selectedHierarchyIds, set_selectedHierarchyIds] = useState(() => structuredClone([]));
  const [hasResolvedStrategy, set_hasResolvedStrategy] = useState(() => structuredClone(true));
  const [isSavingStrategy, set_isSavingStrategy] = useState(() => structuredClone(false));
  const [syllabusDraftText, set_syllabusDraftText] = useState(() => structuredClone("Semester 1 · Linear Algebra\nUnit 1: Matrices and systems\nUnit 2: Vector spaces\nUnit 3: Eigenvalues and diagonalisation"));
  const [newProblemSolutionMode, set_newProblemSolutionMode] = useState(() => structuredClone("detailed"));
  const [selectedTopicProblems, set_selectedTopicProblems] = useState(() => structuredClone([]));
  const [structureStatus, set_structureStatus] = useState(() => structuredClone("Review the proposed hierarchy, add problems, then set it as context."));
  const [isGeneratingStructure, set_isGeneratingStructure] = useState(() => structuredClone(false));
  const [syllabusDescription, set_syllabusDescription] = useState(() => structuredClone(""));
  const [hasSelectedTopic, set_hasSelectedTopic] = useState(() => structuredClone(false));
  const [blackboardProblemLabel, set_blackboardProblemLabel] = useState(() => structuredClone("Representative problem · Linear algebra"));
  const [problemResolutionStatus, set_problemResolutionStatus] = useState(() => structuredClone("Select a problem to load its saved solution."));
  const [selectedTopicProblemItems, set_selectedTopicProblemItems] = useState(() => structuredClone([]));
  const [canUseStudio, set_canUseStudio] = useState(() => structuredClone(false));
  const [strategyDraftText, set_strategyDraftText] = useState(() => structuredClone("Preferred method\nCharacteristic-polynomial method\n\nRequired steps\n1. Classify the problem and state the goal.\n2. Name the governing theorem or definition before using it.\n3. Show the determinant or algebraic expansion.\n4. Solve symbolically before substituting numerical conclusions.\n5. Verify the final result.\n\nAvoid\n• Do not skip the characteristic equation.\n• Do not state roots without verification.\n\nVerification\n• Substitute each result into the defining equation.\n• State why the verification is sufficient.\n\nTeaching notes\n• Prefer a direct 2×2 method when it is clearer than row reduction."));
  const [blackboardLearningGoal, set_blackboardLearningGoal] = useState(() => structuredClone("Form the characteristic equation, solve it and verify the eigenvalues."));
  const [resolvedStrategyVersion, set_resolvedStrategyVersion] = useState(() => structuredClone(0));
  const [showSyllabusSetup, set_showSyllabusSetup] = useState(() => structuredClone(true));
  const [teacherAnswerFeedback, set_teacherAnswerFeedback] = useState(() => structuredClone("Select one answer."));
  const [blackboardSteps, set_blackboardSteps] = useState(() => structuredClone([{"content":[{"label":"Given","latex":"A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}","type":"equation","visualText":"A = [[2, 1], [1, 2]]"},{"term":"Eigenvalue","text":"A scalar λ for which Av = λv for some non-zero vector v.","type":"definition"}],"explanation":"For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.","id":"classify","narration":"First identify the matrix and the required eigenvalue equation.","teacherPrompt":"What size identity matrix is required here?","teacherQuestion":{"correctValue":"b","explanation":"A is a 2 × 2 matrix, so I must have the same dimensions.","options":[{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}],"prompt":"What size identity matrix is required here?"},"title":"Classify the system","why":"This converts a matrix question into a polynomial equation."},{"content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"},{"latex":"\\lambda^2-4\\lambda+3=0","type":"equation","visualText":"λ² − 4λ + 3 = 0"}],"explanation":"The determinant is (2 minus lambda) squared minus one.","id":"determinant","narration":"Subtract lambda on the diagonal, then compute the determinant.","teacherPrompt":"Why is the off-diagonal product equal to one?","teacherQuestion":{"correctValue":"a","explanation":"The off-diagonal entries are both 1, so their product is 1.","options":[{"label":"Because 1 × 1 = 1","value":"a"},{"label":"Because 2 − λ = 1","value":"b"},{"label":"Because det(A) = 1","value":"c"},{"label":"Because λ is always 1","value":"d"}],"prompt":"Why is the off-diagonal product equal to one?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A minus lambda I is singular."},{"content":[{"label":"Eigenvalues","latex":"(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3","type":"equation","visualText":"(λ − 1)(λ − 3) = 0, so λ = 1 or 3"},{"text":"Both values make det(A − λI) equal zero.","tone":"success","type":"note"}],"explanation":"The characteristic polynomial factors into lambda minus one times lambda minus three.","id":"solve","narration":"Factor the polynomial and verify each value.","teacherPrompt":"Which eigenvalue corresponds to [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to [1, 1]?"},"title":"Solve and verify","why":"Substitution verifies both determinant values are zero."}]));
  const [hierarchyItems, set_hierarchyItems] = useState(() => structuredClone([{"children":[{"children":[{"children":[{"children":[{"children":[],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations","problems":["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether three supplied vectors are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."],"title":"Matrix operations","type":"topic"},"id":"matrix-operations","label":"Topic · Matrix operations"},{"children":[],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues","problems":["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether three supplied vectors are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."],"title":"Eigenvalues and diagonalisation","type":"topic"},"id":"eigenvalues","label":"Topic · Eigenvalues and diagonalisation"}],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices","problems":[],"title":"Unit 1 · Matrices and systems","type":"unit"},"id":"matrices","label":"Unit · Unit 1 · Matrices and systems"}],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i","problems":[],"title":"Engineering Mathematics I","type":"subject"},"id":"engineering-mathematics-i","label":"Subject · Engineering Mathematics I"}],"data":{"path":"engineering-mathematics/semester-1","problems":[],"title":"Semester 1","type":"semester"},"id":"semester-1","label":"Semester · Semester 1"}],"data":{"path":"engineering-mathematics","problems":[],"title":"B.E. Mathematics","type":"programme"},"id":"engineering-mathematics","label":"Programme · B.E. Mathematics"}]));
  const [isLoadingSyllabi, set_isLoadingSyllabi] = useState(() => structuredClone(false));
  const [teacherQuestionCorrectValue, set_teacherQuestionCorrectValue] = useState(() => structuredClone("b"));
  const [selectedProblemIds, set_selectedProblemIds] = useState(() => structuredClone([]));
  const [resolvedStrategyId, set_resolvedStrategyId] = useState(() => structuredClone(""));
  const [selectedTopicPath, set_selectedTopicPath] = useState(() => structuredClone(""));
  const [activeStep, set_activeStep] = useState(() => structuredClone(0));
  const [savedSyllabusOptions, set_savedSyllabusOptions] = useState(() => structuredClone([]));
  const [finalHierarchyText, set_finalHierarchyText] = useState(() => structuredClone("Programme · B.E. Mathematics\n  Semester · Semester 1\n    Subject · Engineering Mathematics I\n      Unit · Unit 1 · Matrices and systems\n        Topic · Matrix operations\n        Topic · Eigenvalues and diagonalisation"));
  const [showNewProblemForm, set_showNewProblemForm] = useState(() => structuredClone(false));
  const [problemSolutionText, set_problemSolutionText] = useState(() => structuredClone(""));
  const [isResolvingProblem, set_isResolvingProblem] = useState(() => structuredClone(false));
  const [selectedProblemStatement, set_selectedProblemStatement] = useState(() => structuredClone(""));
  const [blackboardTitle, set_blackboardTitle] = useState(() => structuredClone("Find the eigenvalues of a 2 × 2 matrix"));
  const [finalHierarchy, set_finalHierarchy] = useState(() => structuredClone({"children":[{"children":[{"children":[{"children":[{"children":[],"id":"matrix-operations","title":"Matrix operations","type":"topic"},{"children":[],"id":"eigenvalues","title":"Eigenvalues and diagonalisation","type":"topic"}],"id":"matrices","title":"Unit 1 · Matrices and systems","type":"unit"}],"id":"engineering-mathematics-i","title":"Engineering Mathematics I","type":"subject"}],"id":"semester-1","title":"Semester 1","type":"semester"}],"id":"engineering-mathematics","title":"B.E. Mathematics","type":"programme"}));
  const [selectedTopicProblemsText, set_selectedTopicProblemsText] = useState(() => structuredClone(""));
  const [selectedTopicId, set_selectedTopicId] = useState(() => structuredClone(""));
  const [isSavingSyllabus, set_isSavingSyllabus] = useState(() => structuredClone(false));
  const [suggestedProblems, set_suggestedProblems] = useState(() => structuredClone(["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."]));
  const [newProblemText, set_newProblemText] = useState(() => structuredClone(""));
  const [teacherQuestionOptions, set_teacherQuestionOptions] = useState(() => structuredClone([{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}]));
  const [problemSolution, set_problemSolution] = useState(() => structuredClone({}));
  const [accessGateMessage, set_accessGateMessage] = useState(() => structuredClone("Sign in with an approved professor account to use this studio."));
  const [selectedTopicHeading, set_selectedTopicHeading] = useState(() => structuredClone("Selected topic problems"));
  const [selectedSyllabusId, set_selectedSyllabusId] = useState(() => structuredClone(""));
  const [resolvedStrategy, set_resolvedStrategy] = useState(() => structuredClone({"exampleProblem":"Find the eigenvalues of A = [[2, 1], [1, 2]].","explanationDepth":"detailed","forbiddenShortcuts":["Do not skip the characteristic equation.","Do not state roots without verification."],"preferredMethod":"Characteristic-polynomial method","requiredSteps":["Classify the problem and state the goal.","Name the governing theorem or definition before using it.","Show the determinant or algebraic expansion.","Solve symbolically before substituting numerical conclusions.","Verify the final result."],"scopeType":"topic","teachingNotes":["Prefer a direct 2×2 method when it is clearer than row reduction."],"verificationRules":["Substitute each result into the defining equation.","State why the verification is sufficient."]}));
  const [isSyllabusSetupCollapsed, set_isSyllabusSetupCollapsed] = useState(() => structuredClone(false));
  const [syllabusStatus, set_syllabusStatus] = useState(() => structuredClone("Select a saved syllabus or save this draft."));
  const [teacherQuestionPrompt, set_teacherQuestionPrompt] = useState(() => structuredClone("What size identity matrix is required here?"));
  const [blackboardProblemStatement, set_blackboardProblemStatement] = useState(() => structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]]."));
  const [strategyDraft, set_strategyDraft] = useState(() => structuredClone({"exampleProblem":"Find the eigenvalues of A = [[2, 1], [1, 2]].","explanationDepth":"detailed","forbiddenShortcuts":["Do not skip the characteristic equation.","Do not state roots without verification."],"preferredMethod":"Characteristic-polynomial method","requiredSteps":["Classify the problem and state the goal.","Name the governing theorem or definition before using it.","Show the determinant or algebraic expansion.","Solve symbolically before substituting numerical conclusions.","Verify the final result."],"scopeType":"topic","teachingNotes":["Prefer a direct 2×2 method when it is clearer than row reduction."],"verificationRules":["Substitute each result into the defining equation.","State why the verification is sufficient."]}));
  const [accessBadgeLabel, set_accessBadgeLabel] = useState(() => structuredClone("Verification pending"));
  const [hasProblemSolution, set_hasProblemSolution] = useState(() => structuredClone(false));
  const [blackboardLesson, set_blackboardLesson] = useState(() => structuredClone({"learningGoal":"Form the characteristic equation, solve it and verify the eigenvalues.","lessonKind":"worked-example","problemLabel":"Representative problem · Linear algebra","problemStatement":"Find the eigenvalues of A = [[2, 1], [1, 2]].","steps":[{"content":[{"label":"Given","latex":"A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}","type":"equation","visualText":"A = [[2, 1], [1, 2]]"},{"term":"Eigenvalue","text":"A scalar λ for which Av = λv for some non-zero vector v.","type":"definition"}],"explanation":"For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.","id":"classify","narration":"First identify the matrix and the required eigenvalue equation.","teacherPrompt":"What size identity matrix is required here?","teacherQuestion":{"correctValue":"b","explanation":"A is a 2 × 2 matrix, so I must have the same dimensions.","options":[{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}],"prompt":"What size identity matrix is required here?"},"title":"Classify the system","why":"This converts a matrix question into a polynomial equation."},{"content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"},{"latex":"\\lambda^2-4\\lambda+3=0","type":"equation","visualText":"λ² − 4λ + 3 = 0"}],"explanation":"The determinant is (2 minus lambda) squared minus one.","id":"determinant","narration":"Subtract lambda on the diagonal, then compute the determinant.","teacherPrompt":"Why is the off-diagonal product equal to one?","teacherQuestion":{"correctValue":"a","explanation":"The off-diagonal entries are both 1, so their product is 1.","options":[{"label":"Because 1 × 1 = 1","value":"a"},{"label":"Because 2 − λ = 1","value":"b"},{"label":"Because det(A) = 1","value":"c"},{"label":"Because λ is always 1","value":"d"}],"prompt":"Why is the off-diagonal product equal to one?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A minus lambda I is singular."},{"content":[{"label":"Eigenvalues","latex":"(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3","type":"equation","visualText":"(λ − 1)(λ − 3) = 0, so λ = 1 or 3"},{"text":"Both values make det(A − λI) equal zero.","tone":"success","type":"note"}],"explanation":"The characteristic polynomial factors into lambda minus one times lambda minus three.","id":"solve","narration":"Factor the polynomial and verify each value.","teacherPrompt":"Which eigenvalue corresponds to [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to [1, 1]?"},"title":"Solve and verify","why":"Substitution verifies both determinant values are zero."}],"title":"Find the eigenvalues of a 2 × 2 matrix"}));
  const [syllabusTitle, set_syllabusTitle] = useState(() => structuredClone("Engineering Mathematics I"));
  const [selectedProblemText, set_selectedProblemText] = useState(() => structuredClone(""));
  const [teacherQuestionExplanation, set_teacherQuestionExplanation] = useState(() => structuredClone("A is a 2 × 2 matrix, so I must have the same dimensions."));
  const [selectedTeacherAnswer, set_selectedTeacherAnswer] = useState(() => structuredClone(""));
  const [showAccessGate, set_showAccessGate] = useState(() => structuredClone(true));
  const [accessGateTitle, set_accessGateTitle] = useState(() => structuredClone("Professor approval required"));
  const [selectedTopicTitle, set_selectedTopicTitle] = useState(() => structuredClone(""));
  const [strategyStatus, set_strategyStatus] = useState(() => structuredClone("Review the example strategy, then approve it for the selected Topic."));
  const state = { "suggestedProblemsText": suggestedProblemsText, "selectedHierarchyIds": selectedHierarchyIds, "hasResolvedStrategy": hasResolvedStrategy, "isSavingStrategy": isSavingStrategy, "syllabusDraftText": syllabusDraftText, "newProblemSolutionMode": newProblemSolutionMode, "selectedTopicProblems": selectedTopicProblems, "structureStatus": structureStatus, "isGeneratingStructure": isGeneratingStructure, "syllabusDescription": syllabusDescription, "hasSelectedTopic": hasSelectedTopic, "blackboardProblemLabel": blackboardProblemLabel, "problemResolutionStatus": problemResolutionStatus, "selectedTopicProblemItems": selectedTopicProblemItems, "canUseStudio": canUseStudio, "strategyDraftText": strategyDraftText, "blackboardLearningGoal": blackboardLearningGoal, "resolvedStrategyVersion": resolvedStrategyVersion, "showSyllabusSetup": showSyllabusSetup, "teacherAnswerFeedback": teacherAnswerFeedback, "blackboardSteps": blackboardSteps, "hierarchyItems": hierarchyItems, "isLoadingSyllabi": isLoadingSyllabi, "teacherQuestionCorrectValue": teacherQuestionCorrectValue, "selectedProblemIds": selectedProblemIds, "resolvedStrategyId": resolvedStrategyId, "selectedTopicPath": selectedTopicPath, "activeStep": activeStep, "savedSyllabusOptions": savedSyllabusOptions, "finalHierarchyText": finalHierarchyText, "showNewProblemForm": showNewProblemForm, "problemSolutionText": problemSolutionText, "isResolvingProblem": isResolvingProblem, "selectedProblemStatement": selectedProblemStatement, "blackboardTitle": blackboardTitle, "finalHierarchy": finalHierarchy, "selectedTopicProblemsText": selectedTopicProblemsText, "selectedTopicId": selectedTopicId, "isSavingSyllabus": isSavingSyllabus, "suggestedProblems": suggestedProblems, "newProblemText": newProblemText, "teacherQuestionOptions": teacherQuestionOptions, "problemSolution": problemSolution, "accessGateMessage": accessGateMessage, "selectedTopicHeading": selectedTopicHeading, "selectedSyllabusId": selectedSyllabusId, "resolvedStrategy": resolvedStrategy, "isSyllabusSetupCollapsed": isSyllabusSetupCollapsed, "syllabusStatus": syllabusStatus, "teacherQuestionPrompt": teacherQuestionPrompt, "blackboardProblemStatement": blackboardProblemStatement, "strategyDraft": strategyDraft, "accessBadgeLabel": accessBadgeLabel, "hasProblemSolution": hasProblemSolution, "blackboardLesson": blackboardLesson, "syllabusTitle": syllabusTitle, "selectedProblemText": selectedProblemText, "teacherQuestionExplanation": teacherQuestionExplanation, "selectedTeacherAnswer": selectedTeacherAnswer, "showAccessGate": showAccessGate, "accessGateTitle": accessGateTitle, "selectedTopicTitle": selectedTopicTitle, "strategyStatus": strategyStatus };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "suggestedProblemsText": { const next = typeof value === 'function' ? value(state.suggestedProblemsText) : value; state.suggestedProblemsText = next; set_suggestedProblemsText(next); return next; }
      case "selectedHierarchyIds": { const next = typeof value === 'function' ? value(state.selectedHierarchyIds) : value; state.selectedHierarchyIds = next; set_selectedHierarchyIds(next); return next; }
      case "hasResolvedStrategy": { const next = typeof value === 'function' ? value(state.hasResolvedStrategy) : value; state.hasResolvedStrategy = next; set_hasResolvedStrategy(next); return next; }
      case "isSavingStrategy": { const next = typeof value === 'function' ? value(state.isSavingStrategy) : value; state.isSavingStrategy = next; set_isSavingStrategy(next); return next; }
      case "syllabusDraftText": { const next = typeof value === 'function' ? value(state.syllabusDraftText) : value; state.syllabusDraftText = next; set_syllabusDraftText(next); return next; }
      case "newProblemSolutionMode": { const next = typeof value === 'function' ? value(state.newProblemSolutionMode) : value; state.newProblemSolutionMode = next; set_newProblemSolutionMode(next); return next; }
      case "selectedTopicProblems": { const next = typeof value === 'function' ? value(state.selectedTopicProblems) : value; state.selectedTopicProblems = next; set_selectedTopicProblems(next); return next; }
      case "structureStatus": { const next = typeof value === 'function' ? value(state.structureStatus) : value; state.structureStatus = next; set_structureStatus(next); return next; }
      case "isGeneratingStructure": { const next = typeof value === 'function' ? value(state.isGeneratingStructure) : value; state.isGeneratingStructure = next; set_isGeneratingStructure(next); return next; }
      case "syllabusDescription": { const next = typeof value === 'function' ? value(state.syllabusDescription) : value; state.syllabusDescription = next; set_syllabusDescription(next); return next; }
      case "hasSelectedTopic": { const next = typeof value === 'function' ? value(state.hasSelectedTopic) : value; state.hasSelectedTopic = next; set_hasSelectedTopic(next); return next; }
      case "blackboardProblemLabel": { const next = typeof value === 'function' ? value(state.blackboardProblemLabel) : value; state.blackboardProblemLabel = next; set_blackboardProblemLabel(next); return next; }
      case "problemResolutionStatus": { const next = typeof value === 'function' ? value(state.problemResolutionStatus) : value; state.problemResolutionStatus = next; set_problemResolutionStatus(next); return next; }
      case "selectedTopicProblemItems": { const next = typeof value === 'function' ? value(state.selectedTopicProblemItems) : value; state.selectedTopicProblemItems = next; set_selectedTopicProblemItems(next); return next; }
      case "canUseStudio": { const next = typeof value === 'function' ? value(state.canUseStudio) : value; state.canUseStudio = next; set_canUseStudio(next); return next; }
      case "strategyDraftText": { const next = typeof value === 'function' ? value(state.strategyDraftText) : value; state.strategyDraftText = next; set_strategyDraftText(next); return next; }
      case "blackboardLearningGoal": { const next = typeof value === 'function' ? value(state.blackboardLearningGoal) : value; state.blackboardLearningGoal = next; set_blackboardLearningGoal(next); return next; }
      case "resolvedStrategyVersion": { const next = typeof value === 'function' ? value(state.resolvedStrategyVersion) : value; state.resolvedStrategyVersion = next; set_resolvedStrategyVersion(next); return next; }
      case "showSyllabusSetup": { const next = typeof value === 'function' ? value(state.showSyllabusSetup) : value; state.showSyllabusSetup = next; set_showSyllabusSetup(next); return next; }
      case "teacherAnswerFeedback": { const next = typeof value === 'function' ? value(state.teacherAnswerFeedback) : value; state.teacherAnswerFeedback = next; set_teacherAnswerFeedback(next); return next; }
      case "blackboardSteps": { const next = typeof value === 'function' ? value(state.blackboardSteps) : value; state.blackboardSteps = next; set_blackboardSteps(next); return next; }
      case "hierarchyItems": { const next = typeof value === 'function' ? value(state.hierarchyItems) : value; state.hierarchyItems = next; set_hierarchyItems(next); return next; }
      case "isLoadingSyllabi": { const next = typeof value === 'function' ? value(state.isLoadingSyllabi) : value; state.isLoadingSyllabi = next; set_isLoadingSyllabi(next); return next; }
      case "teacherQuestionCorrectValue": { const next = typeof value === 'function' ? value(state.teacherQuestionCorrectValue) : value; state.teacherQuestionCorrectValue = next; set_teacherQuestionCorrectValue(next); return next; }
      case "selectedProblemIds": { const next = typeof value === 'function' ? value(state.selectedProblemIds) : value; state.selectedProblemIds = next; set_selectedProblemIds(next); return next; }
      case "resolvedStrategyId": { const next = typeof value === 'function' ? value(state.resolvedStrategyId) : value; state.resolvedStrategyId = next; set_resolvedStrategyId(next); return next; }
      case "selectedTopicPath": { const next = typeof value === 'function' ? value(state.selectedTopicPath) : value; state.selectedTopicPath = next; set_selectedTopicPath(next); return next; }
      case "activeStep": { const next = typeof value === 'function' ? value(state.activeStep) : value; state.activeStep = next; set_activeStep(next); return next; }
      case "savedSyllabusOptions": { const next = typeof value === 'function' ? value(state.savedSyllabusOptions) : value; state.savedSyllabusOptions = next; set_savedSyllabusOptions(next); return next; }
      case "finalHierarchyText": { const next = typeof value === 'function' ? value(state.finalHierarchyText) : value; state.finalHierarchyText = next; set_finalHierarchyText(next); return next; }
      case "showNewProblemForm": { const next = typeof value === 'function' ? value(state.showNewProblemForm) : value; state.showNewProblemForm = next; set_showNewProblemForm(next); return next; }
      case "problemSolutionText": { const next = typeof value === 'function' ? value(state.problemSolutionText) : value; state.problemSolutionText = next; set_problemSolutionText(next); return next; }
      case "isResolvingProblem": { const next = typeof value === 'function' ? value(state.isResolvingProblem) : value; state.isResolvingProblem = next; set_isResolvingProblem(next); return next; }
      case "selectedProblemStatement": { const next = typeof value === 'function' ? value(state.selectedProblemStatement) : value; state.selectedProblemStatement = next; set_selectedProblemStatement(next); return next; }
      case "blackboardTitle": { const next = typeof value === 'function' ? value(state.blackboardTitle) : value; state.blackboardTitle = next; set_blackboardTitle(next); return next; }
      case "finalHierarchy": { const next = typeof value === 'function' ? value(state.finalHierarchy) : value; state.finalHierarchy = next; set_finalHierarchy(next); return next; }
      case "selectedTopicProblemsText": { const next = typeof value === 'function' ? value(state.selectedTopicProblemsText) : value; state.selectedTopicProblemsText = next; set_selectedTopicProblemsText(next); return next; }
      case "selectedTopicId": { const next = typeof value === 'function' ? value(state.selectedTopicId) : value; state.selectedTopicId = next; set_selectedTopicId(next); return next; }
      case "isSavingSyllabus": { const next = typeof value === 'function' ? value(state.isSavingSyllabus) : value; state.isSavingSyllabus = next; set_isSavingSyllabus(next); return next; }
      case "suggestedProblems": { const next = typeof value === 'function' ? value(state.suggestedProblems) : value; state.suggestedProblems = next; set_suggestedProblems(next); return next; }
      case "newProblemText": { const next = typeof value === 'function' ? value(state.newProblemText) : value; state.newProblemText = next; set_newProblemText(next); return next; }
      case "teacherQuestionOptions": { const next = typeof value === 'function' ? value(state.teacherQuestionOptions) : value; state.teacherQuestionOptions = next; set_teacherQuestionOptions(next); return next; }
      case "problemSolution": { const next = typeof value === 'function' ? value(state.problemSolution) : value; state.problemSolution = next; set_problemSolution(next); return next; }
      case "accessGateMessage": { const next = typeof value === 'function' ? value(state.accessGateMessage) : value; state.accessGateMessage = next; set_accessGateMessage(next); return next; }
      case "selectedTopicHeading": { const next = typeof value === 'function' ? value(state.selectedTopicHeading) : value; state.selectedTopicHeading = next; set_selectedTopicHeading(next); return next; }
      case "selectedSyllabusId": { const next = typeof value === 'function' ? value(state.selectedSyllabusId) : value; state.selectedSyllabusId = next; set_selectedSyllabusId(next); return next; }
      case "resolvedStrategy": { const next = typeof value === 'function' ? value(state.resolvedStrategy) : value; state.resolvedStrategy = next; set_resolvedStrategy(next); return next; }
      case "isSyllabusSetupCollapsed": { const next = typeof value === 'function' ? value(state.isSyllabusSetupCollapsed) : value; state.isSyllabusSetupCollapsed = next; set_isSyllabusSetupCollapsed(next); return next; }
      case "syllabusStatus": { const next = typeof value === 'function' ? value(state.syllabusStatus) : value; state.syllabusStatus = next; set_syllabusStatus(next); return next; }
      case "teacherQuestionPrompt": { const next = typeof value === 'function' ? value(state.teacherQuestionPrompt) : value; state.teacherQuestionPrompt = next; set_teacherQuestionPrompt(next); return next; }
      case "blackboardProblemStatement": { const next = typeof value === 'function' ? value(state.blackboardProblemStatement) : value; state.blackboardProblemStatement = next; set_blackboardProblemStatement(next); return next; }
      case "strategyDraft": { const next = typeof value === 'function' ? value(state.strategyDraft) : value; state.strategyDraft = next; set_strategyDraft(next); return next; }
      case "accessBadgeLabel": { const next = typeof value === 'function' ? value(state.accessBadgeLabel) : value; state.accessBadgeLabel = next; set_accessBadgeLabel(next); return next; }
      case "hasProblemSolution": { const next = typeof value === 'function' ? value(state.hasProblemSolution) : value; state.hasProblemSolution = next; set_hasProblemSolution(next); return next; }
      case "blackboardLesson": { const next = typeof value === 'function' ? value(state.blackboardLesson) : value; state.blackboardLesson = next; set_blackboardLesson(next); return next; }
      case "syllabusTitle": { const next = typeof value === 'function' ? value(state.syllabusTitle) : value; state.syllabusTitle = next; set_syllabusTitle(next); return next; }
      case "selectedProblemText": { const next = typeof value === 'function' ? value(state.selectedProblemText) : value; state.selectedProblemText = next; set_selectedProblemText(next); return next; }
      case "teacherQuestionExplanation": { const next = typeof value === 'function' ? value(state.teacherQuestionExplanation) : value; state.teacherQuestionExplanation = next; set_teacherQuestionExplanation(next); return next; }
      case "selectedTeacherAnswer": { const next = typeof value === 'function' ? value(state.selectedTeacherAnswer) : value; state.selectedTeacherAnswer = next; set_selectedTeacherAnswer(next); return next; }
      case "showAccessGate": { const next = typeof value === 'function' ? value(state.showAccessGate) : value; state.showAccessGate = next; set_showAccessGate(next); return next; }
      case "accessGateTitle": { const next = typeof value === 'function' ? value(state.accessGateTitle) : value; state.accessGateTitle = next; set_accessGateTitle(next); return next; }
      case "selectedTopicTitle": { const next = typeof value === 'function' ? value(state.selectedTopicTitle) : value; state.selectedTopicTitle = next; set_selectedTopicTitle(next); return next; }
      case "strategyStatus": { const next = typeof value === 'function' ? value(state.strategyStatus) : value; state.strategyStatus = next; set_strategyStatus(next); return next; }
      default: return value;
    }
  }, [state]);

  const _setStatePath = useCallback((path, value) => {
    const [root, ...parts] = String(path || '').split('.');
    if (!root) return value;
    if (parts.length === 0) return _setState(root, value);
    const updateNested = (current) => {
      const next = Array.isArray(current) ? [...current] : { ...(current || {}) };
      let cursor = next;
      parts.forEach((part, index) => {
        if (index === parts.length - 1) cursor[part] = value;
        else {
          cursor[part] = Array.isArray(cursor[part]) ? [...cursor[part]] : { ...(cursor[part] || {}) };
          cursor = cursor[part];
        }
      });
      return next;
    };
    switch (root) {
      case "suggestedProblemsText": _setState("suggestedProblemsText", updateNested); return value;
      case "selectedHierarchyIds": _setState("selectedHierarchyIds", updateNested); return value;
      case "hasResolvedStrategy": _setState("hasResolvedStrategy", updateNested); return value;
      case "isSavingStrategy": _setState("isSavingStrategy", updateNested); return value;
      case "syllabusDraftText": _setState("syllabusDraftText", updateNested); return value;
      case "newProblemSolutionMode": _setState("newProblemSolutionMode", updateNested); return value;
      case "selectedTopicProblems": _setState("selectedTopicProblems", updateNested); return value;
      case "structureStatus": _setState("structureStatus", updateNested); return value;
      case "isGeneratingStructure": _setState("isGeneratingStructure", updateNested); return value;
      case "syllabusDescription": _setState("syllabusDescription", updateNested); return value;
      case "hasSelectedTopic": _setState("hasSelectedTopic", updateNested); return value;
      case "blackboardProblemLabel": _setState("blackboardProblemLabel", updateNested); return value;
      case "problemResolutionStatus": _setState("problemResolutionStatus", updateNested); return value;
      case "selectedTopicProblemItems": _setState("selectedTopicProblemItems", updateNested); return value;
      case "canUseStudio": _setState("canUseStudio", updateNested); return value;
      case "strategyDraftText": _setState("strategyDraftText", updateNested); return value;
      case "blackboardLearningGoal": _setState("blackboardLearningGoal", updateNested); return value;
      case "resolvedStrategyVersion": _setState("resolvedStrategyVersion", updateNested); return value;
      case "showSyllabusSetup": _setState("showSyllabusSetup", updateNested); return value;
      case "teacherAnswerFeedback": _setState("teacherAnswerFeedback", updateNested); return value;
      case "blackboardSteps": _setState("blackboardSteps", updateNested); return value;
      case "hierarchyItems": _setState("hierarchyItems", updateNested); return value;
      case "isLoadingSyllabi": _setState("isLoadingSyllabi", updateNested); return value;
      case "teacherQuestionCorrectValue": _setState("teacherQuestionCorrectValue", updateNested); return value;
      case "selectedProblemIds": _setState("selectedProblemIds", updateNested); return value;
      case "resolvedStrategyId": _setState("resolvedStrategyId", updateNested); return value;
      case "selectedTopicPath": _setState("selectedTopicPath", updateNested); return value;
      case "activeStep": _setState("activeStep", updateNested); return value;
      case "savedSyllabusOptions": _setState("savedSyllabusOptions", updateNested); return value;
      case "finalHierarchyText": _setState("finalHierarchyText", updateNested); return value;
      case "showNewProblemForm": _setState("showNewProblemForm", updateNested); return value;
      case "problemSolutionText": _setState("problemSolutionText", updateNested); return value;
      case "isResolvingProblem": _setState("isResolvingProblem", updateNested); return value;
      case "selectedProblemStatement": _setState("selectedProblemStatement", updateNested); return value;
      case "blackboardTitle": _setState("blackboardTitle", updateNested); return value;
      case "finalHierarchy": _setState("finalHierarchy", updateNested); return value;
      case "selectedTopicProblemsText": _setState("selectedTopicProblemsText", updateNested); return value;
      case "selectedTopicId": _setState("selectedTopicId", updateNested); return value;
      case "isSavingSyllabus": _setState("isSavingSyllabus", updateNested); return value;
      case "suggestedProblems": _setState("suggestedProblems", updateNested); return value;
      case "newProblemText": _setState("newProblemText", updateNested); return value;
      case "teacherQuestionOptions": _setState("teacherQuestionOptions", updateNested); return value;
      case "problemSolution": _setState("problemSolution", updateNested); return value;
      case "accessGateMessage": _setState("accessGateMessage", updateNested); return value;
      case "selectedTopicHeading": _setState("selectedTopicHeading", updateNested); return value;
      case "selectedSyllabusId": _setState("selectedSyllabusId", updateNested); return value;
      case "resolvedStrategy": _setState("resolvedStrategy", updateNested); return value;
      case "isSyllabusSetupCollapsed": _setState("isSyllabusSetupCollapsed", updateNested); return value;
      case "syllabusStatus": _setState("syllabusStatus", updateNested); return value;
      case "teacherQuestionPrompt": _setState("teacherQuestionPrompt", updateNested); return value;
      case "blackboardProblemStatement": _setState("blackboardProblemStatement", updateNested); return value;
      case "strategyDraft": _setState("strategyDraft", updateNested); return value;
      case "accessBadgeLabel": _setState("accessBadgeLabel", updateNested); return value;
      case "hasProblemSolution": _setState("hasProblemSolution", updateNested); return value;
      case "blackboardLesson": _setState("blackboardLesson", updateNested); return value;
      case "syllabusTitle": _setState("syllabusTitle", updateNested); return value;
      case "selectedProblemText": _setState("selectedProblemText", updateNested); return value;
      case "teacherQuestionExplanation": _setState("teacherQuestionExplanation", updateNested); return value;
      case "selectedTeacherAnswer": _setState("selectedTeacherAnswer", updateNested); return value;
      case "showAccessGate": _setState("showAccessGate", updateNested); return value;
      case "accessGateTitle": _setState("accessGateTitle", updateNested); return value;
      case "selectedTopicTitle": _setState("selectedTopicTitle", updateNested); return value;
      case "strategyStatus": _setState("strategyStatus", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"aiStructureGenerated":{"properties":{"hierarchy":{"type":"object"},"languageCode":{"type":"string"}},"type":"object"},"aiStructureRequested":{"properties":{"languageCode":{"type":"string"},"sourceText":{"type":"string"}},"type":"object"},"canUseStudio":{"properties":{"value":{"type":"boolean"}},"type":"object"},"contextPublishRequested":{"properties":{"contextDraft":{"type":"object"},"immutable":{"type":"boolean"}},"type":"object"},"contextSetRequested":{"properties":{"contextDraft":{"type":"object"},"strategy":{"type":"object"},"strategyId":{"type":"string"},"strategyVersion":{"type":"number"}},"type":"object"},"lessonShareRequested":{"properties":{"expiresInHours":{"type":"number"},"visibility":{"type":"string"}},"type":"object"},"problemsAddRequested":{"properties":{"problems":{"type":"array"},"topicId":{"type":"string"}},"type":"object"},"resolvedStrategy":{"properties":{},"type":"object"},"stepOperationRequested":{"properties":{"note":{"type":"string"},"operation":{"type":"string"},"stepId":{"type":"string"}},"type":"object"},"suggestedProblemsText":{"properties":{"value":{"type":"string"}},"type":"object"},"syllabusText":{"properties":{"value":{"type":"string"}},"type":"object"}};
  const _validateOutputPayload = (value, schema, path) => {
    if (!schema || typeof schema !== 'object') return '';
    const allowedTypes = Array.isArray(schema.type) ? schema.type : schema.type ? [schema.type] : [];
    const actualType = value === null ? 'null' : Array.isArray(value) ? 'array' : (Number.isInteger(value) ? 'integer' : typeof value);
    if (allowedTypes.length && !allowedTypes.includes(actualType) && !(actualType === 'integer' && allowedTypes.includes('number'))) return path + ' must be ' + allowedTypes.join(' or ') + '.';
    if (schema.enum && !schema.enum.some(item => JSON.stringify(item) === JSON.stringify(value))) return path + ' is not an allowed value.';
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      for (const key of schema.required || []) if (!Object.prototype.hasOwnProperty.call(value, key)) return path + '.' + key + ' is required.';
      for (const [key, child] of Object.entries(schema.properties || {})) if (Object.prototype.hasOwnProperty.call(value, key)) { const error = _validateOutputPayload(value[key], child, path + '.' + key); if (error) return error; }
    }
    if (Array.isArray(value) && schema.items) for (let index = 0; index < value.length; index++) { const error = _validateOutputPayload(value[index], schema.items, path + '[' + index + ']'); if (error) return error; }
    return '';
  };

  const _emitOutput = useCallback(async (outputId, payload, awaitHandlers = false) => {
    const schema = _outputSchemas[outputId];
    if (!schema) throw new Error("Module output '" + outputId + "' is not declared.");
    const payloadError = _validateOutputPayload(payload, schema, 'output.' + outputId);
    if (payloadError) throw new Error(payloadError);

    const adapter = props.onOutput || props.onModuleOutput || props.runtime?.onOutput;
    if (typeof adapter !== 'function') return payload;
    const delivery = adapter(outputId, payload, { moduleId: props.moduleId, awaitHandlers });
    return awaitHandlers ? await delivery : payload;
  }, [props.onOutput, props.onModuleOutput, props.runtime?.onOutput, props.moduleId]);

  const _readRuntimePath = (roots, path) => {
    const parts = String(path || '').split('.').filter(Boolean);
    if (!parts.length || parts.some(part => ['__proto__', 'prototype', 'constructor'].includes(part))) return undefined;
    return parts.reduce((current, part) => {
      if (!current || typeof current !== 'object') return undefined;
      if (typeof current.get === 'function' && !(part in current)) return current.get(part);
      return current[part];
    }, roots);
  };
  const _resolveRuntimeValue = (value, roots) => {
    if (Array.isArray(value)) return value.map(item => _resolveRuntimeValue(item, roots));
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [_resolveRuntimeValue(key, roots), _resolveRuntimeValue(item, roots)]));
    if (typeof value !== 'string') return value;
    const exact = value.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    if (exact) return _readRuntimePath(roots, exact[1]);
    return value.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (_, path) => {
      const resolved = _readRuntimePath(roots, path);
      return resolved == null ? '' : typeof resolved === 'object' ? JSON.stringify(resolved) : String(resolved);
    });
  };
  const _applyApiArguments = (value, values) => {
    if (Array.isArray(value)) return value.map(item => _applyApiArguments(item, values));
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [_applyApiArguments(key, values), _applyApiArguments(item, values)]));
    if (typeof value !== 'string') return value;
    const exactArgsBinding = value.match(/^\s*\{\{\s*args\.([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}\s*$/);
    if (exactArgsBinding && Object.prototype.hasOwnProperty.call(values, exactArgsBinding[1])) return values[exactArgsBinding[1]];
    const exact = value.match(/^\{([A-Za-z_$][A-Za-z0-9_$]*)\}$/);
    if (exact && Object.prototype.hasOwnProperty.call(values, exact[1])) return values[exact[1]];
    return Object.entries(values).reduce((current, [name, argument]) => current.replace(new RegExp('\\\\{\\\\{\\\\s*args\\\\.' + name.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '\\\\s*\\\\}\\\\}', 'g'), String(argument ?? '')).replaceAll('{' + name + '}', String(argument ?? '')), value);
  };
  const _hasBodyOverride = (value) => {
    if (value === undefined || value === null) return false;
    if (typeof value === 'string') {
      if (!value.trim()) return false;
      try { return _hasBodyOverride(JSON.parse(value)); } catch { return true; }
    }
    return !(value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0);
  };

  async function collapseSyllabusSetup(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("showSyllabusSetup", false);
    _setState("isSyllabusSetupCollapsed", true);
    return undefined;
  }

  async function setSyllabusText(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusDraftText", args.value || '');
    return undefined;
  }

  async function loadProfessorSyllabi(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isLoadingSyllabi", true);
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"userIdentity":""}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListProfessorSyllabi", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarListProfessorSyllabi", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["syllabi_query"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.syllabi_query)?stepResults.syllabi_query:[];
return rows.map(row=>({label:String(row.label||row.title||'Untitled syllabus'),value:String(row.value||row.id||'')})).filter(x=>x.value);
      })();
      stepResults["syllabi_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("savedSyllabusOptions", stepResults.syllabi_parse);
    _setState("isLoadingSyllabi", false);
    return stepResults.syllabi_parse;
    return undefined;
  }

  async function initializeProfessorAccess(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = hasProfile ? (profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id)) : inputs.authenticated === true;
const roles = hasProfile && Array.isArray(profile.roles) ? profile.roles.map(String) : [String(inputs.userRole || '')];
const status = String(hasProfile ? (profile.verificationStatus || 'pending') : (inputs.verificationStatus || 'pending'));
const professorRole = roles.some(role => ['professor','educator','admin','institution_admin'].includes(role));
const canUseStudio = authenticated && professorRole && status === 'approved';
const title = !authenticated ? 'Sign in required' : !professorRole ? 'Professor access required' : status === 'rejected' ? 'Professor verification rejected' : 'Professor approval required';
const message = !authenticated ? 'Sign in and complete professor registration to use this studio.' : !professorRole ? 'This workspace is available only to professors and institution administrators.' : status === 'rejected' ? 'Your professor verification was rejected. Contact your institution administrator.' : 'Your professor verification is pending. The studio will unlock after server-side approval.';
const badgeLabel = canUseStudio ? 'Verified professor' : status === 'rejected' ? 'Verification rejected' : 'Verification pending';
return {authenticated,roles,status,canUseStudio,title,message,badgeLabel};
      })();
      stepResults["prof_access_derive"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("canUseStudio", stepResults.prof_access_derive.canUseStudio);
    _setState("showAccessGate", !stepResults.prof_access_derive.canUseStudio);
    _setState("accessGateTitle", stepResults.prof_access_derive.title);
    _setState("accessGateMessage", stepResults.prof_access_derive.message);
    _setState("accessBadgeLabel", stepResults.prof_access_derive.badgeLabel);
    return stepResults.prof_access_derive;
    return undefined;
  }

  async function setNewProblemText(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("newProblemText", args.value);
    return undefined;
  }

  async function addProblems(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
if(!state.selectedTopicId)throw new Error('Select a Topic before adding problems.');const current=Array.isArray(state.selectedTopicProblems)?state.selectedTopicProblems.map(String):[],more=['Explain the key theorem used in '+state.selectedTopicTitle+' and give a counterexample.','Create a guided problem connecting '+state.selectedTopicTitle+' to another unit.','Create an examination-style '+state.selectedTopicTitle+' problem with verification.'],problems=[...new Set([...current,...more])].slice(0,10),hierarchy=JSON.parse(JSON.stringify(state.finalHierarchy));const visit=n=>{if(n.id===state.selectedTopicId)n.problems=problems;(n.children||[]).forEach(visit)};visit(hierarchy);const tree=n=>({id:n.id,label:n.type[0].toUpperCase()+n.type.slice(1)+' · '+n.title,data:{type:n.type,title:n.title,problems:n.problems||[]},children:(n.children||[]).map(tree)}),problemItems=problems.map((text,i)=>({id:state.selectedTopicId+'-problem-'+(i+1),label:(i+1)+'. '+text,data:{type:'problem',topicId:state.selectedTopicId,text}}));return{problems,problemItems,text:problems.map((x,i)=>(i+1)+'. '+x).join('\n'),hierarchy,items:[tree(hierarchy)]};
      })();
      stepResults["problems_expand"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedTopicProblems", stepResults.problems_expand.problems);
    _setState("selectedTopicProblemItems", stepResults.problems_expand.problemItems);
    _setState("selectedProblemIds", []);
    _setState("selectedTopicProblemsText", stepResults.problems_expand.text);
    _setState("finalHierarchy", stepResults.problems_expand.hierarchy);
    _setState("hierarchyItems", stepResults.problems_expand.items);
    _setState("structureStatus", "Problems added to the selected Topic.");
    void _emitOutput("problemsAddRequested", { "hierarchy": stepResults.problems_expand.hierarchy, "problems": stepResults.problems_expand.problems, "topicId": state.selectedTopicId }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function expandSyllabusSetup(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("showSyllabusSetup", true);
    _setState("isSyllabusSetupCollapsed", false);
    return undefined;
  }

  async function setNewProblemSolutionMode(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("newProblemSolutionMode", args.value);
    return undefined;
  }

  async function shareLesson(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("lessonShareRequested", { "expiresInHours": 168, "visibility": "unlisted" }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function openNewProblemForm(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("showNewProblemForm", true);
    _setState("newProblemText", "");
    _setState("problemResolutionStatus", "The database will be checked before AI is used.");
    return undefined;
  }

  async function saveProfessorSyllabus(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const title=String(state.syllabusTitle||'').trim();
const text=String(state.syllabusDraftText||'').trim();
if(!title)throw new Error('Enter a syllabus title.');
if(!text)throw new Error('Enter syllabus content.');
const syllabusKey=title.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,100)||'syllabus';
const status=args.status==='published'?'published':'draft';
return {title,text,syllabusKey,status,visibility:status==='published'?'public':'private',description:String(state.syllabusDescription||'').trim(),languageCode:'und',versionNumber:Math.max(1,Number(inputs.contextVersionNumber||1)),hierarchy:state.finalHierarchy&&typeof state.finalHierarchy==='object'?state.finalHierarchy:{}};
      })();
      stepResults["save_syllabus_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("isSavingSyllabus", true);
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"description":"{{ stepResults.save_syllabus_prepare.description }}","hierarchy":"{{ stepResults.save_syllabus_prepare.hierarchy }}","languageCode":"{{ stepResults.save_syllabus_prepare.languageCode }}","status":"{{ stepResults.save_syllabus_prepare.status }}","syllabusKey":"{{ stepResults.save_syllabus_prepare.syllabusKey }}","syllabusText":"{{ stepResults.save_syllabus_prepare.text }}","title":"{{ stepResults.save_syllabus_prepare.title }}","userIdentity":"","versionNumber":"{{ stepResults.save_syllabus_prepare.versionNumber }}","visibility":"{{ stepResults.save_syllabus_prepare.visibility }}"}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined, namedParameters["syllabusKey"], namedParameters["versionNumber"], namedParameters["title"], namedParameters["description"], namedParameters["languageCode"], namedParameters["syllabusText"], namedParameters["hierarchy"], namedParameters["status"], namedParameters["visibility"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveProfessorSyllabus", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSaveProfessorSyllabus", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["save_syllabus_query"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.save_syllabus_query)?stepResults.save_syllabus_query:[stepResults.save_syllabus_query];const row=rows[0]||{};return row.result||row;
      })();
      stepResults["save_syllabus_result"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedSyllabusId", stepResults.save_syllabus_result.id);
    _setState("syllabusStatus", stepResults.save_syllabus_prepare.status === 'published' ? 'Published for students under this professor.' : 'Syllabus draft saved.');
    await loadProfessorSyllabi({  });
    _setState("isSavingSyllabus", false);
    return stepResults.save_syllabus_result;
    return undefined;
  }

  async function setSyllabusDescription(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusDescription", args.value);
    return undefined;
  }

  async function editStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const src=state.strategyDraft&&typeof state.strategyDraft==='object'?state.strategyDraft:{},draft=JSON.parse(JSON.stringify(src)),index=Math.max(0,Number(state.activeStep||0)),steps=['Classify the problem and state the goal.','Form the characteristic equation and show the determinant expansion.','Solve symbolically and verify every result.'],step=steps[Math.min(index,steps.length-1)],operation=String(args.operation||'keep');draft.requiredSteps=Array.isArray(draft.requiredSteps)?draft.requiredSteps:[];draft.forbiddenShortcuts=Array.isArray(draft.forbiddenShortcuts)?draft.forbiddenShortcuts:[];draft.teachingNotes=Array.isArray(draft.teachingNotes)?draft.teachingNotes:[];if(operation==='keep'&&!draft.requiredSteps.includes(step))draft.requiredSteps.push(step);if(operation==='remove'){draft.requiredSteps=draft.requiredSteps.filter(x=>x!==step);const note='Avoid this step when it is unnecessary: '+step;if(!draft.forbiddenShortcuts.includes(note))draft.forbiddenShortcuts.push(note)}if(operation==='annotate'){const note=String(args.note||'Explain why this step belongs in similar problems.').trim();if(note&&!draft.teachingNotes.includes(note))draft.teachingNotes.push(note)}const parts=['Preferred method\n'+String(draft.preferredMethod||'Professor-guided method'),'Required steps\n'+draft.requiredSteps.map((x,i)=>(i+1)+'. '+x).join('\n'),'Avoid\n'+draft.forbiddenShortcuts.map(x=>'• '+x).join('\n'),'Verification\n'+(draft.verificationRules||[]).map(x=>'• '+x).join('\n'),'Teaching notes\n'+draft.teachingNotes.map(x=>'• '+x).join('\n')];return{draft,text:parts.join('\n\n'),operation,step};
      })();
      stepResults["strategy_edit"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("strategyDraft", stepResults.strategy_edit.draft);
    _setState("strategyDraftText", stepResults.strategy_edit.text);
    _setState("strategyStatus", "Strategy draft updated from the representative solution. Approve it to create a new version.");
    void _emitOutput("stepOperationRequested", { "note": args.note || '', "operation": args.operation, "stepId": args.stepId || '' }, false).catch(error => console.error('Module output delivery failed', error));
    return stepResults.strategy_edit.draft;
    return undefined;
  }

  async function selectTeacherAnswer(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const value=String(args.value||'');
const correct=String(state.teacherQuestionCorrectValue||'');
const locale=String(inputs.locale||'en').toLowerCase();
const ok=Boolean(value)&&value===correct;
const lead=locale==='hi'?(ok?'सही उत्तर।':'फिर से प्रयास करें।'):locale==='ta'?(ok?'சரியான பதில்.':'மீண்டும் முயற்சிக்கவும்.'):(ok?'Correct.':'Try again.');
return {value,feedback:lead+(state.teacherQuestionExplanation?' '+String(state.teacherQuestionExplanation):'')};
      })();
      stepResults["teacher_answer_read"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedTeacherAnswer", stepResults.teacher_answer_read.value);
    _setState("teacherAnswerFeedback", stepResults.teacher_answer_read.feedback);
    return undefined;
  }

  async function selectHierarchyNode(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const item=args.item&&typeof args.item==='object'?args.item:{};const data=item.data&&typeof item.data==='object'?item.data:{};const topic=data.type==='topic',problems=topic&&Array.isArray(data.problems)?data.problems.map(String):[],problemItems=problems.map((text,i)=>({id:String(item.id||'topic')+'-problem-'+(i+1),label:(i+1)+'. '+text,data:{type:'problem',topicId:String(item.id||''),text}}));return{id:String(item.id||''),topic,title:String(data.title||item.label||''),path:String(data.path||item.id||''),problems,problemItems,text:problems.map((x,i)=>(i+1)+'. '+x).join('\n')};
      })();
      stepResults["select_node"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedHierarchyIds", [stepResults.select_node.id]);
    _setState("hasSelectedTopic", stepResults.select_node.topic);
    _setState("selectedTopicId", stepResults.select_node.topic ? stepResults.select_node.id : '');
    _setState("selectedTopicPath", stepResults.select_node.path);
    _setState("hasProblemSolution", false);
    _setState("selectedTopicTitle", stepResults.select_node.title);
    _setState("selectedTopicHeading", stepResults.select_node.topic ? 'Problems for ' + stepResults.select_node.title : 'Select a Topic to view problems');
    _setState("selectedTopicProblems", stepResults.select_node.problems);
    _setState("selectedTopicProblemItems", stepResults.select_node.problemItems);
    _setState("selectedProblemIds", []);
    _setState("selectedProblemText", "");
    _setState("selectedTopicProblemsText", stepResults.select_node.text);
    _setState("structureStatus", stepResults.select_node.topic ? 'Topic selected. Add problems or set the hierarchy as context.' : 'Select a Topic node to view its problems.');
    if (stepResults.select_node.topic) {
      await loadTopicProblems({ "fallbackProblems": stepResults.select_node.problems, "topicId": stepResults.select_node.id, "topicPath": stepResults.select_node.path });
      await loadContextStrategy({ "topicPath": stepResults.select_node.path, "topicTitle": stepResults.select_node.title });
      return stepResults.select_node;
    } else {
      return stepResults.select_node;
    }
    return undefined;
  }

  async function closeNewProblemForm(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("showNewProblemForm", false);
    _setState("newProblemText", "");
    return undefined;
  }

  async function loadTopicProblems(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context';return{contextKey:String(inputs.contextVersionKey||'').trim()||('rudra-scholar:'+root),versionNumber:Math.max(1,Number(inputs.contextVersionNumber||1)),locale:String(inputs.locale||'en')};
      })();
      stepResults["topic_problem_context"] = customResult; vars["customCodeResult"] = customResult; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"contextKey":"{{ stepResults.topic_problem_context.contextKey }}","locale":"{{ stepResults.topic_problem_context.locale }}","topicPath":"{{ args.topicPath }}","userIdentity":"","versionNumber":"{{ stepResults.topic_problem_context.versionNumber }}"}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined, namedParameters["contextKey"], namedParameters["versionNumber"], namedParameters["topicPath"], namedParameters["locale"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarListTopicProblems", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarListTopicProblems", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["topic_problem_query"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.topic_problem_query)?stepResults.topic_problem_query:[],stored=rows.map(r=>String(r&&r.statement||'').trim()).filter(Boolean),fallback=Array.isArray(args.fallbackProblems)?args.fallbackProblems.map(String):[],problems=[...new Set(stored.length?stored:fallback)],items=problems.map((text,i)=>({id:String(args.topicId)+'-problem-'+(i+1),label:(i+1)+'. '+text,data:{type:'problem',topicId:String(args.topicId),text,stored:stored.length>0}}));return{problems,items,source:stored.length?'database':'hierarchy'};
      })();
      stepResults["topic_problem_merge"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedTopicProblems", stepResults.topic_problem_merge.problems);
    _setState("selectedTopicProblemItems", stepResults.topic_problem_merge.items);
    _setState("structureStatus", stepResults.topic_problem_merge.source === 'database' ? 'Stored problems loaded for this Topic.' : 'Proposed problems shown. Select one to save its generated solution.');
    return stepResults.topic_problem_merge;
    return undefined;
  }

  async function requestStructure(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isGeneratingStructure", true);
    _setState("structureStatus", "Generating a multilevel hierarchy with Gemini…");
    void _emitOutput("aiStructureRequested", { "languageCode": inputs.locale, "sourceText": state.syllabusDraftText }, false).catch(error => console.error('Module output delivery failed', error));
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const syllabus=String(state.syllabusDraftText||'').trim();
if(!syllabus)throw new Error('Paste a syllabus before proposing a hierarchy.');
return ['You are an academic curriculum architect.','Return JSON only with Programme > Semester > Subject > Unit > Topic hierarchy.','Every topic must contain a problems array with 2 to 4 representative college-level mathematics problems.','Shape: {"hierarchy":{"id":"...","type":"programme","title":"...","children":[{"id":"...","type":"semester","title":"...","children":[{"id":"...","type":"subject","title":"...","children":[{"id":"...","type":"unit","title":"...","children":[{"id":"...","type":"topic","title":"...","problems":["..."],"children":[]}]}]}]}]}}.','Use stable lowercase-hyphen IDs.','Detect the language of the supplied syllabus and keep every human-readable hierarchy title and representative problem in that same source language. Do not mix languages. Keep JSON keys and mathematical notation unchanged.','Syllabus:',syllabus].join('\n');
      })();
      stepResults["structure_prompt"] = customResult; vars["customCodeResult"] = customResult; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.structure_prompt }}"}, roots) || {};
      const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
      const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["structure_api"] = result; vars["apiResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const r=stepResults.structure_api||{},parts=r?.candidates?.[0]?.content?.parts,raw=Array.isArray(parts)?parts.map(x=>String(x?.text||'')).join(''):'';if(!raw.trim())throw new Error('Gemini returned no curriculum structure.');const o=JSON.parse(raw.trim().replace(/^\`\`\`(?:json)?\s*/i,'').replace(/\s*\`\`\`$/,'')),types=['programme','semester','subject','unit','topic'],slug=(v,f)=>String(v||f).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80)||f,norm=(v,d=0,f='item')=>{if(!v||typeof v!=='object'||d>4)return null;const title=String(v.title||'').trim().slice(0,180);if(!title)return null;const type=types[Math.min(d,4)],children=Array.isArray(v.children)?v.children.slice(0,16).map((c,i)=>norm(c,d+1,type+'-'+i)).filter(Boolean):[],problems=type==='topic'&&Array.isArray(v.problems)?v.problems.map(String).map(x=>x.trim()).filter(Boolean).slice(0,8):[];return{id:slug(v.id||title,f),type,title,children,...(type==='topic'?{problems:problems.length?problems:['Create a worked example for '+title+'.','Add one conceptual verification question for '+title+'.','Add one examination-style application problem for '+title+'.']}: {})}};const hierarchy=norm(o.hierarchy||o,0,'programme');if(!hierarchy)throw new Error('Gemini returned an invalid hierarchy.');const tree=(n,path=[])=>{const next=[...path,n.id];return{id:n.id,label:n.type[0].toUpperCase()+n.type.slice(1)+' · '+n.title,data:{type:n.type,title:n.title,path:next.join('/'),problems:n.problems||[]},children:n.children.map(c=>tree(c,next))}};return{hierarchy,items:[tree(hierarchy)]};
      })();
      stepResults["structure_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("finalHierarchy", stepResults.structure_parse.hierarchy);
    _setState("hierarchyItems", stepResults.structure_parse.items);
    _setState("selectedHierarchyIds", []);
    _setState("hasSelectedTopic", false);
    _setState("showSyllabusSetup", false);
    _setState("isSyllabusSetupCollapsed", true);
    _setState("isGeneratingStructure", false);
    _setState("structureStatus", "Hierarchy ready. Select a Topic to view its problems.");
    void _emitOutput("aiStructureGenerated", { "hierarchy": stepResults.structure_parse.hierarchy, "languageCode": inputs.locale }, false).catch(error => console.error('Module output delivery failed', error));
    return stepResults.structure_parse;
    return undefined;
  }

  async function loadContextStrategy(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context';return{contextKey:String(inputs.contextVersionKey||'').trim()||('rudra-scholar:'+root),versionNumber:Math.max(1,Number(inputs.contextVersionNumber||1))};
      })();
      stepResults["load_strategy_context"] = customResult; vars["customCodeResult"] = customResult; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"contextKey":"{{ stepResults.load_strategy_context.contextKey }}","topicPath":"{{ args.topicPath }}","userIdentity":"","versionNumber":"{{ stepResults.load_strategy_context.versionNumber }}"}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined, namedParameters["contextKey"], namedParameters["versionNumber"], namedParameters["topicPath"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["load_strategy_query"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.load_strategy_query)?stepResults.load_strategy_query:[],row=rows[0],result=row&&typeof row==='object'?(row.result||row):null,strategy=result&&result.strategy?result.strategy:state.strategyDraft,version=result?Number(result.strategyVersion||0):0,id=result?String(result.strategyId||''):'';const a=Array.isArray(strategy.requiredSteps)?strategy.requiredSteps:[],b=Array.isArray(strategy.forbiddenShortcuts)?strategy.forbiddenShortcuts:[],c=Array.isArray(strategy.verificationRules)?strategy.verificationRules:[],d=Array.isArray(strategy.teachingNotes)?strategy.teachingNotes:[],parts=['Preferred method\n'+String(strategy.preferredMethod||'Professor-guided method')];if(a.length)parts.push('Required steps\n'+a.map((x,i)=>(i+1)+'. '+x).join('\n'));if(b.length)parts.push('Avoid\n'+b.map(x=>'• '+x).join('\n'));if(c.length)parts.push('Verification\n'+c.map(x=>'• '+x).join('\n'));if(d.length)parts.push('Teaching notes\n'+d.map(x=>'• '+x).join('\n'));return{strategy,version,id,text:parts.join('\n\n'),status:result?'Approved strategy v'+version+' loaded for '+args.topicTitle+'.':'No approved strategy yet. Refine the example and approve this draft.'};
      })();
      stepResults["load_strategy_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("strategyDraft", stepResults.load_strategy_parse.strategy);
    _setState("strategyDraftText", stepResults.load_strategy_parse.text);
    _setState("resolvedStrategy", stepResults.load_strategy_parse.strategy);
    _setState("resolvedStrategyId", stepResults.load_strategy_parse.id);
    _setState("resolvedStrategyVersion", stepResults.load_strategy_parse.version);
    _setState("strategyStatus", stepResults.load_strategy_parse.status);
    return stepResults.load_strategy_parse;
    return undefined;
  }

  async function setSyllabusTitle(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusTitle", args.value);
    return undefined;
  }

  async function selectSavedSyllabus(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("selectedSyllabusId", args.value);
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"syllabusId":"{{ args.value }}","userIdentity":""}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined, namedParameters["syllabusId"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarLoadProfessorSyllabus", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadProfessorSyllabus", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["saved_syllabus_query"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.saved_syllabus_query)?stepResults.saved_syllabus_query:[stepResults.saved_syllabus_query];
const row=rows[0]||{};
const s=row.result||row;
if(!s||!s.id)throw new Error('The selected syllabus was not found.');
const hierarchy=s.hierarchy&&typeof s.hierarchy==='object'?s.hierarchy:{};
const tree=(n,path=[])=>{if(!n||!n.id)return null;const next=[...path,String(n.id)];return{id:String(n.id),label:String(n.type||'item').replace(/^./,x=>x.toUpperCase())+' · '+String(n.title||''),data:{type:String(n.type||''),title:String(n.title||''),path:next.join('/'),problems:Array.isArray(n.problems)?n.problems:[]},children:Array.isArray(n.children)?n.children.map(c=>tree(c,next)).filter(Boolean):[]}};
const root=tree(hierarchy);
return {...s,hierarchy,items:root?[root]:[],hasHierarchy:Boolean(root)};
      })();
      stepResults["saved_syllabus_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("syllabusTitle", stepResults.saved_syllabus_parse.title);
    _setState("syllabusDescription", stepResults.saved_syllabus_parse.description);
    _setState("syllabusDraftText", stepResults.saved_syllabus_parse.syllabusText);
    _setState("finalHierarchy", stepResults.saved_syllabus_parse.hierarchy);
    _setState("hierarchyItems", stepResults.saved_syllabus_parse.items);
    _setState("syllabusStatus", 'Loaded ' + stepResults.saved_syllabus_parse.title + ' · ' + stepResults.saved_syllabus_parse.status);
    _setState("showSyllabusSetup", !stepResults.saved_syllabus_parse.hasHierarchy);
    _setState("isSyllabusSetupCollapsed", stepResults.saved_syllabus_parse.hasHierarchy);
    return stepResults.saved_syllabus_parse;
    return undefined;
  }

  async function selectProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const item=args.item&&typeof args.item==='object'?args.item:{};const data=item.data&&typeof item.data==='object'?item.data:{};return{id:String(item.id||''),text:String(data.text||item.label||'')};
      })();
      stepResults["problem_select_read"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedProblemIds", [stepResults.problem_select_read.id]);
    _setState("selectedProblemText", stepResults.problem_select_read.text);
    _setState("selectedProblemStatement", stepResults.problem_select_read.text);
    await resolveProblemSolution({ "solutionMode": "detailed", "statement": stepResults.problem_select_read.text });
    return stepResults.problem_select_resolve;
    return undefined;
  }

  async function submitNewProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const text=String(state.newProblemText||'').trim();if(!text)throw new Error('Enter a problem statement.');if(!state.selectedTopicId)throw new Error('Select a Topic first.');const current=Array.isArray(state.selectedTopicProblems)?state.selectedTopicProblems.map(String):[],problems=[...new Set([...current,text])],items=problems.map((value,i)=>({id:state.selectedTopicId+'-problem-'+(i+1),label:(i+1)+'. '+value,data:{type:'problem',topicId:state.selectedTopicId,text:value}}));return{text,problems,items};
      })();
      stepResults["new_problem_prepare_item"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedTopicProblems", stepResults.new_problem_prepare_item.problems);
    _setState("selectedTopicProblemItems", stepResults.new_problem_prepare_item.items);
    _setState("selectedProblemStatement", stepResults.new_problem_prepare_item.text);
    _setState("showNewProblemForm", false);
    await resolveProblemSolution({ "solutionMode": state.newProblemSolutionMode, "statement": stepResults.new_problem_prepare_item.text });
    _setState("newProblemText", "");
    return stepResults.new_problem_resolve;
    return undefined;
  }

  async function selectStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const index=Math.max(0,Number(args.stepIndex??args.index??0));
const lesson=state.blackboardLesson&&typeof state.blackboardLesson==='object'?state.blackboardLesson:{};
const steps=Array.isArray(lesson.steps)?lesson.steps:[];
const step=steps[index]||steps[0]||{};
const q=step.teacherQuestion&&typeof step.teacherQuestion==='object'?step.teacherQuestion:{prompt:String(step.teacherPrompt||''),options:[],correctValue:'',explanation:''};
return {index,prompt:String(q.prompt||step.teacherPrompt||''),options:Array.isArray(q.options)?q.options:[],correctValue:String(q.correctValue||''),explanation:String(q.explanation||'')};
      })();
      stepResults["teacher_step_read"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("activeStep", stepResults.teacher_step_read.index);
    _setState("teacherQuestionPrompt", stepResults.teacher_step_read.prompt);
    _setState("teacherQuestionOptions", stepResults.teacher_step_read.options);
    _setState("teacherQuestionCorrectValue", stepResults.teacher_step_read.correctValue);
    _setState("teacherQuestionExplanation", stepResults.teacher_step_read.explanation);
    _setState("selectedTeacherAnswer", "");
    _setState("teacherAnswerFeedback", "");
    return undefined;
  }

  async function syncSyllabusInput(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusDraftText", inputs.syllabusText || '');
    return undefined;
  }

  async function resolveProblemSolution(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isResolvingProblem", true);
    _setState("problemResolutionStatus", "Checking saved solutions for this hierarchy…");
    _setState("hasProblemSolution", false);
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const statement=String(args.statement||'').trim();
if(!statement)throw new Error('Enter a problem statement.');
if(!state.selectedTopicId)throw new Error('Select a Topic first.');
const normalized=statement.normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context';
const contextKey=String(inputs.contextVersionKey||'').trim()||('rudra-scholar:'+root);
const versionNumber=Math.max(1,Number(inputs.contextVersionNumber||1));
const mode=args.solutionMode==='quick'?'quick':'detailed';
const topicPath=String(state.selectedTopicPath||state.selectedTopicId);
const requested=String(inputs.locale||'en').toLowerCase();
const locale=['en','hi','ta'].includes(requested)?requested:'en';
return {statement,normalized,contextKey,versionNumber,mode,topicPath,locale,promptVersion:'v2-mcq-blackboard'};
      })();
      stepResults["problem_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"contextKey":"{{ stepResults.problem_prepare.contextKey }}","topicPath":"{{ stepResults.problem_prepare.topicPath }}","userIdentity":"","versionNumber":"{{ stepResults.problem_prepare.versionNumber }}"}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined, namedParameters["contextKey"], namedParameters["versionNumber"], namedParameters["topicPath"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarResolveContextStrategy", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarResolveContextStrategy", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["problem_strategy_lookup"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.problem_strategy_lookup)?stepResults.problem_strategy_lookup:[],row=rows[0],result=row&&typeof row==='object'?(row.result||row):null;return{id:result?String(result.strategyId||''):'',version:result?Number(result.strategyVersion||0):0,strategy:result&&result.strategy?result.strategy:(state.strategyDraft||{})};
      })();
      stepResults["problem_strategy_result"] = customResult; vars["customCodeResult"] = customResult; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"contextKey":"{{ stepResults.problem_prepare.contextKey }}","locale":"{{ stepResults.problem_prepare.locale }}","normalizedProblem":"{{ stepResults.problem_prepare.normalized }}","promptVersion":"{{ stepResults.problem_prepare.promptVersion }}","solutionMode":"{{ stepResults.problem_prepare.mode }}","strategyVersion":"{{ stepResults.problem_strategy_result.version }}","topicPath":"{{ stepResults.problem_prepare.topicPath }}","userIdentity":"","versionNumber":"{{ stepResults.problem_prepare.versionNumber }}"}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined, namedParameters["contextKey"], namedParameters["versionNumber"], namedParameters["topicPath"], namedParameters["locale"], namedParameters["normalizedProblem"], namedParameters["solutionMode"], namedParameters["promptVersion"], namedParameters["strategyVersion"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarFindProblemSolution", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarFindProblemSolution", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["problem_lookup"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=stepResults.problem_lookup;
const row=Array.isArray(rows)?rows[0]:rows;
const result=row&&typeof row==='object'?(row.result||row):null;
if(!result||!result.solution)return {hit:false};
const s=result.solution||{};
const steps=Array.isArray(s.steps)?s.steps:[];
const valid=steps.length>0&&steps.every(x=>x&&typeof x==='object'&&x.teacherQuestion&&Array.isArray(x.teacherQuestion.options)&&x.teacherQuestion.options.length>=2);
if(!valid)return {hit:false};
const board={title:String(s.title||s.summary||'Worked solution'),lessonKind:'worked-example',problemLabel:String(s.problemLabel||'Problem'),problemStatement:String(s.problemStatement||stepResults.problem_prepare.statement),learningGoal:String(s.learningGoal||s.summary||''),steps:steps.map((x,i)=>({...x,id:String(x.id||'step-'+(i+1)),teacherPrompt:String(x.teacherQuestion.prompt||x.teacherPrompt||'')}))};
const checks=Array.isArray(s.checks)?s.checks:[];
const lines=[s.summary,steps.map((x,i)=>(i+1)+'. '+String(x.title||x.explanation||'')).join('\n'),s.answer,checks.map(String).join('\n')].filter(Boolean);
return {hit:true,result,solution:s,board,question:board.steps[0].teacherQuestion,text:lines.join('\n\n')};
      })();
      stepResults["problem_cache_result"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.problem_cache_result.hit) {
      _setState("problemSolution", stepResults.problem_cache_result.solution);
      _setState("problemSolutionText", stepResults.problem_cache_result.text);
      _setState("blackboardLesson", stepResults.problem_cache_result.board);
      _setState("blackboardTitle", stepResults.problem_cache_result.board.title);
      _setState("blackboardProblemLabel", stepResults.problem_cache_result.board.problemLabel);
      _setState("blackboardProblemStatement", stepResults.problem_cache_result.board.problemStatement);
      _setState("blackboardLearningGoal", stepResults.problem_cache_result.board.learningGoal);
      _setState("blackboardSteps", stepResults.problem_cache_result.board.steps);
      _setState("activeStep", 0);
      _setState("teacherQuestionPrompt", stepResults.problem_cache_result.question.prompt);
      _setState("teacherQuestionOptions", stepResults.problem_cache_result.question.options);
      _setState("teacherQuestionCorrectValue", stepResults.problem_cache_result.question.correctValue);
      _setState("teacherQuestionExplanation", stepResults.problem_cache_result.question.explanation);
      _setState("selectedTeacherAnswer", "");
      _setState("teacherAnswerFeedback", "");
      _setState("problemResolutionStatus", 'Loaded a saved solution created with strategy v' + stepResults.problem_strategy_result.version + '. AI was not called.');
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const p=stepResults.problem_prepare;
const strategy=stepResults.problem_strategy_result.strategy||{};
const languageName=p.locale==='hi'?'Hindi':p.locale==='ta'?'Tamil':'English';
return ['You are a college mathematics professor creating an interactive blackboard lesson.','Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.','Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.','Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in '+languageName+' only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.','Follow this approved teaching strategy exactly: '+JSON.stringify(strategy),'Solution mode: '+p.mode+'.','Language code: '+p.locale+'.','Context hierarchy: '+JSON.stringify(state.finalHierarchy||{}),'Selected topic path: '+p.topicPath,'Problem: '+p.statement].join('\n');
        })();
        stepResults["problem_ai_prompt"] = customResult; vars["customCodeResult"] = customResult; }
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.problem_ai_prompt }}"}, roots) || {};
        const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
        const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["problem_ai_call"] = result; vars["apiResult"] = result; }
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const r=stepResults.problem_ai_call||{};
const parts=r?.candidates?.[0]?.content?.parts;
const raw=Array.isArray(parts)?parts.map(x=>String(x?.text||'')).join(''):'';
if(!raw.trim())throw new Error('Gemini returned no solution.');
const s=JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,''));
const allowed=new Set(['heading','text','equation','matrix','list','definition','theorem','proof','table','graph','note']);
const sourceSteps=Array.isArray(s.steps)?s.steps:[];
if(!sourceSteps.length)throw new Error('Gemini returned no lesson steps.');
const steps=sourceSteps.map((x,i)=>{
 const rawQ=x&&x.teacherQuestion&&typeof x.teacherQuestion==='object'?x.teacherQuestion:{};
 const rawOptions=Array.isArray(rawQ.options)?rawQ.options:[];
 const options=rawOptions.slice(0,4).map((o,j)=>typeof o==='object'?{label:String(o.label||''),value:String(o.value||String.fromCharCode(97+j))}:{label:String(o),value:String.fromCharCode(97+j)}).filter(o=>o.label);
 if(options.length<2)throw new Error('Gemini must provide multiple-choice options for every step.');
 const values=new Set(options.map(o=>o.value));
 const correctValue=values.has(String(rawQ.correctValue||''))?String(rawQ.correctValue):options[0].value;
 const q={prompt:String(rawQ.prompt||x.teacherPrompt||''),options,correctValue,explanation:String(rawQ.explanation||'')};
 const content=Array.isArray(x.content)?x.content.filter(b=>b&&allowed.has(b.type)):[];
 return {id:String(x.id||'step-'+(i+1)),title:String(x.title||'Step '+(i+1)),narration:String(x.narration||x.explanation||''),explanation:String(x.explanation||''),simpleExplanation:String(x.simpleExplanation||''),why:String(x.why||''),commonMistake:String(x.commonMistake||''),content:content.length?content:[{type:'text',text:String(x.explanation||'')}],teacherPrompt:q.prompt,teacherQuestion:q};
});
const solution={title:String(s.title||s.summary||'Worked solution'),problemLabel:String(s.problemLabel||'Problem'),problemStatement:String(s.problemStatement||stepResults.problem_prepare.statement),learningGoal:String(s.learningGoal||s.summary||''),summary:String(s.summary||''),steps,answer:String(s.answer||''),checks:Array.isArray(s.checks)?s.checks.map(String):[]};
const board={title:solution.title,lessonKind:'worked-example',problemLabel:solution.problemLabel,problemStatement:solution.problemStatement,learningGoal:solution.learningGoal,steps};
const question=steps[0].teacherQuestion;
const lines=[solution.summary,steps.map((x,i)=>(i+1)+'. '+x.title).join('\n'),solution.answer,solution.checks.join('\n')].filter(Boolean);
return {solution,board,question,text:lines.join('\n\n')};
        })();
        stepResults["problem_ai_parse"] = customResult; vars["customCodeResult"] = customResult; }
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"contextKey":"{{ stepResults.problem_prepare.contextKey }}","hierarchy":"{{ state.finalHierarchy }}","locale":"{{ stepResults.problem_prepare.locale }}","model":"gemini-2.5-flash","normalizedProblem":"{{ stepResults.problem_prepare.normalized }}","promptVersion":"{{ stepResults.problem_prepare.promptVersion }}","provider":"gemini","solution":"{{ stepResults.problem_ai_parse.solution }}","solutionMode":"{{ stepResults.problem_prepare.mode }}","statement":"{{ stepResults.problem_prepare.statement }}","strategyId":"{{ stepResults.problem_strategy_result.id }}","strategySnapshot":"{{ stepResults.problem_strategy_result.strategy }}","strategyVersion":"{{ stepResults.problem_strategy_result.version }}","topicId":"{{ state.selectedTopicId }}","topicPath":"{{ stepResults.problem_prepare.topicPath }}","userIdentity":"","versionNumber":"{{ stepResults.problem_prepare.versionNumber }}"}, roots) || {};
        delete namedParameters["userIdentity"];
        const parameters = [undefined, namedParameters["contextKey"], namedParameters["versionNumber"], namedParameters["hierarchy"], namedParameters["locale"], namedParameters["topicPath"], namedParameters["topicId"], namedParameters["statement"], namedParameters["normalizedProblem"], namedParameters["solutionMode"], namedParameters["promptVersion"], namedParameters["solution"], namedParameters["provider"], namedParameters["model"], namedParameters["strategyId"], namedParameters["strategyVersion"], namedParameters["strategySnapshot"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["problem_store"] = result; vars["queryResult"] = result; }
      _setState("problemSolution", stepResults.problem_ai_parse.solution);
      _setState("problemSolutionText", stepResults.problem_ai_parse.text);
      _setState("blackboardLesson", stepResults.problem_ai_parse.board);
      _setState("blackboardTitle", stepResults.problem_ai_parse.board.title);
      _setState("blackboardProblemLabel", stepResults.problem_ai_parse.board.problemLabel);
      _setState("blackboardProblemStatement", stepResults.problem_ai_parse.board.problemStatement);
      _setState("blackboardLearningGoal", stepResults.problem_ai_parse.board.learningGoal);
      _setState("blackboardSteps", stepResults.problem_ai_parse.board.steps);
      _setState("activeStep", 0);
      _setState("teacherQuestionPrompt", stepResults.problem_ai_parse.question.prompt);
      _setState("teacherQuestionOptions", stepResults.problem_ai_parse.question.options);
      _setState("teacherQuestionCorrectValue", stepResults.problem_ai_parse.question.correctValue);
      _setState("teacherQuestionExplanation", stepResults.problem_ai_parse.question.explanation);
      _setState("selectedTeacherAnswer", "");
      _setState("teacherAnswerFeedback", "");
      _setState("problemResolutionStatus", 'New problem solved with approved strategy v' + stepResults.problem_strategy_result.version + ' and saved for reuse.');
      _setState("isResolvingProblem", false);
      _setState("hasProblemSolution", true);
      return state.problemSolution;
    } else {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const p=stepResults.problem_prepare;
const strategy=stepResults.problem_strategy_result.strategy||{};
const languageName=p.locale==='hi'?'Hindi':p.locale==='ta'?'Tamil':'English';
return ['You are a college mathematics professor creating an interactive blackboard lesson.','Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.','Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.','Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in '+languageName+' only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.','Follow this approved teaching strategy exactly: '+JSON.stringify(strategy),'Solution mode: '+p.mode+'.','Language code: '+p.locale+'.','Context hierarchy: '+JSON.stringify(state.finalHierarchy||{}),'Selected topic path: '+p.topicPath,'Problem: '+p.statement].join('\n');
        })();
        stepResults["problem_ai_prompt"] = customResult; vars["customCodeResult"] = customResult; }
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.problem_ai_prompt }}"}, roots) || {};
        const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
        const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["problem_ai_call"] = result; vars["apiResult"] = result; }
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const r=stepResults.problem_ai_call||{};
const parts=r?.candidates?.[0]?.content?.parts;
const raw=Array.isArray(parts)?parts.map(x=>String(x?.text||'')).join(''):'';
if(!raw.trim())throw new Error('Gemini returned no solution.');
const s=JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,''));
const allowed=new Set(['heading','text','equation','matrix','list','definition','theorem','proof','table','graph','note']);
const sourceSteps=Array.isArray(s.steps)?s.steps:[];
if(!sourceSteps.length)throw new Error('Gemini returned no lesson steps.');
const steps=sourceSteps.map((x,i)=>{
 const rawQ=x&&x.teacherQuestion&&typeof x.teacherQuestion==='object'?x.teacherQuestion:{};
 const rawOptions=Array.isArray(rawQ.options)?rawQ.options:[];
 const options=rawOptions.slice(0,4).map((o,j)=>typeof o==='object'?{label:String(o.label||''),value:String(o.value||String.fromCharCode(97+j))}:{label:String(o),value:String.fromCharCode(97+j)}).filter(o=>o.label);
 if(options.length<2)throw new Error('Gemini must provide multiple-choice options for every step.');
 const values=new Set(options.map(o=>o.value));
 const correctValue=values.has(String(rawQ.correctValue||''))?String(rawQ.correctValue):options[0].value;
 const q={prompt:String(rawQ.prompt||x.teacherPrompt||''),options,correctValue,explanation:String(rawQ.explanation||'')};
 const content=Array.isArray(x.content)?x.content.filter(b=>b&&allowed.has(b.type)):[];
 return {id:String(x.id||'step-'+(i+1)),title:String(x.title||'Step '+(i+1)),narration:String(x.narration||x.explanation||''),explanation:String(x.explanation||''),simpleExplanation:String(x.simpleExplanation||''),why:String(x.why||''),commonMistake:String(x.commonMistake||''),content:content.length?content:[{type:'text',text:String(x.explanation||'')}],teacherPrompt:q.prompt,teacherQuestion:q};
});
const solution={title:String(s.title||s.summary||'Worked solution'),problemLabel:String(s.problemLabel||'Problem'),problemStatement:String(s.problemStatement||stepResults.problem_prepare.statement),learningGoal:String(s.learningGoal||s.summary||''),summary:String(s.summary||''),steps,answer:String(s.answer||''),checks:Array.isArray(s.checks)?s.checks.map(String):[]};
const board={title:solution.title,lessonKind:'worked-example',problemLabel:solution.problemLabel,problemStatement:solution.problemStatement,learningGoal:solution.learningGoal,steps};
const question=steps[0].teacherQuestion;
const lines=[solution.summary,steps.map((x,i)=>(i+1)+'. '+x.title).join('\n'),solution.answer,solution.checks.join('\n')].filter(Boolean);
return {solution,board,question,text:lines.join('\n\n')};
        })();
        stepResults["problem_ai_parse"] = customResult; vars["customCodeResult"] = customResult; }
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"contextKey":"{{ stepResults.problem_prepare.contextKey }}","hierarchy":"{{ state.finalHierarchy }}","locale":"{{ stepResults.problem_prepare.locale }}","model":"gemini-2.5-flash","normalizedProblem":"{{ stepResults.problem_prepare.normalized }}","promptVersion":"{{ stepResults.problem_prepare.promptVersion }}","provider":"gemini","solution":"{{ stepResults.problem_ai_parse.solution }}","solutionMode":"{{ stepResults.problem_prepare.mode }}","statement":"{{ stepResults.problem_prepare.statement }}","strategyId":"{{ stepResults.problem_strategy_result.id }}","strategySnapshot":"{{ stepResults.problem_strategy_result.strategy }}","strategyVersion":"{{ stepResults.problem_strategy_result.version }}","topicId":"{{ state.selectedTopicId }}","topicPath":"{{ stepResults.problem_prepare.topicPath }}","userIdentity":"","versionNumber":"{{ stepResults.problem_prepare.versionNumber }}"}, roots) || {};
        delete namedParameters["userIdentity"];
        const parameters = [undefined, namedParameters["contextKey"], namedParameters["versionNumber"], namedParameters["hierarchy"], namedParameters["locale"], namedParameters["topicPath"], namedParameters["topicId"], namedParameters["statement"], namedParameters["normalizedProblem"], namedParameters["solutionMode"], namedParameters["promptVersion"], namedParameters["solution"], namedParameters["provider"], namedParameters["model"], namedParameters["strategyId"], namedParameters["strategyVersion"], namedParameters["strategySnapshot"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarStoreProblemSolution", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarStoreProblemSolution", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["problem_store"] = result; vars["queryResult"] = result; }
      _setState("problemSolution", stepResults.problem_ai_parse.solution);
      _setState("problemSolutionText", stepResults.problem_ai_parse.text);
      _setState("blackboardLesson", stepResults.problem_ai_parse.board);
      _setState("blackboardTitle", stepResults.problem_ai_parse.board.title);
      _setState("blackboardProblemLabel", stepResults.problem_ai_parse.board.problemLabel);
      _setState("blackboardProblemStatement", stepResults.problem_ai_parse.board.problemStatement);
      _setState("blackboardLearningGoal", stepResults.problem_ai_parse.board.learningGoal);
      _setState("blackboardSteps", stepResults.problem_ai_parse.board.steps);
      _setState("activeStep", 0);
      _setState("teacherQuestionPrompt", stepResults.problem_ai_parse.question.prompt);
      _setState("teacherQuestionOptions", stepResults.problem_ai_parse.question.options);
      _setState("teacherQuestionCorrectValue", stepResults.problem_ai_parse.question.correctValue);
      _setState("teacherQuestionExplanation", stepResults.problem_ai_parse.question.explanation);
      _setState("selectedTeacherAnswer", "");
      _setState("teacherAnswerFeedback", "");
      _setState("problemResolutionStatus", 'New problem solved with approved strategy v' + stepResults.problem_strategy_result.version + ' and saved for reuse.');
      _setState("isResolvingProblem", false);
      _setState("hasProblemSolution", true);
      return state.problemSolution;
    }
    return undefined;
  }

  async function setHierarchyContext(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isSavingStrategy", true);
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
if(!state.selectedTopicId)throw new Error('Select a Topic before approving a strategy.');const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context',contextKey=String(inputs.contextVersionKey||'').trim()||('rudra-scholar:'+root);return{contextKey,versionNumber:Math.max(1,Number(inputs.contextVersionNumber||1)),locale:String(inputs.locale||'en'),scopePath:String(state.selectedTopicPath||state.selectedTopicId),scopeType:'topic',title:String(state.selectedTopicTitle||'Topic')+' teaching strategy',strategy:state.strategyDraft};
      })();
      stepResults["context_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"contextKey":"{{ stepResults.context_prepare.contextKey }}","hierarchy":"{{ state.finalHierarchy }}","locale":"{{ stepResults.context_prepare.locale }}","scopePath":"{{ stepResults.context_prepare.scopePath }}","scopeType":"{{ stepResults.context_prepare.scopeType }}","strategy":"{{ stepResults.context_prepare.strategy }}","title":"{{ stepResults.context_prepare.title }}","userIdentity":"","versionNumber":"{{ stepResults.context_prepare.versionNumber }}"}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined, namedParameters["contextKey"], namedParameters["versionNumber"], namedParameters["hierarchy"], namedParameters["locale"], namedParameters["scopePath"], namedParameters["scopeType"], namedParameters["title"], namedParameters["strategy"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35xb000604jo2mif8zbl", queryId: "scholarSaveContextStrategy", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35xb000604jo2mif8zbl/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSaveContextStrategy", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["context_save_query"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.context_save_query)?stepResults.context_save_query:[],row=rows[0],result=row&&typeof row==='object'?(row.result||row):{};return{id:String(result.strategyId||''),version:Number(result.strategyVersion||0),strategy:result.strategy||stepResults.context_prepare.strategy};
      })();
      stepResults["context_save_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("resolvedStrategyId", stepResults.context_save_parse.id);
    _setState("resolvedStrategyVersion", stepResults.context_save_parse.version);
    _setState("resolvedStrategy", stepResults.context_save_parse.strategy);
    _setState("strategyStatus", 'Approved strategy v' + stepResults.context_save_parse.version + ' saved for ' + state.selectedTopicTitle + '.');
    _setState("structureStatus", "Selected hierarchy and teaching strategy are now the active context.");
    _setState("isSavingStrategy", false);
    void _emitOutput("contextSetRequested", { "hierarchy": state.finalHierarchy, "languageCode": inputs.locale, "scopePath": state.selectedTopicPath, "selectedTopicId": state.selectedTopicId, "strategy": stepResults.context_save_parse.strategy, "strategyId": stepResults.context_save_parse.id, "strategyVersion": stepResults.context_save_parse.version }, false).catch(error => console.error('Module output delivery failed', error));
    return { "hierarchy": state.finalHierarchy, "scopePath": state.selectedTopicPath, "strategy": stepResults.context_save_parse.strategy, "strategyId": stepResults.context_save_parse.id, "strategyVersion": stepResults.context_save_parse.version };
    return undefined;
  }

  async function refreshProfessorScenario(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await initializeProfessorAccess({  });
    await syncSyllabusInput({  });
    return stepResults.scenario_access;
    return undefined;
  }

  async function publishContext(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("contextPublishRequested", { "contextDraft": inputs.contextDraft, "immutable": true }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  const _localActions = {
    "collapseSyllabusSetup": collapseSyllabusSetup,
    "setSyllabusText": setSyllabusText,
    "loadProfessorSyllabi": loadProfessorSyllabi,
    "initializeProfessorAccess": initializeProfessorAccess,
    "setNewProblemText": setNewProblemText,
    "addProblems": addProblems,
    "expandSyllabusSetup": expandSyllabusSetup,
    "setNewProblemSolutionMode": setNewProblemSolutionMode,
    "shareLesson": shareLesson,
    "openNewProblemForm": openNewProblemForm,
    "saveProfessorSyllabus": saveProfessorSyllabus,
    "setSyllabusDescription": setSyllabusDescription,
    "editStep": editStep,
    "selectTeacherAnswer": selectTeacherAnswer,
    "selectHierarchyNode": selectHierarchyNode,
    "closeNewProblemForm": closeNewProblemForm,
    "loadTopicProblems": loadTopicProblems,
    "requestStructure": requestStructure,
    "loadContextStrategy": loadContextStrategy,
    "setSyllabusTitle": setSyllabusTitle,
    "selectSavedSyllabus": selectSavedSyllabus,
    "selectProblem": selectProblem,
    "submitNewProblem": submitNewProblem,
    "selectStep": selectStep,
    "syncSyllabusInput": syncSyllabusInput,
    "resolveProblemSolution": resolveProblemSolution,
    "setHierarchyContext": setHierarchyContext,
    "refreshProfessorScenario": refreshProfessorScenario,
    "publishContext": publishContext,
  };
  const _localActionArguments = {
    "collapseSyllabusSetup": [],
    "setSyllabusText": ["value"],
    "loadProfessorSyllabi": [],
    "initializeProfessorAccess": [],
    "setNewProblemText": ["value"],
    "addProblems": [],
    "expandSyllabusSetup": [],
    "setNewProblemSolutionMode": ["value"],
    "shareLesson": [],
    "openNewProblemForm": [],
    "saveProfessorSyllabus": ["status"],
    "setSyllabusDescription": ["value"],
    "editStep": ["operation", "stepId", "note"],
    "selectTeacherAnswer": ["value"],
    "selectHierarchyNode": ["item", "index", "depth"],
    "closeNewProblemForm": [],
    "loadTopicProblems": ["topicPath", "topicId", "fallbackProblems"],
    "requestStructure": [],
    "loadContextStrategy": ["topicPath", "topicTitle"],
    "setSyllabusTitle": ["value"],
    "selectSavedSyllabus": ["value"],
    "selectProblem": ["item", "index", "depth"],
    "submitNewProblem": [],
    "selectStep": ["stepIndex", "index"],
    "syncSyllabusInput": [],
    "resolveProblemSolution": ["statement", "solutionMode"],
    "setHierarchyContext": [],
    "refreshProfessorScenario": [],
    "publishContext": [],
  };
  const _callAction = (name, configuredArgs = {}, eventArgs = []) => {
    const localAction = _localActions[name];
    if (localAction) {
      const names = _localActionArguments[name] || [];
      return localAction(Object.fromEntries(names.map((argumentName, index) => {
        const configured = Object.prototype.hasOwnProperty.call(configuredArgs, argumentName) ? configuredArgs[argumentName] : undefined;
        return [argumentName, (configured === '' || configured === undefined) && eventArgs[index] !== undefined ? eventArgs[index] : argumentName === 'event' && (configured === '' || configured === undefined) ? eventArgs[0] : configured];
      })));
    }
    const externalAction = _externalActions?.[name];
    if (typeof externalAction === 'function') {
      return externalAction(Object.keys(configuredArgs).length > 0 ? configuredArgs : eventArgs[0]);
    }
    const [namespace, method] = String(name).split('.');
    const globalAction = typeof globalThis !== 'undefined' ? globalThis[namespace]?.[method] : undefined;
    if (typeof globalAction === 'function') return globalAction(...Object.values(configuredArgs));
    console.warn("Rudra action '" + name + "' is not available in this runtime.");
    return undefined;
  };

  const _lifecycleRuns = useRef(new Map());
  const _runLifecycle = useCallback((key, mode, task, label) => {
    const prior = _lifecycleRuns.current.get(key);
    if (mode === 'exhaust' && prior?.promise) return prior.promise;
    if (mode === 'takeLatest') prior?.controller?.abort();
    const controller = new AbortController();
    const execute = () => Promise.resolve().then(() => task(controller.signal));
    const promise = mode === 'queue' && prior?.promise ? prior.promise.catch(() => undefined).then(execute) : execute();
    _lifecycleRuns.current.set(key, { controller, promise });
    promise.catch(error => { if (error?.name !== 'AbortError') console.error(label, error); }).finally(() => { if (_lifecycleRuns.current.get(key)?.promise === promise) _lifecycleRuns.current.delete(key); });
    return promise;
  }, []);
  useEffect(() => () => { for (const run of _lifecycleRuns.current.values()) run.controller?.abort(); _lifecycleRuns.current.clear(); }, []);
  useEffect(() => {
    void _runLifecycle("professor_scenario_mountrefreshProfessorScenario", "takeLatest", (signal) => refreshProfessorScenario({ signal }), "Module mount lifecycle failed:");
  }, []);
  useEffect(() => {
    void _runLifecycle("professor_syllabi_mountloadProfessorSyllabi", "takeLatest", (signal) => loadProfessorSyllabi({ signal }), "Module mount lifecycle failed:");
  }, []);
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; }
    set_showAccessGate(structuredClone(true));
    set_accessGateTitle(structuredClone("Professor approval required"));
    set_accessGateMessage(structuredClone("Sign in with an approved professor account to use this studio."));
    set_accessBadgeLabel(structuredClone("Verification pending"));
    set_syllabusDraftText(structuredClone("Semester 1 · Linear Algebra\nUnit 1: Matrices and systems\nUnit 2: Vector spaces\nUnit 3: Eigenvalues and diagonalisation"));
    set_selectedSyllabusId(structuredClone(""));
    set_syllabusStatus(structuredClone("Select a saved syllabus or save this draft."));
    set_showSyllabusSetup(structuredClone(true));
    set_isSyllabusSetupCollapsed(structuredClone(false));
    set_finalHierarchy(structuredClone({"children":[{"children":[{"children":[{"children":[{"children":[],"id":"matrix-operations","title":"Matrix operations","type":"topic"},{"children":[],"id":"eigenvalues","title":"Eigenvalues and diagonalisation","type":"topic"}],"id":"matrices","title":"Unit 1 · Matrices and systems","type":"unit"}],"id":"engineering-mathematics-i","title":"Engineering Mathematics I","type":"subject"}],"id":"semester-1","title":"Semester 1","type":"semester"}],"id":"engineering-mathematics","title":"B.E. Mathematics","type":"programme"}));
    set_hierarchyItems(structuredClone([{"children":[{"children":[{"children":[{"children":[{"children":[],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations","problems":["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether three supplied vectors are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."],"title":"Matrix operations","type":"topic"},"id":"matrix-operations","label":"Topic · Matrix operations"},{"children":[],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues","problems":["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether three supplied vectors are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."],"title":"Eigenvalues and diagonalisation","type":"topic"},"id":"eigenvalues","label":"Topic · Eigenvalues and diagonalisation"}],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices","problems":[],"title":"Unit 1 · Matrices and systems","type":"unit"},"id":"matrices","label":"Unit · Unit 1 · Matrices and systems"}],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i","problems":[],"title":"Engineering Mathematics I","type":"subject"},"id":"engineering-mathematics-i","label":"Subject · Engineering Mathematics I"}],"data":{"path":"engineering-mathematics/semester-1","problems":[],"title":"Semester 1","type":"semester"},"id":"semester-1","label":"Semester · Semester 1"}],"data":{"path":"engineering-mathematics","problems":[],"title":"B.E. Mathematics","type":"programme"},"id":"engineering-mathematics","label":"Programme · B.E. Mathematics"}]));
    set_selectedHierarchyIds(structuredClone([]));
    set_hasSelectedTopic(structuredClone(false));
    set_selectedTopicId(structuredClone(""));
    set_selectedTopicPath(structuredClone(""));
    set_selectedTopicTitle(structuredClone(""));
    set_selectedTopicHeading(structuredClone("Selected topic problems"));
    set_selectedTopicProblems(structuredClone([]));
    set_selectedTopicProblemItems(structuredClone([]));
    set_selectedProblemIds(structuredClone([]));
    set_selectedProblemText(structuredClone(""));
    set_selectedProblemStatement(structuredClone(""));
    set_hasProblemSolution(structuredClone(false));
    set_problemSolution(structuredClone({}));
    set_problemSolutionText(structuredClone(""));
    set_problemResolutionStatus(structuredClone("Select a problem to load its saved solution."));
    set_isResolvingProblem(structuredClone(false));
    set_activeStep(structuredClone(0));
    set_selectedTeacherAnswer(structuredClone(""));
    set_teacherAnswerFeedback(structuredClone("Select one answer."));
    set_blackboardLesson(structuredClone({"learningGoal":"Form the characteristic equation, solve it and verify the eigenvalues.","lessonKind":"worked-example","problemLabel":"Representative problem · Linear algebra","problemStatement":"Find the eigenvalues of A = [[2, 1], [1, 2]].","steps":[{"content":[{"label":"Given","latex":"A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}","type":"equation","visualText":"A = [[2, 1], [1, 2]]"},{"term":"Eigenvalue","text":"A scalar λ for which Av = λv for some non-zero vector v.","type":"definition"}],"explanation":"For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.","id":"classify","narration":"First identify the matrix and the required eigenvalue equation.","teacherPrompt":"What size identity matrix is required here?","teacherQuestion":{"correctValue":"b","explanation":"A is a 2 × 2 matrix, so I must have the same dimensions.","options":[{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}],"prompt":"What size identity matrix is required here?"},"title":"Classify the system","why":"This converts a matrix question into a polynomial equation."},{"content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"},{"latex":"\\lambda^2-4\\lambda+3=0","type":"equation","visualText":"λ² − 4λ + 3 = 0"}],"explanation":"The determinant is (2 minus lambda) squared minus one.","id":"determinant","narration":"Subtract lambda on the diagonal, then compute the determinant.","teacherPrompt":"Why is the off-diagonal product equal to one?","teacherQuestion":{"correctValue":"a","explanation":"The off-diagonal entries are both 1, so their product is 1.","options":[{"label":"Because 1 × 1 = 1","value":"a"},{"label":"Because 2 − λ = 1","value":"b"},{"label":"Because det(A) = 1","value":"c"},{"label":"Because λ is always 1","value":"d"}],"prompt":"Why is the off-diagonal product equal to one?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A minus lambda I is singular."},{"content":[{"label":"Eigenvalues","latex":"(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3","type":"equation","visualText":"(λ − 1)(λ − 3) = 0, so λ = 1 or 3"},{"text":"Both values make det(A − λI) equal zero.","tone":"success","type":"note"}],"explanation":"The characteristic polynomial factors into lambda minus one times lambda minus three.","id":"solve","narration":"Factor the polynomial and verify each value.","teacherPrompt":"Which eigenvalue corresponds to [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to [1, 1]?"},"title":"Solve and verify","why":"Substitution verifies both determinant values are zero."}],"title":"Find the eigenvalues of a 2 × 2 matrix"}));
    set_blackboardTitle(structuredClone("Find the eigenvalues of a 2 × 2 matrix"));
    set_blackboardProblemLabel(structuredClone("Representative problem · Linear algebra"));
    set_blackboardProblemStatement(structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]]."));
    set_blackboardLearningGoal(structuredClone("Form the characteristic equation, solve it and verify the eigenvalues."));
    set_blackboardSteps(structuredClone([{"content":[{"label":"Given","latex":"A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}","type":"equation","visualText":"A = [[2, 1], [1, 2]]"},{"term":"Eigenvalue","text":"A scalar λ for which Av = λv for some non-zero vector v.","type":"definition"}],"explanation":"For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.","id":"classify","narration":"First identify the matrix and the required eigenvalue equation.","teacherPrompt":"What size identity matrix is required here?","teacherQuestion":{"correctValue":"b","explanation":"A is a 2 × 2 matrix, so I must have the same dimensions.","options":[{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}],"prompt":"What size identity matrix is required here?"},"title":"Classify the system","why":"This converts a matrix question into a polynomial equation."},{"content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"},{"latex":"\\lambda^2-4\\lambda+3=0","type":"equation","visualText":"λ² − 4λ + 3 = 0"}],"explanation":"The determinant is (2 minus lambda) squared minus one.","id":"determinant","narration":"Subtract lambda on the diagonal, then compute the determinant.","teacherPrompt":"Why is the off-diagonal product equal to one?","teacherQuestion":{"correctValue":"a","explanation":"The off-diagonal entries are both 1, so their product is 1.","options":[{"label":"Because 1 × 1 = 1","value":"a"},{"label":"Because 2 − λ = 1","value":"b"},{"label":"Because det(A) = 1","value":"c"},{"label":"Because λ is always 1","value":"d"}],"prompt":"Why is the off-diagonal product equal to one?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A minus lambda I is singular."},{"content":[{"label":"Eigenvalues","latex":"(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3","type":"equation","visualText":"(λ − 1)(λ − 3) = 0, so λ = 1 or 3"},{"text":"Both values make det(A − λI) equal zero.","tone":"success","type":"note"}],"explanation":"The characteristic polynomial factors into lambda minus one times lambda minus three.","id":"solve","narration":"Factor the polynomial and verify each value.","teacherPrompt":"Which eigenvalue corresponds to [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to [1, 1]?"},"title":"Solve and verify","why":"Substitution verifies both determinant values are zero."}]));
    set_canUseStudio(structuredClone(false));
    set_resolvedStrategy(structuredClone({"exampleProblem":"Find the eigenvalues of A = [[2, 1], [1, 2]].","explanationDepth":"detailed","forbiddenShortcuts":["Do not skip the characteristic equation.","Do not state roots without verification."],"preferredMethod":"Characteristic-polynomial method","requiredSteps":["Classify the problem and state the goal.","Name the governing theorem or definition before using it.","Show the determinant or algebraic expansion.","Solve symbolically before substituting numerical conclusions.","Verify the final result."],"scopeType":"topic","teachingNotes":["Prefer a direct 2×2 method when it is clearer than row reduction."],"verificationRules":["Substitute each result into the defining equation.","State why the verification is sufficient."]}));
    void _runLifecycle("professor_scenario_inputsrefreshProfessorScenario", "takeLatest", (signal) => refreshProfessorScenario({ signal }), 'Module input lifecycle failed:');
  }, [accessProfile, userRole, authenticated, contextDraft, contextVersionNumber, contextVersionKey, locale, returnPath, verificationStatus, syllabusText]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="root" className="block rs-studio">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="inner" className="flex flex-col rs-studio-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="head" className="flex flex-wrap rs-studio-head">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="head_copy" className="flex flex-col rs-head-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="badge" label={((_bindingValue) => _bindingValue === undefined ? "Verification pending" : _bindingValue)(accessBadgeLabel)} ariaLabel="Professor verification status" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className="rs-title" content={((_bindingValue) => _bindingValue === undefined ? "Professor context studio" : _bindingValue)(_scope?.i18n?.title)} as="h2" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subtitle" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Import a semester and steer representative solutions." : _bindingValue)(_scope?.i18n?.subtitle)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(showAccessGate) && (<>      <RudraCoreAlert id="verification" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="verification_icon" className="rs-verification-icon" as="span" content="!" />
</>)}
</>} title={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="verification_title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "Professor approval required" : _bindingValue)(accessGateTitle)} />
</>)}
</>} variant="warning" appearance="soft" live="polite">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="verification_message" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Sign in with an approved professor account to use this studio." : _bindingValue)(accessGateMessage)} />
</>)}
</RudraCoreAlert>
</>)}
      {isVisibleValue(canUseStudio) && (<>      <RudraLayoutBox id="grid" className="grid rs-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="left" className="rs-panel" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="syllabus_catalog" className="block rs-syllabus-catalog">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="syllabus_catalog_title" as="h4" content="Your saved syllabi" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormSelect id="saved_syllabus_select" name="savedSyllabus" size="md" label="Continue with a saved syllabus" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(selectedSyllabusId)} radius="md" options={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(savedSyllabusOptions)} placeholder="Select a syllabus" onChangeValue={(...eventArgs) => _callAction("selectSavedSyllabus", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="refresh_syllabi" onAction={(...eventArgs) => _callAction("loadProfessorSyllabi", {}, eventArgs)} loadingText="Loading syllabi…" label="Refresh syllabi" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isLoadingSyllabi)} variant="ghost" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="save_syllabus_draft" onAction={(...eventArgs) => _callAction("saveProfessorSyllabus", {}, eventArgs)} loadingText="Saving syllabus…" label="Save current syllabus" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSavingSyllabus)} variant="outline" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="publish_syllabus_students" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSavingSyllabus)} variant="primary" onAction={(...eventArgs) => _callAction("saveProfessorSyllabus", {}, eventArgs)} loadingText="Publishing syllabus…" label="Publish current syllabus for students" theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="syllabus_catalog_status" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select a saved syllabus or save this draft." : _bindingValue)(syllabusStatus)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraLayoutBox id="syllabus_metadata" className="block rs-syllabus-metadata">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormInput id="syllabus_title_input" name="syllabusTitle" size="md" label="Syllabus title" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(syllabusTitle)} required={true} placeholder="Engineering Mathematics I" onChangeValue={(...eventArgs) => _callAction("setSyllabusTitle", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormTextarea id="syllabus_description_input" name="syllabusDescription" rows={3} label="Description" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(syllabusDescription)} placeholder="What students will learn" onChangeValue={(...eventArgs) => _callAction("setSyllabusDescription", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(isSyllabusSetupCollapsed) && (<>      <RudraCoreButton id="edit_syllabus_setup" label="Edit syllabus / Regenerate" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("expandSyllabusSetup", {}, eventArgs)} />
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraCoreTypography id="left_title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Semester syllabus" : _bindingValue)(_scope?.i18n?.import)} />
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraFormTextarea id="syllabus" label="Paste one section or a complete semester" value={((_bindingValue) => _bindingValue === undefined ? "Semester 1 · Linear Algebra\nUnit 1: Matrices and systems\nUnit 2: Vector spaces\nUnit 3: Eigenvalues and diagonalisation" : _bindingValue)(syllabusDraftText)} helperText="AI proposes programme → semester → subject → unit → topic. You approve before anything is saved." onChangeValue={(...eventArgs) => _callAction("setSyllabusText", {}, eventArgs)} name="syllabus" rows={10} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="structure_status" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Review the proposed hierarchy, add problems, then set it as context." : _bindingValue)(structureStatus)} />
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraLayoutBox id="syllabus_actions" className="flex flex-wrap rs-syllabus-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="structure" loadingText="Generating hierarchy…" label="Propose structure with AI" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isGeneratingStructure)} variant="primary" onAction={(...eventArgs) => _callAction("requestStructure", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="collapse_syllabus_setup" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("collapseSyllabusSetup", {}, eventArgs)} label="Hide setup" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreAlert id="rules" appearance="outlined" live="off" title="Reusable context draft" variant="info" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="final_hierarchy_title" as="h3" content="Final hierarchy" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsTreeView id="tree" className="w-full rs-tree-view" items={((_bindingValue) => _bindingValue === undefined ? [{ "children": [{ "children": [{ "children": [{ "children": [{ "children": [], "data": { "problems": ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], "title": "Matrix operations", "type": "topic" }, "id": "matrix-operations", "label": "Topic · Matrix operations" }, { "children": [], "data": { "problems": ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], "title": "Eigenvalues and diagonalisation", "type": "topic" }, "id": "eigenvalues", "label": "Topic · Eigenvalues and diagonalisation" }], "data": { "problems": [], "title": "Unit 1 · Matrices and systems", "type": "unit" }, "id": "matrices", "label": "Unit · Unit 1 · Matrices and systems" }], "data": { "problems": [], "title": "Engineering Mathematics I", "type": "subject" }, "id": "engineering-mathematics-i", "label": "Subject · Engineering Mathematics I" }], "data": { "problems": [], "title": "Semester 1", "type": "semester" }, "id": "semester-1", "label": "Semester · Semester 1" }], "data": { "problems": [], "title": "B.E. Mathematics", "type": "programme" }, "id": "engineering-mathematics", "label": "Programme · B.E. Mathematics" }] : _bindingValue)(hierarchyItems)} indent={22} showLines={true} selectedIds={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedHierarchyIds)} defaultExpandAll={true} expandOnItemClick={true} onItemClick={(...eventArgs) => _callAction("selectHierarchyNode", {}, eventArgs)} selectionMode="single" showDefaultIcons={true}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      <RudraCoreTypography id="hierarchy_item_label" className="rs-tree-label-text" content={((_bindingValue) => _bindingValue === undefined ? "Untitled item" : _bindingValue)(_scope?.item?.label)} as="span" />
</>); })(); }}</RudraWidgetsTreeView>
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraCoreTypography id="problems_title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "Selected topic problems" : _bindingValue)(selectedTopicHeading)} />
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraWidgetsTreeView id="problems_text" className="rs-problem-list" items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedTopicProblemItems)} showLines={false} selectedIds={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedProblemIds)} selectionMode="single" showDefaultIcons={true} expandOnItemClick={true} indent={20} emptyText="No problems yet. Use Add problems to create examples." onItemClick={(...eventArgs) => _callAction("selectProblem", {}, eventArgs)} defaultExpandAll={true}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      <RudraCoreTypography id="problem_item_label" className="rs-tree-label-text" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Untitled item" : _bindingValue)(_scope?.item?.label)} />
</>); })(); }}</RudraWidgetsTreeView>
</>)}
      {isVisibleValue(showNewProblemForm) && (<>      <RudraLayoutBox id="new_problem_form" className="block rs-new-problem-form">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="new_problem_title" as="h4" content="Add a context-scoped problem" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormTextarea id="new_problem_input" autoResize={true} placeholder="Enter a new problem for the selected topic" onChangeValue={(...eventArgs) => _callAction("setNewProblemText", {}, eventArgs)} name="newProblem" rows={5} label="Problem statement" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(newProblemText)} required={true} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormSelect id="new_problem_mode" label="Solution style" value={((_bindingValue) => _bindingValue === undefined ? "detailed" : _bindingValue)(newProblemSolutionMode)} radius="md" options={[{"label":"Detailed steps","value":"detailed"},{"label":"Quick solution","value":"quick"}]} onChangeValue={(...eventArgs) => _callAction("setNewProblemSolutionMode", {}, eventArgs)} name="solutionMode" size="md" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="new_problem_actions" className="flex flex-wrap rs-new-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="save_new_problem" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isResolvingProblem)} variant="primary" onAction={(...eventArgs) => _callAction("submitNewProblem", {}, eventArgs)} loadingText="Checking saved solutions…" label="Find or generate solution" theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="cancel_new_problem" onAction={(...eventArgs) => _callAction("closeNewProblemForm", {}, eventArgs)} label="Cancel" theme="auto" variant="ghost" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(hasProblemSolution) && (<>      <RudraLayoutBox id="problem_solution_panel" className="block rs-problem-solution">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_solution_status" className="rs-solution-source" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(problemResolutionStatus)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_solution_text" className="rs-problem-solution-text" as="div" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(problemSolutionText)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraLayoutBox id="hierarchy_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="add_problems" label="Add new problem" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("openNewProblemForm", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="right" className="rs-panel" theme="auto" as="section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="right_title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Steer a representative solution" : _bindingValue)(_scope?.i18n?.board)} />
</>)}
      {isVisibleValue(isResolvingProblem) && (<>      <RudraLayoutBox id="board_loading" className="flex rs-board-loading">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="board_loading_indicator" className="rs-loading-orb" as="span" content="" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="board_loading_text" as="p" content="Loading the saved solution or generating a new lesson…" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <ChalkmindMathBlackboardLesson id="board" speedLabel="Normal" learningGoal={((_bindingValue) => _bindingValue === undefined ? "Form the characteristic equation, solve it and verify the eigenvalues." : _bindingValue)(blackboardLearningGoal)} problemLabel={((_bindingValue) => _bindingValue === undefined ? "Representative problem · Linear algebra" : _bindingValue)(blackboardProblemLabel)} steps={((_bindingValue) => _bindingValue === undefined ? [{ "content": [{ "label": "Given", "latex": "A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}", "type": "equation", "visualText": "A = [[2, 1], [1, 2]]" }, { "term": "Eigenvalue", "text": "A scalar λ for which Av = λv for some non-zero vector v.", "type": "definition" }], "explanation": "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", "id": "classify", "narration": "First identify the matrix and the required eigenvalue equation.", "teacherPrompt": "What size identity matrix is required here?", "teacherQuestion": { "correctValue": "b", "explanation": "A is a 2 × 2 matrix, so I must have the same dimensions.", "options": [{ "label": "1 × 1", "value": "a" }, { "label": "2 × 2", "value": "b" }, { "label": "2 × 3", "value": "c" }, { "label": "3 × 3", "value": "d" }], "prompt": "What size identity matrix is required here?" }, "title": "Classify the system", "why": "This converts a matrix question into a polynomial equation." }, { "content": [{ "label": "Characteristic determinant", "latex": "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", "type": "equation", "visualText": "det(A − λI) = (2 − λ)² − 1 = 0" }, { "latex": "\\lambda^2-4\\lambda+3=0", "type": "equation", "visualText": "λ² − 4λ + 3 = 0" }], "explanation": "The determinant is (2 minus lambda) squared minus one.", "id": "determinant", "narration": "Subtract lambda on the diagonal, then compute the determinant.", "teacherPrompt": "Why is the off-diagonal product equal to one?", "teacherQuestion": { "correctValue": "a", "explanation": "The off-diagonal entries are both 1, so their product is 1.", "options": [{ "label": "Because 1 × 1 = 1", "value": "a" }, { "label": "Because 2 − λ = 1", "value": "b" }, { "label": "Because det(A) = 1", "value": "c" }, { "label": "Because λ is always 1", "value": "d" }], "prompt": "Why is the off-diagonal product equal to one?" }, "title": "Form the characteristic equation", "why": "A non-zero eigenvector exists only when A minus lambda I is singular." }, { "content": [{ "label": "Eigenvalues", "latex": "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", "type": "equation", "visualText": "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { "text": "Both values make det(A − λI) equal zero.", "tone": "success", "type": "note" }], "explanation": "The characteristic polynomial factors into lambda minus one times lambda minus three.", "id": "solve", "narration": "Factor the polynomial and verify each value.", "teacherPrompt": "Which eigenvalue corresponds to [1, 1]?", "teacherQuestion": { "correctValue": "d", "explanation": "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", "options": [{ "label": "−1", "value": "a" }, { "label": 0, "value": "b" }, { "label": 1, "value": "c" }, { "label": 3, "value": "d" }], "prompt": "Which eigenvalue corresponds to [1, 1]?" }, "title": "Solve and verify", "why": "Substitution verifies both determinant values are zero." }] : _bindingValue)(blackboardSteps)} playing={false} activeStep={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(activeStep)} lessonKind={((_bindingValue) => _bindingValue === undefined ? "worked-example" : _bindingValue)(blackboardLesson?.lessonKind)} onStepSelect={(...eventArgs) => _callAction("selectStep", {}, eventArgs)} reducedMotion={false} boardOptions={{"animateCurrentStepOnly":true,"clearFutureSteps":false,"preserveRevealedSteps":true,"writingEffect":true}} showStepPopup={true} stepDurationMs={5500} popupInitiallyOpen={true} title={((_bindingValue) => _bindingValue === undefined ? "Find the eigenvalues of a 2 × 2 matrix" : _bindingValue)(blackboardTitle)} autoAdvance={false} editOperations={[]} captionsEnabled={true} problemStatement={((_bindingValue) => _bindingValue === undefined ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : _bindingValue)(blackboardProblemStatement)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="teacher_question_panel" className="block rs-teacher-question">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="teacher_question_title" className="rs-teacher-question-title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "What size identity matrix is required here?" : _bindingValue)(teacherQuestionPrompt)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormRadioGroup id="teacher_question_choices" colorScheme="emerald" onChangeValue={(...eventArgs) => _callAction("selectTeacherAnswer", {}, eventArgs)} name="teacherAnswer" size="md" label="Choose one answer" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(selectedTeacherAnswer)} layout="vertical" options={((_bindingValue) => _bindingValue === undefined ? [{ "label": "1 × 1", "value": "a" }, { "label": "2 × 2", "value": "b" }, { "label": "2 × 3", "value": "c" }, { "label": "3 × 3", "value": "d" }] : _bindingValue)(teacherQuestionOptions)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="teacher_question_feedback" className="rs-teacher-question-feedback" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select one answer." : _bindingValue)(teacherAnswerFeedback)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="steer_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="keep" label="Keep" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("editStep", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="remove" label="Remove" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("editStep", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="annotate" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("editStep", {}, eventArgs)} label="Add teaching note" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraLayoutBox id="strategy_panel" className="block rs-strategy-panel">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="strategy_title" content="Teaching strategy for this Topic" as="h3" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="strategy_status" className="rs-strategy-status" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(strategyStatus)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="strategy_text" className="rs-strategy-text" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(strategyDraftText)} as="div" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="set_context" loadingText="Saving strategy…" label="Approve strategy as context" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSavingStrategy)} variant="primary" onAction={(...eventArgs) => _callAction("setHierarchyContext", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="publish_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="publish" label="Publish immutable context version" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("publishContext", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="share" label="Create student share link" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("shareLesson", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
    </div>
  );
}
