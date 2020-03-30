<template>
  <div class="card-news">
    <div class="card-news__glr"></div>
    <div class="card-news__content">
      <p class="card-news__date">{{ date }}</p>
      <div class="card-news__ttl-wrapper">
        <img src="require('@/assets/img/news/'+img)" alt="Фото">
        <p class="card-news__ttl">{{ title }}</p>
      </div>
      <p class="card-news__preview">{{ previewText }}</p>
      <div class="card-news__btn">
        <svg class="card-news__btn-icon">
          <use xlink:href="@/assets/img/svg/sprite.svg#arrow_right"/>
        </svg>
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
  }
  .card-news__img-wrapper {

  }
  .card-news__img {

  }
  .card-news__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 6px 18px #E6E5F2;
    padding: 15px 25px 15px 20px;
  }
  .card-news__ttl-wrapper {
    display: flex;
    align-items: center;
  }
  .card-news__ttl-icon {
    width: 10px;
    height: 10px;
  }
  .card-news__ttl {

  }
  .card-news__preview {

  }
  .card-news__btn {

  }
  .card-news__btn-icon {
    width: 10px;
    height: 10px;
  }
</style>
