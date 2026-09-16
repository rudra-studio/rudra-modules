import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Box as RudraLayoutBox, Repeater as RudraLayoutRepeater } from '@rudra-studio/rudra-layout';
import { Typography as RudraCoreTypography, Button as RudraCoreButton, Card as RudraCoreCard, Alert as RudraCoreAlert } from '@rudra-studio/rudra-core';
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

  const subjectCards = props.subjectCards !== undefined ? props.subjectCards : (props.data?.subjectCards !== undefined ? props.data.subjectCards : [{"description":"Vectors, matrices, linear maps, eigenvalues and diagonalisation.","locked":false,"redirectionLink":"/browse/engineering/semester-1/linear-algebra","title":"Linear algebra"},{"description":"Limits, derivatives, integration and multivariable reasoning.","locked":false,"redirectionLink":"/browse/engineering/semester-1/calculus","title":"Calculus"},{"description":"Logic, combinatorics, graphs and recurrence relations.","locked":false,"redirectionLink":"/browse/engineering/semester-1/discrete-mathematics","title":"Discrete mathematics"}]);
  const pageMode = props.pageMode !== undefined ? props.pageMode : (props.data?.pageMode !== undefined ? props.data.pageMode : "landing");
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const subjectsLocked = props.subjectsLocked !== undefined ? props.subjectsLocked : (props.data?.subjectsLocked !== undefined ? props.data.subjectsLocked : false);
  const programmeSlug = props.programmeSlug !== undefined ? props.programmeSlug : (props.data?.programmeSlug !== undefined ? props.data.programmeSlug : "engineering");
  const initialSolveMode = props.initialSolveMode !== undefined ? props.initialSolveMode : (props.data?.initialSolveMode !== undefined ? props.data.initialSolveMode : "answer");
  const subjectSlug = props.subjectSlug !== undefined ? props.subjectSlug : (props.data?.subjectSlug !== undefined ? props.data.subjectSlug : "linear-algebra");
  const returnPath = props.returnPath !== undefined ? props.returnPath : (props.data?.returnPath !== undefined ? props.data.returnPath : "/learn");
  const autoSolveOnLoad = props.autoSolveOnLoad !== undefined ? props.autoSolveOnLoad : (props.data?.autoSolveOnLoad !== undefined ? props.data.autoSolveOnLoad : true);
  const semesterSlug = props.semesterSlug !== undefined ? props.semesterSlug : (props.data?.semesterSlug !== undefined ? props.data.semesterSlug : "semester-1");
  const accessProfile = props.accessProfile !== undefined ? props.accessProfile : (props.data?.accessProfile !== undefined ? props.data.accessProfile : {});
  const inputs = { "subjectCards": subjectCards, "pageMode": pageMode, "authenticated": authenticated, "locale": locale, "subjectsLocked": subjectsLocked, "programmeSlug": programmeSlug, "initialSolveMode": initialSolveMode, "subjectSlug": subjectSlug, "returnPath": returnPath, "autoSolveOnLoad": autoSolveOnLoad, "semesterSlug": semesterSlug, "accessProfile": accessProfile };
  const [canOpenProfessorStudio, set_canOpenProfessorStudio] = useState(() => structuredClone(false));
  const [isSubjectNavigating, set_isSubjectNavigating] = useState(() => structuredClone(false));
  const [showDemoSolution, set_showDemoSolution] = useState(() => structuredClone(true));
  const [accessDecision, set_accessDecision] = useState(() => structuredClone({"authenticated":false,"isRegistered":false,"roles":[],"verificationStatus":"not_required"}));
  const [actionMessage, set_actionMessage] = useState(() => structuredClone(""));
  const [showActionMessage, set_showActionMessage] = useState(() => structuredClone(false));
  const [demoSolutionMode, set_demoSolutionMode] = useState(() => structuredClone("answer"));
  const [problemText, set_problemText] = useState(() => structuredClone("Solve the system 2x + y = 7 and −x + y = 1."));
  const [demoVisibleSteps, set_demoVisibleSteps] = useState(() => structuredClone([{"checked":false,"description":"Subtract the second equation from the first. The y terms cancel.","equation":"(2x + y) − (−x + y) = 7 − 1\n3x = 6","id":"demo-step-1","marker":"01","number":1,"title":"Eliminate y"}]));
  const [showAccessHint, set_showAccessHint] = useState(() => structuredClone(true));
  const [lastProblemControlId, set_lastProblemControlId] = useState(() => structuredClone(""));
  const [demoSolutionTitle, set_demoSolutionTitle] = useState(() => structuredClone("Quick answer"));
  const [canLearn, set_canLearn] = useState(() => structuredClone(false));
  const [demoSolutionText, set_demoSolutionText] = useState(() => structuredClone("x = 2 and y = 3. Both equations are satisfied."));
  const [problemLanguage, set_problemLanguage] = useState(() => structuredClone("en"));
  const [demoStepIndex, set_demoStepIndex] = useState(() => structuredClone(1));
  const [subjectNavigationFailed, set_subjectNavigationFailed] = useState(() => structuredClone(false));
  const state = { "canOpenProfessorStudio": canOpenProfessorStudio, "isSubjectNavigating": isSubjectNavigating, "showDemoSolution": showDemoSolution, "accessDecision": accessDecision, "actionMessage": actionMessage, "showActionMessage": showActionMessage, "demoSolutionMode": demoSolutionMode, "problemText": problemText, "demoVisibleSteps": demoVisibleSteps, "showAccessHint": showAccessHint, "lastProblemControlId": lastProblemControlId, "demoSolutionTitle": demoSolutionTitle, "canLearn": canLearn, "demoSolutionText": demoSolutionText, "problemLanguage": problemLanguage, "demoStepIndex": demoStepIndex, "subjectNavigationFailed": subjectNavigationFailed };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "canOpenProfessorStudio": { const next = typeof value === 'function' ? value(state.canOpenProfessorStudio) : value; state.canOpenProfessorStudio = next; set_canOpenProfessorStudio(next); return next; }
      case "isSubjectNavigating": { const next = typeof value === 'function' ? value(state.isSubjectNavigating) : value; state.isSubjectNavigating = next; set_isSubjectNavigating(next); return next; }
      case "showDemoSolution": { const next = typeof value === 'function' ? value(state.showDemoSolution) : value; state.showDemoSolution = next; set_showDemoSolution(next); return next; }
      case "accessDecision": { const next = typeof value === 'function' ? value(state.accessDecision) : value; state.accessDecision = next; set_accessDecision(next); return next; }
      case "actionMessage": { const next = typeof value === 'function' ? value(state.actionMessage) : value; state.actionMessage = next; set_actionMessage(next); return next; }
      case "showActionMessage": { const next = typeof value === 'function' ? value(state.showActionMessage) : value; state.showActionMessage = next; set_showActionMessage(next); return next; }
      case "demoSolutionMode": { const next = typeof value === 'function' ? value(state.demoSolutionMode) : value; state.demoSolutionMode = next; set_demoSolutionMode(next); return next; }
      case "problemText": { const next = typeof value === 'function' ? value(state.problemText) : value; state.problemText = next; set_problemText(next); return next; }
      case "demoVisibleSteps": { const next = typeof value === 'function' ? value(state.demoVisibleSteps) : value; state.demoVisibleSteps = next; set_demoVisibleSteps(next); return next; }
      case "showAccessHint": { const next = typeof value === 'function' ? value(state.showAccessHint) : value; state.showAccessHint = next; set_showAccessHint(next); return next; }
      case "lastProblemControlId": { const next = typeof value === 'function' ? value(state.lastProblemControlId) : value; state.lastProblemControlId = next; set_lastProblemControlId(next); return next; }
      case "demoSolutionTitle": { const next = typeof value === 'function' ? value(state.demoSolutionTitle) : value; state.demoSolutionTitle = next; set_demoSolutionTitle(next); return next; }
      case "canLearn": { const next = typeof value === 'function' ? value(state.canLearn) : value; state.canLearn = next; set_canLearn(next); return next; }
      case "demoSolutionText": { const next = typeof value === 'function' ? value(state.demoSolutionText) : value; state.demoSolutionText = next; set_demoSolutionText(next); return next; }
      case "problemLanguage": { const next = typeof value === 'function' ? value(state.problemLanguage) : value; state.problemLanguage = next; set_problemLanguage(next); return next; }
      case "demoStepIndex": { const next = typeof value === 'function' ? value(state.demoStepIndex) : value; state.demoStepIndex = next; set_demoStepIndex(next); return next; }
      case "subjectNavigationFailed": { const next = typeof value === 'function' ? value(state.subjectNavigationFailed) : value; state.subjectNavigationFailed = next; set_subjectNavigationFailed(next); return next; }
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
      case "canOpenProfessorStudio": _setState("canOpenProfessorStudio", updateNested); return value;
      case "isSubjectNavigating": _setState("isSubjectNavigating", updateNested); return value;
      case "showDemoSolution": _setState("showDemoSolution", updateNested); return value;
      case "accessDecision": _setState("accessDecision", updateNested); return value;
      case "actionMessage": _setState("actionMessage", updateNested); return value;
      case "showActionMessage": _setState("showActionMessage", updateNested); return value;
      case "demoSolutionMode": _setState("demoSolutionMode", updateNested); return value;
      case "problemText": _setState("problemText", updateNested); return value;
      case "demoVisibleSteps": _setState("demoVisibleSteps", updateNested); return value;
      case "showAccessHint": _setState("showAccessHint", updateNested); return value;
      case "lastProblemControlId": _setState("lastProblemControlId", updateNested); return value;
      case "demoSolutionTitle": _setState("demoSolutionTitle", updateNested); return value;
      case "canLearn": _setState("canLearn", updateNested); return value;
      case "demoSolutionText": _setState("demoSolutionText", updateNested); return value;
      case "problemLanguage": _setState("problemLanguage", updateNested); return value;
      case "demoStepIndex": _setState("demoStepIndex", updateNested); return value;
      case "subjectNavigationFailed": _setState("subjectNavigationFailed", updateNested); return value;
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

  async function requestImage(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id) || inputs.authenticated === true;
