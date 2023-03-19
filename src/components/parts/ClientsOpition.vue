<template>
    <div class="clients-opinion">
        <p class="clients-opinion__title">Testimonials</p>
        <p class="clients-opinion__subtitle" style="-webkit-box-reflect: below -1rem linear-gradient(transparent, #0004);">Check what our clients are saying</p>
        <div>
            <Swiper pagination>
                <SwiperSlide>
                    <div class="clients-opinion__swiper-slide">
                        <div class="clients-opinion__swiper-slide__img">
                                <Waypoint @change="onChangeImageWaypoint">
                                    <img :src="require('@/assets/images/client1.png')" alt="">
                                </Waypoint>
                        </div>
                        <Waypoint @change="onChangeSliderWaypoint">
                            <div class="clients-opinion__swiper-slide__body">
                                <span class="star">
                                    <vue3-star-ratings :step="1" v-model="rating" :showControl="false" />
                                </span>
                                <article class="clients-opinion__swiper-slide__body__text" ref="articleRef">
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
                        </Waypoint>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import anime from "animejs";

    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            const rating = ref("");
            const articleRef:Ref = ref<HTMLElement>()!;
            const onChangeImageWaypoint = () => {
                anime({
                    targets: '.clients-opinion__swiper-slide__img',
                    translateX: [-100, 0],
                    opacity: [0, 1]
                });

                anime({
                    targets: '.clients-opinion__title',
                    translateX: [-100, 0],
                    opacity: [0, 1]
                })

                anime({
                    targets: '.clients-opinion__subtitle',
                    translateX: [100, 0],
                    opacity: [0, 1]
                })

            }

            const onChangeSliderWaypoint = () => {
                anime({
                    targets: '.star',
                    opacity: [0, 1],
                    rotate: [360, 6],
                    scale: [0, 1]
                });

                anime({
                    targets: '.clients-opinion__swiper-slide__body__text',
                });

                (articleRef.value as HTMLElement).innerHTML = articleRef.value?.textContent?.replace(/\S/g, "<span>$&</span>")
                
                const tl = anime.timeline({
                });

                tl.add({
                    targets: articleRef.value.children,
                    opacity: [0, 1],
                    translateX: [-60, 0],
                    delay: anime.stagger(50)
                })
                anime({
                    targets: '.investor',
                    opacity: [0, 1],
                    scale: [10, 1]
                })
            }
            return {
                rating,
                articleRef,
                onChangeImageWaypoint,
                onChangeSliderWaypoint

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
                    text-align: center;
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