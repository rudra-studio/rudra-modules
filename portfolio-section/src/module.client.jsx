import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

import { OptimizedImage } from '@rudra-studio/rudra-media';
import { Typography, Link } from '@rudra-studio/rudra-core';
import { Marquee, FlipTile, TypewriterText, TextScramble } from '@rudra-studio/rudra-anim';
import { Repeater, DataTabs } from '@rudra-studio/rudra-widgets';
import { ProfileRPG } from '@rudra-studio/rudra-three';
import { Repeater, Box } from '@rudra-studio/rudra-layout';

export default function CompiledModule(props) {
  const [profileImage, set_profileImage] = useState("https://raw.githubusercontent.com/sivasankar-selvasundar/rudra-public/master/uploads/image.png");
  const [name, set_name] = useState("Sivasankar S");
  const [role, set_role] = useState("Systems Architect \u0026 Full-Stack Developer creating scalable digital ecosystems.");
  const [gameZones, set_gameZones] = useState([{"color":"#38bdf8","id":"about","subtitle":"VoxelArchitect","text":"Full-StackEngineerobsessedwiththebridgebetweenhigh-performancewebappsandreal-time3Dgraphics.","title":"01//ABOUTME"},{"color":"#10b981","id":"experience","subtitle":"6+YearsShipped","text":"SeniorScalableSystems.Ibuilddevelopertoolsthatfeelliketoys,anduserinterfacesthatfeelikevideogames.","title":"02//EXPERIENCE"},{"color":"#a855f7","id":"education","subtitle":"ContinuousR\u0026D","text":"Lifelongautodidact.Currentlydeep-divingintoWebGPUcomputationalshadersandAI-assistedproceduralgeneration.","title":"03//EDUCATION"}]);
  const [totalExperience, set_totalExperience] = useState("06");
  const [heroLinks, set_heroLinks] = useState([{"href":"#","icon":"LucideMapPin","label":"Chennai, IN"},{"href":"mailto:sivasankar.eee2020@gmail.com","icon":"LucideMail","label":"sivasankar.eee2020@gmail.com"},{"href":"https://github.com/sivasankar-selvasundar","icon":"LucideExternalLink","label":"github.com/sivasankar-selvasundar"}]);
  const [skills, set_skills] = useState([{"skill":"Java"},{"skill":"Spring Boot"},{"skill":"Spring MVC"},{"skill":"Spring Security"},{"skill":"REST APIs"},{"skill":"Microservices"},{"skill":"JavaScript"},{"skill":"TypeScript"},{"skill":"React"},{"skill":"Next.js"},{"skill":"Node.js"},{"skill":"NestJS"},{"skill":"Express.js"},{"skill":"HTML5"},{"skill":"CSS3"},{"skill":"Tailwind CSS"},{"skill":"Responsive Design"},{"skill":"Redux"},{"skill":"React Hooks"},{"skill":"React Context API"},{"skill":"Component Design"},{"skill":"Design Systems"},{"skill":"Material UI"},{"skill":"Ant Design"},{"skill":"JSON Schema"},{"skill":"Form Builder"},{"skill":"Drag and Drop UI"},{"skill":"Low-Code Platforms"},{"skill":"No-Code Platforms"},{"skill":"Python"},{"skill":"Go"},{"skill":"AWS"},{"skill":"AWS Lambda"},{"skill":"API Gateway"},{"skill":"Amazon SQS"},{"skill":"Amazon SNS"},{"skill":"Amazon Kinesis"},{"skill":"AWS IoT Core"},{"skill":"Serverless Framework"},{"skill":"LocalStack"},{"skill":"Docker"},{"skill":"MongoDB"},{"skill":"MySQL"},{"skill":"PostgreSQL"},{"skill":"Firebase"},{"skill":"Authentication"},{"skill":"JWT"},{"skill":"OAuth"},{"skill":"Git"},{"skill":"GitHub"},{"skill":"CI/CD"},{"skill":"Unit Testing"},{"skill":"JUnit"},{"skill":"Jest"},{"skill":"Testing Library"},{"skill":"Three.js"},{"skill":"GLTFLoader"},{"skill":"3D Web Development"},{"skill":"WebSockets"},{"skill":"Event-Driven Architecture"},{"skill":"System Design"},{"skill":"Software Architecture"},{"skill":"API Design"},{"skill":"Database Design"},{"skill":"Performance Optimization"},{"skill":"Code Refactoring"},{"skill":"Code Reviews"},{"skill":"Agile"},{"skill":"Scrum"},{"skill":"Technical Documentation"},{"skill":"AI Integration"},{"skill":"Prompt Engineering"},{"skill":"Startup Product Development"},{"skill":"SaaS Development"},{"skill":"MVP Development"},{"skill":"Frontend Architecture"},{"skill":"Backend Development"},{"skill":"Full Stack Development"}]);
  const [tabsSection, set_tabsSection] = useState([{"data":[{"content":"Full Stack Software Engineer with 6+ years of experience building scalable, cloud-native applications across frontend, backend, and AWS cloud technologies. I have hands-on experience designing distributed systems, developing enterprise applications, and delivering high-quality software using Java, Spring Boot, React, Node.js, TypeScript, GraphQL, PostgreSQL, and modern engineering practices.\n\nPassionate about software architecture, developer experience, and continuous learning, I enjoy solving complex engineering challenges and building products that create real-world impact. I thrive in collaborative environments, take ownership of my work, and am always eager to explore emerging technologies, particularly in AI-assisted software development and cloud-native platforms.","indicator":false,"moreContent":false,"subTitle":false,"title":false}],"id":"about-me","tabName":"About Me"},{"data":[{"content":false,"indicator":"2016 - 2020","moreContent":{"description":"Graduated with a CGPA of 8.78 and secured 27th Rank at the university level.","labels":[{"label":"CGPA 8.78"},{"label":"University Rank 27"}],"title":"Achievements"},"subTitle":"Electrical \u0026 Electronics Engineering • Anna University","title":"Bachelor of Engineering"},{"content":false,"indicator":"2014 - 2016","moreContent":{"description":"Completed Higher Secondary education with 88.75% in the Mathematics-Biology stream.","labels":[{"label":"88.75%"},{"label":"Maths"},{"label":"Biology"}],"title":"Academic"},"subTitle":"I.C.I Govt (B) Higher Secondary School, Tenkasi","title":"Higher Secondary Education"},{"content":false,"indicator":"2013 - 2014","moreContent":{"description":"Completed Secondary School education with 97% marks.","labels":[{"label":"97%"}],"title":"Academic"},"subTitle":"SHSS","title":"Secondary School Leaving Certificate (SSLC)"}],"id":"education","tabName":"Education"},{"data":[{"content":false,"indicator":"Jun 2025 - Present","moreContent":{"description":"Developed and enhanced customer-facing web applications, led legacy frontend modernization, improved Largest Contentful Paint (LCP) by approximately 40%, leveraged AI-assisted development tools, and delivered scalable production features in Agile teams.","labels":[{"label":"React"},{"label":"Performance Optimization"},{"label":"Frontend Architecture"},{"label":"AI-Assisted Development"}],"title":"Key Contributions"},"subTitle":"Synechron (Client: American Express)","title":"Senior Associate"},{"content":false,"indicator":"Aug 2022 - May 2025","moreContent":{"description":"Designed scalable backend services, built a configurable rule engine, optimized GraphQL APIs by reducing response time by approximately 30%, implemented AWS serverless event-driven architecture, improved system reliability, and mentored junior engineers.","labels":[{"label":"Node.js"},{"label":"AWS"},{"label":"GraphQL"},{"label":"Event-Driven Architecture"}],"title":"Key Contributions"},"subTitle":"Wipro Technologies (Client: HP)","title":"Software Engineer"},{"content":false,"indicator":"Aug 2020 - Aug 2022","moreContent":{"description":"Contributed to backend development using Java and Spring Boot, supported enterprise migration and compliance initiatives, optimized SQL data access patterns, and built strong foundations in enterprise application architecture and backend system design.","labels":[{"label":"Java"},{"label":"Spring Boot"},{"label":"SQL"},{"label":"Enterprise Applications"}],"title":"Key Contributions"},"subTitle":"HCL Technologies (Client: USAA)","title":"Software Engineer"}],"id":"experience","tabName":"Experience"}]);
  const [gameSections, set_gameSections] = useState([{"color":"#38bdf8","id":"about","subtitle":"Full-Stack \u0026 3D Developer","text":"Full-Stack Engineer bridging modern web technologies like React and Tailwind with Unreal Engine game development. Alongside crafting digital and 3D experiences, I maintain a deep fascination with physics, particularly quantum mechanics and wave-particle duality.","title":"01 // ABOUT ME"},{"color":"#10b981","id":"experience","subtitle":"6 Years, 3 Companies","text":"With six years of professional experience spanning three companies, my career has involved transitioning between Bengaluru and Chennai. I build robust, scalable architectures leveraging Go, Firebase, and Linux environments alongside fluid frontend interfaces.","title":"02 // EXPERIENCE"},{"color":"#a855f7","id":"education","subtitle":"Continuous R\u0026D","text":"Lifelong autodidact continuously optimizing my technical workflow. I am currently focused on integrating advanced AI-assisted development tools like GitHub Copilot to automate complex software testing and achieve high code coverage.","title":"03 // EDUCATION"}]);

  return (
    <div className="rudra-module-wrapper">
      <Box id="el_1783116382087_hktrke1" Gap={{"lg":"6","md":"6","sm":"6"}} Direction={{"lg":"col","sm":"col"}} className={{"sm":"min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 pb-20 w-full"}} customAttributes={[]}>
      <Box id="el_1783117555351_vqxm7ws" Gap={{"lg":"2","md":"2","sm":"2"}} Direction={{"lg":"row","md":"row","sm":"col"}} className={{"sm":"max-w-6xl px-4 mx-auto w-full"}} customAttributes={[]} Align (Cross Axis)={{"lg":"end","md":"end","sm":"start"}} Justify (Main Axis)={{"sm":"between"}}>
      <Box id="el_1783117704735_wru5yrv" Direction={{"sm":"col"}} className={{"sm":"flex-1"}} customAttributes={[]}>
      <OptimizedImage id="el_1783117892371_bqn6tux" alt={{"sm":"Profile Pic"}} src={{"sm":"https://raw.githubusercontent.com/sivasankar-selvasundar/rudra-public/master/uploads/image.png"}} width={{"sm":150}} height={{"sm":150}} radius={{"sm":"full"}} aspectRatio="square">
      </OptimizedImage>
      <Typography id="el_1783118024559_oain35d" className={{"sm":"text-slate-900 tracking-tight leading-none mb-3"}} as="h2" Size={{"lg":"6xl","md":"6xl","sm":"5xl"}} Weight={{"sm":"extrabold"}}>
      </Typography>
      <TypewriterText id="el_1783118365991_ifo3jxo" customColor={{"sm":"#0078ed"}} Size={{"lg":"xl","md":"xl","sm":"lg"}} Weight={{"sm":"medium"}} customAttributes={[]} hideCursorOnComplete="true" as="h2" loop={{"sm":"false"}} delay={{"sm":0}} className={{"sm":"max-w-xl mb-6"}} loopDelay={{"sm":10000000}} showCursor="true">
      </TypewriterText>
      <Repeater id="el_1783122541120_f986kyx" layout={{"lg":"flex","sm":"flex"}} Flex Direction={{"lg":"row","md":"row","sm":"row"}} gap="sm" columns={{"lg":3,"sm":0}} className={{"sm":"gap-4 text-sm text-slate-500 font-medium"}} Wrap Content={{"lg":"wrap","md":"wrap","sm":"wrap"}} Align (Cross Axis)={{"sm":"center"}} Gap={{"lg":"2","md":"2"}}>
      <Box id="el_1783122592136_aq1kex8" className={{"sm":"text-sm text-slate-500 font-medium"}} customAttributes={[]}>
      <Link id="el_1783122688079_k0fh8s3" customAttributes={[]} leftIcon={false} className={[]} rightIcon={false}>
      <div id="el_1783122598744_x2wce06" size={20} color="#111827" strokeWidth={1.2}>
      </div>
      <Typography id="el_1783122719647_pyybzh6" className={{"sm":"text-sm text-slate-500 font-medium"}} as="h2">
      </Typography>
      </Link>
      </Box>
      </Repeater>
      </Box>
      <Box id="el_1783117701363_ocxzll6" className={[]} customAttributes={[]}>
      <Box id="el_1783123659603_5wvhewk" customAttributes={[]} Align (Cross Axis)={{"sm":"center"}} className={{"sm":"bg-white border border-slate-200 rounded-3xl p-6 shadow-sm gap-5 shrink-0 hover:shadow-md transition-shadow"}}>
      <TextScramble id="el_1783123741703_5dkfvtb" Weight={{"sm":"extrabold"}} trigger="onMount" className={{"sm":"font-black text-blue-600"}} customAttributes={[]} as="h2" Size={{"sm":"5xl"}}>
      </TextScramble>
      <Box id="el_1783123833648_v21toav" Direction={{"sm":"col"}} className={[]} customAttributes={[]}>
      <Typography id="el_1783123877120_h7spqiy" className={{"sm":"text-slate-800 uppercase tracking-widest"}} as="h2" Size={{"sm":"sm"}} Weight={{"sm":"bold"}} content={{"sm":"YEARS"}}>
      </Typography>
      <Typography id="el_1783123879912_497quve" as="h2" Size={{"sm":"sm"}} Weight={{"sm":"medium"}} content={{"sm":"Experience"}} className={{"sm":"text-slate-500"}}>
      </Typography>
      </Box>
      </Box>
      </Box>
      </Box>
      <Marquee id="el_1783124249993_7ltc9uh" pauseAnimation={false} trackClassName={[]} customAttributes={[]} className={{"sm":"overflow-hidden border-y border-slate-200 py-5 bg-white mb-8 shadow-sm"}} speed={{"lg":6,"sm":3}} direction="left" pauseOnHover="true">
      <Repeater id="el_1783296242762_o8s63fo" Gap={{"lg":"0","sm":"2"}} layout={{"lg":"flex","sm":"flex"}} className={[]}>
      <Box id="el_1783296267155_t2j26td" className={{"lg":"text-sm font-semibold tracking-widest text-slate-400 mx-4 uppercase","md":"text-sm font-semibold tracking-widest text-slate-400 mx-4 "}} customAttributes={[]} Align (Cross Axis)={{"lg":"center","sm":"center"}} Gap={{"lg":"2","sm":"2"}}>
      <div id="el_1783296303075_i48zyfb" name="CircleStar" size={20} color="#111827" strokeWidth={1.2}>
      </div>
      <Typography id="el_1783296325949_zncv0sv" as="h2" className={[]}>
      </Typography>
      </Box>
      </Repeater>
      </Marquee>
      <Box id="el_1783299478908_st4uxgv" className={{"lg":"max-w-6xl mx-auto w-full","md":"max-w-6xl mx-auto w-full","sm":"max-w-6xl mx-auto"}} customAttributes={[]}>
      <DataTabs id="el_1783296958587_kor6gzk" variant="top" className={{"lg":"max-w-6xl","sm":"max-w-6xl"}}>
      <Repeater id="el_1783300722290_18dhtg0" Gap={{"lg":"8","md":"2","sm":"2"}} layout={{"lg":"flex","md":"flex","sm":"flex"}} Flex Direction={{"lg":"row","md":"row","sm":"col"}}>
      <FlipTile id="el_1783319052953_6orgl0c" backContent={null} hasBackContent={{"lg":true,"sm":{"dataPath":"item.moreContent","type":"binding"}}} customAttributes={[]} Height={{"lg":"64","md":"64"}} className={{"lg":"flex-1","md":" flex-1","sm":"h-full"}} direction="horizontal">
      <Box id="el_1783337050148_7chjh7v" Direction={{"lg":"col","md":"col","sm":"col"}} className={{"lg":"p-4","md":"p-4","sm":"p-4"}} customAttributes={[]}>
      <Typography id="el_1783338048046_7g6nknp" as="h2" className={{"lg":"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4","md":"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4","sm":"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4"}}>
      </Typography>
      <Typography id="el_1783338050412_2mw86jq" className={{"lg":"text-xl font-bold text-slate-900 mb-1","md":"text-xl font-bold text-slate-900 mb-1","sm":"text-xl font-bold text-slate-900 mb-1"}} as="h2">
      </Typography>
      <Typography id="el_1783338052372_0u1gg50" as="h2" className={{"lg":"text-sm text-slate-500","md":"text-sm text-slate-500","sm":"text-sm text-slate-500"}}>
      </Typography>
      <Typography id="el_1783338058221_rd2bncg" Size={{"lg":"base"}} className={{"lg":"text-md","sm":"text-xs text-slate-600 leading-relaxed mb-4 flex-1"}} as="h2">
      </Typography>
      </Box>
      <Box id="el_1783339928997_gw2xmmv" className={{"sm":"h-full p-4"}} customAttributes={[]} Direction={{"sm":"col"}}>
      <Typography id="el_1783340211173_f694ofw" as="h2" className={{"sm":"text-sm font-bold text-slate-900 mb-2"}}>
      </Typography>
      <Typography id="el_1783340216477_2uijyff" as="h2" className={{"sm":"flex-1 text-xs text-slate-600 leading-relaxed mb-4 flex-1"}}>
      </Typography>
      <Repeater id="el_1783340274302_kjty8jt" className={{"sm":"flex flex-row gap-4 flex-wrap"}}>
      <Typography id="el_1783340290021_sudjtlh" className={{"sm":"px-2 py-1 bg-white border border-slate-200 rounded  font-semibold text-slate-600"}} as="h2" Size={{"sm":"xs"}}>
      </Typography>
      </Repeater>
      </Box>
      </FlipTile>
      </Repeater>
      </DataTabs>
      </Box>
      </Box>
      <Box id="el_1783343580648_whnyakp" Direction={{"sm":"col"}} className={{"sm":"bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200"}} customAttributes={[]}>
      <Box id="el_1783343648304_oa6zsul" Direction={{"sm":"row"}} className={{"sm":"p-6 bg-slate-50 gap-4 border-b border-slate-200"}} customAttributes={[]} Align (Cross Axis)={{"sm":"center"}} Justify (Main Axis)={{"sm":"between"}}>
      <Box id="el_1783343973473_q75y88h" Direction={{"sm":"col"}} className={[]} customAttributes={[]}>
      <Typography id="el_1783343980986_e0mok9g" className={{"sm":"text-slate-900 flex items-center gap-3"}} as="h2" Size={{"sm":"2xl"}} Weight={{"sm":"extrabold"}} content={{"sm":"🎮 Bored of reading?"}}>
      </Typography>
      <Typography id="el_1783343985129_6wlfb2z" content={{"sm":"Play this mini-game to unlock fun facts about me."}} className={{"sm":"text-sm text-slate-500 mt-1 font-medium"}} as="h2">
      </Typography>
      </Box>
      </Box>
      <Box id="el_1783343630200_wklm9b7" customAttributes={[]} className={{"lg":"h-screen"}}>
      <ProfileRPG id="el_1783344204113_cxj02nt" customAttributes={[]}>
      </ProfileRPG>
      </Box>
      </Box>
    </div>
  );
}
