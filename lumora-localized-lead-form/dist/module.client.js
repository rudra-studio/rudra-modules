import { jsx as m, jsxs as n, Fragment as a } from "react/jsx-runtime";
import { useState as v, useEffect as _, useRef as ue, useCallback as A } from "react";
import { Typography as z, Alert as W, Button as me } from "@rudra-studio/rudra-core";
import { Form as be, Input as j, Textarea as ye, Checkbox as ge } from "@rudra-studio/rudra-form";
import { Section as he, Container as fe, Box as g } from "@rudra-studio/rudra-layout";
function Te(e) {
  const O = e.serverData || e.serverState || {};
  e.sharedState, e.applicationState || O.applicationState, e.pageState || O.pageState, e.pageData || O.pageData;
  const D = {
    ...e.runtime?.functions || {},
    ...e.runtime?.actions || {},
    ...e.functions || {},
    ...e.actions || {}
  }, h = e.$theme ?? e.theme ?? e.data?.$theme ?? e.runtime?.data?.$theme ?? e.runtime?.theme, k = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Le, M] = v(() => h ?? k());
  _(() => {
    h != null && M(h);
  }, [h]), _(() => {
    if (h != null || typeof document > "u") return;
    const t = document.documentElement, i = (c) => M(c?.detail?.theme ?? k()), o = new MutationObserver(i);
    return o.observe(t, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", i), i(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", i);
    };
  }, [h]);
  const x = ue(null), [E, C] = v("lg");
  _(() => {
    if (!x.current) return;
    const t = new ResizeObserver((i) => {
      for (let o of i) {
        const c = o.contentRect.width;
        c < 768 ? C("sm") : c < 1024 ? C("md") : C("lg");
      }
    });
    return t.observe(x.current), () => t.disconnect();
  }, []);
  const s = A((t) => typeof t != "object" || t === null ? t : E === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : E === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [E]), r = (t) => Array.isArray(t) ? t.length > 0 : typeof t == "string" ? t.trim() !== "" && t.trim().toLowerCase() !== "false" : !!t, B = e.title !== void 0 ? e.title : e.data?.title !== void 0 ? e.data.title : "Let’s create something unforgettable.", J = e.emailLabel !== void 0 ? e.emailLabel : e.data?.emailLabel !== void 0 ? e.data.emailLabel : "Work email", U = e.locale !== void 0 ? e.locale : e.data?.locale !== void 0 ? e.data.locale : "en";
  e.submitEndpoint !== void 0 ? e.submitEndpoint : e.data?.submitEndpoint !== void 0 && e.data.submitEndpoint;
  const V = e.messageLabel !== void 0 ? e.messageLabel : e.data?.messageLabel !== void 0 ? e.data.messageLabel : "What would you love to build?", Y = e.customClass !== void 0 ? e.customClass : e.data?.customClass !== void 0 ? e.data.customClass : "block lumora-lead-shell", G = e.companyLabel !== void 0 ? e.companyLabel : e.data?.companyLabel !== void 0 ? e.data.companyLabel : "Company · Optional", K = e.visualTheme !== void 0 ? e.visualTheme : e.data?.visualTheme !== void 0 ? e.data.visualTheme : "auto", Q = e.nameLabel !== void 0 ? e.nameLabel : e.data?.nameLabel !== void 0 ? e.data.nameLabel : "Your name", X = e.submitLabel !== void 0 ? e.submitLabel : e.data?.submitLabel !== void 0 ? e.data.submitLabel : "Send inquiry", Z = e.visible !== void 0 ? e.visible : e.data?.visible !== void 0 ? e.data.visible : !0, H = e.submittingLabel !== void 0 ? e.submittingLabel : e.data?.submittingLabel !== void 0 ? e.data.submittingLabel : "Sending…";
  e.failureMessage !== void 0 ? e.failureMessage : e.data?.failureMessage !== void 0 && e.data.failureMessage, e.consentPolicyVersion !== void 0 ? e.consentPolicyVersion : e.data?.consentPolicyVersion !== void 0 && e.data.consentPolicyVersion;
  const p = e.description !== void 0 ? e.description : e.data?.description !== void 0 ? e.data.description : "Tell us what you are building. We will respond with a focused plan.", ee = e.routeAttribution !== void 0 ? e.routeAttribution : e.data?.routeAttribution !== void 0 ? e.data.routeAttribution : "/", te = e.consentLabel !== void 0 ? e.consentLabel : e.data?.consentLabel !== void 0 ? e.data.consentLabel : "I agree to be contacted about this inquiry.";
  e.successMessage !== void 0 ? e.successMessage : e.data?.successMessage !== void 0 && e.data.successMessage;
  const u = { title: B, emailLabel: J, locale: U, messageLabel: V, customClass: Y, companyLabel: G, visualTheme: K, nameLabel: Q, submitLabel: X, visible: Z, submittingLabel: H, description: p, routeAttribution: ee, consentLabel: te }, [ie, $] = v(() => structuredClone(!1)), [ne, N] = v(() => structuredClone(!1)), [ve, P] = v(() => structuredClone("idle")), [we, I] = v(() => structuredClone("")), [Se, q] = v(() => structuredClone("")), [se, F] = v(() => structuredClone(!1)), f = A((t, i) => {
    switch (t) {
      case "showError":
        return $(i), i;
      case "isSubmitting":
        return N(i), i;
      case "submissionStatus":
        return P(i), i;
      case "errorMessage":
        return I(i), i;
      case "lastSubmissionId":
        return q(i), i;
      case "showSuccess":
        return F(i), i;
      default:
        return i;
    }
  }, []);
  A((t, i) => {
    const [o, ...c] = String(t || "").split(".");
    if (!o) return i;
    if (c.length === 0) return f(o, i);
    const d = (l) => {
      const y = Array.isArray(l) ? [...l] : { ...l || {} };
      let b = y;
      return c.forEach((L, w) => {
        w === c.length - 1 ? b[L] = i : (b[L] = Array.isArray(b[L]) ? [...b[L]] : { ...b[L] || {} }, b = b[L]);
      }), y;
    };
    switch (o) {
      case "showError":
        return $(d), i;
      case "isSubmitting":
        return N(d), i;
      case "submissionStatus":
        return P(d), i;
      case "errorMessage":
        return I(d), i;
      case "lastSubmissionId":
        return q(d), i;
      case "showSuccess":
        return F(d), i;
      default:
        return i;
    }
  }, [f]);
  const ae = { o_cancelled: { properties: { locale: { type: "string" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" }, o_submissionFailure: { properties: { code: { type: "string" }, locale: { type: "string" }, retryable: { type: "boolean" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" }, o_success: { properties: { locale: { type: "string" }, routeAttribution: { type: "string" }, submissionId: { type: "string" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" }, o_validationFailure: { properties: { fields: { items: { type: "string" }, type: "array" }, locale: { type: "string" }, timestamp: { type: "string" }, version: { type: "number" } }, type: "object" } }, T = (t, i, o) => {
    if (!i || typeof i != "object") return "";
    const c = Array.isArray(i.type) ? i.type : i.type ? [i.type] : [], d = t === null ? "null" : Array.isArray(t) ? "array" : Number.isInteger(t) ? "integer" : typeof t;
    if (c.length && !c.includes(d) && !(d === "integer" && c.includes("number"))) return o + " must be " + c.join(" or ") + ".";
    if (i.enum && !i.enum.some((l) => JSON.stringify(l) === JSON.stringify(t))) return o + " is not an allowed value.";
    if (t && typeof t == "object" && !Array.isArray(t)) {
      for (const l of i.required || []) if (!Object.prototype.hasOwnProperty.call(t, l)) return o + "." + l + " is required.";
      for (const [l, y] of Object.entries(i.properties || {})) if (Object.prototype.hasOwnProperty.call(t, l)) {
        const b = T(t[l], y, o + "." + l);
        if (b) return b;
      }
    }
    if (Array.isArray(t) && i.items) for (let l = 0; l < t.length; l++) {
      const y = T(t[l], i.items, o + "[" + l + "]");
      if (y) return y;
    }
    return "";
  }, re = A(async (t, i, o = !1) => {
    const c = ae[t];
    if (!c) throw new Error("Module output '" + t + "' is not declared.");
    const d = T(i, c, "output." + t);
    if (d) throw new Error(d);
    const l = e.onOutput || e.onModuleOutput || e.runtime?.onOutput;
    if (typeof l != "function") return i;
    const y = l(t, i, { moduleId: e.moduleId, awaitHandlers: o });
    return o ? await y : i;
  }, [e.onOutput, e.onModuleOutput, e.runtime?.onOutput, e.moduleId]);
  async function oe(t = {}) {
    f("isSubmitting", !0), f("showSuccess", !1), f("showError", !1), f("showSuccess", !0), f("lastSubmissionId", steps.x4[0].id), f("isSubmitting", !1), re("o_success", { locale: u.locale, routeAttribution: u.routeAttribution, submissionId: steps.x4[0].id, timestamp: steps.x4[0].created_at, version: 1 }, !1).catch((i) => console.error("Module output delivery failed", i));
  }
  const le = {
    submitLeadForm: oe
  }, ce = {
    submitLeadForm: ["values"]
  }, de = (t, i = {}, o = []) => {
    const c = le[t];
    if (c) {
      const L = ce[t] || [];
      return c(Object.fromEntries(L.map((w, R) => {
        const S = Object.prototype.hasOwnProperty.call(i, w) ? i[w] : void 0;
        return [w, (S === "" || S === void 0) && o[R] !== void 0 ? o[R] : w === "event" && (S === "" || S === void 0) ? o[0] : S];
      })));
    }
    const d = D?.[t];
    if (typeof d == "function")
      return d(Object.keys(i).length > 0 ? i : o[0]);
    const [l, y] = String(t).split("."), b = typeof globalThis < "u" ? globalThis[l]?.[y] : void 0;
    if (typeof b == "function") return b(...Object.values(i));
    console.warn("Rudra action '" + t + "' is not available in this runtime.");
  };
  return /* @__PURE__ */ m("div", { ref: x, className: "rudra-module-wrapper", children: r(/* @__PURE__ */ ((t) => t === void 0 ? !0 : t)(u?.visible)) && /* @__PURE__ */ n(a, { children: [
    "      ",
    /* @__PURE__ */ n(he, { id: "root", id: "contact", "data-theme": /* @__PURE__ */ ((t) => t === void 0 ? "auto" : t)(u?.visualTheme), className: `${s({ sm: "lead-root" }) || ""}`, as: "section", children: [
      "      ",
      r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
        "      ",
        /* @__PURE__ */ n(fe, { id: "container", className: `${s({ sm: "w-full px-6 py-20", md: "px-10" }) || ""}`, centered: !0, maxWidth: "2xl", children: [
          "      ",
          r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
            "      ",
            /* @__PURE__ */ n(g, { id: "shell", "data-layout": "block", className: `${((t) => t == null || t === !1 || typeof t == "object" ? "" : "" + String(t))(/* @__PURE__ */ ((t) => t === void 0 ? "block lumora-lead-shell" : t)(u?.customClass))}`, children: [
              "      ",
              r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                "      ",
                /* @__PURE__ */ n(g, { id: "grid", className: `${s({ sm: "grid lead-grid" }) || ""}`, children: [
                  "      ",
                  r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                    "      ",
                    /* @__PURE__ */ n(g, { id: "copy", className: `${s({ sm: "block lead-copy" }) || ""}`, children: [
                      "      ",
                      r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                        "      ",
                        /* @__PURE__ */ m(z, { id: "title", className: `${s({ sm: "lead-title" }) || ""}`, as: "h2", content: u?.title })
                      ] }),
                      r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                        "      ",
                        /* @__PURE__ */ m(z, { id: "desc", className: `${s({ sm: "lead-desc" }) || ""}`, as: "p", content: u?.description })
                      ] })
                    ] })
                  ] }),
                  r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                    "      ",
                    /* @__PURE__ */ n(g, { id: "card", className: `${s({ sm: "block lead-card" }) || ""}`, children: [
                      "      ",
                      r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                        "      ",
                        /* @__PURE__ */ n(be, { id: "form", className: "lead-form", initialValues: { company: "", consent: !1, email: "", message: "", name: "" }, onSubmit: (...t) => de("submitLeadForm", {}, t), children: [
                          "      ",
                          r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                            "      ",
                            /* @__PURE__ */ n(g, { id: "fields", className: `${s({ sm: "grid fields" }) || ""}`, children: [
                              "      ",
                              r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                                "      ",
                                /* @__PURE__ */ m(j, { id: "name", icon: /* @__PURE__ */ n(a, { children: [
                                  "      ",
                                  r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                                    "      ",
                                    /* @__PURE__ */ m(g, { id: "name_icon", "aria-hidden": "true", "data-lumora-field-icon": "name", className: `${s({ sm: "block lead-input-icon lead-icon-user" }) || ""}` })
                                  ] })
                                ] }), label: u?.nameLabel, required: !0, iconPosition: "start", name: "name", size: "lg", type: "text" })
                              ] }),
                              r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                                "      ",
                                /* @__PURE__ */ m(j, { id: "email", icon: /* @__PURE__ */ n(a, { children: [
                                  "      ",
                                  r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                                    "      ",
                                    /* @__PURE__ */ m(g, { id: "email_icon", "aria-hidden": "true", "data-lumora-field-icon": "email", className: `${s({ sm: "block lead-input-icon lead-icon-mail" }) || ""}` })
                                  ] })
                                ] }), name: "email", size: "lg", type: "email", label: u?.emailLabel, required: !0, iconPosition: "start" })
                              ] })
                            ] })
                          ] }),
                          r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                            "      ",
                            /* @__PURE__ */ m(j, { id: "company", icon: /* @__PURE__ */ n(a, { children: [
                              "      ",
                              r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                                "      ",
                                /* @__PURE__ */ m(g, { id: "company_icon", "aria-hidden": "true", "data-lumora-field-icon": "company", className: `${s({ sm: "block lead-input-icon lead-icon-company" }) || ""}` })
                              ] })
                            ] }), name: "company", size: "lg", label: u?.companyLabel, iconPosition: "start" })
                          ] }),
                          r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                            "      ",
                            /* @__PURE__ */ m(ye, { id: "message", minRows: 5, required: !0, autoResize: !0, name: "message", size: "lg", label: u?.messageLabel, maxRows: 9 })
                          ] }),
                          r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                            "      ",
                            /* @__PURE__ */ m(ge, { id: "consent", colorScheme: "purple", name: "consent", label: u?.consentLabel, required: !0 })
                          ] }),
                          r(se) && /* @__PURE__ */ n(a, { children: [
                            "      ",
                            /* @__PURE__ */ m(W, { id: "ok", live: "polite", title: "Inquiry received", variant: "success" })
                          ] }),
                          r(ie) && /* @__PURE__ */ n(a, { children: [
                            "      ",
                            /* @__PURE__ */ m(W, { id: "err", title: "Unable to send", variant: "error", live: "assertive" })
                          ] }),
                          r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                            "      ",
                            /* @__PURE__ */ n(g, { id: "actions", className: `${s({ sm: "flex actions" }) || ""}`, children: [
                              "      ",
                              r(s({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(a, { children: [
                                "      ",
                                /* @__PURE__ */ m(me, { id: "submit", className: "lead-submit", label: u?.submitLabel, theme: "auto", loading: /* @__PURE__ */ ((t) => t === void 0 ? !1 : t)(ne), variant: "primary", loadingText: u?.submittingLabel, size: "lg", type: "submit", fullWidth: !0 })
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
  Te as default
};
