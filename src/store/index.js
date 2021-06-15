import { createStore } from "vuex";

export default createStore({
  state: {
    char: null,
    quotes: null,
  },
  mutations: {
    async getchar(state) {
      const dataurl = await fetch("https://breakingbadapi.com/api/characters");
      const datar = await dataurl.json();
      state.char = datar;
    },
    async getquotes(state) {
      const dataurl = await fetch("https://breakingbadapi.com/api/quotes");
      const datar = await dataurl.json();
      state.quotes = datar;
    },
  },
  actions: {
    getchar(context) {
      context.commit("getchar");
    },
    getquotes(context) {
      context.commit("getquotes");
    },
  },

  modules: {},
});
