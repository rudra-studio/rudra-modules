import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Button as RudraCoreButton, Typography as RudraCoreTypography, Alert as RudraCoreAlert, Card as RudraCoreCard } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { UniversalIcon } from './universal-icon.jsx';

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

  const subjectCards = props.subjectCards !== undefined ? props.subjectCards : (props.data?.subjectCards !== undefined ? props.data.subjectCards : [{"description":"Vectors, matrices, linear maps, eigenvalues and diagonalisation.","redirectionLink":"/browse/engineering/semester-1/linear-algebra","title":"Linear algebra"},{"description":"Limits, derivatives, integration and multivariable reasoning.","redirectionLink":"/browse/engineering/semester-1/calculus","title":"Calculus"},{"description":"Logic, combinatorics, graphs and recurrence relations.","redirectionLink":"/browse/engineering/semester-1/discrete-mathematics","title":"Discrete mathematics"}]);
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const programmeSlug = props.programmeSlug !== undefined ? props.programmeSlug : (props.data?.programmeSlug !== undefined ? props.data.programmeSlug : "engineering");
  const initialSolveMode = props.initialSolveMode !== undefined ? props.initialSolveMode : (props.data?.initialSolveMode !== undefined ? props.data.initialSolveMode : "answer");
  const autoSolveOnLoad = props.autoSolveOnLoad !== undefined ? props.autoSolveOnLoad : (props.data?.autoSolveOnLoad !== undefined ? props.data.autoSolveOnLoad : true);
  const semesterSlug = props.semesterSlug !== undefined ? props.semesterSlug : (props.data?.semesterSlug !== undefined ? props.data.semesterSlug : "semester-1");
  const subjectSlug = props.subjectSlug !== undefined ? props.subjectSlug : (props.data?.subjectSlug !== undefined ? props.data.subjectSlug : "linear-algebra");
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const pageMode = props.pageMode !== undefined ? props.pageMode : (props.data?.pageMode !== undefined ? props.data.pageMode : "landing");
  const accessProfile = props.accessProfile !== undefined ? props.accessProfile : (props.data?.accessProfile !== undefined ? props.data.accessProfile : {});
  const returnPath = props.returnPath !== undefined ? props.returnPath : (props.data?.returnPath !== undefined ? props.data.returnPath : "/learn");
  const inputs = { "subjectCards": subjectCards, "authenticated": authenticated, "programmeSlug": programmeSlug, "initialSolveMode": initialSolveMode, "autoSolveOnLoad": autoSolveOnLoad, "semesterSlug": semesterSlug, "subjectSlug": subjectSlug, "locale": locale, "pageMode": pageMode, "accessProfile": accessProfile, "returnPath": returnPath };
  const [problemText, set_problemText] = useState(() => structuredClone("Solve the system 2x + y = 7 and −x + y = 1."));
  const [accessDecision, set_accessDecision] = useState(() => structuredClone({"authenticated":false,"isRegistered":false,"roles":[],"verificationStatus":"not_required"}));
  const [showAccessHint, set_showAccessHint] = useState(() => structuredClone(true));
  const [lastProblemControlId, set_lastProblemControlId] = useState(() => structuredClone(""));
  const [canOpenProfessorStudio, set_canOpenProfessorStudio] = useState(() => structuredClone(false));
  const [showDemoSolution, set_showDemoSolution] = useState(() => structuredClone(true));
  const [demoSolutionText, set_demoSolutionText] = useState(() => structuredClone("x = 2 and y = 3. Both equations are satisfied."));
  const [demoSolutionMode, set_demoSolutionMode] = useState(() => structuredClone("answer"));
  const [demoSolutionTitle, set_demoSolutionTitle] = useState(() => structuredClone("Quick answer"));
  const [canLearn, set_canLearn] = useState(() => structuredClone(false));
  const [actionMessage, set_actionMessage] = useState(() => structuredClone(""));
  const [showActionMessage, set_showActionMessage] = useState(() => structuredClone(false));
  const [problemLanguage, set_problemLanguage] = useState(() => structuredClone("en"));
  const state = { "problemText": problemText, "accessDecision": accessDecision, "showAccessHint": showAccessHint, "lastProblemControlId": lastProblemControlId, "canOpenProfessorStudio": canOpenProfessorStudio, "showDemoSolution": showDemoSolution, "demoSolutionText": demoSolutionText, "demoSolutionMode": demoSolutionMode, "demoSolutionTitle": demoSolutionTitle, "canLearn": canLearn, "actionMessage": actionMessage, "showActionMessage": showActionMessage, "problemLanguage": problemLanguage };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "problemText": { const next = typeof value === 'function' ? value(state.problemText) : value; state.problemText = next; set_problemText(next); return next; }
      case "accessDecision": { const next = typeof value === 'function' ? value(state.accessDecision) : value; state.accessDecision = next; set_accessDecision(next); return next; }
      case "showAccessHint": { const next = typeof value === 'function' ? value(state.showAccessHint) : value; state.showAccessHint = next; set_showAccessHint(next); return next; }
      case "lastProblemControlId": { const next = typeof value === 'function' ? value(state.lastProblemControlId) : value; state.lastProblemControlId = next; set_lastProblemControlId(next); return next; }
      case "canOpenProfessorStudio": { const next = typeof value === 'function' ? value(state.canOpenProfessorStudio) : value; state.canOpenProfessorStudio = next; set_canOpenProfessorStudio(next); return next; }
      case "showDemoSolution": { const next = typeof value === 'function' ? value(state.showDemoSolution) : value; state.showDemoSolution = next; set_showDemoSolution(next); return next; }
      case "demoSolutionText": { const next = typeof value === 'function' ? value(state.demoSolutionText) : value; state.demoSolutionText = next; set_demoSolutionText(next); return next; }
      case "demoSolutionMode": { const next = typeof value === 'function' ? value(state.demoSolutionMode) : value; state.demoSolutionMode = next; set_demoSolutionMode(next); return next; }
      case "demoSolutionTitle": { const next = typeof value === 'function' ? value(state.demoSolutionTitle) : value; state.demoSolutionTitle = next; set_demoSolutionTitle(next); return next; }
      case "canLearn": { const next = typeof value === 'function' ? value(state.canLearn) : value; state.canLearn = next; set_canLearn(next); return next; }
      case "actionMessage": { const next = typeof value === 'function' ? value(state.actionMessage) : value; state.actionMessage = next; set_actionMessage(next); return next; }
      case "showActionMessage": { const next = typeof value === 'function' ? value(state.showActionMessage) : value; state.showActionMessage = next; set_showActionMessage(next); return next; }
      case "problemLanguage": { const next = typeof value === 'function' ? value(state.problemLanguage) : value; state.problemLanguage = next; set_problemLanguage(next); return next; }
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
      case "problemText": _setState("problemText", updateNested); return value;
      case "accessDecision": _setState("accessDecision", updateNested); return value;
      case "showAccessHint": _setState("showAccessHint", updateNested); return value;
      case "lastProblemControlId": _setState("lastProblemControlId", updateNested); return value;
      case "canOpenProfessorStudio": _setState("canOpenProfessorStudio", updateNested); return value;
      case "showDemoSolution": _setState("showDemoSolution", updateNested); return value;
      case "demoSolutionText": _setState("demoSolutionText", updateNested); return value;
      case "demoSolutionMode": _setState("demoSolutionMode", updateNested); return value;
      case "demoSolutionTitle": _setState("demoSolutionTitle", updateNested); return value;
      case "canLearn": _setState("canLearn", updateNested); return value;
      case "actionMessage": _setState("actionMessage", updateNested); return value;
      case "showActionMessage": _setState("showActionMessage", updateNested); return value;
      case "problemLanguage": _setState("problemLanguage", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"accessRequired":{"properties":{"path":{"type":"string"},"reason":{"type":"string"},"returnPath":{"type":"string"}},"required":["reason","returnPath","path"],"type":"object"},"imageProblemRequested":{"properties":{"context":{"type":"object"}},"type":"object"},"navigationRequested":{"properties":{"path":{"type":"string"}},"type":"object"},"problemSubmitted":{"properties":{"context":{"type":"object"},"languageCode":{"type":"string"},"mode":{"type":"string"},"problem":{"type":"string"}},"required":["problem","mode","languageCode"],"type":"object"}};
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

  async function initializeHomeDemo(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const language = ['en', 'hi', 'ta'].includes(String(inputs.locale || 'en')) ? String(inputs.locale || 'en') : 'en';
const mode = ['answer', 'steps'].includes(String(inputs.initialSolveMode || 'answer')) ? String(inputs.initialSolveMode || 'answer') : 'answer';
const copy = {
  en: {
    problem: 'Solve the system 2x + y = 7 and −x + y = 1.',
    answerTitle: 'Quick answer',
    answer: 'x = 2 and y = 3. Both equations are satisfied.',
    stepsTitle: 'Detailed solution',
    steps: '1. Subtract the second equation from the first: 3x = 6.  2. Therefore x = 2.  3. Substitute into −x + y = 1: −2 + y = 1.  4. Therefore y = 3.  5. Check: 2(2) + 3 = 7.'
  },
  hi: {
    problem: 'समीकरण 2x + y = 7 और −x + y = 1 हल कीजिए।',
    answerTitle: 'त्वरित उत्तर',
    answer: 'x = 2 और y = 3। दोनों समीकरण संतुष्ट होते हैं।',
    stepsTitle: 'विस्तृत हल',
    steps: '1. पहले समीकरण में से दूसरा घटाएँ: 3x = 6।  2. इसलिए x = 2।  3. इसे −x + y = 1 में रखें: −2 + y = 1।  4. इसलिए y = 3।  5. जाँच: 2(2) + 3 = 7।'
  },
  ta: {
    problem: '2x + y = 7 மற்றும் −x + y = 1 என்ற சமன்பாடுகளைத் தீர்க்கவும்.',
    answerTitle: 'விரைவு விடை',
    answer: 'x = 2 மற்றும் y = 3. இரண்டு சமன்பாடுகளும் நிறைவேறுகின்றன.',
    stepsTitle: 'விரிவான தீர்வு',
    steps: '1. முதல் சமன்பாட்டிலிருந்து இரண்டாவதை கழிக்கவும்: 3x = 6.  2. ஆகவே x = 2.  3. இதை −x + y = 1 இல் பதிலிடவும்: −2 + y = 1.  4. ஆகவே y = 3.  5. சரிபார்ப்பு: 2(2) + 3 = 7.'
  }
};
const selected = copy[language];
return { language, mode, problem: selected.problem, title: mode === 'steps' ? selected.stepsTitle : selected.answerTitle, solution: mode === 'steps' ? selected.steps : selected.answer, show: inputs.autoSolveOnLoad !== false };
      })();
      stepResults["demo_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("problemText", stepResults.demo_prepare.problem);
    _setState("demoSolutionTitle", stepResults.demo_prepare.title);
    _setState("demoSolutionText", stepResults.demo_prepare.solution);
    _setState("demoSolutionMode", stepResults.demo_prepare.mode);
    _setState("showDemoSolution", stepResults.demo_prepare.show);
    return stepResults.demo_prepare;
    return undefined;
  }

  async function showQuickSolution(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const language = ['en', 'hi', 'ta'].includes(String(inputs.locale || 'en')) ? String(inputs.locale || 'en') : 'en';
const copy = {
  en: { title: 'Quick answer', solution: 'x = 2 and y = 3. Both equations are satisfied.' },
  hi: { title: 'त्वरित उत्तर', solution: 'x = 2 और y = 3। दोनों समीकरण संतुष्ट होते हैं।' },
  ta: { title: 'விரைவு விடை', solution: 'x = 2 மற்றும் y = 3. இரண்டு சமன்பாடுகளும் நிறைவேறுகின்றன.' }
};
return { language, title: copy[language].title, solution: copy[language].solution };
      })();
      stepResults["showQuickSolution_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("demoSolutionTitle", stepResults.showQuickSolution_prepare.title);
    _setState("demoSolutionText", stepResults.showQuickSolution_prepare.solution);
    _setState("demoSolutionMode", "answer");
    _setState("showDemoSolution", true);
    return { "mode": "answer", "ok": true, "solution": stepResults.showQuickSolution_prepare.solution };
    return undefined;
  }

  async function showDetailedSolution(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const language = ['en', 'hi', 'ta'].includes(String(inputs.locale || 'en')) ? String(inputs.locale || 'en') : 'en';
const copy = {
  en: { title: 'Detailed solution', solution: '1. Subtract the second equation from the first: 3x = 6.  2. Therefore x = 2.  3. Substitute into −x + y = 1: −2 + y = 1.  4. Therefore y = 3.  5. Check: 2(2) + 3 = 7.' },
  hi: { title: 'विस्तृत हल', solution: '1. पहले समीकरण में से दूसरा घटाएँ: 3x = 6।  2. इसलिए x = 2।  3. इसे −x + y = 1 में रखें: −2 + y = 1।  4. इसलिए y = 3।  5. जाँच: 2(2) + 3 = 7।' },
  ta: { title: 'விரிவான தீர்வு', solution: '1. முதல் சமன்பாட்டிலிருந்து இரண்டாவதை கழிக்கவும்: 3x = 6.  2. ஆகவே x = 2.  3. இதை −x + y = 1 இல் பதிலிடவும்: −2 + y = 1.  4. ஆகவே y = 3.  5. சரிபார்ப்பு: 2(2) + 3 = 7.' }
};
return { language, title: copy[language].title, solution: copy[language].solution };
      })();
      stepResults["showDetailedSolution_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("demoSolutionTitle", stepResults.showDetailedSolution_prepare.title);
    _setState("demoSolutionText", stepResults.showDetailedSolution_prepare.solution);
    _setState("demoSolutionMode", "steps");
    _setState("showDemoSolution", true);
    return { "mode": "steps", "ok": true, "solution": stepResults.showDetailedSolution_prepare.solution };
    return undefined;
  }

  async function requestImage(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id) || inputs.authenticated === true;
