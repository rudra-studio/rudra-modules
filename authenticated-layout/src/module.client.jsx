import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { AppHeader as LeadflowUiAppHeader } from '@rudra-studio/leadflow-ui';
import { Typography as RudraCoreTypography, Link as RudraCoreLink } from '@rudra-studio/rudra-core';
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
    const responsiveValue = viewport === 'sm' ? (val.sm !== undefined ? val.sm : (val.md !== undefined ? val.md : val.lg)) : viewport === 'md' ? (val.md !== undefined ? val.md : (val.sm !== undefined ? val.sm : val.lg)) : (val.lg !== undefined ? val.lg : (val.md !== undefined ? val.md : val.sm));
    return responsiveValue && typeof responsiveValue === 'object' && responsiveValue.type === 'static' && Object.prototype.hasOwnProperty.call(responsiveValue, 'value') ? responsiveValue.value : responsiveValue;
  }, [viewport]);

  const isVisibleValue = (value) => Array.isArray(value) ? value.length > 0 : (typeof value === 'string' ? value.trim() !== '' && value.trim().toLowerCase() !== 'false' : Boolean(value));

  const children = props.children !== undefined ? props.children : (props.data?.children !== undefined ? props.data.children : undefined);
  const userName = props.userName !== undefined ? props.userName : (props.data?.userName !== undefined ? props.data.userName : "rudra");
  const avatarUrl = props.avatarUrl !== undefined ? props.avatarUrl : (props.data?.avatarUrl !== undefined ? props.data.avatarUrl : undefined);
  const userEmail = props.userEmail !== undefined ? props.userEmail : (props.data?.userEmail !== undefined ? props.data.userEmail : "rudra@rudraapp.in");
  const inputs = { "children": children, "userName": userName, "avatarUrl": avatarUrl, "userEmail": userEmail };
  const [searchString, set_searchString] = useState(() => structuredClone(""));
  const state = { "searchString": searchString };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "searchString": { const next = typeof value === 'function' ? value(state.searchString) : value; state.searchString = next; set_searchString(next); return next; }
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
      case "searchString": _setState("searchString", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"output_5562270e-9b19-4d81-9927-4ed00a254d84":{"properties":{"source":{"type":"string"}},"required":["source"],"type":"object"},"output_dcfd049c-046c-4528-bd69-db49860ba8ff":{"properties":{"searchString":{"type":"string"}},"required":["searchString"],"type":"object"},"output_f4a4febd-f2c7-423c-a5ca-11552d44fe6e":{"properties":{},"type":"object"}};
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

  async function signOut(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await _emitOutput("output_5562270e-9b19-4d81-9927-4ed00a254d84", { "source": "authenticated-layout" }, true);
    return undefined;
    return undefined;
  }

  async function onSearchChange(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("searchString", args.searchString);
    if (args.searchString?.length > 3) {
      await _emitOutput("output_dcfd049c-046c-4528-bd69-db49860ba8ff", { "searchString": args.searchString }, true);
    } else {
      return undefined;
    }
    return undefined;
  }

  async function createWorkspace(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await _emitOutput("output_f4a4febd-f2c7-423c-a5ca-11552d44fe6e", { "empty": "" }, true);
    return undefined;
  }

  const _localActions = {
    "signOut": signOut,
    "onSearchChange": onSearchChange,
    "createWorkspace": createWorkspace,
  };
  const _localActionArguments = {
    "signOut": ["event"],
    "onSearchChange": ["searchString"],
    "createWorkspace": [],
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
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1791073881947_6a9oh9x" className={`${getResponsiveProp({sm: 'authenticated-layout'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <LeadflowUiAppHeader id="el_1791073888602_ta3i06u" onPrimaryAction={(...eventArgs) => _callAction("createWorkspace", {}, eventArgs)} notificationCount={getResponsiveProp({"sm":0})} userName={inputs?.userName} userEmail={inputs?.userEmail} showUserMenu={getResponsiveProp({"sm":true})} onSearchChange={(...eventArgs) => _callAction("onSearchChange", {}, eventArgs)} showPrimaryAction={getResponsiveProp({"sm":true})} showAccountSettings={false} showSearch={getResponsiveProp({"sm":true})} description={getResponsiveProp({"sm":"Choose a workspace to continue"})} primaryActionIcon={<UniversalIcon icon={getResponsiveProp({"sm":{"iconType":"lucide","name":"Plus","props":{"color":"#000000","size":18,"strokeWidth":1.5}}})} />} title={getResponsiveProp({"sm":"Workspaces"})} ariaLabel={getResponsiveProp({"sm":"Workspace Header"})} onSignOut={(...eventArgs) => _callAction("signOut", {}, eventArgs)} userAvatarUrl={inputs?.avatarUrl} showNotifications={getResponsiveProp({"sm":false})} searchValue={searchString} showMenuTrigger={getResponsiveProp({"sm":false})} primaryActionLabel={getResponsiveProp({"sm":"Create workspace"})} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1791073897025_7amwznk">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1791073901971_e90mron">{inputs?.children}</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1791074116515_mmn0th9" className={`flex ${getResponsiveProp({sm: 'flex items-center justify-between p-2'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="el_1791074287339_6c1kv3x" className={`${getResponsiveProp({sm: 'text-center text-xs text-slate-400 dark:text-slate-500'}) || ''}`} content={getResponsiveProp({"sm":" © 2026 LeadFlow. All rights reserved."})} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1791074298490_f1wsnio" className={`${getResponsiveProp({sm: 'cta-group'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreLink id="el_1791074352003_j5nck95">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={getResponsiveProp({"sm":{"iconType":"svg","svgContent":"\u003csvg\n  viewBox=\"0 0 24 24\"\n  width=\"20\"\n  height=\"20\"\n  fill=\"#0A66C2\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  aria-hidden=\"true\"\n\u003e\n  \u003cpath d=\"M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45Z\" /\u003e\n\u003c/svg\u003e"}})} id="el_1791074365364_dditf3n" color="#111827" strokeWidth={1.2} size={20} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreLink id="el_1791074380507_glkjt3l">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={getResponsiveProp({"sm":{"iconType":"svg","svgContent":"\u003csvg\n  viewBox=\"0 0 24 24\"\n  width=\"20\"\n  height=\"20\"\n  fill=\"#000000\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  aria-hidden=\"true\"\n\u003e\n  \u003cpath d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z\" /\u003e\n\u003c/svg\u003e"}})} id="el_1791074384531_z08q6dx" size={20} color="#111827" strokeWidth={1.2} />
</>)}
</RudraCoreLink>
</>)}
</RudraCoreLink>
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
