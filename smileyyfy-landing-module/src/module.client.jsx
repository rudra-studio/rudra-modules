import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { StepWalkthroughGrid as RudraCoreUiStepWalkthroughGrid, HeroBanner as RudraCoreUiHeroBanner, CoreNavbar as RudraCoreUiCoreNavbar, FeatureCardGrid as RudraCoreUiFeatureCardGrid } from '@rudra-studio/rudra-core-ui';

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

  const signedInUserEmail = props.signedInUserEmail !== undefined ? props.signedInUserEmail : (props.data?.signedInUserEmail !== undefined ? props.data.signedInUserEmail : "");
  const heroDescription = props.heroDescription !== undefined ? props.heroDescription : (props.data?.heroDescription !== undefined ? props.data.heroDescription : "Design expressive event invitations with optional RSVP tracking, romantic love proposals with floating hearts \u0026 playful buttons, and multilingual celebration pages without coding.");
  const featureCards = props.featureCards !== undefined ? props.featureCards : (props.data?.featureCards !== undefined ? props.data.featureCards : [{"actionLabel":"Open Invite Studio","badge":"Events","description":"Craft digital invitations for weddings, birthdays, and celebrations with countdowns, themes, and optional RSVP tracking.","icon":"💌","id":"invites","title":"Weddings, Birthdays \u0026 Invites"},{"actionLabel":"Try Proposal","badge":"Romance","description":"Create playful love proposal pages with personal notes, Polaroid memories, floating hearts, and runaway buttons.","icon":"💘","id":"proposals","title":"Interactive Love Proposals"},{"actionLabel":"Open Canvas","badge":"No-Code","description":"Arrange widgets on a visual canvas, switch languages live, and add looping songs or story animations.","icon":"🎨","id":"canvas","title":"Drag-and-Drop Canvas \u0026 i18n"}]);
  const signedInUserName = props.signedInUserName !== undefined ? props.signedInUserName : (props.data?.signedInUserName !== undefined ? props.data.signedInUserName : "");
  const heroTitle = props.heroTitle !== undefined ? props.heroTitle : (props.data?.heroTitle !== undefined ? props.data.heroTitle : "Create Wedding Invites, Love Proposals \u0026 Joyful Websites");
  const walkthroughSteps = props.walkthroughSteps !== undefined ? props.walkthroughSteps : (props.data?.walkthroughSteps !== undefined ? props.data.walkthroughSteps : [{"description":"Pick a wedding invite, love proposal, birthday bash, anniversary timeline, or baby shower layout.","step":"01","title":"Choose a Template or Preset"},{"description":"Customize text in multiple languages, add photos or sprite animations, and attach looping music.","step":"02","title":"Customize \u0026 Add Media"},{"description":"Share your link and track optional guest RSVPs whenever response tracking is enabled.","step":"03","title":"Share \u0026 Track Optional RSVPs"}]);
  const themeMode = props.themeMode !== undefined ? props.themeMode : (props.data?.themeMode !== undefined ? props.data.themeMode : "light");
  const inputs = { "signedInUserEmail": signedInUserEmail, "heroDescription": heroDescription, "featureCards": featureCards, "signedInUserName": signedInUserName, "heroTitle": heroTitle, "walkthroughSteps": walkthroughSteps, "themeMode": themeMode };
  const [activeNavId, set_activeNavId] = useState(() => structuredClone("overview"));
  const [activeTab, set_activeTab] = useState(() => structuredClone("hub"));
  const state = { "activeNavId": activeNavId, "activeTab": activeTab };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "activeNavId": { const next = typeof value === 'function' ? value(state.activeNavId) : value; state.activeNavId = next; set_activeNavId(next); return next; }
      case "activeTab": { const next = typeof value === 'function' ? value(state.activeTab) : value; state.activeTab = next; set_activeTab(next); return next; }
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
      case "activeNavId": _setState("activeNavId", updateNested); return value;
      case "activeTab": _setState("activeTab", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"out_navigate":{"properties":{"target":{"type":"string"}},"type":"object"}};
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/CoreNavbar/styles.css" precedence="rudra-library" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/FeatureCardGrid/styles.css" precedence="rudra-library" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/HeroBanner/styles.css" precedence="rudra-library" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core-ui@1.0.0/components/StepWalkthroughGrid/styles.css" precedence="rudra-library" />
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreUiCoreNavbar id="el_1795351921789_cjrbjpx" tagline="Invites, Proposals \u0026 Joyful Moments" navItems={[{"id":"overview","label":"Overview"},{"id":"features","label":"What It Does"},{"id":"templates","label":"Templates"}]} brandMark="😊" brandName="Smileyyfy" themeMode="light" activeItemId="overview" onSelectItem="fn: (id) =\u003e console.log('Nav:', id)" onToggleTheme="fn: (mode) =\u003e console.log('Theme:', mode)" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreUiFeatureCardGrid id="el_1795351931684_q0nrgzt" kicker="WHAT SMILEYYFY IS ABOUT" heading="Everything You Need for Memorable Pages" themeMode="light" subheading="Compose modular sections for event invitations, romantic proposals, and milestone celebrations." onCardAction="fn: (item) =\u003e console.log('Card:', item)" items={[{"actionLabel":"Open Invite Studio","badge":"Events","description":"Build shareable celebration pages with countdowns, event details, themes, and optional RSVP tracking.","icon":"💌","id":"invites","title":"Weddings, Birthdays \u0026 Invites"}]} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreUiHeroBanner id="el_1795351937148_bja38me" title="Create Wedding Invites, Love Proposals \u0026 Joyful Websites" themeMode="light" onSecondaryAction="fn: () =\u003e console.log('Secondary CTA')" primaryActionLabel="Start Building" badge="✨ Interactive Celebration Studio" layout="split" description="Design expressive event invitations with optional RSVP tracking, romantic proposal pages with floating hearts \u0026 flying buttons, and multilingual celebration pages without coding." onPrimaryAction="fn: () =\u003e console.log('Primary CTA')" secondaryActionLabel="Browse Templates" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreUiStepWalkthroughGrid id="el_1795352064212_7rd9cg7" heading="How It Works" themeMode="light" steps={[{"description":"Pick a wedding invite, love proposal, birthday celebration, or anniversary layout.","step":"01","title":"Choose a Template or Preset"}]} />
</>)}
    </div>
  );
}
