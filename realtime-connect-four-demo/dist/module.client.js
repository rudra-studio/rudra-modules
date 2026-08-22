import { jsx as n, jsxs as c } from "react/jsx-runtime";
import { useState as H, useEffect as G, useRef as T, useCallback as v } from "react";
import { SpriteAnimator as u } from "@rudra-studio/rudra-three";
import { Box as t, Grid as ye } from "@rudra-studio/rudra-layout";
import { Typography as B } from "@rudra-studio/rudra-core";
function Ce(g) {
  const U = g.serverData || g.serverState || {}, r = g.sharedState || {};
  g.applicationState || U.applicationState, g.pageState || U.pageState, g.pageData || U.pageData;
  const se = {
    ...g.runtime?.functions || {},
    ...g.runtime?.actions || {},
    ...g.functions || {},
    ...g.actions || {}
  }, C = g.$theme ?? g.theme ?? g.data?.$theme ?? g.runtime?.data?.$theme ?? g.runtime?.theme, $ = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [je, q] = H(() => C ?? $());
  G(() => {
    C != null && q(C);
  }, [C]), G(() => {
    if (C != null || typeof document > "u") return;
    const e = document.documentElement, i = (l) => q(l?.detail?.theme ?? $()), o = new MutationObserver(i);
    return o.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [C]);
  const L = T(null), [F, W] = H("lg");
  G(() => {
    if (!L.current) return;
    const e = new ResizeObserver((i) => {
      for (let o of i) {
        const l = o.contentRect.width;
        l < 768 ? W("sm") : l < 1024 ? W("md") : W("lg");
      }
    });
    return e.observe(L.current), () => e.disconnect();
  }, []), v((e) => typeof e != "object" || e === null ? e : F === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : F === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [F]);
  const K = g.roomId !== void 0 ? g.roomId : g.data?.roomId !== void 0 ? g.data.roomId : void 0, ee = g.inviteRoomId !== void 0 ? g.inviteRoomId : g.data?.inviteRoomId !== void 0 ? g.data.inviteRoomId : void 0, M = { roomId: K, inviteRoomId: ee }, [d, ie] = H(() => structuredClone({ "○": { fps: 1, holdLastFrame: !0, loop: !1, sheet: { columns: 1, endFrame: 0, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNDYiIGZpbGw9IiMwNzBkMWQiLz48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSI0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzE1N2E4IiBzdHJva2Utb3BhY2l0eT0iLjQyIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI1MSIgY3k9IjQ3IiByPSIxMiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjAzNSIvPjwvc3ZnPg==", startFrame: 0 } }, "🔴": { fps: 18, holdLastFrame: !0, loop: !1, sheet: { columns: 6, endFrame: 5, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZkN2RjIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+", startFrame: 0 } }, "🟡": { fps: 18, holdLastFrame: !0, loop: !1, sheet: { columns: 6, endFrame: 5, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZmN2JmIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+", startFrame: 0 } } })), [ae, A] = H(() => structuredClone("")), me = { inviteUrl: ae }, z = v((e, i) => {
    switch (e) {
      case "spriteAnimations":
        return ie(i), i;
      case "inviteUrl":
        return A(i), i;
      default:
        return i;
    }
  }, []);
  v((e, i) => {
    const [o, ...l] = String(e || "").split(".");
    if (!o) return i;
    if (l.length === 0) return z(o, i);
    const a = (s) => {
      const p = Array.isArray(s) ? [...s] : { ...s || {} };
      let I = p;
      return l.forEach((b, N) => {
        N === l.length - 1 ? I[b] = i : (I[b] = Array.isArray(I[b]) ? [...I[b]] : { ...I[b] || {} }, I = I[b]);
      }), p;
    };
    switch (o) {
      case "spriteAnimations":
        return ie(a), i;
      case "inviteUrl":
        return A(a), i;
      default:
        return i;
    }
  }, [z]), v(async (e, i, o) => {
    const l = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), a = l[i] || l.default;
    if (typeof a != "function") throw new Error("Library function '" + i + "' was not exported by " + e);
    return a(o);
  }, []);
  const de = { c4_room_created_output: { pattern: "^[a-zA-Z0-9-_]{6,80}$", type: "string" } }, J = (e, i, o) => {
    if (!i || typeof i != "object") return "";
    const l = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], a = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (l.length && !l.includes(a) && !(a === "integer" && l.includes("number"))) return o + " must be " + l.join(" or ") + ".";
    if (i.enum && !i.enum.some((s) => JSON.stringify(s) === JSON.stringify(e))) return o + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const s of i.required || []) if (!Object.prototype.hasOwnProperty.call(e, s)) return o + "." + s + " is required.";
      for (const [s, p] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const I = J(e[s], p, o + "." + s);
        if (I) return I;
      }
    }
    if (Array.isArray(e) && i.items) for (let s = 0; s < e.length; s++) {
      const p = J(e[s], i.items, o + "[" + s + "]");
      if (p) return p;
    }
    return "";
  }, ue = v(async (e, i, o = !1) => {
    const l = de[e];
    if (!l) throw new Error("Module output '" + e + "' is not declared.");
    const a = J(i, l, "output." + e);
    if (a) throw new Error(a);
    const s = g.onOutput || g.onModuleOutput || g.runtime?.onOutput;
    if (typeof s != "function") return i;
    const p = s(e, i, { moduleId: g.moduleId, awaitHandlers: o });
    return o ? await p : i;
  }, [g.onOutput, g.onModuleOutput, g.runtime?.onOutput, g.moduleId]);
  async function Ie(e = {}) {
    const i = e || {};
    i.event, await (async () => {
      const o = window.RudraSharedState, l = o?.current || o;
      if (!l?.get || !l?.set) return;
      let a = l.get("game");
      if (!a || !Array.isArray(a.board) || a.board.length !== 42 || a.winner) return;
      const s = "__rudraConnectFourPlayers", p = window[s] || (window[s] = {});
      let I = p[l.roomId];
      I || (I = crypto.randomUUID(), p[l.roomId] = I);
      const b = { ...a.players || {} };
      let N = !1;
      if (b.red !== I && b.yellow !== I)
        if (!b.red)
          b.red = I, N = !0;
        else if (!b.yellow)
          b.yellow = I, N = !0;
        else
          return;
      const f = b.red === I ? "🔴" : "🟡", _ = !!(b.red && b.yellow);
      if (N && (a = {
        ...a,
        players: b,
        playerClaimVersion: 6,
        status: a.winner ? a.status : _ ? "Turn: " + (a.turn || "🔴") : "Waiting for Yellow player…",
        playersLabel: "🔴 Red " + (b.red ? "joined" : "open") + " · 🟡 Yellow " + (b.yellow ? "joined" : "open")
      }, l.set("game", a)), f !== a.turn) return;
      const P = Number(i.column);
      if (!Number.isInteger(P) || P < 0 || P > 6) return;
      const Y = [...a.board];
      let h = -1;
      for (let w = 5; w >= 0; w -= 1)
        if (Y[w * 7 + P] === "○") {
          h = w;
          break;
        }
      if (h < 0) return;
      Y[h * 7 + P] = f;
      const j = (w, D) => w >= 0 && w < 6 && D >= 0 && D < 7, R = [[1, 0], [0, 1], [1, 1], [1, -1]].some(([w, D]) => {
        let re = 1;
        for (const O of [-1, 1]) {
          let X = h + w * O, V = P + D * O;
          for (; j(X, V) && Y[X * 7 + V] === f; )
            re += 1, X += w * O, V += D * O;
        }
        return re >= 4;
      }), y = Number(a.moves || 0) + 1, S = !R && y >= 42, x = f === "🔴" ? "🟡" : "🔴", le = {
        ...a,
        players: b,
        board: Y,
        moves: y,
        turn: R || S ? f : x,
        winner: R ? f : S ? "draw" : null,
        revision: Number(a.revision || 0) + 1,
        playerClaimVersion: 6,
        status: R ? f + " wins! Reset to play again." : S ? "Draw game. Reset to play again." : x === "🟡" && !b.yellow ? "Waiting for Yellow player…" : "Turn: " + x,
        playersLabel: "🔴 Red " + (b.red ? "joined" : "open") + " · 🟡 Yellow " + (b.yellow ? "joined" : "open")
      };
      return l.set("game", le), le;
    })();
  }
  async function ge(e = {}) {
    (e || {}).event, await (async () => {
      const o = window.RudraSharedState, l = o?.current || o;
      if (!l?.get || !l?.set) return;
      const a = l.get("game");
      if (!a) return;
      const p = window.__rudraConnectFourPlayers?.[l.roomId];
      if (a.players?.red !== p && a.players?.yellow !== p) return;
      const I = { ...a, board: Array(42).fill("○"), turn: "🔴", winner: null, moves: 0, revision: Number(a.revision || 0) + 1, status: a.players?.yellow ? "Turn: 🔴" : "Waiting for Yellow player…" };
      return l.set("game", I), I;
    })();
  }
  async function ne(e = {}) {
    const i = e || {}, o = {};
    {
      i.event;
      const l = await (async () => {
        const a = String(i.roomId || "").trim();
        if (!/^[a-zA-Z0-9-_]{6,80}$/.test(a)) throw new Error("Invalid room ID.");
        const s = new URL(window.location.href), p = String(i.inviteBaseUrl || "").trim(), I = new URL(p || s.toString(), s.origin);
        return I.searchParams.set("room", a), { roomId: a, inviteUrl: I.toString() };
      })();
      o.inviteResult = l;
    }
    return z("inviteUrl", o.inviteResult.inviteUrl), o.inviteResult;
  }
  async function be(e = {}) {
    const i = e || {}, o = {};
    {
      i.event;
      const l = await (async () => {
        const a = String(me.inviteUrl || window.location.href || "").trim();
        if (!a) return { copied: !1 };
        if (navigator.clipboard?.writeText)
          await navigator.clipboard.writeText(a);
        else {
          const s = document.createElement("textarea");
          s.value = a, s.setAttribute("readonly", ""), s.style.position = "fixed", s.style.opacity = "0", document.body.appendChild(s), s.select(), document.execCommand("copy"), s.remove();
        }
        return { copied: !0, inviteUrl: a };
      })();
      o.copyResult = l;
    }
    return o.copyResult;
  }
  async function te(e = {}) {
    const i = e || {}, o = {};
    {
      i.event;
      const l = await (async () => {
        await new Promise((p) => setTimeout(p, 300));
        const a = String(M?.roomId || "").trim(), s = String(M?.inviteRoomId || "").trim();
        return /^[a-zA-Z0-9-_]{6,80}$/.test(a) || /^[a-zA-Z0-9-_]{6,80}$/.test(s) ? {} : { roomId: crypto.randomUUID().replace(/-/g, "").slice(0, 16) };
      })();
      o.roomRequest = l;
    }
    return o.roomRequest.roomId ? (await ue("c4_room_created_output", o.roomRequest.roomId, !0), await k({}), o.roomRequest) : (await k({}), o.roomRequest);
  }
  async function k(e = {}) {
    const i = e || {}, o = {};
    {
      i.event;
      const l = await (async () => {
        const a = String(M?.roomId || "").trim(), s = String(M?.inviteRoomId || "").trim(), p = /^[a-zA-Z0-9-_]{6,80}$/.test(a) ? a : "", I = /^[a-zA-Z0-9-_]{6,80}$/.test(s) ? s : "", b = p || I;
        let N;
        for (let y = 0; y < 50; y += 1) {
          const S = window.RudraSharedState;
          if (N = S?.current || S, N?.get && N?.set && N.status === "connected") break;
          await new Promise((x) => setTimeout(x, 100));
        }
        if (!N?.get || !N?.set || N.status !== "connected") return { inviteUrl: "" };
        await new Promise((y) => setTimeout(y, 250));
        const f = b || String(N.roomId || "default-room");
        let _ = "";
        if (I && !p) {
          const y = new URL(window.location.href);
          y.searchParams.set("room", I), _ = y.toString();
        }
        const P = "__rudraConnectFourPlayers", Y = window[P] || (window[P] = {});
        let h = Y[N.roomId];
        h || (h = crypto.randomUUID(), Y[N.roomId] = h);
        let j = N.get("game");
        if (!(j && Array.isArray(j.board) && j.board.length === 42 && j.playerClaimVersion === 6 && j.roomCode === f))
          j = { board: Array(42).fill("○"), turn: "🔴", winner: null, moves: 0, revision: 0, playerClaimVersion: 6, players: { red: h, yellow: null }, roomCode: f, status: "Waiting for Yellow player…", playersLabel: "🔴 Red joined · 🟡 Yellow open" };
        else {
          const y = { ...j.players || {} };
          y.red ? y.red !== h && !y.yellow && (y.yellow = h) : y.red = h;
          const S = !!(y.red && y.yellow);
          j = { ...j, players: y, status: j.winner ? j.status : S ? "Turn: " + (j.turn || "🔴") : "Waiting for Yellow player…", playersLabel: "🔴 Red " + (y.red ? "joined" : "open") + " · 🟡 Yellow " + (y.yellow ? "joined" : "open") };
        }
        return N.set("game", j), { game: j, inviteUrl: _ };
      })();
      o.joinResult = l;
    }
    return z("inviteUrl", o.joinResult.inviteUrl), o.joinResult.game;
  }
  const pe = {
    playColumn: Ie,
    resetGame: ge,
    applyRoomToUrl: ne,
    copyInviteUrl: be,
    ensureRoom: te,
    initializeGame: k
  }, oe = T({});
  oe.current = {
    c4_apply_room_url_command: (e = {}, i = {}) => ne({ ...e, signal: i.signal })
  };
  const E = T(null);
  E.current || (E.current = {
    c4_apply_room_url_command: (e, i) => oe.current.c4_apply_room_url_command(e, i)
  }), G(() => {
    const e = g.registerCommands || g.runtime?.registerCommands;
    if (typeof e == "function")
      return e(E.current);
  }, [g.registerCommands, g.runtime?.registerCommands]);
  const Ne = {
    playColumn: ["column"],
    resetGame: [],
    applyRoomToUrl: ["roomId", "inviteBaseUrl"],
    copyInviteUrl: [],
    ensureRoom: [],
    initializeGame: []
  }, m = (e, i = {}, o = []) => {
    const l = pe[e];
    if (l) {
      const b = Ne[e] || [];
      return l(Object.fromEntries(b.map((N, f) => {
        const _ = Object.prototype.hasOwnProperty.call(i, N) ? i[N] : void 0;
        return [N, (_ === "" || _ === void 0) && o[f] !== void 0 ? o[f] : N === "event" && (_ === "" || _ === void 0) ? o[0] : _];
      })));
    }
    const a = se?.[e];
    if (typeof a == "function")
      return a(Object.keys(i).length > 0 ? i : o[0]);
    const [s, p] = String(e).split("."), I = typeof globalThis < "u" ? globalThis[s]?.[p] : void 0;
    if (typeof I == "function") return I(...Object.values(i));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, Z = T(/* @__PURE__ */ new Map()), Q = v((e, i, o, l) => {
    const a = Z.current.get(e);
    if (i === "exhaust" && a?.promise) return a.promise;
    i === "takeLatest" && a?.controller?.abort();
    const s = new AbortController(), p = () => Promise.resolve().then(() => o(s.signal)), I = i === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(p) : p();
    return Z.current.set(e, { controller: s, promise: I }), I.catch((b) => {
      b?.name !== "AbortError" && console.error(l, b);
    }).finally(() => {
      Z.current.get(e)?.promise === I && Z.current.delete(e);
    }), I;
  }, []);
  G(() => () => {
    for (const e of Z.current.values()) e.controller?.abort();
    Z.current.clear();
  }, []), G(() => {
    Q("c4_mount_ensure_roomc4_ensure_room", "takeLatest", (e) => te({}), "Module mount lifecycle failed:");
  }, []), G(() => {
    Q("c4_mount_initializec4_initialize", "takeLatest", (e) => k({}), "Module mount lifecycle failed:");
  }, []);
  const ce = T(!1);
  return G(() => {
    if (!ce.current) {
      ce.current = !0;
      return;
    }
    A(structuredClone(""));
    const e = setTimeout(() => {
      Q("c4_inputs_initializec4_initialize", "takeLatest", (i) => k({}), "Module input lifecycle failed:");
    }, 100);
    return () => clearTimeout(e);
  }, [K, ee]), /* @__PURE__ */ n("div", { ref: L, className: "rudra-module-wrapper", children: /* @__PURE__ */ c(t, { id: "c4_root", className: "connect-four-shell", children: [
    "      ",
    /* @__PURE__ */ c(t, { id: "c4_panel", className: "connect-four-panel", children: [
      "      ",
      /* @__PURE__ */ n(B, { id: "c4_kicker", className: "connect-four-kicker", as: "p", content: "RUDRA SHARED STATE · LIVE ROOM" }),
      /* @__PURE__ */ n(B, { id: "c4_title", className: "connect-four-title", as: "h2", content: "CONNECT FOUR" }),
      /* @__PURE__ */ n(B, { id: "c4_intro", className: "connect-four-intro", as: "p", content: "This reusable module joins the roomId supplied by its application. Share the application URL configured for that room; Red moves first." }),
      /* @__PURE__ */ n(t, { id: "c4_room", className: "connect-four-room", "data-label": M?.roomId, role: "status", "aria-live": "polite" }),
      /* @__PURE__ */ c(t, { id: "c4_invite_row", className: "connect-four-invite", children: [
        "      ",
        /* @__PURE__ */ n(B, { id: "c4_invite_url", className: "connect-four-invite-url", as: "p", content: ae }),
        /* @__PURE__ */ n(t, { id: "c4_copy_invite_button", className: "connect-four-copy", onClick: (...e) => m("copyInviteUrl", {}, e), tabIndex: 0, "aria-label": "Copy invite URL", "data-label": "Copy invite", role: "button" })
      ] }),
      /* @__PURE__ */ c(t, { id: "c4_status_box", className: "connect-four-status", children: [
        "      ",
        /* @__PURE__ */ n(t, { id: "c4_status", className: "connect-four-status-text", "data-label": r?.game?.status }),
        /* @__PURE__ */ n(t, { id: "c4_players", className: "connect-four-players", "data-label": r?.game?.playersLabel })
      ] }),
      /* @__PURE__ */ c(ye, { id: "c4_board", className: "connect-four-board", as: "div", columns: 6, children: [
        "      ",
        /* @__PURE__ */ c(t, { id: "c4_cell_0", className: "connect-four-cell", tabIndex: 0, "aria-label": "Drop a disc in column 1", role: "button", onClick: (...e) => m("playColumn", { column: 0 }, e), children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_0", className: "connect-four-disc-anim", alt: "", speed: 1, paused: !1, autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", width: "82%", height: "82%", preload: !0, animation: r?.game?.board?.[0], animations: d, imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_1", className: "connect-four-cell", onClick: (...e) => m("playColumn", { column: 1 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 2", role: "button", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_1", className: "connect-four-disc-anim", alt: "", width: "82%", paused: !1, autoPlay: !0, animation: r?.game?.board?.[1], imageClassName: "connect-four-disc-image", speed: 1, height: "82%", preload: !0, objectFit: "contain", animations: d, imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_2", className: "connect-four-cell", tabIndex: 0, "aria-label": "Drop a disc in column 3", role: "button", onClick: (...e) => m("playColumn", { column: 2 }, e), children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_2", className: "connect-four-disc-anim", width: "82%", preload: !0, autoPlay: !0, animations: d, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, height: "82%", paused: !1, animation: r?.game?.board?.[2], objectFit: "contain" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_3", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 3 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 4", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_3", className: "connect-four-disc-anim", speed: 1, width: "82%", height: "82%", paused: !1, preload: !0, autoPlay: !0, animation: r?.game?.board?.[3], alt: "", objectFit: "contain", animations: d, imageClassName: "connect-four-disc-image", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_4", className: "connect-four-cell", tabIndex: 0, "aria-label": "Drop a disc in column 5", role: "button", onClick: (...e) => m("playColumn", { column: 4 }, e), children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_4", className: "connect-four-disc-anim", autoPlay: !0, animation: r?.game?.board?.[4], objectFit: "contain", animations: d, imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", paused: !1, imageClassName: "connect-four-disc-image", preload: !0 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_5", className: "connect-four-cell", onClick: (...e) => m("playColumn", { column: 5 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 6", role: "button", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_5", className: "connect-four-disc-anim", autoPlay: !0, objectFit: "contain", animations: d, imageRendering: "auto", width: "82%", paused: !1, preload: !0, animation: r?.game?.board?.[5], imageClassName: "connect-four-disc-image", alt: "", speed: 1, height: "82%" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_6", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 6 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 7", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_6", className: "connect-four-disc-anim", speed: 1, width: "82%", height: "82%", preload: !0, animations: d, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", paused: !1, autoPlay: !0, animation: r?.game?.board?.[6], objectFit: "contain" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_7", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 0 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 1", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_7", className: "connect-four-disc-anim", autoPlay: !0, imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%", animation: r?.game?.board?.[7], objectFit: "contain", animations: d, alt: "", height: "82%", paused: !1, preload: !0 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_8", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 1 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 2", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_8", className: "connect-four-disc-anim", width: "82%", preload: !0, autoPlay: !0, animations: d, imageClassName: "connect-four-disc-image", height: "82%", paused: !1, animation: r?.game?.board?.[8], objectFit: "contain", imageRendering: "auto", alt: "", speed: 1 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_9", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 2 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 3", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_9", className: "connect-four-disc-anim", alt: "", height: "82%", paused: !1, animation: r?.game?.board?.[9], objectFit: "contain", animations: d, imageRendering: "auto", speed: 1, width: "82%", preload: !0, autoPlay: !0, imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_10", className: "connect-four-cell", "aria-label": "Drop a disc in column 4", role: "button", onClick: (...e) => m("playColumn", { column: 3 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_10", className: "connect-four-disc-anim", width: "82%", paused: !1, animation: r?.game?.board?.[10], alt: "", height: "82%", preload: !0, autoPlay: !0, objectFit: "contain", animations: d, imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_11", className: "connect-four-cell", "aria-label": "Drop a disc in column 5", role: "button", onClick: (...e) => m("playColumn", { column: 4 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_11", className: "connect-four-disc-anim", preload: !0, animation: r?.game?.board?.[11], objectFit: "contain", animations: d, width: "82%", autoPlay: !0, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, height: "82%", paused: !1 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_12", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 5 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 6", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_12", className: "connect-four-disc-anim", autoPlay: !0, objectFit: "contain", animations: d, imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", preload: !0, animation: r?.game?.board?.[12], imageClassName: "connect-four-disc-image", paused: !1 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_13", className: "connect-four-cell", "aria-label": "Drop a disc in column 7", role: "button", onClick: (...e) => m("playColumn", { column: 6 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_13", className: "connect-four-disc-anim", objectFit: "contain", imageRendering: "auto", speed: 1, width: "82%", height: "82%", paused: !1, preload: !0, animations: d, imageClassName: "connect-four-disc-image", alt: "", autoPlay: !0, animation: r?.game?.board?.[13] })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_14", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 0 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 1", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_14", className: "connect-four-disc-anim", animation: r?.game?.board?.[14], objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", width: "82%", height: "82%", paused: !1, autoPlay: !0, animations: d, alt: "", speed: 1, preload: !0 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_15", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 1 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 2", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_15", className: "connect-four-disc-anim", alt: "", speed: 1, width: "82%", height: "82%", preload: !0, autoPlay: !0, animations: d, paused: !1, animation: r?.game?.board?.[15], objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_16", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 2 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 3", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_16", className: "connect-four-disc-anim", width: "82%", height: "82%", paused: !1, autoPlay: !0, animations: d, imageClassName: "connect-four-disc-image", alt: "", speed: 1, preload: !0, animation: r?.game?.board?.[16], objectFit: "contain", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_17", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 3 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 4", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_17", className: "connect-four-disc-anim", alt: "", speed: 1, width: "82%", paused: !1, autoPlay: !0, objectFit: "contain", imageRendering: "auto", height: "82%", preload: !0, animation: r?.game?.board?.[17], animations: d, imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_18", className: "connect-four-cell", "aria-label": "Drop a disc in column 5", role: "button", onClick: (...e) => m("playColumn", { column: 4 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_18", className: "connect-four-disc-anim", height: "82%", paused: !1, imageClassName: "connect-four-disc-image", alt: "", speed: 1, preload: !0, autoPlay: !0, animation: r?.game?.board?.[18], objectFit: "contain", animations: d, imageRendering: "auto", width: "82%" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_19", className: "connect-four-cell", onClick: (...e) => m("playColumn", { column: 5 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 6", role: "button", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_19", className: "connect-four-disc-anim", alt: "", speed: 1, height: "82%", autoPlay: !0, animation: r?.game?.board?.[19], objectFit: "contain", imageClassName: "connect-four-disc-image", width: "82%", paused: !1, preload: !0, animations: d, imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_20", className: "connect-four-cell", tabIndex: 0, "aria-label": "Drop a disc in column 7", role: "button", onClick: (...e) => m("playColumn", { column: 6 }, e), children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_20", className: "connect-four-disc-anim", speed: 1, width: "82%", preload: !0, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", height: "82%", paused: !1, autoPlay: !0, animation: r?.game?.board?.[20], objectFit: "contain", animations: d })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_21", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 0 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 1", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_21", className: "connect-four-disc-anim", alt: "", width: "82%", height: "82%", preload: !0, objectFit: "contain", animations: d, imageRendering: "auto", speed: 1, paused: !1, autoPlay: !0, animation: r?.game?.board?.[21], imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_22", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 1 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 2", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_22", className: "connect-four-disc-anim", imageRendering: "auto", alt: "", width: "82%", height: "82%", paused: !1, preload: !0, autoPlay: !0, animation: r?.game?.board?.[22], objectFit: "contain", speed: 1, animations: d, imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_23", className: "connect-four-cell", onClick: (...e) => m("playColumn", { column: 2 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 3", role: "button", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_23", className: "connect-four-disc-anim", alt: "", speed: 1, preload: !0, animations: d, imageRendering: "auto", width: "82%", height: "82%", paused: !1, autoPlay: !0, animation: r?.game?.board?.[23], objectFit: "contain", imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_24", className: "connect-four-cell", tabIndex: 0, "aria-label": "Drop a disc in column 4", role: "button", onClick: (...e) => m("playColumn", { column: 3 }, e), children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_24", className: "connect-four-disc-anim", preload: !0, autoPlay: !0, animation: r?.game?.board?.[24], imageClassName: "connect-four-disc-image", speed: 1, width: "82%", objectFit: "contain", animations: d, imageRendering: "auto", alt: "", height: "82%", paused: !1 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_25", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 4 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 5", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_25", className: "connect-four-disc-anim", speed: 1, width: "82%", height: "82%", paused: !1, preload: !0, objectFit: "contain", animations: d, autoPlay: !0, animation: r?.game?.board?.[25], imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_26", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 5 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 6", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_26", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", height: "82%", preload: !0, objectFit: "contain", animations: d, speed: 1, width: "82%", paused: !1, autoPlay: !0, animation: r?.game?.board?.[26] })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_27", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 6 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 7", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_27", className: "connect-four-disc-anim", alt: "", speed: 1, paused: !1, preload: !0, autoPlay: !0, animation: r?.game?.board?.[27], objectFit: "contain", animations: d, width: "82%", height: "82%", imageClassName: "connect-four-disc-image", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_28", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 0 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 1", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_28", className: "connect-four-disc-anim", speed: 1, height: "82%", paused: !1, preload: !0, animation: r?.game?.board?.[28], animations: d, alt: "", width: "82%", autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_29", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 1 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 2", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_29", className: "connect-four-disc-anim", speed: 1, paused: !1, preload: !0, autoPlay: !0, animation: r?.game?.board?.[29], objectFit: "contain", animations: d, imageClassName: "connect-four-disc-image", alt: "", width: "82%", height: "82%", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_30", className: "connect-four-cell", tabIndex: 0, "aria-label": "Drop a disc in column 3", role: "button", onClick: (...e) => m("playColumn", { column: 2 }, e), children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_30", className: "connect-four-disc-anim", alt: "", speed: 1, animations: d, imageClassName: "connect-four-disc-image", imageRendering: "auto", width: "82%", height: "82%", paused: !1, preload: !0, autoPlay: !0, animation: r?.game?.board?.[30], objectFit: "contain" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_31", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 3 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 4", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_31", className: "connect-four-disc-anim", objectFit: "contain", animations: d, imageRendering: "auto", speed: 1, height: "82%", paused: !1, preload: !0, autoPlay: !0, imageClassName: "connect-four-disc-image", alt: "", width: "82%", animation: r?.game?.board?.[31] })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_32", className: "connect-four-cell", onClick: (...e) => m("playColumn", { column: 4 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 5", role: "button", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_32", className: "connect-four-disc-anim", objectFit: "contain", animations: d, speed: 1, preload: !0, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", width: "82%", height: "82%", paused: !1, autoPlay: !0, animation: r?.game?.board?.[32] })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_33", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 5 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 6", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_33", className: "connect-four-disc-anim", paused: !1, preload: !0, autoPlay: !0, animation: r?.game?.board?.[33], animations: d, height: "82%", objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, width: "82%" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_34", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 6 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 7", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_34", className: "connect-four-disc-anim", speed: 1, width: "82%", height: "82%", paused: !1, autoPlay: !0, animation: r?.game?.board?.[34], objectFit: "contain", preload: !0, animations: d, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_35", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 0 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 1", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_35", className: "connect-four-disc-anim", animation: r?.game?.board?.[35], animations: d, imageRendering: "auto", speed: 1, height: "82%", paused: !1, preload: !0, autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", alt: "", width: "82%" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_36", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 1 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 2", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_36", className: "connect-four-disc-anim", width: "82%", paused: !1, preload: !0, animation: r?.game?.board?.[36], animations: d, imageRendering: "auto", speed: 1, height: "82%", autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", alt: "" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_37", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 2 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 3", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_37", className: "connect-four-disc-anim", autoPlay: !0, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", paused: !1, preload: !0, animation: r?.game?.board?.[37], objectFit: "contain", animations: d, speed: 1, width: "82%", height: "82%" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_38", className: "connect-four-cell", tabIndex: 0, "aria-label": "Drop a disc in column 4", role: "button", onClick: (...e) => m("playColumn", { column: 3 }, e), children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_38", className: "connect-four-disc-anim", objectFit: "contain", animations: d, imageRendering: "auto", speed: 1, width: "82%", height: "82%", paused: !1, preload: !0, autoPlay: !0, imageClassName: "connect-four-disc-image", alt: "", animation: r?.game?.board?.[38] })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_39", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 4 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 5", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_39", className: "connect-four-disc-anim", objectFit: "contain", imageClassName: "connect-four-disc-image", height: "82%", paused: !1, animation: r?.game?.board?.[39], animations: d, imageRendering: "auto", alt: "", speed: 1, width: "82%", preload: !0, autoPlay: !0 })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_40", className: "connect-four-cell", "aria-label": "Drop a disc in column 6", role: "button", onClick: (...e) => m("playColumn", { column: 5 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_40", className: "connect-four-disc-anim", preload: !0, animation: r?.game?.board?.[40], objectFit: "contain", imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", paused: !1, autoPlay: !0, animations: d, imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ c(t, { id: "c4_cell_41", className: "connect-four-cell", role: "button", onClick: (...e) => m("playColumn", { column: 6 }, e), tabIndex: 0, "aria-label": "Drop a disc in column 7", children: [
          "      ",
          /* @__PURE__ */ n(u, { id: "c4_disc_41", className: "connect-four-disc-anim", autoPlay: !0, animation: r?.game?.board?.[41], objectFit: "contain", animations: d, height: "82%", preload: !0, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, width: "82%", paused: !1 })
        ] })
      ] }),
      /* @__PURE__ */ c(t, { id: "c4_footer", className: "connect-four-footer", children: [
        "      ",
        /* @__PURE__ */ c(t, { id: "c4_reset", className: "connect-four-reset", role: "button", onClick: (...e) => m("resetGame", {}, e), tabIndex: 0, "data-label": "Reset shared game", children: [
          "      ",
          /* @__PURE__ */ n(B, { id: "c4_reset_label", className: "connect-four-reset-label", as: "span", content: "Reset shared game" })
        ] }),
        /* @__PURE__ */ n(t, { id: "c4_connection", className: "connect-four-connection", "data-label": r?.status })
      ] })
    ] })
  ] }) });
}
export {
  Ce as default
};
