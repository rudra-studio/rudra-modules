import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { Typography as RudraCoreTypography, Button as RudraCoreButton, Alert as RudraCoreAlert } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { Checkbox as RudraFormCheckbox, Select as RudraFormSelect, Input as RudraFormInput, Textarea as RudraFormTextarea, Form as RudraFormForm } from '@rudra-studio/rudra-form';
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

  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const authenticated = props.authenticated !== undefined ? props.authenticated : (props.data?.authenticated !== undefined ? props.data.authenticated : false);
  const mode = props.mode !== undefined ? props.mode : (props.data?.mode !== undefined ? props.data.mode : "login");
  const authProvider = props.authProvider !== undefined ? props.authProvider : (props.data?.authProvider !== undefined ? props.data.authProvider : "firebase-google");
  const returnPath = props.returnPath !== undefined ? props.returnPath : (props.data?.returnPath !== undefined ? props.data.returnPath : "/learn");
  const profile = props.profile !== undefined ? props.profile : (props.data?.profile !== undefined ? props.data.profile : {});
  const profileServiceEnabled = props.profileServiceEnabled !== undefined ? props.profileServiceEnabled : (props.data?.profileServiceEnabled !== undefined ? props.data.profileServiceEnabled : false);
  const inputs = { "locale": locale, "authenticated": authenticated, "mode": mode, "authProvider": authProvider, "returnPath": returnPath, "profile": profile, "profileServiceEnabled": profileServiceEnabled };
  const [message, set_message] = useState(() => structuredClone(""));
  const [registrationInitialValues, set_registrationInitialValues] = useState(() => structuredClone({"requestedRole":"student","verifiedEmail":""}));
  const [authenticatedProfile, set_authenticatedProfile] = useState(() => structuredClone({}));
  const [requestedRole, set_requestedRole] = useState(() => structuredClone("student"));
  const [showRegistrationBack, set_showRegistrationBack] = useState(() => structuredClone(false));
  const [showRegistrationStep3, set_showRegistrationStep3] = useState(() => structuredClone(false));
  const [showRegistrationStep1, set_showRegistrationStep1] = useState(() => structuredClone(true));
  const [registrationPrimaryLabel, set_registrationPrimaryLabel] = useState(() => structuredClone("Next"));
  const [showVerifiedRoleFields, set_showVerifiedRoleFields] = useState(() => structuredClone(false));
  const [registrationStep, set_registrationStep] = useState(() => structuredClone(1));
  const [showLogin, set_showLogin] = useState(() => structuredClone(true));
  const [showStudentFields, set_showStudentFields] = useState(() => structuredClone(true));
  const [showRegistration, set_showRegistration] = useState(() => structuredClone(false));
  const [showPending, set_showPending] = useState(() => structuredClone(false));
  const [showStudentInvitation, set_showStudentInvitation] = useState(() => structuredClone(true));
  const [showEducatorFields, set_showEducatorFields] = useState(() => structuredClone(false));
  const [accessMode, set_accessMode] = useState(() => structuredClone("login"));
  const [registrationProgress, set_registrationProgress] = useState(() => structuredClone("Step 1 of 3 · Profile"));
  const [busy, set_busy] = useState(() => structuredClone(false));
  const [showInstitutionFields, set_showInstitutionFields] = useState(() => structuredClone(false));
  const state = { "message": message, "registrationInitialValues": registrationInitialValues, "authenticatedProfile": authenticatedProfile, "requestedRole": requestedRole, "showRegistrationBack": showRegistrationBack, "showRegistrationStep3": showRegistrationStep3, "showRegistrationStep1": showRegistrationStep1, "registrationPrimaryLabel": registrationPrimaryLabel, "showVerifiedRoleFields": showVerifiedRoleFields, "registrationStep": registrationStep, "showLogin": showLogin, "showStudentFields": showStudentFields, "showRegistration": showRegistration, "showPending": showPending, "showStudentInvitation": showStudentInvitation, "showEducatorFields": showEducatorFields, "accessMode": accessMode, "registrationProgress": registrationProgress, "busy": busy, "showInstitutionFields": showInstitutionFields };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "message": { const next = typeof value === 'function' ? value(state.message) : value; state.message = next; set_message(next); return next; }
      case "registrationInitialValues": { const next = typeof value === 'function' ? value(state.registrationInitialValues) : value; state.registrationInitialValues = next; set_registrationInitialValues(next); return next; }
      case "authenticatedProfile": { const next = typeof value === 'function' ? value(state.authenticatedProfile) : value; state.authenticatedProfile = next; set_authenticatedProfile(next); return next; }
      case "requestedRole": { const next = typeof value === 'function' ? value(state.requestedRole) : value; state.requestedRole = next; set_requestedRole(next); return next; }
      case "showRegistrationBack": { const next = typeof value === 'function' ? value(state.showRegistrationBack) : value; state.showRegistrationBack = next; set_showRegistrationBack(next); return next; }
      case "showRegistrationStep3": { const next = typeof value === 'function' ? value(state.showRegistrationStep3) : value; state.showRegistrationStep3 = next; set_showRegistrationStep3(next); return next; }
      case "showRegistrationStep1": { const next = typeof value === 'function' ? value(state.showRegistrationStep1) : value; state.showRegistrationStep1 = next; set_showRegistrationStep1(next); return next; }
      case "registrationPrimaryLabel": { const next = typeof value === 'function' ? value(state.registrationPrimaryLabel) : value; state.registrationPrimaryLabel = next; set_registrationPrimaryLabel(next); return next; }
      case "showVerifiedRoleFields": { const next = typeof value === 'function' ? value(state.showVerifiedRoleFields) : value; state.showVerifiedRoleFields = next; set_showVerifiedRoleFields(next); return next; }
      case "registrationStep": { const next = typeof value === 'function' ? value(state.registrationStep) : value; state.registrationStep = next; set_registrationStep(next); return next; }
      case "showLogin": { const next = typeof value === 'function' ? value(state.showLogin) : value; state.showLogin = next; set_showLogin(next); return next; }
      case "showStudentFields": { const next = typeof value === 'function' ? value(state.showStudentFields) : value; state.showStudentFields = next; set_showStudentFields(next); return next; }
      case "showRegistration": { const next = typeof value === 'function' ? value(state.showRegistration) : value; state.showRegistration = next; set_showRegistration(next); return next; }
      case "showPending": { const next = typeof value === 'function' ? value(state.showPending) : value; state.showPending = next; set_showPending(next); return next; }
      case "showStudentInvitation": { const next = typeof value === 'function' ? value(state.showStudentInvitation) : value; state.showStudentInvitation = next; set_showStudentInvitation(next); return next; }
      case "showEducatorFields": { const next = typeof value === 'function' ? value(state.showEducatorFields) : value; state.showEducatorFields = next; set_showEducatorFields(next); return next; }
      case "accessMode": { const next = typeof value === 'function' ? value(state.accessMode) : value; state.accessMode = next; set_accessMode(next); return next; }
      case "registrationProgress": { const next = typeof value === 'function' ? value(state.registrationProgress) : value; state.registrationProgress = next; set_registrationProgress(next); return next; }
      case "busy": { const next = typeof value === 'function' ? value(state.busy) : value; state.busy = next; set_busy(next); return next; }
      case "showInstitutionFields": { const next = typeof value === 'function' ? value(state.showInstitutionFields) : value; state.showInstitutionFields = next; set_showInstitutionFields(next); return next; }
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
      case "message": _setState("message", updateNested); return value;
      case "registrationInitialValues": _setState("registrationInitialValues", updateNested); return value;
      case "authenticatedProfile": _setState("authenticatedProfile", updateNested); return value;
      case "requestedRole": _setState("requestedRole", updateNested); return value;
      case "showRegistrationBack": _setState("showRegistrationBack", updateNested); return value;
      case "showRegistrationStep3": _setState("showRegistrationStep3", updateNested); return value;
      case "showRegistrationStep1": _setState("showRegistrationStep1", updateNested); return value;
      case "registrationPrimaryLabel": _setState("registrationPrimaryLabel", updateNested); return value;
      case "showVerifiedRoleFields": _setState("showVerifiedRoleFields", updateNested); return value;
      case "registrationStep": _setState("registrationStep", updateNested); return value;
      case "showLogin": _setState("showLogin", updateNested); return value;
      case "showStudentFields": _setState("showStudentFields", updateNested); return value;
      case "showRegistration": _setState("showRegistration", updateNested); return value;
      case "showPending": _setState("showPending", updateNested); return value;
      case "showStudentInvitation": _setState("showStudentInvitation", updateNested); return value;
      case "showEducatorFields": _setState("showEducatorFields", updateNested); return value;
      case "accessMode": _setState("accessMode", updateNested); return value;
      case "registrationProgress": _setState("registrationProgress", updateNested); return value;
      case "busy": _setState("busy", updateNested); return value;
      case "showInstitutionFields": _setState("showInstitutionFields", updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"googleSignInRequested":{"properties":{"returnPath":{"type":"string"}},"required":["returnPath"],"type":"object"},"navigationRequested":{"properties":{"path":{"type":"string"}},"required":["path"],"type":"object"},"registrationCompleted":{"properties":{"isRegistered":{"type":"boolean"},"onboardingStatus":{"type":"string"},"redirectPath":{"type":"string"},"requestedRole":{"type":"string"},"roles":{"items":{"type":"string"},"type":"array"},"verificationStatus":{"type":"string"}},"type":"object"}};
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

  async function initializeAccessFlow(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const suppliedProfile = inputs.profile && typeof inputs.profile === 'object' ? inputs.profile : {};
const currentProfile = state.authenticatedProfile && typeof state.authenticatedProfile === 'object' ? state.authenticatedProfile : {};
const profile = Object.keys(suppliedProfile).length ? suppliedProfile : currentProfile;
let mode = ['login', 'registration', 'resolving'].includes(inputs.mode) ? inputs.mode : 'login';
if (inputs.authenticated === true && profile.isRegistered !== true && profile.email) mode = 'registration';
const showPending = mode === 'resolving' && profile.verificationStatus === 'pending';
return {
  mode,
  profile,
  initialValues: {
    verifiedEmail: String(profile.email || ''),
    requestedRole: String(profile.requestedRole || state.requestedRole || 'student'),
    termsAccepted: false,
    privacyAccepted: false
  },
  showLogin: mode === 'login',
  showRegistration: mode === 'registration',
  showPending
};
      })();
      stepResults["init_context"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("authenticatedProfile", stepResults.init_context.profile);
    _setState("registrationInitialValues", stepResults.init_context.initialValues);
    _setState("showStudentInvitation", stepResults.init_context.showStudentInvitation);
    _setState("accessMode", stepResults.init_context.mode);
    _setState("showLogin", stepResults.init_context.showLogin);
    _setState("showRegistration", stepResults.init_context.showRegistration);
    _setState("showPending", stepResults.init_context.showPending);
    return stepResults.init_context;
    return undefined;
  }

  async function handleRegistrationSubmit(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const step = Math.max(1, Math.min(3, Number(state.registrationStep || 1)));
return { isFinal: step === 3 };
      })();
      stepResults["wizard_decide"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.wizard_decide.isFinal) {
      await submitRegistration({ "values": args.values });
      return stepResults.wizard_submit;
    } else {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const current = Math.max(1, Math.min(3, Number(state.registrationStep || 1)));
const role = String((args.values && args.values.requestedRole) || state.requestedRole || 'student');
const step = Math.min(3, current + 1);
return {
  step, role,
  showStep1: step === 1,
  showStudent: step === 2 && role === 'student',
  showStudentInvite: role === 'student' && (step === 1 || step === 2),
  showEducator: step === 2 && role === 'educator',
  showInstitution: step === 2 && role === 'institution_admin',
  showVerified: step === 2 && (role === 'educator' || role === 'institution_admin'),
  showStep3: step === 3,
  showBack: step > 1,
  progress: step === 1 ? 'Step 1 of 3 · Profile' : step === 2 ? 'Step 2 of 3 · Role details' : 'Step 3 of 3 · Review and consent',
  primaryLabel: step === 3 ? 'Create account' : 'Next'
};
        })();
        stepResults["wizard_advance"] = customResult; vars["customCodeResult"] = customResult; }
      _setState("requestedRole", stepResults.wizard_advance.role);
      _setState("registrationStep", stepResults.wizard_advance.step);
      _setState("registrationProgress", stepResults.wizard_advance.progress);
      _setState("registrationPrimaryLabel", stepResults.wizard_advance.primaryLabel);
      _setState("showRegistrationBack", stepResults.wizard_advance.showBack);
      _setState("showRegistrationStep1", stepResults.wizard_advance.showStep1);
      _setState("showStudentFields", stepResults.wizard_advance.showStudent);
      _setState("showStudentInvitation", stepResults.wizard_advance.showStudentInvite);
      _setState("showEducatorFields", stepResults.wizard_advance.showEducator);
      _setState("showInstitutionFields", stepResults.wizard_advance.showInstitution);
      _setState("showVerifiedRoleFields", stepResults.wizard_advance.showVerified);
      _setState("showRegistrationStep3", stepResults.wizard_advance.showStep3);
      return stepResults.wizard_advance;
    }
    return undefined;
  }

  async function goBackRegistrationStep(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const current = Math.max(1, Math.min(3, Number(state.registrationStep || 1)));
const role = String(state.requestedRole || 'student');
const step = Math.max(1, current - 1);
return {
  step, role,
  showStep1: step === 1,
  showStudent: step === 2 && role === 'student',
  showStudentInvite: role === 'student' && (step === 1 || step === 2),
  showEducator: step === 2 && role === 'educator',
  showInstitution: step === 2 && role === 'institution_admin',
  showVerified: step === 2 && (role === 'educator' || role === 'institution_admin'),
  showStep3: step === 3,
  showBack: step > 1,
  progress: step === 1 ? 'Step 1 of 3 · Profile' : step === 2 ? 'Step 2 of 3 · Role details' : 'Step 3 of 3 · Review and consent',
  primaryLabel: step === 3 ? 'Create account' : 'Next'
};
      })();
      stepResults["wizard_back_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("registrationStep", stepResults.wizard_back_prepare.step);
    _setState("registrationProgress", stepResults.wizard_back_prepare.progress);
    _setState("registrationPrimaryLabel", stepResults.wizard_back_prepare.primaryLabel);
    _setState("showRegistrationBack", stepResults.wizard_back_prepare.showBack);
    _setState("showRegistrationStep1", stepResults.wizard_back_prepare.showStep1);
    _setState("showStudentFields", stepResults.wizard_back_prepare.showStudent);
    _setState("showStudentInvitation", stepResults.wizard_back_prepare.showStudentInvite);
    _setState("showEducatorFields", stepResults.wizard_back_prepare.showEducator);
    _setState("showInstitutionFields", stepResults.wizard_back_prepare.showInstitution);
    _setState("showVerifiedRoleFields", stepResults.wizard_back_prepare.showVerified);
    _setState("showRegistrationStep3", stepResults.wizard_back_prepare.showStep3);
    return stepResults.wizard_back_prepare;
    return undefined;
  }

  async function setRequestedRole(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const role = String(args.value || 'student');
const step = Math.max(1, Math.min(3, Number(state.registrationStep || 1)));
return { role, showStudentInvitation: role === 'student' && (step === 1 || step === 2) };
      })();
      stepResults["role_prepare"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("requestedRole", stepResults.role_prepare.role);
    _setState("showStudentInvitation", stepResults.role_prepare.showStudentInvitation);
    return stepResults.role_prepare.role;
    return undefined;
  }

  async function submitRegistration(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const raw = args.values && typeof args.values === 'object' ? args.values : {};
const profile = state.authenticatedProfile && typeof state.authenticatedProfile === 'object' ? state.authenticatedProfile : {};
const value = (name) => String(raw[name] || '').trim();
const requestedRole = value('requestedRole') || String(state.requestedRole || 'student');
const verifiedEmail = String(profile.email || value('verifiedEmail')).trim();
if (!verifiedEmail) throw new Error('Your verified Google email is missing. Please sign in again.');
if (!value('firstName') || !value('lastName')) throw new Error('First name and last name are required.');
if (!['student', 'educator', 'institution_admin'].includes(requestedRole)) throw new Error('Choose a valid Scholar role.');
if (requestedRole === 'educator' && (!value('qualification') || !value('subjectExpertise') || !value('professionalStatement') || !value('institutionName') || !value('kycEvidence') || !value('country'))) throw new Error('Complete all professor verification fields.');
if (requestedRole === 'institution_admin' && (!value('institutionLegalName') || !value('institutionDisplayName') || !value('institutionType') || !value('institutionWebsite') || !value('institutionEmailDomain') || !value('institutionContact') || !value('country'))) throw new Error('Complete all institution verification fields.');
if (raw.termsAccepted !== true || raw.privacyAccepted !== true) throw new Error('Accept the Terms of Service and Privacy Notice to continue.');
return { ...raw, verifiedEmail, requestedRole, termsAccepted: true, privacyAccepted: true };
      })();
      stepResults["reg_validate"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("busy", true);
    _setState("message", "");
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({"profile":"{{ stepResults.reg_validate }}"}, roots) || {};
      delete namedParameters["userIdentity"];
      delete namedParameters["verifiedEmail"];
      delete namedParameters["emailVerified"];
      delete namedParameters["providerId"];
      const parameters = [undefined, undefined, undefined, undefined, namedParameters["profile"]];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarSubmitOnboarding", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarSubmitOnboarding", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["reg_call"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows = stepResults.reg_call;
const row = Array.isArray(rows) ? rows[0] : rows;
const result = row && row.result ? row.result : row;
if (!result || result.isRegistered !== true) throw new Error((result && result.message) || 'Registration did not complete.');
return result;
      })();
      stepResults["reg_normalize"] = customResult; vars["customCodeResult"] = customResult; }
    void _emitOutput("registrationCompleted", { "isRegistered": stepResults.reg_normalize.isRegistered, "onboardingStatus": stepResults.reg_normalize.onboardingStatus, "redirectPath": stepResults.reg_normalize.redirectPath, "requestedRole": stepResults.reg_normalize.requestedRole, "roles": stepResults.reg_normalize.roles, "verificationStatus": stepResults.reg_normalize.verificationStatus }, false).catch(error => console.error('Module output delivery failed', error));
    void _emitOutput("navigationRequested", { "path": stepResults.reg_normalize.redirectPath }, false).catch(error => console.error('Module output delivery failed', error));
    _setState("authenticatedProfile", stepResults.reg_normalize);
    _setState("accessMode", "resolving");
    _setState("message", stepResults.reg_normalize.message);
    _setState("busy", false);
    return stepResults.reg_normalize;
    return undefined;
  }

  async function requestGoogleSignIn(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("busy", true);
    _setState("message", "");
    try {
      { const result = await _callAction("RudraAuth.signIn", { "provider": inputs.authProvider, "returnPath": inputs.returnPath }, []); stepResults["google_auth"] = result; vars["RudraAuth.signInResult"] = result; }
    } catch (error) {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
return { message: String((error && error.message) || 'Sign-in succeeded, but Scholar access could not be resolved. Please try again.') };
        })();
        stepResults["google_error"] = customResult; vars["customCodeResult"] = customResult; }
      _setState("message", stepResults.google_error.message);
      _setState("accessMode", "login");
      _setState("busy", false);
      return { "error": stepResults.google_error.message, "ok": false };
    }
    void _emitOutput("googleSignInRequested", { "returnPath": inputs.returnPath }, false).catch(error => console.error('Module output delivery failed', error));
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const response = stepResults.google_auth || {};
const source = response.user || response.currentUser || response.profile || response;
if (response.success === false || !source || !(source.uid || source.id || source.userId) || !source.email) {
  throw new Error(response.error || 'Google sign-in did not return a verified user.');
}
return {
  uid: source.uid || source.id || source.userId,
  email: source.email,
  displayName: source.displayName || source.name || '',
  emailVerified: source.emailVerified === true,
  providerId: source.providerId || response.providerId || 'google'
};
      })();
      stepResults["normalize_auth"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("authenticatedProfile", stepResults.normalize_auth);
    _setState("accessMode", "resolving");
    { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
      const namedParameters = _resolveRuntimeValue({}, roots) || {};
      delete namedParameters["userIdentity"];
      const parameters = [undefined];
      const queryExecutor = props.executeDatabaseQuery || props.runtime?.executeDatabaseQuery;
      let result;
      if (typeof queryExecutor === 'function') {
        result = await queryExecutor({ moduleId: "cmtma35av000204jocz6kqu0s", queryId: "scholarResolveCurrentAccess", parameters, namedParameters, signal: args.signal });
      } else {
        const queryResponse = await fetch("/api/modules/cmtma35av000204jocz6kqu0s/database/execute", { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ queryId: "scholarResolveCurrentAccess", parameters, namedParameters }), signal: args.signal });
        const queryPayload = await queryResponse.json().catch(() => ({}));
        if (!queryResponse.ok || queryPayload.success === false) throw new Error(queryPayload.error || 'Database query failed (' + queryResponse.status + ')');
        result = queryPayload.data;
      }
      stepResults["resolve_access"] = result; vars["queryResult"] = result; }
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const rows = stepResults.resolve_access;
const row = Array.isArray(rows) ? rows[0] : rows;
const resolved = row && row.result ? row.result : row;
const isRegistered = Boolean(resolved && resolved.isRegistered === true);
const profile = isRegistered ? resolved : { ...state.authenticatedProfile, isRegistered: false };
return {
  isRegistered,
  profile,
  registrationInitialValues: {
    verifiedEmail: String((profile && profile.email) || ''),
    requestedRole: 'student',
    termsAccepted: false,
    privacyAccepted: false
  },
  redirectPath: (resolved && resolved.redirectPath) || inputs.returnPath || '/learn'
};
      })();
      stepResults["normalize_access"] = customResult; vars["customCodeResult"] = customResult; }
    if (stepResults.normalize_access.isRegistered) {
      _setState("authenticatedProfile", stepResults.normalize_access.profile);
      _setState("busy", false);
      void _emitOutput("navigationRequested", { "path": stepResults.normalize_access.redirectPath }, false).catch(error => console.error('Module output delivery failed', error));
      return stepResults.normalize_access;
    } else {
      _setState("authenticatedProfile", stepResults.normalize_access.profile);
      _setState("registrationInitialValues", stepResults.normalize_access.registrationInitialValues);
      _setState("showStudentInvitation", true);
      _setState("accessMode", "registration");
      _setState("showLogin", false);
      _setState("showRegistration", true);
      _setState("showPending", false);
      _setState("busy", false);
      return stepResults.normalize_access;
    }
    return undefined;
  }

  const _localActions = {
    "initializeAccessFlow": initializeAccessFlow,
    "handleRegistrationSubmit": handleRegistrationSubmit,
    "goBackRegistrationStep": goBackRegistrationStep,
    "setRequestedRole": setRequestedRole,
    "submitRegistration": submitRegistration,
    "requestGoogleSignIn": requestGoogleSignIn,
  };
  const _localActionArguments = {
    "initializeAccessFlow": [],
    "handleRegistrationSubmit": ["values"],
    "goBackRegistrationStep": [],
    "setRequestedRole": ["value"],
    "submitRegistration": ["values"],
    "requestGoogleSignIn": [],
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
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; }
    void _runLifecycle("initialize_access_from_inputsinitializeAccessFlow", "takeLatest", (signal) => initializeAccessFlow({ signal }), 'Module input lifecycle failed:');
  }, [authenticated, mode, profile]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="root" className="rs-access">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="panel" className="rs-access-grid">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="story" className="rs-access-story">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="story_badge" aria-label="College mathematics proof of concept" className="rs-badge-row">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"GraduationCap"} id="story_badge_icon" size={14} color="#b8f7e7" strokeWidth={2} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="story_badge_label" className="rs-badge-label" as="span" content="College mathematics · POC" customColor="#eafff8" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="title" className="rs-access-title" customColor="#eafff8" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Learn mathematics with context, not shortcuts." : _bindingValue)(_scope?.i18n?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="subtitle" className="rs-muted" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Work through challenging problems step by step—with explanations that make the ideas stick." : _bindingValue)(_scope?.i18n?.subtitle)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreAlert id="trust" appearance="outlined" live="off" title="SQL is the authority" variant="neutral" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="form_area" className="rs-access-form">      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(showLogin)) && (<>      <RudraCoreTypography id="signin_eyebrow" className="rs-signin-eyebrow" content={((_bindingValue) => _bindingValue === undefined ? "WELCOME TO RUDRA SCHOLAR" : _bindingValue)(_scope?.i18n?.welcome)} as="p" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(showLogin)) && (<>      <RudraCoreTypography id="signin_title" className="rs-signin-title" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "Ready to think through the next problem?" : _bindingValue)(_scope?.i18n?.signInTitle)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(showLogin)) && (<>      <RudraCoreTypography id="signin_intro" className="rs-signin-intro" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Sign in to continue your lessons, saved work, and learning progress." : _bindingValue)(_scope?.i18n?.signInIntro)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(showLogin)) && (<>      <RudraCoreButton id="google" leftIcon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={{ "iconType": "url", "url": "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }} id="google_logo" size={20} strokeWidth={1.2} />
