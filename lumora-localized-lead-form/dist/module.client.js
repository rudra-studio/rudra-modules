import { jsx as f, jsxs as a, Fragment as l } from "react/jsx-runtime";
import { useState as v, useEffect as N, useRef as Ee, useCallback as O } from "react";
import { Section as Oe, Container as Me, Box as L } from "@rudra-studio/rudra-layout";
import { Typography as D, Alert as F, Button as je } from "@rudra-studio/rudra-core";
import { Form as $e, Input as T, Textarea as Pe, Checkbox as Ne } from "@rudra-studio/rudra-form";
function ze(e) {
  const _ = e.serverData || e.serverState || {}, V = e.sharedState || {}, W = e.applicationState || _.applicationState || {}, B = e.pageState || _.pageState || {}, J = e.pageData || _.pageData || {}, Z = {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, w = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, C = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Te, k] = v(() => w ?? C());
  N(() => {
    w != null && k(w);
  }, [w]), N(() => {
    if (w != null || typeof document > "u") return;
    const t = document.documentElement, i = (n) => k(n?.detail?.theme ?? C()), s = new MutationObserver(i);
    return s.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      s.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [w]);
  const M = Ee(null), [j, $] = v("lg");
  N(() => {
    if (!M.current) return;
    const t = new ResizeObserver((i) => {
      for (let s of i) {
        const n = s.contentRect.width;
        n < 768 ? $("sm") : n < 1024 ? $("md") : $("lg");
      }
    });
    return t.observe(M.current), () => t.disconnect();
  }, []);
  const r = O((t) => typeof t != "object" || t === null ? t : j === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : j === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [j]), u = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, G = e.title !== void 0 ? e.title : e.data?.title !== void 0 ? e.data.title : "Let’s create something unforgettable.", Q = e.emailLabel !== void 0 ? e.emailLabel : e.data?.emailLabel !== void 0 ? e.data.emailLabel : "Work email", U = e.locale !== void 0 ? e.locale : e.data?.locale !== void 0 ? e.data.locale : "en", Y = e.submitEndpoint !== void 0 ? e.submitEndpoint : e.data?.submitEndpoint !== void 0 ? e.data.submitEndpoint : "/api/rudra/leads", K = e.messageLabel !== void 0 ? e.messageLabel : e.data?.messageLabel !== void 0 ? e.data.messageLabel : "What would you love to build?", X = e.customClass !== void 0 ? e.customClass : e.data?.customClass !== void 0 ? e.data.customClass : "block lumora-lead-shell", H = e.companyLabel !== void 0 ? e.companyLabel : e.data?.companyLabel !== void 0 ? e.data.companyLabel : "Company · Optional", p = e.visualTheme !== void 0 ? e.visualTheme : e.data?.visualTheme !== void 0 ? e.data.visualTheme : "auto", ee = e.nameLabel !== void 0 ? e.nameLabel : e.data?.nameLabel !== void 0 ? e.data.nameLabel : "Your name", te = e.submitLabel !== void 0 ? e.submitLabel : e.data?.submitLabel !== void 0 ? e.data.submitLabel : "Send inquiry", ie = e.visible !== void 0 ? e.visible : e.data?.visible !== void 0 ? e.data.visible : !0, se = e.submittingLabel !== void 0 ? e.submittingLabel : e.data?.submittingLabel !== void 0 ? e.data.submittingLabel : "Sending…", ne = e.failureMessage !== void 0 ? e.failureMessage : e.data?.failureMessage !== void 0 ? e.data.failureMessage : "We could not send your inquiry. Please try again.", oe = e.consentPolicyVersion !== void 0 ? e.consentPolicyVersion : e.data?.consentPolicyVersion !== void 0 ? e.data.consentPolicyVersion : "1", ae = e.description !== void 0 ? e.description : e.data?.description !== void 0 ? e.data.description : "Tell us what you are building. We will respond with a focused plan.", re = e.routeAttribution !== void 0 ? e.routeAttribution : e.data?.routeAttribution !== void 0 ? e.data.routeAttribution : "/", ce = e.consentLabel !== void 0 ? e.consentLabel : e.data?.consentLabel !== void 0 ? e.data.consentLabel : "I agree to be contacted about this inquiry.", le = e.successMessage !== void 0 ? e.successMessage : e.data?.successMessage !== void 0 ? e.data.successMessage : "Thank you — your message is with us.", m = { title: G, emailLabel: Q, locale: U, submitEndpoint: Y, messageLabel: K, customClass: X, companyLabel: H, visualTheme: p, nameLabel: ee, submitLabel: te, visible: ie, submittingLabel: se, failureMessage: ne, consentPolicyVersion: oe, description: ae, routeAttribution: re, consentLabel: ce, successMessage: le }, [I, ue] = v(() => structuredClone(!1)), [q, de] = v(() => structuredClone(!1)), [me, be] = v(() => structuredClone("idle")), [ye, ge] = v(() => structuredClone("")), [fe, he] = v(() => structuredClone("")), [R, Se] = v(() => structuredClone(!1)), b = { showError: I, isSubmitting: q, submissionStatus: me, errorMessage: ye, lastSubmissionId: fe, showSuccess: R }, y = O((t, i) => {
    switch (t) {
      case "showError": {
        const s = typeof i == "function" ? i(b.showError) : i;
        return b.showError = s, ue(s), s;
      }
      case "isSubmitting": {
        const s = typeof i == "function" ? i(b.isSubmitting) : i;
        return b.isSubmitting = s, de(s), s;
      }
      case "submissionStatus": {
        const s = typeof i == "function" ? i(b.submissionStatus) : i;
        return b.submissionStatus = s, be(s), s;
      }
      case "errorMessage": {
        const s = typeof i == "function" ? i(b.errorMessage) : i;
        return b.errorMessage = s, ge(s), s;
      }
      case "lastSubmissionId": {
        const s = typeof i == "function" ? i(b.lastSubmissionId) : i;
        return b.lastSubmissionId = s, he(s), s;
      }
      case "showSuccess": {
        const s = typeof i == "function" ? i(b.showSuccess) : i;
        return b.showSuccess = s, Se(s), s;
      }
      default:
        return i;
    }
  }, [b]);
  O((t, i) => {
    const [s, ...n] = String(t || "").split(".");
    if (!s) return i;
    if (n.length === 0) return y(s, i);
    const c = (o) => {
      const g = Array.isArray(o) ? [...o] : { ...o || {} };
      let d = g;
      return n.forEach((h, S) => {
        S === n.length - 1 ? d[h] = i : (d[h] = Array.isArray(d[h]) ? [...d[h]] : { ...d[h] || {} }, d = d[h]);
      }), g;
    };
    switch (s) {
      case "showError":
        return y("showError", c), i;
      case "isSubmitting":
        return y("isSubmitting", c), i;
      case "submissionStatus":
        return y("submissionStatus", c), i;
      case "errorMessage":
        return y("errorMessage", c), i;
      case "lastSubmissionId":
        return y("lastSubmissionId", c), i;
      case "showSuccess":
        return y("showSuccess", c), i;
      default:
        return i;
    }
  }, [y]);
  const Le = { o_cancelled: { properties: { locale: { type: "string" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" }, o_submissionFailure: { properties: { code: { type: "string" }, locale: { type: "string" }, retryable: { type: "boolean" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" }, o_success: { properties: { locale: { type: "string" }, routeAttribution: { type: "string" }, submissionId: { type: "string" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" }, o_validationFailure: { properties: { fields: { items: { type: "string" }, type: "array" }, locale: { type: "string" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" } }, P = (t, i, s) => {
    if (!i || typeof i != "object") return "";
    const n = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], c = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (n.length && !n.includes(c) && !(c === "integer" && n.includes("number"))) return s + " must be " + n.join(" or ") + ".";
    if (i.enum && !i.enum.some((o) => JSON.stringify(o) === JSON.stringify(t))) return s + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const o of i.required || []) if (!Object.prototype.hasOwnProperty.call(t, o)) return s + "." + o + " is required.";
      for (const [o, g] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(t, o)) {
        const d = P(t[o], g, s + "." + o);
        if (d) return d;
      }
    }
    if (Array.isArray(t) && i.items) for (let o = 0; o < t.length; o++) {
      const g = P(t[o], i.items, s + "[" + o + "]");
      if (g) return g;
    }
    return "";
  }, we = O(async (t, i, s = !1) => {
    const n = Le[t];
    if (!n) throw new Error("Module output '" + t + "' is not declared.");
    const c = P(i, n, "output." + t);
    if (c) throw new Error(c);
    const o = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof o != "function") return i;
    const g = o(t, i, { moduleId: e.moduleId, awaitHandlers: s });
    return s ? await g : i;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]), z = (t, i) => {
    const s = String(i || "").split(".").filter(Boolean);
    if (!(!s.length || s.some((n) => ["__proto__", "prototype", "constructor"].includes(n))))
      return s.reduce((n, c) => {
        if (!(!n || typeof n != "object"))
          return typeof n.get == "function" && !(c in n) ? n.get(c) : n[c];
      }, t);
  }, E = (t, i) => {
    if (Array.isArray(t)) return t.map((n) => E(n, i));
    if (t && typeof t == "object") return Object.fromEntries(Object.entries(t).map(([n, c]) => [E(n, i), E(c, i)]));
    if (typeof t != "string") return t;
    const s = t.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return s ? z(i, s[1]) : t.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (n, c) => {
      const o = z(i, c);
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    });
  };
  async function ve(t = {}) {
    const i = t || {}, s = {}, n = {};
    y("isSubmitting", !0), y("showSuccess", !1), y("showError", !1);
    {
      const o = E({ company: "{{ args.values.company }}", consentGranted: "{{ args.values.consent }}", consentPolicyVersion: "{{ inputs.consentPolicyVersion }}", email: "{{ args.values.email }}", fullName: "{{ args.values.name }}", locale: "{{ inputs.locale }}", message: "{{ args.values.message }}", source: "{{ inputs.routeAttribution }}" }, { args: i, inputs: m, state: b, sharedState: V, applicationState: W, pageState: B, pageData: J, serverData: _, vars: s, stepResults: n }) || {}, g = [o.fullName, o.email, o.company, o.message, o.source, o.locale, o.consentGranted, o.consentPolicyVersion], d = e.executeDatabaseQuery || e.runtime?.executeDatabaseQuery;
      let h;
      if (typeof d == "function")
        h = await d({ moduleId: "cmt8v9xbl000005l86shrhssl", queryId: "lead_insert", parameters: g, namedParameters: o, signal: i.signal });
      else {
        const S = await fetch("/api/modules/cmt8v9xbl000005l86shrhssl/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "lead_insert", parameters: g, namedParameters: o }), signal: i.signal }), x = await S.json().catch(() => ({}));
        if (!S.ok || x.success === !1) throw new Error(x.error || "Database query failed (" + S.status + ")");
        h = x.data;
      }
      n.x4 = h, s.queryResult = h;
    }
    y("showSuccess", !0), y("lastSubmissionId", n.x4[0].id), y("isSubmitting", !1), we("o_success", { locale: m.locale, routeAttribution: m.routeAttribution, submissionId: n.x4[0].id, timestamp: n.x4[0].created_at, version: 1 }, !1).catch((c) => console.error("Module output delivery failed", c));
  }
  const xe = {
    submitLeadForm: ve
  }, Ae = {
    submitLeadForm: ["values"]
  }, _e = (t, i = {}, s = []) => {
    const n = xe[t];
    if (n) {
      const h = Ae[t] || [];
      return n(Object.fromEntries(h.map((S, x) => {
        const A = Object.prototype.hasOwnProperty.call(i, S) ? i[S] : void 0;
        return [S, (A === "" || A === void 0) && s[x] !== void 0 ? s[x] : S === "event" && (A === "" || A === void 0) ? s[0] : A];
      })));
    }
    const c = Z?.[t];
    if (typeof c == "function")
      return c(Object.keys(i).length > 0 ? i : s[0]);
    const [o, g] = String(t).split("."), d = typeof globalThis < "u" ? globalThis[o]?.[g] : void 0;
    if (typeof d == "function") return d(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ f("div", { ref: M, className: "rudra-module-wrapper", children: u(/* @__PURE__ */ ((t) => t === void 0 ? !0 : t)(m?.visible)) && /* @__PURE__ */ a(l, { children: [
    "      ",
    /* @__PURE__ */ a(Oe, { id: "root", id: "contact", "data-theme": /* @__PURE__ */ ((t) => t === void 0 ? "auto" : t)(m?.visualTheme), className: `${r({ sm: "lead-root" }) || ""}`, as: "section", children: [
      "      ",
      u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
        "      ",
        /* @__PURE__ */ a(Me, { id: "container", className: `${r({ sm: "w-full px-6 py-20", md: "px-10" }) || ""}`, maxWidth: "2xl", centered: !0, children: [
          "      ",
          u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
            "      ",
            /* @__PURE__ */ a(L, { id: "shell", "data-layout": "block", className: `${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(/* @__PURE__ */ ((t) => t === void 0 ? "block lumora-lead-shell" : t)(m?.customClass))}`, children: [
              "      ",
              u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                "      ",
                /* @__PURE__ */ a(L, { id: "grid", className: `${r({ sm: "grid lead-grid" }) || ""}`, children: [
                  "      ",
                  u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                    "      ",
                    /* @__PURE__ */ a(L, { id: "copy", className: `${r({ sm: "block lead-copy" }) || ""}`, children: [
                      "      ",
                      u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                        "      ",
                        /* @__PURE__ */ f(D, { id: "title", className: `${r({ sm: "lead-title" }) || ""}`, as: "h2", content: m?.title })
                      ] }),
                      u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                        "      ",
                        /* @__PURE__ */ f(D, { id: "desc", className: `${r({ sm: "lead-desc" }) || ""}`, as: "p", content: m?.description })
                      ] })
                    ] })
                  ] }),
                  u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                    "      ",
                    /* @__PURE__ */ a(L, { id: "card", className: `${r({ sm: "block lead-card" }) || ""}`, children: [
                      "      ",
                      u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                        "      ",
                        /* @__PURE__ */ a($e, { id: "form", className: "lead-form", initialValues: { company: "", consent: !1, email: "", message: "", name: "" }, onSubmit: (...t) => _e("submitLeadForm", {}, t), children: [
                          "      ",
                          u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                            "      ",
                            /* @__PURE__ */ a(L, { id: "fields", className: `${r({ sm: "grid fields" }) || ""}`, children: [
                              "      ",
                              u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                                "      ",
                                /* @__PURE__ */ f(T, { id: "name", icon: /* @__PURE__ */ a(l, { children: [
                                  "      ",
                                  u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                                    "      ",
                                    /* @__PURE__ */ f(L, { id: "name_icon", "aria-hidden": "true", "data-lumora-field-icon": "name", className: `${r({ sm: "block lead-input-icon lead-icon-user" }) || ""}` })
                                  ] })
                                ] }), label: m?.nameLabel, required: !0, iconPosition: "start", name: "name", size: "lg", type: "text" })
                              ] }),
                              u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                                "      ",
                                /* @__PURE__ */ f(T, { id: "email", icon: /* @__PURE__ */ a(l, { children: [
                                  "      ",
                                  u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                                    "      ",
                                    /* @__PURE__ */ f(L, { id: "email_icon", "aria-hidden": "true", "data-lumora-field-icon": "email", className: `${r({ sm: "block lead-input-icon lead-icon-mail" }) || ""}` })
                                  ] })
                                ] }), iconPosition: "start", name: "email", size: "lg", type: "email", label: m?.emailLabel, required: !0 })
                              ] })
                            ] })
                          ] }),
                          u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                            "      ",
                            /* @__PURE__ */ f(T, { id: "company", icon: /* @__PURE__ */ a(l, { children: [
                              "      ",
                              u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                                "      ",
                                /* @__PURE__ */ f(L, { id: "company_icon", "aria-hidden": "true", "data-lumora-field-icon": "company", className: `${r({ sm: "block lead-input-icon lead-icon-company" }) || ""}` })
                              ] })
                            ] }), name: "company", size: "lg", label: m?.companyLabel, iconPosition: "start" })
                          ] }),
                          u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                            "      ",
                            /* @__PURE__ */ f(Pe, { id: "message", maxRows: 9, minRows: 5, required: !0, autoResize: !0, name: "message", size: "lg", label: m?.messageLabel })
                          ] }),
                          u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                            "      ",
                            /* @__PURE__ */ f(Ne, { id: "consent", name: "consent", label: m?.consentLabel, required: !0, colorScheme: "purple" })
                          ] }),
                          u(R) && /* @__PURE__ */ a(l, { children: [
                            "      ",
                            /* @__PURE__ */ f(F, { id: "ok", live: "polite", title: "Inquiry received", variant: "success" })
                          ] }),
                          u(I) && /* @__PURE__ */ a(l, { children: [
                            "      ",
                            /* @__PURE__ */ f(F, { id: "err", live: "assertive", title: "Unable to send", variant: "error" })
                          ] }),
                          u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                            "      ",
                            /* @__PURE__ */ a(L, { id: "actions", className: `${r({ sm: "flex actions" }) || ""}`, children: [
                              "      ",
                              u(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(l, { children: [
                                "      ",
                                /* @__PURE__ */ f(je, { id: "submit", className: "lead-submit", theme: "auto", loading: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(q), fullWidth: !0, size: "lg", type: "submit", variant: "primary", loadingText: m?.submittingLabel, label: m?.submitLabel })
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
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ze as default
};
