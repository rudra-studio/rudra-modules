import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { Card as RudraCoreCard, Badge as RudraCoreBadge, Button as RudraCoreButton, Typography as RudraCoreTypography, Alert as RudraCoreAlert } from '@rudra-studio/rudra-core';
import { Textarea as RudraFormTextarea, Input as RudraFormInput, Select as RudraFormSelect, RadioGroup as RudraFormRadioGroup } from '@rudra-studio/rudra-form';
import { BlackboardLesson as ChalkmindMathBlackboardLesson } from '@rudra-studio/chalkmind-math';
import { TreeView as RudraWidgetsTreeView } from '@rudra-studio/rudra-widgets';

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
  const $route = props.$route ?? props.route ?? props.data?.$route ?? props.data?.route ?? props.runtime?.data?.$route ?? props.runtime?.route ?? serverData?.$route ?? serverData?.route ?? null;
  const $params = props.$params ?? props.routeParams ?? props.params ?? props.data?.$params ?? props.data?.routeParams ?? props.data?.params ?? props.runtime?.data?.$params ?? props.runtime?.route?.params ?? props.runtime?.routeParams ?? props.runtime?.params ?? serverData?.$params ?? serverData?.routeParams ?? serverData?.params ?? {};
  const $query = props.$query ?? props.queryParams ?? props.query ?? props.data?.$query ?? props.data?.queryParams ?? props.data?.query ?? props.runtime?.data?.$query ?? props.runtime?.route?.query ?? props.runtime?.queryParams ?? props.runtime?.query ?? serverData?.$query ?? serverData?.queryParams ?? serverData?.query ?? {};
  const $auth = props.$auth ?? props.auth ?? props.data?.$auth ?? props.data?.auth ?? props.runtime?.data?.$auth ?? props.runtime?.authInfo ?? props.runtime?.auth ?? serverData?.$auth ?? serverData?.auth ?? null;
  const $config = props.$config ?? props.config ?? props.data?.$config ?? props.data?.config ?? props.runtime?.data?.$config ?? props.runtime?.config ?? serverData?.$config ?? serverData?.config ?? {};
  const $env = props.$env ?? props.env ?? props.data?.$env ?? props.data?.env ?? props.runtime?.data?.$env ?? props.runtime?.env ?? serverData?.$env ?? serverData?.env ?? {};
  const $locale = props.$locale ?? props.locale ?? props.data?.$locale ?? props.data?.locale ?? props.runtime?.data?.$locale ?? props.runtime?.locale ?? serverData?.$locale ?? serverData?.locale ?? 'en';
  const $translations = props.$translations ?? props.translations ?? props.data?.$translations ?? props.data?.translations ?? props.runtime?.data?.$translations ?? props.runtime?.translations ?? serverData?.$translations ?? serverData?.translations ?? {};
  const $i18n = props.$i18n ?? props.i18n ?? props.data?.$i18n ?? props.data?.i18n ?? props.runtime?.data?.$i18n ?? props.runtime?.i18n ?? serverData?.$i18n ?? serverData?.i18n ?? { locale: $locale, translations: $translations };
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

  const contextVersionKey = props.contextVersionKey !== undefined ? props.contextVersionKey : (props.data?.contextVersionKey !== undefined ? props.data.contextVersionKey : "");
  const accessProfile = props.accessProfile !== undefined ? props.accessProfile : (props.data?.accessProfile !== undefined ? props.data.accessProfile : {});
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const contextVersionNumber = props.contextVersionNumber !== undefined ? props.contextVersionNumber : (props.data?.contextVersionNumber !== undefined ? props.data.contextVersionNumber : 1);
  const returnPath = props.returnPath !== undefined ? props.returnPath : (props.data?.returnPath !== undefined ? props.data.returnPath : "/professor/context");
  const syllabusText = props.syllabusText !== undefined ? props.syllabusText : (props.data?.syllabusText !== undefined ? props.data.syllabusText : undefined);
  const userRole = props.userRole !== undefined ? props.userRole : (props.data?.userRole !== undefined ? props.data.userRole : "");
  const verificationStatus = props.verificationStatus !== undefined ? props.verificationStatus : (props.data?.verificationStatus !== undefined ? props.data.verificationStatus : "pending");
  const contextDraft = props.contextDraft !== undefined ? props.contextDraft : (props.data?.contextDraft !== undefined ? props.data.contextDraft : {});
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const inputs = { "contextVersionKey": contextVersionKey, "accessProfile": accessProfile, "locale": locale, "contextVersionNumber": contextVersionNumber, "returnPath": returnPath, "syllabusText": syllabusText, "userRole": userRole, "verificationStatus": verificationStatus, "contextDraft": contextDraft, "authenticated": authenticated };
  const [syllabusStatus, set_syllabusStatus] = useState(() => structuredClone("Select a saved syllabus or save this draft."));
  const [selectedTopicId, set_selectedTopicId] = useState(() => structuredClone(""));
  const [isLoadingSyllabi, set_isLoadingSyllabi] = useState(() => structuredClone(false));
  const [blackboardLearningGoal, set_blackboardLearningGoal] = useState(() => structuredClone("Form the characteristic equation, solve it and verify the eigenvalues."));
  const [resolvedStrategyId, set_resolvedStrategyId] = useState(() => structuredClone(""));
  const [selectedProblemIds, set_selectedProblemIds] = useState(() => structuredClone([]));
  const [syllabusDraftText, set_syllabusDraftText] = useState(() => structuredClone("Semester 1 · Linear Algebra\nUnit 1: Matrices and systems\nUnit 2: Vector spaces\nUnit 3: Eigenvalues and diagonalisation"));
  const [strategyDraft, set_strategyDraft] = useState(() => structuredClone({"exampleProblem":"Find the eigenvalues of A = [[2, 1], [1, 2]].","explanationDepth":"detailed","forbiddenShortcuts":["Do not skip the characteristic equation.","Do not state roots without verification."],"preferredMethod":"Characteristic-polynomial method","requiredSteps":["Classify the problem and state the goal.","Name the governing theorem or definition before using it.","Show the determinant or algebraic expansion.","Solve symbolically before substituting numerical conclusions.","Verify the final result."],"scopeType":"topic","teachingNotes":["Prefer a direct 2×2 method when it is clearer than row reduction."],"verificationRules":["Substitute each result into the defining equation.","State why the verification is sufficient."]}));
  const [selectedTopicPath, set_selectedTopicPath] = useState(() => structuredClone(""));
  const [syllabusTitle, set_syllabusTitle] = useState(() => structuredClone("Engineering Mathematics I"));
  const [studioControls, set_studioControls] = useState(() => structuredClone({"busy":false,"lessonEmpty":true,"previewDisabled":true,"unavailable":true,"versionDisabled":true}));
  const [newProblemText, set_newProblemText] = useState(() => structuredClone(""));
  const [selectedHierarchyIds, set_selectedHierarchyIds] = useState(() => structuredClone([]));
  const [savedSyllabusVersion, set_savedSyllabusVersion] = useState(() => structuredClone(0));
  const [selectedTeacherAnswer, set_selectedTeacherAnswer] = useState(() => structuredClone(""));
  const [suggestedProblems, set_suggestedProblems] = useState(() => structuredClone(["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."]));
  const [blackboardTitle, set_blackboardTitle] = useState(() => structuredClone("Find the eigenvalues of a 2 × 2 matrix"));
  const [strategyStatus, set_strategyStatus] = useState(() => structuredClone("Review the example strategy, then approve it for the selected Topic."));
  const [contentPreviewPacket, set_contentPreviewPacket] = useState(() => structuredClone({}));
  const [hierarchyItems, set_hierarchyItems] = useState(() => structuredClone([{"children":[{"children":[{"children":[{"children":[{"children":[],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices/matrix-operations","problems":["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether three supplied vectors are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."],"title":"Matrix operations","type":"topic"},"id":"matrix-operations","label":"Topic · Matrix operations"},{"children":[],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices/eigenvalues","problems":["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].","Determine whether three supplied vectors are linearly independent.","Diagonalise A = [[4, 1], [2, 3]] and verify the result."],"title":"Eigenvalues and diagonalisation","type":"topic"},"id":"eigenvalues","label":"Topic · Eigenvalues and diagonalisation"}],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i/matrices","problems":[],"title":"Unit 1 · Matrices and systems","type":"unit"},"id":"matrices","label":"Unit · Unit 1 · Matrices and systems"}],"data":{"path":"engineering-mathematics/semester-1/engineering-mathematics-i","problems":[],"title":"Engineering Mathematics I","type":"subject"},"id":"engineering-mathematics-i","label":"Subject · Engineering Mathematics I"}],"data":{"path":"engineering-mathematics/semester-1","problems":[],"title":"Semester 1","type":"semester"},"id":"semester-1","label":"Semester · Semester 1"}],"data":{"path":"engineering-mathematics","problems":[],"title":"B.E. Mathematics","type":"programme"},"id":"engineering-mathematics","label":"Programme · B.E. Mathematics"}]));
  const [hasResolvedStrategy, set_hasResolvedStrategy] = useState(() => structuredClone(true));
  const [finalHierarchyText, set_finalHierarchyText] = useState(() => structuredClone("Programme · B.E. Mathematics\n  Semester · Semester 1\n    Subject · Engineering Mathematics I\n      Unit · Unit 1 · Matrices and systems\n        Topic · Matrix operations\n        Topic · Eigenvalues and diagonalisation"));
  const [teacherQuestionOptions, set_teacherQuestionOptions] = useState(() => structuredClone([{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}]));
  const [showAccessGate, set_showAccessGate] = useState(() => structuredClone(true));
  const [selectedProblemText, set_selectedProblemText] = useState(() => structuredClone(""));
  const [isSavingStrategy, set_isSavingStrategy] = useState(() => structuredClone(false));
  const [savedSyllabusKey, set_savedSyllabusKey] = useState(() => structuredClone(""));
  const [savedProblemId, set_savedProblemId] = useState(() => structuredClone(""));
  const [selectedSyllabusId, set_selectedSyllabusId] = useState(() => structuredClone(""));
  const [selectedTopicProblemsText, set_selectedTopicProblemsText] = useState(() => structuredClone(""));
  const [savedContextKey, set_savedContextKey] = useState(() => structuredClone(""));
  const [selectedTopicTitle, set_selectedTopicTitle] = useState(() => structuredClone(""));
  const [accessGateTitle, set_accessGateTitle] = useState(() => structuredClone("Professor approval required"));
  const [selectedTopicProblems, set_selectedTopicProblems] = useState(() => structuredClone([]));
  const [isOpeningSyllabus, set_isOpeningSyllabus] = useState(() => structuredClone(false));
  const [finalHierarchy, set_finalHierarchy] = useState(() => structuredClone({"children":[{"children":[{"children":[{"children":[{"children":[],"id":"matrix-operations","title":"Matrix operations","type":"topic"},{"children":[],"id":"eigenvalues","title":"Eigenvalues and diagonalisation","type":"topic"}],"id":"matrices","title":"Unit 1 · Matrices and systems","type":"unit"}],"id":"engineering-mathematics-i","title":"Engineering Mathematics I","type":"subject"}],"id":"semester-1","title":"Semester 1","type":"semester"}],"id":"engineering-mathematics","title":"B.E. Mathematics","type":"programme"}));
  const [blackboardProblemStatement, set_blackboardProblemStatement] = useState(() => structuredClone("Find the eigenvalues of A = [[2, 1], [1, 2]]."));
  const [teacherAnswerFeedback, set_teacherAnswerFeedback] = useState(() => structuredClone("Select one answer."));
  const [selectedProblemStatement, set_selectedProblemStatement] = useState(() => structuredClone(""));
  const [teacherQuestionExplanation, set_teacherQuestionExplanation] = useState(() => structuredClone("A is a 2 × 2 matrix, so I must have the same dimensions."));
  const [blackboardProblemLabel, set_blackboardProblemLabel] = useState(() => structuredClone("Representative problem · Linear algebra"));
  const [isSyllabusSetupCollapsed, set_isSyllabusSetupCollapsed] = useState(() => structuredClone(false));
  const [showNewProblemForm, set_showNewProblemForm] = useState(() => structuredClone(false));
  const [selectedTopicProblemItems, set_selectedTopicProblemItems] = useState(() => structuredClone([]));
  const [selectedTopicHeading, set_selectedTopicHeading] = useState(() => structuredClone("Selected topic problems"));
  const [savedSyllabusOptions, set_savedSyllabusOptions] = useState(() => structuredClone([]));
  const [syllabusDescription, set_syllabusDescription] = useState(() => structuredClone(""));
  const [strategyDraftText, set_strategyDraftText] = useState(() => structuredClone("Preferred method\nCharacteristic-polynomial method\n\nRequired steps\n1. Classify the problem and state the goal.\n2. Name the governing theorem or definition before using it.\n3. Show the determinant or algebraic expansion.\n4. Solve symbolically before substituting numerical conclusions.\n5. Verify the final result.\n\nAvoid\n• Do not skip the characteristic equation.\n• Do not state roots without verification.\n\nVerification\n• Substitute each result into the defining equation.\n• State why the verification is sufficient.\n\nTeaching notes\n• Prefer a direct 2×2 method when it is clearer than row reduction."));
  const [isSavingSyllabus, set_isSavingSyllabus] = useState(() => structuredClone(false));
  const [problemSolution, set_problemSolution] = useState(() => structuredClone({}));
  const [structureStatus, set_structureStatus] = useState(() => structuredClone("Review the proposed hierarchy, add problems, then set it as context."));
  const [accessBadgeLabel, set_accessBadgeLabel] = useState(() => structuredClone("Verification pending"));
  const [activeStep, set_activeStep] = useState(() => structuredClone(0));
  const [isGeneratingStructure, set_isGeneratingStructure] = useState(() => structuredClone(false));
  const [showSyllabusSetup, set_showSyllabusSetup] = useState(() => structuredClone(true));
  const [teacherQuestionPrompt, set_teacherQuestionPrompt] = useState(() => structuredClone("What size identity matrix is required here?"));
  const [hasSelectedTopic, set_hasSelectedTopic] = useState(() => structuredClone(false));
  const [blackboardSteps, set_blackboardSteps] = useState(() => structuredClone([{"content":[{"label":"Given","latex":"A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}","type":"equation","visualText":"A = [[2, 1], [1, 2]]"},{"term":"Eigenvalue","text":"A scalar λ for which Av = λv for some non-zero vector v.","type":"definition"}],"explanation":"For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.","id":"classify","narration":"First identify the matrix and the required eigenvalue equation.","teacherPrompt":"What size identity matrix is required here?","teacherQuestion":{"correctValue":"b","explanation":"A is a 2 × 2 matrix, so I must have the same dimensions.","options":[{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}],"prompt":"What size identity matrix is required here?"},"title":"Classify the system","why":"This converts a matrix question into a polynomial equation."},{"content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"},{"latex":"\\lambda^2-4\\lambda+3=0","type":"equation","visualText":"λ² − 4λ + 3 = 0"}],"explanation":"The determinant is (2 minus lambda) squared minus one.","id":"determinant","narration":"Subtract lambda on the diagonal, then compute the determinant.","teacherPrompt":"Why is the off-diagonal product equal to one?","teacherQuestion":{"correctValue":"a","explanation":"The off-diagonal entries are both 1, so their product is 1.","options":[{"label":"Because 1 × 1 = 1","value":"a"},{"label":"Because 2 − λ = 1","value":"b"},{"label":"Because det(A) = 1","value":"c"},{"label":"Because λ is always 1","value":"d"}],"prompt":"Why is the off-diagonal product equal to one?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A minus lambda I is singular."},{"content":[{"label":"Eigenvalues","latex":"(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3","type":"equation","visualText":"(λ − 1)(λ − 3) = 0, so λ = 1 or 3"},{"text":"Both values make det(A − λI) equal zero.","tone":"success","type":"note"}],"explanation":"The characteristic polynomial factors into lambda minus one times lambda minus three.","id":"solve","narration":"Factor the polynomial and verify each value.","teacherPrompt":"Which eigenvalue corresponds to [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to [1, 1]?"},"title":"Solve and verify","why":"Substitution verifies both determinant values are zero."}]));
  const [resolvedStrategyVersion, set_resolvedStrategyVersion] = useState(() => structuredClone(0));
  const [newProblemSolutionMode, set_newProblemSolutionMode] = useState(() => structuredClone("detailed"));
  const [blackboardLesson, set_blackboardLesson] = useState(() => structuredClone({"learningGoal":"Form the characteristic equation, solve it and verify the eigenvalues.","lessonKind":"worked-example","problemLabel":"Representative problem · Linear algebra","problemStatement":"Find the eigenvalues of A = [[2, 1], [1, 2]].","steps":[{"content":[{"label":"Given","latex":"A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}","type":"equation","visualText":"A = [[2, 1], [1, 2]]"},{"term":"Eigenvalue","text":"A scalar λ for which Av = λv for some non-zero vector v.","type":"definition"}],"explanation":"For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.","id":"classify","narration":"First identify the matrix and the required eigenvalue equation.","teacherPrompt":"What size identity matrix is required here?","teacherQuestion":{"correctValue":"b","explanation":"A is a 2 × 2 matrix, so I must have the same dimensions.","options":[{"label":"1 × 1","value":"a"},{"label":"2 × 2","value":"b"},{"label":"2 × 3","value":"c"},{"label":"3 × 3","value":"d"}],"prompt":"What size identity matrix is required here?"},"title":"Classify the system","why":"This converts a matrix question into a polynomial equation."},{"content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"},{"latex":"\\lambda^2-4\\lambda+3=0","type":"equation","visualText":"λ² − 4λ + 3 = 0"}],"explanation":"The determinant is (2 minus lambda) squared minus one.","id":"determinant","narration":"Subtract lambda on the diagonal, then compute the determinant.","teacherPrompt":"Why is the off-diagonal product equal to one?","teacherQuestion":{"correctValue":"a","explanation":"The off-diagonal entries are both 1, so their product is 1.","options":[{"label":"Because 1 × 1 = 1","value":"a"},{"label":"Because 2 − λ = 1","value":"b"},{"label":"Because det(A) = 1","value":"c"},{"label":"Because λ is always 1","value":"d"}],"prompt":"Why is the off-diagonal product equal to one?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A minus lambda I is singular."},{"content":[{"label":"Eigenvalues","latex":"(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3","type":"equation","visualText":"(λ − 1)(λ − 3) = 0, so λ = 1 or 3"},{"text":"Both values make det(A − λI) equal zero.","tone":"success","type":"note"}],"explanation":"The characteristic polynomial factors into lambda minus one times lambda minus three.","id":"solve","narration":"Factor the polynomial and verify each value.","teacherPrompt":"Which eigenvalue corresponds to [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to [1, 1]?"},"title":"Solve and verify","why":"Substitution verifies both determinant values are zero."}],"title":"Find the eigenvalues of a 2 × 2 matrix"}));
  const [problemSolutionText, set_problemSolutionText] = useState(() => structuredClone(""));
  const [canUseStudio, set_canUseStudio] = useState(() => structuredClone(false));
  const [resolvedStrategy, set_resolvedStrategy] = useState(() => structuredClone({"exampleProblem":"Find the eigenvalues of A = [[2, 1], [1, 2]].","explanationDepth":"detailed","forbiddenShortcuts":["Do not skip the characteristic equation.","Do not state roots without verification."],"preferredMethod":"Characteristic-polynomial method","requiredSteps":["Classify the problem and state the goal.","Name the governing theorem or definition before using it.","Show the determinant or algebraic expansion.","Solve symbolically before substituting numerical conclusions.","Verify the final result."],"scopeType":"topic","teachingNotes":["Prefer a direct 2×2 method when it is clearer than row reduction."],"verificationRules":["Substitute each result into the defining equation.","State why the verification is sufficient."]}));
  const [problemResolutionStatus, set_problemResolutionStatus] = useState(() => structuredClone("Select a problem to load its saved solution."));
  const [accessGateMessage, set_accessGateMessage] = useState(() => structuredClone("Sign in with an approved professor account to use this studio."));
  const [hasProblemSolution, set_hasProblemSolution] = useState(() => structuredClone(false));
  const [teacherQuestionCorrectValue, set_teacherQuestionCorrectValue] = useState(() => structuredClone("b"));
  const [suggestedProblemsText, set_suggestedProblemsText] = useState(() => structuredClone("1. Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].\n2. Determine whether the vectors (1, 0, 1), (2, 1, 3), and (0, 1, 1) are linearly independent.\n3. Diagonalise A = [[4, 1], [2, 3]] and verify the result."));
  const [isResolvingProblem, set_isResolvingProblem] = useState(() => structuredClone(false));
  const state = { "syllabusStatus": syllabusStatus, "selectedTopicId": selectedTopicId, "isLoadingSyllabi": isLoadingSyllabi, "blackboardLearningGoal": blackboardLearningGoal, "resolvedStrategyId": resolvedStrategyId, "selectedProblemIds": selectedProblemIds, "syllabusDraftText": syllabusDraftText, "strategyDraft": strategyDraft, "selectedTopicPath": selectedTopicPath, "syllabusTitle": syllabusTitle, "studioControls": studioControls, "newProblemText": newProblemText, "selectedHierarchyIds": selectedHierarchyIds, "savedSyllabusVersion": savedSyllabusVersion, "selectedTeacherAnswer": selectedTeacherAnswer, "suggestedProblems": suggestedProblems, "blackboardTitle": blackboardTitle, "strategyStatus": strategyStatus, "contentPreviewPacket": contentPreviewPacket, "hierarchyItems": hierarchyItems, "hasResolvedStrategy": hasResolvedStrategy, "finalHierarchyText": finalHierarchyText, "teacherQuestionOptions": teacherQuestionOptions, "showAccessGate": showAccessGate, "selectedProblemText": selectedProblemText, "isSavingStrategy": isSavingStrategy, "savedSyllabusKey": savedSyllabusKey, "savedProblemId": savedProblemId, "selectedSyllabusId": selectedSyllabusId, "selectedTopicProblemsText": selectedTopicProblemsText, "savedContextKey": savedContextKey, "selectedTopicTitle": selectedTopicTitle, "accessGateTitle": accessGateTitle, "selectedTopicProblems": selectedTopicProblems, "isOpeningSyllabus": isOpeningSyllabus, "finalHierarchy": finalHierarchy, "blackboardProblemStatement": blackboardProblemStatement, "teacherAnswerFeedback": teacherAnswerFeedback, "selectedProblemStatement": selectedProblemStatement, "teacherQuestionExplanation": teacherQuestionExplanation, "blackboardProblemLabel": blackboardProblemLabel, "isSyllabusSetupCollapsed": isSyllabusSetupCollapsed, "showNewProblemForm": showNewProblemForm, "selectedTopicProblemItems": selectedTopicProblemItems, "selectedTopicHeading": selectedTopicHeading, "savedSyllabusOptions": savedSyllabusOptions, "syllabusDescription": syllabusDescription, "strategyDraftText": strategyDraftText, "isSavingSyllabus": isSavingSyllabus, "problemSolution": problemSolution, "structureStatus": structureStatus, "accessBadgeLabel": accessBadgeLabel, "activeStep": activeStep, "isGeneratingStructure": isGeneratingStructure, "showSyllabusSetup": showSyllabusSetup, "teacherQuestionPrompt": teacherQuestionPrompt, "hasSelectedTopic": hasSelectedTopic, "blackboardSteps": blackboardSteps, "resolvedStrategyVersion": resolvedStrategyVersion, "newProblemSolutionMode": newProblemSolutionMode, "blackboardLesson": blackboardLesson, "problemSolutionText": problemSolutionText, "canUseStudio": canUseStudio, "resolvedStrategy": resolvedStrategy, "problemResolutionStatus": problemResolutionStatus, "accessGateMessage": accessGateMessage, "hasProblemSolution": hasProblemSolution, "teacherQuestionCorrectValue": teacherQuestionCorrectValue, "suggestedProblemsText": suggestedProblemsText, "isResolvingProblem": isResolvingProblem };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "syllabusStatus": { const next = typeof value === 'function' ? value(state.syllabusStatus) : value; state.syllabusStatus = next; set_syllabusStatus(next); return next; }
      case "selectedTopicId": { const next = typeof value === 'function' ? value(state.selectedTopicId) : value; state.selectedTopicId = next; set_selectedTopicId(next); return next; }
      case "isLoadingSyllabi": { const next = typeof value === 'function' ? value(state.isLoadingSyllabi) : value; state.isLoadingSyllabi = next; set_isLoadingSyllabi(next); return next; }
      case "blackboardLearningGoal": { const next = typeof value === 'function' ? value(state.blackboardLearningGoal) : value; state.blackboardLearningGoal = next; set_blackboardLearningGoal(next); return next; }
      case "resolvedStrategyId": { const next = typeof value === 'function' ? value(state.resolvedStrategyId) : value; state.resolvedStrategyId = next; set_resolvedStrategyId(next); return next; }
      case "selectedProblemIds": { const next = typeof value === 'function' ? value(state.selectedProblemIds) : value; state.selectedProblemIds = next; set_selectedProblemIds(next); return next; }
      case "syllabusDraftText": { const next = typeof value === 'function' ? value(state.syllabusDraftText) : value; state.syllabusDraftText = next; set_syllabusDraftText(next); return next; }
      case "strategyDraft": { const next = typeof value === 'function' ? value(state.strategyDraft) : value; state.strategyDraft = next; set_strategyDraft(next); return next; }
      case "selectedTopicPath": { const next = typeof value === 'function' ? value(state.selectedTopicPath) : value; state.selectedTopicPath = next; set_selectedTopicPath(next); return next; }
      case "syllabusTitle": { const next = typeof value === 'function' ? value(state.syllabusTitle) : value; state.syllabusTitle = next; set_syllabusTitle(next); return next; }
      case "studioControls": { const next = typeof value === 'function' ? value(state.studioControls) : value; state.studioControls = next; set_studioControls(next); return next; }
      case "newProblemText": { const next = typeof value === 'function' ? value(state.newProblemText) : value; state.newProblemText = next; set_newProblemText(next); return next; }
      case "selectedHierarchyIds": { const next = typeof value === 'function' ? value(state.selectedHierarchyIds) : value; state.selectedHierarchyIds = next; set_selectedHierarchyIds(next); return next; }
      case "savedSyllabusVersion": { const next = typeof value === 'function' ? value(state.savedSyllabusVersion) : value; state.savedSyllabusVersion = next; set_savedSyllabusVersion(next); return next; }
      case "selectedTeacherAnswer": { const next = typeof value === 'function' ? value(state.selectedTeacherAnswer) : value; state.selectedTeacherAnswer = next; set_selectedTeacherAnswer(next); return next; }
      case "suggestedProblems": { const next = typeof value === 'function' ? value(state.suggestedProblems) : value; state.suggestedProblems = next; set_suggestedProblems(next); return next; }
      case "blackboardTitle": { const next = typeof value === 'function' ? value(state.blackboardTitle) : value; state.blackboardTitle = next; set_blackboardTitle(next); return next; }
      case "strategyStatus": { const next = typeof value === 'function' ? value(state.strategyStatus) : value; state.strategyStatus = next; set_strategyStatus(next); return next; }
      case "contentPreviewPacket": { const next = typeof value === 'function' ? value(state.contentPreviewPacket) : value; state.contentPreviewPacket = next; set_contentPreviewPacket(next); return next; }
      case "hierarchyItems": { const next = typeof value === 'function' ? value(state.hierarchyItems) : value; state.hierarchyItems = next; set_hierarchyItems(next); return next; }
      case "hasResolvedStrategy": { const next = typeof value === 'function' ? value(state.hasResolvedStrategy) : value; state.hasResolvedStrategy = next; set_hasResolvedStrategy(next); return next; }
      case "finalHierarchyText": { const next = typeof value === 'function' ? value(state.finalHierarchyText) : value; state.finalHierarchyText = next; set_finalHierarchyText(next); return next; }
      case "teacherQuestionOptions": { const next = typeof value === 'function' ? value(state.teacherQuestionOptions) : value; state.teacherQuestionOptions = next; set_teacherQuestionOptions(next); return next; }
      case "showAccessGate": { const next = typeof value === 'function' ? value(state.showAccessGate) : value; state.showAccessGate = next; set_showAccessGate(next); return next; }
      case "selectedProblemText": { const next = typeof value === 'function' ? value(state.selectedProblemText) : value; state.selectedProblemText = next; set_selectedProblemText(next); return next; }
      case "isSavingStrategy": { const next = typeof value === 'function' ? value(state.isSavingStrategy) : value; state.isSavingStrategy = next; set_isSavingStrategy(next); return next; }
      case "savedSyllabusKey": { const next = typeof value === 'function' ? value(state.savedSyllabusKey) : value; state.savedSyllabusKey = next; set_savedSyllabusKey(next); return next; }
      case "savedProblemId": { const next = typeof value === 'function' ? value(state.savedProblemId) : value; state.savedProblemId = next; set_savedProblemId(next); return next; }
      case "selectedSyllabusId": { const next = typeof value === 'function' ? value(state.selectedSyllabusId) : value; state.selectedSyllabusId = next; set_selectedSyllabusId(next); return next; }
      case "selectedTopicProblemsText": { const next = typeof value === 'function' ? value(state.selectedTopicProblemsText) : value; state.selectedTopicProblemsText = next; set_selectedTopicProblemsText(next); return next; }
      case "savedContextKey": { const next = typeof value === 'function' ? value(state.savedContextKey) : value; state.savedContextKey = next; set_savedContextKey(next); return next; }
      case "selectedTopicTitle": { const next = typeof value === 'function' ? value(state.selectedTopicTitle) : value; state.selectedTopicTitle = next; set_selectedTopicTitle(next); return next; }
      case "accessGateTitle": { const next = typeof value === 'function' ? value(state.accessGateTitle) : value; state.accessGateTitle = next; set_accessGateTitle(next); return next; }
      case "selectedTopicProblems": { const next = typeof value === 'function' ? value(state.selectedTopicProblems) : value; state.selectedTopicProblems = next; set_selectedTopicProblems(next); return next; }
      case "isOpeningSyllabus": { const next = typeof value === 'function' ? value(state.isOpeningSyllabus) : value; state.isOpeningSyllabus = next; set_isOpeningSyllabus(next); return next; }
      case "finalHierarchy": { const next = typeof value === 'function' ? value(state.finalHierarchy) : value; state.finalHierarchy = next; set_finalHierarchy(next); return next; }
      case "blackboardProblemStatement": { const next = typeof value === 'function' ? value(state.blackboardProblemStatement) : value; state.blackboardProblemStatement = next; set_blackboardProblemStatement(next); return next; }
      case "teacherAnswerFeedback": { const next = typeof value === 'function' ? value(state.teacherAnswerFeedback) : value; state.teacherAnswerFeedback = next; set_teacherAnswerFeedback(next); return next; }
      case "selectedProblemStatement": { const next = typeof value === 'function' ? value(state.selectedProblemStatement) : value; state.selectedProblemStatement = next; set_selectedProblemStatement(next); return next; }
      case "teacherQuestionExplanation": { const next = typeof value === 'function' ? value(state.teacherQuestionExplanation) : value; state.teacherQuestionExplanation = next; set_teacherQuestionExplanation(next); return next; }
      case "blackboardProblemLabel": { const next = typeof value === 'function' ? value(state.blackboardProblemLabel) : value; state.blackboardProblemLabel = next; set_blackboardProblemLabel(next); return next; }
      case "isSyllabusSetupCollapsed": { const next = typeof value === 'function' ? value(state.isSyllabusSetupCollapsed) : value; state.isSyllabusSetupCollapsed = next; set_isSyllabusSetupCollapsed(next); return next; }
      case "showNewProblemForm": { const next = typeof value === 'function' ? value(state.showNewProblemForm) : value; state.showNewProblemForm = next; set_showNewProblemForm(next); return next; }
      case "selectedTopicProblemItems": { const next = typeof value === 'function' ? value(state.selectedTopicProblemItems) : value; state.selectedTopicProblemItems = next; set_selectedTopicProblemItems(next); return next; }
      case "selectedTopicHeading": { const next = typeof value === 'function' ? value(state.selectedTopicHeading) : value; state.selectedTopicHeading = next; set_selectedTopicHeading(next); return next; }
      case "savedSyllabusOptions": { const next = typeof value === 'function' ? value(state.savedSyllabusOptions) : value; state.savedSyllabusOptions = next; set_savedSyllabusOptions(next); return next; }
      case "syllabusDescription": { const next = typeof value === 'function' ? value(state.syllabusDescription) : value; state.syllabusDescription = next; set_syllabusDescription(next); return next; }
      case "strategyDraftText": { const next = typeof value === 'function' ? value(state.strategyDraftText) : value; state.strategyDraftText = next; set_strategyDraftText(next); return next; }
      case "isSavingSyllabus": { const next = typeof value === 'function' ? value(state.isSavingSyllabus) : value; state.isSavingSyllabus = next; set_isSavingSyllabus(next); return next; }
      case "problemSolution": { const next = typeof value === 'function' ? value(state.problemSolution) : value; state.problemSolution = next; set_problemSolution(next); return next; }
      case "structureStatus": { const next = typeof value === 'function' ? value(state.structureStatus) : value; state.structureStatus = next; set_structureStatus(next); return next; }
      case "accessBadgeLabel": { const next = typeof value === 'function' ? value(state.accessBadgeLabel) : value; state.accessBadgeLabel = next; set_accessBadgeLabel(next); return next; }
      case "activeStep": { const next = typeof value === 'function' ? value(state.activeStep) : value; state.activeStep = next; set_activeStep(next); return next; }
      case "isGeneratingStructure": { const next = typeof value === 'function' ? value(state.isGeneratingStructure) : value; state.isGeneratingStructure = next; set_isGeneratingStructure(next); return next; }
      case "showSyllabusSetup": { const next = typeof value === 'function' ? value(state.showSyllabusSetup) : value; state.showSyllabusSetup = next; set_showSyllabusSetup(next); return next; }
      case "teacherQuestionPrompt": { const next = typeof value === 'function' ? value(state.teacherQuestionPrompt) : value; state.teacherQuestionPrompt = next; set_teacherQuestionPrompt(next); return next; }
      case "hasSelectedTopic": { const next = typeof value === 'function' ? value(state.hasSelectedTopic) : value; state.hasSelectedTopic = next; set_hasSelectedTopic(next); return next; }
      case "blackboardSteps": { const next = typeof value === 'function' ? value(state.blackboardSteps) : value; state.blackboardSteps = next; set_blackboardSteps(next); return next; }
      case "resolvedStrategyVersion": { const next = typeof value === 'function' ? value(state.resolvedStrategyVersion) : value; state.resolvedStrategyVersion = next; set_resolvedStrategyVersion(next); return next; }
      case "newProblemSolutionMode": { const next = typeof value === 'function' ? value(state.newProblemSolutionMode) : value; state.newProblemSolutionMode = next; set_newProblemSolutionMode(next); return next; }
      case "blackboardLesson": { const next = typeof value === 'function' ? value(state.blackboardLesson) : value; state.blackboardLesson = next; set_blackboardLesson(next); return next; }
      case "problemSolutionText": { const next = typeof value === 'function' ? value(state.problemSolutionText) : value; state.problemSolutionText = next; set_problemSolutionText(next); return next; }
      case "canUseStudio": { const next = typeof value === 'function' ? value(state.canUseStudio) : value; state.canUseStudio = next; set_canUseStudio(next); return next; }
      case "resolvedStrategy": { const next = typeof value === 'function' ? value(state.resolvedStrategy) : value; state.resolvedStrategy = next; set_resolvedStrategy(next); return next; }
      case "problemResolutionStatus": { const next = typeof value === 'function' ? value(state.problemResolutionStatus) : value; state.problemResolutionStatus = next; set_problemResolutionStatus(next); return next; }
      case "accessGateMessage": { const next = typeof value === 'function' ? value(state.accessGateMessage) : value; state.accessGateMessage = next; set_accessGateMessage(next); return next; }
      case "hasProblemSolution": { const next = typeof value === 'function' ? value(state.hasProblemSolution) : value; state.hasProblemSolution = next; set_hasProblemSolution(next); return next; }
      case "teacherQuestionCorrectValue": { const next = typeof value === 'function' ? value(state.teacherQuestionCorrectValue) : value; state.teacherQuestionCorrectValue = next; set_teacherQuestionCorrectValue(next); return next; }
      case "suggestedProblemsText": { const next = typeof value === 'function' ? value(state.suggestedProblemsText) : value; state.suggestedProblemsText = next; set_suggestedProblemsText(next); return next; }
      case "isResolvingProblem": { const next = typeof value === 'function' ? value(state.isResolvingProblem) : value; state.isResolvingProblem = next; set_isResolvingProblem(next); return next; }
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
      case "syllabusStatus": _setState("syllabusStatus", updateNested); return value;
      case "selectedTopicId": _setState("selectedTopicId", updateNested); return value;
      case "isLoadingSyllabi": _setState("isLoadingSyllabi", updateNested); return value;
      case "blackboardLearningGoal": _setState("blackboardLearningGoal", updateNested); return value;
      case "resolvedStrategyId": _setState("resolvedStrategyId", updateNested); return value;
      case "selectedProblemIds": _setState("selectedProblemIds", updateNested); return value;
      case "syllabusDraftText": _setState("syllabusDraftText", updateNested); return value;
      case "strategyDraft": _setState("strategyDraft", updateNested); return value;
      case "selectedTopicPath": _setState("selectedTopicPath", updateNested); return value;
      case "syllabusTitle": _setState("syllabusTitle", updateNested); return value;
      case "studioControls": _setState("studioControls", updateNested); return value;
      case "newProblemText": _setState("newProblemText", updateNested); return value;
      case "selectedHierarchyIds": _setState("selectedHierarchyIds", updateNested); return value;
      case "savedSyllabusVersion": _setState("savedSyllabusVersion", updateNested); return value;
      case "selectedTeacherAnswer": _setState("selectedTeacherAnswer", updateNested); return value;
      case "suggestedProblems": _setState("suggestedProblems", updateNested); return value;
      case "blackboardTitle": _setState("blackboardTitle", updateNested); return value;
      case "strategyStatus": _setState("strategyStatus", updateNested); return value;
      case "contentPreviewPacket": _setState("contentPreviewPacket", updateNested); return value;
      case "hierarchyItems": _setState("hierarchyItems", updateNested); return value;
      case "hasResolvedStrategy": _setState("hasResolvedStrategy", updateNested); return value;
      case "finalHierarchyText": _setState("finalHierarchyText", updateNested); return value;
      case "teacherQuestionOptions": _setState("teacherQuestionOptions", updateNested); return value;
      case "showAccessGate": _setState("showAccessGate", updateNested); return value;
      case "selectedProblemText": _setState("selectedProblemText", updateNested); return value;
      case "isSavingStrategy": _setState("isSavingStrategy", updateNested); return value;
      case "savedSyllabusKey": _setState("savedSyllabusKey", updateNested); return value;
      case "savedProblemId": _setState("savedProblemId", updateNested); return value;
      case "selectedSyllabusId": _setState("selectedSyllabusId", updateNested); return value;
      case "selectedTopicProblemsText": _setState("selectedTopicProblemsText", updateNested); return value;
      case "savedContextKey": _setState("savedContextKey", updateNested); return value;
      case "selectedTopicTitle": _setState("selectedTopicTitle", updateNested); return value;
      case "accessGateTitle": _setState("accessGateTitle", updateNested); return value;
      case "selectedTopicProblems": _setState("selectedTopicProblems", updateNested); return value;
      case "isOpeningSyllabus": _setState("isOpeningSyllabus", updateNested); return value;
      case "finalHierarchy": _setState("finalHierarchy", updateNested); return value;
      case "blackboardProblemStatement": _setState("blackboardProblemStatement", updateNested); return value;
      case "teacherAnswerFeedback": _setState("teacherAnswerFeedback", updateNested); return value;
      case "selectedProblemStatement": _setState("selectedProblemStatement", updateNested); return value;
      case "teacherQuestionExplanation": _setState("teacherQuestionExplanation", updateNested); return value;
      case "blackboardProblemLabel": _setState("blackboardProblemLabel", updateNested); return value;
      case "isSyllabusSetupCollapsed": _setState("isSyllabusSetupCollapsed", updateNested); return value;
      case "showNewProblemForm": _setState("showNewProblemForm", updateNested); return value;
      case "selectedTopicProblemItems": _setState("selectedTopicProblemItems", updateNested); return value;
      case "selectedTopicHeading": _setState("selectedTopicHeading", updateNested); return value;
      case "savedSyllabusOptions": _setState("savedSyllabusOptions", updateNested); return value;
      case "syllabusDescription": _setState("syllabusDescription", updateNested); return value;
      case "strategyDraftText": _setState("strategyDraftText", updateNested); return value;
      case "isSavingSyllabus": _setState("isSavingSyllabus", updateNested); return value;
      case "problemSolution": _setState("problemSolution", updateNested); return value;
      case "structureStatus": _setState("structureStatus", updateNested); return value;
      case "accessBadgeLabel": _setState("accessBadgeLabel", updateNested); return value;
      case "activeStep": _setState("activeStep", updateNested); return value;
      case "isGeneratingStructure": _setState("isGeneratingStructure", updateNested); return value;
      case "showSyllabusSetup": _setState("showSyllabusSetup", updateNested); return value;
      case "teacherQuestionPrompt": _setState("teacherQuestionPrompt", updateNested); return value;
      case "hasSelectedTopic": _setState("hasSelectedTopic", updateNested); return value;
      case "blackboardSteps": _setState("blackboardSteps", updateNested); return value;
      case "resolvedStrategyVersion": _setState("resolvedStrategyVersion", updateNested); return value;
      case "newProblemSolutionMode": _setState("newProblemSolutionMode", updateNested); return value;
      case "blackboardLesson": _setState("blackboardLesson", updateNested); return value;
      case "problemSolutionText": _setState("problemSolutionText", updateNested); return value;
      case "canUseStudio": _setState("canUseStudio", updateNested); return value;
      case "resolvedStrategy": _setState("resolvedStrategy", updateNested); return value;
      case "problemResolutionStatus": _setState("problemResolutionStatus", updateNested); return value;
      case "accessGateMessage": _setState("accessGateMessage", updateNested); return value;
      case "hasProblemSolution": _setState("hasProblemSolution", updateNested); return value;
      case "teacherQuestionCorrectValue": _setState("teacherQuestionCorrectValue", updateNested); return value;
      case "suggestedProblemsText": _setState("suggestedProblemsText", updateNested); return value;
      case "isResolvingProblem": _setState("isResolvingProblem", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"aiStructureGenerated":{"properties":{"hierarchy":{"type":"object"},"languageCode":{"type":"string"}},"type":"object"},"aiStructureRequested":{"properties":{"languageCode":{"type":"string"},"sourceText":{"type":"string"}},"type":"object"},"canUseStudio":{"properties":{"value":{"type":"boolean"}},"type":"object"},"contentPreviewReady":{"properties":{"context":{"type":"object"},"lesson":{"type":"object"},"problem":{"type":"object"},"schemaVersion":{"type":"number"}},"required":["schemaVersion","context","problem","lesson"],"type":"object"},"contextPublishRequested":{"properties":{"contextDraft":{"type":"object"},"immutable":{"type":"boolean"}},"type":"object"},"contextSetRequested":{"properties":{"contextDraft":{"type":"object"},"strategy":{"type":"object"},"strategyId":{"type":"string"},"strategyVersion":{"type":"number"}},"type":"object"},"lessonShareRequested":{"properties":{"expiresInHours":{"type":"number"},"visibility":{"type":"string"}},"type":"object"},"problemsAddRequested":{"properties":{"problems":{"type":"array"},"topicId":{"type":"string"}},"type":"object"},"resolvedStrategy":{"properties":{},"type":"object"},"stepOperationRequested":{"properties":{"note":{"type":"string"},"operation":{"type":"string"},"stepId":{"type":"string"}},"type":"object"},"suggestedProblemsText":{"properties":{"value":{"type":"string"}},"type":"object"},"syllabusText":{"properties":{"value":{"type":"string"}},"type":"object"}};
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

  async function refreshProfessorScenario(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await initializeProfessorAccess({  });
    await syncSyllabusInput({  });
    return stepResults.scenario_access;
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
    await _emitOutput("problemsAddRequested", { "hierarchy": stepResults.problems_expand.hierarchy, "problems": stepResults.problems_expand.problems, "topicId": state.selectedTopicId }, true);
    return undefined;
  }

  async function setHierarchyContext(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isSavingStrategy", true);
    await refreshStudioControls({  });
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
if(!state.selectedSyllabusId || !state.savedContextKey) throw new Error('Save this syllabus first so its lessons have a stable course identity.');
if(!state.selectedTopicId)throw new Error('Select a Topic before approving a strategy.');const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context',contextKey=String(state.savedContextKey);return{contextKey,versionNumber:Number(state.savedSyllabusVersion),locale:String(inputs.locale||'en'),scopePath:String(state.selectedTopicPath||state.selectedTopicId),scopeType:'topic',title:String(state.selectedTopicTitle||'Topic')+' teaching strategy',strategy:state.strategyDraft};
        })();
        stepResults["context_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "context_prepare" };
      vars.error = error; stepResults["context_prepare"] = { error };
      _setState("isSavingStrategy", false);
      await refreshStudioControls({  });
      _setState("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing.");
      return { "ok": false };
      return undefined;
    }
    try {
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
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "context_save_query" };
      vars.error = error; stepResults["context_save_query"] = { error };
      _setState("isSavingStrategy", false);
      await refreshStudioControls({  });
      _setState("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const rows=Array.isArray(stepResults.context_save_query)?stepResults.context_save_query:[],row=rows[0],result=row&&typeof row==='object'?(row.result||row):{};if(!result.strategyId)throw new Error('Strategy was not saved. Use an owned draft version.');return{id:String(result.strategyId||''),version:Number(result.strategyVersion||0),strategy:result.strategy||stepResults.context_prepare.strategy};

        })();
        stepResults["context_save_parse"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "context_save_parse" };
      vars.error = error; stepResults["context_save_parse"] = { error };
      _setState("isSavingStrategy", false);
      await refreshStudioControls({  });
      _setState("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing.");
      return { "ok": false };
      return undefined;
    }
    _setState("resolvedStrategyId", stepResults.context_save_parse.id);
    _setState("resolvedStrategyVersion", stepResults.context_save_parse.version);
    _setState("resolvedStrategy", stepResults.context_save_parse.strategy);
    _setState("strategyStatus", 'Approved strategy v' + stepResults.context_save_parse.version + ' saved for ' + state.selectedTopicTitle + '.');
    _setState("structureStatus", "Selected hierarchy and teaching strategy are now the active context.");
    _setState("isSavingStrategy", false);
    await refreshStudioControls({  });
    try {
      await _emitOutput("contextSetRequested", { "hierarchy": state.finalHierarchy, "languageCode": inputs.locale, "scopePath": state.selectedTopicPath, "selectedTopicId": state.selectedTopicId, "strategy": stepResults.context_save_parse.strategy, "strategyId": stepResults.context_save_parse.id, "strategyVersion": stepResults.context_save_parse.version }, true);
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "context_emit" };
      vars.error = error; stepResults["context_emit"] = { error };
      _setState("isSavingStrategy", false);
      await refreshStudioControls({  });
      _setState("strategyStatus", "The strategy could not be saved. Your draft is preserved; retry before publishing.");
      return { "ok": false };
      return undefined;
    }
    return { "hierarchy": state.finalHierarchy, "scopePath": state.selectedTopicPath, "strategy": stepResults.context_save_parse.strategy, "strategyId": stepResults.context_save_parse.id, "strategyVersion": stepResults.context_save_parse.version };
    return undefined;
  }

  async function shareLesson(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await _emitOutput("lessonShareRequested", { "expiresInHours": 168, "visibility": "unlisted" }, true);
    return undefined;
  }

  async function loadContextStrategy(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
if(!state.selectedSyllabusId || !state.savedContextKey) throw new Error('Save this syllabus first so its lessons have a stable course identity.');
const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context';return{contextKey:String(state.savedContextKey),versionNumber:Number(state.savedSyllabusVersion)};
        })();
        stepResults["load_strategy_context"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "load_strategy_context" };
      vars.error = error; stepResults["load_strategy_context"] = { error };
      _setState("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes.");
      return { "ok": false };
      return undefined;
    }
    try {
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
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "load_strategy_query" };
      vars.error = error; stepResults["load_strategy_query"] = { error };
      _setState("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const rows=Array.isArray(stepResults.load_strategy_query)?stepResults.load_strategy_query:[],row=rows[0],result=row&&typeof row==='object'?(row.result||row):null,strategy=result&&result.strategy?result.strategy:state.strategyDraft,version=result?Number(result.strategyVersion||0):0,id=result?String(result.strategyId||''):'';const a=Array.isArray(strategy.requiredSteps)?strategy.requiredSteps:[],b=Array.isArray(strategy.forbiddenShortcuts)?strategy.forbiddenShortcuts:[],c=Array.isArray(strategy.verificationRules)?strategy.verificationRules:[],d=Array.isArray(strategy.teachingNotes)?strategy.teachingNotes:[],parts=['Preferred method\n'+String(strategy.preferredMethod||'Professor-guided method')];if(a.length)parts.push('Required steps\n'+a.map((x,i)=>(i+1)+'. '+x).join('\n'));if(b.length)parts.push('Avoid\n'+b.map(x=>'• '+x).join('\n'));if(c.length)parts.push('Verification\n'+c.map(x=>'• '+x).join('\n'));if(d.length)parts.push('Teaching notes\n'+d.map(x=>'• '+x).join('\n'));return{strategy,version,id,text:parts.join('\n\n'),status:result?'Approved strategy v'+version+' loaded for '+args.topicTitle+'.':'No approved strategy yet. Refine the example and approve this draft.'};
        })();
        stepResults["load_strategy_parse"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "load_strategy_parse" };
      vars.error = error; stepResults["load_strategy_parse"] = { error };
      _setState("strategyStatus", "The teaching strategy could not be loaded. Please retry before approving changes.");
      return { "ok": false };
      return undefined;
    }
    _setState("strategyDraft", stepResults.load_strategy_parse.strategy);
    _setState("strategyDraftText", stepResults.load_strategy_parse.text);
    _setState("resolvedStrategy", stepResults.load_strategy_parse.strategy);
    _setState("resolvedStrategyId", stepResults.load_strategy_parse.id);
    _setState("resolvedStrategyVersion", stepResults.load_strategy_parse.version);
    _setState("strategyStatus", stepResults.load_strategy_parse.status);
    return stepResults.load_strategy_parse;
    return undefined;
  }

  async function selectSavedSyllabus(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if ((function studioControlState(state) {
  const busy = !!(state.isSavingSyllabus || state.isGeneratingStructure || state.isResolvingProblem || state.isSavingStrategy || state.isLoadingSyllabi || state.isOpeningSyllabus);
  const unavailable = state.canUseStudio !== true || busy;
  const saved = !!(state.selectedSyllabusId && state.savedSyllabusKey && state.savedContextKey && Number.isInteger(state.savedSyllabusVersion) && state.savedSyllabusVersion > 0);
  return {
    busy, unavailable,
    previewDisabled: unavailable || !saved || !state.hasProblemSolution || !state.savedProblemId,
    versionDisabled: unavailable || !saved || state.savedSyllabusVersion >= 100000,
    lessonEmpty: !state.isResolvingProblem && !state.hasProblemSolution,
  };
})(state).unavailable) {
      return { "ok": false, "reason": "studio_unavailable" };
    } else {
      _setState("contentPreviewPacket", {  });
      _setState("savedContextKey", "");
      await refreshStudioControls({  });
      _setState("savedProblemId", "");
      await refreshStudioControls({  });
      _setState("hasProblemSolution", false);
      await refreshStudioControls({  });
      _setState("selectedSyllabusId", args.value);
      await refreshStudioControls({  });
      _setState("isOpeningSyllabus", true);
      await refreshStudioControls({  });
      try {
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
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "saved_syllabus_query" };
        vars.error = error; stepResults["saved_syllabus_query"] = { error };
        _setState("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus.");
        _setState("isOpeningSyllabus", false);
        await refreshStudioControls({  });
        return { "ok": false };
        return undefined;
      }
      try {
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
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "saved_syllabus_parse" };
        vars.error = error; stepResults["saved_syllabus_parse"] = { error };
        _setState("syllabusStatus", "This syllabus could not be opened. Please retry or choose another syllabus.");
        _setState("isOpeningSyllabus", false);
        await refreshStudioControls({  });
        return { "ok": false };
        return undefined;
      }
      _setState("savedSyllabusKey", stepResults.saved_syllabus_parse.key);
      await refreshStudioControls({  });
      _setState("savedSyllabusVersion", stepResults.saved_syllabus_parse.versionNumber);
      await refreshStudioControls({  });
      _setState("savedContextKey", stepResults.saved_syllabus_parse.contextKey);
      await refreshStudioControls({  });
      _setState("savedProblemId", "");
      await refreshStudioControls({  });
      _setState("hasProblemSolution", false);
      await refreshStudioControls({  });
      _setState("syllabusTitle", stepResults.saved_syllabus_parse.title);
      _setState("syllabusDescription", stepResults.saved_syllabus_parse.description);
      _setState("syllabusDraftText", stepResults.saved_syllabus_parse.syllabusText);
      _setState("finalHierarchy", stepResults.saved_syllabus_parse.hierarchy);
      _setState("hierarchyItems", stepResults.saved_syllabus_parse.items);
      _setState("syllabusStatus", 'Loaded ' + stepResults.saved_syllabus_parse.title + ' · ' + stepResults.saved_syllabus_parse.status);
      _setState("showSyllabusSetup", !stepResults.saved_syllabus_parse.hasHierarchy);
      _setState("isSyllabusSetupCollapsed", stepResults.saved_syllabus_parse.hasHierarchy);
      _setState("isOpeningSyllabus", false);
      await refreshStudioControls({  });
      return stepResults.saved_syllabus_parse;
    }
    return undefined;
  }

  async function syncSyllabusInput(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusDraftText", inputs.syllabusText || '');
    return undefined;
  }

  async function prepareContentPreview(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if ((function studioControlState(state) {
  const busy = !!(state.isSavingSyllabus || state.isGeneratingStructure || state.isResolvingProblem || state.isSavingStrategy || state.isLoadingSyllabi || state.isOpeningSyllabus);
  const unavailable = state.canUseStudio !== true || busy;
  const saved = !!(state.selectedSyllabusId && state.savedSyllabusKey && state.savedContextKey && Number.isInteger(state.savedSyllabusVersion) && state.savedSyllabusVersion > 0);
  return {
    busy, unavailable,
    previewDisabled: unavailable || !saved || !state.hasProblemSolution || !state.savedProblemId,
    versionDisabled: unavailable || !saved || state.savedSyllabusVersion >= 100000,
    lessonEmpty: !state.isResolvingProblem && !state.hasProblemSolution,
  };
})(state).previewDisabled) {
      return { "ok": false, "reason": "studio_unavailable" };
    } else {
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
function normalizeScholarLesson(value, fallbackStatement = '') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('A lesson object is required.');
  const string = (value, field, required = false) => {
    if (value != null && typeof value !== 'string') throw new Error(field + ' must be text.');
    const text = (value || '').trim();
    if ((required && !text) || text.length > 16000) throw new Error('Invalid ' + field + '.');
    return text;
  };
  if (!Array.isArray(value.steps) || !value.steps.length || value.steps.length > 80) throw new Error('A lesson needs 1–80 steps.');
  const ids = new Set();
  const steps = value.steps.map((step, index) => {
    if (!step || typeof step !== 'object' || Array.isArray(step)) throw new Error('Invalid lesson step.');
    const id = string(step.id, 'step ID') || 'step-' + (index + 1);
    if (ids.has(id)) throw new Error('Step IDs must be unique.');
    ids.add(id);
    const q = step.teacherQuestion;
    if (!q || !Array.isArray(q.options) || q.options.length !== 4) throw new Error('Every teacher check needs exactly four choices.');
    const optionIds = new Set();
    const options = q.options.map((option) => {
      const value = string(option?.value, 'option ID', true);
      if (optionIds.has(value)) throw new Error('Answer option IDs must be unique.');
      optionIds.add(value);
      return { value, label: string(option?.label, 'option label', true) };
    });
    const correctValue = string(q.correctValue, 'correct answer ID', true);
    if (!optionIds.has(correctValue)) throw new Error('The correct answer must reference a supplied option.');
    const prompt = string(q.prompt || step.teacherPrompt, 'teacher question', true);
    if (!Array.isArray(step.content) || !step.content.length || step.content.length > 60) throw new Error('Each step needs board content.');
    const content = step.content.map((block) => {
      if (!block || typeof block !== 'object') throw new Error('Invalid board content.');
      switch (block.type) {
        case 'heading': case 'text': case 'note':
          return { ...block, text: string(block.text, 'board text', true) };
        case 'equation':
          return { ...block, visualText: string(block.visualText, 'readable equation', true), latex: string(block.latex, 'equation') };
        case 'definition':
          return { ...block, term: string(block.term, 'term', true), text: string(block.text, 'definition', true) };
        case 'theorem':
          return { ...block, statement: string(block.statement, 'theorem', true) };
        case 'list': case 'proof': {
          const key = block.type === 'list' ? 'items' : 'lines';
          if (!Array.isArray(block[key]) || !block[key].length) throw new Error('Invalid board list.');
          return { ...block, [key]: block[key].map((entry) => string(entry, 'list entry', true)) };
        }
        case 'matrix': {
          const rows = block.matrix?.rows;
          if (!Array.isArray(rows) || !rows.length || rows.length > 30 || !Array.isArray(rows[0]) || !rows[0].length || rows[0].length > 30 || rows.some((row) => !Array.isArray(row) || row.length !== rows[0].length || row.some((cell) => !['string', 'number'].includes(typeof cell)))) throw new Error('Invalid matrix.');
          return block;
        }
        case 'table':
          if (!Array.isArray(block.headers) || !block.headers.length || !Array.isArray(block.rows) || block.rows.some((row) => !Array.isArray(row) || row.length !== block.headers.length)) throw new Error('Invalid table.');
          return { ...block, headers: block.headers.map((x) => string(x, 'table heading')), rows: block.rows.map((row) => row.map((x) => string(x, 'table cell'))) };
        case 'graph': {
          if (!Array.isArray(block.nodes) || !Array.isArray(block.edges)) throw new Error('Invalid graph.');
          const nodeIds = new Set();
          for (const node of block.nodes) {
            if (!node?.id || nodeIds.has(node.id) || !Number.isFinite(node.x) || !Number.isFinite(node.y)) throw new Error('Invalid graph node.');
            nodeIds.add(node.id);
          }
          if (block.edges.some((edge) => !nodeIds.has(edge?.from) || !nodeIds.has(edge?.to))) throw new Error('Invalid graph edge.');
          return block;
        }
        default: throw new Error('Unsupported board content type.');
      }
    });
    const result = { id, title: string(step.title, 'step title', true), content, teacherPrompt: prompt,
      teacherQuestion: { prompt, options, correctValue, explanation: string(q.explanation, 'answer explanation', true) } };
    for (const field of ['narration', 'explanation', 'simpleExplanation', 'visualExplanation', 'why', 'commonMistake']) result[field] = string(step[field], field);
    return result;
  });
  return {
    title: string(value.title, 'lesson title', true), lessonKind: 'worked-example',
    problemLabel: string(value.problemLabel, 'problem label') || 'Problem',
    problemStatement: string(value.problemStatement || fallbackStatement, 'problem statement', true),
    learningGoal: string(value.learningGoal, 'learning goal'), steps,
    verification: { status: 'unverified', message: 'AI-generated teaching content. Mathematical correctness has not been independently verified.' },
  };
}
function normalizeContentPreview(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value) || !Object.keys(value).length) return { enabled: false, valid: false };
  if (JSON.stringify(value).length > 250000) throw new Error('Preview is too large.');
  if (value.schemaVersion !== 1) throw new Error('Unsupported preview schema.');
  const lesson = normalizeScholarLesson(value.lesson, value.problem?.statement);
  const context = value.context || {};
  const str = v => typeof v === 'string' ? v.trim().slice(0, 500) : '';
  if (!str(context.syllabusId) || !str(context.contextKey) || !str(value.problem?.id)) throw new Error('Preview needs saved syllabus, context, and problem IDs.');
  return { enabled: true, valid: true, schemaVersion: 1,
    context: { syllabusId: str(context.syllabusId), contextKey: str(context.contextKey), versionNumber: Math.max(1, Math.floor(Number(context.versionNumber) || 1)), locale: ['en','hi','ta'].includes(context.locale) ? context.locale : 'en', topicPath: str(context.topicPath) },
    problem: { id: str(value.problem.id), statement: lesson.problemStatement, solutionMode: value.problem.solutionMode === 'quick' ? 'quick' : 'detailed' },
    lesson, boardSteps: lesson.steps.map(({ teacherQuestion, teacherPrompt, ...step }) => step),
    message: 'Content preview · no AI request, learning-time charge, or progress write. Mathematical correctness is not independently verified.' };
}
if(!state.canUseStudio || !state.hasProblemSolution || !state.savedProblemId) throw new Error('Save and resolve a problem first.'); return normalizeContentPreview({schemaVersion:1,context:{syllabusId:state.selectedSyllabusId,contextKey:state.savedContextKey,versionNumber:state.savedSyllabusVersion,locale:inputs.locale,topicPath:state.selectedTopicPath},problem:{id:state.savedProblemId,statement:state.blackboardLesson.problemStatement,solutionMode:state.newProblemSolutionMode},lesson:state.blackboardLesson});
          })();
          stepResults["prepare_preview"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "prepare_preview" };
        vars.error = error; stepResults["prepare_preview"] = { error };
        _setState("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first.");
        return { "ok": false };
        return undefined;
      }
      _setState("contentPreviewPacket", stepResults.prepare_preview);
      try {
        await _emitOutput("contentPreviewReady", stepResults.prepare_preview, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "emit_preview_packet" };
        vars.error = error; stepResults["emit_preview_packet"] = { error };
        _setState("problemResolutionStatus", "Preview could not be prepared. Save the syllabus and resolve a problem first.");
        return { "ok": false };
        return undefined;
      }
      _setState("problemResolutionStatus", "Student preview prepared. Open it through the connected application.");
      return stepResults.prepare_preview;
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

  async function setNewProblemSolutionMode(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("newProblemSolutionMode", args.value);
    return undefined;
  }

  async function publishContext(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if ((function studioControlState(state) {
  const busy = !!(state.isSavingSyllabus || state.isGeneratingStructure || state.isResolvingProblem || state.isSavingStrategy || state.isLoadingSyllabi || state.isOpeningSyllabus);
  const unavailable = state.canUseStudio !== true || busy;
  const saved = !!(state.selectedSyllabusId && state.savedSyllabusKey && state.savedContextKey && Number.isInteger(state.savedSyllabusVersion) && state.savedSyllabusVersion > 0);
  return {
    busy, unavailable,
    previewDisabled: unavailable || !saved || !state.hasProblemSolution || !state.savedProblemId,
    versionDisabled: unavailable || !saved || state.savedSyllabusVersion >= 100000,
    lessonEmpty: !state.isResolvingProblem && !state.hasProblemSolution,
  };
})(state).unavailable) {
      return { "ok": false, "reason": "studio_unavailable" };
    } else {
      await saveProfessorSyllabus({ "status": "published" });
      return stepResults.publish_saved_course;
    }
    return undefined;
  }

  async function resolveProblemSolution(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("savedProblemId", "");
    await refreshStudioControls({  });
    _setState("isResolvingProblem", true);
    await refreshStudioControls({  });
    _setState("problemResolutionStatus", "Checking saved solutions for this hierarchy…");
    _setState("hasProblemSolution", false);
    await refreshStudioControls({  });
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
if(!state.selectedSyllabusId || !state.savedContextKey) throw new Error('Save this syllabus first so its lessons have a stable course identity.');
const statement=String(args.statement||'').trim();
if(!statement)throw new Error('Enter a problem statement.');
if(!state.selectedTopicId)throw new Error('Select a Topic first.');
const normalized=statement.normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context';
const contextKey=String(state.savedContextKey);
const versionNumber=Number(state.savedSyllabusVersion);
const mode=args.solutionMode==='quick'?'quick':'detailed';
const topicPath=String(state.selectedTopicPath||state.selectedTopicId);
const requested=String(inputs.locale||'en').toLowerCase();
const locale=['en','hi','ta'].includes(requested)?requested:'en';
return {statement,normalized,contextKey,versionNumber,mode,topicPath,locale,promptVersion:'v3-validated-mcq-blackboard'};
        })();
        stepResults["problem_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_prepare" };
      vars.error = error; stepResults["problem_prepare"] = { error };
      _setState("isResolvingProblem", false);
      await refreshStudioControls({  });
      _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
      return { "ok": false };
      return undefined;
    }
    try {
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
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_strategy_lookup" };
      vars.error = error; stepResults["problem_strategy_lookup"] = { error };
      _setState("isResolvingProblem", false);
      await refreshStudioControls({  });
      _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const rows=Array.isArray(stepResults.problem_strategy_lookup)?stepResults.problem_strategy_lookup:[],row=rows[0],result=row&&typeof row==='object'?(row.result||row):null;return{id:result?String(result.strategyId||''):'',version:result?Number(result.strategyVersion||0):0,strategy:result&&result.strategy?result.strategy:(state.strategyDraft||{})};
        })();
        stepResults["problem_strategy_result"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_strategy_result" };
      vars.error = error; stepResults["problem_strategy_result"] = { error };
      _setState("isResolvingProblem", false);
      await refreshStudioControls({  });
      _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
      return { "ok": false };
      return undefined;
    }
    try {
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
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_lookup" };
      vars.error = error; stepResults["problem_lookup"] = { error };
      _setState("isResolvingProblem", false);
      await refreshStudioControls({  });
      _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const normalize = function normalizeScholarLesson(value, fallbackStatement = '') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('A lesson object is required.');
  const string = (value, field, required = false) => {
    if (value != null && typeof value !== 'string') throw new Error(field + ' must be text.');
    const text = (value || '').trim();
    if ((required && !text) || text.length > 16000) throw new Error('Invalid ' + field + '.');
    return text;
  };
  if (!Array.isArray(value.steps) || !value.steps.length || value.steps.length > 80) throw new Error('A lesson needs 1–80 steps.');
  const ids = new Set();
  const steps = value.steps.map((step, index) => {
    if (!step || typeof step !== 'object' || Array.isArray(step)) throw new Error('Invalid lesson step.');
    const id = string(step.id, 'step ID') || 'step-' + (index + 1);
    if (ids.has(id)) throw new Error('Step IDs must be unique.');
    ids.add(id);
    const q = step.teacherQuestion;
    if (!q || !Array.isArray(q.options) || q.options.length !== 4) throw new Error('Every teacher check needs exactly four choices.');
    const optionIds = new Set();
    const options = q.options.map((option) => {
      const value = string(option?.value, 'option ID', true);
      if (optionIds.has(value)) throw new Error('Answer option IDs must be unique.');
      optionIds.add(value);
      return { value, label: string(option?.label, 'option label', true) };
    });
    const correctValue = string(q.correctValue, 'correct answer ID', true);
    if (!optionIds.has(correctValue)) throw new Error('The correct answer must reference a supplied option.');
    const prompt = string(q.prompt || step.teacherPrompt, 'teacher question', true);
    if (!Array.isArray(step.content) || !step.content.length || step.content.length > 60) throw new Error('Each step needs board content.');
    const content = step.content.map((block) => {
      if (!block || typeof block !== 'object') throw new Error('Invalid board content.');
      switch (block.type) {
        case 'heading': case 'text': case 'note':
          return { ...block, text: string(block.text, 'board text', true) };
        case 'equation':
          return { ...block, visualText: string(block.visualText, 'readable equation', true), latex: string(block.latex, 'equation') };
        case 'definition':
          return { ...block, term: string(block.term, 'term', true), text: string(block.text, 'definition', true) };
        case 'theorem':
          return { ...block, statement: string(block.statement, 'theorem', true) };
        case 'list': case 'proof': {
          const key = block.type === 'list' ? 'items' : 'lines';
          if (!Array.isArray(block[key]) || !block[key].length) throw new Error('Invalid board list.');
          return { ...block, [key]: block[key].map((entry) => string(entry, 'list entry', true)) };
        }
        case 'matrix': {
          const rows = block.matrix?.rows;
          if (!Array.isArray(rows) || !rows.length || rows.length > 30 || !Array.isArray(rows[0]) || !rows[0].length || rows[0].length > 30 || rows.some((row) => !Array.isArray(row) || row.length !== rows[0].length || row.some((cell) => !['string', 'number'].includes(typeof cell)))) throw new Error('Invalid matrix.');
          return block;
        }
        case 'table':
          if (!Array.isArray(block.headers) || !block.headers.length || !Array.isArray(block.rows) || block.rows.some((row) => !Array.isArray(row) || row.length !== block.headers.length)) throw new Error('Invalid table.');
          return { ...block, headers: block.headers.map((x) => string(x, 'table heading')), rows: block.rows.map((row) => row.map((x) => string(x, 'table cell'))) };
        case 'graph': {
          if (!Array.isArray(block.nodes) || !Array.isArray(block.edges)) throw new Error('Invalid graph.');
          const nodeIds = new Set();
          for (const node of block.nodes) {
            if (!node?.id || nodeIds.has(node.id) || !Number.isFinite(node.x) || !Number.isFinite(node.y)) throw new Error('Invalid graph node.');
            nodeIds.add(node.id);
          }
          if (block.edges.some((edge) => !nodeIds.has(edge?.from) || !nodeIds.has(edge?.to))) throw new Error('Invalid graph edge.');
          return block;
        }
        default: throw new Error('Unsupported board content type.');
      }
    });
    const result = { id, title: string(step.title, 'step title', true), content, teacherPrompt: prompt,
      teacherQuestion: { prompt, options, correctValue, explanation: string(q.explanation, 'answer explanation', true) } };
    for (const field of ['narration', 'explanation', 'simpleExplanation', 'visualExplanation', 'why', 'commonMistake']) result[field] = string(step[field], field);
    return result;
  });
  return {
    title: string(value.title, 'lesson title', true), lessonKind: 'worked-example',
    problemLabel: string(value.problemLabel, 'problem label') || 'Problem',
    problemStatement: string(value.problemStatement || fallbackStatement, 'problem statement', true),
    learningGoal: string(value.learningGoal, 'learning goal'), steps,
    verification: { status: 'unverified', message: 'AI-generated teaching content. Mathematical correctness has not been independently verified.' },
  };
};
const rows = stepResults.problem_lookup; const row = Array.isArray(rows) ? rows[0] : rows; const result = row?.result || row;
if (!result?.solution) return {hit:false};
let board; try { board = normalize(result.solution, stepResults.problem_prepare.statement); } catch { return {hit:false}; }
const solution = { ...result.solution, ...board };
return {hit:true,result,solution,board,question:board.steps[0].teacherQuestion,text:board.steps.map((step,index)=>(index+1)+'. '+step.title).join('\n')};
        })();
        stepResults["problem_cache_result"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_cache_result" };
      vars.error = error; stepResults["problem_cache_result"] = { error };
      _setState("isResolvingProblem", false);
      await refreshStudioControls({  });
      _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
      return { "ok": false };
      return undefined;
    }
    if (stepResults.problem_cache_result.hit) {
      _setState("savedProblemId", stepResults.problem_cache_result.result.problemId);
      await refreshStudioControls({  });
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
      _setState("problemResolutionStatus", "Saved AI lesson · review every step; mathematical correctness is not independently verified.");
      _setState("isResolvingProblem", false);
      await refreshStudioControls({  });
      _setState("hasProblemSolution", true);
      await refreshStudioControls({  });
      return state.problemSolution;
    } else {
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const p=stepResults.problem_prepare;
const strategy=stepResults.problem_strategy_result.strategy||{};
const languageName=p.locale==='hi'?'Hindi':p.locale==='ta'?'Tamil':'English';
return ['You are a college mathematics professor creating an interactive blackboard lesson.','Return JSON only with this exact shape: {"title":"...","problemLabel":"...","problemStatement":"...","learningGoal":"...","summary":"...","steps":[{"id":"step-1","title":"...","narration":"...","explanation":"...","simpleExplanation":"...","why":"...","commonMistake":"...","content":[{"type":"text","text":"..."}],"teacherQuestion":{"prompt":"...","options":[{"label":"...","value":"a"},{"label":"...","value":"b"},{"label":"...","value":"c"},{"label":"...","value":"d"}],"correctValue":"a","explanation":"..."}}],"answer":"...","checks":["..."]}.','Create at least 3 coherent solution steps. Every step must have exactly one teacherQuestion with exactly four plausible choices and one correctValue matching a choice value.','Generate every human-readable field, including the restated problem, step titles, explanations, questions, choices, feedback, answer and checks, in '+languageName+' only. Do not mix languages. Keep JSON keys, option values and mathematical notation unchanged.','Follow this approved teaching strategy exactly: '+JSON.stringify(strategy),'Solution mode: '+p.mode+'.','Language code: '+p.locale+'.','Context hierarchy: '+JSON.stringify(state.finalHierarchy||{}),'Selected topic path: '+p.topicPath,'Problem: '+p.statement].join('\n');
          })();
          stepResults["problem_ai_prompt"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_ai_prompt" };
        vars.error = error; stepResults["problem_ai_prompt"] = { error };
        _setState("isResolvingProblem", false);
        await refreshStudioControls({  });
        _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.problem_ai_prompt }}"}, roots) || {};
          const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiProblemSolution", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
          const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["problem_ai_call"] = result; vars["apiResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_ai_call" };
        vars.error = error; stepResults["problem_ai_call"] = { error };
        _setState("isResolvingProblem", false);
        await refreshStudioControls({  });
        _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const normalize = function normalizeScholarLesson(value, fallbackStatement = '') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('A lesson object is required.');
  const string = (value, field, required = false) => {
    if (value != null && typeof value !== 'string') throw new Error(field + ' must be text.');
    const text = (value || '').trim();
    if ((required && !text) || text.length > 16000) throw new Error('Invalid ' + field + '.');
    return text;
  };
  if (!Array.isArray(value.steps) || !value.steps.length || value.steps.length > 80) throw new Error('A lesson needs 1–80 steps.');
  const ids = new Set();
  const steps = value.steps.map((step, index) => {
    if (!step || typeof step !== 'object' || Array.isArray(step)) throw new Error('Invalid lesson step.');
    const id = string(step.id, 'step ID') || 'step-' + (index + 1);
    if (ids.has(id)) throw new Error('Step IDs must be unique.');
    ids.add(id);
    const q = step.teacherQuestion;
    if (!q || !Array.isArray(q.options) || q.options.length !== 4) throw new Error('Every teacher check needs exactly four choices.');
    const optionIds = new Set();
    const options = q.options.map((option) => {
      const value = string(option?.value, 'option ID', true);
      if (optionIds.has(value)) throw new Error('Answer option IDs must be unique.');
      optionIds.add(value);
      return { value, label: string(option?.label, 'option label', true) };
    });
    const correctValue = string(q.correctValue, 'correct answer ID', true);
    if (!optionIds.has(correctValue)) throw new Error('The correct answer must reference a supplied option.');
    const prompt = string(q.prompt || step.teacherPrompt, 'teacher question', true);
    if (!Array.isArray(step.content) || !step.content.length || step.content.length > 60) throw new Error('Each step needs board content.');
    const content = step.content.map((block) => {
      if (!block || typeof block !== 'object') throw new Error('Invalid board content.');
      switch (block.type) {
        case 'heading': case 'text': case 'note':
          return { ...block, text: string(block.text, 'board text', true) };
        case 'equation':
          return { ...block, visualText: string(block.visualText, 'readable equation', true), latex: string(block.latex, 'equation') };
        case 'definition':
          return { ...block, term: string(block.term, 'term', true), text: string(block.text, 'definition', true) };
        case 'theorem':
          return { ...block, statement: string(block.statement, 'theorem', true) };
        case 'list': case 'proof': {
          const key = block.type === 'list' ? 'items' : 'lines';
          if (!Array.isArray(block[key]) || !block[key].length) throw new Error('Invalid board list.');
          return { ...block, [key]: block[key].map((entry) => string(entry, 'list entry', true)) };
        }
        case 'matrix': {
          const rows = block.matrix?.rows;
          if (!Array.isArray(rows) || !rows.length || rows.length > 30 || !Array.isArray(rows[0]) || !rows[0].length || rows[0].length > 30 || rows.some((row) => !Array.isArray(row) || row.length !== rows[0].length || row.some((cell) => !['string', 'number'].includes(typeof cell)))) throw new Error('Invalid matrix.');
          return block;
        }
        case 'table':
          if (!Array.isArray(block.headers) || !block.headers.length || !Array.isArray(block.rows) || block.rows.some((row) => !Array.isArray(row) || row.length !== block.headers.length)) throw new Error('Invalid table.');
          return { ...block, headers: block.headers.map((x) => string(x, 'table heading')), rows: block.rows.map((row) => row.map((x) => string(x, 'table cell'))) };
        case 'graph': {
          if (!Array.isArray(block.nodes) || !Array.isArray(block.edges)) throw new Error('Invalid graph.');
          const nodeIds = new Set();
          for (const node of block.nodes) {
            if (!node?.id || nodeIds.has(node.id) || !Number.isFinite(node.x) || !Number.isFinite(node.y)) throw new Error('Invalid graph node.');
            nodeIds.add(node.id);
          }
          if (block.edges.some((edge) => !nodeIds.has(edge?.from) || !nodeIds.has(edge?.to))) throw new Error('Invalid graph edge.');
          return block;
        }
        default: throw new Error('Unsupported board content type.');
      }
    });
    const result = { id, title: string(step.title, 'step title', true), content, teacherPrompt: prompt,
      teacherQuestion: { prompt, options, correctValue, explanation: string(q.explanation, 'answer explanation', true) } };
    for (const field of ['narration', 'explanation', 'simpleExplanation', 'visualExplanation', 'why', 'commonMistake']) result[field] = string(step[field], field);
    return result;
  });
  return {
    title: string(value.title, 'lesson title', true), lessonKind: 'worked-example',
    problemLabel: string(value.problemLabel, 'problem label') || 'Problem',
    problemStatement: string(value.problemStatement || fallbackStatement, 'problem statement', true),
    learningGoal: string(value.learningGoal, 'learning goal'), steps,
    verification: { status: 'unverified', message: 'AI-generated teaching content. Mathematical correctness has not been independently verified.' },
  };
};
const parts = stepResults.problem_ai_call?.candidates?.[0]?.content?.parts;
const raw = Array.isArray(parts) ? parts.map((part) => typeof part?.text === 'string' ? part.text : '').join('') : '';
if (!raw.trim() || raw.length > 200000) throw new Error('Invalid AI lesson response.');
const source = JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, ''));
const board = normalize(source, stepResults.problem_prepare.statement);
const solution = { ...board, summary: typeof source.summary === 'string' ? source.summary : '', answer: typeof source.answer === 'string' ? source.answer : '', checks: Array.isArray(source.checks) ? source.checks.filter((value) => typeof value === 'string') : [] };
return { solution, board, question: board.steps[0].teacherQuestion, text: [solution.summary,board.steps.map((step,index)=>(index+1)+'. '+step.title).join('\n'),solution.answer,solution.checks.join('\n')].filter(Boolean).join('\n\n') };
          })();
          stepResults["problem_ai_parse"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_ai_parse" };
        vars.error = error; stepResults["problem_ai_parse"] = { error };
        _setState("isResolvingProblem", false);
        await refreshStudioControls({  });
        _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
        return { "ok": false };
        return undefined;
      }
      try {
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
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_store" };
        vars.error = error; stepResults["problem_store"] = { error };
        _setState("isResolvingProblem", false);
        await refreshStudioControls({  });
        _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const result=Array.isArray(stepResults.problem_store)?stepResults.problem_store[0]?.result:null; if(!result?.problemId) throw new Error('Lesson was not saved. Use an owned draft version.'); return result;
          })();
          stepResults["stored_problem_check"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "stored_problem_check" };
        vars.error = error; stepResults["stored_problem_check"] = { error };
        _setState("isResolvingProblem", false);
        await refreshStudioControls({  });
        _setState("problemResolutionStatus", "Unable to prepare a valid lesson. Your problem is preserved; please retry. AI content requires independent review.");
        return { "ok": false };
        return undefined;
      }
      _setState("savedProblemId", stepResults.stored_problem_check.problemId);
      await refreshStudioControls({  });
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
      _setState("problemResolutionStatus", "AI lesson prepared · review every step; mathematical correctness is not independently verified.");
      _setState("isResolvingProblem", false);
      await refreshStudioControls({  });
      _setState("hasProblemSolution", true);
      await refreshStudioControls({  });
      return state.problemSolution;
    }
    return undefined;
  }

  async function collapseSyllabusSetup(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("showSyllabusSetup", false);
    _setState("isSyllabusSetupCollapsed", true);
    return undefined;
  }

  async function requestStructure(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if ((function studioControlState(state) {
  const busy = !!(state.isSavingSyllabus || state.isGeneratingStructure || state.isResolvingProblem || state.isSavingStrategy || state.isLoadingSyllabi || state.isOpeningSyllabus);
  const unavailable = state.canUseStudio !== true || busy;
  const saved = !!(state.selectedSyllabusId && state.savedSyllabusKey && state.savedContextKey && Number.isInteger(state.savedSyllabusVersion) && state.savedSyllabusVersion > 0);
  return {
    busy, unavailable,
    previewDisabled: unavailable || !saved || !state.hasProblemSolution || !state.savedProblemId,
    versionDisabled: unavailable || !saved || state.savedSyllabusVersion >= 100000,
    lessonEmpty: !state.isResolvingProblem && !state.hasProblemSolution,
  };
})(state).unavailable) {
      return { "ok": false, "reason": "studio_unavailable" };
    } else {
      _setState("isGeneratingStructure", true);
      await refreshStudioControls({  });
      _setState("structureStatus", "Generating a multilevel hierarchy with Gemini…");
      try {
        await _emitOutput("aiStructureRequested", { "languageCode": inputs.locale, "sourceText": state.syllabusDraftText }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "structure_emit" };
        vars.error = error; stepResults["structure_emit"] = { error };
        _setState("isGeneratingStructure", false);
        await refreshStudioControls({  });
        _setState("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const syllabus=String(state.syllabusDraftText||'').trim();
if(!syllabus)throw new Error('Paste a syllabus before proposing a hierarchy.');
return ['You are an academic curriculum architect.','Return JSON only with Programme > Semester > Subject > Unit > Topic hierarchy.','Every topic must contain a problems array with 2 to 4 representative college-level mathematics problems.','Shape: {"hierarchy":{"id":"...","type":"programme","title":"...","children":[{"id":"...","type":"semester","title":"...","children":[{"id":"...","type":"subject","title":"...","children":[{"id":"...","type":"unit","title":"...","children":[{"id":"...","type":"topic","title":"...","problems":["..."],"children":[]}]}]}]}]}}.','Use stable lowercase-hyphen IDs.','Detect the language of the supplied syllabus and keep every human-readable hierarchy title and representative problem in that same source language. Do not mix languages. Keep JSON keys and mathematical notation unchanged.','Syllabus:',syllabus].join('\n');
          })();
          stepResults["structure_prompt"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "structure_prompt" };
        vars.error = error; stepResults["structure_prompt"] = { error };
        _setState("isGeneratingStructure", false);
        await refreshStudioControls({  });
        _setState("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.structure_prompt }}"}, roots) || {};
          const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtma35xb000604jo2mif8zbl", apiId: "geminiCurriculumStructure", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
          const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["structure_api"] = result; vars["apiResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "structure_api" };
        vars.error = error; stepResults["structure_api"] = { error };
        _setState("isGeneratingStructure", false);
        await refreshStudioControls({  });
        _setState("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const r=stepResults.structure_api||{},parts=r?.candidates?.[0]?.content?.parts,raw=Array.isArray(parts)?parts.map(x=>String(x?.text||'')).join(''):'';if(!raw.trim())throw new Error('Gemini returned no curriculum structure.');const o=JSON.parse(raw.trim().replace(/^\`\`\`(?:json)?\s*/i,'').replace(/\s*\`\`\`$/,'')),types=['programme','semester','subject','unit','topic'],slug=(v,f)=>String(v||f).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80)||f,norm=(v,d=0,f='item')=>{if(!v||typeof v!=='object'||d>4)return null;const title=String(v.title||'').trim().slice(0,180);if(!title)return null;const type=types[Math.min(d,4)],children=Array.isArray(v.children)?v.children.slice(0,16).map((c,i)=>norm(c,d+1,type+'-'+i)).filter(Boolean):[],problems=type==='topic'&&Array.isArray(v.problems)?v.problems.map(String).map(x=>x.trim()).filter(Boolean).slice(0,8):[];return{id:slug(v.id||title,f),type,title,children,...(type==='topic'?{problems:problems.length?problems:['Create a worked example for '+title+'.','Add one conceptual verification question for '+title+'.','Add one examination-style application problem for '+title+'.']}: {})}};const hierarchy=norm(o.hierarchy||o,0,'programme');if(!hierarchy)throw new Error('Gemini returned an invalid hierarchy.');const tree=(n,path=[])=>{const next=[...path,n.id];return{id:n.id,label:n.type[0].toUpperCase()+n.type.slice(1)+' · '+n.title,data:{type:n.type,title:n.title,path:next.join('/'),problems:n.problems||[]},children:n.children.map(c=>tree(c,next))}};return{hierarchy,items:[tree(hierarchy)]};
          })();
          stepResults["structure_parse"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "structure_parse" };
        vars.error = error; stepResults["structure_parse"] = { error };
        _setState("isGeneratingStructure", false);
        await refreshStudioControls({  });
        _setState("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept.");
        return { "ok": false };
        return undefined;
      }
      _setState("finalHierarchy", stepResults.structure_parse.hierarchy);
      _setState("hierarchyItems", stepResults.structure_parse.items);
      _setState("selectedHierarchyIds", []);
      _setState("hasSelectedTopic", false);
      _setState("showSyllabusSetup", false);
      _setState("isSyllabusSetupCollapsed", true);
      _setState("isGeneratingStructure", false);
      await refreshStudioControls({  });
      _setState("structureStatus", "Hierarchy ready. Select a Topic to view its problems.");
      try {
        await _emitOutput("aiStructureGenerated", { "hierarchy": stepResults.structure_parse.hierarchy, "languageCode": inputs.locale }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "structure_generated" };
        vars.error = error; stepResults["structure_generated"] = { error };
        _setState("isGeneratingStructure", false);
        await refreshStudioControls({  });
        _setState("structureStatus", "Unable to propose a valid hierarchy. Check the syllabus and retry. Your existing hierarchy has been kept.");
        return { "ok": false };
        return undefined;
      }
      return stepResults.structure_parse;
    }
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

  async function loadProfessorSyllabi(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isLoadingSyllabi", true);
    await refreshStudioControls({  });
    try {
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
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "syllabi_query" };
      vars.error = error; stepResults["syllabi_query"] = { error };
      _setState("isLoadingSyllabi", false);
      await refreshStudioControls({  });
      _setState("syllabusStatus", "Saved syllabi could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const rows=Array.isArray(stepResults.syllabi_query)?stepResults.syllabi_query:[];
return rows.map(row=>({label:String(row.label||row.title||'Untitled syllabus'),value:String(row.value||row.id||'')})).filter(x=>x.value);
        })();
        stepResults["syllabi_parse"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "syllabi_parse" };
      vars.error = error; stepResults["syllabi_parse"] = { error };
      _setState("isLoadingSyllabi", false);
      await refreshStudioControls({  });
      _setState("syllabusStatus", "Saved syllabi could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    _setState("savedSyllabusOptions", stepResults.syllabi_parse);
    _setState("isLoadingSyllabi", false);
    await refreshStudioControls({  });
    return stepResults.syllabi_parse;
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
    await refreshStudioControls({  });
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

  async function loadTopicProblems(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
if(!state.selectedSyllabusId || !state.savedContextKey) throw new Error('Save this syllabus first so its lessons have a stable course identity.');
const root=state.finalHierarchy&&state.finalHierarchy.id?String(state.finalHierarchy.id):'context';return{contextKey:String(state.savedContextKey),versionNumber:Number(state.savedSyllabusVersion),locale:String(inputs.locale||'en')};
        })();
        stepResults["topic_problem_context"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "topic_problem_context" };
      vars.error = error; stepResults["topic_problem_context"] = { error };
      _setState("structureStatus", "Topic problems could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
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
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "topic_problem_query" };
      vars.error = error; stepResults["topic_problem_query"] = { error };
      _setState("structureStatus", "Topic problems could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const rows=Array.isArray(stepResults.topic_problem_query)?stepResults.topic_problem_query:[],stored=rows.map(r=>String(r&&r.statement||'').trim()).filter(Boolean),fallback=Array.isArray(args.fallbackProblems)?args.fallbackProblems.map(String):[],problems=[...new Set(stored.length?stored:fallback)],items=problems.map((text,i)=>({id:String(args.topicId)+'-problem-'+(i+1),label:(i+1)+'. '+text,data:{type:'problem',topicId:String(args.topicId),text,stored:stored.length>0}}));return{problems,items,source:stored.length?'database':'hierarchy'};
        })();
        stepResults["topic_problem_merge"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "topic_problem_merge" };
      vars.error = error; stepResults["topic_problem_merge"] = { error };
      _setState("structureStatus", "Topic problems could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    _setState("selectedTopicProblems", stepResults.topic_problem_merge.problems);
    _setState("selectedTopicProblemItems", stepResults.topic_problem_merge.items);
    _setState("structureStatus", stepResults.topic_problem_merge.source === 'database' ? 'Stored problems loaded for this Topic.' : 'Proposed problems shown. Select one to save its generated solution.');
    return stepResults.topic_problem_merge;
    return undefined;
  }

  async function saveProfessorSyllabus(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if ((function studioControlState(state) {
  const busy = !!(state.isSavingSyllabus || state.isGeneratingStructure || state.isResolvingProblem || state.isSavingStrategy || state.isLoadingSyllabi || state.isOpeningSyllabus);
  const unavailable = state.canUseStudio !== true || busy;
  const saved = !!(state.selectedSyllabusId && state.savedSyllabusKey && state.savedContextKey && Number.isInteger(state.savedSyllabusVersion) && state.savedSyllabusVersion > 0);
  return {
    busy, unavailable,
    previewDisabled: unavailable || !saved || !state.hasProblemSolution || !state.savedProblemId,
    versionDisabled: unavailable || !saved || state.savedSyllabusVersion >= 100000,
    lessonEmpty: !state.isResolvingProblem && !state.hasProblemSolution,
  };
})(state).unavailable) {
      return { "ok": false, "reason": "studio_unavailable" };
    } else {
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
return (function prepareSyllabus(args, inputs, state) {
  if (!state.canUseStudio) throw new Error('Verified educator access is required.');
  const title = String(state.syllabusTitle || '').trim(), text = String(state.syllabusDraftText || '').trim();
  if (!title || title.length > 180 || !text || text.length > 100000) throw new Error('Provide a title and syllabus text within the supported limits.');
  const hierarchy = state.finalHierarchy;
  const problems = [], ids = new Set(); let nodes = 0;
  const walk = (node, path = [], depth = 0) => {
    if (!node || typeof node !== 'object' || depth > 4 || ++nodes > 500 || !/^[a-z0-9][a-z0-9-]{0,79}$/.test(node.id || '') || !String(node.title || '').trim()) throw new Error('Generate a valid hierarchy before saving.');
    const next = [...path, node.id], full = next.join('/');
    if (ids.has(full)) throw new Error('Hierarchy paths must be unique.'); ids.add(full);
    if (node.type === 'topic') for (const raw of Array.isArray(node.problems) ? node.problems : []) {
      const statement = String(raw || '').trim();
      if (!statement || statement.length > 16000) throw new Error('Invalid topic problem.');
      problems.push({ topicId: node.id, topicPath: full, statement, normalized: statement.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim() });
    }
    for (const child of Array.isArray(node.children) ? node.children : []) walk(child, next, depth + 1);
  };
  walk(hierarchy);
  if (!problems.length || problems.length > 500) throw new Error('Add 1–500 topic problems before saving.');
  let hash = 2166136261; for (const character of title.normalize('NFKC')) hash = Math.imul(hash ^ character.codePointAt(0), 16777619) >>> 0;
  const syllabusKey = String(state.savedSyllabusKey || ('course-' + hash.toString(36)));
  const versionNumber = Number(state.savedSyllabusVersion || inputs.contextVersionNumber || 1);
  if (!Number.isInteger(versionNumber) || versionNumber < 1 || versionNumber > 100000) throw new Error('Invalid course version.');
  const status = args.status === 'published' ? 'published' : 'draft';
  return { title, text, syllabusKey, versionNumber, description: String(state.syllabusDescription || '').trim(), languageCode: ['en','hi','ta'].includes(inputs.locale) ? inputs.locale : 'en', hierarchy, problems, status, visibility: status === 'published' ? 'public' : 'private' };
})(args,inputs,state);
          })();
          stepResults["save_syllabus_prepare"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "save_syllabus_prepare" };
        vars.error = error; stepResults["save_syllabus_prepare"] = { error };
        _setState("isSavingSyllabus", false);
        await refreshStudioControls({  });
        _setState("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing.");
        return { "ok": false };
        return undefined;
      }
      _setState("isSavingSyllabus", true);
      await refreshStudioControls({  });
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"description":"{{ stepResults.save_syllabus_prepare.description }}","hierarchy":"{{ stepResults.save_syllabus_prepare.hierarchy }}","languageCode":"{{ stepResults.save_syllabus_prepare.languageCode }}","problems":"{{ stepResults.save_syllabus_prepare.problems }}","status":"{{ stepResults.save_syllabus_prepare.status }}","syllabusKey":"{{ stepResults.save_syllabus_prepare.syllabusKey }}","syllabusText":"{{ stepResults.save_syllabus_prepare.text }}","title":"{{ stepResults.save_syllabus_prepare.title }}","userIdentity":"","versionNumber":"{{ stepResults.save_syllabus_prepare.versionNumber }}","visibility":"{{ stepResults.save_syllabus_prepare.visibility }}"}, roots) || {};
          delete namedParameters["userIdentity"];
          const parameters = [undefined, namedParameters["syllabusKey"], namedParameters["versionNumber"], namedParameters["title"], namedParameters["description"], namedParameters["languageCode"], namedParameters["syllabusText"], namedParameters["hierarchy"], namedParameters["status"], namedParameters["visibility"], namedParameters["problems"]];
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
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "save_syllabus_query" };
        vars.error = error; stepResults["save_syllabus_query"] = { error };
        _setState("isSavingSyllabus", false);
        await refreshStudioControls({  });
        _setState("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const rows=stepResults.save_syllabus_query; const result=Array.isArray(rows)?rows[0]?.result:null; if(!result?.id || !result.contextKey) throw new Error('The version is immutable or could not be saved. Start a new version.'); return result;
          })();
          stepResults["save_syllabus_result"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "save_syllabus_result" };
        vars.error = error; stepResults["save_syllabus_result"] = { error };
        _setState("isSavingSyllabus", false);
        await refreshStudioControls({  });
        _setState("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing.");
        return { "ok": false };
        return undefined;
      }
      _setState("selectedSyllabusId", stepResults.save_syllabus_result.id);
      await refreshStudioControls({  });
      _setState("savedSyllabusKey", stepResults.save_syllabus_result.key);
      await refreshStudioControls({  });
      _setState("savedSyllabusVersion", stepResults.save_syllabus_result.versionNumber);
      await refreshStudioControls({  });
      _setState("savedContextKey", stepResults.save_syllabus_result.contextKey);
      await refreshStudioControls({  });
      _setState("syllabusStatus", stepResults.save_syllabus_prepare.status === 'published' ? 'Published for students under this professor.' : 'Syllabus draft saved.');
      try {
        await loadProfessorSyllabi({  });
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "save_syllabus_refresh" };
        vars.error = error; stepResults["save_syllabus_refresh"] = { error };
        _setState("isSavingSyllabus", false);
        await refreshStudioControls({  });
        _setState("syllabusStatus", "Save failed. Your draft is preserved. Published versions are read-only: start a new version before editing.");
        return { "ok": false };
        return undefined;
      }
      _setState("isSavingSyllabus", false);
      await refreshStudioControls({  });
      return stepResults.save_syllabus_result;
    }
    return undefined;
  }

  async function editStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
