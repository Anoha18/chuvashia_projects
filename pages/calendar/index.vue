<template>
  <div class="page-calendar">
    <section class="section page__section section_bg_gray">
      <div class="container">
        <h1 class="page__ttl page-calendar__ttl">Календарь</h1>
        <div class="page-calendar__bb">
          <div class="page-calendar__cards">
            <CardCalendar v-for="(card, index) in cards" :key="index" v-bind="card" class="page-calendar__card"/>
          </div>
          <div class="page-calendar__calendar-wrapper">
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Select from '@/components/Select';
  import Button from '@/components/Button';
  import CardCalendar from "@/components/Card/CardCalendar";
  import Calendar from "@/components/Calendar";

  export default {
    components: {
      Select,
      Button,
      CardCalendar,
      Calendar
    },
    data() {
      return {
        cards: [
          {
            status: '',
            img: '1.jpg',
            tasks: [
              { title: 'Список 1' },
              { isDone: true, title: 'Список 2' },
              { isDone: true, title: 'Список 3' },
              { title: 'Список 4' },
              { title: 'Список 5' },
            ],
            title: 'Заголовок проекта'
          },
          {
            status: 'done',
            img: '2.jpg',
            tasks: [
              { isDone: true, title: 'Список 1' },
              { isDone: true, title: 'Список 2' },
              { isDone: true, title: 'Список 3' },
              { isDone: true, title: 'Список 4' },
              { isDone: true, title: 'Список 5' },
            ],
            title: 'Заголовок проекта'
          },
          {
            status: 'done',
            img: '2.jpg',
            tasks: [
              { isDone: true, title: 'Список 1' },
              { isDone: true, title: 'Список 2' },
              { isDone: true, title: 'Список 3' },
              { isDone: true, title: 'Список 4' },
              { isDone: true, title: 'Список 5' },
            ],
            title: 'Заголовок проекта'
          },
          {
            status: 'moved',
            img: '3.jpg',
            tasks: [
              { title: 'Список 1' },
              { isDone: true, title: 'Список 2' },
              { isDone: true, title: 'Список 3' },
              { title: 'Список 4' },
              { title: 'Список 5' },
            ],
            title: 'Заголовок проекта'
          },
          {
            status: '',
            img: '1.jpg',
            tasks: [
              { title: 'Список 1' },
              { isDone: true, title: 'Список 2' },
              { isDone: true, title: 'Список 3' },
              { title: 'Список 4' },
              { title: 'Список 5' },
            ],
            title: 'Заголовок проекта'
          },
          {
            status: 'done',
            img: '2.jpg',
            tasks: [
              { isDone: true, title: 'Список 1' },
              { isDone: true, title: 'Список 2' },
              { isDone: true, title: 'Список 3' },
              { isDone: true, title: 'Список 4' },
              { isDone: true, title: 'Список 5' },
            ],
            title: 'Заголовок проекта'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .page-calendar__ttl {
    margin-bottom: 2rem;
  }
  .page-calendar__bb {
    display: flex;
    justify-content: space-between;
  }
  .page-calendar__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 700px;
    width: 700px;
    max-width: 100%;
    margin-right: 20px;
  }
  .page-calendar__card {
    width: calc(50% - 10px);
    max-width: 100%;
  }
  .page-calendar__card:not(:last-child) {
    margin-bottom: 20px;
  }
  .page-calendar__calendar-wrapper {
    flex-grow: 1;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .page-calendar__cards {
      width: 590px;
      min-width: 590px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .page-calendar__bb {
      flex-direction: column;
    }
    .page-calendar__cards {
      width: 100%;
      min-width: auto;
      margin-right: 0;
    }
    .page-calendar__card {
      width: calc(50% - 10px);
      margin-right: 0;
    }
    .page-calendar__calendar-wrapper {
      order: -1;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 767px) {
    .page-calendar__bb {
      flex-direction: column;
    }
    .page-calendar__cards {
      min-width: auto;
      width: 100%;
      flex-direction: column;
      margin-right: 0;
    }
    .page-calendar__card {
      width: 100%;
      margin-right: 0;
    }
    .page-calendar__calendar-wrapper {
      order: -1;
      margin-bottom: 15px;
    }
  }
</style>
