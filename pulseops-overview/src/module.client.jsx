import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { LineChart as RudraChartsLineChart } from '@rudra-studio/rudra-charts';
import { UniversalIcon } from './universal-icon.jsx';
import { Typography as RudraCoreTypography, Badge as RudraCoreBadge, Surface as RudraCoreSurface } from '@rudra-studio/rudra-core';
import { Stack as RudraLayoutStack, Grid as RudraLayoutGrid } from '@rudra-studio/rudra-layout';
import { MetricCard as RudraWidgetsMetricCard, DataTable as RudraWidgetsDataTable } from '@rudra-studio/rudra-widgets';

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

  const inputs = {  };
  const state = {  };

  const _setState = useCallback((name, value) => {
    switch (name) {
      default: return value;
    }
  }, []);

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
      default: return value;
    }
  }, [_setState]);

  const _callLibrary = useCallback(async (esmUrl, functionName, args) => {
    const loaded = await import(/* @vite-ignore */ /* webpackIgnore: true */ esmUrl);
    const callable = loaded[functionName] || loaded.default;
    if (typeof callable !== 'function') throw new Error("Library function '" + functionName + "' was not exported by " + esmUrl);
    return callable(args);
  }, []);

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

  async function loadStatus(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const argumentValues = _resolveRuntimeValue({}, roots) || {};
      const endpoint = String(_resolveRuntimeValue(_applyApiArguments("https://rudra-sql.onrender.com/api/v1/postgres/main/data/pulseops_snapshots/0f66fcad-18ad-4a1a-9047-127e4b8be77e", argumentValues), roots) || '');
      const rawHeaders = []; const headers = Object.fromEntries((Array.isArray(rawHeaders) ? rawHeaders : Object.entries(rawHeaders || {}).map(([key, value]) => ({ key, value }))).filter(header => header?.key).map(header => [String(_resolveRuntimeValue(_applyApiArguments(header.key, argumentValues), roots)), String(_resolveRuntimeValue(_applyApiArguments(header.value, argumentValues), roots) ?? '')]));
      let headerOverrides = _resolveRuntimeValue({}, roots) || {}; if (typeof headerOverrides === 'string') { try { headerOverrides = JSON.parse(headerOverrides); } catch {} } Object.assign(headers, Array.isArray(headerOverrides) ? Object.fromEntries(headerOverrides.filter(item => item?.key).map(item => [item.key, item.value])) : headerOverrides);
      let rawBody = _hasBodyOverride(null) ? null : ""; if (typeof rawBody === 'string') { try { rawBody = JSON.parse(rawBody); } catch {} } const resolvedBody = _resolveRuntimeValue(_applyApiArguments(rawBody, argumentValues), roots);
      const effectiveBody = _hasBodyOverride(resolvedBody) ? resolvedBody : argumentValues; const requestBody = /^(GET|HEAD)$/i.test("GET") || !_hasBodyOverride(effectiveBody) ? undefined : (typeof effectiveBody === 'string' ? effectiveBody : JSON.stringify(effectiveBody));
      const response = await fetch(endpoint, { method: "GET", headers, body: requestBody, signal: args.signal || AbortSignal.timeout(8000) }); if (!response.ok) throw new Error('API request failed (' + response.status + ')'); const result = await response.json(); stepResults["po_fetch"] = result; vars["apiResult"] = result; }
    return stepResults.po_fetch.data;
    return undefined;
  }

  const _localActions = {
    "loadStatus": loadStatus,
  };
  const _localActionArguments = {
    "loadStatus": [],
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


  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      <RudraLayoutStack id="po_root" gap="6" align="stretch" direction="vertical">      <RudraCoreSurface id="po_header" as="header" tone="raised" radius="xl" padding="lg" bordered={true}>      <RudraLayoutStack id="po_header_row" gap="3" wrap={true} align="center" justify="between" direction="horizontal">      <RudraLayoutStack id="po_title_stack" direction="vertical" gap="1">      <RudraCoreTypography id="po_eyebrow" as="p" content="PULSEOPS / OPERATIONS" customColor="#06b6d4" />
      <RudraCoreTypography id="po_title" as="h2" content="Command center" />
</RudraLayoutStack>
      <RudraCoreBadge id="po_status" className={`${getResponsiveProp({sm: 'ro'}) || ''} ${getResponsiveProp({sm: 'bg-blue-600 text-white border-blue-600', lg: 'bg-purple-100 text-purple-800 border-transparent'}) || ''}`} icon={<UniversalIcon icon={false} />} label={serverData?.status?.description} customColor={false} />
</RudraLayoutStack>
</RudraCoreSurface>
      <RudraLayoutGrid id="po_kpis" className={`grid flex ${getResponsiveProp({sm: 'grid-cols-1 gap-4 w-full', md: 'grid-cols-2 gap-4 w-full', lg: 'grid-cols-4 gap-4 w-full'}) || ''}`}>      <RudraWidgetsMetricCard id="po_availability" className="pulseops-metric" chartHeight={52} value={serverData?.metrics?.availability?.value} suffix="%" chartData={serverData?.metrics?.availability?.chartData} showChart={true} showTrend={true} accentColor="#22c55e" description="Rolling 30 days" label="Availability" trend={serverData?.metrics?.availability?.trend} chartType="area" trendValue={serverData?.metrics?.availability?.trendValue} />
      <RudraWidgetsMetricCard id="po_incidents" className="pulseops-metric" label="Open incidents" value={serverData?.metrics?.incidents?.value} chartType="area" accentColor="#f59e0b" chartHeight={52} trend={serverData?.metrics?.incidents?.trend} chartData={serverData?.metrics?.incidents?.chartData} showChart={true} showTrend={true} trendValue={serverData?.metrics?.incidents?.trendValue} description="Across production" />
      <RudraWidgetsMetricCard id="po_latency" className="pulseops-metric" showChart={true} accentColor="#06b6d4" chartHeight={52} description="API + realtime" label="p95 latency" chartType="area" showTrend={true} trendValue={serverData?.metrics?.latency?.trendValue} trend={serverData?.metrics?.latency?.trend} value={serverData?.metrics?.latency?.value} suffix=" ms" chartData={serverData?.metrics?.latency?.chartData} />
      <RudraWidgetsMetricCard id="po_rate" className="pulseops-metric" label="Request rate" trend={serverData?.metrics?.requestRate?.trend} chartData={serverData?.metrics?.requestRate?.chartData} chartType="area" showTrend={true} trendValue={serverData?.metrics?.requestRate?.trendValue} accentColor="#6366f1" value={serverData?.metrics?.requestRate?.value} suffix=" /s" showChart={true} chartHeight={52} description="Current throughput" />
</RudraLayoutGrid>
      <RudraLayoutGrid id="po_content" className={`grid flex ${getResponsiveProp({sm: 'grid-cols-1 gap-6 w-full', lg: 'grid-cols-2 gap-6 w-full'}) || ''}`}>      <RudraCoreSurface id="po_chart_surface" as="section" tone="raised" radius="xl" padding="lg" bordered={true}>      <RudraLayoutStack id="po_chart_stack" gap="4" direction="vertical">      <RudraCoreTypography id="po_chart_title" as="h3" content="Latency envelope" />
      <RudraChartsLineChart id="po_chart" className="pulseops-chart" chartClassName="pulseops-chart-svg" curve="smooth" showXAxis={true} textColor="var(--rudra-color-text-muted, #64748b)" hoverColor="var(--rudra-color-accent-strong, #4f46e5)" categoryKey="label" data={serverData?.latency_series} style={{"background":"transparent"}} height={300} showYAxis={true} showTooltip={true} valueKey="value" pointColor="var(--rudra-color-accent, #6366f1)" showPoints={true} showGrid={true} gridColor="var(--rudra-color-border, #e5e7eb)" lineColor="var(--rudra-color-accent, #6366f1)" />
</RudraLayoutStack>
</RudraCoreSurface>
      <RudraCoreSurface id="po_incident_surface" radius="xl" padding="lg" bordered={true} as="section" tone="raised">      <RudraLayoutStack id="po_incident_stack" gap="4" direction="vertical">      <RudraCoreTypography id="po_incident_title" as="h3" content="Recent incidents" />
      <RudraWidgetsDataTable id="po_incident_table" data={serverData?.incidents} mode="pagination" columns={[{"accessorKey":"name","header":"Incident"},{"accessorKey":"status","header":"Status"},{"accessorKey":"created_at","header":"Started"}]} pageSize={5} globalFilterPlaceholder="Filter incidents" />
</RudraLayoutStack>
</RudraCoreSurface>
</RudraLayoutGrid>
</RudraLayoutStack>
    </div>
  );
}
