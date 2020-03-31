<template>
  <div class="filter">
    <div class="filter__ttl-wrapper" @click="isFilterActive = !isFilterActive">
      <p class="filter__ttl">Фильтр</p>
      <svg :class="'filter__ttl-icon' + (isFilterActive ? ' filter__ttl-icon_d_up' : '')">
        <use xlink:href="@/assets/img/svg/sprite.svg#arrow_down" />
      </svg>
    </div>
    <div v-if="isFilterActive" class="filter__panel">
      <div class="filter__params">
        <div class="filter__params-sorts">
          <Select title="Национальный проект" defaulValue="Все" :items="['Все', 'Образование', 'Здравоохранение', 'Демография', 'Культура']" class="filter__sort"/>
          <Select title="Район" defaulValue="Все" :items="['Все', 'Чебоксарский', 'Канашский', 'Цивильский', 'Ядринский']" class="filter__sort"/>
        </div>
        <div class="filter__params-inputs">
          <Input title="Дата от" class="filter__input" />
          <Input title="Дата до" class="filter__input" />
        </div>
      </div>
      <Search class="filter__search" />
      <div class="filter__btns">
        <Button type="secondary" text="Сбросить" size="m" :isRounded="true" class="filter__btns-btn"/>
        <Button text="Найти" size="m" :isRounded="true" class="filter__btns-btn"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Select from '@/components/Select';
  import Input from '@/components/Input';
  import Search from '@/components/Search';
  import Button from '@/components/Button';

  export default {
    components: {
      Select,
      Input,
      Search,
      Button
    },
    data() {
      return {
        isFilterActive: true
      }
    }
  }
</script>

<style scoped>
  .filter {
    background: #fff;
    padding: 15px 20px;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .filter__ttl-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .filter__ttl {
    font-size: 1.0625rem;
    line-height: 1.0625rem;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    margin-right: 3px;
  }
  .filter__ttl-icon {
    width: 1.25rem;
    height: 1.25rem;
    fill: #231F20;
    transition: .3s;
  }
  .filter__ttl-icon_d_up {
    transform: rotate(180deg);
  }
  .filter__panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
  }
  .filter__params {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: .7rem;
  }
  .filter__params-sorts,
  .filter__params-inputs {
    display: flex;
    align-items: center;
  }
  .filter__params-sorts {
    align-items: flex-end;
    margin-right: 20px;
  }
  .filter__sort {
    width: 320px;
    max-width: 100%;
  }
  .filter__sort:not(:last-child) {
    margin-right: 20px;
  }
  .filter__input {
    flex-grow: 1;
  }
  .filter__input:not(:last-child) {
    margin-right: 15px;
  }
  .filter__search {
    width: 100%;
    border-radius: 6px;
    margin-bottom: .7rem;
  }
  .filter__btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .filter__btns-btn:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .filter__ttl {
      font-size: .9375rem;
      line-height: .9375rem;
    }
    .filter__ttl-icon {
      width: 1rem;
      height: 1rem;
    }
    .filter__params-sorts {
      width: 100%;
      margin-right: 10px;
    }
    .filter__sort {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 767px) {
    .filter__ttl {
      font-size: .9375rem;
      line-height: .9375rem;
    }
    .filter__ttl-icon {
      width: 1rem;
      height: 1rem;
    }
    .filter__panel {

    }
    .filter__params {
      flex-direction: column;
    }
    .filter__params-sorts {
      width: 100%;
      margin-right: 0;
      margin-bottom: .7rem;
    }
    .filter__sort {
      width: calc(50% - 10px);
    }
  }
</style>
