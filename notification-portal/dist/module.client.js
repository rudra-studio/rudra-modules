import { jsx as _, jsxs as c, Fragment as l } from "react/jsx-runtime";
import { useState as h, useEffect as p, useRef as R, useCallback as A } from "react";
import { Typography as K, IconButton as st, Alert as rt } from "@rudra-studio/rudra-core";
import { Box as v, Repeater as ct } from "@rudra-studio/rudra-layout";
function ft(n) {
  const O = n.serverData || n.serverState || {};
  n.sharedState, n.applicationState || O.applicationState, n.pageState || O.pageState, n.pageData || O.pageData;
  const Q = {
    ...n.runtime?.functions || {},
    ...n.runtime?.actions || {},
    ...n.functions || {},
    ...n.actions || {}
  }, f = n.$theme ?? n.theme ?? n.data?.$theme ?? n.runtime?.data?.$theme ?? n.runtime?.theme, D = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [U, E] = h(() => f ?? D());
  p(() => {
    f != null && E(f);
  }, [f]), p(() => {
    if (f != null || typeof document > "u") return;
    const t = document.documentElement, i = (o) => E(o?.detail?.theme ?? D()), e = new MutationObserver(i);
    return e.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      e.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [f]);
  const x = R(null), [S, j] = h("lg");
  p(() => {
    if (!x.current) return;
    const t = new ResizeObserver((i) => {
      for (let e of i) {
        const o = e.contentRect.width;
        o < 768 ? j("sm") : o < 1024 ? j("md") : j("lg");
      }
    });
    return t.observe(x.current), () => t.disconnect();
  }, []);
  const a = A((t) => typeof t != "object" || t === null ? t : S === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : S === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [S]), u = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, W = n.dismissible !== void 0 ? n.dismissible : n.data?.dismissible !== void 0 ? n.data.dismissible : !0, X = n.maxNotifications !== void 0 ? n.maxNotifications : n.data?.maxNotifications !== void 0 ? n.data.maxNotifications : 4, $ = { dismissible: W, maxNotifications: X }, [at, M] = h(() => structuredClone("")), [Z, P] = h(() => structuredClone("Dismiss notification")), [T, q] = h(() => structuredClone([])), [H, B] = h(() => structuredClone(!1)), [V, I] = h(() => structuredClone("info")), [tt, z] = h(() => structuredClone("")), N = { notifications: T }, g = A((t, i) => {
    switch (t) {
      case "message":
        return M(i), i;
      case "closeLabel":
        return P(i), i;
      case "notifications":
        return q(i), i;
      case "visible":
        return B(i), i;
      case "variant":
        return I(i), i;
      case "title":
        return z(i), i;
      default:
        return i;
    }
  }, []);
  A((t, i) => {
    const [e, ...o] = String(t || "").split(".");
    if (!e) return i;
    if (o.length === 0) return g(e, i);
    const r = (s) => {
      const d = Array.isArray(s) ? [...s] : { ...s || {} };
      let m = d;
      return o.forEach((y, b) => {
        b === o.length - 1 ? m[y] = i : (m[y] = Array.isArray(m[y]) ? [...m[y]] : { ...m[y] || {} }, m = m[y]);
      }), d;
    };
    switch (e) {
      case "message":
        return M(r), i;
      case "closeLabel":
        return P(r), i;
      case "notifications":
        return q(r), i;
      case "visible":
        return B(r), i;
      case "variant":
        return I(r), i;
      case "title":
        return z(r), i;
      default:
        return i;
    }
  }, [g]);
  const it = { notification_dismissed: { properties: { id: { type: "string" }, reason: { type: "string" }, remaining: { type: "number" }, title: { type: "string" }, variant: { type: "string" } }, required: ["reason", "id", "variant", "title", "remaining"], type: "object" } }, C = (t, i, e) => {
    if (!i || typeof i != "object") return "";
    const o = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], r = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (o.length && !o.includes(r) && !(r === "integer" && o.includes("number"))) return e + " must be " + o.join(" or ") + ".";
    if (i.enum && !i.enum.some((s) => JSON.stringify(s) === JSON.stringify(t))) return e + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const s of i.required || []) if (!Object.prototype.hasOwnProperty.call(t, s)) return e + "." + s + " is required.";
      for (const [s, d] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(t, s)) {
        const m = C(t[s], d, e + "." + s);
        if (m) return m;
      }
    }
    if (Array.isArray(t) && i.items) for (let s = 0; s < t.length; s++) {
      const d = C(t[s], i.items, e + "[" + s + "]");
      if (d) return d;
    }
    return "";
  }, et = A(async (t, i, e = !1) => {
    const o = it[t];
    if (!o) throw new Error("Module output '" + t + "' is not declared.");
    const r = C(i, o, "output." + t);
    if (r) throw new Error(r);
    const s = n.onOutput || n.onModuleOutput || n.runtime?.onOutput;
    if (typeof s != "function") return i;
    const d = s(t, i, { moduleId: n.moduleId, awaitHandlers: e });
    return e ? await d : i;
  }, [n.onOutput, n.onModuleOutput, n.runtime?.onOutput, n.moduleId]);
  async function F(t = {}) {
    const i = t || {}, e = {};
    {
      i.event;
      const o = await (async () => (Array.isArray(N.notifications) ? N.notifications : []).filter((s) => String(s?.id) !== String(i.id)))();
      e.notification_step_filter = o;
    }
    g("notifications", e.notification_step_filter);
    {
      i.event;
      const o = await (async () => {
        const r = e.notification_step_filter;
        return Array.isArray(r) && r.length > 0;
      })();
      e.notification_step_has_remaining = o;
    }
    return g("visible", e.notification_step_has_remaining), et("notification_dismissed", { id: i.id, reason: "user", remaining: e.notification_step_filter.length, title: i.title, variant: i.variant }, !1).catch((o) => console.error("Module output delivery failed", o)), { dismissed: !0 };
  }
  async function J(t = {}) {
    const i = t || {}, e = {};
    {
      i.event;
      const o = await (async () => {
        const r = Array.isArray(N.notifications) ? N.notifications : [], s = Math.max(1, Math.min(8, Number($.maxNotifications) || 4)), d = {
          id: String(Date.now()) + "-" + String(Math.random()).slice(2, 8),
          variant: i.variant || "info",
          title: i.title || "Notification",
          message: i.message || "",
          closeLabel: i.closeLabel || "Dismiss notification"
        };
        return [...r, d].slice(-s);
      })();
      e.notification_step_build_stack = o;
    }
    return g("notifications", e.notification_step_build_stack), g("visible", !0), { visible: !0 };
  }
  const nt = {
    dismissNotification: F,
    showNotification: J
  }, L = R({});
  L.current = {
    notification_dismiss: (t = {}, i = {}) => F({ ...t, signal: i.signal }),
    notification_show: (t = {}, i = {}) => J({ ...t, signal: i.signal })
  };
  const k = R(null);
  k.current || (k.current = {
    notification_dismiss: (t, i) => L.current.notification_dismiss(t, i),
    notification_show: (t, i) => L.current.notification_show(t, i)
  }), p(() => {
    const t = n.registerCommands || n.runtime?.registerCommands;
    if (typeof t == "function")
      return t(k.current);
  }, [n.registerCommands, n.runtime?.registerCommands]);
  const ot = {
    dismissNotification: ["id", "title", "variant", "reason"],
    showNotification: ["variant", "title", "message", "closeLabel"]
  }, Y = (t, i = {}, e = []) => {
    const o = nt[t];
    if (o) {
      const y = ot[t] || [];
      return o(Object.fromEntries(y.map((b, G) => {
        const w = Object.prototype.hasOwnProperty.call(i, b) ? i[b] : void 0;
        return [b, (w === "" || w === void 0) && e[G] !== void 0 ? e[G] : b === "event" && (w === "" || w === void 0) ? e[0] : w];
      })));
    }
    const r = Q?.[t];
    if (typeof r == "function")
      return r(Object.keys(i).length > 0 ? i : e[0]);
    const [s, d] = String(t).split("."), m = typeof globalThis < "u" ? globalThis[s]?.[d] : void 0;
    if (typeof m == "function") return m(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ _("div", { ref: x, className: "rudra-module-wrapper", children: u(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
    "      ",
    /* @__PURE__ */ c(v, { id: "notification_portal", "data-notification-shell": "", "data-theme": /* @__PURE__ */ ((t) => t === void 0 ? "light" : t)(U), className: `${a({ sm: "block rudra-notification-shell" }) || ""}`, children: [
      "      ",
      u(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(H)) && /* @__PURE__ */ c(l, { children: [
        "      ",
        /* @__PURE__ */ c(v, { id: "notification_position", "data-rudra-notification": "", "data-rudra-notification-position": "", className: `${a({ sm: "block rudra-notification-position" }) || ""}`, children: [
          "      ",
          u(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
            "      ",
            /* @__PURE__ */ _(ct, { id: "notification_card", className: "rudra-notification-stack", items: /* @__PURE__ */ ((t) => t === void 0 ? [] : t)(T), children: (t) => (() => {
              const i = { ...t || {}, item: t?.item ?? t, index: t?.index ?? t?.i ?? 0 };
              return /* @__PURE__ */ c(l, { children: [
                "      ",
                u(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                  "      ",
                  /* @__PURE__ */ c(v, { id: "notification_item", role: "status", "aria-live": "polite", className: `${a({ sm: "flex rudra-notification-item" }) || ""}`, children: [
                    "      ",
                    u(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                      "      ",
                      /* @__PURE__ */ c(v, { id: "notification_copy", className: `${a({ sm: "block rudra-notification-copy" }) || ""}`, children: [
                        "      ",
                        u(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                          "      ",
                          /* @__PURE__ */ _(K, { id: "notification_title", className: `${a({ sm: "rudra-notification-title" }) || ""}`, as: "div", content: /* @__PURE__ */ ((e) => e === void 0 ? "Notification" : e)(i?.item?.title) })
                        ] }),
                        u(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
                          "      ",
                          /* @__PURE__ */ _(K, { id: "notification_message", className: `${a({ sm: "rudra-notification-message" }) || ""}`, as: "div", content: /* @__PURE__ */ ((e) => e === void 0 ? "Your notification is ready." : e)(i?.item?.message) })
                        ] })
                      ] })
                    ] }),
                    u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)($?.dismissible)) && /* @__PURE__ */ c(l, { children: [
                      "      ",
                      /* @__PURE__ */ _(st, { id: "notification_close", className: "rudra-notification-dismiss", onClick: (...e) => Y("dismissNotification", { id: { dataPath: "item.id", type: "binding" }, title: { dataPath: "item.title", type: "binding" }, variant: { dataPath: "item.variant", type: "binding" } }, e), variant: "ghost", ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Dismiss notification" : e)(i?.item?.closeLabel), icon: "✕", size: "sm", type: "button", theme: "auto" })
                    ] })
                  ] })
                ] })
              ] });
            })() })
          ] }),
          u(a({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ c(l, { children: [
            "      ",
            /* @__PURE__ */ _(rt, { id: "notification_alert", className: "rudra-notification-legacy-alert", onDismiss: (...t) => Y("dismissNotification", {}, t), dismissible: !0, live: "polite", title: /* @__PURE__ */ ((t) => t === void 0 ? "Notification" : t)(tt), hidden: !0, appearance: "soft", closeLabel: /* @__PURE__ */ ((t) => t === void 0 ? "Dismiss notification" : t)(Z), theme: "auto", variant: /* @__PURE__ */ ((t) => t === void 0 ? "info" : t)(V) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ft as default
};
