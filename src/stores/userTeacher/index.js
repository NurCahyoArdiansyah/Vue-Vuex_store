import Teacher from "../../mock/teacher.json";

const state = {
  teacher: [],
};
const getters = {
  teacher(state) {
    return state.teacher;
  },
};
const mutations = {
  getTeacherData(state) {
    state.teacher = Teacher;
  },
};
const actions = {
  getTeacher({ commit }) {
    commit("getTeacherData");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
