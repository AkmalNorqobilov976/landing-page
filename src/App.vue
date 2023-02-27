<template>
  <div class="container position-relative" id="app">
    <header>
      <nav class="navbar">
        <a class="navbar__title">AR Shakir</a>
        <div class="navbar__links">
          <Dropdown :title="'Products'" :options="['Electronic', 'Clothes']"/>
          <Dropdown :title="'Products'" :options="['Electronic', 'Clothes']"/>
          <a href="">Blog</a>
          <a href="">Pricing</a>
        </div>
        <div class="navbar__register">
          <button class="navbar__register__button navbar__register__button--signin">Sign in</button>
          <button class="navbar__register__button navbar__register__button--signup">Start Free</button>
        </div>
      </nav>
      <div class="header-body">
        <div class="header-body__info">
          <p class="header-body__info--title">Product Growth Solution in Single Platform.</p>
          <p class="header-body__info--subtitle">Managing business payments has never been easier</p>
          <p class="header-body__info--subinfo">Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</p>
          
          <form>
            <div class="header-body__form">
              <div class="header-body__form__part">
                <label for="email">Register using email address</label>
                <input type="email" placeholder="Enter Email">
              </div>
              <button class="header-body__form__input">
                Submit
              </button>
            </div>
            <div class="header-body__form__checks">
              <circle-checkbox :label="'Free Register'" :idKey="'freeRegister'"/>
              <circle-checkbox :label="'Great Service'" :idKey="'greatService'"/>
            </div>
          </form>
        </div>
      </div>
    </header>
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
import Dropdown from './components/Dropdown.vue';
import CircleCheckbox from './components/Form/checkbox/CircleCheckbox.vue';
import BlogPosts from './components/parts/BlogPosts.vue';
import ClientsOpition from './components/parts/ClientsOpition.vue';
import Download from './components/parts/Download.vue';
import Help from './components/parts/help.vue';
import Proccess from './components/parts/proccess.vue';
import Register from './components/parts/Register.vue';
import Slider from './components/parts/slider.vue';
import Footer from './components/parts/Footer.vue';
export default defineComponent({
  components: {
    Dropdown,
    CircleCheckbox,
    Slider,
    Proccess,
    Help,
    ClientsOpition,
    Download,
    BlogPosts,
    Register,
    Footer
}

})
</script>


<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 4.3rem 12.1rem;
    &__title {
      font-size: 2rem;
      font-weight: 900;
    }

    &__links {
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      gap: 1rem;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: white;
          transform: scale(1.2);
          text-shadow: .2rem .2rem rgba(0, 0, 0, 0.453);
        }
      }
    }

    &__register {
      button {
        font-size: 1.4rem;
        font-weight: 600;
      }
      &__button {
        background: white;
        border: none;
        padding: 1.6rem 3.5rem;

        &--signup {
          background: #5D5FEF;
          border-radius: 1rem;
          color: white;
        }
      }
    }
  }
  .header-body {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 90vh;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: url('@/assets/images/header_back.png') right -10rem no-repeat, url('@/assets/images/wave.png') left no-repeat;
    padding-left: 12.1rem;
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 2.2rem;
      
      gap: .5rem;
      &--subtitle {
        font-size: 6rem;
        font-weight: 800;
      }

      &--subinfo {
        color: #757095;
        font-weight: 400;
        font-size: 2rem;
        padding-right: 17rem;
        letter-spacing: -0.02em;
      }
    }

    &__form {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      width: max-content;
      background: white;
      box-shadow: 0px 4.35199px 134.912px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      margin-top: 2rem;
      div{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        label {
          font-size: 1.6rem;
          font-weight: 700;
        }
        input {
          font-size: 2.4rem;
          font-weight: 700;
          border: none;
          outline: none;

        }
      }

      button {
        background: #1B1C31;
        color: white;
        padding: 2rem 7rem;
      }

      &__checks {
        margin-top: 5.8rem;
        display: flex;
        gap: 2.6rem;
      }
    }
  }

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

  @media screen and (max-width: 36rem) {
    .navbar {
      padding: 2rem;
      &__links {
        display: none;
        flex-direction: column;
      }
    }

    .header-body {
      grid-template-columns: 1fr;
      padding: 2rem;
      text-align: center;
      &__info {
        &--title {
          padding: 1rem;
        }

        &--subtitle {
          font-size: 4rem;
        }
        &--subinfo {
          padding-right: 4rem;
          padding-left: 4rem;
        }
      }
      &__form {
        label {
          text-align: left;
        }
        button {
          padding: 1rem 4rem;
        }
      }
    }
  }
</style>