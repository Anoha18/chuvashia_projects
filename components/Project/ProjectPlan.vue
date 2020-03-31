<template>
  <section class="section page__section project-plan">
    <div class="container page__container">
      <div class="section__ttl project-plan__ttl">Планы и сроки</div>
      <div class="project-plan__dates">
        <img src="@/assets/img/svg/calendar.svg" alt="Календарь" class="project-plan__dates-icon"/>
        <p>Срок выполнения:<br />
          1 октября 2019 —  31 декабря 2024
        </p>
      </div>
      <div class="project-plan__cards">
        <CardPlan
          v-for="year in years"
          :key="year.id"
          class="project-plan__card"
          :id="year.id"
          :items="year.items"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import CardPlan from '@/components/Card/CardPlan';

  export default {
    components: {
      CardPlan
    },
    data() {
      return {
        years: [
          {
            id: '2019',
            items: [
              'Построить 20 школ на территории Чувашии',
              'Построить 15 садиков',
              'Разработка методических рекомендаций для определения тип и расположения концертных залов',
              'Провести не менее 1-ой культурной трансляций в год на портале',
              'Разработать рейтинг расчета популярности мероприятий.\n',
            ]
          },
          {
            id: '2020',
            items: [
              'Построить 20 школ на территории Чувашии',
              'Построить 15 садиков',
              'Разработка методических рекомендаций для определения тип и расположения концертных залов',
              'Провести не менее 1-ой культурной трансляций в год на портале',
              'Разработать рейтинг расчета популярности мероприятий.\n',
            ]
          },
          {
            id: '2021',
            items: [
              'Построить 20 школ на территории Чувашии',
              'Построить 15 садиков',
              'Разработка методических рекомендаций для определения тип и расположения концертных залов',
              'Провести не менее 1-ой культурной трансляций в год на портале',
              'Разработать рейтинг расчета популярности мероприятий.\n',
            ]
          },
          {
            id: '2022',
            items: [
              'Построить 20 школ на территории Чувашии',
              'Построить 15 садиков',
              'Разработка методических рекомендаций для определения тип и расположения концертных залов',
              'Провести не менее 1-ой культурной трансляций в год на портале',
              'Разработать рейтинг расчета популярности мероприятий.\n',
            ]
          },
          {
            id: '2023',
            items: [
              'Построить 20 школ на территории Чувашии',
              'Построить 15 садиков',
              'Разработка методических рекомендаций для определения тип и расположения концертных залов',
              'Провести не менее 1-ой культурной трансляций в год на портале',
              'Разработать рейтинг расчета популярности мероприятий.\n',
            ]
          },
          {
            id: '2024',
            items: [
              'Построить 20 школ на территории Чувашии',
              'Построить 15 садиков',
              'Разработка методических рекомендаций для определения тип и расположения концертных залов',
              'Провести не менее 1-ой культурной трансляций в год на портале',
              'Разработать рейтинг расчета популярности мероприятий.\n',
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  .project-plan__dates {
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: #000;
    margin-bottom: 1rem;
  }
  .project-plan__dates-icon {
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
  .project-plan__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .project-plan__card {
    width: calc(33.3% - 10px);
    margin-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .project-plan__card {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 767px) {
    .project-plan__cards {
      flex-direction: column;
    }
    .project-plan__card {
      width: 100%;
    }
  }
</style>
