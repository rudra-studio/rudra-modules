import { jsx as i, jsxs as r, Fragment as l } from "react/jsx-runtime";
import { useState as C, useEffect as _, useRef as T, useCallback as v } from "react";
import { Header as Z, MetricCard as x, DataTable as V } from "@rudra-studio/rudra-widgets";
import { Typography as g, Badge as N, Surface as J } from "@rudra-studio/rudra-core";
import { Box as H, Section as ee, Container as te, Flex as $, Grid as k, ScrollArea as re } from "@rudra-studio/rudra-layout";
function oe(s) {
  const L = s.serverData || s.serverState || {};
  s.sharedState, s.applicationState || L.applicationState, s.pageState || L.pageState, s.pageData || L.pageData, {
    ...s.runtime?.functions || {},
    ...s.runtime?.actions || {},
    ...s.functions || {},
    ...s.actions || {}
  };
  const p = s.$theme ?? s.theme ?? s.data?.$theme ?? s.runtime?.data?.$theme ?? s.runtime?.theme, j = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [W, O] = C(() => p ?? j());
  _(() => {
    p != null && O(p);
  }, [p]), _(() => {
    if (p != null || typeof document > "u") return;
    const e = document.documentElement, a = (c) => O(c?.detail?.theme ?? j()), o = new MutationObserver(a);
    return o.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", a), a(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", a);
    };
  }, [p]);
  const A = T(null), [S, E] = C("lg");
  _(() => {
    if (!A.current) return;
    const e = new ResizeObserver((a) => {
      for (let o of a) {
        const c = o.contentRect.width;
        c < 768 ? E("sm") : c < 1024 ? E("md") : E("lg");
      }
    });
    return e.observe(A.current), () => e.disconnect();
  }, []);
  const t = v((e) => typeof e != "object" || e === null ? e : S === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : S === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [S]), d = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, I = s.to !== void 0 ? s.to : s.data?.to !== void 0 ? s.data.to : "", D = s.intent !== void 0 ? s.intent : s.data?.intent !== void 0 ? s.data.intent : "all", z = s.status !== void 0 ? s.status : s.data?.status !== void 0 ? s.data.status : "all", M = s.source !== void 0 ? s.source : s.data?.source !== void 0 ? s.data.source : "all", P = s.from !== void 0 ? s.from : s.data?.from !== void 0 ? s.data.from : "";
  s.where !== void 0 ? s.where : s.data?.where !== void 0 && s.data.where;
  const [f, K] = C(() => structuredClone({ active_sources: 0, collaboration_leads: 0, contact_progress: 0, daily_lead_counts: [], intent_counts: [0, 0, 0], job_leads: 0, leads_last_7_days: 0, new_leads: 0, progressed_leads: 0, project_leads: 0, total_leads: 0 })), [ae, F] = C(() => structuredClone(!1)), [Y, q] = C(() => structuredClone([])), w = v((e, a) => {
    switch (e) {
      case "leadAnalytics":
        return K(a), a;
      case "isLoadingLeads":
        return F(a), a;
      case "leads":
        return q(a), a;
      default:
        return a;
    }
  }, []);
  v((e, a) => {
    const [o, ...c] = String(e || "").split(".");
    if (!o) return a;
    if (c.length === 0) return w(o, a);
    const m = (n) => {
      const h = Array.isArray(n) ? [...n] : { ...n || {} };
      let u = h;
      return c.forEach((b, X) => {
        X === c.length - 1 ? u[b] = a : (u[b] = Array.isArray(u[b]) ? [...u[b]] : { ...u[b] || {} }, u = u[b]);
      }), h;
    };
    switch (o) {
      case "leadAnalytics":
        return K(m), a;
      case "isLoadingLeads":
        return F(m), a;
      case "leads":
        return q(m), a;
      default:
        return a;
    }
  }, [w]);
  const Q = {}, R = (e, a, o) => {
    if (!a || typeof a != "object") return "";
    const c = Array.isArray(a.type) ? a.type : a.type ? [a.type] : [], m = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (c.length && !c.includes(m) && !(m === "integer" && c.includes("number"))) return o + " must be " + c.join(" or ") + ".";
    if (a.enum && !a.enum.some((n) => JSON.stringify(n) === JSON.stringify(e))) return o + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const n of a.required || []) if (!Object.prototype.hasOwnProperty.call(e, n)) return o + "." + n + " is required.";
      for (const [n, h] of Object.entries(a.properties || {})) if (Object.prototype.hasOwnProperty.call(e, n)) {
        const u = R(e[n], h, o + "." + n);
        if (u) return u;
      }
    }
    if (Array.isArray(e) && a.items) for (let n = 0; n < e.length; n++) {
      const h = R(e[n], a.items, o + "[" + n + "]");
      if (h) return h;
    }
    return "";
  };
  v(async (e, a, o = !1) => {
    const c = Q[e];
    if (!c) throw new Error("Module output '" + e + "' is not declared.");
    const m = R(a, c, "output." + e);
    if (m) throw new Error(m);
    const n = s.onOutput || s.onModuleOutput || s.runtime?.onOutput;
    if (typeof n != "function") return a;
    const h = n(e, a, { moduleId: s.moduleId, awaitHandlers: o });
    return o ? await h : a;
  }, [s.onOutput, s.onModuleOutput, s.runtime?.onOutput, s.moduleId]);
  async function G(e = {}) {
    const a = {};
    return w("isLoadingLeads", !0), w("leads", a.leads_fetch), w("leadAnalytics", a.leads_analytics_fetch[0]), w("isLoadingLeads", !1), { analytics: a.leads_analytics_fetch[0], leads: a.leads_fetch };
  }
  const y = T(/* @__PURE__ */ new Map()), U = v((e, a, o, c) => {
    const m = y.current.get(e);
    if (a === "exhaust" && m?.promise) return m.promise;
    a === "takeLatest" && m?.controller?.abort();
    const n = new AbortController(), h = () => Promise.resolve().then(() => o(n.signal)), u = a === "queue" && m?.promise ? m.promise.catch(() => {
    }).then(h) : h();
    return y.current.set(e, { controller: n, promise: u }), u.catch((b) => {
      b?.name !== "AbortError" && console.error(c, b);
    }).finally(() => {
      y.current.get(e)?.promise === u && y.current.delete(e);
    }), u;
  }, []);
  _(() => () => {
    for (const e of y.current.values()) e.controller?.abort();
    y.current.clear();
  }, []), _(() => {
    U("leads_mountleads_load", "takeLatest", (e) => G({}), "Module mount lifecycle failed:");
  }, []);
  const B = T(!1);
  return _(() => {
    if (!B.current) {
      B.current = !0;
      return;
    }
    const e = setTimeout(() => {
      U("leads_filter_changeleads_load", "takeLatest", (a) => G({}), "Module input lifecycle failed:");
    }, 250);
    return () => clearTimeout(e);
  }, [z, D, M, P, I]), /* @__PURE__ */ i("div", { ref: A, className: "rudra-module-wrapper", children: d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
    "      ",
    /* @__PURE__ */ r(H, { id: "leads_root", "data-theme": /* @__PURE__ */ ((e) => e === void 0 ? "light" : e)(W), className: "flex min-h-screen w-full flex-col overflow-x-hidden leads-shell", as: "main", children: [
      "      ",
      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
        "      ",
        /* @__PURE__ */ i(Z, { id: "leads_header", navItemClassName: "text-xs font-black uppercase tracking-[0.12em]", className: `${t({ sm: "leads-header h-16 px-4 border-white/10", md: "leads-header h-18 px-8 border-white/10", lg: "leads-header h-20 px-12 border-white/10" }) || ""}`, mobileBreakpoint: "md", theme: "auto", title: "SIGNAL/ROOM", sticky: !0, navItems: [{ href: "?status=", id: "all", label: "All leads" }, { href: "?status=new", id: "new", label: "New" }, { href: "?intent=job", id: "jobs", label: "Jobs" }, { href: "?intent=collaboration", id: "collabs", label: "Collaborations" }] })
      ] }),
      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
        "      ",
        /* @__PURE__ */ r(ee, { id: "leads_main", className: `${t({ sm: "px-4 py-14", md: "px-8 py-20", lg: "px-12 py-24" }) || ""}`, as: "section", children: [
          "      ",
          d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
            "      ",
            /* @__PURE__ */ r(te, { id: "leads_container", className: "w-full max-w-[1500px]", centered: !0, maxWidth: "full", children: [
              "      ",
              d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                "      ",
                /* @__PURE__ */ r($, { id: "leads_meta", className: "border-t border-[#6dffb8]/25 pt-3", as: "div", gap: "4", wrap: !0, align: "center", justify: "between", direction: "horizontal", children: [
                  "      ",
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(g, { id: "leads_kicker", className: "leads-signal ml-5 text-[10px] font-bold tracking-[.18em] text-[#6dffb8]", as: "p", content: "LIVE INTAKE · SERVER-RENDERED · FILTERED" })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(N, { id: "leads_badge", className: "rounded-full border border-[#6dffb8]/35 bg-[#6dffb8]/10 text-[#6dffb8]", size: "sm", label: "SYSTEM ONLINE", variant: "solid" })
                  ] })
                ] })
              ] }),
              d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                "      ",
                /* @__PURE__ */ i(g, { id: "leads_title", className: `${t({ sm: "leads-display mt-12 whitespace-pre-line text-[18vw] leading-[.82] text-white", md: "leads-display mt-14 whitespace-pre-line text-[11vw] leading-[.82] text-white", lg: "leads-display mt-16 whitespace-pre-line text-[7.5vw] leading-[.82] text-white" }) || ""}`, as: "h1", content: "INCOMING\\nSIGNALS" })
              ] }),
              d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                "      ",
                /* @__PURE__ */ r(k, { id: "leads_intro", className: `${t({ sm: "mt-10 grid grid-cols-1 gap-6", md: "mt-12 grid grid-cols-2 gap-8", lg: "mt-14 grid grid-cols-12 gap-8 items-end" }) || ""}`, as: "div", children: [
                  "      ",
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(g, { id: "leads_copy", className: `grid ${t({ sm: "text-sm leading-relaxed text-white/55", md: "text-base leading-relaxed text-white/55", lg: "col-span-7 text-lg leading-relaxed text-white/55" }) || ""}`, as: "p", content: "A private command surface for every project, job and collaboration signal—SSR loaded, URL-filterable and ready for action." })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(g, { id: "leads_sort_note", className: `grid ${t({ sm: "text-[10px] font-bold tracking-[.16em] text-[#62d9ff]", md: "text-right text-[10px] font-bold tracking-[.16em] text-[#62d9ff]", lg: "col-span-5 text-right text-[10px] font-bold tracking-[.16em] text-[#62d9ff]" }) || ""}`, content: "SORTED · NEWEST FIRST", as: "p" })
                  ] })
                ] })
              ] }),
              d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                "      ",
                /* @__PURE__ */ r(H, { id: "leads_analytics", "aria-label": "Lead analytics", className: `${t({ sm: "block leads-analytics" }) || ""}`, children: [
                  "      ",
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ r($, { id: "leads_analytics_head", className: `${t({ sm: "mb-5" }) || ""}`, gap: "4", wrap: !0, align: "end", justify: "between", direction: "horizontal", as: "div", children: [
                      "      ",
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(g, { id: "leads_analytics_title", className: `${t({ sm: "leads-display text-3xl text-white", md: "leads-display text-4xl text-white", lg: "leads-display text-4xl text-white" }) || ""}`, content: "LEAD PULSE", as: "h2" })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(g, { id: "leads_analytics_note", className: `${t({ sm: "text-xs font-bold tracking-[.12em] text-[#62d9ff]/70" }) || ""}`, as: "p", content: "Live metrics for the current protected filter" })
                      ] })
                    ] })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ r(k, { id: "leads_kpi_grid", className: `grid flex ${t({ sm: "grid grid-cols-1 gap-4", md: "grid grid-cols-2 gap-4", lg: "grid grid-cols-4 gap-4" }) || ""}`, as: "div", children: [
                      "      ",
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(x, { id: "leads_metric_total", chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, negativeColor: "#fb7185", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, showChart: !1, accentColor: "#62d9ff", neutralColor: "#62d9ff", positiveColor: "#6dffb8", label: "Total leads", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.total_leads), showTrend: !1, description: "Records matching the active filter" })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(x, { id: "leads_metric_new", className: `${t({ sm: "leads-metric" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, trendValue: "Live", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.new_leads), showTrend: !0, description: "Awaiting first response", negativeColor: "#fb7185", trend: "up", accentColor: "#6dffb8", neutralColor: "#62d9ff", showChart: !1, trendLabel: "current queue", positiveColor: "#6dffb8", label: "New leads" })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(x, { id: "leads_metric_jobs", labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.job_leads), showChart: !1, showTrend: !1, negativeColor: "#fb7185", description: "Career and hiring signals", positiveColor: "#6dffb8", label: "Job intent", neutralColor: "#62d9ff", accentColor: "#a78bfa" })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(x, { id: "leads_metric_sources", className: `${t({ sm: "leads-metric" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, showChart: !1, negativeColor: "#fb7185", accentColor: "#fbbf24", label: "Active sources", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, positiveColor: "#6dffb8", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.active_sources), showTrend: !1, description: "Distinct acquisition channels", neutralColor: "#62d9ff" })
                      ] })
                    ] })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ r(k, { id: "leads_insight_grid", className: `${t({ sm: "mt-4 grid grid-cols-1 gap-4", md: "mt-4 grid grid-cols-2 gap-4", lg: "mt-4 grid grid-cols-3 gap-4" }) || ""}`, as: "div", children: [
                      "      ",
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(x, { id: "leads_metric_volume", descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, trend: "neutral", chartType: "area", label: "Lead volume", neutralColor: "#62d9ff", negativeColor: "#fb7185", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, showChart: !0, trendValue: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.leads_last_7_days), description: "Daily arrivals represented in the current result set", positiveColor: "#6dffb8", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.total_leads), chartData: /* @__PURE__ */ ((e) => e === void 0 ? [] : e)(f?.daily_lead_counts), showTrend: !0, trendLabel: "received in last 7 days", accentColor: "#62d9ff", chartHeight: 82 })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(x, { id: "leads_metric_intents", labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, trend: "neutral", value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.project_leads), chartType: "line", showChart: !0, description: "Project leads shown as the headline value", trendLabel: "job leads", neutralColor: "#62d9ff", negativeColor: "#fb7185", showTrend: !0, label: "Intent mix", chartData: /* @__PURE__ */ ((e) => e === void 0 ? [0, 0, 0] : e)(f?.intent_counts), trendValue: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.job_leads), accentColor: "#a78bfa", chartHeight: 82, positiveColor: "#6dffb8", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" } })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(x, { id: "leads_metric_contact", chartClassName: `${t({ sm: "leads-metric-chart" }) || ""}`, valueClassName: `${t({ sm: "leads-metric-value" }) || ""}`, className: `${t({ sm: "leads-metric" }) || ""}`, labelClassName: `${t({ sm: "leads-metric-label" }) || ""}`, descriptionClassName: `${t({ sm: "leads-metric-description" }) || ""}`, trendClassName: `${t({ sm: "leads-metric-trend" }) || ""}`, positiveColor: "#6dffb8", trend: "up", trendValue: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.progressed_leads), accentColor: "#6dffb8", label: "Contact progress", style: { background: "#0d1319", border: "1px solid rgba(98,217,255,.18)", borderRadius: "20px", padding: "20px" }, value: /* @__PURE__ */ ((e) => e === void 0 ? 0 : e)(f?.contact_progress), showChart: !1, showTrend: !0, trendLabel: "progressed leads", description: "Share moved beyond new status", neutralColor: "#62d9ff", suffix: "%", negativeColor: "#fb7185" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                "      ",
                /* @__PURE__ */ r(J, { id: "leads_filters", className: `${t({ sm: "leads-panel mt-12 rounded-[1.25rem] border border-[#6dffb8]/20 bg-[#0d1319] p-5 text-white", md: "leads-panel mt-14 rounded-[1.5rem] border border-[#6dffb8]/20 bg-[#0d1319] p-7 text-white", lg: "leads-panel mt-16 rounded-[1.5rem] border border-[#6dffb8]/20 bg-[#0d1319] p-8 text-white" }) || ""}`, as: "section", theme: "auto", children: [
                  "      ",
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(g, { id: "leads_filters_label", className: "text-[10px] font-bold tracking-[.18em] text-[#6dffb8]", content: "ACTIVE FILTERS", as: "h2" })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ r($, { id: "leads_filter_row", className: "mt-5", as: "div", gap: "3", wrap: !0, direction: "horizontal", children: [
                      "      ",
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(N, { id: "leads_filter_intent", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", variant: "outline", size: "md", label: D })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(N, { id: "leads_filter_status", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", variant: "outline", size: "md", label: z })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(N, { id: "leads_filter_source", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", size: "md", label: M, variant: "outline" })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(N, { id: "leads_filter_from", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", variant: "outline", size: "md", label: P })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(N, { id: "leads_filter_to", className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white", size: "md", label: I, variant: "outline" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                "      ",
                /* @__PURE__ */ r(J, { id: "leads_table_surface", className: `${t({ sm: "leads-table-glow mt-6 overflow-hidden rounded-[1.25rem] p-4", md: "leads-table-glow rounded-[1.5rem] p-6", lg: "leads-table-glow rounded-[1.5rem] p-8" }) || ""}`, as: "section", theme: "auto", children: [
                  "      ",
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ r($, { id: "leads_table_head", className: "mb-6 border-b border-white/10 pb-5", direction: "horizontal", as: "div", gap: "4", wrap: !0, align: "end", justify: "between", children: [
                      "      ",
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(g, { id: "leads_table_title", className: `${t({ sm: "leads-display text-3xl text-white", md: "leads-display text-4xl text-white", lg: "leads-display text-4xl text-white" }) || ""}`, content: "SIGNAL LOG", as: "h2" })
                      ] }),
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(g, { id: "leads_table_hint", className: "text-xs font-bold text-[#62d9ff]/70", as: "p", content: "Search, filter and paginate" })
                      ] })
                    ] })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ r(re, { id: "leads_table_scroll", className: "w-full overflow-x-auto", orientation: "horizontal", children: [
                      "      ",
                      d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                        "      ",
                        /* @__PURE__ */ i(V, { id: "leads_table", className: "min-w-[880px]", globalFilterPlaceholder: "Search leads", data: Y, mode: "pagination", columns: [{ accessorKey: "full_name", header: "Name" }, { accessorKey: "email", header: "Email" }, { accessorKey: "company", header: "Company" }, { accessorKey: "intent", header: "Intent" }, { accessorKey: "source", header: "Source" }, { accessorKey: "status", header: "Status" }, { accessorKey: "created_at", header: "Received" }], pageSize: 10 })
                      ] })
                    ] })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(g, { id: "leads_empty_note", className: "mt-5 text-xs leading-relaxed text-white/40", as: "p", content: "If no rows match, adjust the protected route query parameters. Lead data is never rendered by the public landing page." })
                  ] })
                ] })
              ] }),
              d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                "      ",
                /* @__PURE__ */ r($, { id: "leads_footer", className: "mt-12 border-t border-white/10 pt-5", justify: "between", direction: "horizontal", as: "footer", gap: "4", wrap: !0, children: [
                  "      ",
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(g, { id: "leads_footer_security", className: "text-[10px] font-bold tracking-[.16em] text-[#6dffb8]", as: "p", content: "PRIVATE ROUTE · AUTH REQUIRED" })
                  ] }),
                  d(t({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ r(l, { children: [
                    "      ",
                    /* @__PURE__ */ i(g, { id: "leads_footer_brand", className: "text-[10px] font-bold tracking-[.16em] text-white/35", as: "p", content: "RUDRA LEAD SYSTEM · 2026" })
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
  oe as default
};