</>)}
</>} size="lg" label={((_bindingValue) => _bindingValue === undefined ? "Sign in with Google" : _bindingValue)(_scope?.i18n?.google)} theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(busy)} variant="outline" onAction={(...eventArgs) => _callAction("requestGoogleSignIn", {}, eventArgs)} ariaLabel="Sign in with Google" fullWidth={true} id="scholar-google-signin" rightIcon={false} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(showLogin)) && (<>      <RudraCoreTypography id="notice" className="rs-signin-note" as="p" content={((_bindingValue) => _bindingValue === undefined ? "First time here? After Google confirms your email, choose Student, Professor, or Institution administrator. Account setup takes about a minute." : _bindingValue)(_scope?.i18n?.signInHelp)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistration)) && (<>      <RudraCoreTypography id="heading" as="h3" content={((_bindingValue) => _bindingValue === undefined ? "Create your Scholar account" : _bindingValue)(_scope?.i18n?.profile)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistration)) && (<>      <RudraFormForm id="profile_form" className="rs-form" onSubmit={(...eventArgs) => _callAction("handleRegistrationSubmit", {}, eventArgs)} initialValues={((_bindingValue) => _bindingValue === undefined ? { "privacyAccepted": false, "requestedRole": "student", "termsAccepted": false, "verifiedEmail": "" } : _bindingValue)(registrationInitialValues)}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="registration_progress" className="rs-registration-progress" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Step 1 of 3 · Profile" : _bindingValue)(registrationProgress)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistrationStep1)) && (<>      <RudraFormInput id="email" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"Mail"} id="email_field_icon" strokeWidth={1.8} size={18} />
</>)}
</>} type="email" label="Verified Google email" value={((_bindingValue) => _bindingValue === undefined ? "Signed-in Google account" : _bindingValue)(authenticatedProfile?.email)} disabled={true} name="verifiedEmail" size="md" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistrationStep1)) && (<>      <RudraFormInput id="first_name" name="firstName" size="md" type="text" label="First name" required={true} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistrationStep1)) && (<>      <RudraFormInput id="last_name" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"UserRound"} id="last_name_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} label="Last name" required={true} name="lastName" size="md" type="text" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistrationStep1)) && (<>      <RudraFormSelect id="role" onChangeValue={(...eventArgs) => _callAction("setRequestedRole", {}, eventArgs)} name="requestedRole" label="Create account as" value="student" radius="md" options={[{"label":"Student","value":"student"},{"label":"Professor / teacher","value":"educator"},{"label":"Institution administrator","value":"institution_admin"}]} required={true} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(showStudentInvitation)) && (<>      <RudraFormInput id="institution" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"TicketCheck"} id="institution_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} placeholder="Enter a verified college invite code" name="institutionInvite" size="md" type="text" label="Institution invite code (optional)" required={false} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showEducatorFields)) && (<>      <RudraFormInput id="qualification" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"GraduationCap"} id="qualification_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} placeholder="For example, M.Sc. Mathematics" name="qualification" size="md" type="text" label="Highest relevant qualification" required={true} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showVerifiedRoleFields)) && (<>      <RudraCoreAlert id="kyc_intro" live="off" title="Role verification required" variant="neutral" appearance="outlined" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": false, "md": false, "sm": false })) && (<>      <RudraFormInput id="kyc" name="kycReference" size="md" type="text" label="Legacy verification field disabled" required={false} placeholder="Secure upload reference — do not paste document data" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showEducatorFields)) && (<>      <RudraFormInput id="expertise" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"Sigma"} id="expertise_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} type="text" label="Mathematics expertise" required={true} placeholder="For example, Linear Algebra, Calculus" name="subjectExpertise" size="md" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showEducatorFields)) && (<>      <RudraFormTextarea id="professional_statement" maxRows={6} minRows={3} required={true} autoResize={true} placeholder="Briefly describe your teaching experience." name="professionalStatement" size="md" label="Short professional statement" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showEducatorFields)) && (<>      <RudraFormInput id="educator_institution" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"School"} id="educator_institution_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} type="text" label="College or university" required={true} name="institutionName" size="md" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showEducatorFields)) && (<>      <RudraFormInput id="evidence" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"BadgeCheck"} id="evidence_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} name="kycEvidence" size="md" type="text" label="KYC verification evidence" required={true} placeholder="Use an institution email or public staff-profile URL" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showInstitutionFields)) && (<>      <RudraFormInput id="institution_legal_name" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"Landmark"} id="institution_legal_name_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} size="md" type="text" label="Institution legal name" required={true} name="institutionLegalName" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showInstitutionFields)) && (<>      <RudraFormInput id="institution_display_name" name="institutionDisplayName" size="md" type="text" label="Display name" required={true} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showInstitutionFields)) && (<>      <RudraFormSelect id="institution_type" value="college" options={[{"label":"College","value":"college"},{"label":"University","value":"university"}]} required={true} name="institutionType" label="Institution type" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showInstitutionFields)) && (<>      <RudraFormInput id="institution_website" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"Globe"} id="institution_website_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} placeholder="https://example.edu" name="institutionWebsite" size="md" type="url" label="Official website" required={true} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showInstitutionFields)) && (<>      <RudraFormInput id="institution_domain" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"AtSign"} id="institution_domain_field_icon" strokeWidth={1.8} size={18} />
</>)}
</>} name="institutionEmailDomain" size="md" type="text" label="Institutional email domain" required={true} placeholder="example.edu" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showInstitutionFields)) && (<>      <RudraFormInput id="institution_contact" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"Contact"} id="institution_contact_field_icon" strokeWidth={1.8} size={18} />
</>)}
</>} name="institutionContact" size="md" type="text" label="Administrative contact" required={true} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showVerifiedRoleFields)) && (<>      <RudraFormInput id="country" icon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"MapPin"} id="country_field_icon" size={18} strokeWidth={1.8} />
</>)}
</>} required={true} name="country" size="md" type="text" label="Country" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": false, "md": false, "sm": false })) && (<>      <RudraFormCheckbox id="age_confirmed" name="ageConfirmed" label="I confirm I am 18 or older." required={false} colorScheme="emerald" description="The initial proof of concept is limited to college learners and adult educators." />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistrationStep3)) && (<>      <RudraFormCheckbox id="terms" name="termsAccepted" label="I accept the Terms of Service." required={true} colorScheme="emerald" description="Required before an account can be created." />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showRegistrationStep3)) && (<>      <RudraFormCheckbox id="privacy" name="privacyAccepted" label="I have read and accept the Privacy Notice." required={true} colorScheme="emerald" description="Required before an account can be created." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="registration_actions" className="rs-registration-actions">      {isVisibleValue(showRegistrationBack) && (<>      <RudraCoreButton id="registration_back" leftIcon={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <UniversalIcon icon={"ArrowLeft"} id="registration_back_icon" size={18} strokeWidth={2} />
</>)}
</>} theme="auto" fullWidth={true} rightIcon={false} additionalAttributes={{}} id="scholar-registration-back" size="lg" variant="secondary" onAction={(...eventArgs) => _callAction("goBackRegistrationStep", {}, eventArgs)} type="button" label="Back" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="submit" id="scholar-registration-primary" theme="auto" loading={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(busy)} variant="primary" rightIcon={false} size="lg" type="submit" label={((_bindingValue) => _bindingValue === undefined ? "Next" : _bindingValue)(registrationPrimaryLabel)} leftIcon={false} fullWidth={true} />
</>)}
</RudraLayoutBox>
</>)}
</RudraFormForm>
</>)}
      {isVisibleValue(message) && (<>      <RudraCoreAlert id="message" live="polite" title="Scholar access" variant="neutral" appearance="outlined" />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(showPending)) && (<>      <RudraCoreAlert id="pending_notice" live="polite" title="Professor verification pending" variant="warning" appearance="outlined" />
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
