<template>
  <div class="card-plan">
    <div class="card-plan__ttl">
      <img src="@/assets/img/svg/arrows_left_double.svg" alt="Стрелки" class="card-plan__ttl-arrows">
      <span>{{ id }} год</span>
      <img src="@/assets/img/svg/arrows_right_double.svg" alt="Стрелки" class="card-plan__ttl-arrows">
    </div>
    <div class="card-plan__items">
      <p v-for="(item, index) in items" :key="index" class="card-plan__item">
        <span class="card-plan__item-number">{{ index+1 }}.</span> {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
  .card-plan {
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 6px 18px #E6E5F2;
  }
  .card-plan__ttl {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    color: #000;
  }
  .card-plan__ttl-arrows {
    width: 1.125rem;
    height: 1.125rem;
  }
  .card-plan__items {
    padding: 20px 20px 35px 20px;
    margin: 0;
  }
  .card-plan__item {
    font-size: .9375rem;
    line-height: 1.275rem;
    font-weight: 300;
  }
  .card-plan__item:not(:last-child) {
    margin-bottom: .8rem;
  }
  .card-plan__item-number {
    font-weight: bold;
    color: #004A90;
  }
</style>
