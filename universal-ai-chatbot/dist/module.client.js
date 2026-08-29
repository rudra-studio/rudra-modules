import { jsx as b, jsxs as g, Fragment as p } from "react/jsx-runtime";
import { useState as S, useEffect as z, useRef as B, useCallback as O } from "react";
import { Surface as tt, Typography as T, Badge as st, Button as xe, Alert as ot } from "@rudra-studio/rudra-core";
import { Flex as fe, Box as he, ScrollArea as nt, Repeater as at } from "@rudra-studio/rudra-layout";
import { MessageBubble as rt, MessageComposer as it, ToastStack as ct } from "@rudra-studio/rudra-widgets";
function xt(s) {
  const P = s.serverData || s.serverState || {}, D = s.sharedState || {}, k = s.applicationState || P.applicationState || {}, L = s.pageState || P.pageState || {}, q = s.pageData || P.pageData || {}, _e = {
    ...s.runtime?.functions || {},
    ...s.runtime?.actions || {},
    ...s.functions || {},
    ...s.actions || {}
  }, w = s.$theme ?? s.theme ?? s.data?.$theme ?? s.runtime?.data?.$theme ?? s.runtime?.theme, G = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [dt, Q] = S(() => w ?? G());
  z(() => {
    w != null && Q(w);
  }, [w]), z(() => {
    if (w != null || typeof document > "u") return;
    const e = document.documentElement, t = (o) => Q(o?.detail?.theme ?? G()), n = new MutationObserver(t);
    return n.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      n.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [w]);
  const K = B(null), [$, J] = S("lg");
  z(() => {
    if (!K.current) return;
    const e = new ResizeObserver((t) => {
      for (let n of t) {
        const o = n.contentRect.width;
        o < 768 ? J("sm") : o < 1024 ? J("md") : J("lg");
      }
    });
    return e.observe(K.current), () => e.disconnect();
  }, []);
  const h = O((e) => typeof e != "object" || e === null ? e : $ === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : $ === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [$]), x = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, be = s.contextCacheTtlSeconds !== void 0 ? s.contextCacheTtlSeconds : s.data?.contextCacheTtlSeconds !== void 0 ? s.data.contextCacheTtlSeconds : 60, ve = s.customClass !== void 0 ? s.customClass : s.data?.customClass !== void 0 ? s.data.customClass : "", Ae = s.welcomeMessage !== void 0 ? s.welcomeMessage : s.data?.welcomeMessage !== void 0 ? s.data.welcomeMessage : "Hi — how can I help?", we = s.assistantName !== void 0 ? s.assistantName : s.data?.assistantName !== void 0 ? s.data.assistantName : "Lumora", Ce = s.aiProvider !== void 0 ? s.aiProvider : s.data?.aiProvider !== void 0 ? s.data.aiProvider : "anthropic", Se = s.systemPrompt !== void 0 ? s.systemPrompt : s.data?.systemPrompt !== void 0 ? s.data.systemPrompt : "You are Lumora, a concise and helpful AI assistant. Provide clear, accurate, and professional responses.", Pe = s.geminiModel !== void 0 ? s.geminiModel : s.data?.geminiModel !== void 0 ? s.data.geminiModel : "gemini-2.5-flash", Me = s.chatEndpoint !== void 0 ? s.chatEndpoint : s.data?.chatEndpoint !== void 0 ? s.data.chatEndpoint : "/api/ai/chat", ze = s.visualTheme !== void 0 ? s.visualTheme : s.data?.visualTheme !== void 0 ? s.data.visualTheme : "auto", Re = s.contextNamespace !== void 0 ? s.contextNamespace : s.data?.contextNamespace !== void 0 ? s.data.contextNamespace : "universal-ai-chatbot", je = s.disabled !== void 0 ? s.disabled : s.data?.disabled !== void 0 ? s.data.disabled : !1, Te = s.maxOutputTokens !== void 0 ? s.maxOutputTokens : s.data?.maxOutputTokens !== void 0 ? s.data.maxOutputTokens : 1024, Ie = s.maxMessages !== void 0 ? s.maxMessages : s.data?.maxMessages !== void 0 ? s.data.maxMessages : 100, Ee = s.sessionId !== void 0 ? s.sessionId : s.data?.sessionId !== void 0 ? s.data.sessionId : "", Ne = s.contextScopeKey !== void 0 ? s.contextScopeKey : s.data?.contextScopeKey !== void 0 ? s.data.contextScopeKey : "", Oe = s.anthropicModel !== void 0 ? s.anthropicModel : s.data?.anthropicModel !== void 0 ? s.data.anthropicModel : "claude-sonnet-4-5", De = s.visible !== void 0 ? s.visible : s.data?.visible !== void 0 ? s.data.visible : !0, ke = s.requestHeaders !== void 0 ? s.requestHeaders : s.data?.requestHeaders !== void 0 ? s.data.requestHeaders : {}, Le = s.allowAttachments !== void 0 ? s.allowAttachments : s.data?.allowAttachments !== void 0 ? s.data.allowAttachments : !1, qe = s.locale !== void 0 ? s.locale : s.data?.locale !== void 0 ? s.data.locale : "en", Be = s.toolManifest !== void 0 ? s.toolManifest : s.data?.toolManifest !== void 0 ? s.data.toolManifest : [], Ke = s.contextEndpoint !== void 0 ? s.contextEndpoint : s.data?.contextEndpoint !== void 0 ? s.data.contextEndpoint : "/api/ai-context", $e = s.showToolActivity !== void 0 ? s.showToolActivity : s.data?.showToolActivity !== void 0 ? s.data.showToolActivity : !0, Je = s.contextDatabaseEnabled !== void 0 ? s.contextDatabaseEnabled : s.data?.contextDatabaseEnabled !== void 0 ? s.data.contextDatabaseEnabled : !1, He = s.placeholder !== void 0 ? s.placeholder : s.data?.placeholder !== void 0 ? s.data.placeholder : "Ask Lumora anything…", Ue = s.permissions !== void 0 ? s.permissions : s.data?.permissions !== void 0 ? s.data.permissions : {}, Ye = s.context !== void 0 ? s.context : s.data?.context !== void 0 ? s.data.context : {}, Fe = s.title !== void 0 ? s.title : s.data?.title !== void 0 ? s.data.title : "Lumora Assistant", i = { contextCacheTtlSeconds: be, customClass: ve, welcomeMessage: Ae, assistantName: we, aiProvider: Ce, systemPrompt: Se, geminiModel: Pe, chatEndpoint: Me, visualTheme: ze, contextNamespace: Re, disabled: je, maxOutputTokens: Te, maxMessages: Ie, sessionId: Ee, contextScopeKey: Ne, anthropicModel: Oe, visible: De, requestHeaders: ke, allowAttachments: Le, locale: qe, toolManifest: Be, contextEndpoint: Ke, showToolActivity: $e, contextDatabaseEnabled: Je, placeholder: He, permissions: Ue, context: Ye, title: Fe }, [Ze, W] = S(() => structuredClone({})), [X, V] = S(() => structuredClone([])), [H, ee] = S(() => structuredClone(!1)), [U, te] = S(() => structuredClone("")), [se, oe] = S(() => structuredClone([])), [Ge, ne] = S(() => structuredClone({})), f = { runtimeContext: Ze, messages: X, isSending: H, errorMessage: U, toasts: se, pendingAction: Ge }, y = O((e, t) => {
    switch (e) {
      case "runtimeContext":
        return W(t), t;
      case "messages":
        return V(t), t;
      case "isSending":
        return ee(t), t;
      case "errorMessage":
        return te(t), t;
      case "toasts":
        return oe(t), t;
      case "pendingAction":
        return ne(t), t;
      default:
        return t;
    }
  }, []);
  O((e, t) => {
    const [n, ...o] = String(e || "").split(".");
    if (!n) return t;
    if (o.length === 0) return y(n, t);
    const a = (r) => {
      const c = Array.isArray(r) ? [...r] : { ...r || {} };
      let l = c;
      return o.forEach((m, d) => {
        d === o.length - 1 ? l[m] = t : (l[m] = Array.isArray(l[m]) ? [...l[m]] : { ...l[m] || {} }, l = l[m]);
      }), c;
    };
    switch (n) {
      case "runtimeContext":
        return W(a), t;
      case "messages":
        return V(a), t;
      case "isSending":
        return ee(a), t;
      case "errorMessage":
        return te(a), t;
      case "toasts":
        return oe(a), t;
      case "pendingAction":
        return ne(a), t;
      default:
        return t;
    }
  }, [y]);
  const Qe = { actionCompleted: { properties: { actionId: { type: "string" }, result: { type: "object" } }, type: "object" }, actionRequested: { properties: { action: { type: "object" } }, type: "object" }, attachmentSelected: { additionalProperties: !0, properties: { files: { type: "array" } }, type: "object" }, contextChanged: { type: "object" }, contextResolved: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, contextUpdated: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, conversationCleared: { type: "object" }, error: { properties: { code: { type: "string" }, message: { type: "string" } }, type: "object" }, escalationRequested: { additionalProperties: !0, properties: { action: { type: "object" }, message: { type: "object" } }, type: "object" }, messageReceived: { properties: { message: { type: "object" } }, type: "object" }, responseCancelled: { additionalProperties: !0, properties: { reason: { type: "string" } }, type: "object" } }, Y = (e, t, n) => {
    if (!t || typeof t != "object") return "";
    const o = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], a = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(a) && !(a === "integer" && o.includes("number"))) return n + " must be " + o.join(" or ") + ".";
    if (t.enum && !t.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return n + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return n + "." + r + " is required.";
      for (const [r, c] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const l = Y(e[r], c, n + "." + r);
        if (l) return l;
      }
    }
    if (Array.isArray(e) && t.items) for (let r = 0; r < e.length; r++) {
      const c = Y(e[r], t.items, n + "[" + r + "]");
      if (c) return c;
    }
    return "";
  }, _ = O(async (e, t, n = !1) => {
    const o = Qe[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const a = Y(t, o, "output." + e);
    if (a) throw new Error(a);
    const r = s.onOutput || s.onModuleOutput || s.runtime?.onOutput;
    if (typeof r != "function") return t;
    const c = r(e, t, { moduleId: s.moduleId, awaitHandlers: n });
    return n ? await c : t;
  }, [s.onOutput, s.onModuleOutput, s.runtime?.onOutput, s.moduleId]), ae = (e, t) => {
    const n = String(t || "").split(".").filter(Boolean);
    if (!(!n.length || n.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return n.reduce((o, a) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(a in o) ? o.get(a) : o[a];
      }, e);
  }, M = (e, t) => {
    if (Array.isArray(e)) return e.map((o) => M(o, t));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([o, a]) => [M(o, t), M(a, t)]));
    if (typeof e != "string") return e;
    const n = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return n ? ae(t, n[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, a) => {
      const r = ae(t, a);
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
  };
  async function re(e = {}) {
    const t = e || {}, n = {};
    {
      t.event;
      const o = await (async () => {
        const r = [...Array.isArray(f.messages) ? f.messages : []].reverse().find((c) => c && c.role === "user");
        return { type: "text", text: r ? String(r.content || "") : "" };
      })();
      n.find_retry_message = o;
    }
    return n.find_retry_message.text ? (await F({ message: n.find_retry_message }), n.run_retry) : { accepted: !1, reason: "no-user-message" };
  }
  async function ie(e = {}) {
    return y("errorMessage", ""), y("toasts", []), { dismissed: !0 };
  }
  async function We(e = {}) {
    const t = e || {};
    return _("attachmentSelected", { files: t.files }, !1).catch((n) => console.error("Module output delivery failed", n)), { accepted: !0, count: t.files.length };
  }
  async function ce(e = {}) {
    const t = e || {};
    return y("messages", i.showToolActivity ? [...f.messages, { id: "tool-" + Date.now(), role: "system", sender: "Tool activity", variant: "system", content: "Tool " + t.actionId + " " + (t.status || "completed"), timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: t.result || {} }].slice(-i.maxMessages) : f.messages), y("pendingAction", {}), _("actionCompleted", { actionId: t.actionId, result: t.result || {}, status: t.status || "completed" }, !1).catch((n) => console.error("Module output delivery failed", n)), { actionId: t.actionId, completed: !0 };
  }
  async function I(e = {}) {
    const t = e || {}, n = {};
    {
      t.event;
      const o = await (async () => {
        const a = t.response && typeof t.response == "object" ? t.response : {}, r = Array.isArray(a.content) ? a.content.filter((A) => A && A.type === "text").map((A) => String(A.text || "")).join("") : "", l = (Array.isArray(a.candidates) && a.candidates[0] && a.candidates[0].content && Array.isArray(a.candidates[0].content.parts) ? a.candidates[0].content.parts : []).filter((A) => A && typeof A.text == "string").map((A) => A.text).join(""), m = a.message && typeof a.message == "object" ? a.message : {}, d = Array.isArray(a.choices) && a.choices[0] && a.choices[0].message ? a.choices[0].message : {}, u = r || l || m.content || a.text || a.response || d.content || "", v = typeof u == "string" ? u : JSON.stringify(u || ""), E = Array.isArray(a.toolCalls) ? a.toolCalls : Array.isArray(a.actions) ? a.actions : [], N = a.toolCall || E[0] || null, pe = Array.isArray(a.candidates) ? "gemini" : Array.isArray(a.content) ? "anthropic" : String(i.aiProvider || "unknown"), et = pe === "anthropic" ? { mode: "prompt-cache", enabled: !0, readTokens: Number(a.usage && a.usage.cache_read_input_tokens || 0), writtenTokens: Number(a.usage && a.usage.cache_creation_input_tokens || 0) } : { mode: "implicit", enabled: !0, readTokens: Number(a.usageMetadata && a.usageMetadata.cachedContentTokenCount || 0) };
        return { message: { id: String(a.id || "assistant-" + Date.now()), role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: v || "I could not read the assistant response.", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: a.data || {} }, action: N, provider: pe, providerCache: et };
      })();
      n.normalize_response = o;
    }
    return y("messages", [...Array.isArray(t.messages) ? t.messages : f.messages, n.normalize_response.message].slice(-i.maxMessages)), _("messageReceived", { cache: n.normalize_response.providerCache, message: n.normalize_response.message, provider: n.normalize_response.provider, raw: t.response }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_response.action ? (y("pendingAction", n.normalize_response.action), _("actionRequested", { action: n.normalize_response.action, sessionId: i.sessionId }, !1).catch((o) => console.error("Module output delivery failed", o)), ["escalate", "escalation", "handoff"].includes(String(n.normalize_response.action.type || n.normalize_response.action.name || "").toLowerCase()) && _("escalationRequested", { action: n.normalize_response.action, message: n.normalize_response.message }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_response) : n.normalize_response;
  }
  async function de(e = {}) {
    return i.contextDatabaseEnabled === !0 ? { initialized: !0, table: "rudra_ai_context" } : { initialized: !1, reason: "database-context-disabled" };
  }
  async function F(e = {}) {
    const t = e || {}, n = {}, o = {};
    {
      t.event;
      const a = await (async () => {
        const r = t.message && typeof t.message == "object" ? t.message.text ?? t.message.content ?? "" : t.message;
        return { type: "text", text: String(r ?? "").trim() };
      })();
      o.normalize_user = a, n.customCodeResult = a;
    }
    if (o.normalize_user.text)
      if (y("isSending", !0), y("errorMessage", ""), y("messages", [...f.messages, { id: "user-" + Date.now(), role: "user", sender: "You", variant: "outgoing", content: o.normalize_user.text, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }].slice(-i.maxMessages)), i.contextDatabaseEnabled === !0) {
        {
          t.event;
          const a = await (async () => {
            const r = o.read_context_db, c = Array.isArray(r) ? r : r && Array.isArray(r.data) ? r.data : [], l = c[0] && typeof c[0] == "object" ? c[0] : null, m = o.use_direct_context && typeof o.use_direct_context == "object" ? o.use_direct_context : {}, d = i.contextDatabaseEnabled === !0, u = d && l ? l : m, v = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, E = u.context && typeof u.context == "object" && !Array.isArray(u.context) ? u.context : v, N = typeof u.systemPrompt == "string" && u.systemPrompt.trim() ? u.systemPrompt : typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: E, systemPrompt: N, revision: Number(u.revision || 0), updatedAt: typeof u.updatedAt == "string" && u.updatedAt ? u.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: d ? "database" : "direct" }, source: d ? "database" : "direct", found: !!l };
          })();
          o.normalize_context = a, n.customCodeResult = a;
        }
        y("runtimeContext", o.normalize_context.context), _("contextResolved", { cache: o.normalize_context.cache, context: o.normalize_context.context, revision: o.normalize_context.revision, sessionId: i.sessionId, systemPrompt: o.normalize_context.systemPrompt, updatedAt: o.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
        {
          t.event;
          const a = await (async () => {
            const c = (Array.isArray(f.messages) ? f.messages : []).filter((d) => d && (d.role === "user" || d.role === "assistant")), l = c.findIndex((d) => d.role === "user"), m = l >= 0 ? c.slice(l) : [];
            return { anthropicMessages: m.map((d) => ({ role: d.role === "assistant" ? "assistant" : "user", content: String(d.content || "") })), geminiContents: m.map((d) => ({ role: d.role === "assistant" ? "model" : "user", parts: [{ text: String(d.content || "") }] })) };
          })();
          o.build_provider_payloads = a, n.customCodeResult = a;
        }
        if (String(i.aiProvider || "anthropic").toLowerCase() === "anthropic") {
          {
            const a = { args: t, inputs: i, state: f, sharedState: D, applicationState: k, pageState: L, pageData: q, serverData: P, vars: n, stepResults: o }, r = M({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "[REDACTED]", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
            const m = l.data;
            o.call_anthropic = m, n.apiResult = m;
          }
          return await I({ messages: f.messages, response: o.call_anthropic || o.call_gemini }), y("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
        } else {
          {
            const a = { args: t, inputs: i, state: f, sharedState: D, applicationState: k, pageState: L, pageData: q, serverData: P, vars: n, stepResults: o }, r = M({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
            const m = l.data;
            o.call_gemini = m, n.apiResult = m;
          }
          return await I({ messages: f.messages, response: o.call_anthropic || o.call_gemini }), y("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
        }
      } else {
        {
          t.event;
          const a = await (async () => {
            const r = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, c = typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: r, systemPrompt: c, revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: "direct" }, source: "direct" };
          })();
          o.use_direct_context = a, n.customCodeResult = a;
        }
        {
          {
            t.event;
            const a = await (async () => {
              const r = o.read_context_db, c = Array.isArray(r) ? r : r && Array.isArray(r.data) ? r.data : [], l = c[0] && typeof c[0] == "object" ? c[0] : null, m = o.use_direct_context && typeof o.use_direct_context == "object" ? o.use_direct_context : {}, d = i.contextDatabaseEnabled === !0, u = d && l ? l : m, v = i.context && typeof i.context == "object" && !Array.isArray(i.context) ? i.context : {}, E = u.context && typeof u.context == "object" && !Array.isArray(u.context) ? u.context : v, N = typeof u.systemPrompt == "string" && u.systemPrompt.trim() ? u.systemPrompt : typeof i.systemPrompt == "string" && i.systemPrompt.trim() ? i.systemPrompt : "You are a concise and helpful AI assistant.";
              return { context: E, systemPrompt: N, revision: Number(u.revision || 0), updatedAt: typeof u.updatedAt == "string" && u.updatedAt ? u.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: d ? "database" : "direct" }, source: d ? "database" : "direct", found: !!l };
            })();
            o.normalize_context = a, n.customCodeResult = a;
          }
          y("runtimeContext", o.normalize_context.context), _("contextResolved", { cache: o.normalize_context.cache, context: o.normalize_context.context, revision: o.normalize_context.revision, sessionId: i.sessionId, systemPrompt: o.normalize_context.systemPrompt, updatedAt: o.normalize_context.updatedAt }, !1).catch((a) => console.error("Module output delivery failed", a));
          {
            t.event;
            const a = await (async () => {
              const c = (Array.isArray(f.messages) ? f.messages : []).filter((d) => d && (d.role === "user" || d.role === "assistant")), l = c.findIndex((d) => d.role === "user"), m = l >= 0 ? c.slice(l) : [];
              return { anthropicMessages: m.map((d) => ({ role: d.role === "assistant" ? "assistant" : "user", content: String(d.content || "") })), geminiContents: m.map((d) => ({ role: d.role === "assistant" ? "model" : "user", parts: [{ text: String(d.content || "") }] })) };
            })();
            o.build_provider_payloads = a, n.customCodeResult = a;
          }
          if (String(i.aiProvider || "anthropic").toLowerCase() === "anthropic") {
            {
              const a = { args: t, inputs: i, state: f, sharedState: D, applicationState: k, pageState: L, pageData: q, serverData: P, vars: n, stepResults: o }, r = M({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "[REDACTED]", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
              const m = l.data;
              o.call_anthropic = m, n.apiResult = m;
            }
            return await I({ messages: f.messages, response: o.call_anthropic || o.call_gemini }), y("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
          } else {
            {
              const a = { args: t, inputs: i, state: f, sharedState: D, applicationState: k, pageState: L, pageData: q, serverData: P, vars: n, stepResults: o }, r = M({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, a) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: r, context: a }), signal: t.signal || AbortSignal.timeout(3e4) }), l = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(l.error || "Protected API request failed (" + c.status + ")");
              const m = l.data;
              o.call_gemini = m, n.apiResult = m;
            }
            return await I({ messages: f.messages, response: o.call_anthropic || o.call_gemini }), y("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
          }
        }
      }
    else
      return { accepted: !1, reason: "empty" };
  }
  async function le(e = {}) {
    const t = e || {}, n = {};
    if (i.contextDatabaseEnabled === !0) {
      {
        t.event;
        const o = await (async () => {
          const a = n.upsert_context_db, r = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = r[0] && typeof r[0] == "object" ? r[0] : null, l = n.use_direct_context_update && typeof n.use_direct_context_update == "object" ? n.use_direct_context_update : {}, m = i.contextDatabaseEnabled === !0, d = m && c ? c : l;
          return { context: d.context && typeof d.context == "object" ? d.context : t.context, systemPrompt: typeof d.systemPrompt == "string" ? d.systemPrompt : t.systemPrompt || i.systemPrompt || "", revision: Number(d.revision || 0), updatedAt: typeof d.updatedAt == "string" && d.updatedAt ? d.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: m ? { enabled: !1, invalidated: !!c, source: "database" } : d.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: m && !!c, updated: m ? !!c : !0 };
        })();
        n.normalize_context_update = o;
      }
      return y("runtimeContext", n.normalize_context_update.context), _("contextUpdated", n.normalize_context_update, !1).catch((o) => console.error("Module output delivery failed", o)), _("contextChanged", { context: n.normalize_context_update.context, persisted: n.normalize_context_update.persisted, revision: n.normalize_context_update.revision }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_context_update;
    } else {
      {
        t.event;
        const o = await (async () => ({ context: t.context && typeof t.context == "object" ? t.context : {}, systemPrompt: typeof t.systemPrompt == "string" ? t.systemPrompt : i.systemPrompt || "", revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: !1, updated: !0 }))();
        n.use_direct_context_update = o;
      }
      {
        {
          t.event;
          const o = await (async () => {
            const a = n.upsert_context_db, r = Array.isArray(a) ? a : a && Array.isArray(a.data) ? a.data : [], c = r[0] && typeof r[0] == "object" ? r[0] : null, l = n.use_direct_context_update && typeof n.use_direct_context_update == "object" ? n.use_direct_context_update : {}, m = i.contextDatabaseEnabled === !0, d = m && c ? c : l;
            return { context: d.context && typeof d.context == "object" ? d.context : t.context, systemPrompt: typeof d.systemPrompt == "string" ? d.systemPrompt : t.systemPrompt || i.systemPrompt || "", revision: Number(d.revision || 0), updatedAt: typeof d.updatedAt == "string" && d.updatedAt ? d.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: m ? { enabled: !1, invalidated: !!c, source: "database" } : d.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || i.contextScopeKey || i.sessionId || "default", persisted: m && !!c, updated: m ? !!c : !0 };
          })();
          n.normalize_context_update = o;
        }
        return y("runtimeContext", n.normalize_context_update.context), _("contextUpdated", n.normalize_context_update, !1).catch((o) => console.error("Module output delivery failed", o)), _("contextChanged", { context: n.normalize_context_update.context, persisted: n.normalize_context_update.persisted, revision: n.normalize_context_update.revision }, !1).catch((o) => console.error("Module output delivery failed", o)), n.normalize_context_update;
      }
    }
  }
  async function me(e = {}) {
    return y("messages", f.messages.length ? f.messages : i.welcomeMessage ? [{ id: "welcome", role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: i.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), { initialized: !0 };
  }
  async function ue(e = {}) {
    const t = e || {};
    return y("isSending", !1), _("responseCancelled", { reason: t.reason || "host-requested" }, !1).catch((n) => console.error("Module output delivery failed", n)), { cancelled: !0 };
  }
  async function ge(e = {}) {
    return y("messages", i.welcomeMessage ? [{ id: "welcome-" + Date.now(), role: "assistant", sender: i.assistantName || "Assistant", variant: "incoming", content: i.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), y("pendingAction", {}), y("errorMessage", ""), _("conversationCleared", { sessionId: i.sessionId }, !1).catch((t) => console.error("Module output delivery failed", t)), { cleared: !0 };
  }
  const Xe = {
    retryLastMessage: re,
    dismissError: ie,
    handleAttachments: We,
    provideToolResult: ce,
    processApiResponse: I,
    initializeContextStore: de,
    sendMessage: F,
    loadContext: le,
    initializeConversation: me,
    cancelResponse: ue,
    clearConversation: ge
  }, C = B({});
  C.current = {
    lumora_ai_clear: (e = {}, t = {}) => ge({ ...e, signal: t.signal }),
    lumora_ai_tool_result: (e = {}, t = {}) => ce({ ...e, signal: t.signal }),
    lumora_ai_load_context: (e = {}, t = {}) => le({ ...e, signal: t.signal }),
    lumora_ai_cancel: (e = {}, t = {}) => ue({ ...e, signal: t.signal }),
    lumora_ai_dismiss_error: (e = {}, t = {}) => ie({ ...e, signal: t.signal }),
    lumora_ai_retry: (e = {}, t = {}) => re({ ...e, signal: t.signal }),
    lumora_ai_send: (e = {}, t = {}) => F({ ...e, signal: t.signal })
  };
  const Z = B(null);
  Z.current || (Z.current = {
    lumora_ai_clear: (e, t) => C.current.lumora_ai_clear(e, t),
    lumora_ai_tool_result: (e, t) => C.current.lumora_ai_tool_result(e, t),
    lumora_ai_load_context: (e, t) => C.current.lumora_ai_load_context(e, t),
    lumora_ai_cancel: (e, t) => C.current.lumora_ai_cancel(e, t),
    lumora_ai_dismiss_error: (e, t) => C.current.lumora_ai_dismiss_error(e, t),
    lumora_ai_retry: (e, t) => C.current.lumora_ai_retry(e, t),
    lumora_ai_send: (e, t) => C.current.lumora_ai_send(e, t)
  }), z(() => {
    const e = s.registerCommands || s.runtime?.registerCommands;
    if (typeof e == "function")
      return e(Z.current);
  }, [s.registerCommands, s.runtime?.registerCommands]);
  const Ve = {
    retryLastMessage: [],
    dismissError: [],
    handleAttachments: ["files"],
    provideToolResult: ["actionId", "result", "status"],
    processApiResponse: ["response", "messages"],
    initializeContextStore: [],
    sendMessage: ["message"],
    loadContext: ["context", "replace", "scopeKey", "systemPrompt", "expectedRevision"],
    initializeConversation: [],
    cancelResponse: ["reason"],
    clearConversation: []
  }, R = (e, t = {}, n = []) => {
    const o = Xe[e];
    if (o) {
      const m = Ve[e] || [];
      return o(Object.fromEntries(m.map((d, u) => {
        const v = Object.prototype.hasOwnProperty.call(t, d) ? t[d] : void 0;
        return [d, (v === "" || v === void 0) && n[u] !== void 0 ? n[u] : d === "event" && (v === "" || v === void 0) ? n[0] : v];
      })));
    }
    const a = _e?.[e];
    if (typeof a == "function")
      return a(Object.keys(t).length > 0 ? t : n[0]);
    const [r, c] = String(e).split("."), l = typeof globalThis < "u" ? globalThis[r]?.[c] : void 0;
    if (typeof l == "function") return l(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, j = B(/* @__PURE__ */ new Map()), ye = O((e, t, n, o) => {
    const a = j.current.get(e);
    if (t === "exhaust" && a?.promise) return a.promise;
    t === "takeLatest" && a?.controller?.abort();
    const r = new AbortController(), c = () => Promise.resolve().then(() => n(r.signal)), l = t === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(c) : c();
    return j.current.set(e, { controller: r, promise: l }), l.catch((m) => {
      m?.name !== "AbortError" && console.error(o, m);
    }).finally(() => {
      j.current.get(e)?.promise === l && j.current.delete(e);
    }), l;
  }, []);
  return z(() => () => {
    for (const e of j.current.values()) e.controller?.abort();
    j.current.clear();
  }, []), z(() => {
    ye("initialize_context_store_mountinitializeContextStore", "takeLatest", (e) => de({}), "Module mount lifecycle failed:");
  }, []), z(() => {
    ye("lumora_ai_mountinitializeConversation", "takeLatest", (e) => me({}), "Module mount lifecycle failed:");
  }, []), /* @__PURE__ */ b("div", { ref: K, className: "rudra-module-wrapper", children: x(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(i?.visible)) && /* @__PURE__ */ g(p, { children: [
    "      ",
    /* @__PURE__ */ g(tt, { id: "root_container", className: "lumora-ai-shell", as: "section", tone: "default", radius: "xl", padding: "none", bordered: !0, responsivePadding: !1, children: [
      "      ",
      x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
        "      ",
        /* @__PURE__ */ g(fe, { id: "chat_header", className: "lumora-ai-header flex w-full items-center justify-between gap-4 px-6 py-4", as: "header", children: [
          "      ",
          x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ g(he, { id: "header_identity", className: "block min-w-0", children: [
              "      ",
              x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
                "      ",
                /* @__PURE__ */ b(T, { id: "header_title", className: "text-lg font-bold", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "AI Assistant" : e)(i?.title) })
              ] }),
              x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
                "      ",
                /* @__PURE__ */ b(T, { id: "header_subtitle", className: "text-xs", as: "p", content: "Context-aware assistant · tools enabled by your application", customColor: "var(--rudra-color-muted)" })
              ] })
            ] })
          ] }),
          x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ g(fe, { id: "header_actions", className: "flex items-center gap-3", children: [
              "      ",
              x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
                "      ",
                /* @__PURE__ */ b(st, { id: "status_badge", className: "rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400", size: "sm", label: "ONLINE", variant: "solid" })
              ] }),
              x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
                "      ",
                /* @__PURE__ */ b(xe, { id: "clear_btn", onAction: (...e) => R("clearConversation", {}, e), ariaLabel: "Clear conversation", size: "sm", label: "Clear", theme: "auto", variant: "ghost" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
        "      ",
        /* @__PURE__ */ g(nt, { id: "message_list", className: "lumora-ai-transcript w-full flex-1 overflow-y-auto px-6 py-6", as: "section", children: [
          "      ",
          x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ b(at, { id: "messages_repeater", className: "flex flex-col gap-4", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(X), children: (e) => (() => {
              const t = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
              return /* @__PURE__ */ g(p, { children: [
                "      ",
                x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
                  "      ",
                  /* @__PURE__ */ g(rt, { id: "message_bubble", className: "flex w-full gap-2", bubbleClassName: "max-w-2xl rounded-2xl px-4 py-3", sender: /* @__PURE__ */ ((n) => n === void 0 ? "Assistant" : n)(t?.item?.sender), status: /* @__PURE__ */ ((n) => n === void 0 ? "" : n)(t?.item?.status), variant: /* @__PURE__ */ ((n) => n === void 0 ? "incoming" : n)(t?.item?.variant), timestamp: /* @__PURE__ */ ((n) => n === void 0 ? "" : n)(t?.item?.timestamp), children: [
                    "      ",
                    x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
                      "      ",
                      /* @__PURE__ */ b(T, { id: "bubble_content", className: "text-sm", as: "p", content: /* @__PURE__ */ ((n) => n === void 0 ? "" : n)(t?.item?.content) })
                    ] })
                  ] })
                ] })
              ] });
            })() })
          ] }),
          x(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(H)) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ b(T, { id: "typing_indicator", className: "lumora-ai-typing text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Assistant" : e)(i?.assistantName), customColor: "var(--rudra-color-muted)" })
          ] })
        ] })
      ] }),
      x(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(U)) && /* @__PURE__ */ g(p, { children: [
        "      ",
        /* @__PURE__ */ g(ot, { id: "error_panel", className: "lumora-ai-error mx-6 mb-3", action: /* @__PURE__ */ g(p, { children: [
          "      ",
          x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ b(xe, { id: "retry_button", size: "sm", label: "Retry", theme: "auto", variant: "outline", onAction: (...e) => R("retryLastMessage", {}, e), ariaLabel: "Retry last message" })
          ] })
        ] }), theme: "auto", appearance: "soft", closeLabel: "Dismiss error", dismissible: !0, live: "assertive", title: "Assistant unavailable", variant: "error", onDismiss: (...e) => R("dismissError", {}, e), children: [
          "      ",
          x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ b(T, { id: "error_text", className: "text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Something went wrong." : e)(U) })
          ] })
        ] })
      ] }),
      x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
        "      ",
        /* @__PURE__ */ g(he, { id: "composer_wrapper", className: "lumora-ai-composer block w-full px-5 pb-5 pt-4", children: [
          "      ",
          x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ b(T, { id: "composer_hint", className: "mb-2 text-xs", as: "p", content: "Ask a question or request an available action.", customColor: "var(--rudra-color-muted)" })
          ] }),
          x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
            "      ",
            /* @__PURE__ */ b(it, { id: "chat_composer", className: "w-full", composerClassName: "rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900", onAttachmentSelect: (...e) => R("handleAttachments", {}, e), onSend: (...e) => R("sendMessage", {}, e), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(H), showVoice: !1, showAttachment: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(i?.allowAttachments), autoFocus: !1, showPicker: !1, placeholder: /* @__PURE__ */ ((e) => e === void 0 ? "Ask anything…" : e)(i?.placeholder) })
          ] })
        ] })
      ] }),
      x(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ g(p, { children: [
        "      ",
        /* @__PURE__ */ b(ct, { id: "global_toasts", closable: !0, position: "top-right", onDismiss: (...e) => R("dismissError", {}, e), showIcons: !0, maxVisible: 3, displayMode: "fixed", newestOnTop: !0, items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(se) })
      ] })
    ] })
  ] }) });
}
export {
  xt as default
};
