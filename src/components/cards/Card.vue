<template>
    <div class="card">
        <slot name="icon">
            <img :src="require('@/assets/svgs/Cubik.svg')" alt="">
        </slot>
        <p class="card__title">{{ title }}</p>
        <article class="card__article"> {{ article }} </article>
        <button class="card__more-btn">
            Read More <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            default: "Title"
        },
        article: {
            default: "Article"
        }
    }
})
</script>

<style lang="scss" scoped>
.card {
    background: #FFFFFF;
    border-radius: 2rem;
    padding: 3.3rem;
    &__title {
        margin-top: 2rem;
        font-weight: 800;
        font-size: 2.4rem;
        line-height: 6rem;
        letter-spacing: -0.03em;
    }
    &__article {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 3rem;
        letter-spacing: -0.02em;
        color: #64607D;
    }

    &__more-btn {
        cursor: pointer;
        margin-top: 2rem;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        font-size: 1.6rem;
        color: #01966B;
        border: none;
        outline: none;
    }
}
</style>