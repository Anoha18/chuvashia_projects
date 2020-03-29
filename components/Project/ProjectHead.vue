<template>
  <section class="section page__section project-head">
    <div class="container page__container">
      <h2 class="section__ttl project-head__ttl">
        Руководитель регионального проекта
      </h2>
      <div class="project-head__bb">
        <div class="project-head__img-wrapper">
          <img src="@/assets/img/projects/1/2.png" alt="Фото">
        </div>
        <div class="project-head__info">
          <p class="project-head__info-row">
            <span class="project-head__info-param">ФИО: </span><span>Иванов Иван Иванович</span>
          </p>
          <p class="project-head__info-row">
            <span class="project-head__info-param">Должность: </span>руководитель департамента информатизации и связи Чувашской Республики
          </p>
          <p class="project-head__info-row">
            <span class="project-head__info-param">Другие проекты: </span>
          </p>
          <ul class="project-head__info-projects">
            <li>Развитие системы оказания первичной медико-санитарной помощи</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .project-head__ttl {
    margin-bottom: 3rem;
  }
  .project-head__bb {
    display: flex;
    align-items: center;
  }
  .project-head__img-wrapper {
    margin-right: 50px;
  }
  .project-head__info {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
  .project-head__info-param {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .project-head__info-projects {
    list-style: none;
  }
  .project-head__info-row:not(:last-child) {
    margin-bottom: 5px;
  }
</style>
