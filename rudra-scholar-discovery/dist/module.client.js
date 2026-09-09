import { jsx as y, jsxs as n, Fragment as d } from "react/jsx-runtime";
import oe, { useState as _, useEffect as L, useRef as K, useCallback as F } from "react";
import { Typography as x, Button as A, Alert as ue, Card as re } from "@rudra-studio/rudra-core";
import { Box as M } from "@rudra-studio/rudra-layout";
import * as X from "lucide-react";
const de = (s) => String(s || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), $e = (s) => {
  let S = s;
  for (; S && typeof S == "object" && "type" in S && "value" in S; )
    S = S.value;
  return S;
};
function me({ icon: s, size: S, color: Q, strokeWidth: Y, className: P = "", style: N, ...U }) {
  const f = $e(s), [z, C] = _(null), B = f && typeof f == "object" ? JSON.stringify(f) : String(f || "");
  L(() => {
    const T = new AbortController();
    let R = "", I = "";
    if (C(null), typeof f == "string") {
      const w = f.trim();
      if (X[w]) return () => T.abort();
      w.startsWith("<svg") ? I = w : (/^https?:\/\//.test(w) || w.startsWith("/") || w.startsWith("data:image/svg")) && (R = w);
    } else f && typeof f == "object" && (f.iconType === "svg" && f.svgContent ? I = f.svgContent : f.iconType === "url" && f.url && (R = f.url));
    return I ? C(de(I)) : R && fetch(R, { signal: T.signal }).then((w) => {
      if (!w.ok) throw new Error("Icon request failed (" + w.status + ")");
      return w.text();
    }).then((w) => {
      w.trim().startsWith("<svg") && C(de(w));
    }).catch((w) => {
      w.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", w);
    }), () => T.abort();
  }, [B]);
  const u = f && typeof f == "object" ? f.props || {} : {}, a = { ...u };
  delete a.size, delete a.color, delete a.strokeWidth;
  const q = S ?? u.size ?? 24, $ = Q ?? u.color ?? "currentColor", E = Y ?? u.strokeWidth ?? 1.5;
  let D = "";
  if (typeof f == "string" && X[f] ? D = f : f && typeof f == "object" && f.name && (!f.iconType || f.iconType === "lucide") && (D = f.name), D) {
    const T = X[D];
    if (T)
      return oe.createElement(T, {
        size: q,
        color: $,
        strokeWidth: E,
        className: P,
        style: N,
        ...a,
        ...U
      });
  }
  if (z)
    return oe.createElement("span", {
      ...a,
      ...U,
      className: ("rudra-universal-icon " + P).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: q,
        height: q,
        color: $,
        ...N
      },
      dangerouslySetInnerHTML: {
        __html: z.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + E + '">')
      }
    });
  const Z = X.LayoutGrid;
  return oe.createElement(Z, {
    size: q,
    color: $,
    strokeWidth: E,
    className: P,
    style: N,
    ...a,
    ...U
  });
}
function Ke(s) {
  const S = {}, Q = s.serverData || s.serverState || {};
  s.sharedState, s.applicationState || Q.applicationState, s.pageState || Q.pageState, s.pageData || Q.pageData;
  const Y = {
    ...s.runtime?.functions || {},
    ...s.runtime?.actions || {},
    ...s.functions || {},
    ...s.actions || {}
  }, P = s.$theme ?? s.theme ?? s.data?.$theme ?? s.runtime?.data?.$theme ?? s.runtime?.theme, N = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [U, f] = _(() => P ?? N());
  L(() => {
    P != null && f(P);
  }, [P]), L(() => {
    if (P != null || typeof document > "u") return;
    const e = document.documentElement, o = (i) => f(i?.detail?.theme ?? N()), t = new MutationObserver(o);
    return t.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", o), o(), () => {
      t.disconnect(), window.removeEventListener("rudra:theme-change", o);
    };
  }, [P]);
  const z = K(null), [C, B] = _("lg");
  L(() => {
    if (!z.current) return;
    const e = new ResizeObserver((o) => {
      for (let t of o) {
        const i = t.contentRect.width;
        i < 768 ? B("sm") : i < 1024 ? B("md") : B("lg");
      }
    });
    return e.observe(z.current), () => e.disconnect();
  }, []);
  const u = F((e) => typeof e != "object" || e === null ? e : C === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : C === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [C]), a = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e;
  s.subjectCards !== void 0 ? s.subjectCards : s.data?.subjectCards !== void 0 && s.data.subjectCards;
  const q = s.authenticated !== void 0 ? s.authenticated : s.data?.authenticated !== void 0 ? s.data.authenticated : !1, $ = s.programmeSlug !== void 0 ? s.programmeSlug : s.data?.programmeSlug !== void 0 ? s.data.programmeSlug : "engineering", E = s.initialSolveMode !== void 0 ? s.initialSolveMode : s.data?.initialSolveMode !== void 0 ? s.data.initialSolveMode : "answer", D = s.autoSolveOnLoad !== void 0 ? s.autoSolveOnLoad : s.data?.autoSolveOnLoad !== void 0 ? s.data.autoSolveOnLoad : !0, Z = s.semesterSlug !== void 0 ? s.semesterSlug : s.data?.semesterSlug !== void 0 ? s.data.semesterSlug : "semester-1", T = s.subjectSlug !== void 0 ? s.subjectSlug : s.data?.subjectSlug !== void 0 ? s.data.subjectSlug : "linear-algebra", R = s.locale !== void 0 ? s.locale : s.data?.locale !== void 0 ? s.data.locale : "en";
  s.pageMode !== void 0 ? s.pageMode : s.data?.pageMode !== void 0 && s.data.pageMode;
  const I = s.accessProfile !== void 0 ? s.accessProfile : s.data?.accessProfile !== void 0 ? s.data.accessProfile : {}, w = s.returnPath !== void 0 ? s.returnPath : s.data?.returnPath !== void 0 ? s.data.returnPath : "/learn", h = { authenticated: q, programmeSlug: $, initialSolveMode: E, autoSolveOnLoad: D, semesterSlug: Z, subjectSlug: T, locale: R, accessProfile: I, returnPath: w }, [se, he] = _(() => structuredClone("Solve the system 2x + y = 7 and −x + y = 1.")), [ge, fe] = _(() => structuredClone({ authenticated: !1, isRegistered: !1, roles: [], verificationStatus: "not_required" })), [pe, ye] = _(() => structuredClone(!0)), [be, Se] = _(() => structuredClone("")), [we, _e] = _(() => structuredClone(!1)), [ne, ve] = _(() => structuredClone(!0)), [xe, Pe] = _(() => structuredClone("x = 2 and y = 3. Both equations are satisfied.")), [je, ke] = _(() => structuredClone("answer")), [ie, Ae] = _(() => structuredClone("Quick answer")), [Me, Le] = _(() => structuredClone(!1)), [Te, Oe] = _(() => structuredClone("")), [ae, Ce] = _(() => structuredClone(!1)), [qe, De] = _(() => structuredClone("en")), p = { problemText: se, accessDecision: ge, showAccessHint: pe, lastProblemControlId: be, canOpenProfessorStudio: we, showDemoSolution: ne, demoSolutionText: xe, demoSolutionMode: je, demoSolutionTitle: ie, canLearn: Me, actionMessage: Te, showActionMessage: ae, problemLanguage: qe }, l = F((e, o) => {
    switch (e) {
      case "problemText": {
        const t = typeof o == "function" ? o(p.problemText) : o;
        return p.problemText = t, he(t), t;
      }
      case "accessDecision": {
        const t = typeof o == "function" ? o(p.accessDecision) : o;
        return p.accessDecision = t, fe(t), t;
      }
      case "showAccessHint": {
        const t = typeof o == "function" ? o(p.showAccessHint) : o;
        return p.showAccessHint = t, ye(t), t;
      }
      case "lastProblemControlId": {
        const t = typeof o == "function" ? o(p.lastProblemControlId) : o;
        return p.lastProblemControlId = t, Se(t), t;
      }
      case "canOpenProfessorStudio": {
        const t = typeof o == "function" ? o(p.canOpenProfessorStudio) : o;
        return p.canOpenProfessorStudio = t, _e(t), t;
      }
      case "showDemoSolution": {
        const t = typeof o == "function" ? o(p.showDemoSolution) : o;
        return p.showDemoSolution = t, ve(t), t;
      }
      case "demoSolutionText": {
        const t = typeof o == "function" ? o(p.demoSolutionText) : o;
        return p.demoSolutionText = t, Pe(t), t;
      }
      case "demoSolutionMode": {
        const t = typeof o == "function" ? o(p.demoSolutionMode) : o;
        return p.demoSolutionMode = t, ke(t), t;
      }
      case "demoSolutionTitle": {
        const t = typeof o == "function" ? o(p.demoSolutionTitle) : o;
        return p.demoSolutionTitle = t, Ae(t), t;
      }
      case "canLearn": {
        const t = typeof o == "function" ? o(p.canLearn) : o;
        return p.canLearn = t, Le(t), t;
      }
      case "actionMessage": {
        const t = typeof o == "function" ? o(p.actionMessage) : o;
        return p.actionMessage = t, Oe(t), t;
      }
      case "showActionMessage": {
        const t = typeof o == "function" ? o(p.showActionMessage) : o;
        return p.showActionMessage = t, Ce(t), t;
      }
      case "problemLanguage": {
        const t = typeof o == "function" ? o(p.problemLanguage) : o;
        return p.problemLanguage = t, De(t), t;
      }
      default:
        return o;
    }
  }, [p]);
  F((e, o) => {
    const [t, ...i] = String(e || "").split(".");
    if (!t) return o;
    if (i.length === 0) return l(t, o);
    const r = (c) => {
      const b = Array.isArray(c) ? [...c] : { ...c || {} };
      let m = b;
      return i.forEach((g, v) => {
        v === i.length - 1 ? m[g] = o : (m[g] = Array.isArray(m[g]) ? [...m[g]] : { ...m[g] || {} }, m = m[g]);
      }), b;
    };
    switch (t) {
      case "problemText":
        return l("problemText", r), o;
      case "accessDecision":
        return l("accessDecision", r), o;
      case "showAccessHint":
        return l("showAccessHint", r), o;
      case "lastProblemControlId":
        return l("lastProblemControlId", r), o;
      case "canOpenProfessorStudio":
        return l("canOpenProfessorStudio", r), o;
      case "showDemoSolution":
        return l("showDemoSolution", r), o;
      case "demoSolutionText":
        return l("demoSolutionText", r), o;
      case "demoSolutionMode":
        return l("demoSolutionMode", r), o;
      case "demoSolutionTitle":
        return l("demoSolutionTitle", r), o;
      case "canLearn":
        return l("canLearn", r), o;
      case "actionMessage":
        return l("actionMessage", r), o;
      case "showActionMessage":
        return l("showActionMessage", r), o;
      case "problemLanguage":
        return l("problemLanguage", r), o;
      default:
        return o;
    }
  }, [l]);
  const Re = { accessRequired: { properties: { path: { type: "string" }, reason: { type: "string" }, returnPath: { type: "string" } }, required: ["reason", "returnPath", "path"], type: "object" }, imageProblemRequested: { properties: { context: { type: "object" } }, type: "object" }, navigationRequested: { properties: { path: { type: "string" } }, type: "object" }, problemSubmitted: { properties: { context: { type: "object" }, languageCode: { type: "string" }, mode: { type: "string" }, problem: { type: "string" } }, required: ["problem", "mode", "languageCode"], type: "object" } }, V = (e, o, t) => {
    if (!o || typeof o != "object") return "";
    const i = Array.isArray(o.type) ? o.type : o.type ? [o.type] : [], r = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (i.length && !i.includes(r) && !(r === "integer" && i.includes("number"))) return t + " must be " + i.join(" or ") + ".";
    if (o.enum && !o.enum.some((c) => JSON.stringify(c) === JSON.stringify(e))) return t + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const c of o.required || []) if (!Object.prototype.hasOwnProperty.call(e, c)) return t + "." + c + " is required.";
      for (const [c, b] of Object.entries(o.properties || {})) if (Object.prototype.hasOwnProperty.call(e, c)) {
        const m = V(e[c], b, t + "." + c);
        if (m) return m;
      }
    }
    if (Array.isArray(e) && o.items) for (let c = 0; c < e.length; c++) {
      const b = V(e[c], o.items, t + "[" + c + "]");
      if (b) return b;
    }
    return "";
  }, W = F(async (e, o, t = !1) => {
    const i = Re[e];
    if (!i) throw new Error("Module output '" + e + "' is not declared.");
    const r = V(o, i, "output." + e);
    if (r) throw new Error(r);
    const c = s.onOutput || s.onModuleOutput || s.runtime?.onOutput;
    if (typeof c != "function") return o;
    const b = c(e, o, { moduleId: s.moduleId, awaitHandlers: t });
    return t ? await b : o;
  }, [s.onOutput, s.onModuleOutput, s.runtime?.onOutput, s.moduleId]);
  async function ee(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = ["en", "hi", "ta"].includes(String(h.locale || "en")) ? String(h.locale || "en") : "en", c = ["answer", "steps"].includes(String(h.initialSolveMode || "answer")) ? String(h.initialSolveMode || "answer") : "answer", m = {
          en: {
            problem: "Solve the system 2x + y = 7 and −x + y = 1.",
            answerTitle: "Quick answer",
            answer: "x = 2 and y = 3. Both equations are satisfied.",
            stepsTitle: "Detailed solution",
            steps: "1. Subtract the second equation from the first: 3x = 6.  2. Therefore x = 2.  3. Substitute into −x + y = 1: −2 + y = 1.  4. Therefore y = 3.  5. Check: 2(2) + 3 = 7."
          },
          hi: {
            problem: "समीकरण 2x + y = 7 और −x + y = 1 हल कीजिए।",
            answerTitle: "त्वरित उत्तर",
            answer: "x = 2 और y = 3। दोनों समीकरण संतुष्ट होते हैं।",
            stepsTitle: "विस्तृत हल",
            steps: "1. पहले समीकरण में से दूसरा घटाएँ: 3x = 6।  2. इसलिए x = 2।  3. इसे −x + y = 1 में रखें: −2 + y = 1।  4. इसलिए y = 3।  5. जाँच: 2(2) + 3 = 7।"
          },
          ta: {
            problem: "2x + y = 7 மற்றும் −x + y = 1 என்ற சமன்பாடுகளைத் தீர்க்கவும்.",
            answerTitle: "விரைவு விடை",
            answer: "x = 2 மற்றும் y = 3. இரண்டு சமன்பாடுகளும் நிறைவேறுகின்றன.",
            stepsTitle: "விரிவான தீர்வு",
            steps: "1. முதல் சமன்பாட்டிலிருந்து இரண்டாவதை கழிக்கவும்: 3x = 6.  2. ஆகவே x = 2.  3. இதை −x + y = 1 இல் பதிலிடவும்: −2 + y = 1.  4. ஆகவே y = 3.  5. சரிபார்ப்பு: 2(2) + 3 = 7."
          }
        }[r];
        return { language: r, mode: c, problem: m.problem, title: c === "steps" ? m.stepsTitle : m.answerTitle, solution: c === "steps" ? m.steps : m.answer, show: h.autoSolveOnLoad !== !1 };
      })();
      t.demo_prepare = i;
    }
    return l("problemText", t.demo_prepare.problem), l("demoSolutionTitle", t.demo_prepare.title), l("demoSolutionText", t.demo_prepare.solution), l("demoSolutionMode", t.demo_prepare.mode), l("showDemoSolution", t.demo_prepare.show), t.demo_prepare;
  }
  async function Ie(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = ["en", "hi", "ta"].includes(String(h.locale || "en")) ? String(h.locale || "en") : "en", c = {
          en: { title: "Quick answer", solution: "x = 2 and y = 3. Both equations are satisfied." },
          hi: { title: "त्वरित उत्तर", solution: "x = 2 और y = 3। दोनों समीकरण संतुष्ट होते हैं।" },
          ta: { title: "விரைவு விடை", solution: "x = 2 மற்றும் y = 3. இரண்டு சமன்பாடுகளும் நிறைவேறுகின்றன." }
        };
        return { language: r, title: c[r].title, solution: c[r].solution };
      })();
      t.showQuickSolution_prepare = i;
    }
    return l("demoSolutionTitle", t.showQuickSolution_prepare.title), l("demoSolutionText", t.showQuickSolution_prepare.solution), l("demoSolutionMode", "answer"), l("showDemoSolution", !0), { mode: "answer", ok: !0, solution: t.showQuickSolution_prepare.solution };
  }
  async function Ne(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = ["en", "hi", "ta"].includes(String(h.locale || "en")) ? String(h.locale || "en") : "en", c = {
          en: { title: "Detailed solution", solution: "1. Subtract the second equation from the first: 3x = 6.  2. Therefore x = 2.  3. Substitute into −x + y = 1: −2 + y = 1.  4. Therefore y = 3.  5. Check: 2(2) + 3 = 7." },
          hi: { title: "विस्तृत हल", solution: "1. पहले समीकरण में से दूसरा घटाएँ: 3x = 6।  2. इसलिए x = 2।  3. इसे −x + y = 1 में रखें: −2 + y = 1।  4. इसलिए y = 3।  5. जाँच: 2(2) + 3 = 7।" },
          ta: { title: "விரிவான தீர்வு", solution: "1. முதல் சமன்பாட்டிலிருந்து இரண்டாவதை கழிக்கவும்: 3x = 6.  2. ஆகவே x = 2.  3. இதை −x + y = 1 இல் பதிலிடவும்: −2 + y = 1.  4. ஆகவே y = 3.  5. சரிபார்ப்பு: 2(2) + 3 = 7." }
        };
        return { language: r, title: c[r].title, solution: c[r].solution };
      })();
      t.showDetailedSolution_prepare = i;
    }
    return l("demoSolutionTitle", t.showDetailedSolution_prepare.title), l("demoSolutionText", t.showDetailedSolution_prepare.solution), l("demoSolutionMode", "steps"), l("showDemoSolution", !0), { mode: "steps", ok: !0, solution: t.showDetailedSolution_prepare.solution };
  }
  async function ze(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = h.accessProfile && typeof h.accessProfile == "object" ? h.accessProfile : {}, c = Object.keys(r).length > 0, b = r.authenticated === !0 || r.isAuthenticated === !0 || !!(r.uid || r.userId || r.id) || h.authenticated === !0, m = c ? r.isRegistered === !0 : h.authenticated === !0, g = Array.isArray(r.roles) ? r.roles.map(String) : [], v = String(r.verificationStatus || "not_required"), O = g.includes("professor") || g.includes("educator") || g.includes("admin") || g.includes("institution_admin"), j = m && O && !["pending", "rejected", "revoked"].includes(v);
        return { authenticated: b, isRegistered: m, roles: g, verificationStatus: v, canLearn: m, canOpenProfessorStudio: j };
      })();
      t.image_access = i;
    }
    return t.image_access.canLearn ? (l("actionMessage", ""), l("showActionMessage", !1), W("imageProblemRequested", { context: { programmeSlug: h.programmeSlug, semesterSlug: h.semesterSlug, subjectSlug: h.subjectSlug } }, !1).catch((i) => console.error("Module output delivery failed", i)), { ok: !0 }) : (l("actionMessage", "Sign in and complete your Scholar profile before uploading a problem image."), l("showActionMessage", !0), await J({ reason: "registration_required", returnPath: h.returnPath }), t.image_denied_request);
  }
  async function Ee(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = h.accessProfile && typeof h.accessProfile == "object" ? h.accessProfile : {}, c = Object.keys(r).length > 0, b = r.authenticated === !0 || r.isAuthenticated === !0 || !!(r.uid || r.userId || r.id) || h.authenticated === !0, m = c ? r.isRegistered === !0 : h.authenticated === !0, g = String(p.problemText || "").trim();
        return { authenticated: b, isRegistered: m, canLearn: m, problem: g, hasProblem: g.length > 0 };
      })();
      t.problem_check = i;
    }
    return t.problem_check.canLearn ? t.problem_check.hasProblem ? (l("actionMessage", ""), l("showActionMessage", !1), W("problemSubmitted", { context: { programmeSlug: h.programmeSlug, semesterSlug: h.semesterSlug, subjectSlug: h.subjectSlug }, languageCode: h.locale || "en", mode: o.mode, problem: t.problem_check.problem }, !1).catch((i) => console.error("Module output delivery failed", i)), { languageCode: h.locale || "en", mode: o.mode, ok: !0, problem: t.problem_check.problem }) : (l("actionMessage", "Enter a mathematics problem before continuing."), l("showActionMessage", !0), { ok: !1, reason: "empty_problem" }) : (l("actionMessage", "Sign in and complete your Scholar profile to solve this problem."), l("showActionMessage", !0), await J({ reason: "registration_required", returnPath: h.returnPath }), t.problem_denied_request);
  }
  async function We(e = {}) {
    W("navigationRequested", { path: (e || {}).path }, !1).catch((t) => console.error("Module output delivery failed", t));
  }
  async function J(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = String(o.reason || "registration_required"), c = String(o.returnPath || h.returnPath || "/learn"), b = r === "professor_approval_required" ? "/account/verification" : "/access", m = b === "/access" ? b + "?returnPath=" + encodeURIComponent(c) : b;
        return { reason: r, returnPath: c, path: m };
      })();
      t.access_request_prepare = i;
    }
    return W("accessRequired", { path: t.access_request_prepare.path, reason: t.access_request_prepare.reason, returnPath: t.access_request_prepare.returnPath }, !1).catch((i) => console.error("Module output delivery failed", i)), W("navigationRequested", { path: t.access_request_prepare.path }, !1).catch((i) => console.error("Module output delivery failed", i)), t.access_request_prepare;
  }
  async function te(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = h.accessProfile && typeof h.accessProfile == "object" ? h.accessProfile : {}, c = Object.keys(r).length > 0, b = r.authenticated === !0 || r.isAuthenticated === !0 || !!(r.uid || r.userId || r.id) || h.authenticated === !0, m = c ? r.isRegistered === !0 : h.authenticated === !0, g = Array.isArray(r.roles) ? r.roles.map(String) : [], v = String(r.verificationStatus || "not_required"), O = g.includes("professor") || g.includes("educator") || g.includes("admin") || g.includes("institution_admin"), j = m && O && !["pending", "rejected", "revoked"].includes(v);
        return { authenticated: b, isRegistered: m, roles: g, verificationStatus: v, canLearn: m, canOpenProfessorStudio: j };
      })();
      t.access_derive = i;
    }
    return l("accessDecision", t.access_derive), l("canLearn", t.access_derive.canLearn), l("canOpenProfessorStudio", t.access_derive.canOpenProfessorStudio), t.access_derive;
  }
  async function He(e = {}) {
    const o = e || {}, t = {};
    {
      o.event;
      const i = await (async () => {
        const r = h.accessProfile && typeof h.accessProfile == "object" ? h.accessProfile : {}, c = Object.keys(r).length > 0, b = r.authenticated === !0 || r.isAuthenticated === !0 || !!(r.uid || r.userId || r.id) || h.authenticated === !0, m = c ? r.isRegistered === !0 : h.authenticated === !0, g = Array.isArray(r.roles) ? r.roles.map(String) : [], v = String(r.verificationStatus || "not_required"), O = g.includes("professor") || g.includes("educator") || g.includes("admin") || g.includes("institution_admin"), j = m && O && !["pending", "rejected", "revoked"].includes(v);
        return { authenticated: b, isRegistered: m, roles: g, verificationStatus: v, canLearn: m, canOpenProfessorStudio: j };
      })();
      t.professor_access = i;
    }
    if (t.professor_access.canOpenProfessorStudio)
      return W("navigationRequested", { path: "/professor/context" }, !1).catch((i) => console.error("Module output delivery failed", i)), { ok: !0, path: "/professor/context" };
    {
      o.event;
      const i = await (async () => {
        const r = t.professor_access.isRegistered === !0;
        return {
          reason: r ? "professor_approval_required" : "registration_required",
          returnPath: "/professor/context",
          message: r ? "Professor tools require an approved educator role." : "Sign in and complete registration before opening Professor Studio."
        };
      })();
      t.professor_denied_prepare = i;
    }
    return l("actionMessage", t.professor_denied_prepare.message), l("showActionMessage", !0), await J({ reason: t.professor_denied_prepare.reason, returnPath: t.professor_denied_prepare.returnPath }), t.professor_denied_request;
  }
  const Qe = {
    initializeHomeDemo: ee,
    showQuickSolution: Ie,
    showDetailedSolution: Ne,
    requestImage: ze,
    submitProblem: Ee,
    navigate: We,
    requestScholarAccess: J,
    initializeDiscoveryAccess: te,
    openProfessorStudio: He
  }, Be = {
    initializeHomeDemo: [],
    showQuickSolution: [],
    showDetailedSolution: [],
    requestImage: [],
    submitProblem: ["mode"],
    navigate: ["path"],
    requestScholarAccess: ["reason", "returnPath"],
    initializeDiscoveryAccess: [],
    openProfessorStudio: []
  }, k = (e, o = {}, t = []) => {
    const i = Qe[e];
    if (i) {
      const g = Be[e] || [];
      return i(Object.fromEntries(g.map((v, O) => {
        const j = Object.prototype.hasOwnProperty.call(o, v) ? o[v] : void 0;
        return [v, (j === "" || j === void 0) && t[O] !== void 0 ? t[O] : v === "event" && (j === "" || j === void 0) ? t[0] : j];
      })));
    }
    const r = Y?.[e];
    if (typeof r == "function")
      return r(Object.keys(o).length > 0 ? o : t[0]);
    const [c, b] = String(e).split("."), m = typeof globalThis < "u" ? globalThis[c]?.[b] : void 0;
    if (typeof m == "function") return m(...Object.values(o));
    console.warn("Rudra action '" + e + "' is not available in this runtime.");
  }, H = K(/* @__PURE__ */ new Map()), G = F((e, o, t, i) => {
    const r = H.current.get(e);
    if (o === "exhaust" && r?.promise) return r.promise;
    o === "takeLatest" && r?.controller?.abort();
    const c = new AbortController(), b = () => Promise.resolve().then(() => t(c.signal)), m = o === "queue" && r?.promise ? r.promise.catch(() => {
    }).then(b) : b();
    return H.current.set(e, { controller: c, promise: m }), m.catch((g) => {
      g?.name !== "AbortError" && console.error(i, g);
    }).finally(() => {
      H.current.get(e)?.promise === m && H.current.delete(e);
    }), m;
  }, []);
  L(() => () => {
    for (const e of H.current.values()) e.controller?.abort();
    H.current.clear();
  }, []), L(() => {
    G("discovery_access_mountinitializeDiscoveryAccess", "takeLatest", (e) => te({}), "Module mount lifecycle failed:");
  }, []), L(() => {
    G("discovery_demo_mountinitializeHomeDemo", "takeLatest", (e) => ee({}), "Module mount lifecycle failed:");
  }, []);
  const ce = K(!1);
  L(() => {
    if (!ce.current) {
      ce.current = !0;
      return;
    }
    G("discovery_access_inputsinitializeDiscoveryAccess", "takeLatest", (e) => te({}), "Module input lifecycle failed:");
  }, [q, I]);
  const le = K(!1);
  return L(() => {
    if (!le.current) {
      le.current = !0;
      return;
    }
    G("discovery_demo_inputsinitializeHomeDemo", "takeLatest", (e) => ee({}), "Module input lifecycle failed:");
  }, [R, D, E]), /* @__PURE__ */ y("div", { ref: z, className: "rudra-module-wrapper", children: a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
    "      ",
    /* @__PURE__ */ n(M, { id: "root", className: "block rs-discovery", children: [
      "      ",
      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
        "      ",
        /* @__PURE__ */ n(M, { id: "hero", className: "block rs-hero", children: [
          "      ",
          a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
            "      ",
            /* @__PURE__ */ n(M, { id: "hero_inner", className: "grid rs-hero-inner", children: [
              "      ",
              a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                "      ",
                /* @__PURE__ */ n(M, { id: "copy", className: "flex flex-col rs-stack", children: [
                  "      ",
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "kicker", className: "rs-kicker", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "A mathematics studio for college" : e)(S?.i18n?.kicker) })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "title", className: "rs-title", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "See the reasoning. Steer the lesson." : e)(S?.i18n?.title), customColor: "#effff9" })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "lede", className: "rs-lede", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose programme, semester and subject, then learn step by step." : e)(S?.i18n?.lede) })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ n(M, { id: "hero_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(A, { id: "browse_cta", label: /* @__PURE__ */ ((e) => e === void 0 ? "Browse mathematics" : e)(S?.i18n?.browse), theme: "dark", variant: "primary", onAction: (...e) => k("navigate", { path: "/browse/engineering/semester-1" }, e), size: "lg" })
                      ] }),
                      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(A, { id: "prof_cta", theme: "dark", variant: "outline", onAction: (...e) => k("openProfessorStudio", {}, e), size: "lg", label: "Professor Studio" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                "      ",
                /* @__PURE__ */ n(M, { id: "workbench", className: "flex flex-col rs-workbench", children: [
                  "      ",
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "prompt_title", as: "h3", content: /* @__PURE__ */ ((e) => e === void 0 ? "Try a solved example" : e)(S?.i18n?.prompt) })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "problem_input", className: "rs-demo-problem", content: /* @__PURE__ */ ((e) => e === void 0 ? "Solve the system 2x + y = 7 and −x + y = 1." : e)(se), as: "p" })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ n(M, { id: "problem_actions", className: "flex flex-wrap rs-actions", children: [
                      "      ",
                      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(A, { id: "solve_now", additionalAttributes: {}, id: "scholar-demo-quick", type: "button", label: /* @__PURE__ */ ((e) => e === void 0 ? "Solve now" : e)(S?.i18n?.solveNow), theme: "light", variant: "primary", onAction: (...e) => k("showQuickSolution", {}, e), ariaLabel: "Show the quick solution" })
                      ] }),
                      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(A, { id: "steps", label: /* @__PURE__ */ ((e) => e === void 0 ? "Solve detailed steps" : e)(S?.i18n?.solveSteps), theme: "light", variant: "outline", onAction: (...e) => k("showDetailedSolution", {}, e), ariaLabel: "Show the detailed step-by-step solution", additionalAttributes: {}, id: "scholar-demo-detailed", type: "button" })
                      ] }),
                      a(u({ lg: !1, md: !1, sm: !1 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(A, { id: "teacher", label: "Learn with professor", theme: "light", variant: "outline", onAction: (...e) => k("submitProblem", { mode: "professor" }, e) })
                      ] })
                    ] })
                  ] }),
                  a(ne) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(ue, { id: "demo_solution", icon: /* @__PURE__ */ n(d, { children: [
                      "      ",
                      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(me, { icon: "Sparkles", id: "demo_solution_icon", size: 20, strokeWidth: 1.8 })
                      ] })
                    ] }), title: /* @__PURE__ */ n(d, { children: [
                      "      ",
                      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(x, { id: "demo_solution_title", className: "rs-demo-solution-title", as: "h4", content: /* @__PURE__ */ ((e) => e === void 0 ? "Quick answer" : e)(ie) })
                      ] })
                    ] }), appearance: "outlined", live: "polite", variant: "success" })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(A, { id: "image", leftIcon: /* @__PURE__ */ n(d, { children: [
                      "      ",
                      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                        "      ",
                        /* @__PURE__ */ y(me, { icon: "LockKeyhole", id: "image_lock_icon", size: 18, strokeWidth: 2 })
                      ] })
                    ] }), disabled: !0, onAction: (...e) => k("requestImage", {}, e), ariaLabel: "Image problem upload is locked until a post-release update", additionalAttributes: { disabled: !0, title: "Planned for a post-release update" }, id: "scholar-image-upload-locked", label: "Upload an image · Coming soon", theme: "light", variant: "ghost" })
                  ] }),
                  a(ae) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(ue, { id: "problem_status", appearance: "soft", live: "polite", title: "Action needed", variant: "warning" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
        "      ",
        /* @__PURE__ */ n(M, { id: "subjects", className: "flex flex-col rs-subject-section", children: [
          "      ",
          a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
            "      ",
            /* @__PURE__ */ y(x, { id: "subjects_heading", className: "rs-subjects-heading", as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Start with a subject" : e)(S?.i18n?.popular) })
          ] }),
          a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
            "      ",
            /* @__PURE__ */ y(x, { id: "subjects_intro", className: "rs-subjects-intro", as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Choose a foundation subject and explore its concepts, examples, and problems." : e)(S?.i18n?.subjectsIntro) })
          ] }),
          a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
            "      ",
            /* @__PURE__ */ n(M, { id: "subject_grid", className: "grid rs-subject-grid", children: [
              "      ",
              a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                "      ",
                /* @__PURE__ */ n(re, { id: "linear", className: "flex flex-col rs-subject-card", as: "article", theme: "auto", children: [
                  "      ",
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "linear_title", className: "rs-subject-card-title", as: "h3", content: "Linear algebra" })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "linear_copy", className: "rs-subject-card-copy", as: "p", content: "Vectors, matrices, linear maps, eigenvalues and diagonalisation." })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(A, { id: "linear_go", onAction: (...e) => k("navigate", { path: "/browse/engineering/semester-1/linear-algebra" }, e), fullWidth: !0, size: "md", label: "Open subject", theme: "auto", variant: "outline" })
                  ] })
                ] })
              ] }),
              a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                "      ",
                /* @__PURE__ */ n(re, { id: "calculus", className: "flex flex-col rs-subject-card", as: "article", theme: "auto", children: [
                  "      ",
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "calculus_title", className: "rs-subject-card-title", as: "h3", content: "Calculus" })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "calculus_copy", className: "rs-subject-card-copy", as: "p", content: "Limits, derivatives, integration and multivariable reasoning." })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(A, { id: "calculus_go", size: "md", label: "Open subject", theme: "auto", variant: "outline", onAction: (...e) => k("navigate", { path: "/browse/engineering/semester-1/calculus" }, e), fullWidth: !0 })
                  ] })
                ] })
              ] }),
              a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                "      ",
                /* @__PURE__ */ n(re, { id: "discrete", className: "flex flex-col rs-subject-card", theme: "auto", as: "article", children: [
                  "      ",
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "discrete_title", className: "rs-subject-card-title", as: "h3", content: "Discrete mathematics" })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(x, { id: "discrete_copy", className: "rs-subject-card-copy", as: "p", content: "Logic, combinatorics, graphs and recurrence relations." })
                  ] }),
                  a(u({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ n(d, { children: [
                    "      ",
                    /* @__PURE__ */ y(A, { id: "discrete_go", size: "md", label: "Open subject", theme: "auto", variant: "outline", onAction: (...e) => k("navigate", { path: "/browse/engineering/semester-1/discrete-mathematics" }, e), fullWidth: !0 })
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
  Ke as default
};
