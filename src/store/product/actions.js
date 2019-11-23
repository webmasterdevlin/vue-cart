import * as types from "./types";

export function pickOrder({ commit }, payload) {
  commit(types.SET_LICENSE, payload);
}
