import { jsx as _, jsxs as g, Fragment as h } from "react/jsx-runtime";
import { useState as v, useEffect as I, useRef as F, useCallback as E } from "react";
import { MessageBubble as ht, MessageComposer as ft, ToastStack as xt } from "@rudra-studio/rudra-widgets";
import { Surface as _t, Typography as R, Button as ye, IconButton as he, Alert as bt } from "@rudra-studio/rudra-core";
import { Box as K, Flex as fe, ScrollArea as vt, Repeater as At } from "@rudra-studio/rudra-layout";
function Rt(o) {
  const z = o.serverData || o.serverState || {}, k = o.sharedState || {}, L = o.applicationState || z.applicationState || {}, D = o.pageState || z.pageState || {}, q = o.pageData || z.pageData || {}, xe = {
    ...o.runtime?.functions || {},
    ...o.runtime?.actions || {},
    ...o.functions || {},
    ...o.actions || {}
  }, C = o.$theme ?? o.theme ?? o.data?.$theme ?? o.runtime?.data?.$theme ?? o.runtime?.theme, Q = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [wt, W] = v(() => C ?? Q());
  I(() => {
    C != null && W(C);
  }, [C]), I(() => {
    if (C != null || typeof document > "u") return;
    const e = document.documentElement, t = (n) => W(n?.detail?.theme ?? Q()), s = new MutationObserver(t);
    return s.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      s.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [C]);
  const $ = F(null), [J, H] = v("lg");
  I(() => {
    if (!$.current) return;
    const e = new ResizeObserver((t) => {
      for (let s of t) {
        const n = s.contentRect.width;
        n < 768 ? H("sm") : n < 1024 ? H("md") : H("lg");
      }
    });
    return e.observe($.current), () => e.disconnect();
  }, []);
  const x = E((e) => typeof e != "object" || e === null ? e : J === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : J === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [J]), f = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, _e = o.defaultOpen !== void 0 ? o.defaultOpen : o.data?.defaultOpen !== void 0 ? o.data.defaultOpen : !1, be = o.visible !== void 0 ? o.visible : o.data?.visible !== void 0 ? o.data.visible : !0, ve = o.locale !== void 0 ? o.locale : o.data?.locale !== void 0 ? o.data.locale : "en", Ae = o.contextEndpoint !== void 0 ? o.contextEndpoint : o.data?.contextEndpoint !== void 0 ? o.data.contextEndpoint : "/api/ai-context", we = o.aiProvider !== void 0 ? o.aiProvider : o.data?.aiProvider !== void 0 ? o.data.aiProvider : "anthropic", Ce = o.showToolActivity !== void 0 ? o.showToolActivity : o.data?.showToolActivity !== void 0 ? o.data.showToolActivity : !0, Se = o.visualTheme !== void 0 ? o.visualTheme : o.data?.visualTheme !== void 0 ? o.data.visualTheme : "aurora", Me = o.customClass !== void 0 ? o.customClass : o.data?.customClass !== void 0 ? o.data.customClass : "", ze = o.disabled !== void 0 ? o.disabled : o.data?.disabled !== void 0 ? o.data.disabled : !1, Pe = o.sessionId !== void 0 ? o.sessionId : o.data?.sessionId !== void 0 ? o.data.sessionId : "", Ie = o.placeholder !== void 0 ? o.placeholder : o.data?.placeholder !== void 0 ? o.data.placeholder : "Ask Lumora anything…", Re = o.systemPrompt !== void 0 ? o.systemPrompt : o.data?.systemPrompt !== void 0 ? o.data.systemPrompt : "You are Lumora, a concise and helpful AI assistant. Provide clear, accurate, and professional responses.", Oe = o.maxMessages !== void 0 ? o.maxMessages : o.data?.maxMessages !== void 0 ? o.data.maxMessages : 100, je = o.anthropicModel !== void 0 ? o.anthropicModel : o.data?.anthropicModel !== void 0 ? o.data.anthropicModel : "claude-sonnet-4-5", Te = o.contextScopeKey !== void 0 ? o.contextScopeKey : o.data?.contextScopeKey !== void 0 ? o.data.contextScopeKey : "", Ne = o.assistantName !== void 0 ? o.assistantName : o.data?.assistantName !== void 0 ? o.data.assistantName : "Lumora", Ee = o.title !== void 0 ? o.title : o.data?.title !== void 0 ? o.data.title : "Lumora Assistant", ke = o.toolManifest !== void 0 ? o.toolManifest : o.data?.toolManifest !== void 0 ? o.data.toolManifest : [], Le = o.allowAttachments !== void 0 ? o.allowAttachments : o.data?.allowAttachments !== void 0 ? o.data.allowAttachments : !1, De = o.welcomeMessage !== void 0 ? o.welcomeMessage : o.data?.welcomeMessage !== void 0 ? o.data.welcomeMessage : "Hi — how can I help?", qe = o.chatEndpoint !== void 0 ? o.chatEndpoint : o.data?.chatEndpoint !== void 0 ? o.data.chatEndpoint : "/api/ai/chat", Be = o.contextNamespace !== void 0 ? o.contextNamespace : o.data?.contextNamespace !== void 0 ? o.data.contextNamespace : "universal-ai-chatbot", Fe = o.contextDatabaseEnabled !== void 0 ? o.contextDatabaseEnabled : o.data?.contextDatabaseEnabled !== void 0 ? o.data.contextDatabaseEnabled : !1, Ke = o.maxOutputTokens !== void 0 ? o.maxOutputTokens : o.data?.maxOutputTokens !== void 0 ? o.data.maxOutputTokens : 1024, $e = o.geminiModel !== void 0 ? o.geminiModel : o.data?.geminiModel !== void 0 ? o.data.geminiModel : "gemini-2.5-flash", Je = o.presentationMode !== void 0 ? o.presentationMode : o.data?.presentationMode !== void 0 ? o.data.presentationMode : "floating", He = o.contextCacheTtlSeconds !== void 0 ? o.contextCacheTtlSeconds : o.data?.contextCacheTtlSeconds !== void 0 ? o.data.contextCacheTtlSeconds : 60, Ue = o.permissions !== void 0 ? o.permissions : o.data?.permissions !== void 0 ? o.data.permissions : {}, Ye = o.context !== void 0 ? o.context : o.data?.context !== void 0 ? o.data.context : {}, Ze = o.requestHeaders !== void 0 ? o.requestHeaders : o.data?.requestHeaders !== void 0 ? o.data.requestHeaders : {}, i = { defaultOpen: _e, visible: be, locale: ve, contextEndpoint: Ae, aiProvider: we, showToolActivity: Ce, visualTheme: Se, customClass: Me, disabled: ze, sessionId: Pe, placeholder: Ie, systemPrompt: Re, maxMessages: Oe, anthropicModel: je, contextScopeKey: Te, assistantName: Ne, title: Ee, toolManifest: ke, allowAttachments: Le, welcomeMessage: De, chatEndpoint: qe, contextNamespace: Be, contextDatabaseEnabled: Fe, maxOutputTokens: Ke, geminiModel: $e, presentationMode: Je, contextCacheTtlSeconds: He, permissions: Ue, context: Ye, requestHeaders: Ze }, [X, Ge] = v(() => structuredClone([])), [Qe, We] = v(() => structuredClone({})), [Xe, Ve] = v(() => structuredClone({})), [V, et] = v(() => structuredClone("lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora")), [B, tt] = v(() => structuredClone("")), [U, st] = v(() => structuredClone(!1)), [ee, ot] = v(() => structuredClone([])), [te, nt] = v(() => structuredClone(!0)), [se, at] = v(() => structuredClone(!0)), [it, rt] = v(() => structuredClone(!1)), [oe, ct] = v(() => structuredClone(!1)), u = { toasts: X, pendingAction: Qe, runtimeContext: Xe, themeClass: V, errorMessage: B, isSending: U, messages: ee, showLauncher: te, isFloating: se, hasInitialized: it, isOpen: oe }, m = E((e, t) => {
    switch (e) {
      case "toasts": {
        const s = typeof t == "function" ? t(u.toasts) : t;
        return u.toasts = s, Ge(s), s;
      }
      case "pendingAction": {
        const s = typeof t == "function" ? t(u.pendingAction) : t;
        return u.pendingAction = s, We(s), s;
      }
      case "runtimeContext": {
        const s = typeof t == "function" ? t(u.runtimeContext) : t;
        return u.runtimeContext = s, Ve(s), s;
      }
      case "themeClass": {
        const s = typeof t == "function" ? t(u.themeClass) : t;
        return u.themeClass = s, et(s), s;
      }
      case "errorMessage": {
        const s = typeof t == "function" ? t(u.errorMessage) : t;
        return u.errorMessage = s, tt(s), s;
      }
      case "isSending": {
        const s = typeof t == "function" ? t(u.isSending) : t;
        return u.isSending = s, st(s), s;
      }
      case "messages": {
        const s = typeof t == "function" ? t(u.messages) : t;
        return u.messages = s, ot(s), s;
      }
      case "showLauncher": {
        const s = typeof t == "function" ? t(u.showLauncher) : t;
        return u.showLauncher = s, nt(s), s;
      }
      case "isFloating": {
        const s = typeof t == "function" ? t(u.isFloating) : t;
        return u.isFloating = s, at(s), s;
      }
      case "hasInitialized": {
        const s = typeof t == "function" ? t(u.hasInitialized) : t;
        return u.hasInitialized = s, rt(s), s;
      }
      case "isOpen": {
        const s = typeof t == "function" ? t(u.isOpen) : t;
        return u.isOpen = s, ct(s), s;
      }
      default:
        return t;
    }
  }, []);
  E((e, t) => {
    const [s, ...n] = String(e || "").split(".");
    if (!s) return t;
    if (n.length === 0) return m(s, t);
    const a = (r) => {
      const c = Array.isArray(r) ? [...r] : { ...r || {} };
      let l = c;
      return n.forEach((p, d) => {
        d === n.length - 1 ? l[p] = t : (l[p] = Array.isArray(l[p]) ? [...l[p]] : { ...l[p] || {} }, l = l[p]);
      }), c;
    };
    switch (s) {
      case "toasts":
        return m("toasts", a), t;
      case "pendingAction":
        return m("pendingAction", a), t;
      case "runtimeContext":
        return m("runtimeContext", a), t;
      case "themeClass":
        return m("themeClass", a), t;
      case "errorMessage":
        return m("errorMessage", a), t;
      case "isSending":
        return m("isSending", a), t;
      case "messages":
        return m("messages", a), t;
      case "showLauncher":
        return m("showLauncher", a), t;
      case "isFloating":
        return m("isFloating", a), t;
      case "hasInitialized":
        return m("hasInitialized", a), t;
      case "isOpen":
        return m("isOpen", a), t;
      default:
        return t;
    }
  }, [m]);
  const dt = { actionCompleted: { properties: { actionId: { type: "string" }, result: { type: "object" } }, type: "object" }, actionRequested: { properties: { action: { type: "object" } }, type: "object" }, attachmentSelected: { additionalProperties: !0, properties: { files: { type: "array" } }, type: "object" }, contextChanged: { type: "object" }, contextResolved: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, contextUpdated: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, conversationCleared: { type: "object" }, error: { properties: { code: { type: "string" }, message: { type: "string" } }, type: "object" }, escalationRequested: { additionalProperties: !0, properties: { action: { type: "object" }, message: { type: "object" } }, type: "object" }, messageReceived: { properties: { message: { type: "object" } }, type: "object" }, responseCancelled: { additionalProperties: !0, properties: { reason: { type: "string" } }, type: "object" } }, Y = (e, t, s) => {
    if (!t || typeof t != "object") return "";
    const n = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], a = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (n.length && !n.includes(a) && !(a === "integer" && n.includes("number"))) return s + " must be " + n.join(" or ") + ".";
    if (t.enum && !t.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return s + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return s + "." + r + " is required.";
      for (const [r, c] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const l = Y(e[r], c, s + "." + r);
        if (l) return l;
      }
    }
    if (Array.isArray(e) && t.items) for (let r = 0; r < e.length; r++) {
      const c = Y(e[r], t.items, s + "[" + r + "]");
      if (c) return c;
    }
    return "";
  }, b = E(async (e, t, s = !1) => {
    const n = dt[e];
    if (!n) throw new Error("Module output '" + e + "' is not declared.");
    const a = Y(t, n, "output." + e);
    if (a) throw new Error(a);
    const r = o.onOutput || o.onModuleOutput || o.runtime?.onOutput;
    if (typeof r != "function") return t;
    const c = r(e, t, { moduleId: o.moduleId, awaitHandlers: s });
    return s ? await c : t;
  }, [o.onOutput, o.onModuleOutput, o.runtime?.onOutput, o.moduleId]), ne = (e, t) => {
    const s = String(t || "").split(".").filter(Boolean);
    if (!(!s.length || s.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return s.reduce((n, a) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(a in n) ? n.get(a) : n[a];
      }, e);
  }, P = (e, t) => {
    if (Array.isArray(e)) return e.map((n) => P(n, t));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([n, a]) => [P(n, t), P(a, t)]));
    if (typeof e != "string") return e;
    const s = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return s ? ne(t, s[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, a) => {
      const r = ne(t, a);
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
  };
  async function ae(e = {}) {
    return m("messages", i.welcomeMessage ? [{ id: "welcome-" + Date.now(), role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: i.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), m("pendingAction", {}), m("errorMessage", ""), b("conversationCleared", { sessionId: i.sessionId }, !1).catch((t) => console.error("Module output delivery failed", t)), { cleared: !0 };
  }
  async function Z(e = {}) {
    const t = e || {}, s = {}, n = {};
    {
      t.event;
      const a = await (async () => {
        const r = t.message && typeof t.message == "object" ? t.message.text ?? t.message.content ?? "" : t.message;
        return { type: "text", text: String(r ?? "").trim() };
      })();
      n.normalize_user = a, s.customCodeResult = a;
    }
    if (n.normalize_user.text)
      if (m("isSending", !0), m("errorMessage", ""), m("messages", [...u.messages, { id: "user-" + Date.now(), role: "user", sender: "You", variant: "outgoing", content: n.normalize_user.text, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }].slice(-i.maxMessages)), i.contextDatabaseEnabled === !0) {
        {
          t.event;
          const a = await (async () => {
            const r = n.read_context_db, c = Array.isArray(r) ? r : r && Array.isArray(r.data) ? r.data : [], l = c[0] && typeof c[0] == "object" ? c[0] : null, p = n.use_direct_context && typeof n.use_direct_context == "object" ? n.use_direct_context : {}, d = i.contextDatabaseEnabled === !0, y = d && l ? l : p, A = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, T = y.context && typeof y.context == "object" && !Array.isArray(y.context) ? y.context : A, N = typeof y.systemPrompt == "string" && y.systemPrompt.trim() ? y.systemPrompt : typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: T, systemPrompt: N, revision: Number(y.revision || 0), updatedAt: typeof y.updatedAt == "string" && y.updatedAt ? y.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: d ? "database" : "direct" }, source: d ? "database" : "direct", found: !!l };
          })();
          n.normalize_context = a, s.customCodeResult = a;
        }
        m("runtimeContext", n.normalize_context.context), b("contextResolved", { cache: n.normalize_context.cache, context: n.normalize_context.context, revision: n.normalize_context.revision, sessionId: i.sessionId, systemPrompt: n.normalize_context.systemPrompt, updatedAt: n.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
        {
          t.event;
          const a = await (async () => {
            const c = (Array.isArray(u.messages) ? u.messages : []).filter((d) => d && (d.role === "user" || d.role === "assistant")), l = c.findIndex((d) => d.role === "user"), p = l >= 0 ? c.slice(l) : [];
            return { anthropicMessages: p.map((d) => ({ role: d.role === "assistant" ? "assistant" : "user", content: String(d.content || "") })), geminiContents: p.map((d) => ({ role: d.role === "assistant" ? "model" : "user", parts: [{ text: String(d.content || "") }] })) };
          })();
          n.build_provider_payloads = a, s.customCodeResult = a;
        }
        if (String(i.aiProvider || "anthropic").toLowerCase() === "anthropic") {
          {
            const a = { args: t, inputs: i, state: u, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: z, vars: s, stepResults: n }, r = P({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "{{ inputs.maxOutputTokens }}", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
            const p = l.data;
            n.call_anthropic = p, s.apiResult = p;
          }
          return await j({ messages: u.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
        } else {
          {
            const a = { args: t, inputs: i, state: u, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: z, vars: s, stepResults: n }, r = P({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
            const p = l.data;
            n.call_gemini = p, s.apiResult = p;
          }
          return await j({ messages: u.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
        }
      } else {
        {
          t.event;
          const a = await (async () => {
            const r = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, c = typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: r, systemPrompt: c, revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: "direct" }, source: "direct" };
          })();
          n.use_direct_context = a, s.customCodeResult = a;
        }
        {
          {
            t.event;
            const a = await (async () => {
              const r = n.read_context_db, c = Array.isArray(r) ? r : r && Array.isArray(r.data) ? r.data : [], l = c[0] && typeof c[0] == "object" ? c[0] : null, p = n.use_direct_context && typeof n.use_direct_context == "object" ? n.use_direct_context : {}, d = i.contextDatabaseEnabled === !0, y = d && l ? l : p, A = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, T = y.context && typeof y.context == "object" && !Array.isArray(y.context) ? y.context : A, N = typeof y.systemPrompt == "string" && y.systemPrompt.trim() ? y.systemPrompt : typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
              return { context: T, systemPrompt: N, revision: Number(y.revision || 0), updatedAt: typeof y.updatedAt == "string" && y.updatedAt ? y.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: d ? "database" : "direct" }, source: d ? "database" : "direct", found: !!l };
            })();
            n.normalize_context = a, s.customCodeResult = a;
          }
          m("runtimeContext", n.normalize_context.context), b("contextResolved", { cache: n.normalize_context.cache, context: n.normalize_context.context, revision: n.normalize_context.revision, sessionId: i.sessionId, systemPrompt: n.normalize_context.systemPrompt, updatedAt: n.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
          {
            t.event;
            const a = await (async () => {
              const c = (Array.isArray(u.messages) ? u.messages : []).filter((d) => d && (d.role === "user" || d.role === "assistant")), l = c.findIndex((d) => d.role === "user"), p = l >= 0 ? c.slice(l) : [];
              return { anthropicMessages: p.map((d) => ({ role: d.role === "assistant" ? "assistant" : "user", content: String(d.content || "") })), geminiContents: p.map((d) => ({ role: d.role === "assistant" ? "model" : "user", parts: [{ text: String(d.content || "") }] })) };
            })();
            n.build_provider_payloads = a, s.customCodeResult = a;
          }
          if (String(i.aiProvider || "anthropic").toLowerCase() === "anthropic") {
            {
              const a = { args: t, inputs: i, state: u, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: z, vars: s, stepResults: n }, r = P({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "{{ inputs.maxOutputTokens }}", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
              const p = l.data;
              n.call_anthropic = p, s.apiResult = p;
            }
            return await j({ messages: u.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
          } else {
            {
              const a = { args: t, inputs: i, state: u, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: z, vars: s, stepResults: n }, r = P({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
              const p = l.data;
              n.call_gemini = p, s.apiResult = p;
            }
            return await j({ messages: u.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
          }
        }
      }
    else
      return { accepted: !1, reason: "empty" };
  }
  async function ie(e = {}) {
    const t = e || {}, s = {};
    {
      t.event;
      const n = await (async () => {
        const r = [...Array.isArray(u.messages) ? u.messages : []].reverse().find((c) => c && c.role === "user");
        return { type: "text", text: r ? String(r.content || "") : "" };
      })();
      s.find_retry_message = n;
    }
    return s.find_retry_message.text ? (await Z({ message: s.find_retry_message }), s.run_retry) : { accepted: !1, reason: "no-user-message" };
  }
  async function re(e = {}) {
    const t = e || {};
    return m("isSending", !1), b("responseCancelled", { reason: t.reason || "host-requested" }, !1).catch((s) => console.error("Module output delivery failed", s)), { cancelled: !0 };
  }
  async function lt(e = {}) {
    return m("hasInitialized", !0), m("isOpen", !1), m("showLauncher", !0), { open: !1 };
  }
  async function ce(e = {}) {
    return u.hasInitialized === !0 ? { initialized: !0, reused: !0 } : (m("isOpen", u.hasInitialized === !0 ? u.isOpen : i.visible !== !1 && (i.presentationMode !== "floating" || i.defaultOpen === !0)), m("isFloating", i.presentationMode === "floating"), m("showLauncher", u.hasInitialized === !0 ? u.showLauncher : i.visible !== !1 && i.presentationMode === "floating" && i.defaultOpen !== !0), m("themeClass", "lumora-ai-host lumora-ai-floating lumora-ai-theme-" + (i.visualTheme || "aurora")), m("messages", u.messages.length ? u.messages : i.welcomeMessage ? [{ id: "welcome", role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: i.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), m("hasInitialized", !0), { initialized: !0 });
  }
  async function de(e = {}) {
    return i.contextDatabaseEnabled === !0 ? { initialized: !0, table: "rudra_ai_context" } : { initialized: !1, reason: "database-context-disabled" };
  }
  async function ut(e = {}) {
    return m("hasInitialized", !0), m("isOpen", !0), m("showLauncher", !1), { open: !0 };
  }
  async function le(e = {}) {
    const t = e || {}, s = {};
    if (i.contextDatabaseEnabled === !0) {
      {
        t.event;
        const n = await (async () => {
          const a = s.upsert_context_db, r = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = r[0] && typeof r[0] == "object" ? r[0] : null, l = s.use_direct_context_update && typeof s.use_direct_context_update == "object" ? s.use_direct_context_update : {}, p = i.contextDatabaseEnabled === !0, d = p && c ? c : l;
          return { context: d.context && typeof d.context == "object" ? d.context : t.context, systemPrompt: typeof d.systemPrompt == "string" ? d.systemPrompt : t.systemPrompt || i.systemPrompt || "", revision: Number(d.revision || 0), updatedAt: typeof d.updatedAt == "string" && d.updatedAt ? d.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: p ? { enabled: !1, invalidated: !!c, source: "database" } : d.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: p && !!c, updated: p ? !!c : !0 };
        })();
        s.normalize_context_update = n;
      }
      return m("runtimeContext", s.normalize_context_update.context), b("contextUpdated", s.normalize_context_update, !1).catch((n) => console.error("Module output delivery failed", n)), b("contextChanged", { context: s.normalize_context_update.context, persisted: s.normalize_context_update.persisted, revision: s.normalize_context_update.revision }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_context_update;
    } else {
      {
        t.event;
        const n = await (async () => ({ context: t.context && typeof t.context == "object" ? t.context : {}, systemPrompt: typeof t.systemPrompt == "string" ? t.systemPrompt : i.systemPrompt || "", revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: !1, updated: !0 }))();
        s.use_direct_context_update = n;
      }
      {
        {
          t.event;
          const n = await (async () => {
            const a = s.upsert_context_db, r = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = r[0] && typeof r[0] == "object" ? r[0] : null, l = s.use_direct_context_update && typeof s.use_direct_context_update == "object" ? s.use_direct_context_update : {}, p = i.contextDatabaseEnabled === !0, d = p && c ? c : l;
            return { context: d.context && typeof d.context == "object" ? d.context : t.context, systemPrompt: typeof d.systemPrompt == "string" ? d.systemPrompt : t.systemPrompt || i.systemPrompt || "", revision: Number(d.revision || 0), updatedAt: typeof d.updatedAt == "string" && d.updatedAt ? d.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: p ? { enabled: !1, invalidated: !!c, source: "database" } : d.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: p && !!c, updated: p ? !!c : !0 };
          })();
          s.normalize_context_update = n;
        }
        return m("runtimeContext", s.normalize_context_update.context), b("contextUpdated", s.normalize_context_update, !1).catch((n) => console.error("Module output delivery failed", n)), b("contextChanged", { context: s.normalize_context_update.context, persisted: s.normalize_context_update.persisted, revision: s.normalize_context_update.revision }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_context_update;
      }
    }
  }
  async function ue(e = {}) {
    return m("errorMessage", ""), m("toasts", []), { dismissed: !0 };
  }
  async function j(e = {}) {
    const t = e || {}, s = {};
    {
      t.event;
      const n = await (async () => {
        const a = t.response && typeof t.response == "object" ? t.response : {}, r = Array.isArray(a.content) ? a.content.filter((w) => w && w.type === "text").map((w) => String(w.text || "")).join("") : "", l = (Array.isArray(a.candidates) && a.candidates[0] && a.candidates[0].content && Array.isArray(a.candidates[0].content.parts) ? a.candidates[0].content.parts : []).filter((w) => w && typeof w.text == "string").map((w) => w.text).join(""), p = a.message && typeof a.message == "object" ? a.message : {}, d = Array.isArray(a.choices) && a.choices[0] && a.choices[0].message ? a.choices[0].message : {}, y = r || l || p.content || a.text || a.response || d.content || "", A = typeof y == "string" ? y : JSON.stringify(y || ""), T = Array.isArray(a.toolCalls) ? a.toolCalls : Array.isArray(a.actions) ? a.actions : [], N = a.toolCall || T[0] || null, ge = Array.isArray(a.candidates) ? "gemini" : Array.isArray(a.content) ? "anthropic" : String(i.aiProvider || "unknown"), yt = ge === "anthropic" ? { mode: "prompt-cache", enabled: !0, readTokens: Number(a.usage && a.usage.cache_read_input_tokens || 0), writtenTokens: Number(a.usage && a.usage.cache_creation_input_tokens || 0) } : { mode: "implicit", enabled: !0, readTokens: Number(a.usageMetadata && a.usageMetadata.cachedContentTokenCount || 0) };
        return { message: { id: String(a.id || "assistant-" + Date.now()), role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: A || "I could not read the assistant response.", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: a.data || {} }, action: N, provider: ge, providerCache: yt };
      })();
      s.normalize_response = n;
    }
    return m("messages", [...Array.isArray(t.messages) ? t.messages : u.messages, s.normalize_response.message].slice(-i.maxMessages)), b("messageReceived", { cache: s.normalize_response.providerCache, message: s.normalize_response.message, provider: s.normalize_response.provider, raw: t.response }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_response.action ? (m("pendingAction", s.normalize_response.action), b("actionRequested", { action: s.normalize_response.action, sessionId: i.sessionId }, !1).catch((n) => console.error("Module output delivery failed", n)), ["escalate", "escalation", "handoff"].includes(String(s.normalize_response.action.type || s.normalize_response.action.name || "").toLowerCase()) && b("escalationRequested", { action: s.normalize_response.action, message: s.normalize_response.message }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_response) : s.normalize_response;
  }
  async function mt(e = {}) {
    const t = e || {};
    return b("attachmentSelected", { files: t.files }, !1).catch((s) => console.error("Module output delivery failed", s)), { accepted: !0, count: t.files.length };
  }
  async function me(e = {}) {
    const t = e || {};
    return m("messages", i.showToolActivity ? [...u.messages, { id: "tool-" + Date.now(), role: "system", sender: "Tool activity", variant: "system", content: "Tool " + t.actionId + " " + (t.status || "completed"), timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: t.result || {} }].slice(-i.maxMessages) : u.messages), m("pendingAction", {}), b("actionCompleted", { actionId: t.actionId, result: t.result || {}, status: t.status || "completed" }, !1).catch((s) => console.error("Module output delivery failed", s)), { actionId: t.actionId, completed: !0 };
  }
  const pt = {
    clearConversation: ae,
    sendMessage: Z,
    retryLastMessage: ie,
    cancelResponse: re,
    closeChat: lt,
    initializeConversation: ce,
    initializeContextStore: de,
    openChat: ut,
    loadContext: le,
    dismissError: ue,
    processApiResponse: j,
    handleAttachments: mt,
    provideToolResult: me
  }, S = F({});
  S.current = {
    lumora_ai_retry: (e = {}, t = {}) => ie({ ...e, signal: t.signal }),
    lumora_ai_send: (e = {}, t = {}) => Z({ ...e, signal: t.signal }),
    lumora_ai_clear: (e = {}, t = {}) => ae({ ...e, signal: t.signal }),
    lumora_ai_tool_result: (e = {}, t = {}) => me({ ...e, signal: t.signal }),
    lumora_ai_load_context: (e = {}, t = {}) => le({ ...e, signal: t.signal }),
    lumora_ai_cancel: (e = {}, t = {}) => re({ ...e, signal: t.signal }),
    lumora_ai_dismiss_error: (e = {}, t = {}) => ue({ ...e, signal: t.signal })
  };
  const G = F(null);
  G.current || (G.current = {
    lumora_ai_retry: (e, t) => S.current.lumora_ai_retry(e, t),
    lumora_ai_send: (e, t) => S.current.lumora_ai_send(e, t),
    lumora_ai_clear: (e, t) => S.current.lumora_ai_clear(e, t),
    lumora_ai_tool_result: (e, t) => S.current.lumora_ai_tool_result(e, t),
    lumora_ai_load_context: (e, t) => S.current.lumora_ai_load_context(e, t),
    lumora_ai_cancel: (e, t) => S.current.lumora_ai_cancel(e, t),
    lumora_ai_dismiss_error: (e, t) => S.current.lumora_ai_dismiss_error(e, t)
  }), I(() => {
    const e = o.registerCommands || o.runtime?.registerCommands;
    if (typeof e == "function")
      return e(G.current);
  }, [o.registerCommands, o.runtime?.registerCommands]);
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
  }, M = (e, t = {}, s = []) => {
    const n = pt[e];
    if (n) {
      const p = gt[e] || [];
      return n(Object.fromEntries(p.map((d, y) => {
        const A = Object.prototype.hasOwnProperty.call(t, d) ? t[d] : void 0;
        return [d, (A === "" || A === void 0) && s[y] !== void 0 ? s[y] : d === "event" && (A === "" || A === void 0) ? s[0] : A];
      })));
    }
    const a = xe?.[e];
    if (typeof a == "function")
      return a(Object.keys(t).length > 0 ? t : s[0]);
    const [r, c] = String(e).split("."), l = typeof globalThis < "u" ? globalThis[r]?.[c] : void 0;
    if (typeof l == "function") return l(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, O = F(/* @__PURE__ */ new Map()), pe = E((e, t, s, n) => {
    const a = O.current.get(e);
    if (t === "exhaust" && a?.promise) return a.promise;
    t === "takeLatest" && a?.controller?.abort();
    const r = new AbortController(), c = () => Promise.resolve().then(() => s(r.signal)), l = t === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(c) : c();
    return O.current.set(e, { controller: r, promise: l }), l.catch((p) => {
      p?.name !== "AbortError" && console.error(n, p);
    }).finally(() => {
      O.current.get(e)?.promise === l && O.current.delete(e);
    }), l;
  }, []);
  return I(() => () => {
    for (const e of O.current.values()) e.controller?.abort();
    O.current.clear();
  }, []), I(() => {
    pe("initialize_context_store_mountinitializeContextStore", "takeLatest", (e) => de({}), "Module mount lifecycle failed:");
  }, []), I(() => {
    pe("lumora_ai_mountinitializeConversation", "takeLatest", (e) => ce({}), "Module mount lifecycle failed:");
  }, []), /* @__PURE__ */ _("div", { ref: $, className: "rudra-module-wrapper", children: /* @__PURE__ */ g(K, { id: "ai_host", className: `${((e) => e == null || e === !1 || typeof e == "object" ? "" : "" + String(e))(/* @__PURE__ */ ((e) => e === void 0 ? "lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora" : e)(V))}`, children: [
    "      ",
    f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ g(h, { children: [
      "      ",
      /* @__PURE__ */ g(_t, { id: "root_container", className: "lumora-ai-shell", tone: "default", radius: "xl", padding: "none", bordered: !0, responsivePadding: !1, as: "section", children: [
        "      ",
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
          "      ",
          /* @__PURE__ */ g(fe, { id: "chat_header", className: "lumora-ai-header flex w-full items-start justify-between gap-3 px-5 py-4", as: "header", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ g(K, { id: "header_identity", className: "lumora-ai-identity block min-w-0", children: [
                "      ",
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(R, { id: "header_title", className: "text-lg font-bold", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "AI Assistant" : e)(i?.title) })
                ] }),
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(R, { id: "header_subtitle", className: "text-xs", as: "p", content: "Context-aware assistant · tools enabled by your application", customColor: "var(--rudra-color-muted)" })
                ] })
              ] })
            ] }),
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ g(fe, { id: "header_actions", className: "lumora-ai-header-actions flex shrink-0 items-center gap-2", children: [
                "      ",
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(R, { id: "status_badge", className: "lumora-ai-status", customColor: "currentColor", as: "span", content: "Online" })
                ] }),
                f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(ye, { id: "clear_btn", className: "lumora-ai-clear-button", size: "sm", label: "Clear", theme: "auto", variant: "ghost", onAction: (...e) => M("clearConversation", {}, e), ariaLabel: "Clear conversation" })
                ] }),
                f(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(se)) && /* @__PURE__ */ g(h, { children: [
                  "      ",
                  /* @__PURE__ */ _(he, { id: "floating_close_button", className: "lumora-ai-close-button", additionalAttributes: { title: "Close AI assistant" }, icon: !1, size: "sm", variant: "ghost", theme: "auto", onClick: (...e) => M("closeChat", {}, e), ariaLabel: "Close Lumora AI assistant" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
          "      ",
          /* @__PURE__ */ g(vt, { id: "message_list", className: "lumora-ai-transcript w-full flex-1 overflow-y-auto px-6 py-6", as: "section", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ _(At, { id: "messages_repeater", className: "flex flex-col gap-4", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ee), children: (e) => (() => {
                const t = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                return /* @__PURE__ */ g(h, { children: [
                  "      ",
                  f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
                    "      ",
                    /* @__PURE__ */ g(ht, { id: "message_bubble", className: "flex w-full gap-2", bubbleClassName: "max-w-2xl rounded-2xl px-4 py-3", sender: /* @__PURE__ */ ((s) => s === void 0 ? "Assistant" : s)(t?.item?.sender), status: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(t?.item?.status), variant: /* @__PURE__ */ ((s) => s === void 0 ? "incoming" : s)(t?.item?.variant), timestamp: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(t?.item?.timestamp), children: [
                      "      ",
                      f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
                        "      ",
                        /* @__PURE__ */ _(R, { id: "bubble_content", className: "text-sm", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(t?.item?.content) })
                      ] })
                    ] })
                  ] })
                ] });
              })() })
            ] }),
            f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(U)) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ _(R, { id: "typing_indicator", className: "lumora-ai-typing text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Assistant" : e)(i?.assistantName), customColor: "var(--rudra-color-muted)" })
            ] })
          ] })
        ] }),
        f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ g(h, { children: [
          "      ",
          /* @__PURE__ */ g(bt, { id: "error_panel", className: "lumora-ai-error mx-6 mb-3", action: /* @__PURE__ */ g(h, { children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ _(ye, { id: "retry_button", size: "sm", label: "Retry", theme: "auto", variant: "outline", onAction: (...e) => M("retryLastMessage", {}, e), ariaLabel: "Retry last message" })
            ] })
          ] }), dismissible: !0, live: "assertive", theme: "auto", onDismiss: (...e) => M("dismissError", {}, e), appearance: "soft", closeLabel: "Dismiss error", title: "Assistant unavailable", variant: "error", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ _(R, { id: "error_text", className: "text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Something went wrong." : e)(B) })
            ] })
          ] })
        ] }),
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
          "      ",
          /* @__PURE__ */ g(K, { id: "composer_wrapper", className: "lumora-ai-composer block w-full px-5 pb-5 pt-4", children: [
            "      ",
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ _(R, { id: "composer_hint", className: "mb-2 text-xs", customColor: "var(--rudra-color-muted)", as: "p", content: "Ask a question or request an available action." })
            ] }),
            f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
              "      ",
              /* @__PURE__ */ _(ft, { id: "chat_composer", className: "w-full", composerClassName: "rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900", onSend: (...e) => M("sendMessage", {}, e), showVoice: !1, showPicker: !1, placeholder: /* @__PURE__ */ ((e) => e === void 0 ? "Ask anything…" : e)(i?.placeholder), showAttachment: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(i?.allowAttachments), onAttachmentSelect: (...e) => M("handleAttachments", {}, e), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(U), autoFocus: !1 })
            ] })
          ] })
        ] }),
        f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ g(h, { children: [
          "      ",
          /* @__PURE__ */ _(xt, { id: "global_toasts", maxVisible: 3, displayMode: "fixed", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(X), showIcons: !0, newestOnTop: !0, closable: !0, position: "top-right", onDismiss: (...e) => M("dismissError", {}, e) })
        ] })
      ] })
    ] }),
    f(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(te)) && /* @__PURE__ */ g(h, { children: [
      "      ",
      /* @__PURE__ */ g(K, { id: "floating_launcher", className: "lumora-ai-launcher", children: [
        "      ",
        f(x({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(h, { children: [
          "      ",
          /* @__PURE__ */ _(he, { id: "floating_launcher_button", className: "lumora-ai-launcher-button", additionalAttributes: { "aria-haspopup": "dialog", title: "Open AI assistant" }, icon: !1, size: "xl", theme: "auto", onClick: (...e) => M("openChat", {}, e), variant: "primary", ariaLabel: "Open Lumora AI assistant" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Rt as default
};
