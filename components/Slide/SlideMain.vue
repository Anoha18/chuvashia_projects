<template>
  <div :class="'slide-main slide-main_t_' + type">
    <div class="slide-main__cover"></div>
    <div class="container slide-main__container">
      <div :class="'slide-main__content slide-main__content_t_' + type + (page === 'project' ? ' slide-main__content_p_project' : '')">
        <p v-if="type !== 'projects'" :class="'slide-main__supttl slide-main__supttl_t_' + type">Национальный проект</p>
        <div class="slide-main__ttl-wrapper">
          <h1 class="slide-main__ttl" v-html="title"></h1>
          <div v-if="type !== 'projects'" class="slide-main__ttl-circle">
            <img :src="require('@/assets/img/svg/' + type + '.svg')" :alt="title" class="slide-main__ttl-icon">
          </div>
        </div>
        <div v-if="indicators" class="slide-main__indicators">
          <div v-for="indicator in indicators" class="slide-main__indicator">
            <div class="slide-main__indicator-icon" :style="'mask-image: url('+require('@/assets/img/svg/' + indicator.icon +'.svg')+')'"></div>
            <p v-html="indicator.text"></p>
          </div>
        </div>
        <p :class="'slide-main__descr slide-main__descr_t_' + type" v-html="description"></p>
        <nuxt-link :to="type === 'projects' ? '/projects' : '/projects/'+type" class="slide-main__btn-wrapper">
          <Button v-if="hasButton" size="l" class="slide-main__btn" :text="type === 'projects' ? 'Перейти к проектам' : 'Подробнее о проекте'"/>
        </nuxt-link>
        <div v-if="quoteAuthor" class="slide-main__quote">
          <p class="slide-main__quote-text" v-html="quoteText"></p>
          <p class="slide-main__quote-author">— {{ quoteAuthor }}</p>
        </div>
        <div v-if="slidesCount" class="slide-main__nav">
          <img src="@/assets/img/svg/arrow_left.svg" alt="Влево" class="slide-main__nav-btn" />
          <div class="slide-main__nav-dots">
            <div class="slide-main__nav-dots-line"></div>
            <div v-for="(_, index) in Array.from({ length: slidesCount })" :class="'slide-main__nav-dot' + (index === slideIndex ? ' slide-main__nav-dot_active' : '')"></div>
          </div>
          <img src="@/assets/img/svg/arrow_right.svg" alt="Вправо" class="slide-main__nav-btn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "@/components/Button";

  export default {
    components: {
      Button
    },
    props: {
      type: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      indicators: Array,
      description: {
        type: String,
        required: true
      },
      hasButton: {
        type: Boolean,
        default: true
      },
      quoteText: String,
      quoteAuthor: String,
      slidesCount: Number,
      slideIndex: Number,
      // fullpageApi: Object,
      page: String
    }
  }
</script>

<style scoped>
  .slide-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    position: relative;
  }
  .slide-main__cover {
    z-index: 2;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
  }
  .slide-main__container {
    height: 100%;
  }
  .slide-main_t_projects {
    background: url('~assets/img/main/projects.jpg');
    background-size: cover;
  }
  .slide-main_t_education {
    background: url('~assets/img/main/education.jpg');
    background-size: cover;
  }
  .slide-main_t_medicine {
    background: url('~assets/img/main/medicine.jpg');
    background-size: cover;
  }
  .slide-main_t_demography {
    background: url('~assets/img/main/demography.jpg');
    background-size: cover;
  }
  .slide-main_t_culture {
    background: url('~assets/img/main/culture.jpg');
    background-size: cover;
  }
  .slide-main__content {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 3;
    padding-top: 5rem;
  }
  .slide-main__content_t_projects {
    padding-top: 8rem;
  }
  .slide-main__content_p_project {
    padding-top: 0;
    justify-content: center;
  }
  .slide-main__supttl {
    font-size: 1.375rem;
    line-height: 1.375rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .slide-main__supttl_t_education {
    color: #FFB800;
  }
  .slide-main__ttl-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .slide-main__ttl-circle {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    margin-left: 20px;
  }
  .slide-main__ttl-icon {
    width: 50%;
    height: 50%;
  }
  .slide-main__ttl {
    font-size: 2.5rem;
    line-height: 3.2rem;
    font-weight: bold;
    color: #fff;
    /*width: 50rem;*/
    /*max-width: 100%;*/
  }
  .slide-main__indicators {
    display: flex;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    padding: 18px 14px;
    margin-bottom: 1.5rem;
  }
  .slide-main__indicator {
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
  .slide-main__indicator:not(:last-child) {
    margin-right: 120px;
  }
  .slide-main__indicator-icon {
    width: 3rem;
    height: 3rem;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    background: #f5b100;
    margin-right: 10px;
  }
  .slide-main__descr {
    font-size: 1.25rem;
    line-height: 1.75rem;
    /*width: 50rem;*/
    /*max-width: 100%;*/
    margin-bottom: 5rem;
  }
  .slide-main__descr_t_education {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
  .slide-main__btn-wrapper {
    text-decoration: none;
    margin-bottom: 5rem;
  }
  .slide-main__btn {
    padding: 17px 37px;
    border-radius: 3px;
  }
  .slide-main__quote {
    max-width: 100%;
    width: 600px;
    margin-left: auto;
    font-size: 1rem;
    line-height: 1.375rem;
    font-weight: 400;
    text-align: right;
  }
  .slide-main__quote-author {
    margin-top: 10px;
  }
  .slide-main__nav {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide-main__nav-btn {
    width: 24px;
    height: 27px;
    cursor: pointer;
    transition: .1s;
  }
  .slide-main__nav-btn:hover {
    transform: scale(1.35);
  }
  .slide-main__nav-dots {
    position: relative;
    display: flex;
    margin: 0 25px;
  }
  .slide-main__nav-dots-line {
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    pointer-events: none;
  }
  .slide-main__nav-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    transition: .1s;
  }
  .slide-main__nav-dot_active, .slide-main__nav-dot:hover {
    transform: scale(1.35);
  }
  .slide-main__nav-dot:not(:last-child) {
    margin-right: 60px;
  }

  @media (max-width: 768px) {
    .slide-main__content {
      padding-top: 3rem;
    }
    .slide-main__content_t_projects {
      padding-top: 3rem;
    }
    .slide-main__supttl {
      font-size: 1rem;
      line-height: 1rem;
      margin-bottom: .5rem;
    }
    .slide-main__ttl {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
    .slide-main__ttl-circle {
      width: 3rem;
      height: 3rem;
      margin-left: 10px;
    }
    .slide-main__indicator {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .slide-main__indicator:not(:last-child) {
      margin-right: 10px;
    }
    .slide-main__indicator-icon {
      width: 1.5625rem;
      height: 1.5625rem;
      min-width: 1.5625rem;
    }
    .slide-main__descr {
      font-size: 1rem;
      line-height: 1.375rem;
      margin-bottom: 1rem;
    }

    .slide-main__btn-wrapper {
      margin-bottom: 2rem;
    }
    .slide-main__btn {
      padding: 13px 30px;
    }
    .slide-main__quote {
      font-size: .9375rem;
      line-height: 1.25rem;
    }
    .slide-main__nav {
      bottom: 80px;
    }
    .slide-main__nav-dot:not(:last-child) {
      margin-right: 30px;
    }
  }
</style>
