import { jsx as l, jsxs as h } from "react/jsx-runtime";
import A, { useState as N, useEffect as E, useRef as P, useCallback as _ } from "react";
import { LineChart as L } from "@rudra-studio/rudra-charts";
import * as T from "lucide-react";
import { Surface as D, Typography as j, Badge as V } from "@rudra-studio/rudra-core";
import { Stack as S, Grid as R } from "@rudra-studio/rudra-layout";
import { MetricCard as k, DataTable as $ } from "@rudra-studio/rudra-widgets";
const I = (n) => String(n || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "").replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, "").replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, ""), z = (n) => {
  let r = n;
  for (; r && typeof r == "object" && "type" in r && "value" in r; )
    r = r.value;
  return r;
};
function W({ icon: n, size: r, color: u, strokeWidth: C, className: x = "", style: b, ...g }) {
  const i = z(n), [w, p] = N(null), O = i && typeof i == "object" ? JSON.stringify(i) : String(i || "");
  E(() => {
    const a = new AbortController();
    let d = "", y = "";
    if (p(null), typeof i == "string") {
      const s = i.trim();
      if (T[s]) return () => a.abort();
      s.startsWith("<svg") ? y = s : (/^https?:\/\//.test(s) || s.startsWith("/") || s.startsWith("data:image/svg")) && (d = s);
    } else i && typeof i == "object" && (i.iconType === "svg" && i.svgContent ? y = i.svgContent : i.iconType === "url" && i.url && (d = i.url));
    return y ? p(I(y)) : d && fetch(d, { signal: a.signal }).then((s) => {
      if (!s.ok) throw new Error("Icon request failed (" + s.status + ")");
      return s.text();
    }).then((s) => {
      s.trim().startsWith("<svg") && p(I(s));
    }).catch((s) => {
      s.name !== "AbortError" && console.warn("Failed to load custom SVG icon:", s);
    }), () => a.abort();
  }, [O]);
  const v = i && typeof i == "object" ? i.props || {} : {}, m = { ...v };
  delete m.size, delete m.color, delete m.strokeWidth;
  const e = r ?? v.size ?? 24, t = u ?? v.color ?? "currentColor", o = C ?? v.strokeWidth ?? 1.5;
  let c = "";
  if (typeof i == "string" && T[i] ? c = i : i && typeof i == "object" && i.name && (!i.iconType || i.iconType === "lucide") && (c = i.name), c) {
    const a = T[c];
    if (a)
      return A.createElement(a, {
        size: e,
        color: t,
        strokeWidth: o,
        className: x,
        style: b,
        ...m,
        ...g
      });
  }
  if (w)
    return A.createElement("span", {
      ...m,
      ...g,
      className: ("rudra-universal-icon " + x).trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: e,
        height: e,
        color: t,
        ...b
      },
      dangerouslySetInnerHTML: {
        __html: w.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + o + '">')
      }
    });
  const f = T.LayoutGrid;
  return A.createElement(f, {
    size: e,
    color: t,
    strokeWidth: o,
    className: x,
    style: b,
    ...m,
    ...g
  });
}
function J(n) {
  const r = n.serverData || n.serverState || {};
  n.sharedState, n.applicationState || r.applicationState, n.pageState || r.pageState, n.pageData || r.pageData, {
    ...n.runtime?.functions || {},
    ...n.runtime?.actions || {},
    ...n.functions || {},
    ...n.actions || {}
  };
  const u = n.$theme ?? n.theme ?? n.data?.$theme ?? n.runtime?.data?.$theme ?? n.runtime?.theme, C = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [x, b] = N(() => u ?? C());
  E(() => {
    u != null && b(u);
  }, [u]), E(() => {
    if (u != null || typeof document > "u") return;
    const e = document.documentElement, t = (c) => b(c?.detail?.theme ?? C()), o = new MutationObserver(t);
    return o.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", t), t(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", t);
    };
  }, [u]);
  const g = P(null), [i, w] = N("lg");
  E(() => {
    if (!g.current) return;
    const e = new ResizeObserver((t) => {
      for (let o of t) {
        const c = o.contentRect.width;
        c < 768 ? w("sm") : c < 1024 ? w("md") : w("lg");
      }
    });
    return e.observe(g.current), () => e.disconnect();
  }, []);
  const p = _((e) => typeof e != "object" || e === null ? e : i === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : i === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [i]), O = _((e, t) => t, []);
  _((e, t) => {
    const [o, ...c] = String(e || "").split(".");
    return o && c.length === 0 ? O(o, t) : t;
  }, [O]), _(async (e, t, o) => {
    const c = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e
    ), f = c[t] || c.default;
    if (typeof f != "function") throw new Error("Library function '" + t + "' was not exported by " + e);
    return f(o);
  }, []);
  const v = {}, m = (e, t, o) => {
    if (!t || typeof t != "object") return "";
    const c = Array.isArray(t.type) ? t.type : t.type ? [t.type] : [], f = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (c.length && !c.includes(f) && !(f === "integer" && c.includes("number"))) return o + " must be " + c.join(" or ") + ".";
    if (t.enum && !t.enum.some((a) => JSON.stringify(a) === JSON.stringify(e))) return o + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const a of t.required || []) if (!Object.prototype.hasOwnProperty.call(e, a)) return o + "." + a + " is required.";
      for (const [a, d] of Object.entries(t.properties || {})) if (Object.prototype.hasOwnProperty.call(e, a)) {
        const y = m(e[a], d, o + "." + a);
        if (y) return y;
      }
    }
    if (Array.isArray(e) && t.items) for (let a = 0; a < e.length; a++) {
      const d = m(e[a], t.items, o + "[" + a + "]");
      if (d) return d;
    }
    return "";
  };
  return _(async (e, t, o = !1) => {
    const c = v[e];
    if (!c) throw new Error("Module output '" + e + "' is not declared.");
    const f = m(t, c, "output." + e);
    if (f) throw new Error(f);
    const a = n.onOutput || n.onModuleOutput || n.runtime?.onOutput;
    if (typeof a != "function") return t;
    const d = a(e, t, { moduleId: n.moduleId, awaitHandlers: o });
    return o ? await d : t;
  }, [n.onOutput, n.onModuleOutput, n.runtime?.onOutput, n.moduleId]), /* @__PURE__ */ l("div", { ref: g, className: "rudra-module-wrapper", children: /* @__PURE__ */ h(S, { id: "po_root", gap: "6", align: "stretch", direction: "vertical", children: [
    "      ",
    /* @__PURE__ */ h(D, { id: "po_header", as: "header", tone: "raised", radius: "xl", padding: "lg", bordered: !0, children: [
      "      ",
      /* @__PURE__ */ h(S, { id: "po_header_row", gap: "3", wrap: !0, align: "center", justify: "between", direction: "horizontal", children: [
        "      ",
        /* @__PURE__ */ h(S, { id: "po_title_stack", direction: "vertical", gap: "1", children: [
          "      ",
          /* @__PURE__ */ l(j, { id: "po_eyebrow", as: "p", content: "PULSEOPS / OPERATIONS", customColor: "#06b6d4" }),
          /* @__PURE__ */ l(j, { id: "po_title", as: "h2", content: "Command center" })
        ] }),
        /* @__PURE__ */ l(V, { id: "po_status", className: `${p({ sm: "ro" }) || ""} ${p({ sm: "bg-blue-600 text-white border-blue-600", lg: "bg-purple-100 text-purple-800 border-transparent" }) || ""}`, icon: /* @__PURE__ */ l(W, { icon: !1 }), label: r?.status?.description, customColor: !1 })
      ] })
    ] }),
    /* @__PURE__ */ h(R, { id: "po_kpis", className: `grid flex ${p({ sm: "grid-cols-1 gap-4 w-full", md: "grid-cols-2 gap-4 w-full", lg: "grid-cols-4 gap-4 w-full" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ l(k, { id: "po_availability", className: "pulseops-metric", chartHeight: 52, value: r?.metrics?.availability?.value, suffix: "%", chartData: r?.metrics?.availability?.chartData, showChart: !0, showTrend: !0, accentColor: "#22c55e", description: "Rolling 30 days", label: "Availability", trend: r?.metrics?.availability?.trend, chartType: "area", trendValue: r?.metrics?.availability?.trendValue }),
      /* @__PURE__ */ l(k, { id: "po_incidents", className: "pulseops-metric", label: "Open incidents", value: r?.metrics?.incidents?.value, chartType: "area", accentColor: "#f59e0b", chartHeight: 52, trend: r?.metrics?.incidents?.trend, chartData: r?.metrics?.incidents?.chartData, showChart: !0, showTrend: !0, trendValue: r?.metrics?.incidents?.trendValue, description: "Across production" }),
      /* @__PURE__ */ l(k, { id: "po_latency", className: "pulseops-metric", showChart: !0, accentColor: "#06b6d4", chartHeight: 52, description: "API + realtime", label: "p95 latency", chartType: "area", showTrend: !0, trendValue: r?.metrics?.latency?.trendValue, trend: r?.metrics?.latency?.trend, value: r?.metrics?.latency?.value, suffix: " ms", chartData: r?.metrics?.latency?.chartData }),
      /* @__PURE__ */ l(k, { id: "po_rate", className: "pulseops-metric", label: "Request rate", trend: r?.metrics?.requestRate?.trend, chartData: r?.metrics?.requestRate?.chartData, chartType: "area", showTrend: !0, trendValue: r?.metrics?.requestRate?.trendValue, accentColor: "#6366f1", value: r?.metrics?.requestRate?.value, suffix: " /s", showChart: !0, chartHeight: 52, description: "Current throughput" })
    ] }),
    /* @__PURE__ */ h(R, { id: "po_content", className: `grid flex ${p({ sm: "grid-cols-1 gap-6 w-full", lg: "grid-cols-2 gap-6 w-full" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ h(D, { id: "po_chart_surface", as: "section", tone: "raised", radius: "xl", padding: "lg", bordered: !0, children: [
        "      ",
        /* @__PURE__ */ h(S, { id: "po_chart_stack", gap: "4", direction: "vertical", children: [
          "      ",
          /* @__PURE__ */ l(j, { id: "po_chart_title", as: "h3", content: "Latency envelope" }),
          /* @__PURE__ */ l(L, { id: "po_chart", className: "pulseops-chart", chartClassName: "pulseops-chart-svg", curve: "smooth", showXAxis: !0, textColor: "var(--rudra-color-text-muted, #64748b)", hoverColor: "var(--rudra-color-accent-strong, #4f46e5)", categoryKey: "label", data: r?.latency_series, style: { background: "transparent" }, height: 300, showYAxis: !0, showTooltip: !0, valueKey: "value", pointColor: "var(--rudra-color-accent, #6366f1)", showPoints: !0, showGrid: !0, gridColor: "var(--rudra-color-border, #e5e7eb)", lineColor: "var(--rudra-color-accent, #6366f1)" })
        ] })
      ] }),
      /* @__PURE__ */ h(D, { id: "po_incident_surface", radius: "xl", padding: "lg", bordered: !0, as: "section", tone: "raised", children: [
        "      ",
        /* @__PURE__ */ h(S, { id: "po_incident_stack", gap: "4", direction: "vertical", children: [
          "      ",
          /* @__PURE__ */ l(j, { id: "po_incident_title", as: "h3", content: "Recent incidents" }),
          /* @__PURE__ */ l($, { id: "po_incident_table", data: r?.incidents, mode: "pagination", columns: [{ accessorKey: "name", header: "Incident" }, { accessorKey: "status", header: "Status" }, { accessorKey: "created_at", header: "Started" }], pageSize: 5, globalFilterPlaceholder: "Filter incidents" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  J as default
};
