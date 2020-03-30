<template>
  <div class="page page-news">
    <div class="container page__container">
      <Filter/>
      <div class="page-news__ttl-wrapper">
        <p class="page__ttl">Новости</p>
        <Select :options="[]"/>
      </div>
      <div class="page-news__items-wrapper">
        <div class="page-news__items">
          <CardNews/>
          <NewsItem
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :direction="item.direction"
            :img="item.img"
            :title="item.title"
            :previewText="item.previewText"
            :date="item.date"
            :views="item.views"
          />
        </div>
        <div class="page-news__btn">Показать еще</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Filter from "@/components/Filter";
  import Select from "@/components/Select";
  import CardNews from "@/components/Card/CardNews";
  import NewsItem from "@/components/NewsItem";

  export default {
    components: {
      Filter,
      Select,
      CardNews,
      NewsItem
    },
    data() {
      return {
        main: {
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
    justify-content: space-between;
  }
  .page-news__items-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
  }
  .page-news__items {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
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
</style>