const isRegistered = hasProfile ? profile.isRegistered === true : inputs.authenticated === true;
const roles = Array.isArray(profile.roles) ? profile.roles.map(String) : [];
const verificationStatus = String(profile.verificationStatus || 'not_required');
const hasProfessorRole = roles.includes('professor') || roles.includes('educator') || roles.includes('admin') || roles.includes('institution_admin');
const canOpenProfessorStudio = isRegistered && hasProfessorRole && !['pending', 'rejected', 'revoked'].includes(verificationStatus);
return { authenticated, isRegistered, roles, verificationStatus, canLearn: isRegistered, canOpenProfessorStudio };
      })();
      stepResults["image_access"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.image_access.canLearn) {
      _setState("actionMessage", "");
      _setState("showActionMessage", false);
      void _emitOutput("imageProblemRequested", { "context": { "programmeSlug": inputs.programmeSlug, "semesterSlug": inputs.semesterSlug, "subjectSlug": inputs.subjectSlug } }, false).catch(error => console.error('Module output delivery failed', error));
      return { "ok": true };
    } else {
      _setState("actionMessage", "Sign in and complete your Scholar profile before uploading a problem image.");
      _setState("showActionMessage", true);
      await requestScholarAccess({ "reason": "registration_required", "returnPath": inputs.returnPath });
      return stepResults.image_denied_request;
    }
    return undefined;
  }

  async function submitProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id) || inputs.authenticated === true;
