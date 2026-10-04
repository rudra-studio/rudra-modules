import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { ActivityItem as LeadflowUiActivityItem, OrganizationLogo as LeadflowUiOrganizationLogo, ChartCard as LeadflowUiChartCard } from '@rudra-studio/leadflow-ui';
import { Typography as RudraCoreTypography, Button as RudraCoreButton } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
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

  const heroDescription = props.heroDescription !== undefined ? props.heroDescription : (props.data?.heroDescription !== undefined ? props.data.heroDescription : "Capture, nurture and convert more leads with AI-powered outreach and CRM.");
  const brandName = props.brandName !== undefined ? props.brandName : (props.data?.brandName !== undefined ? props.data.brandName : "LeadFlow");
  const redirectTo = props.redirectTo !== undefined ? props.redirectTo : (props.data?.redirectTo !== undefined ? props.data.redirectTo : "/");
  const heroTitle = props.heroTitle !== undefined ? props.heroTitle : (props.data?.heroTitle !== undefined ? props.data.heroTitle : "Turn conversations into pipeline");
  const inputs = { "heroDescription": heroDescription, "brandName": brandName, "redirectTo": redirectTo, "heroTitle": heroTitle };
  const [isLoading, set_isLoading] = useState(() => structuredClone(false));
  const state = { "isLoading": isLoading };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "isLoading": { const next = typeof value === 'function' ? value(state.isLoading) : value; state.isLoading = next; set_isLoading(next); return next; }
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
      case "isLoading": _setState("isLoading", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"auth_failure":{"properties":{"message":{"type":"string"},"provider":{"type":"string"}},"required":["provider","message"],"type":"object"},"auth_success":{"properties":{"provider":{"type":"string"},"user":{"type":"object"}},"required":["provider"],"type":"object"}};
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

  async function signInWithGoogle(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let authResult;
    _setState("isLoading", true);
    try {
      { const result = await _callAction("RudraAuth.signIn", { "email": "", "password": "", "provider": "firebase-google" }, []); stepResults["auth_google_auth"] = result; vars["authResult"] = result; }
    } catch (_caughtError) {
      const error = { message: _caughtError instanceof Error ? _caughtError.message : String(_caughtError), name: _caughtError instanceof Error ? _caughtError.name : 'Error', status: typeof _caughtError?.status === 'number' ? _caughtError.status : undefined, stepId: "auth_google_auth" };
      vars.error = error; stepResults["auth_google_auth"] = { error };
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
return { message: String((error && error.message) || 'Unable to sign in with Google.') };
        })();
        stepResults["auth_google_error"] = customResult; vars["customCodeResult"] = customResult; }
      _setState("isLoading", false);
      void _emitOutput("auth_failure", { "message": stepResults.auth_google_error.message, "provider": "google" }, false).catch(error => console.error('Module output delivery failed', error));
      return { "message": stepResults.auth_google_error.message, "success": false };
      return undefined;
    }
    _setState("isLoading", false);
    void _emitOutput("auth_success", { "provider": "google", "user": vars.authResult.user }, false).catch(error => console.error('Module output delivery failed', error));
    { const result = await _callAction("RudraSystem.navigate", { "path": inputs.redirectTo, "replace": true }, []); stepResults["auth_google_navigate"] = result; vars["RudraSystem.navigateResult"] = result; }
    return vars.authResult;
    return undefined;
  }

  const _localActions = {
    "signInWithGoogle": signInWithGoogle,
  };
  const _localActionArguments = {
    "signInWithGoogle": [],
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
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_shell" className={`${getResponsiveProp({sm: 'lf-auth-module'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_header" className={`${getResponsiveProp({sm: 'lf-auth-header'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <LeadflowUiOrganizationLogo id="auth_brand" className={`${getResponsiveProp({sm: 'lf-auth-brand'}) || ''}`} disabled={true} editable={false} initials="LF" showName={true} variant={getResponsiveProp({"lg":"identity","sm":"identity"})} ariaLabel="LeadFlow" showSubtitle={false} organizationId="leadflow" name={inputs?.brandName} size={getResponsiveProp({"sm":"large"})} shape="rounded" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_grid" className={`${getResponsiveProp({sm: 'lf-auth-grid'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_story" className={`${getResponsiveProp({sm: 'lf-auth-story'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="auth_eyebrow" className={`${getResponsiveProp({sm: 'lf-auth-eyebrow'}) || ''}`} as="p" content="BUILT FOR MODERN REVENUE TEAMS" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="auth_title" className={`${getResponsiveProp({sm: 'lf-auth-title'}) || ''}`} as="h1" content={((_bindingValue) => _bindingValue === undefined ? "Turn conversations into pipeline" : _bindingValue)(inputs?.heroTitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="auth_description" className={`${getResponsiveProp({sm: 'lf-auth-description'}) || ''}`} as="p" content={((_bindingValue) => _bindingValue === undefined ? "Capture, nurture and convert more leads with AI-powered outreach and CRM." : _bindingValue)(inputs?.heroDescription)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_features" className={`${getResponsiveProp({sm: 'lf-auth-features'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <LeadflowUiActivityItem id="auth_feature_pipeline" showConnector={false} id="pipeline" icon={<UniversalIcon icon={"PanelsTopLeft"} />} type="lead" title="Manage your pipeline" ariaLabel="Manage your pipeline" clickable={false} description="Keep every opportunity moving with a clear shared view." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <LeadflowUiActivityItem id="auth_feature_automation" id="automation" icon={<UniversalIcon icon={"Zap"} />} type="email" title="Automate outreach" ariaLabel="Automate outreach" clickable={false} description="Reach the right lead at the right moment." showConnector={false} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <LeadflowUiActivityItem id="auth_feature_growth" type="won" title="Close more deals" ariaLabel="Close more deals" clickable={false} description="Turn coordinated conversations into measurable growth." showConnector={false} id="growth" icon={<UniversalIcon icon={"UsersRound"} />} />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_action_column" className={`${getResponsiveProp({sm: 'lf-auth-action-column'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_action_panel" className={`${getResponsiveProp({sm: 'lf-auth-action-panel'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="auth_google_button" leftIcon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={getResponsiveProp({"sm":{"iconType":"svg","svgContent":"\u003csvg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" style=\"width:100%;height:100%;\" stroke-width=\"1.2\"\u003e\u003cpath d=\"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\" fill=\"#4285F4\"\u003e\u003c/path\u003e\u003cpath d=\"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\" fill=\"#34A853\"\u003e\u003c/path\u003e\u003cpath d=\"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\" fill=\"#FBBC05\"\u003e\u003c/path\u003e\u003cpath d=\"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\" fill=\"#EA4335\"\u003e\u003c/path\u003e\u003cpath d=\"M1 1h22v22H1z\" fill=\"none\"\u003e\u003c/path\u003e\u003c/svg\u003e"}})} id="auth_google_icon" size={getResponsiveProp({"lg":21,"sm":20})} strokeWidth={getResponsiveProp({"lg":1.2,"sm":1.2})} />
</>)}
</>} loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isLoading)} variant="outline" onAction={(...eventArgs) => _callAction("signInWithGoogle", {}, eventArgs)} ariaLabel="Sign in with Google" fullWidth={true} rightIcon={false} loadingText="Signing in…" size="lg" theme="auto">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="auth_google_label" className="lf-google-label p-1" as="span" content="Sign in with Google" />
</>)}
</RudraCoreButton>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="auth_legal" className={`${getResponsiveProp({sm: 'lf-auth-legal'}) || ''}`} as="p" content="By continuing, you agree to the Terms of Use and Privacy Policy." />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="auth_visuals" className={`${getResponsiveProp({sm: 'lf-auth-visuals'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <LeadflowUiChartCard id="auth_pipeline_chart" className={`${getResponsiveProp({lg: '-rotate-3'}) || ''}`} value="₹18.4L" chartType={getResponsiveProp({"lg":"bar","sm":"bar"})} trendValue={getResponsiveProp({"lg":"12%","sm":"12.5%"})} description="Current pipeline value by stage" size={getResponsiveProp({"lg":"small","sm":"medium"})} title="Pipeline Overview" trend="up" emptyText="No pipeline data available" showTooltip={true} showLabels={true} trendLabel="vs last month" data={getResponsiveProp({"lg":{"type":"static","value":[{"displayValue":"₹3.2L","label":"New","value":320000},{"displayValue":"₹4.8L","label":"Qualified","value":480000},{"displayValue":"₹3.9L","label":"Proposal","value":390000},{"displayValue":"₹2.7L","label":"Negotiation","value":270000},{"displayValue":"₹4.2L","label":"Won","value":420000}]},"sm":{"type":"static","value":[{"displayValue":"₹3.2L","label":"New","value":320000},{"displayValue":"₹4.8L","label":"Qualified","value":480000},{"displayValue":"₹3.9L","label":"Proposal","value":390000},{"displayValue":"₹2.7L","label":"Negotiation","value":270000},{"displayValue":"₹4.2L","label":"Won","value":420000}]}})} accent="indigo" showGrid={true} />
</>)}
</RudraLayoutBox>
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
