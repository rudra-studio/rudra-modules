import { jsx as c, jsxs as i, Fragment as a } from "react/jsx-runtime";
import { useState as F, useEffect as G, useRef as x, useCallback as D } from "react";
import { Box as l, Grid as we } from "@rudra-studio/rudra-layout";
import { Typography as Y } from "@rudra-studio/rudra-core";
import { SpriteAnimator as p } from "@rudra-studio/rudra-three";
function Ye(N) {
  const W = N.serverData || N.serverState || {}, u = N.sharedState || {};
  N.applicationState || W.applicationState, N.pageState || W.pageState, N.pageData || W.pageData;
  const Ie = {
    ...N.runtime?.functions || {},
    ...N.runtime?.actions || {},
    ...N.functions || {},
    ...N.actions || {}
  }, M = N.$theme ?? N.theme ?? N.data?.$theme ?? N.runtime?.data?.$theme ?? N.runtime?.theme, ae = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Pe, ne] = F(() => M ?? ae());
  G(() => {
    M != null && ne(M);
  }, [M]), G(() => {
    if (M != null || typeof document > "u") return;
    const e = document.documentElement, r = (d) => ne(d?.detail?.theme ?? ae()), s = new MutationObserver(r);
    return s.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      s.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [M]);
  const A = x(null), [J, E] = F("lg");
  G(() => {
    if (!A.current) return;
    const e = new ResizeObserver((r) => {
      for (let s of r) {
        const d = s.contentRect.width;
        d < 768 ? E("sm") : d < 1024 ? E("md") : E("lg");
      }
    });
    return e.observe(A.current), () => e.disconnect();
  }, []);
  const n = D((e) => typeof e != "object" || e === null ? e : J === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : J === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [J]), t = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, Q = N.inviteRoomId !== void 0 ? N.inviteRoomId : N.data?.inviteRoomId !== void 0 ? N.data.inviteRoomId : void 0, X = N.roomId !== void 0 ? N.roomId : N.data?.roomId !== void 0 ? N.data.roomId : void 0, T = { inviteRoomId: Q, roomId: X }, [re, $] = F(() => structuredClone("")), [g, oe] = F(() => structuredClone({ "○": { fps: 1, holdLastFrame: !0, loop: !1, sheet: { columns: 1, endFrame: 0, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNDYiIGZpbGw9IiMwNzBkMWQiLz48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSI0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzE1N2E4IiBzdHJva2Utb3BhY2l0eT0iLjQyIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI1MSIgY3k9IjQ3IiByPSIxMiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjAzNSIvPjwvc3ZnPg==", startFrame: 0 } }, "🔴": { fps: 18, holdLastFrame: !0, loop: !1, sheet: { columns: 6, endFrame: 5, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZkN2RjIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+", startFrame: 0 } }, "🟡": { fps: 18, holdLastFrame: !0, loop: !1, sheet: { columns: 6, endFrame: 5, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZmN2JmIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+", startFrame: 0 } } })), ge = { inviteUrl: re }, H = D((e, r) => {
    switch (e) {
      case "inviteUrl":
        return $(r), r;
      case "spriteAnimations":
        return oe(r), r;
      default:
        return r;
    }
  }, []);
  D((e, r) => {
    const [s, ...d] = String(e || "").split(".");
    if (!s) return r;
    if (d.length === 0) return H(s, r);
    const o = (m) => {
      const y = Array.isArray(m) ? [...m] : { ...m || {} };
      let h = y;
      return d.forEach((f, b) => {
        b === d.length - 1 ? h[f] = r : (h[f] = Array.isArray(h[f]) ? [...h[f]] : { ...h[f] || {} }, h = h[f]);
      }), y;
    };
    switch (s) {
      case "inviteUrl":
        return $(o), r;
      case "spriteAnimations":
        return oe(o), r;
      default:
        return r;
    }
  }, [H]), D(async (e, r, s) => {
    const d = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), o = d[r] || d.default;
    if (typeof o != "function") throw new Error("Library function '" + r + "' was not exported by " + e);
    return o(s);
  }, []);
  const pe = { c4_room_created_output: { pattern: "^[a-zA-Z0-9-_]{6,80}$", type: "string" } }, q = (e, r, s) => {
    if (!r || typeof r != "object") return "";
    const d = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], o = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (d.length && !d.includes(o) && !(o === "integer" && d.includes("number"))) return s + " must be " + d.join(" or ") + ".";
    if (r.enum && !r.enum.some((m) => JSON.stringify(m) === JSON.stringify(e))) return s + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const m of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, m)) return s + "." + m + " is required.";
      for (const [m, y] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, m)) {
        const h = q(e[m], y, s + "." + m);
        if (h) return h;
      }
    }
    if (Array.isArray(e) && r.items) for (let m = 0; m < e.length; m++) {
      const y = q(e[m], r.items, s + "[" + m + "]");
      if (y) return y;
    }
    return "";
  }, he = D(async (e, r, s = !1) => {
    const d = pe[e];
    if (!d) throw new Error("Module output '" + e + "' is not declared.");
    const o = q(r, d, "output." + e);
    if (o) throw new Error(o);
    const m = N.onOutput || N.onModuleOutput || N.runtime?.onOutput;
    if (typeof m != "function") return r;
    const y = m(e, r, { moduleId: N.moduleId, awaitHandlers: s });
    return s ? await y : r;
  }, [N.onOutput, N.onModuleOutput, N.runtime?.onOutput, N.moduleId]);
  async function ce(e = {}) {
    const r = e || {}, s = {};
    {
      r.event;
      const d = await (async () => {
        const o = String(r.roomId || "").trim();
        if (!/^[a-zA-Z0-9-_]{6,80}$/.test(o)) throw new Error("Invalid room ID.");
        const m = new URL(window.location.href), y = String(r.inviteBaseUrl || "").trim(), h = new URL(y || m.toString(), m.origin);
        return h.searchParams.set("roomId", o), { roomId: o, inviteUrl: h.toString() };
      })();
      s.inviteResult = d;
    }
    return H("inviteUrl", s.inviteResult.inviteUrl), s.inviteResult;
  }
  async function Ne(e = {}) {
    const r = e || {}, s = {};
    {
      r.event;
      const d = await (async () => {
        const o = String(ge.inviteUrl || window.location.href || "").trim();
        if (!o) return { copied: !1 };
        if (navigator.clipboard?.writeText)
          await navigator.clipboard.writeText(o);
        else {
          const m = document.createElement("textarea");
          m.value = o, m.setAttribute("readonly", ""), m.style.position = "fixed", m.style.opacity = "0", document.body.appendChild(m), m.select(), document.execCommand("copy"), m.remove();
        }
        return { copied: !0, inviteUrl: o };
      })();
      s.copyResult = d;
    }
    return s.copyResult;
  }
  async function K(e = {}) {
    const r = e || {}, s = {};
    {
      r.event;
      const d = await (async () => {
        const o = (h) => /^[a-zA-Z0-9-_]{6,80}$/.test(h), m = String(T?.roomId || "").trim(), y = String(T?.inviteRoomId || "").trim();
        return o(m) ? { roomId: m, created: !1, source: "input" } : o(y) ? { roomId: y, created: !1, source: "created" } : { roomId: crypto.randomUUID().replace(/-/g, "").slice(0, 16), created: !0, source: "created" };
      })();
      s.roomRequest = d;
    }
    return s.roomRequest.created && await he("c4_room_created_output", s.roomRequest.roomId, !0), s.roomRequest;
  }
  async function V(e = {}) {
    const r = e || {}, s = {};
    {
      r.event;
      const d = await (async () => {
        const o = String(T?.roomId || "").trim(), m = String(T?.inviteRoomId || "").trim(), y = /^[a-zA-Z0-9-_]{6,80}$/.test(o) ? o : "", h = /^[a-zA-Z0-9-_]{6,80}$/.test(m) ? m : "", f = y || h;
        if (!f) return { game: null, inviteUrl: "" };
        let b;
        for (let j = 0; j < 50; j += 1) {
          const Z = window.RudraSharedState;
          if (b = Z?.current || Z, b?.get && b?.set && b.status === "connected") break;
          await new Promise((z) => setTimeout(z, 100));
        }
        if (!b?.get || !b?.set || b.status !== "connected") return { inviteUrl: "" };
        await new Promise((j) => setTimeout(j, 250));
        const P = f || String(b.roomId || "default-room");
        let v = "";
        if (h && !y) {
          const j = new URL(window.location.href);
          j.searchParams.set("roomId", h), v = j.toString();
        }
        const S = "__rudraConnectFourPlayers", R = window[S] || (window[S] = {});
        let _ = R[b.roomId];
        _ || (_ = crypto.randomUUID(), R[b.roomId] = _);
        let w = b.get("game");
        if (!(w && Array.isArray(w.board) && w.board.length === 42 && w.playerClaimVersion === 6 && w.roomCode === P))
          w = { board: Array(42).fill("○"), turn: "🔴", winner: null, moves: 0, revision: 0, playerClaimVersion: 6, players: { red: _, yellow: null }, roomCode: P, status: "Waiting for Yellow player…", playersLabel: "🔴 Red joined · 🟡 Yellow open" };
        else {
          const j = { ...w.players || {} };
          j.red ? j.red !== _ && !j.yellow && (j.yellow = _) : j.red = _;
          const Z = !!(j.red && j.yellow);
          w = { ...w, players: j, status: w.winner ? w.status : Z ? "Turn: " + (w.turn || "🔴") : "Waiting for Yellow player…", playersLabel: "🔴 Red " + (j.red ? "joined" : "open") + " · 🟡 Yellow " + (j.yellow ? "joined" : "open") };
        }
        return b.set("game", w), { game: w, inviteUrl: v };
      })();
      s.joinResult = d;
    }
    return H("inviteUrl", s.joinResult.inviteUrl), s.joinResult.game;
  }
  async function fe(e = {}) {
    const r = e || {};
    r.event, await (async () => {
      const s = window.RudraSharedState, d = s?.current || s;
      if (!d?.get || !d?.set) return;
      let o = d.get("game");
      if (!o || !Array.isArray(o.board) || o.board.length !== 42 || o.winner) return;
      const m = "__rudraConnectFourPlayers", y = window[m] || (window[m] = {});
      let h = y[d.roomId];
      h || (h = crypto.randomUUID(), y[d.roomId] = h);
      const f = { ...o.players || {} };
      let b = !1;
      if (f.red !== h && f.yellow !== h)
        if (!f.red)
          f.red = h, b = !0;
        else if (!f.yellow)
          f.yellow = h, b = !0;
        else
          return;
      const P = f.red === h ? "🔴" : "🟡", v = !!(f.red && f.yellow);
      if (b && (o = {
        ...o,
        players: f,
        playerClaimVersion: 6,
        status: o.winner ? o.status : v ? "Turn: " + (o.turn || "🔴") : "Waiting for Yellow player…",
        playersLabel: "🔴 Red " + (f.red ? "joined" : "open") + " · 🟡 Yellow " + (f.yellow ? "joined" : "open")
      }, d.set("game", o)), P !== o.turn) return;
      const S = Number(r.column);
      if (!Number.isInteger(S) || S < 0 || S > 6) return;
      const R = [...o.board];
      let _ = -1;
      for (let C = 5; C >= 0; C -= 1)
        if (R[C * 7 + S] === "○") {
          _ = C;
          break;
        }
      if (_ < 0) return;
      R[_ * 7 + S] = P;
      const w = (C, O) => C >= 0 && C < 6 && O >= 0 && O < 7, B = [[1, 0], [0, 1], [1, 1], [1, -1]].some(([C, O]) => {
        let ue = 1;
        for (const U of [-1, 1]) {
          let ie = _ + C * U, te = S + O * U;
          for (; w(ie, te) && R[ie * 7 + te] === P; )
            ue += 1, ie += C * U, te += O * U;
        }
        return ue >= 4;
      }), j = Number(o.moves || 0) + 1, Z = !B && j >= 42, z = P === "🔴" ? "🟡" : "🔴", me = {
        ...o,
        players: f,
        board: R,
        moves: j,
        turn: B || Z ? P : z,
        winner: B ? P : Z ? "draw" : null,
        revision: Number(o.revision || 0) + 1,
        playerClaimVersion: 6,
        status: B ? P + " wins! Reset to play again." : Z ? "Draw game. Reset to play again." : z === "🟡" && !f.yellow ? "Waiting for Yellow player…" : "Turn: " + z,
        playersLabel: "🔴 Red " + (f.red ? "joined" : "open") + " · 🟡 Yellow " + (f.yellow ? "joined" : "open")
      };
      return d.set("game", me), me;
    })();
  }
  async function ye(e = {}) {
    (e || {}).event, await (async () => {
      const s = window.RudraSharedState, d = s?.current || s;
      if (!d?.get || !d?.set) return;
      const o = d.get("game");
      if (!o) return;
      const y = window.__rudraConnectFourPlayers?.[d.roomId];
      if (o.players?.red !== y && o.players?.yellow !== y) return;
      const h = { ...o, board: Array(42).fill("○"), turn: "🔴", winner: null, moves: 0, revision: Number(o.revision || 0) + 1, status: o.players?.yellow ? "Turn: 🔴" : "Waiting for Yellow player…" };
      return d.set("game", h), h;
    })();
  }
  const be = {
    applyRoomToUrl: ce,
    copyInviteUrl: Ne,
    ensureRoom: K,
    initializeGame: V,
    playColumn: fe,
    resetGame: ye
  }, le = x({});
  le.current = {
    c4_apply_room_url_command: (e = {}, r = {}) => ce({ ...e, signal: r.signal })
  };
  const ee = x(null);
  ee.current || (ee.current = {
    c4_apply_room_url_command: (e, r) => le.current.c4_apply_room_url_command(e, r)
  }), G(() => {
    const e = N.registerCommands || N.runtime?.registerCommands;
    if (typeof e == "function")
      return e(ee.current);
  }, [N.registerCommands, N.runtime?.registerCommands]);
  const je = {
    applyRoomToUrl: ["roomId", "inviteBaseUrl"],
    copyInviteUrl: [],
    ensureRoom: [],
    initializeGame: [],
    playColumn: ["column"],
    resetGame: []
  }, I = (e, r = {}, s = []) => {
    const d = be[e];
    if (d) {
      const f = je[e] || [];
      return d(Object.fromEntries(f.map((b, P) => {
        const v = Object.prototype.hasOwnProperty.call(r, b) ? r[b] : void 0;
        return [b, (v === "" || v === void 0) && s[P] !== void 0 ? s[P] : b === "event" && (v === "" || v === void 0) ? s[0] : v];
      })));
    }
    const o = Ie?.[e];
    if (typeof o == "function")
      return o(Object.keys(r).length > 0 ? r : s[0]);
    const [m, y] = String(e).split("."), h = typeof globalThis < "u" ? globalThis[m]?.[y] : void 0;
    if (typeof h == "function") return h(...Object.values(r));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, k = x(/* @__PURE__ */ new Map()), L = D((e, r, s, d) => {
    const o = k.current.get(e);
    if (r === "exhaust" && o?.promise) return o.promise;
    r === "takeLatest" && o?.controller?.abort();
    const m = new AbortController(), y = () => Promise.resolve().then(() => s(m.signal)), h = r === "queue" && o?.promise ? o.promise.catch(() => {
    }).then(y) : y();
    return k.current.set(e, { controller: m, promise: h }), h.catch((f) => {
      f?.name !== "AbortError" && console.error(d, f);
    }).finally(() => {
      k.current.get(e)?.promise === h && k.current.delete(e);
    }), h;
  }, []);
  G(() => () => {
    for (const e of k.current.values()) e.controller?.abort();
    k.current.clear();
  }, []), G(() => {
    L("c4_mount_ensure_roomc4_ensure_room", "takeLatest", (e) => K({}), "Module mount lifecycle failed:");
  }, []), G(() => {
    L("c4_mount_initializec4_initialize", "takeLatest", (e) => V({}), "Module mount lifecycle failed:");
  }, []);
  const se = x(!1);
  G(() => {
    if (!se.current) {
      se.current = !0;
      return;
    }
    const e = setTimeout(() => {
      L("c4_inputs_ensure_roomc4_ensure_room", "takeLatest", (r) => K({}), "Module input lifecycle failed:");
    }, 100);
    return () => clearTimeout(e);
  }, [X, Q]);
  const de = x(!1);
  return G(() => {
    if (!de.current) {
      de.current = !0;
      return;
    }
    $(structuredClone(""));
    const e = setTimeout(() => {
      L("c4_inputs_initializec4_initialize", "takeLatest", (r) => V({}), "Module input lifecycle failed:");
    }, 100);
    return () => clearTimeout(e);
  }, [X, Q]), /* @__PURE__ */ c("div", { ref: A, className: "rudra-module-wrapper", children: t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
    "      ",
    /* @__PURE__ */ i(l, { id: "c4_root", className: "connect-four-shell", children: [
      "      ",
      t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
        "      ",
        /* @__PURE__ */ i(l, { id: "c4_panel", className: "connect-four-panel", children: [
          "      ",
          t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
            "      ",
            /* @__PURE__ */ c(Y, { id: "c4_kicker", className: "connect-four-kicker", as: "p", content: "RUDRA SHARED STATE · LIVE ROOM" })
          ] }),
          t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
            "      ",
            /* @__PURE__ */ c(Y, { id: "c4_title", className: "connect-four-title", as: "h2", content: "CONNECT FOUR" })
          ] }),
          t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
            "      ",
            /* @__PURE__ */ c(Y, { id: "c4_intro", className: "connect-four-intro", as: "p", content: "This reusable module joins the roomId supplied by its application. Share the application URL configured for that room; Red moves first." })
          ] }),
          t(T?.inviteRoomId) && /* @__PURE__ */ i(a, { children: [
            "      ",
            /* @__PURE__ */ i(l, { id: "c4_invite_row", className: "connect-four-invite", children: [
              "      ",
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ c(Y, { id: "c4_invite_url", className: "connect-four-invite-url", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Creating invite link…" : e)(re) })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_copy_invite_button", "aria-label": "Copy invite URL", className: "connect-four-copy", role: "button", onClick: (...e) => I("copyInviteUrl", {}, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(Y, { id: "c4_copy_invite_label", className: "connect-four-inline-label", as: "span", content: "Copy invite" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
            "      ",
            /* @__PURE__ */ i(l, { id: "c4_status_box", className: "connect-four-status", children: [
              "      ",
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_status", className: "connect-four-status-text", children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(Y, { id: "c4_status_label", className: "connect-four-inline-label", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Waiting for second player…" : e)(u?.game?.status) })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_players", className: "connect-four-players", children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(Y, { id: "c4_players_label", className: "connect-four-inline-label", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "🔴 Red open · 🟡 Yellow open" : e)(u?.game?.playersLabel) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
            "      ",
            /* @__PURE__ */ i(we, { id: "c4_board", className: "connect-four-board", as: "div", columns: 6, children: [
              "      ",
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_0", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 0 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_0", className: "connect-four-disc-anim", height: "82%", paused: !1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[0]), objectFit: "contain", alt: "", width: "82%", animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_1", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 1 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_1", className: "connect-four-disc-anim", preload: !0, animations: g, imageClassName: "connect-four-disc-image", speed: 1, paused: !1, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[1]), objectFit: "contain", imageRendering: "auto", alt: "", width: "82%", height: "82%" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_2", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 2 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_2", className: "connect-four-disc-anim", alt: "", height: "82%", paused: !1, animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%", preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[2]), objectFit: "contain" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_3", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 3 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_3", className: "connect-four-disc-anim", paused: !1, preload: !0, autoPlay: !0, imageClassName: "connect-four-disc-image", speed: 1, height: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[3]), objectFit: "contain", animations: g, imageRendering: "auto", alt: "", width: "82%" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_4", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 4 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_4", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[4]), height: "82%", objectFit: "contain", animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, width: "82%", paused: !1, preload: !0, autoPlay: !0 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_5", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 5 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_5", className: "connect-four-disc-anim", width: "82%", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[5]), objectFit: "contain", height: "82%", autoPlay: !0, animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_6", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 6 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_6", className: "connect-four-disc-anim", animations: g, imageRendering: "auto", alt: "", width: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[6]), imageClassName: "connect-four-disc-image", speed: 1, height: "82%", paused: !1, preload: !0, autoPlay: !0, objectFit: "contain" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_7", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 0 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_7", className: "connect-four-disc-anim", preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[7]), objectFit: "contain", alt: "", height: "82%", paused: !1, autoPlay: !0, animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_8", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", onClick: (...e) => I("playColumn", { column: 1 }, e), tabIndex: 0, role: "button", children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_8", className: "connect-four-disc-anim", height: "82%", paused: !1, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[8]), animations: g, imageRendering: "auto", speed: 1, width: "82%", preload: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", alt: "" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_9", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 2 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_9", className: "connect-four-disc-anim", imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[9]), animations: g, imageClassName: "connect-four-disc-image", paused: !1, preload: !0, objectFit: "contain" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_10", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 3 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_10", className: "connect-four-disc-anim", preload: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", height: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[10]), animations: g, speed: 1, width: "82%", paused: !1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_11", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 4 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_11", className: "connect-four-disc-anim", objectFit: "contain", animations: g, imageClassName: "connect-four-disc-image", alt: "", height: "82%", preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[11]), imageRendering: "auto", speed: 1, width: "82%", paused: !1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_12", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 5 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_12", className: "connect-four-disc-anim", speed: 1, paused: !1, preload: !0, autoPlay: !0, objectFit: "contain", animations: g, imageClassName: "connect-four-disc-image", alt: "", width: "82%", height: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[12]), imageRendering: "auto" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_13", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 6 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_13", className: "connect-four-disc-anim", alt: "", speed: 1, width: "82%", height: "82%", paused: !1, autoPlay: !0, objectFit: "contain", preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[13]), animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_14", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 0 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_14", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[14]), objectFit: "contain", animations: g, imageRendering: "auto", alt: "", speed: 1, height: "82%", preload: !0, autoPlay: !0, imageClassName: "connect-four-disc-image", width: "82%", paused: !1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_15", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 1 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_15", className: "connect-four-disc-anim", preload: !0, autoPlay: !0, animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[15]), objectFit: "contain", width: "82%", height: "82%", paused: !1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_16", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 2 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_16", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, height: "82%", autoPlay: !0, objectFit: "contain", animations: g, width: "82%", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[16]) })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_17", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 3 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_17", className: "connect-four-disc-anim", preload: !0, animations: g, imageClassName: "connect-four-disc-image", height: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[17]), objectFit: "contain", imageRendering: "auto", alt: "", speed: 1, width: "82%", paused: !1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_18", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 4 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_18", className: "connect-four-disc-anim", width: "82%", height: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[18]), imageClassName: "connect-four-disc-image", alt: "", preload: !0, autoPlay: !0, objectFit: "contain", animations: g, imageRendering: "auto", speed: 1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_19", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 5 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_19", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", speed: 1, paused: !1, preload: !0, autoPlay: !0, objectFit: "contain", animations: g, imageRendering: "auto", alt: "", width: "82%", height: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[19]) })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_20", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 6 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_20", className: "connect-four-disc-anim", alt: "", width: "82%", height: "82%", preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[20]), animations: g, speed: 1, paused: !1, autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_21", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 0 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_21", className: "connect-four-disc-anim", objectFit: "contain", imageRendering: "auto", speed: 1, height: "82%", paused: !1, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[21]), animations: g, imageClassName: "connect-four-disc-image", alt: "", width: "82%", preload: !0 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_22", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 1 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_22", className: "connect-four-disc-anim", speed: 1, width: "82%", height: "82%", autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[22]), animations: g })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_23", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", onClick: (...e) => I("playColumn", { column: 2 }, e), tabIndex: 0, role: "button", children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_23", className: "connect-four-disc-anim", alt: "", speed: 1, height: "82%", autoPlay: !0, objectFit: "contain", animations: g, imageClassName: "connect-four-disc-image", width: "82%", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[23]), imageRendering: "auto" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_24", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 3 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_24", className: "connect-four-disc-anim", objectFit: "contain", animations: g, width: "82%", height: "82%", preload: !0, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, paused: !1, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[24]) })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_25", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 4 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_25", className: "connect-four-disc-anim", height: "82%", animations: g, imageClassName: "connect-four-disc-image", speed: 1, paused: !1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[25]), objectFit: "contain", imageRendering: "auto", alt: "", width: "82%" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_26", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 5 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_26", className: "connect-four-disc-anim", height: "82%", paused: !1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[26]), animations: g, alt: "", objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_27", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 6 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_27", className: "connect-four-disc-anim", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[27]), objectFit: "contain", imageClassName: "connect-four-disc-image", alt: "", height: "82%", preload: !0, autoPlay: !0, animations: g, imageRendering: "auto", speed: 1, width: "82%" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_28", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 0 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_28", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[28]), animations: g, height: "82%", paused: !1, preload: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, width: "82%", autoPlay: !0 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_29", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 1 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_29", className: "connect-four-disc-anim", width: "82%", preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[29]), imageRendering: "auto", alt: "", height: "82%", paused: !1, objectFit: "contain", animations: g, imageClassName: "connect-four-disc-image", speed: 1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_30", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 2 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_30", className: "connect-four-disc-anim", preload: !0, autoPlay: !0, animations: g, imageRendering: "auto", alt: "", width: "82%", height: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[30]), objectFit: "contain", imageClassName: "connect-four-disc-image", speed: 1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_31", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 3 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_31", className: "connect-four-disc-anim", alt: "", speed: 1, width: "82%", height: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[31]), objectFit: "contain", preload: !0, autoPlay: !0, animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_32", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 4 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_32", className: "connect-four-disc-anim", width: "82%", height: "82%", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, paused: !1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[32]), objectFit: "contain", animations: g })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_33", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", onClick: (...e) => I("playColumn", { column: 5 }, e), tabIndex: 0, role: "button", children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_33", className: "connect-four-disc-anim", speed: 1, paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[33]), objectFit: "contain", imageRendering: "auto", alt: "", width: "82%", height: "82%", preload: !0, autoPlay: !0, animations: g, imageClassName: "connect-four-disc-image" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_34", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 6 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_34", className: "connect-four-disc-anim", preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[34]), imageClassName: "connect-four-disc-image", speed: 1, width: "82%", height: "82%", objectFit: "contain", animations: g, imageRendering: "auto", alt: "", paused: !1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_35", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 0 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_35", className: "connect-four-disc-anim", width: "82%", height: "82%", paused: !1, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[35]), objectFit: "contain", alt: "", preload: !0, animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_36", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 1 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_36", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[36]), imageClassName: "connect-four-disc-image", alt: "", speed: 1, height: "82%", paused: !1, objectFit: "contain", animations: g, imageRendering: "auto", width: "82%", preload: !0, autoPlay: !0 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_37", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 2 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_37", className: "connect-four-disc-anim", paused: !1, autoPlay: !0, objectFit: "contain", animations: g, imageClassName: "connect-four-disc-image", alt: "", speed: 1, width: "82%", height: "82%", preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[37]), imageRendering: "auto" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_38", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 3 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_38", className: "connect-four-disc-anim", objectFit: "contain", animations: g, speed: 1, paused: !1, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[38]), imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", width: "82%", height: "82%", preload: !0 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_39", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => I("playColumn", { column: 4 }, e), children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_39", className: "connect-four-disc-anim", height: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[39]), objectFit: "contain", animations: g, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", width: "82%", paused: !1, preload: !0, autoPlay: !0, speed: 1 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_40", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 5 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_40", className: "connect-four-disc-anim", autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", alt: "", speed: 1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[40]), animations: g, imageRendering: "auto", width: "82%", height: "82%", paused: !1, preload: !0 })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_cell_41", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => I("playColumn", { column: 6 }, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(p, { id: "c4_disc_41", className: "connect-four-disc-anim", width: "82%", paused: !1, objectFit: "contain", animations: g, imageRendering: "auto", alt: "", height: "82%", preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(u?.game?.board?.[41]), imageClassName: "connect-four-disc-image", speed: 1 })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
            "      ",
            /* @__PURE__ */ i(l, { id: "c4_footer", className: "connect-four-footer", children: [
              "      ",
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_reset", className: "connect-four-reset", role: "button", onClick: (...e) => I("resetGame", {}, e), tabIndex: 0, children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(Y, { id: "c4_reset_label", className: "connect-four-reset-label", as: "span", content: "Reset shared game" })
                  ] })
                ] })
              ] }),
              t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                "      ",
                /* @__PURE__ */ i(l, { id: "c4_connection", className: "connect-four-connection", children: [
                  "      ",
                  t(n({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(a, { children: [
                    "      ",
                    /* @__PURE__ */ c(Y, { id: "c4_connection_label", className: "connect-four-inline-label", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "connecting" : e)(u?.status) })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Ye as default
};
