<template>
  <div class="card-news">
    <div class="card-news__glr">
      <p class="card-news__direction">{{ directionTitle }}</p>
      <img :src="require('@/assets/img/news/'+img)" alt="Фото">
    </div>
    <div class="card-news__content">
      <div class="card-news__content-top">
        <p class="card-news__date">{{ date }}</p>
        <p class="card-news__ttl">
          <img :src="require('@/assets/img/svg/'+direction+'.svg')" alt="Иконка" class="card-news__ttl-icon">
          {{ title }}
        </p>
        <p class="card-news__preview">{{ previewText }}</p>
      </div>
      <div class="card-news__content-bottom">
        <nuxt-link :to="'/news/' + id" class="card-news__btn">
          <svg class="card-news__btn-icon">
            <use xlink:href="@/assets/img/svg/sprite.svg#arrow_right_full"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
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
  .card-news {
    width: 100%;
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    background: #fff;
    box-shadow: 0 6px 18px #E6E5F2;
  }
  .card-news__glr {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 66.66%;
    min-width: 66.66%;
  }
  .card-news__direction {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #eee;
    padding: 6px 11px;
    font-size: 1.0625rem;
    line-height: 1.0625rem;
    font-weight: 300;
    color: #000;
    border-radius: 4px;
  }
  .card-news__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 25px 15px 20px;
  }
  .card-news__content-bottom {
    display: flex;
    justify-content: flex-end;
  }
  .card-news__date {
    color: #C4C4C4;
    font-size: .875rem;
    line-height: .875rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }
  .card-news__ttl-icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 5px;
    margin-top: -10px;
  }
  .card-news__ttl {
    font-size: 1.375rem;
    line-height: 1.75rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 1rem;
  }
  .card-news__preview {
    font-size: 1rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: #000;
  }
  .card-news__btn {
    background: rgba(0, 74, 144, 0.15);
    display: flex;
    align-items: center;
    padding: 9px 15px;
    border-radius: 30px;
    cursor: pointer;
    text-decoration: none;
    transition: .1s;
  }
  .card-news__btn:hover {
    background: #00203F;
  }
  .card-news__btn:hover .card-news__btn-icon {
    fill: #fff;
  }
  .card-news__btn-icon {
    width: 1.5rem;
    height: 1.5rem;
    fill: #0D1C2E;
  }

  @media (max-width: 768px) {
    .card-news__ttl {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
    .card-news__glr {
      min-width: 90px;
      width: 90px;
      height: 90px;
    }
    .card-news__glr img {
      max-height: 120px;
    }
    .card-news__preview {

    }
  }
</style>
