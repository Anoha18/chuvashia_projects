<script>
import AppLogo from '~/components/Logo.vue';

export default {
  components: {
    AppLogo
  },
  layout: false,
  data() {
    return {
      login: '',
      password: '',
      process: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    async auth() {
      if (this.login === '') {
        return this.$message.error('Введите логин');
      }

      if (this.password === '') {
        return this.$message.error('Введите пароль');
      }

      this.process = true;
      const result = await this.$store.dispatch('user/auth', {
        login: this.login,
        password: this.password
      }, { root: true });

      if (!result) {
        this.process = false;
        return this.$message.error('Неверный логин или пароль');
      }

      this.process = false;
      this.$router.replace('/admin');
    }
  },
  head() {
    return {
      title: `Автризация в панели администратора | ${process.env.APP_NAME}`
    };
  }
};
</script>

<template>
  <a-row type="flex" justify="center" align="middle" style="height: 100vh; width: 100vw">
    <a-col>
      <div class="login-header">
        <app-logo class="login-header__logo" />
        <div class="login-header__label">
          Чувашская республика<br>
          Национальные проекты
        </div>
      </div>
      <a-form
        id="components-form-demo-normal-login"
        style="width: 300px"
        :form="form"
        class="login-form"
        @submit="auth"
      >
        <a-form-item :style="{marginBottom: '0'}">
          <a-input
            v-model="login"
            placeholder="Логин"
            @keypress.enter="auth"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :style="{marginBottom: '0'}">
          <a-input
            v-model="password"
            type="password"
            placeholder="Пароль"
            @keypress.enter="auth"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :style="{marginBottom: '0'}">
          <a class="login-form-forgot" href="#0">
            Восстановить пароль
          </a>
          <a-button :disabled="process" type="primary" html-type="submit" class="login-form-button" @click="auth">
            Войти
          </a-button>
          <nuxt-link to="/" type="default" tag="a-button" class="login-form-button">
            На главную
          </nuxt-link>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
  min-width: 300px;
  width: 300px !important;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
