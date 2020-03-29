<template>
  <div class="search">
    <svg class="search__icon">
      <use xlink:href="@/assets/img/svg/sprite.svg#loupe" />
    </svg>
    <input type="text" value="searchTerm" placeholder="Текст для поиска" class="search__field"></input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    };
  }
};
</script>
<style scoped>
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px;
    background: #eee;
    &__icon {
      width: 24px;
      height: 24px;
      fill: #0D1C2E;
      margin-right: 6px;
    }
    &__field {
      ::-webkit-input-placeholder {
        color: #999;
      }
      :-ms-input-placeholder {
        color: #999;
      }
      ::-moz-placeholder {
        color: #999;
        opacity: 1;
      }
      :-moz-placeholder {
        color: #999;
        opacity: 1;
      }
    }
  }
</style>
