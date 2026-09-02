import { jsx as v, jsxs as m, Fragment as y } from "react/jsx-runtime";
import { useState as _, useEffect as N, useRef as D, useCallback as A } from "react";
import { Typography as Y, IconButton as at, Alert as ct } from "@rudra-studio/rudra-core";
import { Box as x, Repeater as dt } from "@rudra-studio/rudra-layout";
function yt(n) {
  const O = n.serverData || n.serverState || {};
  n.sharedState, n.applicationState || O.applicationState, n.pageState || O.pageState, n.pageData || O.pageData;
  const G = {
    ...n.runtime?.functions || {},
    ...n.runtime?.actions || {},
    ...n.functions || {},
    ...n.actions || {}
  }, b = n.$theme ?? n.theme ?? n.data?.$theme ?? n.runtime?.data?.$theme ?? n.runtime?.theme, E = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [K, $] = _(() => b ?? E());
  N(() => {
    b != null && $(b);
  }, [b]), N(() => {
    if (b != null || typeof document > "u") return;
    const t = document.documentElement, i = (o) => $(o?.detail?.theme ?? E()), e = new MutationObserver(i);
    return e.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      e.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [b]);
  const S = D(null), [L, j] = _("lg");
  N(() => {
    if (!S.current) return;
    const t = new ResizeObserver((i) => {
      for (let e of i) {
        const o = e.contentRect.width;
        o < 768 ? j("sm") : o < 1024 ? j("md") : j("lg");
      }
    });
    return t.observe(S.current), () => t.disconnect();
  }, []);
  const f = A((t) => typeof t != "object" || t === null ? t : L === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : L === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [L]), g = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, Q = n.maxNotifications !== void 0 ? n.maxNotifications : n.data?.maxNotifications !== void 0 ? n.data.maxNotifications : 4, U = n.dismissible !== void 0 ? n.dismissible : n.data?.dismissible !== void 0 ? n.data.dismissible : !0, T = { maxNotifications: Q, dismissible: U }, [M, W] = _(() => structuredClone(!1)), [z, X] = _(() => structuredClone("info")), [P, Z] = _(() => structuredClone("")), [H, V] = _(() => structuredClone("")), [I, tt] = _(() => structuredClone("Dismiss notification")), [q, it] = _(() => structuredClone([])), a = { visible: M, variant: z, title: P, message: H, closeLabel: I, notifications: q }, l = A((t, i) => {
    switch (t) {
      case "visible": {
        const e = typeof i == "function" ? i(a.visible) : i;
        return a.visible = e, W(e), e;
      }
      case "variant": {
        const e = typeof i == "function" ? i(a.variant) : i;
        return a.variant = e, X(e), e;
      }
      case "title": {
        const e = typeof i == "function" ? i(a.title) : i;
        return a.title = e, Z(e), e;
      }
      case "message": {
        const e = typeof i == "function" ? i(a.message) : i;
        return a.message = e, V(e), e;
      }
      case "closeLabel": {
        const e = typeof i == "function" ? i(a.closeLabel) : i;
        return a.closeLabel = e, tt(e), e;
      }
      case "notifications": {
        const e = typeof i == "function" ? i(a.notifications) : i;
        return a.notifications = e, it(e), e;
      }
      default:
        return i;
    }
  }, [a]);
  A((t, i) => {
    const [e, ...o] = String(t || "").split(".");
    if (!e) return i;
    if (o.length === 0) return l(e, i);
    const r = (s) => {
      const c = Array.isArray(s) ? [...s] : { ...s || {} };
      let d = c;
      return o.forEach((u, h) => {
        h === o.length - 1 ? d[u] = i : (d[u] = Array.isArray(d[u]) ? [...d[u]] : { ...d[u] || {} }, d = d[u]);
      }), c;
    };
    switch (e) {
      case "visible":
        return l("visible", r), i;
      case "variant":
        return l("variant", r), i;
      case "title":
        return l("title", r), i;
      case "message":
        return l("message", r), i;
      case "closeLabel":
        return l("closeLabel", r), i;
      case "notifications":
        return l("notifications", r), i;
      default:
        return i;
    }
  }, [l]);
  const et = { notification_dismissed: { properties: { id: { type: "string" }, reason: { type: "string" }, remaining: { type: "number" }, title: { type: "string" }, variant: { type: "string" } }, required: ["reason", "id", "variant", "title", "remaining"], type: "object" } }, C = (t, i, e) => {
    if (!i || typeof i != "object") return "";
    const o = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], r = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (o.length && !o.includes(r) && !(r === "integer" && o.includes("number"))) return e + " must be " + o.join(" or ") + ".";
    if (i.enum && !i.enum.some((s) => JSON.stringify(s) === JSON.stringify(t))) return e + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const s of i.required || []) if (!Object.prototype.hasOwnProperty.call(t, s)) return e + "." + s + " is required.";
      for (const [s, c] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(t, s)) {
        const d = C(t[s], c, e + "." + s);
        if (d) return d;
      }
    }
    if (Array.isArray(t) && i.items) for (let s = 0; s < t.length; s++) {
      const c = C(t[s], i.items, e + "[" + s + "]");
      if (c) return c;
    }
    return "";
  }, nt = A(async (t, i, e = !1) => {
    const o = et[t];
    if (!o) throw new Error("Module output '" + t + "' is not declared.");
    const r = C(i, o, "output." + t);
    if (r) throw new Error(r);
    const s = n.onOutput || n.onModuleOutput || n.runtime?.onOutput;
    if (typeof s != "function") return i;
    const c = s(t, i, { moduleId: n.moduleId, awaitHandlers: e });
    return e ? await c : i;
  }, [n.onOutput, n.onModuleOutput, n.runtime?.onOutput, n.moduleId]);
  async function B(t = {}) {
    const i = t || {}, e = {};
    {
      i.event;
      const o = await (async () => {
        const r = Array.isArray(a.notifications) ? a.notifications : [], s = Math.max(1, Math.min(8, Number(T.maxNotifications) || 4)), c = {
          id: String(Date.now()) + "-" + String(Math.random()).slice(2, 8),
          variant: i.variant || "info",
          title: i.title || "Notification",
          message: i.message || "",
          closeLabel: i.closeLabel || "Dismiss notification"
        };
        return [...r, c].slice(-s);
      })();
      e.notification_step_build_stack = o;
    }
    return l("notifications", e.notification_step_build_stack), l("visible", !0), { visible: !0 };
  }
  async function F(t = {}) {
    const i = t || {}, e = {};
    {
      i.event;
      const o = await (async () => {
        const r = Array.isArray(a.notifications) ? a.notifications : [], s = typeof i.id == "string" || typeof i.id == "number" ? i.id : void 0, c = i.event?.currentTarget?.closest?.("[data-notification-id]"), d = c?.getAttribute?.("data-notification-id"), u = String(s ?? d ?? ""), h = r.find((rt) => String(rt?.id ?? "") === u), w = typeof i.title == "string" ? i.title : void 0, p = typeof i.variant == "string" ? i.variant : void 0;
        return {
          id: u,
          title: String(w ?? c?.getAttribute?.("data-notification-title") ?? h?.title ?? ""),
          variant: String(p ?? c?.getAttribute?.("data-notification-variant") ?? h?.variant ?? "info"),
          reason: String(typeof i.reason == "string" && i.reason ? i.reason : "user")
        };
      })();
      e.notification_step_normalize_dismiss = o;
    }
    {
      i.event;
      const o = await (async () => {
        const r = Array.isArray(a.notifications) ? a.notifications : [], s = e.notification_step_normalize_dismiss?.id;
        return s ? r.filter((c) => String(c?.id ?? "") !== String(s)) : r;
      })();
      e.notification_step_filter = o;
    }
    l("notifications", e.notification_step_filter);
    {
      i.event;
      const o = await (async () => {
        const r = e.notification_step_filter;
        return Array.isArray(r) && r.length > 0;
      })();
      e.notification_step_has_remaining = o;
    }
    return l("visible", e.notification_step_has_remaining), nt("notification_dismissed", { id: e.notification_step_normalize_dismiss.id, reason: e.notification_step_normalize_dismiss.reason, remaining: e.notification_step_filter.length, title: e.notification_step_normalize_dismiss.title, variant: e.notification_step_normalize_dismiss.variant }, !1).catch((o) => console.error("Module output delivery failed", o)), { dismissed: !0 };
  }
  const ot = {
    showNotification: B,
    dismissNotification: F
  }, k = D({});
  k.current = {
    notification_dismiss: (t = {}, i = {}) => F({ ...t, signal: i.signal }),
    notification_show: (t = {}, i = {}) => B({ ...t, signal: i.signal })
  };
  const R = D(null);
  R.current || (R.current = {
    notification_dismiss: (t, i) => k.current.notification_dismiss(t, i),
    notification_show: (t, i) => k.current.notification_show(t, i)
  }), N(() => {
    const t = n.registerCommands || n.runtime?.registerCommands;
    if (typeof t == "function")
      return t(R.current);
  }, [n.registerCommands, n.runtime?.registerCommands]);
  const st = {
    showNotification: ["variant", "title", "message", "closeLabel"],
    dismissNotification: ["id", "title", "variant", "reason", "event"]
  }, J = (t, i = {}, e = []) => {
    const o = ot[t];
    if (o) {
      const u = st[t] || [];
      return o(Object.fromEntries(u.map((h, w) => {
        const p = Object.prototype.hasOwnProperty.call(i, h) ? i[h] : void 0;
        return [h, (p === "" || p === void 0) && e[w] !== void 0 ? e[w] : h === "event" && (p === "" || p === void 0) ? e[0] : p];
      })));
    }
    const r = G?.[t];
    if (typeof r == "function")
      return r(Object.keys(i).length > 0 ? i : e[0]);
    const [s, c] = String(t).split("."), d = typeof globalThis < "u" ? globalThis[s]?.[c] : void 0;
    if (typeof d == "function") return d(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ v("div", { ref: S, className: "rudra-module-wrapper", children: g(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(y, { children: [
    "      ",
    /* @__PURE__ */ m(x, { id: "notification_portal", "data-theme": /* @__PURE__ */ ((t) => t === void 0 ? "light" : t)(K), "data-notification-shell": "", className: `${f({ sm: "block rudra-notification-shell" }) || ""}`, children: [
      "      ",
      g(/* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(M)) && /* @__PURE__ */ m(y, { children: [
        "      ",
        /* @__PURE__ */ m(x, { id: "notification_position", "data-rudra-notification": "", "data-rudra-notification-position": "", className: `${f({ sm: "block rudra-notification-position" }) || ""}`, children: [
          "      ",
          g(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(y, { children: [
            "      ",
            /* @__PURE__ */ v(dt, { id: "notification_card", className: "rudra-notification-stack", items: /* @__PURE__ */ ((t) => t === void 0 ? [] : t)(q), children: (t) => (() => {
              const i = { ...t || {}, item: t?.item ?? t, index: t?.index ?? t?.i ?? 0 };
              return /* @__PURE__ */ m(y, { children: [
                "      ",
                g(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(y, { children: [
                  "      ",
                  /* @__PURE__ */ m(x, { id: "notification_item", role: "status", "aria-live": "polite", "data-notification-id": /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(i?.item?.id), "data-notification-title": /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(i?.item?.title), "data-notification-variant": /* @__PURE__ */ ((e) => e === void 0 ? "info" : e)(i?.item?.variant), className: `${f({ sm: "flex rudra-notification-item" }) || ""}`, children: [
                    "      ",
                    g(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(y, { children: [
                      "      ",
                      /* @__PURE__ */ m(x, { id: "notification_copy", className: `${f({ sm: "block rudra-notification-copy" }) || ""}`, children: [
                        "      ",
                        g(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(y, { children: [
                          "      ",
                          /* @__PURE__ */ v(Y, { id: "notification_title", className: `${f({ sm: "rudra-notification-title" }) || ""}`, as: "div", content: /* @__PURE__ */ ((e) => e === void 0 ? "Notification" : e)(i?.item?.title) })
                        ] }),
                        g(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(y, { children: [
                          "      ",
                          /* @__PURE__ */ v(Y, { id: "notification_message", className: `${f({ sm: "rudra-notification-message" }) || ""}`, as: "div", content: /* @__PURE__ */ ((e) => e === void 0 ? "Your notification is ready." : e)(i?.item?.message) })
                        ] })
                      ] })
                    ] }),
                    g(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(T?.dismissible)) && /* @__PURE__ */ m(y, { children: [
                      "      ",
                      /* @__PURE__ */ v(at, { id: "notification_close", className: "rudra-notification-dismiss", theme: "auto", onClick: (...e) => J("dismissNotification", { id: { dataPath: "item.id", type: "binding" }, title: { dataPath: "item.title", type: "binding" }, variant: { dataPath: "item.variant", type: "binding" } }, e), variant: "ghost", ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Dismiss notification" : e)(i?.item?.closeLabel), icon: "✕", size: "sm", type: "button" })
                    ] })
                  ] })
                ] })
              ] });
            })() })
          ] }),
          g(f({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ m(y, { children: [
            "      ",
            /* @__PURE__ */ v(ct, { id: "notification_alert", className: "rudra-notification-legacy-alert", theme: "auto", hidden: !0, dismissible: !0, live: "polite", title: /* @__PURE__ */ ((t) => t === void 0 ? "Notification" : t)(P), variant: /* @__PURE__ */ ((t) => t === void 0 ? "info" : t)(z), onDismiss: (...t) => J("dismissNotification", {}, t), appearance: "soft", closeLabel: /* @__PURE__ */ ((t) => t === void 0 ? "Dismiss notification" : t)(I) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  yt as default
};
