<template>
  <header class="hdr">
    <div class="container hdr__container">
      <div class="hdr__bb">
        <div class="hdr__b">
          <Logo/>
        </div>
        <div class="hdr__b">
          <Nav />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '@/components/Logo';
  import Nav from '@/components/Nav';

  export default {
    components: {
      Logo,
      Nav
    }
  }

</script>

<style scoped>
  .hdr {
    height: 4.2rem;
    background: #00203F;
  }
  .hdr__container {
    height: 100%;
  }
  .hdr__bb {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .hdr__b {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .hdr__b_2 {
    justify-content: flex-end;
  }
</style>
