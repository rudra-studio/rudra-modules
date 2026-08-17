import { jsx as s, jsxs as d, Fragment as h } from "react/jsx-runtime";
import { useState as p, useEffect as $, useRef as G, useCallback as w } from "react";
import { Container as W, Grid as P, Flex as J } from "@rudra-studio/rudra-layout";
import { Form as K, FormSection as N, Input as Q, Textarea as X, Select as S, DatePicker as T, CurrencyInput as Y, ValidationSummary as Z } from "@rudra-studio/rudra-form";
import { Card as ee, Typography as u, Alert as te, Divider as ie, Button as L } from "@rudra-studio/rudra-core";
function ce(i) {
  const R = {}, j = i.serverData || i.serverState || {};
  i.sharedState, i.applicationState || j.applicationState, i.pageState || j.pageState, i.pageData || j.pageData;
  const M = {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  }, f = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, k = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [re, z] = p(() => f ?? k());
  $(() => {
    f != null && z(f);
  }, [f]), $(() => {
    if (f != null || typeof document > "u") return;
    const e = document.documentElement, t = (o) => z(o?.detail?.theme ?? k()), n = new MutationObserver(t);
    return n.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      n.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [f]);
  const x = G(null), [v, _] = p("lg");
  $(() => {
    if (!x.current) return;
    const e = new ResizeObserver((t) => {
      for (let n of t) {
        const o = n.contentRect.width;
        o < 768 ? _("sm") : o < 1024 ? _("md") : _("lg");
      }
    });
    return e.observe(x.current), () => e.disconnect();
  }, []);
  const r = w((e) => typeof e != "object" || e === null ? e : v === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : v === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [v]), q = i.clients !== void 0 ? i.clients : i.data?.clients !== void 0 ? i.data.clients : [];
  i.workspaceId !== void 0 ? i.workspaceId : i.data?.workspaceId !== void 0 && i.data.workspaceId;
  const F = i.project !== void 0 ? i.project : i.data?.project !== void 0 ? i.data.project : void 0;
  i.mode !== void 0 ? i.mode : i.data?.mode !== void 0 && i.data.mode, i.domainUrl !== void 0 ? i.domainUrl : i.data?.domainUrl !== void 0 && i.data.domainUrl;
  const [B, A] = p(() => structuredClone(!1)), [ne, C] = p(() => structuredClone(!0)), E = w((e, t) => {
    switch (e) {
      case "submitting":
        return A(t), t;
      case "hasError":
        return C(t), t;
      default:
        return t;
    }
  }, []);
  w((e, t) => {
    const [n, ...o] = String(e || "").split(".");
    if (!n) return t;
    if (o.length === 0) return E(n, t);
    const l = (a) => {
      const m = Array.isArray(a) ? [...a] : { ...a || {} };
      let c = m;
      return o.forEach((b, y) => {
        y === o.length - 1 ? c[b] = t : (c[b] = Array.isArray(c[b]) ? [...c[b]] : { ...c[b] || {} }, c = c[b]);
      }), m;
    };
    switch (n) {
      case "submitting":
        return A(l), t;
      case "hasError":
        return C(l), t;
      default:
        return t;
    }
  }, [E]), w(async (e, t, n) => {
    const o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), l = o[t] || o.default;
    if (typeof l != "function") throw new Error("Library function '" + t + "' was not exported by " + e);
    return l(n);
  }, []);
  const U = {}, O = (e, t, n) => {
    if (!t || typeof t != "object") return "";
    const o = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], l = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(l) && !(l === "integer" && o.includes("number"))) return n + " must be " + o.join(" or ") + ".";
    if (t.enum && !t.enum.some((a) => JSON.stringify(a) === JSON.stringify(e))) return n + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const a of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, a)) return n + "." + a + " is required.";
      for (const [a, m] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, a)) {
        const c = O(e[a], m, n + "." + a);
        if (c) return c;
      }
    }
    if (Array.isArray(e) && t.items) for (let a = 0; a < e.length; a++) {
      const m = O(e[a], t.items, n + "[" + a + "]");
      if (m) return m;
    }
    return "";
  };
  w(async (e, t, n = !1) => {
    const o = U[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const l = O(t, o, "output." + e);
    if (l) throw new Error(l);
    const a = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof a != "function") return t;
    const m = a(e, t, { moduleId: i.moduleId, awaitHandlers: n });
    return n ? await m : t;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]);
  const V = {}, H = {}, I = (e, t = {}, n = []) => {
    const o = V[e];
    if (o) {
      const b = H[e] || [];
      return o(Object.fromEntries(b.map((y, D) => {
        const g = Object.prototype.hasOwnProperty.call(t, y) ? t[y] : void 0;
        return [y, (g === "" || g === void 0) && n[D] !== void 0 ? n[D] : y === "event" && (g === "" || g === void 0) ? n[0] : g];
      })));
    }
    const l = M?.[e];
    if (typeof l == "function")
      return l(Object.keys(t).length > 0 ? t : n[0]);
    const [a, m] = String(e).split("."), c = typeof globalThis < "u" ? globalThis[a]?.[m] : void 0;
    if (typeof c == "function") return c(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ s("div", { ref: x, className: "rudra-module-wrapper", children: /* @__PURE__ */ d(W, { id: "project-form-container", className: `${r({ sm: "w-full rudra-module-wrapper" }) || ""}`, as: "section", centered: !0, maxWidth: "lg", children: [
    "      ",
    /* @__PURE__ */ d(ee, { id: "project-form-card", className: `${r({ sm: "w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 p-2" }) || ""}`, theme: "auto", as: "section", children: [
      "      ",
      /* @__PURE__ */ d(K, { id: "project-form", onSubmit: (...e) => I("handleSubmit", {}, e), initialValues: F, children: [
        "      ",
        /* @__PURE__ */ d(N, { id: "basic-section", description: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786769428982_549w43s", className: `${r({ sm: "text-black dark:text-white my-2 mb-6" }) || ""}`, content: r({ sm: "Add the core information used to identify your project." }), customColor: !1 })
        ] }), title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786769426383_lulu4s9", className: `${r({ sm: "text-sm" }) || ""} ${r({ sm: "font-bold" }) || ""}`, content: r({ lg: "Basic Information", sm: "Basic Information" }) })
        ] }), density: "comfortable", variant: r({ sm: "filled" }), collapsible: !1, defaultCollapsed: !1, actions: !1, children: [
          "      ",
          /* @__PURE__ */ s(Q, { id: "project-name", className: `${r({ sm: "mb-4 border-zinc-300" }) || ""} ${r({ sm: "rounded-md" }) || ""}`, size: "md", required: !0, placeholder: "Website redesign", iconPosition: "start", name: "name", label: "Project name", variant: "default", icon: !1 }),
          /* @__PURE__ */ s(X, { id: "project-description", size: "md", label: "Description · Optional", maxRows: 8, minRows: 5, variant: "default", autoResize: !0, placeholder: "Describe what the team is building...", name: "description" }),
          /* @__PURE__ */ s(S, { id: "project-client", className: `${r({ sm: "mb-4" }) || ""}`, label: "Client · Optional", radius: "lg", shadow: "sm", options: q, colorScheme: "slate", name: "clientId", size: "md" })
        ] }),
        /* @__PURE__ */ d(N, { id: "details-section", title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772566754_3lmkf5c", className: `${r({ sm: "mt-8" }) || ""} ${r({ sm: "text-sm" }) || ""} ${r({ sm: "font-semibold" }) || ""}`, content: r({ sm: "Project details" }) })
        ] }), description: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772568563_r4tc0cl", className: `${r({ sm: "text-zinc-500 dark:text-white my-2 mb-6 mt-1" }) || ""}`, content: r({ sm: "Define the current stage and priority of the project." }) })
        ] }), actions: !1, density: "comfortable", variant: "filled", children: [
          "      ",
          /* @__PURE__ */ d(P, { id: "details-grid", className: "grid w-full grid-cols-1 gap-5 sm:grid-cols-2", as: "div", children: [
            "      ",
            /* @__PURE__ */ s(S, { id: "project-status", name: "status", size: "md", label: "Status", radius: "lg", shadow: "sm", options: [{ label: "Planning", value: "PLANNING" }, { label: "Active", value: "ACTIVE" }, { label: "On hold", value: "ON_HOLD" }, { label: "Completed", value: "COMPLETED" }], required: !0, colorScheme: "slate" }),
            /* @__PURE__ */ s(S, { id: "project-priority", colorScheme: "slate", name: "priority", size: "md", label: "Priority", radius: "lg", shadow: "sm", options: [{ label: "Low", value: "LOW" }, { label: "Medium", value: "MEDIUM" }, { label: "High", value: "HIGH" }, { label: "Critical", value: "CRITICAL" }], required: !0 })
          ] })
        ] }),
        /* @__PURE__ */ d(N, { id: "schedule-section", title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772409486_hvvpaoi", className: `${r({ sm: "mt-8" }) || ""} ${r({ sm: "text-sm" }) || ""} ${r({ sm: "font-semibold" }) || ""}`, content: r({ sm: "Schedule & budget" }) })
        ] }), description: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772411699_xqtdsq2", className: `${r({ sm: "text-zinc-500 dark:text-white my-2 mb-6 mt-1" }) || ""}`, content: r({ sm: "Add project timing and budget information." }) })
        ] }), actions: !1, density: "comfortable", variant: "filled", children: [
          "      ",
          /* @__PURE__ */ d(P, { id: "date-grid", className: "grid w-full grid-cols-1 gap-5 sm:grid-cols-2", as: "div", children: [
            "      ",
            /* @__PURE__ */ s(T, { id: "project-start-date", name: "startDate", size: "md", label: "Start date", variant: "default", clearable: !0 }),
            /* @__PURE__ */ s(T, { id: "project-due-date", label: "Due date", variant: "default", clearable: !0, name: "dueDate", size: "md" })
          ] }),
          /* @__PURE__ */ s(Y, { id: "project-budget", clampOnBlur: !0, currency: "INR", allowNegative: !1, maximumFractionDigits: 2, minimumFractionDigits: 0, name: "budget", size: "md", label: "Budget · Optional", locale: r({ sm: "en-US" }), prefix: !1, suffix: !1, variant: "default" })
        ] }),
        /* @__PURE__ */ s(Z, { id: "validation-summary", className: "mx-6 mb-6 sm:mx-8", fieldLabels: { budget: "Budget", dueDate: "Due date", name: "Project name" }, focusFieldOnClick: !0, live: r({ sm: "polite" }), title: "", errors: R?.errors }),
        /* @__PURE__ */ d(te, { id: "success-alert", title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786794839774_y5jdu8g", className: `${r({ sm: "dark:text-white " }) || ""} ${r({ sm: "font-semibold" }) || ""}`, content: r({ sm: "Validation Errors" }) })
        ] }), variant: r({ sm: "error" }), dismissible: !1, theme: "auto", action: !1, appearance: "soft", icon: !1, live: "polite", children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786794841585_yu8l08l", content: "Hello Thereee" })
        ] }),
        /* @__PURE__ */ s(ie, { id: "el_1786789281745_tl38ipo" }),
        /* @__PURE__ */ d(J, { id: "form-actions", className: `${r({ sm: "project-form-actions flex justify-end gap-2" }) || ""}`, as: "div", gap: "3", wrap: !0, align: "center", justify: "end", direction: "horizontal", children: [
          "      ",
          /* @__PURE__ */ d(L, { id: "cancel-button", className: `${r({ sm: "h-10 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:opacity-50" }) || ""}`, leftIcon: !1, size: "md", theme: "auto", onAction: (...e) => I("handleCancel", {}, e), rightIcon: !1, id: "project-form-cancel", variant: "outline", children: [
            "      ",
            /* @__PURE__ */ s(u, { id: "el_1786788080176_udtwdx4", className: `${r({ sm: "text-black-500 dark:text-white-100" }) || ""} ${r({ sm: "font-semibold" }) || ""}`, content: r({ sm: "Cancel" }), customColor: r({ sm: "#2a2828" }) })
          ] }),
          /* @__PURE__ */ d(L, { id: "submit-button", className: `flex ${r({ sm: "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60" }) || ""}`, leftIcon: !1, loading: B, variant: "primary", onAction: null, rightIcon: !1, loadingText: "Saving...", id: "project-form-submit", size: "md", type: "submit", theme: "auto", children: [
            "      ",
            /* @__PURE__ */ s(u, { id: "el_1786788087800_8zuydoj", className: `${r({ sm: "text-white " }) || ""} ${r({ sm: "font-semibold" }) || ""}`, content: r({ sm: "Create Project" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ce as default
};