return (function steerProfessorStrategy(args, state) {
  const draft = structuredClone(state.strategyDraft || {});
  const steps = Array.isArray(state.blackboardLesson?.steps) ? state.blackboardLesson.steps : [];
  const selected = args.stepId ? steps.find((step) => step.id === args.stepId) : steps[Number(state.activeStep || 0)];
  if (!selected?.id || !String(selected.title || '').trim()) throw new Error('Select a real lesson step before editing the strategy.');
  const operation = String(args.operation || 'keep');
  if (!['keep', 'remove', 'annotate'].includes(operation)) throw new Error('Unsupported strategy edit.');
  const step = String(selected.title).trim();
  for (const key of ['requiredSteps', 'forbiddenShortcuts', 'teachingNotes']) draft[key] = Array.isArray(draft[key]) ? draft[key].map(String) : [];
  if (operation === 'keep' && !draft.requiredSteps.includes(step)) draft.requiredSteps.push(step);
  if (operation === 'remove') {
    draft.requiredSteps = draft.requiredSteps.filter((entry) => entry !== step);
    const note = 'Avoid this step when it is unnecessary: ' + step;
    if (!draft.forbiddenShortcuts.includes(note)) draft.forbiddenShortcuts.push(note);
  }
  if (operation === 'annotate') {
    const note = String(args.note || '').trim();
    if (!note || note.length > 2000) throw new Error('Provide a teaching note of 1–2000 characters.');
    const contextualNote = step + ': ' + note;
    if (!draft.teachingNotes.includes(contextualNote)) draft.teachingNotes.push(contextualNote);
  }
  const text = [
    'Preferred method\n' + String(draft.preferredMethod || 'Professor-guided method'),
    'Required steps\n' + draft.requiredSteps.map((entry, index) => (index + 1) + '. ' + entry).join('\n'),
    'Avoid\n' + draft.forbiddenShortcuts.map((entry) => '• ' + entry).join('\n'),
    'Verification\n' + (Array.isArray(draft.verificationRules) ? draft.verificationRules : []).map((entry) => '• ' + entry).join('\n'),
    'Teaching notes\n' + draft.teachingNotes.map((entry) => '• ' + entry).join('\n'),
  ].join('\n\n');
  return { draft, text, operation, step, stepId: selected.id };
})(args,state);
        })();
        stepResults["strategy_edit"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "strategy_edit" };
      vars.error = error; stepResults["strategy_edit"] = { error };
      _setState("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy.");
      return { "ok": false };
      return undefined;
    }
    _setState("strategyDraft", stepResults.strategy_edit.draft);
    _setState("strategyDraftText", stepResults.strategy_edit.text);
    _setState("strategyStatus", "Strategy draft updated from the representative solution. Approve it to create a new version.");
    try {
      await _emitOutput("stepOperationRequested", { "note": args.note || '', "operation": args.operation, "stepId": stepResults.strategy_edit.stepId }, true);
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "edit_emit" };
      vars.error = error; stepResults["edit_emit"] = { error };
      _setState("strategyStatus", "Select a valid lesson step and provide a teaching note before updating the strategy.");
      return { "ok": false };
      return undefined;
    }
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

  async function refreshStudioControls(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return (function studioControlState(state) {
  const busy = !!(state.isSavingSyllabus || state.isGeneratingStructure || state.isResolvingProblem || state.isSavingStrategy || state.isLoadingSyllabi || state.isOpeningSyllabus);
  const unavailable = state.canUseStudio !== true || busy;
  const saved = !!(state.selectedSyllabusId && state.savedSyllabusKey && state.savedContextKey && Number.isInteger(state.savedSyllabusVersion) && state.savedSyllabusVersion > 0);
  return {
    busy, unavailable,
    previewDisabled: unavailable || !saved || !state.hasProblemSolution || !state.savedProblemId,
    versionDisabled: unavailable || !saved || state.savedSyllabusVersion >= 100000,
    lessonEmpty: !state.isResolvingProblem && !state.hasProblemSolution,
  };
})(state);
      })();
      stepResults["studio_controls_read"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("studioControls", stepResults.studio_controls_read);
    return undefined;
  }

  async function setNewProblemText(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("newProblemText", args.value);
    return undefined;
  }

  async function setSyllabusTitle(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusTitle", args.value);
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
    await refreshStudioControls({  });
    _setState("showAccessGate", !stepResults.prof_access_derive.canUseStudio);
    _setState("accessGateTitle", stepResults.prof_access_derive.title);
    _setState("accessGateMessage", stepResults.prof_access_derive.message);
    _setState("accessBadgeLabel", stepResults.prof_access_derive.badgeLabel);
    return stepResults.prof_access_derive;
    return undefined;
  }

  async function startNextSyllabusVersion(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if ((function studioControlState(state) {
  const busy = !!(state.isSavingSyllabus || state.isGeneratingStructure || state.isResolvingProblem || state.isSavingStrategy || state.isLoadingSyllabi || state.isOpeningSyllabus);
  const unavailable = state.canUseStudio !== true || busy;
  const saved = !!(state.selectedSyllabusId && state.savedSyllabusKey && state.savedContextKey && Number.isInteger(state.savedSyllabusVersion) && state.savedSyllabusVersion > 0);
  return {
    busy, unavailable,
    previewDisabled: unavailable || !saved || !state.hasProblemSolution || !state.savedProblemId,
    versionDisabled: unavailable || !saved || state.savedSyllabusVersion >= 100000,
    lessonEmpty: !state.isResolvingProblem && !state.hasProblemSolution,
  };
})(state).versionDisabled) {
      return { "ok": false, "reason": "studio_unavailable" };
    } else {
      _setState("contentPreviewPacket", {  });
      _setState("savedSyllabusVersion", Math.max(1, Number(state.savedSyllabusVersion || inputs.contextVersionNumber || 1)) + 1);
      await refreshStudioControls({  });
      _setState("selectedSyllabusId", "");
      await refreshStudioControls({  });
      _setState("savedContextKey", "");
      await refreshStudioControls({  });
      _setState("savedProblemId", "");
      await refreshStudioControls({  });
      _setState("hasProblemSolution", false);
      await refreshStudioControls({  });
      _setState("syllabusStatus", "New version prepared. Save it before resolving or previewing lessons.");
    }
    return undefined;
  }

  async function selectStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return (function readStudentStep(args, state) {
  const steps = Array.isArray(state.studentLesson?.steps) ? state.studentLesson.steps : [];
  const event = args.event ?? args.stepIndex ?? args.index ?? 0;
  const requested = Number(typeof event === 'object' ? event?.nextIndex ?? event?.index : event);
  const index = Math.max(0, Math.min(Math.max(0, steps.length - 1), Number.isFinite(requested) ? Math.floor(requested) : 0));
  const q = steps[index]?.teacherQuestion || {};
  const previous = Number(state.progressPercent);
  const progress = Math.max(Number.isFinite(previous) ? Math.min(100, Math.max(0, previous)) : 0, steps.length ? Math.round(((index + 1) / steps.length) * 100) : 0);
  return { index, stepId: String(steps[index]?.id || ''), prompt: String(q.prompt || ''), options: Array.isArray(q.options) ? q.options : [], correctValue: String(q.correctValue || ''), explanation: String(q.explanation || ''), progress, completed: progress === 100 };
})(args,{studentLesson:state.blackboardLesson,progressPercent:0});
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

  async function setSyllabusText(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusDraftText", args.value || '');
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

  async function setSyllabusDescription(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("syllabusDescription", args.value);
    return undefined;
  }

  const _localActions = {
    "selectProblem": selectProblem,
    "refreshProfessorScenario": refreshProfessorScenario,
    "addProblems": addProblems,
    "setHierarchyContext": setHierarchyContext,
    "shareLesson": shareLesson,
    "loadContextStrategy": loadContextStrategy,
    "selectSavedSyllabus": selectSavedSyllabus,
    "syncSyllabusInput": syncSyllabusInput,
    "prepareContentPreview": prepareContentPreview,
    "closeNewProblemForm": closeNewProblemForm,
    "setNewProblemSolutionMode": setNewProblemSolutionMode,
    "publishContext": publishContext,
    "resolveProblemSolution": resolveProblemSolution,
    "collapseSyllabusSetup": collapseSyllabusSetup,
    "requestStructure": requestStructure,
    "submitNewProblem": submitNewProblem,
    "loadProfessorSyllabi": loadProfessorSyllabi,
    "openNewProblemForm": openNewProblemForm,
    "selectHierarchyNode": selectHierarchyNode,
    "loadTopicProblems": loadTopicProblems,
    "saveProfessorSyllabus": saveProfessorSyllabus,
    "editStep": editStep,
    "selectTeacherAnswer": selectTeacherAnswer,
    "refreshStudioControls": refreshStudioControls,
    "setNewProblemText": setNewProblemText,
    "setSyllabusTitle": setSyllabusTitle,
    "initializeProfessorAccess": initializeProfessorAccess,
    "startNextSyllabusVersion": startNextSyllabusVersion,
    "selectStep": selectStep,
    "setSyllabusText": setSyllabusText,
    "expandSyllabusSetup": expandSyllabusSetup,
    "setSyllabusDescription": setSyllabusDescription,
  };
  const _localActionArguments = {
    "selectProblem": ["item", "index", "depth"],
    "refreshProfessorScenario": [],
    "addProblems": [],
    "setHierarchyContext": [],
    "shareLesson": [],
    "loadContextStrategy": ["topicPath", "topicTitle"],
    "selectSavedSyllabus": ["value"],
    "syncSyllabusInput": [],
    "prepareContentPreview": [],
    "closeNewProblemForm": [],
    "setNewProblemSolutionMode": ["value"],
    "publishContext": [],
    "resolveProblemSolution": ["statement", "solutionMode"],
    "collapseSyllabusSetup": [],
    "requestStructure": [],
    "submitNewProblem": [],
    "loadProfessorSyllabi": [],
    "openNewProblemForm": [],
    "selectHierarchyNode": ["item", "index", "depth"],
    "loadTopicProblems": ["topicPath", "topicId", "fallbackProblems"],
    "saveProfessorSyllabus": ["status"],
    "editStep": ["operation", "stepId", "note"],
    "selectTeacherAnswer": ["value"],
    "refreshStudioControls": [],
    "setNewProblemText": ["value"],
    "setSyllabusTitle": ["value"],
    "initializeProfessorAccess": [],
    "startNextSyllabusVersion": [],
    "selectStep": ["event", "stepIndex", "index"],
    "setSyllabusText": ["value"],
    "expandSyllabusSetup": [],
    "setSyllabusDescription": ["value"],
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
    set_savedSyllabusKey(structuredClone(""));
    set_savedSyllabusVersion(structuredClone(0));
    set_savedContextKey(structuredClone(""));
    set_savedProblemId(structuredClone(""));
    set_contentPreviewPacket(structuredClone({}));
    void _runLifecycle("professor_scenario_inputsrefreshProfessorScenario", "takeLatest", (signal) => refreshProfessorScenario({ signal }), 'Module input lifecycle failed:');
  }, [accessProfile, userRole, authenticated, contextDraft, contextVersionNumber, contextVersionKey, locale, returnPath, verificationStatus, syllabusText]);
  const _inputLifecycleMounted1 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted1.current) { _inputLifecycleMounted1.current = true; }
    void _runLifecycle("studio_controls_inputsrefreshStudioControls", "takeLatest", (signal) => refreshStudioControls({ signal }), 'Module input lifecycle failed:');
  }, [authenticated, accessProfile, userRole, verificationStatus]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="root" className="block rs-studio">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="inner" className="flex flex-col rs-studio-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="head" className="flex flex-wrap rs-studio-head">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="head_copy" className="flex flex-col rs-head-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="badge" label={((_bindingValue) => _bindingValue === undefined ? "Verification pending" : _bindingValue)(accessBadgeLabel)} ariaLabel="Professor verification status" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className="rs-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Professor context studio" : _bindingValue)(_scope?.i18n?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subtitle" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Import a semester and steer representative solutions." : _bindingValue)(_scope?.i18n?.subtitle)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(showAccessGate) && (<>      <RudraCoreAlert id="verification" title={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="verification_title" content={((_bindingValue) => _bindingValue === undefined ? "Professor approval required" : _bindingValue)(accessGateTitle)} as="h4" />
</>)}
</>} icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="verification_icon" className="rs-verification-icon" as="span" content="!" />
</>)}
</>} variant="warning" appearance="soft" live="polite">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="verification_message" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Sign in with an approved professor account to use this studio." : _bindingValue)(accessGateMessage)} />
</>)}
</RudraCoreAlert>
</>)}
      {isVisibleValue(canUseStudio) && (<>      <RudraLayoutBox id="grid" className="grid rs-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="left" className="rs-panel" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="syllabus_catalog" className="block rs-syllabus-catalog">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="syllabus_catalog_title" as="h4" content="Your saved syllabi" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormSelect id="saved_syllabus_select" placeholder="Select a syllabus" onChangeValue={(...eventArgs) => _callAction("selectSavedSyllabus", {}, eventArgs)} name="savedSyllabus" size="md" label="Continue with a saved syllabus" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(selectedSyllabusId)} disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.unavailable)} radius="md" options={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(savedSyllabusOptions)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="refresh_syllabi" className="rs-studio-action" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isLoadingSyllabi)} onAction={(...eventArgs) => _callAction("loadProfessorSyllabi", {}, eventArgs)} loadingText="Loading syllabi…" label="Refresh syllabi" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isLoadingSyllabi)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="save_syllabus_draft" className="rs-studio-action" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.unavailable)} onAction={(...eventArgs) => _callAction("saveProfessorSyllabus", {"status": "draft"}, eventArgs)} loadingText="Saving syllabus…" label="Save current syllabus" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSavingSyllabus)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="publish_syllabus_students" className="rs-studio-action" variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.unavailable)} onAction={(...eventArgs) => _callAction("saveProfessorSyllabus", {"status": "published"}, eventArgs)} loadingText="Publishing syllabus…" label="Publish current syllabus for students" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSavingSyllabus)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="syllabus_catalog_status" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select a saved syllabus or save this draft." : _bindingValue)(syllabusStatus)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraLayoutBox id="syllabus_metadata" className="block rs-syllabus-metadata">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormInput id="syllabus_title_input" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(studioControls?.busy)} required={true} placeholder="Engineering Mathematics I" onChangeValue={(...eventArgs) => _callAction("setSyllabusTitle", {}, eventArgs)} name="syllabusTitle" size="md" label="Syllabus title" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(syllabusTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormTextarea id="syllabus_description_input" placeholder="What students will learn" onChangeValue={(...eventArgs) => _callAction("setSyllabusDescription", {}, eventArgs)} name="syllabusDescription" rows={3} label="Description" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(syllabusDescription)} disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(studioControls?.busy)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraCoreTypography id="left_title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Semester syllabus" : _bindingValue)(_scope?.i18n?.import)} />
