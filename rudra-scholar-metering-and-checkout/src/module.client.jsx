import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Card as RudraCoreCard, Typography as RudraCoreTypography, Button as RudraCoreButton } from '@rudra-studio/rudra-core';
import { Container as RudraLayoutContainer, Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';

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

  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const currentCourse = props.currentCourse !== undefined ? props.currentCourse : (props.data?.currentCourse !== undefined ? props.data.currentCourse : {"description":"Continue matrices, determinants, eigenvalues, and worked examples.","id":"linear-algebra-foundations","lastVisitedAt":"Today","professorName":"Dr. Meera Iyer","progressPercent":42,"section":"Matrices and Eigenvalues","title":"Linear Algebra Foundations"});
  const availableMinutes = props.availableMinutes !== undefined ? props.availableMinutes : (props.data?.availableMinutes !== undefined ? props.data.availableMinutes : 20);
  const usedMinutes = props.usedMinutes !== undefined ? props.usedMinutes : (props.data?.usedMinutes !== undefined ? props.data.usedMinutes : 0);
  const recentCourses = props.recentCourses !== undefined ? props.recentCourses : (props.data?.recentCourses !== undefined ? props.data.recentCourses : [{"id":"linear-algebra-foundations","lastVisitedAt":"Today","professorName":"Dr. Meera Iyer","progressPercent":42,"title":"Linear Algebra Foundations"},{"id":"calculus-one","lastVisitedAt":"Yesterday","professorName":"Prof. Arjun Rao","progressPercent":68,"title":"Calculus I"},{"id":"discrete-mathematics","lastVisitedAt":"3 days ago","professorName":"Dr. Kavitha N","progressPercent":25,"title":"Discrete Mathematics"}]);
  const vaultSummary = props.vaultSummary !== undefined ? props.vaultSummary : (props.data?.vaultSummary !== undefined ? props.data.vaultSummary : {"configured":false,"dailyRequestsLimit":50,"dailyRequestsUsed":0,"lastFour":"","model":"","provider":"","status":"not_configured"});
  const vaultEnabled = props.vaultEnabled !== undefined ? props.vaultEnabled : (props.data?.vaultEnabled !== undefined ? props.data.vaultEnabled : false);
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const usageSummary = props.usageSummary !== undefined ? props.usageSummary : (props.data?.usageSummary !== undefined ? props.data.usageSummary : {"active":false,"isExhausted":false,"remainingSeconds":1200,"totalGrantedSeconds":1200});
  const visitedCourseCount = props.visitedCourseCount !== undefined ? props.visitedCourseCount : (props.data?.visitedCourseCount !== undefined ? props.data.visitedCourseCount : 3);
  const checkoutStatus = props.checkoutStatus !== undefined ? props.checkoutStatus : (props.data?.checkoutStatus !== undefined ? props.data.checkoutStatus : {"message":"","state":"idle"});
  const userRole = props.userRole !== undefined ? props.userRole : (props.data?.userRole !== undefined ? props.data.userRole : "guest");
  const inputs = { "authenticated": authenticated, "currentCourse": currentCourse, "availableMinutes": availableMinutes, "usedMinutes": usedMinutes, "recentCourses": recentCourses, "vaultSummary": vaultSummary, "vaultEnabled": vaultEnabled, "locale": locale, "usageSummary": usageSummary, "visitedCourseCount": visitedCourseCount, "checkoutStatus": checkoutStatus, "userRole": userRole };
  const [dashboardSummary, set_dashboardSummary] = useState(() => structuredClone({}));
  const [currentCourseData, set_currentCourseData] = useState(() => structuredClone({}));
  const [dashboardLoaded, set_dashboardLoaded] = useState(() => structuredClone(false));
  const [dashboardGuest, set_dashboardGuest] = useState(() => structuredClone(true));
  const [busy, set_busy] = useState(() => structuredClone(false));
  const [statusMessage, set_statusMessage] = useState(() => structuredClone(""));
  const [recentCoursesData, set_recentCoursesData] = useState(() => structuredClone([]));
  const state = { "dashboardSummary": dashboardSummary, "currentCourseData": currentCourseData, "dashboardLoaded": dashboardLoaded, "dashboardGuest": dashboardGuest, "busy": busy, "statusMessage": statusMessage, "recentCoursesData": recentCoursesData };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "dashboardSummary": { const next = typeof value === 'function' ? value(state.dashboardSummary) : value; state.dashboardSummary = next; set_dashboardSummary(next); return next; }
      case "currentCourseData": { const next = typeof value === 'function' ? value(state.currentCourseData) : value; state.currentCourseData = next; set_currentCourseData(next); return next; }
      case "dashboardLoaded": { const next = typeof value === 'function' ? value(state.dashboardLoaded) : value; state.dashboardLoaded = next; set_dashboardLoaded(next); return next; }
      case "dashboardGuest": { const next = typeof value === 'function' ? value(state.dashboardGuest) : value; state.dashboardGuest = next; set_dashboardGuest(next); return next; }
      case "busy": { const next = typeof value === 'function' ? value(state.busy) : value; state.busy = next; set_busy(next); return next; }
      case "statusMessage": { const next = typeof value === 'function' ? value(state.statusMessage) : value; state.statusMessage = next; set_statusMessage(next); return next; }
      case "recentCoursesData": { const next = typeof value === 'function' ? value(state.recentCoursesData) : value; state.recentCoursesData = next; set_recentCoursesData(next); return next; }
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
      case "dashboardSummary": _setState("dashboardSummary", updateNested); return value;
      case "currentCourseData": _setState("currentCourseData", updateNested); return value;
      case "dashboardLoaded": _setState("dashboardLoaded", updateNested); return value;
      case "dashboardGuest": _setState("dashboardGuest", updateNested); return value;
      case "busy": _setState("busy", updateNested); return value;
      case "statusMessage": _setState("statusMessage", updateNested); return value;
      case "recentCoursesData": _setState("recentCoursesData", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"checkoutRequested":{"properties":{"idempotencyKey":{"type":"string"},"planId":{"type":"string"}},"required":["planId","idempotencyKey"],"type":"object"},"mockPaymentRequested":{"properties":{"orderId":{"type":"string"},"outcome":{"type":"string"}},"required":["orderId","outcome"],"type":"object"},"signInRequested":{"properties":{"source":{"type":"string"}},"type":"object"},"vaultMetadataChanged":{"properties":{"configured":{"type":"boolean"},"lastFour":{"type":"string"},"lastTestedAt":{"type":"string"},"model":{"type":"string"},"provider":{"type":"string"},"status":{"type":"string"}},"type":"object"}};
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

  async function requestCheckout(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await _emitOutput("checkoutRequested", { "idempotencyKey": 'checkout-' + Date.now() + '-' + Math.random().toString(36).slice(2), "planId": args.planId }, true);
    return { "planId": args.planId, "requested": true };
    return undefined;
  }

  async function signIn(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await _emitOutput("signInRequested", { "source": "billing-and-usage" }, true);
    return undefined;
  }

  async function loadLearningDashboard(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (state.busy) {
      return { "busy": true, "ok": false };
    } else {
      _setState("dashboardGuest", inputs.authenticated !== true);
      _setState("statusMessage", "");
      _setState("dashboardLoaded", false);
      _setState("dashboardSummary", {  });
      _setState("currentCourseData", {  });
      _setState("recentCoursesData", []);
      if (inputs.authenticated === true) {
        _setState("busy", true);
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const namedParameters = _resolveRuntimeValue({}, roots) || {};
            delete namedParameters["email"];
            const parameters = [undefined];
            const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
            let result;
            if (typeof queryExecutor === 'function') {
              result = await queryExecutor({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadLearningSummary", parameters, namedParameters, signal: args.signal });
            } else {
              const queryResponse = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadLearningSummary", parameters, namedParameters }), signal: args.signal });
              const queryPayload = await queryResponse.json().catch(() => ({}));
              if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
              result = queryPayload.data;
            }
            stepResults["load_summary"] = result; vars["queryResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "load_summary" };
          vars.error = error; stepResults["load_summary"] = { error };
          _setState("busy", false);
          _setState("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry.");
          return { "ok": false };
          return undefined;
        }
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const namedParameters = _resolveRuntimeValue({}, roots) || {};
            delete namedParameters["email"];
            const parameters = [undefined];
            const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
            let result;
            if (typeof queryExecutor === 'function') {
              result = await queryExecutor({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadCurrentCourse", parameters, namedParameters, signal: args.signal });
            } else {
              const queryResponse = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadCurrentCourse", parameters, namedParameters }), signal: args.signal });
              const queryPayload = await queryResponse.json().catch(() => ({}));
              if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
              result = queryPayload.data;
            }
            stepResults["load_current"] = result; vars["queryResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "load_current" };
          vars.error = error; stepResults["load_current"] = { error };
          _setState("busy", false);
          _setState("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry.");
          return { "ok": false };
          return undefined;
        }
        try {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const namedParameters = _resolveRuntimeValue({}, roots) || {};
            delete namedParameters["email"];
            const parameters = [undefined];
            const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
            let result;
            if (typeof queryExecutor === 'function') {
              result = await queryExecutor({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadRecentCourses", parameters, namedParameters, signal: args.signal });
            } else {
              const queryResponse = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadRecentCourses", parameters, namedParameters }), signal: args.signal });
              const queryPayload = await queryResponse.json().catch(() => ({}));
              if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
              result = queryPayload.data;
            }
            stepResults["load_recent"] = result; vars["queryResult"] = result; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "load_recent" };
          vars.error = error; stepResults["load_recent"] = { error };
          _setState("busy", false);
          _setState("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry.");
          return { "ok": false };
          return undefined;
        }
        try {
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
return (function normalizeMetering(summaryRows, currentRows, recentRows) {
  const first = x => Array.isArray(x) ? x[0] || {} : x || {};
  const summary = first(summaryRows), current = first(currentRows), recent = first(recentRows);
  const number = value => { const n = Number(value); return Number.isFinite(n) ? Math.max(0, Math.min(10000000, Math.floor(n))) : 0; };
  const course = value => value && typeof value === 'object' && typeof value.id === 'string' && value.id && typeof value.title === 'string' && value.title.trim() ? { ...value, title: value.title.slice(0,180), progressPercent: Math.min(100, number(value.progressPercent)) } : null;
  return { summary: { availableMinutes: number(summary.availableMinutes), usedMinutes: number(summary.usedMinutes), visitedCourseCount: number(summary.visitedCourseCount) }, currentCourse: course(current.currentCourse) || {}, recentCourses: (Array.isArray(recent.recentCourses) ? recent.recentCourses : []).map(course).filter(Boolean).slice(0,3) };
})(stepResults.load_summary,stepResults.load_current,stepResults.load_recent);
            })();
            stepResults["normalize_dashboard"] = customResult; vars["customCodeResult"] = customResult; }
        } catch (_caughtError) {
          const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "normalize_dashboard" };
          vars.error = error; stepResults["normalize_dashboard"] = { error };
          _setState("busy", false);
          _setState("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry.");
          return { "ok": false };
          return undefined;
        }
        _setState("dashboardSummary", stepResults.normalize_dashboard.summary);
        _setState("currentCourseData", stepResults.normalize_dashboard.currentCourse);
        _setState("recentCoursesData", stepResults.normalize_dashboard.recentCourses);
        _setState("dashboardLoaded", true);
        _setState("busy", false);
        return stepResults.normalize_dashboard;
      } else {
        return { "guest": true };
      }
    }
    return undefined;
  }

  const _localActions = {
    "requestCheckout": requestCheckout,
    "signIn": signIn,
    "loadLearningDashboard": loadLearningDashboard,
  };
  const _localActionArguments = {
    "requestCheckout": ["planId"],
    "signIn": [],
    "loadLearningDashboard": [],
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
    void _runLifecycle("learning_dashboard_mountloadLearningDashboardSsr", "takeLatest", (signal) => loadLearningDashboard({ signal }), "Module mount lifecycle failed:");
  }, []);
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; return; }
    set_dashboardSummary(structuredClone({}));
    set_currentCourseData(structuredClone({}));
    set_recentCoursesData(structuredClone([]));
    set_statusMessage(structuredClone(""));
    set_dashboardLoaded(structuredClone(false));
    void _runLifecycle("usage_identity_changeloadLearningDashboardSsr", "takeLatest", (signal) => loadLearningDashboard({ signal }), 'Module input lifecycle failed:');
  }, [authenticated]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="root" className="rs-learning-dashboard" as="main" maxWidth="full">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="stack" className="flex flex-col rs-dashboard-stack">      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(dashboardGuest)) && (<>      <RudraCoreButton id="usage_signin" className="rs-usage-button" label="Sign in" onAction={(...eventArgs) => _callAction("signIn", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="kicker" className="rs-kicker" as="p" content="Rudra Scholar" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(statusMessage)) && (<>      <RudraCoreTypography id="usage_error" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(statusMessage)} aria-live="polite" />
</>)}
      {isVisibleValue((((value) => { return !value; })(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(dashboardGuest)))) && (<>      <RudraCoreButton id="usage_refresh" className="rs-usage-button" label="Refresh usage" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(busy)} disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(busy)} onAction={(...eventArgs) => _callAction("loadLearningDashboardSsr", {}, eventArgs)} loadingText="Loading usage…" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className="rs-page-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Learning overview" : _bindingValue)(_scope?.i18n?.title)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(dashboardGuest)) && (<>      <RudraCoreTypography id="usage_guest" as="p" content="Sign in to see your learning time and recent courses." aria-live="polite" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subtitle" className="rs-page-subtitle" content={((_bindingValue) => _bindingValue === undefined ? "Track your available learning time and continue where you left off." : _bindingValue)(_scope?.i18n?.subtitle)} as="p" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(dashboardLoaded)) && (<>      <RudraLayoutBox id="summary_grid" className="grid rs-summary-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="available_card" className="rs-stat-card rs-stat-card-accent" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="available_label" className="rs-stat-label" content={((_bindingValue) => _bindingValue === undefined ? "Available time" : _bindingValue)(_scope?.i18n?.availableTime)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="available_value" className="rs-stat-value rs-stat-value-minutes" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(dashboardSummary?.availableMinutes)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="available_note" className="rs-stat-note" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Ready for active AI-assisted learning." : _bindingValue)(_scope?.i18n?.availableNote)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="used_card" className="rs-stat-card" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="used_label" className="rs-stat-label" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Time used" : _bindingValue)(_scope?.i18n?.timeUsed)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="used_value" className="rs-stat-value rs-stat-value-minutes" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(dashboardSummary?.usedMinutes)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="used_note" className="rs-stat-note" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Only active learning time is counted." : _bindingValue)(_scope?.i18n?.usedNote)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="visited_card" className="rs-stat-card" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="visited_label" className="rs-stat-label" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Visited courses" : _bindingValue)(_scope?.i18n?.visitedCourses)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="visited_value" className="rs-stat-value" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(dashboardSummary?.visitedCourseCount)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="visited_note" className="rs-stat-note" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Your most recent learning activity." : _bindingValue)(_scope?.i18n?.visitedNote)} />
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(currentCourseData?.id)) && (<>      <RudraCoreCard id="current_card" className="rs-current-card" theme="auto" as="section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="current_eyebrow" className="rs-section-label" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Continue learning" : _bindingValue)(_scope?.i18n?.continueLearning)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="current_title" className="rs-current-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Select a course" : _bindingValue)(currentCourseData?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="current_description" className="rs-current-description" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Resume your latest lesson." : _bindingValue)(currentCourseData?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="current_meta" className="rs-course-meta" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(currentCourseData?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="current_progress" className="rs-progress-pill rs-progress-value" as="p" content={(((value) => { return String(Math.max(0,Math.min(100,Number(value)||0))) + "%"; })(((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(currentCourseData?.progressPercent)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="current_last_visit" className="rs-last-visit rs-last-visit-value" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Recently" : _bindingValue)(currentCourseData?.lastVisitedAt)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(dashboardLoaded)) && (<>      <RudraLayoutBox id="recent_section" className="flex flex-col rs-recent-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_heading" className="rs-section-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Recently visited" : _bindingValue)(_scope?.i18n?.recentCourses)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_description" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Pick up a course from your recent activity." : _bindingValue)(_scope?.i18n?.recentDescription)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="recent_grid" className="grid rs-course-grid">      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(recentCoursesData?.[0]?.id)) && (<>      <RudraCoreCard id="recent_course_1" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_1_label" className="rs-course-index" as="p" content="01" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_1_title" className="rs-course-title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "Course unavailable" : _bindingValue)(recentCoursesData?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_1_professor" className="rs-course-meta" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(recentCoursesData?.[0]?.professorName)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_1_progress" className="rs-course-progress rs-progress-value" as="p" content={(((value) => { return String(Math.max(0,Math.min(100,Number(value)||0))) + "%"; })(((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(recentCoursesData?.[0]?.progressPercent)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_1_visited" className="rs-last-visit rs-visited-value" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Recently" : _bindingValue)(recentCoursesData?.[0]?.lastVisitedAt)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(recentCoursesData?.[1]?.id)) && (<>      <RudraCoreCard id="recent_course_2" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_2_label" className="rs-course-index" as="p" content="02" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_2_title" className="rs-course-title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "Course unavailable" : _bindingValue)(recentCoursesData?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_2_professor" className="rs-course-meta" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(recentCoursesData?.[1]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_2_progress" className="rs-course-progress rs-progress-value" as="p" content={(((value) => { return String(Math.max(0,Math.min(100,Number(value)||0))) + "%"; })(((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(recentCoursesData?.[1]?.progressPercent)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_2_visited" className="rs-last-visit rs-visited-value" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Recently" : _bindingValue)(recentCoursesData?.[1]?.lastVisitedAt)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(recentCoursesData?.[2]?.id)) && (<>      <RudraCoreCard id="recent_course_3" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_3_label" className="rs-course-index" as="p" content="03" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_3_title" className="rs-course-title" as="h4" content={((_bindingValue) => _bindingValue === undefined ? "Course unavailable" : _bindingValue)(recentCoursesData?.[2]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_3_professor" className="rs-course-meta" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(recentCoursesData?.[2]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_3_progress" className="rs-course-progress rs-progress-value" as="p" content={(((value) => { return String(Math.max(0,Math.min(100,Number(value)||0))) + "%"; })(((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(recentCoursesData?.[2]?.progressPercent)))} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="recent_course_3_visited" className="rs-last-visit rs-visited-value" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Recently" : _bindingValue)(recentCoursesData?.[2]?.lastVisitedAt)} />
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && !value.length; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(recentCoursesData)))) && (<>      <RudraCoreTypography id="usage_empty" as="p" content="No recent courses yet. Open Course Explorer to begin." />
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
