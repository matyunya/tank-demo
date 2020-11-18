import { bootstrap, writable, derived } from "~matyunya/store";

export const SET_POINT = 2.5;

const initialState = {
  running: false,
  dt: 0,
  data: new Map([[0, SET_POINT]]),
  tankLevel: SET_POINT,
};

const store = bootstrap(initialState);

store.$data = derived(store, ({ data }) => [...data]);

store.appendData = val => store.commit(() => ({ update }) => update('data', v => new Map([...v, val])));

export { store, writable };
