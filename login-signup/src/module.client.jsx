import React, { useState, useEffect, useCallback, useRef } from 'react';
import './styles.css';

import { JSONForm as RudraFormJSONForm } from '@rudra-studio/rudra-form';
import { UniversalIcon } from './universal-icon.jsx';
import { Box as RudraLayoutBox } from '@rudra-studio/rudra-layout';
import { Typography as RudraCoreTypography, Button as RudraCoreButton } from '@rudra-studio/rudra-core';
import { Separator as RudraWidgetsSeparator } from '@rudra-studio/rudra-widgets';

export default function CompiledModule(props) {
  const _scope = {};

  const _externalActions = {
    ...(props.runtime?.functions || {}),
    ...(props.runtime?.actions || {}),
    ...(props.functions || {}),
    ...(props.actions || {}),
  };
  const _explicitTheme = props.$theme ?? props.theme ?? props.data?.$theme ?? props.runtime?.data?.$theme ?? props.runtime?.theme;
  const _getDocumentTheme = () => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.dataset.theme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  };
  const [$theme, set_$theme] = useState(() => _explicitTheme ?? _getDocumentTheme());

  useEffect(() => {
    if (_explicitTheme !== undefined && _explicitTheme !== null) set_$theme(_explicitTheme);
  }, [_explicitTheme]);

  useEffect(() => {
    if (_explicitTheme !== undefined && _explicitTheme !== null || typeof document === 'undefined') return;
    const root = document.documentElement;
    const syncTheme = (event) => set_$theme(event?.detail?.theme ?? _getDocumentTheme());
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    window.addEventListener('rudra:theme-change', syncTheme);
    syncTheme();
    return () => {
      observer.disconnect();
      window.removeEventListener('rudra:theme-change', syncTheme);
    };
  }, [_explicitTheme]);
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

  const [isLoading, set_isLoading] = useState(props.isLoading !== undefined ? props.isLoading : (props.data?.isLoading !== undefined ? props.data.isLoading : (props.runtime?.data?.isLoading !== undefined ? props.runtime.data.isLoading : (props.serverData?.isLoading !== undefined ? props.serverData.isLoading : (props.serverState?.isLoading !== undefined ? props.serverState.isLoading : false)))));
  const [signInForm, set_signInForm] = useState(props.signInForm !== undefined ? props.signInForm : (props.data?.signInForm !== undefined ? props.data.signInForm : (props.runtime?.data?.signInForm !== undefined ? props.runtime.data.signInForm : (props.serverData?.signInForm !== undefined ? props.serverData.signInForm : (props.serverState?.signInForm !== undefined ? props.serverState.signInForm : [{"fields":[{"id":"email","label":"Email Address","placeholder":"hello@rudra.com","required":true,"type":"email"},{"id":"password","label":"Password","placeholder":"Enter your password","required":true,"type":"password"}],"title":"Welcome Back"}])))));
  const [signUpForm, set_signUpForm] = useState(props.signUpForm !== undefined ? props.signUpForm : (props.data?.signUpForm !== undefined ? props.data.signUpForm : (props.runtime?.data?.signUpForm !== undefined ? props.runtime.data.signUpForm : (props.serverData?.signUpForm !== undefined ? props.serverData.signUpForm : (props.serverState?.signUpForm !== undefined ? props.serverState.signUpForm : [{"fields":[{"icon":"Mail","id":"email","label":"Email Address","placeholder":"you@example.com","required":true,"type":"email"},{"icon":"Lock","id":"password","label":"Password","placeholder":"Create a strong password","required":true,"type":"password"},{"icon":"Lock","id":"confirmPassword","label":"Confirm Password","placeholder":"Type your password again","required":true,"type":"password"}],"title":"Create Account"}])))));
  const [form, set_form] = useState(props.form !== undefined ? props.form : (props.data?.form !== undefined ? props.data.form : (props.runtime?.data?.form !== undefined ? props.runtime.data.form : (props.serverData?.form !== undefined ? props.serverData.form : (props.serverState?.form !== undefined ? props.serverState.form : "login")))));
  const [loading, set_loading] = useState(props.loading !== undefined ? props.loading : (props.data?.loading !== undefined ? props.data.loading : (props.runtime?.data?.loading !== undefined ? props.runtime.data.loading : (props.serverData?.loading !== undefined ? props.serverData.loading : (props.serverState?.loading !== undefined ? props.serverState.loading : {"github":false,"google":false,"signIn":false,"signUp":false})))));

  const _setState = useCallback((name, value) => {
    switch (name) {
      case "isLoading": set_isLoading(value); return value;
      case "signInForm": set_signInForm(value); return value;
      case "signUpForm": set_signUpForm(value); return value;
      case "form": set_form(value); return value;
      case "loading": set_loading(value); return value;
      default: return value;
    }
  }, []);

  const _setStatePath = useCallback((path, value) => {
    const [root, ...parts] = String(path || '').split('.');
    if (!root) return value;
    if (parts.length === 0) return _setState(root, value);
    const updateNested = (current) => {
      const next = Array.isArray(current) ? [...current] : { ...(current || {}) };
      let cursor = next;
      parts.forEach((part, index) => {
        if (index === parts.length - 1) cursor[part] = value;
        else {
          cursor[part] = Array.isArray(cursor[part]) ? [...cursor[part]] : { ...(cursor[part] || {}) };
          cursor = cursor[part];
        }
      });
      return next;
    };
    switch (root) {
      case "isLoading": set_isLoading(updateNested); return value;
      case "signInForm": set_signInForm(updateNested); return value;
      case "signUpForm": set_signUpForm(updateNested); return value;
      case "form": set_form(updateNested); return value;
      case "loading": set_loading(updateNested); return value;
      default: return value;
    }
  }, [_setState]);

  const _callLibrary = useCallback(async (esmUrl, functionName, args) => {
    const loaded = await import(/* @vite-ignore */ /* webpackIgnore: true */ esmUrl);
    const callable = loaded[functionName] || loaded.default;
    if (typeof callable !== 'function') throw new Error("Library function '" + functionName + "' was not exported by " + esmUrl);
    return callable(args);
  }, []);

  async function newFunction_1(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    await _callAction("RudraSystem.setTheme", { "themeName": "dark" }, []);
    return undefined;
  }

  async function changeForm(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    if (form === "login") {
      _setState("form", "signup");
      return undefined;
    } else {
      _setState("form", "login");
      return undefined;
    }
    return undefined;
  }

  async function login(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    if (form === "login") {
      await _callAction("RudraAuth.signIn", { "email": args.formData.email, "password": args.formData.password, "provider": "firebase" }, []);
      return undefined;
    } else {
      await _callAction("RudraAuth.signUp", { "email": args.formData.email, "password": args.formData.password, "provider": "firebase" }, []);
      return undefined;
    }
    return undefined;
  }

  async function validate(initialArgs = {}) {
    const args = initialArgs || {};
    const vars = {};
    let isPasswordMatched;
    if (form === "login") {
      return true;
    } else {
      vars["isPasswordMatched"] = await _callLibrary("https://cdn.jsdelivr.net/npm/@rudra-studio/rudra-core@1.0.67/utils/IsEqual.js", "IsEqual", { "source": args.inputValues.password, "target": args.inputValues.confirmPassword });
      isPasswordMatched = vars["isPasswordMatched"];
      if (isPasswordMatched) {
        return true;
      } else {
        return "Passwords not matching";
      }
    }
    return undefined;
  }

  const _localActions = {
    "newFunction_1": newFunction_1,
    "changeForm": changeForm,
    "login": login,
    "validate": validate,
  };
  const _localActionArguments = {
    "newFunction_1": ["event"],
    "changeForm": ["event"],
    "login": ["formData"],
    "validate": ["inputValues"],
  };
  const _callAction = (name, configuredArgs = {}, eventArgs = []) => {
    const localAction = _localActions[name];
    if (localAction) {
      if (Object.keys(configuredArgs).length > 0) return localAction(configuredArgs);
      const names = _localActionArguments[name] || [];
      return localAction(Object.fromEntries(names.map((argumentName, index) => [argumentName, eventArgs[index]])));
    }
    const externalAction = _externalActions?.[name];
    if (typeof externalAction === 'function') {
      return externalAction(Object.keys(configuredArgs).length > 0 ? configuredArgs : eventArgs[0]);
    }
    const [namespace, method] = String(name).split('.');
    const globalAction = typeof globalThis !== 'undefined' ? globalThis[namespace]?.[method] : undefined;
    if (typeof globalAction === 'function') return globalAction(...Object.values(configuredArgs));
    console.warn("Rudra action '" + name + "' is not available in this runtime.");
    return undefined;
  };


  return (
    <div ref={wrapperRef} className="rudra-module-wrapper">
      <RudraLayoutBox id="el_1784440852141_9p5ixo5" className={`${getResponsiveProp({sm: 'min-h-screen w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#050505] p-4 relative selection:bg-gray-200 dark:selection:bg-gray-800'}) || ''}`}>      <RudraLayoutBox id="el_1784469915002_zplnz8y" className={`flex ${getResponsiveProp({sm: 'w-full max-w-[400px] z-10 bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800/60 rounded-2xl shadow-2xl p-8 relative overflow-hidden'}) || ''} ${getResponsiveProp({sm: 'flex-col'}) || ''}`}>      <RudraLayoutBox id="el_1784469967247_ctu08ym" className={`flex ${getResponsiveProp({sm: 'flex flex-col items-center mb-6 w-full'}) || ''} ${getResponsiveProp({sm: 'flex-col'}) || ''}`}>      <RudraLayoutBox id="el_1784646228082_r208bzv" className={`${getResponsiveProp({sm: 'w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm'}) || ''}`}>      <UniversalIcon icon={"Command"} id="el_1784646302450_lcydbe3" color={(($theme === "dark") ? "black" : "white")} strokeWidth={1.2} size={20} />
</RudraLayoutBox>
      <RudraCoreTypography id="el_1784647076610_5ykfkc9" className={`${getResponsiveProp({sm: 'text-xl font-semibold text-gray-900 dark:text-white tracking-tight'}) || ''}`} as="h2" content={((form === "login") ? "Welcome Back" : "Create an Account")} />
      <RudraCoreTypography id="el_1784647187929_yb4jnky" className={`${getResponsiveProp({sm: 'text-sm text-gray-500 mt-1'}) || ''}`} as="h2" content={((form === "login") ? "Enter your credentials to continue" : "Start building your next application")} />
</RudraLayoutBox>
      <RudraLayoutBox id="el_1784647320002_5rofwo5" className={`grid flex ${getResponsiveProp({sm: 'grid grid-cols-2 gap-3 mb-6'}) || ''}`}>      <RudraCoreButton id="el_1784647347690_dv24ei4" className={`flex ${getResponsiveProp({sm: 'flex items-center justify-center gap-1 w-full py-2.5 px-2 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'}) || ''}`} leftIcon={<>      <UniversalIcon icon={getResponsiveProp({"sm":{"iconType":"url","url":"https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"}})} id="el_1784647380402_ugkvyow" size={20} color="#111827" strokeWidth={1.2} />
</>} onClick={(...eventArgs) => _callAction("RudraAuth.signIn", {"email": "", "password": "", "provider": "google"}, eventArgs)} rightIcon={false} additionalAttributes={[]}>      <RudraCoreTypography id="el_1784647392306_nkqxhoc" as="h2" content={getResponsiveProp({"sm":"Google"})} />
</RudraCoreButton>
      <RudraCoreButton id="el_1784647340113_83munsr" className={`flex ${getResponsiveProp({sm: 'flex items-center justify-center gap-2 w-full py-2.5 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'}) || ''}`} leftIcon={<>      <UniversalIcon icon={(($theme === "dark") ? "https://cdn.simpleicons.org/github/white" : "https://cdn.simpleicons.org/github")} id="el_1784647382825_ovg66eb" strokeWidth={1.2} size={20} color={getResponsiveProp({"lg":"#b94181","sm":"#111827"})} />
</>} rightIcon={false} additionalAttributes={[]} onClick={(...eventArgs) => _callAction("RudraAuth.signIn", {"email": "", "password": "", "provider": "github"}, eventArgs)}>      <RudraCoreTypography id="el_1784647394313_ucblp5p" as="h2" content={getResponsiveProp({"sm":"Github"})} />
</RudraCoreButton>
</RudraLayoutBox>
      <RudraWidgetsSeparator id="el_1784881718225_8dil8m7" text={getResponsiveProp({"lg":"Or continue with","sm":"or continue with"})} />
      <RudraFormJSONForm id="el_1784896105217_0ix4495" 
  classN={`${getResponsiveProp({sm: 'bg-transparent border-transparent'}) || ''}`} buttonSize={getResponsiveProp({"lg":"md","sm":"sm"})} submitLabel={((form === "login") ? "Login" : "Sign Up")} buttonRadius={getResponsiveProp({"sm":"lg"})} validate={(...eventArgs) => _callAction("validate", {}, eventArgs)} buttonVariant={getResponsiveProp({"sm":"solid"})} schema={((form === "login") ? signInForm : signUpForm)} onSubmit={(...eventArgs) => _callAction("login", {}, eventArgs)} />
      <RudraLayoutBox id="el_1784899743809_h3gnwzz" className={`flex ${getResponsiveProp({sm: 'mt-6 text-center text-sm text-gray-600 dark:text-gray-400 gap-y-4 gap-x-4 gap-1'}) || ''} ${getResponsiveProp({sm: 'flex-wrap'}) || ''} ${getResponsiveProp({sm: 'justify-center'}) || ''}`}>      <RudraCoreTypography id="el_1784899807185_qdgfchp" as={getResponsiveProp({"sm":"p"})} content={((form === "login") ? "Don't have an account?" : "Already have an account?")} />
      <RudraCoreButton id="el_1784900445842_35qrqg6" className={`${getResponsiveProp({sm: 'font-semibold text-black dark:text-white hover:underline underline-offset-4 disabled:opacity-50 transition-colors'}) || ''}`} onClick={(...eventArgs) => _callAction("changeForm", {}, eventArgs)} leftIcon={false} rightIcon={false} additionalAttributes={[]}>      <RudraCoreTypography id="el_1784900498465_8p13mqa" as={getResponsiveProp({"sm":"p"})} content={((form === "login") ? "Sign Up" : "Login")} />
</RudraCoreButton>
</RudraLayoutBox>
</RudraLayoutBox>
</RudraLayoutBox>
    </div>
  );
}
