<template>
  <div class="page page-project">
    <section class="section page-project__section_o_1">
      <SlideMain v-bind="slide"/>
    </section>
  </div>
</template>

<script>
  import SlideMain from "@/components/Slide/SlideMain";

  export default {
    components: {
      SlideMain
    },
    data() {
      return {
        slide: {
          type: "culture",
          title: "Культура",
          description: "Сделать культуру доступной не только в крупных городах, но и в отдаленных населенных<br/>" +
            " пунктах по всей стране. Увеличить посещаемость учреждений культуры на 15%, а число<br/>" +
            " обращений к культурным цифровым ресурсам — пять раз. Поддерживать творческие<br/>" +
            " инициативы в регионах и создавать перспективный кадровый резерв. Наполнять новым<br/>" +
            " смысловым содержанием сельские учреждения культуры, культурно-досуговые учреждения, библиотеки",
          quoteText: "Национальные проекты построены вокруг человека, ради достижения<br/>"+
            "нового качества жизни для всех поколений, которое может быть<br/>"+
            "обеспечено только при динамичном развитии России",
          quoteAuthor: "В.В.Путин"
        }
      }
    }
  }
</script>

<style scoped>
  .page-project__section_o_1 {
    height: calc(100vh - 4.2rem);
  }
</style>
