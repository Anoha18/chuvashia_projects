<template>
  <section class="section page__section project-general">
    <div class="container page__container">
      <h2 class="section__ttl project-general__ttl">Цели</h2>
      <p>Увеличение числа обращений к цифровым ресурсам в сфере культуры в 5 раз.</p>
      <div class="project-general__methods">
        <p class="project-general__methods-subttl">Методы</p>
        <ul class="page-project__methods-list">
          <li>Создание виртуальных концертных залов</li>
          <li>Внедрение цифровых технологий в культурное пространство регион</li>
        </ul>
      </div>
      <div class="project-general__tasks">
        <h2 class="section__ttl project-general__ttl">Задачи</h2>
        <p class="project-general__tasks-subttl">Основными задачами проекта являются:</p>
        <ol class="page-project__tasks-list">
          <li>На основе методических рекомендаций определить тип и расположение концертных залов.</li>
          <li>Организация онлайн-трансляций мероприятий, размещаемых на портале «Культуры ЧР».</li>
          <li>Определение рейтинга популярности культурных мероприятий, для их трансляции.</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .project-general {
    font-size: 1.25rem;
  }
  .project-general__ttl {
    margin-bottom: .5rem;
  }
  .project-general__methods {
    margin-bottom: 2rem;
  }
  .project-general__methods-subttl {
    font-weight: 500;
    margin-top: 5px;
  }
  .project-general__tasks-subttl {
    margin-bottom: 3px;
  }
  .page-project__methods-list,
  .page-project__tasks-list {
    padding-left: 20px;
  }
</style>
