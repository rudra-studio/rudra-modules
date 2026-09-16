import { jsx as l, jsxs as n, Fragment as c } from "react/jsx-runtime";
import { useState as w, useEffect as E, useRef as p, useCallback as L } from "react";
import { Button as fe, Typography as m, Card as $ } from "@rudra-studio/rudra-core";
import { Container as Ie, Box as T } from "@rudra-studio/rudra-layout";
function Je(t) {
  const M = {}, g = t.serverData || t.serverState || {}, z = t.sharedState || {}, G = t.applicationState || g.applicationState || {}, F = t.pageState || g.pageState || {}, j = t.pageData || g.pageData || {}, ge = {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  };
  t.$route ?? t.route ?? t.data?.$route ?? t.data?.route ?? t.runtime?.data?.$route ?? t.runtime?.route ?? g?.$route ?? g?.route, t.$params ?? t.routeParams ?? t.params ?? t.data?.$params ?? t.data?.routeParams ?? t.data?.params ?? t.runtime?.data?.$params ?? t.runtime?.route?.params ?? t.runtime?.routeParams ?? t.runtime?.params ?? g?.$params ?? g?.routeParams ?? g?.params, t.$query ?? t.queryParams ?? t.query ?? t.data?.$query ?? t.data?.queryParams ?? t.data?.query ?? t.runtime?.data?.$query ?? t.runtime?.route?.query ?? t.runtime?.queryParams ?? t.runtime?.query ?? g?.$query ?? g?.queryParams ?? g?.query, t.$auth ?? t.auth ?? t.data?.$auth ?? t.data?.auth ?? t.runtime?.data?.$auth ?? t.runtime?.authInfo ?? t.runtime?.auth ?? g?.$auth ?? g?.auth, t.$config ?? t.config ?? t.data?.$config ?? t.data?.config ?? t.runtime?.data?.$config ?? t.runtime?.config ?? g?.$config ?? g?.config, t.$env ?? t.env ?? t.data?.$env ?? t.data?.env ?? t.runtime?.data?.$env ?? t.runtime?.env ?? g?.$env ?? g?.env, t.$locale ?? t.locale ?? t.data?.$locale ?? t.data?.locale ?? t.runtime?.data?.$locale ?? t.runtime?.locale ?? g?.$locale ?? g?.locale, t.$translations ?? t.translations ?? t.data?.$translations ?? t.data?.translations ?? t.runtime?.data?.$translations ?? t.runtime?.translations ?? g?.$translations ?? g?.translations, t.$i18n ?? t.i18n ?? t.data?.$i18n ?? t.data?.i18n ?? t.runtime?.data?.$i18n ?? t.runtime?.i18n ?? g?.$i18n ?? g?.i18n;
  const q = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, V = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Oe, ee] = w(() => q ?? V());
  E(() => {
    q != null && ee(q);
  }, [q]), E(() => {
    if (q != null || typeof document > "u") return;
    const e = document.documentElement, r = (i) => ee(i?.detail?.theme ?? V()), s = new MutationObserver(r);
    return s.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      s.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [q]);
  const J = p(null), [Q, U] = w("lg");
  E(() => {
    if (!J.current) return;
    const e = new ResizeObserver((r) => {
      for (let s of r) {
        const i = s.contentRect.width;
        i < 768 ? U("sm") : i < 1024 ? U("md") : U("lg");
      }
    });
    return e.observe(J.current), () => e.disconnect();
  }, []);
  const d = L((e) => typeof e != "object" || e === null ? e : Q === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : Q === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [Q]), u = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, te = t.authenticated !== void 0 ? t.authenticated : t.data?.authenticated !== void 0 ? t.data.authenticated : !1, be = t.currentCourse !== void 0 ? t.currentCourse : t.data?.currentCourse !== void 0 ? t.data.currentCourse : { description: "Continue matrices, determinants, eigenvalues, and worked examples.", id: "linear-algebra-foundations", lastVisitedAt: "Today", professorName: "Dr. Meera Iyer", progressPercent: 42, section: "Matrices and Eigenvalues", title: "Linear Algebra Foundations" }, ve = t.availableMinutes !== void 0 ? t.availableMinutes : t.data?.availableMinutes !== void 0 ? t.data.availableMinutes : 20, Ce = t.usedMinutes !== void 0 ? t.usedMinutes : t.data?.usedMinutes !== void 0 ? t.data.usedMinutes : 0, _e = t.recentCourses !== void 0 ? t.recentCourses : t.data?.recentCourses !== void 0 ? t.data.recentCourses : [{ id: "linear-algebra-foundations", lastVisitedAt: "Today", professorName: "Dr. Meera Iyer", progressPercent: 42, title: "Linear Algebra Foundations" }, { id: "calculus-one", lastVisitedAt: "Yesterday", professorName: "Prof. Arjun Rao", progressPercent: 68, title: "Calculus I" }, { id: "discrete-mathematics", lastVisitedAt: "3 days ago", professorName: "Dr. Kavitha N", progressPercent: 25, title: "Discrete Mathematics" }], Ne = t.vaultSummary !== void 0 ? t.vaultSummary : t.data?.vaultSummary !== void 0 ? t.data.vaultSummary : { configured: !1, dailyRequestsLimit: 50, dailyRequestsUsed: 0, lastFour: "", model: "", provider: "", status: "not_configured" }, Se = t.vaultEnabled !== void 0 ? t.vaultEnabled : t.data?.vaultEnabled !== void 0 ? t.data.vaultEnabled : !1, Me = t.locale !== void 0 ? t.locale : t.data?.locale !== void 0 ? t.data.locale : "en", we = t.usageSummary !== void 0 ? t.usageSummary : t.data?.usageSummary !== void 0 ? t.data.usageSummary : { active: !1, isExhausted: !1, remainingSeconds: 1200, totalGrantedSeconds: 1200 }, qe = t.visitedCourseCount !== void 0 ? t.visitedCourseCount : t.data?.visitedCourseCount !== void 0 ? t.data.visitedCourseCount : 3, De = t.checkoutStatus !== void 0 ? t.checkoutStatus : t.data?.checkoutStatus !== void 0 ? t.data.checkoutStatus : { message: "", state: "idle" }, Ae = t.userRole !== void 0 ? t.userRole : t.data?.userRole !== void 0 ? t.data.userRole : "guest", R = { authenticated: te, currentCourse: be, availableMinutes: ve, usedMinutes: Ce, recentCourses: _e, vaultSummary: Ne, vaultEnabled: Se, locale: Me, usageSummary: we, visitedCourseCount: qe, checkoutStatus: De, userRole: Ae }, [k, re] = w(() => structuredClone({})), [D, se] = w(() => structuredClone({})), [B, ae] = w(() => structuredClone(!1)), [I, $e] = w(() => structuredClone(!0)), [K, xe] = w(() => structuredClone(!1)), [Z, ne] = w(() => structuredClone("")), [_, oe] = w(() => structuredClone([])), v = { dashboardSummary: k, currentCourseData: D, dashboardLoaded: B, dashboardGuest: I, busy: K, statusMessage: Z, recentCoursesData: _ }, y = L((e, r) => {
    switch (e) {
      case "dashboardSummary": {
        const s = typeof r == "function" ? r(v.dashboardSummary) : r;
        return v.dashboardSummary = s, re(s), s;
      }
      case "currentCourseData": {
        const s = typeof r == "function" ? r(v.currentCourseData) : r;
        return v.currentCourseData = s, se(s), s;
      }
      case "dashboardLoaded": {
        const s = typeof r == "function" ? r(v.dashboardLoaded) : r;
        return v.dashboardLoaded = s, ae(s), s;
      }
      case "dashboardGuest": {
        const s = typeof r == "function" ? r(v.dashboardGuest) : r;
        return v.dashboardGuest = s, $e(s), s;
      }
      case "busy": {
        const s = typeof r == "function" ? r(v.busy) : r;
        return v.busy = s, xe(s), s;
      }
      case "statusMessage": {
        const s = typeof r == "function" ? r(v.statusMessage) : r;
        return v.statusMessage = s, ne(s), s;
      }
      case "recentCoursesData": {
        const s = typeof r == "function" ? r(v.recentCoursesData) : r;
        return v.recentCoursesData = s, oe(s), s;
      }
      default:
        return r;
    }
  }, [v]);
  L((e, r) => {
    const [s, ...i] = String(e || "").split(".");
    if (!s) return r;
    if (i.length === 0) return y(s, r);
    const a = (o) => {
      const b = Array.isArray(o) ? [...o] : { ...o || {} };
      let h = b;
      return i.forEach((f, C) => {
        C === i.length - 1 ? h[f] = r : (h[f] = Array.isArray(h[f]) ? [...h[f]] : { ...h[f] || {} }, h = h[f]);
      }), b;
    };
    switch (s) {
      case "dashboardSummary":
        return y("dashboardSummary", a), r;
      case "currentCourseData":
        return y("currentCourseData", a), r;
      case "dashboardLoaded":
        return y("dashboardLoaded", a), r;
      case "dashboardGuest":
        return y("dashboardGuest", a), r;
      case "busy":
        return y("busy", a), r;
      case "statusMessage":
        return y("statusMessage", a), r;
      case "recentCoursesData":
        return y("recentCoursesData", a), r;
      default:
        return r;
    }
  }, [y]);
  const Pe = { checkoutRequested: { properties: { idempotencyKey: { type: "string" }, planId: { type: "string" } }, required: ["planId", "idempotencyKey"], type: "object" }, mockPaymentRequested: { properties: { orderId: { type: "string" }, outcome: { type: "string" } }, required: ["orderId", "outcome"], type: "object" }, signInRequested: { properties: { source: { type: "string" } }, type: "object" }, vaultMetadataChanged: { properties: { configured: { type: "boolean" }, lastFour: { type: "string" }, lastTestedAt: { type: "string" }, model: { type: "string" }, provider: { type: "string" }, status: { type: "string" } }, type: "object" } }, Y = (e, r, s) => {
    if (!r || typeof r != "object") return "";
    const i = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], a = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (i.length && !i.includes(a) && !(a === "integer" && i.includes("number"))) return s + " must be " + i.join(" or ") + ".";
    if (r.enum && !r.enum.some((o) => JSON.stringify(o) === JSON.stringify(e))) return s + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const o of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, o)) return s + "." + o + " is required.";
      for (const [o, b] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, o)) {
        const h = Y(e[o], b, s + "." + o);
        if (h) return h;
      }
    }
    if (Array.isArray(e) && r.items) for (let o = 0; o < e.length; o++) {
      const b = Y(e[o], r.items, s + "[" + o + "]");
      if (b) return b;
    }
    return "";
  }, ie = L(async (e, r, s = !1) => {
    const i = Pe[e];
    if (!i) throw new Error("Module output '" + e + "' is not declared.");
    const a = Y(r, i, "output." + e);
    if (a) throw new Error(a);
    const o = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof o != "function") return r;
    const b = o(e, r, { moduleId: t.moduleId, awaitHandlers: s });
    return s ? await b : r;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]), ue = (e, r) => {
    const s = String(r || "").split(".").filter(Boolean);
    if (!(!s.length || s.some((i) => ["__proto__", "prototype", "constructor"].includes(i))))
      return s.reduce((i, a) => {
        if (!(!i || typeof i != "object"))
          return typeof i.get == "function" && !(a in i) ? i.get(a) : i[a];
      }, e);
  }, x = (e, r) => {
    if (Array.isArray(e)) return e.map((i) => x(i, r));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([i, a]) => [x(i, r), x(a, r)]));
    if (typeof e != "string") return e;
    const s = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return s ? ue(r, s[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (i, a) => {
      const o = ue(r, a);
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    });
  };
  async function Ee(e = {}) {
    const r = e || {};
    return await ie("checkoutRequested", { idempotencyKey: "checkout-" + Date.now() + "-" + Math.random().toString(36).slice(2), planId: r.planId }, !0), { planId: r.planId, requested: !0 };
  }
  async function Re(e = {}) {
    await ie("signInRequested", { source: "billing-and-usage" }, !0);
  }
  async function W(e = {}) {
    const r = e || {}, s = {}, i = {};
    if (v.busy)
      return { busy: !0, ok: !1 };
    if (y("dashboardGuest", R.authenticated !== !0), y("statusMessage", ""), y("dashboardLoaded", !1), y("dashboardSummary", {}), y("currentCourseData", {}), y("recentCoursesData", []), R.authenticated === !0) {
      y("busy", !0);
      try {
        {
          const o = x({}, { args: r, inputs: R, state: v, sharedState: z, applicationState: G, pageState: F, pageData: j, serverData: g, vars: s, stepResults: i }) || {};
          delete o.email;
          const b = [void 0], h = t.executeDatabaseQuery || t.runtime?.executeDatabaseQuery;
          let f;
          if (typeof h == "function")
            f = await h({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadLearningSummary", parameters: b, namedParameters: o, signal: r.signal });
          else {
            const C = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadLearningSummary", parameters: b, namedParameters: o }), signal: r.signal }), N = await C.json().catch(() => ({}));
            if (!C.ok || N.success === !1) throw new Error(N.error || "Database query failed (" + C.status + ")");
            f = N.data;
          }
          i.load_summary = f, s.queryResult = f;
        }
      } catch (a) {
        const o = { message: a instanceof Error ? a.message : String(a), name: a instanceof Error ? a.name : "Error", status: typeof a?.status == "number" ? a.status : void 0, stepId: "load_summary" };
        return s.error = o, i.load_summary = { error: o }, y("busy", !1), y("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry."), { ok: !1 };
      }
      try {
        {
          const o = x({}, { args: r, inputs: R, state: v, sharedState: z, applicationState: G, pageState: F, pageData: j, serverData: g, vars: s, stepResults: i }) || {};
          delete o.email;
          const b = [void 0], h = t.executeDatabaseQuery || t.runtime?.executeDatabaseQuery;
          let f;
          if (typeof h == "function")
            f = await h({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadCurrentCourse", parameters: b, namedParameters: o, signal: r.signal });
          else {
            const C = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadCurrentCourse", parameters: b, namedParameters: o }), signal: r.signal }), N = await C.json().catch(() => ({}));
            if (!C.ok || N.success === !1) throw new Error(N.error || "Database query failed (" + C.status + ")");
            f = N.data;
          }
          i.load_current = f, s.queryResult = f;
        }
      } catch (a) {
        const o = { message: a instanceof Error ? a.message : String(a), name: a instanceof Error ? a.name : "Error", status: typeof a?.status == "number" ? a.status : void 0, stepId: "load_current" };
        return s.error = o, i.load_current = { error: o }, y("busy", !1), y("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry."), { ok: !1 };
      }
      try {
        {
          const o = x({}, { args: r, inputs: R, state: v, sharedState: z, applicationState: G, pageState: F, pageData: j, serverData: g, vars: s, stepResults: i }) || {};
          delete o.email;
          const b = [void 0], h = t.executeDatabaseQuery || t.runtime?.executeDatabaseQuery;
          let f;
          if (typeof h == "function")
            f = await h({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadRecentCourses", parameters: b, namedParameters: o, signal: r.signal });
          else {
            const C = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadRecentCourses", parameters: b, namedParameters: o }), signal: r.signal }), N = await C.json().catch(() => ({}));
            if (!C.ok || N.success === !1) throw new Error(N.error || "Database query failed (" + C.status + ")");
            f = N.data;
          }
          i.load_recent = f, s.queryResult = f;
        }
      } catch (a) {
        const o = { message: a instanceof Error ? a.message : String(a), name: a instanceof Error ? a.name : "Error", status: typeof a?.status == "number" ? a.status : void 0, stepId: "load_recent" };
        return s.error = o, i.load_recent = { error: o }, y("busy", !1), y("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry."), { ok: !1 };
      }
      try {
        {
          const a = r.event, o = j, b = v, h = await (async () => (function(C, N, A) {
            const X = (S) => Array.isArray(S) ? S[0] || {} : S || {}, H = X(C), ke = X(N), me = X(A), O = (S) => {
              const ye = Number(S);
              return Number.isFinite(ye) ? Math.max(0, Math.min(1e7, Math.floor(ye))) : 0;
            }, he = (S) => S && typeof S == "object" && typeof S.id == "string" && S.id && typeof S.title == "string" && S.title.trim() ? { ...S, title: S.title.slice(0, 180), progressPercent: Math.min(100, O(S.progressPercent)) } : null;
            return { summary: { availableMinutes: O(H.availableMinutes), usedMinutes: O(H.usedMinutes), visitedCourseCount: O(H.visitedCourseCount) }, currentCourse: he(ke.currentCourse) || {}, recentCourses: (Array.isArray(me.recentCourses) ? me.recentCourses : []).map(he).filter(Boolean).slice(0, 3) };
          })(i.load_summary, i.load_current, i.load_recent))();
          i.normalize_dashboard = h, s.customCodeResult = h;
        }
      } catch (a) {
        const o = { message: a instanceof Error ? a.message : String(a), name: a instanceof Error ? a.name : "Error", status: typeof a?.status == "number" ? a.status : void 0, stepId: "normalize_dashboard" };
        return s.error = o, i.normalize_dashboard = { error: o }, y("busy", !1), y("statusMessage", "Usage could not be loaded. No balance has been assumed. Please retry."), { ok: !1 };
      }
      return y("dashboardSummary", i.normalize_dashboard.summary), y("currentCourseData", i.normalize_dashboard.currentCourse), y("recentCoursesData", i.normalize_dashboard.recentCourses), y("dashboardLoaded", !0), y("busy", !1), i.normalize_dashboard;
    } else
      return { guest: !0 };
  }
  const Le = {
    requestCheckout: Ee,
    signIn: Re,
    loadLearningDashboard: W
  }, je = {
    requestCheckout: ["planId"],
    signIn: [],
    loadLearningDashboard: []
  }, ce = (e, r = {}, s = []) => {
    const i = Le[e];
    if (i) {
      const f = je[e] || [];
      return i(Object.fromEntries(f.map((C, N) => {
        const A = Object.prototype.hasOwnProperty.call(r, C) ? r[C] : void 0;
        return [C, (A === "" || A === void 0) && s[N] !== void 0 ? s[N] : C === "event" && (A === "" || A === void 0) ? s[0] : A];
      })));
    }
    const a = ge?.[e];
    if (typeof a == "function")
      return a(Object.keys(r).length > 0 ? r : s[0]);
    const [o, b] = String(e).split("."), h = typeof globalThis < "u" ? globalThis[o]?.[b] : void 0;
    if (typeof h == "function") return h(...Object.values(r));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, P = p(/* @__PURE__ */ new Map()), de = L((e, r, s, i) => {
    const a = P.current.get(e);
    if (r === "exhaust" && a?.promise) return a.promise;
    r === "takeLatest" && a?.controller?.abort();
    const o = new AbortController(), b = () => Promise.resolve().then(() => s(o.signal)), h = r === "queue" && a?.promise ? a.promise.catch(() => {
    }).then(b) : b();
    return P.current.set(e, { controller: o, promise: h }), h.catch((f) => {
      f?.name !== "AbortError" && console.error(i, f);
    }).finally(() => {
      P.current.get(e)?.promise === h && P.current.delete(e);
    }), h;
  }, []);
  E(() => () => {
    for (const e of P.current.values()) e.controller?.abort();
    P.current.clear();
  }, []), E(() => {
    de("learning_dashboard_mountloadLearningDashboardSsr", "takeLatest", (e) => W({ signal: e }), "Module mount lifecycle failed:");
  }, []);
  const le = p(!1);
  return E(() => {
    if (!le.current) {
      le.current = !0;
      return;
    }
    re(structuredClone({})), se(structuredClone({})), oe(structuredClone([])), ne(structuredClone("")), ae(structuredClone(!1)), de("usage_identity_changeloadLearningDashboardSsr", "takeLatest", (e) => W({ signal: e }), "Module input lifecycle failed:");
  }, [te]), /* @__PURE__ */ l("div", { ref: J, className: "rudra-module-wrapper", children: u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
    "      ",
    /* @__PURE__ */ n(Ie, { id: "root", className: "rs-learning-dashboard", as: "main", maxWidth: "full", children: [
      "      ",
      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
        "      ",
        /* @__PURE__ */ n(T, { id: "stack", className: "flex flex-col rs-dashboard-stack", children: [
          "      ",
          u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(I)) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ l(fe, { id: "usage_signin", className: "rs-usage-button", label: "Sign in", onAction: (...e) => ce("signIn", {}, e) })
          ] }),
          u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ l(m, { id: "kicker", className: "rs-kicker", as: "p", content: "Rudra Scholar" })
          ] }),
          u(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Z)) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ l(m, { id: "usage_error", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Z), "aria-live": "polite" })
          ] }),
          u(/* @__PURE__ */ ((e) => !e)(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(I))) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ l(fe, { id: "usage_refresh", className: "rs-usage-button", label: "Refresh usage", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(K), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(K), onAction: (...e) => ce("loadLearningDashboardSsr", {}, e), loadingText: "Loading usage…" })
          ] }),
          u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ l(m, { id: "title", className: "rs-page-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learning overview" : e)(M?.i18n?.title) })
          ] }),
          u(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(I)) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ l(m, { id: "usage_guest", as: "p", content: "Sign in to see your learning time and recent courses.", "aria-live": "polite" })
          ] }),
          u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ l(m, { id: "subtitle", className: "rs-page-subtitle", content: /* @__PURE__ */ ((e) => e === void 0 ? "Track your available learning time and continue where you left off." : e)(M?.i18n?.subtitle), as: "p" })
          ] }),
          u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ n(T, { id: "summary_grid", className: "grid rs-summary-grid", children: [
              "      ",
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ n($, { id: "available_card", className: "rs-stat-card rs-stat-card-accent", as: "section", theme: "auto", children: [
                  "      ",
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "available_label", className: "rs-stat-label", content: /* @__PURE__ */ ((e) => e === void 0 ? "Available time" : e)(M?.i18n?.availableTime), as: "p" })
                  ] }),
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "available_value", className: "rs-stat-value rs-stat-value-minutes", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(k?.availableMinutes) })
                  ] }),
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "available_note", className: "rs-stat-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready for active AI-assisted learning." : e)(M?.i18n?.availableNote) })
                  ] })
                ] })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ n($, { id: "used_card", className: "rs-stat-card", as: "section", theme: "auto", children: [
                  "      ",
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "used_label", className: "rs-stat-label", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Time used" : e)(M?.i18n?.timeUsed) })
                  ] }),
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "used_value", className: "rs-stat-value rs-stat-value-minutes", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(k?.usedMinutes) })
                  ] }),
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "used_note", className: "rs-stat-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Only active learning time is counted." : e)(M?.i18n?.usedNote) })
                  ] })
                ] })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ n($, { id: "visited_card", className: "rs-stat-card", as: "section", theme: "auto", children: [
                  "      ",
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "visited_label", className: "rs-stat-label", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Visited courses" : e)(M?.i18n?.visitedCourses) })
                  ] }),
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "visited_value", className: "rs-stat-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(k?.visitedCourseCount) })
                  ] }),
                  u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ l(m, { id: "visited_note", className: "rs-stat-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Your most recent learning activity." : e)(M?.i18n?.visitedNote) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D?.id)) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ n($, { id: "current_card", className: "rs-current-card", theme: "auto", as: "section", children: [
              "      ",
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "current_eyebrow", className: "rs-section-label", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Continue learning" : e)(M?.i18n?.continueLearning) })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "current_title", className: "rs-current-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select a course" : e)(D?.title) })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "current_description", className: "rs-current-description", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Resume your latest lesson." : e)(D?.description) })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "current_meta", className: "rs-course-meta", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(D?.professorName) })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "current_progress", className: "rs-progress-pill rs-progress-value", as: "p", content: ((e) => String(Math.max(0, Math.min(100, Number(e) || 0))) + "%")(/* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(D?.progressPercent)) })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "current_last_visit", className: "rs-last-visit rs-last-visit-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(D?.lastVisitedAt) })
              ] })
            ] })
          ] }),
          u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(B)) && /* @__PURE__ */ n(c, { children: [
            "      ",
            /* @__PURE__ */ n(T, { id: "recent_section", className: "flex flex-col rs-recent-section", children: [
              "      ",
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "recent_heading", className: "rs-section-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently visited" : e)(M?.i18n?.recentCourses) })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "recent_description", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Pick up a course from your recent activity." : e)(M?.i18n?.recentDescription) })
              ] }),
              u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ n(T, { id: "recent_grid", className: "grid rs-course-grid", children: [
                  "      ",
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_?.[0]?.id)) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ n($, { id: "recent_course_1", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_1_label", className: "rs-course-index", as: "p", content: "01" })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_1_title", className: "rs-course-title", as: "h4", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course unavailable" : e)(_?.[0]?.title) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_1_professor", className: "rs-course-meta", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(_?.[0]?.professorName), as: "p" })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_1_progress", className: "rs-course-progress rs-progress-value", as: "p", content: ((e) => String(Math.max(0, Math.min(100, Number(e) || 0))) + "%")(/* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(_?.[0]?.progressPercent)) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_1_visited", className: "rs-last-visit rs-visited-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(_?.[0]?.lastVisitedAt) })
                      ] })
                    ] })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_?.[1]?.id)) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ n($, { id: "recent_course_2", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_2_label", className: "rs-course-index", as: "p", content: "02" })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_2_title", className: "rs-course-title", as: "h4", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course unavailable" : e)(_?.[1]?.title) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_2_professor", className: "rs-course-meta", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(_?.[1]?.professorName) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_2_progress", className: "rs-course-progress rs-progress-value", as: "p", content: ((e) => String(Math.max(0, Math.min(100, Number(e) || 0))) + "%")(/* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(_?.[1]?.progressPercent)) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_2_visited", className: "rs-last-visit rs-visited-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(_?.[1]?.lastVisitedAt) })
                      ] })
                    ] })
                  ] }),
                  u(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_?.[2]?.id)) && /* @__PURE__ */ n(c, { children: [
                    "      ",
                    /* @__PURE__ */ n($, { id: "recent_course_3", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_3_label", className: "rs-course-index", as: "p", content: "03" })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_3_title", className: "rs-course-title", as: "h4", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course unavailable" : e)(_?.[2]?.title) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_3_professor", className: "rs-course-meta", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(_?.[2]?.professorName) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_3_progress", className: "rs-course-progress rs-progress-value", as: "p", content: ((e) => String(Math.max(0, Math.min(100, Number(e) || 0))) + "%")(/* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(_?.[2]?.progressPercent)) })
                      ] }),
                      u(d({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(c, { children: [
                        "      ",
                        /* @__PURE__ */ l(m, { id: "recent_course_3_visited", className: "rs-last-visit rs-visited-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(_?.[2]?.lastVisitedAt) })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              u(((e) => Array.isArray(e) && !e.length)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(_))) && /* @__PURE__ */ n(c, { children: [
                "      ",
                /* @__PURE__ */ l(m, { id: "usage_empty", as: "p", content: "No recent courses yet. Open Course Explorer to begin." })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Je as default
};
