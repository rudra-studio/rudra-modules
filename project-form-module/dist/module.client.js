import { jsx as s, jsxs as d, Fragment as h } from "react/jsx-runtime";
import { useState as p, useEffect as S, useRef as K, useCallback as g } from "react";
import { Form as Q, FormSection as A, Input as X, Textarea as Y, Select as N, DatePicker as D, CurrencyInput as Z, ValidationSummary as ee } from "@rudra-studio/rudra-form";
import { Card as te, Typography as u, Alert as ie, Divider as ne, Button as P } from "@rudra-studio/rudra-core";
import { Container as re, Grid as T, Flex as oe } from "@rudra-studio/rudra-layout";
function fe(i) {
  const L = {}, j = i.serverData || i.serverState || {};
  i.sharedState, i.applicationState || j.applicationState, i.pageState || j.pageState, i.pageData || j.pageData;
  const R = {
    ...i.runtime?.functions || {},
    ...i.runtime?.actions || {},
    ...i.functions || {},
    ...i.actions || {}
  }, f = i.$theme ?? i.theme ?? i.data?.$theme ?? i.runtime?.data?.$theme ?? i.runtime?.theme, C = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [ae, k] = p(() => f ?? C());
  S(() => {
    f != null && k(f);
  }, [f]), S(() => {
    if (f != null || typeof document > "u") return;
    const e = document.documentElement, t = (o) => k(o?.detail?.theme ?? C()), r = new MutationObserver(t);
    return r.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      r.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [f]);
  const x = K(null), [v, _] = p("lg");
  S(() => {
    if (!x.current) return;
    const e = new ResizeObserver((t) => {
      for (let r of t) {
        const o = r.contentRect.width;
        o < 768 ? _("sm") : o < 1024 ? _("md") : _("lg");
      }
    });
    return e.observe(x.current), () => e.disconnect();
  }, []);
  const n = g((e) => typeof e != "object" || e === null ? e : v === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : v === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [v]), M = i.clients !== void 0 ? i.clients : i.data?.clients !== void 0 ? i.data.clients : [];
  i.workspaceId !== void 0 ? i.workspaceId : i.data?.workspaceId !== void 0 && i.data.workspaceId;
  const q = i.project !== void 0 ? i.project : i.data?.project !== void 0 ? i.data.project : void 0;
  i.mode !== void 0 ? i.mode : i.data?.mode !== void 0 && i.data.mode, i.domainUrl !== void 0 ? i.domainUrl : i.data?.domainUrl !== void 0 && i.data.domainUrl;
  const [F, z] = p(() => structuredClone(!1)), [se, E] = p(() => structuredClone(!0)), O = g((e, t) => {
    switch (e) {
      case "submitting":
        return z(t), t;
      case "hasError":
        return E(t), t;
      default:
        return t;
    }
  }, []);
  g((e, t) => {
    const [r, ...o] = String(e || "").split(".");
    if (!r) return t;
    if (o.length === 0) return O(r, t);
    const l = (a) => {
      const m = Array.isArray(a) ? [...a] : { ...a || {} };
      let c = m;
      return o.forEach((b, y) => {
        y === o.length - 1 ? c[b] = t : (c[b] = Array.isArray(c[b]) ? [...c[b]] : { ...c[b] || {} }, c = c[b]);
      }), m;
    };
    switch (r) {
      case "submitting":
        return z(l), t;
      case "hasError":
        return E(l), t;
      default:
        return t;
    }
  }, [O]), g(async (e, t, r) => {
    const o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), l = o[t] || o.default;
    if (typeof l != "function") throw new Error("Library function '" + t + "' was not exported by " + e);
    return l(r);
  }, []);
  const B = { "output_fa2c663c-9862-47fd-ace8-c0b92be5d3e0": { properties: {}, type: "object" } }, $ = (e, t, r) => {
    if (!t || typeof t != "object") return "";
    const o = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], l = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(l) && !(l === "integer" && o.includes("number"))) return r + " must be " + o.join(" or ") + ".";
    if (t.enum && !t.enum.some((a) => JSON.stringify(a) === JSON.stringify(e))) return r + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const a of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, a)) return r + "." + a + " is required.";
      for (const [a, m] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, a)) {
        const c = $(e[a], m, r + "." + a);
        if (c) return c;
      }
    }
    if (Array.isArray(e) && t.items) for (let a = 0; a < e.length; a++) {
      const m = $(e[a], t.items, r + "[" + a + "]");
      if (m) return m;
    }
    return "";
  }, U = g(async (e, t, r = !1) => {
    const o = B[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const l = $(t, o, "output." + e);
    if (l) throw new Error(l);
    const a = i.onOutput || i.onModuleOutput || i.runtime?.onOutput;
    if (typeof a != "function") return t;
    const m = a(e, t, { moduleId: i.moduleId, awaitHandlers: r });
    return r ? await m : t;
  }, [i.onOutput, i.onModuleOutput, i.runtime?.onOutput, i.moduleId]);
  async function V(e = {}) {
    U("output_fa2c663c-9862-47fd-ace8-c0b92be5d3e0", {}, !1).catch((t) => console.error("Module output delivery failed", t));
  }
  async function H(e = {}) {
    throw O("submitting", !0), new Error("API definition not found");
  }
  const G = {
    handleCancel: V,
    handleSubmit: H
  }, W = {
    handleCancel: ["event"],
    handleSubmit: ["formData"]
  }, I = (e, t = {}, r = []) => {
    const o = G[e];
    if (o) {
      const b = W[e] || [];
      return o(Object.fromEntries(b.map((y, J) => {
        const w = Object.prototype.hasOwnProperty.call(t, y) ? t[y] : void 0;
        return [y, y === "event" && (w === "" || w === void 0) ? r[0] : w === void 0 ? r[J] : w];
      })));
    }
    const l = R?.[e];
    if (typeof l == "function")
      return l(Object.keys(t).length > 0 ? t : r[0]);
    const [a, m] = String(e).split("."), c = typeof globalThis < "u" ? globalThis[a]?.[m] : void 0;
    if (typeof c == "function") return c(...Object.values(t));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ s("div", { ref: x, className: "rudra-module-wrapper", children: /* @__PURE__ */ d(re, { id: "project-form-container", className: `${n({ sm: "w-full rudra-module-wrapper" }) || ""}`, as: "section", centered: !0, maxWidth: "lg", children: [
    "      ",
    /* @__PURE__ */ d(te, { id: "project-form-card", className: `${n({ sm: "w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 p-2" }) || ""}`, as: "section", theme: "auto", children: [
      "      ",
      /* @__PURE__ */ d(Q, { id: "project-form", onSubmit: (...e) => I("handleSubmit", {}, e), initialValues: q, children: [
        "      ",
        /* @__PURE__ */ d(A, { id: "basic-section", title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786769426383_lulu4s9", className: `${n({ sm: "text-sm" }) || ""} ${n({ sm: "font-bold" }) || ""}`, content: n({ lg: "Basic Information", sm: "Basic Information" }) })
        ] }), description: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786769428982_549w43s", className: `${n({ sm: "text-black dark:text-white my-2 mb-6" }) || ""}`, customColor: !1, content: n({ sm: "Add the core information used to identify your project." }) })
        ] }), actions: !1, density: "comfortable", variant: n({ sm: "filled" }), collapsible: !1, defaultCollapsed: !1, children: [
          "      ",
          /* @__PURE__ */ s(X, { id: "project-name", className: `${n({ sm: "mb-4 border-zinc-300" }) || ""} ${n({ sm: "rounded-md" }) || ""}`, required: !0, iconPosition: "start", icon: !1, name: "name", label: "Project name", placeholder: "Website redesign", size: "md", variant: "default" }),
          /* @__PURE__ */ s(Y, { id: "project-description", label: "Description · Optional", maxRows: 8, minRows: 5, variant: "default", autoResize: !0, placeholder: "Describe what the team is building...", name: "description", size: "md" }),
          /* @__PURE__ */ s(N, { id: "project-client", className: `${n({ sm: "mb-4" }) || ""}`, colorScheme: "slate", name: "clientId", size: "md", label: "Client · Optional", radius: "lg", shadow: "sm", options: M })
        ] }),
        /* @__PURE__ */ d(A, { id: "details-section", title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772566754_3lmkf5c", className: `${n({ sm: "mt-8" }) || ""} ${n({ sm: "text-sm" }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Project details" }) })
        ] }), description: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772568563_r4tc0cl", className: `${n({ sm: "text-zinc-500 dark:text-white my-2 mb-6 mt-1" }) || ""}`, content: n({ sm: "Define the current stage and priority of the project." }) })
        ] }), actions: !1, density: "comfortable", variant: "filled", children: [
          "      ",
          /* @__PURE__ */ d(T, { id: "details-grid", className: "grid w-full grid-cols-1 gap-5 sm:grid-cols-2", as: "div", children: [
            "      ",
            /* @__PURE__ */ s(N, { id: "project-status", required: !0, colorScheme: "slate", name: "status", size: "md", label: "Status", radius: "lg", shadow: "sm", options: [{ label: "Planning", value: "PLANNING" }, { label: "Active", value: "ACTIVE" }, { label: "On hold", value: "ON_HOLD" }, { label: "Completed", value: "COMPLETED" }] }),
            /* @__PURE__ */ s(N, { id: "project-priority", shadow: "sm", options: [{ label: "Low", value: "LOW" }, { label: "Medium", value: "MEDIUM" }, { label: "High", value: "HIGH" }, { label: "Critical", value: "CRITICAL" }], required: !0, colorScheme: "slate", name: "priority", size: "md", label: "Priority", radius: "lg" })
          ] })
        ] }),
        /* @__PURE__ */ d(A, { id: "schedule-section", title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772409486_hvvpaoi", className: `${n({ sm: "mt-8" }) || ""} ${n({ sm: "text-sm" }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Schedule & budget" }) })
        ] }), description: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786772411699_xqtdsq2", className: `${n({ sm: "text-zinc-500 dark:text-white my-2 mb-6 mt-1" }) || ""}`, content: n({ sm: "Add project timing and budget information." }) })
        ] }), actions: !1, density: "comfortable", variant: "filled", children: [
          "      ",
          /* @__PURE__ */ d(T, { id: "date-grid", className: "grid w-full grid-cols-1 gap-5 sm:grid-cols-2", as: "div", children: [
            "      ",
            /* @__PURE__ */ s(D, { id: "project-start-date", variant: "default", clearable: !0, name: "startDate", size: "md", label: "Start date" }),
            /* @__PURE__ */ s(D, { id: "project-due-date", label: "Due date", variant: "default", clearable: !0, name: "dueDate", size: "md" })
          ] }),
          /* @__PURE__ */ s(Z, { id: "project-budget", maximumFractionDigits: 2, minimumFractionDigits: 0, size: "md", label: "Budget · Optional", locale: n({ sm: "en-US" }), variant: "default", currency: "INR", clampOnBlur: !0, name: "budget", prefix: !1, suffix: !1, allowNegative: !1 })
        ] }),
        /* @__PURE__ */ s(ee, { id: "validation-summary", className: "mx-6 mb-6 sm:mx-8", fieldLabels: { budget: "Budget", dueDate: "Due date", name: "Project name" }, focusFieldOnClick: !0, live: n({ sm: "polite" }), title: "", errors: L?.errors }),
        /* @__PURE__ */ d(ie, { id: "success-alert", title: /* @__PURE__ */ d(h, { children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786794839774_y5jdu8g", className: `${n({ sm: "dark:text-white " }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Validation Errors" }) })
        ] }), variant: n({ sm: "error" }), appearance: "soft", theme: "auto", action: !1, dismissible: !1, icon: !1, live: "polite", children: [
          "      ",
          /* @__PURE__ */ s(u, { id: "el_1786794841585_yu8l08l", content: "Hello Thereee" })
        ] }),
        /* @__PURE__ */ s(ne, { id: "el_1786789281745_tl38ipo" }),
        /* @__PURE__ */ d(oe, { id: "form-actions", className: `${n({ sm: "project-form-actions flex justify-end gap-2" }) || ""}`, direction: "horizontal", as: "div", gap: "3", wrap: !0, align: "center", justify: "end", children: [
          "      ",
          /* @__PURE__ */ d(P, { id: "cancel-button", className: `${n({ sm: "h-10 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:opacity-50" }) || ""}`, size: "md", theme: "auto", variant: "outline", leftIcon: !1, rightIcon: !1, id: "project-form-cancel", onAction: (...e) => I("handleCancel", {}, e), children: [
            "      ",
            /* @__PURE__ */ s(u, { id: "el_1786788080176_udtwdx4", className: `${n({ sm: "text-black-500 dark:text-white-100" }) || ""} ${n({ sm: "font-semibold" }) || ""}`, customColor: n({ sm: "#2a2828" }), content: n({ sm: "Cancel" }) })
          ] }),
          /* @__PURE__ */ d(P, { id: "submit-button", className: `flex ${n({ sm: "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60" }) || ""}`, loading: F, variant: "primary", leftIcon: !1, onAction: null, rightIcon: !1, loadingText: "Saving...", id: "project-form-submit", size: "md", type: "submit", theme: "auto", children: [
            "      ",
            /* @__PURE__ */ s(u, { id: "el_1786788087800_8zuydoj", className: `${n({ sm: "text-white " }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Create Project" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  fe as default
};
