import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { IconButton as RudraCoreIconButton, Typography as RudraCoreTypography, Alert as RudraCoreAlert } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox, Repeater as RudraLayoutRepeater } from '@rudra-studio/rudra-layout';

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

  const dismissible = props.dismissible !== undefined ? props.dismissible : (props.data?.dismissible !== undefined ? props.data.dismissible : true);
  const maxNotifications = props.maxNotifications !== undefined ? props.maxNotifications : (props.data?.maxNotifications !== undefined ? props.data.maxNotifications : 4);
  const inputs = { "dismissible": dismissible, "maxNotifications": maxNotifications };
  const [notifications, set_notifications] = useState(() => structuredClone([]));
  const [visible, set_visible] = useState(() => structuredClone(false));
  const [variant, set_variant] = useState(() => structuredClone("info"));
  const [title, set_title] = useState(() => structuredClone(""));
  const [message, set_message] = useState(() => structuredClone(""));
  const [closeLabel, set_closeLabel] = useState(() => structuredClone("Dismiss notification"));
  const state = { "notifications": notifications, "visible": visible, "variant": variant, "title": title, "message": message, "closeLabel": closeLabel };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "notifications": { const next = typeof value === 'function' ? value(state.notifications) : value; state.notifications = next; set_notifications(next); return next; }
      case "visible": { const next = typeof value === 'function' ? value(state.visible) : value; state.visible = next; set_visible(next); return next; }
      case "variant": { const next = typeof value === 'function' ? value(state.variant) : value; state.variant = next; set_variant(next); return next; }
      case "title": { const next = typeof value === 'function' ? value(state.title) : value; state.title = next; set_title(next); return next; }
      case "message": { const next = typeof value === 'function' ? value(state.message) : value; state.message = next; set_message(next); return next; }
      case "closeLabel": { const next = typeof value === 'function' ? value(state.closeLabel) : value; state.closeLabel = next; set_closeLabel(next); return next; }
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
      case "notifications": _setState("notifications", updateNested); return value;
      case "visible": _setState("visible", updateNested); return value;
      case "variant": _setState("variant", updateNested); return value;
      case "title": _setState("title", updateNested); return value;
      case "message": _setState("message", updateNested); return value;
      case "closeLabel": _setState("closeLabel", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"notification_dismissed":{"properties":{"id":{"type":"string"},"reason":{"type":"string"},"remaining":{"type":"number"},"title":{"type":"string"},"variant":{"type":"string"}},"required":["reason","id","variant","title","remaining"],"type":"object"}};
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

  async function showNotification(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const current = Array.isArray(state.notifications) ? state.notifications : [];
const limit = Math.max(1, Math.min(8, Number(inputs.maxNotifications) || 4));
const notification = {
  id: String(Date.now()) + "-" + String(Math.random()).slice(2, 8),
  variant: args.variant || "info",
  title: args.title || "Notification",
  message: args.message || "",
  closeLabel: args.closeLabel || "Dismiss notification"
};
return [...current, notification].slice(-limit);
      })();
      stepResults["notification_step_build_stack"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("notifications", stepResults.notification_step_build_stack);
    _setState("visible", true);
    return { "visible": true };
    return undefined;
  }

  async function dismissNotification(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const current = Array.isArray(state.notifications) ? state.notifications : [];
return current.filter((notification) => String(notification?.id) !== String(args.id));
      })();
      stepResults["notification_step_filter"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("notifications", stepResults.notification_step_filter);
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const remaining = stepResults.notification_step_filter;
return Array.isArray(remaining) && remaining.length > 0;
      })();
      stepResults["notification_step_has_remaining"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("visible", stepResults.notification_step_has_remaining);
    void _emitOutput("notification_dismissed", { "id": args.id, "reason": "user", "remaining": stepResults.notification_step_filter.length, "title": args.title, "variant": args.variant }, false).catch(error => console.error('Module output delivery failed', error));
    return { "dismissed": true };
    return undefined;
  }

  const _localActions = {
    "showNotification": showNotification,
    "dismissNotification": dismissNotification,
  };
  const _commandImplementations = useRef({});
  _commandImplementations.current = {
    "notification_dismiss": (commandArgs = {}, context = {}) => dismissNotification({ ...commandArgs, signal: context.signal }),
    "notification_show": (commandArgs = {}, context = {}) => showNotification({ ...commandArgs, signal: context.signal }),
  };
  const _commandAdapters = useRef(null);
  if (!_commandAdapters.current) _commandAdapters.current = {
    "notification_dismiss": (commandArgs, context) => _commandImplementations.current["notification_dismiss"](commandArgs, context),
    "notification_show": (commandArgs, context) => _commandImplementations.current["notification_show"](commandArgs, context),
  };
  useEffect(() => {
    const register = props.registerCommands || props.runtime?.registerCommands;
    if (typeof register !== 'function') return;
    return register(_commandAdapters.current);
  }, [props.registerCommands, props.runtime?.registerCommands]);

  const _localActionArguments = {
    "showNotification": ["variant", "title", "message", "closeLabel"],
    "dismissNotification": ["id", "title", "variant", "reason"],
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
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="notification_portal" data-theme={((_bindingValue) => _bindingValue === undefined ? "light" : _bindingValue)($theme)} data-notification-shell="" className={`${getResponsiveProp({sm: 'block rudra-notification-shell'}) || ''}`}>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(visible)) && (<>      <RudraLayoutBox id="notification_position" data-rudra-notification="" data-rudra-notification-position="" className={`${getResponsiveProp({sm: 'block rudra-notification-position'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutRepeater id="notification_card" className="rudra-notification-stack" items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(notifications)}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="notification_item" role="status" aria-live="polite" className={`${getResponsiveProp({sm: 'flex rudra-notification-item'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="notification_copy" className={`${getResponsiveProp({sm: 'block rudra-notification-copy'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="notification_title" className={`${getResponsiveProp({sm: 'rudra-notification-title'}) || ''}`} as="div" content={((_bindingValue) => _bindingValue === undefined ? "Notification" : _bindingValue)(_scope?.item?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="notification_message" className={`${getResponsiveProp({sm: 'rudra-notification-message'}) || ''}`} as="div" content={((_bindingValue) => _bindingValue === undefined ? "Your notification is ready." : _bindingValue)(_scope?.item?.message)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(inputs?.dismissible)) && (<>      <RudraCoreIconButton id="notification_close" className="rudra-notification-dismiss" theme="auto" onClick={(...eventArgs) => _callAction("dismissNotification", {"id": { "dataPath": "item.id", "type": "binding" }, "title": { "dataPath": "item.title", "type": "binding" }, "variant": { "dataPath": "item.variant", "type": "binding" }}, eventArgs)} variant="ghost" ariaLabel={((_bindingValue) => _bindingValue === undefined ? "Dismiss notification" : _bindingValue)(_scope?.item?.closeLabel)} icon="✕" size="sm" type="button" />
</>)}
</RudraLayoutBox>
</>)}
</>); })(); }}</RudraLayoutRepeater>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreAlert id="notification_alert" className="rudra-notification-legacy-alert" live="polite" theme="auto" title={((_bindingValue) => _bindingValue === undefined ? "Notification" : _bindingValue)(title)} hidden={true} variant={((_bindingValue) => _bindingValue === undefined ? "info" : _bindingValue)(variant)} onDismiss={(...eventArgs) => _callAction("dismissNotification", {}, eventArgs)} appearance="soft" closeLabel={((_bindingValue) => _bindingValue === undefined ? "Dismiss notification" : _bindingValue)(closeLabel)} dismissible={true} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
    </div>
  );
}
