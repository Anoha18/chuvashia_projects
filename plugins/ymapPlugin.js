import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: 'd25978d2-e6cd-4635-a654-499b6a9d0545',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
};

Vue.use(YmapPlugin, settings);
