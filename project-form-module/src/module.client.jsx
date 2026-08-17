import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Flex as RudraLayoutFlex, Container as RudraLayoutContainer, Grid as RudraLayoutGrid } from '@rudra-studio/rudra-layout';
import { Select as RudraFormSelect, FormSection as RudraFormFormSection, DatePicker as RudraFormDatePicker, Form as RudraFormForm, ValidationSummary as RudraFormValidationSummary, CurrencyInput as RudraFormCurrencyInput, Input as RudraFormInput, Textarea as RudraFormTextarea } from '@rudra-studio/rudra-form';
import { Card as RudraCoreCard, Button as RudraCoreButton, Alert as RudraCoreAlert, Typography as RudraCoreTypography, Divider as RudraCoreDivider } from '@rudra-studio/rudra-core';

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

  const clients = props.clients !== undefined ? props.clients : (props.data?.clients !== undefined ? props.data.clients : []);
  const workspaceId = props.workspaceId !== undefined ? props.workspaceId : (props.data?.workspaceId !== undefined ? props.data.workspaceId : undefined);
  const project = props.project !== undefined ? props.project : (props.data?.project !== undefined ? props.data.project : undefined);
  const mode = props.mode !== undefined ? props.mode : (props.data?.mode !== undefined ? props.data.mode : "create");
  const domainUrl = props.domainUrl !== undefined ? props.domainUrl : (props.data?.domainUrl !== undefined ? props.data.domainUrl : "https://rudra-sql.onrender.com");
  const inputs = { "clients": clients, "workspaceId": workspaceId, "project": project, "mode": mode, "domainUrl": domainUrl };
  const [submitting, set_submitting] = useState(() => structuredClone(false));
  const [hasError, set_hasError] = useState(() => structuredClone(false));
  const state = { "submitting": submitting, "hasError": hasError };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "submitting": set_submitting(value); return value;
      case "hasError": set_hasError(value); return value;
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
      case "submitting": set_submitting(updateNested); return value;
      case "hasError": set_hasError(updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _callLibrary = useCallback(async (esmUrl, functionName, args) => {
    const loaded = await import(/* @vite-ignore */ /* webpackIgnore: true */ esmUrl);
    const callable = loaded[functionName] || loaded.default;
    if (typeof callable !== 'function') throw new Error("Library function '" + functionName + "' was not exported by " + esmUrl);
    return callable(args);
  }, []);

  const _outputSchemas = {"output_2ccd6192-eec4-414a-bf0f-885458f16bf4":{"properties":{},"type":"object"}};
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

  async function handleCancel(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("output_2ccd6192-eec4-414a-bf0f-885458f16bf4", {  }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function handleSubmit(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("submitting", true);
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const argumentValues = _resolveRuntimeValue({"budget":"{{ args.formData.budget }}","description":"{{ args.formData.description }}","dueDate":"{{ args.formData.dueDate }}","name":"{{ args.formData.name }}","priority":"{{ args.formData.priority }}","startDate":"{{ args.formData.startDate }}","status":"{{ args.formData.status }}"}, roots) || {};
      const endpoint = String(_resolveRuntimeValue(_applyApiArguments("{{inputs.domainUrl}}/api/v1/postgres/main/data/projects", argumentValues), roots) || '');
      const rawHeaders = [{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}]; const headers = Object.fromEntries((Array.isArray(rawHeaders) ? rawHeaders : Object.entries(rawHeaders || {}).map(([key, value]) => ({ key, value }))).filter(header => header?.key).map(header => [String(_resolveRuntimeValue(_applyApiArguments(header.key, argumentValues), roots)), String(_resolveRuntimeValue(_applyApiArguments(header.value, argumentValues), roots) ?? '')]));
      let headerOverrides = _resolveRuntimeValue({}, roots) || {}; if (typeof headerOverrides === 'string') { try { headerOverrides = JSON.parse(headerOverrides); } catch {} } Object.assign(headers, Array.isArray(headerOverrides) ? Object.fromEntries(headerOverrides.filter(item => item?.key).map(item => [item.key, item.value])) : headerOverrides);
      let rawBody = _hasBodyOverride("{}") ? "{}" : "{\n  \"name\": \"{{ args.name }}\",\n  \"description\": \"{{ args.description }}\",\n  \"status\": \"{{ args.status }}\",\n  \"priority\": \"{{ args.priority }}\",\n  \"budget\": \"{{ args.budget }}\",\n  \"startDate\": \"{{ args.startDate }}\",\n  \"dueDate\": \"{{ args.dueDate }}\"\n}"; if (typeof rawBody === 'string') { try { rawBody = JSON.parse(rawBody); } catch {} } const resolvedBody = _resolveRuntimeValue(_applyApiArguments(rawBody, argumentValues), roots);
      const effectiveBody = _hasBodyOverride(resolvedBody) ? resolvedBody : argumentValues; const requestBody = /^(GET|HEAD)$/i.test("POST") || !_hasBodyOverride(effectiveBody) ? undefined : (typeof effectiveBody === 'string' ? effectiveBody : JSON.stringify(effectiveBody));
      const response = await fetch(endpoint, { method: "POST", headers, body: requestBody, signal: args.signal || AbortSignal.timeout(15000) }); if (!response.ok) throw new Error('API request failed (' + response.status + ')'); const result = await response.json(); stepResults["step_1786973882134_2n478"] = result; vars["apiResult"] = result; }
    _setState("submitting", false);
    _setState("hasError", true);
    return undefined;
    return undefined;
  }

  const _localActions = {
    "handleCancel": handleCancel,
    "handleSubmit": handleSubmit,
  };
  const _localActionArguments = {
    "handleCancel": ["event"],
    "handleSubmit": ["formData"],
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
      <RudraLayoutContainer id="project-form-container" className={`${getResponsiveProp({sm: 'w-full rudra-module-wrapper'}) || ''}`} centered={true} maxWidth="lg" as="section">      <RudraCoreCard id="project-form-card" className={`${getResponsiveProp({sm: 'w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 p-2'}) || ''}`} theme="auto" as="section">      <RudraFormForm id="project-form" onSubmit={(...eventArgs) => _callAction("handleSubmit", {}, eventArgs)} initialValues={project}>      <RudraFormFormSection id="basic-section" title={<>      <RudraCoreTypography id="el_1786769426383_lulu4s9" className={`${getResponsiveProp({sm: 'text-sm'}) || ''} ${getResponsiveProp({sm: 'font-bold'}) || ''}`} content={getResponsiveProp({"lg":"Basic Information","sm":"Basic Information"})} />
</>} description={<>      <RudraCoreTypography id="el_1786769428982_549w43s" className={`${getResponsiveProp({sm: 'text-black dark:text-white my-2 mb-6'}) || ''}`} content={getResponsiveProp({"sm":"Add the core information used to identify your project."})} customColor={false} />
</>} actions={false} density="comfortable" variant={getResponsiveProp({"sm":"filled"})} collapsible={false} defaultCollapsed={false}>      <RudraFormInput id="project-name" className={`${getResponsiveProp({sm: 'mb-4 border-zinc-300'}) || ''} ${getResponsiveProp({sm: 'rounded-md'}) || ''}`} name="name" size="md" label="Project name" required={true} variant="default" placeholder="Website redesign" iconPosition="start" icon={false} />
      <RudraFormTextarea id="project-description" name="description" size="md" label="Description · Optional" maxRows={8} minRows={5} variant="default" autoResize={true} placeholder="Describe what the team is building..." />
      <RudraFormSelect id="project-client" className={`${getResponsiveProp({sm: 'mb-4'}) || ''}`} shadow="sm" options={clients} colorScheme="slate" name="clientId" size="md" label="Client · Optional" radius="lg" />
</RudraFormFormSection>
      <RudraFormFormSection id="details-section" title={<>      <RudraCoreTypography id="el_1786772566754_3lmkf5c" className={`${getResponsiveProp({sm: 'mt-8'}) || ''} ${getResponsiveProp({sm: 'text-sm'}) || ''} ${getResponsiveProp({sm: 'font-semibold'}) || ''}`} content={getResponsiveProp({"sm":"Project details"})} />
</>} description={<>      <RudraCoreTypography id="el_1786772568563_r4tc0cl" className={`${getResponsiveProp({sm: 'text-zinc-500 dark:text-white my-2 mb-6 mt-1'}) || ''}`} content={getResponsiveProp({"sm":"Define the current stage and priority of the project."})} />
</>} density="comfortable" variant="filled" actions={false}>      <RudraLayoutGrid id="details-grid" className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2" as="div">      <RudraFormSelect id="project-status" shadow="sm" options={[{"label":"Planning","value":"PLANNING"},{"label":"Active","value":"ACTIVE"},{"label":"On hold","value":"ON_HOLD"},{"label":"Completed","value":"COMPLETED"}]} required={true} colorScheme="slate" name="status" size="md" label="Status" radius="lg" />
      <RudraFormSelect id="project-priority" shadow="sm" options={[{"label":"Low","value":"LOW"},{"label":"Medium","value":"MEDIUM"},{"label":"High","value":"HIGH"},{"label":"Critical","value":"CRITICAL"}]} required={true} colorScheme="slate" name="priority" size="md" label="Priority" radius="lg" />
</RudraLayoutGrid>
</RudraFormFormSection>
      <RudraFormFormSection id="schedule-section" title={<>      <RudraCoreTypography id="el_1786772409486_hvvpaoi" className={`${getResponsiveProp({sm: 'mt-8'}) || ''} ${getResponsiveProp({sm: 'text-sm'}) || ''} ${getResponsiveProp({sm: 'font-semibold'}) || ''}`} content={getResponsiveProp({"sm":"Schedule \u0026 budget"})} />
</>} description={<>      <RudraCoreTypography id="el_1786772411699_xqtdsq2" className={`${getResponsiveProp({sm: 'text-zinc-500 dark:text-white my-2 mb-6 mt-1'}) || ''}`} content={getResponsiveProp({"sm":"Add project timing and budget information."})} />
</>} variant="filled" actions={false} density="comfortable">      <RudraLayoutGrid id="date-grid" className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2" as="div">      <RudraFormDatePicker id="project-start-date" size="md" label="Start date" variant="default" clearable={true} name="startDate" />
      <RudraFormDatePicker id="project-due-date" name="dueDate" size="md" label="Due date" variant="default" clearable={true} />
</RudraLayoutGrid>
      <RudraFormCurrencyInput id="project-budget" locale={getResponsiveProp({"sm":"en-US"})} prefix={false} variant="default" currency="INR" allowNegative={false} maximumFractionDigits={2} minimumFractionDigits={0} name="budget" size="md" suffix={false} clampOnBlur={true} label="Budget · Optional" />
</RudraFormFormSection>
      <RudraFormValidationSummary id="validation-summary" className="mx-6 mb-6 sm:mx-8" fieldLabels={{"budget":"Budget","dueDate":"Due date","name":"Project name"}} focusFieldOnClick={true} live={getResponsiveProp({"sm":"polite"})} title="" errors={_scope?.errors} />
      <RudraCoreAlert id="success-alert" title={<>      <RudraCoreTypography id="el_1786794839774_y5jdu8g" className={`${getResponsiveProp({sm: 'dark:text-white '}) || ''} ${getResponsiveProp({sm: 'font-semibold'}) || ''}`} content={getResponsiveProp({"sm":"Validation Errors"})} />
</>} action={false} icon={false} live="polite" theme="auto" variant={getResponsiveProp({"sm":"error"})} appearance="soft" dismissible={false}>      <RudraCoreTypography id="el_1786794841585_yu8l08l" content="Hello Thereee" />
</RudraCoreAlert>
      <RudraCoreDivider id="el_1786789281745_tl38ipo" />
      <RudraLayoutFlex id="form-actions" className={`${getResponsiveProp({sm: 'project-form-actions flex justify-end gap-2'}) || ''}`} gap="3" wrap={true} align="center" justify="end" direction="horizontal" as="div">      <RudraCoreButton id="cancel-button" className={`${getResponsiveProp({sm: 'h-10 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:opacity-50'}) || ''}`} id="project-form-cancel" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("handleCancel", {}, eventArgs)} rightIcon={false} size="md" leftIcon={false}>      <RudraCoreTypography id="el_1786788080176_udtwdx4" className={`${getResponsiveProp({sm: 'text-black-500 dark:text-white-100'}) || ''} ${getResponsiveProp({sm: 'font-semibold'}) || ''}`} content={getResponsiveProp({"sm":"Cancel"})} customColor={getResponsiveProp({"sm":"#2a2828"})} />
</RudraCoreButton>
      <RudraCoreButton id="submit-button" className={`flex ${getResponsiveProp({sm: 'inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60'}) || ''}`} type="submit" theme="auto" variant="primary" onAction={null} rightIcon={false} id="project-form-submit" size="md" loading={submitting} leftIcon={false} loadingText="Saving...">      <RudraCoreTypography id="el_1786788087800_8zuydoj" className={`${getResponsiveProp({sm: 'text-white '}) || ''} ${getResponsiveProp({sm: 'font-semibold'}) || ''}`} content={getResponsiveProp({"sm":"Create Project"})} />
</RudraCoreButton>
</RudraLayoutFlex>
</RudraFormForm>
</RudraCoreCard>
</RudraLayoutContainer>
    </div>
  );
}