</>)}
      {isVisibleValue(isSyllabusSetupCollapsed) && (<>      <RudraCoreButton id="edit_syllabus_setup" className="rs-studio-action" label="Edit syllabus / Regenerate" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("expandSyllabusSetup", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="structure_status" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Review the proposed hierarchy, add problems, then set it as context." : _bindingValue)(structureStatus)} />
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraFormTextarea id="syllabus" name="syllabus" rows={10} label="Paste one section or a complete semester" value={((_bindingValue) => _bindingValue === undefined ? "Semester 1 · Linear Algebra\nUnit 1: Matrices and systems\nUnit 2: Vector spaces\nUnit 3: Eigenvalues and diagonalisation" : _bindingValue)(syllabusDraftText)} disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(studioControls?.busy)} helperText="AI proposes programme → semester → subject → unit → topic. You approve before anything is saved." onChangeValue={(...eventArgs) => _callAction("setSyllabusText", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreAlert id="rules" variant="info" appearance="outlined" live="off" title="Reusable context draft">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="studio_rules_body" content={((_bindingValue) => _bindingValue === undefined ? "Save your syllabus, review a lesson, and approve the teaching strategy before publishing." : _bindingValue)(strategyDraftText)} as="p" />
</>)}
</RudraCoreAlert>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="final_hierarchy_title" as="h3" content="Final hierarchy" />
</>)}
      {isVisibleValue(showSyllabusSetup) && (<>      <RudraLayoutBox id="syllabus_actions" className="flex flex-wrap rs-syllabus-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="structure" className="rs-studio-action" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isGeneratingStructure)} variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.unavailable)} onAction={(...eventArgs) => _callAction("requestStructure", {}, eventArgs)} loadingText="Generating hierarchy…" label="Propose structure with AI" theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="collapse_syllabus_setup" className="rs-studio-action" onAction={(...eventArgs) => _callAction("collapseSyllabusSetup", {}, eventArgs)} label="Hide setup" theme="auto" variant="ghost" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsTreeView id="tree" className="w-full rs-tree-view" items={((_bindingValue) => _bindingValue === undefined ? [{ "children": [{ "children": [{ "children": [{ "children": [{ "children": [], "data": { "problems": ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], "title": "Matrix operations", "type": "topic" }, "id": "matrix-operations", "label": "Topic · Matrix operations" }, { "children": [], "data": { "problems": ["Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", "Determine whether three supplied vectors are linearly independent.", "Diagonalise A = [[4, 1], [2, 3]] and verify the result."], "title": "Eigenvalues and diagonalisation", "type": "topic" }, "id": "eigenvalues", "label": "Topic · Eigenvalues and diagonalisation" }], "data": { "problems": [], "title": "Unit 1 · Matrices and systems", "type": "unit" }, "id": "matrices", "label": "Unit · Unit 1 · Matrices and systems" }], "data": { "problems": [], "title": "Engineering Mathematics I", "type": "subject" }, "id": "engineering-mathematics-i", "label": "Subject · Engineering Mathematics I" }], "data": { "problems": [], "title": "Semester 1", "type": "semester" }, "id": "semester-1", "label": "Semester · Semester 1" }], "data": { "problems": [], "title": "B.E. Mathematics", "type": "programme" }, "id": "engineering-mathematics", "label": "Programme · B.E. Mathematics" }] : _bindingValue)(hierarchyItems)} selectedIds={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedHierarchyIds)} selectionMode="single" showDefaultIcons={true} indent={22} showLines={true} onItemClick={(...eventArgs) => _callAction("selectHierarchyNode", {}, eventArgs)} defaultExpandAll={true} expandOnItemClick={true}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      <RudraCoreTypography id="hierarchy_item_label" className="rs-tree-label-text" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Untitled item" : _bindingValue)(_scope?.item?.label)} />
