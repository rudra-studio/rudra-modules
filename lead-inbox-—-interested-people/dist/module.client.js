import { jsx as c, jsxs as a, Fragment as n } from "react/jsx-runtime";
import { useState as A, useEffect as v, useRef as M, useCallback as E } from "react";
import { Box as ee, Section as oe, Container as ce, Flex as R, Grid as K, ScrollArea as me } from "@rudra-studio/rudra-layout";
import { Header as ue, MetricCard as N, DataTable as fe } from "@rudra-studio/rudra-widgets";
import { Typography as b, Badge as $, Surface as te } from "@rudra-studio/rudra-core";
function xe(s) {
  const L = s.serverData || s.serverState || {}, F = s.sharedState || {}, J = s.applicationState || L.applicationState || {}, G = s.pageState || L.pageState || {}, U = s.pageData || L.pageData || {};
  ({
    ...s.runtime?.functions || {},
    ...s.runtime?.actions || {},
    ...s.functions || {},
    ...s.actions || {}
  });
  const w = s.$theme ?? s.theme ?? s.data?.$theme ?? s.runtime?.data?.$theme ?? s.runtime?.theme, B = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [re, Q] = A(() => w ?? B());
  v(() => {
    w != null && Q(w);
  }, [w]), v(() => {
    if (w != null || typeof document > "u") return;
    const e = document.documentElement, r = (o) => Q(o?.detail?.theme ?? B()), l = new MutationObserver(r);
    return l.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", r), r(), () => {
      l.disconnect(), window.removeEventListener("rudra:theme-change", r);
    };
  }, [w]);
  const j = M(null), [T, k] = A("lg");
  v(() => {
    if (!j.current) return;
    const e = new ResizeObserver((r) => {
      for (let l of r) {
        const o = l.contentRect.width;
        o < 768 ? k("sm") : o < 1024 ? k("md") : k("lg");
      }
    });
    return e.observe(j.current), () => e.disconnect();
  }, []);
  const t = E((e) => typeof e != "object" || e === null ? e : T === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : T === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [T]), i = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, O = s.to !== void 0 ? s.to : s.data?.to !== void 0 ? s.data.to : "", q = s.intent !== void 0 ? s.intent : s.data?.intent !== void 0 ? s.data.intent : "all", I = s.status !== void 0 ? s.status : s.data?.status !== void 0 ? s.data.status : "all", D = s.source !== void 0 ? s.source : s.data?.source !== void 0 ? s.data.source : "all", z = s.from !== void 0 ? s.from : s.data?.from !== void 0 ? s.data.from : "", ae = s.where !== void 0 ? s.where : s.data?.where !== void 0 ? s.data.where : {}, Z = { to: O, intent: q, status: I, source: D, from: z, where: ae }, [g, se] = A(() => structuredClone({ active_sources: 0, collaboration_leads: 0, contact_progress: 0, daily_lead_counts: [], intent_counts: [0, 0, 0], job_leads: 0, leads_last_7_days: 0, new_leads: 0, progressed_leads: 0, project_leads: 0, total_leads: 0 })), [de, le] = A(() => structuredClone(!1)), [H, ie] = A(() => structuredClone([])), p = { leadAnalytics: g, isLoadingLeads: de, leads: H }, y = E((e, r) => {
    switch (e) {
      case "leadAnalytics": {
        const l = typeof r == "function" ? r(p.leadAnalytics) : r;
        return p.leadAnalytics = l, se(l), l;
      }
      case "isLoadingLeads": {
        const l = typeof r == "function" ? r(p.isLoadingLeads) : r;
        return p.isLoadingLeads = l, le(l), l;
      }
      case "leads": {
        const l = typeof r == "function" ? r(p.leads) : r;
        return p.leads = l, ie(l), l;
      }
      default:
        return r;
    }
  }, [p]);
  E((e, r) => {
    const [l, ...o] = String(e || "").split(".");
    if (!l) return r;
    if (o.length === 0) return y(l, r);
    const m = (d) => {
      const h = Array.isArray(d) ? [...d] : { ...d || {} };
      let u = h;
      return o.forEach((f, x) => {
        x === o.length - 1 ? u[f] = r : (u[f] = Array.isArray(u[f]) ? [...u[f]] : { ...u[f] || {} }, u = u[f]);
      }), h;
    };
    switch (l) {
      case "leadAnalytics":
        return y("leadAnalytics", m), r;
      case "isLoadingLeads":
        return y("isLoadingLeads", m), r;
      case "leads":
        return y("leads", m), r;
      default:
        return r;
    }
  }, [y]);
  const ne = {}, P = (e, r, l) => {
    if (!r || typeof r != "object") return "";
    const o = Array.isArray(r.type) ? r.type : r.type ? [r.type] : [], m = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (o.length && !o.includes(m) && !(m === "integer" && o.includes("number"))) return l + " must be " + o.join(" or ") + ".";
    if (r.enum && !r.enum.some((d) => JSON.stringify(d) === JSON.stringify(e))) return l + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const d of r.required || []) if (!Object.prototype.hasOwnProperty.call(e, d)) return l + "." + d + " is required.";
      for (const [d, h] of Object.entries(r.properties || {})) if (Object.prototype.hasOwnProperty.call(e, d)) {
        const u = P(e[d], h, l + "." + d);
        if (u) return u;
      }
    }
    if (Array.isArray(e) && r.items) for (let d = 0; d < e.length; d++) {
      const h = P(e[d], r.items, l + "[" + d + "]");
      if (h) return h;
    }
    return "";
  };
  E(async (e, r, l = !1) => {
    const o = ne[e];
    if (!o) throw new Error("Module output '" + e + "' is not declared.");
    const m = P(r, o, "output." + e);
    if (m) throw new Error(m);
    const d = s.onOutput || s.onModuleOutput || s.runtime?.onOutput;
    if (typeof d != "function") return r;
    const h = d(e, r, { moduleId: s.moduleId, awaitHandlers: l });
    return l ? await h : r;
  }, [s.onOutput, s.onModuleOutput, s.runtime?.onOutput, s.moduleId]);
  const W = (e, r) => {
    const l = String(r || "").split(".").filter(Boolean);
    if (!(!l.length || l.some((o) => ["__proto__", "prototype", "constructor"].includes(o))))
      return l.reduce((o, m) => {
        if (!(!o || typeof o != "object"))
          return typeof o.get == "function" && !(m in o) ? o.get(m) : o[m];
      }, e);
  }, S = (e, r) => {
    if (Array.isArray(e)) return e.map((o) => S(o, r));
    if (e && typeof e == "object") return Object.fromEntries(Object.entries(e).map(([o, m]) => [S(o, r), S(m, r)]));
    if (typeof e != "string") return e;
    const l = e.match(/^\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}$/);
    return l ? W(r, l[1]) : e.replace(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$.]*)\s*\}\}/g, (o, m) => {
      const d = W(r, m);
      return d == null ? "" : typeof d == "object" ? JSON.stringify(d) : String(d);
    });
  };
  async function Y(e = {}) {
    const r = e || {}, l = {}, o = {};
    y("isLoadingLeads", !0);
    {
      const d = S({ from: "{{ inputs.from }}", intent: "{{ inputs.intent }}", source: "{{ inputs.source }}", status: "{{ inputs.status }}", to: "{{ inputs.to }}" }, { args: r, inputs: Z, state: p, sharedState: F, applicationState: J, pageState: G, pageData: U, serverData: L, vars: l, stepResults: o }) || {}, h = [d.status, d.intent, d.source, d.from, d.to], u = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
      let f;
      if (typeof u == "function")
        f = await u({ moduleId: "cmsykd1wh000004l7quqrideh", queryId: "leads_list", parameters: h, namedParameters: d, signal: r.signal });
      else {
        const x = await fetch("/api/modules/cmsykd1wh000004l7quqrideh/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "leads_list", parameters: h, namedParameters: d }), signal: r.signal }), _ = await x.json().catch(() => ({}));
        if (!x.ok || _.success === !1) throw new Error(_.error || "Database query failed (" + x.status + ")");
        f = _.data;
      }
      o.leads_fetch = f, l.queryResult = f;
    }
    {
      const d = S({ from: "{{ inputs.from }}", intent: "{{ inputs.intent }}", source: "{{ inputs.source }}", status: "{{ inputs.status }}", to: "{{ inputs.to }}" }, { args: r, inputs: Z, state: p, sharedState: F, applicationState: J, pageState: G, pageData: U, serverData: L, vars: l, stepResults: o }) || {}, h = [d.status, d.intent, d.source, d.from, d.to], u = s.executeDatabaseQuery || s.runtime?.executeDatabaseQuery;
      let f;
      if (typeof u == "function")
        f = await u({ moduleId: "cmsykd1wh000004l7quqrideh", queryId: "leads_analytics", parameters: h, namedParameters: d, signal: r.signal });
      else {
        const x = await fetch("/api/modules/cmsykd1wh000004l7quqrideh/database/execute", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ queryId: "leads_analytics", parameters: h, namedParameters: d }), signal: r.signal }), _ = await x.json().catch(() => ({}));
        if (!x.ok || _.success === !1) throw new Error(_.error || "Database query failed (" + x.status + ")");
        f = _.data;
      }
      o.leads_analytics_fetch = f, l.queryResult = f;
    }
    return y("leads", o.leads_fetch), y("leadAnalytics", o.leads_analytics_fetch[0]), y("isLoadingLeads", !1), { analytics: o.leads_analytics_fetch[0], leads: o.leads_fetch };
  }
  const C = M(/* @__PURE__ */ new Map()), X = E((e, r, l, o) => {
    const m = C.current.get(e);
    if (r === "exhaust" && m?.promise) return m.promise;
    r === "takeLatest" && m?.controller?.abort();
    const d = new AbortController(), h = () => Promise.resolve().then(() => l(d.signal)), u = r === "queue" && m?.promise ? m.promise.catch(() => {
    }).then(h) : h();
    return C.current.set(e, { controller: d, promise: u }), u.catch((f) => {
      f?.name !== "AbortError" && console.error(o, f);
    }).finally(() => {
      C.current.get(e)?.promise === u && C.current.delete(e);
    }), u;
  }, []);
  v(() => () => {
    for (const e of C.current.values()) e.controller?.abort();
    C.current.clear();
  }, []), v(() => {
    X("leads_mountleads_load", "takeLatest", (e) => Y({ signal: e }), "Module mount lifecycle failed:");
  }, []);
  const V = M(!1);
  return v(() => {
    if (!V.current) {
      V.current = !0;
      return;
    }
    const e = setTimeout(() => {
      X("leads_filter_changeleads_load", "takeLatest", (r) => Y({ signal: r }), "Module input lifecycle failed:");
    }, 250);
    return () => clearTimeout(e);
  }, [I, q, D, z, O]), /* @__PURE__ */ c("div", { ref: j, className: "rudra-module-wrapper", children: i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
    "      ",
    /* @__PURE__ */ a(ee, { id: "leads_root", "data-theme": /* @__PURE__ */ ((e) => e === void 0 ? "light" : e)(re), className: "flex min-h-screen w-full flex-col overflow-x-hidden leads-shell", as: "main", children: [
      "      ",
      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
        "      ",
        /* @__PURE__ */ c(ue, { id: "leads_header", className: `${t({ sm: "leads-header h-16 px-4 border-white/10", md: "leads-header h-18 px-8 border-white/10", lg: "leads-header h-20 px-12 border-white/10" }) || ""}`, navItemClassName: "text-xs font-black uppercase tracking-[0.12em]", theme: "auto", title: "SIGNAL/ROOM", sticky: !0, navItems: [{ href: "?status=", id: "all", label: "All leads" }, { href: "?status=new", id: "new", label: "New" }, { href: "?intent=job", id: "jobs", label: "Jobs" }, { href: "?intent=collaboration", id: "collabs", label: "Collaborations" }], mobileBreakpoint: "md" })
      ] }),
      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
        "      ",
        /* @__PURE__ */ a(oe, { id: "leads_main", className: `${t({ sm: "px-4 py-14", md: "px-8 py-20", lg: "px-12 py-24" }) || ""}`, as: "section", children: [
          "      ",
          i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
            "      ",
            /* @__PURE__ */ a(ce, { id: "leads_container", className: "w-full max-w-[1500px]", centered: !0, maxWidth: "full", children: [
              "      ",
              i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                "      ",
                /* @__PURE__ */ a(R, { id: "leads_meta", className: "border-t border-[#6dffb8]/25 pt-3", align: "center", justify: "between", direction: "horizontal", as: "div", gap: "4", wrap: !0, children: [
                  "      ",
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c(b, { id: "leads_kicker", className: "leads-signal ml-5 text-[10px] font-bold tracking-[.18em] text-[#6dffb8]", as: "p", content: "LIVE INTAKE · SERVER-RENDERED · FILTERED" })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c($, { id: "leads_badge", className: "rounded-full border border-[#6dffb8]/35 bg-[#6dffb8]/10 text-[#6dffb8]", variant: "solid", size: "sm", label: "SYSTEM ONLINE" })
                  ] })
                ] })
              ] }),
              i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                "      ",
                /* @__PURE__ */ c(b, { id: "leads_title", className: `${t({ sm: "leads-display mt-12 whitespace-pre-line text-[18vw] leading-[.82] text-white", md: "leads-display mt-14 whitespace-pre-line text-[11vw] leading-[.82] text-white", lg: "leads-display mt-16 whitespace-pre-line text-[7.5vw] leading-[.82] text-white" }) || ""}`, as: "h1", content: "INCOMING\\nSIGNALS" })
              ] }),
              i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                "      ",
                /* @__PURE__ */ a(K, { id: "leads_intro", className: `${t({ sm: "mt-10 grid grid-cols-1 gap-6", md: "mt-12 grid grid-cols-2 gap-8", lg: "mt-14 grid grid-cols-12 gap-8 items-end" }) || ""}`, as: "div", children: [
                  "      ",
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c(b, { id: "leads_copy", className: `grid ${t({ sm: "text-sm leading-relaxed text-white/55", md: "text-base leading-relaxed text-white/55", lg: "col-span-7 text-lg leading-relaxed text-white/55" }) || ""}`, as: "p", content: "A private command surface for every project, job and collaboration signal—SSR loaded, URL-filterable and ready for action." })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c(b, { id: "leads_sort_note", className: `grid ${t({ sm: "text-[10px] font-bold tracking-[.16em] text-[#62d9ff]", md: "text-right text-[10px] font-bold tracking-[.16em] text-[#62d9ff]", lg: "col-span-5 text-right text-[10px] font-bold tracking-[.16em] text-[#62d9ff]" }) || ""}`, as: "p", content: "SORTED · NEWEST FIRST" })
                  ] })
                ] })
              ] }),
              i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                "      ",
                /* @__PURE__ */ a(ee, { id: "leads_analytics", "aria-label": "Lead analytics", className: `${t({ sm: "block leads-analytics" }) || ""}`, children: [
                  "      ",
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ a(R, { id: "leads_analytics_head", className: `${t({ sm: "mb-5" }) || ""}`, gap: "4", wrap: !0, align: "end", justify: "between", direction: "horizontal", as: "div", children: [
                      "      ",
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(b, { id: "leads_analytics_title", className: `${t({ sm: "leads-display text-3xl text-white", md: "leads-display text-4xl text-white", lg: "leads-display text-4xl text-white" }) || ""}`, as: "h2", content: "LEAD PULSE" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(b, { id: "leads_analytics_note", className: `${t({ sm: "text-xs font-bold tracking-[.12em] text-[#62d9ff]/70" }) || ""}`, as: "p", content: "Live metrics for the current protected filter" })
                      ] })
                    ] })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ a(K, { id: "leads_kpi_grid", className: `grid flex ${t({ sm: "grid grid-cols-1 gap-4", md: "grid grid-cols-2 gap-4", lg: "grid grid-cols-4 gap-4" }) || ""}`, as: "div", children: [
                      "      ",
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(N, { id: "leads_metric_total", labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, negativeColor: "#fb7185", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.total_leads), description: "Records matching the active filter", showChart: !1, showTrend: !1, accentColor: "#62d9ff", neutralColor: "#62d9ff", positiveColor: "#6dffb8", label: "Total leads", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" } })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(N, { id: "leads_metric_new", chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, showChart: !1, showTrend: !0, trendLabel: "current queue", accentColor: "#6dffb8", neutralColor: "#62d9ff", positiveColor: "#6dffb8", label: "New leads", trend: "up", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.new_leads), negativeColor: "#fb7185", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, trendValue: "Live", description: "Awaiting first response" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(N, { id: "leads_metric_jobs", className: `${t({ sm: "leads-metric" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, showChart: !1, showTrend: !1, negativeColor: "#fb7185", positiveColor: "#6dffb8", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.job_leads), accentColor: "#a78bfa", neutralColor: "#62d9ff", label: "Job intent", description: "Career and hiring signals" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(N, { id: "leads_metric_sources", labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, positiveColor: "#6dffb8", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.active_sources), label: "Active sources", showTrend: !1, neutralColor: "#62d9ff", negativeColor: "#fb7185", showChart: !1, accentColor: "#fbbf24", description: "Distinct acquisition channels" })
                      ] })
                    ] })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ a(K, { id: "leads_insight_grid", className: `${t({ sm: "mt-4 grid grid-cols-1 gap-4", md: "mt-4 grid grid-cols-2 gap-4", lg: "mt-4 grid grid-cols-3 gap-4" }) || ""}`, as: "div", children: [
                      "      ",
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(N, { id: "leads_metric_volume", labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, chartHeight: 82, neutralColor: "#62d9ff", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.total_leads), showTrend: !0, showChart: !0, trendLabel: "received in last 7 days", trendValue: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.leads_last_7_days), description: "Daily arrivals represented in the current result set", negativeColor: "#fb7185", trend: "neutral", chartData: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(g?.daily_lead_counts), chartType: "area", accentColor: "#62d9ff", positiveColor: "#6dffb8", label: "Lead volume", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" } })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(N, { id: "leads_metric_intents", chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, trendValue: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.job_leads), positiveColor: "#6dffb8", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.project_leads), chartData: /* @__PURE__ */ ((e) => e === void 0 ? [0, 0, 0] : e)(g?.intent_counts), chartHeight: 82, trend: "neutral", accentColor: "#a78bfa", description: "Project leads shown as the headline value", showTrend: !0, trendLabel: "job leads", neutralColor: "#62d9ff", negativeColor: "#fb7185", label: "Intent mix", chartType: "line", showChart: !0 })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(N, { id: "leads_metric_contact", chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, accentColor: "#6dffb8", neutralColor: "#62d9ff", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.contact_progress), suffix: "%", showChart: !1, style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, trendValue: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(g?.progressed_leads), negativeColor: "#fb7185", positiveColor: "#6dffb8", trend: "up", showTrend: !0, trendLabel: "progressed leads", description: "Share moved beyond new status", label: "Contact progress" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                "      ",
                /* @__PURE__ */ a(te, { id: "leads_filters", className: `${t({ sm: "leads-panel mt-12 rounded-[1.25rem] border border-[#6dffb8]/20 bg-[#0d1319] p-5 text-white", md: "leads-panel mt-14 rounded-[1.5rem] border border-[#6dffb8]/20 bg-[#0d1319] p-7 text-white", lg: "leads-panel mt-16 rounded-[1.5rem] border border-[#6dffb8]/20 bg-[#0d1319] p-8 text-white" }) || ""}`, as: "section", theme: "auto", children: [
                  "      ",
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c(b, { id: "leads_filters_label", className: "text-[10px] font-bold tracking-[.18em] text-[#6dffb8]", as: "h2", content: "ACTIVE FILTERS" })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ a(R, { id: "leads_filter_row", className: "mt-5", as: "div", gap: "3", wrap: !0, direction: "horizontal", children: [
                      "      ",
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c($, { id: "leads_filter_intent", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", size: "md", label: q, variant: "outline" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c($, { id: "leads_filter_status", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", size: "md", label: I, variant: "outline" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c($, { id: "leads_filter_source", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", size: "md", label: D, variant: "outline" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c($, { id: "leads_filter_from", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", size: "md", label: z, variant: "outline" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c($, { id: "leads_filter_to", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", size: "md", label: O, variant: "outline" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                "      ",
                /* @__PURE__ */ a(te, { id: "leads_table_surface", className: `${t({ sm: "leads-table-glow mt-6 overflow-hidden rounded-[1.25rem] p-4", md: "leads-table-glow rounded-[1.5rem] p-6", lg: "leads-table-glow rounded-[1.5rem] p-8" }) || ""}`, as: "section", theme: "auto", children: [
                  "      ",
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ a(R, { id: "leads_table_head", className: "mb-6 border-b border-white/10 pb-5", direction: "horizontal", as: "div", gap: "4", wrap: !0, align: "end", justify: "between", children: [
                      "      ",
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(b, { id: "leads_table_title", className: `${t({ sm: "leads-display text-3xl text-white", md: "leads-display text-4xl text-white", lg: "leads-display text-4xl text-white" }) || ""}`, content: "SIGNAL LOG", as: "h2" })
                      ] }),
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(b, { id: "leads_table_hint", className: "text-xs font-bold text-[#62d9ff]/70", as: "p", content: "Search, filter and paginate" })
                      ] })
                    ] })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ a(me, { id: "leads_table_scroll", className: "w-full overflow-x-auto", orientation: "horizontal", children: [
                      "      ",
                      i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                        "      ",
                        /* @__PURE__ */ c(fe, { id: "leads_table", className: "min-w-[880px]", data: H, mode: "pagination", columns: [{ accessorKey: "full_name", header: "Name" }, { accessorKey: "email", header: "Email" }, { accessorKey: "company", header: "Company" }, { accessorKey: "intent", header: "Intent" }, { accessorKey: "source", header: "Source" }, { accessorKey: "status", header: "Status" }, { accessorKey: "created_at", header: "Received" }], pageSize: 10, globalFilterPlaceholder: "Search leads" })
                      ] })
                    ] })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c(b, { id: "leads_empty_note", className: "mt-5 text-xs leading-relaxed text-white/40", as: "p", content: "If no rows match, adjust the protected route query parameters. Lead data is never rendered by the public landing page." })
                  ] })
                ] })
              ] }),
              i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                "      ",
                /* @__PURE__ */ a(R, { id: "leads_footer", className: "mt-12 border-t border-white/10 pt-5", as: "footer", gap: "4", wrap: !0, justify: "between", direction: "horizontal", children: [
                  "      ",
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c(b, { id: "leads_footer_security", className: "text-[10px] font-bold tracking-[.16em] text-[#6dffb8]", as: "p", content: "PRIVATE ROUTE · AUTH REQUIRED" })
                  ] }),
                  i(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ a(n, { children: [
                    "      ",
                    /* @__PURE__ */ c(b, { id: "leads_footer_brand", className: "text-[10px] font-bold tracking-[.16em] text-white/35", as: "p", content: "RUDRA LEAD SYSTEM · 2026" })
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
  xe as default
};
