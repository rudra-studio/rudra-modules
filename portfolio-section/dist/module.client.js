import { jsxs as n, jsx as s, Fragment as x } from "react/jsx-runtime";
import { useRef as y, useState as g, useEffect as X, useCallback as _ } from "react";
import * as ee from "lucide-react";
import { CircleStar as te } from "lucide-react";
import { Box as a } from "@rudra-studio/rudra-layout";
import { OptimizedImage as ie } from "@rudra-studio/rudra-media";
import { Typography as m, Link as le } from "@rudra-studio/rudra-core";
import { TypewriterText as se, TextScramble as ne, Marquee as re, FlipTile as ae } from "@rudra-studio/rudra-anim";
import { Repeater as v, DataTabs as oe } from "@rudra-studio/rudra-widgets";
import { ProfileRPG as me } from "@rudra-studio/rudra-three";
function Ie(i) {
  var p, A, N, E, I, L, T, P, R;
  const S = {}, w = y(null), [$, C] = g("lg");
  X(() => {
    if (!w.current) return;
    const t = new ResizeObserver((f) => {
      for (let r of f) {
        const c = r.contentRect.width;
        c < 768 ? C("sm") : c < 1024 ? C("md") : C("lg");
      }
    });
    return t.observe(w.current), () => t.disconnect();
  }, []);
  const e = _((t) => typeof t != "object" || t === null ? t : $ === "sm" ? t.sm !== void 0 ? t.sm : t.md !== void 0 ? t.md : t.lg : $ === "md" ? t.md !== void 0 ? t.md : t.sm !== void 0 ? t.sm : t.lg : t.lg !== void 0 ? t.lg : t.md !== void 0 ? t.md : t.sm, [$]), [O, ce] = g(i.profileImage !== void 0 ? i.profileImage : ((p = i.serverData) == null ? void 0 : p.profileImage) !== void 0 ? i.serverData.profileImage : "https://raw.githubusercontent.com/sivasankar-selvasundar/rudra-public/master/uploads/image.png"), [H, de] = g(i.name !== void 0 ? i.name : ((A = i.serverData) == null ? void 0 : A.name) !== void 0 ? i.serverData.name : "Sivasankar S"), [J, ge] = g(i.role !== void 0 ? i.role : ((N = i.serverData) == null ? void 0 : N.role) !== void 0 ? i.serverData.role : "Systems Architect & Full-Stack Developer creating scalable digital ecosystems."), [ue, fe] = g(i.gameZones !== void 0 ? i.gameZones : ((E = i.serverData) == null ? void 0 : E.gameZones) !== void 0 ? i.serverData.gameZones : [{ color: "#38bdf8", id: "about", subtitle: "VoxelArchitect", text: "Full-StackEngineerobsessedwiththebridgebetweenhigh-performancewebappsandreal-time3Dgraphics.", title: "01//ABOUTME" }, { color: "#10b981", id: "experience", subtitle: "6+YearsShipped", text: "SeniorScalableSystems.Ibuilddevelopertoolsthatfeelliketoys,anduserinterfacesthatfeelikevideogames.", title: "02//EXPERIENCE" }, { color: "#a855f7", id: "education", subtitle: "ContinuousR&D", text: "Lifelongautodidact.Currentlydeep-divingintoWebGPUcomputationalshadersandAI-assistedproceduralgeneration.", title: "03//EDUCATION" }]), [Q, xe] = g(i.totalExperience !== void 0 ? i.totalExperience : ((I = i.serverData) == null ? void 0 : I.totalExperience) !== void 0 ? i.serverData.totalExperience : "06"), [Z, he] = g(i.heroLinks !== void 0 ? i.heroLinks : ((L = i.serverData) == null ? void 0 : L.heroLinks) !== void 0 ? i.serverData.heroLinks : [{ href: "#", icon: "LucideMapPin", label: "Chennai, IN" }, { href: "mailto:sivasankar.eee2020@gmail.com", icon: "LucideMail", label: "sivasankar.eee2020@gmail.com" }, { href: "https://github.com/sivasankar-selvasundar", icon: "LucideExternalLink", label: "github.com/sivasankar-selvasundar" }]), [K, be] = g(i.skills !== void 0 ? i.skills : ((T = i.serverData) == null ? void 0 : T.skills) !== void 0 ? i.serverData.skills : [{ skill: "Java" }, { skill: "Spring Boot" }, { skill: "Spring MVC" }, { skill: "Spring Security" }, { skill: "REST APIs" }, { skill: "Microservices" }, { skill: "JavaScript" }, { skill: "TypeScript" }, { skill: "React" }, { skill: "Next.js" }, { skill: "Node.js" }, { skill: "NestJS" }, { skill: "Express.js" }, { skill: "HTML5" }, { skill: "CSS3" }, { skill: "Tailwind CSS" }, { skill: "Responsive Design" }, { skill: "Redux" }, { skill: "React Hooks" }, { skill: "React Context API" }, { skill: "Component Design" }, { skill: "Design Systems" }, { skill: "Material UI" }, { skill: "Ant Design" }, { skill: "JSON Schema" }, { skill: "Form Builder" }, { skill: "Drag and Drop UI" }, { skill: "Low-Code Platforms" }, { skill: "No-Code Platforms" }, { skill: "Python" }, { skill: "Go" }, { skill: "AWS" }, { skill: "AWS Lambda" }, { skill: "API Gateway" }, { skill: "Amazon SQS" }, { skill: "Amazon SNS" }, { skill: "Amazon Kinesis" }, { skill: "AWS IoT Core" }, { skill: "Serverless Framework" }, { skill: "LocalStack" }, { skill: "Docker" }, { skill: "MongoDB" }, { skill: "MySQL" }, { skill: "PostgreSQL" }, { skill: "Firebase" }, { skill: "Authentication" }, { skill: "JWT" }, { skill: "OAuth" }, { skill: "Git" }, { skill: "GitHub" }, { skill: "CI/CD" }, { skill: "Unit Testing" }, { skill: "JUnit" }, { skill: "Jest" }, { skill: "Testing Library" }, { skill: "Three.js" }, { skill: "GLTFLoader" }, { skill: "3D Web Development" }, { skill: "WebSockets" }, { skill: "Event-Driven Architecture" }, { skill: "System Design" }, { skill: "Software Architecture" }, { skill: "API Design" }, { skill: "Database Design" }, { skill: "Performance Optimization" }, { skill: "Code Refactoring" }, { skill: "Code Reviews" }, { skill: "Agile" }, { skill: "Scrum" }, { skill: "Technical Documentation" }, { skill: "AI Integration" }, { skill: "Prompt Engineering" }, { skill: "Startup Product Development" }, { skill: "SaaS Development" }, { skill: "MVP Development" }, { skill: "Frontend Architecture" }, { skill: "Backend Development" }, { skill: "Full Stack Development" }]), [V, ke] = g(i.tabsSection !== void 0 ? i.tabsSection : ((P = i.serverData) == null ? void 0 : P.tabsSection) !== void 0 ? i.serverData.tabsSection : [{ data: [{ content: `Full Stack Software Engineer with 6+ years of experience building scalable, cloud-native applications across frontend, backend, and AWS cloud technologies. I have hands-on experience designing distributed systems, developing enterprise applications, and delivering high-quality software using Java, Spring Boot, React, Node.js, TypeScript, GraphQL, PostgreSQL, and modern engineering practices.

Passionate about software architecture, developer experience, and continuous learning, I enjoy solving complex engineering challenges and building products that create real-world impact. I thrive in collaborative environments, take ownership of my work, and am always eager to explore emerging technologies, particularly in AI-assisted software development and cloud-native platforms.`, indicator: !1, moreContent: !1, subTitle: !1, title: !1 }], id: "about-me", tabName: "About Me" }, { data: [{ content: !1, indicator: "2016 - 2020", moreContent: { description: "Graduated with a CGPA of 8.78 and secured 27th Rank at the university level.", labels: [{ label: "CGPA 8.78" }, { label: "University Rank 27" }], title: "Achievements" }, subTitle: "Electrical & Electronics Engineering • Anna University", title: "Bachelor of Engineering" }, { content: !1, indicator: "2014 - 2016", moreContent: { description: "Completed Higher Secondary education with 88.75% in the Mathematics-Biology stream.", labels: [{ label: "88.75%" }, { label: "Maths" }, { label: "Biology" }], title: "Academic" }, subTitle: "I.C.I Govt (B) Higher Secondary School, Tenkasi", title: "Higher Secondary Education" }, { content: !1, indicator: "2013 - 2014", moreContent: { description: "Completed Secondary School education with 97% marks.", labels: [{ label: "97%" }], title: "Academic" }, subTitle: "SHSS", title: "Secondary School Leaving Certificate (SSLC)" }], id: "education", tabName: "Education" }, { data: [{ content: !1, indicator: "Jun 2025 - Present", moreContent: { description: "Developed and enhanced customer-facing web applications, led legacy frontend modernization, improved Largest Contentful Paint (LCP) by approximately 40%, leveraged AI-assisted development tools, and delivered scalable production features in Agile teams.", labels: [{ label: "React" }, { label: "Performance Optimization" }, { label: "Frontend Architecture" }, { label: "AI-Assisted Development" }], title: "Key Contributions" }, subTitle: "Synechron (Client: American Express)", title: "Senior Associate" }, { content: !1, indicator: "Aug 2022 - May 2025", moreContent: { description: "Designed scalable backend services, built a configurable rule engine, optimized GraphQL APIs by reducing response time by approximately 30%, implemented AWS serverless event-driven architecture, improved system reliability, and mentored junior engineers.", labels: [{ label: "Node.js" }, { label: "AWS" }, { label: "GraphQL" }, { label: "Event-Driven Architecture" }], title: "Key Contributions" }, subTitle: "Wipro Technologies (Client: HP)", title: "Software Engineer" }, { content: !1, indicator: "Aug 2020 - Aug 2022", moreContent: { description: "Contributed to backend development using Java and Spring Boot, supported enterprise migration and compliance initiatives, optimized SQL data access patterns, and built strong foundations in enterprise application architecture and backend system design.", labels: [{ label: "Java" }, { label: "Spring Boot" }, { label: "SQL" }, { label: "Enterprise Applications" }], title: "Key Contributions" }, subTitle: "HCL Technologies (Client: USAA)", title: "Software Engineer" }], id: "experience", tabName: "Experience" }]), [Y, ve] = g(i.gameSections !== void 0 ? i.gameSections : ((R = i.serverData) == null ? void 0 : R.gameSections) !== void 0 ? i.serverData.gameSections : [{ color: "#38bdf8", id: "about", subtitle: "Full-Stack & 3D Developer", text: "Full-Stack Engineer bridging modern web technologies like React and Tailwind with Unreal Engine game development. Alongside crafting digital and 3D experiences, I maintain a deep fascination with physics, particularly quantum mechanics and wave-particle duality.", title: "01 // ABOUT ME" }, { color: "#10b981", id: "experience", subtitle: "6 Years, 3 Companies", text: "With six years of professional experience spanning three companies, my career has involved transitioning between Bengaluru and Chennai. I build robust, scalable architectures leveraging Go, Firebase, and Linux environments alongside fluid frontend interfaces.", title: "02 // EXPERIENCE" }, { color: "#a855f7", id: "education", subtitle: "Continuous R&D", text: "Lifelong autodidact continuously optimizing my technical workflow. I am currently focused on integrating advanced AI-assisted development tools like GitHub Copilot to automate complex software testing and achieve high code coverage.", title: "03 // EDUCATION" }]);
  return /* @__PURE__ */ n("div", { ref: w, className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ n(a, { id: "el_1783116382087_hktrke1", className: `flex ${e({ sm: "min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 pb-20 w-full" }) || ""} ${e({ sm: "flex-col", lg: "flex-col" }) || ""} gap-6`, children: [
      "      ",
      /* @__PURE__ */ n(a, { id: "el_1783117555351_vqxm7ws", className: `flex ${e({ sm: "max-w-6xl px-4 mx-auto w-full" }) || ""} ${e({ sm: "flex-col", md: "flex-row", lg: "flex-row" }) || ""} ${e({ sm: "justify-between" }) || ""} ${e({ sm: "items-start", md: "items-end", lg: "items-end" }) || ""} gap-2`, children: [
        "      ",
        /* @__PURE__ */ n(a, { id: "el_1783117704735_wru5yrv", className: `flex ${e({ sm: "flex-1 pt-2" }) || ""} ${e({ sm: "flex-col" }) || ""}`, children: [
          "      ",
          /* @__PURE__ */ s(ie, { id: "el_1783117892371_bqn6tux", alt: e({ sm: "Profile Pic" }), src: O, width: e({ sm: 150 }), height: e({ sm: 150 }), radius: e({ sm: "full" }), aspectRatio: "square" }),
          /* @__PURE__ */ s(m, { id: "el_1783118024559_oain35d", className: `${e({ sm: "text-slate-900 tracking-tight leading-none mb-3" }) || ""} text-5xl font-extrabold`, as: "h2", content: H }),
          /* @__PURE__ */ s(se, { id: "el_1783118365991_ifo3jxo", className: `${e({ sm: "max-w-xl mb-6" }) || ""} ${e({ sm: "text-lg", md: "text-xl", lg: "text-xl" }) || ""} ${e({ sm: "font-medium" }) || ""}`, delay: e({ sm: 0 }), showCursor: "true", customColor: e({ sm: "#0078ed" }), loopDelay: e({ sm: 1e7 }), hideCursorOnComplete: "true", as: "h2", loop: e({ sm: "false" }), text: J }),
          /* @__PURE__ */ s(v, { id: "el_1783122541120_f986kyx", className: `flex ${e({ sm: "gap-4 text-sm text-slate-500 font-medium" }) || ""} flex-row flex-wrap ${e({ sm: "items-center" }) || ""} ${e({ md: "gap-2", lg: "gap-2" }) || ""}`, gap: "sm", items: Z, layout: e({ lg: "flex", sm: "flex" }), columns: e({ lg: 3, sm: 0 }), children: (t) => {
            const f = S || {};
            return (() => {
              var c, o;
              const r = { ...f, ...t || {}, item: (t == null ? void 0 : t.item) ?? t, index: (t == null ? void 0 : t.index) ?? (t == null ? void 0 : t.i) ?? 0 };
              return /* @__PURE__ */ n(x, { children: [
                "      ",
                /* @__PURE__ */ n(a, { id: "el_1783122592136_aq1kex8", className: `${e({ sm: "text-sm text-slate-500 font-medium" }) || ""}`, children: [
                  "      ",
                  /* @__PURE__ */ n(le, { id: "el_1783122688079_k0fh8s3", leftIcon: !1, rightIcon: !1, href: (c = r == null ? void 0 : r.item) == null ? void 0 : c.href, children: [
                    "      ",
                    (() => {
                      var b;
                      const u = (b = r == null ? void 0 : r.item) == null ? void 0 : b.icon;
                      if (!u) return null;
                      const l = typeof u == "string" ? u : u.name, k = typeof u == "object" && u.props ? u.props : {}, h = ee[l];
                      return h ? /* @__PURE__ */ s(h, { ...k, id: "el_1783122598744_x2wce06", size: 20, color: "#111827", strokeWidth: 1.2 }) : null;
                    })(),
                    /* @__PURE__ */ s(m, { id: "el_1783122719647_pyybzh6", className: `${e({ sm: "text-sm text-slate-500 font-medium" }) || ""}`, content: (o = r == null ? void 0 : r.item) == null ? void 0 : o.label, as: "h2" })
                  ] })
                ] })
              ] });
            })();
          } })
        ] }),
        /* @__PURE__ */ n(a, { id: "el_1783117701363_ocxzll6", children: [
          "      ",
          /* @__PURE__ */ n(a, { id: "el_1783123659603_5wvhewk", className: `flex ${e({ sm: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm gap-5 shrink-0 hover:shadow-md transition-shadow" }) || ""} ${e({ sm: "items-center" }) || ""}`, children: [
            "      ",
            /* @__PURE__ */ s(ne, { id: "el_1783123741703_5dkfvtb", className: `${e({ sm: "font-black text-blue-600" }) || ""} ${e({ sm: "text-5xl" }) || ""} ${e({ sm: "font-extrabold" }) || ""}`, as: "h2", text: Q, trigger: "onMount" }),
            /* @__PURE__ */ n(a, { id: "el_1783123833648_v21toav", className: `flex ${e({ sm: "flex-col" }) || ""}`, children: [
              "      ",
              /* @__PURE__ */ s(m, { id: "el_1783123877120_h7spqiy", className: `${e({ sm: "text-slate-800 uppercase tracking-widest" }) || ""} ${e({ sm: "text-sm" }) || ""} ${e({ sm: "font-bold" }) || ""}`, content: e({ sm: "YEARS" }), as: "h2" }),
              /* @__PURE__ */ s(m, { id: "el_1783123879912_497quve", className: `${e({ sm: "text-slate-500" }) || ""} ${e({ sm: "text-sm" }) || ""} ${e({ sm: "font-medium" }) || ""}`, content: e({ sm: "Experience" }), as: "h2" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n(re, { id: "el_1783124249993_7ltc9uh", className: `${e({ sm: "overflow-hidden border-y border-slate-200 py-5 bg-white mb-8 shadow-sm" }) || ""}`, pauseOnHover: "true", speed: e({ lg: 6, sm: 3 }), direction: "left", pauseAnimation: !1, children: [
        "      ",
        /* @__PURE__ */ s(v, { id: "el_1783296242762_o8s63fo", className: `flex ${e({ sm: "gap-2", lg: "gap-0" }) || ""}`, items: K, layout: e({ lg: "flex", sm: "flex" }), children: (t) => {
          const f = S || {};
          return (() => {
            var c;
            const r = { ...f, ...t || {}, item: (t == null ? void 0 : t.item) ?? t, index: (t == null ? void 0 : t.index) ?? (t == null ? void 0 : t.i) ?? 0 };
            return /* @__PURE__ */ n(x, { children: [
              "      ",
              /* @__PURE__ */ n(a, { id: "el_1783296267155_t2j26td", className: `flex ${e({ md: "text-sm font-semibold tracking-widest text-slate-400 mx-4 ", lg: "text-sm font-semibold tracking-widest text-slate-400 mx-4 uppercase" }) || ""} ${e({ sm: "items-center", lg: "items-center" }) || ""} ${e({ sm: "gap-2", lg: "gap-2" }) || ""}`, children: [
                "      ",
                /* @__PURE__ */ s(te, { id: "el_1783296303075_i48zyfb", size: 20, color: "#111827", strokeWidth: 1.2 }),
                /* @__PURE__ */ s(m, { id: "el_1783296325949_zncv0sv", className: `${e({ sm: "font-semibold" }) || ""}`, as: "h2", content: (c = r == null ? void 0 : r.item) == null ? void 0 : c.skill })
              ] })
            ] });
          })();
        } })
      ] }),
      /* @__PURE__ */ n(a, { id: "el_1783299478908_st4uxgv", className: `${e({ sm: "max-w-6xl mx-auto", md: "max-w-6xl mx-auto w-full", lg: "max-w-6xl mx-auto w-full" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ s(oe, { id: "el_1783296958587_kor6gzk", className: `${e({ sm: "max-w-6xl", lg: "max-w-6xl" }) || ""}`, templateContent: (t) => {
          const f = S || {};
          return (() => {
            var c;
            const r = { ...f, ...t || {}, item: (t == null ? void 0 : t.item) ?? t, index: (t == null ? void 0 : t.index) ?? (t == null ? void 0 : t.i) ?? 0, parent: f };
            return /* @__PURE__ */ n(x, { children: [
              "      ",
              /* @__PURE__ */ s(v, { id: "el_1783300722290_18dhtg0", className: `flex ${e({ sm: "flex-col", md: "flex-row", lg: "flex-row" }) || ""} ${e({ sm: "gap-2", md: "gap-2", lg: "gap-8" }) || ""}`, items: (c = r == null ? void 0 : r.activeTab) == null ? void 0 : c.data, layout: e({ lg: "flex", md: "flex", sm: "flex" }), children: (o) => {
                const u = r || {};
                return (() => {
                  var k, h, b, z, j, M, B, G, F, W, U;
                  const l = { ...u, ...o || {}, item: (o == null ? void 0 : o.item) ?? o, index: (o == null ? void 0 : o.index) ?? (o == null ? void 0 : o.i) ?? 0 };
                  return /* @__PURE__ */ n(x, { children: [
                    "      ",
                    /* @__PURE__ */ s(ae, { id: "el_1783319052953_6orgl0c", className: `${e({ sm: "h-full", md: " flex-1", lg: "flex-1" }) || ""} ${e({ md: "h-64", lg: "h-64" }) || ""}`, frontContent: /* @__PURE__ */ n(x, { children: [
                      "      ",
                      /* @__PURE__ */ n(a, { id: "el_1783337050148_7chjh7v", className: "flex p-4 flex-col", children: [
                        "      ",
                        /* @__PURE__ */ s(m, { id: "el_1783338048046_7g6nknp", className: "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4", as: "h2", content: (k = l == null ? void 0 : l.item) == null ? void 0 : k.indicator }),
                        /* @__PURE__ */ s(m, { id: "el_1783338050412_2mw86jq", className: "text-xl font-bold text-slate-900 mb-1", content: (h = l == null ? void 0 : l.item) == null ? void 0 : h.title, as: "h2" }),
                        /* @__PURE__ */ s(m, { id: "el_1783338052372_0u1gg50", className: "text-sm text-slate-500", as: "h2", content: (b = l == null ? void 0 : l.item) == null ? void 0 : b.subTitle }),
                        /* @__PURE__ */ s(m, { id: "el_1783338058221_rd2bncg", className: `${e({ sm: " text-slate-600 leading-relaxed mb-4 flex-1", lg: "text-md" }) || ""} ${e({ sm: "text-sm", md: "text-sm", lg: "text-base" }) || ""}`, as: "h2", content: (z = l == null ? void 0 : l.item) == null ? void 0 : z.content })
                      ] })
                    ] }), backContent: /* @__PURE__ */ n(x, { children: [
                      "      ",
                      /* @__PURE__ */ n(a, { id: "el_1783339928997_gw2xmmv", className: `flex ${e({ sm: "h-full p-4" }) || ""} ${e({ sm: "flex-col" }) || ""}`, children: [
                        "      ",
                        /* @__PURE__ */ s(m, { id: "el_1783340211173_f694ofw", className: `${e({ sm: "text-sm font-bold text-slate-900 mb-2" }) || ""}`, as: "h2", content: (M = (j = l == null ? void 0 : l.item) == null ? void 0 : j.moreContent) == null ? void 0 : M.title }),
                        /* @__PURE__ */ s(m, { id: "el_1783340216477_2uijyff", className: `${e({ sm: "flex-1 text-xs text-slate-600 leading-relaxed mb-4 flex-1" }) || ""}`, as: "h2", content: (G = (B = l == null ? void 0 : l.item) == null ? void 0 : B.moreContent) == null ? void 0 : G.description }),
                        /* @__PURE__ */ s(v, { id: "el_1783348883759_f0i46tv", className: `flex ${e({ sm: "gap-2" }) || ""} ${e({ sm: "flex-row" }) || ""} ${e({ sm: "flex-wrap" }) || ""} ${e({ sm: "items-center" }) || ""}`, items: (W = (F = l == null ? void 0 : l.item) == null ? void 0 : F.moreContent) == null ? void 0 : W.labels, layout: e({ sm: "flex" }), children: (d) => (() => {
                          var q;
                          const D = { ...d || {}, item: (d == null ? void 0 : d.item) ?? d, index: (d == null ? void 0 : d.index) ?? (d == null ? void 0 : d.i) ?? 0 };
                          return /* @__PURE__ */ n(x, { children: [
                            "      ",
                            /* @__PURE__ */ s(m, { id: "el_1783348937488_933qc8f", className: `${e({ sm: "px-2 py-1 bg-white border border-slate-200 rounded   text-slate-600" }) || ""} ${e({ sm: "text-xs" }) || ""} ${e({ sm: "font-semibold" }) || ""}`, as: "h2", content: (q = D == null ? void 0 : D.item) == null ? void 0 : q.label })
                          ] });
                        })() })
                      ] })
                    ] }), direction: "horizontal", hasBackContent: (U = l == null ? void 0 : l.item) == null ? void 0 : U.moreContent })
                  ] });
                })();
              } })
            ] });
          })();
        }, variant: "top", tabs: V })
      ] })
    ] }),
    /* @__PURE__ */ n(a, { id: "el_1783343580648_whnyakp", className: `flex ${e({ sm: "bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 max-w-6xl mx-auto" }) || ""} ${e({ sm: "flex-col" }) || ""}`, children: [
      "      ",
      /* @__PURE__ */ n(a, { id: "el_1783343648304_oa6zsul", className: `flex ${e({ sm: "p-6 bg-slate-50 gap-4 border-b border-slate-200" }) || ""} ${e({ sm: "flex-row" }) || ""} ${e({ sm: "justify-between" }) || ""} ${e({ sm: "items-center" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ n(a, { id: "el_1783343973473_q75y88h", className: `flex ${e({ sm: "flex-col" }) || ""}`, children: [
          "      ",
          /* @__PURE__ */ s(m, { id: "el_1783343980986_e0mok9g", className: `${e({ sm: "text-slate-900 flex items-center gap-3" }) || ""} ${e({ sm: "text-2xl" }) || ""} ${e({ sm: "font-extrabold" }) || ""}`, content: e({ sm: "🎮 Bored of reading?" }), as: "h2" }),
          /* @__PURE__ */ s(m, { id: "el_1783343985129_6wlfb2z", className: `${e({ sm: "text-sm text-slate-500 mt-1 font-medium" }) || ""}`, as: "h2", content: e({ sm: "Play this mini-game to unlock fun facts about me." }) })
        ] })
      ] }),
      /* @__PURE__ */ n(a, { id: "el_1783343630200_wklm9b7", className: `${e({ lg: "h-screen" }) || ""}`, children: [
        "      ",
        /* @__PURE__ */ s(me, { id: "el_1783344204113_cxj02nt", zones: Y })
      ] })
    ] })
  ] });
}
export {
  Ie as default
};
