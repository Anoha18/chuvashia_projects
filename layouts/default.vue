<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
  .page__container {
    /*padding-top: 50px;*/
  }
  .page__ttl {
    font-size: 2.25rem;
    line-height: 2.625rem;
    font-weight: 400;
    color: #000;
  }
  .page__section {
    /*height: 100vh;*/
    padding: 45px 0;
  }
  .page__section_1 {
    /*height: calc(100vh - 4.2rem - 50px);*/
  }
  .section_bg_gray {
    background: #E5E5E5;
  }
  .section_bg_gray-light {
    background: #F5F5F5;
  }

  .section__ttl {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 400;
    color: #000;
    margin-bottom: 2.3rem;
  }
</style>
