<template>
  <div class="input">
    <p class="input__ttl">
      {{ title }}
    </p>
    <input type="text" value="value" placeholder="" class="input__field">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: ''
    };
  }
};
</script>

<style scoped>
  .input__ttl {
    font-size: .75rem;
    line-height: .75rem;
    font-weight: 400;
    color: #000;
    margin-bottom: 1rem;
  }
  .input__field {
    height: 42px;
    background: #eee;
    padding: 5px 10px;
    border-radius: 6px;
  }
</style>
