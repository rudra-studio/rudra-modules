import { jsx as n } from "react/jsx-runtime";
import { useState as a, useCallback as o } from "react";
import { SwapPlayground as r } from "@rudra-studio/rudra-anim";
function g(s) {
  const [t, i] = a({ age: 27, name: "sivasankar" });
  return o(async (e) => {
    console.log("Executing Client Function: newFunction_1");
  }, []), o(async (e) => {
    console.log("Executing Client Function: onLoadFunction");
  }, []), /* @__PURE__ */ n("div", { className: "rudra-module-wrapper", children: /* @__PURE__ */ n(r, { id: "el_1781059609991_gxgkcg9" }) });
}
export {
  g as default
};
