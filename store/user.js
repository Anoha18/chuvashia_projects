export const state = () => ({
  token: null,
  user: null
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  }
};

export const actions = {

};

export const getters = {
  isToken: s => Boolean(s.token),
  token: s => s.token,
  user: s => s.user
};
