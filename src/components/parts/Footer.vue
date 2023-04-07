<template>
    <footer>
        <div class="footer">
            <Waypoint @change="onChangeFirstRef">
                <div ref="firstRef" class="footer-item">
                    <div class="footer-item__title">
                        AR Shakir
                    </div>
                    <div class="footer-item__subtitle">
                        Simple innate summer fat appear basket his desire joy.
                    </div>
                    <div class="footer-item__messengers">
                        <div>
                            <img :src="require('@/assets/svgs/linkedin.svg')" alt=""/>
                        </div>
                        <div>
                            <img :src="require('@/assets/svgs/messenger.svg')" alt=""/>
                        </div>
                        <div>
                            <img :src="require('@/assets/svgs/twitter.svg')" alt=""/>
                        </div>
                        <div>
                            <img :src="require('@/assets/svgs/twoo.svg')" alt=""/>
                        </div>
                    </div>
                </div>
            </Waypoint>
            <Waypoint @change="onChangeSecondRef">
                <div ref="secondRef" class="footer-item">
                    <div class="footer-item__title">
                        Company
                    </div>
                    <ul class="footer_item__lists">
                        <li>
                            About Us
                        </li>
                        <li>
                            Career
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Career
                        </li>
                        <li>
                            Pricing
                        </li>
                    </ul>
                </div>
            </Waypoint>
            <Waypoint @change="onChangeThirdRef">
                <div ref="thirdRef" class="footer-item">
                    <div class="footer-item__title">
                        Resources
                    </div>
                    <ul class="footer_item__lists">
                        <li>
                            Templates
                        </li>
                        <li>
                            Tutorials
                        </li>
                        <li>
                            Free Resources
                        </li>
                        <li>
                            Contract Templates
                        </li>
                    </ul>
                </div>
            </Waypoint>
            <Waypoint @change="onChangeFourthRef">
                <div ref="fourthRef" class="footer-item">
                    <div class="footer-item__title">
                        Join Our Newsletter
                    </div>
                    <div class="footer_item__form">
                        <form>
                            <input type="email" placeholder="Your Email Address">
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div class="footer-item__subtitle">
                        *  Will send you weekly updates for your better
                        finance management.
                    </div>
                </div>
            </Waypoint>
        </div>
        <p class="footer-copyright">
            Copyright @ AR Shakir 2022. All Rights Reserved.
        </p>
    </footer>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import anime from 'animejs';
export default {
    setup() {
        const firstRef: Ref = ref<HTMLElement>();
        const secondRef: Ref = ref<HTMLElement>();
        const thirdRef: Ref = ref<HTMLElement>();
        const fourthRef: Ref = ref<HTMLElement>();
        
        const onChangeFirstRef = () => {

            anime({
                targets: firstRef.value.children,
                opacity: [0, 1],
                translateX: [-60, 0],
                delay: anime.stagger(100)
            })
        }

        const onChangeSecondRef = () => {

            anime({
                targets: secondRef.value.children,
                opacity: [0, 1],
                translateX: [-60, 0],
                delay: anime.stagger(100)
            })
        }
        const onChangeThirdRef = () => {

            anime({
                targets: thirdRef.value.children,
                opacity: [0, 1],
                translateX: [-60, 0],
                delay: anime.stagger(100)
            })
        }
        const onChangeFourthRef = () => {

            anime({
                targets: fourthRef.value.children,
                opacity: [0, 1],
                translateX: [-60, 0],
                delay: anime.stagger(100)
            });

            anime({
                targets: '.footer-copyright',
                opacity: [0, 1],
                translateY: [100, 0],
            })
        }

        return {
            firstRef,
            secondRef,
            thirdRef,
            fourthRef,
            onChangeFirstRef,
            onChangeSecondRef,
            onChangeThirdRef,
            onChangeFourthRef,
        }
    }
}    

</script>

<style lang="scss" scoped>
 .footer {
    display: flex;
    gap: 10rem;
    margin: 0 17.2rem;
    padding: 12.3rem 0;
    justify-content: space-between;
    border-bottom: #E5E5EA 2px solid;

    &-item {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        
        &__title {
            font-weight: 700;
            font-size: 2.1rem;
            line-height: 2.8rem;
            letter-spacing: -0.02em;
        }
        &__subtitle {
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 2.6rem;
            letter-spacing: -0.02em;
            color: #181433;
            opacity: 0.5;
        }
        &__messengers {
            margin-top: 2rem;
            display: flex;
            gap: 1.6rem;
        }
        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
            margin-top: 2.4rem;
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: #181433;
        }

        
            form {
                display: flex;
                padding: 2.4rem 0;
                input {
                    outline: none;
                    border: none;
                    background: #F9F9F9;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 2.6rem;
                    padding: 1.5rem;
                    letter-spacing: -0.02em;
                    color: #181433;
                    opacity: 0.2;
                }
                button {
                    padding: 1.3rem 4.3rem;
                    outline: none;
                    border: none;
                    color: white;
                    background: #00E1F0;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 2.6rem;
                    letter-spacing: -0.02em;
                }
        }
    }

    &-copyright {
        padding: 4rem 0 10rem 0;
        text-align: center;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.6rem;
        text-align: center;
        letter-spacing: -0.02em;

        color: #181433;
    }
 }

 @media screen and (max-width: 60rem) {
    .footer {
        gap: 3rem;
        padding: 2rem;
        margin: 0;
        flex-direction: column;
        align-items: center;
        text-align: center;
        &-item {
            &__messengers {
                justify-content: center;
            }
        }
        &-copyright {
            padding: 2rem;
        }
    }
 }
</style>