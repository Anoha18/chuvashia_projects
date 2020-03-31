<template>
  <div class="card-calendar">
    <div class="card-calendar__img-wrapper">
      <img :src="require('@/assets/img/calendar/' + img)" alt="Фото">
      <div :class="'card-calendar__status card-calendar__status_s_'+status">
        <svg class="card-calendar__status-icon">
          <use :xlink:href="icon"/>
        </svg>
      </div>
    </div>
    <div class="card-calendar__content">
      <p class="card-calendar__ttl">Заголовок проекта</p>
      <p class="card-calendar__tasks-ttl">Основные задачи</p>
      <ul class="card-calendar__tasks">
        <li v-for="task in tasks" class="card-calendar__task">
          <svg class="card-calendar__task-icon">
            <use :xlink:href="taskIcon(task)"/>
          </svg>
          {{ task.title }}
        </li>
      </ul>
      <div class="card-calendar__progress">
        <div v-for="task in tasks" :class="'card-calendar__progress-item' + (task.isDone ? ' card-calendar__progress-item_s_done' : '')"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      taskIcon: function(task) {
        return require("@/assets/img/svg/sprite.svg") + '#' + (task.isDone ? 'check_square' : 'square');
      }
    },
    props: {
      img: String,
      status: String,
      tasks: Array,
      title: String
    },
    computed: {
      icon() {
        return require("@/assets/img/svg/sprite.svg") + '#' + (this.status === 'done' ? 'check' : this.status === 'moved' ? 'eye_off' : 'clock');
      }
    }
  }
</script>
<style scoped>
  .card-calendar {
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 18px #E6E5F2;
  }
  .card-calendar__img-wrapper {
    position: relative;
  }
  .card-calendar__img {

  }
  .card-calendar__status {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #C5C5C5;
  }
  .card-calendar__status_s_done {
    background: #A3EE03;
  }
  .card-calendar__status_s_moved {
    background: #FF467E;
  }
  .card-calendar__status-icon {
    width: 50%;
    height: 50%;
    fill: #fff;
  }
  .card-calendar__content {
    background: #fff;
    padding: 20px 15px;
    font-weight: 400;
  }
  .card-calendar__ttl {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .card-calendar__tasks-ttl {
    margin-bottom: 5px;
  }
  .card-calendar__tasks {
    margin-bottom: 1rem;
  }
  .card-calendar__task {
    display: flex;
    align-items: center;
  }
  .card-calendar__task:not(:last-child) {
    margin-bottom: .2rem;
  }
  .card-calendar__task-icon {
    width: 24px;
    height: 24px;
    fill: #0D1C2E;
    margin-right: 7px;
  }
  .card-calendar__progress {
    display: flex;
    align-items: center;
  }
  .card-calendar__progress-item {
    width: 29px;
    height: 9px;
    border-radius: 3px;
    background: #C5C5C5;
  }
  .card-calendar__progress-item:not(:last-child) {
    margin-right: 6px;
  }
  .card-calendar__progress-item_s_done {
    background: #A3EE03;
  }
</style>
