import { jsx as A, jsxs as p, Fragment as x } from "react/jsx-runtime";
import ie, { useState as w, useEffect as N, useRef as X, useCallback as Z } from "react";
import { Surface as bt, Typography as $, Badge as vt, Button as ke, IconButton as Le, Alert as At } from "@rudra-studio/rudra-core";
import { Box as V, Flex as De, ScrollArea as wt, Repeater as Ct } from "@rudra-studio/rudra-layout";
import { MessageBubble as St, MessageComposer as zt, ToastStack as Pt } from "@rudra-studio/rudra-widgets";
import * as ee from "lucide-react";
const qe = (s) => String(s || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), Mt = (s) => {
  let v = s;
  for (; v && typeof v == "object" && "type" in v && "value" in v; )
    v = v.value;
  return v;
};
function It({ icon: s, size: v, color: L, strokeWidth: D, className: M = "", style: I, ...J }) {
  const m = Mt(s), [W, G] = w(null), Q = m && typeof m == "object" ? JSON.stringify(m) : String(m || "");
  N(() => {
    const O = new AbortController();
    let B = "", K = "";
    if (G(null), typeof m == "string") {
      const b = m.trim();
      if (ee[b]) return () => O.abort();
      b.startsWith("<svg") ? K = b : (/^https?:\/\//.test(b) || b.startsWith("/") || b.startsWith("data:image/svg")) && (B = b);
    } else m && typeof m == "object" && (m.iconType === "svg" && m.svgContent ? K = m.svgContent : m.iconType === "url" && m.url && (B = m.url));
    return K ? G(qe(K)) : B && fetch(B, { signal: O.signal }).then((b) => {
      if (!b.ok) throw new Error("Icon request failed (" + b.status + ")");
      return b.text();
    }).then((b) => {
      b.trim().startsWith("<svg") && G(qe(b));
    }).catch((b) => {
      b.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", b);
    }), () => O.abort();
  }, [Q]);
  const R = m && typeof m == "object" ? m.props || {} : {}, z = { ...R };
  delete z.size, delete z.color, delete z.strokeWidth;
  const j = v ?? R.size ?? 24, _ = L ?? R.color ?? "currentColor", f = D ?? R.strokeWidth ?? 1.5;
  let q = "";
  if (typeof m == "string" && ee[m] ? q = m : m && typeof m == "object" && m.name && (!m.iconType || m.iconType === "lucide") && (q = m.name), q) {
    const O = ee[q];
    if (O)
      return ie.createElement(O, {
        size: j,
        color: _,
        strokeWidth: f,
        className: M,
        style: I,
        ...z,
        ...J
      });
  }
  if (W)
    return ie.createElement("span", {
      ...z,
      ...J,
      className: ("rudra-universal-icon " + M).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: j,
        height: j,
        color: _,
        ...I
      },
      dangerouslySetInnerHTML: {
        __html: W.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + f + '">')
      }
    });
  const te = ee.LayoutGrid;
  return ie.createElement(te, {
    size: j,
    color: _,
    strokeWidth: f,
    className: M,
    style: I,
    ...z,
    ...J
  });
}
function kt(s) {
  const v = s.serverData || s.serverState || {}, L = s.sharedState || {}, D = s.applicationState || v.applicationState || {}, M = s.pageState || v.pageState || {}, I = s.pageData || v.pageData || {}, J = {
    ...s.runtime?.functions || {},
    ...s.runtime?.actions || {},
    ...s.functions || {},
    ...s.actions || {}
  }, m = s.$theme ?? s.theme ?? s.data?.$theme ?? s.runtime?.data?.$theme ?? s.runtime?.theme, W = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [G, Q] = w(() => m ?? W());
  N(() => {
    m != null && Q(m);
  }, [m]), N(() => {
    if (m != null || typeof document > "u") return;
    const e = document.documentElement, t = (o) => Q(o?.detail?.theme ?? W()), a = new MutationObserver(t);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [m]);
  const R = X(null), [z, j] = w("lg");
  N(() => {
    if (!R.current) return;
    const e = new ResizeObserver((t) => {
      for (let a of t) {
        const o = a.contentRect.width;
        o < 768 ? j("sm") : o < 1024 ? j("md") : j("lg");
      }
    });
    return e.observe(R.current), () => e.disconnect();
  }, []);
  const _ = Z((e) => typeof e != "object" || e === null ? e : z === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : z === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [z]), f = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, q = s.defaultOpen !== void 0 ? s.defaultOpen : s.data?.defaultOpen !== void 0 ? s.data.defaultOpen : !1, te = s.contextNamespace !== void 0 ? s.contextNamespace : s.data?.contextNamespace !== void 0 ? s.data.contextNamespace : "universal-ai-chatbot", O = s.visible !== void 0 ? s.visible : s.data?.visible !== void 0 ? s.data.visible : !0, B = s.contextDatabaseEnabled !== void 0 ? s.contextDatabaseEnabled : s.data?.contextDatabaseEnabled !== void 0 ? s.data.contextDatabaseEnabled : !1, K = s.anthropicModel !== void 0 ? s.anthropicModel : s.data?.anthropicModel !== void 0 ? s.data.anthropicModel : "claude-sonnet-4-5", b = s.showToolActivity !== void 0 ? s.showToolActivity : s.data?.showToolActivity !== void 0 ? s.data.showToolActivity : !0, Be = s.title !== void 0 ? s.title : s.data?.title !== void 0 ? s.data.title : "Lumora Assistant", Ke = s.toolManifest !== void 0 ? s.toolManifest : s.data?.toolManifest !== void 0 ? s.data.toolManifest : [], Fe = s.placeholder !== void 0 ? s.placeholder : s.data?.placeholder !== void 0 ? s.data.placeholder : "Ask Lumora anything…", $e = s.presentationMode !== void 0 ? s.presentationMode : s.data?.presentationMode !== void 0 ? s.data.presentationMode : "floating", Je = s.systemPrompt !== void 0 ? s.systemPrompt : s.data?.systemPrompt !== void 0 ? s.data.systemPrompt : "You are Lumora, a concise and helpful AI assistant. Provide clear, accurate, and professional responses.", We = s.locale !== void 0 ? s.locale : s.data?.locale !== void 0 ? s.data.locale : "en", He = s.aiProvider !== void 0 ? s.aiProvider : s.data?.aiProvider !== void 0 ? s.data.aiProvider : "anthropic", Ue = s.context !== void 0 ? s.context : s.data?.context !== void 0 ? s.data.context : {}, Ye = s.visualTheme !== void 0 ? s.visualTheme : s.data?.visualTheme !== void 0 ? s.data.visualTheme : "aurora", Ze = s.contextEndpoint !== void 0 ? s.contextEndpoint : s.data?.contextEndpoint !== void 0 ? s.data.contextEndpoint : "/api/ai-context", Ge = s.customClass !== void 0 ? s.customClass : s.data?.customClass !== void 0 ? s.data.customClass : "", Qe = s.maxMessages !== void 0 ? s.maxMessages : s.data?.maxMessages !== void 0 ? s.data.maxMessages : 100, Xe = s.chatEndpoint !== void 0 ? s.chatEndpoint : s.data?.chatEndpoint !== void 0 ? s.data.chatEndpoint : "/api/ai/chat", Ve = s.allowAttachments !== void 0 ? s.allowAttachments : s.data?.allowAttachments !== void 0 ? s.data.allowAttachments : !1, et = s.maxOutputTokens !== void 0 ? s.maxOutputTokens : s.data?.maxOutputTokens !== void 0 ? s.data.maxOutputTokens : 1024, tt = s.sessionId !== void 0 ? s.sessionId : s.data?.sessionId !== void 0 ? s.data.sessionId : "", st = s.welcomeMessage !== void 0 ? s.welcomeMessage : s.data?.welcomeMessage !== void 0 ? s.data.welcomeMessage : "Hi — how can I help?", ot = s.geminiModel !== void 0 ? s.geminiModel : s.data?.geminiModel !== void 0 ? s.data.geminiModel : "gemini-2.5-flash", nt = s.disabled !== void 0 ? s.disabled : s.data?.disabled !== void 0 ? s.data.disabled : !1, at = s.contextCacheTtlSeconds !== void 0 ? s.contextCacheTtlSeconds : s.data?.contextCacheTtlSeconds !== void 0 ? s.data.contextCacheTtlSeconds : 60, rt = s.assistantName !== void 0 ? s.assistantName : s.data?.assistantName !== void 0 ? s.data.assistantName : "Lumora", it = s.requestHeaders !== void 0 ? s.requestHeaders : s.data?.requestHeaders !== void 0 ? s.data.requestHeaders : {}, ct = s.permissions !== void 0 ? s.permissions : s.data?.permissions !== void 0 ? s.data.permissions : {}, lt = s.contextScopeKey !== void 0 ? s.contextScopeKey : s.data?.contextScopeKey !== void 0 ? s.data.contextScopeKey : "", r = { defaultOpen: q, contextNamespace: te, visible: O, contextDatabaseEnabled: B, anthropicModel: K, showToolActivity: b, title: Be, toolManifest: Ke, placeholder: Fe, presentationMode: $e, systemPrompt: Je, locale: We, aiProvider: He, context: Ue, visualTheme: Ye, contextEndpoint: Ze, customClass: Ge, maxMessages: Qe, chatEndpoint: Xe, allowAttachments: Ve, maxOutputTokens: et, sessionId: tt, welcomeMessage: st, geminiModel: ot, disabled: nt, contextCacheTtlSeconds: at, assistantName: rt, requestHeaders: it, permissions: ct, contextScopeKey: lt }, [ce, le] = w(() => structuredClone([])), [de, ue] = w(() => structuredClone([])), [me, ge] = w(() => structuredClone(!0)), [se, pe] = w(() => structuredClone("")), [dt, ye] = w(() => structuredClone({})), [oe, fe] = w(() => structuredClone(!1)), [ut, he] = w(() => structuredClone({})), [xe, _e] = w(() => structuredClone("lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora")), [be, ve] = w(() => structuredClone(!1)), [Ae, we] = w(() => structuredClone(!0)), [mt, Ce] = w(() => structuredClone(!1)), h = { messages: ce, toasts: de, showLauncher: me, errorMessage: se, runtimeContext: dt, isSending: oe, pendingAction: ut, themeClass: xe, isOpen: be, isFloating: Ae, hasInitialized: mt }, g = Z((e, t) => {
    switch (e) {
      case "messages":
        return le(t), t;
      case "toasts":
        return ue(t), t;
      case "showLauncher":
        return ge(t), t;
      case "errorMessage":
        return pe(t), t;
      case "runtimeContext":
        return ye(t), t;
      case "isSending":
        return fe(t), t;
      case "pendingAction":
        return he(t), t;
      case "themeClass":
        return _e(t), t;
      case "isOpen":
        return ve(t), t;
      case "isFloating":
        return we(t), t;
      case "hasInitialized":
        return Ce(t), t;
      default:
        return t;
    }
  }, []);
  Z((e, t) => {
    const [a, ...o] = String(e || "").split(".");
    if (!a) return t;
    if (o.length === 0) return g(a, t);
    const n = (i) => {
      const c = Array.isArray(i) ? [...i] : { ...i || {} };
      let d = c;
      return o.forEach((u, l) => {
        l === o.length - 1 ? d[u] = t : (d[u] = Array.isArray(d[u]) ? [...d[u]] : { ...d[u] || {} }, d = d[u]);
      }), c;
    };
    switch (a) {
      case "messages":
        return le(n), t;
      case "toasts":
        return ue(n), t;
      case "showLauncher":
        return ge(n), t;
      case "errorMessage":
        return pe(n), t;
      case "runtimeContext":
        return ye(n), t;
      case "isSending":
        return fe(n), t;
      case "pendingAction":
        return he(n), t;
      case "themeClass":
        return _e(n), t;
      case "isOpen":
        return ve(n), t;
      case "isFloating":
        return we(n), t;
      case "hasInitialized":
        return Ce(n), t;
      default:
        return t;
    }
  }, [g]);
  const gt = { actionCompleted: { properties: { actionId: { type: "string" }, result: { type: "object" } }, type: "object" }, actionRequested: { properties: { action: { type: "object" } }, type: "object" }, attachmentSelected: { additionalProperties: !0, properties: { files: { type: "array" } }, type: "object" }, contextChanged: { type: "object" }, contextResolved: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, contextUpdated: { additionalProperties: !0, properties: { cache: { type: "object" }, context: { type: "object" }, revision: { type: "number" }, sessionId: { type: "string" }, systemPrompt: { type: "string" }, updatedAt: { type: "string" } }, required: ["context", "revision", "cache", "sessionId"], type: "object" }, conversationCleared: { type: "object" }, error: { properties: { code: { type: "string" }, message: { type: "string" } }, type: "object" }, escalationRequested: { additionalProperties: !0, properties: { action: { type: "object" }, message: { type: "object" } }, type: "object" }, messageReceived: { properties: { message: { type: "object" } }, type: "object" }, responseCancelled: { additionalProperties: !0, properties: { reason: { type: "string" } }, type: "object" } }, ne = (e, t, a) => {
    if (!t || typeof t != "object") return "";
    const o = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], n = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(n) && !(n === "integer" && o.includes("number"))) return a + " must be " + o.join(" or ") + ".";
    if (t.enum && !t.enum.some((i) => JSON.stringify(i) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const i of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, i)) return a + "." + i + " is required.";
      for (const [i, c] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, i)) {
        const d = ne(e[i], c, a + "." + i);
        if (d) return d;
      }
    }
    if (Array.isArray(e) && t.items) for (let i = 0; i < e.length; i++) {
      const c = ne(e[i], t.items, a + "[" + i + "]");
      if (c) return c;
    }
    return "";
  }, C = Z(async (e, t, a = !1) => {
    const o = gt[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const n = ne(t, o, "output." + e);
    if (n) throw new Error(n);
    const i = s.onOutput || s.onModuleOutput || s.runtime?.onOutput;
    if (typeof i != "function") return t;
    const c = i(e, t, { moduleId: s.moduleId, awaitHandlers: a });
    return a ? await c : t;
  }, [s.onOutput, s.onModuleOutput, s.runtime?.onOutput, s.moduleId]), Se = (e, t) => {
    const a = String(t || "").split(".").filter(Boolean);
    if (!(!a.length || a.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return a.reduce((o, n) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(n in o) ? o.get(n) : o[n];
      }, e);
  }, k = (e, t) => {
    if (Array.isArray(e)) return e.map((o) => k(o, t));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([o, n]) => [k(o, t), k(n, t)]));
    if (typeof e != "string") return e;
    const a = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return a ? Se(t, a[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, n) => {
      const i = Se(t, n);
      return i == null ? "" : typeof i == "object" ? JSON.stringify(i) : String(i);
    });
  };
  async function H(e = {}) {
    const t = e || {}, a = {};
    {
      t.event;
      const o = await (async () => {
        const n = t.response && typeof t.response == "object" ? t.response : {}, i = Array.isArray(n.content) ? n.content.filter((P) => P && P.type === "text").map((P) => String(P.text || "")).join("") : "", d = (Array.isArray(n.candidates) && n.candidates[0] && n.candidates[0].content && Array.isArray(n.candidates[0].content.parts) ? n.candidates[0].content.parts : []).filter((P) => P && typeof P.text == "string").map((P) => P.text).join(""), u = n.message && typeof n.message == "object" ? n.message : {}, l = Array.isArray(n.choices) && n.choices[0] && n.choices[0].message ? n.choices[0].message : {}, y = i || d || u.content || n.text || n.response || l.content || "", S = typeof y == "string" ? y : JSON.stringify(y || ""), U = Array.isArray(n.toolCalls) ? n.toolCalls : Array.isArray(n.actions) ? n.actions : [], Y = n.toolCall || U[0] || null, Ne = Array.isArray(n.candidates) ? "gemini" : Array.isArray(n.content) ? "anthropic" : String(r.aiProvider || "unknown"), _t = Ne === "anthropic" ? { mode: "prompt-cache", enabled: !0, readTokens: Number(n.usage && n.usage.cache_read_input_tokens || 0), writtenTokens: Number(n.usage && n.usage.cache_creation_input_tokens || 0) } : { mode: "implicit", enabled: !0, readTokens: Number(n.usageMetadata && n.usageMetadata.cachedContentTokenCount || 0) };
        return { message: { id: String(n.id || "assistant-" + Date.now()), role: "assistant", sender: r.assistantName || "Assistant", variant: "incoming", content: S || "I could not read the assistant response.", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: n.data || {} }, action: Y, provider: Ne, providerCache: _t };
      })();
      a.normalize_response = o;
    }
    return g("messages", [...Array.isArray(t.messages) ? t.messages : h.messages, a.normalize_response.message].slice(-r.maxMessages)), C("messageReceived", { cache: a.normalize_response.providerCache, message: a.normalize_response.message, provider: a.normalize_response.provider, raw: t.response }, !1).catch((o) => console.error("Module output delivery failed", o)), a.normalize_response.action ? (g("pendingAction", a.normalize_response.action), C("actionRequested", { action: a.normalize_response.action, sessionId: r.sessionId }, !1).catch((o) => console.error("Module output delivery failed", o)), ["escalate", "escalation", "handoff"].includes(String(a.normalize_response.action.type || a.normalize_response.action.name || "").toLowerCase()) && C("escalationRequested", { action: a.normalize_response.action, message: a.normalize_response.message }, !1).catch((o) => console.error("Module output delivery failed", o)), a.normalize_response) : a.normalize_response;
  }
  async function ze(e = {}) {
    return g("messages", r.welcomeMessage ? [{ id: "welcome-" + Date.now(), role: "assistant", sender: r.assistantName || "Assistant", variant: "incoming", content: r.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), g("pendingAction", {}), g("errorMessage", ""), C("conversationCleared", { sessionId: r.sessionId }, !1).catch((t) => console.error("Module output delivery failed", t)), { cleared: !0 };
  }
  async function pt(e = {}) {
    const t = e || {};
    return C("attachmentSelected", { files: t.files }, !1).catch((a) => console.error("Module output delivery failed", a)), { accepted: !0, count: t.files.length };
  }
  async function ae(e = {}) {
    const t = e || {}, a = {}, o = {};
    {
      t.event;
      const n = await (async () => {
        const i = t.message && typeof t.message == "object" ? t.message.text ?? t.message.content ?? "" : t.message;
        return { type: "text", text: String(i ?? "").trim() };
      })();
      o.normalize_user = n, a.customCodeResult = n;
    }
    if (o.normalize_user.text)
      if (g("isSending", !0), g("errorMessage", ""), g("messages", [...h.messages, { id: "user-" + Date.now(), role: "user", sender: "You", variant: "outgoing", content: o.normalize_user.text, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }].slice(-r.maxMessages)), r.contextDatabaseEnabled === !0) {
        {
          t.event;
          const n = await (async () => {
            const i = o.read_context_db, c = Array.isArray(i) ? i : i && Array.isArray(i.data) ? i.data : [], d = c[0] && typeof c[0] == "object" ? c[0] : null, u = o.use_direct_context && typeof o.use_direct_context == "object" ? o.use_direct_context : {}, l = r.contextDatabaseEnabled === !0, y = l && d ? d : u, S = r.context && typeof r.context == "object" && !Array.isArray(r.context) ? r.context : {}, U = y.context && typeof y.context == "object" && !Array.isArray(y.context) ? y.context : S, Y = typeof y.systemPrompt == "string" && y.systemPrompt.trim() ? y.systemPrompt : typeof r.systemPrompt == "string" && r.systemPrompt.trim() ? r.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: U, systemPrompt: Y, revision: Number(y.revision || 0), updatedAt: typeof y.updatedAt == "string" && y.updatedAt ? y.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: l ? "database" : "direct" }, source: l ? "database" : "direct", found: !!d };
          })();
          o.normalize_context = n, a.customCodeResult = n;
        }
        g("runtimeContext", o.normalize_context.context), C("contextResolved", { cache: o.normalize_context.cache, context: o.normalize_context.context, revision: o.normalize_context.revision, sessionId: r.sessionId, systemPrompt: o.normalize_context.systemPrompt, updatedAt: o.normalize_context.updatedAt }, !1).catch((n) => console.error("Module output delivery failed", n));
        {
          t.event;
          const n = await (async () => {
            const c = (Array.isArray(h.messages) ? h.messages : []).filter((l) => l && (l.role === "user" || l.role === "assistant")), d = c.findIndex((l) => l.role === "user"), u = d >= 0 ? c.slice(d) : [];
            return { anthropicMessages: u.map((l) => ({ role: l.role === "assistant" ? "assistant" : "user", content: String(l.content || "") })), geminiContents: u.map((l) => ({ role: l.role === "assistant" ? "model" : "user", parts: [{ text: String(l.content || "") }] })) };
          })();
          o.build_provider_payloads = n, a.customCodeResult = n;
        }
        if (String(r.aiProvider || "anthropic").toLowerCase() === "anthropic") {
          {
            const n = { args: t, inputs: r, state: h, sharedState: L, applicationState: D, pageState: M, pageData: I, serverData: v, vars: a, stepResults: o }, i = k({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "[REDACTED]", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, n) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: i, context: n }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
            const u = d.data;
            o.call_anthropic = u, a.apiResult = u;
          }
          return await H({ messages: h.messages, response: o.call_anthropic || o.call_gemini }), g("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
        } else {
          {
            const n = { args: t, inputs: r, state: h, sharedState: L, applicationState: D, pageState: M, pageData: I, serverData: v, vars: a, stepResults: o }, i = k({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, n) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: i, context: n }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
            if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
            const u = d.data;
            o.call_gemini = u, a.apiResult = u;
          }
          return await H({ messages: h.messages, response: o.call_anthropic || o.call_gemini }), g("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
        }
      } else {
        {
          t.event;
          const n = await (async () => {
            const i = r.context && typeof r.context == "object" && !Array.isArray(r.context) ? r.context : {}, c = typeof r.systemPrompt == "string" && r.systemPrompt.trim() ? r.systemPrompt : "You are a concise and helpful AI assistant.";
            return { context: i, systemPrompt: c, revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: "direct" }, source: "direct" };
          })();
          o.use_direct_context = n, a.customCodeResult = n;
        }
        {
          {
            t.event;
            const n = await (async () => {
              const i = o.read_context_db, c = Array.isArray(i) ? i : i && Array.isArray(i.data) ? i.data : [], d = c[0] && typeof c[0] == "object" ? c[0] : null, u = o.use_direct_context && typeof o.use_direct_context == "object" ? o.use_direct_context : {}, l = r.contextDatabaseEnabled === !0, y = l && d ? d : u, S = r.context && typeof r.context == "object" && !Array.isArray(r.context) ? r.context : {}, U = y.context && typeof y.context == "object" && !Array.isArray(y.context) ? y.context : S, Y = typeof y.systemPrompt == "string" && y.systemPrompt.trim() ? y.systemPrompt : typeof r.systemPrompt == "string" && r.systemPrompt.trim() ? r.systemPrompt : "You are a concise and helpful AI assistant.";
              return { context: U, systemPrompt: Y, revision: Number(y.revision || 0), updatedAt: typeof y.updatedAt == "string" && y.updatedAt ? y.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, hit: !1, source: l ? "database" : "direct" }, source: l ? "database" : "direct", found: !!d };
            })();
            o.normalize_context = n, a.customCodeResult = n;
          }
          g("runtimeContext", o.normalize_context.context), C("contextResolved", { cache: o.normalize_context.cache, context: o.normalize_context.context, revision: o.normalize_context.revision, sessionId: r.sessionId, systemPrompt: o.normalize_context.systemPrompt, updatedAt: o.normalize_context.updatedAt }, !1).catch((n) => console.error("Module output delivery failed", n));
          {
            t.event;
            const n = await (async () => {
              const c = (Array.isArray(h.messages) ? h.messages : []).filter((l) => l && (l.role === "user" || l.role === "assistant")), d = c.findIndex((l) => l.role === "user"), u = d >= 0 ? c.slice(d) : [];
              return { anthropicMessages: u.map((l) => ({ role: l.role === "assistant" ? "assistant" : "user", content: String(l.content || "") })), geminiContents: u.map((l) => ({ role: l.role === "assistant" ? "model" : "user", parts: [{ text: String(l.content || "") }] })) };
            })();
            o.build_provider_payloads = n, a.customCodeResult = n;
          }
          if (String(r.aiProvider || "anthropic").toLowerCase() === "anthropic") {
            {
              const n = { args: t, inputs: r, state: h, sharedState: L, applicationState: D, pageState: M, pageData: I, serverData: v, vars: a, stepResults: o }, i = k({ context: "{{ stepResults.normalize_context.context }}", maxTokens: "[REDACTED]", messages: "{{ stepResults.build_provider_payloads.anthropicMessages }}", model: "{{ inputs.anthropicModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, n) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "anthropicChatApi", argumentValues: i, context: n }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
              const u = d.data;
              o.call_anthropic = u, a.apiResult = u;
            }
            return await H({ messages: h.messages, response: o.call_anthropic || o.call_gemini }), g("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
          } else {
            {
              const n = { args: t, inputs: r, state: h, sharedState: L, applicationState: D, pageState: M, pageData: I, serverData: v, vars: a, stepResults: o }, i = k({ contents: "{{ stepResults.build_provider_payloads.geminiContents }}", context: "{{ stepResults.normalize_context.context }}", model: "{{ inputs.geminiModel }}", systemPrompt: "{{ stepResults.normalize_context.systemPrompt }}" }, n) || {}, c = await fetch("/api/rudra/protected", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ moduleId: "cmtd4taga000204l2nchcixk4", apiId: "geminiChatApi", argumentValues: i, context: n }), signal: t.signal || AbortSignal.timeout(3e4) }), d = await c.json().catch(() => ({}));
              if (!c.ok) throw new Error(d.error || "Protected API request failed (" + c.status + ")");
              const u = d.data;
              o.call_gemini = u, a.apiResult = u;
            }
            return await H({ messages: h.messages, response: o.call_anthropic || o.call_gemini }), g("isSending", !1), { accepted: !0, context: o.normalize_context, message: o.normalize_user, response: o.process_response };
          }
        }
      }
    else
      return { accepted: !1, reason: "empty" };
  }
  async function Pe(e = {}) {
    return g("errorMessage", ""), g("toasts", []), { dismissed: !0 };
  }
  async function Me(e = {}) {
    const t = e || {};
    return g("isSending", !1), C("responseCancelled", { reason: t.reason || "host-requested" }, !1).catch((a) => console.error("Module output delivery failed", a)), { cancelled: !0 };
  }
  async function Ie(e = {}) {
    const t = e || {}, a = {};
    if (r.contextDatabaseEnabled === !0) {
      {
        t.event;
        const o = await (async () => {
          const n = a.upsert_context_db, i = Array.isArray(n) ? n : n && Array.isArray(n.data) ? n.data : [], c = i[0] && typeof i[0] == "object" ? i[0] : null, d = a.use_direct_context_update && typeof a.use_direct_context_update == "object" ? a.use_direct_context_update : {}, u = r.contextDatabaseEnabled === !0, l = u && c ? c : d;
          return { context: l.context && typeof l.context == "object" ? l.context : t.context, systemPrompt: typeof l.systemPrompt == "string" ? l.systemPrompt : t.systemPrompt || r.systemPrompt || "", revision: Number(l.revision || 0), updatedAt: typeof l.updatedAt == "string" && l.updatedAt ? l.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: u ? { enabled: !1, invalidated: !!c, source: "database" } : l.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || r.contextScopeKey || r.sessionId || "default", persisted: u && !!c, updated: u ? !!c : !0 };
        })();
        a.normalize_context_update = o;
      }
      return g("runtimeContext", a.normalize_context_update.context), C("contextUpdated", a.normalize_context_update, !1).catch((o) => console.error("Module output delivery failed", o)), C("contextChanged", { context: a.normalize_context_update.context, persisted: a.normalize_context_update.persisted, revision: a.normalize_context_update.revision }, !1).catch((o) => console.error("Module output delivery failed", o)), a.normalize_context_update;
    } else {
      {
        t.event;
        const o = await (async () => ({ context: t.context && typeof t.context == "object" ? t.context : {}, systemPrompt: typeof t.systemPrompt == "string" ? t.systemPrompt : r.systemPrompt || "", revision: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), cache: { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || r.contextScopeKey || r.sessionId || "default", persisted: !1, updated: !0 }))();
        a.use_direct_context_update = o;
      }
      {
        {
          t.event;
          const o = await (async () => {
            const n = a.upsert_context_db, i = Array.isArray(n) ? n : n && Array.isArray(n.data) ? n.data : [], c = i[0] && typeof i[0] == "object" ? i[0] : null, d = a.use_direct_context_update && typeof a.use_direct_context_update == "object" ? a.use_direct_context_update : {}, u = r.contextDatabaseEnabled === !0, l = u && c ? c : d;
            return { context: l.context && typeof l.context == "object" ? l.context : t.context, systemPrompt: typeof l.systemPrompt == "string" ? l.systemPrompt : t.systemPrompt || r.systemPrompt || "", revision: Number(l.revision || 0), updatedAt: typeof l.updatedAt == "string" && l.updatedAt ? l.updatedAt : (/* @__PURE__ */ new Date()).toISOString(), cache: u ? { enabled: !1, invalidated: !!c, source: "database" } : l.cache || { enabled: !1, invalidated: !1, source: "direct" }, sessionId: t.scopeKey || r.contextScopeKey || r.sessionId || "default", persisted: u && !!c, updated: u ? !!c : !0 };
          })();
          a.normalize_context_update = o;
        }
        return g("runtimeContext", a.normalize_context_update.context), C("contextUpdated", a.normalize_context_update, !1).catch((o) => console.error("Module output delivery failed", o)), C("contextChanged", { context: a.normalize_context_update.context, persisted: a.normalize_context_update.persisted, revision: a.normalize_context_update.revision }, !1).catch((o) => console.error("Module output delivery failed", o)), a.normalize_context_update;
      }
    }
  }
  async function Re(e = {}) {
    const t = e || {}, a = {};
    {
      t.event;
      const o = await (async () => {
        const i = [...Array.isArray(h.messages) ? h.messages : []].reverse().find((c) => c && c.role === "user");
        return { type: "text", text: i ? String(i.content || "") : "" };
      })();
      a.find_retry_message = o;
    }
    return a.find_retry_message.text ? (await ae({ message: a.find_retry_message }), a.run_retry) : { accepted: !1, reason: "no-user-message" };
  }
  async function yt(e = {}) {
    return g("hasInitialized", !0), g("isOpen", !0), g("showLauncher", !1), { open: !0 };
  }
  async function je(e = {}) {
    return h.hasInitialized === !0 ? { initialized: !0, reused: !0 } : (g("isOpen", h.hasInitialized === !0 ? h.isOpen : r.visible !== !1 && (r.presentationMode !== "floating" || r.defaultOpen === !0)), g("isFloating", r.presentationMode === "floating"), g("showLauncher", h.hasInitialized === !0 ? h.showLauncher : r.visible !== !1 && r.presentationMode === "floating" && r.defaultOpen !== !0), g("themeClass", "lumora-ai-host lumora-ai-floating lumora-ai-theme-" + (r.visualTheme || "aurora")), g("messages", h.messages.length ? h.messages : r.welcomeMessage ? [{ id: "welcome", role: "assistant", sender: r.assistantName || "Assistant", variant: "incoming", content: r.welcomeMessage, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }] : []), g("hasInitialized", !0), { initialized: !0 });
  }
  async function ft(e = {}) {
    return g("hasInitialized", !0), g("isOpen", !1), g("showLauncher", !0), { open: !1 };
  }
  async function Oe(e = {}) {
    return r.contextDatabaseEnabled === !0 ? { initialized: !0, table: "rudra_ai_context" } : { initialized: !1, reason: "database-context-disabled" };
  }
  async function Te(e = {}) {
    const t = e || {};
    return g("messages", r.showToolActivity ? [...h.messages, { id: "tool-" + Date.now(), role: "system", sender: "Tool activity", variant: "system", content: "Tool " + t.actionId + " " + (t.status || "completed"), timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), data: t.result || {} }].slice(-r.maxMessages) : h.messages), g("pendingAction", {}), C("actionCompleted", { actionId: t.actionId, result: t.result || {}, status: t.status || "completed" }, !1).catch((a) => console.error("Module output delivery failed", a)), { actionId: t.actionId, completed: !0 };
  }
  const ht = {
    processApiResponse: H,
    clearConversation: ze,
    handleAttachments: pt,
    sendMessage: ae,
    dismissError: Pe,
    cancelResponse: Me,
    loadContext: Ie,
    retryLastMessage: Re,
    openChat: yt,
    initializeConversation: je,
    closeChat: ft,
    initializeContextStore: Oe,
    provideToolResult: Te
  }, T = X({});
  T.current = {
    lumora_ai_send: (e = {}, t = {}) => ae({ ...e, signal: t.signal }),
    lumora_ai_clear: (e = {}, t = {}) => ze({ ...e, signal: t.signal }),
    lumora_ai_tool_result: (e = {}, t = {}) => Te({ ...e, signal: t.signal }),
    lumora_ai_load_context: (e = {}, t = {}) => Ie({ ...e, signal: t.signal }),
    lumora_ai_cancel: (e = {}, t = {}) => Me({ ...e, signal: t.signal }),
    lumora_ai_dismiss_error: (e = {}, t = {}) => Pe({ ...e, signal: t.signal }),
    lumora_ai_retry: (e = {}, t = {}) => Re({ ...e, signal: t.signal })
  };
  const re = X(null);
  re.current || (re.current = {
    lumora_ai_send: (e, t) => T.current.lumora_ai_send(e, t),
    lumora_ai_clear: (e, t) => T.current.lumora_ai_clear(e, t),
    lumora_ai_tool_result: (e, t) => T.current.lumora_ai_tool_result(e, t),
    lumora_ai_load_context: (e, t) => T.current.lumora_ai_load_context(e, t),
    lumora_ai_cancel: (e, t) => T.current.lumora_ai_cancel(e, t),
    lumora_ai_dismiss_error: (e, t) => T.current.lumora_ai_dismiss_error(e, t),
    lumora_ai_retry: (e, t) => T.current.lumora_ai_retry(e, t)
  }), N(() => {
    const e = s.registerCommands || s.runtime?.registerCommands;
    if (typeof e == "function")
      return e(re.current);
  }, [s.registerCommands, s.runtime?.registerCommands]);
  const xt = {
    processApiResponse: ["response", "messages"],
    clearConversation: [],
    handleAttachments: ["files"],
    sendMessage: ["message"],
    dismissError: [],
    cancelResponse: ["reason"],
    loadContext: ["context", "replace", "scopeKey", "systemPrompt", "expectedRevision"],
    retryLastMessage: [],
    openChat: [],
    initializeConversation: [],
    closeChat: [],
    initializeContextStore: [],
    provideToolResult: ["actionId", "result", "status"]
  }, E = (e, t = {}, a = []) => {
    const o = ht[e];
    if (o) {
      const u = xt[e] || [];
      return o(Object.fromEntries(u.map((l, y) => {
        const S = Object.prototype.hasOwnProperty.call(t, l) ? t[l] : void 0;
        return [l, (S === "" || S === void 0) && a[y] !== void 0 ? a[y] : l === "event" && (S === "" || S === void 0) ? a[0] : S];
      })));
    }
    const n = J?.[e];
    if (typeof n == "function")
      return n(Object.keys(t).length > 0 ? t : a[0]);
    const [i, c] = String(e).split("."), d = typeof globalThis < "u" ? globalThis[i]?.[c] : void 0;
    if (typeof d == "function") return d(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, F = X(/* @__PURE__ */ new Map()), Ee = Z((e, t, a, o) => {
    const n = F.current.get(e);
    if (t === "exhaust" && n?.promise) return n.promise;
    t === "takeLatest" && n?.controller?.abort();
    const i = new AbortController(), c = () => Promise.resolve().then(() => a(i.signal)), d = t === "queue" && n?.promise ? n.promise.catch(() => {
    }).then(c) : c();
    return F.current.set(e, { controller: i, promise: d }), d.catch((u) => {
      u?.name !== "AbortError" && console.error(o, u);
    }).finally(() => {
      F.current.get(e)?.promise === d && F.current.delete(e);
    }), d;
  }, []);
  return N(() => () => {
    for (const e of F.current.values()) e.controller?.abort();
    F.current.clear();
  }, []), N(() => {
    Ee("initialize_context_store_mountinitializeContextStore", "takeLatest", (e) => Oe({}), "Module mount lifecycle failed:");
  }, []), N(() => {
    Ee("lumora_ai_mountinitializeConversation", "takeLatest", (e) => je({}), "Module mount lifecycle failed:");
  }, []), /* @__PURE__ */ A("div", { ref: R, className: "rudra-module-wrapper", children: /* @__PURE__ */ p(V, { id: "ai_host", className: `${((e) => e == null || e === !1 || typeof e == "object" ? "" : "" + String(e))(/* @__PURE__ */ ((e) => e === void 0 ? "lumora-ai-host lumora-ai-floating lumora-ai-theme-aurora" : e)(xe))}`, children: [
    "      ",
    f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(be)) && /* @__PURE__ */ p(x, { children: [
      "      ",
      /* @__PURE__ */ p(bt, { id: "root_container", className: "lumora-ai-shell", responsivePadding: !1, as: "section", tone: "default", radius: "xl", padding: "none", bordered: !0, children: [
        "      ",
        f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
          "      ",
          /* @__PURE__ */ p(De, { id: "chat_header", className: "lumora-ai-header flex w-full items-center justify-between gap-4 px-6 py-4", as: "header", children: [
            "      ",
            f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ p(V, { id: "header_identity", className: "block min-w-0", children: [
                "      ",
                f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
                  "      ",
                  /* @__PURE__ */ A($, { id: "header_title", className: "text-lg font-bold", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "AI Assistant" : e)(r?.title) })
                ] }),
                f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
                  "      ",
                  /* @__PURE__ */ A($, { id: "header_subtitle", className: "text-xs", as: "p", content: "Context-aware assistant · tools enabled by your application", customColor: "var(--rudra-color-muted)" })
                ] })
              ] })
            ] }),
            f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ p(De, { id: "header_actions", className: "flex items-center gap-3", children: [
                "      ",
                f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
                  "      ",
                  /* @__PURE__ */ A(vt, { id: "status_badge", className: "lumora-ai-status rounded-full", icon: /* @__PURE__ */ A(It, { icon: !1 }), size: "sm", label: "ONLINE", variant: "solid" })
                ] }),
                f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
                  "      ",
                  /* @__PURE__ */ A(ke, { id: "clear_btn", label: "Clear", theme: "auto", variant: "ghost", onAction: (...e) => E("clearConversation", {}, e), ariaLabel: "Clear conversation", size: "sm" })
                ] }),
                f(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(Ae)) && /* @__PURE__ */ p(x, { children: [
                  "      ",
                  /* @__PURE__ */ A(Le, { id: "floating_close_button", className: "lumora-ai-close-button", icon: !1, variant: "ghost", ariaLabel: "Close Lumora AI assistant", additionalAttributes: { title: "Close AI assistant" }, size: "sm", theme: "auto", onClick: (...e) => E("closeChat", {}, e) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
          "      ",
          /* @__PURE__ */ p(wt, { id: "message_list", className: "lumora-ai-transcript w-full flex-1 overflow-y-auto px-6 py-6", as: "section", children: [
            "      ",
            f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ A(Ct, { id: "messages_repeater", className: "flex flex-col gap-4", items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ce), children: (e) => (() => {
                const t = { ...e || {}, item: e?.item ?? e, index: e?.index ?? e?.i ?? 0 };
                return /* @__PURE__ */ p(x, { children: [
                  "      ",
                  f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
                    "      ",
                    /* @__PURE__ */ p(St, { id: "message_bubble", className: "flex w-full gap-2", bubbleClassName: "max-w-2xl rounded-2xl px-4 py-3", status: /* @__PURE__ */ ((a) => a === void 0 ? "" : a)(t?.item?.status), variant: /* @__PURE__ */ ((a) => a === void 0 ? "incoming" : a)(t?.item?.variant), timestamp: /* @__PURE__ */ ((a) => a === void 0 ? "" : a)(t?.item?.timestamp), sender: /* @__PURE__ */ ((a) => a === void 0 ? "Assistant" : a)(t?.item?.sender), children: [
                      "      ",
                      f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
                        "      ",
                        /* @__PURE__ */ A($, { id: "bubble_content", className: "text-sm", as: "p", content: /* @__PURE__ */ ((a) => a === void 0 ? "" : a)(t?.item?.content) })
                      ] })
                    ] })
                  ] })
                ] });
              })() })
            ] }),
            f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ A($, { id: "typing_indicator", className: "lumora-ai-typing text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Assistant" : e)(r?.assistantName), customColor: "var(--rudra-color-muted)" })
            ] })
          ] })
        ] }),
        f(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ p(x, { children: [
          "      ",
          /* @__PURE__ */ p(At, { id: "error_panel", className: "lumora-ai-error mx-6 mb-3", action: /* @__PURE__ */ p(x, { children: [
            "      ",
            f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ A(ke, { id: "retry_button", theme: "auto", variant: "outline", onAction: (...e) => E("retryLastMessage", {}, e), ariaLabel: "Retry last message", size: "sm", label: "Retry" })
            ] })
          ] }), variant: "error", title: "Assistant unavailable", onDismiss: (...e) => E("dismissError", {}, e), appearance: "soft", closeLabel: "Dismiss error", dismissible: !0, live: "assertive", theme: "auto", children: [
            "      ",
            f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ A($, { id: "error_text", className: "text-sm", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Something went wrong." : e)(se) })
            ] })
          ] })
        ] }),
        f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
          "      ",
          /* @__PURE__ */ p(V, { id: "composer_wrapper", className: "lumora-ai-composer block w-full px-5 pb-5 pt-4", children: [
            "      ",
            f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ A($, { id: "composer_hint", className: "mb-2 text-xs", as: "p", content: "Ask a question or request an available action.", customColor: "var(--rudra-color-muted)" })
            ] }),
            f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
              "      ",
              /* @__PURE__ */ A(zt, { id: "chat_composer", className: "w-full", composerClassName: "rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900", showPicker: !1, placeholder: /* @__PURE__ */ ((e) => e === void 0 ? "Ask anything…" : e)(r?.placeholder), onAttachmentSelect: (...e) => E("handleAttachments", {}, e), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe), autoFocus: !1, showVoice: !1, showAttachment: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(r?.allowAttachments), onSend: (...e) => E("sendMessage", {}, e) })
            ] })
          ] })
        ] }),
        f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
          "      ",
          /* @__PURE__ */ A(Pt, { id: "global_toasts", maxVisible: 3, displayMode: "fixed", newestOnTop: !0, items: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(de), closable: !0, position: "top-right", onDismiss: (...e) => E("dismissError", {}, e), showIcons: !0 })
        ] })
      ] })
    ] }),
    f(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(me)) && /* @__PURE__ */ p(x, { children: [
      "      ",
      /* @__PURE__ */ p(V, { id: "floating_launcher", className: "lumora-ai-launcher", children: [
        "      ",
        f(_({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ p(x, { children: [
          "      ",
          /* @__PURE__ */ A(Le, { id: "floating_launcher_button", className: "lumora-ai-launcher-button", theme: "auto", onClick: (...e) => E("openChat", {}, e), variant: "primary", ariaLabel: "Open Lumora AI assistant", additionalAttributes: { "aria-haspopup": "dialog", title: "Open AI assistant" }, icon: !1, size: "xl" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  kt as default
};
