<template>
  <div class="filter">
    <div class="filter__ttl-wrapper">
      <p class="filter__ttl">
        Фильтр
      </p>
      <svg class="filter__ttl-icon">
        <use xlink:href="@/assets/img/svg/sprite.svg#arrow-down" />
      </svg>
    </div>
    <div class="filter__params">
      <Select title="Национальный проект" />
      <Select title="Район" />
      <Input title="Дата от" />
      <Input title="Дата до" />
    </div>
    <div class="filter__search">
      <Search />
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select';
import Input from '@/components/Input';
import Search from '@/components/Search';

export default {
  components: {
    Select,
    Input,
    Search
  }
};
</script>

<style scoped lang="scss">
  .filter {
    background: #fff;
    padding: 15px 20px;
    border-radius: 9px;
    &__ttl {
      &-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }
      font-size: 1.5625rem;
      line-height: 1.5625rem;
      font-weight: bold;
      color: #000;
      text-transform: uppercase;
      &-icon {
        width: 24px;
        height: 24px;
        fill: #231F20;
      }
    }
  }
</style>
