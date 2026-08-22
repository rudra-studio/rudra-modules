import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { SpriteAnimator as RudraThreeSpriteAnimator } from '@rudra-studio/rudra-three';
import { Box as RudraLayoutBox, Grid as RudraLayoutGrid } from '@rudra-studio/rudra-layout';
import { Typography as RudraCoreTypography } from '@rudra-studio/rudra-core';

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

  const roomId = props.roomId !== undefined ? props.roomId : (props.data?.roomId !== undefined ? props.data.roomId : undefined);
  const inviteRoomId = props.inviteRoomId !== undefined ? props.inviteRoomId : (props.data?.inviteRoomId !== undefined ? props.data.inviteRoomId : undefined);
  const inputs = { "roomId": roomId, "inviteRoomId": inviteRoomId };
  const [spriteAnimations, set_spriteAnimations] = useState(() => structuredClone({"○":{"fps":1,"holdLastFrame":true,"loop":false,"sheet":{"columns":1,"endFrame":0,"rows":1,"src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNDYiIGZpbGw9IiMwNzBkMWQiLz48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSI0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzE1N2E4IiBzdHJva2Utb3BhY2l0eT0iLjQyIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI1MSIgY3k9IjQ3IiByPSIxMiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjAzNSIvPjwvc3ZnPg==","startFrame":0}},"🔴":{"fps":18,"holdLastFrame":true,"loop":false,"sheet":{"columns":6,"endFrame":5,"rows":1,"src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZkN2RjIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+","startFrame":0}},"🟡":{"fps":18,"holdLastFrame":true,"loop":false,"sheet":{"columns":6,"endFrame":5,"rows":1,"src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZmN2JmIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+","startFrame":0}}}));
  const [inviteUrl, set_inviteUrl] = useState(() => structuredClone(""));
  const state = { "spriteAnimations": spriteAnimations, "inviteUrl": inviteUrl };

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "spriteAnimations": set_spriteAnimations(value); return value;
      case "inviteUrl": set_inviteUrl(value); return value;
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
      case "spriteAnimations": set_spriteAnimations(updateNested); return value;
      case "inviteUrl": set_inviteUrl(updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _callLibrary = useCallback(async (esmUrl, functionName, args) => {
    const loaded = await import(/* @vite-ignore */ /* webpackIgnore: true */ esmUrl);
    const callable = loaded[functionName] || loaded.default;
    if (typeof callable !== 'function') throw new Error("Library function '" + functionName + "' was not exported by " + esmUrl);
    return callable(args);
  }, []);

  const _outputSchemas = {"c4_room_created_output":{"pattern":"^[a-zA-Z0-9-_]{6,80}$","type":"string"}};
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

  async function playColumn(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let game;
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const registry=window.RudraSharedState;
const api=registry?.current||registry;
if(!api?.get||!api?.set)return;
let game=api.get("game");
if(!game||!Array.isArray(game.board)||game.board.length!==42||game.winner)return;

const runtimeKey="__rudraConnectFourPlayers";
const runtimePlayers=window[runtimeKey]||(window[runtimeKey]={});
let playerId=runtimePlayers[api.roomId];
if(!playerId){
  playerId=crypto.randomUUID();
  runtimePlayers[api.roomId]=playerId;
}

const players={...(game.players||{})};
let claimed=false;
if(players.red!==playerId&&players.yellow!==playerId){
  if(!players.red){
    players.red=playerId;
    claimed=true;
  }else if(!players.yellow){
    players.yellow=playerId;
    claimed=true;
  }else{
    return;
  }
}

const symbol=players.red===playerId?"🔴":"🟡";
const ready=Boolean(players.red&&players.yellow);
if(claimed){
  game={
    ...game,
    players,
    playerClaimVersion:6,
    status:game.winner?game.status:ready?"Turn: "+(game.turn||"🔴"):"Waiting for Yellow player…",
    playersLabel:"🔴 Red "+(players.red?"joined":"open")+" · 🟡 Yellow "+(players.yellow?"joined":"open")
  };
  api.set("game",game);
}
if(symbol!==game.turn)return;

const column=Number(args.column);
if(!Number.isInteger(column)||column<0||column>6)return;
const board=[...game.board];
let row=-1;
for(let candidate=5;candidate>=0;candidate-=1){
  if(board[candidate*7+column]==="○"){
    row=candidate;
    break;
  }
}
if(row<0)return;

board[row*7+column]=symbol;
const inside=(r,c)=>r>=0&&r<6&&c>=0&&c<7;
const won=[[1,0],[0,1],[1,1],[1,-1]].some(([dr,dc])=>{
  let count=1;
  for(const sign of[-1,1]){
    let r=row+dr*sign,c=column+dc*sign;
    while(inside(r,c)&&board[r*7+c]===symbol){
      count+=1;
      r+=dr*sign;
      c+=dc*sign;
    }
  }
  return count>=4;
});
const moves=Number(game.moves||0)+1;
const draw=!won&&moves>=42;
const nextTurn=symbol==="🔴"?"🟡":"🔴";
const next={
  ...game,
  players,
  board,
  moves,
  turn:won||draw?symbol:nextTurn,
  winner:won?symbol:draw?"draw":null,
  revision:Number(game.revision||0)+1,
  playerClaimVersion:6,
  status:won
    ?symbol+" wins! Reset to play again."
    :draw
      ?"Draw game. Reset to play again."
      :nextTurn==="🟡"&&!players.yellow
        ?"Waiting for Yellow player…"
        :"Turn: "+nextTurn,
  playersLabel:"🔴 Red "+(players.red?"joined":"open")+" · 🟡 Yellow "+(players.yellow?"joined":"open")
};
api.set("game",next);
return next;
      })();
      stepResults["c4_play_code"] = customResult; vars["game"] = customResult; }
    return undefined;
  }

  async function resetGame(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let game;
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const registry=window.RudraSharedState;const api=registry?.current||registry;if(!api?.get||!api?.set)return;const game=api.get("game");if(!game)return;const runtimePlayers=window.__rudraConnectFourPlayers;const playerId=runtimePlayers?.[api.roomId];if(game.players?.red!==playerId&&game.players?.yellow!==playerId)return;const next={...game,board:Array(42).fill("○"),turn:"🔴",winner:null,moves:0,revision:Number(game.revision||0)+1,status:game.players?.yellow?"Turn: 🔴":"Waiting for Yellow player…"};api.set("game",next);return next;
      })();
      stepResults["c4_reset_code"] = customResult; vars["game"] = customResult; }
    return undefined;
  }

  async function applyRoomToUrl(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let inviteResult;
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const roomId=String(args.roomId||"").trim();
if(!/^[a-zA-Z0-9-_]{6,80}$/.test(roomId))throw new Error("Invalid room ID.");
const current=new URL(window.location.href);
const configuredBase=String(args.inviteBaseUrl||"").trim();
const invite=new URL(configuredBase||current.toString(),current.origin);
invite.searchParams.set("room",roomId);
return {roomId,inviteUrl:invite.toString()};
      })();
      stepResults["c4_apply_room_url_code"] = customResult; vars["inviteResult"] = customResult; }
    _setState("inviteUrl", vars.inviteResult.inviteUrl);
    return vars.inviteResult;
    return undefined;
  }

  async function copyInviteUrl(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let copyResult;
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const inviteUrl=String(state.inviteUrl||window.location.href||"").trim();
if(!inviteUrl)return {copied:false};
if(navigator.clipboard?.writeText){
  await navigator.clipboard.writeText(inviteUrl);
}else{
  const field=document.createElement("textarea");
  field.value=inviteUrl;
  field.setAttribute("readonly","");
  field.style.position="fixed";
  field.style.opacity="0";
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
}
return {copied:true,inviteUrl};
      })();
      stepResults["c4_copy_invite_code"] = customResult; vars["copyResult"] = customResult; }
    return vars.copyResult;
    return undefined;
  }

  async function ensureRoom(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let roomRequest;
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
await new Promise(resolve=>setTimeout(resolve,300));
const roomId=String(inputs?.roomId||"").trim();
const inviteRoomId=String(inputs?.inviteRoomId||"").trim();
if(/^[a-zA-Z0-9-_]{6,80}$/.test(roomId)||/^[a-zA-Z0-9-_]{6,80}$/.test(inviteRoomId))return {};
return {roomId:crypto.randomUUID().replace(/-/g,"").slice(0,16)};
      })();
      stepResults["c4_generate_room"] = customResult; vars["roomRequest"] = customResult; }
    if (vars.roomRequest.roomId) {
      await _emitOutput("c4_room_created_output", vars.roomRequest.roomId, true);
      await initializeGame({  });
      return vars.roomRequest;
    } else {
      await initializeGame({  });
      return vars.roomRequest;
    }
    return undefined;
  }

  async function initializeGame(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    const stepResults = {};
    let joinResult;
    { const event = args.event; const data = pageData; const globalState = state;
      const customResult = await (async () => {
const roomId=String(inputs?.roomId||"").trim();
const inviteRoomId=String(inputs?.inviteRoomId||"").trim();
const joiningRoom=/^[a-zA-Z0-9-_]{6,80}$/.test(roomId)?roomId:"";
const hostingRoom=/^[a-zA-Z0-9-_]{6,80}$/.test(inviteRoomId)?inviteRoomId:"";
const requestedRoom=joiningRoom||hostingRoom;
let api;
for(let attempt=0;attempt<50;attempt+=1){
  const registry=window.RudraSharedState;
  api=registry?.current||registry;
  if(api?.get&&api?.set&&api.status==="connected")break;
  await new Promise(resolve=>setTimeout(resolve,100));
}
if(!api?.get||!api?.set||api.status!=="connected")return {inviteUrl:""};
await new Promise(resolve=>setTimeout(resolve,250));
const effectiveRoom=requestedRoom||String(api.roomId||"default-room");
let inviteUrl="";
if(hostingRoom&&!joiningRoom){
  const invite=new URL(window.location.href);
  invite.searchParams.set("room",hostingRoom);
  inviteUrl=invite.toString();
}
const runtimeKey="__rudraConnectFourPlayers";
const runtimePlayers=window[runtimeKey]||(window[runtimeKey]={});
let playerId=runtimePlayers[api.roomId];
if(!playerId){
  playerId=crypto.randomUUID();
  runtimePlayers[api.roomId]=playerId;
}
let game=api.get("game");
const validGame=game&&Array.isArray(game.board)&&game.board.length===42&&game.playerClaimVersion===6&&game.roomCode===effectiveRoom;
if(!validGame){
  game={board:Array(42).fill("○"),turn:"🔴",winner:null,moves:0,revision:0,playerClaimVersion:6,players:{red:playerId,yellow:null},roomCode:effectiveRoom,status:"Waiting for Yellow player…",playersLabel:"🔴 Red joined · 🟡 Yellow open"};
}else{
  const players={...(game.players||{})};
  if(!players.red)players.red=playerId;
  else if(players.red!==playerId&&!players.yellow)players.yellow=playerId;
  const ready=Boolean(players.red&&players.yellow);
  game={...game,players,status:game.winner?game.status:ready?"Turn: "+(game.turn||"🔴"):"Waiting for Yellow player…",playersLabel:"🔴 Red "+(players.red?"joined":"open")+" · 🟡 Yellow "+(players.yellow?"joined":"open")};
}
api.set("game",game);
return {game,inviteUrl};
      })();
      stepResults["c4_initialize_code"] = customResult; vars["joinResult"] = customResult; }
    _setState("inviteUrl", vars.joinResult.inviteUrl);
    return vars.joinResult.game;
    return undefined;
  }

  const _localActions = {
    "playColumn": playColumn,
    "resetGame": resetGame,
    "applyRoomToUrl": applyRoomToUrl,
    "copyInviteUrl": copyInviteUrl,
    "ensureRoom": ensureRoom,
    "initializeGame": initializeGame,
  };
  const _commandImplementations = useRef({});
  _commandImplementations.current = {
    "c4_apply_room_url_command": (commandArgs = {}, context = {}) => applyRoomToUrl({ ...commandArgs, signal: context.signal }),
  };
  const _commandAdapters = useRef(null);
  if (!_commandAdapters.current) _commandAdapters.current = {
    "c4_apply_room_url_command": (commandArgs, context) => _commandImplementations.current["c4_apply_room_url_command"](commandArgs, context),
  };
  useEffect(() => {
    const register = props.registerCommands || props.runtime?.registerCommands;
    if (typeof register !== 'function') return;
    return register(_commandAdapters.current);
  }, [props.registerCommands, props.runtime?.registerCommands]);

  const _localActionArguments = {
    "playColumn": ["column"],
    "resetGame": [],
    "applyRoomToUrl": ["roomId", "inviteBaseUrl"],
    "copyInviteUrl": [],
    "ensureRoom": [],
    "initializeGame": [],
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
    void _runLifecycle("c4_mount_ensure_roomc4_ensure_room", "takeLatest", (signal) => ensureRoom({ signal }), "Module mount lifecycle failed:");
  }, []);
  useEffect(() => {
    void _runLifecycle("c4_mount_initializec4_initialize", "takeLatest", (signal) => initializeGame({ signal }), "Module mount lifecycle failed:");
  }, []);
  const _inputLifecycleMounted0 = useRef(false);
  useEffect(() => {
    if (!_inputLifecycleMounted0.current) { _inputLifecycleMounted0.current = true; return; }
    set_inviteUrl(structuredClone(""));
    const timer = setTimeout(() => { void _runLifecycle("c4_inputs_initializec4_initialize", "takeLatest", (signal) => initializeGame({ signal }), 'Module input lifecycle failed:'); }, 100);
    return () => clearTimeout(timer);
  }, [roomId, inviteRoomId]);

  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      <RudraLayoutBox id="c4_root" className="connect-four-shell">      <RudraLayoutBox id="c4_panel" className="connect-four-panel">      <RudraCoreTypography id="c4_kicker" className="connect-four-kicker" as="p" content="RUDRA SHARED STATE · LIVE ROOM" />
      <RudraCoreTypography id="c4_title" className="connect-four-title" as="h2" content="CONNECT FOUR" />
      <RudraCoreTypography id="c4_intro" className="connect-four-intro" as="p" content="This reusable module joins the roomId supplied by its application. Share the application URL configured for that room; Red moves first." />
      <RudraLayoutBox id="c4_room" className="connect-four-room" data-label={inputs?.roomId} role="status" aria-live="polite" />
      <RudraLayoutBox id="c4_invite_row" className="connect-four-invite">      <RudraCoreTypography id="c4_invite_url" className="connect-four-invite-url" as="p" content={inviteUrl} />
      <RudraLayoutBox id="c4_copy_invite_button" className="connect-four-copy" onClick={(...eventArgs) => _callAction("copyInviteUrl", {}, eventArgs)} tabIndex={0} aria-label="Copy invite URL" data-label="Copy invite" role="button" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_status_box" className="connect-four-status">      <RudraLayoutBox id="c4_status" className="connect-four-status-text" data-label={sharedState?.game?.status} />
      <RudraLayoutBox id="c4_players" className="connect-four-players" data-label={sharedState?.game?.playersLabel} />
