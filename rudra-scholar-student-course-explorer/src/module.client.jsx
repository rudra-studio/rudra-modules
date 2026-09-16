import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { UniversalIcon } from './universal-icon.jsx';
import { Typography as RudraCoreTypography, Card as RudraCoreCard, Alert as RudraCoreAlert, Button as RudraCoreButton } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox, Container as RudraLayoutContainer } from '@rudra-studio/rudra-layout';
import { Input as RudraFormInput } from '@rudra-studio/rudra-form';

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

  const lockedProfessorIds = props.lockedProfessorIds !== undefined ? props.lockedProfessorIds : (props.data?.lockedProfessorIds !== undefined ? props.data.lockedProfessorIds : []);
  const courses = props.courses !== undefined ? props.courses : (props.data?.courses !== undefined ? props.data.courses : [{"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"title":"Engineering Mathematics I"},{"description":"Limits, derivatives, integration, and applications.","id":"22222222-2222-4222-8222-222222222212","isFavorite":false,"professorId":"prof-arjun","professorName":"Prof. Arjun Rao","progressPercent":68,"sectionCount":10,"title":"Calculus I"},{"description":"Logic, relations, combinatorics, and graph theory.","id":"33333333-3333-4333-8333-333333333312","isFavorite":false,"professorId":"prof-kavitha","professorName":"Dr. Kavitha N","progressPercent":25,"sectionCount":7,"title":"Discrete Mathematics"}]);
  const favoriteCourses = props.favoriteCourses !== undefined ? props.favoriteCourses : (props.data?.favoriteCourses !== undefined ? props.data.favoriteCourses : [{"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"title":"Engineering Mathematics I"}]);
  const bookmarkedProblems = props.bookmarkedProblems !== undefined ? props.bookmarkedProblems : (props.data?.bookmarkedProblems !== undefined ? props.data.bookmarkedProblems : [{"bookmarked":true,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111121","title":"Eigenvalues of a 2 × 2 matrix","topicPath":"Matrices / Eigenvalues"}]);
  const professors = props.professors !== undefined ? props.professors : (props.data?.professors !== undefined ? props.data.professors : [{"courseCount":3,"id":"prof-meera","institution":"Rudra College of Engineering","name":"Dr. Meera Iyer","subjects":"Linear algebra · Calculus"},{"courseCount":2,"id":"prof-arjun","institution":"Institute of Mathematical Sciences","name":"Prof. Arjun Rao","subjects":"Calculus · Differential equations"},{"courseCount":4,"id":"prof-kavitha","institution":"Rudra College of Engineering","name":"Dr. Kavitha N","subjects":"Discrete mathematics · Graph theory"}]);
  const loading = props.loading !== undefined ? props.loading : (props.data?.loading !== undefined ? props.data.loading : false);
  const lockedCourseIds = props.lockedCourseIds !== undefined ? props.lockedCourseIds : (props.data?.lockedCourseIds !== undefined ? props.data.lockedCourseIds : []);
  const lockedLabel = props.lockedLabel !== undefined ? props.lockedLabel : (props.data?.lockedLabel !== undefined ? props.data.lockedLabel : "");
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : true);
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const lockedProblemIds = props.lockedProblemIds !== undefined ? props.lockedProblemIds : (props.data?.lockedProblemIds !== undefined ? props.data.lockedProblemIds : []);
  const explorerLocked = props.explorerLocked !== undefined ? props.explorerLocked : (props.data?.explorerLocked !== undefined ? props.data.explorerLocked : false);
  const errorMessage = props.errorMessage !== undefined ? props.errorMessage : (props.data?.errorMessage !== undefined ? props.data.errorMessage : "");
  const selectedCourse = props.selectedCourse !== undefined ? props.selectedCourse : (props.data?.selectedCourse !== undefined ? props.data.selectedCourse : {"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"problems":[{"bookmarked":true,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111121","title":"Eigenvalues of a 2 × 2 matrix","topicPath":"Matrices / Eigenvalues"},{"bookmarked":false,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111122","title":"Diagonalise a symmetric matrix","topicPath":"Matrices / Diagonalisation"},{"bookmarked":false,"difficulty":"Advanced","id":"11111111-1111-4111-8111-111111111123","title":"Verify the Cayley–Hamilton theorem","topicPath":"Matrices / Matrix theorems"}],"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"sectionTitle":"Matrices / Eigenvalues","title":"Engineering Mathematics I"});
  const searchTerm = props.searchTerm !== undefined ? props.searchTerm : (props.data?.searchTerm !== undefined ? props.data.searchTerm : "");
  const inputs = { "lockedProfessorIds": lockedProfessorIds, "courses": courses, "favoriteCourses": favoriteCourses, "bookmarkedProblems": bookmarkedProblems, "professors": professors, "loading": loading, "lockedCourseIds": lockedCourseIds, "lockedLabel": lockedLabel, "authenticated": authenticated, "locale": locale, "lockedProblemIds": lockedProblemIds, "explorerLocked": explorerLocked, "errorMessage": errorMessage, "selectedCourse": selectedCourse, "searchTerm": searchTerm };
  const [coursesData, set_coursesData] = useState(() => structuredClone([]));
  const [catalogueError, set_catalogueError] = useState(() => structuredClone(""));
  const [selectedProfessorId, set_selectedProfessorId] = useState(() => structuredClone(""));
  const [professorsData, set_professorsData] = useState(() => structuredClone([]));
  const [favoriteCoursesData, set_favoriteCoursesData] = useState(() => structuredClone([]));
  const [explorerLockState, set_explorerLockState] = useState(() => structuredClone({}));
  const [searchText, set_searchText] = useState(() => structuredClone(""));
  const [selectedCourseId, set_selectedCourseId] = useState(() => structuredClone(""));
  const [selectedCourseData, set_selectedCourseData] = useState(() => structuredClone({}));
  const [bookmarkedProblemsData, set_bookmarkedProblemsData] = useState(() => structuredClone([]));
  const [catalogueLoading, set_catalogueLoading] = useState(() => structuredClone(false));
  const state = { "coursesData": coursesData, "catalogueError": catalogueError, "selectedProfessorId": selectedProfessorId, "professorsData": professorsData, "favoriteCoursesData": favoriteCoursesData, "explorerLockState": explorerLockState, "searchText": searchText, "selectedCourseId": selectedCourseId, "selectedCourseData": selectedCourseData, "bookmarkedProblemsData": bookmarkedProblemsData, "catalogueLoading": catalogueLoading };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "coursesData": { const next = typeof value === 'function' ? value(state.coursesData) : value; state.coursesData = next; set_coursesData(next); return next; }
      case "catalogueError": { const next = typeof value === 'function' ? value(state.catalogueError) : value; state.catalogueError = next; set_catalogueError(next); return next; }
      case "selectedProfessorId": { const next = typeof value === 'function' ? value(state.selectedProfessorId) : value; state.selectedProfessorId = next; set_selectedProfessorId(next); return next; }
      case "professorsData": { const next = typeof value === 'function' ? value(state.professorsData) : value; state.professorsData = next; set_professorsData(next); return next; }
      case "favoriteCoursesData": { const next = typeof value === 'function' ? value(state.favoriteCoursesData) : value; state.favoriteCoursesData = next; set_favoriteCoursesData(next); return next; }
      case "explorerLockState": { const next = typeof value === 'function' ? value(state.explorerLockState) : value; state.explorerLockState = next; set_explorerLockState(next); return next; }
      case "searchText": { const next = typeof value === 'function' ? value(state.searchText) : value; state.searchText = next; set_searchText(next); return next; }
      case "selectedCourseId": { const next = typeof value === 'function' ? value(state.selectedCourseId) : value; state.selectedCourseId = next; set_selectedCourseId(next); return next; }
      case "selectedCourseData": { const next = typeof value === 'function' ? value(state.selectedCourseData) : value; state.selectedCourseData = next; set_selectedCourseData(next); return next; }
      case "bookmarkedProblemsData": { const next = typeof value === 'function' ? value(state.bookmarkedProblemsData) : value; state.bookmarkedProblemsData = next; set_bookmarkedProblemsData(next); return next; }
      case "catalogueLoading": { const next = typeof value === 'function' ? value(state.catalogueLoading) : value; state.catalogueLoading = next; set_catalogueLoading(next); return next; }
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
      case "coursesData": _setState("coursesData", updateNested); return value;
      case "catalogueError": _setState("catalogueError", updateNested); return value;
      case "selectedProfessorId": _setState("selectedProfessorId", updateNested); return value;
      case "professorsData": _setState("professorsData", updateNested); return value;
      case "favoriteCoursesData": _setState("favoriteCoursesData", updateNested); return value;
      case "explorerLockState": _setState("explorerLockState", updateNested); return value;
      case "searchText": _setState("searchText", updateNested); return value;
      case "selectedCourseId": _setState("selectedCourseId", updateNested); return value;
      case "selectedCourseData": _setState("selectedCourseData", updateNested); return value;
      case "bookmarkedProblemsData": _setState("bookmarkedProblemsData", updateNested); return value;
      case "catalogueLoading": _setState("catalogueLoading", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"bookmarkToggled":{"properties":{"bookmarked":{"type":"boolean"},"problemId":{"type":"string"}},"required":["problemId","bookmarked"],"type":"object"},"courseSelected":{"properties":{"courseId":{"type":"string"}},"required":["courseId"],"type":"object"},"favoriteToggled":{"properties":{"courseId":{"type":"string"},"favorite":{"type":"boolean"}},"required":["courseId","favorite"],"type":"object"},"problemSelected":{"properties":{"courseContext":{"type":"object"},"courseId":{"type":"string"},"locale":{"type":"string"},"problem":{"type":"object"},"problemId":{"type":"string"}},"required":["problemId","locale","problem","courseContext"],"type":"object"},"professorSelected":{"properties":{"professorId":{"type":"string"}},"required":["professorId"],"type":"object"},"searchChanged":{"properties":{"locale":{"type":"string"},"term":{"type":"string"}},"required":["term","locale"],"type":"object"}};
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

  async function loadExplorerCatalogue(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("catalogueLoading", true);
    await refreshExplorerLocks({});
    _setState("catalogueError", "");
    try {
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"email":"","term":"{{ state.searchText }}"}, roots) || {};
        delete namedParameters["email"];
        const parameters = [undefined, namedParameters["term"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarBrowseProfessors", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarBrowseProfessors", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["catalogue_professors"] = result; vars["queryResult"] = result; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "catalogue_professors" };
      vars.error = error; stepResults["catalogue_professors"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "The course catalogue could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"email":"","professorId":"{{ state.selectedProfessorId }}","term":"{{ state.searchText }}"}, roots) || {};
        delete namedParameters["email"];
        const parameters = [undefined, namedParameters["term"], namedParameters["professorId"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["catalogue_courses"] = result; vars["queryResult"] = result; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "catalogue_courses" };
      vars.error = error; stepResults["catalogue_courses"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "The course catalogue could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"email":""}, roots) || {};
        delete namedParameters["email"];
        const parameters = [undefined];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadFavoriteCourses", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadFavoriteCourses", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["catalogue_favorites"] = result; vars["queryResult"] = result; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "catalogue_favorites" };
      vars.error = error; stepResults["catalogue_favorites"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "The course catalogue could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"email":"","locale":"{{ inputs.locale }}"}, roots) || {};
        delete namedParameters["email"];
        const parameters = [undefined, namedParameters["locale"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadBookmarkedProblems", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadBookmarkedProblems", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["catalogue_bookmarks"] = result; vars["queryResult"] = result; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "catalogue_bookmarks" };
      vars.error = error; stepResults["catalogue_bookmarks"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "The course catalogue could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const first=x=>Array.isArray(x)?(x[0]||{}):(x||{});const p=first(stepResults.catalogue_professors),c=first(stepResults.catalogue_courses),f=first(stepResults.catalogue_favorites),b=first(stepResults.catalogue_bookmarks);return{professors:Array.isArray(p.professors)?p.professors:[],courses:Array.isArray(c.courses)?c.courses:[],favorites:Array.isArray(f.favoriteCourses)?f.favoriteCourses:[],bookmarks:Array.isArray(b.bookmarkedProblems)?b.bookmarkedProblems:[]};
        })();
        stepResults["catalogue_parse"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "catalogue_parse" };
      vars.error = error; stepResults["catalogue_parse"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "The course catalogue could not be loaded. Please retry.");
      return { "ok": false };
      return undefined;
    }
    _setState("professorsData", stepResults.catalogue_parse.professors);
    await refreshExplorerLocks({});
    _setState("coursesData", stepResults.catalogue_parse.courses);
    await refreshExplorerLocks({});
    _setState("favoriteCoursesData", stepResults.catalogue_parse.favorites);
    await refreshExplorerLocks({});
    _setState("bookmarkedProblemsData", stepResults.catalogue_parse.bookmarks);
    await refreshExplorerLocks({});
    _setState("catalogueLoading", false);
    await refreshExplorerLocks({});
    return stepResults.catalogue_parse;
    return undefined;
  }

  async function toggleExplorerBookmark(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function explorerItemAvailability(inputs, state, kind, rawId) {
  const list = value => Array.isArray(value) ? value.filter(item => item && typeof item === 'object') : [];
  const id = rawId == null ? '' : String(rawId);
  const selected = [state.selectedCourseData, inputs.selectedCourse].filter(item => item && typeof item === 'object');
  const pools = {
    professor: [...list(state.professorsData), ...list(inputs.professors)],
    course: [...list(state.coursesData), ...list(state.favoriteCoursesData), ...list(inputs.courses), ...list(inputs.favoriteCourses), ...selected],
    problem: [...selected.flatMap(item => list(item.problems)), ...list(state.bookmarkedProblemsData), ...list(inputs.bookmarkedProblems)],
  };
  const records = (pools[kind] || []).filter(item => id && String(item.id) === id);
  const keys = { professor: 'lockedProfessorIds', course: 'lockedCourseIds', problem: 'lockedProblemIds' };
  const explicit = Array.isArray(inputs[keys[kind]]) && inputs[keys[kind]].some(value => String(value) === id);
  let inherited = null;
  if (kind === 'course') {
    inherited = records.filter(item => item.professorId).map(item => explorerItemAvailability(inputs, state, 'professor', item.professorId)).find(item => item.locked);
  } else if (kind === 'problem') {
    const courseIds = new Set(records.map(item => item.courseId || item.syllabusId).filter(Boolean).map(String));
    for (const course of selected) if (list(course.problems).some(item => String(item.id) === id) && course.id) courseIds.add(String(course.id));
    inherited = [...courseIds].map(courseId => explorerItemAvailability(inputs, state, 'course', courseId)).find(item => item.locked);
  }
  const locked = inputs.explorerLocked === true || explicit || records.some(item => item.locked === true) || !!inherited;
  const labels = { en: 'Locked', hi: 'लॉक है', ta: 'பூட்டப்பட்டுள்ளது' };
  const fallback = Object.hasOwn(labels, String(inputs.locale)) ? labels[String(inputs.locale)] : labels.en;
  const custom = records.find(item => item.locked === true && typeof item.lockedLabel === 'string' && item.lockedLabel.trim())?.lockedLabel;
  const label = String(custom || inherited?.label || (typeof inputs.lockedLabel === 'string' && inputs.lockedLabel.trim()) || fallback).trim().slice(0, 120);
  return { locked, found: records.length > 0, label, disabled: locked || !records.length || state.catalogueLoading === true };
}
return explorerItemAvailability(inputs, state, 'problem', args.problemId);
      })();
      stepResults["explorer_lock_check"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.explorer_lock_check.disabled) {
      return { "ok": false, "reason": "item_unavailable" };
    } else {
      _setState("catalogueError", "");
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
return{problemId:String(args.problemId||''),bookmarked:!Boolean(args.bookmarked)};
          })();
          stepResults["bookmark_read"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "bookmark_read" };
        vars.error = error; stepResults["bookmark_read"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your bookmark could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"bookmarked":"{{ stepResults.bookmark_read.bookmarked }}","email":"","problemId":"{{ stepResults.bookmark_read.problemId }}"}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined, namedParameters["problemId"], namedParameters["bookmarked"]];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarToggleProblemBookmark", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarToggleProblemBookmark", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["bookmark_query"] = result; vars["queryResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "bookmark_query" };
        vars.error = error; stepResults["bookmark_query"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your bookmark could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"email":"","locale":"{{ inputs.locale }}"}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined, namedParameters["locale"]];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadBookmarkedProblems", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadBookmarkedProblems", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["bookmark_refresh"] = result; vars["queryResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "bookmark_refresh" };
        vars.error = error; stepResults["bookmark_refresh"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your bookmark could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const rows=Array.isArray(stepResults.bookmark_refresh)?stepResults.bookmark_refresh:[];const row=rows[0]||{};const bookmarks=Array.isArray(row.bookmarkedProblems)?row.bookmarkedProblems:[];const id=stepResults.bookmark_read.problemId,value=stepResults.bookmark_read.bookmarked;const selected={...(state.selectedCourseData||{})};selected.problems=(Array.isArray(selected.problems)?selected.problems:[]).map(x=>String(x.id)===id?{...x,bookmarked:value}:x);return{bookmarks,selected};
          })();
          stepResults["bookmark_merge"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "bookmark_merge" };
        vars.error = error; stepResults["bookmark_merge"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your bookmark could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      _setState("bookmarkedProblemsData", stepResults.bookmark_merge.bookmarks);
      await refreshExplorerLocks({});
      _setState("selectedCourseData", stepResults.bookmark_merge.selected);
      await refreshExplorerLocks({});
      try {
        await _emitOutput("bookmarkToggled", { "bookmarked": stepResults.bookmark_read.bookmarked, "problemId": stepResults.bookmark_read.problemId }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "bookmark_emit" };
        vars.error = error; stepResults["bookmark_emit"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your bookmark could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      return { "ok": true };
    }
    return undefined;
  }

  async function clearExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchText", "");
    _setState("selectedProfessorId", "");
    await loadExplorerCatalogue({});
    await _emitOutput("searchChanged", { "locale": inputs.locale, "term": "" }, true);
    return undefined;
  }

  async function selectExplorerProfessor(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function explorerItemAvailability(inputs, state, kind, rawId) {
  const list = value => Array.isArray(value) ? value.filter(item => item && typeof item === 'object') : [];
  const id = rawId == null ? '' : String(rawId);
  const selected = [state.selectedCourseData, inputs.selectedCourse].filter(item => item && typeof item === 'object');
  const pools = {
    professor: [...list(state.professorsData), ...list(inputs.professors)],
    course: [...list(state.coursesData), ...list(state.favoriteCoursesData), ...list(inputs.courses), ...list(inputs.favoriteCourses), ...selected],
    problem: [...selected.flatMap(item => list(item.problems)), ...list(state.bookmarkedProblemsData), ...list(inputs.bookmarkedProblems)],
  };
  const records = (pools[kind] || []).filter(item => id && String(item.id) === id);
  const keys = { professor: 'lockedProfessorIds', course: 'lockedCourseIds', problem: 'lockedProblemIds' };
  const explicit = Array.isArray(inputs[keys[kind]]) && inputs[keys[kind]].some(value => String(value) === id);
  let inherited = null;
  if (kind === 'course') {
    inherited = records.filter(item => item.professorId).map(item => explorerItemAvailability(inputs, state, 'professor', item.professorId)).find(item => item.locked);
  } else if (kind === 'problem') {
    const courseIds = new Set(records.map(item => item.courseId || item.syllabusId).filter(Boolean).map(String));
    for (const course of selected) if (list(course.problems).some(item => String(item.id) === id) && course.id) courseIds.add(String(course.id));
    inherited = [...courseIds].map(courseId => explorerItemAvailability(inputs, state, 'course', courseId)).find(item => item.locked);
  }
  const locked = inputs.explorerLocked === true || explicit || records.some(item => item.locked === true) || !!inherited;
  const labels = { en: 'Locked', hi: 'लॉक है', ta: 'பூட்டப்பட்டுள்ளது' };
  const fallback = Object.hasOwn(labels, String(inputs.locale)) ? labels[String(inputs.locale)] : labels.en;
  const custom = records.find(item => item.locked === true && typeof item.lockedLabel === 'string' && item.lockedLabel.trim())?.lockedLabel;
  const label = String(custom || inherited?.label || (typeof inputs.lockedLabel === 'string' && inputs.lockedLabel.trim()) || fallback).trim().slice(0, 120);
  return { locked, found: records.length > 0, label, disabled: locked || !records.length || state.catalogueLoading === true };
}
return explorerItemAvailability(inputs, state, 'professor', args.professorId);
      })();
      stepResults["explorer_lock_check"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.explorer_lock_check.disabled) {
      return { "ok": false, "reason": "item_unavailable" };
    } else {
      _setState("catalogueError", "");
      _setState("catalogueLoading", true);
      await refreshExplorerLocks({});
      _setState("selectedProfessorId", args.professorId);
      _setState("coursesData", []);
      await refreshExplorerLocks({});
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"email":"","professorId":"{{ args.professorId }}","term":"{{ state.searchText }}"}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined, namedParameters["term"], namedParameters["professorId"]];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["prof_query"] = result; vars["queryResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "prof_query" };
        vars.error = error; stepResults["prof_query"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Courses for this professor could not be loaded. Please retry or clear the filter.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const row=Array.isArray(stepResults.prof_query)?(stepResults.prof_query[0]||{}):(stepResults.prof_query||{});return Array.isArray(row.courses)?row.courses:[];
          })();
          stepResults["prof_parse"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "prof_parse" };
        vars.error = error; stepResults["prof_parse"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Courses for this professor could not be loaded. Please retry or clear the filter.");
        return { "ok": false };
        return undefined;
      }
      _setState("coursesData", stepResults.prof_parse);
      await refreshExplorerLocks({});
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      try {
        await _emitOutput("professorSelected", { "professorId": args.professorId }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "prof_emit" };
        vars.error = error; stepResults["prof_emit"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Courses for this professor could not be loaded. Please retry or clear the filter.");
        return { "ok": false };
        return undefined;
      }
      return { "ok": true };
    }
    return undefined;
  }

  async function toggleExplorerFavorite(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function explorerItemAvailability(inputs, state, kind, rawId) {
  const list = value => Array.isArray(value) ? value.filter(item => item && typeof item === 'object') : [];
  const id = rawId == null ? '' : String(rawId);
  const selected = [state.selectedCourseData, inputs.selectedCourse].filter(item => item && typeof item === 'object');
  const pools = {
    professor: [...list(state.professorsData), ...list(inputs.professors)],
    course: [...list(state.coursesData), ...list(state.favoriteCoursesData), ...list(inputs.courses), ...list(inputs.favoriteCourses), ...selected],
    problem: [...selected.flatMap(item => list(item.problems)), ...list(state.bookmarkedProblemsData), ...list(inputs.bookmarkedProblems)],
  };
  const records = (pools[kind] || []).filter(item => id && String(item.id) === id);
  const keys = { professor: 'lockedProfessorIds', course: 'lockedCourseIds', problem: 'lockedProblemIds' };
  const explicit = Array.isArray(inputs[keys[kind]]) && inputs[keys[kind]].some(value => String(value) === id);
  let inherited = null;
  if (kind === 'course') {
    inherited = records.filter(item => item.professorId).map(item => explorerItemAvailability(inputs, state, 'professor', item.professorId)).find(item => item.locked);
  } else if (kind === 'problem') {
    const courseIds = new Set(records.map(item => item.courseId || item.syllabusId).filter(Boolean).map(String));
    for (const course of selected) if (list(course.problems).some(item => String(item.id) === id) && course.id) courseIds.add(String(course.id));
    inherited = [...courseIds].map(courseId => explorerItemAvailability(inputs, state, 'course', courseId)).find(item => item.locked);
  }
  const locked = inputs.explorerLocked === true || explicit || records.some(item => item.locked === true) || !!inherited;
  const labels = { en: 'Locked', hi: 'लॉक है', ta: 'பூட்டப்பட்டுள்ளது' };
  const fallback = Object.hasOwn(labels, String(inputs.locale)) ? labels[String(inputs.locale)] : labels.en;
  const custom = records.find(item => item.locked === true && typeof item.lockedLabel === 'string' && item.lockedLabel.trim())?.lockedLabel;
  const label = String(custom || inherited?.label || (typeof inputs.lockedLabel === 'string' && inputs.lockedLabel.trim()) || fallback).trim().slice(0, 120);
  return { locked, found: records.length > 0, label, disabled: locked || !records.length || state.catalogueLoading === true };
}
return explorerItemAvailability(inputs, state, 'course', args.courseId);
      })();
      stepResults["explorer_lock_check"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.explorer_lock_check.disabled) {
      return { "ok": false, "reason": "item_unavailable" };
    } else {
      _setState("catalogueError", "");
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
return{courseId:String(args.courseId||''),favorite:!Boolean(args.favorite)};
          })();
          stepResults["favorite_read"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "favorite_read" };
        vars.error = error; stepResults["favorite_read"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your favourite could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"courseId":"{{ stepResults.favorite_read.courseId }}","email":"","favorite":"{{ stepResults.favorite_read.favorite }}"}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined, namedParameters["courseId"], namedParameters["favorite"]];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarToggleCourseFavorite", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarToggleCourseFavorite", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["favorite_query"] = result; vars["queryResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "favorite_query" };
        vars.error = error; stepResults["favorite_query"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your favourite could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"email":""}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadFavoriteCourses", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadFavoriteCourses", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["favorite_refresh"] = result; vars["queryResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "favorite_refresh" };
        vars.error = error; stepResults["favorite_refresh"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your favourite could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const rows=Array.isArray(stepResults.favorite_refresh)?stepResults.favorite_refresh:[];const row=rows[0]||{};const favorites=Array.isArray(row.favoriteCourses)?row.favoriteCourses:[];const id=stepResults.favorite_read.courseId,value=stepResults.favorite_read.favorite;const courses=(Array.isArray(state.coursesData)?state.coursesData:[]).map(x=>String(x.id)===id?{...x,isFavorite:value}:x);const selected=state.selectedCourseData&&String(state.selectedCourseData.id)===id?{...state.selectedCourseData,isFavorite:value}:state.selectedCourseData;return{favorites,courses,selected};
          })();
          stepResults["favorite_merge"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "favorite_merge" };
        vars.error = error; stepResults["favorite_merge"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your favourite could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      _setState("favoriteCoursesData", stepResults.favorite_merge.favorites);
      await refreshExplorerLocks({});
      _setState("coursesData", stepResults.favorite_merge.courses);
      await refreshExplorerLocks({});
      _setState("selectedCourseData", stepResults.favorite_merge.selected);
      await refreshExplorerLocks({});
      try {
        await _emitOutput("favoriteToggled", { "courseId": stepResults.favorite_read.courseId, "favorite": stepResults.favorite_read.favorite }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "favorite_emit" };
        vars.error = error; stepResults["favorite_emit"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "Your favourite could not be updated. Please retry.");
        return { "ok": false };
        return undefined;
      }
      return { "ok": true };
    }
    return undefined;
  }

  async function syncAndSearchExplorer(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchText", inputs.searchTerm);
    await submitExplorerSearch({});
    return undefined;
  }

  async function submitExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("catalogueError", "");
    _setState("catalogueLoading", true);
    await refreshExplorerLocks({});
    try {
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"email":"","term":"{{ state.searchText }}"}, roots) || {};
        delete namedParameters["email"];
        const parameters = [undefined, namedParameters["term"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarBrowseProfessors", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarBrowseProfessors", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["search_professors"] = result; vars["queryResult"] = result; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "search_professors" };
      vars.error = error; stepResults["search_professors"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "Search failed. Your previous results are kept; please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
        const namedParameters = _resolveRuntimeValue({"email":"","professorId":"{{ state.selectedProfessorId }}","term":"{{ state.searchText }}"}, roots) || {};
        delete namedParameters["email"];
        const parameters = [undefined, namedParameters["term"], namedParameters["professorId"]];
        const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
        let result;
        if (typeof queryExecutor === 'function') {
          result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters, namedParameters, signal: args.signal });
        } else {
          const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters, namedParameters }), signal: args.signal });
          const queryPayload = await queryResponse.json().catch(() => ({}));
          if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
          result = queryPayload.data;
        }
        stepResults["search_courses"] = result; vars["queryResult"] = result; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "search_courses" };
      vars.error = error; stepResults["search_courses"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "Search failed. Your previous results are kept; please retry.");
      return { "ok": false };
      return undefined;
    }
    try {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const first=x=>Array.isArray(x)?(x[0]||{}):(x||{});const p=first(stepResults.search_professors),c=first(stepResults.search_courses);return{professors:Array.isArray(p.professors)?p.professors:[],courses:Array.isArray(c.courses)?c.courses:[]};
        })();
        stepResults["search_parse"] = customResult; vars["customCodeResult"] = customResult; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "search_parse" };
      vars.error = error; stepResults["search_parse"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "Search failed. Your previous results are kept; please retry.");
      return { "ok": false };
      return undefined;
    }
    _setState("professorsData", stepResults.search_parse.professors);
    await refreshExplorerLocks({});
    _setState("coursesData", stepResults.search_parse.courses);
    await refreshExplorerLocks({});
    _setState("catalogueLoading", false);
    await refreshExplorerLocks({});
    try {
      await _emitOutput("searchChanged", { "locale": inputs.locale, "term": state.searchText }, true);
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "search_emit" };
      vars.error = error; stepResults["search_emit"] = { error };
      _setState("catalogueLoading", false);
      await refreshExplorerLocks({});
      _setState("catalogueError", "Search failed. Your previous results are kept; please retry.");
      return { "ok": false };
      return undefined;
    }
    return { "ok": true };
    return undefined;
  }

  async function selectExplorerCourse(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function explorerItemAvailability(inputs, state, kind, rawId) {
  const list = value => Array.isArray(value) ? value.filter(item => item && typeof item === 'object') : [];
  const id = rawId == null ? '' : String(rawId);
  const selected = [state.selectedCourseData, inputs.selectedCourse].filter(item => item && typeof item === 'object');
  const pools = {
    professor: [...list(state.professorsData), ...list(inputs.professors)],
    course: [...list(state.coursesData), ...list(state.favoriteCoursesData), ...list(inputs.courses), ...list(inputs.favoriteCourses), ...selected],
    problem: [...selected.flatMap(item => list(item.problems)), ...list(state.bookmarkedProblemsData), ...list(inputs.bookmarkedProblems)],
  };
  const records = (pools[kind] || []).filter(item => id && String(item.id) === id);
  const keys = { professor: 'lockedProfessorIds', course: 'lockedCourseIds', problem: 'lockedProblemIds' };
  const explicit = Array.isArray(inputs[keys[kind]]) && inputs[keys[kind]].some(value => String(value) === id);
  let inherited = null;
  if (kind === 'course') {
    inherited = records.filter(item => item.professorId).map(item => explorerItemAvailability(inputs, state, 'professor', item.professorId)).find(item => item.locked);
  } else if (kind === 'problem') {
    const courseIds = new Set(records.map(item => item.courseId || item.syllabusId).filter(Boolean).map(String));
    for (const course of selected) if (list(course.problems).some(item => String(item.id) === id) && course.id) courseIds.add(String(course.id));
    inherited = [...courseIds].map(courseId => explorerItemAvailability(inputs, state, 'course', courseId)).find(item => item.locked);
  }
  const locked = inputs.explorerLocked === true || explicit || records.some(item => item.locked === true) || !!inherited;
  const labels = { en: 'Locked', hi: 'लॉक है', ta: 'பூட்டப்பட்டுள்ளது' };
  const fallback = Object.hasOwn(labels, String(inputs.locale)) ? labels[String(inputs.locale)] : labels.en;
  const custom = records.find(item => item.locked === true && typeof item.lockedLabel === 'string' && item.lockedLabel.trim())?.lockedLabel;
  const label = String(custom || inherited?.label || (typeof inputs.lockedLabel === 'string' && inputs.lockedLabel.trim()) || fallback).trim().slice(0, 120);
  return { locked, found: records.length > 0, label, disabled: locked || !records.length || state.catalogueLoading === true };
}
return explorerItemAvailability(inputs, state, 'course', args.courseId);
      })();
      stepResults["explorer_lock_check"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.explorer_lock_check.disabled) {
      return { "ok": false, "reason": "item_unavailable" };
    } else {
      _setState("catalogueError", "");
      _setState("selectedCourseId", args.courseId);
      try {
        { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
          const namedParameters = _resolveRuntimeValue({"courseId":"{{ args.courseId }}","email":"","locale":"{{ inputs.locale }}"}, roots) || {};
          delete namedParameters["email"];
          const parameters = [undefined, namedParameters["courseId"], namedParameters["locale"]];
          const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
          let result;
          if (typeof queryExecutor === 'function') {
            result = await queryExecutor({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadExplorerCourse", parameters, namedParameters, signal: args.signal });
          } else {
            const queryResponse = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarLoadExplorerCourse", parameters, namedParameters }), signal: args.signal });
            const queryPayload = await queryResponse.json().catch(() => ({}));
            if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
            result = queryPayload.data;
          }
          stepResults["course_query"] = result; vars["queryResult"] = result; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "course_query" };
        vars.error = error; stepResults["course_query"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "This course could not be opened. Please retry or choose another course.");
        return { "ok": false };
        return undefined;
      }
      try {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const row=Array.isArray(stepResults.course_query)?(stepResults.course_query[0]||{}):(stepResults.course_query||{});return row.selectedCourse&&typeof row.selectedCourse==='object'?row.selectedCourse:{};
          })();
          stepResults["course_parse"] = customResult; vars["customCodeResult"] = customResult; }
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "course_parse" };
        vars.error = error; stepResults["course_parse"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "This course could not be opened. Please retry or choose another course.");
        return { "ok": false };
        return undefined;
      }
      _setState("selectedCourseData", stepResults.course_parse);
      await refreshExplorerLocks({});
      try {
        await _emitOutput("courseSelected", { "courseId": args.courseId }, true);
      } catch (_caughtError) {
        const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "course_emit" };
        vars.error = error; stepResults["course_emit"] = { error };
        _setState("catalogueLoading", false);
        await refreshExplorerLocks({});
        _setState("catalogueError", "This course could not be opened. Please retry or choose another course.");
        return { "ok": false };
        return undefined;
      }
      return { "ok": true };
    }
    return undefined;
  }

  async function syncExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchText", inputs.searchTerm);
    return undefined;
  }

  async function openExplorerProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function explorerItemAvailability(inputs, state, kind, rawId) {
  const list = value => Array.isArray(value) ? value.filter(item => item && typeof item === 'object') : [];
  const id = rawId == null ? '' : String(rawId);
  const selected = [state.selectedCourseData, inputs.selectedCourse].filter(item => item && typeof item === 'object');
  const pools = {
    professor: [...list(state.professorsData), ...list(inputs.professors)],
    course: [...list(state.coursesData), ...list(state.favoriteCoursesData), ...list(inputs.courses), ...list(inputs.favoriteCourses), ...selected],
    problem: [...selected.flatMap(item => list(item.problems)), ...list(state.bookmarkedProblemsData), ...list(inputs.bookmarkedProblems)],
  };
  const records = (pools[kind] || []).filter(item => id && String(item.id) === id);
  const keys = { professor: 'lockedProfessorIds', course: 'lockedCourseIds', problem: 'lockedProblemIds' };
  const explicit = Array.isArray(inputs[keys[kind]]) && inputs[keys[kind]].some(value => String(value) === id);
  let inherited = null;
  if (kind === 'course') {
    inherited = records.filter(item => item.professorId).map(item => explorerItemAvailability(inputs, state, 'professor', item.professorId)).find(item => item.locked);
  } else if (kind === 'problem') {
    const courseIds = new Set(records.map(item => item.courseId || item.syllabusId).filter(Boolean).map(String));
    for (const course of selected) if (list(course.problems).some(item => String(item.id) === id) && course.id) courseIds.add(String(course.id));
    inherited = [...courseIds].map(courseId => explorerItemAvailability(inputs, state, 'course', courseId)).find(item => item.locked);
  }
  const locked = inputs.explorerLocked === true || explicit || records.some(item => item.locked === true) || !!inherited;
  const labels = { en: 'Locked', hi: 'लॉक है', ta: 'பூட்டப்பட்டுள்ளது' };
  const fallback = Object.hasOwn(labels, String(inputs.locale)) ? labels[String(inputs.locale)] : labels.en;
  const custom = records.find(item => item.locked === true && typeof item.lockedLabel === 'string' && item.lockedLabel.trim())?.lockedLabel;
  const label = String(custom || inherited?.label || (typeof inputs.lockedLabel === 'string' && inputs.lockedLabel.trim()) || fallback).trim().slice(0, 120);
  return { locked, found: records.length > 0, label, disabled: locked || !records.length || state.catalogueLoading === true };
}
return explorerItemAvailability(inputs, state, 'problem', args.problemId);
      })();
      stepResults["explorer_lock_check"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.explorer_lock_check.disabled) {
      return { "ok": false, "reason": "item_unavailable" };
    } else {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const id=String(args.problemId||'');const selected=state.selectedCourseData&&typeof state.selectedCourseData==='object'?state.selectedCourseData:{};const pool=[...(Array.isArray(selected.problems)?selected.problems:[]),...(Array.isArray(state.bookmarkedProblemsData)?state.bookmarkedProblemsData:[])];const problem=pool.find(x=>String(x.id)===id)||{id,statement:'',title:''};return{problem:{...problem,statement:String(problem.statement||problem.title||'')},courseContext:{syllabusId:String(selected.id||problem.courseId||''),courseTitle:String(selected.title||''),professorName:String(selected.professorName||''),sectionTitle:String(selected.sectionTitle||''),topicPath:String(problem.topicPath||''),hierarchy:selected.hierarchy||{}}};
        })();
        stepResults["problem_resolve"] = customResult; vars["customCodeResult"] = customResult; }
      await _emitOutput("problemSelected", { "courseContext": stepResults.problem_resolve.courseContext, "courseId": stepResults.problem_resolve.courseContext.syllabusId, "locale": inputs.locale, "problem": stepResults.problem_resolve.problem, "problemId": args.problemId }, true);
    }
    return undefined;
  }

  async function refreshExplorerLocks(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
function explorerItemAvailability(inputs, state, kind, rawId) {
  const list = value => Array.isArray(value) ? value.filter(item => item && typeof item === 'object') : [];
  const id = rawId == null ? '' : String(rawId);
  const selected = [state.selectedCourseData, inputs.selectedCourse].filter(item => item && typeof item === 'object');
  const pools = {
    professor: [...list(state.professorsData), ...list(inputs.professors)],
    course: [...list(state.coursesData), ...list(state.favoriteCoursesData), ...list(inputs.courses), ...list(inputs.favoriteCourses), ...selected],
    problem: [...selected.flatMap(item => list(item.problems)), ...list(state.bookmarkedProblemsData), ...list(inputs.bookmarkedProblems)],
  };
  const records = (pools[kind] || []).filter(item => id && String(item.id) === id);
  const keys = { professor: 'lockedProfessorIds', course: 'lockedCourseIds', problem: 'lockedProblemIds' };
  const explicit = Array.isArray(inputs[keys[kind]]) && inputs[keys[kind]].some(value => String(value) === id);
  let inherited = null;
  if (kind === 'course') {
    inherited = records.filter(item => item.professorId).map(item => explorerItemAvailability(inputs, state, 'professor', item.professorId)).find(item => item.locked);
  } else if (kind === 'problem') {
    const courseIds = new Set(records.map(item => item.courseId || item.syllabusId).filter(Boolean).map(String));
    for (const course of selected) if (list(course.problems).some(item => String(item.id) === id) && course.id) courseIds.add(String(course.id));
    inherited = [...courseIds].map(courseId => explorerItemAvailability(inputs, state, 'course', courseId)).find(item => item.locked);
  }
  const locked = inputs.explorerLocked === true || explicit || records.some(item => item.locked === true) || !!inherited;
  const labels = { en: 'Locked', hi: 'लॉक है', ta: 'பூட்டப்பட்டுள்ளது' };
  const fallback = Object.hasOwn(labels, String(inputs.locale)) ? labels[String(inputs.locale)] : labels.en;
  const custom = records.find(item => item.locked === true && typeof item.lockedLabel === 'string' && item.lockedLabel.trim())?.lockedLabel;
  const label = String(custom || inherited?.label || (typeof inputs.lockedLabel === 'string' && inputs.lockedLabel.trim()) || fallback).trim().slice(0, 120);
  return { locked, found: records.length > 0, label, disabled: locked || !records.length || state.catalogueLoading === true };
}
function buildExplorerLockState(inputs, state, descriptors = explorerLockActions) {
  return Object.fromEntries(descriptors.map(action => {
    const item = action.path.split('.').reduce((value, key) => value?.[key], state);
    const availability = explorerItemAvailability(inputs, state, action.kind, item?.id);
    const openLabel = action.flag && item?.[action.flag] === true ? action.activeLabel : action.label;
    const label = availability.locked ? availability.label : openLabel;
    const title = item?.title || item?.name || '';
    return [action.id, { ...availability, label, ariaLabel: title ? `${label}: ${title}` : label }];
  }));
}
return buildExplorerLockState(inputs, state, [{"id":"prof_0_select","kind":"professor","path":"professorsData.0","label":"View courses"},{"id":"course_0_open","kind":"course","path":"coursesData.0","label":"Browse syllabus"},{"id":"course_0_favorite","kind":"course","path":"coursesData.0","label":"Add favourite","flag":"isFavorite","activeLabel":"Favourited"},{"id":"problem_0_open","kind":"problem","path":"selectedCourseData.problems.0","label":"Start problem"},{"id":"problem_0_bookmark","kind":"problem","path":"selectedCourseData.problems.0","label":"Add bookmark","flag":"bookmarked","activeLabel":"Bookmarked"},{"id":"prof_1_select","kind":"professor","path":"professorsData.1","label":"View courses"},{"id":"course_1_open","kind":"course","path":"coursesData.1","label":"Browse syllabus"},{"id":"course_1_favorite","kind":"course","path":"coursesData.1","label":"Add favourite","flag":"isFavorite","activeLabel":"Favourited"},{"id":"problem_1_open","kind":"problem","path":"selectedCourseData.problems.1","label":"Start problem"},{"id":"problem_1_bookmark","kind":"problem","path":"selectedCourseData.problems.1","label":"Add bookmark","flag":"bookmarked","activeLabel":"Bookmarked"},{"id":"prof_2_select","kind":"professor","path":"professorsData.2","label":"View courses"},{"id":"course_2_open","kind":"course","path":"coursesData.2","label":"Browse syllabus"},{"id":"course_2_favorite","kind":"course","path":"coursesData.2","label":"Add favourite","flag":"isFavorite","activeLabel":"Favourited"},{"id":"problem_2_open","kind":"problem","path":"selectedCourseData.problems.2","label":"Start problem"},{"id":"problem_2_bookmark","kind":"problem","path":"selectedCourseData.problems.2","label":"Add bookmark","flag":"bookmarked","activeLabel":"Bookmarked"},{"id":"saved_course_0_open","kind":"course","path":"favoriteCoursesData.0","label":"Open"},{"id":"saved_problem_0_open","kind":"problem","path":"bookmarkedProblemsData.0","label":"Solve"},{"id":"saved_course_1_open","kind":"course","path":"favoriteCoursesData.1","label":"Open"},{"id":"saved_problem_1_open","kind":"problem","path":"bookmarkedProblemsData.1","label":"Solve"}]);
      })();
      stepResults["locks_compute"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("explorerLockState", stepResults.locks_compute);
    return undefined;
  }

  async function setExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchText", args.value);
    return undefined;
  }

  const _localActions = {
    "loadExplorerCatalogue": loadExplorerCatalogue,
    "toggleExplorerBookmark": toggleExplorerBookmark,
    "clearExplorerSearch": clearExplorerSearch,
    "selectExplorerProfessor": selectExplorerProfessor,
    "toggleExplorerFavorite": toggleExplorerFavorite,
    "syncAndSearchExplorer": syncAndSearchExplorer,
    "submitExplorerSearch": submitExplorerSearch,
    "selectExplorerCourse": selectExplorerCourse,
    "syncExplorerSearch": syncExplorerSearch,
    "openExplorerProblem": openExplorerProblem,
    "refreshExplorerLocks": refreshExplorerLocks,
    "setExplorerSearch": setExplorerSearch,
  };
  const _localActionArguments = {
    "loadExplorerCatalogue": [],
    "toggleExplorerBookmark": ["problemId", "bookmarked"],
    "clearExplorerSearch": [],
    "selectExplorerProfessor": ["professorId"],
    "toggleExplorerFavorite": ["courseId", "favorite"],
    "syncAndSearchExplorer": [],
    "submitExplorerSearch": [],
    "selectExplorerCourse": ["courseId"],
    "syncExplorerSearch": [],
    "openExplorerProblem": ["problemId"],
    "refreshExplorerLocks": [],
    "setExplorerSearch": ["value"],
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
    void _runLifecycle("explorer_mountloadExplorerCatalogue", "takeLatest", (signal) => loadExplorerCatalogue({ signal }), "Module mount lifecycle failed:");
  }, []);
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; return; }
    void _runLifecycle("explorer_search_changesyncAndSearchExplorer", "takeLatest", (signal) => syncAndSearchExplorer({ signal }), 'Module input lifecycle failed:');
  }, [searchTerm]);
  const _inputLifecycleMounted1 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted1.current) { _inputLifecycleMounted1.current = true; return; }
    void _runLifecycle("explorer_locale_changeloadExplorerCatalogue", "takeLatest", (signal) => loadExplorerCatalogue({ signal }), 'Module input lifecycle failed:');
  }, [locale]);
  const _inputLifecycleMounted2 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted2.current) { _inputLifecycleMounted2.current = true; }
    void _runLifecycle("explorer_lock_inputsrefreshExplorerLocks", "takeLatest", (signal) => refreshExplorerLocks({ signal }), 'Module input lifecycle failed:');
  }, [explorerLocked, lockedProfessorIds, lockedCourseIds, lockedProblemIds, lockedLabel, locale, courses, professors, favoriteCourses, bookmarkedProblems, selectedCourse]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="root" className="rs-course-explorer" aria-busy={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)} data-catalogue-error={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(catalogueError)} as="main" maxWidth="full">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="stack" className="flex flex-col rs-explorer-stack">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero" className="flex rs-explorer-hero">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero_copy" className="flex flex-col rs-hero-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="kicker" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "STUDENT LIBRARY" : _bindingValue)(_scope?.i18n?.kicker)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className="rs-title" as="h1" content={((_bindingValue) => _bindingValue === undefined ? "Find your next mathematics lesson" : _bindingValue)(_scope?.i18n?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subtitle" className="rs-subtitle" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Search professors and courses, save what matters, then continue in the learning workspace." : _bindingValue)(_scope?.i18n?.subtitle)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_summary" className="flex rs-saved-summary">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="favorite_count" className="rs-summary-number rs-favorite-number" as="strong" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(favoriteCoursesData?.length)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="bookmark_count" className="rs-summary-number rs-bookmark-number" as="strong" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(bookmarkedProblemsData?.length)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="search_panel" role="search" aria-label="Course catalogue search" className="grid rs-search-panel">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormInput id="search_input" onChangeValue={(...eventArgs) => _callAction("setExplorerSearch", {}, eventArgs)} aria-describedby="explorer-active-filters" id="explorer-course-search" type="text" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)} aria-label="Search courses and professors" placeholder="Try “linear algebra” or “Dr. Meera Iyer”" autoComplete="off" name="courseSearch" label="Search" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(searchText)} inputMode="search" enterKeyHint="search" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="search_button" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)} variant="primary" onAction={(...eventArgs) => _callAction("submitExplorerSearch", {}, eventArgs)} ariaLabel="Search the course catalogue" loadingText="Updating..." id="explorer-search-submit" label="Search" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="clear_button" label="Clear filters" theme="auto" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)} onAction={(...eventArgs) => _callAction("clearExplorerSearch", {}, eventArgs)} ariaLabel="Clear filters for search and professor" id="explorer-clear-filters" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="active_filters" id="explorer-active-filters" role="status" aria-live="polite" aria-label="Active catalogue filters" aria-atomic="true" className="flex flex-wrap rs-active-filters">      {isVisibleValue((((value) => { return typeof value === 'string' && value.trim().length > 0; })(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(searchText)))) && (<>      <RudraCoreTypography id="search_filter_status" className="rs-filter-chip" as="span" content={(((value) => { const term=typeof value==='string'?value.trim():'';return term ? `Search text: "${term}"` : ''; })(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(searchText)))} />
</>)}
      {isVisibleValue((((value) => { return typeof value === 'string' && value.trim().length > 0; })(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(selectedProfessorId)))) && (<>      <RudraCoreTypography id="professor_filter_status" className="rs-filter-chip" content="Professor filter active" as="span" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)) && (<>      <RudraCoreAlert id="loading_alert" className="rs-state-alert" id="explorer-loading-status" live="polite" title="Loading courses" variant="info" appearance="soft" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueError)) && (<>      <RudraCoreAlert id="error_alert" className="rs-state-alert" appearance="soft" id="explorer-error-alert" live="assertive" title="Course catalogue needs attention" variant="error" />
</>)}
      {isVisibleValue((((value) => { return typeof value === 'string' && value.trim().length > 0; })(((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(catalogueError)))) && (<>      <RudraLayoutBox id="error_actions" aria-label="Catalogue recovery actions" className="flex flex-wrap rs-error-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="retry_catalogue_button" id="explorer-retry-catalogue" label="Try again" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("loadExplorerCatalogue", {}, eventArgs)} additionalAttributes={{"aria-describedby":"explorer-error-alert"}} loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)} ariaLabel="Try again: reload the course catalogue" loadingText="Retrying..." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="reset_error_filters_button" ariaLabel="Clear filters and reload the course catalogue" additionalAttributes={{"aria-describedby":"explorer-error-alert"}} id="explorer-reset-error-filters" label="Clear filters" theme="auto" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)} onAction={(...eventArgs) => _callAction("clearExplorerSearch", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="prof_section" className="flex flex-col rs-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_heading" className="rs-section-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Browse by professor" : _bindingValue)(_scope?.i18n?.professors)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_copy" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Choose a professor to see their published syllabi." : _bindingValue)(_scope?.i18n?.professorHelp)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="prof_grid" className="grid rs-professor-grid">      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(professorsData)))) && (<>      <RudraCoreCard id="prof_0" className="rs-prof-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_0_name" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(professorsData?.[0]?.name)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_0_institution" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Institution" : _bindingValue)(professorsData?.[0]?.institution)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_0_subjects" className="rs-card-copy" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics" : _bindingValue)(professorsData?.[0]?.subjects)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_0_select" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.prof_0_select?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="prof_0_select_lock" size={16} strokeWidth={1.8} />
</>)}
</>} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.prof_0_select?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "View courses" : _bindingValue)(explorerLockState?.prof_0_select?.label)} theme="auto" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.prof_0_select?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerProfessor", {"professorId": professorsData?.[0]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "View courses" : _bindingValue)(explorerLockState?.prof_0_select?.ariaLabel)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 1; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(professorsData)))) && (<>      <RudraCoreCard id="prof_1" className="rs-prof-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_1_name" className="rs-card-title" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(professorsData?.[1]?.name)} as="h3" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_1_institution" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Institution" : _bindingValue)(professorsData?.[1]?.institution)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_1_subjects" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics" : _bindingValue)(professorsData?.[1]?.subjects)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_1_select" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.prof_1_select?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="prof_1_select_lock" size={16} strokeWidth={1.8} />
</>)}
</>} label={((_bindingValue) => _bindingValue === undefined ? "View courses" : _bindingValue)(explorerLockState?.prof_1_select?.label)} theme="auto" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.prof_1_select?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerProfessor", {"professorId": professorsData?.[1]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "View courses" : _bindingValue)(explorerLockState?.prof_1_select?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.prof_1_select?.locked)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 2; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(professorsData)))) && (<>      <RudraCoreCard id="prof_2" className="rs-prof-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_2_name" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(professorsData?.[2]?.name)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_2_institution" className="rs-muted" content={((_bindingValue) => _bindingValue === undefined ? "Institution" : _bindingValue)(professorsData?.[2]?.institution)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_2_subjects" className="rs-card-copy" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics" : _bindingValue)(professorsData?.[2]?.subjects)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_2_select" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.prof_2_select?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="prof_2_select_lock" size={16} strokeWidth={1.8} />
</>)}
</>} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.prof_2_select?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "View courses" : _bindingValue)(explorerLockState?.prof_2_select?.label)} theme="auto" variant="outline" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.prof_2_select?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerProfessor", {"professorId": professorsData?.[2]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "View courses" : _bindingValue)(explorerLockState?.prof_2_select?.ariaLabel)} />
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return !Array.isArray(value) || value.length === 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(professorsData)))) && (<>      <RudraCoreAlert id="professors_empty" className="rs-empty-state" role="status" title="No professors found" variant="neutral" appearance="soft" live="polite" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_section" className="flex flex-col rs-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_heading" className="rs-section-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Published courses" : _bindingValue)(_scope?.i18n?.courses)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_copy" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select a syllabus to browse its sections, topics, and problems." : _bindingValue)(_scope?.i18n?.courseHelp)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_grid" className="grid rs-course-grid">      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(coursesData)))) && (<>      <RudraCoreCard id="course_0" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_meta" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(coursesData?.[0]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Course" : _bindingValue)(coursesData?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_desc" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Course description" : _bindingValue)(coursesData?.[0]?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_progress" className="rs-progress" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(coursesData?.[0]?.progressPercent)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_0_actions" className="flex flex-wrap rs-card-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_0_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_0_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="course_0_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.course_0_open?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerCourse", {"courseId": coursesData?.[0]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Browse syllabus" : _bindingValue)(explorerLockState?.course_0_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_0_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Browse syllabus" : _bindingValue)(explorerLockState?.course_0_open?.label)} theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_0_favorite" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_0_favorite?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="course_0_favorite_lock" size={16} strokeWidth={1.8} />
</>)}
</>} aria-pressed={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(coursesData?.[0]?.isFavorite)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_0_favorite?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Add favourite" : _bindingValue)(explorerLockState?.course_0_favorite?.label)} theme="auto" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.course_0_favorite?.disabled)} onAction={(...eventArgs) => _callAction("toggleExplorerFavorite", {"courseId": coursesData?.[0]?.id, "favorite": coursesData?.[0]?.isFavorite}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Add favourite" : _bindingValue)(explorerLockState?.course_0_favorite?.ariaLabel)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 1; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(coursesData)))) && (<>      <RudraCoreCard id="course_1" className="rs-course-card" theme="auto" as="article">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_meta" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(coursesData?.[1]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Course" : _bindingValue)(coursesData?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_desc" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Course description" : _bindingValue)(coursesData?.[1]?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_progress" className="rs-progress" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(coursesData?.[1]?.progressPercent)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_1_actions" className="flex flex-wrap rs-card-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_1_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_1_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="course_1_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} theme="auto" variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.course_1_open?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerCourse", {"courseId": coursesData?.[1]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Browse syllabus" : _bindingValue)(explorerLockState?.course_1_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_1_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Browse syllabus" : _bindingValue)(explorerLockState?.course_1_open?.label)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_1_favorite" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_1_favorite?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="course_1_favorite_lock" size={16} strokeWidth={1.8} />
</>)}
</>} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_1_favorite?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Add favourite" : _bindingValue)(explorerLockState?.course_1_favorite?.label)} theme="auto" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.course_1_favorite?.disabled)} onAction={(...eventArgs) => _callAction("toggleExplorerFavorite", {"courseId": coursesData?.[1]?.id, "favorite": coursesData?.[1]?.isFavorite}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Add favourite" : _bindingValue)(explorerLockState?.course_1_favorite?.ariaLabel)} aria-pressed={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(coursesData?.[1]?.isFavorite)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 2; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(coursesData)))) && (<>      <RudraCoreCard id="course_2" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_meta" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(coursesData?.[2]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Course" : _bindingValue)(coursesData?.[2]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_desc" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Course description" : _bindingValue)(coursesData?.[2]?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_progress" className="rs-progress" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(coursesData?.[2]?.progressPercent)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_2_actions" className="flex flex-wrap rs-card-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_2_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_2_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="course_2_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} label={((_bindingValue) => _bindingValue === undefined ? "Browse syllabus" : _bindingValue)(explorerLockState?.course_2_open?.label)} theme="auto" variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.course_2_open?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerCourse", {"courseId": coursesData?.[2]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Browse syllabus" : _bindingValue)(explorerLockState?.course_2_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_2_open?.locked)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_2_favorite" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_2_favorite?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="course_2_favorite_lock" size={16} strokeWidth={1.8} />
</>)}
</>} aria-pressed={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(coursesData?.[2]?.isFavorite)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.course_2_favorite?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Add favourite" : _bindingValue)(explorerLockState?.course_2_favorite?.label)} theme="auto" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.course_2_favorite?.disabled)} onAction={(...eventArgs) => _callAction("toggleExplorerFavorite", {"courseId": coursesData?.[2]?.id, "favorite": coursesData?.[2]?.isFavorite}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Add favourite" : _bindingValue)(explorerLockState?.course_2_favorite?.ariaLabel)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return !Array.isArray(value) || value.length === 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(coursesData)))) && (<>      <RudraCoreAlert id="courses_empty" className="rs-empty-state" variant="neutral" appearance="soft" live="polite" role="status" title="No courses found" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_section" className="flex flex-col rs-section rs-problem-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_heading" className="rs-section-title" content={((_bindingValue) => _bindingValue === undefined ? "Select a course to browse problems" : _bindingValue)(selectedCourseData?.title)} as="h2" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_copy" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Sections and topics appear here after course selection." : _bindingValue)(selectedCourseData?.sectionTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_list" className="flex flex-col rs-problem-list">      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedCourseData?.problems)))) && (<>      <RudraCoreCard id="problem_0" className="grid rs-problem-row" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_0_copy" className="flex flex-col rs-problem-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_0_path" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Topic" : _bindingValue)(selectedCourseData?.problems?.[0]?.topicPath)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_0_title" className="rs-problem-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(selectedCourseData?.problems?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_0_difficulty" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Intermediate" : _bindingValue)(selectedCourseData?.problems?.[0]?.difficulty)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_0_actions" className="flex rs-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_0_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_0_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="problem_0_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Start problem" : _bindingValue)(explorerLockState?.problem_0_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_0_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Start problem" : _bindingValue)(explorerLockState?.problem_0_open?.label)} theme="auto" variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.problem_0_open?.disabled)} onAction={(...eventArgs) => _callAction("openExplorerProblem", {"problemId": selectedCourseData?.problems?.[0]?.id}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_0_bookmark" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_0_bookmark?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="problem_0_bookmark_lock" strokeWidth={1.8} size={16} />
</>)}
</>} onAction={(...eventArgs) => _callAction("toggleExplorerBookmark", {"bookmarked": selectedCourseData?.problems?.[0]?.bookmarked, "problemId": selectedCourseData?.problems?.[0]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Add bookmark" : _bindingValue)(explorerLockState?.problem_0_bookmark?.ariaLabel)} aria-pressed={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(selectedCourseData?.problems?.[0]?.bookmarked)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_0_bookmark?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Add bookmark" : _bindingValue)(explorerLockState?.problem_0_bookmark?.label)} theme="auto" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.problem_0_bookmark?.disabled)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 1; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedCourseData?.problems)))) && (<>      <RudraCoreCard id="problem_1" className="grid rs-problem-row" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_1_copy" className="flex flex-col rs-problem-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_1_path" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Topic" : _bindingValue)(selectedCourseData?.problems?.[1]?.topicPath)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_1_title" className="rs-problem-title" content={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(selectedCourseData?.problems?.[1]?.title)} as="h3" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_1_difficulty" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Intermediate" : _bindingValue)(selectedCourseData?.problems?.[1]?.difficulty)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_1_actions" className="flex rs-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_1_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_1_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="problem_1_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Start problem" : _bindingValue)(explorerLockState?.problem_1_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_1_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Start problem" : _bindingValue)(explorerLockState?.problem_1_open?.label)} theme="auto" variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.problem_1_open?.disabled)} onAction={(...eventArgs) => _callAction("openExplorerProblem", {"problemId": selectedCourseData?.problems?.[1]?.id}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_1_bookmark" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_1_bookmark?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="problem_1_bookmark_lock" size={16} strokeWidth={1.8} />
</>)}
</>} variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.problem_1_bookmark?.disabled)} onAction={(...eventArgs) => _callAction("toggleExplorerBookmark", {"bookmarked": selectedCourseData?.problems?.[1]?.bookmarked, "problemId": selectedCourseData?.problems?.[1]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Add bookmark" : _bindingValue)(explorerLockState?.problem_1_bookmark?.ariaLabel)} aria-pressed={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(selectedCourseData?.problems?.[1]?.bookmarked)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_1_bookmark?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Add bookmark" : _bindingValue)(explorerLockState?.problem_1_bookmark?.label)} theme="auto" />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 2; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedCourseData?.problems)))) && (<>      <RudraCoreCard id="problem_2" className="grid rs-problem-row" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_2_copy" className="flex flex-col rs-problem-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_2_path" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Topic" : _bindingValue)(selectedCourseData?.problems?.[2]?.topicPath)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_2_title" className="rs-problem-title" content={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(selectedCourseData?.problems?.[2]?.title)} as="h3" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_2_difficulty" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Intermediate" : _bindingValue)(selectedCourseData?.problems?.[2]?.difficulty)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_2_actions" className="flex rs-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_2_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_2_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="problem_2_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} label={((_bindingValue) => _bindingValue === undefined ? "Start problem" : _bindingValue)(explorerLockState?.problem_2_open?.label)} theme="auto" variant="primary" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.problem_2_open?.disabled)} onAction={(...eventArgs) => _callAction("openExplorerProblem", {"problemId": selectedCourseData?.problems?.[2]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Start problem" : _bindingValue)(explorerLockState?.problem_2_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_2_open?.locked)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_2_bookmark" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_2_bookmark?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="problem_2_bookmark_lock" strokeWidth={1.8} size={16} />
</>)}
</>} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.problem_2_bookmark?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Add bookmark" : _bindingValue)(explorerLockState?.problem_2_bookmark?.label)} theme="auto" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.problem_2_bookmark?.disabled)} onAction={(...eventArgs) => _callAction("toggleExplorerBookmark", {"bookmarked": selectedCourseData?.problems?.[2]?.bookmarked, "problemId": selectedCourseData?.problems?.[2]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Add bookmark" : _bindingValue)(explorerLockState?.problem_2_bookmark?.ariaLabel)} aria-pressed={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(selectedCourseData?.problems?.[2]?.bookmarked)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return !Array.isArray(value) || value.length === 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(selectedCourseData?.problems)))) && (<>      <RudraCoreAlert id="problems_empty" className="rs-empty-state" appearance="soft" live="polite" role="status" title="No problems to show" variant="neutral" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_section" className="flex flex-col rs-section rs-saved-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_heading" className="rs-section-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Saved for later" : _bindingValue)(_scope?.i18n?.saved)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_copy" className="rs-section-copy" content={((_bindingValue) => _bindingValue === undefined ? "Return to favourite courses or bookmarked problems." : _bindingValue)(_scope?.i18n?.savedHelp)} as="p" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_grid" className="grid rs-saved-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="favorite_list_card" className="rs-saved-card" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="favorite_list_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Favourite courses" : _bindingValue)(_scope?.i18n?.favourites)} />
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(favoriteCoursesData)))) && (<>      <RudraLayoutBox id="saved_course_0" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_course_0_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved course" : _bindingValue)(favoriteCoursesData?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_course_0_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_course_0_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="saved_course_0_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Open" : _bindingValue)(explorerLockState?.saved_course_0_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_course_0_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Open" : _bindingValue)(explorerLockState?.saved_course_0_open?.label)} theme="auto" variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.saved_course_0_open?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerCourse", {"courseId": favoriteCoursesData?.[0]?.id}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 1; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(favoriteCoursesData)))) && (<>      <RudraLayoutBox id="saved_course_1" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_course_1_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved course" : _bindingValue)(favoriteCoursesData?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_course_1_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_course_1_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="saved_course_1_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.saved_course_1_open?.disabled)} onAction={(...eventArgs) => _callAction("selectExplorerCourse", {"courseId": favoriteCoursesData?.[1]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Open" : _bindingValue)(explorerLockState?.saved_course_1_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_course_1_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Open" : _bindingValue)(explorerLockState?.saved_course_1_open?.label)} theme="auto" variant="ghost" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return !Array.isArray(value) || value.length === 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(favoriteCoursesData)))) && (<>      <RudraCoreAlert id="favorite_courses_empty" className="rs-empty-state" appearance="soft" live="polite" role="status" title="No favourite courses yet" variant="neutral" />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="bookmark_list_card" className="rs-saved-card" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="bookmark_list_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Bookmarked problems" : _bindingValue)(_scope?.i18n?.bookmarks)} />
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(bookmarkedProblemsData)))) && (<>      <RudraLayoutBox id="saved_problem_0" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_problem_0_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved problem" : _bindingValue)(bookmarkedProblemsData?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_problem_0_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_problem_0_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="saved_problem_0_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} variant="ghost" disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.saved_problem_0_open?.disabled)} onAction={(...eventArgs) => _callAction("openExplorerProblem", {"problemId": bookmarkedProblemsData?.[0]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Solve" : _bindingValue)(explorerLockState?.saved_problem_0_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_problem_0_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Solve" : _bindingValue)(explorerLockState?.saved_problem_0_open?.label)} theme="auto" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return Array.isArray(value) && value.length > 1; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(bookmarkedProblemsData)))) && (<>      <RudraLayoutBox id="saved_problem_1" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_problem_1_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved problem" : _bindingValue)(bookmarkedProblemsData?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_problem_1_open" leftIcon={<>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_problem_1_open?.locked)) && (<>      <UniversalIcon icon={"LockKeyhole"} id="saved_problem_1_open_lock" size={16} strokeWidth={1.8} />
</>)}
</>} disabled={((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(explorerLockState?.saved_problem_1_open?.disabled)} onAction={(...eventArgs) => _callAction("openExplorerProblem", {"problemId": bookmarkedProblemsData?.[1]?.id}, eventArgs)} ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Solve" : _bindingValue)(explorerLockState?.saved_problem_1_open?.ariaLabel)} data-explorer-locked={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(explorerLockState?.saved_problem_1_open?.locked)} label={((_bindingValue) => _bindingValue === undefined ? "Solve" : _bindingValue)(explorerLockState?.saved_problem_1_open?.label)} theme="auto" variant="ghost" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return !Array.isArray(value) || value.length === 0; })(((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(bookmarkedProblemsData)))) && (<>      <RudraCoreAlert id="bookmarked_problems_empty" className="rs-empty-state" live="polite" role="status" title="No bookmarked problems yet" variant="neutral" appearance="soft" />
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
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
