export const state = () => ({

});

export const actions = {
  // хук nuxt который срабатывает на сервере при инциализации приложения
  nuxtServerInit({ commit, dispatch }, { req }) {
    console.log(req.session);
  },

  // метод запросов
  // получает данные и урл на который отправлять запрос
  async req(_, { url, data }) {
    try {
      const { error, result } = await this.$axios.$post('/' + url, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (error) {
        console.error(error);

        return null;
      }

      return result;
    } catch (error) {
      return console.error(error);
    }
  }
};