const isRegistered = hasProfile ? profile.isRegistered === true : inputs.authenticated === true;
const problem = String(state.problemText || '').trim();
return { authenticated, isRegistered, canLearn: isRegistered, problem, hasProblem: problem.length > 0 };
      })();
      stepResults["problem_check"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.problem_check.canLearn) {
      if (stepResults.problem_check.hasProblem) {
        _setState("actionMessage", "");
        _setState("showActionMessage", false);
        void _emitOutput("problemSubmitted", { "context": { "programmeSlug": inputs.programmeSlug, "semesterSlug": inputs.semesterSlug, "subjectSlug": inputs.subjectSlug }, "languageCode": inputs.locale || 'en', "mode": args.mode, "problem": stepResults.problem_check.problem }, false).catch(error => console.error('Module output delivery failed', error));
        return { "languageCode": inputs.locale || 'en', "mode": args.mode, "ok": true, "problem": stepResults.problem_check.problem };
      } else {
        _setState("actionMessage", "Enter a mathematics problem before continuing.");
        _setState("showActionMessage", true);
        return { "ok": false, "reason": "empty_problem" };
      }
    } else {
      _setState("actionMessage", "Sign in and complete your Scholar profile to solve this problem.");
      _setState("showActionMessage", true);
      await requestScholarAccess({ "reason": "registration_required", "returnPath": inputs.returnPath });
      return stepResults.problem_denied_request;
    }
    return undefined;
  }

  async function navigate(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("navigationRequested", { "path": args.path }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function requestScholarAccess(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const reason = String(args.reason || 'registration_required');
const returnPath = String(args.returnPath || inputs.returnPath || '/learn');
const base = reason === 'professor_approval_required' ? '/account/verification' : '/access';
const path = base === '/access' ? base + '?returnPath=' + encodeURIComponent(returnPath) : base;
return { reason, returnPath, path };
      })();
      stepResults["access_request_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    void _emitOutput("accessRequired", { "path": stepResults.access_request_prepare.path, "reason": stepResults.access_request_prepare.reason, "returnPath": stepResults.access_request_prepare.returnPath }, false).catch(error => console.error('Module output delivery failed', error));
    void _emitOutput("navigationRequested", { "path": stepResults.access_request_prepare.path }, false).catch(error => console.error('Module output delivery failed', error));
    return stepResults.access_request_prepare;
    return undefined;
  }

  async function initializeDiscoveryAccess(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id) || inputs.authenticated === true;
const isRegistered = hasProfile ? profile.isRegistered === true : inputs.authenticated === true;
const roles = Array.isArray(profile.roles) ? profile.roles.map(String) : [];
const verificationStatus = String(profile.verificationStatus || 'not_required');
const hasProfessorRole = roles.includes('professor') || roles.includes('educator') || roles.includes('admin') || roles.includes('institution_admin');
const canOpenProfessorStudio = isRegistered && hasProfessorRole && !['pending', 'rejected', 'revoked'].includes(verificationStatus);
return { authenticated, isRegistered, roles, verificationStatus, canLearn: isRegistered, canOpenProfessorStudio };
      })();
      stepResults["access_derive"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("accessDecision", stepResults.access_derive);
    _setState("canLearn", stepResults.access_derive.canLearn);
    _setState("canOpenProfessorStudio", stepResults.access_derive.canOpenProfessorStudio);
    return stepResults.access_derive;
    return undefined;
  }

  async function openProfessorStudio(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id) || inputs.authenticated === true;
