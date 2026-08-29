import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { ToastStack as RudraWidgetsToastStack, MessageComposer as RudraWidgetsMessageComposer, MessageBubble as RudraWidgetsMessageBubble } from '@rudra-studio/rudra-widgets';
import { Button as RudraCoreButton, IconButton as RudraCoreIconButton, Alert as RudraCoreAlert, Surface as RudraCoreSurface, Typography as RudraCoreTypography } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox, Flex as RudraLayoutFlex, Repeater as RudraLayoutRepeater, ScrollArea as RudraLayoutScrollArea } from '@rudra-studio/rudra-layout';

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

  const defaultOpen = props.defaultOpen !== undefined ? props.defaultOpen : (props.data?.defaultOpen !== undefined ? props.data.defaultOpen : false);
  const visible = props.visible !== undefined ? props.visible : (props.data?.visible !== undefined ? props.data.visible : true);
  const locale = props.locale !== undefined ? props.locale : (props.data?.locale !== undefined ? props.data.locale : "en");
  const contextEndpoint = props.contextEndpoint !== undefined ? props.contextEndpoint : (props.data?.contextEndpoint !== undefined ? props.data.contextEndpoint : "/api/ai-context");
  const aiProvider = props.aiProvider !== undefined ? props.aiProvider : (props.data?.aiProvider !== undefined ? props.data.aiProvider : "anthropic");
  const showToolActivity = props.showToolActivity !== undefined ? props.showToolActivity : (props.data?.showToolActivity !== undefined ? props.data.showToolActivity : true);
  const visualTheme = props.visualTheme !== undefined ? props.visualTheme : (props.data?.visualTheme !== undefined ? props.data.visualTheme : "aurora");
  const customClass = props.customClass !== undefined ? props.customClass : (props.data?.customClass !== undefined ? props.data.customClass : "");
  const disabled = props.disabled !== undefined ? props.disabled : (props.data?.disabled !== undefined ? props.data.disabled : false);
  const sessionId = props.sessionId !== undefined ? props.sessionId : (props.data?.sessionId !== undefined ? props.data.sessionId : "");
  const placeholder = props.placeholder !== undefined ? props.placeholder : (props.data?.placeholder !== undefined ? props.data.placeholder : "Ask Lumora anything…");
  const systemPrompt = props.systemPrompt !== undefined ? props.systemPrompt : (props.data?.systemPrompt !== undefined ? props.data.systemPrompt : "You are Lumora, a concise and helpful AI assistant. Provide clear, accurate, and professional responses.");
  const maxMessages = props.maxMessages !== undefined ? props.maxMessages : (props.data?.maxMessages !== undefined ? props.data.maxMessages : 100);
  const anthropicModel = props.anthropicModel !== undefined ? props.anthropicModel : (props.data?.anthropicModel !== undefined ? props.data.anthropicModel : "claude-sonnet-4-5");
  const contextScopeKey = props.contextScopeKey !== undefined ? props.contextScopeKey : (props.data?.contextScopeKey !== undefined ? props.data.contextScopeKey : "");
  const assistantName = props.assistantName !== undefined ? props.assistantName : (props.data?.assistantName !== undefined ? props.data.assistantName : "Lumora");
  const title = props.title !== undefined ? props.title : (props.data?.title !== undefined ? props.data.title : "Lumora Assistant");
  const toolManifest = props.toolManifest !== undefined ? props.toolManifest : (props.data?.toolManifest !== undefined ? props.data.toolManifest : []);
  const allowAttachments = props.allowAttachments !== undefined ? props.allowAttachments : (props.data?.allowAttachments !== undefined ? props.data.allowAttachments : false);
  const welcomeMessage = props.welcomeMessage !== undefined ? props.welcomeMessage : (props.data?.welcomeMessage !== undefined ? props.data.welcomeMessage : "Hi — how can I help?");
  const chatEndpoint = props.chatEndpoint !== undefined ? props.chatEndpoint : (props.data?.chatEndpoint !== undefined ? props.data.chatEndpoint : "/api/ai/chat");
  const contextNamespace = props.contextNamespace !== undefined ? props.contextNamespace : (props.data?.contextNamespace !== undefined ? props.data.contextNamespace : "universal-ai-chatbot");
  const contextDatabaseEnabled = props.contextDatabaseEnabled !== undefined ? props.contextDatabaseEnabled : (props.data?.contextDatabaseEnabled !== undefined ? props.data.contextDatabaseEnabled : false);
  const maxOutputTokens = props.maxOutputTokens !== undefined ? props.maxOutputTokens : (props.data?.maxOutputTokens !== undefined ? props.data.maxOutputTokens : 1024);
  const geminiModel = props.geminiModel !== undefined ? props.geminiModel : (props.data?.geminiModel !== undefined ? props.data.geminiModel : "gemini-2.5-flash");
  const presentationMode = props.presentationMode !== undefined ? props.presentationMode : (props.data?.presentationMode !== undefined ? props.data.presentationMode : "floating");
  const contextCacheTtlSeconds = props.contextCacheTtlSeconds !== undefined ? props.contextCacheTtlSeconds : (props.data?.contextCacheTtlSeconds !== undefined ? props.data.contextCacheTtlSeconds : 60);
  const permissions = props.permissions !== undefined ? props.permissions : (props.data?.permissions !== undefined ? props.data.permissions : {});
  const context = props.context !== undefined ? props.context : (props.data?.context !== undefined ? props.data.context : {});
  const requestHeaders = props.requestHeaders !== undefined ? props.requestHeaders : (props.data?.requestHeaders !== undefined ? props.data.requestHeaders : {});
  const inputs = { "defaultOpen": defaultOpen, "visible": visible, "locale": locale, "contextEndpoint": contextEndpoint, "aiProvider": aiProvider, "showToolActivity": showToolActivity, "visualTheme": visualTheme, "customClass": customClass, "disabled": disabled, "sessionId": sessionId, "placeholder": placeholder, "systemPrompt": systemPrompt, "maxMessages": maxMessages, "anthropicModel": anthropicModel, "contextScopeKey": contextScopeKey, "assistantName": assistantName, "title": title, "toolManifest": toolManifest, "allowAttachments": allowAttachments, "welcomeMessage": welcomeMessage, "chatEndpoint": chatEndpoint, "contextNamespace": contextNamespace, "contextDatabaseEnabled": contextDatabaseEnabled, "maxOutputTokens": maxOutputTokens, "geminiModel": geminiModel, "presentationMode": presentationMode, "contextCacheTtlSeconds": contextCacheTtlSeconds, "permissions": permissions, "context": context, "requestHeaders": requestHeaders };
  const [toasts, set_toasts] = useState(() => structuredClone([]));
  const [pendingAction, set_pendingAction] = useState(() => structuredClone({}));
  const [runtimeContext, set_runtimeContext] = useState(() => structuredClone({}));
  const [themeClass, set_themeClass] = useState(() => structuredClone("lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora"));
  const [errorMessage, set_errorMessage] = useState(() => structuredClone(""));
  const [isSending, set_isSending] = useState(() => structuredClone(false));
  const [messages, set_messages] = useState(() => structuredClone([]));
  const [showLauncher, set_showLauncher] = useState(() => structuredClone(true));
  const [isFloating, set_isFloating] = useState(() => structuredClone(true));
  const [hasInitialized, set_hasInitialized] = useState(() => structuredClone(false));
  const [isOpen, set_isOpen] = useState(() => structuredClone(false));
  const state = { "toasts": toasts, "pendingAction": pendingAction, "runtimeContext": runtimeContext, "themeClass": themeClass, "errorMessage": errorMessage, "isSending": isSending, "messages": messages, "showLauncher": showLauncher, "isFloating": isFloating, "hasInitialized": hasInitialized, "isOpen": isOpen };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "toasts": set_toasts(value); return value;
      case "pendingAction": set_pendingAction(value); return value;
      case "runtimeContext": set_runtimeContext(value); return value;
      case "themeClass": set_themeClass(value); return value;
      case "errorMessage": set_errorMessage(value); return value;
      case "isSending": set_isSending(value); return value;
      case "messages": set_messages(value); return value;
      case "showLauncher": set_showLauncher(value); return value;
      case "isFloating": set_isFloating(value); return value;
      case "hasInitialized": set_hasInitialized(value); return value;
      case "isOpen": set_isOpen(value); return value;
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
      case "toasts": set_toasts(updateNested); return value;
      case "pendingAction": set_pendingAction(updateNested); return value;
      case "runtimeContext": set_runtimeContext(updateNested); return value;
      case "themeClass": set_themeClass(updateNested); return value;
      case "errorMessage": set_errorMessage(updateNested); return value;
      case "isSending": set_isSending(updateNested); return value;
      case "messages": set_messages(updateNested); return value;
      case "showLauncher": set_showLauncher(updateNested); return value;
      case "isFloating": set_isFloating(updateNested); return value;
      case "hasInitialized": set_hasInitialized(updateNested); return value;
      case "isOpen": set_isOpen(updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _outputSchemas = {"actionCompleted":{"properties":{"actionId":{"type":"string"},"result":{"type":"object"}},"type":"object"},"actionRequested":{"properties":{"action":{"type":"object"}},"type":"object"},"attachmentSelected":{"additionalProperties":true,"properties":{"files":{"type":"array"}},"type":"object"},"contextChanged":{"type":"object"},"contextResolved":{"additionalProperties":true,"properties":{"cache":{"type":"object"},"context":{"type":"object"},"revision":{"type":"number"},"sessionId":{"type":"string"},"systemPrompt":{"type":"string"},"updatedAt":{"type":"string"}},"required":["context","revision","cache","sessionId"],"type":"object"},"contextUpdated":{"additionalProperties":true,"properties":{"cache":{"type":"object"},"context":{"type":"object"},"revision":{"type":"number"},"sessionId":{"type":"string"},"systemPrompt":{"type":"string"},"updatedAt":{"type":"string"}},"required":["context","revision","cache","sessionId"],"type":"object"},"conversationCleared":{"type":"object"},"error":{"properties":{"code":{"type":"string"},"message":{"type":"string"}},"type":"object"},"escalationRequested":{"additionalProperties":true,"properties":{"action":{"type":"object"},"message":{"type":"object"}},"type":"object"},"messageReceived":{"properties":{"message":{"type":"object"}},"type":"object"},"responseCancelled":{"additionalProperties":true,"properties":{"reason":{"type":"string"}},"type":"object"}};
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

  async function clearConversation(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("messages", inputs.welcomeMessage ? [{ id: 'welcome-' + Date.now(), role: 'assistant', sender: inputs.assistantName || 'Assistant', variant: 'incoming', content: inputs.welcomeMessage, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }] : []);
    _setState("pendingAction", {  });
    _setState("errorMessage", "");
    void _emitOutput("conversationCleared", { "sessionId": inputs.sessionId }, false).catch(error => console.error('Module output delivery failed', error));
    return { "cleared": true };
    return undefined;
  }

  async function sendMessage(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const value = args.message && typeof args.message === 'object' ? (args.message.text ?? args.message.content ?? '') : args.message; const text = String(value ?? '').trim(); return { type: 'text', text };
      })();
      stepResults["normalize_user"] = customResult; vars["customCodeResult"] = customResult; }
    if (!!stepResults.normalize_user.text) {
      _setState("isSending", true);
      _setState("errorMessage", "");
      _setState("messages", [...state.messages, { id: 'user-' + Date.now(), role: 'user', sender: 'You', variant: 'outgoing', content: stepResults.normalize_user.text, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }].slice(-inputs.maxMessages));
      if (inputs.contextDatabaseEnabled === true) {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const dbRaw = stepResults.read_context_db; const dbRows = Array.isArray(dbRaw) ? dbRaw : (dbRaw && Array.isArray(dbRaw.data) ? dbRaw.data : []); const dbRow = dbRows[0] && typeof dbRows[0] === 'object' ? dbRows[0] : null; const direct = stepResults.use_direct_context && typeof stepResults.use_direct_context === 'object' ? stepResults.use_direct_context : {}; const useDb = inputs.contextDatabaseEnabled === true; const payload = useDb && dbRow ? dbRow : direct; const fallbackContext = inputs.context && typeof inputs.context === 'object' && !Array.isArray(inputs.context) ? inputs.context : {}; const context = payload.context && typeof payload.context === 'object' && !Array.isArray(payload.context) ? payload.context : fallbackContext; const systemPrompt = typeof payload.systemPrompt === 'string' && payload.systemPrompt.trim() ? payload.systemPrompt : (typeof inputs.systemPrompt === 'string' && inputs.systemPrompt.trim() ? inputs.systemPrompt : 'You are a concise and helpful AI assistant.'); return { context, systemPrompt, revision: Number(payload.revision || 0), updatedAt: typeof payload.updatedAt === 'string' && payload.updatedAt ? payload.updatedAt : new Date().toISOString(), cache: { enabled: false, hit: false, source: useDb ? 'database' : 'direct' }, source: useDb ? 'database' : 'direct', found: Boolean(dbRow) };
          })();
          stepResults["normalize_context"] = customResult; vars["customCodeResult"] = customResult; }
        _setState("runtimeContext", stepResults.normalize_context.context);
        void _emitOutput("contextResolved", { "cache": stepResults.normalize_context.cache, "context": stepResults.normalize_context.context, "revision": stepResults.normalize_context.revision, "sessionId": inputs.sessionId, "systemPrompt": stepResults.normalize_context.systemPrompt, "updatedAt": stepResults.normalize_context.updatedAt }, false).catch(error => console.error('Module output delivery failed', error));
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const items = Array.isArray(state.messages) ? state.messages : []; const conversational = items.filter((item) => item && (item.role === 'user' || item.role === 'assistant')); const firstUser = conversational.findIndex((item) => item.role === 'user'); const trimmed = firstUser >= 0 ? conversational.slice(firstUser) : []; return { anthropicMessages: trimmed.map((item) => ({ role: item.role === 'assistant' ? 'assistant' : 'user', content: String(item.content || '') })), geminiContents: trimmed.map((item) => ({ role: item.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(item.content || '') }] })) };
          })();
          stepResults["build_provider_payloads"] = customResult; vars["customCodeResult"] = customResult; }
        if (String(inputs.aiProvider || 'anthropic').toLowerCase() === 'anthropic') {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const argumentValues = _resolveRuntimeValue({"context":"{{ stepResults.normalize_context.context }}","maxTokens":"{{ inputs.maxOutputTokens }}","messages":"{{ stepResults.build_provider_payloads.anthropicMessages }}","model":"{{ inputs.anthropicModel }}","systemPrompt":"{{ stepResults.normalize_context.systemPrompt }}"}, roots) || {};
            const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
            const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["call_anthropic"] = result; vars["apiResult"] = result; }
          if (true) {
            await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
            _setState("isSending", false);
            return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
          } else {
            await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
            _setState("isSending", false);
            return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
          }
        } else {
          { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
            const argumentValues = _resolveRuntimeValue({"contents":"{{ stepResults.build_provider_payloads.geminiContents }}","context":"{{ stepResults.normalize_context.context }}","model":"{{ inputs.geminiModel }}","systemPrompt":"{{ stepResults.normalize_context.systemPrompt }}"}, roots) || {};
            const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
            const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["call_gemini"] = result; vars["apiResult"] = result; }
          await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
          _setState("isSending", false);
          return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
        }
      } else {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const context = inputs.context && typeof inputs.context === 'object' && !Array.isArray(inputs.context) ? inputs.context : {}; const systemPrompt = typeof inputs.systemPrompt === 'string' && inputs.systemPrompt.trim() ? inputs.systemPrompt : 'You are a concise and helpful AI assistant.'; return { context, systemPrompt, revision: 0, updatedAt: new Date().toISOString(), cache: { enabled: false, hit: false, source: 'direct' }, source: 'direct' };
          })();
          stepResults["use_direct_context"] = customResult; vars["customCodeResult"] = customResult; }
        if (true) {
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
const dbRaw = stepResults.read_context_db; const dbRows = Array.isArray(dbRaw) ? dbRaw : (dbRaw && Array.isArray(dbRaw.data) ? dbRaw.data : []); const dbRow = dbRows[0] && typeof dbRows[0] === 'object' ? dbRows[0] : null; const direct = stepResults.use_direct_context && typeof stepResults.use_direct_context === 'object' ? stepResults.use_direct_context : {}; const useDb = inputs.contextDatabaseEnabled === true; const payload = useDb && dbRow ? dbRow : direct; const fallbackContext = inputs.context && typeof inputs.context === 'object' && !Array.isArray(inputs.context) ? inputs.context : {}; const context = payload.context && typeof payload.context === 'object' && !Array.isArray(payload.context) ? payload.context : fallbackContext; const systemPrompt = typeof payload.systemPrompt === 'string' && payload.systemPrompt.trim() ? payload.systemPrompt : (typeof inputs.systemPrompt === 'string' && inputs.systemPrompt.trim() ? inputs.systemPrompt : 'You are a concise and helpful AI assistant.'); return { context, systemPrompt, revision: Number(payload.revision || 0), updatedAt: typeof payload.updatedAt === 'string' && payload.updatedAt ? payload.updatedAt : new Date().toISOString(), cache: { enabled: false, hit: false, source: useDb ? 'database' : 'direct' }, source: useDb ? 'database' : 'direct', found: Boolean(dbRow) };
            })();
            stepResults["normalize_context"] = customResult; vars["customCodeResult"] = customResult; }
          _setState("runtimeContext", stepResults.normalize_context.context);
          void _emitOutput("contextResolved", { "cache": stepResults.normalize_context.cache, "context": stepResults.normalize_context.context, "revision": stepResults.normalize_context.revision, "sessionId": inputs.sessionId, "systemPrompt": stepResults.normalize_context.systemPrompt, "updatedAt": stepResults.normalize_context.updatedAt }, false).catch(error => console.error('Module output delivery failed', error));
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
const items = Array.isArray(state.messages) ? state.messages : []; const conversational = items.filter((item) => item && (item.role === 'user' || item.role === 'assistant')); const firstUser = conversational.findIndex((item) => item.role === 'user'); const trimmed = firstUser >= 0 ? conversational.slice(firstUser) : []; return { anthropicMessages: trimmed.map((item) => ({ role: item.role === 'assistant' ? 'assistant' : 'user', content: String(item.content || '') })), geminiContents: trimmed.map((item) => ({ role: item.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(item.content || '') }] })) };
            })();
            stepResults["build_provider_payloads"] = customResult; vars["customCodeResult"] = customResult; }
          if (String(inputs.aiProvider || 'anthropic').toLowerCase() === 'anthropic') {
            { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
              const argumentValues = _resolveRuntimeValue({"context":"{{ stepResults.normalize_context.context }}","maxTokens":"{{ inputs.maxOutputTokens }}","messages":"{{ stepResults.build_provider_payloads.anthropicMessages }}","model":"{{ inputs.anthropicModel }}","systemPrompt":"{{ stepResults.normalize_context.systemPrompt }}"}, roots) || {};
              const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
              const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["call_anthropic"] = result; vars["apiResult"] = result; }
            if (true) {
              await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
              _setState("isSending", false);
              return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
            } else {
              await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
              _setState("isSending", false);
              return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
            }
          } else {
            { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
              const argumentValues = _resolveRuntimeValue({"contents":"{{ stepResults.build_provider_payloads.geminiContents }}","context":"{{ stepResults.normalize_context.context }}","model":"{{ inputs.geminiModel }}","systemPrompt":"{{ stepResults.normalize_context.systemPrompt }}"}, roots) || {};
              const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
              const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["call_gemini"] = result; vars["apiResult"] = result; }
            await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
            _setState("isSending", false);
            return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
          }
        } else {
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
const dbRaw = stepResults.read_context_db; const dbRows = Array.isArray(dbRaw) ? dbRaw : (dbRaw && Array.isArray(dbRaw.data) ? dbRaw.data : []); const dbRow = dbRows[0] && typeof dbRows[0] === 'object' ? dbRows[0] : null; const direct = stepResults.use_direct_context && typeof stepResults.use_direct_context === 'object' ? stepResults.use_direct_context : {}; const useDb = inputs.contextDatabaseEnabled === true; const payload = useDb && dbRow ? dbRow : direct; const fallbackContext = inputs.context && typeof inputs.context === 'object' && !Array.isArray(inputs.context) ? inputs.context : {}; const context = payload.context && typeof payload.context === 'object' && !Array.isArray(payload.context) ? payload.context : fallbackContext; const systemPrompt = typeof payload.systemPrompt === 'string' && payload.systemPrompt.trim() ? payload.systemPrompt : (typeof inputs.systemPrompt === 'string' && inputs.systemPrompt.trim() ? inputs.systemPrompt : 'You are a concise and helpful AI assistant.'); return { context, systemPrompt, revision: Number(payload.revision || 0), updatedAt: typeof payload.updatedAt === 'string' && payload.updatedAt ? payload.updatedAt : new Date().toISOString(), cache: { enabled: false, hit: false, source: useDb ? 'database' : 'direct' }, source: useDb ? 'database' : 'direct', found: Boolean(dbRow) };
            })();
            stepResults["normalize_context"] = customResult; vars["customCodeResult"] = customResult; }
          _setState("runtimeContext", stepResults.normalize_context.context);
          void _emitOutput("contextResolved", { "cache": stepResults.normalize_context.cache, "context": stepResults.normalize_context.context, "revision": stepResults.normalize_context.revision, "sessionId": inputs.sessionId, "systemPrompt": stepResults.normalize_context.systemPrompt, "updatedAt": stepResults.normalize_context.updatedAt }, false).catch(error => console.error('Module output delivery failed', error));
          { const event = args.event; const data = pageData; const globalState = state;
            const customResult = await (async () => {
const items = Array.isArray(state.messages) ? state.messages : []; const conversational = items.filter((item) => item && (item.role === 'user' || item.role === 'assistant')); const firstUser = conversational.findIndex((item) => item.role === 'user'); const trimmed = firstUser >= 0 ? conversational.slice(firstUser) : []; return { anthropicMessages: trimmed.map((item) => ({ role: item.role === 'assistant' ? 'assistant' : 'user', content: String(item.content || '') })), geminiContents: trimmed.map((item) => ({ role: item.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(item.content || '') }] })) };
            })();
            stepResults["build_provider_payloads"] = customResult; vars["customCodeResult"] = customResult; }
          if (String(inputs.aiProvider || 'anthropic').toLowerCase() === 'anthropic') {
            { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
              const argumentValues = _resolveRuntimeValue({"context":"{{ stepResults.normalize_context.context }}","maxTokens":"{{ inputs.maxOutputTokens }}","messages":"{{ stepResults.build_provider_payloads.anthropicMessages }}","model":"{{ inputs.anthropicModel }}","systemPrompt":"{{ stepResults.normalize_context.systemPrompt }}"}, roots) || {};
              const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
              const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["call_anthropic"] = result; vars["apiResult"] = result; }
            if (true) {
              await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
              _setState("isSending", false);
              return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
            } else {
              await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
              _setState("isSending", false);
              return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
            }
          } else {
            { const roots = { args, inputs, state, sharedState, applicationState, pageState, pageData, serverData, vars, stepResults };
              const argumentValues = _resolveRuntimeValue({"contents":"{{ stepResults.build_provider_payloads.geminiContents }}","context":"{{ stepResults.normalize_context.context }}","model":"{{ inputs.geminiModel }}","systemPrompt":"{{ stepResults.normalize_context.systemPrompt }}"}, roots) || {};
              const protectedResponse = await fetch('/api/rudra/protected', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues, context: roots }), signal: args.signal || AbortSignal.timeout(30000) });
              const protectedPayload = await protectedResponse.json().catch(() => ({})); if (!protectedResponse.ok) throw new Error(protectedPayload.error || 'Protected API request failed (' + protectedResponse.status + ')'); const result = protectedPayload.data; stepResults["call_gemini"] = result; vars["apiResult"] = result; }
            await processApiResponse({ "messages": state.messages, "response": stepResults.call_anthropic || stepResults.call_gemini });
            _setState("isSending", false);
            return { "accepted": true, "context": stepResults.normalize_context, "message": stepResults.normalize_user, "response": stepResults.process_response };
          }
        }
      }
    } else {
      return { "accepted": false, "reason": "empty" };
    }
    return undefined;
  }

  async function retryLastMessage(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const items = Array.isArray(state.messages) ? state.messages : []; const last = [...items].reverse().find((item) => item && item.role === 'user'); return { type: 'text', text: last ? String(last.content || '') : '' };
      })();
      stepResults["find_retry_message"] = customResult; vars["customCodeResult"] = customResult; }
    if (!!stepResults.find_retry_message.text) {
      await sendMessage({ "message": stepResults.find_retry_message });
      return stepResults.run_retry;
    } else {
      return { "accepted": false, "reason": "no-user-message" };
    }
    return undefined;
  }

  async function cancelResponse(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("isSending", false);
    void _emitOutput("responseCancelled", { "reason": args.reason || 'host-requested' }, false).catch(error => console.error('Module output delivery failed', error));
    return { "cancelled": true };
    return undefined;
  }

  async function closeChat(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("hasInitialized", true);
    _setState("isOpen", false);
    _setState("showLauncher", true);
    return { "open": false };
    return undefined;
  }

  async function initializeConversation(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (state.hasInitialized === true) {
      return { "initialized": true, "reused": true };
    } else {
      _setState("isOpen", state.hasInitialized === true ? state.isOpen : (inputs.visible !== false && (inputs.presentationMode !== 'floating' || inputs.defaultOpen === true)));
      _setState("isFloating", inputs.presentationMode === 'floating');
      _setState("showLauncher", state.hasInitialized === true ? state.showLauncher : (inputs.visible !== false && inputs.presentationMode === 'floating' && inputs.defaultOpen !== true));
      _setState("themeClass", 'lumora-ai-host lumora-ai-floating lumora-ai-theme-' + (inputs.visualTheme || 'aurora'));
      _setState("messages", state.messages.length ? state.messages : (inputs.welcomeMessage ? [{ id: 'welcome', role: 'assistant', sender: inputs.assistantName || 'Assistant', variant: 'incoming', content: inputs.welcomeMessage, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }] : []));
      _setState("hasInitialized", true);
      return { "initialized": true };
    }
    return undefined;
  }

  async function initializeContextStore(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (inputs.contextDatabaseEnabled === true) {
      return { "initialized": true, "table": "rudra_ai_context" };
    } else {
      return { "initialized": false, "reason": "database-context-disabled" };
    }
    return undefined;
  }

  async function openChat(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("hasInitialized", true);
    _setState("isOpen", true);
    _setState("showLauncher", false);
    return { "open": true };
    return undefined;
  }

  async function loadContext(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    if (inputs.contextDatabaseEnabled === true) {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
const raw = stepResults.upsert_context_db; const rows = Array.isArray(raw) ? raw : (raw && Array.isArray(raw.data) ? raw.data : []); const row = rows[0] && typeof rows[0] === 'object' ? rows[0] : null; const direct = stepResults.use_direct_context_update && typeof stepResults.use_direct_context_update === 'object' ? stepResults.use_direct_context_update : {}; const dbEnabled = inputs.contextDatabaseEnabled === true; const payload = dbEnabled && row ? row : direct; return { context: payload.context && typeof payload.context === 'object' ? payload.context : args.context, systemPrompt: typeof payload.systemPrompt === 'string' ? payload.systemPrompt : (args.systemPrompt || inputs.systemPrompt || ''), revision: Number(payload.revision || 0), updatedAt: typeof payload.updatedAt === 'string' && payload.updatedAt ? payload.updatedAt : new Date().toISOString(), cache: dbEnabled ? { enabled: false, invalidated: Boolean(row), source: 'database' } : (payload.cache || { enabled: false, invalidated: false, source: 'direct' }), sessionId: args.scopeKey || inputs.contextScopeKey || inputs.sessionId || 'default', persisted: dbEnabled && Boolean(row), updated: dbEnabled ? Boolean(row) : true };
        })();
        stepResults["normalize_context_update"] = customResult; vars["customCodeResult"] = customResult; }
      _setState("runtimeContext", stepResults.normalize_context_update.context);
      void _emitOutput("contextUpdated", stepResults.normalize_context_update, false).catch(error => console.error('Module output delivery failed', error));
      void _emitOutput("contextChanged", { "context": stepResults.normalize_context_update.context, "persisted": stepResults.normalize_context_update.persisted, "revision": stepResults.normalize_context_update.revision }, false).catch(error => console.error('Module output delivery failed', error));
      return stepResults.normalize_context_update;
    } else {
      { const event = args.event; const data = pageData; const globalState = state;
        const customResult = await (async () => {
return { context: args.context && typeof args.context === 'object' ? args.context : {}, systemPrompt: typeof args.systemPrompt === 'string' ? args.systemPrompt : (inputs.systemPrompt || ''), revision: 0, updatedAt: new Date().toISOString(), cache: { enabled: false, invalidated: false, source: 'direct' }, sessionId: args.scopeKey || inputs.contextScopeKey || inputs.sessionId || 'default', persisted: false, updated: true };
        })();
        stepResults["use_direct_context_update"] = customResult; vars["customCodeResult"] = customResult; }
      if (true) {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const raw = stepResults.upsert_context_db; const rows = Array.isArray(raw) ? raw : (raw && Array.isArray(raw.data) ? raw.data : []); const row = rows[0] && typeof rows[0] === 'object' ? rows[0] : null; const direct = stepResults.use_direct_context_update && typeof stepResults.use_direct_context_update === 'object' ? stepResults.use_direct_context_update : {}; const dbEnabled = inputs.contextDatabaseEnabled === true; const payload = dbEnabled && row ? row : direct; return { context: payload.context && typeof payload.context === 'object' ? payload.context : args.context, systemPrompt: typeof payload.systemPrompt === 'string' ? payload.systemPrompt : (args.systemPrompt || inputs.systemPrompt || ''), revision: Number(payload.revision || 0), updatedAt: typeof payload.updatedAt === 'string' && payload.updatedAt ? payload.updatedAt : new Date().toISOString(), cache: dbEnabled ? { enabled: false, invalidated: Boolean(row), source: 'database' } : (payload.cache || { enabled: false, invalidated: false, source: 'direct' }), sessionId: args.scopeKey || inputs.contextScopeKey || inputs.sessionId || 'default', persisted: dbEnabled && Boolean(row), updated: dbEnabled ? Boolean(row) : true };
          })();
          stepResults["normalize_context_update"] = customResult; vars["customCodeResult"] = customResult; }
        _setState("runtimeContext", stepResults.normalize_context_update.context);
        void _emitOutput("contextUpdated", stepResults.normalize_context_update, false).catch(error => console.error('Module output delivery failed', error));
        void _emitOutput("contextChanged", { "context": stepResults.normalize_context_update.context, "persisted": stepResults.normalize_context_update.persisted, "revision": stepResults.normalize_context_update.revision }, false).catch(error => console.error('Module output delivery failed', error));
        return stepResults.normalize_context_update;
      } else {
        { const event = args.event; const data = pageData; const globalState = state;
          const customResult = await (async () => {
const raw = stepResults.upsert_context_db; const rows = Array.isArray(raw) ? raw : (raw && Array.isArray(raw.data) ? raw.data : []); const row = rows[0] && typeof rows[0] === 'object' ? rows[0] : null; const direct = stepResults.use_direct_context_update && typeof stepResults.use_direct_context_update === 'object' ? stepResults.use_direct_context_update : {}; const dbEnabled = inputs.contextDatabaseEnabled === true; const payload = dbEnabled && row ? row : direct; return { context: payload.context && typeof payload.context === 'object' ? payload.context : args.context, systemPrompt: typeof payload.systemPrompt === 'string' ? payload.systemPrompt : (args.systemPrompt || inputs.systemPrompt || ''), revision: Number(payload.revision || 0), updatedAt: typeof payload.updatedAt === 'string' && payload.updatedAt ? payload.updatedAt : new Date().toISOString(), cache: dbEnabled ? { enabled: false, invalidated: Boolean(row), source: 'database' } : (payload.cache || { enabled: false, invalidated: false, source: 'direct' }), sessionId: args.scopeKey || inputs.contextScopeKey || inputs.sessionId || 'default', persisted: dbEnabled && Boolean(row), updated: dbEnabled ? Boolean(row) : true };
          })();
          stepResults["normalize_context_update"] = customResult; vars["customCodeResult"] = customResult; }
        _setState("runtimeContext", stepResults.normalize_context_update.context);
        void _emitOutput("contextUpdated", stepResults.normalize_context_update, false).catch(error => console.error('Module output delivery failed', error));
        void _emitOutput("contextChanged", { "context": stepResults.normalize_context_update.context, "persisted": stepResults.normalize_context_update.persisted, "revision": stepResults.normalize_context_update.revision }, false).catch(error => console.error('Module output delivery failed', error));
        return stepResults.normalize_context_update;
      }
    }
    return undefined;
  }

  async function dismissError(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("errorMessage", "");
    _setState("toasts", []);
    return { "dismissed": true };
    return undefined;
  }

  async function processApiResponse(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const raw = args.response && typeof args.response === 'object' ? args.response : {}; const anthropicText = Array.isArray(raw.content) ? raw.content.filter((part) => part && part.type === 'text').map((part) => String(part.text || '')).join('') : ''; const geminiParts = Array.isArray(raw.candidates) && raw.candidates[0] && raw.candidates[0].content && Array.isArray(raw.candidates[0].content.parts) ? raw.candidates[0].content.parts : []; const geminiText = geminiParts.filter((part) => part && typeof part.text === 'string').map((part) => part.text).join(''); const nested = raw.message && typeof raw.message === 'object' ? raw.message : {}; const choice = Array.isArray(raw.choices) && raw.choices[0] && raw.choices[0].message ? raw.choices[0].message : {}; const contentValue = anthropicText || geminiText || nested.content || raw.text || raw.response || choice.content || ''; const content = typeof contentValue === 'string' ? contentValue : JSON.stringify(contentValue || ''); const actionList = Array.isArray(raw.toolCalls) ? raw.toolCalls : (Array.isArray(raw.actions) ? raw.actions : []); const action = raw.toolCall || actionList[0] || null; const provider = Array.isArray(raw.candidates) ? 'gemini' : (Array.isArray(raw.content) ? 'anthropic' : String(inputs.aiProvider || 'unknown')); const providerCache = provider === 'anthropic' ? { mode: 'prompt-cache', enabled: true, readTokens: Number(raw.usage && raw.usage.cache_read_input_tokens || 0), writtenTokens: Number(raw.usage && raw.usage.cache_creation_input_tokens || 0) } : { mode: 'implicit', enabled: true, readTokens: Number(raw.usageMetadata && raw.usageMetadata.cachedContentTokenCount || 0) }; const message = { id: String(raw.id || ('assistant-' + Date.now())), role: 'assistant', sender: inputs.assistantName || 'Assistant', variant: 'incoming', content: content || 'I could not read the assistant response.', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), data: raw.data || {} }; return { message, action, provider, providerCache };
      })();
      stepResults["normalize_response"] = customResult; vars["customCodeResult"] = customResult; }
    _setState("messages", [...(Array.isArray(args.messages) ? args.messages : state.messages), stepResults.normalize_response.message].slice(-inputs.maxMessages));
    void _emitOutput("messageReceived", { "cache": stepResults.normalize_response.providerCache, "message": stepResults.normalize_response.message, "provider": stepResults.normalize_response.provider, "raw": args.response }, false).catch(error => console.error('Module output delivery failed', error));
    if (!!stepResults.normalize_response.action) {
      _setState("pendingAction", stepResults.normalize_response.action);
      void _emitOutput("actionRequested", { "action": stepResults.normalize_response.action, "sessionId": inputs.sessionId }, false).catch(error => console.error('Module output delivery failed', error));
      if (['escalate','escalation','handoff'].includes(String(stepResults.normalize_response.action.type || stepResults.normalize_response.action.name || '').toLowerCase())) {
        void _emitOutput("escalationRequested", { "action": stepResults.normalize_response.action, "message": stepResults.normalize_response.message }, false).catch(error => console.error('Module output delivery failed', error));
        return stepResults.normalize_response;
      } else {
        return stepResults.normalize_response;
      }
    } else {
      return stepResults.normalize_response;
    }
    return undefined;
  }

  async function handleAttachments(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    void _emitOutput("attachmentSelected", { "files": args.files }, false).catch(error => console.error('Module output delivery failed', error));
    return { "accepted": true, "count": args.files.length };
    return undefined;
  }

  async function provideToolResult(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    _setState("messages", inputs.showToolActivity ? [...state.messages, { id: 'tool-' + Date.now(), role: 'system', sender: 'Tool activity', variant: 'system', content: 'Tool ' + args.actionId + ' ' + (args.status || 'completed'), timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), data: args.result || {} }].slice(-inputs.maxMessages) : state.messages);
    _setState("pendingAction", {  });
    void _emitOutput("actionCompleted", { "actionId": args.actionId, "result": args.result || {}, "status": args.status || 'completed' }, false).catch(error => console.error('Module output delivery failed', error));
    return { "actionId": args.actionId, "completed": true };
    return undefined;
  }

  const _localActions = {
    "clearConversation": clearConversation,
    "sendMessage": sendMessage,
    "retryLastMessage": retryLastMessage,
    "cancelResponse": cancelResponse,
    "closeChat": closeChat,
    "initializeConversation": initializeConversation,
    "initializeContextStore": initializeContextStore,
    "openChat": openChat,
    "loadContext": loadContext,
    "dismissError": dismissError,
    "processApiResponse": processApiResponse,
    "handleAttachments": handleAttachments,
    "provideToolResult": provideToolResult,
  };
  const _commandImplementations = useRef({});
  _commandImplementations.current = {
    "lumora_ai_retry": (commandArgs = {}, context = {}) => retryLastMessage({ ...commandArgs, signal: context.signal }),
    "lumora_ai_send": (commandArgs = {}, context = {}) => sendMessage({ ...commandArgs, signal: context.signal }),
    "lumora_ai_clear": (commandArgs = {}, context = {}) => clearConversation({ ...commandArgs, signal: context.signal }),
    "lumora_ai_tool_result": (commandArgs = {}, context = {}) => provideToolResult({ ...commandArgs, signal: context.signal }),
    "lumora_ai_load_context": (commandArgs = {}, context = {}) => loadContext({ ...commandArgs, signal: context.signal }),
    "lumora_ai_cancel": (commandArgs = {}, context = {}) => cancelResponse({ ...commandArgs, signal: context.signal }),
    "lumora_ai_dismiss_error": (commandArgs = {}, context = {}) => dismissError({ ...commandArgs, signal: context.signal }),
  };
  const _commandAdapters = useRef(null);
  if (!_commandAdapters.current) _commandAdapters.current = {
    "lumora_ai_retry": (commandArgs, context) => _commandImplementations.current["lumora_ai_retry"](commandArgs, context),
    "lumora_ai_send": (commandArgs, context) => _commandImplementations.current["lumora_ai_send"](commandArgs, context),
    "lumora_ai_clear": (commandArgs, context) => _commandImplementations.current["lumora_ai_clear"](commandArgs, context),
    "lumora_ai_tool_result": (commandArgs, context) => _commandImplementations.current["lumora_ai_tool_result"](commandArgs, context),
    "lumora_ai_load_context": (commandArgs, context) => _commandImplementations.current["lumora_ai_load_context"](commandArgs, context),
    "lumora_ai_cancel": (commandArgs, context) => _commandImplementations.current["lumora_ai_cancel"](commandArgs, context),
    "lumora_ai_dismiss_error": (commandArgs, context) => _commandImplementations.current["lumora_ai_dismiss_error"](commandArgs, context),
  };
  useEffect(() => {
    const register = props.registerCommands || props.runtime?.registerCommands;
    if (typeof register !== 'function') return;
    return register(_commandAdapters.current);
  }, [props.registerCommands, props.runtime?.registerCommands]);

  const _localActionArguments = {
    "clearConversation": [],
    "sendMessage": ["message"],
    "retryLastMessage": [],
    "cancelResponse": ["reason"],
    "closeChat": [],
    "initializeConversation": [],
    "initializeContextStore": [],
    "openChat": [],
    "loadContext": ["context", "replace", "scopeKey", "systemPrompt", "expectedRevision"],
    "dismissError": [],
    "processApiResponse": ["response", "messages"],
    "handleAttachments": ["files"],
    "provideToolResult": ["actionId", "result", "status"],
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
  useEffect(() => {
    void _runLifecycle("initialize_context_store_mountinitializeContextStore", "takeLatest", (signal) => initializeContextStore({ signal }), "Module mount lifecycle failed:");
  }, []);
  useEffect(() => {
    void _runLifecycle("lumora_ai_mountinitializeConversation", "takeLatest", (signal) => initializeConversation({ signal }), "Module mount lifecycle failed:");
  }, []);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      <RudraLayoutBox id="ai_host" className={`${((_classValue) => _classValue == null || _classValue === false || typeof _classValue === 'object' ? '' : "" + String(_classValue))(((_bindingValue) => _bindingValue === undefined ? "lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora" : _bindingValue)(themeClass))}`}>      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isOpen)) && (<>      <RudraCoreSurface id="root_container" className="lumora-ai-shell" padding="none" bordered={true} responsivePadding={false} as="section" tone="default" radius="xl">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutFlex id="chat_header" className="lumora-ai-header flex w-full items-start justify-between gap-3 px-5 py-4" as="header">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="header_identity" className="lumora-ai-identity block min-w-0">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="header_title" className="text-lg font-bold" as="h2" content={((_bindingValue) => _bindingValue === undefined ? "AI Assistant" : _bindingValue)(inputs?.title)} />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="header_subtitle" className="text-xs" content="Context-aware assistant · tools enabled by your application" customColor="var(--rudra-color-muted)" as="p" />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutFlex id="header_actions" className="lumora-ai-header-actions flex shrink-0 items-center gap-2">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="status_badge" className="lumora-ai-status" as="span" content="Online" customColor="currentColor" />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="clear_btn" className="lumora-ai-clear-button" ariaLabel="Clear conversation" size="sm" label="Clear" theme="auto" variant="ghost" onAction={(...eventArgs) => _callAction("clearConversation", {}, eventArgs)} />
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(isFloating)) && (<>      <RudraCoreIconButton id="floating_close_button" className="lumora-ai-close-button" theme="auto" onClick={(...eventArgs) => _callAction("closeChat", {}, eventArgs)} variant="ghost" ariaLabel="Close Lumora AI assistant" icon={false} additionalAttributes={{"title":"Close AI assistant"}} size="sm" />
</>)}
</RudraLayoutFlex>
</>)}
</RudraLayoutFlex>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutScrollArea id="message_list" className="lumora-ai-transcript w-full flex-1 overflow-y-auto px-6 py-6" as="section">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutRepeater id="messages_repeater" className="flex flex-col gap-4" items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(messages)}>{(_payload) => { const _parentScope = _scope || {}; return (() => { const _scope = { ..._parentScope, ...(_payload || {}), item: _payload?.item ?? _payload, index: _payload?.index ?? _payload?.i ?? 0, parent: _parentScope }; return (<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMessageBubble id="message_bubble" className="flex w-full gap-2" bubbleClassName="max-w-2xl rounded-2xl px-4 py-3" sender={((_bindingValue) => _bindingValue === undefined ? "Assistant" : _bindingValue)(_scope?.item?.sender)} status={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.status)} variant={((_bindingValue) => _bindingValue === undefined ? "incoming" : _bindingValue)(_scope?.item?.variant)} timestamp={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.timestamp)}>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="bubble_content" className="text-sm" content={((_bindingValue) => _bindingValue === undefined ? "" : _bindingValue)(_scope?.item?.content)} as="p" />
</>)}
</RudraWidgetsMessageBubble>
</>)}
</>); })(); }}</RudraLayoutRepeater>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSending)) && (<>      <RudraCoreTypography id="typing_indicator" className="lumora-ai-typing text-sm" customColor="var(--rudra-color-muted)" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Assistant" : _bindingValue)(inputs?.assistantName)} />
</>)}
</RudraLayoutScrollArea>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(errorMessage)) && (<>      <RudraCoreAlert id="error_panel" className="lumora-ai-error mx-6 mb-3" action={<>      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreButton id="retry_button" size="sm" label="Retry" theme="auto" variant="outline" onAction={(...eventArgs) => _callAction("retryLastMessage", {}, eventArgs)} ariaLabel="Retry last message" />
</>)}
</>} live="assertive" theme="auto" title="Assistant unavailable" onDismiss={(...eventArgs) => _callAction("dismissError", {}, eventArgs)} appearance="soft" closeLabel="Dismiss error" dismissible={true} variant="error">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="error_text" className="text-sm" as="p" content={((_bindingValue) => _bindingValue === undefined ? "Something went wrong." : _bindingValue)(errorMessage)} />
</>)}
</RudraCoreAlert>
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraLayoutBox id="composer_wrapper" className="lumora-ai-composer block w-full px-5 pb-5 pt-4">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreTypography id="composer_hint" className="mb-2 text-xs" customColor="var(--rudra-color-muted)" as="p" content="Ask a question or request an available action." />
</>)}
      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraWidgetsMessageComposer id="chat_composer" className="w-full" composerClassName="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900" onSend={(...eventArgs) => _callAction("sendMessage", {}, eventArgs)} disabled={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(isSending)} showVoice={false} showPicker={false} onAttachmentSelect={(...eventArgs) => _callAction("handleAttachments", {}, eventArgs)} autoFocus={false} placeholder={((_bindingValue) => _bindingValue === undefined ? "Ask anything…" : _bindingValue)(inputs?.placeholder)} showAttachment={((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(inputs?.allowAttachments)} />
</>)}
</RudraLayoutBox>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? false : _bindingValue)(errorMessage)) && (<>      <RudraWidgetsToastStack id="global_toasts" items={((_bindingValue) => _bindingValue === undefined ? [] : _bindingValue)(toasts)} closable={true} position="top-right" showIcons={true} maxVisible={3} displayMode="fixed" onDismiss={(...eventArgs) => _callAction("dismissError", {}, eventArgs)} newestOnTop={true} />
</>)}
</RudraCoreSurface>
</>)}
      {isVisibleValue(((_bindingValue) => _bindingValue === undefined ? true : _bindingValue)(showLauncher)) && (<>      <RudraLayoutBox id="floating_launcher" className="lumora-ai-launcher">      {isVisibleValue(getResponsiveProp({ "lg": true, "md": true, "sm": true })) && (<>      <RudraCoreIconButton id="floating_launcher_button" className="lumora-ai-launcher-button" onClick={(...eventArgs) => _callAction("openChat", {}, eventArgs)} variant="primary" ariaLabel="Open Lumora AI assistant" additionalAttributes={{"aria-haspopup":"dialog","title":"Open AI assistant"}} icon={false} size="xl" theme="auto" />
</>)}
</RudraLayoutBox>
</>)}
</RudraLayoutBox>
    </div>
  );
}
