import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Typography as RudraCoreTypography, Link as RudraCoreLink } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';

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

  const visualTheme = props.visualTheme !== undefined ? props.visualTheme : (props.data?.visualTheme !== undefined ? props.data.visualTheme : "glass");
  const inputs = { "visualTheme": visualTheme };
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

  const _localActions = {
  };
  const _localActionArguments = {
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
      <RudraCoreLink id="watermark_glass" aria-label="Built with Rudra — visit the Rudra home page" className={`${getResponsiveProp({sm: 'rudra-watermark inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/75 px-3 py-2 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-slate-700/60 dark:bg-slate-950/75'}) || ''}`} rel={getResponsiveProp({"sm":"noopener noreferrer"})} href={getResponsiveProp({"sm":"https://www.rudraapp.in/"})} target={getResponsiveProp({"sm":"_blank"})}>      <RudraLayoutBox id="watermark_glass_mark" className={`flex ${getResponsiveProp({sm: 'grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-sm'}) || ''}`}>      <RudraCoreTypography id="watermark_glass_letter" className={`${getResponsiveProp({sm: 'text-[10px] font-black leading-none text-white'}) || ''}`} as="span" content={getResponsiveProp({"sm":"R"})} />
</RudraLayoutBox>
      <RudraCoreTypography id="watermark_glass_label" className={`${getResponsiveProp({sm: 'text-xs font-semibold tracking-tight text-slate-700 dark:text-slate-100'}) || ''}`} content={getResponsiveProp({"sm":"Built with Rudra"})} as="span" />
</RudraCoreLink>
      <RudraCoreLink id="watermark_root" aria-label="Built with Rudra — visit the Rudra home page" rel={getResponsiveProp({"sm":"noopener noreferrer"})} href={getResponsiveProp({"sm":"https://www.rudraapp.in/"})} target={getResponsiveProp({"sm":"_blank"})}>      <RudraLayoutBox id="watermark_mark" className={`${getResponsiveProp({sm: 'rudra-watermark-mark'}) || ''}`}>      <RudraCoreTypography id="watermark_letter" className={`${getResponsiveProp({sm: 'rudra-watermark-letter'}) || ''}`} as="span" content={getResponsiveProp({"sm":"R"})} />
</RudraLayoutBox>
      <RudraCoreTypography id="watermark_label" className={`${getResponsiveProp({sm: 'rudra-watermark-label'}) || ''}`} as="span" content={getResponsiveProp({"sm":"Built with Rudra"})} />
</RudraCoreLink>
      <RudraCoreLink id="watermark_light" aria-label="Built with Rudra — visit the Rudra home page" className={`${getResponsiveProp({sm: 'rudra-watermark inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-md transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2'}) || ''}`} rel={getResponsiveProp({"sm":"noopener noreferrer"})} href={getResponsiveProp({"sm":"https://www.rudraapp.in/"})} target={getResponsiveProp({"sm":"_blank"})}>      <RudraLayoutBox id="watermark_light_mark" className={`flex ${getResponsiveProp({sm: 'grid size-5 shrink-0 place-items-center rounded-full bg-violet-600 shadow-sm'}) || ''}`}>      <RudraCoreTypography id="watermark_light_letter" className={`${getResponsiveProp({sm: 'text-[10px] font-black leading-none text-white'}) || ''}`} as="span" content={getResponsiveProp({"sm":"R"})} />
</RudraLayoutBox>
      <RudraCoreTypography id="watermark_light_label" className={`${getResponsiveProp({sm: 'text-xs font-semibold tracking-tight text-slate-800'}) || ''}`} as="span" content={getResponsiveProp({"sm":"Built with Rudra"})} />
</RudraCoreLink>
      <RudraCoreLink id="watermark_dark" aria-label="Built with Rudra — visit the Rudra home page" className={`${getResponsiveProp({sm: 'rudra-watermark inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:border-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'}) || ''}`} href={getResponsiveProp({"sm":"https://www.rudraapp.in/"})} target={getResponsiveProp({"sm":"_blank"})} rel={getResponsiveProp({"sm":"noopener noreferrer"})}>      <RudraLayoutBox id="watermark_dark_mark" className={`flex ${getResponsiveProp({sm: 'grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-sm'}) || ''}`}>      <RudraCoreTypography id="watermark_dark_letter" className={`${getResponsiveProp({sm: 'text-[10px] font-black leading-none text-white'}) || ''}`} as="span" content={getResponsiveProp({"sm":"R"})} />
</RudraLayoutBox>
      <RudraCoreTypography id="watermark_dark_label" className={`${getResponsiveProp({sm: 'text-xs font-semibold tracking-tight text-slate-100'}) || ''}`} as="span" content={getResponsiveProp({"sm":"Built with Rudra"})} />
</RudraCoreLink>
      <RudraCoreLink id="watermark_minimal" aria-label="Built with Rudra — visit the Rudra home page" className={`${getResponsiveProp({sm: 'rudra-watermark inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-violet-300'}) || ''}`} href={getResponsiveProp({"sm":"https://www.rudraapp.in/"})} target={getResponsiveProp({"sm":"_blank"})} rel={getResponsiveProp({"sm":"noopener noreferrer"})}>      <RudraLayoutBox id="watermark_minimal_mark" className={`flex ${getResponsiveProp({sm: 'grid size-4 shrink-0 place-items-center rounded bg-violet-600'}) || ''}`}>      <RudraCoreTypography id="watermark_minimal_letter" className={`${getResponsiveProp({sm: 'text-[10px] font-black leading-none text-white'}) || ''}`} as="span" content={getResponsiveProp({"sm":"R"})} />
</RudraLayoutBox>
      <RudraCoreTypography id="watermark_minimal_label" className={`${getResponsiveProp({sm: 'text-[11px] font-semibold tracking-tight'}) || ''}`} as="span" content={getResponsiveProp({"sm":"Built with Rudra"})} />
</RudraCoreLink>
    </div>
  );
}
