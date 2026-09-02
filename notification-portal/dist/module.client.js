import { jsx as w, jsxs as a, Fragment as u } from "react/jsx-runtime";
import { useState as b, useEffect as N, useRef as R, useCallback as x } from "react";
import { Typography as Y, IconButton as rt, Alert as ct } from "@rudra-studio/rudra-core";
import { Box as v, Repeater as at } from "@rudra-studio/rudra-layout";
function ut(n) {
  const A = n.serverData || n.serverState || {};
  n.sharedState, n.applicationState || A.applicationState, n.pageState || A.pageState, n.pageData || A.pageData;
  const G = {
    ...n.runtime?.functions || {},
    ...n.runtime?.actions || {},
    ...n.functions || {},
    ...n.actions || {}
  }, h = n.$theme ?? n.theme ?? n.data?.$theme ?? n.runtime?.data?.$theme ?? n.runtime?.theme, D = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [K, E] = b(() => h ?? D());
  N(() => {
    h != null && E(h);
  }, [h]), N(() => {
    if (h != null || typeof document > "u") return;
    const t = document.documentElement, i = (o) => E(o?.detail?.theme ?? D()), e = new MutationObserver(i);
    return e.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      e.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [h]);
  const O = R(null), [L, S] = b("lg");
  N(() => {
    if (!O.current) return;
    const t = new ResizeObserver((i) => {
      for (let e of i) {
        const o = e.contentRect.width;
        o < 768 ? S("sm") : o < 1024 ? S("md") : S("lg");
      }
    });
    return t.observe(O.current), () => t.disconnect();
  }, []);
  const d = x((t) => typeof t != "object" || t === null ? t : L === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : L === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [L]), y = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, Q = n.dismissible !== void 0 ? n.dismissible : n.data?.dismissible !== void 0 ? n.data.dismissible : !0, U = n.maxNotifications !== void 0 ? n.maxNotifications : n.data?.maxNotifications !== void 0 ? n.data.maxNotifications : 4, $ = { dismissible: Q, maxNotifications: U }, [M, W] = b(() => structuredClone([])), [P, X] = b(() => structuredClone(!1)), [T, Z] = b(() => structuredClone("info")), [q, H] = b(() => structuredClone("")), [V, tt] = b(() => structuredClone("")), [B, it] = b(() => structuredClone("Dismiss notification")), c = { notifications: M, visible: P, variant: T, title: q, message: V, closeLabel: B }, f = x((t, i) => {
    switch (t) {
      case "notifications": {
        const e = typeof i == "function" ? i(c.notifications) : i;
        return c.notifications = e, W(e), e;
      }
      case "visible": {
        const e = typeof i == "function" ? i(c.visible) : i;
        return c.visible = e, X(e), e;
      }
      case "variant": {
        const e = typeof i == "function" ? i(c.variant) : i;
        return c.variant = e, Z(e), e;
      }
      case "title": {
        const e = typeof i == "function" ? i(c.title) : i;
        return c.title = e, H(e), e;
      }
      case "message": {
        const e = typeof i == "function" ? i(c.message) : i;
        return c.message = e, tt(e), e;
      }
      case "closeLabel": {
        const e = typeof i == "function" ? i(c.closeLabel) : i;
        return c.closeLabel = e, it(e), e;
      }
      default:
        return i;
    }
  }, [c]);
  x((t, i) => {
    const [e, ...o] = String(t || "").split(".");
    if (!e) return i;
    if (o.length === 0) return f(e, i);
    const r = (s) => {
      const m = Array.isArray(s) ? [...s] : { ...s || {} };
      let l = m;
      return o.forEach((g, _) => {
        _ === o.length - 1 ? l[g] = i : (l[g] = Array.isArray(l[g]) ? [...l[g]] : { ...l[g] || {} }, l = l[g]);
      }), m;
    };
    switch (e) {
      case "notifications":
        return f("notifications", r), i;
      case "visible":
        return f("visible", r), i;
      case "variant":
        return f("variant", r), i;
      case "title":
        return f("title", r), i;
      case "message":
        return f("message", r), i;
      case "closeLabel":
        return f("closeLabel", r), i;
      default:
        return i;
    }
  }, [f]);
  const et = { notification_dismissed: { properties: { id: { type: "string" }, reason: { type: "string" }, remaining: { type: "number" }, title: { type: "string" }, variant: { type: "string" } }, required: ["reason", "id", "variant", "title", "remaining"], type: "object" } }, j = (t, i, e) => {
    if (!i || typeof i != "object") return "";
    const o = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], r = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (o.length && !o.includes(r) && !(r === "integer" && o.includes("number"))) return e + " must be " + o.join(" or ") + ".";
    if (i.enum && !i.enum.some((s) => JSON.stringify(s) === JSON.stringify(t))) return e + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const s of i.required || []) if (!Object.prototype.hasOwnProperty.call(t, s)) return e + "." + s + " is required.";
      for (const [s, m] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(t, s)) {
        const l = j(t[s], m, e + "." + s);
        if (l) return l;
      }
    }
    if (Array.isArray(t) && i.items) for (let s = 0; s < t.length; s++) {
      const m = j(t[s], i.items, e + "[" + s + "]");
      if (m) return m;
    }
    return "";
  }, nt = x(async (t, i, e = !1) => {
    const o = et[t];
    if (!o) throw new Error("Module output '" + t + "' is not declared.");
    const r = j(i, o, "output." + t);
    if (r) throw new Error(r);
    const s = n.onOutput || n.onModuleOutput || n.runtime?.onOutput;
    if (typeof s != "function") return i;
    const m = s(t, i, { moduleId: n.moduleId, awaitHandlers: e });
    return e ? await m : i;
  }, [n.onOutput, n.onModuleOutput, n.runtime?.onOutput, n.moduleId]);
  async function I(t = {}) {
    const i = t || {}, e = {};
    {
      i.event;
      const o = await (async () => {
        const r = Array.isArray(c.notifications) ? c.notifications : [], s = Math.max(1, Math.min(8, Number($.maxNotifications) || 4)), m = {
          id: String(Date.now()) + "-" + String(Math.random()).slice(2, 8),
          variant: i.variant || "info",
          title: i.title || "Notification",
          message: i.message || "",
          closeLabel: i.closeLabel || "Dismiss notification"
        };
        return [...r, m].slice(-s);
      })();
      e.notification_step_build_stack = o;
    }
    return f("notifications", e.notification_step_build_stack), f("visible", !0), { visible: !0 };
  }
  async function z(t = {}) {
    const i = t || {}, e = {};
    {
      i.event;
      const o = await (async () => (Array.isArray(c.notifications) ? c.notifications : []).filter((s) => String(s?.id) !== String(i.id)))();
      e.notification_step_filter = o;
    }
    f("notifications", e.notification_step_filter);
    {
      i.event;
      const o = await (async () => {
        const r = e.notification_step_filter;
        return Array.isArray(r) && r.length > 0;
      })();
      e.notification_step_has_remaining = o;
    }
    return f("visible", e.notification_step_has_remaining), nt("notification_dismissed", { id: i.id, reason: "user", remaining: e.notification_step_filter.length, title: i.title, variant: i.variant }, !1).catch((o) => console.error("Module output delivery failed", o)), { dismissed: !0 };
  }
  const ot = {
    showNotification: I,
    dismissNotification: z
  }, C = R({});
  C.current = {
    notification_dismiss: (t = {}, i = {}) => z({ ...t, signal: i.signal }),
    notification_show: (t = {}, i = {}) => I({ ...t, signal: i.signal })
  };
  const k = R(null);
  k.current || (k.current = {
    notification_dismiss: (t, i) => C.current.notification_dismiss(t, i),
    notification_show: (t, i) => C.current.notification_show(t, i)
  }), N(() => {
    const t = n.registerCommands || n.runtime?.registerCommands;
    if (typeof t == "function")
      return t(k.current);
  }, [n.registerCommands, n.runtime?.registerCommands]);
  const st = {
    showNotification: ["variant", "title", "message", "closeLabel"],
    dismissNotification: ["id", "title", "variant", "reason"]
  }, F = (t, i = {}, e = []) => {
    const o = ot[t];
    if (o) {
      const g = st[t] || [];
      return o(Object.fromEntries(g.map((_, J) => {
        const p = Object.prototype.hasOwnProperty.call(i, _) ? i[_] : void 0;
        return [_, (p === "" || p === void 0) && e[J] !== void 0 ? e[J] : _ === "event" && (p === "" || p === void 0) ? e[0] : p];
      })));
    }
    const r = G?.[t];
    if (typeof r == "function")
      return r(Object.keys(i).length > 0 ? i : e[0]);
    const [s, m] = String(t).split("."), l = typeof globalThis < "u" ? globalThis[s]?.[m] : void 0;
    if (typeof l == "function") return l(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ w("div", { ref: O, className: "rudra-module-wrapper", children: y(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(u, { children: [
    "      ",
    /* @__PURE__ */ a(v, { id: "notification_portal", "data-theme": /* @__PURE__ */ ((t) => t === void 0 ? "light" : t)(K), "data-notification-shell": "", className: `${d({ sm: "block rudra-notification-shell" }) || ""}`, children: [
      "      ",
      y(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(P)) && /* @__PURE__ */ a(u, { children: [
        "      ",
        /* @__PURE__ */ a(v, { id: "notification_position", "data-rudra-notification": "", "data-rudra-notification-position": "", className: `${d({ sm: "block rudra-notification-position" }) || ""}`, children: [
          "      ",
          y(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(u, { children: [
            "      ",
            /* @__PURE__ */ w(at, { id: "notification_card", className: "rudra-notification-stack", items: /* @__PURE__ */ ((t) => t === void 0 ? [] : t)(M), children: (t) => (() => {
              const i = { ...t || {}, item: t?.item ?? t, index: t?.index ?? t?.i ?? 0 };
              return /* @__PURE__ */ a(u, { children: [
                "      ",
                y(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(u, { children: [
                  "      ",
                  /* @__PURE__ */ a(v, { id: "notification_item", role: "status", "aria-live": "polite", className: `${d({ sm: "flex rudra-notification-item" }) || ""}`, children: [
                    "      ",
                    y(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(u, { children: [
                      "      ",
                      /* @__PURE__ */ a(v, { id: "notification_copy", className: `${d({ sm: "block rudra-notification-copy" }) || ""}`, children: [
                        "      ",
                        y(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(u, { children: [
                          "      ",
                          /* @__PURE__ */ w(Y, { id: "notification_title", className: `${d({ sm: "rudra-notification-title" }) || ""}`, as: "div", content: /* @__PURE__ */ ((e) => e === void 0 ? "Notification" : e)(i?.item?.title) })
                        ] }),
                        y(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(u, { children: [
                          "      ",
                          /* @__PURE__ */ w(Y, { id: "notification_message", className: `${d({ sm: "rudra-notification-message" }) || ""}`, as: "div", content: /* @__PURE__ */ ((e) => e === void 0 ? "Your notification is ready." : e)(i?.item?.message) })
                        ] })
                      ] })
                    ] }),
                    y(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)($?.dismissible)) && /* @__PURE__ */ a(u, { children: [
                      "      ",
                      /* @__PURE__ */ w(rt, { id: "notification_close", className: "rudra-notification-dismiss", theme: "auto", onClick: (...e) => F("dismissNotification", { id: { dataPath: "item.id", type: "binding" }, title: { dataPath: "item.title", type: "binding" }, variant: { dataPath: "item.variant", type: "binding" } }, e), variant: "ghost", ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Dismiss notification" : e)(i?.item?.closeLabel), icon: "✕", size: "sm", type: "button" })
                    ] })
                  ] })
                ] })
              ] });
            })() })
          ] }),
          y(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(u, { children: [
            "      ",
            /* @__PURE__ */ w(ct, { id: "notification_alert", className: "rudra-notification-legacy-alert", live: "polite", theme: "auto", title: /* @__PURE__ */ ((t) => t === void 0 ? "Notification" : t)(q), hidden: !0, variant: /* @__PURE__ */ ((t) => t === void 0 ? "info" : t)(T), onDismiss: (...t) => F("dismissNotification", {}, t), appearance: "soft", closeLabel: /* @__PURE__ */ ((t) => t === void 0 ? "Dismiss notification" : t)(B), dismissible: !0 })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ut as default
};
