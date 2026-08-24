import { jsx as m, jsxs as i, Fragment as s } from "react/jsx-runtime";
import { useState as _, useEffect as C, useRef as z, useCallback as b } from "react";
import { Section as W, Box as h, Container as H, Stack as K } from "@rudra-studio/rudra-layout";
import { Reveal as Q, MagneticHover as O } from "@rudra-studio/rudra-anim";
import { Badge as U, Typography as g, Link as k } from "@rudra-studio/rudra-core";
import { FloatingShape as X } from "@rudra-studio/rudra-three";
function ie(t) {
  const v = t.serverData || t.serverState || {};
  t.sharedState, t.applicationState || v.applicationState, t.pageState || v.pageState, t.pageData || v.pageData, {
    ...t.runtime?.functions || {},
    ...t.runtime?.actions || {},
    ...t.functions || {},
    ...t.actions || {}
  };
  const u = t.$theme ?? t.theme ?? t.data?.$theme ?? t.runtime?.data?.$theme ?? t.runtime?.theme, S = () => typeof document > "u" ? "light" : document.documentElement.dataset.theme || (document.documentElement.classList.contains("dark") ? "dark" : "light"), [Y, T] = _(() => u ?? S());
  C(() => {
    u != null && T(u);
  }, [u]), C(() => {
    if (u != null || typeof document > "u") return;
    const e = document.documentElement, a = (d) => T(d?.detail?.theme ?? S()), o = new MutationObserver(a);
    return o.observe(e, { attributes: !0, attributeFilter: ["class", "data-theme"] }), window.addEventListener("rudra:theme-change", a), a(), () => {
      o.disconnect(), window.removeEventListener("rudra:theme-change", a);
    };
  }, [u]);
  const w = z(null), [x, N] = _("lg");
  C(() => {
    if (!w.current) return;
    const e = new ResizeObserver((a) => {
      for (let o of a) {
        const d = o.contentRect.width;
        d < 768 ? N("sm") : d < 1024 ? N("md") : N("lg");
      }
    });
    return e.observe(w.current), () => e.disconnect();
  }, []);
  const r = b((e) => typeof e != "object" || e === null ? e : x === "sm" ? e.sm !== void 0 ? e.sm : e.md !== void 0 ? e.md : e.lg : x === "md" ? e.md !== void 0 ? e.md : e.sm !== void 0 ? e.sm : e.lg : e.lg !== void 0 ? e.lg : e.md !== void 0 ? e.md : e.sm, [x]), n = (e) => Array.isArray(e) ? e.length > 0 : typeof e == "string" ? e.trim() !== "" && e.trim().toLowerCase() !== "false" : !!e, E = t.visualTheme !== void 0 ? t.visualTheme : t.data?.visualTheme !== void 0 ? t.data.visualTheme : "auto", j = t.visible !== void 0 ? t.visible : t.data?.visible !== void 0 ? t.data.visible : !0, R = t.customClass !== void 0 ? t.customClass : t.data?.customClass !== void 0 ? t.data.customClass : "lumora-content-shell", D = t.trustText !== void 0 ? t.trustText : t.data?.trustText !== void 0 ? t.data.trustText : "Realtime by design · SSR at the core", M = t.eyebrow !== void 0 ? t.eyebrow : t.data?.eyebrow !== void 0 ? t.data.eyebrow : "Built for experiences that move", B = t.secondaryCta !== void 0 ? t.secondaryCta : t.data?.secondaryCta !== void 0 ? t.data.secondaryCta : "Explore the experience", I = t.titleAccent !== void 0 ? t.titleAccent : t.data?.titleAccent !== void 0 ? t.data.titleAccent : "lasting momentum.", P = t.signalLabel !== void 0 ? t.signalLabel : t.data?.signalLabel !== void 0 ? t.data.signalLabel : "LIVE SIGNAL", F = t.primaryCta !== void 0 ? t.primaryCta : t.data?.primaryCta !== void 0 ? t.data.primaryCta : "Start a conversation";
  t.locale !== void 0 ? t.locale : t.data?.locale !== void 0 && t.data.locale;
  const q = t.description !== void 0 ? t.description : t.data?.description !== void 0 ? t.data.description : "A cinematic digital experience where immersive storytelling, thoughtful motion, and realtime insight work together.", G = t.title !== void 0 ? t.title : t.data?.title !== void 0 ? t.data.title : "Turn attention into", c = { visualTheme: E, visible: j, customClass: R, trustText: D, eyebrow: M, secondaryCta: B, titleAccent: I, signalLabel: P, primaryCta: F, description: q, title: G }, A = b((e, a) => a, []);
  b((e, a) => {
    const [o, ...d] = String(e || "").split(".");
    return o && d.length === 0 ? A(o, a) : a;
  }, [A]);
  const J = {}, $ = (e, a, o) => {
    if (!a || typeof a != "object") return "";
    const d = Array.isArray(a.type) ? a.type : a.type ? [a.type] : [], y = e === null ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e;
    if (d.length && !d.includes(y) && !(y === "integer" && d.includes("number"))) return o + " must be " + d.join(" or ") + ".";
    if (a.enum && !a.enum.some((l) => JSON.stringify(l) === JSON.stringify(e))) return o + " is not an allowed value.";
    if (e && typeof e == "object" && !Array.isArray(e)) {
      for (const l of a.required || []) if (!Object.prototype.hasOwnProperty.call(e, l)) return o + "." + l + " is required.";
      for (const [l, f] of Object.entries(a.properties || {})) if (Object.prototype.hasOwnProperty.call(e, l)) {
        const L = $(e[l], f, o + "." + l);
        if (L) return L;
      }
    }
    if (Array.isArray(e) && a.items) for (let l = 0; l < e.length; l++) {
      const f = $(e[l], a.items, o + "[" + l + "]");
      if (f) return f;
    }
    return "";
  };
  return b(async (e, a, o = !1) => {
    const d = J[e];
    if (!d) throw new Error("Module output '" + e + "' is not declared.");
    const y = $(a, d, "output." + e);
    if (y) throw new Error(y);
    const l = t.onOutput || t.onModuleOutput || t.runtime?.onOutput;
    if (typeof l != "function") return a;
    const f = l(e, a, { moduleId: t.moduleId, awaitHandlers: o });
    return o ? await f : a;
  }, [t.onOutput, t.onModuleOutput, t.runtime?.onOutput, t.moduleId]), /* @__PURE__ */ m("div", { ref: w, className: "rudra-module-wrapper", children: n(/* @__PURE__ */ ((e) => e === void 0 ? !0 : e)(c?.visible)) && /* @__PURE__ */ i(s, { children: [
    "      ",
    /* @__PURE__ */ i(W, { id: "hero_root", "data-theme": /* @__PURE__ */ ((e) => e === void 0 ? "auto" : e)(c?.visualTheme), className: `${r({ sm: "lumora-hero" }) || ""}`, as: "section", children: [
      "      ",
      n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
        "      ",
        /* @__PURE__ */ m(h, { id: "glow_a", className: `${r({ sm: "lumora-glow lumora-glow-a" }) || ""}` })
      ] }),
      n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
        "      ",
        /* @__PURE__ */ m(h, { id: "glow_b", className: `${r({ sm: "lumora-glow lumora-glow-b" }) || ""}` })
      ] }),
      n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
        "      ",
        /* @__PURE__ */ i(H, { id: "hero_container", className: `${r({ sm: "w-full px-6 py-16", md: "px-10", lg: "px-12" }) || ""}`, as: "div", centered: !0, maxWidth: "2xl", children: [
          "      ",
          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
            "      ",
            /* @__PURE__ */ i(h, { id: "custom_shell", className: `${((e) => e == null || e === !1 || typeof e == "object" ? "" : "" + String(e))(/* @__PURE__ */ ((e) => e === void 0 ? "lumora-content-shell" : e)(c?.customClass))}`, children: [
              "      ",
              n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                "      ",
                /* @__PURE__ */ i(h, { id: "hero_grid", className: `${r({ sm: "lumora-grid" }) || ""}`, children: [
                  "      ",
                  n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ i(Q, { id: "copy_reveal", className: `${r({ sm: "w-full" }) || ""}`, once: !0, delay: 0.08, cascade: "true", distance: 28, duration: 0.72, direction: "up", staggerDelay: 0.08, children: [
                      "      ",
                      n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ i(K, { id: "copy_stack", className: `${r({ sm: "lumora-copy w-full" }) || ""}`, justify: "center", direction: "vertical", as: "div", gap: "6", align: "start", children: [
                          "      ",
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(U, { id: "eyebrow_badge", className: `${r({ sm: "lumora-eyebrow inline-flex px-3.5 py-1.5 text-[10px] bg-transparent text-purple-300 border-purple-500/40" }) || ""}`, label: /* @__PURE__ */ ((e) => e === void 0 ? "Built for experiences that move" : e)(c?.eyebrow), ariaLabel: c?.eyebrow, as: "span" })
                          ] }),
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(g, { id: "hero_title", className: `${r({ sm: "lumora-title" }) || ""}`, as: "h2", content: /* @__PURE__ */ ((e) => e === void 0 ? "Turn attention into" : e)(c?.title) })
                          ] }),
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(g, { id: "hero_accent", className: `${r({ sm: "lumora-title lumora-accent" }) || ""}`, as: "strong", content: /* @__PURE__ */ ((e) => e === void 0 ? "lasting momentum." : e)(c?.titleAccent) })
                          ] }),
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(g, { id: "hero_description", className: `${r({ sm: "lumora-description" }) || ""}`, as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "A cinematic digital experience where immersive storytelling, thoughtful motion, and realtime insight work together." : e)(c?.description) })
                          ] }),
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ i(h, { id: "hero_actions", className: `${r({ sm: "lumora-actions" }) || ""}`, children: [
                              "      ",
                              n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                                "      ",
                                /* @__PURE__ */ i(O, { id: "primary_magnetic", className: `${r({ sm: "inline-block w-fit cursor-pointer" }) || ""}`, springStiffness: 160, intensity: "medium", springDamping: 18, children: [
                                  "      ",
                                  n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                                    "      ",
                                    /* @__PURE__ */ i(k, { id: "primary_link", className: `${r({ sm: "lumora-cta lumora-cta-primary text-white text-base font-semibold no-underline" }) || ""}`, href: "#contact", disabled: !1, children: [
                                      "      ",
                                      n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                                        "      ",
                                        /* @__PURE__ */ m(g, { id: "primary_label", className: `${r({ sm: "text-base font-semibold" }) || ""}`, as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Start a conversation" : e)(c?.primaryCta) })
                                      ] })
                                    ] })
                                  ] })
                                ] })
                              ] }),
                              n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                                "      ",
                                /* @__PURE__ */ i(O, { id: "secondary_magnetic", className: `${r({ sm: "inline-block w-fit cursor-pointer" }) || ""}`, intensity: "light", springDamping: 20, springStiffness: 140, children: [
                                  "      ",
                                  n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                                    "      ",
                                    /* @__PURE__ */ i(k, { id: "secondary_link", className: `${r({ sm: "lumora-cta lumora-cta-secondary text-white text-base font-semibold no-underline" }) || ""}`, href: "#experience", disabled: !1, children: [
                                      "      ",
                                      n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                                        "      ",
                                        /* @__PURE__ */ m(g, { id: "secondary_label", className: `${r({ sm: "text-base font-semibold" }) || ""}`, as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "Explore the experience" : e)(c?.secondaryCta) })
                                      ] })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] }),
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(g, { id: "trust_text", className: `${r({ sm: "lumora-trust text-xs font-semibold" }) || ""}`, as: "p", content: /* @__PURE__ */ ((e) => e === void 0 ? "Realtime by design · SSR at the core" : e)(c?.trustText) })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                    "      ",
                    /* @__PURE__ */ i(h, { id: "visual_parallax", "data-visual-frame": "stable", className: `${r({ sm: "relative w-full" }) || ""}`, children: [
                      "      ",
                      n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                        "      ",
                        /* @__PURE__ */ i(h, { id: "visual_stage", className: `${r({ sm: "lumora-visual" }) || ""}`, children: [
                          "      ",
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(h, { id: "visual_orbit", "aria-hidden": !0, className: `${r({ sm: "lumora-orbit" }) || ""}` })
                          ] }),
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(X, { id: "floating_shape", className: "lumora-shape", wireframe: !1, interactive: !1, shape: "icosahedron", speed: 0.24, meshColor: "#8b5cf6" })
                          ] }),
                          n(r({ lg: !0, md: !0, sm: !0 })) && /* @__PURE__ */ i(s, { children: [
                            "      ",
                            /* @__PURE__ */ m(g, { id: "signal_text", "aria-label": "Live signal status", className: `${r({ sm: "lumora-signal text-xs font-semibold" }) || ""}`, as: "span", content: /* @__PURE__ */ ((e) => e === void 0 ? "LIVE SIGNAL" : e)(c?.signalLabel) })
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
  ie as default
};
