<template>
    <div class="strategy-card">
        <img class="strategy-card__img" :src="require('@/assets/svgs/Rectangle 105.svg')" alt="">
        <span class="strategy-card__stage">{{ strategyStage }}</span>
        <p class="strategy-card__title">Project Discovery Call</p>
        <p class="strategy-card__subtitle">Party we years to order allow asked of. We so opinion friends me message as delight. </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

    export default defineComponent({
        props: {
            title: {},
            subtitle: {},
            strategyStage: {
                default: 'blue'
            }
        }
    })
</script>

<style lang="scss" scoped>
    .strategy-card {
        position: relative;
        width: 100%;
        &__img {
            margin-bottom: 2.4rem;
        }
        .strategy-card__stage {
            position: absolute;
            top: -3rem;
            right: 0;
            content: v-bind('strategyStage');
            font-weight: 900;
            font-size: 20.4rem;
            line-height: 20.4rem;
            /* identical to box height, or 100% */

            letter-spacing: -0.02em;


            opacity: 0.05;
        }
        &__title {
            font-weight: 800;
            font-size: 1.6rem;
            line-height: 3rem;
            letter-spacing: -0.03em;
        }

        &__subtitle {
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 3rem;
            letter-spacing: -0.02em;
            color: #64607D;
        }
        
    }

    @media screen and (max-width: 60rem) {
        .strategy-card {
            position: initial;
            &__stage {
                position: initial !important;
                opacity: .5;
                margin-left: 3rem;
            }
        }
    }

    
</style>