<template>
  <footer class="ftr">
    <div class="container ftr__container">
      <div class="ftr__bb">
        <div class="ftr__b ftr__b_1">
          <Logo type="ftr"/>
<!--          <Button className="ftr__btn" text="Обратная связь"/>-->
        </div>
        <div class="ftr__b"></div>
        <div class="ftr__b"></div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Logo from '@/components/Logo';
  import Button from '@/components/Button';

  export default {
    components: {
      Logo,
      Button
    }
  }
</script>

<style scoped>
  .ftr {
    height: 6rem;
    background: #00203F;
  }
  .ftr__container {
    height: 100%;
  }
  .ftr__bb {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ftr__b {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ftr__b_1 {
    align-items: flex-start;
  }
  .ftr__btn {
    margin-left: calc(2.7rem + 9px);
  }
</style>

