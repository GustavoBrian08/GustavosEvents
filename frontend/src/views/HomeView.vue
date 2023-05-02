<template>
  <div>
    <div id="bg-home">
      <div class="position-absolute top-0 start-0 bottom-0 right-0 w-100"></div>
    </div>
    <div class="position-absolute top-0 start-0 bottom-0 right-0 w-100 d-flex flex-column justify-content-between">
      <HomeNav />
      <HomeMain />
      <footer class="w-100 d-flex justify-content-center">
        <p class="text-light">Made width ❤ by Gustavo Brian</p>
      </footer>
    </div>
  </div>
</template>

<script>
  import HomeNav from '@/components/HomeNav.vue';
  import HomeMain from '@/components/HomeMain.vue';

export default {
  name: 'HomeView',
  components: {
    HomeNav,
    HomeMain
  }
}
</script>

<style scoped>
  #bg-home {
    height: 100vh;
    background-image: url("../../public/img/gustavo\ events.png");
    background-size: cover;
    background-position: center;
  }

  #bg-home > div {
    background-color: rgba(19, 0, 37, 0.429);
  }
</style>
