import { jsx as _, jsxs as p, Fragment as h } from "react/jsx-runtime";
import { useState as v, useEffect as R, useRef as K, useCallback as E } from "react";
import { MessageBubble as ht, MessageComposer as ft, ToastStack as xt } from "@rudra-studio/rudra-widgets";
import { Surface as _t, Typography as I, Button as Pe, IconButton as Me, Alert as bt } from "@rudra-studio/rudra-core";
import { Box as $, Flex as ze, ScrollArea as vt, Repeater as At } from "@rudra-studio/rudra-layout";
function It(s) {
  const M = s.serverData || s.serverState || {}, k = s.sharedState || {}, L = s.applicationState || M.applicationState || {}, D = s.pageState || M.pageState || {}, q = s.pageData || M.pageData || {}, Re = {
    ...s.runtime?.functions || {},
    ...s.runtime?.actions || {},
    ...s.functions || {},
    ...s.actions || {}
  }, C = s.$theme ?? s.theme ?? s.data?.$theme ?? s.runtime?.data?.$theme ?? s.runtime?.theme, Q = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [wt, W] = v(() => C ?? Q());
  R(() => {
    C != null && W(C);
  }, [C]), R(() => {
    if (C != null || typeof document > "u") return;
    const e = document.documentElement, t = (o) => W(o?.detail?.theme ?? Q()), n = new MutationObserver(t);
    return n.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      n.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [C]);
  const F = K(null), [J, H] = v("lg");
  R(() => {
    if (!F.current) return;
    const e = new ResizeObserver((t) => {
      for (let n of t) {
        const o = n.contentRect.width;
        o < 768 ? H("sm") : o < 1024 ? H("md") : H("lg");
      }
    });
    return e.observe(F.current), () => e.disconnect();
  }, []);
  const x = E((e) => typeof e != "object" || e === null ? e : J === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : J === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [J]), f = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, Ie = s.defaultOpen !== void 0 ? s.defaultOpen : s.data?.defaultOpen !== void 0 ? s.data.defaultOpen : !1, je = s.visible !== void 0 ? s.visible : s.data?.visible !== void 0 ? s.data.visible : !0, Oe = s.locale !== void 0 ? s.locale : s.data?.locale !== void 0 ? s.data.locale : "en", Te = s.contextEndpoint !== void 0 ? s.contextEndpoint : s.data?.contextEndpoint !== void 0 ? s.data.contextEndpoint : "/api/ai-context", Ne = s.aiProvider !== void 0 ? s.aiProvider : s.data?.aiProvider !== void 0 ? s.data.aiProvider : "anthropic", Ee = s.showToolActivity !== void 0 ? s.showToolActivity : s.data?.showToolActivity !== void 0 ? s.data.showToolActivity : !0, ke = s.visualTheme !== void 0 ? s.visualTheme : s.data?.visualTheme !== void 0 ? s.data.visualTheme : "aurora", Le = s.customClass !== void 0 ? s.customClass : s.data?.customClass !== void 0 ? s.data.customClass : "", De = s.disabled !== void 0 ? s.disabled : s.data?.disabled !== void 0 ? s.data.disabled : !1, qe = s.sessionId !== void 0 ? s.sessionId : s.data?.sessionId !== void 0 ? s.data.sessionId : "", Be = s.placeholder !== void 0 ? s.placeholder : s.data?.placeholder !== void 0 ? s.data.placeholder : "Ask Lumora anything…", Ke = s.systemPrompt !== void 0 ? s.systemPrompt : s.data?.systemPrompt !== void 0 ? s.data.systemPrompt : "You are Lumora, a concise and helpful AI assistant. Provide clear, accurate, and professional responses.", $e = s.maxMessages !== void 0 ? s.maxMessages : s.data?.maxMessages !== void 0 ? s.data.maxMessages : 100, Fe = s.anthropicModel !== void 0 ? s.anthropicModel : s.data?.anthropicModel !== void 0 ? s.data.anthropicModel : "claude-sonnet-4-5", Je = s.contextScopeKey !== void 0 ? s.contextScopeKey : s.data?.contextScopeKey !== void 0 ? s.data.contextScopeKey : "", He = s.assistantName !== void 0 ? s.assistantName : s.data?.assistantName !== void 0 ? s.data.assistantName : "Lumora", Ue = s.title !== void 0 ? s.title : s.data?.title !== void 0 ? s.data.title : "Lumora Assistant", Ye = s.toolManifest !== void 0 ? s.toolManifest : s.data?.toolManifest !== void 0 ? s.data.toolManifest : [], Ze = s.allowAttachments !== void 0 ? s.allowAttachments : s.data?.allowAttachments !== void 0 ? s.data.allowAttachments : !1, Ge = s.welcomeMessage !== void 0 ? s.welcomeMessage : s.data?.welcomeMessage !== void 0 ? s.data.welcomeMessage : "Hi — how can I help?", Qe = s.chatEndpoint !== void 0 ? s.chatEndpoint : s.data?.chatEndpoint !== void 0 ? s.data.chatEndpoint : "/api/ai/chat", We = s.contextNamespace !== void 0 ? s.contextNamespace : s.data?.contextNamespace !== void 0 ? s.data.contextNamespace : "universal-ai-chatbot", Xe = s.contextDatabaseEnabled !== void 0 ? s.contextDatabaseEnabled : s.data?.contextDatabaseEnabled !== void 0 ? s.data.contextDatabaseEnabled : !1, Ve = s.maxOutputTokens !== void 0 ? s.maxOutputTokens : s.data?.maxOutputTokens !== void 0 ? s.data.maxOutputTokens : 1024, et = s.geminiModel !== void 0 ? s.geminiModel : s.data?.geminiModel !== void 0 ? s.data.geminiModel : "gemini-2.5-flash", tt = s.presentationMode !== void 0 ? s.presentationMode : s.data?.presentationMode !== void 0 ? s.data.presentationMode : "floating", st = s.contextCacheTtlSeconds !== void 0 ? s.contextCacheTtlSeconds : s.data?.contextCacheTtlSeconds !== void 0 ? s.data.contextCacheTtlSeconds : 60, ot = s.permissions !== void 0 ? s.permissions : s.data?.permissions !== void 0 ? s.data.permissions : {}, at = s.context !== void 0 ? s.context : s.data?.context !== void 0 ? s.data.context : {}, nt = s.requestHeaders !== void 0 ? s.requestHeaders : s.data?.requestHeaders !== void 0 ? s.data.requestHeaders : {}, r = { defaultOpen: Ie, visible: je, locale: Oe, contextEndpoint: Te, aiProvider: Ne, showToolActivity: Ee, visualTheme: ke, customClass: Le, disabled: De, sessionId: qe, placeholder: Be, systemPrompt: Ke, maxMessages: $e, anthropicModel: Fe, contextScopeKey: Je, assistantName: He, title: Ue, toolManifest: Ye, allowAttachments: Ze, welcomeMessage: Ge, chatEndpoint: Qe, contextNamespace: We, contextDatabaseEnabled: Xe, maxOutputTokens: Ve, geminiModel: et, presentationMode: tt, contextCacheTtlSeconds: st, permissions: ot, context: at, requestHeaders: nt }, [X, V] = v(() => structuredClone([])), [rt, ee] = v(() => structuredClone({})), [it, te] = v(() => structuredClone({})), [se, oe] = v(() => structuredClone("lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora")), [B, ae] = v(() => structuredClone("")), [U, ne] = v(() => structuredClone(!1)), [re, ie] = v(() => structuredClone([])), [ce, de] = v(() => structuredClone(!0)), [le, ue] = v(() => structuredClone(!0)), [ct, me] = v(() => structuredClone(!1)), [pe, ge] = v(() => structuredClone(!1)), y = { toasts: X, pendingAction: rt, runtimeContext: it, themeClass: se, errorMessage: B, isSending: U, messages: re, showLauncher: ce, isFloating: le, hasInitialized: ct, isOpen: pe }, m = E((e, t) => {
    switch (e) {
      case "toasts":
        return V(t), t;
      case "pendingAction":
        return ee(t), t;
      case "runtimeContext":
        return te(t), t;
      case "themeClass":
        return oe(t), t;
      case "errorMessage":
        return ae(t), t;
      case "isSending":
        return ne(t), t;
      case "messages":
        return ie(t), t;
      case "showLauncher":
        return de(t), t;
      case "isFloating":
        return ue(t), t;
      case "hasInitialized":
        return me(t), t;
      case "isOpen":
        return ge(t), t;
      default:
        return t;
    }
  }, []);
  E((e, t) => {
    const [n, ...o] = String(e || "").split(".");
    if (!n) return t;
    if (o.length === 0) return m(n, t);
    const a = (i) => {
      const c = Array.isArray(i) ? [...i] : { ...i || {} };
      let l = c;
      return o.forEach((u, d) => {
        d === o.length - 1 ? l[u] = t : (l[u] = Array.isArray(l[u]) ? [...l[u]] : { ...l[u] || {} }, l = l[u]);
      }), c;
    };
    switch (n) {
      case "toasts":
        return V(a), t;
      case "pendingAction":
        return ee(a), t;
      case "runtimeContext":
        return te(a), t;
      case "themeClass":
        return oe(a), t;
      case "errorMessage":
        return ae(a), t;
      case "isSending":
        return ne(a), t;
      case "messages":
        return ie(a), t;
      case "showLauncher":
        return de(a), t;
      case "isFloating":
        return ue(a), t;
      case "hasInitialized":
        return me(a), t;
      case "isOpen":
        return ge(a), t;
      default:
        return t;
    }
  }, [m]);
  const dt = { actionCompleted: { properties: { actionId: { type: "string" }, result: { type: "object" } }, type: "object" }, actionRequested: { properties: { action: { type: "object" } }, type: "object" }, attachmentSelected: { additionalProperties: !0, properties: { files: { type: "array" } }, type: "object" }, contextChanged: { type: "object" }, contextResolved: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, contextUpdated: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, conversationCleared: { type: "object" }, error: { properties: { code: { type: "string" }, message: { type: "string" } }, type: "object" }, escalationRequested: { additionalProperties: !0, properties: { action: { type: "object" }, message: { type: "object" } }, type: "object" }, messageReceived: { properties: { message: { type: "object" } }, type: "object" }, responseCancelled: { additionalProperties: !0, properties: { reason: { type: "string" } }, type: "object" } }, Y = (e, t, n) => {
    if (!t || typeof t != "object") return "";
    const o = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], a = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(a) && !(a === "integer" && o.includes("number"))) return n + " must be " + o.join(" or ") + ".";
    if (t.enum && !t.enum.some((i) => JSON.stringify(i) === JSON.stringify(e))) return n + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const i of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, i)) return n + "." + i + " is required.";
      for (const [i, c] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, i)) {
        const l = Y(e[i], c, n + "." + i);
        if (l) return l;
      }
    }
    if (Array.isArray(e) && t.items) for (let i = 0; i < e.length; i++) {
      const c = Y(e[i], t.items, n + "[" + i + "]");
      if (c) return c;
    }
    return "";
  }, b = E(async (e, t, n = !1) => {
    const o = dt[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const a = Y(t, o, "output." + e);
    if (a) throw new Error(a);
    const i = s.onOutput || s.onModuleOutput || s.runtime?.onOutput;
    if (typeof i != "function") return t;
    const c = i(e, t, { moduleId: s.moduleId, awaitHandlers: n });
    return n ? await c : t;
  }, [s.onOutput, s.onModuleOutput, s.runtime?.onOutput, s.moduleId]), ye = (e, t) => {
    const n = String(t || "").split(".").filter(Boolean);
    if (!(!n.length || n.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return n.reduce((o, a) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(a in o) ? o.get(a) : o[a];
      }, e);
  }, z = (e, t) => {
    if (Array.isArray(e)) return e.map((o) => z(o, t));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([o, a]) => [z(o, t), z(a, t)]));
    if (typeof e != "string") return e;
    const n = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return n ? ye(t, n[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, a) => {
      const i = ye(t, a);
      return i == null ? "" : typeof i == "object" ? JSON.stringify(i) : String(i);
    });
  };
  async function he(e = {}) {
    return m("messages", r.welcomeMessage ? [{ id: "welcome-" + Date.now(), role: "assistant", sender: r.assistantName || "Assistant", variant: "incoming", content: r.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), m("pendingAction", {}), m("errorMessage", ""), b("conversationCleared", { sessionId: r.sessionId }, !1).catch((t) => console.error("Module output delivery failed", t)), { cleared: !0 };
  }
  async function Z(e = {}) {
    const t = e || {}, n = {}, o = {};
    {
      t.event;
      const a = await (async () => {
        const i = t.message && typeof t.message == "object" ? t.message.text ?? t.message.content ?? "" : t.message;
        return { type: "text", text: String(i ?? "").trim() };
      })();
      o.normalize_user = a, n.customCodeResult = a;
    }
    if (o.normalize_user.text)
      if (m("isSending", !0), m("errorMessage", ""), m("messages", [...y.messages, { id: "user-" + Date.now(), role: "user", sender: "You", variant: "outgoing", content: o.normalize_user.text, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }].slice(-r.maxMessages)), r.contextDatabaseEnabled === !0) {
        {
          t.event;
          const a = await (async () => {
            const i = o.read_context_db, c = Array.isArray(i) ? i : i && Array.isArray(i.data) ? i.data : [], l = c[0] && typeof c[0] == "object" ? c[0] : null, u = o.use_direct_context && typeof o.use_direct_context == "object" ? o.use_direct_context : {}, d = r.contextDatabaseEnabled === !0, g = d && l ? l : u, A = r.context && typeof r.context == "object" && !Array.isArray(r.context) ? r.context : {}, T = g.context && typeof g.context == "object" && !Array.isArray(g.context) ? g.context : A, N = typeof g.systemPrompt == "string" && g.systemPrompt.trim() ? g.systemPrompt : typeof r.systemPrompt == "string" && r.systemPrompt.trim() ? r.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: T, systemPrompt: N, revision: Number(g.revision || 0), updatedAt: typeof g.updatedAt == "string" && g.updatedAt ? g.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: d ? "database" : "direct" }, source: d ? "database" : "direct", found: !!l };
          })();
          o.normalize_context = a, n.customCodeResult = a;
        }
        m("runtimeContext", o.normalize_context.context), b("contextResolved", { cache: o.normalize_context.cache, context: o.normalize_context.context, revision: o.normalize_context.revision, sessionId: r.sessionId, systemPrompt: o.normalize_context.systemPrompt, updatedAt: o.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
        {
          t.event;
          const a = await (async () => {
            const c = (Array.isArray(y.messages) ? y.messages : []).filter((d) => d && (d.role === "user" || d.role === "assistant")), l = c.findIndex((d) => d.role === "user"), u = l >= 0 ? c.slice(l) : [];
            return { anthropicMessages: u.map((d) => ({ role: d.role === "assistant" ? "assistant" : "user", content: String(d.content || "") })), geminiContents: u.map((d) => ({ role: d.role === "assistant" ? "model" : "user", parts: [{ text: String(d.content || "") }] })) };
          })();
          o.build_provider_payloads = a, n.customCodeResult = a;
        }
        if (String(r.aiProvider || "anthropic").toLowerCase() === "anthropic") {
          {
            const a = { args: t, inputs: r, state: y, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: M, vars: n, stepResults: o }, i = z({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "{{ inputs.maxOutputTokens }}", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: i, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
            const u = l.data;
            o.call_anthropic = u, n.apiResult = u;
          }
          return await O({ messages: y.messages, response: o.call_anthropic || o.call_gemini }), m("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
        } else {
          {
            const a = { args: t, inputs: r, state: y, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: M, vars: n, stepResults: o }, i = z({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: i, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
            const u = l.data;
            o.call_gemini = u, n.apiResult = u;
          }
          return await O({ messages: y.messages, response: o.call_anthropic || o.call_gemini }), m("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
        }
      } else {
        {
          t.event;
          const a = await (async () => {
            const i = r.context && typeof r.context == "object" && !Array.isArray(r.context) ? r.context : {}, c = typeof r.systemPrompt == "string" && r.systemPrompt.trim() ? r.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: i, systemPrompt: c, revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: "direct" }, source: "direct" };
          })();
          o.use_direct_context = a, n.customCodeResult = a;
        }
        {
          {
            t.event;
            const a = await (async () => {
              const i = o.read_context_db, c = Array.isArray(i) ? i : i && Array.isArray(i.data) ? i.data : [], l = c[0] && typeof c[0] == "object" ? c[0] : null, u = o.use_direct_context && typeof o.use_direct_context == "object" ? o.use_direct_context : {}, d = r.contextDatabaseEnabled === !0, g = d && l ? l : u, A = r.context && typeof r.context == "object" && !Array.isArray(r.context) ? r.context : {}, T = g.context && typeof g.context == "object" && !Array.isArray(g.context) ? g.context : A, N = typeof g.systemPrompt == "string" && g.systemPrompt.trim() ? g.systemPrompt : typeof r.systemPrompt == "string" && r.systemPrompt.trim() ? r.systemPrompt : "You are a concise and helpful AI assistant.";
              return { context: T, systemPrompt: N, revision: Number(g.revision || 0), updatedAt: typeof g.updatedAt == "string" && g.updatedAt ? g.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: d ? "database" : "direct" }, source: d ? "database" : "direct", found: !!l };
            })();
            o.normalize_context = a, n.customCodeResult = a;
          }
          m("runtimeContext", o.normalize_context.context), b("contextResolved", { cache: o.normalize_context.cache, context: o.normalize_context.context, revision: o.normalize_context.revision, sessionId: r.sessionId, systemPrompt: o.normalize_context.systemPrompt, updatedAt: o.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
          {
            t.event;
            const a = await (async () => {
              const c = (Array.isArray(y.messages) ? y.messages : []).filter((d) => d && (d.role === "user" || d.role === "assistant")), l = c.findIndex((d) => d.role === "user"), u = l >= 0 ? c.slice(l) : [];
              return { anthropicMessages: u.map((d) => ({ role: d.role === "assistant" ? "assistant" : "user", content: String(d.content || "") })), geminiContents: u.map((d) => ({ role: d.role === "assistant" ? "model" : "user", parts: [{ text: String(d.content || "") }] })) };
            })();
            o.build_provider_payloads = a, n.customCodeResult = a;
          }
          if (String(r.aiProvider || "anthropic").toLowerCase() === "anthropic") {
            {
              const a = { args: t, inputs: r, state: y, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: M, vars: n, stepResults: o }, i = z({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "{{ inputs.maxOutputTokens }}", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: i, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
              const u = l.data;
              o.call_anthropic = u, n.apiResult = u;
            }
            return await O({ messages: y.messages, response: o.call_anthropic || o.call_gemini }), m("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
          } else {
            {
              const a = { args: t, inputs: r, state: y, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: M, vars: n, stepResults: o }, i = z({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: i, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
              const u = l.data;
              o.call_gemini = u, n.apiResult = u;
            }
            return await O({ messages: y.messages, response: o.call_anthropic || o.call_gemini }), m("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
          }
        }
      }
    else
      return { accepted: !1, reason: "empty" };
  }
  async function fe(e = {}) {
    const t = e || {}, n = {};
    {
      t.event;
      const o = await (async () => {
        const i = [...Array.isArray(y.messages) ? y.messages : []].reverse().find((c) => c && c.role === "user");
        return { type: "text", text: i ? String(i.content || "") : "" };
      })();
      n.find_retry_message = o;
    }
    return n.find_retry_message.text ? (await Z({ message: n.find_retry_message }), n.run_retry) : { accepted: !1, reason: "no-user-message" };
  }
  async function xe(e = {}) {
    const t = e || {};
    return m("isSending", !1), b("responseCancelled", { reason: t.reason || "host-requested" }, !1).catch((n) => console.error("Module output delivery failed", n)), { cancelled: !0 };
  }
  async function lt(e = {}) {
    return m("hasInitialized", !0), m("isOpen", !1), m("showLauncher", !0), { open: !1 };
  }
  async function _e(e = {}) {
    return y.hasInitialized === !0 ? { initialized: !0, reused: !0 } : (m("isOpen", y.hasInitialized === !0 ? y.isOpen : r.visible !== !1 && (r.presentationMode !== "floating" || r.defaultOpen === !0)), m("isFloating", r.presentationMode === "floating"), m("showLauncher", y.hasInitialized === !0 ? y.showLauncher : r.visible !== !1 && r.presentationMode === "floating" && r.defaultOpen !== !0), m("themeClass", "lumora-ai-host lumora-ai-floating lumora-ai-theme-" + (r.visualTheme || "aurora")), m("messages", y.messages.length ? y.messages : r.welcomeMessage ? [{ id: "welcome", role: "assistant", sender: r.assistantName || "Assistant", variant: "incoming", content: r.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), m("hasInitialized", !0), { initialized: !0 });
  }
  async function be(e = {}) {
    return r.contextDatabaseEnabled === !0 ? { initialized: !0, table: "rudra_ai_context" } : { initialized: !1, reason: "database-context-disabled" };
  }
  async function ut(e = {}) {
    return m("hasInitialized", !0), m("isOpen", !0), m("showLauncher", !1), { open: !0 };
  }
  async function ve(e = {}) {
    const t = e || {}, n = {};
    if (r.contextDatabaseEnabled === !0) {
      {
        t.event;
        const o = await (async () => {
          const a = n.upsert_context_db, i = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = i[0] && typeof i[0] == "object" ? i[0] : null, l = n.use_direct_context_update && typeof n.use_direct_context_update == "object" ? n.use_direct_context_update : {}, u = r.contextDatabaseEnabled === !0, d = u && c ? c : l;
          return { context: d.context && typeof d.context == "object" ? d.context : t.context, systemPrompt: typeof d.systemPrompt == "string" ? d.systemPrompt : t.systemPrompt || r.systemPrompt || "", revision: Number(d.revision || 0), updatedAt: typeof d.updatedAt == "string" && d.updatedAt ? d.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: u ? { enabled: !1, invalidated: !!c, source: "database" } : d.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || r.contextScopeKey || r.sessionId || "default", persisted: u && !!c, updated: u ? !!c : !0 };
        })();
        n.normalize_context_update = o;
      }
      return m("runtimeContext", n.normalize_context_update.context), b("contextUpdated", n.normalize_context_update, !1).catch((o) => console.error("Module output delivery failed", o)), b("contextChanged", { context: n.normalize_context_update.context, persisted: n.normalize_context_update.persisted, revision: n.normalize_context_update.revision }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_context_update;
    } else {
      {
        t.event;
        const o = await (async () => ({ context: t.context && typeof t.context == "object" ? t.context : {}, systemPrompt: typeof t.systemPrompt == "string" ? t.systemPrompt : r.systemPrompt || "", revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || r.contextScopeKey || r.sessionId || "default", persisted: !1, updated: !0 }))();
        n.use_direct_context_update = o;
      }
      {
        {
          t.event;
          const o = await (async () => {
            const a = n.upsert_context_db, i = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = i[0] && typeof i[0] == "object" ? i[0] : null, l = n.use_direct_context_update && typeof n.use_direct_context_update == "object" ? n.use_direct_context_update : {}, u = r.contextDatabaseEnabled === !0, d = u && c ? c : l;
            return { context: d.context && typeof d.context == "object" ? d.context : t.context, systemPrompt: typeof d.systemPrompt == "string" ? d.systemPrompt : t.systemPrompt || r.systemPrompt || "", revision: Number(d.revision || 0), updatedAt: typeof d.updatedAt == "string" && d.updatedAt ? d.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: u ? { enabled: !1, invalidated: !!c, source: "database" } : d.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || r.contextScopeKey || r.sessionId || "default", persisted: u && !!c, updated: u ? !!c : !0 };
          })();
          n.normalize_context_update = o;
        }
        return m("runtimeContext", n.normalize_context_update.context), b("contextUpdated", n.normalize_context_update, !1).catch((o) => console.error("Module output delivery failed", o)), b("contextChanged", { context: n.normalize_context_update.context, persisted: n.normalize_context_update.persisted, revision: n.normalize_context_update.revision }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_context_update;
      }
    }
  }
  async function Ae(e = {}) {
    return m("errorMessage", ""), m("toasts", []), { dismissed: !0 };
  }
  async function O(e = {}) {
    const t = e || {}, n = {};
    {
      t.event;
      const o = await (async () => {
        const a = t.response && typeof t.response == "object" ? t.response : {}, i = Array.isArray(a.content) ? a.content.filter((w) => w && w.type === "text").map((w) => String(w.text || "")).join("") : "", l = (Array.isArray(a.candidates) && a.candidates[0] && a.candidates[0].content && Array.isArray(a.candidates[0].content.parts) ? a.candidates[0].content.parts : []).filter((w) => w && typeof w.text == "string").map((w) => w.text).join(""), u = a.message && typeof a.message == "object" ? a.message : {}, d = Array.isArray(a.choices) && a.choices[0] && a.choices[0].message ? a.choices[0].message : {}, g = i || l || u.content || a.text || a.response || d.content || "", A = typeof g == "string" ? g : JSON.stringify(g || ""), T = Array.isArray(a.toolCalls) ? a.toolCalls : Array.isArray(a.actions) ? a.actions : [], N = a.toolCall || T[0] || null, Se = Array.isArray(a.candidates) ? "gemini" : Array.isArray(a.content) ? "anthropic" : String(r.aiProvider || "unknown"), yt = Se === "anthropic" ? { mode: "prompt-cache", enabled: !0, readTokens: Number(a.usage && a.usage.cache_read_input_tokens || 0), writtenTokens: Number(a.usage && a.usage.cache_creation_input_tokens || 0) } : { mode: "implicit", enabled: !0, readTokens: Number(a.usageMetadata && a.usageMetadata.cachedContentTokenCount || 0) };
        return { message: { id: String(a.id || "assistant-" + Date.now()), role: "assistant", sender: r.assistantName || "Assistant", variant: "incoming", content: A || "I could not read the assistant response.", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: a.data || {} }, action: N, provider: Se, providerCache: yt };
      })();
      n.normalize_response = o;
    }
    return m("messages", [...Array.isArray(t.messages) ? t.messages : y.messages, n.normalize_response.message].slice(-r.maxMessages)), b("messageReceived", { cache: n.normalize_response.providerCache, message: n.normalize_response.message, provider: n.normalize_response.provider, raw: t.response }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_response.action ? (m("pendingAction", n.normalize_response.action), b("actionRequested", { action: n.normalize_response.action, sessionId: r.sessionId }, !1).catch((o) => console.error("Module output delivery failed", o)), ["escalate", "escalation", "handoff"].includes(String(n.normalize_response.action.type || n.normalize_response.action.name || "").toLowerCase()) && b("escalationRequested", { action: n.normalize_response.action, message: n.normalize_response.message }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_response) : n.normalize_response;
  }
  async function mt(e = {}) {
    const t = e || {};
    return b("attachmentSelected", { files: t.files }, !1).catch((n) => console.error("Module output delivery failed", n)), { accepted: !0, count: t.files.length };
  }
  async function we(e = {}) {
    const t = e || {};
    return m("messages", r.showToolActivity ? [...y.messages, { id: "tool-" + Date.now(), role: "system", sender: "Tool activity", variant: "system", content: "Tool " + t.actionId + " " + (t.status || "completed"), timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: t.result || {} }].slice(-r.maxMessages) : y.messages), m("pendingAction", {}), b("actionCompleted", { actionId: t.actionId, result: t.result || {}, status: t.status || "completed" }, !1).catch((n) => console.error("Module output delivery failed", n)), { actionId: t.actionId, completed: !0 };
  }
  const pt = {
    clearConversation: he,
    sendMessage: Z,
    retryLastMessage: fe,
    cancelResponse: xe,
    closeChat: lt,
    initializeConversation: _e,
    initializeContextStore: be,
    openChat: ut,
    loadContext: ve,
    dismissError: Ae,
    processApiResponse: O,
    handleAttachments: mt,
    provideToolResult: we
  }, S = K({});
  S.current = {
    lumora_ai_retry: (e = {}, t = {}) => fe({ ...e, signal: t.signal }),
    lumora_ai_send: (e = {}, t = {}) => Z({ ...e, signal: t.signal }),
    lumora_ai_clear: (e = {}, t = {}) => he({ ...e, signal: t.signal }),
    lumora_ai_tool_result: (e = {}, t = {}) => we({ ...e, signal: t.signal }),
    lumora_ai_load_context: (e = {}, t = {}) => ve({ ...e, signal: t.signal }),
    lumora_ai_cancel: (e = {}, t = {}) => xe({ ...e, signal: t.signal }),
    lumora_ai_dismiss_error: (e = {}, t = {}) => Ae({ ...e, signal: t.signal })
  };
  const G = K(null);
  G.current || (G.current = {
    lumora_ai_retry: (e, t) => S.current.lumora_ai_retry(e, t),
    lumora_ai_send: (e, t) => S.current.lumora_ai_send(e, t),
    lumora_ai_clear: (e, t) => S.current.lumora_ai_clear(e, t),
    lumora_ai_tool_result: (e, t) => S.current.lumora_ai_tool_result(e, t),
    lumora_ai_load_context: (e, t) => S.current.lumora_ai_load_context(e, t),
    lumora_ai_cancel: (e, t) => S.current.lumora_ai_cancel(e, t),
    lumora_ai_dismiss_error: (e, t) => S.current.lumora_ai_dismiss_error(e, t)
  }), R(() => {
    const e = s.registerCommands || s.runtime?.registerCommands;
    if (typeof e == "function")
      return e(G.current);
  }, [s.registerCommands, s.runtime?.registerCommands]);
  const gt = {
    clearConversation: [],
    sendMessage: ["message"],
    retryLastMessage: [],
    cancelResponse: ["reason"],
    closeChat: [],
    initializeConversation: [],
    initializeContextStore: [],
    openChat: [],
    loadContext: ["context", "replace", "scopeKey", "systemPrompt", "expectedRevision"],
    dismissError: [],
    processApiResponse: ["response", "messages"],
    handleAttachments: ["files"],
    provideToolResult: ["actionId", "result", "status"]
  }, P = (e, t = {}, n = []) => {
    const o = pt[e];
    if (o) {
      const u = gt[e] || [];
      return o(Object.fromEntries(u.map((d, g) => {
        const A = Object.prototype.hasOwnProperty.call(t, d) ? t[d] : void 0;
        return [d, (A === "" || A === void 0) && n[g] !== void 0 ? n[g] : d === "event" && (A === "" || A === void 0) ? n[0] : A];
      })));
    }
    const a = Re?.[e];
    if (typeof a == "function")
      return a(Object.keys(t).length > 0 ? t : n[0]);
    const [i, c] = String(e).split("."), l = typeof globalThis < "u" ? globalThis[i]?.[c] : void 0;
    if (typeof l == "function") return l(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, j = K(/* @__PURE__ */ new Map()), Ce = E((e, t, n, o) => {
    const a = j.current.get(e);
    if (t === "exhaust" && a?.promise) return a.promise;
    t === "takeLatest" && a?.controller?.abort();
    const i = new AbortController(), c = () => Promise.resolve().then(() => n(i.signal)), l = t === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(c) : c();
    return j.current.set(e, { controller: i, promise: l }), l.catch((u) => {
      u?.name !== "AbortError" && console.error(o, u);
    }).finally(() => {
      j.current.get(e)?.promise === l && j.current.delete(e);
    }), l;
  }, []);
  return R(() => () => {
    for (const e of j.current.values()) e.controller?.abort();
    j.current.clear();
  }, []), R(() => {
    Ce("initialize_context_store_mountinitializeContextStore", "takeLatest", (e) => be({}), "Module mount lifecycle failed:");
  }, []), R(() => {
    Ce("lumora_ai_mountinitializeConversation", "takeLatest", (e) => _e({}), "Module mount lifecycle failed:");
  }, []), /* @__PURE__ */ _("div", { ref: F, className: "rudra-module-wrapper", children: /* @__PURE__ */ p($, { id: "ai_host", className: `${((e) => e == null || e === !1 || typeof e == "object" ? "" : "" + String(e))(/* @__PURE__ */ ((e) => e === void 0 ? "lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora" : e)(se))}`, children: [
    "      ",
    f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(pe)) && /* @__PURE__ */ p(h, { children: [
      "      ",
      /* @__PURE__ */ p(_t, { id: "root_container", className: "lumora-ai-shell", padding: "none", bordered: !0, responsivePadding: !1, as: "section", tone: "default", radius: "xl", children: [
        "      ",
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
          "      ",
          /* @__PURE__ */ p(ze, { id: "chat_header", className: "lumora-ai-header flex w-full items-start justify-between gap-3 px-5 py-4", as: "header", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ p($, { id: "header_identity", className: "lumora-ai-identity block min-w-0", children: [
                "      ",
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(I, { id: "header_title", className: "text-lg font-bold", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "AI Assistant" : e)(r?.title) })
                ] }),
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(I, { id: "header_subtitle", className: "text-xs", content: "Context-aware assistant · tools enabled by your application", customColor: "var(--rudra-color-muted)", as: "p" })
                ] })
              ] })
            ] }),
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ p(ze, { id: "header_actions", className: "lumora-ai-header-actions flex shrink-0 items-center gap-2", children: [
                "      ",
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(I, { id: "status_badge", className: "lumora-ai-status", as: "span", content: "Online", customColor: "currentColor" })
                ] }),
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(Pe, { id: "clear_btn", className: "lumora-ai-clear-button", ariaLabel: "Clear conversation", size: "sm", label: "Clear", theme: "auto", variant: "ghost", onAction: (...e) => P("clearConversation", {}, e) })
                ] }),
                f(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(le)) && /* @__PURE__ */ p(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(Me, { id: "floating_close_button", className: "lumora-ai-close-button", theme: "auto", onClick: (...e) => P("closeChat", {}, e), variant: "ghost", ariaLabel: "Close Lumora AI assistant", icon: !1, additionalAttributes: { title: "Close AI assistant" }, size: "sm" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
          "      ",
          /* @__PURE__ */ p(vt, { id: "message_list", className: "lumora-ai-transcript w-full flex-1 overflow-y-auto px-6 py-6", as: "section", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ _(At, { id: "messages_repeater", className: "flex flex-col gap-4", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(re), children: (e) => (() => {
                const t = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                return /* @__PURE__ */ p(h, { children: [
                  "      ",
                  f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
                    "      ",
                    /* @__PURE__ */ p(ht, { id: "message_bubble", className: "flex w-full gap-2", bubbleClassName: "max-w-2xl rounded-2xl px-4 py-3", sender: /* @__PURE__ */ ((n) => n === void 0 ? "Assistant" : n)(t?.item?.sender), status: /* @__PURE__ */ ((n) => n === void 0 ? "" : n)(t?.item?.status), variant: /* @__PURE__ */ ((n) => n === void 0 ? "incoming" : n)(t?.item?.variant), timestamp: /* @__PURE__ */ ((n) => n === void 0 ? "" : n)(t?.item?.timestamp), children: [
                      "      ",
                      f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
                        "      ",
                        /* @__PURE__ */ _(I, { id: "bubble_content", className: "text-sm", content: /* @__PURE__ */ ((n) => n === void 0 ? "" : n)(t?.item?.content), as: "p" })
                      ] })
                    ] })
                  ] })
                ] });
              })() })
            ] }),
            f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(U)) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ _(I, { id: "typing_indicator", className: "lumora-ai-typing text-sm", customColor: "var(--rudra-color-muted)", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Assistant" : e)(r?.assistantName) })
            ] })
          ] })
        ] }),
        f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ p(h, { children: [
          "      ",
          /* @__PURE__ */ p(bt, { id: "error_panel", className: "lumora-ai-error mx-6 mb-3", action: /* @__PURE__ */ p(h, { children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ _(Pe, { id: "retry_button", size: "sm", label: "Retry", theme: "auto", variant: "outline", onAction: (...e) => P("retryLastMessage", {}, e), ariaLabel: "Retry last message" })
            ] })
          ] }), live: "assertive", theme: "auto", title: "Assistant unavailable", onDismiss: (...e) => P("dismissError", {}, e), appearance: "soft", closeLabel: "Dismiss error", dismissible: !0, variant: "error", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ _(I, { id: "error_text", className: "text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Something went wrong." : e)(B) })
            ] })
          ] })
        ] }),
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
          "      ",
          /* @__PURE__ */ p($, { id: "composer_wrapper", className: "lumora-ai-composer block w-full px-5 pb-5 pt-4", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ _(I, { id: "composer_hint", className: "mb-2 text-xs", customColor: "var(--rudra-color-muted)", as: "p", content: "Ask a question or request an available action." })
            ] }),
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
              "      ",
              /* @__PURE__ */ _(ft, { id: "chat_composer", className: "w-full", composerClassName: "rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900", onSend: (...e) => P("sendMessage", {}, e), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(U), showVoice: !1, showPicker: !1, onAttachmentSelect: (...e) => P("handleAttachments", {}, e), autoFocus: !1, placeholder: /* @__PURE__ */ ((e) => e === void 0 ? "Ask anything…" : e)(r?.placeholder), showAttachment: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(r?.allowAttachments) })
            ] })
          ] })
        ] }),
        f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ p(h, { children: [
          "      ",
          /* @__PURE__ */ _(xt, { id: "global_toasts", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(X), closable: !0, position: "top-right", showIcons: !0, maxVisible: 3, displayMode: "fixed", onDismiss: (...e) => P("dismissError", {}, e), newestOnTop: !0 })
        ] })
      ] })
    ] }),
    f(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(ce)) && /* @__PURE__ */ p(h, { children: [
      "      ",
      /* @__PURE__ */ p($, { id: "floating_launcher", className: "lumora-ai-launcher", children: [
        "      ",
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(h, { children: [
          "      ",
          /* @__PURE__ */ _(Me, { id: "floating_launcher_button", className: "lumora-ai-launcher-button", onClick: (...e) => P("openChat", {}, e), variant: "primary", ariaLabel: "Open Lumora AI assistant", additionalAttributes: { "aria-haspopup": "dialog", title: "Open AI assistant" }, icon: !1, size: "xl", theme: "auto" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  It as default
};
