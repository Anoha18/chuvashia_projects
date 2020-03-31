<template>
  <div class="nav">
    <svg v-if="screenWidth <= 768" class="nav__icon tablet_large-hide desktop-hide" @click="isListActive = !isListActive">
      <use xlink:href="@/assets/img/svg/sprite.svg#hamburger" />
    </svg>
    <ul v-if="screenWidth <= 768 && isListActive" class="nav__items">
      <li v-for="item in items" class="nav__item" @click="isListActive = false">
        <nuxt-link :to="item.link" class="nav__item-link">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        isListActive: true,
        items: [
          { title: 'Главная', link: '/' },
          { title: 'Проекты', link: '/projects' },
          { title: 'Новости', link: '/news' },
          { title: 'Календарь', link: '/calendar' },
          { title: 'Карта', link: '/map' },
        ],
        screenWidth: null,
      }
    },
    methods: {
      updateWidth() {
        if (process.browser) {
          this.screenWidth = window.innerWidth;
          if (this.screenWidth <= 768) this.isListActive = false;
        }
      },
    },
    created() {
      if (process.browser) {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
      }
    }
  }
</script>

<style scoped>
  .nav__icon {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
  .nav__items {
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
    font-weight: 400;
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

  @media (max-width: 768px) {
    .nav {
      position: relative;
    }
    .nav__icon {
      width: 20px;
      height: 20px;
      fill: #fff;
    }
    .nav__items {
      flex-direction: column;
      justify-content: space-between;
      z-index: 3;
      position: fixed;
      top: 4.2rem;
      left: 0;
      width: 100%;
      height: 50vh;
      max-height: 330px;
      background: #004A90;
      padding: 2rem 0;
    }
    .nav__item:not(:last-child) {
      margin-right: 0;
      margin-bottom: 0;
    }
    .nav__item-link {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
</style>
