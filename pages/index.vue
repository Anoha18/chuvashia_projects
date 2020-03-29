<script>
export default {
  head() {
    return {
      title: `Главная | ${process.env.APP_NAME}`
    };
  }
};
</script>

<template>
  <div>
    <full-page :options="options" id="fullpage">
      <div class="section">
        <h3>Section 1</h3>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
        }
      }
    },
    methods: {
      afterLoad() {
        window.addEventListener('wheel', event => {
          const delta = Math.sign(event.deltaY);
          if (delta > 0) {
            fullpage_api.moveSlideRight();
          } else {
            fullpage_api.moveSlideLeft();
          }
        });
      },
      handleClick() {
        console.log('move');
        fullpage_api.moveSectionDown();
      }
    },
    layout: 'main'
  }
</script>

