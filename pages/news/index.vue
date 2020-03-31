<template>
  <div class="page page-news">
    <section class="section page__section">
      <div class="container page__container">
        <FilterComponent class="page-news__filter"/>
        <div class="page-news__ttl-wrapper">
          <p class="page__ttl">Новости</p>
          <Select :items="['По популярности', 'По дате публикации']" defaultValue="По популярности" theme="light" class="page-news__sort"/>
        </div>
        <div class="page-news__items-wrapper">
          <div class="page-news__items">
            <CardNews v-bind="itemMain" class="page-news__item"/>
            <NewsItem
              v-for="item in items"
              :key="item.id"
              v-bind="item"
              class="page-news__item"
            />
          </div>
          <div class="page-news__btn">Показать еще</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import FilterComponent from "@/components/FilterComponent";
  import Select from "@/components/Select";
  import CardNews from "@/components/Card/CardNews";
  import NewsItem from "@/components/NewsItem";

  export default {
    components: {
      FilterComponent,
      Select,
      CardNews,
      NewsItem
    },
    data() {
      return {
        itemMain: {
          id: "1",
          direction: "culture",
          title: "В 2020 году у каждого жителя республики будет возможность посадить свой кедр",
          previewText: 'Сергей Пикунов  рассказал о реализации в 2019 году портфеля проектов «Экология» на территории автономного округа.',
          img: "aad.jpg",
          date: '03.03.20',
          views: 567
        },
        items: [
          {
            id: "2",
            direction: "medicine",
            title: "Главные специалисты Минздрава ответят на вопросы россиян о коронавирусе",
            previewText: 'Портал "Национальные проекты Чувашской Республики" ведет хронику того, как страна справляется с новыми вызовами.',
            img: "aaa.jpg",
            date: '03 март 2020',
            views: 567
          },
          {
            id: "3",
            direction: "education",
            title: "Главные специалисты Минздрава ответят на вопросы россиян о коронавирусе",
            previewText: 'Портал "Национальные проекты Чувашской Республики" ведет хронику того, как страна справляется с новыми вызовами.',
            img: "aab.jpg",
            date: '03 март 2020',
            location: 'Чебоксары',
            views: 567
          },
          {
            id: "4",
            direction: "medicine",
            title: "Главные специалисты Минздрава ответят на вопросы россиян о коронавирусе",
            previewText: 'Портал "Национальные проекты Чувашской Республики" ведет хронику того, как страна справляется с новыми вызовами.',
            img: "aac.jpg",
            date: '03 март 2020',
            location: 'Новочебоксарск',
            views: 567
          }
        ]
      }
    }
  }
</script>

<style>
  .page-news {
    background: #E5E5E5;
  }
  .page-news__ttl-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .page-news__filter {
    margin-bottom: 1.5rem;
  }
  .page-news__sort {
    width: 270px;
    max-width: 100%;
  }
  .page-news__items-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  }
  .page-news__items {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .page-news__item:not(:last-child) {
    margin-bottom: 15px;
  }
  .page-news__btn {
    background: #ffffff;
    border-radius: 30px;
    padding: 14px 28px;
    font-size: .875rem;
    line-height: .875rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    transition: .1s;
  }
  .page-news__btn:hover {
    background: #00203F;
    color: #fff;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .page-news__sort {
      width: 220px;
    }
  }

  @media (max-width: 767px) {
    .page-news__sort {
      width: 200px;
    }
  }
</style>
