<template>
  <nuxt-link :to="'/news/' + id" class="news-item">
    <div class="news-item__img-wrapper">
      <img :src="img" alt="Фото" class="news-item__img">
      <p class="news-item__direction">{{ directionTitle }}</p>
    </div>

    <div class="news-item__content">
      <div class="news-item__ttl-wrapper">
        <svg class="news-item__ttl-icon">
          <use :xlink:href="'@/assets/img/svg/sprite.svg#' + direction"/>
        </svg>
        <p class="news-item__ttl">{{ title }}</p>
      </div>
      <p class="news-item__preview">{{ previewText }}</p>
      <div class="news-item__ftr">
        <div class="news-item__views">
          <svg class="news-item__views-icon">
            <use xlink:href="@/assets/img/svg/sprite.svg#culture"/>
          </svg>
          <span>{{ views }}</span>
        </div>
        <div class="news-item__location">
          <svg class="news-item__location-icon">
            <use xlink:href="@/assets/img/svg/sprite.svg#location"/>
          </svg>
          <span>{{ location }}</span>
        </div>
        <div class="news-item__date">{{ date }}</div>
      </div>
    </div>
  </nuxt-link>
</template>


<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      previewText: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      location: String,
      views: {
        type: Number,
        required: true
      }
    },
    computed: {
      directionTitle: 'Здравоохранение',
      icon: '#culture'
    }
  }
</script>

<style scoped>
  .news-item {
    &__img {
      &-wrapper {
        position: relative;
        margin-right: 15px;
      }
    }
    &__direction {
      position: absolute;
      top: 15px;
      left: 15px;
      background: #eee;
      padding: 2px 9px;
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 300;
      color: #000;
    }
  }
</style>
