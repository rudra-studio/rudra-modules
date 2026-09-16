import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Link as RudraCoreLink, Button as RudraCoreButton, Typography as RudraCoreTypography, Avatar as RudraCoreAvatar } from '@rudra-studio/rudra-core';
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

  const children = props.children !== undefined ? props.children : (props.data?.children !== undefined ? props.data.children : undefined);
  const navOptions = props.navOptions !== undefined ? props.navOptions : (props.data?.navOptions !== undefined ? props.data.navOptions : [{"href":"/","label":"Explore"},{"href":"/browse","label":"Browse"},{"href":"/professor/context","label":"Professor"}]);
  const avatarUrl = props.avatarUrl !== undefined ? props.avatarUrl : (props.data?.avatarUrl !== undefined ? props.data.avatarUrl : "");
  const title = props.title !== undefined ? props.title : (props.data?.title !== undefined ? props.data.title : "Rudra Scholar");
  const displayName = props.displayName !== undefined ? props.displayName : (props.data?.displayName !== undefined ? props.data.displayName : "My account");
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const copyrightText = props.copyrightText !== undefined ? props.copyrightText : (props.data?.copyrightText !== undefined ? props.data.copyrightText : "© 2026 Rudra Scholar");
  const linkedinUrl = props.linkedinUrl !== undefined ? props.linkedinUrl : (props.data?.linkedinUrl !== undefined ? props.data.linkedinUrl : "https://www.linkedin.com");
  const xUrl = props.xUrl !== undefined ? props.xUrl : (props.data?.xUrl !== undefined ? props.data.xUrl : "https://x.com");
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const inputs = { "children": children, "navOptions": navOptions, "avatarUrl": avatarUrl, "title": title, "displayName": displayName, "authenticated": authenticated, "copyrightText": copyrightText, "linkedinUrl": linkedinUrl, "xUrl": xUrl, "locale": locale };
  const [languageMenuOpen, set_languageMenuOpen] = useState(() => structuredClone(false));
  const [mobileNavOpen, set_mobileNavOpen] = useState(() => structuredClone(false));
  const [accountMenuOpen, set_accountMenuOpen] = useState(() => structuredClone(false));
  const state = { "languageMenuOpen": languageMenuOpen, "mobileNavOpen": mobileNavOpen, "accountMenuOpen": accountMenuOpen };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "languageMenuOpen": { const next = typeof value === 'function' ? value(state.languageMenuOpen) : value; state.languageMenuOpen = next; set_languageMenuOpen(next); return next; }
      case "mobileNavOpen": { const next = typeof value === 'function' ? value(state.mobileNavOpen) : value; state.mobileNavOpen = next; set_mobileNavOpen(next); return next; }
      case "accountMenuOpen": { const next = typeof value === 'function' ? value(state.accountMenuOpen) : value; state.accountMenuOpen = next; set_accountMenuOpen(next); return next; }
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
      case "languageMenuOpen": _setState("languageMenuOpen", updateNested); return value;
      case "mobileNavOpen": _setState("mobileNavOpen", updateNested); return value;
      case "accountMenuOpen": _setState("accountMenuOpen", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"localeChanged":{"properties":{"locale":{"type":"string"}},"required":["locale"],"type":"object"},"navigationRequested":{"properties":{"path":{"type":"string"}},"required":["path"],"type":"object"},"signOutRequested":{"properties":{"source":{"type":"string"}},"required":["source"],"type":"object"}};
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
    await closeShellMenus({});
    _setState("accountMenuOpen", false);
    await _emitOutput("signOutRequested", { "source": "shared-shell" }, true);
    return undefined;
  }

  async function selectLanguage(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await closeShellMenus({});
    _setState("languageMenuOpen", false);
    await _emitOutput("localeChanged", { "locale": args.locale }, true);
    return undefined;
  }

  async function toggleLanguageMenu(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("mobileNavOpen", false);
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return !Boolean(state.languageMenuOpen);
      })();
      stepResults["language_next"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("languageMenuOpen", stepResults.language_next);
    _setState("accountMenuOpen", false);
    return undefined;
  }

  async function toggleAccountMenu(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("mobileNavOpen", false);
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return !Boolean(state.accountMenuOpen);
      })();
      stepResults["account_next"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("accountMenuOpen", stepResults.account_next);
    _setState("languageMenuOpen", false);
    return undefined;
  }

  async function navigateFromButton(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let navigationPath;
    _setState("mobileNavOpen", false);
    _setState("accountMenuOpen", false);
    _setState("languageMenuOpen", false);
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const value = args.event?.value; return typeof value === 'string' && value.startsWith('/') ? value : '/';
      })();
      stepResults["nav_button_path"] = customResult; vars["navigationPath"] = customResult; }
    await _emitOutput("navigationRequested", { "path": stepResults.nav_button_path }, true);
    return undefined;
  }

  async function handleShellMenuEvent(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return (function handleScholarShellMenuEvent(args, state) {
  const event = args.event;
  const next = { account: Boolean(state.accountMenuOpen), language: Boolean(state.languageMenuOpen), navigation: Boolean(state.mobileNavOpen) };
  const target = event?.target;
  const root = target?.closest?.('.rs-shell');
  if (!root) return next;
  const region = (node) => {
    if (node?.closest?.('.rs-mobile-navigation, .rs-mobile-nav-toggle')) return 'navigation';
    const dropdown = node?.closest?.('.rs-dropdown');
    const id = dropdown?.querySelector('[aria-haspopup="menu"]')?.id;
    return id === 'rs-account-trigger' ? 'account' : id === 'rs-language-trigger' ? 'language' : null;
  };
  const keepOnly = (key) => ({ account: key === 'account' && next.account, language: key === 'language' && next.language, navigation: key === 'navigation' && next.navigation });
  if (event.type === 'pointerdown') return keepOnly(region(target));
  if (event.type === 'blur') return keepOnly(root.contains(event.relatedTarget) ? region(event.relatedTarget) : null);
  const activeRegion = region(target);
  if (event.key === 'Escape' && (next.account || next.language || next.navigation)) {
    event.preventDefault();
    const focusedRegion = activeRegion || (next.navigation ? 'navigation' : next.account ? 'account' : 'language');
    root.querySelector(focusedRegion === 'navigation' ? '#rs-mobile-nav-trigger' : focusedRegion === 'account' ? '#rs-account-trigger' : '#rs-language-trigger')?.focus();
    return keepOnly(null);
  }
  // Arrow handling belongs to the existing account/language menus only.
  if (!['account', 'language'].includes(activeRegion) || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return next;
  const control = target.closest('.rs-dropdown');
  const trigger = control.querySelector('[aria-haspopup="menu"]');
  event.preventDefault();
  const items = Array.from(control.querySelectorAll('[role="menuitem"]:not(:disabled)'));
  if (target === trigger) {
    next.account = activeRegion === 'account'; next.language = activeRegion === 'language'; next.navigation = false;
    const key = event.key;
    requestAnimationFrame(() => {
      const available = Array.from(control.querySelectorAll('[role="menuitem"]:not(:disabled)'));
      (key === 'ArrowUp' ? available[available.length - 1] : available[0])?.focus();
    });
  } else if (items.length) {
    const current = items.indexOf(target.closest('[role="menuitem"]'));
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
    items[index]?.focus();
  }
  return next;
})(args, state);
      })();
      stepResults["menu_event"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("accountMenuOpen", stepResults.menu_event.account);
    _setState("languageMenuOpen", stepResults.menu_event.language);
    _setState("mobileNavOpen", stepResults.menu_event.navigation);
    return undefined;
  }

  async function closeShellMenus(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("mobileNavOpen", false);
    _setState("accountMenuOpen", false);
    _setState("languageMenuOpen", false);
    return undefined;
  }

  async function toggleMobileNavigation(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return !Boolean(state.mobileNavOpen);
      })();
      stepResults["mobile_next"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("accountMenuOpen", false);
    _setState("languageMenuOpen", false);
    _setState("mobileNavOpen", stepResults.mobile_next);
    return undefined;
  }

  async function navigate(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    await closeShellMenus({});
    _setState("accountMenuOpen", false);
    await _emitOutput("navigationRequested", { "path": args.path }, true);
    return undefined;
  }

  const _localActions = {
    "signOut": signOut,
    "selectLanguage": selectLanguage,
    "toggleLanguageMenu": toggleLanguageMenu,
    "toggleAccountMenu": toggleAccountMenu,
    "navigateFromButton": navigateFromButton,
    "handleShellMenuEvent": handleShellMenuEvent,
    "closeShellMenus": closeShellMenus,
    "toggleMobileNavigation": toggleMobileNavigation,
    "navigate": navigate,
  };
  const _localActionArguments = {
    "signOut": [],
    "selectLanguage": ["locale"],
    "toggleLanguageMenu": [],
    "toggleAccountMenu": [],
    "navigateFromButton": ["event"],
    "handleShellMenuEvent": ["event"],
    "closeShellMenus": [],
    "toggleMobileNavigation": [],
    "navigate": ["path"],
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
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; return; }
    void _runLifecycle("shell_auth_changedcloseShellMenus", "takeLatest", (signal) => closeShellMenus({ signal }), 'Module input lifecycle failed:');
  }, [authenticated]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="shell" data-theme={((_bindingValue) => _bindingValue === undefined ? "light" : _bindingValue)($theme)} className="block rs-shell" onBlur={(...eventArgs) => _callAction("handleShellMenuEvent", {}, eventArgs)} onKeyDown={(...eventArgs) => _callAction("handleShellMenuEvent", {}, eventArgs)} onPointerDownCapture={(...eventArgs) => _callAction("handleShellMenuEvent", {}, eventArgs)}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header" role="banner" className="block rs-header">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header_inner" className="grid rs-header-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="brand" className="rs-brand" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Rudra Scholar" : _bindingValue)(inputs?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutRepeater id="nav" aria-label="Primary navigation" className="flex flex-wrap items-center gap-2 rs-nav" role="navigation" items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(inputs?.navOptions)}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="nav_item" className="rs-nav-button" theme="auto" value={((_bindingValue) => _bindingValue === undefined ? "/" : _bindingValue)(_scope?.item?.href)} variant="ghost" leftIcon={false} size="sm" onAction={(...eventArgs) => _callAction("navigateFromButton", {}, eventArgs)} rightIcon={false} label={((_bindingValue) => _bindingValue === undefined ? "Link" : _bindingValue)(_scope?.item?.label)} />
