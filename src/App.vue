<template>
  <div class="container position-relative" id="app">
    <Header/>
    <section>
      <Slider/>
    </section>
    <section>
      <Proccess/>
    </section>
    <Help/>
    <ClientsOpition/>
    <Download/>
    <BlogPosts/>
    <Register/>
    <Footer/>
    <button class="position-fixed scroll-up-btn" @click="$router.push({hash: '#app'})">
      <i class="ri-arrow-up-line"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlogPosts from './components/parts/BlogPosts.vue';
import ClientsOpition from './components/parts/ClientsOpition.vue';
import Download from './components/parts/Download.vue';
import Help from './components/parts/help.vue';
import Proccess from './components/parts/proccess.vue';
import Register from './components/parts/Register.vue';
import Slider from './components/parts/slider.vue';
import Footer from './components/parts/Footer.vue';
import Header from './components/parts/Header.vue';
export default defineComponent({
  components: {
    Slider,
    Proccess,
    Help,
    ClientsOpition,
    Download,
    BlogPosts,
    Register,
    Footer,
    Header
}

})
</script>


<style lang="scss" scoped>
  
  .scroll-up-btn {
    border-radius: 50%;
    display: flex;
    border: none;
    outline: none;
    justify-content: center;
    align-items: center;
    top: 85vh;
    right: 5vw;
    font-size: 2rem;
    padding: 2rem;
    transition: all .5s ease;
    &:hover {
      transform: scale(1.3);
    }
  }

</style>