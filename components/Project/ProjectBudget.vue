<template>
  <section class="section page__section project-budget">
    <div class="container page__container">
      <h2 class="section__ttl">
        Бюджет
      </h2>
      <div class="project-budget__bb">
        <div class="project-budget__diagram">
          <svg width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="142" cy="142" r="142" fill="#4FA2F0" />
            <path d="M284 142C284 119.384 278.598 97.0943 268.243 76.9874C257.889 56.8806 242.881 39.5378 224.47 26.4028C206.059 13.2678 184.776 4.7204 162.394 1.47218C140.012 -1.77605 117.178 0.368832 95.7928 7.72828C74.4072 15.0877 55.0889 27.4489 39.4458 43.7827C23.8027 60.1166 12.2873 79.9507 5.85818 101.634C-0.570922 123.318 -1.72776 146.223 2.48395 168.444C6.69566 190.665 16.1541 211.558 30.0719 229.385L142 142H284Z" fill="#004A90" />
            <path d="M284 142C284 129.59 282.373 117.234 279.161 105.248L142 142H284Z" fill="#800E0E" />
          </svg>
        </div>
        <div class="project-budget__content">
          <div class="project-budget__descr">
            <p>Бюджет субъекта Российской Федерации: 2,61 млн руб.</p>
            <p class="project-budget__descr-ttl">
              Финансовое обеспечение:
            </p>
            <p>1.	Создание виртуальных концертных залов (0,11 млн руб.)</p>
            <p>2.	Внедрение цифровых технологий в культурное пространство региона (2.50 млн руб.)</p>
          </div>
          <div class="project-budget__legend">
            <div v-for="(item, index) in legend" :key="index" class="project-budget__legend-row">
              <div :class="'project-budget__legend-color project-budget__legend-color_c_' + item.color.slice(1)" />
              <p class="project-budget__legend-ttl">
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      legend: [
        { color: '#004A90', title: 'Государственный бюджет' },
        { color: '#4FA2F0', title: 'Бюджет республики' },
        { color: '#800E0E', title: 'Прочие источники' }
      ]
    };
  }
};
</script>

<style>
  .project-budget__bb {
    display: flex;
    align-items: center;
  }
  .project-budget__diagram {
    margin-right: 75px;
  }
  .project-budget__descr {
    font-size: 1.375rem;
    margin-bottom: 2rem;
  }
  .project-budget__descr-ttl {
    font-weight: 500;
  }
  .project-budget__legend-row {
    display: flex;
    align-items: center;
  }
  .project-budget__legend-row:not(:last-child) {
    margin-bottom: 15px;
  }
  .project-budget__legend-color {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .project-budget__legend-color_c_004A90 {
    background: #004A90;
  }
  .project-budget__legend-color_c_4FA2F0 {
    background: #4FA2F0;
  }
  .project-budget__legend-color_c_800E0E {
    background: #800E0E;
  }
  .project-budget__legend-ttl {
    font-size: 1.125rem;
    line-height: 1.125rem;
  }
</style>
