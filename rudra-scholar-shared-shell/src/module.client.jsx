import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Box as RudraLayoutBox, Repeater as RudraLayoutRepeater } from '@rudra-studio/rudra-layout';
import { Button as RudraCoreButton, Typography as RudraCoreTypography, Link as RudraCoreLink, Avatar as RudraCoreAvatar } from '@rudra-studio/rudra-core';

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

  const linkedinUrl = props.linkedinUrl !== undefined ? props.linkedinUrl : (props.data?.linkedinUrl !== undefined ? props.data.linkedinUrl : "https://www.linkedin.com");
  const xUrl = props.xUrl !== undefined ? props.xUrl : (props.data?.xUrl !== undefined ? props.data.xUrl : "https://x.com");
  const displayName = props.displayName !== undefined ? props.displayName : (props.data?.displayName !== undefined ? props.data.displayName : "My account");
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const children = props.children !== undefined ? props.children : (props.data?.children !== undefined ? props.data.children : undefined);
  const navOptions = props.navOptions !== undefined ? props.navOptions : (props.data?.navOptions !== undefined ? props.data.navOptions : [{"href":"/","label":"Explore"},{"href":"/browse","label":"Browse"},{"href":"/professor/context","label":"Professor"}]);
  const avatarUrl = props.avatarUrl !== undefined ? props.avatarUrl : (props.data?.avatarUrl !== undefined ? props.data.avatarUrl : "");
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const title = props.title !== undefined ? props.title : (props.data?.title !== undefined ? props.data.title : "Rudra Scholar");
  const copyrightText = props.copyrightText !== undefined ? props.copyrightText : (props.data?.copyrightText !== undefined ? props.data.copyrightText : "© 2026 Rudra Scholar");
  const inputs = { "linkedinUrl": linkedinUrl, "xUrl": xUrl, "displayName": displayName, "locale": locale, "children": children, "navOptions": navOptions, "avatarUrl": avatarUrl, "authenticated": authenticated, "title": title, "copyrightText": copyrightText };
  const [accountMenuOpen, set_accountMenuOpen] = useState(() => structuredClone(false));
  const [languageMenuOpen, set_languageMenuOpen] = useState(() => structuredClone(false));
  const state = { "accountMenuOpen": accountMenuOpen, "languageMenuOpen": languageMenuOpen };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "accountMenuOpen": { const next = typeof value === 'function' ? value(state.accountMenuOpen) : value; state.accountMenuOpen = next; set_accountMenuOpen(next); return next; }
      case "languageMenuOpen": { const next = typeof value === 'function' ? value(state.languageMenuOpen) : value; state.languageMenuOpen = next; set_languageMenuOpen(next); return next; }
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
      case "accountMenuOpen": _setState("accountMenuOpen", updateNested); return value;
      case "languageMenuOpen": _setState("languageMenuOpen", updateNested); return value;
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

  async function toggleLanguageMenu(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
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
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
return !Boolean(state.accountMenuOpen);
      })();
      stepResults["account_next"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("accountMenuOpen", stepResults.account_next);
    _setState("languageMenuOpen", false);
    return undefined;
  }

  async function navigate(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("accountMenuOpen", false);
    void _emitOutput("navigationRequested", { "path": args.path }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function signOut(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("accountMenuOpen", false);
    void _emitOutput("signOutRequested", { "source": "shared-shell" }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  async function selectLanguage(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("languageMenuOpen", false);
    void _emitOutput("localeChanged", { "locale": args.locale }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
  }

  const _localActions = {
    "toggleLanguageMenu": toggleLanguageMenu,
    "toggleAccountMenu": toggleAccountMenu,
    "navigate": navigate,
    "signOut": signOut,
    "selectLanguage": selectLanguage,
  };
  const _localActionArguments = {
    "toggleLanguageMenu": [],
    "toggleAccountMenu": [],
    "navigate": ["path"],
    "signOut": [],
    "selectLanguage": ["locale"],
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-layout@1.0.26/components/Box/styles.css" precedence="rudra-library" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-layout@1.0.26/components/Repeater/styles.css" precedence="rudra-library" />
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="shell" data-theme={((_bindingValue) => _bindingValue === undefined ? "light" : _bindingValue)($theme)} className="block rs-shell">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header" role="banner" className="block rs-header">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header_inner" className="grid rs-header-inner">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="brand" className="rs-brand" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Rudra Scholar" : _bindingValue)(inputs?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutRepeater id="nav" aria-label="Primary navigation" className="flex flex-wrap items-center gap-2 rs-nav" items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(inputs?.navOptions)}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="nav_item" className="rs-nav-button" rightIcon={false} size="sm" label={((_bindingValue) => _bindingValue === undefined ? "Link" : _bindingValue)(_scope?.item?.label)} theme="auto" variant="ghost" leftIcon={false} onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} />
</>)}
</>); })(); }}</RudraLayoutRepeater>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header_actions" className="flex items-center rs-header-actions">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="language_control" className="block rs-dropdown">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="language_trigger" className="rs-control-button" size="sm" label={undefined} onAction={(...eventArgs) => _callAction("toggleLanguageMenu", {}, eventArgs)} ariaLabel="Choose language" rightIcon={false} theme="auto" variant="ghost" leftIcon={false} />
</>)}
      {isVisibleValue(languageMenuOpen) && (<>      <RudraLayoutBox id="language_menu" role="menu" aria-label="Language" className="block rs-menu rs-language-menu">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="lang_en" className="rs-menu-button" size="sm" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("selectLanguage", {}, eventArgs)} fullWidth={true} rightIcon={false} label="English" leftIcon={false} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="lang_hi" className="rs-menu-button" size="sm" label="हिन्दी" theme="auto" variant="ghost" fullWidth={true} rightIcon={false} leftIcon={false} onAction={(...eventArgs) => _callAction("selectLanguage", {}, eventArgs)} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(undefined) && (<>      <RudraCoreButton id="sign_in" className="rs-nav-button rs-sign-in" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} rightIcon={false} size="sm" label="Sign in" theme="auto" variant="outline" leftIcon={false} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(_scope?.$auth?.isAuthenticated)) && (<>      <RudraLayoutBox id="account_control" className="block rs-dropdown">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="account_trigger" className="rs-avatar-button" size="sm" theme="auto" variant="ghost" leftIcon={false} onAction={(...eventArgs) => _callAction("toggleAccountMenu", {}, eventArgs)} ariaLabel="Open account menu" rightIcon={false}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreAvatar id="avatar" name={((_bindingValue) => _bindingValue === undefined ? "My account" : _bindingValue)(_scope?.$auth?.user?.profile?.name)} size="md" shape="circle" theme="auto" status="none" loading="lazy" alt={((_bindingValue) => _bindingValue === undefined ? "My account" : _bindingValue)(_scope?.$auth?.user?.profile?.name)} src={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.$auth?.user?.profile?.avatar)} />
</>)}
</RudraCoreButton>
</>)}
      {isVisibleValue(accountMenuOpen) && (<>      <RudraLayoutBox id="account_menu" role="menu" aria-label="Account" className="block rs-menu rs-account-menu">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="metrics" className="rs-menu-button" variant="ghost" onAction={(...eventArgs) => _callAction("navigate", {}, eventArgs)} rightIcon={false} size="sm" label="Usage \u0026 metrics" theme="auto" leftIcon={false} fullWidth={true} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="logout" className="rs-menu-button rs-danger" size="sm" label="Sign out" onAction={(...eventArgs) => _callAction("signOut", {}, eventArgs)} theme="auto" variant="ghost" leftIcon={false} fullWidth={true} rightIcon={false} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="page_content" id="rs-page-content" role="main" tabIndex={-1} className="block rs-main">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1788753560389_x3pqf9a">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="el_1788753588621_u0zi0vw" />
</>)}
</RudraLayoutBox>
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