</>); })(); }}</RudraWidgetsTreeView>
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraCoreTypography id="problems_title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "Selected topic problems" : _bindingValue)(selectedTopicHeading)} />
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraWidgetsTreeView id="problems_text" className="rs-problem-list" showLines={false} onItemClick={(...eventArgs) => _callAction("selectProblem", {}, eventArgs)} selectedIds={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedProblemIds)} defaultExpandAll={true} showDefaultIcons={true} expandOnItemClick={true} items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedTopicProblemItems)} emptyText="No problems yet. Use Add problems to create examples." selectionMode="single" indent={20}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      <RudraCoreTypography id="problem_item_label" className="rs-tree-label-text" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Untitled item" : _bindingValue)(_scope?.item?.label)} />
</>); })(); }}</RudraWidgetsTreeView>
</>)}
      {isVisibleValue(showNewProblemForm) && (<>      <RudraLayoutBox id="new_problem_form" className="block rs-new-problem-form">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="new_problem_title" as="h4" content="Add a context-scoped problem" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormTextarea id="new_problem_input" label="Problem statement" onChangeValue={(...eventArgs) => _callAction("setNewProblemText", {}, eventArgs)} value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(newProblemText)} disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(studioControls?.busy)} required={true} autoResize={true} placeholder="Enter a new problem for the selected topic" name="newProblem" rows={5} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormSelect id="new_problem_mode" onChangeValue={(...eventArgs) => _callAction("setNewProblemSolutionMode", {}, eventArgs)} name="solutionMode" size="md" label="Solution style" value={((_bindingValue) => _bindingValue === undefined ? "detailed" : _bindingValue)(newProblemSolutionMode)} radius="md" options={[{"label":"Detailed steps","value":"detailed"},{"label":"Quick solution","value":"quick"}]} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="new_problem_actions" className="flex flex-wrap rs-new-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="save_new_problem" className="rs-studio-action" loadingText="Checking saved solutions…" label="Find or generate solution" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isResolvingProblem)} variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isResolvingProblem)} onAction={(...eventArgs) => _callAction("submitNewProblem", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="cancel_new_problem" className="rs-studio-action" label="Cancel" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("closeNewProblemForm", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(hasProblemSolution) && (<>      <RudraLayoutBox id="problem_solution_panel" className="block rs-problem-solution">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_solution_text" className="rs-problem-solution-text" as="div" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(problemSolutionText)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraLayoutBox id="hierarchy_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="add_problems" className="rs-studio-action" variant="outline" onAction={(...eventArgs) => _callAction("openNewProblemForm", {}, eventArgs)} label="Add new problem" theme="auto" />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="right" className="rs-panel" as="section" theme="auto">      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.lessonEmpty)) && (<>      <RudraCoreTypography id="studio_lesson_empty" className="rs-studio-contract-note" as="p" content="Save your syllabus, select a topic, then choose or add a problem to review its lesson." />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(problemResolutionStatus)) && (<>      <RudraCoreTypography id="problem_solution_status" className="rs-solution-source" as="p" role="status" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(problemResolutionStatus)} aria-live="polite" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="right_title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Steer a representative solution" : _bindingValue)(_scope?.i18n?.board)} />
