import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useState as l, useCallback as c, useEffect as d } from "react";
import { Badge as n } from "@simo-rudra/rudra-core";
import { Reveal as m } from "@simo-rudra/rudra-anim";
import { ModelViewer as u, DinoRunner3D as _ } from "@simo-rudra/rudra-three";
import { User as p } from "lucide-react";
async function v(o = {}) {
  let r = {}, a = {};
  return r.name = "sivasankar", a.name = r.name, a;
}
function w(o) {
  const [r, a] = l({ age: 27, name: "sivasankar" });
  return c(async (t) => {
    console.log("Executing Client Function: newFunction_1");
  }, []), d(() => {
    async function t() {
      try {
        const i = await v();
        (i == null ? void 0 : i.user) !== void 0 && a(i.user);
      } catch (i) {
        console.error("Failed to execute backend onLoad logic:", i);
      }
    }
    t();
  }, []), /* @__PURE__ */ s("div", { className: "rudra-module-wrapper", children: [
    /* @__PURE__ */ e(m, { id: "el_1780193504228_1541bx3", direction: "up", children: /* @__PURE__ */ e(n, { id: "el_1780172014940_owagtzv", icon: /* @__PURE__ */ e(p, { strokeWidth: 1.5, size: 18, color: "#000000" }), size: "sm", variant: "solid" }) }),
    /* @__PURE__ */ e(n, { id: "el_1780194703954_5pa99kv", size: "sm", variant: "solid" }),
    /* @__PURE__ */ e(n, { id: "el_1780194704450_aay3mbe", size: "sm", label: "Sivasankar", variant: "solid" }),
    /* @__PURE__ */ e(n, { id: "el_1780194704123_vpqzwc4", size: "sm", variant: "solid" }),
    /* @__PURE__ */ e(u, { id: "el_1780226984719_1catrsp", style: {}, environment: "city", "modelUrl":"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Lantern/glTF-Binary/Lantern.glb" }),
    /* @__PURE__ */ e(_, { id: "el_1780226993702_9txnirx" })
  ] });
}
export {
  w as default
};
