<template>
    <section class="help">
        <header class="help__header">
            <img class="help__header__bg-img" :src="require('@/assets/images/greeting.png')" alt="No Image">
            <p class="help__header__p">
                Push your product to next level.
            </p>
            <article class="help__header__article">
                End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
            </article>
            <Button :label="'Get Started'" :bg-color="'#FF7F5C'" :color="'#fff'" circled/>
        </header>
        <main>
            <section class="help__section">
                <p class="help__section__title">We help your business grow faster.</p>
                <article class="help__section__article">
                    Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient.
                </article>
            </section>

            <section >
                <div class="help__cards">

                        <Card :title="'Offending belonging'" :article="'Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.'"/>
                        <Card 
                            :title="'Promotion & provision'" 
                            :article="'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'"
                        >
                        <template #icon>
                            <!-- Sun.svg -->
                            <img :src="require('@/assets/svgs/Flower.svg')" alt="No Image">
                        </template>
                    </Card>
                    <Card 
                        :title="'Blessing application'" 
                        :article="'Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.'"
                    > 
                        <template #icon>
                            <!-- Sun.svg -->
                            <img :src="require('@/assets/svgs/Sun.svg')" alt="No Image">
                        </template>
                    </Card>
                </div>
                <button class="help__btn-more">More About Platform</button>
            </section>
            <section class="help__advantages">
                <div class="help__advantages--dialog">Among leave law built now.</div>
                <div class="help__advantages--advantage">
                    <div class="help__advantages--advantage__img">
                        <img :src="require('@/assets/svgs/Star.svg')" alt="">
                    </div>
                    <p class="help__advantages--advantage__title">
                        Village did remov enjoyed
                    </p>
                </div>
                <div class="help__advantages--advantage">
                    <div class="help__advantages--advantage__img">
                        <img :src="require('@/assets/svgs/Sertificate.svg')" alt="">
                    </div>
                    <p class="help__advantages--advantage__title">
                        Nay likely  length sooner
                    </p>
                </div>
                <div class="help__advantages--advantage">
                    <div class="help__advantages--advantage__img">
                        <img :src="require('@/assets/svgs/Lamp.svg')" alt="">
                    </div>
                    <p class="help__advantages--advantage__title">
                        Expense windows adapted 
                    </p>
                </div>
            </section>
            <section class="help__two-cards">
                <div class="help__two-cards__card">
                    <p class="help__two-cards__card--title">Offend belong promote provision</p>
                    <article class="help__two-cards__card--subtitle">
                        Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. 
                    </article>
                    <button class="help__two-cards__card__btn">Read More</button>
                </div>
                <div class="help__two-cards__card">
                    <p class="help__two-cards__card--title">Consulted ourselves it blessing welcom</p>
                    <article class="help__two-cards__card--subtitle">
                        The expense windows adapted sir. Wrong widen drawn ample eat off doors money.
                    </article>
                    <button class="help__two-cards__card__btn">Read More</button>
                </div>
            </section>
        </main>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../cards/Card.vue";
import Button from "./components/buttons/Button.vue";

export default defineComponent({
    components: {
    Button,
    Card
}
})
</script>

<style lang="scss" scoped>

    .help__header {
        margin: 10rem 30.5rem;
        padding: 10rem 10.8rem;
        text-align: center;
        overflow: hidden;
        position: relative;
        color: white;
        // filter: grayscale(20%);
        &__bg-img {
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            z-index: -2;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
        
        &::after{
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            z-index: -1;
            overflow: hidden;
            border-radius: 1.5rem;
            background-color: rgba($color: #16012C, $alpha: .4);
            width: 100%;
            height: 100%;
        }
        &__p {
            font-weight: 800;
            font-size: 4.2rem;
            line-height: 6rem;
            letter-spacing: -0.03em;
            z-index: 1;
        }

        &__article {
            font-size: 2rem;
            line-height: 3rem;
            text-align: center;
            letter-spacing: -0.02em;
            margin: 2rem 0rem;
        }
    }

    .help__section {
        text-align: center;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 100vw;
            height: 100vh;
            z-index:-3 ;
            background: url('@/assets/images/Vector\ 1578.png') no-repeat;
            top: -20rem;
            left: 0;
        }
        padding: 7.5rem 0;
        &__title {
            font-size: 4.2rem;
            font-weight: 800;
        }

        &__article {
            margin-top: 1.3rem;
            font-weight: 500;
            padding: 0 47rem;
            font-size: 2rem;
            line-height: 3rem;
            text-align: center;
            letter-spacing: -0.02em;
            color: #64607D;
        }
    }

    .help__cards {
        padding: 0 14.3rem;
        display: flex;
        justify-content: center;
        gap: 3rem;
    }
    .help__btn-more {
        display: block;
        font-size: 1.6rem;
        line-height: 1.9rem;
        text-align: center;
        padding: 2rem 5rem;
        color: #FFFFFF;
        background: #5D5FEF;
        border-radius: 1rem;
        border: none;
        outline: none;
        margin: 0 auto;
        margin-top: 4.2rem;
        margin-bottom: 16.3rem;
    }

    .help__advantages {
        margin: 10rem 12.1rem;
        display: flex;
        align-items: center;
        gap: 4rem;
        border: 1px solid #DEE1E6;
        border-radius: 2rem;
        padding: 4rem 4.4rem;

        &--dialog {
            font-weight: 800;
            font-size: 3.4rem;
            line-height: 4.6rem;
            letter-spacing: -0.03em;
        }

        &--advantage {
            display: flex;
            align-items: center;
            gap: 2rem;
            &__img {
                background: #E9ECF2;
                border-radius: .5rem;
                padding: 1.5rem;
            }
            &__title {
                font-size: 2rem;
                line-height: 3.2rem;
                letter-spacing: -0.02em;
            }
        }
    }

    .help__two-cards {
        margin: 0 12.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        &__card {
    
            background: #F8F9FD;
            border-radius: 2rem;
            padding: 0 5.6rem;
            text-align: center;
            &--title {
                margin: 2rem 5rem;

                font-weight: 800;
                font-size: 4rem;
                line-height: 5rem;
                letter-spacing: -0.03em;
            }
            &--subtitle {
                font-size: 1.6rem;

                line-height: 3rem;
                text-align: center;
                letter-spacing: -0.02em;
                color: #64607D;
            }

            &__btn {
                margin: 3.6rem;
                outline: none;
                border: none;
                padding: 2.1rem 5.3rem;
                color: white;
                font-size: 1.6rem;
                line-height: 1.9rem;
                background: #5D5FEF;
                border-radius: 1rem;
            }
        }
    }
</style>