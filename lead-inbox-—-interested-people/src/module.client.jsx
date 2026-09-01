import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Container as RudraLayoutContainer, Section as RudraLayoutSection, Grid as RudraLayoutGrid, Box as RudraLayoutBox, Flex as RudraLayoutFlex, ScrollArea as RudraLayoutScrollArea } from '@rudra-studio/rudra-layout';
import { MetricCard as RudraWidgetsMetricCard, DataTable as RudraWidgetsDataTable, Header as RudraWidgetsHeader } from '@rudra-studio/rudra-widgets';
import { Typography as RudraCoreTypography, Surface as RudraCoreSurface, Badge as RudraCoreBadge } from '@rudra-studio/rudra-core';

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

  const to = props.to !== undefined ? props.to : (props.data?.to !== undefined ? props.data.to : "");
  const intent = props.intent !== undefined ? props.intent : (props.data?.intent !== undefined ? props.data.intent : "all");
  const status = props.status !== undefined ? props.status : (props.data?.status !== undefined ? props.data.status : "all");
  const source = props.source !== undefined ? props.source : (props.data?.source !== undefined ? props.data.source : "all");
  const from = props.from !== undefined ? props.from : (props.data?.from !== undefined ? props.data.from : "");
  const where = props.where !== undefined ? props.where : (props.data?.where !== undefined ? props.data.where : {});
  const inputs = { "to": to, "intent": intent, "status": status, "source": source, "from": from, "where": where };
  const [leadAnalytics, set_leadAnalytics] = useState(() => structuredClone({"active_sources":0,"collaboration_leads":0,"contact_progress":0,"daily_lead_counts":[],"intent_counts":[0,0,0],"job_leads":0,"leads_last_7_days":0,"new_leads":0,"progressed_leads":0,"project_leads":0,"total_leads":0}));
  const [isLoadingLeads, set_isLoadingLeads] = useState(() => structuredClone(false));
  const [leads, set_leads] = useState(() => structuredClone([]));
  const state = { "leadAnalytics": leadAnalytics, "isLoadingLeads": isLoadingLeads, "leads": leads };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "leadAnalytics": { const next = typeof value === 'function' ? value(state.leadAnalytics) : value; state.leadAnalytics = next; set_leadAnalytics(next); return next; }
      case "isLoadingLeads": { const next = typeof value === 'function' ? value(state.isLoadingLeads) : value; state.isLoadingLeads = next; set_isLoadingLeads(next); return next; }
      case "leads": { const next = typeof value === 'function' ? value(state.leads) : value; state.leads = next; set_leads(next); return next; }
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
      case "leadAnalytics": _setState("leadAnalytics", updateNested); return value;
      case "isLoadingLeads": _setState("isLoadingLeads", updateNested); return value;
      case "leads": _setState("leads", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {};
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

  async function loadLeads(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isLoadingLeads", true);
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"from":"{{ inputs.from }}","intent":"{{ inputs.intent }}","source":"{{ inputs.source }}","status":"{{ inputs.status }}","to":"{{ inputs.to }}"}, roots) || {};
      const parameters = [namedParameters["status"], namedParameters["intent"], namedParameters["source"], namedParameters["from"], namedParameters["to"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmsykd1wh000004l7quqrideh", queryId: "leads_list", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmsykd1wh000004l7quqrideh/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "leads_list", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["leads_fetch"] = result; vars["queryResult"] = result; }
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"from":"{{ inputs.from }}","intent":"{{ inputs.intent }}","source":"{{ inputs.source }}","status":"{{ inputs.status }}","to":"{{ inputs.to }}"}, roots) || {};
      const parameters = [namedParameters["status"], namedParameters["intent"], namedParameters["source"], namedParameters["from"], namedParameters["to"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmsykd1wh000004l7quqrideh", queryId: "leads_analytics", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmsykd1wh000004l7quqrideh/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "leads_analytics", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["leads_analytics_fetch"] = result; vars["queryResult"] = result; }
    _setState("leads", stepResults.leads_fetch);
    _setState("leadAnalytics", stepResults.leads_analytics_fetch[0]);
    _setState("isLoadingLeads", false);
    return { "analytics": stepResults.leads_analytics_fetch[0], "leads": stepResults.leads_fetch };
    return undefined;
  }

  async function updateLeadStatus(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"leadId":"{{ args.leadId }}","status":"{{ args.status }}"}, roots) || {};
      const parameters = [namedParameters["leadId"], namedParameters["status"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmsykd1wh000004l7quqrideh", queryId: "leads_update_status", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmsykd1wh000004l7quqrideh/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "leads_update_status", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["leads_update_execute"] = result; vars["queryResult"] = result; }
    await loadLeads({  });
    return stepResults.leads_update_execute[0];
    return undefined;
  }

  const _localActions = {
    "loadLeads": loadLeads,
    "updateLeadStatus": updateLeadStatus,
  };
  const _localActionArguments = {
    "loadLeads": [],
    "updateLeadStatus": ["leadId", "status"],
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
    void _runLifecycle("leads_mountleads_load", "takeLatest", (signal) => loadLeads({ signal }), "Module mount lifecycle failed:");
  }, []);
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; return; }
    const timer = setTimeout(() => { void _runLifecycle("leads_filter_changeleads_load", "takeLatest", (signal) => loadLeads({ signal }), 'Module input lifecycle failed:'); }, 250);
    return () => clearTimeout(timer);
  }, [status, intent, source, from, to]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="leads_root" data-theme={((_bindingValue) => _bindingValue === undefined ? "light" : _bindingValue)($theme)} className="flex min-h-screen w-full flex-col overflow-x-hidden leads-shell" as="main">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsHeader id="leads_header" className={`${getResponsiveProp({sm: 'leads-header h-16 px-4 border-white/10', md: 'leads-header h-18 px-8 border-white/10', lg: 'leads-header h-20 px-12 border-white/10'}) || ''}`} navItemClassName="text-xs font-black uppercase tracking-[0.12em]" theme="auto" title="SIGNAL/ROOM" sticky={true} navItems={[{"href":"?status=","id":"all","label":"All leads"},{"href":"?status=new","id":"new","label":"New"},{"href":"?intent=job","id":"jobs","label":"Jobs"},{"href":"?intent=collaboration","id":"collabs","label":"Collaborations"}]} mobileBreakpoint="md" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutSection id="leads_main" className={`${getResponsiveProp({sm: 'px-4 py-14', md: 'px-8 py-20', lg: 'px-12 py-24'}) || ''}`} as="section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="leads_container" className="w-full max-w-[1500px]" centered={true} maxWidth="full">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutFlex id="leads_meta" className="border-t border-[#6dffb8]/25 pt-3" align="center" justify="between" direction="horizontal" as="div" gap="4" wrap={true}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_kicker" className="leads-signal ml-5 text-[10px] font-bold tracking-[.18em] text-[#6dffb8]" as="p" content="LIVE INTAKE · SERVER-RENDERED · FILTERED" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="leads_badge" className="rounded-full border border-[#6dffb8]/35 bg-[#6dffb8]/10 text-[#6dffb8]" variant="solid" size="sm" label="SYSTEM ONLINE" />
</>)}
</RudraLayoutFlex>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_title" className={`${getResponsiveProp({sm: 'leads-display mt-12 whitespace-pre-line text-[18vw] leading-[.82] text-white', md: 'leads-display mt-14 whitespace-pre-line text-[11vw] leading-[.82] text-white', lg: 'leads-display mt-16 whitespace-pre-line text-[7.5vw] leading-[.82] text-white'}) || ''}`} as="h1" content="INCOMING\nSIGNALS" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutGrid id="leads_intro" className={`${getResponsiveProp({sm: 'mt-10 grid grid-cols-1 gap-6', md: 'mt-12 grid grid-cols-2 gap-8', lg: 'mt-14 grid grid-cols-12 gap-8 items-end'}) || ''}`} as="div">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_copy" className={`grid ${getResponsiveProp({sm: 'text-sm leading-relaxed text-white/55', md: 'text-base leading-relaxed text-white/55', lg: 'col-span-7 text-lg leading-relaxed text-white/55'}) || ''}`} as="p" content="A private command surface for every project, job and collaboration signal—SSR loaded, URL-filterable and ready for action." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_sort_note" className={`grid ${getResponsiveProp({sm: 'text-[10px] font-bold tracking-[.16em] text-[#62d9ff]', md: 'text-right text-[10px] font-bold tracking-[.16em] text-[#62d9ff]', lg: 'col-span-5 text-right text-[10px] font-bold tracking-[.16em] text-[#62d9ff]'}) || ''}`} as="p" content="SORTED · NEWEST FIRST" />
</>)}
</RudraLayoutGrid>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="leads_analytics" aria-label="Lead analytics" className={`${getResponsiveProp({sm: 'block leads-analytics'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutFlex id="leads_analytics_head" className={`${getResponsiveProp({sm: 'mb-5'}) || ''}`} gap="4" wrap={true} align="end" justify="between" direction="horizontal" as="div">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_analytics_title" className={`${getResponsiveProp({sm: 'leads-display text-3xl text-white', md: 'leads-display text-4xl text-white', lg: 'leads-display text-4xl text-white'}) || ''}`} as="h2" content="LEAD PULSE" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_analytics_note" className={`${getResponsiveProp({sm: 'text-xs font-bold tracking-[.12em] text-[#62d9ff]/70'}) || ''}`} as="p" content="Live metrics for the current protected filter" />
</>)}
</RudraLayoutFlex>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutGrid id="leads_kpi_grid" className={`grid flex ${getResponsiveProp({sm: 'grid grid-cols-1 gap-4', md: 'grid grid-cols-2 gap-4', lg: 'grid grid-cols-4 gap-4'}) || ''}`} as="div">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMetricCard id="leads_metric_total" labelClassName={`${getResponsiveProp({sm: 'leads-metric-label'}) || ''}`} trendClassName={`${getResponsiveProp({sm: 'leads-metric-trend'}) || ''}`} valueClassName={`${getResponsiveProp({sm: 'leads-metric-value'}) || ''}`} className={`${getResponsiveProp({sm: 'leads-metric'}) || ''}`} descriptionClassName={`${getResponsiveProp({sm: 'leads-metric-description'}) || ''}`} chartClassName={`${getResponsiveProp({sm: 'leads-metric-chart'}) || ''}`} negativeColor="#fb7185" value={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.total_leads)} description="Records matching the active filter" showChart={false} showTrend={false} accentColor="#62d9ff" neutralColor="#62d9ff" positiveColor="#6dffb8" label="Total leads" style={{"background":"#0d1319","border":"1px solid rgba(98,217,255,.18)","borderRadius":"20px","padding":"20px"}} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMetricCard id="leads_metric_new" chartClassName={`${getResponsiveProp({sm: 'leads-metric-chart'}) || ''}`} labelClassName={`${getResponsiveProp({sm: 'leads-metric-label'}) || ''}`} trendClassName={`${getResponsiveProp({sm: 'leads-metric-trend'}) || ''}`} valueClassName={`${getResponsiveProp({sm: 'leads-metric-value'}) || ''}`} descriptionClassName={`${getResponsiveProp({sm: 'leads-metric-description'}) || ''}`} className={`${getResponsiveProp({sm: 'leads-metric'}) || ''}`} showChart={false} showTrend={true} trendLabel="current queue" accentColor="#6dffb8" neutralColor="#62d9ff" positiveColor="#6dffb8" label="New leads" trend="up" value={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.new_leads)} negativeColor="#fb7185" style={{"background":"#0d1319","border":"1px solid rgba(98,217,255,.18)","borderRadius":"20px","padding":"20px"}} trendValue="Live" description="Awaiting first response" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMetricCard id="leads_metric_jobs" className={`${getResponsiveProp({sm: 'leads-metric'}) || ''}`} chartClassName={`${getResponsiveProp({sm: 'leads-metric-chart'}) || ''}`} labelClassName={`${getResponsiveProp({sm: 'leads-metric-label'}) || ''}`} trendClassName={`${getResponsiveProp({sm: 'leads-metric-trend'}) || ''}`} valueClassName={`${getResponsiveProp({sm: 'leads-metric-value'}) || ''}`} descriptionClassName={`${getResponsiveProp({sm: 'leads-metric-description'}) || ''}`} style={{"background":"#0d1319","border":"1px solid rgba(98,217,255,.18)","borderRadius":"20px","padding":"20px"}} showChart={false} showTrend={false} negativeColor="#fb7185" positiveColor="#6dffb8" value={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.job_leads)} accentColor="#a78bfa" neutralColor="#62d9ff" label="Job intent" description="Career and hiring signals" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMetricCard id="leads_metric_sources" labelClassName={`${getResponsiveProp({sm: 'leads-metric-label'}) || ''}`} trendClassName={`${getResponsiveProp({sm: 'leads-metric-trend'}) || ''}`} valueClassName={`${getResponsiveProp({sm: 'leads-metric-value'}) || ''}`} className={`${getResponsiveProp({sm: 'leads-metric'}) || ''}`} descriptionClassName={`${getResponsiveProp({sm: 'leads-metric-description'}) || ''}`} chartClassName={`${getResponsiveProp({sm: 'leads-metric-chart'}) || ''}`} style={{"background":"#0d1319","border":"1px solid rgba(98,217,255,.18)","borderRadius":"20px","padding":"20px"}} positiveColor="#6dffb8" value={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.active_sources)} label="Active sources" showTrend={false} neutralColor="#62d9ff" negativeColor="#fb7185" showChart={false} accentColor="#fbbf24" description="Distinct acquisition channels" />
</>)}
</RudraLayoutGrid>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutGrid id="leads_insight_grid" className={`${getResponsiveProp({sm: 'mt-4 grid grid-cols-1 gap-4', md: 'mt-4 grid grid-cols-2 gap-4', lg: 'mt-4 grid grid-cols-3 gap-4'}) || ''}`} as="div">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMetricCard id="leads_metric_volume" labelClassName={`${getResponsiveProp({sm: 'leads-metric-label'}) || ''}`} trendClassName={`${getResponsiveProp({sm: 'leads-metric-trend'}) || ''}`} valueClassName={`${getResponsiveProp({sm: 'leads-metric-value'}) || ''}`} className={`${getResponsiveProp({sm: 'leads-metric'}) || ''}`} descriptionClassName={`${getResponsiveProp({sm: 'leads-metric-description'}) || ''}`} chartClassName={`${getResponsiveProp({sm: 'leads-metric-chart'}) || ''}`} chartHeight={82} neutralColor="#62d9ff" value={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.total_leads)} showTrend={true} showChart={true} trendLabel="received in last 7 days" trendValue={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.leads_last_7_days)} description="Daily arrivals represented in the current result set" negativeColor="#fb7185" trend="neutral" chartData={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(leadAnalytics?.daily_lead_counts)} chartType="area" accentColor="#62d9ff" positiveColor="#6dffb8" label="Lead volume" style={{"background":"#0d1319","border":"1px solid rgba(98,217,255,.18)","borderRadius":"20px","padding":"20px"}} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMetricCard id="leads_metric_intents" chartClassName={`${getResponsiveProp({sm: 'leads-metric-chart'}) || ''}`} labelClassName={`${getResponsiveProp({sm: 'leads-metric-label'}) || ''}`} trendClassName={`${getResponsiveProp({sm: 'leads-metric-trend'}) || ''}`} valueClassName={`${getResponsiveProp({sm: 'leads-metric-value'}) || ''}`} descriptionClassName={`${getResponsiveProp({sm: 'leads-metric-description'}) || ''}`} className={`${getResponsiveProp({sm: 'leads-metric'}) || ''}`} trendValue={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.job_leads)} positiveColor="#6dffb8" style={{"background":"#0d1319","border":"1px solid rgba(98,217,255,.18)","borderRadius":"20px","padding":"20px"}} value={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.project_leads)} chartData={((_bindingValue) => _bindingValue === undefined ? [0, 0, 0] : _bindingValue)(leadAnalytics?.intent_counts)} chartHeight={82} trend="neutral" accentColor="#a78bfa" description="Project leads shown as the headline value" showTrend={true} trendLabel="job leads" neutralColor="#62d9ff" negativeColor="#fb7185" label="Intent mix" chartType="line" showChart={true} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMetricCard id="leads_metric_contact" chartClassName={`${getResponsiveProp({sm: 'leads-metric-chart'}) || ''}`} labelClassName={`${getResponsiveProp({sm: 'leads-metric-label'}) || ''}`} trendClassName={`${getResponsiveProp({sm: 'leads-metric-trend'}) || ''}`} valueClassName={`${getResponsiveProp({sm: 'leads-metric-value'}) || ''}`} className={`${getResponsiveProp({sm: 'leads-metric'}) || ''}`} descriptionClassName={`${getResponsiveProp({sm: 'leads-metric-description'}) || ''}`} accentColor="#6dffb8" neutralColor="#62d9ff" value={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.contact_progress)} suffix="%" showChart={false} style={{"background":"#0d1319","border":"1px solid rgba(98,217,255,.18)","borderRadius":"20px","padding":"20px"}} trendValue={((_bindingValue) => _bindingValue === undefined ? 0 : _bindingValue)(leadAnalytics?.progressed_leads)} negativeColor="#fb7185" positiveColor="#6dffb8" trend="up" showTrend={true} trendLabel="progressed leads" description="Share moved beyond new status" label="Contact progress" />
</>)}
</RudraLayoutGrid>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreSurface id="leads_filters" className={`${getResponsiveProp({sm: 'leads-panel mt-12 rounded-[1.25rem] border border-[#6dffb8]/20 bg-[#0d1319] p-5 text-white', md: 'leads-panel mt-14 rounded-[1.5rem] border border-[#6dffb8]/20 bg-[#0d1319] p-7 text-white', lg: 'leads-panel mt-16 rounded-[1.5rem] border border-[#6dffb8]/20 bg-[#0d1319] p-8 text-white'}) || ''}`} as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_filters_label" className="text-[10px] font-bold tracking-[.18em] text-[#6dffb8]" as="h2" content="ACTIVE FILTERS" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutFlex id="leads_filter_row" className="mt-5" as="div" gap="3" wrap={true} direction="horizontal">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="leads_filter_intent" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white" size="md" label={intent} variant="outline" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="leads_filter_status" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white" size="md" label={status} variant="outline" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="leads_filter_source" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white" size="md" label={source} variant="outline" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="leads_filter_from" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white" size="md" label={from} variant="outline" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="leads_filter_to" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white" size="md" label={to} variant="outline" />
</>)}
</RudraLayoutFlex>
</>)}
</RudraCoreSurface>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreSurface id="leads_table_surface" className={`${getResponsiveProp({sm: 'leads-table-glow mt-6 overflow-hidden rounded-[1.25rem] p-4', md: 'leads-table-glow rounded-[1.5rem] p-6', lg: 'leads-table-glow rounded-[1.5rem] p-8'}) || ''}`} as="section" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutFlex id="leads_table_head" className="mb-6 border-b border-white/10 pb-5" direction="horizontal" as="div" gap="4" wrap={true} align="end" justify="between">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_table_title" className={`${getResponsiveProp({sm: 'leads-display text-3xl text-white', md: 'leads-display text-4xl text-white', lg: 'leads-display text-4xl text-white'}) || ''}`} content="SIGNAL LOG" as="h2" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_table_hint" className="text-xs font-bold text-[#62d9ff]/70" as="p" content="Search, filter and paginate" />
</>)}
</RudraLayoutFlex>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutScrollArea id="leads_table_scroll" className="w-full overflow-x-auto" orientation="horizontal">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsDataTable id="leads_table" className="min-w-[880px]" data={leads} mode="pagination" columns={[{"accessorKey":"full_name","header":"Name"},{"accessorKey":"email","header":"Email"},{"accessorKey":"company","header":"Company"},{"accessorKey":"intent","header":"Intent"},{"accessorKey":"source","header":"Source"},{"accessorKey":"status","header":"Status"},{"accessorKey":"created_at","header":"Received"}]} pageSize={10} globalFilterPlaceholder="Search leads" />
</>)}
</RudraLayoutScrollArea>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_empty_note" className="mt-5 text-xs leading-relaxed text-white/40" as="p" content="If no rows match, adjust the protected route query parameters. Lead data is never rendered by the public landing page." />
</>)}
</RudraCoreSurface>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutFlex id="leads_footer" className="mt-12 border-t border-white/10 pt-5" as="footer" gap="4" wrap={true} justify="between" direction="horizontal">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_footer_security" className="text-[10px] font-bold tracking-[.16em] text-[#6dffb8]" as="p" content="PRIVATE ROUTE · AUTH REQUIRED" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="leads_footer_brand" className="text-[10px] font-bold tracking-[.16em] text-white/35" as="p" content="RUDRA LEAD SYSTEM · 2026" />
</>)}
</RudraLayoutFlex>
</>)}
</RudraLayoutContainer>
</>)}
</RudraLayoutSection>
</>)}
</RudraLayoutBox>
</>)}
    </div>
  );
}
