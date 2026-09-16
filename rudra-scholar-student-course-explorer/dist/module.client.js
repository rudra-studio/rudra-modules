import { jsx as b, jsxs as t, Fragment as c } from "react/jsx-runtime";
import Le, { useState as G, useEffect as ce, useRef as ye, useCallback as ge } from "react";
import * as Se from "lucide-react";
import { Typography as x, Button as O, Alert as he, Card as re } from "@rudra-studio/rudra-core";
import { Container as br, Box as j } from "@rudra-studio/rudra-layout";
import { Input as kr } from "@rudra-studio/rudra-form";
const We = (s) => String(s || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), yr = (s) => {
  let M = s;
  for (; M && typeof M == "object" && "type" in M && "value" in M; )
    M = M.value;
  return M;
};
function W({ icon: s, size: M, color: w, strokeWidth: Z, className: J = "", style: Y, ...q }) {
  const A = yr(s), [X, be] = G(null), Pe = A && typeof A == "object" ? JSON.stringify(A) : String(A || "");
  ce(() => {
    const te = new AbortController();
    let ue = "", me = "";
    if (be(null), typeof A == "string") {
      const F = A.trim();
      if (Se[F]) return () => te.abort();
      F.startsWith("<svg") ? me = F : (/^https?:\/\//.test(F) || F.startsWith("/") || F.startsWith("data:image/svg")) && (ue = F);
    } else A && typeof A == "object" && (A.iconType === "svg" && A.svgContent ? me = A.svgContent : A.iconType === "url" && A.url && (ue = A.url));
    return me ? be(We(me)) : ue && fetch(ue, { signal: te.signal }).then((F) => {
      if (!F.ok) throw new Error("Icon request failed (" + F.status + ")");
      return F.text();
    }).then((F) => {
      F.trim().startsWith("<svg") && be(We(F));
    }).catch((F) => {
      F.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", F);
    }), () => te.abort();
  }, [Pe]);
  const de = A && typeof A == "object" ? A.props || {} : {}, oe = { ...de };
  delete oe.size, delete oe.color, delete oe.strokeWidth;
  const le = M ?? de.size ?? 24, ne = w ?? de.color ?? "currentColor", h = Z ?? de.strokeWidth ?? 1.5;
  let d = "";
  if (typeof A == "string" && Se[A] ? d = A : A && typeof A == "object" && A.name && (!A.iconType || A.iconType === "lucide") && (d = A.name), d) {
    const te = Se[d];
    if (te)
      return Le.createElement(te, {
        size: le,
        color: ne,
        strokeWidth: h,
        className: J,
        style: Y,
        ...oe,
        ...q
      });
  }
  if (X)
    return Le.createElement("span", {
      ...oe,
      ...q,
      className: ("rudra-universal-icon " + J).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: le,
        height: le,
        color: ne,
        ...Y
      },
      dangerouslySetInnerHTML: {
        __html: X.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + h + '">')
      }
    });
  const ve = Se.LayoutGrid;
  return Le.createElement(ve, {
    size: le,
    color: ne,
    strokeWidth: h,
    className: J,
    style: Y,
    ...oe,
    ...q
  });
}
function Er(s) {
  const M = {}, w = s.serverData || s.serverState || {}, Z = s.sharedState || {}, J = s.applicationState || w.applicationState || {}, Y = s.pageState || w.pageState || {}, q = s.pageData || w.pageData || {}, A = {
    ...s.runtime?.functions || {},
    ...s.runtime?.actions || {},
    ...s.functions || {},
    ...s.actions || {}
  };
  s.$route ?? s.route ?? s.data?.$route ?? s.data?.route ?? s.runtime?.data?.$route ?? s.runtime?.route ?? w?.$route ?? w?.route, s.$params ?? s.routeParams ?? s.params ?? s.data?.$params ?? s.data?.routeParams ?? s.data?.params ?? s.runtime?.data?.$params ?? s.runtime?.route?.params ?? s.runtime?.routeParams ?? s.runtime?.params ?? w?.$params ?? w?.routeParams ?? w?.params, s.$query ?? s.queryParams ?? s.query ?? s.data?.$query ?? s.data?.queryParams ?? s.data?.query ?? s.runtime?.data?.$query ?? s.runtime?.route?.query ?? s.runtime?.queryParams ?? s.runtime?.query ?? w?.$query ?? w?.queryParams ?? w?.query, s.$auth ?? s.auth ?? s.data?.$auth ?? s.data?.auth ?? s.runtime?.data?.$auth ?? s.runtime?.authInfo ?? s.runtime?.auth ?? w?.$auth ?? w?.auth, s.$config ?? s.config ?? s.data?.$config ?? s.data?.config ?? s.runtime?.data?.$config ?? s.runtime?.config ?? w?.$config ?? w?.config, s.$env ?? s.env ?? s.data?.$env ?? s.data?.env ?? s.runtime?.data?.$env ?? s.runtime?.env ?? w?.$env ?? w?.env, s.$locale ?? s.locale ?? s.data?.$locale ?? s.data?.locale ?? s.runtime?.data?.$locale ?? s.runtime?.locale ?? w?.$locale ?? w?.locale, s.$translations ?? s.translations ?? s.data?.$translations ?? s.data?.translations ?? s.runtime?.data?.$translations ?? s.runtime?.translations ?? w?.$translations ?? w?.translations, s.$i18n ?? s.i18n ?? s.data?.$i18n ?? s.data?.i18n ?? s.runtime?.data?.$i18n ?? s.runtime?.i18n ?? w?.$i18n ?? w?.i18n;
  const X = s.$theme ?? s.theme ?? s.data?.$theme ?? s.runtime?.data?.$theme ?? s.runtime?.theme, be = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Pe, de] = G(() => X ?? be());
  ce(() => {
    X != null && de(X);
  }, [X]), ce(() => {
    if (X != null || typeof document > "u") return;
    const e = document.documentElement, a = (i) => de(i?.detail?.theme ?? be()), l = new MutationObserver(a);
    return l.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", a), a(), () => {
      l.disconnect(), window.removeEventListener("rudra:theme-change", a);
    };
  }, [X]);
  const oe = ye(null), [le, ne] = G("lg");
  ce(() => {
    if (!oe.current) return;
    const e = new ResizeObserver((a) => {
      for (let l of a) {
        const i = l.contentRect.width;
        i < 768 ? ne("sm") : i < 1024 ? ne("md") : ne("lg");
      }
    });
    return e.observe(oe.current), () => e.disconnect();
  }, []);
  const h = ge((e) => typeof e != "object" || e === null ? e : le === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : le === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [le]), d = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, ve = s.lockedProfessorIds !== void 0 ? s.lockedProfessorIds : s.data?.lockedProfessorIds !== void 0 ? s.data.lockedProfessorIds : [], te = s.courses !== void 0 ? s.courses : s.data?.courses !== void 0 ? s.data.courses : [{ description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, title: "Engineering Mathematics I" }, { description: "Limits, derivatives, integration, and applications.", id: "22222222-2222-4222-8222-222222222212", isFavorite: !1, professorId: "prof-arjun", professorName: "Prof. Arjun Rao", progressPercent: 68, sectionCount: 10, title: "Calculus I" }, { description: "Logic, relations, combinatorics, and graph theory.", id: "33333333-3333-4333-8333-333333333312", isFavorite: !1, professorId: "prof-kavitha", professorName: "Dr. Kavitha N", progressPercent: 25, sectionCount: 7, title: "Discrete Mathematics" }], ue = s.favoriteCourses !== void 0 ? s.favoriteCourses : s.data?.favoriteCourses !== void 0 ? s.data.favoriteCourses : [{ description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, title: "Engineering Mathematics I" }], me = s.bookmarkedProblems !== void 0 ? s.bookmarkedProblems : s.data?.bookmarkedProblems !== void 0 ? s.data.bookmarkedProblems : [{ bookmarked: !0, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111121", title: "Eigenvalues of a 2 × 2 matrix", topicPath: "Matrices / Eigenvalues" }], F = s.professors !== void 0 ? s.professors : s.data?.professors !== void 0 ? s.data.professors : [{ courseCount: 3, id: "prof-meera", institution: "Rudra College of Engineering", name: "Dr. Meera Iyer", subjects: "Linear algebra · Calculus" }, { courseCount: 2, id: "prof-arjun", institution: "Institute of Mathematical Sciences", name: "Prof. Arjun Rao", subjects: "Calculus · Differential equations" }, { courseCount: 4, id: "prof-kavitha", institution: "Rudra College of Engineering", name: "Dr. Kavitha N", subjects: "Discrete mathematics · Graph theory" }], Qe = s.loading !== void 0 ? s.loading : s.data?.loading !== void 0 ? s.data.loading : !1, Ae = s.lockedCourseIds !== void 0 ? s.lockedCourseIds : s.data?.lockedCourseIds !== void 0 ? s.data.lockedCourseIds : [], De = s.lockedLabel !== void 0 ? s.lockedLabel : s.data?.lockedLabel !== void 0 ? s.data.lockedLabel : "", Ke = s.authenticated !== void 0 ? s.authenticated : s.data?.authenticated !== void 0 ? s.data.authenticated : !0, we = s.locale !== void 0 ? s.locale : s.data?.locale !== void 0 ? s.data.locale : "en", je = s.lockedProblemIds !== void 0 ? s.lockedProblemIds : s.data?.lockedProblemIds !== void 0 ? s.data.lockedProblemIds : [], Ne = s.explorerLocked !== void 0 ? s.explorerLocked : s.data?.explorerLocked !== void 0 ? s.data.explorerLocked : !1, Je = s.errorMessage !== void 0 ? s.errorMessage : s.data?.errorMessage !== void 0 ? s.data.errorMessage : "", qe = s.selectedCourse !== void 0 ? s.selectedCourse : s.data?.selectedCourse !== void 0 ? s.data.selectedCourse : { description: "Matrices, eigenvalues, calculus, and worked examination problems.", id: "11111111-1111-4111-8111-111111111112", isFavorite: !0, problems: [{ bookmarked: !0, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111121", title: "Eigenvalues of a 2 × 2 matrix", topicPath: "Matrices / Eigenvalues" }, { bookmarked: !1, difficulty: "Intermediate", id: "11111111-1111-4111-8111-111111111122", title: "Diagonalise a symmetric matrix", topicPath: "Matrices / Diagonalisation" }, { bookmarked: !1, difficulty: "Advanced", id: "11111111-1111-4111-8111-111111111123", title: "Verify the Cayley–Hamilton theorem", topicPath: "Matrices / Matrix theorems" }], professorId: "prof-meera", professorName: "Dr. Meera Iyer", progressPercent: 42, sectionCount: 8, sectionTitle: "Matrices / Eigenvalues", title: "Engineering Mathematics I" }, Te = s.searchTerm !== void 0 ? s.searchTerm : s.data?.searchTerm !== void 0 ? s.data.searchTerm : "", z = { lockedProfessorIds: ve, courses: te, favoriteCourses: ue, bookmarkedProblems: me, professors: F, loading: Qe, lockedCourseIds: Ae, lockedLabel: De, authenticated: Ke, locale: we, lockedProblemIds: je, explorerLocked: Ne, errorMessage: Je, selectedCourse: qe, searchTerm: Te }, [L, Ye] = G(() => structuredClone([])), [_e, He] = G(() => structuredClone("")), [Re, Ue] = G(() => structuredClone("")), [K, Ze] = G(() => structuredClone([])), [se, Ge] = G(() => structuredClone([])), [g, Xe] = G(() => structuredClone({})), [xe, Ve] = G(() => structuredClone("")), [er, rr] = G(() => structuredClone("")), [D, or] = G(() => structuredClone({})), [ae, tr] = G(() => structuredClone([])), [ie, sr] = G(() => structuredClone(!1)), v = { coursesData: L, catalogueError: _e, selectedProfessorId: Re, professorsData: K, favoriteCoursesData: se, explorerLockState: g, searchText: xe, selectedCourseId: er, selectedCourseData: D, bookmarkedProblemsData: ae, catalogueLoading: ie }, y = ge((e, a) => {
    switch (e) {
      case "coursesData": {
        const l = typeof a == "function" ? a(v.coursesData) : a;
        return v.coursesData = l, Ye(l), l;
      }
      case "catalogueError": {
        const l = typeof a == "function" ? a(v.catalogueError) : a;
        return v.catalogueError = l, He(l), l;
      }
      case "selectedProfessorId": {
        const l = typeof a == "function" ? a(v.selectedProfessorId) : a;
        return v.selectedProfessorId = l, Ue(l), l;
      }
      case "professorsData": {
        const l = typeof a == "function" ? a(v.professorsData) : a;
        return v.professorsData = l, Ze(l), l;
      }
      case "favoriteCoursesData": {
        const l = typeof a == "function" ? a(v.favoriteCoursesData) : a;
        return v.favoriteCoursesData = l, Ge(l), l;
      }
      case "explorerLockState": {
        const l = typeof a == "function" ? a(v.explorerLockState) : a;
        return v.explorerLockState = l, Xe(l), l;
      }
      case "searchText": {
        const l = typeof a == "function" ? a(v.searchText) : a;
        return v.searchText = l, Ve(l), l;
      }
      case "selectedCourseId": {
        const l = typeof a == "function" ? a(v.selectedCourseId) : a;
        return v.selectedCourseId = l, rr(l), l;
      }
      case "selectedCourseData": {
        const l = typeof a == "function" ? a(v.selectedCourseData) : a;
        return v.selectedCourseData = l, or(l), l;
      }
      case "bookmarkedProblemsData": {
        const l = typeof a == "function" ? a(v.bookmarkedProblemsData) : a;
        return v.bookmarkedProblemsData = l, tr(l), l;
      }
      case "catalogueLoading": {
        const l = typeof a == "function" ? a(v.catalogueLoading) : a;
        return v.catalogueLoading = l, sr(l), l;
      }
      default:
        return a;
    }
  }, [v]);
  ge((e, a) => {
    const [l, ...i] = String(e || "").split(".");
    if (!l) return a;
    if (i.length === 0) return y(l, a);
    const r = (o) => {
      const n = Array.isArray(o) ? [...o] : { ...o || {} };
      let m = n;
      return i.forEach((p, k) => {
        k === i.length - 1 ? m[p] = a : (m[p] = Array.isArray(m[p]) ? [...m[p]] : { ...m[p] || {} }, m = m[p]);
      }), n;
    };
    switch (l) {
      case "coursesData":
        return y("coursesData", r), a;
      case "catalogueError":
        return y("catalogueError", r), a;
      case "selectedProfessorId":
        return y("selectedProfessorId", r), a;
      case "professorsData":
        return y("professorsData", r), a;
      case "favoriteCoursesData":
        return y("favoriteCoursesData", r), a;
      case "explorerLockState":
        return y("explorerLockState", r), a;
      case "searchText":
        return y("searchText", r), a;
      case "selectedCourseId":
        return y("selectedCourseId", r), a;
      case "selectedCourseData":
        return y("selectedCourseData", r), a;
      case "bookmarkedProblemsData":
        return y("bookmarkedProblemsData", r), a;
      case "catalogueLoading":
        return y("catalogueLoading", r), a;
      default:
        return a;
    }
  }, [y]);
  const ar = { bookmarkToggled: { properties: { bookmarked: { type: "boolean" }, problemId: { type: "string" } }, required: ["problemId", "bookmarked"], type: "object" }, courseSelected: { properties: { courseId: { type: "string" } }, required: ["courseId"], type: "object" }, favoriteToggled: { properties: { courseId: { type: "string" }, favorite: { type: "boolean" } }, required: ["courseId", "favorite"], type: "object" }, problemSelected: { properties: { courseContext: { type: "object" }, courseId: { type: "string" }, locale: { type: "string" }, problem: { type: "object" }, problemId: { type: "string" } }, required: ["problemId", "locale", "problem", "courseContext"], type: "object" }, professorSelected: { properties: { professorId: { type: "string" } }, required: ["professorId"], type: "object" }, searchChanged: { properties: { locale: { type: "string" }, term: { type: "string" } }, required: ["term", "locale"], type: "object" } }, Ce = (e, a, l) => {
    if (!a || typeof a != "object") return "";
    const i = Array.isArray(a.type) ? a.type : a.type ? [a.type] : [], r = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (i.length && !i.includes(r) && !(r === "integer" && i.includes("number"))) return l + " must be " + i.join(" or ") + ".";
    if (a.enum && !a.enum.some((o) => JSON.stringify(o) === JSON.stringify(e))) return l + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const o of a.required || []) if (!Object.prototype.hasOwnProperty.call(e, o)) return l + "." + o + " is required.";
      for (const [o, n] of Object.entries(a.properties || {})) if (Object.prototype.hasOwnProperty.call(e, o)) {
        const m = Ce(e[o], n, l + "." + o);
        if (m) return m;
      }
    }
    if (Array.isArray(e) && a.items) for (let o = 0; o < e.length; o++) {
      const n = Ce(e[o], a.items, l + "[" + o + "]");
      if (n) return n;
    }
    return "";
  }, fe = ge(async (e, a, l = !1) => {
    const i = ar[e];
    if (!i) throw new Error("Module output '" + e + "' is not declared.");
    const r = Ce(a, i, "output." + e);
    if (r) throw new Error(r);
    const o = s.onOutput || s.onModuleOutput || s.runtime?.onOutput;
    if (typeof o != "function") return a;
    const n = o(e, a, { moduleId: s.moduleId, awaitHandlers: l });
    return l ? await n : a;
  }, [s.onOutput, s.onModuleOutput, s.runtime?.onOutput, s.moduleId]), ze = (e, a) => {
    const l = String(a || "").split(".").filter(Boolean);
    if (!(!l.length || l.some((i) => ["__proto__", "prototype", "constructor"].includes(i))))
      return l.reduce((i, r) => {
        if (!(!i || typeof i != "object"))
          return typeof i.get == "function" && !(r in i) ? i.get(r) : i[r];
      }, e);
  }, U = (e, a) => {
    if (Array.isArray(e)) return e.map((i) => U(i, a));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([i, r]) => [U(i, a), U(r, a)]));
    if (typeof e != "string") return e;
    const l = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return l ? ze(a, l[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (i, r) => {
      const o = ze(a, r);
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    });
  };
  async function Ie(e = {}) {
    const a = e || {}, l = {}, i = {};
    y("catalogueLoading", !0), await E({}), y("catalogueError", "");
    try {
      {
        const o = U({ email: "", term: "{{ state.searchText }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.term], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarBrowseProfessors", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarBrowseProfessors", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.catalogue_professors = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "catalogue_professors" };
      return l.error = o, i.catalogue_professors = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "The course catalogue could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ email: "", professorId: "{{ state.selectedProfessorId }}", term: "{{ state.searchText }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.term, o.professorId], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.catalogue_courses = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "catalogue_courses" };
      return l.error = o, i.catalogue_courses = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "The course catalogue could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ email: "" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadFavoriteCourses", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadFavoriteCourses", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.catalogue_favorites = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "catalogue_favorites" };
      return l.error = o, i.catalogue_favorites = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "The course catalogue could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ email: "", locale: "{{ inputs.locale }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.locale], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadBookmarkedProblems", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadBookmarkedProblems", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.catalogue_bookmarks = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "catalogue_bookmarks" };
      return l.error = o, i.catalogue_bookmarks = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "The course catalogue could not be loaded. Please retry."), { ok: !1 };
    }
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => {
          const p = (N) => Array.isArray(N) ? N[0] || {} : N || {}, k = p(i.catalogue_professors), f = p(i.catalogue_courses), I = p(i.catalogue_favorites), P = p(i.catalogue_bookmarks);
          return { professors: Array.isArray(k.professors) ? k.professors : [], courses: Array.isArray(f.courses) ? f.courses : [], favorites: Array.isArray(I.favoriteCourses) ? I.favoriteCourses : [], bookmarks: Array.isArray(P.bookmarkedProblems) ? P.bookmarkedProblems : [] };
        })();
        i.catalogue_parse = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "catalogue_parse" };
      return l.error = o, i.catalogue_parse = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "The course catalogue could not be loaded. Please retry."), { ok: !1 };
    }
    return y("professorsData", i.catalogue_parse.professors), await E({}), y("coursesData", i.catalogue_parse.courses), await E({}), y("favoriteCoursesData", i.catalogue_parse.favorites), await E({}), y("bookmarkedProblemsData", i.catalogue_parse.bookmarks), await E({}), y("catalogueLoading", !1), await E({}), i.catalogue_parse;
  }
  async function cr(e = {}) {
    const a = e || {}, l = {}, i = {};
    {
      a.event;
      const r = await (async () => {
        function o(n, m, p, k) {
          const f = (u) => Array.isArray(u) ? u.filter((_) => _ && typeof _ == "object") : [], I = k == null ? "" : String(k), P = [m.selectedCourseData, n.selectedCourse].filter((u) => u && typeof u == "object"), S = ({
            professor: [...f(m.professorsData), ...f(n.professors)],
            course: [...f(m.coursesData), ...f(m.favoriteCoursesData), ...f(n.courses), ...f(n.favoriteCourses), ...P],
            problem: [...P.flatMap((u) => f(u.problems)), ...f(m.bookmarkedProblemsData), ...f(n.bookmarkedProblems)]
          }[p] || []).filter((u) => I && String(u.id) === I), $ = { professor: "lockedProfessorIds", course: "lockedCourseIds", problem: "lockedProblemIds" }, H = Array.isArray(n[$[p]]) && n[$[p]].some((u) => String(u) === I);
          let R = null;
          if (p === "course")
            R = S.filter((u) => u.professorId).map((u) => o(n, m, "professor", u.professorId)).find((u) => u.locked);
          else if (p === "problem") {
            const u = new Set(S.map((_) => _.courseId || _.syllabusId).filter(Boolean).map(String));
            for (const _ of P) f(_.problems).some((pe) => String(pe.id) === I) && _.id && u.add(String(_.id));
            R = [...u].map((_) => o(n, m, "course", _)).find((_) => _.locked);
          }
          const Q = n.explorerLocked === !0 || H || S.some((u) => u.locked === !0) || !!R, B = { en: "Locked", hi: "लॉक है", ta: "பூட்டப்பட்டுள்ளது" }, V = Object.hasOwn(B, String(n.locale)) ? B[String(n.locale)] : B.en, ee = S.find((u) => u.locked === !0 && typeof u.lockedLabel == "string" && u.lockedLabel.trim())?.lockedLabel, C = String(ee || R?.label || typeof n.lockedLabel == "string" && n.lockedLabel.trim() || V).trim().slice(0, 120);
          return { locked: Q, found: S.length > 0, label: C, disabled: Q || !S.length || m.catalogueLoading === !0 };
        }
        return o(z, v, "problem", a.problemId);
      })();
      i.explorer_lock_check = r, l.customCodeResult = r;
    }
    if (i.explorer_lock_check.disabled)
      return { ok: !1, reason: "item_unavailable" };
    y("catalogueError", "");
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => ({ problemId: String(a.problemId || ""), bookmarked: !a.bookmarked }))();
        i.bookmark_read = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "bookmark_read" };
      return l.error = o, i.bookmark_read = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your bookmark could not be updated. Please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ bookmarked: "{{ stepResults.bookmark_read.bookmarked }}", email: "", problemId: "{{ stepResults.bookmark_read.problemId }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.problemId, o.bookmarked], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarToggleProblemBookmark", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarToggleProblemBookmark", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.bookmark_query = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "bookmark_query" };
      return l.error = o, i.bookmark_query = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your bookmark could not be updated. Please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ email: "", locale: "{{ inputs.locale }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.locale], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadBookmarkedProblems", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadBookmarkedProblems", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.bookmark_refresh = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "bookmark_refresh" };
      return l.error = o, i.bookmark_refresh = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your bookmark could not be updated. Please retry."), { ok: !1 };
    }
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => {
          const k = (Array.isArray(i.bookmark_refresh) ? i.bookmark_refresh : [])[0] || {}, f = Array.isArray(k.bookmarkedProblems) ? k.bookmarkedProblems : [], I = i.bookmark_read.problemId, P = i.bookmark_read.bookmarked, N = { ...v.selectedCourseData || {} };
          return N.problems = (Array.isArray(N.problems) ? N.problems : []).map((S) => String(S.id) === I ? { ...S, bookmarked: P } : S), { bookmarks: f, selected: N };
        })();
        i.bookmark_merge = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "bookmark_merge" };
      return l.error = o, i.bookmark_merge = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your bookmark could not be updated. Please retry."), { ok: !1 };
    }
    y("bookmarkedProblemsData", i.bookmark_merge.bookmarks), await E({}), y("selectedCourseData", i.bookmark_merge.selected), await E({});
    try {
      await fe("bookmarkToggled", { bookmarked: i.bookmark_read.bookmarked, problemId: i.bookmark_read.problemId }, !0);
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "bookmark_emit" };
      return l.error = o, i.bookmark_emit = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your bookmark could not be updated. Please retry."), { ok: !1 };
    }
    return { ok: !0 };
  }
  async function lr(e = {}) {
    y("searchText", ""), y("selectedProfessorId", ""), await Ie({}), await fe("searchChanged", { locale: z.locale, term: "" }, !0);
  }
  async function ir(e = {}) {
    const a = e || {}, l = {}, i = {};
    {
      a.event;
      const r = await (async () => {
        function o(n, m, p, k) {
          const f = (u) => Array.isArray(u) ? u.filter((_) => _ && typeof _ == "object") : [], I = k == null ? "" : String(k), P = [m.selectedCourseData, n.selectedCourse].filter((u) => u && typeof u == "object"), S = ({
            professor: [...f(m.professorsData), ...f(n.professors)],
            course: [...f(m.coursesData), ...f(m.favoriteCoursesData), ...f(n.courses), ...f(n.favoriteCourses), ...P],
            problem: [...P.flatMap((u) => f(u.problems)), ...f(m.bookmarkedProblemsData), ...f(n.bookmarkedProblems)]
          }[p] || []).filter((u) => I && String(u.id) === I), $ = { professor: "lockedProfessorIds", course: "lockedCourseIds", problem: "lockedProblemIds" }, H = Array.isArray(n[$[p]]) && n[$[p]].some((u) => String(u) === I);
          let R = null;
          const Q = n.explorerLocked === !0 || H || S.some((u) => u.locked === !0) || !1, B = { en: "Locked", hi: "लॉक है", ta: "பூட்டப்பட்டுள்ளது" }, V = Object.hasOwn(B, String(n.locale)) ? B[String(n.locale)] : B.en, ee = S.find((u) => u.locked === !0 && typeof u.lockedLabel == "string" && u.lockedLabel.trim())?.lockedLabel, C = String(ee || R?.label || typeof n.lockedLabel == "string" && n.lockedLabel.trim() || V).trim().slice(0, 120);
          return { locked: Q, found: S.length > 0, label: C, disabled: Q || !S.length || m.catalogueLoading === !0 };
        }
        return o(z, v, "professor", a.professorId);
      })();
      i.explorer_lock_check = r, l.customCodeResult = r;
    }
    if (i.explorer_lock_check.disabled)
      return { ok: !1, reason: "item_unavailable" };
    y("catalogueError", ""), y("catalogueLoading", !0), await E({}), y("selectedProfessorId", a.professorId), y("coursesData", []), await E({});
    try {
      {
        const o = U({ email: "", professorId: "{{ args.professorId }}", term: "{{ state.searchText }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.term, o.professorId], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.prof_query = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "prof_query" };
      return l.error = o, i.prof_query = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Courses for this professor could not be loaded. Please retry or clear the filter."), { ok: !1 };
    }
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => {
          const p = Array.isArray(i.prof_query) ? i.prof_query[0] || {} : i.prof_query || {};
          return Array.isArray(p.courses) ? p.courses : [];
        })();
        i.prof_parse = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "prof_parse" };
      return l.error = o, i.prof_parse = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Courses for this professor could not be loaded. Please retry or clear the filter."), { ok: !1 };
    }
    y("coursesData", i.prof_parse), await E({}), y("catalogueLoading", !1), await E({});
    try {
      await fe("professorSelected", { professorId: a.professorId }, !0);
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "prof_emit" };
      return l.error = o, i.prof_emit = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Courses for this professor could not be loaded. Please retry or clear the filter."), { ok: !1 };
    }
    return { ok: !0 };
  }
  async function dr(e = {}) {
    const a = e || {}, l = {}, i = {};
    {
      a.event;
      const r = await (async () => {
        function o(n, m, p, k) {
          const f = (u) => Array.isArray(u) ? u.filter((_) => _ && typeof _ == "object") : [], I = k == null ? "" : String(k), P = [m.selectedCourseData, n.selectedCourse].filter((u) => u && typeof u == "object"), S = ({
            professor: [...f(m.professorsData), ...f(n.professors)],
            course: [...f(m.coursesData), ...f(m.favoriteCoursesData), ...f(n.courses), ...f(n.favoriteCourses), ...P],
            problem: [...P.flatMap((u) => f(u.problems)), ...f(m.bookmarkedProblemsData), ...f(n.bookmarkedProblems)]
          }[p] || []).filter((u) => I && String(u.id) === I), $ = { professor: "lockedProfessorIds", course: "lockedCourseIds", problem: "lockedProblemIds" }, H = Array.isArray(n[$[p]]) && n[$[p]].some((u) => String(u) === I);
          let R = null;
          if (p === "course")
            R = S.filter((u) => u.professorId).map((u) => o(n, m, "professor", u.professorId)).find((u) => u.locked);
          else if (p === "problem") {
            const u = new Set(S.map((_) => _.courseId || _.syllabusId).filter(Boolean).map(String));
            for (const _ of P) f(_.problems).some((pe) => String(pe.id) === I) && _.id && u.add(String(_.id));
            R = [...u].map((_) => o(n, m, "course", _)).find((_) => _.locked);
          }
          const Q = n.explorerLocked === !0 || H || S.some((u) => u.locked === !0) || !!R, B = { en: "Locked", hi: "लॉक है", ta: "பூட்டப்பட்டுள்ளது" }, V = Object.hasOwn(B, String(n.locale)) ? B[String(n.locale)] : B.en, ee = S.find((u) => u.locked === !0 && typeof u.lockedLabel == "string" && u.lockedLabel.trim())?.lockedLabel, C = String(ee || R?.label || typeof n.lockedLabel == "string" && n.lockedLabel.trim() || V).trim().slice(0, 120);
          return { locked: Q, found: S.length > 0, label: C, disabled: Q || !S.length || m.catalogueLoading === !0 };
        }
        return o(z, v, "course", a.courseId);
      })();
      i.explorer_lock_check = r, l.customCodeResult = r;
    }
    if (i.explorer_lock_check.disabled)
      return { ok: !1, reason: "item_unavailable" };
    y("catalogueError", "");
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => ({ courseId: String(a.courseId || ""), favorite: !a.favorite }))();
        i.favorite_read = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "favorite_read" };
      return l.error = o, i.favorite_read = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your favourite could not be updated. Please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ courseId: "{{ stepResults.favorite_read.courseId }}", email: "", favorite: "{{ stepResults.favorite_read.favorite }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.courseId, o.favorite], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarToggleCourseFavorite", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarToggleCourseFavorite", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.favorite_query = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "favorite_query" };
      return l.error = o, i.favorite_query = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your favourite could not be updated. Please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ email: "" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadFavoriteCourses", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadFavoriteCourses", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.favorite_refresh = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "favorite_refresh" };
      return l.error = o, i.favorite_refresh = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your favourite could not be updated. Please retry."), { ok: !1 };
    }
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => {
          const k = (Array.isArray(i.favorite_refresh) ? i.favorite_refresh : [])[0] || {}, f = Array.isArray(k.favoriteCourses) ? k.favoriteCourses : [], I = i.favorite_read.courseId, P = i.favorite_read.favorite, N = (Array.isArray(v.coursesData) ? v.coursesData : []).map(($) => String($.id) === I ? { ...$, isFavorite: P } : $), S = v.selectedCourseData && String(v.selectedCourseData.id) === I ? { ...v.selectedCourseData, isFavorite: P } : v.selectedCourseData;
          return { favorites: f, courses: N, selected: S };
        })();
        i.favorite_merge = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "favorite_merge" };
      return l.error = o, i.favorite_merge = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your favourite could not be updated. Please retry."), { ok: !1 };
    }
    y("favoriteCoursesData", i.favorite_merge.favorites), await E({}), y("coursesData", i.favorite_merge.courses), await E({}), y("selectedCourseData", i.favorite_merge.selected), await E({});
    try {
      await fe("favoriteToggled", { courseId: i.favorite_read.courseId, favorite: i.favorite_read.favorite }, !0);
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "favorite_emit" };
      return l.error = o, i.favorite_emit = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Your favourite could not be updated. Please retry."), { ok: !1 };
    }
    return { ok: !0 };
  }
  async function Oe(e = {}) {
    y("searchText", z.searchTerm), await $e({});
  }
  async function $e(e = {}) {
    const a = e || {}, l = {}, i = {};
    y("catalogueError", ""), y("catalogueLoading", !0), await E({});
    try {
      {
        const o = U({ email: "", term: "{{ state.searchText }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.term], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarBrowseProfessors", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarBrowseProfessors", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.search_professors = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "search_professors" };
      return l.error = o, i.search_professors = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Search failed. Your previous results are kept; please retry."), { ok: !1 };
    }
    try {
      {
        const o = U({ email: "", professorId: "{{ state.selectedProfessorId }}", term: "{{ state.searchText }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.term, o.professorId], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarSearchPublishedCourses", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarSearchPublishedCourses", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.search_courses = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "search_courses" };
      return l.error = o, i.search_courses = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Search failed. Your previous results are kept; please retry."), { ok: !1 };
    }
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => {
          const p = (I) => Array.isArray(I) ? I[0] || {} : I || {}, k = p(i.search_professors), f = p(i.search_courses);
          return { professors: Array.isArray(k.professors) ? k.professors : [], courses: Array.isArray(f.courses) ? f.courses : [] };
        })();
        i.search_parse = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "search_parse" };
      return l.error = o, i.search_parse = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Search failed. Your previous results are kept; please retry."), { ok: !1 };
    }
    y("professorsData", i.search_parse.professors), await E({}), y("coursesData", i.search_parse.courses), await E({}), y("catalogueLoading", !1), await E({});
    try {
      await fe("searchChanged", { locale: z.locale, term: v.searchText }, !0);
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "search_emit" };
      return l.error = o, i.search_emit = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "Search failed. Your previous results are kept; please retry."), { ok: !1 };
    }
    return { ok: !0 };
  }
  async function nr(e = {}) {
    const a = e || {}, l = {}, i = {};
    {
      a.event;
      const r = await (async () => {
        function o(n, m, p, k) {
          const f = (u) => Array.isArray(u) ? u.filter((_) => _ && typeof _ == "object") : [], I = k == null ? "" : String(k), P = [m.selectedCourseData, n.selectedCourse].filter((u) => u && typeof u == "object"), S = ({
            professor: [...f(m.professorsData), ...f(n.professors)],
            course: [...f(m.coursesData), ...f(m.favoriteCoursesData), ...f(n.courses), ...f(n.favoriteCourses), ...P],
            problem: [...P.flatMap((u) => f(u.problems)), ...f(m.bookmarkedProblemsData), ...f(n.bookmarkedProblems)]
          }[p] || []).filter((u) => I && String(u.id) === I), $ = { professor: "lockedProfessorIds", course: "lockedCourseIds", problem: "lockedProblemIds" }, H = Array.isArray(n[$[p]]) && n[$[p]].some((u) => String(u) === I);
          let R = null;
          if (p === "course")
            R = S.filter((u) => u.professorId).map((u) => o(n, m, "professor", u.professorId)).find((u) => u.locked);
          else if (p === "problem") {
            const u = new Set(S.map((_) => _.courseId || _.syllabusId).filter(Boolean).map(String));
            for (const _ of P) f(_.problems).some((pe) => String(pe.id) === I) && _.id && u.add(String(_.id));
            R = [...u].map((_) => o(n, m, "course", _)).find((_) => _.locked);
          }
          const Q = n.explorerLocked === !0 || H || S.some((u) => u.locked === !0) || !!R, B = { en: "Locked", hi: "लॉक है", ta: "பூட்டப்பட்டுள்ளது" }, V = Object.hasOwn(B, String(n.locale)) ? B[String(n.locale)] : B.en, ee = S.find((u) => u.locked === !0 && typeof u.lockedLabel == "string" && u.lockedLabel.trim())?.lockedLabel, C = String(ee || R?.label || typeof n.lockedLabel == "string" && n.lockedLabel.trim() || V).trim().slice(0, 120);
          return { locked: Q, found: S.length > 0, label: C, disabled: Q || !S.length || m.catalogueLoading === !0 };
        }
        return o(z, v, "course", a.courseId);
      })();
      i.explorer_lock_check = r, l.customCodeResult = r;
    }
    if (i.explorer_lock_check.disabled)
      return { ok: !1, reason: "item_unavailable" };
    y("catalogueError", ""), y("selectedCourseId", a.courseId);
    try {
      {
        const o = U({ courseId: "{{ args.courseId }}", email: "", locale: "{{ inputs.locale }}" }, { args: a, inputs: z, state: v, sharedState: Z, applicationState: J, pageState: Y, pageData: q, serverData: w, vars: l, stepResults: i }) || {};
        delete o.email;
        const n = [void 0, o.courseId, o.locale], m = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
        let p;
        if (typeof m == "function")
          p = await m({ moduleId: "cmtpujphb000304jizbdzcvkg", queryId: "scholarLoadExplorerCourse", parameters: n, namedParameters: o, signal: a.signal });
        else {
          const k = await fetch("/api/modules/cmtpujphb000304jizbdzcvkg/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "scholarLoadExplorerCourse", parameters: n, namedParameters: o }), signal: a.signal }), f = await k.json().catch(() => ({}));
          if (!k.ok || f.success === !1) throw new Error(f.error || "Database query failed (" + k.status + ")");
          p = f.data;
        }
        i.course_query = p, l.queryResult = p;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "course_query" };
      return l.error = o, i.course_query = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "This course could not be opened. Please retry or choose another course."), { ok: !1 };
    }
    try {
      {
        const r = a.event, o = q, n = v, m = await (async () => {
          const p = Array.isArray(i.course_query) ? i.course_query[0] || {} : i.course_query || {};
          return p.selectedCourse && typeof p.selectedCourse == "object" ? p.selectedCourse : {};
        })();
        i.course_parse = m, l.customCodeResult = m;
      }
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "course_parse" };
      return l.error = o, i.course_parse = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "This course could not be opened. Please retry or choose another course."), { ok: !1 };
    }
    y("selectedCourseData", i.course_parse), await E({});
    try {
      await fe("courseSelected", { courseId: a.courseId }, !0);
    } catch (r) {
      const o = { message: r instanceof Error ? r.message : String(r), name: r instanceof Error ? r.name : "Error", status: typeof r?.status == "number" ? r.status : void 0, stepId: "course_emit" };
      return l.error = o, i.course_emit = { error: o }, y("catalogueLoading", !1), await E({}), y("catalogueError", "This course could not be opened. Please retry or choose another course."), { ok: !1 };
    }
    return { ok: !0 };
  }
  async function ur(e = {}) {
    y("searchText", z.searchTerm);
  }
  async function mr(e = {}) {
    const a = e || {}, l = {};
    {
      a.event;
      const i = await (async () => {
        function r(o, n, m, p) {
          const k = (C) => Array.isArray(C) ? C.filter((u) => u && typeof u == "object") : [], f = p == null ? "" : String(p), I = [n.selectedCourseData, o.selectedCourse].filter((C) => C && typeof C == "object"), N = ({
            professor: [...k(n.professorsData), ...k(o.professors)],
            course: [...k(n.coursesData), ...k(n.favoriteCoursesData), ...k(o.courses), ...k(o.favoriteCourses), ...I],
            problem: [...I.flatMap((C) => k(C.problems)), ...k(n.bookmarkedProblemsData), ...k(o.bookmarkedProblems)]
          }[m] || []).filter((C) => f && String(C.id) === f), S = { professor: "lockedProfessorIds", course: "lockedCourseIds", problem: "lockedProblemIds" }, $ = Array.isArray(o[S[m]]) && o[S[m]].some((C) => String(C) === f);
          let H = null;
          if (m === "course")
            H = N.filter((C) => C.professorId).map((C) => r(o, n, "professor", C.professorId)).find((C) => C.locked);
          else if (m === "problem") {
            const C = new Set(N.map((u) => u.courseId || u.syllabusId).filter(Boolean).map(String));
            for (const u of I) k(u.problems).some((_) => String(_.id) === f) && u.id && C.add(String(u.id));
            H = [...C].map((u) => r(o, n, "course", u)).find((u) => u.locked);
          }
          const R = o.explorerLocked === !0 || $ || N.some((C) => C.locked === !0) || !!H, Q = { en: "Locked", hi: "लॉक है", ta: "பூட்டப்பட்டுள்ளது" }, B = Object.hasOwn(Q, String(o.locale)) ? Q[String(o.locale)] : Q.en, V = N.find((C) => C.locked === !0 && typeof C.lockedLabel == "string" && C.lockedLabel.trim())?.lockedLabel, ee = String(V || H?.label || typeof o.lockedLabel == "string" && o.lockedLabel.trim() || B).trim().slice(0, 120);
          return { locked: R, found: N.length > 0, label: ee, disabled: R || !N.length || n.catalogueLoading === !0 };
        }
        return r(z, v, "problem", a.problemId);
      })();
      l.explorer_lock_check = i;
    }
    if (l.explorer_lock_check.disabled)
      return { ok: !1, reason: "item_unavailable" };
    {
      a.event;
      const i = await (async () => {
        const r = String(a.problemId || ""), o = v.selectedCourseData && typeof v.selectedCourseData == "object" ? v.selectedCourseData : {}, m = [...Array.isArray(o.problems) ? o.problems : [], ...Array.isArray(v.bookmarkedProblemsData) ? v.bookmarkedProblemsData : []].find((p) => String(p.id) === r) || { id: r, statement: "", title: "" };
        return { problem: { ...m, statement: String(m.statement || m.title || "") }, courseContext: { syllabusId: String(o.id || m.courseId || ""), courseTitle: String(o.title || ""), professorName: String(o.professorName || ""), sectionTitle: String(o.sectionTitle || ""), topicPath: String(m.topicPath || ""), hierarchy: o.hierarchy || {} } };
      })();
      l.problem_resolve = i;
    }
    await fe("problemSelected", { courseContext: l.problem_resolve.courseContext, courseId: l.problem_resolve.courseContext.syllabusId, locale: z.locale, problem: l.problem_resolve.problem, problemId: a.problemId }, !0);
  }
  async function E(e = {}) {
    const a = e || {}, l = {};
    {
      a.event;
      const i = await (async () => {
        function r(n, m, p, k) {
          const f = (u) => Array.isArray(u) ? u.filter((_) => _ && typeof _ == "object") : [], I = k == null ? "" : String(k), P = [m.selectedCourseData, n.selectedCourse].filter((u) => u && typeof u == "object"), S = ({
            professor: [...f(m.professorsData), ...f(n.professors)],
            course: [...f(m.coursesData), ...f(m.favoriteCoursesData), ...f(n.courses), ...f(n.favoriteCourses), ...P],
            problem: [...P.flatMap((u) => f(u.problems)), ...f(m.bookmarkedProblemsData), ...f(n.bookmarkedProblems)]
          }[p] || []).filter((u) => I && String(u.id) === I), $ = { professor: "lockedProfessorIds", course: "lockedCourseIds", problem: "lockedProblemIds" }, H = Array.isArray(n[$[p]]) && n[$[p]].some((u) => String(u) === I);
          let R = null;
          if (p === "course")
            R = S.filter((u) => u.professorId).map((u) => r(n, m, "professor", u.professorId)).find((u) => u.locked);
          else if (p === "problem") {
            const u = new Set(S.map((_) => _.courseId || _.syllabusId).filter(Boolean).map(String));
            for (const _ of P) f(_.problems).some((pe) => String(pe.id) === I) && _.id && u.add(String(_.id));
            R = [...u].map((_) => r(n, m, "course", _)).find((_) => _.locked);
          }
          const Q = n.explorerLocked === !0 || H || S.some((u) => u.locked === !0) || !!R, B = { en: "Locked", hi: "लॉक है", ta: "பூட்டப்பட்டுள்ளது" }, V = Object.hasOwn(B, String(n.locale)) ? B[String(n.locale)] : B.en, ee = S.find((u) => u.locked === !0 && typeof u.lockedLabel == "string" && u.lockedLabel.trim())?.lockedLabel, C = String(ee || R?.label || typeof n.lockedLabel == "string" && n.lockedLabel.trim() || V).trim().slice(0, 120);
          return { locked: Q, found: S.length > 0, label: C, disabled: Q || !S.length || m.catalogueLoading === !0 };
        }
        function o(n, m, p = explorerLockActions) {
          return Object.fromEntries(p.map((k) => {
            const f = k.path.split(".").reduce(($, H) => $?.[H], m), I = r(n, m, k.kind, f?.id), P = k.flag && f?.[k.flag] === !0 ? k.activeLabel : k.label, N = I.locked ? I.label : P, S = f?.title || f?.name || "";
            return [k.id, { ...I, label: N, ariaLabel: S ? `${N}: ${S}` : N }];
          }));
        }
        return o(z, v, [{ id: "prof_0_select", kind: "professor", path: "professorsData.0", label: "View courses" }, { id: "course_0_open", kind: "course", path: "coursesData.0", label: "Browse syllabus" }, { id: "course_0_favorite", kind: "course", path: "coursesData.0", label: "Add favourite", flag: "isFavorite", activeLabel: "Favourited" }, { id: "problem_0_open", kind: "problem", path: "selectedCourseData.problems.0", label: "Start problem" }, { id: "problem_0_bookmark", kind: "problem", path: "selectedCourseData.problems.0", label: "Add bookmark", flag: "bookmarked", activeLabel: "Bookmarked" }, { id: "prof_1_select", kind: "professor", path: "professorsData.1", label: "View courses" }, { id: "course_1_open", kind: "course", path: "coursesData.1", label: "Browse syllabus" }, { id: "course_1_favorite", kind: "course", path: "coursesData.1", label: "Add favourite", flag: "isFavorite", activeLabel: "Favourited" }, { id: "problem_1_open", kind: "problem", path: "selectedCourseData.problems.1", label: "Start problem" }, { id: "problem_1_bookmark", kind: "problem", path: "selectedCourseData.problems.1", label: "Add bookmark", flag: "bookmarked", activeLabel: "Bookmarked" }, { id: "prof_2_select", kind: "professor", path: "professorsData.2", label: "View courses" }, { id: "course_2_open", kind: "course", path: "coursesData.2", label: "Browse syllabus" }, { id: "course_2_favorite", kind: "course", path: "coursesData.2", label: "Add favourite", flag: "isFavorite", activeLabel: "Favourited" }, { id: "problem_2_open", kind: "problem", path: "selectedCourseData.problems.2", label: "Start problem" }, { id: "problem_2_bookmark", kind: "problem", path: "selectedCourseData.problems.2", label: "Add bookmark", flag: "bookmarked", activeLabel: "Bookmarked" }, { id: "saved_course_0_open", kind: "course", path: "favoriteCoursesData.0", label: "Open" }, { id: "saved_problem_0_open", kind: "problem", path: "bookmarkedProblemsData.0", label: "Solve" }, { id: "saved_course_1_open", kind: "course", path: "favoriteCoursesData.1", label: "Open" }, { id: "saved_problem_1_open", kind: "problem", path: "bookmarkedProblemsData.1", label: "Solve" }]);
      })();
      l.locks_compute = i;
    }
    y("explorerLockState", l.locks_compute);
  }
  async function fr(e = {}) {
    y("searchText", (e || {}).value);
  }
  const pr = {
    loadExplorerCatalogue: Ie,
    toggleExplorerBookmark: cr,
    clearExplorerSearch: lr,
    selectExplorerProfessor: ir,
    toggleExplorerFavorite: dr,
    syncAndSearchExplorer: Oe,
    submitExplorerSearch: $e,
    selectExplorerCourse: nr,
    syncExplorerSearch: ur,
    openExplorerProblem: mr,
    refreshExplorerLocks: E,
    setExplorerSearch: fr
  }, hr = {
    loadExplorerCatalogue: [],
    toggleExplorerBookmark: ["problemId", "bookmarked"],
    clearExplorerSearch: [],
    selectExplorerProfessor: ["professorId"],
    toggleExplorerFavorite: ["courseId", "favorite"],
    syncAndSearchExplorer: [],
    submitExplorerSearch: [],
    selectExplorerCourse: ["courseId"],
    syncExplorerSearch: [],
    openExplorerProblem: ["problemId"],
    refreshExplorerLocks: [],
    setExplorerSearch: ["value"]
  }, T = (e, a = {}, l = []) => {
    const i = pr[e];
    if (i) {
      const p = hr[e] || [];
      return i(Object.fromEntries(p.map((k, f) => {
        const I = Object.prototype.hasOwnProperty.call(a, k) ? a[k] : void 0;
        return [k, (I === "" || I === void 0) && l[f] !== void 0 ? l[f] : k === "event" && (I === "" || I === void 0) ? l[0] : I];
      })));
    }
    const r = A?.[e];
    if (typeof r == "function")
      return r(Object.keys(a).length > 0 ? a : l[0]);
    const [o, n] = String(e).split("."), m = typeof globalThis < "u" ? globalThis[o]?.[n] : void 0;
    if (typeof m == "function") return m(...Object.values(a));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, ke = ye(/* @__PURE__ */ new Map()), Ee = ge((e, a, l, i) => {
    const r = ke.current.get(e);
    if (a === "exhaust" && r?.promise) return r.promise;
    a === "takeLatest" && r?.controller?.abort();
    const o = new AbortController(), n = () => Promise.resolve().then(() => l(o.signal)), m = a === "queue" && r?.promise ? r.promise.catch(() => {
    }).then(n) : n();
    return ke.current.set(e, { controller: o, promise: m }), m.catch((p) => {
      p?.name !== "AbortError" && console.error(i, p);
    }).finally(() => {
      ke.current.get(e)?.promise === m && ke.current.delete(e);
    }), m;
  }, []);
  ce(() => () => {
    for (const e of ke.current.values()) e.controller?.abort();
    ke.current.clear();
  }, []), ce(() => {
    Ee("explorer_mountloadExplorerCatalogue", "takeLatest", (e) => Ie({ signal: e }), "Module mount lifecycle failed:");
  }, []);
  const Me = ye(!1);
  ce(() => {
    if (!Me.current) {
      Me.current = !0;
      return;
    }
    Ee("explorer_search_changesyncAndSearchExplorer", "takeLatest", (e) => Oe({}), "Module input lifecycle failed:");
  }, [Te]);
  const Be = ye(!1);
  ce(() => {
    if (!Be.current) {
      Be.current = !0;
      return;
    }
    Ee("explorer_locale_changeloadExplorerCatalogue", "takeLatest", (e) => Ie({ signal: e }), "Module input lifecycle failed:");
  }, [we]);
  const Fe = ye(!1);
  return ce(() => {
    Fe.current || (Fe.current = !0), Ee("explorer_lock_inputsrefreshExplorerLocks", "takeLatest", (e) => E({}), "Module input lifecycle failed:");
  }, [Ne, ve, Ae, je, De, we, te, F, ue, me, qe]), /* @__PURE__ */ b("div", { ref: oe, className: "rudra-module-wrapper", children: d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
    "      ",
    /* @__PURE__ */ t(br, { id: "root", className: "rs-course-explorer", "aria-busy": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), "data-catalogue-error": /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(_e), as: "main", maxWidth: "full", children: [
      "      ",
      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
        "      ",
        /* @__PURE__ */ t(j, { id: "stack", className: "flex flex-col rs-explorer-stack", children: [
          "      ",
          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ t(j, { id: "hero", className: "flex rs-explorer-hero", children: [
              "      ",
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ t(j, { id: "hero_copy", className: "flex flex-col rs-hero-copy", children: [
                  "      ",
                  d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ b(x, { id: "kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "STUDENT LIBRARY" : e)(M?.i18n?.kicker) })
                  ] }),
                  d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ b(x, { id: "title", className: "rs-title", as: "h1", content: /* @__PURE__ */ ((e) => e === void 0 ? "Find your next mathematics lesson" : e)(M?.i18n?.title) })
                  ] }),
                  d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ b(x, { id: "subtitle", className: "rs-subtitle", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Search professors and courses, save what matters, then continue in the learning workspace." : e)(M?.i18n?.subtitle) })
                  ] })
                ] })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ t(j, { id: "saved_summary", className: "flex rs-saved-summary", children: [
                  "      ",
                  d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ b(x, { id: "favorite_count", className: "rs-summary-number rs-favorite-number", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(se?.length) })
                  ] }),
                  d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ b(x, { id: "bookmark_count", className: "rs-summary-number rs-bookmark-number", as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(ae?.length) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ t(j, { id: "search_panel", role: "search", "aria-label": "Course catalogue search", className: "grid rs-search-panel", children: [
              "      ",
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(kr, { id: "search_input", onChangeValue: (...e) => T("setExplorerSearch", {}, e), "aria-describedby": "explorer-active-filters", id: "explorer-course-search", type: "text", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), "aria-label": "Search courses and professors", placeholder: "Try “linear algebra” or “Dr. Meera Iyer”", autoComplete: "off", name: "courseSearch", label: "Search", value: /* @__PURE__ */ ((e) => e === void 0 ? "" : e)(xe), inputMode: "search", enterKeyHint: "search" })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(O, { id: "search_button", theme: "auto", loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), variant: "primary", onAction: (...e) => T("submitExplorerSearch", {}, e), ariaLabel: "Search the course catalogue", loadingText: "Updating...", id: "explorer-search-submit", label: "Search" })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(O, { id: "clear_button", label: "Clear filters", theme: "auto", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), onAction: (...e) => T("clearExplorerSearch", {}, e), ariaLabel: "Clear filters for search and professor", id: "explorer-clear-filters" })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ t(j, { id: "active_filters", id: "explorer-active-filters", role: "status", "aria-live": "polite", "aria-label": "Active catalogue filters", "aria-atomic": "true", className: "flex flex-wrap rs-active-filters", children: [
                  "      ",
                  d(((e) => typeof e == "string" && e.trim().length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(xe))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ b(x, { id: "search_filter_status", className: "rs-filter-chip", as: "span", content: ((e) => {
                      const a = typeof e == "string" ? e.trim() : "";
                      return a ? `Search text: "${a}"` : "";
                    })(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(xe)) })
                  ] }),
                  d(((e) => typeof e == "string" && e.trim().length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(Re))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ b(x, { id: "professor_filter_status", className: "rs-filter-chip", content: "Professor filter active", as: "span" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie)) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ b(he, { id: "loading_alert", className: "rs-state-alert", id: "explorer-loading-status", live: "polite", title: "Loading courses", variant: "info", appearance: "soft" })
          ] }),
          d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(_e)) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ b(he, { id: "error_alert", className: "rs-state-alert", appearance: "soft", id: "explorer-error-alert", live: "assertive", title: "Course catalogue needs attention", variant: "error" })
          ] }),
          d(((e) => typeof e == "string" && e.trim().length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? "" : e)(_e))) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ t(j, { id: "error_actions", "aria-label": "Catalogue recovery actions", className: "flex flex-wrap rs-error-actions", children: [
              "      ",
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(O, { id: "retry_catalogue_button", id: "explorer-retry-catalogue", label: "Try again", theme: "auto", variant: "primary", onAction: (...e) => T("loadExplorerCatalogue", {}, e), additionalAttributes: { "aria-describedby": "explorer-error-alert" }, loading: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), ariaLabel: "Try again: reload the course catalogue", loadingText: "Retrying..." })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(O, { id: "reset_error_filters_button", ariaLabel: "Clear filters and reload the course catalogue", additionalAttributes: { "aria-describedby": "explorer-error-alert" }, id: "explorer-reset-error-filters", label: "Clear filters", theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(ie), onAction: (...e) => T("clearExplorerSearch", {}, e) })
              ] })
            ] })
          ] }),
          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ t(j, { id: "prof_section", className: "flex flex-col rs-section", children: [
              "      ",
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "prof_heading", className: "rs-section-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Browse by professor" : e)(M?.i18n?.professors) })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "prof_copy", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose a professor to see their published syllabi." : e)(M?.i18n?.professorHelp) })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ t(j, { id: "prof_grid", className: "grid rs-professor-grid", children: [
                  "      ",
                  d(((e) => Array.isArray(e) && e.length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(K))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "prof_0", className: "rs-prof-card", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_0_name", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(K?.[0]?.name) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_0_institution", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Institution" : e)(K?.[0]?.institution) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_0_subjects", className: "rs-card-copy", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics" : e)(K?.[0]?.subjects), as: "p" })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(O, { id: "prof_0_select", leftIcon: /* @__PURE__ */ t(c, { children: [
                          "      ",
                          d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.prof_0_select?.locked)) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "prof_0_select_lock", size: 16, strokeWidth: 1.8 })
                          ] })
                        ] }), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.prof_0_select?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "View courses" : e)(g?.prof_0_select?.label), theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.prof_0_select?.disabled), onAction: (...e) => T("selectExplorerProfessor", { professorId: K?.[0]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "View courses" : e)(g?.prof_0_select?.ariaLabel) })
                      ] })
                    ] })
                  ] }),
                  d(((e) => Array.isArray(e) && e.length > 1)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(K))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "prof_1", className: "rs-prof-card", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_1_name", className: "rs-card-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(K?.[1]?.name), as: "h3" })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_1_institution", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Institution" : e)(K?.[1]?.institution) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_1_subjects", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics" : e)(K?.[1]?.subjects) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(O, { id: "prof_1_select", leftIcon: /* @__PURE__ */ t(c, { children: [
                          "      ",
                          d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.prof_1_select?.locked)) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "prof_1_select_lock", size: 16, strokeWidth: 1.8 })
                          ] })
                        ] }), label: /* @__PURE__ */ ((e) => e === void 0 ? "View courses" : e)(g?.prof_1_select?.label), theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.prof_1_select?.disabled), onAction: (...e) => T("selectExplorerProfessor", { professorId: K?.[1]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "View courses" : e)(g?.prof_1_select?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.prof_1_select?.locked) })
                      ] })
                    ] })
                  ] }),
                  d(((e) => Array.isArray(e) && e.length > 2)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(K))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "prof_2", className: "rs-prof-card", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_2_name", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(K?.[2]?.name) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_2_institution", className: "rs-muted", content: /* @__PURE__ */ ((e) => e === void 0 ? "Institution" : e)(K?.[2]?.institution), as: "p" })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "prof_2_subjects", className: "rs-card-copy", content: /* @__PURE__ */ ((e) => e === void 0 ? "Mathematics" : e)(K?.[2]?.subjects), as: "p" })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(O, { id: "prof_2_select", leftIcon: /* @__PURE__ */ t(c, { children: [
                          "      ",
                          d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.prof_2_select?.locked)) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "prof_2_select_lock", size: 16, strokeWidth: 1.8 })
                          ] })
                        ] }), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.prof_2_select?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "View courses" : e)(g?.prof_2_select?.label), theme: "auto", variant: "outline", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.prof_2_select?.disabled), onAction: (...e) => T("selectExplorerProfessor", { professorId: K?.[2]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "View courses" : e)(g?.prof_2_select?.ariaLabel) })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              d(((e) => !Array.isArray(e) || e.length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(K))) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(he, { id: "professors_empty", className: "rs-empty-state", role: "status", title: "No professors found", variant: "neutral", appearance: "soft", live: "polite" })
              ] })
            ] })
          ] }),
          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ t(j, { id: "course_section", className: "flex flex-col rs-section", children: [
              "      ",
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "course_heading", className: "rs-section-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Published courses" : e)(M?.i18n?.courses) })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "course_copy", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select a syllabus to browse its sections, topics, and problems." : e)(M?.i18n?.courseHelp) })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ t(j, { id: "course_grid", className: "grid rs-course-grid", children: [
                  "      ",
                  d(((e) => Array.isArray(e) && e.length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(L))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "course_0", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_0_meta", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(L?.[0]?.professorName) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_0_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course" : e)(L?.[0]?.title) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_0_desc", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course description" : e)(L?.[0]?.description) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_0_progress", className: "rs-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(L?.[0]?.progressPercent) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "course_0_actions", className: "flex flex-wrap rs-card-actions", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "course_0_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_0_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "course_0_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.course_0_open?.disabled), onAction: (...e) => T("selectExplorerCourse", { courseId: L?.[0]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Browse syllabus" : e)(g?.course_0_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_0_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse syllabus" : e)(g?.course_0_open?.label), theme: "auto" })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "course_0_favorite", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_0_favorite?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "course_0_favorite_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), "aria-pressed": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L?.[0]?.isFavorite), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_0_favorite?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Add favourite" : e)(g?.course_0_favorite?.label), theme: "auto", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.course_0_favorite?.disabled), onAction: (...e) => T("toggleExplorerFavorite", { courseId: L?.[0]?.id, favorite: L?.[0]?.isFavorite }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Add favourite" : e)(g?.course_0_favorite?.ariaLabel) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  d(((e) => Array.isArray(e) && e.length > 1)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(L))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "course_1", className: "rs-course-card", theme: "auto", as: "article", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_1_meta", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(L?.[1]?.professorName) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_1_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course" : e)(L?.[1]?.title) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_1_desc", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course description" : e)(L?.[1]?.description) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_1_progress", className: "rs-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(L?.[1]?.progressPercent) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "course_1_actions", className: "flex flex-wrap rs-card-actions", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "course_1_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_1_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "course_1_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), theme: "auto", variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.course_1_open?.disabled), onAction: (...e) => T("selectExplorerCourse", { courseId: L?.[1]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Browse syllabus" : e)(g?.course_1_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_1_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse syllabus" : e)(g?.course_1_open?.label) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "course_1_favorite", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_1_favorite?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "course_1_favorite_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_1_favorite?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Add favourite" : e)(g?.course_1_favorite?.label), theme: "auto", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.course_1_favorite?.disabled), onAction: (...e) => T("toggleExplorerFavorite", { courseId: L?.[1]?.id, favorite: L?.[1]?.isFavorite }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Add favourite" : e)(g?.course_1_favorite?.ariaLabel), "aria-pressed": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L?.[1]?.isFavorite) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  d(((e) => Array.isArray(e) && e.length > 2)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(L))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "course_2", className: "rs-course-card", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_2_meta", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Professor" : e)(L?.[2]?.professorName) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_2_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course" : e)(L?.[2]?.title) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_2_desc", className: "rs-card-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Course description" : e)(L?.[2]?.description) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "course_2_progress", className: "rs-progress", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(L?.[2]?.progressPercent) })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "course_2_actions", className: "flex flex-wrap rs-card-actions", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "course_2_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_2_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "course_2_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse syllabus" : e)(g?.course_2_open?.label), theme: "auto", variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.course_2_open?.disabled), onAction: (...e) => T("selectExplorerCourse", { courseId: L?.[2]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Browse syllabus" : e)(g?.course_2_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_2_open?.locked) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "course_2_favorite", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_2_favorite?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "course_2_favorite_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), "aria-pressed": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(L?.[2]?.isFavorite), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.course_2_favorite?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Add favourite" : e)(g?.course_2_favorite?.label), theme: "auto", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.course_2_favorite?.disabled), onAction: (...e) => T("toggleExplorerFavorite", { courseId: L?.[2]?.id, favorite: L?.[2]?.isFavorite }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Add favourite" : e)(g?.course_2_favorite?.ariaLabel) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              d(((e) => !Array.isArray(e) || e.length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(L))) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(he, { id: "courses_empty", className: "rs-empty-state", variant: "neutral", appearance: "soft", live: "polite", role: "status", title: "No courses found" })
              ] })
            ] })
          ] }),
          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ t(j, { id: "problem_section", className: "flex flex-col rs-section rs-problem-section", children: [
              "      ",
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "problem_heading", className: "rs-section-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Select a course to browse problems" : e)(D?.title), as: "h2" })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "problem_copy", className: "rs-section-copy", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Sections and topics appear here after course selection." : e)(D?.sectionTitle) })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ t(j, { id: "problem_list", className: "flex flex-col rs-problem-list", children: [
                  "      ",
                  d(((e) => Array.isArray(e) && e.length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(D?.problems))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "problem_0", className: "grid rs-problem-row", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "problem_0_copy", className: "flex flex-col rs-problem-copy", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_0_path", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Topic" : e)(D?.problems?.[0]?.topicPath) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_0_title", className: "rs-problem-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(D?.problems?.[0]?.title) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_0_difficulty", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Intermediate" : e)(D?.problems?.[0]?.difficulty) })
                          ] })
                        ] })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "problem_0_actions", className: "flex rs-problem-actions", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "problem_0_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_0_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "problem_0_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Start problem" : e)(g?.problem_0_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_0_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Start problem" : e)(g?.problem_0_open?.label), theme: "auto", variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.problem_0_open?.disabled), onAction: (...e) => T("openExplorerProblem", { problemId: D?.problems?.[0]?.id }, e) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "problem_0_bookmark", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_0_bookmark?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "problem_0_bookmark_lock", strokeWidth: 1.8, size: 16 })
                              ] })
                            ] }), onAction: (...e) => T("toggleExplorerBookmark", { bookmarked: D?.problems?.[0]?.bookmarked, problemId: D?.problems?.[0]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Add bookmark" : e)(g?.problem_0_bookmark?.ariaLabel), "aria-pressed": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D?.problems?.[0]?.bookmarked), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_0_bookmark?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Add bookmark" : e)(g?.problem_0_bookmark?.label), theme: "auto", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.problem_0_bookmark?.disabled) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  d(((e) => Array.isArray(e) && e.length > 1)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(D?.problems))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "problem_1", className: "grid rs-problem-row", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "problem_1_copy", className: "flex flex-col rs-problem-copy", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_1_path", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Topic" : e)(D?.problems?.[1]?.topicPath) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_1_title", className: "rs-problem-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(D?.problems?.[1]?.title), as: "h3" })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_1_difficulty", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Intermediate" : e)(D?.problems?.[1]?.difficulty) })
                          ] })
                        ] })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "problem_1_actions", className: "flex rs-problem-actions", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "problem_1_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_1_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "problem_1_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Start problem" : e)(g?.problem_1_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_1_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Start problem" : e)(g?.problem_1_open?.label), theme: "auto", variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.problem_1_open?.disabled), onAction: (...e) => T("openExplorerProblem", { problemId: D?.problems?.[1]?.id }, e) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "problem_1_bookmark", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_1_bookmark?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "problem_1_bookmark_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.problem_1_bookmark?.disabled), onAction: (...e) => T("toggleExplorerBookmark", { bookmarked: D?.problems?.[1]?.bookmarked, problemId: D?.problems?.[1]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Add bookmark" : e)(g?.problem_1_bookmark?.ariaLabel), "aria-pressed": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D?.problems?.[1]?.bookmarked), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_1_bookmark?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Add bookmark" : e)(g?.problem_1_bookmark?.label), theme: "auto" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  d(((e) => Array.isArray(e) && e.length > 2)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(D?.problems))) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "problem_2", className: "grid rs-problem-row", as: "article", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "problem_2_copy", className: "flex flex-col rs-problem-copy", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_2_path", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Topic" : e)(D?.problems?.[2]?.topicPath) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_2_title", className: "rs-problem-title", content: /* @__PURE__ */ ((e) => e === void 0 ? "Problem" : e)(D?.problems?.[2]?.title), as: "h3" })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "problem_2_difficulty", className: "rs-muted", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Intermediate" : e)(D?.problems?.[2]?.difficulty) })
                          ] })
                        ] })
                      ] }),
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "problem_2_actions", className: "flex rs-problem-actions", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "problem_2_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_2_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "problem_2_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), label: /* @__PURE__ */ ((e) => e === void 0 ? "Start problem" : e)(g?.problem_2_open?.label), theme: "auto", variant: "primary", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.problem_2_open?.disabled), onAction: (...e) => T("openExplorerProblem", { problemId: D?.problems?.[2]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Start problem" : e)(g?.problem_2_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_2_open?.locked) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "problem_2_bookmark", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_2_bookmark?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "problem_2_bookmark_lock", strokeWidth: 1.8, size: 16 })
                              ] })
                            ] }), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.problem_2_bookmark?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Add bookmark" : e)(g?.problem_2_bookmark?.label), theme: "auto", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.problem_2_bookmark?.disabled), onAction: (...e) => T("toggleExplorerBookmark", { bookmarked: D?.problems?.[2]?.bookmarked, problemId: D?.problems?.[2]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Add bookmark" : e)(g?.problem_2_bookmark?.ariaLabel), "aria-pressed": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(D?.problems?.[2]?.bookmarked) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              d(((e) => !Array.isArray(e) || e.length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(D?.problems))) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(he, { id: "problems_empty", className: "rs-empty-state", appearance: "soft", live: "polite", role: "status", title: "No problems to show", variant: "neutral" })
              ] })
            ] })
          ] }),
          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
            "      ",
            /* @__PURE__ */ t(j, { id: "saved_section", className: "flex flex-col rs-section rs-saved-section", children: [
              "      ",
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "saved_heading", className: "rs-section-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Saved for later" : e)(M?.i18n?.saved) })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ b(x, { id: "saved_copy", className: "rs-section-copy", content: /* @__PURE__ */ ((e) => e === void 0 ? "Return to favourite courses or bookmarked problems." : e)(M?.i18n?.savedHelp), as: "p" })
              ] }),
              d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                "      ",
                /* @__PURE__ */ t(j, { id: "saved_grid", className: "grid rs-saved-grid", children: [
                  "      ",
                  d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "favorite_list_card", className: "rs-saved-card", as: "section", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "favorite_list_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Favourite courses" : e)(M?.i18n?.favourites) })
                      ] }),
                      d(((e) => Array.isArray(e) && e.length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(se))) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "saved_course_0", className: "grid rs-saved-row", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "saved_course_0_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved course" : e)(se?.[0]?.title) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "saved_course_0_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_course_0_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "saved_course_0_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Open" : e)(g?.saved_course_0_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_course_0_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Open" : e)(g?.saved_course_0_open?.label), theme: "auto", variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.saved_course_0_open?.disabled), onAction: (...e) => T("selectExplorerCourse", { courseId: se?.[0]?.id }, e) })
                          ] })
                        ] })
                      ] }),
                      d(((e) => Array.isArray(e) && e.length > 1)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(se))) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "saved_course_1", className: "grid rs-saved-row", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "saved_course_1_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved course" : e)(se?.[1]?.title) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "saved_course_1_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_course_1_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "saved_course_1_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.saved_course_1_open?.disabled), onAction: (...e) => T("selectExplorerCourse", { courseId: se?.[1]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Open" : e)(g?.saved_course_1_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_course_1_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Open" : e)(g?.saved_course_1_open?.label), theme: "auto", variant: "ghost" })
                          ] })
                        ] })
                      ] }),
                      d(((e) => !Array.isArray(e) || e.length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(se))) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(he, { id: "favorite_courses_empty", className: "rs-empty-state", appearance: "soft", live: "polite", role: "status", title: "No favourite courses yet", variant: "neutral" })
                      ] })
                    ] })
                  ] }),
                  d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                    "      ",
                    /* @__PURE__ */ t(re, { id: "bookmark_list_card", className: "rs-saved-card", as: "section", theme: "auto", children: [
                      "      ",
                      d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(x, { id: "bookmark_list_title", className: "rs-card-title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Bookmarked problems" : e)(M?.i18n?.bookmarks) })
                      ] }),
                      d(((e) => Array.isArray(e) && e.length > 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ae))) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "saved_problem_0", className: "grid rs-saved-row", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "saved_problem_0_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved problem" : e)(ae?.[0]?.title) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "saved_problem_0_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_problem_0_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "saved_problem_0_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), variant: "ghost", disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.saved_problem_0_open?.disabled), onAction: (...e) => T("openExplorerProblem", { problemId: ae?.[0]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Solve" : e)(g?.saved_problem_0_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_problem_0_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Solve" : e)(g?.saved_problem_0_open?.label), theme: "auto" })
                          ] })
                        ] })
                      ] }),
                      d(((e) => Array.isArray(e) && e.length > 1)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ae))) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ t(j, { id: "saved_problem_1", className: "grid rs-saved-row", children: [
                          "      ",
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(x, { id: "saved_problem_1_title", className: "rs-saved-title", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "No saved problem" : e)(ae?.[1]?.title) })
                          ] }),
                          d(h({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ t(c, { children: [
                            "      ",
                            /* @__PURE__ */ b(O, { id: "saved_problem_1_open", leftIcon: /* @__PURE__ */ t(c, { children: [
                              "      ",
                              d(/* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_problem_1_open?.locked)) && /* @__PURE__ */ t(c, { children: [
                                "      ",
                                /* @__PURE__ */ b(W, { icon: "LockKeyhole", id: "saved_problem_1_open_lock", size: 16, strokeWidth: 1.8 })
                              ] })
                            ] }), disabled: /* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(g?.saved_problem_1_open?.disabled), onAction: (...e) => T("openExplorerProblem", { problemId: ae?.[1]?.id }, e), ariaLabel: /* @__PURE__ */ ((e) => e === void 0 ? "Solve" : e)(g?.saved_problem_1_open?.ariaLabel), "data-explorer-locked": /* @__PURE__ */ ((e) => e === void 0 ? !1 : e)(g?.saved_problem_1_open?.locked), label: /* @__PURE__ */ ((e) => e === void 0 ? "Solve" : e)(g?.saved_problem_1_open?.label), theme: "auto", variant: "ghost" })
                          ] })
                        ] })
                      ] }),
                      d(((e) => !Array.isArray(e) || e.length === 0)(/* @__PURE__ */ ((e) => e === void 0 ? [] : e)(ae))) && /* @__PURE__ */ t(c, { children: [
                        "      ",
                        /* @__PURE__ */ b(he, { id: "bookmarked_problems_empty", className: "rs-empty-state", live: "polite", role: "status", title: "No bookmarked problems yet", variant: "neutral", appearance: "soft" })
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
  Er as default
};
