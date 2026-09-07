import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Link as RudraCoreLink, Badge as RudraCoreBadge, Button as RudraCoreButton, Typography as RudraCoreTypography } from '@rudra-studio/rudra-core';
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

  const isVisibleValue = (value) => Array.isArray(value) ? value.length > 0 : (typeof value === 'string' ? value.trim() !== '' && value.trim().toLowerCase() !== 'false' : Boolean(value));

  const children = props.children !== undefined ? props.children : (props.data?.children !== undefined ? props.data.children : undefined);
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const userRole = props.userRole !== undefined ? props.userRole : (props.data?.userRole !== undefined ? props.data.userRole : "guest");
  const displayName = props.displayName !== undefined ? props.displayName : (props.data?.displayName !== undefined ? props.data.displayName : "");
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const remainingSeconds = props.remainingSeconds !== undefined ? props.remainingSeconds : (props.data?.remainingSeconds !== undefined ? props.data.remainingSeconds : -1);
  const notice = props.notice !== undefined ? props.notice : (props.data?.notice !== undefined ? props.data.notice : "College mathematics pilot · For learners aged 18 and above.");
  const inputs = { "children": children, "authenticated": authenticated, "userRole": userRole, "displayName": displayName, "locale": locale, "remainingSeconds": remainingSeconds, "notice": notice };
  const [statusMessage, set_statusMessage] = useState(() => structuredClone(""));
  const state = { "statusMessage": statusMessage };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "statusMessage": { const next = typeof value === 'function' ? value(state.statusMessage) : value; state.statusMessage = next; set_statusMessage(next); return next; }
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
      case "statusMessage": _setState("statusMessage", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"feedbackRequested":{"properties":{"source":{"type":"string"}},"required":["source"],"type":"object"},"localeChanged":{"properties":{"locale":{"type":"string"}},"required":["locale"],"type":"object"},"navigationRequested":{"properties":{"path":{"type":"string"}},"required":["path"],"type":"object"},"signInRequested":{"properties":{"source":{"type":"string"}},"required":["source"],"type":"object"},"signOutRequested":{"properties":{"source":{"type":"string"}},"required":["source"],"type":"object"}};
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

  async function navigate(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("navigationRequested", { "path": args.path }, false).catch(error => console.error('Module output delivery failed', error));
    _setState("statusMessage", 'Navigation requested: ' + args.path);
    return undefined;
  }

  async function feedback(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("feedbackRequested", { "source": "shared-shell" }, false).catch(error => console.error('Module output delivery failed', error));
    _setState("statusMessage", "Feedback requested.");
    return undefined;
  }

  async function signIn(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("signInRequested", { "source": "shared-shell" }, false).catch(error => console.error('Module output delivery failed', error));
    _setState("statusMessage", "Sign-in requested.");
    return undefined;
  }

  async function changeLocale(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("localeChanged", { "locale": args.locale }, false).catch(error => console.error('Module output delivery failed', error));
    _setState("statusMessage", 'Language requested: ' + args.locale);
    return undefined;
  }

  async function signOut(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("signOutRequested", { "source": "shared-shell" }, false).catch(error => console.error('Module output delivery failed', error));
    _setState("statusMessage", "Sign-out requested.");
    return undefined;
  }

  async function setLocale(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("localeChanged", { "locale": args.locale }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function requestSignIn(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("signInRequested", { "source": "shared-header" }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function requestFeedback(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("feedbackRequested", { "source": "shared-footer" }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  const _localActions = {
    "navigate": navigate,
    "feedback": feedback,
    "signIn": signIn,
    "changeLocale": changeLocale,
    "signOut": signOut,
    "setLocale": setLocale,
    "requestSignIn": requestSignIn,
    "requestFeedback": requestFeedback,
  };
  const _localActionArguments = {
    "navigate": ["path"],
    "feedback": [],
    "signIn": [],
    "changeLocale": ["locale"],
    "signOut": [],
    "setLocale": ["locale"],
    "requestSignIn": [],
    "requestFeedback": [],
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-layout@1.0.25/components/Box/styles.css" precedence="rudra-library" />
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="shell" data-theme={((_bindingValue) => _bindingValue === undefined ? "light" : _bindingValue)($theme)} className="block rs-shell">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreLink id="skip" className="rs-shell-skip" href="#rs-page-content" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header" role="banner" className="block rs-shell-header">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header_inner" className="block rs-shell-header-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="brand" className="rs-shell-brand" id="brand" label="Rudra Scholar" theme="auto" leftIcon={false} onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} rightIcon={false} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="navigation" role="navigation" aria-label="Main navigation" className="block rs-shell-nav">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="explore" className="rs-shell-button" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} rightIcon={false} id="explore" label="Explore" theme="auto" leftIcon={false} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="pricing" className="rs-shell-button" label="Learning time" theme="auto" leftIcon={false} onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} rightIcon={false} id="pricing" />
</>)}
      {isVisibleValue(undefined) && (<>      <RudraCoreButton id="educator" className="rs-shell-button" id="educator" label="Educator studio" theme="auto" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="account" className="block rs-shell-account">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="usage" className="rs-shell-button rs-shell-usage" id="usage" label={undefined} theme="auto" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} />
</>)}
      {isVisibleValue(undefined) && (<>      <RudraCoreButton id="signin" className="rs-shell-button rs-shell-primary" id="signin" label="Sign in" theme="auto" onAction={(...eventArgs) => _callAction("signIn", {}, eventArgs)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.authenticated)) && (<>      <RudraCoreButton id="profile" className="rs-shell-button" theme="auto" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} ariaLabel="My account" id="profile" label={undefined} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.authenticated)) && (<>      <RudraCoreButton id="signout" className="rs-shell-button" id="signout" label="Sign out" theme="auto" onAction={(...eventArgs) => _callAction("signOut", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="nav" className="rs-nav">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="home" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} label={((_bindingValue) => _bindingValue === undefined ? "Home" : _bindingValue)(_scope?.i18n?.home)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="browse" label={((_bindingValue) => _bindingValue === undefined ? "Browse problems" : _bindingValue)(_scope?.i18n?.browse)} theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="professor" label={((_bindingValue) => _bindingValue === undefined ? "Professor studio" : _bindingValue)(_scope?.i18n?.professor)} theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="tools" className="rs-tools">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="meter" className="inline-flex px-2.5 py-1 text-xs gap-1.5" label="{{ Math.ceil((inputs.remainingSeconds || 0)/60) }} min" ariaLabel="Remaining learning minutes" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="page" className="rs-page" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="utility" className="block rs-shell-utility">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="notice" className="rs-shell-notice" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(inputs?.notice)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="languages" role="group" aria-label="Language" className="block rs-shell-languages">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="locale_en" className="rs-shell-button rs-shell-language" aria-pressed={undefined} id="locale_en" lang="en" label="English" theme="auto" onAction={(...eventArgs) => _callAction("changeLocale", {}, eventArgs)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="locale_hi" className="rs-shell-button rs-shell-language" theme="auto" onAction={(...eventArgs) => _callAction("changeLocale", {}, eventArgs)} aria-pressed={undefined} id="locale_hi" lang="hi" label="हिन्दी" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="locale_ta" className="rs-shell-button rs-shell-language" onAction={(...eventArgs) => _callAction("changeLocale", {}, eventArgs)} aria-pressed={undefined} id="locale_ta" lang="ta" label="தமிழ்" theme="auto" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="page_content" id="rs-page-content" role="main" tabIndex={-1} className="block rs-shell-content" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="action_status" role="status" aria-live="polite" aria-atomic="true" className="block rs-shell-status">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="status_text" as="p" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(statusMessage)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="footer" role="contentinfo" className="block rs-shell-footer">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="footer_inner" className="block rs-shell-footer-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="footer_brand" className="block rs-shell-footer-brand">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="footer_title" className="rs-shell-footer-title" as="p" content="Rudra Scholar" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="footer_promise" className="rs-shell-muted" as="p" content="Understand the reasoning, not only the answer." />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="footer_actions" className="block rs-shell-footer-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="feedback" className="rs-shell-button" id="feedback" label="Send feedback" theme="auto" onAction={(...eventArgs) => _callAction("feedback", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="copyright" className="rs-shell-muted" as="p" content="© 2026 Rudra Scholar" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="footer_copy" as="p" content={((_bindingValue) => _bindingValue === undefined ? "© 2026 Rudra Scholar." : _bindingValue)(_scope?.i18n?.copyright)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="footer_row" className="rs-foot-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="footer_note" as="p" content="AI work should be reviewed. Private lessons and account pages are not indexed." customColor="var(--rudra-color-muted)" />
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
