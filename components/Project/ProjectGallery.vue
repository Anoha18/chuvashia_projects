<template>
  <div class="section page__section project-gallery">
    <div class="container page__container">
      <div class="section__ttl project-gallery__ttl">
        Галерея
      </div>
      <div class="project-gallery__main">
        <img :src="require('@/assets/img/projects/1/gallery/' + currentImage + '.jpg')" alt="Фото">
      </div>
      <div class="project-gallery__thumbs">
        <div v-for="(img, index) in images" class="project-gallery__thumb" :key="index" @click="currentImage = img">
          <img :src="require('@/assets/img/projects/1/gallery/'+ img +'.jpg')" alt="Фото">
        </div>
        <div class="project-gallery__thumbs-arrow">
          <img src="@/assets/img/svg/arrow_right_circle.svg" alt="Стрелка">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: '1',
      images: ['1', '2', '3', '4', '5']
    };
  }
};
</script>
<style>
  .project-gallery {
    display: flex;
    flex-direction: column;
  }
  .project-gallery__main {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-gallery__thumbs {
    display: flex;
  }
  .project-gallery__thumb {
    cursor: pointer;
    border: 5px solid transparent;
    width: calc(100%/6 - 5px);
  }
  .project-gallery__thumb:hover {
    border-color: #FFB800;
  }
  .project-gallery__thumbs-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background: #fff;
    cursor: pointer;
  }
  .project-gallery__thumbs-arrow:hover {
    background: #e7e7e7;
  }
</style>
