<template>
  <ul class="nav">
    <li class="nav__item">
      <nuxt-link to="/" class="nav__item-link">
        Главная
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="/projects" class="nav__item-link">
        Проекты
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="/news" class="nav__item-link">
        Новости
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="/calendar" class="nav__item-link">
        Календарь
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="/map" class="nav__item-link">
        Карта
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {

};
</script>

<style scoped>
  .nav {
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .nav__item:not(:last-child) {
    margin-right: 2.5rem;
  }
  .nav__item-link {
    font-size: .9375rem;
    color: #fff;
    position: relative;
    text-decoration: none;
  }
  .nav__item-link.nuxt-link-exact-active {
    color: #FFB800;
  }
  .nav__item-link.nuxt-link-exact-active::after {
    background: #FFB800;
  }
  .nav__item-link::after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(100% + 1px);
    width: 100%;
    height: 1px;
    background: #fff;
    transform: scale(0);
    transition: .3s;
  }
  .nav__item-link:hover::after {
    transform: scale(1);
  }
</style>
