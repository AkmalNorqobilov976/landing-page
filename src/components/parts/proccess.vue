<template>
    <div class="proccess">
        <div class="proccess__head">
            <p class="proccess__head__title">Stockie Operation Across the world</p>
            <p class="proccess__head__info">We have best team and best process</p>
            <p class="proccess__head__subinfo">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.</p>
            <Button :bgColor="'#5D5FEF'" :color="'#fff'" :label="'Get Started'" circled/>
        </div>
        <div class="proccess__strategy">
            <strategy-card class="proccess__strategy--i1" :strategyStage="'1'"/>
            <strategy-card class="proccess__strategy--i2" :strategyStage="'2'"/>
            <strategy-card class="proccess__strategy--i3" :strategyStage="'3'"/>
        </div>
</div>
</template>

<script>
import { defineComponent } from "vue";
import Button from "./components/buttons/Button.vue";
import StrategyCard from "./components/StrategyCard.vue";


export default defineComponent({
    components: {
        StrategyCard,
        Button
        
    }
})
</script>

<style lang="scss" scoped>
    .proccess {
        padding: 10.4rem 12.5rem;
        height: 73.5rem;
        background: url('@/assets/images/Strategy.png') 10.4rem 15rem no-repeat,
            url('@/assets/svgs/Ellipse\ 1909.svg') right 10rem no-repeat;
        
            &__head {
                width: 40rem;
                &__title {
                    font-weight: 700;
                    font-size: 1.4rem;
                    text-transform: uppercase;
                    color: #5D5FEF;
                    margin-bottom: 1.5rem;
                }
                &__info {
                    font-weight: 800;
                    font-size: 40px;
                    letter-spacing: -0.03em;
                    margin-bottom: .6rem;
                }
                &__subinfo {
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 3rem;
                    letter-spacing: -0.02em;
                    color: #64607D;
                    margin-bottom: 2rem;
                }
                &__btn {
                   
                }
            }

            &__strategy {
                position: relative;
                & > * {
                    position: absolute;
                    width: 28rem;
                }

                &--i1 {
                    top: 13rem;
                    left: 15rem;
                }

                &--i2 {
                    top: -2rem;
                    left: 56rem;
                }

                &--i3 {
                    top: -27rem;
                    right: 0rem;
                }
            }
    }
</style>