</>)}
</>); })(); }}</RudraLayoutRepeater>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header_actions" className="flex items-center rs-header-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="language_control" className="block rs-dropdown">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="language_trigger" className="rs-control-button" rightIcon={false} aria-expanded={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(languageMenuOpen)} additionalAttributes={{"aria-controls":"rs-language-menu","aria-haspopup":"menu","id":"rs-language-trigger"}} theme="auto" variant="ghost" leftIcon={false} id="rs-language-trigger" size="sm" label={(((value) => { return ({en:'English',hi:'हिन्दी',ta:'தமிழ்'})[value] || 'English'; })(((_bindingValue) => _bindingValue === undefined ? "en" : _bindingValue)(inputs?.locale)))} onAction={(...eventArgs) => _callAction("toggleLanguageMenu", {}, eventArgs)} ariaLabel="Choose language" />
</>)}
      {isVisibleValue(languageMenuOpen) && (<>      <RudraLayoutBox id="language_menu" id="rs-language-menu" role="menu" aria-label="Language" aria-labelledby="rs-language-trigger" className="block rs-menu rs-language-menu">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="lang_en" className="rs-menu-button" variant="ghost" leftIcon={false} fullWidth={true} additionalAttributes={{"role":"menuitem"}} label="English" onAction={(...eventArgs) => _callAction("selectLanguage", {"locale": "en"}, eventArgs)} rightIcon={false} size="sm" theme="auto" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="lang_hi" className="rs-menu-button" variant="ghost" fullWidth={true} rightIcon={false} additionalAttributes={{"role":"menuitem"}} label="हिन्दी" theme="auto" leftIcon={false} onAction={(...eventArgs) => _callAction("selectLanguage", {"locale": "hi"}, eventArgs)} size="sm" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="lang_ta" className="rs-menu-button" size="sm" theme="auto" variant="ghost" leftIcon={false} onAction={(...eventArgs) => _callAction("selectLanguage", {"locale": "ta"}, eventArgs)} fullWidth={true} rightIcon={false} label="தமிழ்" additionalAttributes={{"role":"menuitem"}} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.authenticated)) && (<>      <RudraLayoutBox id="account_control" className="block rs-dropdown">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="account_trigger" className="rs-avatar-button" theme="auto" variant="ghost" leftIcon={false} ariaLabel="Account menu" rightIcon={false} onAction={(...eventArgs) => _callAction("toggleAccountMenu", {}, eventArgs)} aria-expanded={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(accountMenuOpen)} additionalAttributes={{"aria-controls":"rs-account-menu","aria-haspopup":"menu","id":"rs-account-trigger"}} id="rs-account-trigger" size="sm">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreAvatar id="avatar" alt={((_bindingValue) => _bindingValue === undefined ? "My account" : _bindingValue)(inputs?.displayName)} src={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(inputs?.avatarUrl)} name={((_bindingValue) => _bindingValue === undefined ? "My account" : _bindingValue)(inputs?.displayName)} shape="circle" status="none" loading="lazy" size="md" theme="auto" referrerPolicy="no-referrer" />
</>)}
</RudraCoreButton>
</>)}
      {isVisibleValue(accountMenuOpen) && (<>      <RudraLayoutBox id="account_menu" id="rs-account-menu" role="menu" aria-label="Account" aria-labelledby="rs-account-trigger" className="block rs-menu rs-account-menu">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="metrics" className="rs-menu-button" size="sm" variant="ghost" leftIcon={false} fullWidth={true} additionalAttributes={{"role":"menuitem"}} label="Usage \u0026 metrics" theme="auto" onAction={(...eventArgs) => _callAction("navigate", {"path": "/account/usage"}, eventArgs)} rightIcon={false} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="logout" className="rs-menu-button rs-danger" ariaLabel="Sign out of Rudra Scholar" fullWidth={true} label="Sign out" rightIcon={false} additionalAttributes={{"role":"menuitem"}} size="sm" theme="auto" variant="ghost" leftIcon={false} onAction={(...eventArgs) => _callAction("signOut", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue((((value) => { return !Boolean(value); })(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.authenticated)))) && (<>      <RudraCoreButton id="sign_in" className="rs-nav-button rs-sign-in" rightIcon={false} size="sm" theme="auto" leftIcon={false} label="Sign in" variant="outline" onAction={(...eventArgs) => _callAction("navigate", {"path": "/access"}, eventArgs)} ariaLabel="Sign in to Rudra Scholar" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="mobile_nav_trigger" className="rs-mobile-nav-toggle" rightIcon={false} aria-expanded={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(mobileNavOpen)} additionalAttributes={{"aria-controls":"rs-mobile-navigation"}} id="rs-mobile-nav-trigger" label={(((value) => { return value ? '×' : '☰'; })(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(mobileNavOpen)))} leftIcon={false} onAction={(...eventArgs) => _callAction("toggleMobileNavigation", {}, eventArgs)} ariaLabel={(((value) => { return value ? 'Close navigation' : 'Open navigation'; })(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(mobileNavOpen)))} type="button" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(mobileNavOpen)) && (<>      <RudraLayoutRepeater id="mobile_navigation" className="rs-mobile-navigation" id="rs-mobile-navigation" role="navigation" items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(inputs?.navOptions)} aria-label="Mobile primary navigation">{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="mobile_nav_item" className="rs-nav-button" size="sm" label={((_bindingValue) => _bindingValue === undefined ? "Link" : _bindingValue)(_scope?.item?.label)} variant="ghost" leftIcon={false} theme="auto" value={((_bindingValue) => _bindingValue === undefined ? "/" : _bindingValue)(_scope?.item?.href)} onAction={(...eventArgs) => _callAction("navigateFromButton", {}, eventArgs)} rightIcon={false} />
</>)}
</>); })(); }}</RudraLayoutRepeater>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="page_content" id="rs-page-content" role="main" tabIndex={-1} className="block rs-main">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1788753560389_x3pqf9a" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1788753588621_u0zi0vw">{inputs?.children}</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="footer" role="contentinfo" className="block rs-footer">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="footer_inner" className="flex items-center rs-footer-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="copyright" className="rs-copyright" as="p" content={((_bindingValue) => _bindingValue === undefined ? "© 2026 Rudra Scholar" : _bindingValue)(inputs?.copyrightText)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="socials" aria-label="Social links" className="flex items-center rs-socials">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreLink id="linkedin" className="rs-social-link" rel="noopener noreferrer" href={((_bindingValue) => _bindingValue === undefined ? "https://www.linkedin.com" : _bindingValue)(inputs?.linkedinUrl)} target="_blank">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="linkedin_text" className="rs-social-mark" as="span" content="in" />
</>)}
</RudraCoreLink>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreLink id="x" className="rs-social-link" rel="noopener noreferrer" href={((_bindingValue) => _bindingValue === undefined ? "https://x.com" : _bindingValue)(inputs?.xUrl)} target="_blank">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="x_text" className="rs-social-mark" as="span" content="X" />
</>)}
</RudraCoreLink>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1788753553389_7ev6zjd" />
</>)}
    </div>
  );
}
