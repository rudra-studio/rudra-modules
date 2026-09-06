import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Typography as RudraCoreTypography, Button as RudraCoreButton, Card as RudraCoreCard, Alert as RudraCoreAlert } from '@rudra-studio/rudra-core';
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

  const errorMessage = props.errorMessage !== undefined ? props.errorMessage : (props.data?.errorMessage !== undefined ? props.data.errorMessage : "");
  const loading = props.loading !== undefined ? props.loading : (props.data?.loading !== undefined ? props.data.loading : false);
  const courses = props.courses !== undefined ? props.courses : (props.data?.courses !== undefined ? props.data.courses : [{"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"title":"Engineering Mathematics I"},{"description":"Limits, derivatives, integration, and applications.","id":"22222222-2222-4222-8222-222222222212","isFavorite":false,"professorId":"prof-arjun","professorName":"Prof. Arjun Rao","progressPercent":68,"sectionCount":10,"title":"Calculus I"},{"description":"Logic, relations, combinatorics, and graph theory.","id":"33333333-3333-4333-8333-333333333312","isFavorite":false,"professorId":"prof-kavitha","professorName":"Dr. Kavitha N","progressPercent":25,"sectionCount":7,"title":"Discrete Mathematics"}]);
  const selectedCourse = props.selectedCourse !== undefined ? props.selectedCourse : (props.data?.selectedCourse !== undefined ? props.data.selectedCourse : {"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"problems":[{"bookmarked":true,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111121","title":"Eigenvalues of a 2 × 2 matrix","topicPath":"Matrices / Eigenvalues"},{"bookmarked":false,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111122","title":"Diagonalise a symmetric matrix","topicPath":"Matrices / Diagonalisation"},{"bookmarked":false,"difficulty":"Advanced","id":"11111111-1111-4111-8111-111111111123","title":"Verify the Cayley–Hamilton theorem","topicPath":"Matrices / Matrix theorems"}],"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"sectionTitle":"Matrices / Eigenvalues","title":"Engineering Mathematics I"});
  const favoriteCourses = props.favoriteCourses !== undefined ? props.favoriteCourses : (props.data?.favoriteCourses !== undefined ? props.data.favoriteCourses : [{"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"title":"Engineering Mathematics I"}]);
  const professors = props.professors !== undefined ? props.professors : (props.data?.professors !== undefined ? props.data.professors : [{"courseCount":3,"id":"prof-meera","institution":"Rudra College of Engineering","name":"Dr. Meera Iyer","subjects":"Linear algebra · Calculus"},{"courseCount":2,"id":"prof-arjun","institution":"Institute of Mathematical Sciences","name":"Prof. Arjun Rao","subjects":"Calculus · Differential equations"},{"courseCount":4,"id":"prof-kavitha","institution":"Rudra College of Engineering","name":"Dr. Kavitha N","subjects":"Discrete mathematics · Graph theory"}]);
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : true);
  const searchTerm = props.searchTerm !== undefined ? props.searchTerm : (props.data?.searchTerm !== undefined ? props.data.searchTerm : "");
  const bookmarkedProblems = props.bookmarkedProblems !== undefined ? props.bookmarkedProblems : (props.data?.bookmarkedProblems !== undefined ? props.data.bookmarkedProblems : [{"bookmarked":true,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111121","title":"Eigenvalues of a 2 × 2 matrix","topicPath":"Matrices / Eigenvalues"}]);
  const inputs = { "errorMessage": errorMessage, "loading": loading, "courses": courses, "selectedCourse": selectedCourse, "favoriteCourses": favoriteCourses, "professors": professors, "locale": locale, "authenticated": authenticated, "searchTerm": searchTerm, "bookmarkedProblems": bookmarkedProblems };
  const [searchText, set_searchText] = useState(() => structuredClone(""));
  const [selectedProfessorId, set_selectedProfessorId] = useState(() => structuredClone(""));
  const [selectedCourseId, set_selectedCourseId] = useState(() => structuredClone(""));
  const [professorsData, set_professorsData] = useState(() => structuredClone([{"courseCount":3,"id":"prof-meera","institution":"Rudra College of Engineering","name":"Dr. Meera Iyer","subjects":"Linear algebra · Calculus"},{"courseCount":2,"id":"prof-arjun","institution":"Institute of Mathematical Sciences","name":"Prof. Arjun Rao","subjects":"Calculus · Differential equations"},{"courseCount":4,"id":"prof-kavitha","institution":"Rudra College of Engineering","name":"Dr. Kavitha N","subjects":"Discrete mathematics · Graph theory"}]));
  const [coursesData, set_coursesData] = useState(() => structuredClone([{"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"title":"Engineering Mathematics I"},{"description":"Limits, derivatives, integration, and applications.","id":"22222222-2222-4222-8222-222222222212","isFavorite":false,"professorId":"prof-arjun","professorName":"Prof. Arjun Rao","progressPercent":68,"sectionCount":10,"title":"Calculus I"},{"description":"Logic, relations, combinatorics, and graph theory.","id":"33333333-3333-4333-8333-333333333312","isFavorite":false,"professorId":"prof-kavitha","professorName":"Dr. Kavitha N","progressPercent":25,"sectionCount":7,"title":"Discrete Mathematics"}]));
  const [selectedCourseData, set_selectedCourseData] = useState(() => structuredClone({"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"problems":[{"bookmarked":true,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111121","title":"Eigenvalues of a 2 × 2 matrix","topicPath":"Matrices / Eigenvalues"},{"bookmarked":false,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111122","title":"Diagonalise a symmetric matrix","topicPath":"Matrices / Diagonalisation"},{"bookmarked":false,"difficulty":"Advanced","id":"11111111-1111-4111-8111-111111111123","title":"Verify the Cayley–Hamilton theorem","topicPath":"Matrices / Matrix theorems"}],"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"sectionTitle":"Matrices / Eigenvalues","title":"Engineering Mathematics I"}));
  const [bookmarkedProblemsData, set_bookmarkedProblemsData] = useState(() => structuredClone([{"bookmarked":true,"difficulty":"Intermediate","id":"11111111-1111-4111-8111-111111111121","title":"Eigenvalues of a 2 × 2 matrix","topicPath":"Matrices / Eigenvalues"}]));
  const [catalogueError, set_catalogueError] = useState(() => structuredClone(""));
  const [favoriteCoursesData, set_favoriteCoursesData] = useState(() => structuredClone([{"description":"Matrices, eigenvalues, calculus, and worked examination problems.","id":"11111111-1111-4111-8111-111111111112","isFavorite":true,"professorId":"prof-meera","professorName":"Dr. Meera Iyer","progressPercent":42,"sectionCount":8,"title":"Engineering Mathematics I"}]));
  const [catalogueLoading, set_catalogueLoading] = useState(() => structuredClone(false));
  const state = { "searchText": searchText, "selectedProfessorId": selectedProfessorId, "selectedCourseId": selectedCourseId, "professorsData": professorsData, "coursesData": coursesData, "selectedCourseData": selectedCourseData, "bookmarkedProblemsData": bookmarkedProblemsData, "catalogueError": catalogueError, "favoriteCoursesData": favoriteCoursesData, "catalogueLoading": catalogueLoading };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "searchText": { const next = typeof value === 'function' ? value(state.searchText) : value; state.searchText = next; set_searchText(next); return next; }
      case "selectedProfessorId": { const next = typeof value === 'function' ? value(state.selectedProfessorId) : value; state.selectedProfessorId = next; set_selectedProfessorId(next); return next; }
      case "selectedCourseId": { const next = typeof value === 'function' ? value(state.selectedCourseId) : value; state.selectedCourseId = next; set_selectedCourseId(next); return next; }
      case "professorsData": { const next = typeof value === 'function' ? value(state.professorsData) : value; state.professorsData = next; set_professorsData(next); return next; }
      case "coursesData": { const next = typeof value === 'function' ? value(state.coursesData) : value; state.coursesData = next; set_coursesData(next); return next; }
      case "selectedCourseData": { const next = typeof value === 'function' ? value(state.selectedCourseData) : value; state.selectedCourseData = next; set_selectedCourseData(next); return next; }
      case "bookmarkedProblemsData": { const next = typeof value === 'function' ? value(state.bookmarkedProblemsData) : value; state.bookmarkedProblemsData = next; set_bookmarkedProblemsData(next); return next; }
      case "catalogueError": { const next = typeof value === 'function' ? value(state.catalogueError) : value; state.catalogueError = next; set_catalogueError(next); return next; }
      case "favoriteCoursesData": { const next = typeof value === 'function' ? value(state.favoriteCoursesData) : value; state.favoriteCoursesData = next; set_favoriteCoursesData(next); return next; }
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
      case "searchText": _setState("searchText", updateNested); return value;
      case "selectedProfessorId": _setState("selectedProfessorId", updateNested); return value;
      case "selectedCourseId": _setState("selectedCourseId", updateNested); return value;
      case "professorsData": _setState("professorsData", updateNested); return value;
      case "coursesData": _setState("coursesData", updateNested); return value;
      case "selectedCourseData": _setState("selectedCourseData", updateNested); return value;
      case "bookmarkedProblemsData": _setState("bookmarkedProblemsData", updateNested); return value;
      case "catalogueError": _setState("catalogueError", updateNested); return value;
      case "favoriteCoursesData": _setState("favoriteCoursesData", updateNested); return value;
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

  async function toggleExplorerBookmark(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return{problemId:String(args.problemId||''),bookmarked:!Boolean(args.bookmarked)};
      })();
      stepResults["bookmark_read"] = customResult; vars["customCodeResult"] = customResult; }
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.bookmark_refresh)?stepResults.bookmark_refresh:[];const row=rows[0]||{};const bookmarks=Array.isArray(row.bookmarkedProblems)?row.bookmarkedProblems:[];const id=stepResults.bookmark_read.problemId,value=stepResults.bookmark_read.bookmarked;const selected={...(state.selectedCourseData||{})};selected.problems=(Array.isArray(selected.problems)?selected.problems:[]).map(x=>String(x.id)===id?{...x,bookmarked:value}:x);return{bookmarks,selected};
      })();
      stepResults["bookmark_merge"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("bookmarkedProblemsData", stepResults.bookmark_merge.bookmarks);
    _setState("selectedCourseData", stepResults.bookmark_merge.selected);
    void _emitOutput("bookmarkToggled", { "bookmarked": stepResults.bookmark_read.bookmarked, "problemId": stepResults.bookmark_read.problemId }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function openExplorerProblem(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const id=String(args.problemId||'');const selected=state.selectedCourseData&&typeof state.selectedCourseData==='object'?state.selectedCourseData:{};const pool=[...(Array.isArray(selected.problems)?selected.problems:[]),...(Array.isArray(state.bookmarkedProblemsData)?state.bookmarkedProblemsData:[])];const problem=pool.find(x=>String(x.id)===id)||{id,statement:'',title:''};return{problem:{...problem,statement:String(problem.statement||problem.title||'')},courseContext:{syllabusId:String(selected.id||problem.courseId||''),courseTitle:String(selected.title||''),professorName:String(selected.professorName||''),sectionTitle:String(selected.sectionTitle||''),topicPath:String(problem.topicPath||''),hierarchy:selected.hierarchy||{}}};
      })();
      stepResults["problem_resolve"] = customResult; vars["customCodeResult"] = customResult; }
    void _emitOutput("problemSelected", { "courseContext": stepResults.problem_resolve.courseContext, "courseId": stepResults.problem_resolve.courseContext.syllabusId, "locale": inputs.locale, "problem": stepResults.problem_resolve.problem, "problemId": args.problemId }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function submitExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("catalogueLoading", true);
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const first=x=>Array.isArray(x)?(x[0]||{}):(x||{});const p=first(stepResults.search_professors),c=first(stepResults.search_courses);return{professors:Array.isArray(p.professors)?p.professors:[],courses:Array.isArray(c.courses)?c.courses:[]};
      })();
      stepResults["search_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("professorsData", stepResults.search_parse.professors);
    _setState("coursesData", stepResults.search_parse.courses);
    _setState("catalogueLoading", false);
    void _emitOutput("searchChanged", { "locale": inputs.locale, "term": state.searchText }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function clearExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchText", "");
    _setState("selectedProfessorId", "");
    await loadExplorerCatalogue({});
    void _emitOutput("searchChanged", { "locale": inputs.locale, "term": "" }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function selectExplorerProfessor(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("selectedProfessorId", args.professorId);
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const row=Array.isArray(stepResults.prof_query)?(stepResults.prof_query[0]||{}):(stepResults.prof_query||{});return Array.isArray(row.courses)?row.courses:[];
      })();
      stepResults["prof_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("coursesData", stepResults.prof_parse);
    void _emitOutput("professorSelected", { "professorId": args.professorId }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function selectExplorerCourse(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("selectedCourseId", args.courseId);
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const row=Array.isArray(stepResults.course_query)?(stepResults.course_query[0]||{}):(stepResults.course_query||{});return row.selectedCourse&&typeof row.selectedCourse==='object'?row.selectedCourse:{};
      })();
      stepResults["course_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("selectedCourseData", stepResults.course_parse);
    void _emitOutput("courseSelected", { "courseId": args.courseId }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function setExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchText", args.value);
    return undefined;
  }

  async function toggleExplorerFavorite(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return{courseId:String(args.courseId||''),favorite:!Boolean(args.favorite)};
      })();
      stepResults["favorite_read"] = customResult; vars["customCodeResult"] = customResult; }
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows=Array.isArray(stepResults.favorite_refresh)?stepResults.favorite_refresh:[];const row=rows[0]||{};const favorites=Array.isArray(row.favoriteCourses)?row.favoriteCourses:[];const id=stepResults.favorite_read.courseId,value=stepResults.favorite_read.favorite;const courses=(Array.isArray(state.coursesData)?state.coursesData:[]).map(x=>String(x.id)===id?{...x,isFavorite:value}:x);const selected=state.selectedCourseData&&String(state.selectedCourseData.id)===id?{...state.selectedCourseData,isFavorite:value}:state.selectedCourseData;return{favorites,courses,selected};
      })();
      stepResults["favorite_merge"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("favoriteCoursesData", stepResults.favorite_merge.favorites);
    _setState("coursesData", stepResults.favorite_merge.courses);
    _setState("selectedCourseData", stepResults.favorite_merge.selected);
    void _emitOutput("favoriteToggled", { "courseId": stepResults.favorite_read.courseId, "favorite": stepResults.favorite_read.favorite }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function syncExplorerSearch(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchText", inputs.searchTerm);
    return undefined;
  }

  async function loadExplorerCatalogue(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("catalogueLoading", true);
    _setState("catalogueError", "");
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const first=x=>Array.isArray(x)?(x[0]||{}):(x||{});const p=first(stepResults.catalogue_professors),c=first(stepResults.catalogue_courses),f=first(stepResults.catalogue_favorites),b=first(stepResults.catalogue_bookmarks);return{professors:Array.isArray(p.professors)?p.professors:[],courses:Array.isArray(c.courses)?c.courses:[],favorites:Array.isArray(f.favoriteCourses)?f.favoriteCourses:[],bookmarks:Array.isArray(b.bookmarkedProblems)?b.bookmarkedProblems:[]};
      })();
      stepResults["catalogue_parse"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("professorsData", stepResults.catalogue_parse.professors);
    _setState("coursesData", stepResults.catalogue_parse.courses);
    _setState("favoriteCoursesData", stepResults.catalogue_parse.favorites);
    _setState("bookmarkedProblemsData", stepResults.catalogue_parse.bookmarks);
    _setState("catalogueLoading", false);
    return stepResults.catalogue_parse;
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

  const _localActions = {
    "toggleExplorerBookmark": toggleExplorerBookmark,
    "openExplorerProblem": openExplorerProblem,
    "submitExplorerSearch": submitExplorerSearch,
    "clearExplorerSearch": clearExplorerSearch,
    "selectExplorerProfessor": selectExplorerProfessor,
    "selectExplorerCourse": selectExplorerCourse,
    "setExplorerSearch": setExplorerSearch,
    "toggleExplorerFavorite": toggleExplorerFavorite,
    "syncExplorerSearch": syncExplorerSearch,
    "loadExplorerCatalogue": loadExplorerCatalogue,
    "syncAndSearchExplorer": syncAndSearchExplorer,
  };
  const _localActionArguments = {
    "toggleExplorerBookmark": ["problemId", "bookmarked"],
    "openExplorerProblem": ["problemId"],
    "submitExplorerSearch": [],
    "clearExplorerSearch": [],
    "selectExplorerProfessor": ["professorId"],
    "selectExplorerCourse": ["courseId"],
    "setExplorerSearch": ["value"],
    "toggleExplorerFavorite": ["courseId", "favorite"],
    "syncExplorerSearch": [],
    "loadExplorerCatalogue": [],
    "syncAndSearchExplorer": [],
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

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="root" className="rs-course-explorer" as="main" maxWidth="full">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="stack" className="flex flex-col rs-explorer-stack">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero" className="flex rs-explorer-hero">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero_copy" className="flex flex-col rs-hero-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="kicker" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "STUDENT LIBRARY" : _bindingValue)(_scope?.i18n?.kicker)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className="rs-title" as="h1" content={((_bindingValue) => _bindingValue === undefined ? "Find your next mathematics lesson" : _bindingValue)(_scope?.i18n?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subtitle" className="rs-subtitle" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Search professors and courses, save what matters, then continue in the learning workspace." : _bindingValue)(_scope?.i18n?.subtitle)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_summary" className="flex rs-saved-summary">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="favorite_count" className="rs-summary-number rs-favorite-number" as="strong" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(favoriteCoursesData?.length)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="bookmark_count" className="rs-summary-number rs-bookmark-number" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(bookmarkedProblemsData?.length)} as="strong" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="search_panel" className="grid rs-search-panel">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormInput id="search_input" label="Search" value={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(searchText)} placeholder="Try “linear algebra” or “Dr. Meera Iyer”" onChangeValue={(...eventArgs) => _callAction("setExplorerSearch", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="search_button" variant="primary" onAction={(...eventArgs) => _callAction("submitExplorerSearch", {}, eventArgs)} label="Search" theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="clear_button" label="Clear" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("clearExplorerSearch", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueLoading)) && (<>      <RudraCoreAlert id="loading_alert" appearance="soft" live="polite" title="Loading courses" variant="info" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(catalogueError)) && (<>      <RudraCoreAlert id="error_alert" appearance="soft" live="assertive" title="Course library unavailable" variant="danger" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="prof_section" className="flex flex-col rs-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_heading" className="rs-section-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Browse by professor" : _bindingValue)(_scope?.i18n?.professors)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_copy" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Choose a professor to see their published syllabi." : _bindingValue)(_scope?.i18n?.professorHelp)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="prof_grid" className="grid rs-professor-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="prof_0" className="rs-prof-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_0_name" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(professorsData?.[0]?.name)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_0_institution" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Institution" : _bindingValue)(professorsData?.[0]?.institution)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_0_subjects" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics" : _bindingValue)(professorsData?.[0]?.subjects)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_0_select" label="View courses" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("selectExplorerProfessor", {}, eventArgs)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="prof_1" className="rs-prof-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_1_name" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(professorsData?.[1]?.name)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_1_institution" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Institution" : _bindingValue)(professorsData?.[1]?.institution)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_1_subjects" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics" : _bindingValue)(professorsData?.[1]?.subjects)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_1_select" label="View courses" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("selectExplorerProfessor", {}, eventArgs)} />
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="prof_2" className="rs-prof-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_2_name" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(professorsData?.[2]?.name)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_2_institution" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Institution" : _bindingValue)(professorsData?.[2]?.institution)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="prof_2_subjects" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Mathematics" : _bindingValue)(professorsData?.[2]?.subjects)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="prof_2_select" label="View courses" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("selectExplorerProfessor", {}, eventArgs)} />
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_section" className="flex flex-col rs-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_heading" className="rs-section-title" content={((_bindingValue) => _bindingValue === undefined ? "Published courses" : _bindingValue)(_scope?.i18n?.courses)} as="h2" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_copy" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Select a syllabus to browse its sections, topics, and problems." : _bindingValue)(_scope?.i18n?.courseHelp)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_grid" className="grid rs-course-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="course_0" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_meta" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(coursesData?.[0]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_title" className="rs-card-title" content={((_bindingValue) => _bindingValue === undefined ? "Course" : _bindingValue)(coursesData?.[0]?.title)} as="h3" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_desc" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Course description" : _bindingValue)(coursesData?.[0]?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_0_progress" className="rs-progress" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(coursesData?.[0]?.progressPercent)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_0_actions" className="flex flex-wrap rs-card-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_0_open" onAction={(...eventArgs) => _callAction("selectExplorerCourse", {}, eventArgs)} label="Browse syllabus" theme="auto" variant="primary" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_0_favorite" label="☆ Favourite" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("toggleExplorerFavorite", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="course_1" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_meta" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(coursesData?.[1]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Course" : _bindingValue)(coursesData?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_desc" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Course description" : _bindingValue)(coursesData?.[1]?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_1_progress" className="rs-progress" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(coursesData?.[1]?.progressPercent)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_1_actions" className="flex flex-wrap rs-card-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_1_open" label="Browse syllabus" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("selectExplorerCourse", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_1_favorite" label="☆ Favourite" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("toggleExplorerFavorite", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="course_2" className="rs-course-card" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_meta" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Professor" : _bindingValue)(coursesData?.[2]?.professorName)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Course" : _bindingValue)(coursesData?.[2]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_desc" className="rs-card-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Course description" : _bindingValue)(coursesData?.[2]?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="course_2_progress" className="rs-progress" as="p" content={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(coursesData?.[2]?.progressPercent)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="course_2_actions" className="flex flex-wrap rs-card-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_2_open" label="Browse syllabus" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("selectExplorerCourse", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="course_2_favorite" label="☆ Favourite" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("toggleExplorerFavorite", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_section" className="flex flex-col rs-section rs-problem-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_heading" className="rs-section-title" content={((_bindingValue) => _bindingValue === undefined ? "Select a course to browse problems" : _bindingValue)(selectedCourseData?.title)} as="h2" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_copy" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Sections and topics appear here after course selection." : _bindingValue)(selectedCourseData?.sectionTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_list" className="flex flex-col rs-problem-list">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="problem_0" className="grid rs-problem-row" theme="auto" as="article">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_0_copy" className="flex flex-col rs-problem-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_0_path" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Topic" : _bindingValue)(selectedCourseData?.problems?.[0]?.topicPath)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_0_title" className="rs-problem-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(selectedCourseData?.problems?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_0_difficulty" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Intermediate" : _bindingValue)(selectedCourseData?.problems?.[0]?.difficulty)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_0_actions" className="flex rs-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_0_open" label="Start problem" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("openExplorerProblem", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_0_bookmark" label="☆ Bookmark" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("toggleExplorerBookmark", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="problem_1" className="grid rs-problem-row" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_1_copy" className="flex flex-col rs-problem-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_1_path" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Topic" : _bindingValue)(selectedCourseData?.problems?.[1]?.topicPath)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_1_title" className="rs-problem-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(selectedCourseData?.problems?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_1_difficulty" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Intermediate" : _bindingValue)(selectedCourseData?.problems?.[1]?.difficulty)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_1_actions" className="flex rs-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_1_open" label="Start problem" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("openExplorerProblem", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_1_bookmark" variant="ghost" onAction={(...eventArgs) => _callAction("toggleExplorerBookmark", {}, eventArgs)} label="☆ Bookmark" theme="auto" />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="problem_2" className="grid rs-problem-row" as="article" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_2_copy" className="flex flex-col rs-problem-copy">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_2_path" className="rs-kicker" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Topic" : _bindingValue)(selectedCourseData?.problems?.[2]?.topicPath)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_2_title" className="rs-problem-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Problem" : _bindingValue)(selectedCourseData?.problems?.[2]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="problem_2_difficulty" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Intermediate" : _bindingValue)(selectedCourseData?.problems?.[2]?.difficulty)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="problem_2_actions" className="flex rs-problem-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_2_open" label="Start problem" theme="auto" variant="primary" onAction={(...eventArgs) => _callAction("openExplorerProblem", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="problem_2_bookmark" label="☆ Bookmark" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("toggleExplorerBookmark", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_section" className="flex flex-col rs-section rs-saved-section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_heading" className="rs-section-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Saved for later" : _bindingValue)(_scope?.i18n?.saved)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_copy" className="rs-section-copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Return to favourite courses or bookmarked problems." : _bindingValue)(_scope?.i18n?.savedHelp)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_grid" className="grid rs-saved-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="favorite_list_card" className="rs-saved-card" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="favorite_list_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Favourite courses" : _bindingValue)(_scope?.i18n?.favourites)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_course_0" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_course_0_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved course" : _bindingValue)(favoriteCoursesData?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_course_0_open" label="Open" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("selectExplorerCourse", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_course_1" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_course_1_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved course" : _bindingValue)(favoriteCoursesData?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_course_1_open" label="Open" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("selectExplorerCourse", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraCoreCard>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreCard id="bookmark_list_card" className="rs-saved-card" as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="bookmark_list_title" className="rs-card-title" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Bookmarked problems" : _bindingValue)(_scope?.i18n?.bookmarks)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_problem_0" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_problem_0_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved problem" : _bindingValue)(bookmarkedProblemsData?.[0]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_problem_0_open" label="Solve" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("openExplorerProblem", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="saved_problem_1" className="grid rs-saved-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="saved_problem_1_title" className="rs-saved-title" as="p" content={((_bindingValue) => _bindingValue === undefined ? "No saved problem" : _bindingValue)(bookmarkedProblemsData?.[1]?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="saved_problem_1_open" label="Solve" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("openExplorerProblem", {}, eventArgs)} />
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
</RudraLayoutContainer>
</>)}
    </div>
  );
}
