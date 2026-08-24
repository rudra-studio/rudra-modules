import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Stack as RudraLayoutStack, Section as RudraLayoutSection, Container as RudraLayoutContainer, Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { MagneticHover as RudraAnimMagneticHover, Reveal as RudraAnimReveal } from '@rudra-studio/rudra-anim';
import { Link as RudraCoreLink, Typography as RudraCoreTypography, Badge as RudraCoreBadge } from '@rudra-studio/rudra-core';
import { FloatingShape as RudraThreeFloatingShape } from '@rudra-studio/rudra-three';

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
  const visible = props.visible !== undefined ? props.visible : (props.data?.visible !== undefined ? props.data.visible : true);
  const customClass = props.customClass !== undefined ? props.customClass : (props.data?.customClass !== undefined ? props.data.customClass : "lumora-content-shell");
  const trustText = props.trustText !== undefined ? props.trustText : (props.data?.trustText !== undefined ? props.data.trustText : "Realtime by design · SSR at the core");
  const eyebrow = props.eyebrow !== undefined ? props.eyebrow : (props.data?.eyebrow !== undefined ? props.data.eyebrow : "Built for experiences that move");
  const secondaryCta = props.secondaryCta !== undefined ? props.secondaryCta : (props.data?.secondaryCta !== undefined ? props.data.secondaryCta : "Explore the experience");
  const titleAccent = props.titleAccent !== undefined ? props.titleAccent : (props.data?.titleAccent !== undefined ? props.data.titleAccent : "lasting momentum.");
  const signalLabel = props.signalLabel !== undefined ? props.signalLabel : (props.data?.signalLabel !== undefined ? props.data.signalLabel : "LIVE SIGNAL");
  const primaryCta = props.primaryCta !== undefined ? props.primaryCta : (props.data?.primaryCta !== undefined ? props.data.primaryCta : "Start a conversation");
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const description = props.description !== undefined ? props.description : (props.data?.description !== undefined ? props.data.description : "A cinematic digital experience where immersive storytelling, thoughtful motion, and realtime insight work together.");
  const title = props.title !== undefined ? props.title : (props.data?.title !== undefined ? props.data.title : "Turn attention into");
  const inputs = { "visualTheme": visualTheme, "visible": visible, "customClass": customClass, "trustText": trustText, "eyebrow": eyebrow, "secondaryCta": secondaryCta, "titleAccent": titleAccent, "signalLabel": signalLabel, "primaryCta": primaryCta, "locale": locale, "description": description, "title": title };
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
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(inputs?.visible)) && (<>      <RudraLayoutSection id="hero_root" data-theme={((_bindingValue) => _bindingValue === undefined ? "auto" : _bindingValue)(inputs?.visualTheme)} className={`${getResponsiveProp({sm: 'lumora-hero'}) || ''}`} as="section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="glow_a" className={`${getResponsiveProp({sm: 'lumora-glow lumora-glow-a'}) || ''}`} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="glow_b" className={`${getResponsiveProp({sm: 'lumora-glow lumora-glow-b'}) || ''}`} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutContainer id="hero_container" className={`${getResponsiveProp({sm: 'w-full px-6 py-16', md: 'px-10', lg: 'px-12'}) || ''}`} as="div" centered={true} maxWidth="2xl">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="custom_shell" className={`${((_classValue) => _classValue == null || _classValue === false || typeof _classValue === 'object' ? '' : "" + String(_classValue))(((_bindingValue) => _bindingValue === undefined ? "lumora-content-shell" : _bindingValue)(inputs?.customClass))}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero_grid" className={`${getResponsiveProp({sm: 'lumora-grid'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraAnimReveal id="copy_reveal" className={`${getResponsiveProp({sm: 'w-full'}) || ''}`} once={true} delay={0.08} cascade="true" distance={28} duration={0.72} direction="up" staggerDelay={0.08}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutStack id="copy_stack" className={`${getResponsiveProp({sm: 'lumora-copy w-full'}) || ''}`} justify="center" direction="vertical" as="div" gap="6" align="start">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreBadge id="eyebrow_badge" className={`${getResponsiveProp({sm: 'lumora-eyebrow inline-flex px-3.5 py-1.5 text-[10px] bg-transparent text-purple-300 border-purple-500/40'}) || ''}`} label={((_bindingValue) => _bindingValue === undefined ? "Built for experiences that move" : _bindingValue)(inputs?.eyebrow)} ariaLabel={inputs?.eyebrow} as="span" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="hero_title" className={`${getResponsiveProp({sm: 'lumora-title'}) || ''}`} as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Turn attention into" : _bindingValue)(inputs?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="hero_accent" className={`${getResponsiveProp({sm: 'lumora-title lumora-accent'}) || ''}`} as="strong" content={((_bindingValue) => _bindingValue === undefined ? "lasting momentum." : _bindingValue)(inputs?.titleAccent)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="hero_description" className={`${getResponsiveProp({sm: 'lumora-description'}) || ''}`} as="p" content={((_bindingValue) => _bindingValue === undefined ? "A cinematic digital experience where immersive storytelling, thoughtful motion, and realtime insight work together." : _bindingValue)(inputs?.description)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="hero_actions" className={`${getResponsiveProp({sm: 'lumora-actions'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraAnimMagneticHover id="primary_magnetic" className={`${getResponsiveProp({sm: 'inline-block w-fit cursor-pointer'}) || ''}`} springStiffness={160} intensity="medium" springDamping={18}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreLink id="primary_link" className={`${getResponsiveProp({sm: 'lumora-cta lumora-cta-primary text-white text-base font-semibold no-underline'}) || ''}`} href="#contact" disabled={false}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="primary_label" className={`${getResponsiveProp({sm: 'text-base font-semibold'}) || ''}`} as="span" content={((_bindingValue) => _bindingValue === undefined ? "Start a conversation" : _bindingValue)(inputs?.primaryCta)} />
</>)}
</RudraCoreLink>
</>)}
</RudraAnimMagneticHover>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraAnimMagneticHover id="secondary_magnetic" className={`${getResponsiveProp({sm: 'inline-block w-fit cursor-pointer'}) || ''}`} intensity="light" springDamping={20} springStiffness={140}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreLink id="secondary_link" className={`${getResponsiveProp({sm: 'lumora-cta lumora-cta-secondary text-white text-base font-semibold no-underline'}) || ''}`} href="#experience" disabled={false}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="secondary_label" className={`${getResponsiveProp({sm: 'text-base font-semibold'}) || ''}`} as="span" content={((_bindingValue) => _bindingValue === undefined ? "Explore the experience" : _bindingValue)(inputs?.secondaryCta)} />
</>)}
</RudraCoreLink>
</>)}
</RudraAnimMagneticHover>
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="trust_text" className={`${getResponsiveProp({sm: 'lumora-trust text-xs font-semibold'}) || ''}`} as="p" content={((_bindingValue) => _bindingValue === undefined ? "Realtime by design · SSR at the core" : _bindingValue)(inputs?.trustText)} />
</>)}
</RudraLayoutStack>
</>)}
</RudraAnimReveal>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="visual_parallax" data-visual-frame="stable" className={`${getResponsiveProp({sm: 'relative w-full'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="visual_stage" className={`${getResponsiveProp({sm: 'lumora-visual'}) || ''}`}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="visual_orbit" aria-hidden={true} className={`${getResponsiveProp({sm: 'lumora-orbit'}) || ''}`} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraThreeFloatingShape id="floating_shape" className="lumora-shape" wireframe={false} interactive={false} shape="icosahedron" speed={0.24} meshColor="#8b5cf6" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="signal_text" aria-label="Live signal status" className={`${getResponsiveProp({sm: 'lumora-signal text-xs font-semibold'}) || ''}`} as="span" content={((_bindingValue) => _bindingValue === undefined ? "LIVE SIGNAL" : _bindingValue)(inputs?.signalLabel)} />
</>)}
</RudraLayoutBox>
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