const isRegistered = authenticated && profile.isRegistered === true;
const roles = Array.isArray(profile.roles) ? profile.roles.map(String) : [];
const verificationStatus = String(profile.verificationStatus || 'not_required');
const hasProfessorRole = roles.includes('professor') || roles.includes('educator') || roles.includes('admin') || roles.includes('institution_admin');
const canOpenProfessorStudio = isRegistered && hasProfessorRole && ['approved', 'verified'].includes(verificationStatus);
return { authenticated, isRegistered, roles, verificationStatus, canLearn: isRegistered, canOpenProfessorStudio };
        })();
        stepResults["image_access"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "image_access" };
      vars.error = error; stepResults["image_access"] = { error };
      _setState("actionMessage", "This action could not be completed. Please retry.");
      _setState("showActionMessage", true);
      return { "ok": false };
      return undefined;
    }
    if (stepResults.image_access.canLearn) {
      _setState("actionMessage", "");
      _setState("showActionMessage", false);
      try {
        await _emitOutput("imageProblemRequested", { "context": { "programmeSlug": inputs.programmeSlug, "semesterSlug": inputs.semesterSlug, "subjectSlug": inputs.subjectSlug } }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "image_emit" };
        vars.error = error; stepResults["image_emit"] = { error };
        _setState("actionMessage", "This action could not be completed. Please retry.");
        _setState("showActionMessage", true);
        return { "ok": false };
        return undefined;
      }
      return { "ok": true };
    } else {
      _setState("actionMessage", "Sign in and complete your Scholar profile before uploading a problem image.");
      _setState("showActionMessage", true);
      try {
        await requestScholarAccess({ "reason": "registration_required", "returnPath": inputs.returnPath });
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "image_denied_request" };
        vars.error = error; stepResults["image_denied_request"] = { error };
        _setState("actionMessage", "This action could not be completed. Please retry.");
        _setState("showActionMessage", true);
        return { "ok": false };
        return undefined;
      }
      return stepResults.image_denied_request;
    }
    return undefined;
  }

  async function requestScholarAccess(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const reason = String(args.reason || 'registration_required');
const returnPath = String(args.returnPath || inputs.returnPath || '/learn');
const base = reason === 'professor_approval_required' ? '/account/verification' : '/access';
const path = base === '/access' ? base + '?returnPath=' + encodeURIComponent(returnPath) : base;
return { reason, returnPath, path };
        })();
        stepResults["access_request_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "access_request_prepare" };
      vars.error = error; stepResults["access_request_prepare"] = { error };
      _setState("actionMessage", "This action could not be completed. Please retry.");
      _setState("showActionMessage", true);
      return { "ok": false };
      return undefined;
    }
    try {
      await _emitOutput("accessRequired", { "path": stepResults.access_request_prepare.path, "reason": stepResults.access_request_prepare.reason, "returnPath": stepResults.access_request_prepare.returnPath }, true);
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "access_request_emit" };
      vars.error = error; stepResults["access_request_emit"] = { error };
      _setState("actionMessage", "This action could not be completed. Please retry.");
      _setState("showActionMessage", true);
      return { "ok": false };
      return undefined;
    }
    try {
      await _emitOutput("navigationRequested", { "path": stepResults.access_request_prepare.path }, true);
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "access_request_navigate" };
      vars.error = error; stepResults["access_request_navigate"] = { error };
      _setState("actionMessage", "This action could not be completed. Please retry.");
      _setState("showActionMessage", true);
      return { "ok": false };
      return undefined;
    }
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
const isRegistered = authenticated && profile.isRegistered === true;
const roles = Array.isArray(profile.roles) ? profile.roles.map(String) : [];
const verificationStatus = String(profile.verificationStatus || 'not_required');
const hasProfessorRole = roles.includes('professor') || roles.includes('educator') || roles.includes('admin') || roles.includes('institution_admin');
const canOpenProfessorStudio = isRegistered && hasProfessorRole && ['approved', 'verified'].includes(verificationStatus);
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
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id) || inputs.authenticated === true;
const isRegistered = authenticated && profile.isRegistered === true;
const roles = Array.isArray(profile.roles) ? profile.roles.map(String) : [];
const verificationStatus = String(profile.verificationStatus || 'not_required');
const hasProfessorRole = roles.includes('professor') || roles.includes('educator') || roles.includes('admin') || roles.includes('institution_admin');
const canOpenProfessorStudio = isRegistered && hasProfessorRole && ['approved', 'verified'].includes(verificationStatus);
return { authenticated, isRegistered, roles, verificationStatus, canLearn: isRegistered, canOpenProfessorStudio };
        })();
        stepResults["professor_access"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "professor_access" };
      vars.error = error; stepResults["professor_access"] = { error };
      _setState("actionMessage", "This action could not be completed. Please retry.");
      _setState("showActionMessage", true);
      return { "ok": false };
      return undefined;
    }
    if (stepResults.professor_access.canOpenProfessorStudio) {
      try {
        await _emitOutput("navigationRequested", { "path": "/professor/context" }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "professor_open" };
        vars.error = error; stepResults["professor_open"] = { error };
        _setState("actionMessage", "This action could not be completed. Please retry.");
        _setState("showActionMessage", true);
        return { "ok": false };
        return undefined;
      }
      return { "ok": true, "path": "/professor/context" };
    } else {
      try {
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
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "professor_denied_prepare" };
        vars.error = error; stepResults["professor_denied_prepare"] = { error };
        _setState("actionMessage", "This action could not be completed. Please retry.");
        _setState("showActionMessage", true);
        return { "ok": false };
        return undefined;
      }
      _setState("actionMessage", stepResults.professor_denied_prepare.message);
      _setState("showActionMessage", true);
      try {
        await requestScholarAccess({ "reason": stepResults.professor_denied_prepare.reason, "returnPath": stepResults.professor_denied_prepare.returnPath });
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "professor_denied_request" };
        vars.error = error; stepResults["professor_denied_request"] = { error };
        _setState("actionMessage", "This action could not be completed. Please retry.");
        _setState("showActionMessage", true);
        return { "ok": false };
        return undefined;
      }
      return stepResults.professor_denied_request;
    }
    return undefined;
  }

  async function navigate(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await _emitOutput("navigationRequested", { "path": args.path }, true);
    return undefined;
  }

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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function demoSolutionPresentation(locale) {
  const equations = [
    '(2x + y) − (−x + y) = 7 − 1\n3x = 6',
    'x = 6 ÷ 3 = 2',
    '−2 + y = 1',
    'y = 1 + 2 = 3',
    '2(2) + 3 = 7 ✓\n−2 + 3 = 1 ✓',
  ];
  const copy = {
    en: {
      method: 'Elimination method', result: 'The solution pair', verified: 'Both equations checked', list: 'Step-by-step solution',
      titles: ['Eliminate y', 'Solve for x', 'Substitute x = 2', 'Solve for y', 'Check both equations'],
      descriptions: [
        'Subtract the second equation from the first. The y terms cancel.',
        'Divide both sides by 3 to isolate x.',
        'Use the value of x in the second equation, −x + y = 1.',
        'Add 2 to both sides to isolate y.',
        'Substitute the pair into the original equations. Both sides match.',
      ],
    },
    hi: {
      method: 'विलोपन विधि', result: 'हल का युग्म', verified: 'दोनों समीकरणों की जाँच हुई', list: 'चरण-दर-चरण हल',
      titles: ['y को हटाएँ', 'x का मान निकालें', 'x = 2 रखें', 'y का मान निकालें', 'दोनों समीकरण जाँचें'],
      descriptions: [
        'पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।',
        'x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।',
        'दूसरे समीकरण −x + y = 1 में x का मान रखें।',
        'y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।',
        'मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।',
      ],
    },
    ta: {
      method: 'நீக்கல் முறை', result: 'தீர்வு இணை', verified: 'இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன', list: 'படிப்படியான தீர்வு',
      titles: ['y-ஐ நீக்கவும்', 'x-ஐக் கண்டறியவும்', 'x = 2 எனப் பதிலிடவும்', 'y-ஐக் கண்டறியவும்', 'இரு சமன்பாடுகளையும் சரிபார்க்கவும்'],
      descriptions: [
        'முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.',
        'x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.',
        'இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.',
        'y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.',
        'மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்.',
      ],
    },
  };
  const selected = Object.hasOwn(copy, String(locale)) ? copy[String(locale)] : copy.en;
  return {
    method: selected.method, result: selected.result, verified: selected.verified, list: selected.list,
    steps: selected.titles.map((title, index) => ({
      id: `demo-step-${index + 1}`, number: index + 1, marker: String(index + 1).padStart(2, '0'),
      title, description: selected.descriptions[index], equation: equations[index], checked: index === 4,
    })),
  };
}
const steps = demoSolutionPresentation(inputs.locale).steps;
return steps.slice(0, 1);
      })();
      stepResults["compact_step_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("demoStepIndex", 1);
    _setState("demoVisibleSteps", stepResults.compact_step_prepare);
    return stepResults.demo_prepare;
    return undefined;
  }

  async function openDiscoverySubject(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const cards = (function normalizeLockableSubjects(inputs) {
  const cards = [], seen = new Set();
  const copy = { en: ['Open subject', 'Locked'], hi: ['विषय खोलें', 'लॉक है'], ta: ['பாடத்தைத் திற', 'பூட்டப்பட்டுள்ளது'] };
  const labels = Object.hasOwn(copy, String(inputs?.locale)) ? copy[String(inputs.locale)] : copy.en;
  if (!Array.isArray(inputs?.subjectCards)) return cards;
  for (const item of inputs.subjectCards.slice(0, 100)) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
    const title = typeof item.title === 'string' ? item.title.trim().slice(0, 120) : '';
    const path = typeof item.redirectionLink === 'string' ? item.redirectionLink.trim() : '';
    if (!title || !path.startsWith('/') || path.startsWith('//') || path.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(path) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(path)) continue;
    if (seen.has(path)) continue;
    seen.add(path);
    const locked = inputs.subjectsLocked === true || item.locked === true;
    const lockLabel = typeof item.lockedLabel === 'string' && item.lockedLabel.trim() ? item.lockedLabel.trim().slice(0, 120) : labels[1];
    cards.push({ id: path, title, description: typeof item.description === 'string' ? item.description.trim().slice(0, 600) : '', redirectionLink: path, locked, actionLabel: locked ? lockLabel : labels[0] });
  }
  return cards;
})(inputs);
return !state.isSubjectNavigating && cards.find(card => card.redirectionLink === args.event?.value && !card.locked) || null;
      })();
      stepResults["subject_guard"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.subject_guard) {
      _setState("subjectNavigationFailed", false);
      _setState("isSubjectNavigating", true);
      try {
        await _emitOutput("navigationRequested", { "path": stepResults.subject_guard.redirectionLink }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "subject_emit" };
        vars.error = error; stepResults["subject_emit"] = { error };
        _setState("subjectNavigationFailed", true);
        _setState("isSubjectNavigating", false);
        return { "ok": false };
        return undefined;
      }
      _setState("isSubjectNavigating", false);
      return { "ok": true };
    } else {
      return { "ok": false, "reason": "unavailable_subject" };
    }
    return undefined;
  }

  async function selectDemoSolutionStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function demoSolutionPresentation(locale) {
  const equations = [
    '(2x + y) − (−x + y) = 7 − 1\n3x = 6',
    'x = 6 ÷ 3 = 2',
    '−2 + y = 1',
    'y = 1 + 2 = 3',
    '2(2) + 3 = 7 ✓\n−2 + 3 = 1 ✓',
  ];
  const copy = {
    en: {
      method: 'Elimination method', result: 'The solution pair', verified: 'Both equations checked', list: 'Step-by-step solution',
      titles: ['Eliminate y', 'Solve for x', 'Substitute x = 2', 'Solve for y', 'Check both equations'],
      descriptions: [
        'Subtract the second equation from the first. The y terms cancel.',
        'Divide both sides by 3 to isolate x.',
        'Use the value of x in the second equation, −x + y = 1.',
        'Add 2 to both sides to isolate y.',
        'Substitute the pair into the original equations. Both sides match.',
      ],
    },
    hi: {
      method: 'विलोपन विधि', result: 'हल का युग्म', verified: 'दोनों समीकरणों की जाँच हुई', list: 'चरण-दर-चरण हल',
      titles: ['y को हटाएँ', 'x का मान निकालें', 'x = 2 रखें', 'y का मान निकालें', 'दोनों समीकरण जाँचें'],
      descriptions: [
        'पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।',
        'x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।',
        'दूसरे समीकरण −x + y = 1 में x का मान रखें।',
        'y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।',
        'मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।',
      ],
    },
    ta: {
      method: 'நீக்கல் முறை', result: 'தீர்வு இணை', verified: 'இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன', list: 'படிப்படியான தீர்வு',
      titles: ['y-ஐ நீக்கவும்', 'x-ஐக் கண்டறியவும்', 'x = 2 எனப் பதிலிடவும்', 'y-ஐக் கண்டறியவும்', 'இரு சமன்பாடுகளையும் சரிபார்க்கவும்'],
      descriptions: [
        'முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.',
        'x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.',
        'இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.',
        'y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.',
        'மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்.',
      ],
    },
  };
  const selected = Object.hasOwn(copy, String(locale)) ? copy[String(locale)] : copy.en;
  return {
    method: selected.method, result: selected.result, verified: selected.verified, list: selected.list,
    steps: selected.titles.map((title, index) => ({
      id: `demo-step-${index + 1}`, number: index + 1, marker: String(index + 1).padStart(2, '0'),
      title, description: selected.descriptions[index], equation: equations[index], checked: index === 4,
    })),
  };
}
const steps = demoSolutionPresentation(inputs.locale).steps;
const current = Number.isInteger(state.demoStepIndex) ? Math.max(1, Math.min(5, state.demoStepIndex)) : 1;
const requested = args.event?.value;
const next = requested === 'next' ? current + 1 : requested === 'previous' ? current - 1 : Number(requested);
const index = Number.isInteger(next) ? Math.max(1, Math.min(5, next)) : current;
return { index, steps: steps.slice(index - 1, index) };
      })();
      stepResults["select_step_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("demoStepIndex", stepResults.select_step_prepare.index);
    _setState("demoVisibleSteps", stepResults.select_step_prepare.steps);
    return stepResults.select_step_prepare;
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function demoSolutionPresentation(locale) {
  const equations = [
    '(2x + y) − (−x + y) = 7 − 1\n3x = 6',
    'x = 6 ÷ 3 = 2',
    '−2 + y = 1',
    'y = 1 + 2 = 3',
    '2(2) + 3 = 7 ✓\n−2 + 3 = 1 ✓',
  ];
  const copy = {
    en: {
      method: 'Elimination method', result: 'The solution pair', verified: 'Both equations checked', list: 'Step-by-step solution',
      titles: ['Eliminate y', 'Solve for x', 'Substitute x = 2', 'Solve for y', 'Check both equations'],
      descriptions: [
        'Subtract the second equation from the first. The y terms cancel.',
        'Divide both sides by 3 to isolate x.',
        'Use the value of x in the second equation, −x + y = 1.',
        'Add 2 to both sides to isolate y.',
        'Substitute the pair into the original equations. Both sides match.',
      ],
    },
    hi: {
      method: 'विलोपन विधि', result: 'हल का युग्म', verified: 'दोनों समीकरणों की जाँच हुई', list: 'चरण-दर-चरण हल',
      titles: ['y को हटाएँ', 'x का मान निकालें', 'x = 2 रखें', 'y का मान निकालें', 'दोनों समीकरण जाँचें'],
      descriptions: [
        'पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।',
        'x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।',
        'दूसरे समीकरण −x + y = 1 में x का मान रखें।',
        'y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।',
        'मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।',
      ],
    },
    ta: {
      method: 'நீக்கல் முறை', result: 'தீர்வு இணை', verified: 'இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன', list: 'படிப்படியான தீர்வு',
      titles: ['y-ஐ நீக்கவும்', 'x-ஐக் கண்டறியவும்', 'x = 2 எனப் பதிலிடவும்', 'y-ஐக் கண்டறியவும்', 'இரு சமன்பாடுகளையும் சரிபார்க்கவும்'],
      descriptions: [
        'முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.',
        'x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.',
        'இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.',
        'y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.',
        'மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்.',
      ],
    },
  };
  const selected = Object.hasOwn(copy, String(locale)) ? copy[String(locale)] : copy.en;
  return {
    method: selected.method, result: selected.result, verified: selected.verified, list: selected.list,
    steps: selected.titles.map((title, index) => ({
      id: `demo-step-${index + 1}`, number: index + 1, marker: String(index + 1).padStart(2, '0'),
      title, description: selected.descriptions[index], equation: equations[index], checked: index === 4,
    })),
  };
}
const steps = demoSolutionPresentation(inputs.locale).steps;
return steps.slice(0, 1);
      })();
      stepResults["compact_step_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("demoStepIndex", 1);
    _setState("demoVisibleSteps", stepResults.compact_step_prepare);
    return { "mode": "steps", "ok": true, "solution": stepResults.showDetailedSolution_prepare.solution };
    return undefined;
  }

  async function submitProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const profile = inputs.accessProfile && typeof inputs.accessProfile === 'object' ? inputs.accessProfile : {};
