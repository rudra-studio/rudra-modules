import { jsx as m, jsxs as t, Fragment as i } from "react/jsx-runtime";
import { useState as S, useEffect as L, useRef as H, useCallback as F } from "react";
import { Typography as y, Button as x, Alert as ue, Card as R } from "@rudra-studio/rudra-core";
import { Container as Je, Box as k } from "@rudra-studio/rudra-layout";
import { Input as $e } from "@rudra-studio/rudra-form";
function Ye(n) {
  const A = {}, I = n.serverData || n.serverState || {}, D = n.sharedState || {}, E = n.applicationState || I.applicationState || {}, N = n.pageState || I.pageState || {}, j = n.pageData || I.pageData || {}, de = {
    ...n.runtime?.functions || {},
    ...n.runtime?.actions || {},
    ...n.functions || {},
    ...n.actions || {}
  }, z = n.$theme ?? n.theme ?? n.data?.$theme ?? n.runtime?.data?.$theme ?? n.runtime?.theme, X = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [He, V] = S(() => z ?? X());
  L(() => {
    z != null && V(z);
  }, [z]), L(() => {
    if (z != null || typeof document > "u") return;
    const e = document.documentElement, r = (o) => V(o?.detail?.theme ?? X()), a = new MutationObserver(r);
    return a.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      a.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [z]);
  const K = H(null), [Z, G] = S("lg");
  L(() => {
    if (!K.current) return;
    const e = new ResizeObserver((r) => {
      for (let a of r) {
        const o = a.contentRect.width;
        o < 768 ? G("sm") : o < 1024 ? G("md") : G("lg");
      }
    });
    return e.observe(K.current), () => e.disconnect();
  }, []);
  const l = F((e) => typeof e != "object" || e === null ? e : Z === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : Z === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [Z]), c = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, me = n.errorMessage !== void 0 ? n.errorMessage : n.data?.errorMessage !== void 0 ? n.data.errorMessage : "", pe = n.loading !== void 0 ? n.loading : n.data?.loading !== void 0 ? n.data.loading : !1, fe = n.courses !== void 0 ? n.courses : n.data?.courses !== void 0 ? n.data.courses : [{ description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, title: "Engineering Mathematics I" }, { description: "Limits, derivatives, integration, and applications.", id: "22222222-2222-4222-8222-222222222212", isFavorite: !1, professorId: "prof-arjun", professorName: "Prof. Arjun Rao", progressPercent: 68, sectionCount: 10, title: "Calculus I" }, { description: "Logic, relations, combinatorics, and graph theory.", id: "33333333-3333-4333-8333-333333333312", isFavorite: !1, professorId: "prof-kavitha", professorName: "Dr. Kavitha N", progressPercent: 25, sectionCount: 7, title: "Discrete Mathematics" }], he = n.selectedCourse !== void 0 ? n.selectedCourse : n.data?.selectedCourse !== void 0 ? n.data.selectedCourse : { description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, problems: [{ bookmarked: !0, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111121", title: "Eigenvalues of a 2 × 2 matrix", topicPath: "Matrices / Eigenvalues" }, { bookmarked: !1, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111122", title: "Diagonalise a symmetric matrix", topicPath: "Matrices / Diagonalisation" }, { bookmarked: !1, difficulty: "Advanced", id: "11111111-1111-4111-8111-111111111123", title: "Verify the Cayley–Hamilton theorem", topicPath: "Matrices / Matrix theorems" }], professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, sectionTitle: "Matrices / Eigenvalues", title: "Engineering Mathematics I" }, ge = n.favoriteCourses !== void 0 ? n.favoriteCourses : n.data?.favoriteCourses !== void 0 ? n.data.favoriteCourses : [{ description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, title: "Engineering Mathematics I" }], ye = n.professors !== void 0 ? n.professors : n.data?.professors !== void 0 ? n.data.professors : [{ courseCount: 3, id: "prof-meera", institution: "Rudra College of Engineering", name: "Dr. Meera Iyer", subjects: "Linear algebra · Calculus" }, { courseCount: 2, id: "prof-arjun", institution: "Institute of Mathematical Sciences", name: "Prof. Arjun Rao", subjects: "Calculus · Differential equations" }, { courseCount: 4, id: "prof-kavitha", institution: "Rudra College of Engineering", name: "Dr. Kavitha N", subjects: "Discrete mathematics · Graph theory" }], ee = n.locale !== void 0 ? n.locale : n.data?.locale !== void 0 ? n.data.locale : "en", be = n.authenticated !== void 0 ? n.authenticated : n.data?.authenticated !== void 0 ? n.data.authenticated : !0, re = n.searchTerm !== void 0 ? n.searchTerm : n.data?.searchTerm !== void 0 ? n.data.searchTerm : "", ve = n.bookmarkedProblems !== void 0 ? n.bookmarkedProblems : n.data?.bookmarkedProblems !== void 0 ? n.data.bookmarkedProblems : [{ bookmarked: !0, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111121", title: "Eigenvalues of a 2 × 2 matrix", topicPath: "Matrices / Eigenvalues" }], C = { errorMessage: me, loading: pe, courses: fe, selectedCourse: he, favoriteCourses: ge, professors: ye, locale: ee, authenticated: be, searchTerm: re, bookmarkedProblems: ve }, [te, ke] = S(() => structuredClone("")), [_e, xe] = S(() => structuredClone("")), [Ce, Ie] = S(() => structuredClone("")), [M, Pe] = S(() => structuredClone([{ courseCount: 3, id: "prof-meera", institution: "Rudra College of Engineering", name: "Dr. Meera Iyer", subjects: "Linear algebra · Calculus" }, { courseCount: 2, id: "prof-arjun", institution: "Institute of Mathematical Sciences", name: "Prof. Arjun Rao", subjects: "Calculus · Differential equations" }, { courseCount: 4, id: "prof-kavitha", institution: "Rudra College of Engineering", name: "Dr. Kavitha N", subjects: "Discrete mathematics · Graph theory" }])), [w, we] = S(() => structuredClone([{ description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, title: "Engineering Mathematics I" }, { description: "Limits, derivatives, integration, and applications.", id: "22222222-2222-4222-8222-222222222212", isFavorite: !1, professorId: "prof-arjun", professorName: "Prof. Arjun Rao", progressPercent: 68, sectionCount: 10, title: "Calculus I" }, { description: "Logic, relations, combinatorics, and graph theory.", id: "33333333-3333-4333-8333-333333333312", isFavorite: !1, professorId: "prof-kavitha", professorName: "Dr. Kavitha N", progressPercent: 25, sectionCount: 7, title: "Discrete Mathematics" }])), [q, De] = S(() => structuredClone({ description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, problems: [{ bookmarked: !0, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111121", title: "Eigenvalues of a 2 × 2 matrix", topicPath: "Matrices / Eigenvalues" }, { bookmarked: !1, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111122", title: "Diagonalise a symmetric matrix", topicPath: "Matrices / Diagonalisation" }, { bookmarked: !1, difficulty: "Advanced", id: "11111111-1111-4111-8111-111111111123", title: "Verify the Cayley–Hamilton theorem", topicPath: "Matrices / Matrix theorems" }], professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, sectionTitle: "Matrices / Eigenvalues", title: "Engineering Mathematics I" })), [Q, Ee] = S(() => structuredClone([{ bookmarked: !0, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111121", title: "Eigenvalues of a 2 × 2 matrix", topicPath: "Matrices / Eigenvalues" }])), [se, Ne] = S(() => structuredClone("")), [J, je] = S(() => structuredClone([{ description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, title: "Engineering Mathematics I" }])), [oe, qe] = S(() => structuredClone(!1)), b = { searchText: te, selectedProfessorId: _e, selectedCourseId: Ce, professorsData: M, coursesData: w, selectedCourseData: q, bookmarkedProblemsData: Q, catalogueError: se, favoriteCoursesData: J, catalogueLoading: oe }, v = F((e, r) => {
    switch (e) {
      case "searchText": {
        const a = typeof r == "function" ? r(b.searchText) : r;
        return b.searchText = a, ke(a), a;
      }
      case "selectedProfessorId": {
        const a = typeof r == "function" ? r(b.selectedProfessorId) : r;
        return b.selectedProfessorId = a, xe(a), a;
      }
      case "selectedCourseId": {
        const a = typeof r == "function" ? r(b.selectedCourseId) : r;
        return b.selectedCourseId = a, Ie(a), a;
      }
      case "professorsData": {
        const a = typeof r == "function" ? r(b.professorsData) : r;
        return b.professorsData = a, Pe(a), a;
      }
      case "coursesData": {
        const a = typeof r == "function" ? r(b.coursesData) : r;
        return b.coursesData = a, we(a), a;
      }
      case "selectedCourseData": {
        const a = typeof r == "function" ? r(b.selectedCourseData) : r;
        return b.selectedCourseData = a, De(a), a;
      }
      case "bookmarkedProblemsData": {
        const a = typeof r == "function" ? r(b.bookmarkedProblemsData) : r;
        return b.bookmarkedProblemsData = a, Ee(a), a;
      }
      case "catalogueError": {
        const a = typeof r == "function" ? r(b.catalogueError) : r;
        return b.catalogueError = a, Ne(a), a;
      }
      case "favoriteCoursesData": {
        const a = typeof r == "function" ? r(b.favoriteCoursesData) : r;
        return b.favoriteCoursesData = a, je(a), a;
      }
      case "catalogueLoading": {
        const a = typeof r == "function" ? r(b.catalogueLoading) : r;
        return b.catalogueLoading = a, qe(a), a;
      }
      default:
        return r;
    }
  }, [b]);
  F((e, r) => {
    const [a, ...o] = String(e || "").split(".");
    if (!a) return r;
    if (o.length === 0) return v(a, r);
    const d = (s) => {
      const f = Array.isArray(s) ? [...s] : { ...s || {} };
      let p = f;
      return o.forEach((u, h) => {
        h === o.length - 1 ? p[u] = r : (p[u] = Array.isArray(p[u]) ? [...p[u]] : { ...p[u] || {} }, p = p[u]);
      }), f;
    };
    switch (a) {
      case "searchText":
        return v("searchText", d), r;
      case "selectedProfessorId":
        return v("selectedProfessorId", d), r;
      case "selectedCourseId":
        return v("selectedCourseId", d), r;
      case "professorsData":
        return v("professorsData", d), r;
      case "coursesData":
        return v("coursesData", d), r;
      case "selectedCourseData":
        return v("selectedCourseData", d), r;
      case "bookmarkedProblemsData":
        return v("bookmarkedProblemsData", d), r;
      case "catalogueError":
        return v("catalogueError", d), r;
      case "favoriteCoursesData":
        return v("favoriteCoursesData", d), r;
      case "catalogueLoading":
        return v("catalogueLoading", d), r;
      default:
        return r;
    }
  }, [v]);
  const Se = { bookmarkToggled: { properties: { bookmarked: { type: "boolean" }, problemId: { type: "string" } }, required: ["problemId", "bookmarked"], type: "object" }, courseSelected: { properties: { courseId: { type: "string" } }, required: ["courseId"], type: "object" }, favoriteToggled: { properties: { courseId: { type: "string" }, favorite: { type: "boolean" } }, required: ["courseId", "favorite"], type: "object" }, problemSelected: { properties: { courseContext: { type: "object" }, courseId: { type: "string" }, locale: { type: "string" }, problem: { type: "object" }, problemId: { type: "string" } }, required: ["problemId", "locale", "problem", "courseContext"], type: "object" }, professorSelected: { properties: { professorId: { type: "string" } }, required: ["professorId"], type: "object" }, searchChanged: { properties: { locale: { type: "string" }, term: { type: "string" } }, required: ["term", "locale"], type: "object" } }, U = (e, r, a) => {
    if (!r || typeof r != "object") return "";
    const o = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], d = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(d) && !(d === "integer" && o.includes("number"))) return a + " must be " + o.join(" or ") + ".";
    if (r.enum && !r.enum.some((s) => JSON.stringify(s) === JSON.stringify(e))) return a + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const s of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, s)) return a + "." + s + " is required.";
      for (const [s, f] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, s)) {
        const p = U(e[s], f, a + "." + s);
        if (p) return p;
      }
    }
    if (Array.isArray(e) && r.items) for (let s = 0; s < e.length; s++) {
      const f = U(e[s], r.items, a + "[" + s + "]");
      if (f) return f;
    }
    return "";
  }, O = F(async (e, r, a = !1) => {
    const o = Se[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const d = U(r, o, "output." + e);
    if (d) throw new Error(d);
    const s = n.onOutput || n.onModuleOutput || n.runtime?.onOutput;
    if (typeof s != "function") return r;
    const f = s(e, r, { moduleId: n.moduleId, awaitHandlers: a });
    return a ? await f : r;
  }, [n.onOutput, n.onModuleOutput, n.runtime?.onOutput, n.moduleId]), ae = (e, r) => {
    const a = String(r || "").split(".").filter(Boolean);
    if (!(!a.length || a.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return a.reduce((o, d) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(d in o) ? o.get(d) : o[d];
      }, e);
  }, P = (e, r) => {
    if (Array.isArray(e)) return e.map((o) => P(o, r));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([o, d]) => [P(o, r), P(d, r)]));
    if (typeof e != "string") return e;
    const a = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return a ? ae(r, a[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, d) => {
      const s = ae(r, d);
      return s == null ? "" : typeof s == "object" ? JSON.stringify(s) : String(s);
    });
  };
  async function Ae(e = {}) {
    const r = e || {}, a = {}, o = {};
    {
      r.event;
      const d = await (async () => ({ problemId: String(r.problemId || ""), bookmarked: !r.bookmarked }))();
      o.bookmark_read = d, a.customCodeResult = d;
    }
    {
      const s = P({ bookmarked: "{{ stepResults.bookmark_read.bookmarked }}", email: "", problemId: "{{ stepResults.bookmark_read.problemId }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.problemId, s.bookmarked], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarToggleProblemBookmark", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarToggleProblemBookmark", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.bookmark_query = u, a.queryResult = u;
    }
    {
      const s = P({ email: "", locale: "{{ inputs.locale }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.locale], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadBookmarkedProblems", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadBookmarkedProblems", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.bookmark_refresh = u, a.queryResult = u;
    }
    {
      r.event;
      const d = await (async () => {
        const f = (Array.isArray(o.bookmark_refresh) ? o.bookmark_refresh : [])[0] || {}, p = Array.isArray(f.bookmarkedProblems) ? f.bookmarkedProblems : [], u = o.bookmark_read.problemId, h = o.bookmark_read.bookmarked, g = { ...b.selectedCourseData || {} };
        return g.problems = (Array.isArray(g.problems) ? g.problems : []).map((T) => String(T.id) === u ? { ...T, bookmarked: h } : T), { bookmarks: p, selected: g };
      })();
      o.bookmark_merge = d, a.customCodeResult = d;
    }
    v("bookmarkedProblemsData", o.bookmark_merge.bookmarks), v("selectedCourseData", o.bookmark_merge.selected), O("bookmarkToggled", { bookmarked: o.bookmark_read.bookmarked, problemId: o.bookmark_read.problemId }, !1).catch((d) => console.error("Module output delivery failed", d));
  }
  async function Te(e = {}) {
    const r = e || {}, a = {};
    {
      r.event;
      const o = await (async () => {
        const d = String(r.problemId || ""), s = b.selectedCourseData && typeof b.selectedCourseData == "object" ? b.selectedCourseData : {}, p = [...Array.isArray(s.problems) ? s.problems : [], ...Array.isArray(b.bookmarkedProblemsData) ? b.bookmarkedProblemsData : []].find((u) => String(u.id) === d) || { id: d, statement: "", title: "" };
        return { problem: { ...p, statement: String(p.statement || p.title || "") }, courseContext: { syllabusId: String(s.id || p.courseId || ""), courseTitle: String(s.title || ""), professorName: String(s.professorName || ""), sectionTitle: String(s.sectionTitle || ""), topicPath: String(p.topicPath || ""), hierarchy: s.hierarchy || {} } };
      })();
      a.problem_resolve = o;
    }
    O("problemSelected", { courseContext: a.problem_resolve.courseContext, courseId: a.problem_resolve.courseContext.syllabusId, locale: C.locale, problem: a.problem_resolve.problem, problemId: r.problemId }, !1).catch((o) => console.error("Module output delivery failed", o));
  }
  async function ce(e = {}) {
    const r = e || {}, a = {}, o = {};
    v("catalogueLoading", !0);
    {
      const s = P({ email: "", term: "{{ state.searchText }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.term], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarBrowseProfessors", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarBrowseProfessors", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.search_professors = u, a.queryResult = u;
    }
    {
      const s = P({ email: "", professorId: "{{ state.selectedProfessorId }}", term: "{{ state.searchText }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.term, s.professorId], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.search_courses = u, a.queryResult = u;
    }
    {
      r.event;
      const d = await (async () => {
        const s = (u) => Array.isArray(u) ? u[0] || {} : u || {}, f = s(o.search_professors), p = s(o.search_courses);
        return { professors: Array.isArray(f.professors) ? f.professors : [], courses: Array.isArray(p.courses) ? p.courses : [] };
      })();
      o.search_parse = d, a.customCodeResult = d;
    }
    v("professorsData", o.search_parse.professors), v("coursesData", o.search_parse.courses), v("catalogueLoading", !1), O("searchChanged", { locale: C.locale, term: b.searchText }, !1).catch((d) => console.error("Module output delivery failed", d));
  }
  async function Re(e = {}) {
    v("searchText", ""), v("selectedProfessorId", ""), await $({}), O("searchChanged", { locale: C.locale, term: "" }, !1).catch((r) => console.error("Module output delivery failed", r));
  }
  async function Me(e = {}) {
    const r = e || {}, a = {}, o = {};
    v("selectedProfessorId", r.professorId);
    {
      const s = P({ email: "", professorId: "{{ args.professorId }}", term: "{{ state.searchText }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.term, s.professorId], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.prof_query = u, a.queryResult = u;
    }
    {
      r.event;
      const d = await (async () => {
        const s = Array.isArray(o.prof_query) ? o.prof_query[0] || {} : o.prof_query || {};
        return Array.isArray(s.courses) ? s.courses : [];
      })();
      o.prof_parse = d, a.customCodeResult = d;
    }
    v("coursesData", o.prof_parse), O("professorSelected", { professorId: r.professorId }, !1).catch((d) => console.error("Module output delivery failed", d));
  }
  async function ze(e = {}) {
    const r = e || {}, a = {}, o = {};
    v("selectedCourseId", r.courseId);
    {
      const s = P({ courseId: "{{ args.courseId }}", email: "", locale: "{{ inputs.locale }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.courseId, s.locale], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadExplorerCourse", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadExplorerCourse", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.course_query = u, a.queryResult = u;
    }
    {
      r.event;
      const d = await (async () => {
        const s = Array.isArray(o.course_query) ? o.course_query[0] || {} : o.course_query || {};
        return s.selectedCourse && typeof s.selectedCourse == "object" ? s.selectedCourse : {};
      })();
      o.course_parse = d, a.customCodeResult = d;
    }
    v("selectedCourseData", o.course_parse), O("courseSelected", { courseId: r.courseId }, !1).catch((d) => console.error("Module output delivery failed", d));
  }
  async function Oe(e = {}) {
    v("searchText", (e || {}).value);
  }
  async function Le(e = {}) {
    const r = e || {}, a = {}, o = {};
    {
      r.event;
      const d = await (async () => ({ courseId: String(r.courseId || ""), favorite: !r.favorite }))();
      o.favorite_read = d, a.customCodeResult = d;
    }
    {
      const s = P({ courseId: "{{ stepResults.favorite_read.courseId }}", email: "", favorite: "{{ stepResults.favorite_read.favorite }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.courseId, s.favorite], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarToggleCourseFavorite", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarToggleCourseFavorite", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.favorite_query = u, a.queryResult = u;
    }
    {
      const s = P({ email: "" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadFavoriteCourses", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadFavoriteCourses", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.favorite_refresh = u, a.queryResult = u;
    }
    {
      r.event;
      const d = await (async () => {
        const f = (Array.isArray(o.favorite_refresh) ? o.favorite_refresh : [])[0] || {}, p = Array.isArray(f.favoriteCourses) ? f.favoriteCourses : [], u = o.favorite_read.courseId, h = o.favorite_read.favorite, g = (Array.isArray(b.coursesData) ? b.coursesData : []).map((Y) => String(Y.id) === u ? { ...Y, isFavorite: h } : Y), T = b.selectedCourseData && String(b.selectedCourseData.id) === u ? { ...b.selectedCourseData, isFavorite: h } : b.selectedCourseData;
        return { favorites: p, courses: g, selected: T };
      })();
      o.favorite_merge = d, a.customCodeResult = d;
    }
    v("favoriteCoursesData", o.favorite_merge.favorites), v("coursesData", o.favorite_merge.courses), v("selectedCourseData", o.favorite_merge.selected), O("favoriteToggled", { courseId: o.favorite_read.courseId, favorite: o.favorite_read.favorite }, !1).catch((d) => console.error("Module output delivery failed", d));
  }
  async function Be(e = {}) {
    v("searchText", C.searchTerm);
  }
  async function $(e = {}) {
    const r = e || {}, a = {}, o = {};
    v("catalogueLoading", !0), v("catalogueError", "");
    {
      const s = P({ email: "", term: "{{ state.searchText }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.term], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarBrowseProfessors", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarBrowseProfessors", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.catalogue_professors = u, a.queryResult = u;
    }
    {
      const s = P({ email: "", professorId: "{{ state.selectedProfessorId }}", term: "{{ state.searchText }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.term, s.professorId], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.catalogue_courses = u, a.queryResult = u;
    }
    {
      const s = P({ email: "" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadFavoriteCourses", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadFavoriteCourses", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.catalogue_favorites = u, a.queryResult = u;
    }
    {
      const s = P({ email: "", locale: "{{ inputs.locale }}" }, { args: r, inputs: C, state: b, sharedState: D, applicationState: E, pageState: N, pageData: j, serverData: I, vars: a, stepResults: o }) || {};
      delete s.email;
      const f = [void 0, s.locale], p = n.executeDatabaseQuery || n.runtime?.executeDatabaseQuery;
      let u;
      if (typeof p == "function")
        u = await p({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadBookmarkedProblems", parameters: f, namedParameters: s, signal: r.signal });
      else {
        const h = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadBookmarkedProblems", parameters: f, namedParameters: s }), signal: r.signal }), g = await h.json().catch(() => ({}));
        if (!h.ok || g.success === !1) throw new Error(g.error || "Database query failed (" + h.status + ")");
        u = g.data;
      }
      o.catalogue_bookmarks = u, a.queryResult = u;
    }
    {
      r.event;
      const d = await (async () => {
        const s = (g) => Array.isArray(g) ? g[0] || {} : g || {}, f = s(o.catalogue_professors), p = s(o.catalogue_courses), u = s(o.catalogue_favorites), h = s(o.catalogue_bookmarks);
        return { professors: Array.isArray(f.professors) ? f.professors : [], courses: Array.isArray(p.courses) ? p.courses : [], favorites: Array.isArray(u.favoriteCourses) ? u.favoriteCourses : [], bookmarks: Array.isArray(h.bookmarkedProblems) ? h.bookmarkedProblems : [] };
      })();
      o.catalogue_parse = d, a.customCodeResult = d;
    }
    return v("professorsData", o.catalogue_parse.professors), v("coursesData", o.catalogue_parse.courses), v("favoriteCoursesData", o.catalogue_parse.favorites), v("bookmarkedProblemsData", o.catalogue_parse.bookmarks), v("catalogueLoading", !1), o.catalogue_parse;
  }
  async function ie(e = {}) {
    v("searchText", C.searchTerm), await ce({});
  }
  const Fe = {
    toggleExplorerBookmark: Ae,
    openExplorerProblem: Te,
    submitExplorerSearch: ce,
    clearExplorerSearch: Re,
    selectExplorerProfessor: Me,
    selectExplorerCourse: ze,
    setExplorerSearch: Oe,
    toggleExplorerFavorite: Le,
    syncExplorerSearch: Be,
    loadExplorerCatalogue: $,
    syncAndSearchExplorer: ie
  }, Qe = {
    toggleExplorerBookmark: ["problemId", "bookmarked"],
    openExplorerProblem: ["problemId"],
    submitExplorerSearch: [],
    clearExplorerSearch: [],
    selectExplorerProfessor: ["professorId"],
    selectExplorerCourse: ["courseId"],
    setExplorerSearch: ["value"],
    toggleExplorerFavorite: ["courseId", "favorite"],
    syncExplorerSearch: [],
    loadExplorerCatalogue: [],
    syncAndSearchExplorer: []
  }, _ = (e, r = {}, a = []) => {
    const o = Fe[e];
    if (o) {
      const u = Qe[e] || [];
      return o(Object.fromEntries(u.map((h, g) => {
        const T = Object.prototype.hasOwnProperty.call(r, h) ? r[h] : void 0;
        return [h, (T === "" || T === void 0) && a[g] !== void 0 ? a[g] : h === "event" && (T === "" || T === void 0) ? a[0] : T];
      })));
    }
    const d = de?.[e];
    if (typeof d == "function")
      return d(Object.keys(r).length > 0 ? r : a[0]);
    const [s, f] = String(e).split("."), p = typeof globalThis < "u" ? globalThis[s]?.[f] : void 0;
    if (typeof p == "function") return p(...Object.values(r));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, B = H(/* @__PURE__ */ new Map()), W = F((e, r, a, o) => {
    const d = B.current.get(e);
    if (r === "exhaust" && d?.promise) return d.promise;
    r === "takeLatest" && d?.controller?.abort();
    const s = new AbortController(), f = () => Promise.resolve().then(() => a(s.signal)), p = r === "queue" && d?.promise ? d.promise.catch(() => {
    }).then(f) : f();
    return B.current.set(e, { controller: s, promise: p }), p.catch((u) => {
      u?.name !== "AbortError" && console.error(o, u);
    }).finally(() => {
      B.current.get(e)?.promise === p && B.current.delete(e);
    }), p;
  }, []);
  L(() => () => {
    for (const e of B.current.values()) e.controller?.abort();
    B.current.clear();
  }, []), L(() => {
    W("explorer_mountloadExplorerCatalogue", "takeLatest", (e) => $({ signal: e }), "Module mount lifecycle failed:");
  }, []);
  const le = H(!1);
  L(() => {
    if (!le.current) {
      le.current = !0;
      return;
    }
    W("explorer_search_changesyncAndSearchExplorer", "takeLatest", (e) => ie({}), "Module input lifecycle failed:");
  }, [re]);
  const ne = H(!1);
  return L(() => {
    if (!ne.current) {
      ne.current = !0;
      return;
    }
    W("explorer_locale_changeloadExplorerCatalogue", "takeLatest", (e) => $({ signal: e }), "Module input lifecycle failed:");
  }, [ee]), /* @__PURE__ */ m("div", { ref: K, className: "rudra-module-wrapper", children: c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
    "      ",
    /* @__PURE__ */ t(Je, { id: "root", className: "rs-course-explorer", as: "main", maxWidth: "full", children: [
      "      ",
      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
        "      ",
        /* @__PURE__ */ t(k, { id: "stack", className: "flex flex-col rs-explorer-stack", children: [
          "      ",
          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ t(k, { id: "hero", className: "flex rs-explorer-hero", children: [
              "      ",
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ t(k, { id: "hero_copy", className: "flex flex-col rs-hero-copy", children: [
                  "      ",
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ m(y, { id: "kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "STUDENT LIBRARY" : e)(A?.i18n?.kicker) })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ m(y, { id: "title", className: "rs-title", as: "h1", content: /* @__PURE__ */ ((e) => e === void 0 ? "Find your next mathematics lesson" : e)(A?.i18n?.title) })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ m(y, { id: "subtitle", className: "rs-subtitle", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Search professors and courses, save what matters, then continue in the learning workspace." : e)(A?.i18n?.subtitle) })
                  ] })
                ] })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ t(k, { id: "saved_summary", className: "flex rs-saved-summary", children: [
                  "      ",
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ m(y, { id: "favorite_count", className: "rs-summary-number rs-favorite-number", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(J?.length) })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ m(y, { id: "bookmark_count", className: "rs-summary-number rs-bookmark-number", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(Q?.length), as: "strong" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ t(k, { id: "search_panel", className: "grid rs-search-panel", children: [
              "      ",
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m($e, { id: "search_input", label: "Search", value: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(te), placeholder: "Try “linear algebra” or “Dr. Meera Iyer”", onChangeValue: (...e) => _("setExplorerSearch", {}, e) })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(x, { id: "search_button", variant: "primary", onAction: (...e) => _("submitExplorerSearch", {}, e), label: "Search", theme: "auto" })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(x, { id: "clear_button", label: "Clear", theme: "auto", variant: "ghost", onAction: (...e) => _("clearExplorerSearch", {}, e) })
              ] })
            ] })
          ] }),
          c(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(oe)) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ m(ue, { id: "loading_alert", appearance: "soft", live: "polite", title: "Loading courses", variant: "info" })
          ] }),
          c(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(se)) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ m(ue, { id: "error_alert", appearance: "soft", live: "assertive", title: "Course library unavailable", variant: "danger" })
          ] }),
          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ t(k, { id: "prof_section", className: "flex flex-col rs-section", children: [
              "      ",
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "prof_heading", className: "rs-section-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Browse by professor" : e)(A?.i18n?.professors) })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "prof_copy", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose a professor to see their published syllabi." : e)(A?.i18n?.professorHelp) })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ t(k, { id: "prof_grid", className: "grid rs-professor-grid", children: [
                  "      ",
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "prof_0", className: "rs-prof-card", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_0_name", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(M?.[0]?.name) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_0_institution", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Institution" : e)(M?.[0]?.institution) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_0_subjects", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics" : e)(M?.[0]?.subjects) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(x, { id: "prof_0_select", label: "View courses", theme: "auto", variant: "outline", onAction: (...e) => _("selectExplorerProfessor", {}, e) })
                      ] })
                    ] })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "prof_1", className: "rs-prof-card", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_1_name", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(M?.[1]?.name) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_1_institution", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Institution" : e)(M?.[1]?.institution) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_1_subjects", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics" : e)(M?.[1]?.subjects) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(x, { id: "prof_1_select", label: "View courses", theme: "auto", variant: "outline", onAction: (...e) => _("selectExplorerProfessor", {}, e) })
                      ] })
                    ] })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "prof_2", className: "rs-prof-card", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_2_name", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(M?.[2]?.name) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_2_institution", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Institution" : e)(M?.[2]?.institution) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "prof_2_subjects", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics" : e)(M?.[2]?.subjects) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(x, { id: "prof_2_select", label: "View courses", theme: "auto", variant: "outline", onAction: (...e) => _("selectExplorerProfessor", {}, e) })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ t(k, { id: "course_section", className: "flex flex-col rs-section", children: [
              "      ",
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "course_heading", className: "rs-section-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Published courses" : e)(A?.i18n?.courses), as: "h2" })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "course_copy", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select a syllabus to browse its sections, topics, and problems." : e)(A?.i18n?.courseHelp) })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ t(k, { id: "course_grid", className: "grid rs-course-grid", children: [
                  "      ",
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "course_0", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_0_meta", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(w?.[0]?.professorName) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_0_title", className: "rs-card-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course" : e)(w?.[0]?.title), as: "h3" })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_0_desc", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course description" : e)(w?.[0]?.description) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_0_progress", className: "rs-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(w?.[0]?.progressPercent) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "course_0_actions", className: "flex flex-wrap rs-card-actions", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "course_0_open", onAction: (...e) => _("selectExplorerCourse", {}, e), label: "Browse syllabus", theme: "auto", variant: "primary" })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "course_0_favorite", label: "☆ Favourite", theme: "auto", variant: "ghost", onAction: (...e) => _("toggleExplorerFavorite", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "course_1", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_1_meta", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(w?.[1]?.professorName) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_1_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course" : e)(w?.[1]?.title) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_1_desc", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course description" : e)(w?.[1]?.description) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_1_progress", className: "rs-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(w?.[1]?.progressPercent) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "course_1_actions", className: "flex flex-wrap rs-card-actions", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "course_1_open", label: "Browse syllabus", theme: "auto", variant: "primary", onAction: (...e) => _("selectExplorerCourse", {}, e) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "course_1_favorite", label: "☆ Favourite", theme: "auto", variant: "ghost", onAction: (...e) => _("toggleExplorerFavorite", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "course_2", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_2_meta", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(w?.[2]?.professorName) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_2_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course" : e)(w?.[2]?.title) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_2_desc", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course description" : e)(w?.[2]?.description) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "course_2_progress", className: "rs-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(w?.[2]?.progressPercent) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "course_2_actions", className: "flex flex-wrap rs-card-actions", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "course_2_open", label: "Browse syllabus", theme: "auto", variant: "primary", onAction: (...e) => _("selectExplorerCourse", {}, e) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "course_2_favorite", label: "☆ Favourite", theme: "auto", variant: "ghost", onAction: (...e) => _("toggleExplorerFavorite", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ t(k, { id: "problem_section", className: "flex flex-col rs-section rs-problem-section", children: [
              "      ",
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "problem_heading", className: "rs-section-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select a course to browse problems" : e)(q?.title), as: "h2" })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "problem_copy", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sections and topics appear here after course selection." : e)(q?.sectionTitle) })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ t(k, { id: "problem_list", className: "flex flex-col rs-problem-list", children: [
                  "      ",
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "problem_0", className: "grid rs-problem-row", theme: "auto", as: "article", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "problem_0_copy", className: "flex flex-col rs-problem-copy", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_0_path", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Topic" : e)(q?.problems?.[0]?.topicPath) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_0_title", className: "rs-problem-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(q?.problems?.[0]?.title) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_0_difficulty", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Intermediate" : e)(q?.problems?.[0]?.difficulty) })
                          ] })
                        ] })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "problem_0_actions", className: "flex rs-problem-actions", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "problem_0_open", label: "Start problem", theme: "auto", variant: "primary", onAction: (...e) => _("openExplorerProblem", {}, e) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "problem_0_bookmark", label: "☆ Bookmark", theme: "auto", variant: "ghost", onAction: (...e) => _("toggleExplorerBookmark", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "problem_1", className: "grid rs-problem-row", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "problem_1_copy", className: "flex flex-col rs-problem-copy", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_1_path", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Topic" : e)(q?.problems?.[1]?.topicPath) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_1_title", className: "rs-problem-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(q?.problems?.[1]?.title) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_1_difficulty", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Intermediate" : e)(q?.problems?.[1]?.difficulty) })
                          ] })
                        ] })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "problem_1_actions", className: "flex rs-problem-actions", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "problem_1_open", label: "Start problem", theme: "auto", variant: "primary", onAction: (...e) => _("openExplorerProblem", {}, e) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "problem_1_bookmark", variant: "ghost", onAction: (...e) => _("toggleExplorerBookmark", {}, e), label: "☆ Bookmark", theme: "auto" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "problem_2", className: "grid rs-problem-row", as: "article", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "problem_2_copy", className: "flex flex-col rs-problem-copy", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_2_path", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Topic" : e)(q?.problems?.[2]?.topicPath) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_2_title", className: "rs-problem-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(q?.problems?.[2]?.title) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "problem_2_difficulty", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Intermediate" : e)(q?.problems?.[2]?.difficulty) })
                          ] })
                        ] })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "problem_2_actions", className: "flex rs-problem-actions", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "problem_2_open", label: "Start problem", theme: "auto", variant: "primary", onAction: (...e) => _("openExplorerProblem", {}, e) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "problem_2_bookmark", label: "☆ Bookmark", theme: "auto", variant: "ghost", onAction: (...e) => _("toggleExplorerBookmark", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
            "      ",
            /* @__PURE__ */ t(k, { id: "saved_section", className: "flex flex-col rs-section rs-saved-section", children: [
              "      ",
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "saved_heading", className: "rs-section-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Saved for later" : e)(A?.i18n?.saved) })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ m(y, { id: "saved_copy", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Return to favourite courses or bookmarked problems." : e)(A?.i18n?.savedHelp) })
              ] }),
              c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                "      ",
                /* @__PURE__ */ t(k, { id: "saved_grid", className: "grid rs-saved-grid", children: [
                  "      ",
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "favorite_list_card", className: "rs-saved-card", as: "section", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "favorite_list_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Favourite courses" : e)(A?.i18n?.favourites) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "saved_course_0", className: "grid rs-saved-row", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "saved_course_0_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved course" : e)(J?.[0]?.title) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "saved_course_0_open", label: "Open", theme: "auto", variant: "ghost", onAction: (...e) => _("selectExplorerCourse", {}, e) })
                          ] })
                        ] })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "saved_course_1", className: "grid rs-saved-row", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "saved_course_1_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved course" : e)(J?.[1]?.title) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "saved_course_1_open", label: "Open", theme: "auto", variant: "ghost", onAction: (...e) => _("selectExplorerCourse", {}, e) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                    "      ",
                    /* @__PURE__ */ t(R, { id: "bookmark_list_card", className: "rs-saved-card", as: "section", theme: "auto", children: [
                      "      ",
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ m(y, { id: "bookmark_list_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Bookmarked problems" : e)(A?.i18n?.bookmarks) })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "saved_problem_0", className: "grid rs-saved-row", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "saved_problem_0_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved problem" : e)(Q?.[0]?.title) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "saved_problem_0_open", label: "Solve", theme: "auto", variant: "ghost", onAction: (...e) => _("openExplorerProblem", {}, e) })
                          ] })
                        ] })
                      ] }),
                      c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                        "      ",
                        /* @__PURE__ */ t(k, { id: "saved_problem_1", className: "grid rs-saved-row", children: [
                          "      ",
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(y, { id: "saved_problem_1_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved problem" : e)(Q?.[1]?.title) })
                          ] }),
                          c(l({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(i, { children: [
                            "      ",
                            /* @__PURE__ */ m(x, { id: "saved_problem_1_open", label: "Solve", theme: "auto", variant: "ghost", onAction: (...e) => _("openExplorerProblem", {}, e) })
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
  Ye as default
};
