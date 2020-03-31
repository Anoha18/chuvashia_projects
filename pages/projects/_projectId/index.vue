<template>
  <div class="page page-project">
      <section class="section page__section page__section_1 section_bg_gray">
        <div class="container page__container">
          <div class="page-project__ttl-wrapper">
            <div class="page-project__ttl-label">Федеральный проект</div>
            <h1 class="page__ttl page-project__ttl">Цифровизация услуг и формирование информационного пространства в сфере культуры</h1>
          </div>
          <CardProject img="@/assets/img/projects/1/1.jpg"/>
        </div>
      </section>

      <ProjectGeneral/>
      <ProjectBudget class="section_bg_gray-light"/>
      <ProjectHead/>
      <ProjectPlan/>
      <ProjectGallery  class="section_bg_gray-light"/>
    </div>
</template>

<script>
  import CardProject from "@/components/Card/CardProject";
  import ProjectGeneral from "@/components/Project/ProjectGeneral";
  import ProjectBudget from "@/components/Project/ProjectBudget";
  import ProjectHead from "@/components/Project/ProjectHead";
  import ProjectPlan from "@/components/Project/ProjectPlan";
  import ProjectGallery from "@/components/Project/ProjectGallery";

  export default {
    components: {
      CardProject,
      ProjectGeneral,
      ProjectBudget,
      ProjectHead,
      ProjectPlan,
      ProjectGallery
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .page-project__ttl-label {
    font-size: 1.4375rem;
    line-height: 1.4375rem;
    font-weight: 400;
    color: #FFB800;
    margin-bottom: .5rem;
  }
  .page-project__ttl {
    margin-bottom: 45px;
  }

  @media (max-width: 768px) {
    .page-project__ttl-label {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
</style>
