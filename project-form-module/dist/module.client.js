import { jsx as c, jsxs as d, Fragment as _ } from "react/jsx-runtime";
import { useState as D, useEffect as C, useRef as gt, useCallback as A } from "react";
import { Container as yt, Grid as V, Flex as ht } from "@rudra-studio/rudra-layout";
import { Form as pt, FormSection as I, Input as wt, Textarea as jt, Select as P, DatePicker as H, CurrencyInput as _t, ValidationSummary as Ot } from "@rudra-studio/rudra-form";
import { Card as At, Typography as g, Alert as xt, Divider as St, Button as G } from "@rudra-studio/rudra-core";
function vt(r) {
  const W = {}, x = r.serverData || r.serverState || {}, K = r.sharedState || {}, Q = r.applicationState || x.applicationState || {}, X = r.pageState || x.pageState || {}, Y = r.pageData || x.pageData || {}, tt = {
    ...r.runtime?.functions || {},
    ...r.runtime?.actions || {},
    ...r.functions || {},
    ...r.actions || {}
  }, h = r.$theme ?? r.theme ?? r.data?.$theme ?? r.runtime?.data?.$theme ?? r.runtime?.theme, T = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [$t, R] = D(() => h ?? T());
  C(() => {
    h != null && R(h);
  }, [h]), C(() => {
    if (h != null || typeof document > "u") return;
    const t = document.documentElement, e = (i) => R(i?.detail?.theme ?? T()), o = new MutationObserver(e);
    return o.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", e), e(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", e);
    };
  }, [h]);
  const k = gt(null), [E, N] = D("lg");
  C(() => {
    if (!k.current) return;
    const t = new ResizeObserver((e) => {
      for (let o of e) {
        const i = o.contentRect.width;
        i < 768 ? N("sm") : i < 1024 ? N("md") : N("lg");
      }
    });
    return t.observe(k.current), () => t.disconnect();
  }, []);
  const n = A((t) => typeof t != "object" || t === null ? t : E === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : E === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [E]), B = r.clients !== void 0 ? r.clients : r.data?.clients !== void 0 ? r.data.clients : [], et = r.workspaceId !== void 0 ? r.workspaceId : r.data?.workspaceId !== void 0 ? r.data.workspaceId : void 0, L = r.project !== void 0 ? r.project : r.data?.project !== void 0 ? r.data.project : void 0, rt = r.mode !== void 0 ? r.mode : r.data?.mode !== void 0 ? r.data.mode : "create", it = r.domainUrl !== void 0 ? r.domainUrl : r.data?.domainUrl !== void 0 ? r.data.domainUrl : "https://rudra-sql.onrender.com", nt = { clients: B, workspaceId: et, project: L, mode: rt, domainUrl: it }, [q, M] = D(() => structuredClone(!1)), [ot, F] = D(() => structuredClone(!1)), at = { submitting: q, hasError: ot }, O = A((t, e) => {
    switch (t) {
      case "submitting":
        return M(e), e;
      case "hasError":
        return F(e), e;
      default:
        return e;
    }
  }, []);
  A((t, e) => {
    const [o, ...i] = String(t || "").split(".");
    if (!o) return e;
    if (i.length === 0) return O(o, e);
    const s = (a) => {
      const m = Array.isArray(a) ? [...a] : { ...a || {} };
      let l = m;
      return i.forEach((f, u) => {
        u === i.length - 1 ? l[f] = e : (l[f] = Array.isArray(l[f]) ? [...l[f]] : { ...l[f] || {} }, l = l[f]);
      }), m;
    };
    switch (o) {
      case "submitting":
        return M(s), e;
      case "hasError":
        return F(s), e;
      default:
        return e;
    }
  }, [O]), A(async (t, e, o) => {
    const i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      t
    ), s = i[e] || i.default;
    if (typeof s != "function") throw new Error("Library function '" + e + "' was not exported by " + t);
    return s(o);
  }, []);
  const st = { "output_2ccd6192-eec4-414a-bf0f-885458f16bf4": { properties: {}, type: "object" } }, z = (t, e, o) => {
    if (!e || typeof e != "object") return "";
    const i = Array.isArray(e.type) ? e.type : e.type ? [e.type] : [], s = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (i.length && !i.includes(s) && !(s === "integer" && i.includes("number"))) return o + " must be " + i.join(" or ") + ".";
    if (e.enum && !e.enum.some((a) => JSON.stringify(a) === JSON.stringify(t))) return o + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const a of e.required || []) if (!Object.prototype.hasOwnProperty.call(t, a)) return o + "." + a + " is required.";
      for (const [a, m] of Object.entries(e.properties || {})) if (Object.prototype.hasOwnProperty.call(t, a)) {
        const l = z(t[a], m, o + "." + a);
        if (l) return l;
      }
    }
    if (Array.isArray(t) && e.items) for (let a = 0; a < t.length; a++) {
      const m = z(t[a], e.items, o + "[" + a + "]");
      if (m) return m;
    }
    return "";
  }, ct = A(async (t, e, o = !1) => {
    const i = st[t];
    if (!i) throw new Error("Module output '" + t + "' is not declared.");
    const s = z(e, i, "output." + t);
    if (s) throw new Error(s);
    const a = r.onOutput || r.onModuleOutput || r.runtime?.onOutput;
    if (typeof a != "function") return e;
    const m = a(t, e, { moduleId: r.moduleId, awaitHandlers: o });
    return o ? await m : e;
  }, [r.onOutput, r.onModuleOutput, r.runtime?.onOutput, r.moduleId]), U = (t, e) => {
    const o = String(e || "").split(".").filter(Boolean);
    if (!(!o.length || o.some((i) => ["__proto__", "prototype", "constructor"].includes(i))))
      return o.reduce((i, s) => {
        if (!(!i || typeof i != "object"))
          return typeof i.get == "function" && !(s in i) ? i.get(s) : i[s];
      }, t);
  }, y = (t, e) => {
    if (Array.isArray(t)) return t.map((i) => y(i, e));
    if (t && typeof t == "object") return Object.fromEntries(Object.entries(t).map(([i, s]) => [y(i, e), y(s, e)]));
    if (typeof t != "string") return t;
    const o = t.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return o ? U(e, o[1]) : t.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (i, s) => {
      const a = U(e, s);
      return a == null ? "" : typeof a == "object" ? JSON.stringify(a) : String(a);
    });
  }, w = (t, e) => {
    if (Array.isArray(t)) return t.map((s) => w(s, e));
    if (t && typeof t == "object") return Object.fromEntries(Object.entries(t).map(([s, a]) => [w(s, e), w(a, e)]));
    if (typeof t != "string") return t;
    const o = t.match(/^\s*\{\{\s*args\.([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}\s*$/);
    if (o && Object.prototype.hasOwnProperty.call(e, o[1])) return e[o[1]];
    const i = t.match(/^\{([A-Za-z_$][A-Za-z0-9_$]*)\}$/);
    return i && Object.prototype.hasOwnProperty.call(e, i[1]) ? e[i[1]] : Object.entries(e).reduce((s, [a, m]) => s.replace(new RegExp("\\\\{\\\\{\\\\s*args\\\\." + a.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&") + "\\\\s*\\\\}\\\\}", "g"), String(m ?? "")).replaceAll("{" + a + "}", String(m ?? "")), t);
  }, S = (t) => {
    if (t == null) return !1;
    if (typeof t == "string") {
      if (!t.trim()) return !1;
      try {
        return S(JSON.parse(t));
      } catch {
        return !0;
      }
    }
    return !(t && typeof t == "object" && !Array.isArray(t) && Object.keys(t).length === 0);
  };
  async function dt(t = {}) {
    ct("output_2ccd6192-eec4-414a-bf0f-885458f16bf4", {}, !1).catch((e) => console.error("Module output delivery failed", e));
  }
  async function lt(t = {}) {
    const e = t || {}, o = {}, i = {};
    O("submitting", !0);
    {
      const s = { args: e, inputs: nt, state: at, sharedState: K, applicationState: Q, pageState: X, pageData: Y, serverData: x, vars: o, stepResults: i }, a = y({ budget: "{{ args.formData.budget }}", description: "{{ args.formData.description }}", dueDate: "{{ args.formData.dueDate }}", name: "{{ args.formData.name }}", priority: "{{ args.formData.priority }}", startDate: "{{ args.formData.startDate }}", status: "{{ args.formData.status }}" }, s) || {}, m = String(y(w("{{inputs.domainUrl}}/api/v1/postgres/main/data/projects", a), s) || ""), l = [{ key: "Content-Type", value: "application/json" }, { key: "Accept", value: "application/json" }], f = Object.fromEntries((Array.isArray(l) ? l : Object.entries(l || {}).map(([b, bt]) => ({ key: b, value: bt }))).filter((b) => b?.key).map((b) => [String(y(w(b.key, a), s)), String(y(w(b.value, a), s) ?? "")]));
      let u = y({}, s) || {};
      if (typeof u == "string")
        try {
          u = JSON.parse(u);
        } catch {
        }
      Object.assign(f, Array.isArray(u) ? Object.fromEntries(u.filter((b) => b?.key).map((b) => [b.key, b.value])) : u);
      let j = S("{}") ? "{}" : `{
  "name": "{{ args.name }}",
  "description": "{{ args.description }}",
  "status": "{{ args.status }}",
  "priority": "{{ args.priority }}",
  "budget": "{{ args.budget }}",
  "startDate": "{{ args.startDate }}",
  "dueDate": "{{ args.dueDate }}"
}`;
      if (typeof j == "string")
        try {
          j = JSON.parse(j);
        } catch {
        }
      const p = y(w(j, a), s), $ = S(p) ? p : a, ft = /^(GET|HEAD)$/i.test("POST") || !S($) ? void 0 : typeof $ == "string" ? $ : JSON.stringify($), v = await fetch(m, { method: "POST", headers: f, body: ft, signal: e.signal || AbortSignal.timeout(15e3) });
      if (!v.ok) throw new Error("API request failed (" + v.status + ")");
      const J = await v.json();
      i.step_1786973882134_2n478 = J, o.apiResult = J;
    }
    O("submitting", !1), O("hasError", !0);
  }
  const mt = {
    handleCancel: dt,
    handleSubmit: lt
  }, ut = {
    handleCancel: ["event"],
    handleSubmit: ["formData"]
  }, Z = (t, e = {}, o = []) => {
    const i = mt[t];
    if (i) {
      const f = ut[t] || [];
      return i(Object.fromEntries(f.map((u, j) => {
        const p = Object.prototype.hasOwnProperty.call(e, u) ? e[u] : void 0;
        return [u, (p === "" || p === void 0) && o[j] !== void 0 ? o[j] : u === "event" && (p === "" || p === void 0) ? o[0] : p];
      })));
    }
    const s = tt?.[t];
    if (typeof s == "function")
      return s(Object.keys(e).length > 0 ? e : o[0]);
    const [a, m] = String(t).split("."), l = typeof globalThis < "u" ? globalThis[a]?.[m] : void 0;
    if (typeof l == "function") return l(...Object.values(e));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ c("div", { ref: k, className: "rudra-module-wrapper", children: /* @__PURE__ */ d(yt, { id: "project-form-container", className: `${n({ sm: "w-full rudra-module-wrapper" }) || ""}`, centered: !0, maxWidth: "lg", as: "section", children: [
    "      ",
    /* @__PURE__ */ d(At, { id: "project-form-card", className: `${n({ sm: "w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 p-2" }) || ""}`, theme: "auto", as: "section", children: [
      "      ",
      /* @__PURE__ */ d(pt, { id: "project-form", onSubmit: (...t) => Z("handleSubmit", {}, t), initialValues: L, children: [
        "      ",
        /* @__PURE__ */ d(I, { id: "basic-section", title: /* @__PURE__ */ d(_, { children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786769426383_lulu4s9", className: `${n({ sm: "text-sm" }) || ""} ${n({ sm: "font-bold" }) || ""}`, content: n({ lg: "Basic Information", sm: "Basic Information" }) })
        ] }), description: /* @__PURE__ */ d(_, { children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786769428982_549w43s", className: `${n({ sm: "text-black dark:text-white my-2 mb-6" }) || ""}`, content: n({ sm: "Add the core information used to identify your project." }), customColor: !1 })
        ] }), actions: !1, density: "comfortable", variant: n({ sm: "filled" }), collapsible: !1, defaultCollapsed: !1, children: [
          "      ",
          /* @__PURE__ */ c(wt, { id: "project-name", className: `${n({ sm: "mb-4 border-zinc-300" }) || ""} ${n({ sm: "rounded-md" }) || ""}`, name: "name", size: "md", label: "Project name", required: !0, variant: "default", placeholder: "Website redesign", iconPosition: "start", icon: !1 }),
          /* @__PURE__ */ c(jt, { id: "project-description", name: "description", size: "md", label: "Description · Optional", maxRows: 8, minRows: 5, variant: "default", autoResize: !0, placeholder: "Describe what the team is building..." }),
          /* @__PURE__ */ c(P, { id: "project-client", className: `${n({ sm: "mb-4" }) || ""}`, shadow: "sm", options: B, colorScheme: "slate", name: "clientId", size: "md", label: "Client · Optional", radius: "lg" })
        ] }),
        /* @__PURE__ */ d(I, { id: "details-section", title: /* @__PURE__ */ d(_, { children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786772566754_3lmkf5c", className: `${n({ sm: "mt-8" }) || ""} ${n({ sm: "text-sm" }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Project details" }) })
        ] }), description: /* @__PURE__ */ d(_, { children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786772568563_r4tc0cl", className: `${n({ sm: "text-zinc-500 dark:text-white my-2 mb-6 mt-1" }) || ""}`, content: n({ sm: "Define the current stage and priority of the project." }) })
        ] }), density: "comfortable", variant: "filled", actions: !1, children: [
          "      ",
          /* @__PURE__ */ d(V, { id: "details-grid", className: "grid w-full grid-cols-1 gap-5 sm:grid-cols-2", as: "div", children: [
            "      ",
            /* @__PURE__ */ c(P, { id: "project-status", shadow: "sm", options: [{ label: "Planning", value: "PLANNING" }, { label: "Active", value: "ACTIVE" }, { label: "On hold", value: "ON_HOLD" }, { label: "Completed", value: "COMPLETED" }], required: !0, colorScheme: "slate", name: "status", size: "md", label: "Status", radius: "lg" }),
            /* @__PURE__ */ c(P, { id: "project-priority", shadow: "sm", options: [{ label: "Low", value: "LOW" }, { label: "Medium", value: "MEDIUM" }, { label: "High", value: "HIGH" }, { label: "Critical", value: "CRITICAL" }], required: !0, colorScheme: "slate", name: "priority", size: "md", label: "Priority", radius: "lg" })
          ] })
        ] }),
        /* @__PURE__ */ d(I, { id: "schedule-section", title: /* @__PURE__ */ d(_, { children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786772409486_hvvpaoi", className: `${n({ sm: "mt-8" }) || ""} ${n({ sm: "text-sm" }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Schedule & budget" }) })
        ] }), description: /* @__PURE__ */ d(_, { children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786772411699_xqtdsq2", className: `${n({ sm: "text-zinc-500 dark:text-white my-2 mb-6 mt-1" }) || ""}`, content: n({ sm: "Add project timing and budget information." }) })
        ] }), variant: "filled", actions: !1, density: "comfortable", children: [
          "      ",
          /* @__PURE__ */ d(V, { id: "date-grid", className: "grid w-full grid-cols-1 gap-5 sm:grid-cols-2", as: "div", children: [
            "      ",
            /* @__PURE__ */ c(H, { id: "project-start-date", size: "md", label: "Start date", variant: "default", clearable: !0, name: "startDate" }),
            /* @__PURE__ */ c(H, { id: "project-due-date", name: "dueDate", size: "md", label: "Due date", variant: "default", clearable: !0 })
          ] }),
          /* @__PURE__ */ c(_t, { id: "project-budget", locale: n({ sm: "en-US" }), prefix: !1, variant: "default", currency: "INR", allowNegative: !1, maximumFractionDigits: 2, minimumFractionDigits: 0, name: "budget", size: "md", suffix: !1, clampOnBlur: !0, label: "Budget · Optional" })
        ] }),
        /* @__PURE__ */ c(Ot, { id: "validation-summary", className: "mx-6 mb-6 sm:mx-8", fieldLabels: { budget: "Budget", dueDate: "Due date", name: "Project name" }, focusFieldOnClick: !0, live: n({ sm: "polite" }), title: "", errors: W?.errors }),
        /* @__PURE__ */ d(xt, { id: "success-alert", title: /* @__PURE__ */ d(_, { children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786794839774_y5jdu8g", className: `${n({ sm: "dark:text-white " }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Validation Errors" }) })
        ] }), action: !1, icon: !1, live: "polite", theme: "auto", variant: n({ sm: "error" }), appearance: "soft", dismissible: !1, children: [
          "      ",
          /* @__PURE__ */ c(g, { id: "el_1786794841585_yu8l08l", content: "Hello Thereee" })
        ] }),
        /* @__PURE__ */ c(St, { id: "el_1786789281745_tl38ipo" }),
        /* @__PURE__ */ d(ht, { id: "form-actions", className: `${n({ sm: "project-form-actions flex justify-end gap-2" }) || ""}`, gap: "3", wrap: !0, align: "center", justify: "end", direction: "horizontal", as: "div", children: [
          "      ",
          /* @__PURE__ */ d(G, { id: "cancel-button", className: `${n({ sm: "h-10 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:opacity-50" }) || ""}`, id: "project-form-cancel", theme: "auto", variant: "outline", onAction: (...t) => Z("handleCancel", {}, t), rightIcon: !1, size: "md", leftIcon: !1, children: [
            "      ",
            /* @__PURE__ */ c(g, { id: "el_1786788080176_udtwdx4", className: `${n({ sm: "text-black-500 dark:text-white-100" }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Cancel" }), customColor: n({ sm: "#2a2828" }) })
          ] }),
          /* @__PURE__ */ d(G, { id: "submit-button", className: `flex ${n({ sm: "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60" }) || ""}`, type: "submit", theme: "auto", variant: "primary", onAction: null, rightIcon: !1, id: "project-form-submit", size: "md", loading: q, leftIcon: !1, loadingText: "Saving...", children: [
            "      ",
            /* @__PURE__ */ c(g, { id: "el_1786788087800_8zuydoj", className: `${n({ sm: "text-white " }) || ""} ${n({ sm: "font-semibold" }) || ""}`, content: n({ sm: "Create Project" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  vt as default
};
