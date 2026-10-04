import { jsx as S, jsxs as l, Fragment as m } from "react/jsx-runtime";
import M, { useState as H, useEffect as z, useRef as X, useCallback as L } from "react";
import { Box as P } from "@rudra-studio/rudra-layout";
import { AppHeader as Y } from "@rudra-studio/leadflow-ui";
import { Typography as p, Link as D } from "@rudra-studio/rudra-core";
import * as W from "lucide-react";
const Z = (t) => String(t || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), tt = (t) => {
  let r = t;
  for (; r && typeof r == "object" && "type" in r && "value" in r; )
    r = r.value;
  return r;
};
function U({ icon: t, size: r, color: I, strokeWidth: h, className: _ = "", style: T, ...O }) {
  const a = tt(t), [j, $] = H(null), i = a && typeof a == "object" ? JSON.stringify(a) : String(a || "");
  z(() => {
    const g = new AbortController();
    let x = "", v = "";
    if ($(null), typeof a == "string") {
      const c = a.trim();
      if (W[c]) return () => g.abort();
      c.startsWith("<svg") ? v = c : (/^https?:\/\//.test(c) || c.startsWith("/") || c.startsWith("data:image/svg")) && (x = c);
    } else a && typeof a == "object" && (a.iconType === "svg" && a.svgContent ? v = a.svgContent : a.iconType === "url" && a.url && (x = a.url));
    return v ? $(Z(v)) : x && fetch(x, { signal: g.signal }).then((c) => {
      if (!c.ok) throw new Error("Icon request failed (" + c.status + ")");
      return c.text();
    }).then((c) => {
      c.trim().startsWith("<svg") && $(Z(c));
    }).catch((c) => {
      c.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", c);
    }), () => g.abort();
  }, [i]);
  const d = a && typeof a == "object" ? a.props || {} : {}, y = { ...d };
  delete y.size, delete y.color, delete y.strokeWidth;
  const k = r ?? d.size ?? 24, E = I ?? d.color ?? "currentColor", A = h ?? d.strokeWidth ?? 1.5;
  let f = "";
  if (typeof a == "string" && W[a] ? f = a : a && typeof a == "object" && a.name && (!a.iconType || a.iconType === "lucide") && (f = a.name), f) {
    const g = W[f];
    if (g)
      return M.createElement(g, {
        size: k,
        color: E,
        strokeWidth: A,
        className: _,
        style: T,
        ...y,
        ...O
      });
  }
  if (j)
    return M.createElement("span", {
      ...y,
      ...O,
      className: ("rudra-universal-icon " + _).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: k,
        height: k,
        color: E,
        ...T
      },
      dangerouslySetInnerHTML: {
        __html: j.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + A + '">')
      }
    });
  const R = W.LayoutGrid;
  return M.createElement(R, {
    size: k,
    color: E,
    strokeWidth: A,
    className: _,
    style: T,
    ...y,
    ...O
  });
}
function ot(t) {
  const r = t.serverData || t.serverState || {};
  t.sharedState, t.applicationState || r.applicationState, t.pageState || r.pageState, t.pageData || r.pageData;
  const I = {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  };
  t.$route ?? t.route ?? t.data?.$route ?? t.data?.route ?? t.runtime?.data?.$route ?? t.runtime?.route ?? r?.$route ?? r?.route, t.$params ?? t.routeParams ?? t.params ?? t.data?.$params ?? t.data?.routeParams ?? t.data?.params ?? t.runtime?.data?.$params ?? t.runtime?.route?.params ?? t.runtime?.routeParams ?? t.runtime?.params ?? r?.$params ?? r?.routeParams ?? r?.params, t.$query ?? t.queryParams ?? t.query ?? t.data?.$query ?? t.data?.queryParams ?? t.data?.query ?? t.runtime?.data?.$query ?? t.runtime?.route?.query ?? t.runtime?.queryParams ?? t.runtime?.query ?? r?.$query ?? r?.queryParams ?? r?.query, t.$auth ?? t.auth ?? t.data?.$auth ?? t.data?.auth ?? t.runtime?.data?.$auth ?? t.runtime?.authInfo ?? t.runtime?.auth ?? r?.$auth ?? r?.auth, t.$config ?? t.config ?? t.data?.$config ?? t.data?.config ?? t.runtime?.data?.$config ?? t.runtime?.config ?? r?.$config ?? r?.config, t.$env ?? t.env ?? t.data?.$env ?? t.data?.env ?? t.runtime?.data?.$env ?? t.runtime?.env ?? r?.$env ?? r?.env, t.$locale ?? t.locale ?? t.data?.$locale ?? t.data?.locale ?? t.runtime?.data?.$locale ?? t.runtime?.locale ?? r?.$locale ?? r?.locale, t.$translations ?? t.translations ?? t.data?.$translations ?? t.data?.translations ?? t.runtime?.data?.$translations ?? t.runtime?.translations ?? r?.$translations ?? r?.translations, t.$i18n ?? t.i18n ?? t.data?.$i18n ?? t.data?.i18n ?? t.runtime?.data?.$i18n ?? t.runtime?.i18n ?? r?.$i18n ?? r?.i18n;
  const h = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, _ = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [T, O] = H(() => h ?? _());
  z(() => {
    h != null && O(h);
  }, [h]), z(() => {
    if (h != null || typeof document > "u") return;
    const e = document.documentElement, n = (s) => O(s?.detail?.theme ?? _()), o = new MutationObserver(n);
    return o.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [h]);
  const a = X(null), [j, $] = H("lg");
  z(() => {
    if (!a.current) return;
    const e = new ResizeObserver((n) => {
      for (let o of n) {
        const s = o.contentRect.width;
        s < 768 ? $("sm") : s < 1024 ? $("md") : $("lg");
      }
    });
    return e.observe(a.current), () => e.disconnect();
  }, []);
  const i = L((e) => typeof e != "object" || e === null ? e : j === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : j === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [j]), d = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, y = t.children !== void 0 ? t.children : t.data?.children !== void 0 ? t.data.children : void 0, k = t.userName !== void 0 ? t.userName : t.data?.userName !== void 0 ? t.data.userName : "rudra", E = t.avatarUrl !== void 0 ? t.avatarUrl : t.data?.avatarUrl !== void 0 ? t.data.avatarUrl : void 0, A = t.userEmail !== void 0 ? t.userEmail : t.data?.userEmail !== void 0 ? t.data.userEmail : "rudra@rudraapp.in", f = { children: y, userName: k, avatarUrl: E, userEmail: A }, g = L((e, n) => n, [{}]);
  L((e, n) => {
    const [o, ...s] = String(e || "").split(".");
    return o && s.length === 0 ? g(o, n) : n;
  }, [g]);
  const x = { "output_5562270e-9b19-4d81-9927-4ed00a254d84": { properties: { source: { type: "string" } }, required: ["source"], type: "object" }, "output_dcfd049c-046c-4528-bd69-db49860ba8ff": { properties: { searchString: { type: "string" } }, required: ["searchString"], type: "object" }, "output_f4a4febd-f2c7-423c-a5ca-11552d44fe6e": { properties: {}, type: "object" } }, v = (e, n, o) => {
    if (!n || typeof n != "object") return "";
    const s = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], w = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (s.length && !s.includes(w) && !(w === "integer" && s.includes("number"))) return o + " must be " + s.join(" or ") + ".";
    if (n.enum && !n.enum.some((u) => JSON.stringify(u) === JSON.stringify(e))) return o + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const u of n.required || []) if (!Object.prototype.hasOwnProperty.call(e, u)) return o + "." + u + " is required.";
      for (const [u, b] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(e, u)) {
        const C = v(e[u], b, o + "." + u);
        if (C) return C;
      }
    }
    if (Array.isArray(e) && n.items) for (let u = 0; u < e.length; u++) {
      const b = v(e[u], n.items, o + "[" + u + "]");
      if (b) return b;
    }
    return "";
  }, c = L(async (e, n, o = !1) => {
    const s = x[e];
    if (!s) throw new Error("Module output '" + e + "' is not declared.");
    const w = v(n, s, "output." + e);
    if (w) throw new Error(w);
    const u = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof u != "function") return n;
    const b = u(e, n, { moduleId: t.moduleId, awaitHandlers: o });
    return o ? await b : n;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]);
  async function B(e = {}) {
    await c("output_5562270e-9b19-4d81-9927-4ed00a254d84", null, !0);
  }
  async function J(e = {}) {
    const n = e || {};
    if (n.searchString?.length > 3)
      await c("output_dcfd049c-046c-4528-bd69-db49860ba8ff", { searchString: n.searchString }, !0);
    else
      return;
  }
  const G = {
    signOut: B,
    onSearchChange: J
  }, K = {
    signOut: ["event"],
    onSearchChange: ["searchString"]
  }, F = (e, n = {}, o = []) => {
    const s = G[e];
    if (s) {
      const Q = K[e] || [];
      return s(Object.fromEntries(Q.map((N, V) => {
        const q = Object.prototype.hasOwnProperty.call(n, N) ? n[N] : void 0;
        return [N, (q === "" || q === void 0) && o[V] !== void 0 ? o[V] : N === "event" && (q === "" || q === void 0) ? o[0] : q];
      })));
    }
    const w = I?.[e];
    if (typeof w == "function")
      return w(Object.keys(n).length > 0 ? n : o[0]);
    const [u, b] = String(e).split("."), C = typeof globalThis < "u" ? globalThis[u]?.[b] : void 0;
    if (typeof C == "function") return C(...Object.values(n));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ S("div", { ref: a, className: "rudra-module-wrapper", children: d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
    "      ",
    /* @__PURE__ */ l(P, { id: "el_1791073881947_6a9oh9x", className: `${i({ sm: "authenticated-layout" }) || ""}`, children: [
      "      ",
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
        "      ",
        /* @__PURE__ */ S(Y, { id: "el_1791073888602_ta3i06u", primaryActionIcon: /* @__PURE__ */ S(U, { icon: i({ sm: { iconType: "lucide", name: "Plus", props: { color: "#000000", size: 18, strokeWidth: 1.5 } } }) }), showNotifications: i({ sm: !1 }), title: i({ sm: "Workspaces" }), description: i({ sm: "Choose a workspace to continue" }), notificationCount: i({ sm: 0 }), primaryActionLabel: i({ sm: "Create workspace" }), showAccountSettings: !1, userName: f?.userName, showSearch: i({ sm: !0 }), userAvatarUrl: f?.avatarUrl, onSearchChange: (...e) => F("onSearchChange", {}, e), showMenuTrigger: i({ sm: !1 }), showPrimaryAction: i({ sm: !0 }), ariaLabel: i({ sm: "Workspace Header" }), onSignOut: (...e) => F("signOut", {}, e), userEmail: f?.userEmail, showUserMenu: i({ sm: !0 }) })
      ] }),
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
        "      ",
        /* @__PURE__ */ l(P, { id: "el_1791073897025_7amwznk", children: [
          "      ",
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ S(P, { id: "el_1791073901971_e90mron", children: f?.children })
          ] })
        ] })
      ] }),
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
        "      ",
        /* @__PURE__ */ l(P, { id: "el_1791074116515_mmn0th9", className: `flex ${i({ sm: "flex items-center justify-between p-2" }) || ""}`, children: [
          "      ",
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ S(p, { id: "el_1791074287339_6c1kv3x", className: `${i({ sm: "text-center text-xs text-slate-400 dark:text-slate-500" }) || ""}`, content: i({ sm: " © 2026 LeadFlow. All rights reserved." }) })
          ] }),
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
            "      ",
            /* @__PURE__ */ l(P, { id: "el_1791074298490_f1wsnio", className: `${i({ sm: "cta-group" }) || ""}`, children: [
              "      ",
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                "      ",
                /* @__PURE__ */ l(D, { id: "el_1791074352003_j5nck95", children: [
                  "      ",
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ S(U, { icon: i({ sm: { iconType: "svg", svgContent: `<svg
  viewBox="0 0 24 24"
  width="20"
  height="20"
  fill="#0A66C2"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45Z" />
</svg>` } }), id: "el_1791074365364_dditf3n", size: 20, color: "#111827", strokeWidth: 1.2 })
                  ] }),
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                    "      ",
                    /* @__PURE__ */ l(D, { id: "el_1791074380507_glkjt3l", children: [
                      "      ",
                      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(m, { children: [
                        "      ",
                        /* @__PURE__ */ S(U, { icon: i({ sm: { iconType: "svg", svgContent: `<svg
  viewBox="0 0 24 24"
  width="20"
  height="20"
  fill="#000000"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
</svg>` } }), id: "el_1791074384531_z08q6dx", size: 20, color: "#111827", strokeWidth: 1.2 })
                      ] })
                    ] })
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
  ot as default
};
