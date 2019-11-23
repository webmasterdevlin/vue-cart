import * as types from "./types";

const mutations = {
  [types.SET_LICENSE](state, pickedLicense) {
    state.license = pickedLicense;
  }
};

export default mutations;
