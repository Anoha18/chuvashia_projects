<template>
  <div class="page page-main">
    <full-page :options="options" id="fullpage">
      <div class="section">
        <section v-for="(slide, index) in slides" class="slide">
          <SlideMain
            v-bind="slide"
            :slidesCount="slides.length"
            :slideIndex="index"
          />
        </section>
      </div>
    </full-page>
  </div>
</template>

<script>
  import Button from '@/components/Button';
  import SlideMain from "@/components/Slide/SlideMain";

  export default {
    components: {
      Button,
      SlideMain
    },
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
          navigation: false,
          controlArrows: false,
          loopHorizontal: false,
          onSlideLeave: function (anchor_link, index, current_index, direction, next_index){
            // this.updateScreen(next_index);
          },
          onLeave: function(current_index, next_index, direction){
            // this.updateScreen(next_index-1);
          }
        },
        slides: [
          {
            type: "projects",
            title: "Реализация национальных проектов <br class='mobile-hide'/>"+
              " в Чувашской Республике",
            description: "Основной целью национальных проектов является улучшение социальной и<br class='mobile-hide'/>"+
              " экономической ситуации в стране, а также повышение качества жизни, комфортных<br class='mobile-hide'/>"+
              " условий и возможностей реализации себя для всех граждан страны.",
            quoteText: "Национальные проекты построены вокруг человека, ради достижения<br class='mobile-hide'/>"+
              " нового качества жизни для всех поколений, которое может быть<br class='mobile-hide'/>"+
              " обеспечено только при динамичном развитии России",
            quoteAuthor: "В.В.Путин"
          },
          {
            type: "education",
            title: "Образование",
            indicators: [
              {
                icon: "briefcase",
                text: "Бюджет  проекта<br class='mobile-hide'/>" +
                  " 784,5 млрд руб."
              },
              {
                icon: "check_circle",
                text: "Количество проектов<br class='mobile-hide'/>" +
                  " 10 федеральных проектов"
              },
            ],
            description: "Войти в десятку стран — лидеров по качеству общего образования, а также присутствию вузов в топ-500<br class='mobile-hide'/>" +
              " мировых рейтингов. Сделать высшее образование в России привлекательным для иностранцев и вдвое<br class='mobile-hide'/>" +
              " увеличить число заграничных абитуриентов. Подключить все без исключения школы в стране к<br class='mobile-hide'/>" +
              " высокоскоростному интернету. Дать возможность гражданам России получать непрерывное образование, а<br class='mobile-hide'/>" +
              " для учителей создать систему профессионального роста."
          },
          {
            type: "medicine",
            title: "Здравоохранение",
            description: "Основной целью национальных проектов является улучшение социальной и<br class='mobile-hide'/>"+
              " экономической ситуации в стране, а также повышение качества жизни, комфортных<br class='mobile-hide'/>"+
              " условий и возможностей реализации себя для всех граждан страны.",
            quoteText: "Национальные проекты построены вокруг человека, ради достижения<br class='mobile-hide'/>"+
              " нового качества жизни для всех поколений, которое может быть<br class='mobile-hide'/>"+
              " обеспечено только при динамичном развитии России",
            quoteAuthor: "В.В.Путин"
          },
          {
            type: "demography",
            title: "Демография",
            description: "Основной целью национальных проектов является улучшение социальной и<br class='mobile-hide'/>"+
              " экономической ситуации в стране, а также повышение качества жизни, комфортных<br class='mobile-hide'/>"+
              " условий и возможностей реализации себя для всех граждан страны.",
            quoteText: "Национальные проекты построены вокруг человека, ради достижения<br class='mobile-hide'/>"+
              " нового качества жизни для всех поколений, которое может быть<br class='mobile-hide'/>"+
              " обеспечено только при динамичном развитии России",
            quoteAuthor: "В.В.Путин"
          },
          {
            type: "culture",
            title: "Культура",
            description: "Сделать культуру доступной не только в крупных городах, но и в отдаленных населенных<br class='mobile-hide'/>" +
              " пунктах по всей стране. Увеличить посещаемость учреждений культуры на 15%, а число<br class='mobile-hide'/>" +
              " обращений к культурным цифровым ресурсам — пять раз. Поддерживать творческие<br class='mobile-hide'/>" +
              " инициативы в регионах и создавать перспективный кадровый резерв. Наполнять новым<br class='mobile-hide'/>" +
              " смысловым содержанием сельские учреждения культуры, культурно-досуговые учреждения, библиотеки",
            quoteText: "Национальные проекты построены вокруг человека, ради достижения<br class='mobile-hide'/>"+
              " нового качества жизни для всех поколений, которое может быть<br class='mobile-hide'/>"+
              " обеспечено только при динамичном развитии России",
            quoteAuthor: "В.В.Путин"
          }
        ]
      }
    },
    methods: {
      afterLoad() {
        window.addEventListener('wheel', event => {
          const delta = Math.sign(event.deltaY);
          if (delta > 0) {
            fullpage_api.moveSlideRight();
          } else {
            fullpage_api.moveSlideLeft();
          }
        });
      },
      updateScreen(next_index) {
        // $('body').css({'background-color': '#'+$('section:eq('+next_index+')').data('color')});
        // $('header').attr('data-slide', $('section:eq('+next_index+')').attr('id'));
        // $('footer .pagination ul li').each(function(k,v){
        //   if (k <= next_index) $(this).addClass('active');
        //   else $(this).removeClass('active');
        // });
        // $('section.init').removeClass('init');
        // setTimeout(function(){
        //   $('section:eq('+next_index+')').addClass('init');
        //   if ($('section.active #timer_circle').length > 0) {
        //     circle_interval = setInterval(circle_timer,15)
        //   } else {
        //     clearInterval(circle_interval);
        //   }
        // },500);

      }
    },
    layout: 'main'
  }
</script>