const isRegistered = hasProfile ? profile.isRegistered === true : inputs.authenticated === true;
const roles = Array.isArray(profile.roles) ? profile.roles.map(String) : [];
const verificationStatus = String(profile.verificationStatus || 'not_required');
const hasProfessorRole = roles.includes('professor') || roles.includes('educator') || roles.includes('admin') || roles.includes('institution_admin');
const canOpenProfessorStudio = isRegistered && hasProfessorRole && !['pending', 'rejected', 'revoked'].includes(verificationStatus);
return { authenticated, isRegistered, roles, verificationStatus, canLearn: isRegistered, canOpenProfessorStudio };
      })();
      stepResults["professor_access"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.professor_access.canOpenProfessorStudio) {
      void _emitOutput("navigationRequested", { "path": "/professor/context" }, false).catch(error => console.error('Module output delivery failed', error));
      return { "ok": true, "path": "/professor/context" };
    } else {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const registered = stepResults.professor_access.isRegistered === true;
return {
  reason: registered ? 'professor_approval_required' : 'registration_required',
  returnPath: '/professor/context',
  message: registered ? 'Professor tools require an approved educator role.' : 'Sign in and complete registration before opening Professor Studio.'
};
        })();
        stepResults["professor_denied_prepare"] = customResult; vars["customCodeResult"] = customResult; }
      _setState("actionMessage", stepResults.professor_denied_prepare.message);
      _setState("showActionMessage", true);
      await requestScholarAccess({ "reason": stepResults.professor_denied_prepare.reason, "returnPath": stepResults.professor_denied_prepare.returnPath });
      return stepResults.professor_denied_request;
    }
    return undefined;
  }

  const _localActions = {
    "initializeHomeDemo": initializeHomeDemo,
    "showQuickSolution": showQuickSolution,
    "showDetailedSolution": showDetailedSolution,
    "requestImage": requestImage,
    "submitProblem": submitProblem,
    "navigate": navigate,
    "requestScholarAccess": requestScholarAccess,
    "initializeDiscoveryAccess": initializeDiscoveryAccess,
    "openProfessorStudio": openProfessorStudio,
  };
  const _localActionArguments = {
    "initializeHomeDemo": [],
    "showQuickSolution": [],
    "showDetailedSolution": [],
    "requestImage": [],
    "submitProblem": ["mode"],
    "navigate": ["path"],
    "requestScholarAccess": ["reason", "returnPath"],
    "initializeDiscoveryAccess": [],
    "openProfessorStudio": [],
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
    void _runLifecycle("discovery_access_mountinitializeDiscoveryAccess", "takeLatest", (signal) => initializeDiscoveryAccess({ signal }), "Module mount lifecycle failed:");
  }, []);
  useEffect(() => {
    void _runLifecycle("discovery_demo_mountinitializeHomeDemo", "takeLatest", (signal) => initializeHomeDemo({ signal }), "Module mount lifecycle failed:");
  }, []);
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; return; }
    void _runLifecycle("discovery_access_inputsinitializeDiscoveryAccess", "takeLatest", (signal) => initializeDiscoveryAccess({ signal }), 'Module input lifecycle failed:');
  }, [authenticated, accessProfile]);
  const _inputLifecycleMounted1 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted1.current) { _inputLifecycleMounted1.current = true; return; }
    void _runLifecycle("discovery_demo_inputsinitializeHomeDemo", "takeLatest", (signal) => initializeHomeDemo({ signal }), 'Module input lifecycle failed:');
  }, [locale, autoSolveOnLoad, initialSolveMode]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="root" className="block rs-discovery">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero" className="block rs-hero">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero_inner" className="grid rs-hero-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="copy" className="flex flex-col rs-stack">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="kicker" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "A mathematics studio for college" : _bindingValue)(_scope?.i18n?.kicker)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className="rs-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "See the reasoning. Steer the lesson." : _bindingValue)(_scope?.i18n?.title)} customColor="#effff9" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="lede" className="rs-lede" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Choose programme, semester and subject, then learn step by step." : _bindingValue)(_scope?.i18n?.lede)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="browse_cta" label={((_bindingValue) => _bindingValue === undefined ? "Browse mathematics" : _bindingValue)(_scope?.i18n?.browse)} theme="dark" variant="primary" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse/engineering/semester-1"}, eventArgs)} size="lg" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_cta" theme="dark" variant="outline" onAction={(...eventArgs) => _callAction("openProfessorStudio", {}, eventArgs)} size="lg" label="Professor Studio" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="workbench" className="flex flex-col rs-workbench">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prompt_title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Try a solved example" : _bindingValue)(_scope?.i18n?.prompt)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_input" className="rs-demo-problem" content={((_bindingValue) => _bindingValue === undefined ? "Solve the system 2x + y = 7 and −x + y = 1." : _bindingValue)(problemText)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="solve_now" additionalAttributes={{}} id="scholar-demo-quick" type="button" label={((_bindingValue) => _bindingValue === undefined ? "Solve now" : _bindingValue)(_scope?.i18n?.solveNow)} theme="light" variant="primary" onAction={(...eventArgs) => _callAction("showQuickSolution", {}, eventArgs)} ariaLabel="Show the quick solution" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="steps" label={((_bindingValue) => _bindingValue === undefined ? "Solve detailed steps" : _bindingValue)(_scope?.i18n?.solveSteps)} theme="light" variant="outline" onAction={(...eventArgs) => _callAction("showDetailedSolution", {}, eventArgs)} ariaLabel="Show the detailed step-by-step solution" additionalAttributes={{}} id="scholar-demo-detailed" type="button" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": false, "md": false, "sm": false })) && (<>      <RudraCoreButton id="teacher" label="Learn with professor" theme="light" variant="outline" onAction={(...eventArgs) => _callAction("submitProblem", {"mode": "professor"}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(showDemoSolution) && (<>      <RudraCoreAlert id="demo_solution" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"Sparkles"} id="demo_solution_icon" size={20} strokeWidth={1.8} />
</>)}
</>} title={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_title" className="rs-demo-solution-title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "Quick answer" : _bindingValue)(demoSolutionTitle)} />
</>)}
</>} appearance="outlined" live="polite" variant="success" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="image" leftIcon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"LockKeyhole"} id="image_lock_icon" size={18} strokeWidth={2} />
</>)}
</>} disabled={true} onAction={(...eventArgs) => _callAction("requestImage", {}, eventArgs)} ariaLabel="Image problem upload is locked until a post-release update" additionalAttributes={{"disabled":true,"title":"Planned for a post-release update"}} id="scholar-image-upload-locked" label="Upload an image · Coming soon" theme="light" variant="ghost" />
</>)}
      {isVisibleValue(showActionMessage) && (<>      <RudraCoreAlert id="problem_status" appearance="soft" live="polite" title="Action needed" variant="warning" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="subjects" className="flex flex-col rs-subject-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subjects_heading" className="rs-subjects-heading" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Start with a subject" : _bindingValue)(_scope?.i18n?.popular)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subjects_intro" className="rs-subjects-intro" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Choose a foundation subject and explore its concepts, examples, and problems." : _bindingValue)(_scope?.i18n?.subjectsIntro)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="subject_grid" className="grid rs-subject-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="linear" className="flex flex-col rs-subject-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="linear_title" className="rs-subject-card-title" as="h3" content="Linear algebra" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="linear_copy" className="rs-subject-card-copy" as="p" content="Vectors, matrices, linear maps, eigenvalues and diagonalisation." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="linear_go" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse/engineering/semester-1/linear-algebra"}, eventArgs)} fullWidth={true} size="md" label="Open subject" theme="auto" variant="outline" />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="calculus" className="flex flex-col rs-subject-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="calculus_title" className="rs-subject-card-title" as="h3" content="Calculus" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="calculus_copy" className="rs-subject-card-copy" as="p" content="Limits, derivatives, integration and multivariable reasoning." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="calculus_go" size="md" label="Open subject" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse/engineering/semester-1/calculus"}, eventArgs)} fullWidth={true} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="discrete" className="flex flex-col rs-subject-card" theme="auto" as="article">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="discrete_title" className="rs-subject-card-title" as="h3" content="Discrete mathematics" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="discrete_copy" className="rs-subject-card-copy" as="p" content="Logic, combinatorics, graphs and recurrence relations." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="discrete_go" size="md" label="Open subject" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse/engineering/semester-1/discrete-mathematics"}, eventArgs)} fullWidth={true} />
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
