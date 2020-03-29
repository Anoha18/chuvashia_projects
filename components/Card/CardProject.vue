<template>
  <div class="card-project">
    <div class="card-project__glr">
      <div class="card-project__slr">
        <img src="@/assets/img/projects/1/1.jpg" alt="Картинка" />
      </div>
      <div class="card-project__glr-status">
        <svg class="card-project__glr-btn">
          <use xlink:href="~/assets/img/svg/sprite.svg#arrow_left" />
        </svg>
        <div class="card-project__glr-dots"></div>
        <svg class="card-project__glr-btn">
          <use xlink:href="~/assets/img/svg/sprite.svg#arrow_right" />
        </svg>
      </div>
    </div>
    <div class="card-project__content">
      <div class="card-project__ttl-wrapper">
<!--        <svg class="card-project__ttl-icon">-->
<!--          <use :xlink:href="'@/assets/img/svg/sprite.svg#' + icon" />-->
<!--        </svg>-->
        <img src="@/assets/img/svg/medicine.svg" alt="Медицина" class="card-project__ttl-icon"/>
        <p class="card-project__ttl">Здравоохранение</p>
      </div>
      <p class="card-project__subttl">Реализуется 51 региональный проект в рамках 11 национальных проектов</p>
      <div class="card-project__tasks">
        <p class="card-project__tasks-ttl">Ключевые задачи:</p>
        <div v-for="task in tasks" class="card-project__task">
          <img :src="task.isDone ? require('@/assets/img/svg/check_circle.svg') : require('@/assets/img/svg/refresh.svg')" alt="Статус" class="card-project__task-icon">
          <p class="card-project__task-ttl">{{ task.title }}</p>
        </div>
      </div>
      <Button text="Узнать подробнее" size="l" class="card-project__btn"/>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button';

  export default {
    components: {
      Button
    },
    data() {
      return {
        icon: 'medicine',
        tasks: [
          { title: 'Выполненная задача: Развитие системы оказания первичной медико-санитарной помощи', isDone: true },
          { title: 'Задача в процессе: Борьба с сердечно-сосудистыми заболеваниями', isDone: false },
          { title: 'Задача в процессе', isDone: false }
        ]
      }
    },
    props: {
      img: String
    }
  }
</script>

<style scoped>
  .card-project {
    display: flex;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 6px 18px #E6E5F2;
  }
  .card-project__glr {
    position: relative;
    width: 60%;
  }
  .card-project__glr-status {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
  }
  .card-project__glr-btn {
    width: 15px;
    height: 15px;
  }
  .card-project__content {
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .card-project__ttl-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
  }
  .card-project__ttl {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;
    color: #4FA2F0;
  }

  .card-project__ttl-icon {
    margin-right: 10px;
  }
  .card-project__subttl {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  .card-project__tasks {
    margin-bottom: 2rem;
  }
  .card-project__tasks-ttl {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 700;
    margin-bottom: .7rem;
  }
  .card-project__task {
    display: flex;
    align-items: flex-start;
    font-size: 1rem;
  }
  .card-project__task:not(:last-child) {
    margin-bottom: 15px;
  }
  .card-project__task-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  .card-project__btn {
    margin: auto;
  }
</style>
