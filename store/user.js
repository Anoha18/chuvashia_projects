import Cookie from 'cookie';
import Cookies from 'js-cookie';

export const state = () => ({
  user: null
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

export const actions = {
  async auth({ dispatch, commit }, { login, password }) {
    const data = {
      url: '/api/admin/auth',
      data: {
        login,
        password
      }
    };

    const result = await dispatch('req', data, { root: true });

    if (!result) {
      return false;
    }

    commit('SET_USER', result);

    return true;
  },

  async logout({ dispatch, commit }) {
    const data = {
      url: '/api/admin/logout'
    };

    await dispatch('req', data, { root: true });

    commit('SET_USER', null);
  },

  autoLogin({ commit, dispatch }, session) {
    if (!session.user) {
      return;
    }

    commit('SET_USER', session.user);
  }
};

export const getters = {
  isAuth: s => Boolean(s.user),
  user: s => s.user
};
