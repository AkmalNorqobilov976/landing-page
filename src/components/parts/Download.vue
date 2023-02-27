<template>
    <div class="download">
        <p class="download__title">Project Management App</p>
        <p class="download__subtitle">Download our app and start your free trail to get started today!</p>
        <p class="download__subinfo">End-to-end payments and financial management in a single solution.</p>
        <div class="download__playmarket-playstore">
            <Button icon :bgColor="'#5D5FEF'" circled color="white" :label="'Playstore'">
                <template #icon>
                    <img :src="require('@/assets/svgs/PlayStore.svg')" alt=""/>
                </template>
            </Button>
            <Button icon :bgColor="'#0F0E2C'" circled color="white" :label="'Google Play'">
                <template #icon>
                    <img :src="require('@/assets/svgs/GooglePlay.svg')" alt=""/>
                </template>
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./components/buttons/Button.vue";

    export default defineComponent({
        components: { 
            Button 
        },
    })
</script>

<style lang="scss" scoped>
    .download {
        text-align: center;
        padding: 23rem 36rem;
        background: url('@/assets/svgs/Vector\ 1579.svg') no-repeat 100% 100%;
        &__title {
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 1.7rem;
            text-transform: uppercase;
            color: #5D5FEF;
        }
        
        &__subtitle {
            margin: 2.3rem 0;
            font-weight: 800;
            font-size: 4rem;
            line-height: 4.8rem;
            letter-spacing: -0.03em;
        }

        &__subinfo {
            font-weight: 500;
            font-size: 2rem;
            line-height: 3rem;
            letter-spacing: -0.02em;
            color: #64607D;
            margin-bottom: 3rem;
        }

        &__playmarket-playstore {
            display: flex;
            justify-content: center;
            gap: 1.1rem;
        }
    }

    @media screen and (max-width: 36rem) {
        .download {
            padding: 1rem 2rem;
        }
    }
</style>