<template>
  <div class="page-news">
    <Filter/>
    <div class="page-news__ttl-wrapper">
      <p class="page__ttl">Новости</p>
      <Select />
    </div>
    <div class="page-news__items">
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
  </div>
</template>

<script>
  import Filter from "@/components/Filter";
  import Select from "@/components/Select";
  import NewsItem from "@/components/NewsItem";

  export default {
    components: {
      Filter,
      Select,
      NewsItem
    },
    data() {
      return {
        items: [
          {
            id: "2",
            direction: "medicine",
            title: "Главные специалисты Минздрава ответят на вопросы россиян о коронавирусе",
            previewText: 'Портал "Национальные проекты Чувашской Республики" ведет хронику того, как страна справляется с новыми вызовами.',
            img: "@/assets/img/news/aaa.jpg",
            date: '03 март 2020',
            views: 567
          },
          {
            id: "3",
            direction: "medicine",
            title: "Главные специалисты Минздрава ответят на вопросы россиян о коронавирусе",
            previewText: 'Портал "Национальные проекты Чувашской Республики" ведет хронику того, как страна справляется с новыми вызовами.',
            img: "@/assets/img/news/aaa.jpg",
            date: '03 март 2020',
            location: 'Чебоксары',
            views: 567
          },
          {
            id: "4",
            direction: "medicine",
            title: "Главные специалисты Минздрава ответят на вопросы россиян о коронавирусе",
            previewText: 'Портал "Национальные проекты Чувашской Республики" ведет хронику того, как страна справляется с новыми вызовами.',
            img: "@/assets/img/news/aaa.jpg",
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
    &__ttl-wrapper {
      display: flex;
      justify-content: space-between;
    }
    &__items {
      display: flex;
      flex-direction: column;
    }
  }
</style>
