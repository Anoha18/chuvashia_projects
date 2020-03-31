<template>
  <div class="input">
    <p class="input__ttl">{{ title }}</p>
    <input type="text" v-model="value" placeholder="" class="input__field"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .input__ttl {
    font-size: .8125rem;
    line-height: .8125rem;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: .6rem;
  }
  .input__field {
    height: 2.8rem;
    width: 100%;
    background: #eee;
    padding: 5px 15px;
    border-radius: 6px;
  }
</style>
