<template>
  <div :class="'btn btn_t_' + type + ' ' + 'btn_s_' + size + ' ' + className">{{ text }} <slot/> </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'l'
    },
    text: String,
    icon: String,
    className: String
  }
};
</script>

<style scoped>
  .btn {
    font-size: .8125rem;
    line-height: .8125rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: .1s;
  }
  .btn_s_l {
    padding: 10px 40px;
  }
  .btn_t_primary {
    background: #FFB800;
    color: #000;
  }
  .btn_t_primary:hover {
    background: #f5b100;
  }
</style>
