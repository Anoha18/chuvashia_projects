<template>
  <div class="page page-news-item">
    <section class="section page__section">
      <div class="container page__container">
        <h1 class="page__ttl page-news-item__ttl">В 2020 году у каждого жителя республики будет возможность посадить свой кедр</h1>
        <div class="page-news-item__banner">
          <CardInfo v-bind="items[0]"/>
        </div>
        <div class="page-news-item__content">
          <p class="page-news-item__date">03.03.20</p>
          <h2 class="page-news-item__subttl">Руководитель службы по контролю и надзору в сфере охраны окружающей среды, объектов животного мира и лесных отношений Югры Сергей Пикунов  рассказал о реализации в 2020 году портфеля проектов «Экология» на территории республики.</h2>
          <div class="page-news-item__descr">
            <p>Напомним, что регион участвует в реализации 7 из 11 федеральных проектов в рамках национального проекта «Экология». Несколько пунктов плана удалось перевыполнить. В частности, планировалось очистить 248 километров береговой линии югорских рек, фактическое выполнение составило 288 километров. Дополнительно созданы еще три особо охраняемые природные территории.</p>

            <p>В части регионального проекта «Сохранение лесов» в рамках одноименного федерального проекта, входящего в национальный проект «Экология», в 2019 году достигнуты все плановые  показатели. В полном объеме освоены федеральные средства, выделенные на приобретение специализированной лесохозяйственной техники, предназначенной для проведения комплекса мероприятий по лесовосстановлению и лесоразведению.</p>

            <p>- В 2020 году югорчане будут участвовать в масштабной акции по посадке кедров. В настоящее время мы подбираем пригодные площади с тем, чтобы для каждого жителя округа нашлось место посадить свое дерево, - рассказал первый заместитель директора департамента недропользования и природных ресурсов Югры Егор Збродов.</p>

            <p>Начальник отдела коммунальной инфраструктуры департамента жилищно-коммунального комплекса и энергетики Югры Михаил Сулима проинформировал о реализации федерального проекта «Чистая вода».</p>

            <p>- По итогам проведенной инвентаризации в региональную программу отобраны населенные пункты, муниципальные образования, в которых питьевая вода не соответствует критериям качества. Были подготовлены перечни первоочередных мероприятий по обеспечению населения качественной питьевой водой, прошедших обсуждения на общественных советах при администрациях муниципальных образований. Правительством автономного округа утверждена региональная программа по повышению качества водоснабжения на период с 2019 по 2024 год, предусматривающая техническое перевооружение и реконструкцию ряда станций водоподготовки в муниципальных образованиях. Реализация этих мероприятий позволит достичь повышения доли населения автономного округа, обеспеченного качественной питьевой водой из систем централизованного водоснабжения, и достижения целевых показателей, - доложил чиновник.</p>

            <p>Михаил Сулима добавил, что в 2020 году планируется строительство десяти объектов очистных сооружений на территории региона. Сергей Пикунов напомнил о трех составляющих качества окружающей среды: атмосферный воздух, вода и отходы. По его мнению, рисков недостижения плановых показателей по воздуху в Югре нет, чему содействовала совместная с нефтедобывающими компаниями работа по утилизации попутного нефтяного газа, а также активный перевод транспорта на газомоторное топливо.</p>
            <p>- Меры по улучшению качества питьевой воды и строительству полигонов ТКО также способствуют тому, что рисков недостижения плановых цифр по этим показателям в Югре нет, - заметил руководитель Природнадзора Югры. – Поскольку деятельность по очистке сточных вод входит в перечень полномочий муниципальных образований, необходимо обратить внимание органов местного самоуправления на эту сферу деятельности.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section page__section page-news-item__others">
      <div class="container page__container">
        <h2 class="page-news-item__others-ttl">Другие события</h2>
        <div class="page-news-item__others-items-wrapper">
          <div class="page-news-item__others-items">
            <NewsItem
              v-for="item in items"
              :key="item.id"
              v-bind="item"
              class="page-news-item__others-item"
            />
          </div>
          <div class="page-news-item__others-btn">Показать еще</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import NewsItem from "@/components/NewsItem";
  import CardInfo from "@/components/Card/CardInfo";

  export default {
    components: {
      NewsItem,
      CardInfo
    },
    data() {
      return {
        items: [
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
          },
          {
            id: "5",
            direction: "medicine",
            title: "Главные специалисты Минздрава ответят на вопросы россиян о коронавирусе",
            previewText: 'Портал "Национальные проекты Чувашской Республики" ведет хронику того, как страна справляется с новыми вызовами.',
            img: "aaa.jpg",
            date: '03 март 2020',
            views: 567
          }
        ]
      }
    },
    props: {
      title: String
    }
  }
</script>

<style scoped>
  .page-news-item__ttl {
    margin-bottom: 2rem;
  }
  .page-news-item__banner {
    margin-bottom: 1.5rem;
  }
  .page-news-item__date {
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: #C4C4C4;
    margin-bottom: 1.2rem;
  }
  .page-news-item__subttl {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  .page-news-item__descr {
    font-size: 1rem;
    line-height: 1.375rem;
    font-weight: 400;
  }
  .page-news-item__descr>p:not(:last-child),
  .page-news-item__descr>div:not(:last-child) {
    margin-bottom: 1.375rem;
  }
  .page-news-item__others {
    background: #F2F2F2;
  }
  .page-news-item__others-ttl {
    font-size: 2.125rem;
    line-height: 2.75rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  .page-news-item__others-items-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-news-item__others-items {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .page-news-item__others-item:not(:last-child) {
    margin-bottom: 15px;
  }
  .page-news-item__others-btn {
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
  .page-news-item__others-btn:hover {
    background: #00203F;
    color: #fff;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .page-news-item__others-ttl {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
</style>

