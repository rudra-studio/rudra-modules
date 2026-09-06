import { jsx as d, jsxs as s, Fragment as i } from "react/jsx-runtime";
import { useState as S, useEffect as x, useRef as Z, useCallback as P } from "react";
import { Container as fe, Box as j } from "@rudra-studio/rudra-layout";
import { Typography as l, Card as w } from "@rudra-studio/rudra-core";
function _e(t) {
  const C = {}, A = t.serverData || t.serverState || {}, q = t.sharedState || {}, E = t.applicationState || A.applicationState || {}, k = t.pageState || A.pageState || {}, O = t.pageData || A.pageData || {};
  ({
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  });
  const p = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, J = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [he, Q] = S(() => p ?? J());
  x(() => {
    p != null && Q(p);
  }, [p]), x(() => {
    if (p != null || typeof document > "u") return;
    const e = document.documentElement, r = (o) => Q(o?.detail?.theme ?? J()), a = new MutationObserver(r);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [p]);
  const L = Z(null), [T, I] = S("lg");
  x(() => {
    if (!L.current) return;
    const e = new ResizeObserver((r) => {
      for (let a of r) {
        const o = a.contentRect.width;
        o < 768 ? I("sm") : o < 1024 ? I("md") : I("lg");
      }
    });
    return e.observe(L.current), () => e.disconnect();
  }, []);
  const u = P((e) => typeof e != "object" || e === null ? e : T === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : T === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [T]), n = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, B = t.authenticated !== void 0 ? t.authenticated : t.data?.authenticated !== void 0 ? t.data.authenticated : !1, U = t.recentCourses !== void 0 ? t.recentCourses : t.data?.recentCourses !== void 0 ? t.data.recentCourses : [{ id: "linear-algebra-foundations", lastVisitedAt: "Today", professorName: "Dr. Meera Iyer", progressPercent: 42, title: "Linear Algebra Foundations" }, { id: "calculus-one", lastVisitedAt: "Yesterday", professorName: "Prof. Arjun Rao", progressPercent: 68, title: "Calculus I" }, { id: "discrete-mathematics", lastVisitedAt: "3 days ago", professorName: "Dr. Kavitha N", progressPercent: 25, title: "Discrete Mathematics" }], Y = t.visitedCourseCount !== void 0 ? t.visitedCourseCount : t.data?.visitedCourseCount !== void 0 ? t.data.visitedCourseCount : 3, G = t.usageSummary !== void 0 ? t.usageSummary : t.data?.usageSummary !== void 0 ? t.data.usageSummary : { active: !1, isExhausted: !1, remainingSeconds: 1200, totalGrantedSeconds: 1200 }, W = t.currentCourse !== void 0 ? t.currentCourse : t.data?.currentCourse !== void 0 ? t.data.currentCourse : { description: "Continue matrices, determinants, eigenvalues, and worked examples.", id: "linear-algebra-foundations", lastVisitedAt: "Today", professorName: "Dr. Meera Iyer", progressPercent: 42, section: "Matrices and Eigenvalues", title: "Linear Algebra Foundations" }, X = t.vaultSummary !== void 0 ? t.vaultSummary : t.data?.vaultSummary !== void 0 ? t.data.vaultSummary : { configured: !1, dailyRequestsLimit: 50, dailyRequestsUsed: 0, dailyTokensLimit: "[REDACTED]", dailyTokensUsed: "[REDACTED]", lastFour: "", model: "", provider: "", status: "not_configured" }, H = t.availableMinutes !== void 0 ? t.availableMinutes : t.data?.availableMinutes !== void 0 ? t.data.availableMinutes : 20, V = t.usedMinutes !== void 0 ? t.usedMinutes : t.data?.usedMinutes !== void 0 ? t.data.usedMinutes : 0, ee = t.vaultEnabled !== void 0 ? t.vaultEnabled : t.data?.vaultEnabled !== void 0 ? t.data.vaultEnabled : !1, te = t.checkoutStatus !== void 0 ? t.checkoutStatus : t.data?.checkoutStatus !== void 0 ? t.data.checkoutStatus : { message: "", state: "idle" }, re = t.userRole !== void 0 ? t.userRole : t.data?.userRole !== void 0 ? t.data.userRole : "guest", se = t.locale !== void 0 ? t.locale : t.data?.locale !== void 0 ? t.data.locale : "en", z = { authenticated: B, recentCourses: U, visitedCourseCount: Y, usageSummary: G, currentCourse: W, vaultSummary: X, availableMinutes: H, usedMinutes: V, vaultEnabled: ee, checkoutStatus: te, userRole: re, locale: se }, [ae, ne] = S(() => structuredClone(!1)), [oe, ie] = S(() => structuredClone("")), [b, ce] = S(() => structuredClone([{ id: "linear-algebra-foundations", lastVisitedAt: "Today", professorName: "Dr. Meera Iyer", progressPercent: 42, title: "Linear Algebra Foundations" }, { id: "calculus-one", lastVisitedAt: "Yesterday", professorName: "Prof. Arjun Rao", progressPercent: 68, title: "Calculus I" }, { id: "discrete-mathematics", lastVisitedAt: "3 days ago", professorName: "Dr. Kavitha N", progressPercent: 25, title: "Discrete Mathematics" }])), [$, ue] = S(() => structuredClone({ availableMinutes: 20, usedMinutes: 0, visitedCourseCount: 3 })), [D, de] = S(() => structuredClone({ description: "Continue matrices, determinants, eigenvalues, and worked examples.", id: "linear-algebra-foundations", lastVisitedAt: "Today", professorName: "Dr. Meera Iyer", progressPercent: 42, section: "Matrices and Eigenvalues", title: "Linear Algebra Foundations" })), v = { busy: ae, statusMessage: oe, recentCoursesData: b, dashboardSummary: $, currentCourseData: D }, N = P((e, r) => {
    switch (e) {
      case "busy": {
        const a = typeof r == "function" ? r(v.busy) : r;
        return v.busy = a, ne(a), a;
      }
      case "statusMessage": {
        const a = typeof r == "function" ? r(v.statusMessage) : r;
        return v.statusMessage = a, ie(a), a;
      }
      case "recentCoursesData": {
        const a = typeof r == "function" ? r(v.recentCoursesData) : r;
        return v.recentCoursesData = a, ce(a), a;
      }
      case "dashboardSummary": {
        const a = typeof r == "function" ? r(v.dashboardSummary) : r;
        return v.dashboardSummary = a, ue(a), a;
      }
      case "currentCourseData": {
        const a = typeof r == "function" ? r(v.currentCourseData) : r;
        return v.currentCourseData = a, de(a), a;
      }
      default:
        return r;
    }
  }, [v]);
  P((e, r) => {
    const [a, ...o] = String(e || "").split(".");
    if (!a) return r;
    if (o.length === 0) return N(a, r);
    const m = (c) => {
      const h = Array.isArray(c) ? [...c] : { ...c || {} };
      let y = h;
      return o.forEach((f, g) => {
        g === o.length - 1 ? y[f] = r : (y[f] = Array.isArray(y[f]) ? [...y[f]] : { ...y[f] || {} }, y = y[f]);
      }), h;
    };
    switch (a) {
      case "busy":
        return N("busy", m), r;
      case "statusMessage":
        return N("statusMessage", m), r;
      case "recentCoursesData":
        return N("recentCoursesData", m), r;
      case "dashboardSummary":
        return N("dashboardSummary", m), r;
      case "currentCourseData":
        return N("currentCourseData", m), r;
      default:
        return r;
    }
  }, [N]);
  const le = { checkoutRequested: { properties: { idempotencyKey: { type: "string" }, planId: { type: "string" } }, required: ["planId", "idempotencyKey"], type: "object" }, mockPaymentRequested: { properties: { orderId: { type: "string" }, outcome: { type: "string" } }, required: ["orderId", "outcome"], type: "object" }, signInRequested: { properties: { source: { type: "string" } }, type: "object" }, vaultMetadataChanged: { properties: { configured: { type: "boolean" }, lastFour: { type: "string" }, lastTestedAt: { type: "string" }, model: { type: "string" }, provider: { type: "string" }, status: { type: "string" } }, type: "object" } }, F = (e, r, a) => {
    if (!r || typeof r != "object") return "";
    const o = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], m = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(m) && !(m === "integer" && o.includes("number"))) return a + " must be " + o.join(" or ") + ".";
    if (r.enum && !r.enum.some((c) => JSON.stringify(c) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const c of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, c)) return a + "." + c + " is required.";
      for (const [c, h] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, c)) {
        const y = F(e[c], h, a + "." + c);
        if (y) return y;
      }
    }
    if (Array.isArray(e) && r.items) for (let c = 0; c < e.length; c++) {
      const h = F(e[c], r.items, a + "[" + c + "]");
      if (h) return h;
    }
    return "";
  };
  P(async (e, r, a = !1) => {
    const o = le[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const m = F(r, o, "output." + e);
    if (m) throw new Error(m);
    const c = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof c != "function") return r;
    const h = c(e, r, { moduleId: t.moduleId, awaitHandlers: a });
    return a ? await h : r;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]);
  const K = (e, r) => {
    const a = String(r || "").split(".").filter(Boolean);
    if (!(!a.length || a.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return a.reduce((o, m) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(m in o) ? o.get(m) : o[m];
      }, e);
  }, M = (e, r) => {
    if (Array.isArray(e)) return e.map((o) => M(o, r));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([o, m]) => [M(o, r), M(m, r)]));
    if (typeof e != "string") return e;
    const a = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return a ? K(r, a[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, m) => {
      const c = K(r, m);
      return c == null ? "" : typeof c == "object" ? JSON.stringify(c) : String(c);
    });
  };
  async function me(e = {}) {
    const r = e || {}, a = {}, o = {};
    {
      const c = M({}, { args: r, inputs: z, state: v, sharedState: q, applicationState: E, pageState: k, pageData: O, serverData: A, vars: a, stepResults: o }) || {};
      delete c.email;
      const h = [void 0], y = t.executeDatabaseQuery || t.runtime?.executeDatabaseQuery;
      let f;
      if (typeof y == "function")
        f = await y({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadLearningSummary", parameters: h, namedParameters: c, signal: r.signal });
      else {
        const g = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadLearningSummary", parameters: h, namedParameters: c }), signal: r.signal }), _ = await g.json().catch(() => ({}));
        if (!g.ok || _.success === !1) throw new Error(_.error || "Database query failed (" + g.status + ")");
        f = _.data;
      }
      o.load_summary = f, a.queryResult = f;
    }
    {
      const c = M({}, { args: r, inputs: z, state: v, sharedState: q, applicationState: E, pageState: k, pageData: O, serverData: A, vars: a, stepResults: o }) || {};
      delete c.email;
      const h = [void 0], y = t.executeDatabaseQuery || t.runtime?.executeDatabaseQuery;
      let f;
      if (typeof y == "function")
        f = await y({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadCurrentCourse", parameters: h, namedParameters: c, signal: r.signal });
      else {
        const g = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadCurrentCourse", parameters: h, namedParameters: c }), signal: r.signal }), _ = await g.json().catch(() => ({}));
        if (!g.ok || _.success === !1) throw new Error(_.error || "Database query failed (" + g.status + ")");
        f = _.data;
      }
      o.load_current = f, a.queryResult = f;
    }
    {
      const c = M({}, { args: r, inputs: z, state: v, sharedState: q, applicationState: E, pageState: k, pageData: O, serverData: A, vars: a, stepResults: o }) || {};
      delete c.email;
      const h = [void 0], y = t.executeDatabaseQuery || t.runtime?.executeDatabaseQuery;
      let f;
      if (typeof y == "function")
        f = await y({ moduleId: "cmtma366w000804jo287z6rlp", queryId: "scholarLoadRecentCourses", parameters: h, namedParameters: c, signal: r.signal });
      else {
        const g = await fetch("/api/modules/cmtma366w000804jo287z6rlp/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadRecentCourses", parameters: h, namedParameters: c }), signal: r.signal }), _ = await g.json().catch(() => ({}));
        if (!g.ok || _.success === !1) throw new Error(_.error || "Database query failed (" + g.status + ")");
        f = _.data;
      }
      o.load_recent = f, a.queryResult = f;
    }
    {
      r.event;
      const m = await (async () => {
        const c = (g) => Array.isArray(g) ? g[0] || {} : g || {}, h = c(o.load_summary), y = c(o.load_current), f = c(o.load_recent);
        return { summary: { availableMinutes: Number(h.availableMinutes || 0), usedMinutes: Number(h.usedMinutes || 0), visitedCourseCount: Number(h.visitedCourseCount || 0) }, currentCourse: y.currentCourse && typeof y.currentCourse == "object" ? y.currentCourse : {}, recentCourses: Array.isArray(f.recentCourses) ? f.recentCourses : [] };
      })();
      o.normalize_dashboard = m, a.customCodeResult = m;
    }
    return N("dashboardSummary", o.normalize_dashboard.summary), N("currentCourseData", o.normalize_dashboard.currentCourse), N("recentCoursesData", o.normalize_dashboard.recentCourses), o.normalize_dashboard;
  }
  const R = Z(/* @__PURE__ */ new Map()), ye = P((e, r, a, o) => {
    const m = R.current.get(e);
    if (r === "exhaust" && m?.promise) return m.promise;
    r === "takeLatest" && m?.controller?.abort();
    const c = new AbortController(), h = () => Promise.resolve().then(() => a(c.signal)), y = r === "queue" && m?.promise ? m.promise.catch(() => {
    }).then(h) : h();
    return R.current.set(e, { controller: c, promise: y }), y.catch((f) => {
      f?.name !== "AbortError" && console.error(o, f);
    }).finally(() => {
      R.current.get(e)?.promise === y && R.current.delete(e);
    }), y;
  }, []);
  return x(() => () => {
    for (const e of R.current.values()) e.controller?.abort();
    R.current.clear();
  }, []), x(() => {
    ye("learning_dashboard_mountloadLearningDashboardSsr", "takeLatest", (e) => me({ signal: e }), "Module mount lifecycle failed:");
  }, []), /* @__PURE__ */ d("div", { ref: L, className: "rudra-module-wrapper", children: n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
    "      ",
    /* @__PURE__ */ s(fe, { id: "root", className: "rs-learning-dashboard", maxWidth: "full", as: "main", children: [
      "      ",
      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
        "      ",
        /* @__PURE__ */ s(j, { id: "stack", className: "flex flex-col rs-dashboard-stack", children: [
          "      ",
          n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
            "      ",
            /* @__PURE__ */ d(l, { id: "kicker", className: "rs-kicker", as: "p", content: "Rudra Scholar" })
          ] }),
          n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
            "      ",
            /* @__PURE__ */ d(l, { id: "title", className: "rs-page-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Learning overview" : e)(C?.i18n?.title) })
          ] }),
          n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
            "      ",
            /* @__PURE__ */ d(l, { id: "subtitle", className: "rs-page-subtitle", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Track your available learning time and continue where you left off." : e)(C?.i18n?.subtitle) })
          ] }),
          n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
            "      ",
            /* @__PURE__ */ s(j, { id: "summary_grid", className: "grid rs-summary-grid", children: [
              "      ",
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ s(w, { id: "available_card", className: "rs-stat-card rs-stat-card-accent", as: "section", theme: "auto", children: [
                  "      ",
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "available_label", className: "rs-stat-label", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Available time" : e)(C?.i18n?.availableTime) })
                  ] }),
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "available_value", className: "rs-stat-value rs-stat-value-minutes", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)($?.availableMinutes) })
                  ] }),
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "available_note", className: "rs-stat-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Ready for active AI-assisted learning." : e)(C?.i18n?.availableNote) })
                  ] })
                ] })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ s(w, { id: "used_card", className: "rs-stat-card", as: "section", theme: "auto", children: [
                  "      ",
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "used_label", className: "rs-stat-label", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Time used" : e)(C?.i18n?.timeUsed) })
                  ] }),
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "used_value", className: "rs-stat-value rs-stat-value-minutes", as: "p", content: void 0 })
                  ] }),
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "used_note", className: "rs-stat-note", content: /* @__PURE__ */ ((e) => e === void 0 ? "Only active learning time is counted." : e)(C?.i18n?.usedNote), as: "p" })
                  ] })
                ] })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ s(w, { id: "visited_card", className: "rs-stat-card", as: "section", theme: "auto", children: [
                  "      ",
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "visited_label", className: "rs-stat-label", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Visited courses" : e)(C?.i18n?.visitedCourses) })
                  ] }),
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "visited_value", className: "rs-stat-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)($?.visitedCourseCount) })
                  ] }),
                  n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ d(l, { id: "visited_note", className: "rs-stat-note", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Your most recent learning activity." : e)(C?.i18n?.visitedNote) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          n(void 0) && /* @__PURE__ */ s(i, { children: [
            "      ",
            /* @__PURE__ */ s(w, { id: "current_card", className: "rs-current-card", theme: "auto", as: "section", children: [
              "      ",
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "current_eyebrow", className: "rs-section-label", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Continue learning" : e)(C?.i18n?.continueLearning) })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "current_title", className: "rs-current-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select a course" : e)(D?.title) })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "current_description", className: "rs-current-description", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Resume your latest lesson." : e)(D?.description) })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "current_meta", className: "rs-course-meta", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(D?.professorName) })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "current_progress", className: "rs-progress-pill rs-progress-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(D?.progressPercent) })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "current_last_visit", className: "rs-last-visit rs-last-visit-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(D?.lastVisitedAt) })
              ] })
            ] })
          ] }),
          n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
            "      ",
            /* @__PURE__ */ s(j, { id: "recent_section", className: "flex flex-col rs-recent-section", children: [
              "      ",
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "recent_heading", className: "rs-section-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently visited" : e)(C?.i18n?.recentCourses) })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ d(l, { id: "recent_description", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Pick up a course from your recent activity." : e)(C?.i18n?.recentDescription) })
              ] }),
              n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                "      ",
                /* @__PURE__ */ s(j, { id: "recent_grid", className: "grid rs-course-grid", children: [
                  "      ",
                  n(void 0) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ s(w, { id: "recent_course_1", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_1_label", className: "rs-course-index", as: "p", content: "01" })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_1_title", className: "rs-course-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course unavailable" : e)(b?.[0]?.title), as: "h4" })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_1_professor", className: "rs-course-meta", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(b?.[0]?.professorName) })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_1_progress", className: "rs-course-progress rs-progress-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(b?.[0]?.progressPercent) })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_1_visited", className: "rs-last-visit rs-visited-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(b?.[0]?.lastVisitedAt) })
                      ] })
                    ] })
                  ] }),
                  n(void 0) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ s(w, { id: "recent_course_2", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_2_label", className: "rs-course-index", as: "p", content: "02" })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_2_title", className: "rs-course-title", as: "h4", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course unavailable" : e)(b?.[1]?.title) })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_2_professor", className: "rs-course-meta", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(b?.[1]?.professorName) })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_2_progress", className: "rs-course-progress rs-progress-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(b?.[1]?.progressPercent) })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_2_visited", className: "rs-last-visit rs-visited-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(b?.[1]?.lastVisitedAt) })
                      ] })
                    ] })
                  ] }),
                  n(void 0) && /* @__PURE__ */ s(i, { children: [
                    "      ",
                    /* @__PURE__ */ s(w, { id: "recent_course_3", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_3_label", className: "rs-course-index", as: "p", content: "03" })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_3_title", className: "rs-course-title", as: "h4", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course unavailable" : e)(b?.[2]?.title) })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_3_professor", className: "rs-course-meta", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(b?.[2]?.professorName), as: "p" })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_3_progress", className: "rs-course-progress rs-progress-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(b?.[2]?.progressPercent) })
                      ] }),
                      n(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ s(i, { children: [
                        "      ",
                        /* @__PURE__ */ d(l, { id: "recent_course_3_visited", className: "rs-last-visit rs-visited-value", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Recently" : e)(b?.[2]?.lastVisitedAt) })
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
  _e as default
};
