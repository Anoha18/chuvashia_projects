<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    callback: Function
  },
  computed: {
    user() {
      return this.$store.getters['user/user'];
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout', null, { root: true });

      this.$router.replace('/admin/login');
    }
  }
};
</script>

<template>
  <a-layout-header style="background: #fff; padding: 0 30px">
    <a-row type="flex" justify="space-between">
      <a-col :span="3">
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          class="trigger"
          @click="()=> $emit('callback')"
        />
      </a-col>
      <a-col :span="21">
        <a-row type="flex" justify="end">
          <a-col>
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <a-avatar :size="24" icon="user" />
                <span>{{ user.name }} {{ user.lastname || '' }}</span>
                <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <span>Профиль</span>
                </a-menu-item>
                <a-menu-item key="1">
                  <span style="color: red" @click="logout">Выход</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
