<template>
    <Waypoint @change="onChangeWaypoint">
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
                class="slider__swiper"
            >
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
    </Waypoint>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import anime from 'animejs'

import 'swiper/swiper-bundle.css'

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const onChangeWaypoint = () => {
            const tl = anime.timeline();
            tl.add({
                targets: '.slider__title',
                rotate: [90, 0],
                opacity: 1,
                translateX: [-100, 0],
                translateY: [-100, 0]
            })
            .add({
                targets: '.slider__swiper',
                opacity: [0, 1],
                transformOrigin: '100% 100% 0',
                rotate: [-90, 0]
            })
        }

        return {
            onChangeWaypoint
        }
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