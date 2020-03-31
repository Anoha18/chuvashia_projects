<template>
  <div :class="'btn' + ' btn_t_' + type + ' btn_s_' + size + (isRounded ? ' btn_rounded' : '')">{{ text }}</div>
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
      isRounded: Boolean,
      text: String,
      icon: String
    }
  }
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
  .btn_s_m {
    padding: 15px 30px;
  }
  .btn_rounded {
    border-radius: 50px;
  }
  .btn_t_primary {
    background: #FFB800;
    color: #000;
  }
  .btn_t_primary:hover {
    background: #f5b100;
  }
  .btn_t_secondary {
    background: rgba(255, 184, 0, 0.15);
    color: #FFB800;
  }
  .btn_t_secondary:hover {
    background: #FFB800;
    color: #000;
  }
</style>
