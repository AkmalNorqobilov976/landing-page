<template>
    <Waypoint @change="onChangeWaypoint">
        <header>
            <nav class="navbar">
                <a class="navbar__title">AR Shakir</a>
                <div class="navbar__links" ref="navbarLinksRef">
                    <i @click="onToggle(false)" class="ri-close-line"></i>
                    <Dropdown class="item-1" :title="'Products'" :options="['Electronic', 'Clothes']" />
                    <Dropdown class="item-2" :title="'Products'" :options="['Electronic', 'Clothes']" />
                    <a class="item-3" href="">Blog</a>
                    <a class="item-4" href="">Pricing</a>
                </div>
                <div class="navbar__register">
                    <button class="navbar__register__button navbar__register__button--signin">Sign in</button>
                    <button class="navbar__register__button navbar__register__button--signup">Start Free</button>
                    <button class="navbar__app-icon" @click="onToggle(true)">
                        <i class="ri-menu-line"></i>
                    </button>
                </div>
            </nav>
            <div class="header-body">
                <div class="header-body__info">
                    <p class="header-body__info--title">Product Growth Solution in Single Platform.</p>
                    <p class="header-body__info--subtitle">Managing business payments has never been easier</p>
                    <p class="header-body__info--subinfo">Never at water me might. On formed merits hunted unable merely by
                        mr
                        whence or. Possession the unpleasing simplicity her uncommonly.</p>

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
                            <circle-checkbox :label="'Free Register'" :idKey="'freeRegister'" />
                            <circle-checkbox :label="'Great Service'" :idKey="'greatService'" />
                        </div>
                    </form>
                </div>
            </div>
        </header>

    </Waypoint>
</template>

<script lang="ts">
import Dropdown from '@/components/Dropdown.vue';
import CircleCheckbox from '@/components/Form/checkbox/CircleCheckbox.vue';
import { ref } from 'vue';
import { Waypoint } from 'vue-waypoint'
import anime from 'animejs'
export default {
    components: {
        Dropdown,
        CircleCheckbox,
        Waypoint
    },
    setup() {
        const sidebarDrawer = ref(false);
        const navbarLinksRef = ref<HTMLElement>();
        const onChangeWaypoint = () => {
            const tl = anime.timeline({
                delay: 300,
                duration: 300
            });

            tl.add({
                targets: '.navbar__title',
                opacity: [0, .7, 1],
                translateX: [
                    { value: -100, duration: 0 },
                    { value: 50, duration: 1000 },
                    { value: 0, duration: 800 }
                ]
            }).add({
                targets: '.header-body',
                translateX: [
                    { value: -1000, duration: 0 },
                    { value: 20, duration: 600 },
                    { value: 0, duration: 300 }
                ]
            }).add({
                targets: '.header-body__info--title',
                translateY: [-10, 0],
                opacity: [0, 1],
                duration: 400
            }).add({
                targets: '.header-body__info--subtitle',
                translateX: [30, 0],
                opacity: [0, 1]
            }).add({
                targets: '.header-body__info--subinfo',
                translateY: [30, 0],
                opacity: [0, 1]
            }).add({
                targets: '.header-body__form',
                translateX: [
                    { value: -1000, duration: 0 },
                    { value: 20, duration: 600 },
                    { value: 0, duration: 300 }
                ],
                scale: [.1, 1.5, 1],
                // translateX
                display: ['none', 'unset'],
                opacity: [0, 1, 1]
            }).add({
                targets: '.header-body__form__checks',
                translateX: [
                    { value: -1000, duration: 0 },
                    { value: 0, duration: 300 }
                ]
            })
        }

        const onToggle = (toggle: boolean) => {
            console.log(toggle);
            var tl = anime.timeline({
            });

            if (toggle) {
                navbarLinksRef.value?.classList.add('toggle');

                tl.add({
                    targets: '.item-1',
                    translateX: [-250, 0],
                    duration: 100,
                    easing: 'spring',
                })
                    .add({
                        targets: '.item-2',
                        translateX: [-250, 0],
                        duration: 100,
                        easing: 'spring',

                    })
                    .add({
                        targets: '.item-3',
                        translateX: [-250, 0],
                        duration: 100,
                        easing: 'spring',
                    })
                    .add({
                        targets: '.item-4',
                        duration: 100,
                        translateX: [-250, 0],
                        easing: 'spring',
                    })

            } else {
                tl.reverse();
                navbarLinksRef.value?.classList.remove('toggle');
            }
        }

        return {
            sidebarDrawer,
            onChangeWaypoint,
            onToggle,
            navbarLinksRef
        }
    }
}
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

        i {
            display: none;
        }

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

    .toggle {
        display: flex;
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

        .navbar__app-icon {
            border: none;
            outline: none;
            font-size: 1.8rem;
            margin-left: 2rem;
            display: none;
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

        div {
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



@media screen and (max-width: 36rem) {
    .navbar {
        position: relative;
        padding: 2rem;

        &__links {
            z-index: 9998;
            display: none;
            top: 0;
            left: 0;
            padding-bottom: 5rem;
            font-size: 3rem;
            position: fixed;
            background: rgba($color: #3941e0, $alpha: .8);
            width: 100vw;
            height: 100vh;
            justify-content: center;
            align-items: center;
            margin: auto;
            transition: background .5s ease;
            // display: none;
            flex-direction: column;

            i {
                display: unset;
                position: absolute;
                top: 2.8rem;
                right: 6rem;

            }
        }

        .navbar__app-icon {
            display: unset;
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