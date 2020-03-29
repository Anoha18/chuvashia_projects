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
          type: "demography",
          title: "Демография",
          description: "Основной целью национальных проектов является улучшение социальной и<br/>"+
            "экономической ситуации в стране, а также повышение качества жизни, комфортных<br/>"+
            "условий и возможностей реализации себя для всех граждан страны.",
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
