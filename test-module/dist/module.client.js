import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { useState as s, useCallback as o } from "react";
import { SwapPlayground as a } from "@rudra-studio/rudra-anim";
import { DinoRunner3D as t, FloatingShape as l, ModelViewer as c } from "@rudra-studio/rudra-three";
import { Badge as i } from "@rudra-studio/rudra-core";
function w(u) {
  const [d, m] = s({ age: 27, name: "sivasankar" });
  return o(async (n) => {
    console.log("Executing Client Function: newFunction_1");
  }, []), o(async (n) => {
    console.log("Executing Client Function: onLoadFunction");
  }, []), /* @__PURE__ */ r("div", { className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ e(a, { id: "el_1781059609991_gxgkcg9" }),
    /* @__PURE__ */ e(t, { id: "el_1781059615559_7pplb88" }),
    /* @__PURE__ */ e(l, { id: "el_1781059618614_iyzugcq", shape: "cube" }),
    /* @__PURE__ */ e(c, { id: "el_1781059671238_skzjr75", style: {}, environment: "city" }),
    /* @__PURE__ */ e(i, { id: "el_1781062001022_hg1wo3c", size: "sm", variant: "solid" }),
    /* @__PURE__ */ e(i, { id: "el_1781062038374_8btw0xs", size: "sm", variant: "solid" })
  ] });
}
export {
  w as default
};
