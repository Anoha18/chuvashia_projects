<template>
  <div class="select">
    <p class="select__ttl">{{ title }}</p>
    <div class="select__list">
      <div :class="'select__value select__value_theme_'+theme" @click="isListActive = !isListActive">
        <p :class="'select__value-text' + (typeof activeItem === 'number' ? '' : ' select__value-text_default')">{{ items[activeItem] || defaultValue }}</p>
        <svg class="select__value-icon">
          <use xlink:href="@/assets/img/svg/sprite.svg#arrow_down" />
        </svg>
      </div>
      <div v-if="isListActive" class="select__items">
        <div v-for="(item, index) in items" @click="() => { isListActive = !isListActive; activeItem = index; }" :class="'select__item select__item_theme_'+theme">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isListActive: false,
        activeItem: null
      }
    },
    props: {
      title: {
        type: String,
        required: false
      },
      items: {
        type: Array,
        default: []
      },
      defaultValue: {
        type: String,
        default: 'Все'
      },
      theme: {
        type: String,
        default: 'default'
      }
    }
  }
</script>

<style scoped>
  .select__ttl {
    font-size: .8125rem;
    line-height: 1rem;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: .5rem;
  }

  .select__list {
    position: relative;
    border-radius: 6px;
  }
  .select__value {
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px 5px 20px;
    border-radius: inherit;

    font-size: 1rem;
    line-height: 1rem;
    color: #000;
    cursor: pointer;
  }
  .select__value_theme_default {
    background: #EEEEEE;
  }
  .select__value_theme_light {
    background: #FCFCFC;
  }
  .select__value-text_default {
    color: #999999;
  }
  .select__value-icon {
    width: 24px;
    height: 24px;
    fill: #0D1C2E;
  }
  .select__items {
    z-index: 2;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    overflow: hidden;
    font-size: .9375rem;
  }
  .select__item {
    height: 2.8rem;
    display: flex;
    align-items: center;
    padding: 5px 15px;
    cursor: pointer;
    transition: .1s;
  }
  .select__item_theme_default {
    background: #EEEEEE;
  }
  .select__item_theme_light {
    background: #FCFCFC;
  }
  .select__item:hover {
    background: #d7d7d7;
  }

  @media (max-width: 768px) {
    .select__value {
      font-size: .9375rem;
      line-height: .9375rem;
    }
    .select__item {
      font-size: .875rem;
      line-height: .875rem;
    }
  }
</style>
