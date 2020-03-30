<template>
  <nuxt-link :to="'/news/' + id" class="news-item">
    <div class="news-item__img-wrapper">
      <img :src="require('@/assets/img/news/'+img)" alt="Фото" class="news-item__img">
      <p class="news-item__direction">{{ directionTitle }}</p>
    </div>

    <div class="news-item__content">
      <div class="news-item__hdr">
        <div class="news-item__ttl-wrapper">
          <img :src="require('@/assets/img/svg/'+direction+'.svg')" alt="Иконка" class="news-item__ttl-icon" />
          <p class="news-item__ttl">{{ title }}</p>
        </div>
        <p class="news-item__preview">{{ previewText }}</p>
      </div>
      <div class="news-item__ftr">
        <div class="news-item__views">
          <img src="@/assets/img/svg/eye.svg" alt="Иконка" class="news-item__views-icon" />
          <span>{{ views }}</span>
        </div>
        <div v-if="location" class="news-item__location">
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
      location: {
        type: String,
        default: ''
      },
      views: {
        type: Number,
        required: true
      }
    },
    computed: {
      directionTitle: function() {
        let ttl;
        switch (this.direction) {
          case 'medicine':
            ttl = 'Здравоохранение';
            break;
          case 'education':
            ttl = 'Образование';
            break;
          case 'culture':
            ttl = 'Культура';
            break;
        }
        return ttl;
      }
    }
  }
</script>

<style scoped>
  .news-item {
    display: flex;
    text-decoration: none;
    color: #000;
    height: 190px;
  }
  .news-item:not(:last-child) {
    margin-bottom: 15px;
  }
  .news-item__img-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 265px;
    min-width: 265px;
    height: 100%;
  }
  .news-item__img {
    height: 100%;
    width: 100%;
  }
  .news-item__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 6px 18px #E6E5F2;
    padding: 15px 25px 15px 20px;
  }
  .news-item__ttl-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .news-item__ttl {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: bold;
  }
  .news-item__ttl-icon {
    width: 3rem;
    height: 3rem;
    margin-right: 10px;
  }
  .news-item__preview {
    font-size: 1rem;
    line-height: 1.375rem;
    font-weight: 400;
  }
  .news-item__direction {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #eee;
    padding: 5px 11px;
    font-size: .875rem;
    line-height: .875rem;
    font-weight: 300;
    color: #000;
    border-radius: 4px;
  }
  .news-item__ftr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    line-height: 1rem;
  }
  .news-item__views {
    display: flex;
    align-items: center;
  }
  .news-item__views-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 5px;
  }
  .news-item__location {
    display: flex;
    align-items: center;
  }
  .news-item__location-icon {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }
  .news-item__date {
    color: #C4C4C4;
  }
</style>
