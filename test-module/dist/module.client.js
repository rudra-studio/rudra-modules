import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { useState as s, useCallback as o } from "react";
import { Badge as i } from "@simo-rudra/rudra-core";
import { Reveal as a } from "@simo-rudra/rudra-anim";
import { ModelViewer as t, DinoRunner3D as l } from "@simo-rudra/rudra-three";
import { User as d } from "lucide-react";
function z(c) {
  const [m, u] = s({ age: 27, name: "sivasankar" });
  return o(async (r) => {
    console.log("Executing Client Function: newFunction_1");
  }, []), o(async (r) => {
    console.log("Executing Client Function: onLoadFunction");
  }, []), /* @__PURE__ */ n("div", { className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ e(a, { id: "el_1780193504228_1541bx3", direction: "up", children: /* @__PURE__ */ e(i, { id: "el_1780172014940_owagtzv", variant: "solid", icon: /* @__PURE__ */ e(d, { size: 18, color: "#000000", strokeWidth: 1.5 }), size: "sm" }) }),
    /* @__PURE__ */ e(i, { id: "el_1780194703954_5pa99kv", variant: "solid", size: "sm" }),
    /* @__PURE__ */ e(i, { id: "el_1780194704450_aay3mbe", size: "sm", label: "Sivasankar", variant: "solid" }),
    /* @__PURE__ */ e(i, { id: "el_1780194704123_vpqzwc4", size: "sm", variant: "solid" }),
    /* @__PURE__ */ e(t, { id: "el_1780226984719_1catrsp", style: {}, environment: "city" }),
    /* @__PURE__ */ e(l, { id: "el_1780226993702_9txnirx" })
  ] });
}
export {
  z as default
};
