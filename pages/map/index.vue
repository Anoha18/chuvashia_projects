<template>
  <div class="page page-map">
    <section class="section page__section page-map__section">
      <div class="container">
        <h1 class="page__ttl page-map__ttl">Карта</h1>
        <div class="page-map__panel">
          <div class="page-map__panel-selects">
            <Select class="page-map__panel-select" title="Национальный проект" :items="['Все', 'Образование', 'Здравоохранение', 'Демография', 'Культура']"/>
            <Select class="page-map__panel-select" title="Район" :items="['Все', 'Чебоксарский', 'Канашский', 'Цивильский', 'Ядринский']"/>
          </div>
          <Button text="Найти" class="page-map__panel-btn"/>
        </div>
      </div>
      <div class="page-map__map">
        <yandex-map :coords="coords" :zoom="13">
          <ymap-marker
            :coords="coords1"
            :icon="markerIconEducation"
            :balloon-template="balloonTemplate1"
            marker-id="1"
            hint-content="Мероприятие 1"
          />
          <ymap-marker
            :coords="coords2"
            :icon="markerIconCulture"
            :balloon-template="balloonTemplate2"
            marker-id="2"
            hint-content="Мероприятие 2"
          />
          <ymap-marker
            :coords="coords3"
            :icon="markerIconEducation"
            :balloon-template="balloonTemplate3"
            marker-id="3"
            hint-content="Мероприятие 3"
          />
          <ymap-marker
            :coords="coords4"
            :icon="markerIconMedicine"
            :balloon-template="balloonTemplate4"
            marker-id="4"
            hint-content="Мероприятие 4"
          />
          <ymap-marker
            :coords="coords5"
            :icon="markerIconMedicine"
            :balloon-template="balloonTemplate5"
            marker-id="5"
            hint-content="Мероприятие 5"
          />
          <ymap-marker
            :coords="coords6"
            :icon="markerIconDemography"
            :balloon-template="balloonTemplate6"
            marker-id="6"
            hint-content="Мероприятие 6"
          />
          <ymap-marker
            :coords="coords7"
            :icon="markerIconCulture"
            :balloon-template="balloonTemplate7"
            marker-id="7"
            hint-content="Мероприятие 7"
          />
        </yandex-map>
      </div>
    </section>
  </div>
</template>

<script>
  import Select from '@/components/Select';
  import Button from '@/components/Button';

  export default {
    components: {
      Select,
      Button
    },
    computed: {
      balloonTemplate1() {
        return `
          <h2>Мероприятие 1</h2>
          <img src="http://via.placeholder.com/350x150">
        `
      },
      balloonTemplate2() {
        return `
          <h2>Мероприятие 2</h2>
          <img src="http://via.placeholder.com/350x150">
        `
      },
      balloonTemplate3() {
        return `
          <h2>Мероприятие 3</h2>
          <img src="http://via.placeholder.com/350x150">
        `
      },
      balloonTemplate4() {
        return `
          <h2>Мероприятие 4</h2>
          <img src="http://via.placeholder.com/350x150">
        `
      },
      balloonTemplate5() {
        return `
          <h2>Мероприятие 5</h2>
          <img src="http://via.placeholder.com/350x150">
        `
      },
      balloonTemplate6() {
        return `
          <h2>Мероприятие 6</h2>
          <img src="http://via.placeholder.com/350x150">
        `
      },
      balloonTemplate7() {
        return `
          <h2>Мероприятие 7</h2>
          <img src="http://via.placeholder.com/350x150">
        `
      }
    },
    data: () => ({
      coords: [ 56.146277, 47.251079 ],
      coords1: [ 56.146277, 47.251079 ],
      coords2: [ 56.145710, 47.224291 ],
      coords3: [ 56.148238, 47.259379 ],
      coords4: [ 56.114676, 47.219934 ],
      coords5: [ 56.132374, 47.152381 ],
      coords6: [ 56.149381, 47.196173 ],
      coords7: [ 56.131666, 47.257403 ],
      markerIconEducation: {
        layout: 'default#imageWithContent',
        imageHref: require('~/assets/img/svg/education.svg'),
        imageSize: [43, 43],
        imageOffset: [0, 0]
      },
      markerIconMedicine: {
        layout: 'default#imageWithContent',
        imageHref: require('~/assets/img/svg/medicine.svg'),
        imageSize: [43, 43],
        imageOffset: [0, 0]
      },
      markerIconDemography: {
        layout: 'default#imageWithContent',
        imageHref: require('~/assets/img/svg/demography.svg'),
        imageSize: [43, 43],
        imageOffset: [0, 0]
      },
      markerIconCulture: {
        layout: 'default#imageWithContent',
        imageHref: require('~/assets/img/svg/culture.svg'),
        imageSize: [43, 43],
        imageOffset: [0, 0]
      }
    }),
  }
</script>

<style scoped>
  .page-map__ttl {
    margin-bottom: 2rem;
  }
  .page-map__section {
    /*height: calc(100vh - 4.2rem);*/
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
  .page-map__panel {
    height: 60px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 2rem;
  }
  .page-map__panel-selects {
    display: flex;
    align-items: center;
    margin-right: 25px;
  }
  .page-map__panel-select {
    width: 320px;
    max-width: 100%;
  }
  .page-map__panel-select:not(:last-child) {
    margin-right: 25px;
  }
  .page-map__panel-btn {
    height: 51px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    border-radius: 30px;
  }
  .page-map__map {
    width: 100%;
    /*height: 550px;*/
    height: 100vh;
    /*flex-grow: 1;*/
  }
  .ymap-container {
    height: 100%;
  }

  @media (max-width: 768px) {
    .page-map__panel {
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    .page-map__panel-selects {
      width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }
    .page-map__panel-select {
      width: calc(50% - 5px);
    }
    .page-map__panel-select:not(:last-child) {
      margin-right: 10px;
    }
    .page-map__panel-btn {
      padding: 8px 25px;
      height: 45px;
    }
  }
</style>