const hasProfile = Object.keys(profile).length > 0;
const authenticated = profile.authenticated === true || profile.isAuthenticated === true || Boolean(profile.uid || profile.userId || profile.id) || inputs.authenticated === true;
const isRegistered = authenticated && profile.isRegistered === true;
const problem = String(state.problemText || '').trim();
return { authenticated, isRegistered, canLearn: isRegistered, problem, hasProblem: problem.length > 0 };
        })();
        stepResults["problem_check"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_check" };
      vars.error = error; stepResults["problem_check"] = { error };
      _setState("actionMessage", "This action could not be completed. Please retry.");
      _setState("showActionMessage", true);
      return { "ok": false };
      return undefined;
    }
    if (stepResults.problem_check.canLearn) {
      if (stepResults.problem_check.hasProblem) {
        _setState("actionMessage", "");
        _setState("showActionMessage", false);
        try {
          await _emitOutput("problemSubmitted", { "context": { "programmeSlug": inputs.programmeSlug, "semesterSlug": inputs.semesterSlug, "subjectSlug": inputs.subjectSlug }, "languageCode": inputs.locale || 'en', "mode": args.mode, "problem": stepResults.problem_check.problem }, true);
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_emit" };
          vars.error = error; stepResults["problem_emit"] = { error };
          _setState("actionMessage", "This action could not be completed. Please retry.");
          _setState("showActionMessage", true);
          return { "ok": false };
          return undefined;
        }
        return { "languageCode": inputs.locale || 'en', "mode": args.mode, "ok": true, "problem": stepResults.problem_check.problem };
      } else {
        _setState("actionMessage", "Enter a mathematics problem before continuing.");
        _setState("showActionMessage", true);
        return { "ok": false, "reason": "empty_problem" };
      }
    } else {
      _setState("actionMessage", "Sign in and complete your Scholar profile to solve this problem.");
      _setState("showActionMessage", true);
      try {
        await requestScholarAccess({ "reason": "registration_required", "returnPath": inputs.returnPath });
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "problem_denied_request" };
        vars.error = error; stepResults["problem_denied_request"] = { error };
        _setState("actionMessage", "This action could not be completed. Please retry.");
        _setState("showActionMessage", true);
        return { "ok": false };
        return undefined;
      }
      return stepResults.problem_denied_request;
    }
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

  const _localActions = {
    "requestImage": requestImage,
    "requestScholarAccess": requestScholarAccess,
    "initializeDiscoveryAccess": initializeDiscoveryAccess,
    "openProfessorStudio": openProfessorStudio,
    "navigate": navigate,
    "initializeHomeDemo": initializeHomeDemo,
    "openDiscoverySubject": openDiscoverySubject,
    "selectDemoSolutionStep": selectDemoSolutionStep,
    "showDetailedSolution": showDetailedSolution,
    "submitProblem": submitProblem,
    "showQuickSolution": showQuickSolution,
  };
  const _localActionArguments = {
    "requestImage": [],
    "requestScholarAccess": ["reason", "returnPath"],
    "initializeDiscoveryAccess": [],
    "openProfessorStudio": [],
    "navigate": ["path"],
    "initializeHomeDemo": [],
    "openDiscoverySubject": ["event"],
    "selectDemoSolutionStep": ["event"],
    "showDetailedSolution": [],
    "submitProblem": ["mode"],
    "showQuickSolution": [],
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
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero_actions" className="flex flex-wrap rs-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="browse_cta" size="lg" label={((_bindingValue) => _bindingValue === undefined ? "Browse mathematics" : _bindingValue)(_scope?.i18n?.browse)} theme="dark" variant="primary" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse/engineering/semester-1"}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_cta" size="lg" label="Professor Studio" theme="dark" variant="outline" onAction={(...eventArgs) => _callAction("openProfessorStudio", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="workbench" className="flex flex-col rs-workbench">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prompt_title" content={((_bindingValue) => _bindingValue === undefined ? "Explore a worked example" : _bindingValue)(_scope?.i18n?.prompt)} as="h3" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_disclosure" className="rs-demo-disclosure" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Fixed worked example — no AI request is made here." : _bindingValue)(_scope?.i18n?.demoNote)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_input" className="rs-demo-problem" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Solve the system 2x + y = 7 and −x + y = 1." : _bindingValue)(problemText)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_actions" className="grid rs-actions rs-solution-controls">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="solve_now" id="scholar-demo-quick" onAction={(...eventArgs) => _callAction("showQuickSolution", {}, eventArgs)} aria-pressed={(((value) => { return value === 'answer'; })(((_bindingValue) => _bindingValue === undefined ? "answer" : _bindingValue)(demoSolutionMode)))} aria-controls="scholar-demo-solution" additionalAttributes={{}} type="button" label={((_bindingValue) => _bindingValue === undefined ? "Show answer" : _bindingValue)(_scope?.i18n?.solveNow)} theme="light" variant="primary" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="steps" aria-pressed={(((value) => { return value === 'steps'; })(((_bindingValue) => _bindingValue === undefined ? "answer" : _bindingValue)(demoSolutionMode)))} additionalAttributes={{}} type="button" label={((_bindingValue) => _bindingValue === undefined ? "Show detailed steps" : _bindingValue)(_scope?.i18n?.solveSteps)} theme="light" aria-controls="scholar-demo-solution" id="scholar-demo-detailed" variant="outline" onAction={(...eventArgs) => _callAction("showDetailedSolution", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": false, "md": false, "sm": false })) && (<>      <RudraCoreButton id="teacher" label="Learn with professor" theme="light" variant="outline" onAction={(...eventArgs) => _callAction("submitProblem", {"mode": "professor"}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(showDemoSolution) && (<>      <RudraLayoutBox id="demo_solution" data-solution-mode={((_bindingValue) => _bindingValue === undefined ? "answer" : _bindingValue)(demoSolutionMode)} aria-live="polite" aria-labelledby="scholar-demo-solution-title" className="flex flex-col rs-solution" id="scholar-demo-solution" role="region">      {isVisibleValue((((value) => { return value === 'steps'; })(((_bindingValue) => _bindingValue === undefined ? "answer" : _bindingValue)(demoSolutionMode)))) && (<>      <RudraLayoutBox id="demo_step_picker" aria-label={((_bindingValue) => _bindingValue === undefined ? "Choose a solution step" : _bindingValue)(_scope?.i18n?.demoStepPicker)} className="grid rs-step-picker" role="group">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="demo_step_pick_1" className="rs-step-dot" id="scholar-demo_step_pick_1" type="button" label="1" value={1} onAction={(...eventArgs) => _callAction("selectDemoSolutionStep", {}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Step 1: Eliminate y" : _bindingValue)(_scope?.i18n?.demoStepLabel1)} aria-pressed={(((value) => { return value === 1; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="demo_step_pick_2" className="rs-step-dot" type="button" label="2" value={2} onAction={(...eventArgs) => _callAction("selectDemoSolutionStep", {}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Step 2: Solve for x" : _bindingValue)(_scope?.i18n?.demoStepLabel2)} aria-pressed={(((value) => { return value === 2; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} id="scholar-demo_step_pick_2" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="demo_step_pick_3" className="rs-step-dot" id="scholar-demo_step_pick_3" type="button" label="3" value={3} onAction={(...eventArgs) => _callAction("selectDemoSolutionStep", {}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Step 3: Substitute x = 2" : _bindingValue)(_scope?.i18n?.demoStepLabel3)} aria-pressed={(((value) => { return value === 3; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="demo_step_pick_4" className="rs-step-dot" ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Step 4: Solve for y" : _bindingValue)(_scope?.i18n?.demoStepLabel4)} aria-pressed={(((value) => { return value === 4; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} id="scholar-demo_step_pick_4" type="button" label="4" value={4} onAction={(...eventArgs) => _callAction("selectDemoSolutionStep", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="demo_step_pick_5" className="rs-step-dot" label="5" value={5} onAction={(...eventArgs) => _callAction("selectDemoSolutionStep", {}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Step 5: Check both equations" : _bindingValue)(_scope?.i18n?.demoStepLabel5)} aria-pressed={(((value) => { return value === 5; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} id="scholar-demo_step_pick_5" type="button" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="demo_solution_header" className="grid rs-solution-heading">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="demo_solution_icon_wrap" aria-hidden={true} className="flex rs-solution-mark">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"Sparkles"} id="demo_solution_icon" size={20} strokeWidth={1.8} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="demo_solution_heading_copy" className="flex flex-col rs-solution-heading-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_title" className="rs-demo-solution-title" as="h3" id="scholar-demo-solution-title" content={((_bindingValue) => _bindingValue === undefined ? "Quick answer" : _bindingValue)(demoSolutionTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_method" className="rs-solution-method" as="p" content={(((value) => { return (function demoSolutionPresentation(locale) {
  const equations = [
    '(2x + y) − (−x + y) = 7 − 1\n3x = 6',
    'x = 6 ÷ 3 = 2',
    '−2 + y = 1',
    'y = 1 + 2 = 3',
    '2(2) + 3 = 7 ✓\n−2 + 3 = 1 ✓',
  ];
  const copy = {
    en: {
      method: 'Elimination method', result: 'The solution pair', verified: 'Both equations checked', list: 'Step-by-step solution',
      titles: ['Eliminate y', 'Solve for x', 'Substitute x = 2', 'Solve for y', 'Check both equations'],
      descriptions: [
        'Subtract the second equation from the first. The y terms cancel.',
        'Divide both sides by 3 to isolate x.',
        'Use the value of x in the second equation, −x + y = 1.',
        'Add 2 to both sides to isolate y.',
        'Substitute the pair into the original equations. Both sides match.',
      ],
    },
    hi: {
      method: 'विलोपन विधि', result: 'हल का युग्म', verified: 'दोनों समीकरणों की जाँच हुई', list: 'चरण-दर-चरण हल',
      titles: ['y को हटाएँ', 'x का मान निकालें', 'x = 2 रखें', 'y का मान निकालें', 'दोनों समीकरण जाँचें'],
      descriptions: [
        'पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।',
        'x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।',
        'दूसरे समीकरण −x + y = 1 में x का मान रखें।',
        'y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।',
        'मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।',
      ],
    },
    ta: {
      method: 'நீக்கல் முறை', result: 'தீர்வு இணை', verified: 'இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன', list: 'படிப்படியான தீர்வு',
      titles: ['y-ஐ நீக்கவும்', 'x-ஐக் கண்டறியவும்', 'x = 2 எனப் பதிலிடவும்', 'y-ஐக் கண்டறியவும்', 'இரு சமன்பாடுகளையும் சரிபார்க்கவும்'],
      descriptions: [
        'முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.',
        'x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.',
        'இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.',
        'y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.',
        'மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்.',
      ],
    },
  };
  const selected = Object.hasOwn(copy, String(locale)) ? copy[String(locale)] : copy.en;
  return {
    method: selected.method, result: selected.result, verified: selected.verified, list: selected.list,
    steps: selected.titles.map((title, index) => ({
      id: `demo-step-${index + 1}`, number: index + 1, marker: String(index + 1).padStart(2, '0'),
      title, description: selected.descriptions[index], equation: equations[index], checked: index === 4,
    })),
  };
})(value).method; })(((_bindingValue) => _bindingValue === undefined ? "en" : _bindingValue)(inputs?.locale)))} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="demo_solution_result" className="flex flex-col rs-solution-result">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_result_label" className="rs-solution-eyebrow" as="p" content={(((value) => { return (function demoSolutionPresentation(locale) {
  const equations = [
    '(2x + y) − (−x + y) = 7 − 1\n3x = 6',
    'x = 6 ÷ 3 = 2',
    '−2 + y = 1',
    'y = 1 + 2 = 3',
    '2(2) + 3 = 7 ✓\n−2 + 3 = 1 ✓',
  ];
  const copy = {
    en: {
      method: 'Elimination method', result: 'The solution pair', verified: 'Both equations checked', list: 'Step-by-step solution',
      titles: ['Eliminate y', 'Solve for x', 'Substitute x = 2', 'Solve for y', 'Check both equations'],
      descriptions: [
        'Subtract the second equation from the first. The y terms cancel.',
        'Divide both sides by 3 to isolate x.',
        'Use the value of x in the second equation, −x + y = 1.',
        'Add 2 to both sides to isolate y.',
        'Substitute the pair into the original equations. Both sides match.',
      ],
    },
    hi: {
      method: 'विलोपन विधि', result: 'हल का युग्म', verified: 'दोनों समीकरणों की जाँच हुई', list: 'चरण-दर-चरण हल',
      titles: ['y को हटाएँ', 'x का मान निकालें', 'x = 2 रखें', 'y का मान निकालें', 'दोनों समीकरण जाँचें'],
      descriptions: [
        'पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।',
        'x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।',
        'दूसरे समीकरण −x + y = 1 में x का मान रखें।',
        'y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।',
        'मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।',
      ],
    },
    ta: {
      method: 'நீக்கல் முறை', result: 'தீர்வு இணை', verified: 'இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன', list: 'படிப்படியான தீர்வு',
      titles: ['y-ஐ நீக்கவும்', 'x-ஐக் கண்டறியவும்', 'x = 2 எனப் பதிலிடவும்', 'y-ஐக் கண்டறியவும்', 'இரு சமன்பாடுகளையும் சரிபார்க்கவும்'],
      descriptions: [
        'முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.',
        'x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.',
        'இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.',
        'y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.',
        'மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்.',
      ],
    },
  };
  const selected = Object.hasOwn(copy, String(locale)) ? copy[String(locale)] : copy.en;
  return {
    method: selected.method, result: selected.result, verified: selected.verified, list: selected.list,
    steps: selected.titles.map((title, index) => ({
      id: `demo-step-${index + 1}`, number: index + 1, marker: String(index + 1).padStart(2, '0'),
      title, description: selected.descriptions[index], equation: equations[index], checked: index === 4,
    })),
  };
})(value).result; })(((_bindingValue) => _bindingValue === undefined ? "en" : _bindingValue)(inputs?.locale)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="demo_solution_values" className="grid rs-solution-values">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_x" className="rs-solution-value" content="x = 2" as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_y" className="rs-solution-value" as="p" content="y = 3" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return value === 'answer'; })(((_bindingValue) => _bindingValue === undefined ? "answer" : _bindingValue)(demoSolutionMode)))) && (<>      <RudraCoreTypography id="demo_solution_body" className="rs-demo-solution-body rs-solution-summary" as="p" content={((_bindingValue) => _bindingValue === undefined ? "x = 2 and y = 3." : _bindingValue)(demoSolutionText)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_verified" className="rs-solution-verified" as="p" content={(((value) => { return (function demoSolutionPresentation(locale) {
  const equations = [
    '(2x + y) − (−x + y) = 7 − 1\n3x = 6',
    'x = 6 ÷ 3 = 2',
    '−2 + y = 1',
    'y = 1 + 2 = 3',
    '2(2) + 3 = 7 ✓\n−2 + 3 = 1 ✓',
  ];
  const copy = {
    en: {
      method: 'Elimination method', result: 'The solution pair', verified: 'Both equations checked', list: 'Step-by-step solution',
      titles: ['Eliminate y', 'Solve for x', 'Substitute x = 2', 'Solve for y', 'Check both equations'],
      descriptions: [
        'Subtract the second equation from the first. The y terms cancel.',
        'Divide both sides by 3 to isolate x.',
        'Use the value of x in the second equation, −x + y = 1.',
        'Add 2 to both sides to isolate y.',
        'Substitute the pair into the original equations. Both sides match.',
      ],
    },
    hi: {
      method: 'विलोपन विधि', result: 'हल का युग्म', verified: 'दोनों समीकरणों की जाँच हुई', list: 'चरण-दर-चरण हल',
      titles: ['y को हटाएँ', 'x का मान निकालें', 'x = 2 रखें', 'y का मान निकालें', 'दोनों समीकरण जाँचें'],
      descriptions: [
        'पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।',
        'x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।',
        'दूसरे समीकरण −x + y = 1 में x का मान रखें।',
        'y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।',
        'मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।',
      ],
    },
    ta: {
      method: 'நீக்கல் முறை', result: 'தீர்வு இணை', verified: 'இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன', list: 'படிப்படியான தீர்வு',
      titles: ['y-ஐ நீக்கவும்', 'x-ஐக் கண்டறியவும்', 'x = 2 எனப் பதிலிடவும்', 'y-ஐக் கண்டறியவும்', 'இரு சமன்பாடுகளையும் சரிபார்க்கவும்'],
      descriptions: [
        'முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.',
        'x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.',
        'இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.',
        'y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.',
        'மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்.',
      ],
    },
  };
  const selected = Object.hasOwn(copy, String(locale)) ? copy[String(locale)] : copy.en;
  return {
    method: selected.method, result: selected.result, verified: selected.verified, list: selected.list,
    steps: selected.titles.map((title, index) => ({
      id: `demo-step-${index + 1}`, number: index + 1, marker: String(index + 1).padStart(2, '0'),
      title, description: selected.descriptions[index], equation: equations[index], checked: index === 4,
    })),
  };
})(value).verified; })(((_bindingValue) => _bindingValue === undefined ? "en" : _bindingValue)(inputs?.locale)))} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return value === 'steps'; })(((_bindingValue) => _bindingValue === undefined ? "answer" : _bindingValue)(demoSolutionMode)))) && (<>      <RudraLayoutRepeater id="demo_solution_steps" className="grid rs-solution-steps" role="list" items={((_bindingValue) => _bindingValue === undefined ? [{ "checked": false, "description": "Subtract the second equation from the first. The y terms cancel.", "equation": "(2x + y) − (−x + y) = 7 − 1\n3x = 6", "id": "demo-step-1", "marker": 1, "number": 1, "title": "Eliminate y" }] : _bindingValue)(demoVisibleSteps)} aria-label={(((value) => { return (function demoSolutionPresentation(locale) {
  const equations = [
    '(2x + y) − (−x + y) = 7 − 1\n3x = 6',
    'x = 6 ÷ 3 = 2',
    '−2 + y = 1',
    'y = 1 + 2 = 3',
    '2(2) + 3 = 7 ✓\n−2 + 3 = 1 ✓',
  ];
  const copy = {
    en: {
      method: 'Elimination method', result: 'The solution pair', verified: 'Both equations checked', list: 'Step-by-step solution',
      titles: ['Eliminate y', 'Solve for x', 'Substitute x = 2', 'Solve for y', 'Check both equations'],
      descriptions: [
        'Subtract the second equation from the first. The y terms cancel.',
        'Divide both sides by 3 to isolate x.',
        'Use the value of x in the second equation, −x + y = 1.',
        'Add 2 to both sides to isolate y.',
        'Substitute the pair into the original equations. Both sides match.',
      ],
    },
    hi: {
      method: 'विलोपन विधि', result: 'हल का युग्म', verified: 'दोनों समीकरणों की जाँच हुई', list: 'चरण-दर-चरण हल',
      titles: ['y को हटाएँ', 'x का मान निकालें', 'x = 2 रखें', 'y का मान निकालें', 'दोनों समीकरण जाँचें'],
      descriptions: [
        'पहले समीकरण में से दूसरा घटाएँ। y वाले पद कट जाते हैं।',
        'x को अलग करने के लिए दोनों पक्षों को 3 से भाग दें।',
        'दूसरे समीकरण −x + y = 1 में x का मान रखें।',
        'y को अलग करने के लिए दोनों पक्षों में 2 जोड़ें।',
        'मूल समीकरणों में दोनों मान रखें। दोनों पक्ष बराबर हैं।',
      ],
    },
    ta: {
      method: 'நீக்கல் முறை', result: 'தீர்வு இணை', verified: 'இரு சமன்பாடுகளும் சரிபார்க்கப்பட்டன', list: 'படிப்படியான தீர்வு',
      titles: ['y-ஐ நீக்கவும்', 'x-ஐக் கண்டறியவும்', 'x = 2 எனப் பதிலிடவும்', 'y-ஐக் கண்டறியவும்', 'இரு சமன்பாடுகளையும் சரிபார்க்கவும்'],
      descriptions: [
        'முதல் சமன்பாட்டிலிருந்து இரண்டாவதைக் கழிக்கவும். y உறுப்புகள் நீங்கும்.',
        'x-ஐத் தனிமைப்படுத்த இரு பக்கங்களையும் 3-ஆல் வகுக்கவும்.',
        'இரண்டாவது சமன்பாடு −x + y = 1 இல் x-இன் மதிப்பைப் பதிலிடவும்.',
        'y-ஐத் தனிமைப்படுத்த இரு பக்கங்களிலும் 2-ஐக் கூட்டவும்.',
        'மூலச் சமன்பாடுகளில் இரு மதிப்புகளையும் பதிலிடவும். இரு பக்கங்களும் சமம்.',
      ],
    },
  };
  const selected = Object.hasOwn(copy, String(locale)) ? copy[String(locale)] : copy.en;
  return {
    method: selected.method, result: selected.result, verified: selected.verified, list: selected.list,
    steps: selected.titles.map((title, index) => ({
      id: `demo-step-${index + 1}`, number: index + 1, marker: String(index + 1).padStart(2, '0'),
      title, description: selected.descriptions[index], equation: equations[index], checked: index === 4,
    })),
  };
})(value).list; })(((_bindingValue) => _bindingValue === undefined ? "en" : _bindingValue)(inputs?.locale)))}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="demo_solution_step" aria-posinset={((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(_scope?.item?.number)} aria-setsize={5} className={`${((_classValue) => _classValue == null || _classValue === false || typeof _classValue === 'object' ? '' : "" + String(_classValue))((((value) => { return 'grid rs-solution-step' + (value ? ' rs-solution-step--check' : ''); })(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(_scope?.item?.checked))))}`} role="listitem">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_step_marker" className="rs-solution-step-marker" aria-hidden={true} as="span" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.marker)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="demo_solution_step_content" className="flex flex-col rs-solution-step-content">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_step_title" className="rs-solution-step-title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_step_description" className="rs-solution-step-description" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_solution_step_equation" className="rs-solution-step-equation" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.equation)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</>); })(); }}</RudraLayoutRepeater>
</>)}
      {isVisibleValue((((value) => { return value === 'steps'; })(((_bindingValue) => _bindingValue === undefined ? "answer" : _bindingValue)(demoSolutionMode)))) && (<>      <RudraLayoutBox id="demo_step_navigation" className="grid rs-step-navigation">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="demo_step_previous" className="rs-step-nav-button" id="scholar-demo_step_previous" type="button" label={((_bindingValue) => _bindingValue === undefined ? "Previous" : _bindingValue)(_scope?.i18n?.demoPrevious)} value="previous" disabled={(((value) => { return value <= 1; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} onAction={(...eventArgs) => _callAction("selectDemoSolutionStep", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="demo_step_count" className="rs-step-count" as="span" content={(((value) => { return String(value) + ' / 5'; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="demo_step_next" className="rs-step-nav-button" id="scholar-demo_step_next" type="button" label={((_bindingValue) => _bindingValue === undefined ? "Next" : _bindingValue)(_scope?.i18n?.demoNext)} value="next" disabled={(((value) => { return value >= 5; })(((_bindingValue) => _bindingValue === undefined ? 1 : _bindingValue)(demoStepIndex)))} onAction={(...eventArgs) => _callAction("selectDemoSolutionStep", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="image" leftIcon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"LockKeyhole"} id="image_lock_icon" size={18} strokeWidth={2} />
</>)}
</>} disabled={true} onAction={(...eventArgs) => _callAction("requestImage", {}, eventArgs)} ariaLabel="Image problem upload is locked until a post-release update" additionalAttributes={{"disabled":true,"title":"Planned for a post-release update"}} id="scholar-image-upload-locked" label="Upload an image · Coming soon" theme="light" variant="ghost" />
</>)}
      {isVisibleValue(showActionMessage) && (<>      <RudraCoreAlert id="problem_status" variant="warning" appearance="soft" live="polite" title="Action needed" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="subjects" className="flex flex-col rs-subject-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subjects_heading" className="rs-subjects-heading" content={((_bindingValue) => _bindingValue === undefined ? "Start with a subject" : _bindingValue)(_scope?.i18n?.popular)} as="h2" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subjects_intro" className="rs-subjects-intro" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Choose a foundation subject and explore its concepts, examples, and problems." : _bindingValue)(_scope?.i18n?.subjectsIntro)} />
</>)}
      {isVisibleValue((((value) => { return (function normalizeLockableSubjects(inputs) {
  const cards = [], seen = new Set();
  const copy = { en: ['Open subject', 'Locked'], hi: ['विषय खोलें', 'लॉक है'], ta: ['பாடத்தைத் திற', 'பூட்டப்பட்டுள்ளது'] };
  const labels = Object.hasOwn(copy, String(inputs?.locale)) ? copy[String(inputs.locale)] : copy.en;
  if (!Array.isArray(inputs?.subjectCards)) return cards;
  for (const item of inputs.subjectCards.slice(0, 100)) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
    const title = typeof item.title === 'string' ? item.title.trim().slice(0, 120) : '';
    const path = typeof item.redirectionLink === 'string' ? item.redirectionLink.trim() : '';
    if (!title || !path.startsWith('/') || path.startsWith('//') || path.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(path) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(path)) continue;
    if (seen.has(path)) continue;
    seen.add(path);
    const locked = inputs.subjectsLocked === true || item.locked === true;
    const lockLabel = typeof item.lockedLabel === 'string' && item.lockedLabel.trim() ? item.lockedLabel.trim().slice(0, 120) : labels[1];
    cards.push({ id: path, title, description: typeof item.description === 'string' ? item.description.trim().slice(0, 600) : '', redirectionLink: path, locked, actionLabel: locked ? lockLabel : labels[0] });
  }
  return cards;
})(value).length > 0; })(((_bindingValue) => _bindingValue === undefined ? {  } : _bindingValue)(inputs)))) && (<>      <RudraLayoutRepeater id="subject_grid" className="rs-subject-grid" items={(((value) => { return (function normalizeLockableSubjects(inputs) {
  const cards = [], seen = new Set();
  const copy = { en: ['Open subject', 'Locked'], hi: ['विषय खोलें', 'लॉक है'], ta: ['பாடத்தைத் திற', 'பூட்டப்பட்டுள்ளது'] };
  const labels = Object.hasOwn(copy, String(inputs?.locale)) ? copy[String(inputs.locale)] : copy.en;
  if (!Array.isArray(inputs?.subjectCards)) return cards;
  for (const item of inputs.subjectCards.slice(0, 100)) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
    const title = typeof item.title === 'string' ? item.title.trim().slice(0, 120) : '';
    const path = typeof item.redirectionLink === 'string' ? item.redirectionLink.trim() : '';
    if (!title || !path.startsWith('/') || path.startsWith('//') || path.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(path) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(path)) continue;
    if (seen.has(path)) continue;
    seen.add(path);
    const locked = inputs.subjectsLocked === true || item.locked === true;
    const lockLabel = typeof item.lockedLabel === 'string' && item.lockedLabel.trim() ? item.lockedLabel.trim().slice(0, 120) : labels[1];
    cards.push({ id: path, title, description: typeof item.description === 'string' ? item.description.trim().slice(0, 600) : '', redirectionLink: path, locked, actionLabel: locked ? lockLabel : labels[0] });
  }
  return cards;
})(value); })(((_bindingValue) => _bindingValue === undefined ? {  } : _bindingValue)(inputs)))}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="linear" className={`flex ${((_classValue) => _classValue == null || _classValue === false || typeof _classValue === 'object' ? '' : "" + String(_classValue))((((value) => { return 'flex flex-col rs-subject-card' + (value ? ' rs-subject-card--locked' : ''); })(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(_scope?.item?.locked))))}`} as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="linear_title" className="rs-subject-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="linear_copy" className="rs-subject-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="linear_go" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(_scope?.item?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="subject_lock_icon" size={16} strokeWidth={1.8} />
</>)}
</>} type="button" label={((_bindingValue) => _bindingValue === undefined ? "Open subject" : _bindingValue)(_scope?.item?.actionLabel)} variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(_scope?.item?.locked)} fullWidth={true} size="md" theme="auto" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.redirectionLink)} loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSubjectNavigating)} onAction={(...eventArgs) => _callAction("openDiscoverySubject", {}, eventArgs)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": false, "md": false, "sm": false })) && (<>      <RudraCoreCard id="calculus" className="flex flex-col rs-subject-card" theme="auto" as="article">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="calculus_title" className="rs-subject-card-title" as="h3" content="Calculus" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="calculus_copy" className="rs-subject-card-copy" as="p" content="Limits, derivatives, integration and multivariable reasoning." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="calculus_go" size="md" label="Open subject" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse/engineering/semester-1/calculus"}, eventArgs)} fullWidth={true} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": false, "md": false, "sm": false })) && (<>      <RudraCoreCard id="discrete" className="flex flex-col rs-subject-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="discrete_title" className="rs-subject-card-title" content="Discrete mathematics" as="h3" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="discrete_copy" className="rs-subject-card-copy" as="p" content="Logic, combinatorics, graphs and recurrence relations." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="discrete_go" variant="outline" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse/engineering/semester-1/discrete-mathematics"}, eventArgs)} fullWidth={true} size="md" label="Open subject" theme="auto" />
</>)}
</RudraCoreCard>
</>)}
</>); })(); }}</RudraLayoutRepeater>
</>)}
      {isVisibleValue((((value) => { return (function normalizeLockableSubjects(inputs) {
  const cards = [], seen = new Set();
  const copy = { en: ['Open subject', 'Locked'], hi: ['विषय खोलें', 'लॉक है'], ta: ['பாடத்தைத் திற', 'பூட்டப்பட்டுள்ளது'] };
  const labels = Object.hasOwn(copy, String(inputs?.locale)) ? copy[String(inputs.locale)] : copy.en;
  if (!Array.isArray(inputs?.subjectCards)) return cards;
  for (const item of inputs.subjectCards.slice(0, 100)) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
    const title = typeof item.title === 'string' ? item.title.trim().slice(0, 120) : '';
    const path = typeof item.redirectionLink === 'string' ? item.redirectionLink.trim() : '';
    if (!title || !path.startsWith('/') || path.startsWith('//') || path.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(path) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(path)) continue;
    if (seen.has(path)) continue;
    seen.add(path);
    const locked = inputs.subjectsLocked === true || item.locked === true;
    const lockLabel = typeof item.lockedLabel === 'string' && item.lockedLabel.trim() ? item.lockedLabel.trim().slice(0, 120) : labels[1];
    cards.push({ id: path, title, description: typeof item.description === 'string' ? item.description.trim().slice(0, 600) : '', redirectionLink: path, locked, actionLabel: locked ? lockLabel : labels[0] });
  }
  return cards;
})(value).length === 0; })(((_bindingValue) => _bindingValue === undefined ? {  } : _bindingValue)(inputs)))) && (<>      <RudraCoreTypography id="subjects_empty" className="rs-subject-empty" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No subjects are available here yet. Browse the course catalogue to continue." : _bindingValue)(_scope?.i18n?.emptySubjects)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(subjectNavigationFailed)) && (<>      <RudraCoreTypography id="subjects_error" className="rs-subject-error" role="alert" content={((_bindingValue) => _bindingValue === undefined ? "This subject could not be opened. Please try again." : _bindingValue)(_scope?.i18n?.subjectError)} as="p" />
</>)}
      {isVisibleValue((((value) => { return (function normalizeLockableSubjects(inputs) {
  const cards = [], seen = new Set();
  const copy = { en: ['Open subject', 'Locked'], hi: ['विषय खोलें', 'लॉक है'], ta: ['பாடத்தைத் திற', 'பூட்டப்பட்டுள்ளது'] };
  const labels = Object.hasOwn(copy, String(inputs?.locale)) ? copy[String(inputs.locale)] : copy.en;
  if (!Array.isArray(inputs?.subjectCards)) return cards;
  for (const item of inputs.subjectCards.slice(0, 100)) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
    const title = typeof item.title === 'string' ? item.title.trim().slice(0, 120) : '';
    const path = typeof item.redirectionLink === 'string' ? item.redirectionLink.trim() : '';
    if (!title || !path.startsWith('/') || path.startsWith('//') || path.length > 2048 || /[\\\u0000-\u0020\u007f]/.test(path) || /%(?:2f|5c|0[0-9a-f]|1[0-9a-f]|7f)/i.test(path)) continue;
    if (seen.has(path)) continue;
    seen.add(path);
    const locked = inputs.subjectsLocked === true || item.locked === true;
    const lockLabel = typeof item.lockedLabel === 'string' && item.lockedLabel.trim() ? item.lockedLabel.trim().slice(0, 120) : labels[1];
    cards.push({ id: path, title, description: typeof item.description === 'string' ? item.description.trim().slice(0, 600) : '', redirectionLink: path, locked, actionLabel: locked ? lockLabel : labels[0] });
  }
  return cards;
})(value).length === 0; })(((_bindingValue) => _bindingValue === undefined ? {  } : _bindingValue)(inputs)))) && (<>      <RudraCoreButton id="subjects_browse" size="lg" type="button" label={((_bindingValue) => _bindingValue === undefined ? "Browse courses" : _bindingValue)(_scope?.i18n?.browseCatalogue)} theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("navigate", {"path": "/browse"}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
    </div>
  );
}
