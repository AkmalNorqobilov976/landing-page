<template>
    <div class="slider">
        <p class="slider__title">Over 32k+ software  businesses growing with AR Shakir</p>
        <swiper
            :breakpoints="{       
                360: {       
                    slidesPerView: 1.5,
                    spaceBetween: 10     
                },          
                770: {       
                    slidesPerView: 2,       
                    spaceBetween: 50     
                },   
            
                771: {       
                    slidesPerView: 4,       
                    spaceBetween: 30     
                } 
            }"
            :slides-per-view="5"
            :space-between="50"
            >
            <!-- @swiper="onSwiper"
            @slideChange="onSlideChange" -->
            <swiper-slide>
            <img :src="require('@/assets/images/OpenZeppelin.png')" alt="No Image">
            </swiper-slide>
            <swiper-slide>
            <img :src="require('@/assets/images/Oracle.png')" alt="No Image">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('@/assets/images/Samsung.png')" alt="No Image">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('@/assets/images/Morpheus.png')" alt="No Image">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('@/assets/images/Monday.png')" alt="No Image">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('@/assets/images/Segment.png')" alt="No Image">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('@/assets/images/Protonet.png')" alt="No Image">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Swiper core and required components

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/swiper-bundle.css'

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide
    }
})
</script>

<style lang="scss" scoped>
    .slider {
        border-top: .1rem solid #C4C4C4;
        border-bottom: .1rem solid #C4C4C4;
        padding: 6.3rem 8.7rem;
        &__title {
            text-align: center;
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 4.4rem;
        }
    }

    @media screen and (max-width: 36rem) {
        .slider {
            padding: 2rem;
        }        
    }
</style>