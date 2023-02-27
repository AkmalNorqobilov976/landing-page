<template>
    <div class="clients-opinion">
        <p class="clients-opinion__title">Testimonials</p>
        <p class="clients-opinion__subtitle">Check what our clients are saying</p>
        <div>
            <Swiper pagination>
                <SwiperSlide>
                    <div class="clients-opinion__swiper-slide">
                        <div class="clients-opinion__swiper-slide__img">
                            <img :src="require('@/assets/images/client1.png')" alt="">
                        </div>
                        <div class="clients-opinion__swiper-slide__body">
                            <span>
                                <vue3-star-ratings :step="1" v-model="rating" :showControl="false" />
                            </span>
                            <article class="clients-opinion__swiper-slide__body__text">
                                Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
                            </article>
                            <div class="clients-opinion__swiper-slide__body__actions">
                                <div class="investor">
                                    <p>AR Shakir</p>
                                    <p>CEO GetNextDesign</p>
                                </div>
                                <div class="investor"><img :src="require('@/assets/images/Segment.png')" alt=""></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/swiper-bundle.css'

    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            const rating = ref("")

            return {
                rating
            }
        }
    })
</script>
<style lang="scss" scoped>
    .clients-opinion {
        padding: 12.4rem 18.9rem;
        text-align: center;
        &__title {
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 1.7rem;
            text-transform: uppercase;
            color: #3734A9;
            margin-bottom: 1.7rem;
        }

        &__subtitle {
            font-weight: 800;
            font-size: 4rem;
            line-height: 4.8rem;
            letter-spacing: -0.03em;
        }

        &__swiper-slide {
            margin-top: 5.3rem;
            display: flex;
            gap: 10rem;
            &__img {
                flex-basis: 100rem;
                // flex: 1 1 auto;
                padding: 5rem;
                position: relative;
                img {
                    object-fit: contain;
                    height: 100%;
                    width: 100%;
                }

                &::before {
                    content: '';
                    position: absolute;
                    height: 10rem;
                    width: 10rem;
                    top: 0rem;
                    left: 0rem;
                    z-index: -1;
                    background: url('@/assets/svgs/Group\ 269.svg') no-repeat;
                }


                &::after {
                    position: absolute;
                    content: '';
                    right: 0;
                    bottom: 0;
                    height: 26.8rem;
                    width: 26.8rem;
                    background: url('@/assets/svgs/Ellipse\ 56.svg') no-repeat right bottom;
                    z-index: -1;
                }

            }

            &__body {
                // flex: 0 0 auto;
                text-align: left;
                &__text {
                    font-weight: 700;
                    width: 100%;
                    font-size: 3rem;
                    // line-height: 4.1rem;
                    // letter-spacing: -0.02em;
                    color: #1B1C31;

                }
                &__actions {
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    .investor {
                        margin-top: 4.7rem;
                        & p:first-child {
                            font-size: 2rem;
                            line-height: 3rem;
                            letter-spacing: -0.03em;
                        }

                        & p:last-child {
                            font-weight: 500;
                            font-size: 1.6rem;
                            line-height: 2.4rem;
                            letter-spacing: -0.02em;
                            color: #757095;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 36rem) {
        .clients-opinion {
            padding: 2rem;
            &__swiper-slide {
                flex-direction: column;
                gap: 0rem;
                &__img {
                    &::before {
                        top: 13rem;
                    }

                    &::after {
                        bottom: 11rem;
                    }
                }
            }
        }
    }
</style>