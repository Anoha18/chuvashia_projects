<template>
  <div class="page page-project">
    <section class="section page-project__section_o_1">
      <SlideMain v-bind="slide" page="project"/>
    </section>
    <section class="section page-project__about">
      <div class="container">
        <h2 class="section__ttl page-project__about-ttl">О проекте</h2>
        <div class="page-project__about-content">
          <div class="page-project__about-paragraph">Разработка и утверждение методик показателей нацпроекта системы образования начнётся в I квартале 2019 года. Подготовительная работа Минпросвещения России и Минобрнауки России по формированию целевых моделей по ключевым мероприятиям нацпроекта будет проведена до 7 мая 2019 года. Об этом заявила министр просвещения РФ Ольга Васильева на Совете при Президенте Российской Федерации по стратегическому развитию и национальным проектам, который состоялся в декабре 2018 года. В феврале 2019 года Васильева значительно уточнила задачи проекта и указала, в частности, что обновлять нужно не саму систему образования, а её содержание.</div>

          <div class="page-project__about-paragraph">Доработанные версии паспортов девяти федеральных проектов системы образования прошли многостороннюю экспертизу, а также процедуру согласования. Они будут внесены в систему электронного мониторинга – подсистему «Электронного бюджета» Минфина России.</div>

          <div class="page-project__about-paragraph">
            <p>Всего в него включены 10 подразделов — федеральных проектов:</p>
            <ul class="list">
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Современная школа;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Успех каждого ребенка;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Поддержка семей, имеющих детей;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Цифровая образовательная среда;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Учитель будущего;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Молодые профессионалы (повышение конкурентоспособности профобразования);
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Новые возможности для каждого;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Социальная активность;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Экспорт образования;
              </li>
              <li class="list__item">
                <svg class="list__item-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#power"/>
                </svg>
                Социальные лифты для каждого.
              </li>
            </ul>
            <p>Паспорт нацпроекта был утвержден 3 сентября 2018 года президиумом Совета при президенте РФ по стратегическому развитию и национальным проектам, реализация началась 1 января 2019 года. Куратор нацпроекта — вице-премьер РФ Татьяна Голикова, руководитель — министр просвещения РФ Ольга Васильева.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section page-project__projects">
      <div class="container">

      </div>
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
          type: "education",
          title: "Образование",
          indicators: [
            {
              icon: "briefcase",
              text: "Бюджет  проекта<br/>" +
                "784,5 млрд руб."
            },
            {
              icon: "check_circle",
              text: "Количество проектов<br/>" +
                "10 федеральных проектов"
            },
          ],
          hasButton: false,
          description: "Войти в десятку стран — лидеров по качеству общего образования, а также присутствию вузов в топ-500<br/>" +
            " мировых рейтингов. Сделать высшее образование в России привлекательным для иностранцев и вдвое<br/>" +
            " увеличить число заграничных абитуриентов. Подключить все без исключения школы в стране к<br/>" +
            " высокоскоростному интернету. Дать возможность гражданам России получать непрерывное образование, а<br/>" +
            "для учителей создать систему профессионального роста."
        },
      }
    }
  }
</script>

<style scoped>
  .page-project__section_o_1 {
    height: calc(100vh - 4.2rem);
  }
  .page-project__about {
    font-size: .9375rem;
    line-height: 1.425rem;
    font-weight: 400;
    padding: 55px 0;
  }
  .page-project__about-paragraph:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  .list {
    margin: 1.2rem 0;
  }
  .list__item {
    display: flex;
    align-items: center;
  }
  .list__item:not(:last-child) {
    margin-bottom: 1rem;
  }
  .list__item-icon {
    width: 20px;
    height: 20px;
    margin-right: 7px;
  }
</style>
