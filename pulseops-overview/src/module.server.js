"use server";

// Auto-generated Secure Server Actions

export async function execute_loadStatus(inputs = {}) {
  let vars = {}; // Local state for this function execution
  let stepResults = {};
  let returnState = {}; // State to hydrate the React client

  const resolveValue = (value) => { if (Array.isArray(value)) return value.map(resolveValue); if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveValue(item)])); if (typeof value !== 'string') return value; const exact = value.match(/^\{\{\s*inputs\.([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}$/); if (exact) return inputs[exact[1]]; return value.replace(/\{\{\s*inputs\.([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g, (_, key) => String(inputs[key] ?? '')); };
  try {
  const headers_0 = Object.fromEntries((Array.isArray([]) ? [] : Object.entries([] || {}).map(([key,value]) => ({ key, value }))).filter((header) => header?.key).map((header) => [header.key, String(resolveValue(header.value) ?? '')]));
  const response_0 = await fetch(resolveValue("https://rudra-sql.onrender.com/api/v1/postgres/main/data/pulseops_snapshots/0f66fcad-18ad-4a1a-9047-127e4b8be77e"), { method: "GET", headers: headers_0, signal: AbortSignal.timeout(8000) });
  if (!response_0.ok) throw new Error('SSR API request failed (' + response_0.status + ')');
  stepResults["po_fetch"] = await response_0.json();

  returnState = resolveValue("{{ stepResults.po_fetch.data }}");

  const resultSchema = {"additionalProperties":true,"properties":{"components":{"type":"array"},"incidents":{"type":"array"},"latency_series":{"items":{"additionalProperties":true,"properties":{"label":{"type":"string"},"value":{"type":"number"}},"required":["label","value"],"type":"object"},"type":"array"},"metrics":{"additionalProperties":true,"properties":{"availability":{"type":"object"},"incidents":{"type":"object"},"latency":{"type":"object"},"requestRate":{"type":"object"}},"required":["availability","incidents","latency","requestRate"],"type":"object"},"page":{"type":"object"},"status":{"type":"object"}},"required":["status","incidents","components","metrics","latency_series"],"type":"object"};
  const actualType = returnState === null ? 'null' : Array.isArray(returnState) ? 'array' : typeof returnState;
  if (resultSchema.type && actualType !== resultSchema.type) throw new Error('Invalid module SSR result type');
  return returnState;
  } catch (error) {
    throw error;
  }
}
