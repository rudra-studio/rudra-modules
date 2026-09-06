import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Box as RudraLayoutBox, Container as RudraLayoutContainer } from '@rudra-studio/rudra-layout';
import { Typography as RudraCoreTypography, Alert as RudraCoreAlert, Button as RudraCoreButton, Card as RudraCoreCard } from '@rudra-studio/rudra-core';
import { BlackboardLesson as ChalkmindMathBlackboardLesson } from '@rudra-studio/chalkmind-math';
import { RadioGroup as RudraFormRadioGroup } from '@rudra-studio/rudra-form';

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

  const loading = props.loading !== undefined ? props.loading : (props.data?.loading !== undefined ? props.data.loading : false);
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : true);
  const problem = props.problem !== undefined ? props.problem : (props.data?.problem !== undefined ? props.data.problem : {"cached":true,"id":"11111111-1111-4111-8111-111111111121","solutionMode":"detailed","statement":"Find the eigenvalues of A = [[2, 1], [1, 2]]."});
  const initialProgressPercent = props.initialProgressPercent !== undefined ? props.initialProgressPercent : (props.data?.initialProgressPercent !== undefined ? props.data.initialProgressPercent : 0);
  const lesson = props.lesson !== undefined ? props.lesson : (props.data?.lesson !== undefined ? props.data.lesson : {"learningGoal":"Form the characteristic equation, solve it, and verify both eigenvalues.","lessonKind":"worked-example","problemLabel":"Linear algebra · Eigenvalues","problemStatement":"Find the eigenvalues of A = [[2, 1], [1, 2]].","steps":[{"commonMistake":"Do not change the off-diagonal entries.","content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"}],"explanation":"Eigenvalues satisfy det(A − λI) = 0.","id":"step-1","narration":"Subtract lambda from the diagonal.","simpleExplanation":"Make the matrix singular.","teacherPrompt":"Which equation determines the eigenvalues?","teacherQuestion":{"correctValue":"a","explanation":"Eigenvalues make A − λI singular, so its determinant is zero.","options":[{"label":"det(A − λI) = 0","value":"a"},{"label":"det(A + λI) = 1","value":"b"},{"label":"A + I = 0","value":"c"},{"label":"trace(A) = 0","value":"d"}],"prompt":"Which equation determines the eigenvalues?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A − λI is singular."},{"commonMistake":"Keep the signs consistent when expanding.","content":[{"label":"Polynomial","latex":"\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)","type":"equation","visualText":"λ² − 4λ + 3 = (λ − 1)(λ − 3)"}],"explanation":"The equation becomes λ² − 4λ + 3 = 0.","id":"step-2","narration":"Expand the determinant and factor the polynomial.","simpleExplanation":"Find two numbers whose product is three and sum is four.","teacherPrompt":"Which pair contains both roots?","teacherQuestion":{"correctValue":"c","explanation":"The factors vanish at λ = 1 and λ = 3.","options":[{"label":"−1 and −3","value":"a"},{"label":"0 and 2","value":"b"},{"label":"1 and 3","value":"c"},{"label":"2 and 4","value":"d"}],"prompt":"Which pair contains both roots?"},"title":"Expand and factor","why":"Factoring reveals the roots directly."},{"commonMistake":"Do not verify only one root.","content":[{"text":"The eigenvalues are λ = 1 and λ = 3.","tone":"success","type":"note"}],"explanation":"Both values satisfy the characteristic equation.","id":"step-3","narration":"Check that each result makes the determinant zero.","simpleExplanation":"Put each value back into the equation.","teacherPrompt":"Which eigenvalue corresponds to the vector [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to the vector [1, 1]?"},"title":"Verify the result","why":"Verification confirms that no algebraic error changed the answer."}],"title":"Eigenvalues of a 2 × 2 matrix"});
  const solutionSource = props.solutionSource !== undefined ? props.solutionSource : (props.data?.solutionSource !== undefined ? props.data.solutionSource : "Saved solution · AI was not called");
  const courseContext = props.courseContext !== undefined ? props.courseContext : (props.data?.courseContext !== undefined ? props.data.courseContext : {"contextKey":"rudra-scholar:engineering-mathematics","courseTitle":"Engineering Mathematics I","professorName":"Dr. Meera Iyer","sectionTitle":"Matrices and Eigenvalues","syllabusId":"11111111-1111-4111-8111-111111111112","topicPath":"engineering-mathematics/semester-1/linear-algebra/eigenvalues","versionNumber":1});
  const errorMessage = props.errorMessage !== undefined ? props.errorMessage : (props.data?.errorMessage !== undefined ? props.data.errorMessage : "");
  const remainingMinutes = props.remainingMinutes !== undefined ? props.remainingMinutes : (props.data?.remainingMinutes !== undefined ? props.data.remainingMinutes : 90);
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const inputs = { "loading": loading, "authenticated": authenticated, "problem": problem, "initialProgressPercent": initialProgressPercent, "lesson": lesson, "solutionSource": solutionSource, "courseContext": courseContext, "errorMessage": errorMessage, "remainingMinutes": remainingMinutes, "locale": locale };
  const [sessionStartedAt, set_sessionStartedAt] = useState(() => structuredClone(0));
  const [isLessonLoading, set_isLessonLoading] = useState(() => structuredClone(false));
  const [activeStep, set_activeStep] = useState(() => structuredClone(0));
  const [teacherQuestionOptions, set_teacherQuestionOptions] = useState(() => structuredClone([{"label":"det(A − λI) = 0","value":"a"},{"label":"det(A + λI) = 1","value":"b"},{"label":"A + I = 0","value":"c"},{"label":"trace(A) = 0","value":"d"}]));
  const [teacherQuestionExplanation, set_teacherQuestionExplanation] = useState(() => structuredClone("Eigenvalues make A − λI singular, so its determinant is zero."));
  const [selectedTeacherAnswer, set_selectedTeacherAnswer] = useState(() => structuredClone(""));
  const [lessonError, set_lessonError] = useState(() => structuredClone(""));
  const [lessonSource, set_lessonSource] = useState(() => structuredClone("Saved solution · AI was not called"));
  const [studentLesson, set_studentLesson] = useState(() => structuredClone({"learningGoal":"Form the characteristic equation, solve it, and verify both eigenvalues.","lessonKind":"worked-example","problemLabel":"Linear algebra · Eigenvalues","problemStatement":"Find the eigenvalues of A = [[2, 1], [1, 2]].","steps":[{"commonMistake":"Do not change the off-diagonal entries.","content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"}],"explanation":"Eigenvalues satisfy det(A − λI) = 0.","id":"step-1","narration":"Subtract lambda from the diagonal.","simpleExplanation":"Make the matrix singular.","teacherPrompt":"Which equation determines the eigenvalues?","teacherQuestion":{"correctValue":"a","explanation":"Eigenvalues make A − λI singular, so its determinant is zero.","options":[{"label":"det(A − λI) = 0","value":"a"},{"label":"det(A + λI) = 1","value":"b"},{"label":"A + I = 0","value":"c"},{"label":"trace(A) = 0","value":"d"}],"prompt":"Which equation determines the eigenvalues?"},"title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A − λI is singular."},{"commonMistake":"Keep the signs consistent when expanding.","content":[{"label":"Polynomial","latex":"\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)","type":"equation","visualText":"λ² − 4λ + 3 = (λ − 1)(λ − 3)"}],"explanation":"The equation becomes λ² − 4λ + 3 = 0.","id":"step-2","narration":"Expand the determinant and factor the polynomial.","simpleExplanation":"Find two numbers whose product is three and sum is four.","teacherPrompt":"Which pair contains both roots?","teacherQuestion":{"correctValue":"c","explanation":"The factors vanish at λ = 1 and λ = 3.","options":[{"label":"−1 and −3","value":"a"},{"label":"0 and 2","value":"b"},{"label":"1 and 3","value":"c"},{"label":"2 and 4","value":"d"}],"prompt":"Which pair contains both roots?"},"title":"Expand and factor","why":"Factoring reveals the roots directly."},{"commonMistake":"Do not verify only one root.","content":[{"text":"The eigenvalues are λ = 1 and λ = 3.","tone":"success","type":"note"}],"explanation":"Both values satisfy the characteristic equation.","id":"step-3","narration":"Check that each result makes the determinant zero.","simpleExplanation":"Put each value back into the equation.","teacherPrompt":"Which eigenvalue corresponds to the vector [1, 1]?","teacherQuestion":{"correctValue":"d","explanation":"A[1,1]ᵀ = [3,3]ᵀ = 3[1,1]ᵀ.","options":[{"label":"−1","value":"a"},{"label":"0","value":"b"},{"label":"1","value":"c"},{"label":"3","value":"d"}],"prompt":"Which eigenvalue corresponds to the vector [1, 1]?"},"title":"Verify the result","why":"Verification confirms that no algebraic error changed the answer."}],"title":"Eigenvalues of a 2 × 2 matrix"}));
  const [boardSteps, set_boardSteps] = useState(() => structuredClone([{"commonMistake":"Do not change the off-diagonal entries.","content":[{"label":"Characteristic determinant","latex":"\\det(A-\\lambda I)=(2-\\lambda)^2-1=0","type":"equation","visualText":"det(A − λI) = (2 − λ)² − 1 = 0"}],"explanation":"Eigenvalues satisfy det(A − λI) = 0.","id":"step-1","narration":"Subtract lambda from the diagonal.","simpleExplanation":"Make the matrix singular.","title":"Form the characteristic equation","why":"A non-zero eigenvector exists only when A − λI is singular."},{"commonMistake":"Keep the signs consistent when expanding.","content":[{"label":"Polynomial","latex":"\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)","type":"equation","visualText":"λ² − 4λ + 3 = (λ − 1)(λ − 3)"}],"explanation":"The equation becomes λ² − 4λ + 3 = 0.","id":"step-2","narration":"Expand the determinant and factor the polynomial.","simpleExplanation":"Find two numbers whose product is three and sum is four.","title":"Expand and factor","why":"Factoring reveals the roots directly."},{"commonMistake":"Do not verify only one root.","content":[{"text":"The eigenvalues are λ = 1 and λ = 3.","tone":"success","type":"note"}],"explanation":"Both values satisfy the characteristic equation.","id":"step-3","narration":"Check that each result makes the determinant zero.","simpleExplanation":"Put each value back into the equation.","title":"Verify the result","why":"Verification confirms that no algebraic error changed the answer."}]));
  const [teacherQuestionPrompt, set_teacherQuestionPrompt] = useState(() => structuredClone("Which equation determines the eigenvalues?"));
  const [teacherQuestionCorrectValue, set_teacherQuestionCorrectValue] = useState(() => structuredClone("a"));
  const [teacherAnswerFeedback, set_teacherAnswerFeedback] = useState(() => structuredClone("Select one answer."));
  const [progressPercent, set_progressPercent] = useState(() => structuredClone(0));
  const state = { "sessionStartedAt": sessionStartedAt, "isLessonLoading": isLessonLoading, "activeStep": activeStep, "teacherQuestionOptions": teacherQuestionOptions, "teacherQuestionExplanation": teacherQuestionExplanation, "selectedTeacherAnswer": selectedTeacherAnswer, "lessonError": lessonError, "lessonSource": lessonSource, "studentLesson": studentLesson, "boardSteps": boardSteps, "teacherQuestionPrompt": teacherQuestionPrompt, "teacherQuestionCorrectValue": teacherQuestionCorrectValue, "teacherAnswerFeedback": teacherAnswerFeedback, "progressPercent": progressPercent };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "sessionStartedAt": { const next = typeof value === 'function' ? value(state.sessionStartedAt) : value; state.sessionStartedAt = next; set_sessionStartedAt(next); return next; }
      case "isLessonLoading": { const next = typeof value === 'function' ? value(state.isLessonLoading) : value; state.isLessonLoading = next; set_isLessonLoading(next); return next; }
      case "activeStep": { const next = typeof value === 'function' ? value(state.activeStep) : value; state.activeStep = next; set_activeStep(next); return next; }
      case "teacherQuestionOptions": { const next = typeof value === 'function' ? value(state.teacherQuestionOptions) : value; state.teacherQuestionOptions = next; set_teacherQuestionOptions(next); return next; }
      case "teacherQuestionExplanation": { const next = typeof value === 'function' ? value(state.teacherQuestionExplanation) : value; state.teacherQuestionExplanation = next; set_teacherQuestionExplanation(next); return next; }
      case "selectedTeacherAnswer": { const next = typeof value === 'function' ? value(state.selectedTeacherAnswer) : value; state.selectedTeacherAnswer = next; set_selectedTeacherAnswer(next); return next; }
      case "lessonError": { const next = typeof value === 'function' ? value(state.lessonError) : value; state.lessonError = next; set_lessonError(next); return next; }
      case "lessonSource": { const next = typeof value === 'function' ? value(state.lessonSource) : value; state.lessonSource = next; set_lessonSource(next); return next; }
      case "studentLesson": { const next = typeof value === 'function' ? value(state.studentLesson) : value; state.studentLesson = next; set_studentLesson(next); return next; }
      case "boardSteps": { const next = typeof value === 'function' ? value(state.boardSteps) : value; state.boardSteps = next; set_boardSteps(next); return next; }
      case "teacherQuestionPrompt": { const next = typeof value === 'function' ? value(state.teacherQuestionPrompt) : value; state.teacherQuestionPrompt = next; set_teacherQuestionPrompt(next); return next; }
      case "teacherQuestionCorrectValue": { const next = typeof value === 'function' ? value(state.teacherQuestionCorrectValue) : value; state.teacherQuestionCorrectValue = next; set_teacherQuestionCorrectValue(next); return next; }
      case "teacherAnswerFeedback": { const next = typeof value === 'function' ? value(state.teacherAnswerFeedback) : value; state.teacherAnswerFeedback = next; set_teacherAnswerFeedback(next); return next; }
      case "progressPercent": { const next = typeof value === 'function' ? value(state.progressPercent) : value; state.progressPercent = next; set_progressPercent(next); return next; }
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
      case "sessionStartedAt": _setState("sessionStartedAt", updateNested); return value;
      case "isLessonLoading": _setState("isLessonLoading", updateNested); return value;
      case "activeStep": _setState("activeStep", updateNested); return value;
      case "teacherQuestionOptions": _setState("teacherQuestionOptions", updateNested); return value;
      case "teacherQuestionExplanation": _setState("teacherQuestionExplanation", updateNested); return value;
      case "selectedTeacherAnswer": _setState("selectedTeacherAnswer", updateNested); return value;
      case "lessonError": _setState("lessonError", updateNested); return value;
      case "lessonSource": _setState("lessonSource", updateNested); return value;
      case "studentLesson": _setState("studentLesson", updateNested); return value;
      case "boardSteps": _setState("boardSteps", updateNested); return value;
      case "teacherQuestionPrompt": _setState("teacherQuestionPrompt", updateNested); return value;
      case "teacherQuestionCorrectValue": _setState("teacherQuestionCorrectValue", updateNested); return value;
      case "teacherAnswerFeedback": _setState("teacherAnswerFeedback", updateNested); return value;
      case "progressPercent": _setState("progressPercent", updateNested); return value;
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

  async function requestNextProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("nextProblemRequested", { "problemId": inputs.problem.id, "topicPath": inputs.courseContext.topicPath }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function recordStudentSessionTime(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
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
    return undefined;
  }

  async function requestStudentSolution(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isLessonLoading", true);
    _setState("lessonError", "");
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const problem=inputs.problem&&typeof inputs.problem==='object'?inputs.problem:{};const problemId=String(problem.id||'').trim();if(!problemId)throw new Error('Select a problem first.');const requested=String(inputs.locale||'en').toLowerCase();const locale=['en','hi','ta'].includes(requested)?requested:'en';return{problemId,statement:String(problem.statement||''),mode:problem.solutionMode==='quick'?'quick':'detailed',locale,promptVersion:'v2-student-mcq-blackboard'};
      })();
      stepResults["solution_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"email":"","locale":"{{ stepResults.solution_prepare.locale }}","problemId":"{{ stepResults.solution_prepare.problemId }}"}, roots) || {};
      delete namedParameters["email"];
      const parameters = [undefined, namedParameters["problemId"], namedParameters["locale"]];
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.solution_lookup)?stepResults.solution_lookup:[];const row=rows[0]||{};const result=row.result&&typeof row.result==='object'?row.result:{};const lesson=result.lesson&&typeof result.lesson==='object'?result.lesson:null;const steps=Array.isArray(lesson?.steps)?lesson.steps:[];const hit=Boolean(result.cached&&lesson&&steps.length);const activeStep=Math.max(0,Math.min(Math.max(0,steps.length-1),Number(result.activeStep||0)));const q=steps[activeStep]?.teacherQuestion||{};const boardSteps=steps.map(x=>{const clean={...x};delete clean.teacherQuestion;delete clean.teacherPrompt;return clean;});return{hit,result,lesson,boardSteps,activeStep,progress:Number(result.progressPercent||0),question:{prompt:String(q.prompt||steps[activeStep]?.teacherPrompt||''),options:Array.isArray(q.options)?q.options:[],correctValue:String(q.correctValue||''),explanation:String(q.explanation||'')}};
      })();
      stepResults["solution_cache"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.solution_cache.hit) {
      _setState("studentLesson", stepResults.solution_cache.lesson);
      _setState("boardSteps", stepResults.solution_cache.boardSteps);
      _setState("activeStep", stepResults.solution_cache.activeStep);
      _setState("progressPercent", stepResults.solution_cache.progress);
      _setState("teacherQuestionPrompt", stepResults.solution_cache.question.prompt);
      _setState("teacherQuestionOptions", stepResults.solution_cache.question.options);
      _setState("teacherQuestionCorrectValue", stepResults.solution_cache.question.correctValue);
      _setState("teacherQuestionExplanation", stepResults.solution_cache.question.explanation);
      _setState("lessonSource", "Saved solution · AI was not called");
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
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const rows=Array.isArray(stepResults.solution_strategy)?stepResults.solution_strategy:[];const row=rows[0]||{};const result=row.result&&typeof row.result==='object'?row.result:{};return{strategyId:String(result.strategyId||''),strategyVersion:Math.max(1,Number(result.strategyVersion||1)),strategy:result.strategy&&typeof result.strategy==='object'?result.strategy:{preferredMethod:'Explain from definitions, show every algebraic step, and verify the final answer.',explanationDepth:'detailed'}};
        })();
        stepResults["solution_strategy_parse"] = customResult; vars["customCodeResult"] = customResult; }
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const p=stepResults.solution_prepare;const s=stepResults.solution_strategy_parse;const language=p.locale==='hi'?'Hindi':p.locale==='ta'?'Tamil':'English';return ['You are a college mathematics professor creating an interactive Blackboard lesson.','Return JSON only with keys title, lessonKind, problemLabel, problemStatement, learningGoal, steps.','Create at least three steps. Every step must contain id, title, narration, explanation, simpleExplanation, why, commonMistake, content, teacherPrompt, and teacherQuestion.','Every teacherQuestion must contain prompt, exactly four options with label and value, one correctValue, and explanation.','Generate every human-readable field in '+language+' only. Keep mathematical notation and JSON keys unchanged.','Use this approved hierarchy strategy: '+JSON.stringify(s.strategy),'Problem: '+p.statement,'Solution mode: '+p.mode].join('\n');
        })();
        stepResults["solution_prompt"] = customResult; vars["customCodeResult"] = customResult; }
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.solution_prompt }}"}, roots) || {};
        const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtptmzag000004jix1ok7kyi", apiId: "geminiStudentProblemSolution", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
        const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["solution_ai"] = result; vars["apiResult"] = result; }
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const r=stepResults.solution_ai||{};const parts=r?.candidates?.[0]?.content?.parts;const raw=Array.isArray(parts)?parts.map(x=>String(x?.text||'')).join(''):'';if(!raw.trim())throw new Error('Gemini returned no lesson.');const lesson=JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,''));const source=Array.isArray(lesson.steps)?lesson.steps:[];if(!source.length)throw new Error('Gemini returned no lesson steps.');const steps=source.map((x,i)=>{const q=x?.teacherQuestion||{};const opts=Array.isArray(q.options)?q.options.slice(0,4):[];if(opts.length!==4)throw new Error('Every teacher check must provide four choices.');const values=new Set(opts.map(o=>String(o.value)));const correct=values.has(String(q.correctValue))?String(q.correctValue):String(opts[0].value);return{...x,id:String(x.id||'step-'+(i+1)),teacherPrompt:String(q.prompt||x.teacherPrompt||''),teacherQuestion:{prompt:String(q.prompt||x.teacherPrompt||''),options:opts.map(o=>({label:String(o.label||''),value:String(o.value||'')})),correctValue:correct,explanation:String(q.explanation||'')}}});const normalized={title:String(lesson.title||'Worked solution'),lessonKind:'worked-example',problemLabel:String(lesson.problemLabel||'Problem'),problemStatement:String(lesson.problemStatement||stepResults.solution_prepare.statement),learningGoal:String(lesson.learningGoal||''),steps};const boardSteps=steps.map(x=>{const clean={...x};delete clean.teacherQuestion;delete clean.teacherPrompt;return clean;});return{lesson:normalized,boardSteps,question:steps[0].teacherQuestion};
        })();
        stepResults["solution_ai_parse"] = customResult; vars["customCodeResult"] = customResult; }
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
      _setState("studentLesson", stepResults.solution_ai_parse.lesson);
      _setState("boardSteps", stepResults.solution_ai_parse.boardSteps);
      _setState("activeStep", 0);
      _setState("progressPercent", 0);
      _setState("teacherQuestionPrompt", stepResults.solution_ai_parse.question.prompt);
      _setState("teacherQuestionOptions", stepResults.solution_ai_parse.question.options);
      _setState("teacherQuestionCorrectValue", stepResults.solution_ai_parse.question.correctValue);
      _setState("teacherQuestionExplanation", stepResults.solution_ai_parse.question.explanation);
      _setState("lessonSource", "New solution generated with the approved strategy and saved for reuse");
      _setState("isLessonLoading", false);
      void _emitOutput("solutionRequested", { "courseContext": inputs.courseContext, "locale": inputs.locale, "problem": inputs.problem }, false).catch(error => console.error('Module output delivery failed', error));
      return state.studentLesson;
    } else {
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
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const rows=Array.isArray(stepResults.solution_strategy)?stepResults.solution_strategy:[];const row=rows[0]||{};const result=row.result&&typeof row.result==='object'?row.result:{};return{strategyId:String(result.strategyId||''),strategyVersion:Math.max(1,Number(result.strategyVersion||1)),strategy:result.strategy&&typeof result.strategy==='object'?result.strategy:{preferredMethod:'Explain from definitions, show every algebraic step, and verify the final answer.',explanationDepth:'detailed'}};
        })();
        stepResults["solution_strategy_parse"] = customResult; vars["customCodeResult"] = customResult; }
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const p=stepResults.solution_prepare;const s=stepResults.solution_strategy_parse;const language=p.locale==='hi'?'Hindi':p.locale==='ta'?'Tamil':'English';return ['You are a college mathematics professor creating an interactive Blackboard lesson.','Return JSON only with keys title, lessonKind, problemLabel, problemStatement, learningGoal, steps.','Create at least three steps. Every step must contain id, title, narration, explanation, simpleExplanation, why, commonMistake, content, teacherPrompt, and teacherQuestion.','Every teacherQuestion must contain prompt, exactly four options with label and value, one correctValue, and explanation.','Generate every human-readable field in '+language+' only. Keep mathematical notation and JSON keys unchanged.','Use this approved hierarchy strategy: '+JSON.stringify(s.strategy),'Problem: '+p.statement,'Solution mode: '+p.mode].join('\n');
        })();
        stepResults["solution_prompt"] = customResult; vars["customCodeResult"] = customResult; }
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const argumentValues = _resolveRuntimeValue({"prompt":"{{ stepResults.solution_prompt }}"}, roots) || {};
        const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtptmzag000004jix1ok7kyi", apiId: "geminiStudentProblemSolution", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
        const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["solution_ai"] = result; vars["apiResult"] = result; }
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const r=stepResults.solution_ai||{};const parts=r?.candidates?.[0]?.content?.parts;const raw=Array.isArray(parts)?parts.map(x=>String(x?.text||'')).join(''):'';if(!raw.trim())throw new Error('Gemini returned no lesson.');const lesson=JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,''));const source=Array.isArray(lesson.steps)?lesson.steps:[];if(!source.length)throw new Error('Gemini returned no lesson steps.');const steps=source.map((x,i)=>{const q=x?.teacherQuestion||{};const opts=Array.isArray(q.options)?q.options.slice(0,4):[];if(opts.length!==4)throw new Error('Every teacher check must provide four choices.');const values=new Set(opts.map(o=>String(o.value)));const correct=values.has(String(q.correctValue))?String(q.correctValue):String(opts[0].value);return{...x,id:String(x.id||'step-'+(i+1)),teacherPrompt:String(q.prompt||x.teacherPrompt||''),teacherQuestion:{prompt:String(q.prompt||x.teacherPrompt||''),options:opts.map(o=>({label:String(o.label||''),value:String(o.value||'')})),correctValue:correct,explanation:String(q.explanation||'')}}});const normalized={title:String(lesson.title||'Worked solution'),lessonKind:'worked-example',problemLabel:String(lesson.problemLabel||'Problem'),problemStatement:String(lesson.problemStatement||stepResults.solution_prepare.statement),learningGoal:String(lesson.learningGoal||''),steps};const boardSteps=steps.map(x=>{const clean={...x};delete clean.teacherQuestion;delete clean.teacherPrompt;return clean;});return{lesson:normalized,boardSteps,question:steps[0].teacherQuestion};
        })();
        stepResults["solution_ai_parse"] = customResult; vars["customCodeResult"] = customResult; }
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
      _setState("studentLesson", stepResults.solution_ai_parse.lesson);
      _setState("boardSteps", stepResults.solution_ai_parse.boardSteps);
      _setState("activeStep", 0);
      _setState("progressPercent", 0);
      _setState("teacherQuestionPrompt", stepResults.solution_ai_parse.question.prompt);
      _setState("teacherQuestionOptions", stepResults.solution_ai_parse.question.options);
      _setState("teacherQuestionCorrectValue", stepResults.solution_ai_parse.question.correctValue);
      _setState("teacherQuestionExplanation", stepResults.solution_ai_parse.question.explanation);
      _setState("lessonSource", "New solution generated with the approved strategy and saved for reuse");
      _setState("isLessonLoading", false);
      void _emitOutput("solutionRequested", { "courseContext": inputs.courseContext, "locale": inputs.locale, "problem": inputs.problem }, false).catch(error => console.error('Module output delivery failed', error));
      return state.studentLesson;
    }
    return undefined;
  }

  async function completeStudentProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("progressPercent", 100);
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"activeStep":"{{ state.activeStep }}","email":"","locale":"{{ inputs.locale }}","problemId":"{{ inputs.problem.id }}","progressPercent":100,"status":"completed"}, roots) || {};
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
    void _emitOutput("problemCompleted", { "problemId": inputs.problem.id, "progressPercent": 100 }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function requestStudentBack(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("backRequested", { "courseContext": inputs.courseContext }, false).catch(error => console.error('Module output delivery failed', error));
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
    _setState("teacherAnswerFeedback", "");
    _setState("progressPercent", stepResults.init_read.progress);
    return undefined;
  }

  async function selectStudentStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const steps=Array.isArray(state.studentLesson?.steps)?state.studentLesson.steps:[];const index=Math.max(0,Math.min(Math.max(0,steps.length-1),Number(args.stepIndex??args.index??0)));const step=steps[index]||{};const q=step.teacherQuestion&&typeof step.teacherQuestion==='object'?step.teacherQuestion:{prompt:String(step.teacherPrompt||''),options:[],correctValue:'',explanation:''};const progress=steps.length?Math.round(((index+1)/steps.length)*100):0;return{index,stepId:String(step.id||'step-'+(index+1)),prompt:String(q.prompt||''),options:Array.isArray(q.options)?q.options:[],correctValue:String(q.correctValue||''),explanation:String(q.explanation||''),progress,completed:Boolean(steps.length&&index===steps.length-1)};
      })();
      stepResults["step_read"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("activeStep", stepResults.step_read.index);
    _setState("teacherQuestionPrompt", stepResults.step_read.prompt);
    _setState("teacherQuestionOptions", stepResults.step_read.options);
    _setState("teacherQuestionCorrectValue", stepResults.step_read.correctValue);
    _setState("teacherQuestionExplanation", stepResults.step_read.explanation);
    _setState("selectedTeacherAnswer", "");
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
    void _emitOutput("lessonProgressed", { "completed": stepResults.step_read.completed, "problemId": inputs.problem.id, "progressPercent": stepResults.step_read.progress, "stepIndex": stepResults.step_read.index }, false).catch(error => console.error('Module output delivery failed', error));
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

  async function selectStudentAnswer(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const value=String(args.value||'');const correctValue=String(state.teacherQuestionCorrectValue||'');const correct=Boolean(value)&&value===correctValue;const locale=String(inputs.locale||'en').toLowerCase();const lead=locale==='hi'?(correct?'सही उत्तर।':'फिर से प्रयास करें।'):locale==='ta'?(correct?'சரியான பதில்.':'மீண்டும் முயற்சிக்கவும்.'):(correct?'Correct.':'Try again.');const steps=Array.isArray(inputs.lesson?.steps)?inputs.lesson.steps:[];const step=steps[Number(state.activeStep||0)]||{};return{value,correct,stepId:String(step.id||''),feedback:lead+(state.teacherQuestionExplanation?' '+String(state.teacherQuestionExplanation):'')};
      })();
      stepResults["answer_read"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedTeacherAnswer", stepResults.answer_read.value);
    _setState("teacherAnswerFeedback", stepResults.answer_read.feedback);
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"details":{"progressPercent":"{{ state.progressPercent }}","topicPath":"{{ inputs.courseContext.topicPath }}"},"email":"","isCorrect":"{{ stepResults.answer_read.correct }}","locale":"{{ inputs.locale }}","problemId":"{{ inputs.problem.id }}","selectedValue":"{{ stepResults.answer_read.value }}","stepId":"{{ stepResults.answer_read.stepId }}"}, roots) || {};
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
    void _emitOutput("answerSubmitted", { "correct": stepResults.answer_read.correct, "locale": inputs.locale, "problemId": inputs.problem.id, "selectedValue": stepResults.answer_read.value, "stepId": stepResults.answer_read.stepId }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  const _localActions = {
    "requestNextProblem": requestNextProblem,
    "recordStudentSessionTime": recordStudentSessionTime,
    "requestStudentSolution": requestStudentSolution,
    "completeStudentProblem": completeStudentProblem,
    "requestStudentBack": requestStudentBack,
    "initializeStudentLesson": initializeStudentLesson,
    "selectStudentStep": selectStudentStep,
    "startStudentSession": startStudentSession,
    "selectStudentAnswer": selectStudentAnswer,
  };
  const _localActionArguments = {
    "requestNextProblem": [],
    "recordStudentSessionTime": ["activeSeconds"],
    "requestStudentSolution": [],
    "completeStudentProblem": [],
    "requestStudentBack": [],
    "initializeStudentLesson": [],
    "selectStudentStep": ["stepIndex", "index"],
    "startStudentSession": [],
    "selectStudentAnswer": ["value"],
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
    set_teacherAnswerFeedback(structuredClone("Select one answer."));
    void _runLifecycle("student_problem_changerequestStudentSolution", "takeLatest", (signal) => requestStudentSolution({ signal }), 'Module input lifecycle failed:');
  }, [problem, locale]);
  useEffect(() => () => { void recordStudentSessionTime({}).catch((error) => console.error('Module unmount lifecycle failed:', error)); }, []);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="root" className="rs-student-workspace" as="main" maxWidth="full">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="stack" className="flex flex-col rs-student-stack">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="topbar" className="flex flex-wrap rs-topbar">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="back_button" label="← Back to course" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("requestStudentBack", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_meta" className="flex flex-col rs-course-meta">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_title" className="rs-course-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics course" : _bindingValue)(inputs?.courseContext?.courseTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_context" className="flex flex-wrap rs-course-context">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="professor_name" className="rs-muted" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(inputs?.courseContext?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="context_separator" className="rs-separator" as="span" content="·" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="section_title" className="rs-muted" content={((_bindingValue) => _bindingValue === undefined ? "Course section" : _bindingValue)(inputs?.courseContext?.sectionTitle)} as="span" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="time_badge" className="flex rs-time-badge">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="time_value" className="rs-time-value" as="strong" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(inputs?.remainingMinutes)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="time_unit" className="rs-time-unit" as="span" content={((_bindingValue) => _bindingValue === undefined ? "min left" : _bindingValue)(_scope?.i18n?.minutesLeft)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isLessonLoading)) && (<>      <RudraCoreAlert id="loading_alert" title="Preparing your lesson" variant="info" appearance="soft" live="polite" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(lessonError)) && (<>      <RudraCoreAlert id="error_alert" live="assertive" title="Lesson unavailable" variant="danger" appearance="soft" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreAlert id="source_alert" live="polite" title="Solution source" variant="success" appearance="soft" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="lesson_grid" className="grid rs-lesson-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="board_panel" className="block rs-board-panel">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <ChalkmindMathBlackboardLesson id="board" onNext={(...eventArgs) => _callAction("selectStudentStep", {}, eventArgs)} boardOptions={{"allowStepSelection":true,"showCaptions":true,"showControls":true,"showHeader":true,"showLearningGoal":true,"showNextControl":true,"showPlaybackControl":true,"showPopup":true,"showProblem":true,"showProgress":true,"showRepeatControl":true,"showSpeed":true,"showStepNumbers":true,"showTeacherButton":false}} showStepPopup={true} popupInitiallyOpen={false} playing={false} speedLabel="Normal" steps={((_bindingValue) => _bindingValue === undefined ? [{ "commonMistake": "Do not change the off-diagonal entries.", "content": [{ "label": "Characteristic determinant", "latex": "\\det(A-\\lambda I)=(2-\\lambda)^2-1=0", "type": "equation", "visualText": "det(A − λI) = (2 − λ)² − 1 = 0" }], "explanation": "Eigenvalues satisfy det(A − λI) = 0.", "id": "step-1", "narration": "Subtract lambda from the diagonal.", "simpleExplanation": "Make the matrix singular.", "title": "Form the characteristic equation", "why": "A non-zero eigenvector exists only when A − λI is singular." }, { "commonMistake": "Keep the signs consistent when expanding.", "content": [{ "label": "Polynomial", "latex": "\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)", "type": "equation", "visualText": "λ² − 4λ + 3 = (λ − 1)(λ − 3)" }], "explanation": "The equation becomes λ² − 4λ + 3 = 0.", "id": "step-2", "narration": "Expand the determinant and factor the polynomial.", "simpleExplanation": "Find two numbers whose product is three and sum is four.", "title": "Expand and factor", "why": "Factoring reveals the roots directly." }, { "commonMistake": "Do not verify only one root.", "content": [{ "text": "The eigenvalues are λ = 1 and λ = 3.", "tone": "success", "type": "note" }], "explanation": "Both values satisfy the characteristic equation.", "id": "step-3", "narration": "Check that each result makes the determinant zero.", "simpleExplanation": "Put each value back into the equation.", "title": "Verify the result", "why": "Verification confirms that no algebraic error changed the answer." }] : _bindingValue)(boardSteps)} title={((_bindingValue) => _bindingValue === undefined ? "Eigenvalues of a 2 × 2 matrix" : _bindingValue)(studentLesson?.title)} activeStep={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(activeStep)} learningGoal={((_bindingValue) => _bindingValue === undefined ? "Understand and verify every step." : _bindingValue)(studentLesson?.learningGoal)} onStepSelect={(...eventArgs) => _callAction("selectStudentStep", {}, eventArgs)} problemLabel={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(studentLesson?.problemLabel)} editOperations={[]} stepDurationMs={5500} lessonKind={((_bindingValue) => _bindingValue === undefined ? "worked-example" : _bindingValue)(studentLesson?.lessonKind)} autoAdvance={false} reducedMotion={false} captionsEnabled={true} problemStatement={((_bindingValue) => _bindingValue === undefined ? "Find the eigenvalues of A = [[2, 1], [1, 2]]." : _bindingValue)(studentLesson?.problemStatement)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="question_panel" className="rs-question-card" theme="auto" as="aside">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="question_kicker" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Teacher check" : _bindingValue)(_scope?.i18n?.teacherCheck)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="question_title" className="rs-question-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Select the best answer." : _bindingValue)(teacherQuestionPrompt)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormRadioGroup id="question_choices" onChangeValue={(...eventArgs) => _callAction("selectStudentAnswer", {}, eventArgs)} name="studentAnswer" size="md" label="Choose one answer" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(selectedTeacherAnswer)} layout="vertical" options={((_bindingValue) => _bindingValue === undefined ? [{ "label": "det(A − λI) = 0", "value": "a" }, { "label": "det(A + λI) = 1", "value": "b" }, { "label": "A + I = 0", "value": "c" }, { "label": "trace(A) = 0", "value": "d" }] : _bindingValue)(teacherQuestionOptions)} colorScheme="emerald" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="answer_feedback" className="rs-answer-feedback" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select one answer." : _bindingValue)(teacherAnswerFeedback)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="progress_box" className="flex flex-col rs-progress-box">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="progress_label" className="rs-muted" as="span" content={((_bindingValue) => _bindingValue === undefined ? "Lesson progress" : _bindingValue)(_scope?.i18n?.progress)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="progress_value" className="rs-progress-value" as="strong" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(progressPercent)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="question_actions" className="flex flex-wrap rs-question-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="complete_button" onAction={(...eventArgs) => _callAction("completeStudentProblem", {}, eventArgs)} label="Mark complete" theme="auto" variant="primary" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="next_button" label="Next problem" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("requestNextProblem", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.problem?.statement)) && (<>      <RudraCoreButton id="request_solution" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.loading)} variant="primary" onAction={(...eventArgs) => _callAction("requestStudentSolution", {}, eventArgs)} loadingText="Preparing lesson…" label="Load solution" theme="auto" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutContainer>
</>)}
    </div>
  );
}
