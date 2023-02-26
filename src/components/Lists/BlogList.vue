<template>
    <div class="blog-list">
        <div class="blog-list__img">
            <img :src="imageUrl" alt="">
        </div>
        <div class="blog-list__body">
            <div class="blog-list__body__time-category">
                <time>{{ time }}</time> <span>{{ category }}</span>
            </div>
            <p class="blog-list__body__title">{{ title }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

    export default defineComponent({
        props: {
            imageUrl: {},
            category: {},
            time: {},
            title: {}
        }
    })
</script>

<style lang="scss" scoped>
    .blog-list {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        &__img {
            width: max-content;
            img {
                object-fit: contain;
                height: 100%;
                aspect-ratio: 1/1;
            }
        }

        &__body {
            flex: 1 1 auto;
            &__time-category {
                display: flex;
                gap: 1.1rem;
                font-size: 1.6rem;
                line-height: 3rem;
                letter-spacing: -0.02em;
                color: #64607D;
            }

            &__title {
                font-weight: 800;
                font-size: 1.8rem;
                line-height: 3rem;
                letter-spacing: -0.03em;
                color: #000000;
            }
        }
    }
</style>