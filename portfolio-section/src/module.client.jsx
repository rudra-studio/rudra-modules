import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

import { TypewriterText as RudraAnimTypewriterText, TextScramble as RudraAnimTextScramble, Marquee as RudraAnimMarquee, FlipTile as RudraAnimFlipTile } from '@rudra-studio/rudra-anim';
import { Repeater as RudraWidgetsRepeater, DataTabs as RudraWidgetsDataTabs } from '@rudra-studio/rudra-widgets';
import { ProfileRPG as RudraThreeProfileRPG } from '@rudra-studio/rudra-three';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { OptimizedImage as RudraMediaOptimizedImage } from '@rudra-studio/rudra-media';
import { Typography as RudraCoreTypography, Link as RudraCoreLink } from '@rudra-studio/rudra-core';

export default function CompiledModule(props) {
  const [viewport, setViewport] = useState('lg');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setViewport('sm');
      else if (window.innerWidth < 1024) setViewport('md');
      else setViewport('lg');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveProp = useCallback((val) => {
    if (typeof val !== 'object' || val === null) return val;
    if (viewport === 'sm') return val.sm !== undefined ? val.sm : (val.md !== undefined ? val.md : val.lg);
    if (viewport === 'md') return val.md !== undefined ? val.md : (val.sm !== undefined ? val.sm : val.lg);
    return val.lg !== undefined ? val.lg : (val.md !== undefined ? val.md : val.sm);
  }, [viewport]);

  const [profileImage, set_profileImage] = useState("https://raw.githubusercontent.com/sivasankar-selvasundar/rudra-public/master/uploads/image.png");
  const [name, set_name] = useState("Sivasankar S");
  const [role, set_role] = useState("Systems Architect \u0026 Full-Stack Developer creating scalable digital ecosystems.");
  const [gameZones, set_gameZones] = useState([{"color":"#38bdf8","id":"about","subtitle":"VoxelArchitect","text":"Full-StackEngineerobsessedwiththebridgebetweenhigh-performancewebappsandreal-time3Dgraphics.","title":"01//ABOUTME"},{"color":"#10b981","id":"experience","subtitle":"6+YearsShipped","text":"SeniorScalableSystems.Ibuilddevelopertoolsthatfeelliketoys,anduserinterfacesthatfeelikevideogames.","title":"02//EXPERIENCE"},{"color":"#a855f7","id":"education","subtitle":"ContinuousR\u0026D","text":"Lifelongautodidact.Currentlydeep-divingintoWebGPUcomputationalshadersandAI-assistedproceduralgeneration.","title":"03//EDUCATION"}]);
  const [totalExperience, set_totalExperience] = useState("06");
  const [heroLinks, set_heroLinks] = useState([{"href":"#","icon":"LucideMapPin","label":"Chennai, IN"},{"href":"mailto:sivasankar.eee2020@gmail.com","icon":"LucideMail","label":"sivasankar.eee2020@gmail.com"},{"href":"https://github.com/sivasankar-selvasundar","icon":"LucideExternalLink","label":"github.com/sivasankar-selvasundar"}]);
  const [skills, set_skills] = useState([{"skill":"Java"},{"skill":"Spring Boot"},{"skill":"Spring MVC"},{"skill":"Spring Security"},{"skill":"REST APIs"},{"skill":"Microservices"},{"skill":"JavaScript"},{"skill":"TypeScript"},{"skill":"React"},{"skill":"Next.js"},{"skill":"Node.js"},{"skill":"NestJS"},{"skill":"Express.js"},{"skill":"HTML5"},{"skill":"CSS3"},{"skill":"Tailwind CSS"},{"skill":"Responsive Design"},{"skill":"Redux"},{"skill":"React Hooks"},{"skill":"React Context API"},{"skill":"Component Design"},{"skill":"Design Systems"},{"skill":"Material UI"},{"skill":"Ant Design"},{"skill":"JSON Schema"},{"skill":"Form Builder"},{"skill":"Drag and Drop UI"},{"skill":"Low-Code Platforms"},{"skill":"No-Code Platforms"},{"skill":"Python"},{"skill":"Go"},{"skill":"AWS"},{"skill":"AWS Lambda"},{"skill":"API Gateway"},{"skill":"Amazon SQS"},{"skill":"Amazon SNS"},{"skill":"Amazon Kinesis"},{"skill":"AWS IoT Core"},{"skill":"Serverless Framework"},{"skill":"LocalStack"},{"skill":"Docker"},{"skill":"MongoDB"},{"skill":"MySQL"},{"skill":"PostgreSQL"},{"skill":"Firebase"},{"skill":"Authentication"},{"skill":"JWT"},{"skill":"OAuth"},{"skill":"Git"},{"skill":"GitHub"},{"skill":"CI/CD"},{"skill":"Unit Testing"},{"skill":"JUnit"},{"skill":"Jest"},{"skill":"Testing Library"},{"skill":"Three.js"},{"skill":"GLTFLoader"},{"skill":"3D Web Development"},{"skill":"WebSockets"},{"skill":"Event-Driven Architecture"},{"skill":"System Design"},{"skill":"Software Architecture"},{"skill":"API Design"},{"skill":"Database Design"},{"skill":"Performance Optimization"},{"skill":"Code Refactoring"},{"skill":"Code Reviews"},{"skill":"Agile"},{"skill":"Scrum"},{"skill":"Technical Documentation"},{"skill":"AI Integration"},{"skill":"Prompt Engineering"},{"skill":"Startup Product Development"},{"skill":"SaaS Development"},{"skill":"MVP Development"},{"skill":"Frontend Architecture"},{"skill":"Backend Development"},{"skill":"Full Stack Development"}]);
  const [tabsSection, set_tabsSection] = useState([{"data":[{"content":"Full Stack Software Engineer with 6+ years of experience building scalable, cloud-native applications across frontend, backend, and AWS cloud technologies. I have hands-on experience designing distributed systems, developing enterprise applications, and delivering high-quality software using Java, Spring Boot, React, Node.js, TypeScript, GraphQL, PostgreSQL, and modern engineering practices.\n\nPassionate about software architecture, developer experience, and continuous learning, I enjoy solving complex engineering challenges and building products that create real-world impact. I thrive in collaborative environments, take ownership of my work, and am always eager to explore emerging technologies, particularly in AI-assisted software development and cloud-native platforms.","indicator":false,"moreContent":false,"subTitle":false,"title":false}],"id":"about-me","tabName":"About Me"},{"data":[{"content":false,"indicator":"2016 - 2020","moreContent":{"description":"Graduated with a CGPA of 8.78 and secured 27th Rank at the university level.","labels":[{"label":"CGPA 8.78"},{"label":"University Rank 27"}],"title":"Achievements"},"subTitle":"Electrical \u0026 Electronics Engineering • Anna University","title":"Bachelor of Engineering"},{"content":false,"indicator":"2014 - 2016","moreContent":{"description":"Completed Higher Secondary education with 88.75% in the Mathematics-Biology stream.","labels":[{"label":"88.75%"},{"label":"Maths"},{"label":"Biology"}],"title":"Academic"},"subTitle":"I.C.I Govt (Boys) Higher Secondary School, Tenkasi","title":"Higher Secondary Education"},{"content":false,"indicator":"2013 - 2014","moreContent":{"description":"Completed Secondary School education with 97% marks.","labels":[{"label":"97%"}],"title":"Academic"},"subTitle":"SHSS","title":"Secondary School Leaving Certificate (SSLC)"}],"id":"education","tabName":"Education"},{"data":[{"content":false,"indicator":"Jun 2025 - Present","moreContent":{"description":"Developed and enhanced customer-facing web applications, led legacy frontend modernization, improved Largest Contentful Paint (LCP) by approximately 40%, leveraged AI-assisted development tools, and delivered scalable production features in Agile teams.","labels":[{"label":"React"},{"label":"Performance Optimization"},{"label":"Frontend Architecture"},{"label":"AI-Assisted Development"}],"title":"Key Contributions"},"subTitle":"Synechron (Client: American Express)","title":"Senior Associate"},{"content":false,"indicator":"Aug 2022 - May 2025","moreContent":{"description":"Designed scalable backend services, built a configurable rule engine, optimized GraphQL APIs by reducing response time by approximately 30%, implemented AWS serverless event-driven architecture, improved system reliability, and mentored junior engineers.","labels":[{"label":"Node.js"},{"label":"AWS"},{"label":"GraphQL"},{"label":"Event-Driven Architecture"}],"title":"Key Contributions"},"subTitle":"Wipro Technologies (Client: HP)","title":"Software Engineer"},{"content":false,"indicator":"Aug 2020 - Aug 2022","moreContent":{"description":"Contributed to backend development using Java and Spring Boot, supported enterprise migration and compliance initiatives, optimized SQL data access patterns, and built strong foundations in enterprise application architecture and backend system design.","labels":[{"label":"Java"},{"label":"Spring Boot"},{"label":"SQL"},{"label":"Enterprise Applications"}],"title":"Key Contributions"},"subTitle":"HCL Technologies (Client: USAA)","title":"Software Engineer"}],"id":"experience","tabName":"Experience"}]);
  const [gameSections, set_gameSections] = useState([{"color":"#38bdf8","id":"about","subtitle":"Full-Stack \u0026 3D Developer","text":"Full-Stack Engineer bridging modern web technologies like React and Tailwind with Unreal Engine game development. Alongside crafting digital and 3D experiences, I maintain a deep fascination with physics, particularly quantum mechanics and wave-particle duality.","title":"01 // ABOUT ME"},{"color":"#10b981","id":"experience","subtitle":"6 Years, 3 Companies","text":"With six years of professional experience spanning three companies, my career has involved transitioning between Bengaluru and Chennai. I build robust, scalable architectures leveraging Go, Firebase, and Linux environments alongside fluid frontend interfaces.","title":"02 // EXPERIENCE"},{"color":"#a855f7","id":"education","subtitle":"Continuous R\u0026D","text":"Lifelong autodidact continuously optimizing my technical workflow. I am currently focused on integrating advanced AI-assisted development tools like GitHub Copilot to automate complex software testing and achieve high code coverage.","title":"03 // EDUCATION"}]);

  return (
    <div className="rudra-module-wrapper">
      <RudraLayoutBox id="el_1783116382087_hktrke1" className="flex min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 pb-20 w-full flex-col gap-6">
      <RudraLayoutBox id="el_1783117555351_vqxm7ws" className="flex max-w-6xl px-4 mx-auto w-full flex-col md:flex-row justify-between items-start md:items-end gap-2">
      <RudraLayoutBox id="el_1783117704735_wru5yrv" className="flex flex-1 flex-col">
      <RudraMediaOptimizedImage id="el_1783117892371_bqn6tux" height={getResponsiveProp({"sm":150})} radius={getResponsiveProp({"sm":"full"})} aspectRatio="square" alt={getResponsiveProp({"sm":"Profile Pic"})} src={getResponsiveProp({"sm":"https://raw.githubusercontent.com/sivasankar-selvasundar/rudra-public/master/uploads/image.png"})} width={getResponsiveProp({"sm":150})} />
      <RudraCoreTypography id="el_1783118024559_oain35d" className="text-slate-900 tracking-tight leading-none mb-3 text-5xl md:text-6xl font-extrabold" as="h2" />
      <RudraAnimTypewriterText id="el_1783118365991_ifo3jxo" className="max-w-xl mb-6 text-lg md:text-xl font-medium" loopDelay={getResponsiveProp({"sm":10000000})} hideCursorOnComplete="true" loop={getResponsiveProp({"sm":"false"})} delay={getResponsiveProp({"sm":0})} showCursor="true" customColor={getResponsiveProp({"sm":"#0078ed"})} as="h2" />
      <RudraWidgetsRepeater id="el_1783122541120_f986kyx" className="flex gap-4 text-sm text-slate-500 font-medium flex-row flex-wrap items-center md:gap-2" columns={getResponsiveProp({"lg":3,"sm":0})} gap="sm" layout={getResponsiveProp({"lg":"flex","sm":"flex"})}>
{(_payload) => { const item = _payload?.item ?? _payload; const index = _payload?.index ?? _payload?.i ?? 0; return (<>
      <RudraLayoutBox id="el_1783122592136_aq1kex8" className="text-sm text-slate-500 font-medium">
      <RudraCoreLink id="el_1783122688079_k0fh8s3" leftIcon={false} rightIcon={false}>
      <div id="el_1783122598744_x2wce06" color="#111827" strokeWidth={1.2} size={20} />
      <RudraCoreTypography id="el_1783122719647_pyybzh6" className="text-sm text-slate-500 font-medium" as="h2" />
      </RudraCoreLink>
      </RudraLayoutBox>
</>); }}
      </RudraWidgetsRepeater>
      </RudraLayoutBox>
      <RudraLayoutBox id="el_1783117701363_ocxzll6">
      <RudraLayoutBox id="el_1783123659603_5wvhewk" className="flex bg-white border border-slate-200 rounded-3xl p-6 shadow-sm gap-5 shrink-0 hover:shadow-md transition-shadow items-center">
      <RudraAnimTextScramble id="el_1783123741703_5dkfvtb" className="font-black text-blue-600 text-5xl font-extrabold" as="h2" trigger="onMount" />
      <RudraLayoutBox id="el_1783123833648_v21toav" className="flex flex-col">
      <RudraCoreTypography id="el_1783123877120_h7spqiy" className="text-slate-800 uppercase tracking-widest text-sm font-bold" as="h2" content={getResponsiveProp({"sm":"YEARS"})} />
      <RudraCoreTypography id="el_1783123879912_497quve" className="text-slate-500 text-sm font-medium" content={getResponsiveProp({"sm":"Experience"})} as="h2" />
      </RudraLayoutBox>
      </RudraLayoutBox>
      </RudraLayoutBox>
      </RudraLayoutBox>
      <RudraAnimMarquee id="el_1783124249993_7ltc9uh" className="overflow-hidden border-y border-slate-200 py-5 bg-white mb-8 shadow-sm" pauseAnimation={false} speed={getResponsiveProp({"lg":6,"sm":3})} direction="left" pauseOnHover="true">
      <RudraWidgetsRepeater id="el_1783296242762_o8s63fo" className="gap-2 lg:gap-0" layout={getResponsiveProp({"lg":"flex","sm":"flex"})}>
{(_payload) => { const item = _payload?.item ?? _payload; const index = _payload?.index ?? _payload?.i ?? 0; return (<>
      <RudraLayoutBox id="el_1783296267155_t2j26td" className="flex md:text-sm font-semibold tracking-widest text-slate-400 mx-4  lg:text-sm font-semibold tracking-widest text-slate-400 mx-4 uppercase items-center gap-2">
      <div id="el_1783296303075_i48zyfb" name="CircleStar" size={20} color="#111827" strokeWidth={1.2} />
      <RudraCoreTypography id="el_1783296325949_zncv0sv" as="h2" />
      </RudraLayoutBox>
</>); }}
      </RudraWidgetsRepeater>
      </RudraAnimMarquee>
      <RudraLayoutBox id="el_1783299478908_st4uxgv" className="max-w-6xl mx-auto md:max-w-6xl mx-auto w-full">
      <RudraWidgetsDataTabs id="el_1783296958587_kor6gzk" className="max-w-6xl" templateContent={(_payload) => { const item = _payload?.item ?? _payload; const index = _payload?.index ?? _payload?.i ?? 0; return (<>\n      <RudraWidgetsRepeater id="el_1783300722290_18dhtg0" className="flex flex-col md:flex-row gap-2 lg:gap-8" layout={getResponsiveProp({"lg":"flex","md":"flex","sm":"flex"})}>
{(_payload) => { const item = _payload?.item ?? _payload; const index = _payload?.index ?? _payload?.i ?? 0; return (<>
      <RudraAnimFlipTile id="el_1783319052953_6orgl0c" className="h-full md: flex-1 lg:flex-1 md:h-64" backContent={<>\n      <RudraLayoutBox id="el_1783339928997_gw2xmmv" className="flex h-full p-4 flex-col">
      <RudraCoreTypography id="el_1783340211173_f694ofw" className="text-sm font-bold text-slate-900 mb-2" as="h2" />
      <RudraCoreTypography id="el_1783340216477_2uijyff" className="flex-1 text-xs text-slate-600 leading-relaxed mb-4 flex-1" as="h2" />
      <RudraWidgetsRepeater id="el_1783348883759_f0i46tv" className="flex gap-2 flex-row flex-wrap items-center" layout={getResponsiveProp({"sm":"flex"})}>
{(_payload) => { const item = _payload?.item ?? _payload; const index = _payload?.index ?? _payload?.i ?? 0; return (<>
      <RudraCoreTypography id="el_1783348937488_933qc8f" className="px-2 py-1 bg-white border border-slate-200 rounded   text-slate-600 text-xs font-semibold" as="h2" />
</>); }}
      </RudraWidgetsRepeater>
      </RudraLayoutBox>
</>} frontContent={<>\n      <RudraLayoutBox id="el_1783337050148_7chjh7v" className="flex p-4 flex-col">
      <RudraCoreTypography id="el_1783338048046_7g6nknp" className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4" as="h2" />
      <RudraCoreTypography id="el_1783338050412_2mw86jq" className="text-xl font-bold text-slate-900 mb-1" as="h2" />
      <RudraCoreTypography id="el_1783338052372_0u1gg50" className="text-sm text-slate-500" as="h2" />
      <RudraCoreTypography id="el_1783338058221_rd2bncg" className="text-xs text-slate-600 leading-relaxed mb-4 flex-1 lg:text-md lg:text-base" as="h2" />
      </RudraLayoutBox>
</>} hasBackContent={getResponsiveProp({"lg":true,"sm":{"dataPath":"item.moreContent","type":"binding"}})} direction="horizontal" />
</>); }}
      </RudraWidgetsRepeater>
</>); }} variant="top" />
      </RudraLayoutBox>
      </RudraLayoutBox>
      <RudraLayoutBox id="el_1783343580648_whnyakp" className="flex bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 flex-col">
      <RudraLayoutBox id="el_1783343648304_oa6zsul" className="flex p-6 bg-slate-50 gap-4 border-b border-slate-200 flex-row justify-between items-center">
      <RudraLayoutBox id="el_1783343973473_q75y88h" className="flex flex-col">
      <RudraCoreTypography id="el_1783343980986_e0mok9g" className="text-slate-900 flex items-center gap-3 text-2xl font-extrabold" as="h2" content={getResponsiveProp({"sm":"🎮 Bored of reading?"})} />
      <RudraCoreTypography id="el_1783343985129_6wlfb2z" className="text-sm text-slate-500 mt-1 font-medium" as="h2" content={getResponsiveProp({"sm":"Play this mini-game to unlock fun facts about me."})} />
      </RudraLayoutBox>
      </RudraLayoutBox>
      <RudraLayoutBox id="el_1783343630200_wklm9b7" className="lg:h-screen">
      <RudraThreeProfileRPG id="el_1783344204113_cxj02nt" />
      </RudraLayoutBox>
      </RudraLayoutBox>
    </div>
  );
}
