import { jsx as O, jsxs as l, Fragment as f } from "react/jsx-runtime";
import D, { useState as M, useEffect as U, useRef as ee, useCallback as z } from "react";
import { Box as T } from "@rudra-studio/rudra-layout";
import { AppHeader as te } from "@rudra-studio/leadflow-ui";
import { Typography as ne, Link as J } from "@rudra-studio/rudra-core";
import * as I from "lucide-react";
const G = (e) => String(e || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), re = (e) => {
  let r = e;
  for (; r && typeof r == "object" && "type" in r && "value" in r; )
    r = r.value;
  return r;
};
function Z({ icon: e, size: r, color: H, strokeWidth: g, className: j = "", style: N, ...A }) {
  const a = re(e), [x, k] = M(null), i = a && typeof a == "object" ? JSON.stringify(a) : String(a || "");
  U(() => {
    const S = new AbortController();
    let $ = "", w = "";
    if (k(null), typeof a == "string") {
      const s = a.trim();
      if (I[s]) return () => S.abort();
      s.startsWith("<svg") ? w = s : (/^https?:\/\//.test(s) || s.startsWith("/") || s.startsWith("data:image/svg")) && ($ = s);
    } else a && typeof a == "object" && (a.iconType === "svg" && a.svgContent ? w = a.svgContent : a.iconType === "url" && a.url && ($ = a.url));
    return w ? k(G(w)) : $ && fetch($, { signal: S.signal }).then((s) => {
      if (!s.ok) throw new Error("Icon request failed (" + s.status + ")");
      return s.text();
    }).then((s) => {
      s.trim().startsWith("<svg") && k(G(s));
    }).catch((s) => {
      s.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", s);
    }), () => S.abort();
  }, [i]);
  const d = a && typeof a == "object" ? a.props || {} : {}, b = { ...d };
  delete b.size, delete b.color, delete b.strokeWidth;
  const E = r ?? d.size ?? 24, q = H ?? d.color ?? "currentColor", P = g ?? d.strokeWidth ?? 1.5;
  let v = "";
  if (typeof a == "string" && I[a] ? v = a : a && typeof a == "object" && a.name && (!a.iconType || a.iconType === "lucide") && (v = a.name), v) {
    const S = I[v];
    if (S)
      return D.createElement(S, {
        size: E,
        color: q,
        strokeWidth: P,
        className: j,
        style: N,
        ...b,
        ...A
      });
  }
  if (x)
    return D.createElement("span", {
      ...b,
      ...A,
      className: ("rudra-universal-icon " + j).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: E,
        height: E,
        color: q,
        ...N
      },
      dangerouslySetInnerHTML: {
        __html: x.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + P + '">')
      }
    });
  const L = I.LayoutGrid;
  return D.createElement(L, {
    size: E,
    color: q,
    strokeWidth: P,
    className: j,
    style: N,
    ...b,
    ...A
  });
}
function ue(e) {
  const r = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || r.applicationState, e.pageState || r.pageState, e.pageData || r.pageData;
  const H = {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  };
  e.$route ?? e.route ?? e.data?.$route ?? e.data?.route ?? e.runtime?.data?.$route ?? e.runtime?.route ?? r?.$route ?? r?.route, e.$params ?? e.routeParams ?? e.params ?? e.data?.$params ?? e.data?.routeParams ?? e.data?.params ?? e.runtime?.data?.$params ?? e.runtime?.route?.params ?? e.runtime?.routeParams ?? e.runtime?.params ?? r?.$params ?? r?.routeParams ?? r?.params, e.$query ?? e.queryParams ?? e.query ?? e.data?.$query ?? e.data?.queryParams ?? e.data?.query ?? e.runtime?.data?.$query ?? e.runtime?.route?.query ?? e.runtime?.queryParams ?? e.runtime?.query ?? r?.$query ?? r?.queryParams ?? r?.query, e.$auth ?? e.auth ?? e.data?.$auth ?? e.data?.auth ?? e.runtime?.data?.$auth ?? e.runtime?.authInfo ?? e.runtime?.auth ?? r?.$auth ?? r?.auth, e.$config ?? e.config ?? e.data?.$config ?? e.data?.config ?? e.runtime?.data?.$config ?? e.runtime?.config ?? r?.$config ?? r?.config, e.$env ?? e.env ?? e.data?.$env ?? e.data?.env ?? e.runtime?.data?.$env ?? e.runtime?.env ?? r?.$env ?? r?.env, e.$locale ?? e.locale ?? e.data?.$locale ?? e.data?.locale ?? e.runtime?.data?.$locale ?? e.runtime?.locale ?? r?.$locale ?? r?.locale, e.$translations ?? e.translations ?? e.data?.$translations ?? e.data?.translations ?? e.runtime?.data?.$translations ?? e.runtime?.translations ?? r?.$translations ?? r?.translations, e.$i18n ?? e.i18n ?? e.data?.$i18n ?? e.data?.i18n ?? e.runtime?.data?.$i18n ?? e.runtime?.i18n ?? r?.$i18n ?? r?.i18n;
  const g = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, j = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [N, A] = M(() => g ?? j());
  U(() => {
    g != null && A(g);
  }, [g]), U(() => {
    if (g != null || typeof document > "u") return;
    const t = document.documentElement, n = (u) => A(u?.detail?.theme ?? j()), o = new MutationObserver(n);
    return o.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", n), n(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", n);
    };
  }, [g]);
  const a = ee(null), [x, k] = M("lg");
  U(() => {
    if (!a.current) return;
    const t = new ResizeObserver((n) => {
      for (let o of n) {
        const u = o.contentRect.width;
        u < 768 ? k("sm") : u < 1024 ? k("md") : k("lg");
      }
    });
    return t.observe(a.current), () => t.disconnect();
  }, []);
  const i = z((t) => {
    if (typeof t != "object" || t === null) return t;
    const n = x === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : x === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm;
    return n && typeof n == "object" && n.type === "static" && Object.prototype.hasOwnProperty.call(n, "value") ? n.value : n;
  }, [x]), d = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, b = e.children !== void 0 ? e.children : e.data?.children !== void 0 ? e.data.children : void 0, E = e.userName !== void 0 ? e.userName : e.data?.userName !== void 0 ? e.data.userName : "rudra", q = e.avatarUrl !== void 0 ? e.avatarUrl : e.data?.avatarUrl !== void 0 ? e.data.avatarUrl : void 0, P = e.userEmail !== void 0 ? e.userEmail : e.data?.userEmail !== void 0 ? e.data.userEmail : "rudra@rudraapp.in", v = { children: b, userName: E, avatarUrl: q, userEmail: P }, [L, S] = M(() => structuredClone("")), $ = { searchString: L }, w = z((t, n) => {
    if (t === "searchString") {
      const o = typeof n == "function" ? n($.searchString) : n;
      return $.searchString = o, S(o), o;
    } else
      return n;
  }, [$]);
  z((t, n) => {
    const [o, ...u] = String(t || "").split(".");
    if (!o) return n;
    if (u.length === 0) return w(o, n);
    const y = (c) => {
      const h = Array.isArray(c) ? [...c] : { ...c || {} };
      let m = h;
      return u.forEach((_, C) => {
        C === u.length - 1 ? m[_] = n : (m[_] = Array.isArray(m[_]) ? [...m[_]] : { ...m[_] || {} }, m = m[_]);
      }), h;
    };
    return o === "searchString" && w("searchString", y), n;
  }, [w]);
  const s = { "output_5562270e-9b19-4d81-9927-4ed00a254d84": { properties: { source: { type: "string" } }, required: ["source"], type: "object" }, "output_dcfd049c-046c-4528-bd69-db49860ba8ff": { properties: { searchString: { type: "string" } }, required: ["searchString"], type: "object" }, "output_f4a4febd-f2c7-423c-a5ca-11552d44fe6e": { properties: {}, type: "object" } }, V = (t, n, o) => {
    if (!n || typeof n != "object") return "";
    const u = Array.isArray(n.type) ? n.type : n.type ? [n.type] : [], y = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (u.length && !u.includes(y) && !(y === "integer" && u.includes("number"))) return o + " must be " + u.join(" or ") + ".";
    if (n.enum && !n.enum.some((c) => JSON.stringify(c) === JSON.stringify(t))) return o + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const c of n.required || []) if (!Object.prototype.hasOwnProperty.call(t, c)) return o + "." + c + " is required.";
      for (const [c, h] of Object.entries(n.properties || {})) if (Object.prototype.hasOwnProperty.call(t, c)) {
        const m = V(t[c], h, o + "." + c);
        if (m) return m;
      }
    }
    if (Array.isArray(t) && n.items) for (let c = 0; c < t.length; c++) {
      const h = V(t[c], n.items, o + "[" + c + "]");
      if (h) return h;
    }
    return "";
  }, R = z(async (t, n, o = !1) => {
    const u = s[t];
    if (!u) throw new Error("Module output '" + t + "' is not declared.");
    const y = V(n, u, "output." + t);
    if (y) throw new Error(y);
    const c = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof c != "function") return n;
    const h = c(t, n, { moduleId: e.moduleId, awaitHandlers: o });
    return o ? await h : n;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]);
  async function K(t = {}) {
    await R("output_5562270e-9b19-4d81-9927-4ed00a254d84", { source: "authenticated-layout" }, !0);
  }
  async function Q(t = {}) {
    const n = t || {};
    if (w("searchString", n.searchString), n.searchString?.length > 3)
      await R("output_dcfd049c-046c-4528-bd69-db49860ba8ff", { searchString: n.searchString }, !0);
    else
      return;
  }
  async function X(t = {}) {
    await R("output_f4a4febd-f2c7-423c-a5ca-11552d44fe6e", { empty: "" }, !0);
  }
  const Y = {
    signOut: K,
    onSearchChange: Q,
    createWorkspace: X
  }, p = {
    signOut: ["event"],
    onSearchChange: ["searchString"],
    createWorkspace: []
  }, F = (t, n = {}, o = []) => {
    const u = Y[t];
    if (u) {
      const _ = p[t] || [];
      return u(Object.fromEntries(_.map((C, B) => {
        const W = Object.prototype.hasOwnProperty.call(n, C) ? n[C] : void 0;
        return [C, (W === "" || W === void 0) && o[B] !== void 0 ? o[B] : C === "event" && (W === "" || W === void 0) ? o[0] : W];
      })));
    }
    const y = H?.[t];
    if (typeof y == "function")
      return y(Object.keys(n).length > 0 ? n : o[0]);
    const [c, h] = String(t).split("."), m = typeof globalThis < "u" ? globalThis[c]?.[h] : void 0;
    if (typeof m == "function") return m(...Object.values(n));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ O("div", { ref: a, className: "rudra-module-wrapper", children: d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
    "      ",
    /* @__PURE__ */ l(T, { id: "el_1791073881947_6a9oh9x", className: `${i({ sm: "authenticated-layout" }) || ""}`, children: [
      "      ",
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
        "      ",
        /* @__PURE__ */ O(te, { id: "el_1791073888602_ta3i06u", onSignOut: (...t) => F("createWorkspace", {}, t), userEmail: v?.userEmail, primaryActionIcon: /* @__PURE__ */ O(Z, { icon: i({ sm: { iconType: "lucide", name: "Plus", props: { color: "#000000", size: 18, strokeWidth: 1.5 } } }) }), ariaLabel: i({ sm: "Workspace Header" }), description: i({ sm: "Choose a workspace to continue" }), primaryActionLabel: i({ sm: "Create workspace" }), showAccountSettings: !1, showMenuTrigger: i({ sm: !1 }), userName: v?.userName, showSearch: i({ sm: !0 }), showUserMenu: i({ sm: !0 }), userAvatarUrl: v?.avatarUrl, onSearchChange: (...t) => F("onSearchChange", {}, t), searchValue: L, onPrimaryAction: (...t) => F("signOut", { event: "" }, t), notificationCount: i({ sm: 0 }), showNotifications: i({ sm: !1 }), showPrimaryAction: i({ sm: !0 }), title: i({ sm: "Workspaces" }) })
      ] }),
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
        "      ",
        /* @__PURE__ */ l(T, { id: "el_1791073897025_7amwznk", children: [
          "      ",
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
            "      ",
            /* @__PURE__ */ O(T, { id: "el_1791073901971_e90mron", children: v?.children })
          ] })
        ] })
      ] }),
      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
        "      ",
        /* @__PURE__ */ l(T, { id: "el_1791074116515_mmn0th9", className: `flex ${i({ sm: "flex items-center justify-between p-2" }) || ""}`, children: [
          "      ",
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
            "      ",
            /* @__PURE__ */ O(ne, { id: "el_1791074287339_6c1kv3x", className: `${i({ sm: "text-center text-xs text-slate-400 dark:text-slate-500" }) || ""}`, content: i({ sm: " © 2026 LeadFlow. All rights reserved." }) })
          ] }),
          d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
            "      ",
            /* @__PURE__ */ l(T, { id: "el_1791074298490_f1wsnio", className: `${i({ sm: "cta-group" }) || ""}`, children: [
              "      ",
              d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
                "      ",
                /* @__PURE__ */ l(J, { id: "el_1791074352003_j5nck95", children: [
                  "      ",
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
                    "      ",
                    /* @__PURE__ */ O(Z, { icon: i({ sm: { iconType: "svg", svgContent: `<svg
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
                  d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
                    "      ",
                    /* @__PURE__ */ l(J, { id: "el_1791074380507_glkjt3l", children: [
                      "      ",
                      d(i({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ l(f, { children: [
                        "      ",
                        /* @__PURE__ */ O(Z, { icon: i({ sm: { iconType: "svg", svgContent: `<svg
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
  ue as default
};
