<template>
  <div class="register">
    <Waypoint @change="onRegisterInfoChange">
        <div ref="registerInfoRef" class="register-info">
            <p class="register-info__title">Why Choose Us</p>
            <p class="register-info__subtitle">Track your crytpo portfolio on the
                best way possible
            </p>
            <p class="register-info__subinfo">
                Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.
            </p>
        </div>
    </Waypoint>
    <div >
        <Waypoint @change="onRegisterFormChange">
            <form ref="registerFormRef" class="register-form">
                 <div class="register-form__input register-form__input--email">
                     <input type="email" placeholder="Email Address"/>
                 </div>
                 <div class="register-form__input register-form__input--password">
                     <input type="password" placeholder="Password"/>
                 </div>
                 <button>Get Started</button>
            </form>
        </Waypoint>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import anime from 'animejs';
export default {
    setup() {

        const registerFormRef: Ref = ref<HTMLElement>();
            const registerInfoRef: Ref = ref<HTMLElement>();
        const onRegisterInfoChange = () => {

                anime({
                    targets: registerInfoRef.value.children,
                    opacity: [0, 1],
                    translateX: [-60, 0],
                    delay: anime.stagger(100)
                })
        }

        const onRegisterFormChange = () => {

            anime({
                targets: registerFormRef.value.children,
                opacity: [0, 1],
                translateX: [-60, 0],
                delay: anime.stagger(100)
            })
        }
        return {
            onRegisterInfoChange,
            onRegisterFormChange,
            registerInfoRef,
            registerFormRef
        }
    }
}
</script>

<style lang="scss" scoped>
    .register {
        background: #0F0E2C;
        padding: 7.4rem 22.9rem 7.5rem 12.2rem;
        color: white;
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 23.3rem;
        &-info {
            &__title {
                font-weight: 700;
                font-size: 1.4rem;
                line-height: 1.7rem;
                text-transform: uppercase;
            }

            &__subtitle {
                font-weight: 800;
                font-size: 5rem;
                line-height: 6rem;
                letter-spacing: -0.03em;
                margin-top: 1.5rem;
                margin-bottom: 3rem;
            }

            &__subinfo {
                font-weight: 500;
                font-size: 2rem;
                line-height: 3rem;
                letter-spacing: -0.02em;
            }
        }
        &-form {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2.4rem;
            &__input {
                width: 100%;
                input {
                    border: none;
                    outline: none;
                    background: #F2F3F4;
                    opacity: 0.2;
                    border-radius: .5rem;
                    width: 100%;
                    padding: 1.8rem 2.1rem;
                    font-size: 2rem;
                    line-height: 3rem;
                    letter-spacing: -0.02em;
                    
                    &::placeholder {
                        color: #BBB5E0;
                    }
                }
            }
            button {
                display: block;
                width: 100%;
                background: #5D5FEF;
                color: white;
                border-radius: .5rem;
                width: 100%;
                padding: 1.8rem 2.1rem;
                font-size: 2rem;
                line-height: 3rem;
                letter-spacing: -0.02em;
                border: none;
                outline: none;
            }
        }
    }

    @media screen and (max-width: 60rem) {
        .register {
            padding: 2rem;
            display: flex;
            gap: 4rem;
            flex-direction: column;
        }
    }
</style>

