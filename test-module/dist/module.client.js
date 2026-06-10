import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useState as r, useCallback as n } from "react";
import { DinoRunner3D as a, FloatingShape as s, ModelViewer as t } from "@simo-rudra/rudra-three";
import { SwapPlayground as l } from "@simo-rudra/rudra-anim";
function f(u) {
  const [c, p] = r({ age: 27, name: "sivasankar" });
  return n(async (o) => {
    console.log("Executing Client Function: newFunction_1");
  }, []), n(async (o) => {
    console.log("Executing Client Function: onLoadFunction");
  }, []), /* @__PURE__ */ i("div", { className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ e(l, { id: "el_1781059609991_gxgkcg9" }),
    /* @__PURE__ */ e(a, { id: "el_1781059615559_7pplb88" }),
    /* @__PURE__ */ e(s, { id: "el_1781059618614_iyzugcq", shape: "cube" }),
    /* @__PURE__ */ e(t, { id: "el_1781059671238_skzjr75", style: {}, environment: "city" })
  ] });
}
export {
  f as default
};
