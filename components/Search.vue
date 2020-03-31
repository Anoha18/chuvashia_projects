<template>
  <div class="search">
    <svg class="search__icon">
      <use xlink:href="@/assets/img/svg/sprite.svg#loupe" />
    </svg>
    <input type="text" v-model="searchTerm" placeholder="Текст для поиска" class="search__field" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTerm: ''
      }
    }
  }
</script>

<style scoped>
  .search {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 9px;
    background: #eee;
    height: 2.8rem;
  }
  .search__icon {
    width: 24px;
    height: 24px;
    fill: #0D1C2E;
    margin-right: 6px;
  }
  .search__field {
    background: transparent;
    flex-grow: 1;
  }
  .search__field::-webkit-input-placeholder {
    color: #999;
  }
  .search__field:-ms-input-placeholder {
    color: #999;
  }
  .search__field::-moz-placeholder {
    color: #999;
    opacity: 1;
  }
  .search__field:-moz-placeholder {
    color: #999;
    opacity: 1;
  }
</style>
