import React, { useState, useEffect, useCallback, useRef } from 'react';

import { Link as RudraCoreLink, Typography as RudraCoreTypography } from '@rudra-studio/rudra-core';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';

export default function CompiledModule(props) {
  const _scope = {};
  const wrapperRef = useRef(null);
  const [viewport, setViewport] = useState('lg');
  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        if (width < 768) setViewport('sm');
        else if (width < 1024) setViewport('md');
        else setViewport('lg');
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const getResponsiveProp = useCallback((val) => {
    if (typeof val !== 'object' || val === null) return val;
    if (viewport === 'sm') return val.sm !== undefined ? val.sm : (val.md !== undefined ? val.md : val.lg);
    if (viewport === 'md') return val.md !== undefined ? val.md : (val.sm !== undefined ? val.sm : val.lg);
    return val.lg !== undefined ? val.lg : (val.md !== undefined ? val.md : val.sm);
  }, [viewport]);


  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      <RudraCoreLink id="el_1783799676168_2692lkp" className={`${getResponsiveProp({sm: 'fixed z-[9999] bottom-4 left-4 sm:bottom-6 sm:left-6 group transition-transform duration-300 hover:-translate-y-1'}) || ''}`} href={getResponsiveProp({"sm":"https://www.rudraapp.in/"})}>      <RudraLayoutBox id="el_1783799792520_qwkx02h" className={`${getResponsiveProp({sm: 'relative flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-lg overflow-hidden'}) || ''}`}>      <RudraLayoutBox id="el_1783799849503_oyafi3f" className={`${getResponsiveProp({sm: 'absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]'}) || ''}`} />
      <RudraLayoutBox id="el_1783799872086_a57m4kr" className={`${getResponsiveProp({sm: 'relative flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-inner shrink-0'}) || ''}`} />
      <RudraLayoutBox id="el_1783799853477_7k5wgt6" className={`flex ${getResponsiveProp({sm: 'flex flex-col pr-1'}) || ''}`}>      <RudraCoreTypography id="el_1783800015674_xsvoscg" className={`${getResponsiveProp({sm: 'text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 leading-none mb-[2px]'}) || ''}`} as="h2" content={getResponsiveProp({"sm":"Built With"})} />
      <RudraCoreTypography id="el_1783800017315_bmj64g9" className={`${getResponsiveProp({sm: 'text-xs font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text leading-none tracking-tight'}) || ''} ${getResponsiveProp({sm: 'text-base'}) || ''}`} as="h2" content={getResponsiveProp({"sm":"RUDRA"})} />
</RudraLayoutBox>
</RudraLayoutBox>
      <RudraLayoutBox id="el_1783799739257_jjb8whz" className={`${getResponsiveProp({sm: 'absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300'}) || ''}`} />
</RudraCoreLink>
    </div>
  );
}
