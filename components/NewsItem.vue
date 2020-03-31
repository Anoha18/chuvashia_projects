<template>
  <nuxt-link :to="'/news/' + id" class="news-item">
    <div class="news-item__main">
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
      </div>
    </div>
    <div class="news-item__ftr">
      <div class="news-item__ftr-b">
        <div class="news-item__views">
          <img src="@/assets/img/svg/eye.svg" alt="Иконка" class="news-item__views-icon" />
          <span>{{ views }}</span>
        </div>
      </div>
      <div class="news-item__ftr-b news-item__ftr-b_2">
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
          case 'demography':
            ttl = 'Демография';
            break;
        }
        return ttl;
      }
    }
  }
</script>

<style scoped>
  .news-item {
    text-decoration: none;
    color: #000;
    height: 190px;
    background: #fff;
    box-shadow: 0 6px 18px #E6E5F2;
    position: relative;
  }
  .news-item__main {
    height: 100%;
    display: flex;
    align-items: center;
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
  }
  .news-item__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
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
    width: calc(100% - 265px);
    display: flex;
    justify-content: space-between;
    font-size: .9375rem;
    line-height: .9375rem;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 25px 15px 20px;
  }
  .news-item__ftr-b {
    display: flex;
    align-items: center;
  }
  .news-item__ftr-b_2 {
    width: 280px;
    max-width: 100%;
    justify-content: flex-end;
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
    font-weight: 400;
    margin-right: auto;
  }
  .news-item__location-icon {
    width: 1.5rem;
    height: 1.5rem;
    fill: #0D1C2E;
    margin-right: 5px;
  }
  .news-item__date {
    color: #C4C4C4;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .news-item {
      height: auto;
      padding: 10px;
    }
    .news-item__main {
      margin-bottom: .5rem;
    }
    .news-item__img-wrapper {
      width: 75px;
      height: 75px;
      min-width: 75px;
      margin-right: 10px;
    }
    .news-item__img {
      border-radius: 3px;
    }
    .news-item__direction {
      display: none;
    }
    .news-item__content {
      padding: 0;
    }
    .news-item__ttl-wrapper {
      position: relative;
    }
    .news-item__ttl-icon {
      width: 2.5rem;
      height: 2.5rem;
    }
    .news-item__ftr {
      position: initial;
      width: 100%;
      padding: 0;
      font-size: .875rem;
      line-height: .875rem;
    }
    .news-item__ftr-b_2 {
      width: 250px;
    }
  }

  @media (max-width: 767px) {
    .news-item {
      height: auto;
      padding: 10px;
    }
    .news-item__main {
      margin-bottom: .5rem;
    }
    .news-item__img-wrapper {
      width: 60px;
      height: 60px;
      min-width: 60px;
      margin-right: 10px;
    }
    .news-item__img {
      border-radius: 3px;
    }
    .news-item__direction {
      display: none;
    }
    .news-item__content {
      padding: 0;
    }
    .news-item__ttl-wrapper {
      position: relative;
    }
    .news-item__ttl-icon {
      position: absolute;
      top: 3px;
      right: 0;
      width: 2rem;
      height: 2rem;
    }
    .news-item__preview {
      display: none;
    }
    .news-item__ftr {
      position: initial;
      width: 100%;
      padding: 0;
      font-size: .875rem;
      line-height: .875rem;
    }
    .news-item__ftr-b_2 {
      width: 220px;
    }
  }
</style>
