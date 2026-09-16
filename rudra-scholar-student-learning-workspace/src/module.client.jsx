import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { BlackboardLesson as ChalkmindMathBlackboardLesson } from '@rudra-studio/chalkmind-math';
import { Box as RudraLayoutBox, Container as RudraLayoutContainer } from '@rudra-studio/rudra-layout';
import { RadioGroup as RudraFormRadioGroup } from '@rudra-studio/rudra-form';
import { Typography as RudraCoreTypography, Alert as RudraCoreAlert, Card as RudraCoreCard, Button as RudraCoreButton } from '@rudra-studio/rudra-core';

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

  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const loading = props.loading !== undefined ? props.loading : (props.data?.loading !== undefined ? props.data.loading : false);
  const problem = props.problem !== undefined ? props.problem : (props.data?.problem !== undefined ? props.data.problem : {"cached":true,"id":"11111111-1111-4111-8111-111111111121","solutionMode":"detailed","statement":"Find the eigenvalues of A = [[2, 1], [1, 2]]."});
  const contentPreview = props.contentPreview !== undefined ? props.contentPreview : (props.data?.contentPreview !== undefined ? props.data.contentPreview : {});
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : true);
  const initialProgressPercent = props.initialProgressPercent !== undefined ? props.initialProgressPercent : (props.data?.initialProgressPercent !== undefined ? props.data.initialProgressPercent : 0);
  const courseContext = props.courseContext !== undefined ? props.courseContext : (props.data?.courseContext !== undefined ? props.data.courseContext : {"contextKey":"rudra-scholar:engineering-mathematics","courseTitle":"Engineering Mathematics I","professorName":"Dr. Meera Iyer","sectionTitle":"Matrices and Eigenvalues","syllabusId":"11111111-1111-4111-8111-111111111112","topicPath":"engineering-mathematics/semester-1/linear-algebra/eigenvalues","versionNumber":1});
  const errorMessage = props.errorMessage !== undefined ? props.errorMessage : (props.data?.errorMessage !== undefined ? props.data.errorMessage : "");
  const remainingMinutes = props.remainingMinutes !== undefined ? props.remainingMinutes : (props.data?.remainingMinutes !== undefined ? props.data.remainingMinutes : 90);
  const lesson = props.lesson !== undefined ? props.lesson : (props.data?.lesson !== undefined ? props.data.lesson : {"learningGoal":"Form the characteristic equation, solve it, and verify both eigenvalues.","lessonKind":"worked-example","problemLabel":"Linear algebra · Eigenvalues","problemStatement":"Find the eigenvalues of A = [[2, 1], [1, 2]].","steps":[{"commonMistake":"Do not change the off-diagonal entries.","content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"}],"explanation":"Eigenvalues satisfy det(A − λI) = 0.","id":"step-1","narration":"Subtract lambda from the diagonal.","simpleExplanation":"Make the matrix singular.","teacherPrompt":"Which equation determines the eigenvalues?","teacherQuestion":{"correctValue":"a","explanation":"Eigenvalues make A − λI singular, so its determinant is zero.","options":[{"label":"det(A − λI) = 0","value":"a"},{"label":"det(A + λI) = 1","value":"b"},{"label":"A + I = 0","value":"c"},{"label":"trace(A) = 0","value":"d"}],"prompt":"Which equation determines the eigenvalues?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A − λI is singular."},{"commonMistake":"Keep the signs consistent when expanding.","content":[{"label":"Polynomial","latex":"\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)","type":"equation","visualText":"λ² − 4λ + 3 = (λ − 1)(λ − 3)"}],"explanation":"The equation becomes λ² − 4λ + 3 = 0.","id":"step-2","narration":"Expand the determinant and factor the polynomial.","simpleExplanation":"Find two numbers whose product is three and sum is four.","teacherPrompt":"Which pair contains both roots?","teacherQuestion":{"correctValue":"c","explanation":"The factors vanish at λ = 1 and λ = 3.","options":[{"label":"−1 and −3","value":"a"},{"label":"0 and 2","value":"b"},{"label":"1 and 3","value":"c"},{"label":"2 and 4","value":"d"}],"prompt":"Which pair contains both roots?"},"title":"Expand and factor","why":"Factoring reveals the roots directly."},{"commonMistake":"Do not verify only one root.","content":[{"text":"The eigenvalues are λ = 1 and λ = 3.","tone":"success","type":"note"}],"explanation":"Both values satisfy the characteristic equation.","id":"step-3","narration":"Check that each result makes the determinant zero.","simpleExplanation":"Put each value back into the equation.","teacherPrompt":"Which eigenvalue corresponds to the vector [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to the vector [1, 1]?"},"title":"Verify the result","why":"Verification confirms that no algebraic error changed the answer."}],"title":"Eigenvalues of a 2 × 2 matrix"});
  const solutionSource = props.solutionSource !== undefined ? props.solutionSource : (props.data?.solutionSource !== undefined ? props.data.solutionSource : "Saved solution · AI was not called");
  const inputs = { "locale": locale, "loading": loading, "problem": problem, "contentPreview": contentPreview, "authenticated": authenticated, "initialProgressPercent": initialProgressPercent, "courseContext": courseContext, "errorMessage": errorMessage, "remainingMinutes": remainingMinutes, "lesson": lesson, "solutionSource": solutionSource };
  const [isLessonLoading, set_isLessonLoading] = useState(() => structuredClone(false));
  const [completionFeedback, set_completionFeedback] = useState(() => structuredClone(""));
  const [isAnswerSubmitting, set_isAnswerSubmitting] = useState(() => structuredClone(false));
  const [completionFailed, set_completionFailed] = useState(() => structuredClone(false));
  const [contentPreviewDisplay, set_contentPreviewDisplay] = useState(() => structuredClone({"enabled":false,"valid":false}));
  const [teacherQuestionCorrectValue, set_teacherQuestionCorrectValue] = useState(() => structuredClone(""));
  const [lessonError, set_lessonError] = useState(() => structuredClone(""));
  const [boardSteps, set_boardSteps] = useState(() => structuredClone([]));
  const [progressPercent, set_progressPercent] = useState(() => structuredClone(0));
  const [teacherQuestionExplanation, set_teacherQuestionExplanation] = useState(() => structuredClone(""));
  const [isCompletingProblem, set_isCompletingProblem] = useState(() => structuredClone(false));
  const [loadedProblemId, set_loadedProblemId] = useState(() => structuredClone(""));
  const [teacherQuestionOptions, set_teacherQuestionOptions] = useState(() => structuredClone([]));
  const [learningControls, set_learningControls] = useState(() => structuredClone({"busy":false,"completeDisabled":true,"empty":true,"submitDisabled":true}));
  const [teacherQuestionPrompt, set_teacherQuestionPrompt] = useState(() => structuredClone(""));
  const [completedProblemId, set_completedProblemId] = useState(() => structuredClone(""));
  const [lessonSource, set_lessonSource] = useState(() => structuredClone(""));
  const [sessionStartedAt, set_sessionStartedAt] = useState(() => structuredClone(0));
  const [teacherAnswerFeedback, set_teacherAnswerFeedback] = useState(() => structuredClone(""));
  const [activeStep, set_activeStep] = useState(() => structuredClone(0));
  const [selectedTeacherAnswer, set_selectedTeacherAnswer] = useState(() => structuredClone(""));
  const [answerSubmitted, set_answerSubmitted] = useState(() => structuredClone(false));
  const [studentLesson, set_studentLesson] = useState(() => structuredClone({}));
  const state = { "isLessonLoading": isLessonLoading, "completionFeedback": completionFeedback, "isAnswerSubmitting": isAnswerSubmitting, "completionFailed": completionFailed, "contentPreviewDisplay": contentPreviewDisplay, "teacherQuestionCorrectValue": teacherQuestionCorrectValue, "lessonError": lessonError, "boardSteps": boardSteps, "progressPercent": progressPercent, "teacherQuestionExplanation": teacherQuestionExplanation, "isCompletingProblem": isCompletingProblem, "loadedProblemId": loadedProblemId, "teacherQuestionOptions": teacherQuestionOptions, "learningControls": learningControls, "teacherQuestionPrompt": teacherQuestionPrompt, "completedProblemId": completedProblemId, "lessonSource": lessonSource, "sessionStartedAt": sessionStartedAt, "teacherAnswerFeedback": teacherAnswerFeedback, "activeStep": activeStep, "selectedTeacherAnswer": selectedTeacherAnswer, "answerSubmitted": answerSubmitted, "studentLesson": studentLesson };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "isLessonLoading": { const next = typeof value === 'function' ? value(state.isLessonLoading) : value; state.isLessonLoading = next; set_isLessonLoading(next); return next; }
      case "completionFeedback": { const next = typeof value === 'function' ? value(state.completionFeedback) : value; state.completionFeedback = next; set_completionFeedback(next); return next; }
      case "isAnswerSubmitting": { const next = typeof value === 'function' ? value(state.isAnswerSubmitting) : value; state.isAnswerSubmitting = next; set_isAnswerSubmitting(next); return next; }
      case "completionFailed": { const next = typeof value === 'function' ? value(state.completionFailed) : value; state.completionFailed = next; set_completionFailed(next); return next; }
      case "contentPreviewDisplay": { const next = typeof value === 'function' ? value(state.contentPreviewDisplay) : value; state.contentPreviewDisplay = next; set_contentPreviewDisplay(next); return next; }
      case "teacherQuestionCorrectValue": { const next = typeof value === 'function' ? value(state.teacherQuestionCorrectValue) : value; state.teacherQuestionCorrectValue = next; set_teacherQuestionCorrectValue(next); return next; }
      case "lessonError": { const next = typeof value === 'function' ? value(state.lessonError) : value; state.lessonError = next; set_lessonError(next); return next; }
      case "boardSteps": { const next = typeof value === 'function' ? value(state.boardSteps) : value; state.boardSteps = next; set_boardSteps(next); return next; }
      case "progressPercent": { const next = typeof value === 'function' ? value(state.progressPercent) : value; state.progressPercent = next; set_progressPercent(next); return next; }
      case "teacherQuestionExplanation": { const next = typeof value === 'function' ? value(state.teacherQuestionExplanation) : value; state.teacherQuestionExplanation = next; set_teacherQuestionExplanation(next); return next; }
      case "isCompletingProblem": { const next = typeof value === 'function' ? value(state.isCompletingProblem) : value; state.isCompletingProblem = next; set_isCompletingProblem(next); return next; }
      case "loadedProblemId": { const next = typeof value === 'function' ? value(state.loadedProblemId) : value; state.loadedProblemId = next; set_loadedProblemId(next); return next; }
      case "teacherQuestionOptions": { const next = typeof value === 'function' ? value(state.teacherQuestionOptions) : value; state.teacherQuestionOptions = next; set_teacherQuestionOptions(next); return next; }
      case "learningControls": { const next = typeof value === 'function' ? value(state.learningControls) : value; state.learningControls = next; set_learningControls(next); return next; }
      case "teacherQuestionPrompt": { const next = typeof value === 'function' ? value(state.teacherQuestionPrompt) : value; state.teacherQuestionPrompt = next; set_teacherQuestionPrompt(next); return next; }
      case "completedProblemId": { const next = typeof value === 'function' ? value(state.completedProblemId) : value; state.completedProblemId = next; set_completedProblemId(next); return next; }
      case "lessonSource": { const next = typeof value === 'function' ? value(state.lessonSource) : value; state.lessonSource = next; set_lessonSource(next); return next; }
      case "sessionStartedAt": { const next = typeof value === 'function' ? value(state.sessionStartedAt) : value; state.sessionStartedAt = next; set_sessionStartedAt(next); return next; }
      case "teacherAnswerFeedback": { const next = typeof value === 'function' ? value(state.teacherAnswerFeedback) : value; state.teacherAnswerFeedback = next; set_teacherAnswerFeedback(next); return next; }
      case "activeStep": { const next = typeof value === 'function' ? value(state.activeStep) : value; state.activeStep = next; set_activeStep(next); return next; }
      case "selectedTeacherAnswer": { const next = typeof value === 'function' ? value(state.selectedTeacherAnswer) : value; state.selectedTeacherAnswer = next; set_selectedTeacherAnswer(next); return next; }
      case "answerSubmitted": { const next = typeof value === 'function' ? value(state.answerSubmitted) : value; state.answerSubmitted = next; set_answerSubmitted(next); return next; }
      case "studentLesson": { const next = typeof value === 'function' ? value(state.studentLesson) : value; state.studentLesson = next; set_studentLesson(next); return next; }
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
      case "isLessonLoading": _setState("isLessonLoading", updateNested); return value;
      case "completionFeedback": _setState("completionFeedback", updateNested); return value;
      case "isAnswerSubmitting": _setState("isAnswerSubmitting", updateNested); return value;
      case "completionFailed": _setState("completionFailed", updateNested); return value;
      case "contentPreviewDisplay": _setState("contentPreviewDisplay", updateNested); return value;
      case "teacherQuestionCorrectValue": _setState("teacherQuestionCorrectValue", updateNested); return value;
      case "lessonError": _setState("lessonError", updateNested); return value;
      case "boardSteps": _setState("boardSteps", updateNested); return value;
      case "progressPercent": _setState("progressPercent", updateNested); return value;
      case "teacherQuestionExplanation": _setState("teacherQuestionExplanation", updateNested); return value;
      case "isCompletingProblem": _setState("isCompletingProblem", updateNested); return value;
      case "loadedProblemId": _setState("loadedProblemId", updateNested); return value;
      case "teacherQuestionOptions": _setState("teacherQuestionOptions", updateNested); return value;
      case "learningControls": _setState("learningControls", updateNested); return value;
      case "teacherQuestionPrompt": _setState("teacherQuestionPrompt", updateNested); return value;
      case "completedProblemId": _setState("completedProblemId", updateNested); return value;
      case "lessonSource": _setState("lessonSource", updateNested); return value;
      case "sessionStartedAt": _setState("sessionStartedAt", updateNested); return value;
      case "teacherAnswerFeedback": _setState("teacherAnswerFeedback", updateNested); return value;
      case "activeStep": _setState("activeStep", updateNested); return value;
      case "selectedTeacherAnswer": _setState("selectedTeacherAnswer", updateNested); return value;
      case "answerSubmitted": _setState("answerSubmitted", updateNested); return value;
      case "studentLesson": _setState("studentLesson", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"answerSubmitted":{"properties":{"correct":{"type":"boolean"},"locale":{"type":"string"},"problemId":{"type":"string"},"selectedValue":{"type":"string"},"stepId":{"type":"string"}},"required":["problemId","stepId","selectedValue","correct","locale"],"type":"object"},"backRequested":{"properties":{"courseContext":{"type":"object"}},"type":"object"},"lessonProgressed":{"properties":{"completed":{"type":"boolean"},"problemId":{"type":"string"},"progressPercent":{"type":"number"},"stepIndex":{"type":"number"}},"required":["problemId","stepIndex","progressPercent","completed"],"type":"object"},"nextProblemRequested":{"properties":{"problemId":{"type":"string"},"topicPath":{"type":"string"}},"type":"object"},"problemCompleted":{"properties":{"problemId":{"type":"string"},"progressPercent":{"type":"number"}},"required":["problemId","progressPercent"],"type":"object"},"solutionRequested":{"properties":{"courseContext":{"type":"object"},"locale":{"type":"string"},"problem":{"type":"object"}},"required":["problem","courseContext","locale"],"type":"object"}};
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

  async function recordStudentSessionTime(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (inputs.contentPreview && Object.keys(inputs.contentPreview).length > 0) {
      return { "previewOnly": true };
    } else {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const explicit=Number(args.activeSeconds||0);const started=Number(state.sessionStartedAt||0);const measured=started>0?Math.floor((Date.now()-started)/1000):0;return{seconds:Math.max(0,Math.min(300,explicit>0?explicit:measured))};
        })();
        stepResults["time_prepare"] = customResult; vars["customCodeResult"] = customResult; }
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"activeSeconds":"{{ stepResults.time_prepare.seconds }}","email":"","problemId":"{{ inputs.problem.id }}"}, roots) || {};
        delete namedParameters["email"];
        const parameters = [undefined, namedParameters["activeSeconds"], namedParameters["problemId"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarRecordActiveLearningTime", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarRecordActiveLearningTime", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["time_record"] = result; vars["queryResult"] = result; }
      return stepResults.time_record[0].result;
    }
    return undefined;
  }

  async function requestStudentSolution(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (inputs.contentPreview && Object.keys(inputs.contentPreview).length > 0) {
      return { "previewOnly": true };
    } else {
      _setState("loadedProblemId", "");
      await refreshLearningControls({  });
      _setState("completionFeedback", "");
      _setState("completionFailed", false);
      _setState("isLessonLoading", true);
      await refreshLearningControls({  });
      _setState("lessonError", "");
      await refreshLearningControls({  });
      _setState("lessonSource", "");
      _setState("answerSubmitted", false);
      await refreshLearningControls({  });
      _setState("teacherQuestionOptions", []);
      _setState("teacherQuestionPrompt", "");
      _setState("teacherAnswerFeedback", "");
      _setState("selectedTeacherAnswer", "");
      await refreshLearningControls({  });
      _setState("boardSteps", []);
      await refreshLearningControls({  });
      _setState("studentLesson", {  });
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const problem=inputs.problem&&typeof inputs.problem==='object'?inputs.problem:{};const problemId=String(problem.id||'').trim();if(!problemId)throw new Error('Select a problem first.');const requested=String(inputs.locale||'en').toLowerCase();const locale=['en','hi','ta'].includes(requested)?requested:'en';return{problemId,statement:String(problem.statement||''),mode:problem.solutionMode==='quick'?'quick':'detailed',locale,promptVersion:'v3-validated-mcq-blackboard'};
          })();
          stepResults["solution_prepare"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_prepare" };
        vars.error = error; stepResults["solution_prepare"] = { error };
        _setState("isLessonLoading", false);
        await refreshLearningControls({  });
        _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
        await refreshLearningControls({  });
        return null;
        return undefined;
      }
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"email":"","locale":"{{ stepResults.solution_prepare.locale }}","problemId":"{{ stepResults.solution_prepare.problemId }}","promptVersion":"{{ stepResults.solution_prepare.promptVersion }}","solutionMode":"{{ stepResults.solution_prepare.mode }}"}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined, namedParameters["problemId"], namedParameters["locale"], namedParameters["solutionMode"], namedParameters["promptVersion"]];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarLoadStudentProblem", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadStudentProblem", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["solution_lookup"] = result; vars["queryResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_lookup" };
        vars.error = error; stepResults["solution_lookup"] = { error };
        _setState("isLessonLoading", false);
        await refreshLearningControls({  });
        _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
        await refreshLearningControls({  });
        return null;
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
const rows = Array.isArray(stepResults.solution_lookup) ? stepResults.solution_lookup : [];
const result = rows[0]?.result || {};
if (!result.problemId || !String(result.statement || '').trim()) throw new Error('This problem is not available.');
stepResults.solution_prepare.statement = result.statement;
let lesson = null;
try { if (result.cached && result.lesson) lesson = normalize(result.lesson, result.statement); } catch {}
const steps = lesson?.steps || [];
const n = Number(result.activeStep);
const activeStep = Math.max(0, Math.min(Math.max(0, steps.length - 1), Number.isFinite(n) ? Math.floor(n) : 0));
const p = Number(result.progressPercent);
return { hit: Boolean(lesson), result, lesson, boardSteps: steps.map(({teacherQuestion,teacherPrompt,...step}) => step), activeStep, progress: Number.isFinite(p) ? Math.max(0,Math.min(100,p)) : 0, question: steps[activeStep]?.teacherQuestion || {prompt:'',options:[],correctValue:'',explanation:''} };
          })();
          stepResults["solution_cache"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_cache" };
        vars.error = error; stepResults["solution_cache"] = { error };
        _setState("isLessonLoading", false);
        await refreshLearningControls({  });
        _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
        await refreshLearningControls({  });
        return null;
        return undefined;
      }
      if (stepResults.solution_cache.hit) {
        _setState("studentLesson", stepResults.solution_cache.lesson);
        _setState("boardSteps", stepResults.solution_cache.boardSteps);
        await refreshLearningControls({  });
        _setState("activeStep", stepResults.solution_cache.activeStep);
        _setState("progressPercent", stepResults.solution_cache.progress);
        _setState("teacherQuestionPrompt", stepResults.solution_cache.question.prompt);
        _setState("teacherQuestionOptions", stepResults.solution_cache.question.options);
        _setState("teacherQuestionCorrectValue", stepResults.solution_cache.question.correctValue);
        _setState("teacherQuestionExplanation", stepResults.solution_cache.question.explanation);
        _setState("lessonSource", "Saved AI lesson · not independently verified");
        _setState("isLessonLoading", false);
        await refreshLearningControls({  });
        _setState("loadedProblemId", stepResults.solution_prepare.problemId);
        await refreshLearningControls({  });
        try {
          await _emitOutput("solutionRequested", { "courseContext": inputs.courseContext, "locale": inputs.locale, "problem": inputs.problem }, true);
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_emit" };
          vars.error = error; stepResults["solution_emit"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
          return undefined;
        }
        return state.studentLesson;
      } else {
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const namedParameters = _resolveRuntimeValue({"email":"","problemId":"{{ stepResults.solution_prepare.problemId }}"}, roots) || {};
            delete namedParameters["email"];
            const parameters = [undefined, namedParameters["problemId"]];
            const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
            let result;
            if (typeof queryExecutor === 'function') {
              result = await queryExecutor({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarResolveStudentStrategy", parameters, namedParameters, signal: args.signal });
            } else {
              const queryResponse = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarResolveStudentStrategy", parameters, namedParameters }), signal: args.signal });
              const queryPayload = await queryResponse.json().catch(() => ({}));
              if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
              result = queryPayload.data;
            }
            stepResults["solution_strategy"] = result; vars["queryResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_strategy" };
          vars.error = error; stepResults["solution_strategy"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
          return undefined;
        }
        try {
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
const rows=Array.isArray(stepResults.solution_strategy)?stepResults.solution_strategy:[];const row=rows[0]||{};const result=row.result&&typeof row.result==='object'?row.result:{};return{strategyId:String(result.strategyId||''),strategyVersion:Math.max(1,Number(result.strategyVersion||1)),strategy:result.strategy&&typeof result.strategy==='object'?result.strategy:{preferredMethod:'Explain from definitions, show every algebraic step, and verify the final answer.',explanationDepth:'detailed'}};
            })();
            stepResults["solution_strategy_parse"] = customResult; vars["customCodeResult"] = customResult; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_strategy_parse" };
          vars.error = error; stepResults["solution_strategy_parse"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
          return undefined;
        }
        try {
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
const p=stepResults.solution_prepare;const s=stepResults.solution_strategy_parse;const language=p.locale==='hi'?'Hindi':p.locale==='ta'?'Tamil':'English';return ['You are a college mathematics professor creating an interactive Blackboard lesson.','Return JSON only with keys title, lessonKind, problemLabel, problemStatement, learningGoal, steps.','Create at least three steps. Every step must contain id, title, narration, explanation, simpleExplanation, why, commonMistake, content, teacherPrompt, and teacherQuestion.','Every teacherQuestion must contain prompt, exactly four options with label and value, one correctValue, and explanation.','Generate every human-readable field in '+language+' only. Keep mathematical notation and JSON keys unchanged.','Use this approved hierarchy strategy: '+JSON.stringify(s.strategy),'Problem: '+p.statement,'Solution mode: '+p.mode].join('\n');
            })();
            stepResults["solution_prompt"] = customResult; vars["customCodeResult"] = customResult; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_prompt" };
          vars.error = error; stepResults["solution_prompt"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
          return undefined;
        }
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.solution_prompt }}"}, roots) || {};
            const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtptmzag000004jix1ok7kyi", apiId: "geminiStudentProblemSolution", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
            const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["solution_ai"] = result; vars["apiResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_ai" };
          vars.error = error; stepResults["solution_ai"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
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
const parts = stepResults.solution_ai?.candidates?.[0]?.content?.parts;
const raw = Array.isArray(parts) ? parts.map((part) => typeof part?.text === 'string' ? part.text : '').join('') : '';
if (!raw.trim() || raw.length > 200000) throw new Error('Invalid AI lesson response.');
const lesson = normalize(JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')), stepResults.solution_prepare.statement);
return { lesson, boardSteps: lesson.steps.map(({ teacherQuestion, teacherPrompt, ...step }) => step), question: lesson.steps[0].teacherQuestion };
            })();
            stepResults["solution_ai_parse"] = customResult; vars["customCodeResult"] = customResult; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_ai_parse" };
          vars.error = error; stepResults["solution_ai_parse"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
          return undefined;
        }
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const namedParameters = _resolveRuntimeValue({"email":"","problemId":"{{ stepResults.solution_prepare.problemId }}","promptVersion":"{{ stepResults.solution_prepare.promptVersion }}","solution":"{{ stepResults.solution_ai_parse.lesson }}","solutionMode":"{{ stepResults.solution_prepare.mode }}","strategyId":"{{ stepResults.solution_strategy_parse.strategyId }}","strategySnapshot":"{{ stepResults.solution_strategy_parse.strategy }}","strategyVersion":"{{ stepResults.solution_strategy_parse.strategyVersion }}"}, roots) || {};
            delete namedParameters["email"];
            const parameters = [undefined, namedParameters["problemId"], namedParameters["solutionMode"], namedParameters["promptVersion"], namedParameters["solution"], namedParameters["strategyId"], namedParameters["strategyVersion"], namedParameters["strategySnapshot"]];
            const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
            let result;
            if (typeof queryExecutor === 'function') {
              result = await queryExecutor({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarStoreStudentSolution", parameters, namedParameters, signal: args.signal });
            } else {
              const queryResponse = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarStoreStudentSolution", parameters, namedParameters }), signal: args.signal });
              const queryPayload = await queryResponse.json().catch(() => ({}));
              if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
              result = queryPayload.data;
            }
            stepResults["solution_store"] = result; vars["queryResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_store" };
          vars.error = error; stepResults["solution_store"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
          return undefined;
        }
        _setState("studentLesson", stepResults.solution_ai_parse.lesson);
        _setState("boardSteps", stepResults.solution_ai_parse.boardSteps);
        await refreshLearningControls({  });
        _setState("activeStep", 0);
        _setState("progressPercent", 0);
        _setState("teacherQuestionPrompt", stepResults.solution_ai_parse.question.prompt);
        _setState("teacherQuestionOptions", stepResults.solution_ai_parse.question.options);
        _setState("teacherQuestionCorrectValue", stepResults.solution_ai_parse.question.correctValue);
        _setState("teacherQuestionExplanation", stepResults.solution_ai_parse.question.explanation);
        _setState("lessonSource", "New AI lesson · not independently verified");
        _setState("isLessonLoading", false);
        await refreshLearningControls({  });
        _setState("loadedProblemId", stepResults.solution_prepare.problemId);
        await refreshLearningControls({  });
        try {
          await _emitOutput("solutionRequested", { "courseContext": inputs.courseContext, "locale": inputs.locale, "problem": inputs.problem }, true);
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "solution_emit" };
          vars.error = error; stepResults["solution_emit"] = { error };
          _setState("isLessonLoading", false);
          await refreshLearningControls({  });
          _setState("lessonError", "We could not prepare a valid lesson. Please retry, or return to the course and choose another problem.");
          await refreshLearningControls({  });
          return null;
          return undefined;
        }
        return state.studentLesson;
      }
    }
    return undefined;
  }

  async function completeStudentProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (inputs.contentPreview && Object.keys(inputs.contentPreview).length > 0) {
      return { "previewOnly": true };
    } else {
      if ((function canCompleteLesson(inputs, state) {
  return !!inputs.problem?.id && inputs.authenticated !== false && !inputs.loading &&
    !state.isLessonLoading && !state.isAnswerSubmitting && !state.isCompletingProblem &&
    state.loadedProblemId === String(inputs.problem.id) && state.completedProblemId !== String(inputs.problem.id) &&
    Array.isArray(state.boardSteps) && state.boardSteps.length > 0;
})(inputs, state)) {
        _setState("isCompletingProblem", true);
        await refreshLearningControls({  });
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
return { problemId: String(inputs.problem.id), locale: String(inputs.locale || 'en'), activeStep: Number(state.activeStep || 0) };
          })();
          stepResults["complete_capture"] = customResult; vars["customCodeResult"] = customResult; }
        _setState("completionFeedback", "");
        _setState("completionFailed", false);
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const namedParameters = _resolveRuntimeValue({"activeStep":"{{ stepResults.complete_capture.activeStep }}","email":"","locale":"{{ stepResults.complete_capture.locale }}","problemId":"{{ stepResults.complete_capture.problemId }}","progressPercent":100,"status":"completed"}, roots) || {};
            delete namedParameters["email"];
            const parameters = [undefined, namedParameters["problemId"], namedParameters["locale"], namedParameters["activeStep"], namedParameters["progressPercent"], namedParameters["status"]];
            const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
            let result;
            if (typeof queryExecutor === 'function') {
              result = await queryExecutor({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarSaveStudentProgress", parameters, namedParameters, signal: args.signal });
            } else {
              const queryResponse = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSaveStudentProgress", parameters, namedParameters }), signal: args.signal });
              const queryPayload = await queryResponse.json().catch(() => ({}));
              if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
              result = queryPayload.data;
            }
            stepResults["complete_persist"] = result; vars["queryResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "complete_persist" };
          vars.error = error; stepResults["complete_persist"] = { error };
          if (inputs.problem.id === stepResults.complete_capture.problemId && state.loadedProblemId === stepResults.complete_capture.problemId) {
            { const event = args.event; const data = pageData; const globalState = state;
              const customResult = await (async () => {
return (function completionCopy(locale) {
  return ({
    en: { saved: 'Completion saved. Ready for the next problem?', failed: 'Completion could not be saved. Your progress is unchanged. Please retry.', notified: 'Completion saved. Use Next problem to continue.' },
    hi: { saved: 'पूर्णता सहेजी गई। अगले प्रश्न के लिए तैयार हैं?', failed: 'पूर्णता सहेजी नहीं जा सकी। आपकी प्रगति नहीं बदली है। फिर प्रयास करें।', notified: 'पूर्णता सहेजी गई। आगे बढ़ने के लिए अगला प्रश्न चुनें।' },
    ta: { saved: 'நிறைவு சேமிக்கப்பட்டது. அடுத்த கேள்விக்குத் தயாரா?', failed: 'நிறைவைச் சேமிக்க முடியவில்லை. உங்கள் முன்னேற்றம் மாறவில்லை. மீண்டும் முயலவும்.', notified: 'நிறைவு சேமிக்கப்பட்டது. தொடர அடுத்த கேள்வியைத் தேர்ந்தெடுக்கவும்.' },
  })[locale] || completionCopy('en');
})(inputs.locale).failed;
              })();
              stepResults["complete_failed_copy"] = customResult; vars["customCodeResult"] = customResult; }
            _setState("completionFeedback", stepResults.complete_failed_copy);
            _setState("completionFailed", true);
            _setState("isCompletingProblem", false);
            await refreshLearningControls({  });
            return { "ok": false, "reason": "save_failed" };
          } else {
            _setState("isCompletingProblem", false);
            await refreshLearningControls({  });
            return { "ok": false, "reason": "lesson_changed" };
          }
          return undefined;
        }
        try {
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
return (function verifyCompletion(result, problemId) {
  const saved = Array.isArray(result) ? result[0]?.result : null;
  if (saved?.problemId !== problemId || saved?.status !== 'completed' || Number(saved?.progressPercent) !== 100) {
    throw new Error('Completion was not confirmed by storage.');
  }
  return true;
})(stepResults.complete_persist, stepResults.complete_capture.problemId);
            })();
            stepResults["complete_verify"] = customResult; vars["customCodeResult"] = customResult; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "complete_verify" };
          vars.error = error; stepResults["complete_verify"] = { error };
          if (inputs.problem.id === stepResults.complete_capture.problemId && state.loadedProblemId === stepResults.complete_capture.problemId) {
            { const event = args.event; const data = pageData; const globalState = state;
              const customResult = await (async () => {
return (function completionCopy(locale) {
  return ({
    en: { saved: 'Completion saved. Ready for the next problem?', failed: 'Completion could not be saved. Your progress is unchanged. Please retry.', notified: 'Completion saved. Use Next problem to continue.' },
    hi: { saved: 'पूर्णता सहेजी गई। अगले प्रश्न के लिए तैयार हैं?', failed: 'पूर्णता सहेजी नहीं जा सकी। आपकी प्रगति नहीं बदली है। फिर प्रयास करें।', notified: 'पूर्णता सहेजी गई। आगे बढ़ने के लिए अगला प्रश्न चुनें।' },
    ta: { saved: 'நிறைவு சேமிக்கப்பட்டது. அடுத்த கேள்விக்குத் தயாரா?', failed: 'நிறைவைச் சேமிக்க முடியவில்லை. உங்கள் முன்னேற்றம் மாறவில்லை. மீண்டும் முயலவும்.', notified: 'நிறைவு சேமிக்கப்பட்டது. தொடர அடுத்த கேள்வியைத் தேர்ந்தெடுக்கவும்.' },
  })[locale] || completionCopy('en');
})(inputs.locale).failed;
              })();
              stepResults["complete_failed_copy"] = customResult; vars["customCodeResult"] = customResult; }
            _setState("completionFeedback", stepResults.complete_failed_copy);
            _setState("completionFailed", true);
            _setState("isCompletingProblem", false);
            await refreshLearningControls({  });
            return { "ok": false, "reason": "save_failed" };
          } else {
            _setState("isCompletingProblem", false);
            await refreshLearningControls({  });
            return { "ok": false, "reason": "lesson_changed" };
          }
          return undefined;
        }
        if (inputs.problem.id === stepResults.complete_capture.problemId && state.loadedProblemId === stepResults.complete_capture.problemId) {
          _setState("progressPercent", 100);
          _setState("completedProblemId", stepResults.complete_capture.problemId);
          await refreshLearningControls({  });
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
return (function completionCopy(locale) {
  return ({
    en: { saved: 'Completion saved. Ready for the next problem?', failed: 'Completion could not be saved. Your progress is unchanged. Please retry.', notified: 'Completion saved. Use Next problem to continue.' },
    hi: { saved: 'पूर्णता सहेजी गई। अगले प्रश्न के लिए तैयार हैं?', failed: 'पूर्णता सहेजी नहीं जा सकी। आपकी प्रगति नहीं बदली है। फिर प्रयास करें।', notified: 'पूर्णता सहेजी गई। आगे बढ़ने के लिए अगला प्रश्न चुनें।' },
    ta: { saved: 'நிறைவு சேமிக்கப்பட்டது. அடுத்த கேள்விக்குத் தயாரா?', failed: 'நிறைவைச் சேமிக்க முடியவில்லை. உங்கள் முன்னேற்றம் மாறவில்லை. மீண்டும் முயலவும்.', notified: 'நிறைவு சேமிக்கப்பட்டது. தொடர அடுத்த கேள்வியைத் தேர்ந்தெடுக்கவும்.' },
  })[locale] || completionCopy('en');
})(inputs.locale);
            })();
            stepResults["complete_copy"] = customResult; vars["customCodeResult"] = customResult; }
          _setState("completionFeedback", stepResults.complete_copy.saved);
          try {
            await _emitOutput("problemCompleted", { "problemId": stepResults.complete_capture.problemId, "progressPercent": 100 }, true);
          } catch (_caughtError) {
            const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "complete_emit" };
            vars.error = error; stepResults["complete_emit"] = { error };
            _setState("completionFeedback", stepResults.complete_copy.notified);
            _setState("isCompletingProblem", false);
            await refreshLearningControls({  });
            return { "notificationFailed": true, "ok": true };
            return undefined;
          }
          _setState("isCompletingProblem", false);
          await refreshLearningControls({  });
          return { "ok": true };
        } else {
          _setState("isCompletingProblem", false);
          await refreshLearningControls({  });
          return { "ok": false, "reason": "lesson_changed" };
        }
      } else {
        return { "ok": false, "reason": "lesson_unavailable" };
      }
    }
    return undefined;
  }

  async function startStudentSession(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return Date.now();
      })();
      stepResults["session_now"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("sessionStartedAt", stepResults.session_now);
    await requestStudentSolution({});
    return undefined;
  }

  async function initializeStudentLesson(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const lesson=state.studentLesson&&typeof state.studentLesson==='object'?state.studentLesson:(inputs.lesson&&typeof inputs.lesson==='object'?inputs.lesson:{});const steps=Array.isArray(lesson.steps)?lesson.steps:[];const restored=Math.max(0,Number(state.activeStep||0));const index=Math.max(0,Math.min(Math.max(0,steps.length-1),restored));const step=steps[index]||steps[0]||{};const q=step.teacherQuestion&&typeof step.teacherQuestion==='object'?step.teacherQuestion:{prompt:String(step.teacherPrompt||''),options:[],correctValue:'',explanation:''};return{index,prompt:String(q.prompt||''),options:Array.isArray(q.options)?q.options:[],correctValue:String(q.correctValue||''),explanation:String(q.explanation||''),progress:Math.max(0,Math.min(100,Number(state.progressPercent||inputs.initialProgressPercent||0)))};
      })();
      stepResults["init_read"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("activeStep", stepResults.init_read.index);
    _setState("teacherQuestionPrompt", stepResults.init_read.prompt);
    _setState("teacherQuestionOptions", stepResults.init_read.options);
    _setState("teacherQuestionCorrectValue", stepResults.init_read.correctValue);
    _setState("teacherQuestionExplanation", stepResults.init_read.explanation);
    _setState("selectedTeacherAnswer", "");
    await refreshLearningControls({  });
    _setState("teacherAnswerFeedback", "");
    _setState("progressPercent", stepResults.init_read.progress);
    return undefined;
  }

  async function selectStudentStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (inputs.contentPreview && Object.keys(inputs.contentPreview).length > 0) {
      return { "previewOnly": true };
    } else {
      if (state.isCompletingProblem || state.isAnswerSubmitting || state.isLessonLoading) {
        return { "ok": false, "reason": "lesson_busy" };
      } else {
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
})(args, state);
          })();
          stepResults["step_read"] = customResult; vars["customCodeResult"] = customResult; }
        _setState("answerSubmitted", false);
        await refreshLearningControls({  });
        _setState("activeStep", stepResults.step_read.index);
        _setState("teacherQuestionPrompt", stepResults.step_read.prompt);
        _setState("teacherQuestionOptions", stepResults.step_read.options);
        _setState("teacherQuestionCorrectValue", stepResults.step_read.correctValue);
        _setState("teacherQuestionExplanation", stepResults.step_read.explanation);
        _setState("selectedTeacherAnswer", "");
        await refreshLearningControls({  });
        _setState("teacherAnswerFeedback", "");
        _setState("progressPercent", stepResults.step_read.progress);
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"activeStep":"{{ stepResults.step_read.index }}","email":"","locale":"{{ inputs.locale }}","problemId":"{{ inputs.problem.id }}","progressPercent":"{{ stepResults.step_read.progress }}","status":"{{ stepResults.step_read.completed ? 'completed' : 'in_progress' }}"}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined, namedParameters["problemId"], namedParameters["locale"], namedParameters["activeStep"], namedParameters["progressPercent"], namedParameters["status"]];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarSaveStudentProgress", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSaveStudentProgress", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["step_persist"] = result; vars["queryResult"] = result; }
        await _emitOutput("lessonProgressed", { "completed": stepResults.step_read.completed, "problemId": inputs.problem.id, "progressPercent": stepResults.step_read.progress, "stepIndex": stepResults.step_read.index }, true);
      }
    }
    return undefined;
  }

  async function selectStudentAnswer(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (state.isCompletingProblem || state.isAnswerSubmitting || state.isLessonLoading) {
      return { "ok": false, "reason": "lesson_busy" };
    } else {
      _setState("selectedTeacherAnswer", args.value);
      await refreshLearningControls({  });
      _setState("answerSubmitted", false);
      await refreshLearningControls({  });
      _setState("teacherAnswerFeedback", "");
    }
    return undefined;
  }

  async function requestStudentBack(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (state.isCompletingProblem || state.isAnswerSubmitting || state.isLessonLoading) {
      return { "ok": false, "reason": "lesson_busy" };
    } else {
      await _emitOutput("backRequested", { "courseContext": inputs.courseContext }, true);
    }
    return undefined;
  }

  async function submitStudentAnswer(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (inputs.contentPreview && Object.keys(inputs.contentPreview).length > 0) {
      return { "previewOnly": true };
    } else {
      if (state.isCompletingProblem || state.isAnswerSubmitting || state.isLessonLoading || state.answerSubmitted) {
        return { "ok": false, "reason": "lesson_busy" };
      } else {
        _setState("isAnswerSubmitting", true);
        await refreshLearningControls({  });
        try {
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
const value = String(state.selectedTeacherAnswer || ''); const steps = Array.isArray(state.studentLesson?.steps) ? state.studentLesson.steps : []; const current = steps[Number(state.activeStep || 0)]; const q = current?.teacherQuestion; if (!current?.id || !q || !q.options?.some((option) => option.value === value)) throw new Error('Choose an answer first.'); const correct = value === q.correctValue; const locale = String(inputs.locale || 'en'); const lead = locale === 'hi' ? (correct ? 'सही उत्तर।' : 'फिर से प्रयास करें।') : locale === 'ta' ? (correct ? 'சரியான பதில்.' : 'மீண்டும் முயற்சிக்கவும்.') : (correct ? 'Correct.' : 'Try again.'); return { value, correct, stepId: current.id, details: { progressPercent: Number(state.progressPercent || 0), topicPath: String(inputs.courseContext?.topicPath || '') }, feedback: lead + ' ' + String(q.explanation || '') };
            })();
            stepResults["answer_read"] = customResult; vars["customCodeResult"] = customResult; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "answer_read" };
          vars.error = error; stepResults["answer_read"] = { error };
          _setState("isAnswerSubmitting", false);
          await refreshLearningControls({  });
          _setState("teacherAnswerFeedback", "Your answer could not be saved. Please select an answer and retry.");
          return null;
          return undefined;
        }
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const namedParameters = _resolveRuntimeValue({"details":"{{ stepResults.answer_read.details }}","email":"","isCorrect":"{{ stepResults.answer_read.correct }}","locale":"{{ inputs.locale }}","problemId":"{{ inputs.problem.id }}","selectedValue":"{{ stepResults.answer_read.value }}","stepId":"{{ stepResults.answer_read.stepId }}"}, roots) || {};
            delete namedParameters["email"];
            const parameters = [undefined, namedParameters["problemId"], namedParameters["locale"], namedParameters["stepId"], namedParameters["selectedValue"], namedParameters["isCorrect"], namedParameters["details"]];
            const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
            let result;
            if (typeof queryExecutor === 'function') {
              result = await queryExecutor({ moduleId: "cmtptmzag000004jix1ok7kyi", queryId: "scholarRecordStudentAttempt", parameters, namedParameters, signal: args.signal });
            } else {
              const queryResponse = await fetch("/api/modules/cmtptmzag000004jix1ok7kyi/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarRecordStudentAttempt", parameters, namedParameters }), signal: args.signal });
              const queryPayload = await queryResponse.json().catch(() => ({}));
              if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
              result = queryPayload.data;
            }
            stepResults["answer_persist"] = result; vars["queryResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "answer_persist" };
          vars.error = error; stepResults["answer_persist"] = { error };
          _setState("isAnswerSubmitting", false);
          await refreshLearningControls({  });
          _setState("teacherAnswerFeedback", "Your answer could not be saved. Please select an answer and retry.");
          return null;
          return undefined;
        }
        _setState("selectedTeacherAnswer", stepResults.answer_read.value);
        await refreshLearningControls({  });
        _setState("teacherAnswerFeedback", stepResults.answer_read.feedback);
        try {
          await _emitOutput("answerSubmitted", { "correct": stepResults.answer_read.correct, "locale": inputs.locale, "problemId": inputs.problem.id, "selectedValue": stepResults.answer_read.value, "stepId": stepResults.answer_read.stepId }, true);
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "answer_emit" };
          vars.error = error; stepResults["answer_emit"] = { error };
          _setState("isAnswerSubmitting", false);
          await refreshLearningControls({  });
          _setState("teacherAnswerFeedback", "Your answer could not be saved. Please select an answer and retry.");
          return null;
          return undefined;
        }
        _setState("answerSubmitted", true);
        await refreshLearningControls({  });
        _setState("isAnswerSubmitting", false);
        await refreshLearningControls({  });
        return stepResults.answer_read;
      }
    }
    return undefined;
  }

  async function refreshLearningControls(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function canCompleteLesson(inputs, state) {
  return !!inputs.problem?.id && inputs.authenticated !== false && !inputs.loading &&
    !state.isLessonLoading && !state.isAnswerSubmitting && !state.isCompletingProblem &&
    state.loadedProblemId === String(inputs.problem.id) && state.completedProblemId !== String(inputs.problem.id) &&
    Array.isArray(state.boardSteps) && state.boardSteps.length > 0;
}
return (function learningControlState(inputs, state) {
  const busy = !!(inputs.loading || state.isLessonLoading || state.isAnswerSubmitting || state.isCompletingProblem);
  return {
    busy,
    completeDisabled: !canCompleteLesson(inputs, state),
    submitDisabled: busy || !state.selectedTeacherAnswer || !!state.answerSubmitted,
    empty: !inputs.loading && !state.isLessonLoading && !state.lessonError && !state.boardSteps?.length,
  };
})(inputs, state);
      })();
      stepResults["learning_controls_compute"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("learningControls", stepResults.learning_controls_compute);
    return undefined;
  }

  async function initializeContentPreview(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
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
try { return normalizeContentPreview(inputs.contentPreview); } catch { return { enabled: true, valid: false, message: 'This preview is incomplete or invalid. Return to Studio and prepare it again.' }; }
      })();
      stepResults["preview_validate"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("contentPreviewDisplay", stepResults.preview_validate);
    return stepResults.preview_validate;
    return undefined;
  }

  async function requestNextProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (state.isCompletingProblem || state.isAnswerSubmitting || state.isLessonLoading) {
      return { "ok": false, "reason": "lesson_busy" };
    } else {
      await _emitOutput("nextProblemRequested", { "problemId": inputs.problem.id, "topicPath": inputs.courseContext.topicPath }, true);
    }
    return undefined;
  }

  const _localActions = {
    "recordStudentSessionTime": recordStudentSessionTime,
    "requestStudentSolution": requestStudentSolution,
    "completeStudentProblem": completeStudentProblem,
    "startStudentSession": startStudentSession,
    "initializeStudentLesson": initializeStudentLesson,
    "selectStudentStep": selectStudentStep,
    "selectStudentAnswer": selectStudentAnswer,
    "requestStudentBack": requestStudentBack,
    "submitStudentAnswer": submitStudentAnswer,
    "refreshLearningControls": refreshLearningControls,
    "initializeContentPreview": initializeContentPreview,
    "requestNextProblem": requestNextProblem,
  };
  const _localActionArguments = {
    "recordStudentSessionTime": ["activeSeconds"],
    "requestStudentSolution": [],
    "completeStudentProblem": [],
    "startStudentSession": [],
    "initializeStudentLesson": [],
    "selectStudentStep": ["event", "stepIndex", "index"],
    "selectStudentAnswer": ["value"],
    "requestStudentBack": [],
    "submitStudentAnswer": [],
    "refreshLearningControls": [],
    "initializeContentPreview": [],
    "requestNextProblem": [],
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
    void _runLifecycle("student_mountstartStudentSession", "takeLatest", (signal) => startStudentSession({ signal }), "Module mount lifecycle failed:");
  }, []);
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; return; }
    set_selectedTeacherAnswer(structuredClone(""));
    set_teacherAnswerFeedback(structuredClone(""));
    void _runLifecycle("student_problem_changerequestStudentSolution", "takeLatest", (signal) => requestStudentSolution({ signal }), 'Module input lifecycle failed:');
  }, [problem, locale]);
  const _inputLifecycleMounted1 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted1.current) { _inputLifecycleMounted1.current = true; }
    void _runLifecycle("learning_controls_inputsrefreshLearningControls", "takeLatest", (signal) => refreshLearningControls({ signal }), 'Module input lifecycle failed:');
  }, [authenticated, loading, problem]);
  const _inputLifecycleMounted2 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted2.current) { _inputLifecycleMounted2.current = true; }
    void _runLifecycle("content_preview_inputsinitializeContentPreview", "takeLatest", (signal) => initializeContentPreview({ signal }), 'Module input lifecycle failed:');
  }, [contentPreview]);
  useEffect(() => () => { void recordStudentSessionTime({}).catch((error) => console.error('Module unmount lifecycle failed:', error)); }, []);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="root" className="rs-student-workspace" as="main" maxWidth="full">      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(contentPreviewDisplay?.enabled)) && (<>      <RudraLayoutBox id="content_preview_panel" className="flex flex-col rs-content-preview">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="content_preview_notice" className="rs-content-preview-notice" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(contentPreviewDisplay?.message)} aria-live="polite" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(contentPreviewDisplay?.valid)) && (<>      <ChalkmindMathBlackboardLesson id="content_preview_board" problemStatement={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(contentPreviewDisplay?.lesson?.problemStatement)} steps={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(contentPreviewDisplay?.boardSteps)} title={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(contentPreviewDisplay?.lesson?.title)} autoAdvance={false} problemLabel={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(contentPreviewDisplay?.lesson?.problemLabel)} popupInitiallyOpen={false} playing={false} learningGoal={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(contentPreviewDisplay?.lesson?.learningGoal)} captionsEnabled={true} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return !value; })(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(contentPreviewDisplay?.enabled)))) && (<>      <RudraLayoutBox id="content_preview_normal_stack" className="block">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="stack" className="flex flex-col rs-student-stack">      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(learningControls?.empty)) && (<>      <RudraLayoutBox id="learning_empty" className="flex flex-col rs-learning-empty">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="learning_empty_title" className="rs-question-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Your next discovery starts here" : _bindingValue)(_scope?.i18n?.emptyTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="learning_empty_body" className="rs-lesson-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select a problem from your course, then load its step-by-step lesson." : _bindingValue)(_scope?.i18n?.emptyBody)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="topbar" className="flex flex-wrap rs-topbar">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="back_button" className="rs-learning-button" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(learningControls?.busy)} onAction={(...eventArgs) => _callAction("requestStudentBack", {}, eventArgs)} label={((_bindingValue) => _bindingValue === undefined ? "← Back to course" : _bindingValue)(_scope?.i18n?.back)} theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_meta" className="flex flex-col rs-course-meta">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_title" className="rs-course-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics course" : _bindingValue)(inputs?.courseContext?.courseTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_context" className="flex flex-wrap rs-course-context">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="professor_name" className="rs-muted" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(inputs?.courseContext?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="context_separator" className="rs-separator" as="span" content="·" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="section_title" className="rs-muted" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Course section" : _bindingValue)(inputs?.courseContext?.sectionTitle)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="time_badge" className="flex rs-time-badge">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="time_value" className="rs-time-value" as="strong" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(inputs?.remainingMinutes)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="time_unit" className="rs-time-unit" content={((_bindingValue) => _bindingValue === undefined ? "min left" : _bindingValue)(_scope?.i18n?.minutesLeft)} as="span" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isLessonLoading)) && (<>      <RudraCoreAlert id="loading_alert" className="rs-lesson-alert" title={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="loading_alert_title" className="rs-lesson-copy" as="strong" content={((_bindingValue) => _bindingValue === undefined ? "Preparing your lesson" : _bindingValue)(_scope?.i18n?.preparing)} />
</>)}
</>} appearance="soft" live="polite" variant="info">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="loading_alert_text" className="rs-lesson-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Loading the saved solution or generating a new lesson…" : _bindingValue)(_scope?.i18n?.loading)} />
</>)}
</RudraCoreAlert>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(lessonError)) && (<>      <RudraCoreAlert id="error_alert" className="rs-lesson-alert" title={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="error_alert_title" className="rs-lesson-copy" as="strong" content={((_bindingValue) => _bindingValue === undefined ? "Lesson unavailable" : _bindingValue)(_scope?.i18n?.unavailable)} />
</>)}
</>} live="assertive" variant="error" appearance="soft">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="error_alert_text" className="rs-lesson-copy" content={((_bindingValue) => _bindingValue === undefined ? "Unable to load this lesson." : _bindingValue)(lessonError)} as="p" />
</>)}
</RudraCoreAlert>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(lessonSource)) && (<>      <RudraCoreAlert id="source_alert" className="rs-lesson-alert" title={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="source_alert_title" className="rs-lesson-copy" as="strong" content={((_bindingValue) => _bindingValue === undefined ? "Solution source" : _bindingValue)(_scope?.i18n?.source)} />
</>)}
</>} appearance="soft" live="polite" variant="info">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="source_alert_text" className="rs-lesson-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(lessonSource)} />
</>)}
</RudraCoreAlert>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="lesson_grid" className="grid rs-lesson-grid">      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(boardSteps)))) && (<>      <RudraLayoutBox id="board_panel" className="block rs-board-panel">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <ChalkmindMathBlackboardLesson id="board" title={((_bindingValue) => _bindingValue === undefined ? "Your lesson" : _bindingValue)(studentLesson?.title)} boardOptions={{"allowStepSelection":true,"showCaptions":true,"showControls":true,"showHeader":true,"showLearningGoal":true,"showNextControl":true,"showPlaybackControl":true,"showPopup":true,"showProblem":true,"showProgress":true,"showRepeatControl":true,"showSpeed":true,"showStepNumbers":true,"showTeacherButton":false}} problemLabel={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(studentLesson?.problemLabel)} reducedMotion={false} onNext={(...eventArgs) => _callAction("selectStudentStep", {}, eventArgs)} autoAdvance={true} onStepSelect={(...eventArgs) => _callAction("selectStudentStep", {}, eventArgs)} editOperations={[]} stepDurationMs={5500} playing={false} speedLabel="Normal" learningGoal={((_bindingValue) => _bindingValue === undefined ? "Understand and verify every step." : _bindingValue)(studentLesson?.learningGoal)} showStepPopup={true} problemStatement={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(studentLesson?.problemStatement)} popupInitiallyOpen={false} steps={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(boardSteps)} activeStep={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(activeStep)} lessonKind={((_bindingValue) => _bindingValue === undefined ? "worked-example" : _bindingValue)(studentLesson?.lessonKind)} captionsEnabled={true} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length === 4; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(teacherQuestionOptions)))) && (<>      <RudraCoreCard id="question_panel" className="rs-question-card" as="aside" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="question_kicker" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Teacher check" : _bindingValue)(_scope?.i18n?.teacherCheck)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="question_title" className="rs-question-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Select the best answer." : _bindingValue)(teacherQuestionPrompt)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormRadioGroup id="question_choices" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(selectedTeacherAnswer)} layout="vertical" options={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(teacherQuestionOptions)} colorScheme="emerald" onChangeValue={(...eventArgs) => _callAction("selectStudentAnswer", {}, eventArgs)} size="md" label={((_bindingValue) => _bindingValue === undefined ? "Choose one answer" : _bindingValue)(_scope?.i18n?.choose)} disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(learningControls?.busy)} name="studentAnswer" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(teacherAnswerFeedback)) && (<>      <RudraCoreTypography id="answer_feedback" className="rs-answer-feedback" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select one answer." : _bindingValue)(teacherAnswerFeedback)} aria-live="polite" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="question_actions" className="flex flex-wrap rs-question-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="submit_answer" className="rs-learning-button rs-learning-primary" label={((_bindingValue) => _bindingValue === undefined ? "Submit answer" : _bindingValue)(_scope?.i18n?.submit)} theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isAnswerSubmitting)} variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(learningControls?.submitDisabled)} onAction={(...eventArgs) => _callAction("submitStudentAnswer", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.problem?.statement)) && (<>      <RudraCoreButton id="request_solution" className="rs-learning-button" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(learningControls?.busy)} onAction={(...eventArgs) => _callAction("requestStudentSolution", {}, eventArgs)} loadingText={((_bindingValue) => _bindingValue === undefined ? "Preparing lesson…" : _bindingValue)(_scope?.i18n?.loadingAction)} label={((_bindingValue) => _bindingValue === undefined ? "Load / retry lesson" : _bindingValue)(_scope?.i18n?.loadRetry)} theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isLessonLoading)} variant="primary" />
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(boardSteps)))) && (<>      <RudraLayoutBox id="learning_footer" className="flex flex-wrap rs-learning-footer">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="progress_box" className="flex flex-col rs-progress-box">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="progress_label" className="rs-muted" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Lesson progress" : _bindingValue)(_scope?.i18n?.progress)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="progress_value" className="rs-progress-value" as="strong" content={(((value) => { const n = Number(value); return (Number.isFinite(n) ? Math.round(Math.max(0, Math.min(100, n))) : 0) + "%"; })(((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(progressPercent)))} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="complete_button" className="rs-learning-button rs-learning-primary" onAction={(...eventArgs) => _callAction("completeStudentProblem", {}, eventArgs)} loadingText={((_bindingValue) => _bindingValue === undefined ? "Saving…" : _bindingValue)(_scope?.i18n?.saving)} label={((_bindingValue) => _bindingValue === undefined ? "Mark complete" : _bindingValue)(_scope?.i18n?.complete)} theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isCompletingProblem)} variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(learningControls?.completeDisabled)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="next_button" className="rs-learning-button" label={((_bindingValue) => _bindingValue === undefined ? "Next problem" : _bindingValue)(_scope?.i18n?.next)} theme="auto" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(learningControls?.busy)} onAction={(...eventArgs) => _callAction("requestNextProblem", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(completionFeedback)) && (<>      <RudraCoreAlert id="completion_alert" className="rs-lesson-alert" title={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="completion_alert_title" className="rs-lesson-copy" as="strong" content={((_bindingValue) => _bindingValue === undefined ? "Completion status" : _bindingValue)(_scope?.i18n?.completion)} />
</>)}
</>} appearance="soft" live="polite" variant={(((value) => { return value ? "error" : "success"; })(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(completionFailed)))}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="completion_alert_text" className="rs-lesson-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(completionFeedback)} />
</>)}
</RudraCoreAlert>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutContainer>
</>)}
    </div>
  );
}