</>)}
      {isVisibleValue(isResolvingProblem) && (<>      <RudraLayoutBox id="board_loading" className="flex rs-board-loading">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="board_loading_indicator" className="rs-loading-orb" as="span" content="" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="board_loading_text" as="p" content="Loading the saved solution or generating a new lesson…" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(hasProblemSolution)) && (<>      <ChalkmindMathBlackboardLesson id="board" learningGoal={((_bindingValue) => _bindingValue === undefined ? "Form the characteristic equation, solve it and verify the eigenvalues." : _bindingValue)(blackboardLearningGoal)} problemLabel={((_bindingValue) => _bindingValue === undefined ? "Representative problem · Linear algebra" : _bindingValue)(blackboardProblemLabel)} stepDurationMs={5500} boardOptions={{"animateCurrentStepOnly":true,"clearFutureSteps":false,"preserveRevealedSteps":true,"writingEffect":true}} showStepPopup={true} lessonKind={((_bindingValue) => _bindingValue === undefined ? "worked-example" : _bindingValue)(blackboardLesson?.lessonKind)} speedLabel="Normal" autoAdvance={true} editOperations={[]} captionsEnabled={true} problemStatement={((_bindingValue) => _bindingValue === undefined ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : _bindingValue)(blackboardProblemStatement)} onStepSelect={(...eventArgs) => _callAction("selectStep", {}, eventArgs)} popupInitiallyOpen={false} reducedMotion={false} steps={((_bindingValue) => _bindingValue === undefined ? [{ "content": [{ "label": "Given", "latex": "A=\\begin{bmatrix}2\u00261\\\\1\u00262\\end{bmatrix}", "type": "equation", "visualText": "A = [[2, 1], [1, 2]]" }, { "term": "Eigenvalue", "text": "A scalar λ for which Av = λv for some non-zero vector v.", "type": "definition" }], "explanation": "For a square matrix A, eigenvalues satisfy det(A minus lambda I) equals zero.", "id": "classify", "narration": "First identify the matrix and the required eigenvalue equation.", "teacherPrompt": "What size identity matrix is required here?", "teacherQuestion": { "correctValue": "b", "explanation": "A is a 2 × 2 matrix, so I must have the same dimensions.", "options": [{ "label": "1 × 1", "value": "a" }, { "label": "2 × 2", "value": "b" }, { "label": "2 × 3", "value": "c" }, { "label": "3 × 3", "value": "d" }], "prompt": "What size identity matrix is required here?" }, "title": "Classify the system", "why": "This converts a matrix question into a polynomial equation." }, { "content": [{ "label": "Characteristic determinant", "latex": "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", "type": "equation", "visualText": "det(A − λI) = (2 − λ)² − 1 = 0" }, { "latex": "\\lambda^2-4\\lambda+3=0", "type": "equation", "visualText": "λ² − 4λ + 3 = 0" }], "explanation": "The determinant is (2 minus lambda) squared minus one.", "id": "determinant", "narration": "Subtract lambda on the diagonal, then compute the determinant.", "teacherPrompt": "Why is the off-diagonal product equal to one?", "teacherQuestion": { "correctValue": "a", "explanation": "The off-diagonal entries are both 1, so their product is 1.", "options": [{ "label": "Because 1 × 1 = 1", "value": "a" }, { "label": "Because 2 − λ = 1", "value": "b" }, { "label": "Because det(A) = 1", "value": "c" }, { "label": "Because λ is always 1", "value": "d" }], "prompt": "Why is the off-diagonal product equal to one?" }, "title": "Form the characteristic equation", "why": "A non-zero eigenvector exists only when A minus lambda I is singular." }, { "content": [{ "label": "Eigenvalues", "latex": "(\\lambda-1)(\\lambda-3)=0\\Rightarrow\\lambda=1,3", "type": "equation", "visualText": "(λ − 1)(λ − 3) = 0, so λ = 1 or 3" }, { "text": "Both values make det(A − λI) equal zero.", "tone": "success", "type": "note" }], "explanation": "The characteristic polynomial factors into lambda minus one times lambda minus three.", "id": "solve", "narration": "Factor the polynomial and verify each value.", "teacherPrompt": "Which eigenvalue corresponds to [1, 1]?", "teacherQuestion": { "correctValue": "d", "explanation": "A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.", "options": [{ "label": "−1", "value": "a" }, { "label": 0, "value": "b" }, { "label": 1, "value": "c" }, { "label": 3, "value": "d" }], "prompt": "Which eigenvalue corresponds to [1, 1]?" }, "title": "Solve and verify", "why": "Substitution verifies both determinant values are zero." }] : _bindingValue)(blackboardSteps)} title={((_bindingValue) => _bindingValue === undefined ? "Find the eigenvalues of a 2 × 2 matrix" : _bindingValue)(blackboardTitle)} onNext={(...eventArgs) => _callAction("selectStep", {}, eventArgs)} playing={false} activeStep={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(activeStep)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(hasProblemSolution)) && (<>      <RudraLayoutBox id="teacher_question_panel" className="block rs-teacher-question">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="teacher_question_title" className="rs-teacher-question-title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "What size identity matrix is required here?" : _bindingValue)(teacherQuestionPrompt)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormRadioGroup id="teacher_question_choices" label="Choose one answer" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(selectedTeacherAnswer)} layout="vertical" options={((_bindingValue) => _bindingValue === undefined ? [{ "label": "1 × 1", "value": "a" }, { "label": "2 × 2", "value": "b" }, { "label": "2 × 3", "value": "c" }, { "label": "3 × 3", "value": "d" }] : _bindingValue)(teacherQuestionOptions)} colorScheme="emerald" onChangeValue={(...eventArgs) => _callAction("selectTeacherAnswer", {}, eventArgs)} name="teacherAnswer" size="md" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="teacher_question_feedback" className="rs-teacher-question-feedback" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select one answer." : _bindingValue)(teacherAnswerFeedback)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(hasProblemSolution)) && (<>      <RudraLayoutBox id="steer_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="keep" className="rs-studio-action" label="Keep" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("editStep", {"operation": "keep"}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="remove" className="rs-studio-action" label="Remove" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("editStep", {"operation": "remove"}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="annotate" className="rs-studio-action" label="Add teaching note" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("editStep", {"note": "Explain why this step belongs in similar problems.", "operation": "annotate"}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(hasSelectedTopic) && (<>      <RudraLayoutBox id="strategy_panel" className="block rs-strategy-panel">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="strategy_title" as="h3" content="Teaching strategy for this Topic" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="strategy_status" className="rs-strategy-status" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(strategyStatus)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="strategy_text" className="rs-strategy-text" as="div" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(strategyDraftText)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="set_context" className="rs-studio-action" label="Approve strategy as context" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSavingStrategy)} variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSavingStrategy)} onAction={(...eventArgs) => _callAction("setHierarchyContext", {}, eventArgs)} loadingText="Saving strategy…" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="publish_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="next_syllabus_version" className="rs-studio-action" label="Start next version" theme="auto" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.versionDisabled)} onAction={(...eventArgs) => _callAction("startNextSyllabusVersion", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="studio_contract_note" className="rs-studio-contract-note" as="p" content="Save your syllabus, resolve and review a lesson, then prepare a student preview. Published versions are read-only; start the next version to make changes." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="preview_content" className="rs-studio-action" label="Prepare student preview" theme="auto" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.previewDisabled)} onAction={(...eventArgs) => _callAction("prepareContentPreview", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="publish" className="rs-studio-action" variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(studioControls?.unavailable)} onAction={(...eventArgs) => _callAction("publishContext", {}, eventArgs)} label="Publish immutable context version" theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="share" className="rs-studio-action" onAction={(...eventArgs) => _callAction("shareLesson", {}, eventArgs)} label="Create student share link" theme="auto" variant="outline" />
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
