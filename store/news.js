export const state = () => ({
  newsList: []
});

export const mutations = {
  SET_NEWS_LIST(state, newsList) {
    state.newsList = newsList;
  }
};

export const actions = {
  async getNews({ commit, dispatch }, { count }) {
    const data = {
      url: '/api/getNews',
      data: {
        count
      }
    };

    const result = await dispatch('req', data, { root: true });

    commit('SET_NEWS_LIST', result);
  }
};

export const getters = {
  newsList: s => s.newsList
};
