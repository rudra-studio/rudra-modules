import { jsx as v, jsxs as y, Fragment as f } from "react/jsx-runtime";
import { useState as w, useEffect as O, useRef as F, useCallback as E } from "react";
import { MessageBubble as ht, MessageComposer as ft, ToastStack as xt } from "@rudra-studio/rudra-widgets";
import { Surface as _t, Typography as j, Button as ye, IconButton as he, Alert as bt } from "@rudra-studio/rudra-core";
import { Box as K, Flex as fe, ScrollArea as vt, Repeater as At } from "@rudra-studio/rudra-layout";
function Rt(o) {
  const I = o.serverData || o.serverState || {}, k = o.sharedState || {}, L = o.applicationState || I.applicationState || {}, D = o.pageState || I.pageState || {}, q = o.pageData || I.pageData || {}, xe = {
    ...o.runtime?.functions || {},
    ...o.runtime?.actions || {},
    ...o.functions || {},
    ...o.actions || {}
  }, z = o.$theme ?? o.theme ?? o.data?.$theme ?? o.runtime?.data?.$theme ?? o.runtime?.theme, Q = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [wt, W] = w(() => z ?? Q());
  O(() => {
    z != null && W(z);
  }, [z]), O(() => {
    if (z != null || typeof document > "u") return;
    const e = document.documentElement, t = (n) => W(n?.detail?.theme ?? Q()), s = new MutationObserver(t);
    return s.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      s.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [z]);
  const $ = F(null), [J, H] = w("lg");
  O(() => {
    if (!$.current) return;
    const e = new ResizeObserver((t) => {
      for (let s of t) {
        const n = s.contentRect.width;
        n < 768 ? H("sm") : n < 1024 ? H("md") : H("lg");
      }
    });
    return e.observe($.current), () => e.disconnect();
  }, []);
  const _ = E((e) => typeof e != "object" || e === null ? e : J === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : J === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [J]), x = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, _e = o.permissions !== void 0 ? o.permissions : o.data?.permissions !== void 0 ? o.data.permissions : {}, be = o.customClass !== void 0 ? o.customClass : o.data?.customClass !== void 0 ? o.data.customClass : "", ve = o.geminiModel !== void 0 ? o.geminiModel : o.data?.geminiModel !== void 0 ? o.data.geminiModel : "gemini-2.5-flash", Ae = o.presentationMode !== void 0 ? o.presentationMode : o.data?.presentationMode !== void 0 ? o.data.presentationMode : "floating", we = o.welcomeMessage !== void 0 ? o.welcomeMessage : o.data?.welcomeMessage !== void 0 ? o.data.welcomeMessage : "Hi — how can I help?", Ce = o.locale !== void 0 ? o.locale : o.data?.locale !== void 0 ? o.data.locale : "en", Se = o.showToolActivity !== void 0 ? o.showToolActivity : o.data?.showToolActivity !== void 0 ? o.data.showToolActivity : !0, ze = o.visualTheme !== void 0 ? o.visualTheme : o.data?.visualTheme !== void 0 ? o.data.visualTheme : "aurora", Me = o.title !== void 0 ? o.title : o.data?.title !== void 0 ? o.data.title : "Lumora Assistant", Pe = o.disabled !== void 0 ? o.disabled : o.data?.disabled !== void 0 ? o.data.disabled : !1, Ie = o.maxMessages !== void 0 ? o.maxMessages : o.data?.maxMessages !== void 0 ? o.data.maxMessages : 100, Re = o.sessionId !== void 0 ? o.sessionId : o.data?.sessionId !== void 0 ? o.data.sessionId : "", Oe = o.placeholder !== void 0 ? o.placeholder : o.data?.placeholder !== void 0 ? o.data.placeholder : "Ask Lumora anything…", je = o.maxOutputTokens !== void 0 ? o.maxOutputTokens : o.data?.maxOutputTokens !== void 0 ? o.data.maxOutputTokens : 1024, Te = o.allowAttachments !== void 0 ? o.allowAttachments : o.data?.allowAttachments !== void 0 ? o.data.allowAttachments : !1, Ne = o.defaultOpen !== void 0 ? o.defaultOpen : o.data?.defaultOpen !== void 0 ? o.data.defaultOpen : !1, Ee = o.systemPrompt !== void 0 ? o.systemPrompt : o.data?.systemPrompt !== void 0 ? o.data.systemPrompt : "You are Lumora, a concise and helpful AI assistant. Provide clear, accurate, and professional responses.", ke = o.visible !== void 0 ? o.visible : o.data?.visible !== void 0 ? o.data.visible : !0, Le = o.assistantName !== void 0 ? o.assistantName : o.data?.assistantName !== void 0 ? o.data.assistantName : "Lumora", De = o.toolManifest !== void 0 ? o.toolManifest : o.data?.toolManifest !== void 0 ? o.data.toolManifest : [], qe = o.aiProvider !== void 0 ? o.aiProvider : o.data?.aiProvider !== void 0 ? o.data.aiProvider : "anthropic", Be = o.contextNamespace !== void 0 ? o.contextNamespace : o.data?.contextNamespace !== void 0 ? o.data.contextNamespace : "universal-ai-chatbot", Fe = o.contextDatabaseEnabled !== void 0 ? o.contextDatabaseEnabled : o.data?.contextDatabaseEnabled !== void 0 ? o.data.contextDatabaseEnabled : !1, Ke = o.contextScopeKey !== void 0 ? o.contextScopeKey : o.data?.contextScopeKey !== void 0 ? o.data.contextScopeKey : "", $e = o.anthropicModel !== void 0 ? o.anthropicModel : o.data?.anthropicModel !== void 0 ? o.data.anthropicModel : "claude-sonnet-4-5", Je = o.context !== void 0 ? o.context : o.data?.context !== void 0 ? o.data.context : {}, He = o.contextEndpoint !== void 0 ? o.contextEndpoint : o.data?.contextEndpoint !== void 0 ? o.data.contextEndpoint : "/api/ai-context", Ue = o.chatEndpoint !== void 0 ? o.chatEndpoint : o.data?.chatEndpoint !== void 0 ? o.data.chatEndpoint : "/api/ai/chat", Ye = o.contextCacheTtlSeconds !== void 0 ? o.contextCacheTtlSeconds : o.data?.contextCacheTtlSeconds !== void 0 ? o.data.contextCacheTtlSeconds : 60, Ze = o.requestHeaders !== void 0 ? o.requestHeaders : o.data?.requestHeaders !== void 0 ? o.data.requestHeaders : {}, i = { permissions: _e, customClass: be, geminiModel: ve, presentationMode: Ae, welcomeMessage: we, locale: Ce, showToolActivity: Se, visualTheme: ze, title: Me, disabled: Pe, maxMessages: Ie, sessionId: Re, placeholder: Oe, maxOutputTokens: je, allowAttachments: Te, defaultOpen: Ne, systemPrompt: Ee, visible: ke, assistantName: Le, toolManifest: De, aiProvider: qe, contextNamespace: Be, contextDatabaseEnabled: Fe, contextScopeKey: Ke, anthropicModel: $e, context: Je, contextEndpoint: He, chatEndpoint: Ue, contextCacheTtlSeconds: Ye, requestHeaders: Ze }, [Ge, Qe] = w(() => structuredClone({})), [X, We] = w(() => structuredClone(!0)), [Xe, Ve] = w(() => structuredClone(!1)), [V, et] = w(() => structuredClone([])), [ee, tt] = w(() => structuredClone(!1)), [st, ot] = w(() => structuredClone({})), [B, nt] = w(() => structuredClone("")), [te, at] = w(() => structuredClone([])), [se, rt] = w(() => structuredClone(!0)), [oe, it] = w(() => structuredClone("lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora")), [U, ct] = w(() => structuredClone(!1)), l = { runtimeContext: Ge, showLauncher: X, hasInitialized: Xe, toasts: V, isOpen: ee, pendingAction: st, errorMessage: B, messages: te, isFloating: se, themeClass: oe, isSending: U }, m = E((e, t) => {
    switch (e) {
      case "runtimeContext": {
        const s = typeof t == "function" ? t(l.runtimeContext) : t;
        return l.runtimeContext = s, Qe(s), s;
      }
      case "showLauncher": {
        const s = typeof t == "function" ? t(l.showLauncher) : t;
        return l.showLauncher = s, We(s), s;
      }
      case "hasInitialized": {
        const s = typeof t == "function" ? t(l.hasInitialized) : t;
        return l.hasInitialized = s, Ve(s), s;
      }
      case "toasts": {
        const s = typeof t == "function" ? t(l.toasts) : t;
        return l.toasts = s, et(s), s;
      }
      case "isOpen": {
        const s = typeof t == "function" ? t(l.isOpen) : t;
        return l.isOpen = s, tt(s), s;
      }
      case "pendingAction": {
        const s = typeof t == "function" ? t(l.pendingAction) : t;
        return l.pendingAction = s, ot(s), s;
      }
      case "errorMessage": {
        const s = typeof t == "function" ? t(l.errorMessage) : t;
        return l.errorMessage = s, nt(s), s;
      }
      case "messages": {
        const s = typeof t == "function" ? t(l.messages) : t;
        return l.messages = s, at(s), s;
      }
      case "isFloating": {
        const s = typeof t == "function" ? t(l.isFloating) : t;
        return l.isFloating = s, rt(s), s;
      }
      case "themeClass": {
        const s = typeof t == "function" ? t(l.themeClass) : t;
        return l.themeClass = s, it(s), s;
      }
      case "isSending": {
        const s = typeof t == "function" ? t(l.isSending) : t;
        return l.isSending = s, ct(s), s;
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
      let d = c;
      return n.forEach((u, p) => {
        p === n.length - 1 ? d[u] = t : (d[u] = Array.isArray(d[u]) ? [...d[u]] : { ...d[u] || {} }, d = d[u]);
      }), c;
    };
    switch (s) {
      case "runtimeContext":
        return m("runtimeContext", a), t;
      case "showLauncher":
        return m("showLauncher", a), t;
      case "hasInitialized":
        return m("hasInitialized", a), t;
      case "toasts":
        return m("toasts", a), t;
      case "isOpen":
        return m("isOpen", a), t;
      case "pendingAction":
        return m("pendingAction", a), t;
      case "errorMessage":
        return m("errorMessage", a), t;
      case "messages":
        return m("messages", a), t;
      case "isFloating":
        return m("isFloating", a), t;
      case "themeClass":
        return m("themeClass", a), t;
      case "isSending":
        return m("isSending", a), t;
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
        const d = Y(e[r], c, s + "." + r);
        if (d) return d;
      }
    }
    if (Array.isArray(e) && t.items) for (let r = 0; r < e.length; r++) {
      const c = Y(e[r], t.items, s + "[" + r + "]");
      if (c) return c;
    }
    return "";
  }, A = E(async (e, t, s = !1) => {
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
  }, R = (e, t) => {
    if (Array.isArray(e)) return e.map((n) => R(n, t));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([n, a]) => [R(n, t), R(a, t)]));
    if (typeof e != "string") return e;
    const s = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return s ? ne(t, s[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, a) => {
      const r = ne(t, a);
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
  };
  async function ae(e = {}) {
    const t = e || {}, s = {};
    if (i.contextDatabaseEnabled === !0) {
      {
        t.event;
        const n = await (async () => {
          const a = s.upsert_context_db, r = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = r[0] && typeof r[0] == "object" ? r[0] : null, d = s.use_direct_context_update && typeof s.use_direct_context_update == "object" ? s.use_direct_context_update : {}, u = i.contextDatabaseEnabled === !0, p = u && c ? c : d;
          return { context: p.context && typeof p.context == "object" ? p.context : t.context, systemPrompt: typeof p.systemPrompt == "string" ? p.systemPrompt : t.systemPrompt || i.systemPrompt || "", revision: Number(p.revision || 0), updatedAt: typeof p.updatedAt == "string" && p.updatedAt ? p.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: u ? { enabled: !1, invalidated: !!c, source: "database" } : p.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: u && !!c, updated: u ? !!c : !0 };
        })();
        s.normalize_context_update = n;
      }
      return m("runtimeContext", s.normalize_context_update.context), A("contextUpdated", s.normalize_context_update, !1).catch((n) => console.error("Module output delivery failed", n)), A("contextChanged", { context: s.normalize_context_update.context, persisted: s.normalize_context_update.persisted, revision: s.normalize_context_update.revision }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_context_update;
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
            const a = s.upsert_context_db, r = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = r[0] && typeof r[0] == "object" ? r[0] : null, d = s.use_direct_context_update && typeof s.use_direct_context_update == "object" ? s.use_direct_context_update : {}, u = i.contextDatabaseEnabled === !0, p = u && c ? c : d;
            return { context: p.context && typeof p.context == "object" ? p.context : t.context, systemPrompt: typeof p.systemPrompt == "string" ? p.systemPrompt : t.systemPrompt || i.systemPrompt || "", revision: Number(p.revision || 0), updatedAt: typeof p.updatedAt == "string" && p.updatedAt ? p.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: u ? { enabled: !1, invalidated: !!c, source: "database" } : p.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: u && !!c, updated: u ? !!c : !0 };
          })();
          s.normalize_context_update = n;
        }
        return m("runtimeContext", s.normalize_context_update.context), A("contextUpdated", s.normalize_context_update, !1).catch((n) => console.error("Module output delivery failed", n)), A("contextChanged", { context: s.normalize_context_update.context, persisted: s.normalize_context_update.persisted, revision: s.normalize_context_update.revision }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_context_update;
      }
    }
  }
  async function re(e = {}) {
    return m("messages", i.welcomeMessage ? [{ id: "welcome-" + Date.now(), role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: i.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), m("pendingAction", {}), m("errorMessage", ""), A("conversationCleared", { sessionId: i.sessionId }, !1).catch((t) => console.error("Module output delivery failed", t)), { cleared: !0 };
  }
  async function lt(e = {}) {
    return m("hasInitialized", !0), m("isOpen", !0), m("showLauncher", !1), { open: !0 };
  }
  async function N(e = {}) {
    const t = e || {}, s = {};
    {
      t.event;
      const n = await (async () => {
        const a = t.response && typeof t.response == "object" ? t.response : {}, r = Array.isArray(a.content) ? a.content.filter((S) => S && S.type === "text").map((S) => String(S.text || "")).join("") : "", d = (Array.isArray(a.candidates) && a.candidates[0] && a.candidates[0].content && Array.isArray(a.candidates[0].content.parts) ? a.candidates[0].content.parts : []).filter((S) => S && typeof S.text == "string").map((S) => S.text).join(""), u = a.message && typeof a.message == "object" ? a.message : {}, p = Array.isArray(a.choices) && a.choices[0] && a.choices[0].message ? a.choices[0].message : {}, g = r || d || u.content || a.text || a.response || p.content || "", b = typeof g == "string" ? g : JSON.stringify(g || ""), C = Array.isArray(a.toolCalls) ? a.toolCalls : Array.isArray(a.actions) ? a.actions : [], h = a.toolCall || C[0] || null, ge = Array.isArray(a.candidates) ? "gemini" : Array.isArray(a.content) ? "anthropic" : String(i.aiProvider || "unknown"), yt = ge === "anthropic" ? { mode: "prompt-cache", enabled: !0, readTokens: Number(a.usage && a.usage.cache_read_input_tokens || 0), writtenTokens: Number(a.usage && a.usage.cache_creation_input_tokens || 0) } : { mode: "implicit", enabled: !0, readTokens: Number(a.usageMetadata && a.usageMetadata.cachedContentTokenCount || 0) };
        return { message: { id: String(a.id || "assistant-" + Date.now()), role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: b || "I could not read the assistant response.", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: a.data || {} }, action: h, provider: ge, providerCache: yt };
      })();
      s.normalize_response = n;
    }
    return m("messages", [...Array.isArray(t.messages) ? t.messages : l.messages, s.normalize_response.message].slice(-i.maxMessages)), A("messageReceived", { cache: s.normalize_response.providerCache, message: s.normalize_response.message, provider: s.normalize_response.provider, raw: t.response }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_response.action ? (m("pendingAction", s.normalize_response.action), A("actionRequested", { action: s.normalize_response.action, sessionId: i.sessionId }, !1).catch((n) => console.error("Module output delivery failed", n)), ["escalate", "escalation", "handoff"].includes(String(s.normalize_response.action.type || s.normalize_response.action.name || "").toLowerCase()) && A("escalationRequested", { action: s.normalize_response.action, message: s.normalize_response.message }, !1).catch((n) => console.error("Module output delivery failed", n)), s.normalize_response) : s.normalize_response;
  }
  async function ie(e = {}) {
    return i.contextDatabaseEnabled === !0 ? { initialized: !0, table: "rudra_ai_context" } : { initialized: !1, reason: "database-context-disabled" };
  }
  async function ut(e = {}) {
    const t = e || {};
    return A("attachmentSelected", { files: t.files }, !1).catch((s) => console.error("Module output delivery failed", s)), { accepted: !0, count: t.files.length };
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
      if (m("isSending", !0), m("errorMessage", ""), m("messages", [...l.messages, { id: "user-" + Date.now(), role: "user", sender: "You", variant: "outgoing", content: n.normalize_user.text, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }].slice(-i.maxMessages)), i.contextDatabaseEnabled === !0) {
        {
          t.event;
          const a = await (async () => {
            const r = n.read_context_db, c = Array.isArray(r) ? r : r && Array.isArray(r.data) ? r.data : [], d = c[0] && typeof c[0] == "object" ? c[0] : null, u = n.use_direct_context && typeof n.use_direct_context == "object" ? n.use_direct_context : {}, p = i.contextDatabaseEnabled === !0, g = p && d ? d : u, b = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, C = g.context && typeof g.context == "object" && !Array.isArray(g.context) ? g.context : b, h = typeof g.systemPrompt == "string" && g.systemPrompt.trim() ? g.systemPrompt : typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: C, systemPrompt: h, revision: Number(g.revision || 0), updatedAt: typeof g.updatedAt == "string" && g.updatedAt ? g.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: p ? "database" : "direct" }, source: p ? "database" : "direct", found: !!d };
          })();
          n.normalize_context = a, s.customCodeResult = a;
        }
        m("runtimeContext", n.normalize_context.context), A("contextResolved", { cache: n.normalize_context.cache, context: n.normalize_context.context, revision: n.normalize_context.revision, sessionId: i.sessionId, systemPrompt: n.normalize_context.systemPrompt, updatedAt: n.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
        {
          t.event;
          const a = await (async () => {
            const r = String(n.normalize_user && n.normalize_user.text || "").trim(), d = (Array.isArray(l.messages) ? l.messages : []).filter((h) => h && (h.role === "user" || h.role === "assistant")), u = d[d.length - 1], p = !!r && u && u.role === "user" && String(u.content || "") === r, g = r && !p ? [...d, { role: "user", content: r }] : d, b = g.findIndex((h) => h.role === "user"), C = b >= 0 ? g.slice(b) : r ? [{ role: "user", content: r }] : [];
            return { anthropicMessages: C.map((h) => ({ role: h.role === "assistant" ? "assistant" : "user", content: String(h.content || "") })), geminiContents: C.map((h) => ({ role: h.role === "assistant" ? "model" : "user", parts: [{ text: String(h.content || "") }] })) };
          })();
          n.build_provider_payloads = a, s.customCodeResult = a;
        }
        if (String(i.aiProvider || "anthropic").toLowerCase() === "anthropic") {
          {
            const a = { args: t, inputs: i, state: l, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: I, vars: s, stepResults: n }, r = R({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "{{ inputs.maxOutputTokens }}", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
            const u = d.data;
            n.call_anthropic = u, s.apiResult = u;
          }
          return await N({ messages: l.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
        } else {
          {
            const a = { args: t, inputs: i, state: l, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: I, vars: s, stepResults: n }, r = R({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
            const u = d.data;
            n.call_gemini = u, s.apiResult = u;
          }
          return await N({ messages: l.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
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
              const r = n.read_context_db, c = Array.isArray(r) ? r : r && Array.isArray(r.data) ? r.data : [], d = c[0] && typeof c[0] == "object" ? c[0] : null, u = n.use_direct_context && typeof n.use_direct_context == "object" ? n.use_direct_context : {}, p = i.contextDatabaseEnabled === !0, g = p && d ? d : u, b = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, C = g.context && typeof g.context == "object" && !Array.isArray(g.context) ? g.context : b, h = typeof g.systemPrompt == "string" && g.systemPrompt.trim() ? g.systemPrompt : typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
              return { context: C, systemPrompt: h, revision: Number(g.revision || 0), updatedAt: typeof g.updatedAt == "string" && g.updatedAt ? g.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: p ? "database" : "direct" }, source: p ? "database" : "direct", found: !!d };
            })();
            n.normalize_context = a, s.customCodeResult = a;
          }
          m("runtimeContext", n.normalize_context.context), A("contextResolved", { cache: n.normalize_context.cache, context: n.normalize_context.context, revision: n.normalize_context.revision, sessionId: i.sessionId, systemPrompt: n.normalize_context.systemPrompt, updatedAt: n.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
          {
            t.event;
            const a = await (async () => {
              const r = String(n.normalize_user && n.normalize_user.text || "").trim(), d = (Array.isArray(l.messages) ? l.messages : []).filter((h) => h && (h.role === "user" || h.role === "assistant")), u = d[d.length - 1], p = !!r && u && u.role === "user" && String(u.content || "") === r, g = r && !p ? [...d, { role: "user", content: r }] : d, b = g.findIndex((h) => h.role === "user"), C = b >= 0 ? g.slice(b) : r ? [{ role: "user", content: r }] : [];
              return { anthropicMessages: C.map((h) => ({ role: h.role === "assistant" ? "assistant" : "user", content: String(h.content || "") })), geminiContents: C.map((h) => ({ role: h.role === "assistant" ? "model" : "user", parts: [{ text: String(h.content || "") }] })) };
            })();
            n.build_provider_payloads = a, s.customCodeResult = a;
          }
          if (String(i.aiProvider || "anthropic").toLowerCase() === "anthropic") {
            {
              const a = { args: t, inputs: i, state: l, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: I, vars: s, stepResults: n }, r = R({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "{{ inputs.maxOutputTokens }}", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
              const u = d.data;
              n.call_anthropic = u, s.apiResult = u;
            }
            return await N({ messages: l.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
          } else {
            {
              const a = { args: t, inputs: i, state: l, sharedState: k, applicationState: L, pageState: D, pageData: q, serverData: I, vars: s, stepResults: n }, r = R({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
              const u = d.data;
              n.call_gemini = u, s.apiResult = u;
            }
            return await N({ messages: l.messages, response: n.call_anthropic || n.call_gemini }), m("isSending", !1), { accepted: !0, context: n.normalize_context, message: n.normalize_user, response: n.process_response };
          }
        }
      }
    else
      return { accepted: !1, reason: "empty" };
  }
  async function mt(e = {}) {
    return m("hasInitialized", !0), m("isOpen", !1), m("showLauncher", !0), { open: !1 };
  }
  async function ce(e = {}) {
    const t = e || {};
    return m("isSending", !1), A("responseCancelled", { reason: t.reason || "host-requested" }, !1).catch((s) => console.error("Module output delivery failed", s)), { cancelled: !0 };
  }
  async function de(e = {}) {
    return m("errorMessage", ""), m("toasts", []), { dismissed: !0 };
  }
  async function le(e = {}) {
    return l.hasInitialized === !0 ? { initialized: !0, reused: !0 } : (m("isOpen", l.hasInitialized === !0 ? l.isOpen : i.visible !== !1 && (i.presentationMode !== "floating" || i.defaultOpen === !0)), m("isFloating", i.presentationMode === "floating"), m("showLauncher", l.hasInitialized === !0 ? l.showLauncher : i.visible !== !1 && i.presentationMode === "floating" && i.defaultOpen !== !0), m("themeClass", "lumora-ai-host lumora-ai-floating lumora-ai-theme-" + (i.visualTheme || "aurora")), m("messages", l.messages.length ? l.messages : i.welcomeMessage ? [{ id: "welcome", role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: i.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), m("hasInitialized", !0), { initialized: !0 });
  }
  async function ue(e = {}) {
    const t = e || {}, s = {};
    {
      t.event;
      const n = await (async () => {
        const r = [...Array.isArray(l.messages) ? l.messages : []].reverse().find((c) => c && c.role === "user");
        return { type: "text", text: r ? String(r.content || "") : "" };
      })();
      s.find_retry_message = n;
    }
    return s.find_retry_message.text ? (await Z({ message: s.find_retry_message }), s.run_retry) : { accepted: !1, reason: "no-user-message" };
  }
  async function me(e = {}) {
    const t = e || {};
    return m("messages", i.showToolActivity ? [...l.messages, { id: "tool-" + Date.now(), role: "system", sender: "Tool activity", variant: "system", content: "Tool " + t.actionId + " " + (t.status || "completed"), timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: t.result || {} }].slice(-i.maxMessages) : l.messages), m("pendingAction", {}), A("actionCompleted", { actionId: t.actionId, result: t.result || {}, status: t.status || "completed" }, !1).catch((s) => console.error("Module output delivery failed", s)), { actionId: t.actionId, completed: !0 };
  }
  const pt = {
    loadContext: ae,
    clearConversation: re,
    openChat: lt,
    processApiResponse: N,
    initializeContextStore: ie,
    handleAttachments: ut,
    sendMessage: Z,
    closeChat: mt,
    cancelResponse: ce,
    dismissError: de,
    initializeConversation: le,
    retryLastMessage: ue,
    provideToolResult: me
  }, M = F({});
  M.current = {
    lumora_ai_cancel: (e = {}, t = {}) => ce({ ...e, signal: t.signal }),
    lumora_ai_dismiss_error: (e = {}, t = {}) => de({ ...e, signal: t.signal }),
    lumora_ai_retry: (e = {}, t = {}) => ue({ ...e, signal: t.signal }),
    lumora_ai_send: (e = {}, t = {}) => Z({ ...e, signal: t.signal }),
    lumora_ai_clear: (e = {}, t = {}) => re({ ...e, signal: t.signal }),
    lumora_ai_tool_result: (e = {}, t = {}) => me({ ...e, signal: t.signal }),
    lumora_ai_load_context: (e = {}, t = {}) => ae({ ...e, signal: t.signal })
  };
  const G = F(null);
  G.current || (G.current = {
    lumora_ai_cancel: (e, t) => M.current.lumora_ai_cancel(e, t),
    lumora_ai_dismiss_error: (e, t) => M.current.lumora_ai_dismiss_error(e, t),
    lumora_ai_retry: (e, t) => M.current.lumora_ai_retry(e, t),
    lumora_ai_send: (e, t) => M.current.lumora_ai_send(e, t),
    lumora_ai_clear: (e, t) => M.current.lumora_ai_clear(e, t),
    lumora_ai_tool_result: (e, t) => M.current.lumora_ai_tool_result(e, t),
    lumora_ai_load_context: (e, t) => M.current.lumora_ai_load_context(e, t)
  }), O(() => {
    const e = o.registerCommands || o.runtime?.registerCommands;
    if (typeof e == "function")
      return e(G.current);
  }, [o.registerCommands, o.runtime?.registerCommands]);
  const gt = {
    loadContext: ["context", "replace", "scopeKey", "systemPrompt", "expectedRevision"],
    clearConversation: [],
    openChat: [],
    processApiResponse: ["response", "messages"],
    initializeContextStore: [],
    handleAttachments: ["files"],
    sendMessage: ["message"],
    closeChat: [],
    cancelResponse: ["reason"],
    dismissError: [],
    initializeConversation: [],
    retryLastMessage: [],
    provideToolResult: ["actionId", "result", "status"]
  }, P = (e, t = {}, s = []) => {
    const n = pt[e];
    if (n) {
      const u = gt[e] || [];
      return n(Object.fromEntries(u.map((p, g) => {
        const b = Object.prototype.hasOwnProperty.call(t, p) ? t[p] : void 0;
        return [p, (b === "" || b === void 0) && s[g] !== void 0 ? s[g] : p === "event" && (b === "" || b === void 0) ? s[0] : b];
      })));
    }
    const a = xe?.[e];
    if (typeof a == "function")
      return a(Object.keys(t).length > 0 ? t : s[0]);
    const [r, c] = String(e).split("."), d = typeof globalThis < "u" ? globalThis[r]?.[c] : void 0;
    if (typeof d == "function") return d(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, T = F(/* @__PURE__ */ new Map()), pe = E((e, t, s, n) => {
    const a = T.current.get(e);
    if (t === "exhaust" && a?.promise) return a.promise;
    t === "takeLatest" && a?.controller?.abort();
    const r = new AbortController(), c = () => Promise.resolve().then(() => s(r.signal)), d = t === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(c) : c();
    return T.current.set(e, { controller: r, promise: d }), d.catch((u) => {
      u?.name !== "AbortError" && console.error(n, u);
    }).finally(() => {
      T.current.get(e)?.promise === d && T.current.delete(e);
    }), d;
  }, []);
  return O(() => () => {
    for (const e of T.current.values()) e.controller?.abort();
    T.current.clear();
  }, []), O(() => {
    pe("initialize_context_store_mountinitializeContextStore", "takeLatest", (e) => ie({}), "Module mount lifecycle failed:");
  }, []), O(() => {
    pe("lumora_ai_mountinitializeConversation", "takeLatest", (e) => le({}), "Module mount lifecycle failed:");
  }, []), /* @__PURE__ */ v("div", { ref: $, className: "rudra-module-wrapper", children: /* @__PURE__ */ y(K, { id: "ai_host", className: `${((e) => e == null || e === !1 || typeof e == "object" ? "" : "" + String(e))(/* @__PURE__ */ ((e) => e === void 0 ? "lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora" : e)(oe))}`, children: [
    "      ",
    x(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ee)) && /* @__PURE__ */ y(f, { children: [
      "      ",
      /* @__PURE__ */ y(_t, { id: "root_container", className: "lumora-ai-shell", responsivePadding: !1, as: "section", tone: "default", radius: "xl", padding: "none", bordered: !0, children: [
        "      ",
        x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
          "      ",
          /* @__PURE__ */ y(fe, { id: "chat_header", className: "lumora-ai-header flex w-full items-start justify-between gap-3 px-5 py-4", as: "header", children: [
            "      ",
            x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ y(K, { id: "header_identity", className: "lumora-ai-identity block min-w-0", children: [
                "      ",
                x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ v(j, { id: "header_title", className: "text-lg font-bold", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "AI Assistant" : e)(i?.title) })
                ] }),
                x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ v(j, { id: "header_subtitle", className: "text-xs", content: "Context-aware assistant · tools enabled by your application", customColor: "var(--rudra-color-muted)", as: "p" })
                ] })
              ] })
            ] }),
            x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ y(fe, { id: "header_actions", className: "lumora-ai-header-actions flex shrink-0 items-center gap-2", children: [
                "      ",
                x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ v(j, { id: "status_badge", className: "lumora-ai-status", as: "span", content: "Online", customColor: "currentColor" })
                ] }),
                x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ v(ye, { id: "clear_btn", className: "lumora-ai-clear-button", ariaLabel: "Clear conversation", size: "sm", label: "Clear", theme: "auto", variant: "ghost", onAction: (...e) => P("clearConversation", {}, e) })
                ] }),
                x(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(se)) && /* @__PURE__ */ y(f, { children: [
                  "      ",
                  /* @__PURE__ */ v(he, { id: "floating_close_button", className: "lumora-ai-close-button", icon: !1, onClick: (...e) => P("closeChat", {}, e), variant: "ghost", ariaLabel: "Close Lumora AI assistant", additionalAttributes: { title: "Close AI assistant" }, size: "sm", theme: "auto" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
          "      ",
          /* @__PURE__ */ y(vt, { id: "message_list", className: "lumora-ai-transcript w-full flex-1 overflow-y-auto px-6 py-6", as: "section", children: [
            "      ",
            x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ v(At, { id: "messages_repeater", className: "flex flex-col gap-4", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(te), children: (e) => (() => {
                const t = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                return /* @__PURE__ */ y(f, { children: [
                  "      ",
                  x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                    "      ",
                    /* @__PURE__ */ y(ht, { id: "message_bubble", className: "flex w-full gap-2", bubbleClassName: "max-w-2xl rounded-2xl px-4 py-3", variant: /* @__PURE__ */ ((s) => s === void 0 ? "incoming" : s)(t?.item?.variant), timestamp: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(t?.item?.timestamp), sender: /* @__PURE__ */ ((s) => s === void 0 ? "Assistant" : s)(t?.item?.sender), status: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(t?.item?.status), children: [
                      "      ",
                      x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
                        "      ",
                        /* @__PURE__ */ v(j, { id: "bubble_content", className: "lumora-ai-message-content text-sm", as: "p", content: /* @__PURE__ */ ((s) => s === void 0 ? "" : s)(t?.item?.content) })
                      ] })
                    ] })
                  ] })
                ] });
              })() })
            ] }),
            x(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(U)) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ v(j, { id: "typing_indicator", className: "lumora-ai-typing text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Assistant" : e)(i?.assistantName), customColor: "var(--rudra-color-muted)" })
            ] })
          ] })
        ] }),
        x(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ y(f, { children: [
          "      ",
          /* @__PURE__ */ y(bt, { id: "error_panel", className: "lumora-ai-error mx-6 mb-3", action: /* @__PURE__ */ y(f, { children: [
            "      ",
            x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ v(ye, { id: "retry_button", theme: "auto", variant: "outline", onAction: (...e) => P("retryLastMessage", {}, e), ariaLabel: "Retry last message", size: "sm", label: "Retry" })
            ] })
          ] }), title: "Assistant unavailable", onDismiss: (...e) => P("dismissError", {}, e), appearance: "soft", closeLabel: "Dismiss error", dismissible: !0, live: "assertive", theme: "auto", variant: "error", children: [
            "      ",
            x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ v(j, { id: "error_text", className: "text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Something went wrong." : e)(B) })
            ] })
          ] })
        ] }),
        x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
          "      ",
          /* @__PURE__ */ y(K, { id: "composer_wrapper", className: "lumora-ai-composer block w-full px-5 pb-5 pt-4", children: [
            "      ",
            x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ v(j, { id: "composer_hint", className: "mb-2 text-xs", as: "p", content: "Ask a question or request an available action.", customColor: "var(--rudra-color-muted)" })
            ] }),
            x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
              "      ",
              /* @__PURE__ */ v(ft, { id: "chat_composer", className: "w-full", composerClassName: "rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900", placeholder: /* @__PURE__ */ ((e) => e === void 0 ? "Ask anything…" : e)(i?.placeholder), onAttachmentSelect: (...e) => P("handleAttachments", {}, e), onSend: (...e) => P("sendMessage", {}, e), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(U), autoFocus: !1, showVoice: !1, showPicker: !1, showAttachment: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(i?.allowAttachments) })
            ] })
          ] })
        ] }),
        x(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ y(f, { children: [
          "      ",
          /* @__PURE__ */ v(xt, { id: "global_toasts", onDismiss: (...e) => P("dismissError", {}, e), showIcons: !0, maxVisible: 3, displayMode: "fixed", closable: !0, position: "top-right", newestOnTop: !0, items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(V) })
        ] })
      ] })
    ] }),
    x(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(X)) && /* @__PURE__ */ y(f, { children: [
      "      ",
      /* @__PURE__ */ y(K, { id: "floating_launcher", className: "lumora-ai-launcher", children: [
        "      ",
        x(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ y(f, { children: [
          "      ",
          /* @__PURE__ */ v(he, { id: "floating_launcher_button", className: "lumora-ai-launcher-button", onClick: (...e) => P("openChat", {}, e), variant: "primary", ariaLabel: "Open Lumora AI assistant", additionalAttributes: { "aria-haspopup": "dialog", title: "Open AI assistant" }, icon: !1, size: "xl", theme: "auto" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Rt as default
};
