import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Input as RudraFormInput, Textarea as RudraFormTextarea, Checkbox as RudraFormCheckbox, Form as RudraFormForm } from '@rudra-studio/rudra-form';
import { Section as RudraLayoutSection, Box as RudraLayoutBox, Container as RudraLayoutContainer } from '@rudra-studio/rudra-layout';
import { Button as RudraCoreButton, Alert as RudraCoreAlert, Typography as RudraCoreTypography } from '@rudra-studio/rudra-core';

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

  const visualTheme = props.visualTheme !== undefined ? props.visualTheme : (props.data?.visualTheme !== undefined ? props.data.visualTheme : "auto");
  const submittingLabel = props.submittingLabel !== undefined ? props.submittingLabel : (props.data?.submittingLabel !== undefined ? props.data.submittingLabel : "Sending…");
  const emailLabel = props.emailLabel !== undefined ? props.emailLabel : (props.data?.emailLabel !== undefined ? props.data.emailLabel : "Work email");
  const successMessage = props.successMessage !== undefined ? props.successMessage : (props.data?.successMessage !== undefined ? props.data.successMessage : "Thank you — your message is with us.");
  const routeAttribution = props.routeAttribution !== undefined ? props.routeAttribution : (props.data?.routeAttribution !== undefined ? props.data.routeAttribution : "/");
  const title = props.title !== undefined ? props.title : (props.data?.title !== undefined ? props.data.title : "Let’s create something unforgettable.");
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const nameLabel = props.nameLabel !== undefined ? props.nameLabel : (props.data?.nameLabel !== undefined ? props.data.nameLabel : "Your name");
  const visible = props.visible !== undefined ? props.visible : (props.data?.visible !== undefined ? props.data.visible : true);
  const failureMessage = props.failureMessage !== undefined ? props.failureMessage : (props.data?.failureMessage !== undefined ? props.data.failureMessage : "We could not send your inquiry. Please try again.");
  const messageLabel = props.messageLabel !== undefined ? props.messageLabel : (props.data?.messageLabel !== undefined ? props.data.messageLabel : "What would you love to build?");
  const consentPolicyVersion = props.consentPolicyVersion !== undefined ? props.consentPolicyVersion : (props.data?.consentPolicyVersion !== undefined ? props.data.consentPolicyVersion : "1");
  const description = props.description !== undefined ? props.description : (props.data?.description !== undefined ? props.data.description : "Tell us what you are building. We will respond with a focused plan.");
  const submitEndpoint = props.submitEndpoint !== undefined ? props.submitEndpoint : (props.data?.submitEndpoint !== undefined ? props.data.submitEndpoint : "/api/rudra/leads");
  const consentLabel = props.consentLabel !== undefined ? props.consentLabel : (props.data?.consentLabel !== undefined ? props.data.consentLabel : "I agree to be contacted about this inquiry.");
  const submitLabel = props.submitLabel !== undefined ? props.submitLabel : (props.data?.submitLabel !== undefined ? props.data.submitLabel : "Send inquiry");
  const customClass = props.customClass !== undefined ? props.customClass : (props.data?.customClass !== undefined ? props.data.customClass : "block lumora-lead-shell");
  const companyLabel = props.companyLabel !== undefined ? props.companyLabel : (props.data?.companyLabel !== undefined ? props.data.companyLabel : "Company · Optional");
  const inputs = { "visualTheme": visualTheme, "submittingLabel": submittingLabel, "emailLabel": emailLabel, "successMessage": successMessage, "routeAttribution": routeAttribution, "title": title, "locale": locale, "nameLabel": nameLabel, "visible": visible, "failureMessage": failureMessage, "messageLabel": messageLabel, "consentPolicyVersion": consentPolicyVersion, "description": description, "submitEndpoint": submitEndpoint, "consentLabel": consentLabel, "submitLabel": submitLabel, "customClass": customClass, "companyLabel": companyLabel };
  const [showError, set_showError] = useState(() => structuredClone(false));
  const [isSubmitting, set_isSubmitting] = useState(() => structuredClone(false));
  const [submissionStatus, set_submissionStatus] = useState(() => structuredClone("idle"));
  const [errorMessage, set_errorMessage] = useState(() => structuredClone(""));
  const [lastSubmissionId, set_lastSubmissionId] = useState(() => structuredClone(""));
  const [showSuccess, set_showSuccess] = useState(() => structuredClone(false));
  const state = { "showError": showError, "isSubmitting": isSubmitting, "submissionStatus": submissionStatus, "errorMessage": errorMessage, "lastSubmissionId": lastSubmissionId, "showSuccess": showSuccess };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "showError": set_showError(value); return value;
      case "isSubmitting": set_isSubmitting(value); return value;
      case "submissionStatus": set_submissionStatus(value); return value;
      case "errorMessage": set_errorMessage(value); return value;
      case "lastSubmissionId": set_lastSubmissionId(value); return value;
      case "showSuccess": set_showSuccess(value); return value;
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
      case "showError": set_showError(updateNested); return value;
      case "isSubmitting": set_isSubmitting(updateNested); return value;
      case "submissionStatus": set_submissionStatus(updateNested); return value;
      case "errorMessage": set_errorMessage(updateNested); return value;
      case "lastSubmissionId": set_lastSubmissionId(updateNested); return value;
      case "showSuccess": set_showSuccess(updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"o_cancelled":{"properties":{"locale":{"type":"string"},"timestamp":{"type":"string"},"version":{"type":"number"}},"type":"object"},"o_submissionFailure":{"properties":{"code":{"type":"string"},"locale":{"type":"string"},"retryable":{"type":"boolean"},"timestamp":{"type":"string"},"version":{"type":"number"}},"type":"object"},"o_success":{"properties":{"locale":{"type":"string"},"routeAttribution":{"type":"string"},"submissionId":{"type":"string"},"timestamp":{"type":"string"},"version":{"type":"number"}},"type":"object"},"o_validationFailure":{"properties":{"fields":{"items":{"type":"string"},"type":"array"},"locale":{"type":"string"},"timestamp":{"type":"string"},"version":{"type":"number"}},"type":"object"}};
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

  async function submitLeadForm(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isSubmitting", true);
    _setState("showSuccess", false);
    _setState("showError", false);
    _setState("showSuccess", true);
    _setState("lastSubmissionId", steps.x4.0.id);
    _setState("isSubmitting", false);
    void _emitOutput("o_success", { "locale": inputs.locale, "routeAttribution": inputs.routeAttribution, "submissionId": steps.x4.0.id, "timestamp": steps.x4.0.created_at, "version": 1 }, false).catch(error => console.error('Module output delivery failed', error));
    return undefined;
    return undefined;
  }

  const _localActions = {
    "submitLeadForm": submitLeadForm,
  };
  const _localActionArguments = {
    "submitLeadForm": ["values"],
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
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(inputs?.visible)) && (<>      <RudraLayoutSection id="root" id="contact" data-theme={((_bindingValue) => _bindingValue === undefined ? "auto" : _bindingValue)(inputs?.visualTheme)} className={`${getResponsiveProp({sm: 'lead-root'}) || ''}`} as="section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="container" className={`${getResponsiveProp({sm: 'w-full px-6 py-20', md: 'px-10'}) || ''}`} centered={true} maxWidth="2xl">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="shell" data-layout="block" className={`${((_classValue) => _classValue == null || _classValue === false || typeof _classValue === 'object' ? '' : "" + String(_classValue))(((_bindingValue) => _bindingValue === undefined ? "block lumora-lead-shell" : _bindingValue)(inputs?.customClass))}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="grid" className={`${getResponsiveProp({sm: 'grid lead-grid'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="copy" className={`${getResponsiveProp({sm: 'block lead-copy'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className={`${getResponsiveProp({sm: 'lead-title'}) || ''}`} as="h2" content={inputs?.title} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="desc" className={`${getResponsiveProp({sm: 'lead-desc'}) || ''}`} as="p" content={inputs?.description} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="card" className={`${getResponsiveProp({sm: 'block lead-card'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormForm id="form" className="lead-form" onSubmit={(...eventArgs) => _callAction("submitLeadForm", {}, eventArgs)} initialValues={{"company":"","consent":false,"email":"","message":"","name":""}}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="fields" className={`${getResponsiveProp({sm: 'grid fields'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormInput id="name" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="name_icon" aria-hidden="true" data-lumora-field-icon="name" className={`${getResponsiveProp({sm: 'block lead-input-icon lead-icon-user'}) || ''}`} />
</>)}
</>} required={true} iconPosition="start" name="name" size="lg" type="text" label={inputs?.nameLabel} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormInput id="email" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="email_icon" aria-hidden="true" data-lumora-field-icon="email" className={`${getResponsiveProp({sm: 'block lead-input-icon lead-icon-mail'}) || ''}`} />
</>)}
</>} required={true} iconPosition="start" name="email" size="lg" type="email" label={inputs?.emailLabel} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormInput id="company" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="company_icon" aria-hidden="true" data-lumora-field-icon="company" className={`${getResponsiveProp({sm: 'block lead-input-icon lead-icon-company'}) || ''}`} />
</>)}
</>} name="company" size="lg" label={inputs?.companyLabel} iconPosition="start" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormTextarea id="message" name="message" size="lg" label={inputs?.messageLabel} maxRows={9} minRows={5} required={true} autoResize={true} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraFormCheckbox id="consent" required={true} colorScheme="purple" name="consent" label={inputs?.consentLabel} />
</>)}
      {isVisibleValue(showSuccess) && (<>      <RudraCoreAlert id="ok" live="polite" title="Inquiry received" variant="success" />
</>)}
      {isVisibleValue(showError) && (<>      <RudraCoreAlert id="err" live="assertive" title="Unable to send" variant="error" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="actions" className={`${getResponsiveProp({sm: 'flex actions'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="submit" className="lead-submit" size="lg" type="submit" label={inputs?.submitLabel} variant="primary" loadingText={inputs?.submittingLabel} theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSubmitting)} fullWidth={true} />
</>)}
</RudraLayoutBox>
</>)}
</RudraFormForm>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutContainer>
</>)}
</RudraLayoutSection>
</>)}
    </div>
  );
}
