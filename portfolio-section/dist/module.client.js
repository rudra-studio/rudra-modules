import { jsxs as s, jsx as i, Fragment as g } from "react/jsx-runtime";
import { useRef as F, useState as d, useEffect as W, useCallback as U } from "react";
import { Box as r } from "@rudra-studio/rudra-layout";
import { OptimizedImage as q } from "@rudra-studio/rudra-media";
import { Typography as o, Link as O } from "@rudra-studio/rudra-core";
import { TypewriterText as H, TextScramble as J, Marquee as Q, FlipTile as K } from "@rudra-studio/rudra-anim";
import { Repeater as x, DataTabs as V } from "@rudra-studio/rudra-widgets";
import { ProfileRPG as Y } from "@rudra-studio/rudra-three";
function he(X) {
  const f = {}, h = F(null), [b, k] = d("lg");
  W(() => {
    if (!h.current) return;
    const t = new ResizeObserver((u) => {
      for (let n of u) {
        const m = n.contentRect.width;
        m < 768 ? k("sm") : m < 1024 ? k("md") : k("lg");
      }
    });
    return t.observe(h.current), () => t.disconnect();
  }, []);
  const e = U((t) => typeof t != "object" || t === null ? t : b === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : b === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [b]), [Z, y] = d("https://raw.githubusercontent.com/sivasankar-selvasundar/rudra-public/master/uploads/image.png"), [P, _] = d("Sivasankar S"), [L, ee] = d("Systems Architect & Full-Stack Developer creating scalable digital ecosystems."), [te, ie] = d([{ color: "#38bdf8", id: "about", subtitle: "VoxelArchitect", text: "Full-StackEngineerobsessedwiththebridgebetweenhigh-performancewebappsandreal-time3Dgraphics.", title: "01//ABOUTME" }, { color: "#10b981", id: "experience", subtitle: "6+YearsShipped", text: "SeniorScalableSystems.Ibuilddevelopertoolsthatfeelliketoys,anduserinterfacesthatfeelikevideogames.", title: "02//EXPERIENCE" }, { color: "#a855f7", id: "education", subtitle: "ContinuousR&D", text: "Lifelongautodidact.Currentlydeep-divingintoWebGPUcomputationalshadersandAI-assistedproceduralgeneration.", title: "03//EDUCATION" }]), [R, se] = d("06"), [z, le] = d([{ href: "#", icon: "LucideMapPin", label: "Chennai, IN" }, { href: "mailto:sivasankar.eee2020@gmail.com", icon: "LucideMail", label: "sivasankar.eee2020@gmail.com" }, { href: "https://github.com/sivasankar-selvasundar", icon: "LucideExternalLink", label: "github.com/sivasankar-selvasundar" }]), [j, ne] = d([{ skill: "Java" }, { skill: "Spring Boot" }, { skill: "Spring MVC" }, { skill: "Spring Security" }, { skill: "REST APIs" }, { skill: "Microservices" }, { skill: "JavaScript" }, { skill: "TypeScript" }, { skill: "React" }, { skill: "Next.js" }, { skill: "Node.js" }, { skill: "NestJS" }, { skill: "Express.js" }, { skill: "HTML5" }, { skill: "CSS3" }, { skill: "Tailwind CSS" }, { skill: "Responsive Design" }, { skill: "Redux" }, { skill: "React Hooks" }, { skill: "React Context API" }, { skill: "Component Design" }, { skill: "Design Systems" }, { skill: "Material UI" }, { skill: "Ant Design" }, { skill: "JSON Schema" }, { skill: "Form Builder" }, { skill: "Drag and Drop UI" }, { skill: "Low-Code Platforms" }, { skill: "No-Code Platforms" }, { skill: "Python" }, { skill: "Go" }, { skill: "AWS" }, { skill: "AWS Lambda" }, { skill: "API Gateway" }, { skill: "Amazon SQS" }, { skill: "Amazon SNS" }, { skill: "Amazon Kinesis" }, { skill: "AWS IoT Core" }, { skill: "Serverless Framework" }, { skill: "LocalStack" }, { skill: "Docker" }, { skill: "MongoDB" }, { skill: "MySQL" }, { skill: "PostgreSQL" }, { skill: "Firebase" }, { skill: "Authentication" }, { skill: "JWT" }, { skill: "OAuth" }, { skill: "Git" }, { skill: "GitHub" }, { skill: "CI/CD" }, { skill: "Unit Testing" }, { skill: "JUnit" }, { skill: "Jest" }, { skill: "Testing Library" }, { skill: "Three.js" }, { skill: "GLTFLoader" }, { skill: "3D Web Development" }, { skill: "WebSockets" }, { skill: "Event-Driven Architecture" }, { skill: "System Design" }, { skill: "Software Architecture" }, { skill: "API Design" }, { skill: "Database Design" }, { skill: "Performance Optimization" }, { skill: "Code Refactoring" }, { skill: "Code Reviews" }, { skill: "Agile" }, { skill: "Scrum" }, { skill: "Technical Documentation" }, { skill: "AI Integration" }, { skill: "Prompt Engineering" }, { skill: "Startup Product Development" }, { skill: "SaaS Development" }, { skill: "MVP Development" }, { skill: "Frontend Architecture" }, { skill: "Backend Development" }, { skill: "Full Stack Development" }]), [M, re] = d([{ data: [{ content: `Full Stack Software Engineer with 6+ years of experience building scalable, cloud-native applications across frontend, backend, and AWS cloud technologies. I have hands-on experience designing distributed systems, developing enterprise applications, and delivering high-quality software using Java, Spring Boot, React, Node.js, TypeScript, GraphQL, PostgreSQL, and modern engineering practices.

Passionate about software architecture, developer experience, and continuous learning, I enjoy solving complex engineering challenges and building products that create real-world impact. I thrive in collaborative environments, take ownership of my work, and am always eager to explore emerging technologies, particularly in AI-assisted software development and cloud-native platforms.`, indicator: !1, moreContent: !1, subTitle: !1, title: !1 }], id: "about-me", tabName: "About Me" }, { data: [{ content: !1, indicator: "2016 - 2020", moreContent: { description: "Graduated with a CGPA of 8.78 and secured 27th Rank at the university level.", labels: [{ label: "CGPA 8.78" }, { label: "University Rank 27" }], title: "Achievements" }, subTitle: "Electrical & Electronics Engineering • Anna University", title: "Bachelor of Engineering" }, { content: !1, indicator: "2014 - 2016", moreContent: { description: "Completed Higher Secondary education with 88.75% in the Mathematics-Biology stream.", labels: [{ label: "88.75%" }, { label: "Maths" }, { label: "Biology" }], title: "Academic" }, subTitle: "I.C.I Govt (Boys) Higher Secondary School, Tenkasi", title: "Higher Secondary Education" }, { content: !1, indicator: "2013 - 2014", moreContent: { description: "Completed Secondary School education with 97% marks.", labels: [{ label: "97%" }], title: "Academic" }, subTitle: "SHSS", title: "Secondary School Leaving Certificate (SSLC)" }], id: "education", tabName: "Education" }, { data: [{ content: !1, indicator: "Jun 2025 - Present", moreContent: { description: "Developed and enhanced customer-facing web applications, led legacy frontend modernization, improved Largest Contentful Paint (LCP) by approximately 40%, leveraged AI-assisted development tools, and delivered scalable production features in Agile teams.", labels: [{ label: "React" }, { label: "Performance Optimization" }, { label: "Frontend Architecture" }, { label: "AI-Assisted Development" }], title: "Key Contributions" }, subTitle: "Synechron (Client: American Express)", title: "Senior Associate" }, { content: !1, indicator: "Aug 2022 - May 2025", moreContent: { description: "Designed scalable backend services, built a configurable rule engine, optimized GraphQL APIs by reducing response time by approximately 30%, implemented AWS serverless event-driven architecture, improved system reliability, and mentored junior engineers.", labels: [{ label: "Node.js" }, { label: "AWS" }, { label: "GraphQL" }, { label: "Event-Driven Architecture" }], title: "Key Contributions" }, subTitle: "Wipro Technologies (Client: HP)", title: "Software Engineer" }, { content: !1, indicator: "Aug 2020 - Aug 2022", moreContent: { description: "Contributed to backend development using Java and Spring Boot, supported enterprise migration and compliance initiatives, optimized SQL data access patterns, and built strong foundations in enterprise application architecture and backend system design.", labels: [{ label: "Java" }, { label: "Spring Boot" }, { label: "SQL" }, { label: "Enterprise Applications" }], title: "Key Contributions" }, subTitle: "HCL Technologies (Client: USAA)", title: "Software Engineer" }], id: "experience", tabName: "Experience" }]), [B, ae] = d([{ color: "#38bdf8", id: "about", subtitle: "Full-Stack & 3D Developer", text: "Full-Stack Engineer bridging modern web technologies like React and Tailwind with Unreal Engine game development. Alongside crafting digital and 3D experiences, I maintain a deep fascination with physics, particularly quantum mechanics and wave-particle duality.", title: "01 // ABOUT ME" }, { color: "#10b981", id: "experience", subtitle: "6 Years, 3 Companies", text: "With six years of professional experience spanning three companies, my career has involved transitioning between Bengaluru and Chennai. I build robust, scalable architectures leveraging Go, Firebase, and Linux environments alongside fluid frontend interfaces.", title: "02 // EXPERIENCE" }, { color: "#a855f7", id: "education", subtitle: "Continuous R&D", text: "Lifelong autodidact continuously optimizing my technical workflow. I am currently focused on integrating advanced AI-assisted development tools like GitHub Copilot to automate complex software testing and achieve high code coverage.", title: "03 // EDUCATION" }]);
  return /* @__PURE__ */ s("div", { ref: h, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ s(r, { id: "el_1783116382087_hktrke1", className: `flex ${e({ sm: "min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 pb-20 w-full" }) || ""} ${e({ sm: "flex-col", lg: "flex-col" }) || ""} gap-6`, children: [
      "      ",
      /* @__PURE__ */ s(r, { id: "el_1783117555351_vqxm7ws", className: `flex ${e({ sm: "max-w-6xl px-4 mx-auto w-full" }) || ""} ${e({ sm: "flex-col", md: "flex-row", lg: "flex-row" }) || ""} ${e({ sm: "justify-between" }) || ""} ${e({ sm: "items-start", md: "items-end", lg: "items-end" }) || ""} gap-2`, children: [
        "      ",
        /* @__PURE__ */ s(r, { id: "el_1783117704735_wru5yrv", className: `flex ${e({ sm: "flex-1" }) || ""} ${e({ sm: "flex-col" }) || ""}`, children: [
          "      ",
          /* @__PURE__ */ i(q, { id: "el_1783117892371_bqn6tux", src: e({ sm: "https://raw.githubusercontent.com/sivasankar-selvasundar/rudra-public/master/uploads/image.png" }), width: e({ sm: 150 }), height: e({ sm: 150 }), radius: e({ sm: "full" }), aspectRatio: "square", alt: e({ sm: "Profile Pic" }) }),
          /* @__PURE__ */ i(o, { id: "el_1783118024559_oain35d", className: `${e({ sm: "text-slate-900 tracking-tight leading-none mb-3" }) || ""} ${e({ sm: "text-5xl", md: "text-6xl", lg: "text-6xl" }) || ""} ${e({ sm: "font-extrabold" }) || ""}`, as: "h2", content: P }),
          /* @__PURE__ */ i(H, { id: "el_1783118365991_ifo3jxo", className: `${e({ sm: "max-w-xl mb-6" }) || ""} ${e({ sm: "text-lg", md: "text-xl", lg: "text-xl" }) || ""} ${e({ sm: "font-medium" }) || ""}`, as: "h2", text: L, customColor: e({ sm: "#0078ed" }), hideCursorOnComplete: "true", loop: e({ sm: "false" }), delay: e({ sm: 0 }), loopDelay: e({ sm: 1e7 }), showCursor: "true" }),
          /* @__PURE__ */ i(x, { id: "el_1783122541120_f986kyx", className: `flex ${e({ sm: "gap-4 text-sm text-slate-500 font-medium" }) || ""} flex-row flex-wrap ${e({ sm: "items-center" }) || ""} ${e({ md: "gap-2", lg: "gap-2" }) || ""}`, columns: e({ lg: 3, sm: 0 }), gap: "sm", items: z, layout: e({ lg: "flex", sm: "flex" }), children: (t) => {
            const u = f || {};
            return (() => {
              var m, a;
              const n = { ...u, ...t || {}, item: (t == null ? void 0 : t.item) ?? t, index: (t == null ? void 0 : t.index) ?? (t == null ? void 0 : t.i) ?? 0 };
              return /* @__PURE__ */ s(g, { children: [
                "      ",
                /* @__PURE__ */ s(r, { id: "el_1783122592136_aq1kex8", className: `${e({ sm: "text-sm text-slate-500 font-medium" }) || ""}`, children: [
                  "      ",
                  /* @__PURE__ */ s(O, { id: "el_1783122688079_k0fh8s3", rightIcon: !1, leftIcon: !1, children: [
                    "      ",
                    /* @__PURE__ */ i("div", { id: "el_1783122598744_x2wce06", name: (m = n == null ? void 0 : n.item) == null ? void 0 : m.icon, size: 20, color: "#111827", strokeWidth: 1.2 }),
                    /* @__PURE__ */ i(o, { id: "el_1783122719647_pyybzh6", className: `${e({ sm: "text-sm text-slate-500 font-medium" }) || ""}`, content: (a = n == null ? void 0 : n.item) == null ? void 0 : a.label, as: "h2" })
                  ] })
                ] })
              ] });
            })();
          } })
        ] }),
        /* @__PURE__ */ s(r, { id: "el_1783117701363_ocxzll6", children: [
          "      ",
          /* @__PURE__ */ s(r, { id: "el_1783123659603_5wvhewk", className: `flex ${e({ sm: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm gap-5 shrink-0 hover:shadow-md transition-shadow" }) || ""} ${e({ sm: "items-center" }) || ""}`, children: [
            "      ",
            /* @__PURE__ */ i(J, { id: "el_1783123741703_5dkfvtb", className: `${e({ sm: "font-black text-blue-600" }) || ""} ${e({ sm: "text-5xl" }) || ""} ${e({ sm: "font-extrabold" }) || ""}`, as: "h2", text: R, trigger: "onMount" }),
            /* @__PURE__ */ s(r, { id: "el_1783123833648_v21toav", className: `flex ${e({ sm: "flex-col" }) || ""}`, children: [
              "      ",
              /* @__PURE__ */ i(o, { id: "el_1783123877120_h7spqiy", className: `${e({ sm: "text-slate-800 uppercase tracking-widest" }) || ""} ${e({ sm: "text-sm" }) || ""} ${e({ sm: "font-bold" }) || ""}`, as: "h2", content: e({ sm: "YEARS" }) }),
              /* @__PURE__ */ i(o, { id: "el_1783123879912_497quve", className: `${e({ sm: "text-slate-500" }) || ""} ${e({ sm: "text-sm" }) || ""} ${e({ sm: "font-medium" }) || ""}`, as: "h2", content: e({ sm: "Experience" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s(Q, { id: "el_1783124249993_7ltc9uh", className: `${e({ sm: "overflow-hidden border-y border-slate-200 py-5 bg-white mb-8 shadow-sm" }) || ""}`, direction: "left", pauseOnHover: "true", pauseAnimation: "true", speed: e({ lg: 6, sm: 3 }), children: [
        "      ",
        /* @__PURE__ */ i(x, { id: "el_1783296242762_o8s63fo", className: `flex ${e({ sm: "gap-2", lg: "gap-0" }) || ""}`, items: j, layout: e({ lg: "flex", sm: "flex" }), children: (t) => {
          const u = f || {};
          return (() => {
            var m;
            const n = { ...u, ...t || {}, item: (t == null ? void 0 : t.item) ?? t, index: (t == null ? void 0 : t.index) ?? (t == null ? void 0 : t.i) ?? 0 };
            return /* @__PURE__ */ s(g, { children: [
              "      ",
              /* @__PURE__ */ s(r, { id: "el_1783296267155_t2j26td", className: `flex ${e({ md: "text-sm font-semibold tracking-widest text-slate-400 mx-4 ", lg: "text-sm font-semibold tracking-widest text-slate-400 mx-4 uppercase" }) || ""} ${e({ sm: "items-center", lg: "items-center" }) || ""} ${e({ sm: "gap-2", lg: "gap-2" }) || ""}`, children: [
                "      ",
                /* @__PURE__ */ i("div", { id: "el_1783296303075_i48zyfb", size: 20, color: "#111827", strokeWidth: 1.2, name: "CircleStar" }),
                /* @__PURE__ */ i(o, { id: "el_1783296325949_zncv0sv", className: `${e({ sm: "text-slate-500" }) || ""}`, as: "h2", content: (m = n == null ? void 0 : n.item) == null ? void 0 : m.skill })
              ] })
            ] });
          })();
        } })
      ] }),
      /* @__PURE__ */ s(r, { id: "el_1783299478908_st4uxgv", className: `${e({ sm: "max-w-6xl mx-auto", md: "max-w-6xl mx-auto w-full", lg: "max-w-6xl mx-auto w-full" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ i(V, { id: "el_1783296958587_kor6gzk", className: `${e({ sm: "max-w-6xl", lg: "max-w-6xl" }) || ""}`, templateContent: (t) => {
          const u = f || {};
          return (() => {
            var m;
            const n = { ...u, ...t || {}, item: (t == null ? void 0 : t.item) ?? t, index: (t == null ? void 0 : t.index) ?? (t == null ? void 0 : t.i) ?? 0, parent: u };
            return /* @__PURE__ */ s(g, { children: [
              "      ",
              /* @__PURE__ */ i(x, { id: "el_1783300722290_18dhtg0", className: `flex ${e({ sm: "flex-col", md: "flex-row", lg: "flex-row" }) || ""} ${e({ sm: "gap-2", md: "gap-2", lg: "gap-8" }) || ""}`, items: (m = n == null ? void 0 : n.activeTab) == null ? void 0 : m.data, layout: e({ lg: "flex", md: "flex", sm: "flex" }), children: (a) => {
                const G = n || {};
                return (() => {
                  var w, v, S, $, C, A, N, E, D, I;
                  const l = { ...G, ...a || {}, item: (a == null ? void 0 : a.item) ?? a, index: (a == null ? void 0 : a.index) ?? (a == null ? void 0 : a.i) ?? 0 };
                  return /* @__PURE__ */ s(g, { children: [
                    "      ",
                    /* @__PURE__ */ i(K, { id: "el_1783319052953_6orgl0c", className: `${e({ sm: "h-full", md: " flex-1", lg: "flex-1" }) || ""} ${e({ md: "h-64", lg: "h-64" }) || ""}`, backContent: /* @__PURE__ */ s(g, { children: [
                      "      ",
                      /* @__PURE__ */ s(r, { id: "el_1783339928997_gw2xmmv", className: `flex ${e({ sm: "h-full p-4" }) || ""} ${e({ sm: "flex-col" }) || ""}`, children: [
                        "      ",
                        /* @__PURE__ */ i(o, { id: "el_1783340211173_f694ofw", className: `${e({ sm: "text-sm font-bold text-slate-900 mb-2" }) || ""}`, as: "h2", content: (v = (w = l == null ? void 0 : l.item) == null ? void 0 : w.moreContent) == null ? void 0 : v.title }),
                        /* @__PURE__ */ i(o, { id: "el_1783340216477_2uijyff", className: `${e({ sm: "flex-1 text-xs text-slate-600 leading-relaxed mb-4 flex-1" }) || ""}`, as: "h2", content: ($ = (S = l == null ? void 0 : l.item) == null ? void 0 : S.moreContent) == null ? void 0 : $.description }),
                        /* @__PURE__ */ i(x, { id: "el_1783348883759_f0i46tv", className: `flex ${e({ sm: "gap-2" }) || ""} ${e({ sm: "flex-row" }) || ""} ${e({ sm: "flex-wrap" }) || ""} ${e({ sm: "items-center" }) || ""}`, layout: e({ sm: "flex" }), items: (A = (C = l == null ? void 0 : l.item) == null ? void 0 : C.moreContent) == null ? void 0 : A.labels, children: (c) => (() => {
                          var T;
                          const p = { ...c || {}, item: (c == null ? void 0 : c.item) ?? c, index: (c == null ? void 0 : c.index) ?? (c == null ? void 0 : c.i) ?? 0 };
                          return /* @__PURE__ */ s(g, { children: [
                            "      ",
                            /* @__PURE__ */ i(o, { id: "el_1783348937488_933qc8f", className: `${e({ sm: "px-2 py-1 bg-white border border-slate-200 rounded   text-slate-600" }) || ""} ${e({ sm: "text-xs" }) || ""} ${e({ sm: "font-semibold" }) || ""}`, content: (T = p == null ? void 0 : p.item) == null ? void 0 : T.label, as: "h2" })
                          ] });
                        })() })
                      ] })
                    ] }), frontContent: /* @__PURE__ */ s(g, { children: [
                      "      ",
                      /* @__PURE__ */ s(r, { id: "el_1783337050148_7chjh7v", className: "flex p-4 flex-col", children: [
                        "      ",
                        /* @__PURE__ */ i(o, { id: "el_1783338048046_7g6nknp", className: "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4", as: "h2", content: (N = l == null ? void 0 : l.item) == null ? void 0 : N.indicator }),
                        /* @__PURE__ */ i(o, { id: "el_1783338050412_2mw86jq", className: "text-xl font-bold text-slate-900 mb-1", as: "h2", content: (E = l == null ? void 0 : l.item) == null ? void 0 : E.title }),
                        /* @__PURE__ */ i(o, { id: "el_1783338052372_0u1gg50", className: "text-sm text-slate-500", as: "h2", content: (D = l == null ? void 0 : l.item) == null ? void 0 : D.subTitle }),
                        /* @__PURE__ */ i(o, { id: "el_1783338058221_rd2bncg", className: `${e({ sm: "text-xs text-slate-600 leading-relaxed mb-4 flex-1", lg: "text-md" }) || ""} ${e({ lg: "text-base" }) || ""}`, as: "h2", content: (I = l == null ? void 0 : l.item) == null ? void 0 : I.content })
                      ] })
                    ] }), direction: "horizontal", hasBackContent: e({ lg: !0, sm: { dataPath: "item.moreContent", type: "binding" } }) })
                  ] });
                })();
              } })
            ] });
          })();
        }, tabs: M, variant: "top" })
      ] })
    ] }),
    /* @__PURE__ */ s(r, { id: "el_1783343580648_whnyakp", className: `flex ${e({ sm: "bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200" }) || ""} ${e({ sm: "flex-col" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ s(r, { id: "el_1783343648304_oa6zsul", className: `flex ${e({ sm: "p-6 bg-slate-50 gap-4 border-b border-slate-200" }) || ""} ${e({ sm: "flex-row" }) || ""} ${e({ sm: "justify-between" }) || ""} ${e({ sm: "items-center" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ s(r, { id: "el_1783343973473_q75y88h", className: `flex ${e({ sm: "flex-col" }) || ""}`, children: [
          "      ",
          /* @__PURE__ */ i(o, { id: "el_1783343980986_e0mok9g", className: `${e({ sm: "text-slate-900 flex items-center gap-3" }) || ""} ${e({ sm: "text-2xl" }) || ""} ${e({ sm: "font-extrabold" }) || ""}`, as: "h2", content: e({ sm: "🎮 Bored of reading?" }) }),
          /* @__PURE__ */ i(o, { id: "el_1783343985129_6wlfb2z", className: `${e({ sm: "text-sm text-slate-500 mt-1 font-medium" }) || ""}`, as: "h2", content: e({ sm: "Play this mini-game to unlock fun facts about me." }) })
        ] })
      ] }),
      /* @__PURE__ */ s(r, { id: "el_1783343630200_wklm9b7", className: `${e({ lg: "h-screen" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ i(Y, { id: "el_1783344204113_cxj02nt", zones: B })
      ] })
    ] })
  ] });
}
export {
  he as default
};