</RudraLayoutBox>
      <RudraLayoutGrid id="c4_board" className="connect-four-board" as="div" columns={6}>      <RudraLayoutBox id="c4_cell_0" className="connect-four-cell" tabIndex={0} aria-label="Drop a disc in column 1" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 0}, eventArgs)}>      <RudraThreeSpriteAnimator id="c4_disc_0" className="connect-four-disc-anim" alt="" speed={1} paused={false} autoPlay={true} objectFit="contain" imageClassName="connect-four-disc-image" width="82%" height="82%" preload={true} animation={sharedState?.game?.board?.[0]} animations={spriteAnimations} imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_1" className="connect-four-cell" onClick={(...eventArgs) => _callAction("playColumn", {"column": 1}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 2" role="button">      <RudraThreeSpriteAnimator id="c4_disc_1" className="connect-four-disc-anim" alt="" width="82%" paused={false} autoPlay={true} animation={sharedState?.game?.board?.[1]} imageClassName="connect-four-disc-image" speed={1} height="82%" preload={true} objectFit="contain" animations={spriteAnimations} imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_2" className="connect-four-cell" tabIndex={0} aria-label="Drop a disc in column 3" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 2}, eventArgs)}>      <RudraThreeSpriteAnimator id="c4_disc_2" className="connect-four-disc-anim" width="82%" preload={true} autoPlay={true} animations={spriteAnimations} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" speed={1} height="82%" paused={false} animation={sharedState?.game?.board?.[2]} objectFit="contain" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_3" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 3}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 4">      <RudraThreeSpriteAnimator id="c4_disc_3" className="connect-four-disc-anim" speed={1} width="82%" height="82%" paused={false} preload={true} autoPlay={true} animation={sharedState?.game?.board?.[3]} alt="" objectFit="contain" animations={spriteAnimations} imageClassName="connect-four-disc-image" imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_4" className="connect-four-cell" tabIndex={0} aria-label="Drop a disc in column 5" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 4}, eventArgs)}>      <RudraThreeSpriteAnimator id="c4_disc_4" className="connect-four-disc-anim" autoPlay={true} animation={sharedState?.game?.board?.[4]} objectFit="contain" animations={spriteAnimations} imageRendering="auto" alt="" speed={1} width="82%" height="82%" paused={false} imageClassName="connect-four-disc-image" preload={true} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_5" className="connect-four-cell" onClick={(...eventArgs) => _callAction("playColumn", {"column": 5}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 6" role="button">      <RudraThreeSpriteAnimator id="c4_disc_5" className="connect-four-disc-anim" autoPlay={true} objectFit="contain" animations={spriteAnimations} imageRendering="auto" width="82%" paused={false} preload={true} animation={sharedState?.game?.board?.[5]} imageClassName="connect-four-disc-image" alt="" speed={1} height="82%" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_6" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 6}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 7">      <RudraThreeSpriteAnimator id="c4_disc_6" className="connect-four-disc-anim" speed={1} width="82%" height="82%" preload={true} animations={spriteAnimations} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" paused={false} autoPlay={true} animation={sharedState?.game?.board?.[6]} objectFit="contain" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_7" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 0}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 1">      <RudraThreeSpriteAnimator id="c4_disc_7" className="connect-four-disc-anim" autoPlay={true} imageClassName="connect-four-disc-image" imageRendering="auto" speed={1} width="82%" animation={sharedState?.game?.board?.[7]} objectFit="contain" animations={spriteAnimations} alt="" height="82%" paused={false} preload={true} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_8" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 1}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 2">      <RudraThreeSpriteAnimator id="c4_disc_8" className="connect-four-disc-anim" width="82%" preload={true} autoPlay={true} animations={spriteAnimations} imageClassName="connect-four-disc-image" height="82%" paused={false} animation={sharedState?.game?.board?.[8]} objectFit="contain" imageRendering="auto" alt="" speed={1} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_9" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 2}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 3">      <RudraThreeSpriteAnimator id="c4_disc_9" className="connect-four-disc-anim" alt="" height="82%" paused={false} animation={sharedState?.game?.board?.[9]} objectFit="contain" animations={spriteAnimations} imageRendering="auto" speed={1} width="82%" preload={true} autoPlay={true} imageClassName="connect-four-disc-image" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_10" className="connect-four-cell" aria-label="Drop a disc in column 4" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 3}, eventArgs)} tabIndex={0}>      <RudraThreeSpriteAnimator id="c4_disc_10" className="connect-four-disc-anim" width="82%" paused={false} animation={sharedState?.game?.board?.[10]} alt="" height="82%" preload={true} autoPlay={true} objectFit="contain" animations={spriteAnimations} imageClassName="connect-four-disc-image" imageRendering="auto" speed={1} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_11" className="connect-four-cell" aria-label="Drop a disc in column 5" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 4}, eventArgs)} tabIndex={0}>      <RudraThreeSpriteAnimator id="c4_disc_11" className="connect-four-disc-anim" preload={true} animation={sharedState?.game?.board?.[11]} objectFit="contain" animations={spriteAnimations} width="82%" autoPlay={true} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" speed={1} height="82%" paused={false} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_12" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 5}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 6">      <RudraThreeSpriteAnimator id="c4_disc_12" className="connect-four-disc-anim" autoPlay={true} objectFit="contain" animations={spriteAnimations} imageRendering="auto" alt="" speed={1} width="82%" height="82%" preload={true} animation={sharedState?.game?.board?.[12]} imageClassName="connect-four-disc-image" paused={false} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_13" className="connect-four-cell" aria-label="Drop a disc in column 7" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 6}, eventArgs)} tabIndex={0}>      <RudraThreeSpriteAnimator id="c4_disc_13" className="connect-four-disc-anim" objectFit="contain" imageRendering="auto" speed={1} width="82%" height="82%" paused={false} preload={true} animations={spriteAnimations} imageClassName="connect-four-disc-image" alt="" autoPlay={true} animation={sharedState?.game?.board?.[13]} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_14" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 0}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 1">      <RudraThreeSpriteAnimator id="c4_disc_14" className="connect-four-disc-anim" animation={sharedState?.game?.board?.[14]} objectFit="contain" imageClassName="connect-four-disc-image" imageRendering="auto" width="82%" height="82%" paused={false} autoPlay={true} animations={spriteAnimations} alt="" speed={1} preload={true} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_15" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 1}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 2">      <RudraThreeSpriteAnimator id="c4_disc_15" className="connect-four-disc-anim" alt="" speed={1} width="82%" height="82%" preload={true} autoPlay={true} animations={spriteAnimations} paused={false} animation={sharedState?.game?.board?.[15]} objectFit="contain" imageClassName="connect-four-disc-image" imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_16" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 2}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 3">      <RudraThreeSpriteAnimator id="c4_disc_16" className="connect-four-disc-anim" width="82%" height="82%" paused={false} autoPlay={true} animations={spriteAnimations} imageClassName="connect-four-disc-image" alt="" speed={1} preload={true} animation={sharedState?.game?.board?.[16]} objectFit="contain" imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_17" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 3}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 4">      <RudraThreeSpriteAnimator id="c4_disc_17" className="connect-four-disc-anim" alt="" speed={1} width="82%" paused={false} autoPlay={true} objectFit="contain" imageRendering="auto" height="82%" preload={true} animation={sharedState?.game?.board?.[17]} animations={spriteAnimations} imageClassName="connect-four-disc-image" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_18" className="connect-four-cell" aria-label="Drop a disc in column 5" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 4}, eventArgs)} tabIndex={0}>      <RudraThreeSpriteAnimator id="c4_disc_18" className="connect-four-disc-anim" height="82%" paused={false} imageClassName="connect-four-disc-image" alt="" speed={1} preload={true} autoPlay={true} animation={sharedState?.game?.board?.[18]} objectFit="contain" animations={spriteAnimations} imageRendering="auto" width="82%" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_19" className="connect-four-cell" onClick={(...eventArgs) => _callAction("playColumn", {"column": 5}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 6" role="button">      <RudraThreeSpriteAnimator id="c4_disc_19" className="connect-four-disc-anim" alt="" speed={1} height="82%" autoPlay={true} animation={sharedState?.game?.board?.[19]} objectFit="contain" imageClassName="connect-four-disc-image" width="82%" paused={false} preload={true} animations={spriteAnimations} imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_20" className="connect-four-cell" tabIndex={0} aria-label="Drop a disc in column 7" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 6}, eventArgs)}>      <RudraThreeSpriteAnimator id="c4_disc_20" className="connect-four-disc-anim" speed={1} width="82%" preload={true} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" height="82%" paused={false} autoPlay={true} animation={sharedState?.game?.board?.[20]} objectFit="contain" animations={spriteAnimations} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_21" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 0}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 1">      <RudraThreeSpriteAnimator id="c4_disc_21" className="connect-four-disc-anim" alt="" width="82%" height="82%" preload={true} objectFit="contain" animations={spriteAnimations} imageRendering="auto" speed={1} paused={false} autoPlay={true} animation={sharedState?.game?.board?.[21]} imageClassName="connect-four-disc-image" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_22" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 1}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 2">      <RudraThreeSpriteAnimator id="c4_disc_22" className="connect-four-disc-anim" imageRendering="auto" alt="" width="82%" height="82%" paused={false} preload={true} autoPlay={true} animation={sharedState?.game?.board?.[22]} objectFit="contain" speed={1} animations={spriteAnimations} imageClassName="connect-four-disc-image" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_23" className="connect-four-cell" onClick={(...eventArgs) => _callAction("playColumn", {"column": 2}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 3" role="button">      <RudraThreeSpriteAnimator id="c4_disc_23" className="connect-four-disc-anim" alt="" speed={1} preload={true} animations={spriteAnimations} imageRendering="auto" width="82%" height="82%" paused={false} autoPlay={true} animation={sharedState?.game?.board?.[23]} objectFit="contain" imageClassName="connect-four-disc-image" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_24" className="connect-four-cell" tabIndex={0} aria-label="Drop a disc in column 4" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 3}, eventArgs)}>      <RudraThreeSpriteAnimator id="c4_disc_24" className="connect-four-disc-anim" preload={true} autoPlay={true} animation={sharedState?.game?.board?.[24]} imageClassName="connect-four-disc-image" speed={1} width="82%" objectFit="contain" animations={spriteAnimations} imageRendering="auto" alt="" height="82%" paused={false} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_25" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 4}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 5">      <RudraThreeSpriteAnimator id="c4_disc_25" className="connect-four-disc-anim" speed={1} width="82%" height="82%" paused={false} preload={true} objectFit="contain" animations={spriteAnimations} autoPlay={true} animation={sharedState?.game?.board?.[25]} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_26" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 5}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 6">      <RudraThreeSpriteAnimator id="c4_disc_26" className="connect-four-disc-anim" imageClassName="connect-four-disc-image" imageRendering="auto" alt="" height="82%" preload={true} objectFit="contain" animations={spriteAnimations} speed={1} width="82%" paused={false} autoPlay={true} animation={sharedState?.game?.board?.[26]} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_27" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 6}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 7">      <RudraThreeSpriteAnimator id="c4_disc_27" className="connect-four-disc-anim" alt="" speed={1} paused={false} preload={true} autoPlay={true} animation={sharedState?.game?.board?.[27]} objectFit="contain" animations={spriteAnimations} width="82%" height="82%" imageClassName="connect-four-disc-image" imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_28" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 0}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 1">      <RudraThreeSpriteAnimator id="c4_disc_28" className="connect-four-disc-anim" speed={1} height="82%" paused={false} preload={true} animation={sharedState?.game?.board?.[28]} animations={spriteAnimations} alt="" width="82%" autoPlay={true} objectFit="contain" imageClassName="connect-four-disc-image" imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_29" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 1}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 2">      <RudraThreeSpriteAnimator id="c4_disc_29" className="connect-four-disc-anim" speed={1} paused={false} preload={true} autoPlay={true} animation={sharedState?.game?.board?.[29]} objectFit="contain" animations={spriteAnimations} imageClassName="connect-four-disc-image" alt="" width="82%" height="82%" imageRendering="auto" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_30" className="connect-four-cell" tabIndex={0} aria-label="Drop a disc in column 3" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 2}, eventArgs)}>      <RudraThreeSpriteAnimator id="c4_disc_30" className="connect-four-disc-anim" alt="" speed={1} animations={spriteAnimations} imageClassName="connect-four-disc-image" imageRendering="auto" width="82%" height="82%" paused={false} preload={true} autoPlay={true} animation={sharedState?.game?.board?.[30]} objectFit="contain" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_31" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 3}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 4">      <RudraThreeSpriteAnimator id="c4_disc_31" className="connect-four-disc-anim" objectFit="contain" animations={spriteAnimations} imageRendering="auto" speed={1} height="82%" paused={false} preload={true} autoPlay={true} imageClassName="connect-four-disc-image" alt="" width="82%" animation={sharedState?.game?.board?.[31]} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_32" className="connect-four-cell" onClick={(...eventArgs) => _callAction("playColumn", {"column": 4}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 5" role="button">      <RudraThreeSpriteAnimator id="c4_disc_32" className="connect-four-disc-anim" objectFit="contain" animations={spriteAnimations} speed={1} preload={true} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" width="82%" height="82%" paused={false} autoPlay={true} animation={sharedState?.game?.board?.[32]} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_33" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 5}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 6">      <RudraThreeSpriteAnimator id="c4_disc_33" className="connect-four-disc-anim" paused={false} preload={true} autoPlay={true} animation={sharedState?.game?.board?.[33]} animations={spriteAnimations} height="82%" objectFit="contain" imageClassName="connect-four-disc-image" imageRendering="auto" alt="" speed={1} width="82%" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_34" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 6}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 7">      <RudraThreeSpriteAnimator id="c4_disc_34" className="connect-four-disc-anim" speed={1} width="82%" height="82%" paused={false} autoPlay={true} animation={sharedState?.game?.board?.[34]} objectFit="contain" preload={true} animations={spriteAnimations} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_35" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 0}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 1">      <RudraThreeSpriteAnimator id="c4_disc_35" className="connect-four-disc-anim" animation={sharedState?.game?.board?.[35]} animations={spriteAnimations} imageRendering="auto" speed={1} height="82%" paused={false} preload={true} autoPlay={true} objectFit="contain" imageClassName="connect-four-disc-image" alt="" width="82%" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_36" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 1}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 2">      <RudraThreeSpriteAnimator id="c4_disc_36" className="connect-four-disc-anim" width="82%" paused={false} preload={true} animation={sharedState?.game?.board?.[36]} animations={spriteAnimations} imageRendering="auto" speed={1} height="82%" autoPlay={true} objectFit="contain" imageClassName="connect-four-disc-image" alt="" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_37" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 2}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 3">      <RudraThreeSpriteAnimator id="c4_disc_37" className="connect-four-disc-anim" autoPlay={true} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" paused={false} preload={true} animation={sharedState?.game?.board?.[37]} objectFit="contain" animations={spriteAnimations} speed={1} width="82%" height="82%" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_38" className="connect-four-cell" tabIndex={0} aria-label="Drop a disc in column 4" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 3}, eventArgs)}>      <RudraThreeSpriteAnimator id="c4_disc_38" className="connect-four-disc-anim" objectFit="contain" animations={spriteAnimations} imageRendering="auto" speed={1} width="82%" height="82%" paused={false} preload={true} autoPlay={true} imageClassName="connect-four-disc-image" alt="" animation={sharedState?.game?.board?.[38]} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_39" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 4}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 5">      <RudraThreeSpriteAnimator id="c4_disc_39" className="connect-four-disc-anim" objectFit="contain" imageClassName="connect-four-disc-image" height="82%" paused={false} animation={sharedState?.game?.board?.[39]} animations={spriteAnimations} imageRendering="auto" alt="" speed={1} width="82%" preload={true} autoPlay={true} />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_40" className="connect-four-cell" aria-label="Drop a disc in column 6" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 5}, eventArgs)} tabIndex={0}>      <RudraThreeSpriteAnimator id="c4_disc_40" className="connect-four-disc-anim" preload={true} animation={sharedState?.game?.board?.[40]} objectFit="contain" imageRendering="auto" alt="" speed={1} width="82%" height="82%" paused={false} autoPlay={true} animations={spriteAnimations} imageClassName="connect-four-disc-image" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_cell_41" className="connect-four-cell" role="button" onClick={(...eventArgs) => _callAction("playColumn", {"column": 6}, eventArgs)} tabIndex={0} aria-label="Drop a disc in column 7">      <RudraThreeSpriteAnimator id="c4_disc_41" className="connect-four-disc-anim" autoPlay={true} animation={sharedState?.game?.board?.[41]} objectFit="contain" animations={spriteAnimations} height="82%" preload={true} imageClassName="connect-four-disc-image" imageRendering="auto" alt="" speed={1} width="82%" paused={false} />
</RudraLayoutBox>
</RudraLayoutGrid>
      <RudraLayoutBox id="c4_footer" className="connect-four-footer">      <RudraLayoutBox id="c4_reset" className="connect-four-reset" role="button" onClick={(...eventArgs) => _callAction("resetGame", {}, eventArgs)} tabIndex={0} data-label="Reset shared game">      <RudraCoreTypography id="c4_reset_label" className="connect-four-reset-label" as="span" content="Reset shared game" />
</RudraLayoutBox>
      <RudraLayoutBox id="c4_connection" className="connect-four-connection" data-label={sharedState?.status} />
</RudraLayoutBox>
</RudraLayoutBox>
</RudraLayoutBox>
    </div>
  );
}
