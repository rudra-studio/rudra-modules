import { jsx as o, jsxs as t } from "react/jsx-runtime";
import { useState as H, useEffect as C, useRef as Z, useCallback as k } from "react";
import { Box as n, Grid as be } from "@rudra-studio/rudra-layout";
import { SpriteAnimator as u } from "@rudra-studio/rudra-three";
import { Typography as v } from "@rudra-studio/rudra-core";
function Ce(g) {
  const U = g.serverData || g.serverState || {}, s = g.sharedState || {};
  g.applicationState || U.applicationState, g.pageState || U.pageState, g.pageData || U.pageData;
  const de = {
    ...g.runtime?.functions || {},
    ...g.runtime?.actions || {},
    ...g.functions || {},
    ...g.actions || {}
  }, S = g.$theme ?? g.theme ?? g.data?.$theme ?? g.runtime?.data?.$theme ?? g.runtime?.theme, ee = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [je, ie] = H(() => S ?? ee());
  C(() => {
    S != null && ie(S);
  }, [S]), C(() => {
    if (S != null || typeof document > "u") return;
    const e = document.documentElement, i = (l) => ie(l?.detail?.theme ?? ee()), c = new MutationObserver(i);
    return c.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      c.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [S]);
  const L = Z(null), [F, W] = H("lg");
  C(() => {
    if (!L.current) return;
    const e = new ResizeObserver((i) => {
      for (let c of i) {
        const l = c.contentRect.width;
        l < 768 ? W("sm") : l < 1024 ? W("md") : W("lg");
      }
    });
    return e.observe(L.current), () => e.disconnect();
  }, []), k((e) => typeof e != "object" || e === null ? e : F === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : F === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [F]);
  const A = g.inviteRoomId !== void 0 ? g.inviteRoomId : g.data?.inviteRoomId !== void 0 ? g.data.inviteRoomId : void 0, J = g.roomId !== void 0 ? g.roomId : g.data?.roomId !== void 0 ? g.data.roomId : void 0, R = { inviteRoomId: A, roomId: J }, [ae, E] = H(() => structuredClone("")), [m, te] = H(() => structuredClone({ "○": { fps: 1, holdLastFrame: !0, loop: !1, sheet: { columns: 1, endFrame: 0, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNDYiIGZpbGw9IiMwNzBkMWQiLz48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSI0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzE1N2E4IiBzdHJva2Utb3BhY2l0eT0iLjQyIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI1MSIgY3k9IjQ3IiByPSIxMiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjAzNSIvPjwvc3ZnPg==", startFrame: 0 } }, "🔴": { fps: 18, holdLastFrame: !0, loop: !1, sheet: { columns: 6, endFrame: 5, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2VmMzM0MCIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZkN2RjIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZWYzMzQwIi8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmQ3ZGMiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNlZjMzNDAiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZDdkYyIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+", startFrame: 0 } }, "🟡": { fps: 18, holdLastFrame: !0, loop: !1, sheet: { columns: 6, endFrame: 5, rows: 1, src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNzY4IDEyOCI+PGRlZnM+PGZpbHRlciBpZD0icyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTYwJSI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjciIHN0ZERldmlhdGlvbj0iNSIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii4zOCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjcykiPjxnIG9wYWNpdHk9IjAuMiI+PGNpcmNsZSBjeD0iNjQiIGN5PSIxMCIgcj0iMzMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI4IiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTYuNDQiIGN5PSIxLjU5OTk5OTk5OTk5OTk5OTYiIHI9IjUuMDQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjY0IiBjeT0iMTAiIHI9IjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjQyIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIyNCIgcj0iMzgiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjI0IiByPSIzMyIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjE4My4wOSIgY3k9IjE0LjEiIHI9IjUuOTM5OTk5OTk5OTk5OTk5NSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iMjQiIHI9IjMxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyBvcGFjaXR5PSIwLjY4Ij48Y2lyY2xlIGN4PSIzMjAiIGN5PSI0NCIgcj0iNDMiIGZpbGw9IiMwNzBiMTkiIG9wYWNpdHk9Ii41MiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzOCIgZmlsbD0iI2ZhY2MxNSIvPjxjaXJjbGUgY3g9IjMwOS43NCIgY3k9IjMyLjYiIHI9IjYuODQiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ0IiByPSIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMC45NCI+PGNpcmNsZSBjeD0iNDQ4IiBjeT0iNzIiIHI9IjQ5IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDQiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI0MzYuMTIiIGN5PSI1OC44IiByPSI3LjkyIiBmaWxsPSIjZmZmN2JmIiBvcGFjaXR5PSIuNzgiLz48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MiIgcj0iNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxnIG9wYWNpdHk9IjEiPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSI0NSIgZmlsbD0iIzA3MGIxOSIgb3BhY2l0eT0iLjUyIi8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iNjIiIHI9IjQwIiBmaWxsPSIjZmFjYzE1Ii8+PGNpcmNsZSBjeD0iNTY1LjIiIGN5PSI1MCIgcj0iNy4xOTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmY3YmYiIG9wYWNpdHk9Ii43OCIvPjxjaXJjbGUgY3g9IjU3NiIgY3k9IjYyIiByPSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjE4IiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQ4IiBmaWxsPSIjMDcwYjE5IiBvcGFjaXR5PSIuNTIiLz48Y2lyY2xlIGN4PSI3MDQiIGN5PSI2NCIgcj0iNDMiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI2OTIuMzkiIGN5PSI1MS4xIiByPSI3LjczOTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZjdiZiIgb3BhY2l0eT0iLjc4Ii8+PGNpcmNsZSBjeD0iNzA0IiBjeT0iNjQiIHI9IjQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48L2c+PC9zdmc+", startFrame: 0 } } })), me = { inviteUrl: ae }, B = k((e, i) => {
    switch (e) {
      case "inviteUrl":
        return E(i), i;
      case "spriteAnimations":
        return te(i), i;
      default:
        return i;
    }
  }, []);
  k((e, i) => {
    const [c, ...l] = String(e || "").split(".");
    if (!c) return i;
    if (l.length === 0) return B(c, i);
    const a = (r) => {
      const N = Array.isArray(r) ? [...r] : { ...r || {} };
      let I = N;
      return l.forEach((p, f) => {
        f === l.length - 1 ? I[p] = i : (I[p] = Array.isArray(I[p]) ? [...I[p]] : { ...I[p] || {} }, I = I[p]);
      }), N;
    };
    switch (c) {
      case "inviteUrl":
        return E(a), i;
      case "spriteAnimations":
        return te(a), i;
      default:
        return i;
    }
  }, [B]), k(async (e, i, c) => {
    const l = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), a = l[i] || l.default;
    if (typeof a != "function") throw new Error("Library function '" + i + "' was not exported by " + e);
    return a(c);
  }, []);
  const ue = { c4_room_created_output: { pattern: "^[a-zA-Z0-9-_]{6,80}$", type: "string" } }, Q = (e, i, c) => {
    if (!i || typeof i != "object") return "";
    const l = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], a = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (l.length && !l.includes(a) && !(a === "integer" && l.includes("number"))) return c + " must be " + l.join(" or ") + ".";
    if (i.enum && !i.enum.some((r) => JSON.stringify(r) === JSON.stringify(e))) return c + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const r of i.required || []) if (!Object.prototype.hasOwnProperty.call(e, r)) return c + "." + r + " is required.";
      for (const [r, N] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(e, r)) {
        const I = Q(e[r], N, c + "." + r);
        if (I) return I;
      }
    }
    if (Array.isArray(e) && i.items) for (let r = 0; r < e.length; r++) {
      const N = Q(e[r], i.items, c + "[" + r + "]");
      if (N) return N;
    }
    return "";
  }, Ie = k(async (e, i, c = !1) => {
    const l = ue[e];
    if (!l) throw new Error("Module output '" + e + "' is not declared.");
    const a = Q(i, l, "output." + e);
    if (a) throw new Error(a);
    const r = g.onOutput || g.onModuleOutput || g.runtime?.onOutput;
    if (typeof r != "function") return i;
    const N = r(e, i, { moduleId: g.moduleId, awaitHandlers: c });
    return c ? await N : i;
  }, [g.onOutput, g.onModuleOutput, g.runtime?.onOutput, g.moduleId]);
  async function oe(e = {}) {
    const i = e || {}, c = {};
    {
      i.event;
      const l = await (async () => {
        const a = String(i.roomId || "").trim();
        if (!/^[a-zA-Z0-9-_]{6,80}$/.test(a)) throw new Error("Invalid room ID.");
        const r = new URL(window.location.href), N = String(i.inviteBaseUrl || "").trim(), I = new URL(N || r.toString(), r.origin);
        return I.searchParams.set("room", a), { roomId: a, inviteUrl: I.toString() };
      })();
      c.inviteResult = l;
    }
    return B("inviteUrl", c.inviteResult.inviteUrl), c.inviteResult;
  }
  async function ge(e = {}) {
    const i = e || {}, c = {};
    {
      i.event;
      const l = await (async () => {
        const a = String(me.inviteUrl || window.location.href || "").trim();
        if (!a) return { copied: !1 };
        if (navigator.clipboard?.writeText)
          await navigator.clipboard.writeText(a);
        else {
          const r = document.createElement("textarea");
          r.value = a, r.setAttribute("readonly", ""), r.style.position = "fixed", r.style.opacity = "0", document.body.appendChild(r), r.select(), document.execCommand("copy"), r.remove();
        }
        return { copied: !0, inviteUrl: a };
      })();
      c.copyResult = l;
    }
    return c.copyResult;
  }
  async function X(e = {}) {
    const i = e || {}, c = {};
    {
      i.event;
      const l = await (async () => {
        const a = (I) => /^[a-zA-Z0-9-_]{6,80}$/.test(I), r = String(R?.roomId || "").trim(), N = String(R?.inviteRoomId || "").trim();
        return a(r) ? { roomId: r, created: !1, source: "input" } : a(N) ? { roomId: N, created: !1, source: "created" } : { roomId: crypto.randomUUID().replace(/-/g, "").slice(0, 16), created: !0, source: "created" };
      })();
      c.roomRequest = l;
    }
    return c.roomRequest.created && await Ie("c4_room_created_output", c.roomRequest.roomId, !0), c.roomRequest;
  }
  async function q(e = {}) {
    const i = e || {}, c = {};
    {
      i.event;
      const l = await (async () => {
        const a = String(R?.roomId || "").trim(), r = String(R?.inviteRoomId || "").trim(), N = /^[a-zA-Z0-9-_]{6,80}$/.test(a) ? a : "", I = /^[a-zA-Z0-9-_]{6,80}$/.test(r) ? r : "", p = N || I;
        if (!p) return { game: null, inviteUrl: "" };
        let f;
        for (let y = 0; y < 50; y += 1) {
          const G = window.RudraSharedState;
          if (f = G?.current || G, f?.get && f?.set && f.status === "connected") break;
          await new Promise((D) => setTimeout(D, 100));
        }
        if (!f?.get || !f?.set || f.status !== "connected") return { inviteUrl: "" };
        await new Promise((y) => setTimeout(y, 250));
        const j = p || String(f.roomId || "default-room");
        let w = "";
        if (I && !N) {
          const y = new URL(window.location.href);
          y.searchParams.set("room", I), w = y.toString();
        }
        const _ = "__rudraConnectFourPlayers", Y = window[_] || (window[_] = {});
        let h = Y[f.roomId];
        h || (h = crypto.randomUUID(), Y[f.roomId] = h);
        let b = f.get("game");
        if (!(b && Array.isArray(b.board) && b.board.length === 42 && b.playerClaimVersion === 6 && b.roomCode === j))
          b = { board: Array(42).fill("○"), turn: "🔴", winner: null, moves: 0, revision: 0, playerClaimVersion: 6, players: { red: h, yellow: null }, roomCode: j, status: "Waiting for Yellow player…", playersLabel: "🔴 Red joined · 🟡 Yellow open" };
        else {
          const y = { ...b.players || {} };
          y.red ? y.red !== h && !y.yellow && (y.yellow = h) : y.red = h;
          const G = !!(y.red && y.yellow);
          b = { ...b, players: y, status: b.winner ? b.status : G ? "Turn: " + (b.turn || "🔴") : "Waiting for Yellow player…", playersLabel: "🔴 Red " + (y.red ? "joined" : "open") + " · 🟡 Yellow " + (y.yellow ? "joined" : "open") };
        }
        return f.set("game", b), { game: b, inviteUrl: w };
      })();
      c.joinResult = l;
    }
    return B("inviteUrl", c.joinResult.inviteUrl), c.joinResult.game;
  }
  async function pe(e = {}) {
    const i = e || {};
    i.event, await (async () => {
      const c = window.RudraSharedState, l = c?.current || c;
      if (!l?.get || !l?.set) return;
      let a = l.get("game");
      if (!a || !Array.isArray(a.board) || a.board.length !== 42 || a.winner) return;
      const r = "__rudraConnectFourPlayers", N = window[r] || (window[r] = {});
      let I = N[l.roomId];
      I || (I = crypto.randomUUID(), N[l.roomId] = I);
      const p = { ...a.players || {} };
      let f = !1;
      if (p.red !== I && p.yellow !== I)
        if (!p.red)
          p.red = I, f = !0;
        else if (!p.yellow)
          p.yellow = I, f = !0;
        else
          return;
      const j = p.red === I ? "🔴" : "🟡", w = !!(p.red && p.yellow);
      if (f && (a = {
        ...a,
        players: p,
        playerClaimVersion: 6,
        status: a.winner ? a.status : w ? "Turn: " + (a.turn || "🔴") : "Waiting for Yellow player…",
        playersLabel: "🔴 Red " + (p.red ? "joined" : "open") + " · 🟡 Yellow " + (p.yellow ? "joined" : "open")
      }, l.set("game", a)), j !== a.turn) return;
      const _ = Number(i.column);
      if (!Number.isInteger(_) || _ < 0 || _ > 6) return;
      const Y = [...a.board];
      let h = -1;
      for (let P = 5; P >= 0; P -= 1)
        if (Y[P * 7 + _] === "○") {
          h = P;
          break;
        }
      if (h < 0) return;
      Y[h * 7 + _] = j;
      const b = (P, T) => P >= 0 && P < 6 && T >= 0 && T < 7, x = [[1, 0], [0, 1], [1, 1], [1, -1]].some(([P, T]) => {
        let se = 1;
        for (const O of [-1, 1]) {
          let K = h + P * O, V = _ + T * O;
          for (; b(K, V) && Y[K * 7 + V] === j; )
            se += 1, K += P * O, V += T * O;
        }
        return se >= 4;
      }), y = Number(a.moves || 0) + 1, G = !x && y >= 42, D = j === "🔴" ? "🟡" : "🔴", re = {
        ...a,
        players: p,
        board: Y,
        moves: y,
        turn: x || G ? j : D,
        winner: x ? j : G ? "draw" : null,
        revision: Number(a.revision || 0) + 1,
        playerClaimVersion: 6,
        status: x ? j + " wins! Reset to play again." : G ? "Draw game. Reset to play again." : D === "🟡" && !p.yellow ? "Waiting for Yellow player…" : "Turn: " + D,
        playersLabel: "🔴 Red " + (p.red ? "joined" : "open") + " · 🟡 Yellow " + (p.yellow ? "joined" : "open")
      };
      return l.set("game", re), re;
    })();
  }
  async function Ne(e = {}) {
    (e || {}).event, await (async () => {
      const c = window.RudraSharedState, l = c?.current || c;
      if (!l?.get || !l?.set) return;
      const a = l.get("game");
      if (!a) return;
      const N = window.__rudraConnectFourPlayers?.[l.roomId];
      if (a.players?.red !== N && a.players?.yellow !== N) return;
      const I = { ...a, board: Array(42).fill("○"), turn: "🔴", winner: null, moves: 0, revision: Number(a.revision || 0) + 1, status: a.players?.yellow ? "Turn: 🔴" : "Waiting for Yellow player…" };
      return l.set("game", I), I;
    })();
  }
  const fe = {
    applyRoomToUrl: oe,
    copyInviteUrl: ge,
    ensureRoom: X,
    initializeGame: q,
    playColumn: pe,
    resetGame: Ne
  }, ne = Z({});
  ne.current = {
    c4_apply_room_url_command: (e = {}, i = {}) => oe({ ...e, signal: i.signal })
  };
  const $ = Z(null);
  $.current || ($.current = {
    c4_apply_room_url_command: (e, i) => ne.current.c4_apply_room_url_command(e, i)
  }), C(() => {
    const e = g.registerCommands || g.runtime?.registerCommands;
    if (typeof e == "function")
      return e($.current);
  }, [g.registerCommands, g.runtime?.registerCommands]);
  const ye = {
    applyRoomToUrl: ["roomId", "inviteBaseUrl"],
    copyInviteUrl: [],
    ensureRoom: [],
    initializeGame: [],
    playColumn: ["column"],
    resetGame: []
  }, d = (e, i = {}, c = []) => {
    const l = fe[e];
    if (l) {
      const p = ye[e] || [];
      return l(Object.fromEntries(p.map((f, j) => {
        const w = Object.prototype.hasOwnProperty.call(i, f) ? i[f] : void 0;
        return [f, (w === "" || w === void 0) && c[j] !== void 0 ? c[j] : f === "event" && (w === "" || w === void 0) ? c[0] : w];
      })));
    }
    const a = de?.[e];
    if (typeof a == "function")
      return a(Object.keys(i).length > 0 ? i : c[0]);
    const [r, N] = String(e).split("."), I = typeof globalThis < "u" ? globalThis[r]?.[N] : void 0;
    if (typeof I == "function") return I(...Object.values(i));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, M = Z(/* @__PURE__ */ new Map()), z = k((e, i, c, l) => {
    const a = M.current.get(e);
    if (i === "exhaust" && a?.promise) return a.promise;
    i === "takeLatest" && a?.controller?.abort();
    const r = new AbortController(), N = () => Promise.resolve().then(() => c(r.signal)), I = i === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(N) : N();
    return M.current.set(e, { controller: r, promise: I }), I.catch((p) => {
      p?.name !== "AbortError" && console.error(l, p);
    }).finally(() => {
      M.current.get(e)?.promise === I && M.current.delete(e);
    }), I;
  }, []);
  C(() => () => {
    for (const e of M.current.values()) e.controller?.abort();
    M.current.clear();
  }, []), C(() => {
    z("c4_mount_ensure_roomc4_ensure_room", "takeLatest", (e) => X({}), "Module mount lifecycle failed:");
  }, []), C(() => {
    z("c4_mount_initializec4_initialize", "takeLatest", (e) => q({}), "Module mount lifecycle failed:");
  }, []);
  const ce = Z(!1);
  C(() => {
    if (!ce.current) {
      ce.current = !0;
      return;
    }
    const e = setTimeout(() => {
      z("c4_inputs_ensure_roomc4_ensure_room", "takeLatest", (i) => X({}), "Module input lifecycle failed:");
    }, 100);
    return () => clearTimeout(e);
  }, [J, A]);
  const le = Z(!1);
  return C(() => {
    if (!le.current) {
      le.current = !0;
      return;
    }
    E(structuredClone(""));
    const e = setTimeout(() => {
      z("c4_inputs_initializec4_initialize", "takeLatest", (i) => q({}), "Module input lifecycle failed:");
    }, 100);
    return () => clearTimeout(e);
  }, [J, A]), /* @__PURE__ */ o("div", { ref: L, className: "rudra-module-wrapper", children: /* @__PURE__ */ t(n, { id: "c4_root", className: "connect-four-shell", children: [
    "      ",
    /* @__PURE__ */ t(n, { id: "c4_panel", className: "connect-four-panel", children: [
      "      ",
      /* @__PURE__ */ o(v, { id: "c4_kicker", className: "connect-four-kicker", content: "RUDRA SHARED STATE · LIVE ROOM", as: "p" }),
      /* @__PURE__ */ o(v, { id: "c4_title", className: "connect-four-title", as: "h2", content: "CONNECT FOUR" }),
      /* @__PURE__ */ o(v, { id: "c4_intro", className: "connect-four-intro", as: "p", content: "This reusable module joins the roomId supplied by its application. Share the application URL configured for that room; Red moves first." }),
      /* @__PURE__ */ t(n, { id: "c4_room", "aria-live": "polite", className: "connect-four-room", role: "status", children: [
        "      ",
        /* @__PURE__ */ o(v, { id: "c4_room_label", className: "connect-four-inline-label", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Room ID required" : e)(R?.roomId) })
      ] }),
      /* @__PURE__ */ t(n, { id: "c4_invite_row", className: "connect-four-invite", children: [
        "      ",
        /* @__PURE__ */ o(v, { id: "c4_invite_url", className: "connect-four-invite-url", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Creating invite link…" : e)(ae) }),
        /* @__PURE__ */ t(n, { id: "c4_copy_invite_button", "aria-label": "Copy invite URL", className: "connect-four-copy", tabIndex: 0, role: "button", onClick: (...e) => d("copyInviteUrl", {}, e), children: [
          "      ",
          /* @__PURE__ */ o(v, { id: "c4_copy_invite_label", className: "connect-four-inline-label", as: "span", content: "Copy invite" })
        ] })
      ] }),
      /* @__PURE__ */ t(n, { id: "c4_status_box", className: "connect-four-status", children: [
        "      ",
        /* @__PURE__ */ t(n, { id: "c4_status", className: "connect-four-status-text", children: [
          "      ",
          /* @__PURE__ */ o(v, { id: "c4_status_label", className: "connect-four-inline-label", content: /* @__PURE__ */ ((e) => e === void 0 ? "Waiting for second player…" : e)(s?.game?.status), as: "span" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_players", className: "connect-four-players", children: [
          "      ",
          /* @__PURE__ */ o(v, { id: "c4_players_label", className: "connect-four-inline-label", content: /* @__PURE__ */ ((e) => e === void 0 ? "🔴 Red open · 🟡 Yellow open" : e)(s?.game?.playersLabel), as: "span" })
        ] })
      ] }),
      /* @__PURE__ */ t(be, { id: "c4_board", className: "connect-four-board", as: "div", columns: 6, children: [
        "      ",
        /* @__PURE__ */ t(n, { id: "c4_cell_0", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 0 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_0", className: "connect-four-disc-anim", width: "82%", height: "82%", paused: !1, objectFit: "contain", speed: 1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[0]), animations: m, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_1", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 1 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_1", className: "connect-four-disc-anim", alt: "", speed: 1, width: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[1]), animations: m, height: "82%", paused: !1, preload: !0, autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_2", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", onClick: (...e) => d("playColumn", { column: 2 }, e), tabIndex: 0, role: "button", children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_2", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", alt: "", paused: !1, preload: !0, animations: m, imageRendering: "auto", speed: 1, width: "82%", height: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[2]), objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_3", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 3 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_3", className: "connect-four-disc-anim", autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", height: "82%", preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[3]), animations: m, alt: "", speed: 1, width: "82%", paused: !1 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_4", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 4 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_4", className: "connect-four-disc-anim", animations: m, alt: "", height: "82%", paused: !1, autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%", preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[4]) })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_5", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => d("playColumn", { column: 5 }, e), children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_5", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[5]), animations: m, speed: 1, width: "82%", preload: !0, autoPlay: !0, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", height: "82%", paused: !1 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_6", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 6 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_6", className: "connect-four-disc-anim", paused: !1, preload: !0, autoPlay: !0, objectFit: "contain", alt: "", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[6]), animations: m, imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%", height: "82%" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_7", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", onClick: (...e) => d("playColumn", { column: 0 }, e), tabIndex: 0, role: "button", children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_7", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[7]), imageClassName: "connect-four-disc-image", alt: "", width: "82%", paused: !1, preload: !0, autoPlay: !0, objectFit: "contain", animations: m, imageRendering: "auto", speed: 1, height: "82%" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_8", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => d("playColumn", { column: 1 }, e), children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_8", className: "connect-four-disc-anim", speed: 1, height: "82%", preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[8]), objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", width: "82%", paused: !1, animations: m })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_9", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 2 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_9", className: "connect-four-disc-anim", objectFit: "contain", imageClassName: "connect-four-disc-image", speed: 1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[9]), animations: m, imageRendering: "auto", alt: "", width: "82%", height: "82%", paused: !1, preload: !0, autoPlay: !0 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_10", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 3 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_10", className: "connect-four-disc-anim", speed: 1, preload: !0, autoPlay: !0, objectFit: "contain", animations: m, imageClassName: "connect-four-disc-image", width: "82%", height: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[10]), imageRendering: "auto", alt: "" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_11", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 4 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_11", className: "connect-four-disc-anim", objectFit: "contain", animations: m, speed: 1, width: "82%", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", height: "82%", paused: !1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[11]) })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_12", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 5 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_12", className: "connect-four-disc-anim", alt: "", speed: 1, autoPlay: !0, animations: m, imageClassName: "connect-four-disc-image", imageRendering: "auto", width: "82%", height: "82%", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[12]), objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_13", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", onClick: (...e) => d("playColumn", { column: 6 }, e), tabIndex: 0, role: "button", children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_13", className: "connect-four-disc-anim", objectFit: "contain", imageRendering: "auto", alt: "", height: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[13]), animations: m, imageClassName: "connect-four-disc-image", speed: 1, width: "82%", paused: !1, preload: !0, autoPlay: !0 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_14", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 0 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_14", className: "connect-four-disc-anim", alt: "", height: "82%", paused: !1, preload: !0, objectFit: "contain", animations: m, imageClassName: "connect-four-disc-image", speed: 1, width: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[14]), imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_15", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 1 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_15", className: "connect-four-disc-anim", alt: "", width: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[15]), animations: m, imageClassName: "connect-four-disc-image", speed: 1, height: "82%", preload: !0, autoPlay: !0, objectFit: "contain", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_16", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 2 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_16", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", alt: "", height: "82%", preload: !0, autoPlay: !0, animations: m, imageRendering: "auto", speed: 1, width: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[16]), objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_17", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 3 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_17", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[17]), paused: !1, objectFit: "contain", animations: m })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_18", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 4 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_18", className: "connect-four-disc-anim", animations: m, imageClassName: "connect-four-disc-image", alt: "", width: "82%", autoPlay: !0, objectFit: "contain", imageRendering: "auto", speed: 1, height: "82%", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[18]) })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_19", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 5 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_19", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", paused: !1, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[19]), animations: m, speed: 1, width: "82%", height: "82%", preload: !0, objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_20", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", tabIndex: 0, role: "button", onClick: (...e) => d("playColumn", { column: 6 }, e), children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_20", className: "connect-four-disc-anim", preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[20]), imageRendering: "auto", alt: "", paused: !1, autoPlay: !0, objectFit: "contain", animations: m, imageClassName: "connect-four-disc-image", speed: 1, width: "82%", height: "82%" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_21", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 0 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_21", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[21]), imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, height: "82%", preload: !0, objectFit: "contain", animations: m, width: "82%", paused: !1, autoPlay: !0 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_22", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 1 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_22", className: "connect-four-disc-anim", alt: "", width: "82%", height: "82%", preload: !0, autoPlay: !0, imageClassName: "connect-four-disc-image", speed: 1, paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[22]), objectFit: "contain", animations: m, imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_23", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 2 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_23", className: "connect-four-disc-anim", imageRendering: "auto", speed: 1, width: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[23]), imageClassName: "connect-four-disc-image", alt: "", height: "82%", preload: !0, autoPlay: !0, objectFit: "contain", animations: m })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_24", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", onClick: (...e) => d("playColumn", { column: 3 }, e), tabIndex: 0, role: "button", children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_24", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, height: "82%", paused: !1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[24]), animations: m, alt: "", width: "82%", objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_25", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", onClick: (...e) => d("playColumn", { column: 4 }, e), tabIndex: 0, role: "button", children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_25", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[25]), objectFit: "contain", autoPlay: !0, animations: m })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_26", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 5 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_26", className: "connect-four-disc-anim", imageRendering: "auto", alt: "", speed: 1, width: "82%", paused: !1, preload: !0, autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[26]), animations: m, height: "82%", objectFit: "contain", imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_27", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 6 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_27", className: "connect-four-disc-anim", imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[27]), objectFit: "contain", autoPlay: !0, animations: m, imageClassName: "connect-four-disc-image" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_28", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 0 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_28", className: "connect-four-disc-anim", alt: "", speed: 1, height: "82%", paused: !1, preload: !0, autoPlay: !0, animations: m, width: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[28]), objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_29", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 1 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_29", className: "connect-four-disc-anim", preload: !0, autoPlay: !0, objectFit: "contain", animations: m, imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[29]), width: "82%", height: "82%" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_30", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 2 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_30", className: "connect-four-disc-anim", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[30]), animations: m, alt: "", paused: !1, objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%", height: "82%", preload: !0, autoPlay: !0 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_31", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 3 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_31", className: "connect-four-disc-anim", alt: "", speed: 1, height: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[31]), animations: m, imageClassName: "connect-four-disc-image", width: "82%", paused: !1, preload: !0, objectFit: "contain", imageRendering: "auto" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_32", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 4 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_32", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, width: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[32]), animations: m, alt: "", height: "82%", paused: !1, preload: !0, objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_33", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 5 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_33", className: "connect-four-disc-anim", imageClassName: "connect-four-disc-image", imageRendering: "auto", speed: 1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[33]), animations: m, alt: "", width: "82%", height: "82%", paused: !1, autoPlay: !0, objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_34", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", onClick: (...e) => d("playColumn", { column: 6 }, e), tabIndex: 0, role: "button", children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_34", className: "connect-four-disc-anim", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[34]), objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", width: "82%", paused: !1, preload: !0, animations: m, alt: "", speed: 1, height: "82%" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_35", "aria-label": "Drop a disc in column 1", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 0 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_35", className: "connect-four-disc-anim", objectFit: "contain", imageClassName: "connect-four-disc-image", alt: "", speed: 1, width: "82%", preload: !0, autoPlay: !0, animations: m, imageRendering: "auto", height: "82%", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[35]) })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_36", "aria-label": "Drop a disc in column 2", className: "connect-four-cell", onClick: (...e) => d("playColumn", { column: 1 }, e), tabIndex: 0, role: "button", children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_36", className: "connect-four-disc-anim", paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[36]), animations: m, imageClassName: "connect-four-disc-image", alt: "", height: "82%", preload: !0, autoPlay: !0, objectFit: "contain", imageRendering: "auto", speed: 1, width: "82%" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_37", "aria-label": "Drop a disc in column 3", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 2 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_37", className: "connect-four-disc-anim", paused: !1, preload: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[37]), objectFit: "contain", imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", speed: 1, width: "82%", autoPlay: !0, animations: m, height: "82%" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_38", "aria-label": "Drop a disc in column 4", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 3 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_38", className: "connect-four-disc-anim", preload: !0, animations: m, imageRendering: "auto", speed: 1, width: "82%", height: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[38]), objectFit: "contain", imageClassName: "connect-four-disc-image", alt: "", paused: !1 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_39", "aria-label": "Drop a disc in column 5", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 4 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_39", className: "connect-four-disc-anim", objectFit: "contain", imageClassName: "connect-four-disc-image", width: "82%", height: "82%", autoPlay: !0, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[39]), animations: m, imageRendering: "auto", alt: "", speed: 1, paused: !1, preload: !0 })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_40", "aria-label": "Drop a disc in column 6", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 5 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_40", className: "connect-four-disc-anim", animations: m, speed: 1, paused: !1, animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[40]), imageClassName: "connect-four-disc-image", imageRendering: "auto", alt: "", width: "82%", height: "82%", preload: !0, autoPlay: !0, objectFit: "contain" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_cell_41", "aria-label": "Drop a disc in column 7", className: "connect-four-cell", role: "button", onClick: (...e) => d("playColumn", { column: 6 }, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(u, { id: "c4_disc_41", className: "connect-four-disc-anim", paused: !1, preload: !0, autoPlay: !0, objectFit: "contain", imageRendering: "auto", alt: "", speed: 1, width: "82%", height: "82%", animation: /* @__PURE__ */ ((e) => e === void 0 ? "○" : e)(s?.game?.board?.[41]), animations: m, imageClassName: "connect-four-disc-image" })
        ] })
      ] }),
      /* @__PURE__ */ t(n, { id: "c4_footer", className: "connect-four-footer", children: [
        "      ",
        /* @__PURE__ */ t(n, { id: "c4_reset", className: "connect-four-reset", role: "button", onClick: (...e) => d("resetGame", {}, e), tabIndex: 0, children: [
          "      ",
          /* @__PURE__ */ o(v, { id: "c4_reset_label", className: "connect-four-reset-label", as: "span", content: "Reset shared game" })
        ] }),
        /* @__PURE__ */ t(n, { id: "c4_connection", className: "connect-four-connection", children: [
          "      ",
          /* @__PURE__ */ o(v, { id: "c4_connection_label", className: "connect-four-inline-label", as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "connecting" : e)(s?.status) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Ce as default
};
