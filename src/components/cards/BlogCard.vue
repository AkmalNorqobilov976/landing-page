<template>
  <div class="blog-card">
    <img :src="imageUrl" alt="No Image">
    <div class="blog-card__time-category">
        <time>{{ time }}</time>
        <span> {{ category }}</span>
    </div>
    <p class="blog-card__title">{{ title }}</p>
    <article class="blog-card__article">
        {{ article }}
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        imageUrl: {},
        time: {
            type: String
        },
        category: {},
        title: {},
        article: {}
    }
})
</script>

<style lang="scss" scoped>
    .blog-card {
        img {
            object-fit: contain;
            width: 100%;

        }
        &__time-category {
            margin-top: 1.4rem;
            margin-bottom: 1.1rem;
            display: flex;
            gap: 2rem;
            font-size: 1.6rem;
            line-height: 3rem;
            letter-spacing: -0.02em;
            color: #64607D;
        }

        &__title {
            font-weight: 800;
            font-size: 2rem;
            line-height: 3.6rem;
            margin-bottom: .8rem;
            letter-spacing: -0.03em;
        }
        &__article {
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 3rem;
            letter-spacing: -0.02em;
            color: #64607D;
        }
    }
</style>