<template>
  <div class="card-info">
    <div class="card-info__img-wrapper">
      <p class="card-info__direction">{{ directionTitle(direction) }}</p>
      <img :src="require('@/assets/img/news/' + img)" alt="" class="card-info__img" />
    </div>
    <div class="card-info__content">
      <div class="card-info__content-top">
        <p class="card-info__supttl">Национальный проект</p>
        <p class="card-info__ttl">{{ directionTitle(direction) }}</p>
        <div class="card-info__indicators">
          <div v-for="indicator in indicators" class="card-info__indicator">
            <div class="card-info__indicator-icon" :style="'mask-image: url('+require('@/assets/img/svg/' + indicator.icon +'.svg')+')'"></div>
            <p v-html="indicator.text"></p>
          </div>
        </div>
      </div>
      <div class="card-info__content-bottom">
        <nuxt-link :to="'/projects/' + direction" class="card-info__btn">
          Подробнее
          <svg class="card-info__btn-icon">
            <use xlink:href="@/assets/img/svg/sprite.svg#arrow_right_full"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      ttl: () => 'Title',
      img: () => 'aae.jpg',
      direction: () => 'culture',
      indicators: () => [
        {
          icon: "briefcase",
          text: "Бюджет  проекта<br/>" +
            "784,5 млрд руб."
        },
        {
          icon: "check_circle",
          text: "Количество проектов<br/>" +
            "10 федеральных проектов"
        },
      ]
    },
    methods: {
      directionTitle: (direction) => {
        let ttl;
        switch (direction) {
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
      },
    }
  }
</script>

<style scoped>
  .card-info {
    width: 100%;
    display: flex;
    color: #000;
  }
  .card-info__img-wrapper {
    position: relative;
    display: flex;
    width: 66.66%;
    min-width: 66.66%;
  }
  .card-info__direction {
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
  .card-info__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    background: #F5F5F5;
    padding: 20px 25px 20px 20px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .card-info__content-bottom {
    display: flex;
    justify-content: flex-start;
  }
  .card-info__supttl {
    font-size: .9375rem;
    line-height: .9375rem;
    font-weight: 400;
    margin-bottom: .6rem;
  }
  .card-info__ttl {
    font-size: 1.375rem;
    line-height: 1.375rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 1.5rem;
  }
  .card-info__indicators {
    display: flex;
    flex-direction: column;
  }
  .card-info__indicator {
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.375rem;
    font-weight: 400;
  }
  .card-info__indicator:not(:last-child) {
    margin-bottom: 1rem;
  }
  .card-info__indicator-icon {
    width: 3rem;
    height: 3rem;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    background: #FFB800;
    margin-right: 12px;
  }
  .card-info__btn {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 9px 15px;
    border-radius: 30px;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: .1s;
    margin-bottom: 3rem;
  }
  .card-info__btn:hover {
    background: #00203F;
    color: #fff;
  }
  .card-info__btn:hover .card-info__btn-icon {
    fill: #fff;
  }
  .card-info__btn-icon {
    width: 24px;
    height: 24px;
    fill: #0D1C2E;
    margin-left: 5px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .card-info__img-wrapper {
      width: 60%;
      min-width: 60%;
    }
    .card-info__indicator-icon {
      width: 2.5rem;
      height: 2.5rem;
      min-width: 2.5rem;
    }
    .card-info__indicators {
      margin-bottom: 1.5rem;
    }
    .card-info__btn {
      margin-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    .card-info {
      flex-direction: column;
    }
    .card-info__img-wrapper {
      width: 100%;
      min-width: 100%;
    }
    .card-info__indicators {
      margin-bottom: 1.5rem;
    }
    .card-info__btn {
      margin-bottom: 0;
    }
  }
</style>
