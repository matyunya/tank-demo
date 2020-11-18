
export { default as slider } from "~ellx-hub/lib/components/Slider";
export { default as interval } from "~ellx-hub/lib/components/Interval";
export { default as button } from "~ellx-hub/lib/components/Button";
export { default as increment } from "~matyunya/increment";
export { plot } from "~ellx-hub/plot";
export {
  store,
  SET_POINT
} from "/store.js";

import curry from "~matyunya/curry";
import Input from "~ellx-hub/lib/components/Input";
import ellxify from "~ellx-hub/lib/utils/svelte";
import Tank from "/Tank.svelte";

export const input = props => Input({ ...props, type: "number", min: 0 });

export const tank = ellxify(Tank);

export const clamp = (min, max, val) => Math.min(Math.max(val, min), max);

export const pump = curry((kp, taup, m, t0, f0) => (kp * m - f0) / taup);

export const euler = curry((dt, f, t0, x0) => x0 + dt * curry(f)(t0, x0));

export const tankLevel = curry((area, fi, fo) => (fi - fo) / area);

export const mypump = pump(0.2, 5);

export const last = (points, i = 1) => points && points.length >= i ? points[points.length - i][1] : 2.5;
