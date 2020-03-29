export const state = () => ({

});

export const actions = {
  // хук nuxt который срабатывает на сервере при инциализации приложения
  async nuxtServerInit({ commit, dispatch }, { req }) {
    await dispatch('user/autoLogin', req.session);
  },

  // метод запросов
  // получает данные и урл на который отправлять запрос
  async req(_, { url, data }) {
    try {
      const { error, result, logout } = await this.$axios.$post(url, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (error) {
        console.error(error);

        return null;
      }

      if (logout) {
        return this.app.router.replace('/admin/login');
      }

      return result;
    } catch (error) {
      return console.error(error);
    }
  }
};
