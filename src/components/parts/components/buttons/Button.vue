<template>
    <div class="btn" :class="{'circle': circled}">
        <slot name="icon">
            <i :class="icon"></i>
        </slot>
        <button class="btn__btn" >{{ label }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


    export default defineComponent({
        props: {
            circled: {
                type: Boolean,
                default: false
            },
            label: {},
            icon: {

            },
            bgColor: {},
            color: {}
        }
    })
</script>

<style lang="scss" scoped>
    .btn {
        background: v-bind('bgColor');
        color: v-bind('color');
        padding: .9rem 3.8rem;
        display: inline-flex;
        align-items: center;
        gap: 1.5rem;
        &__btn {
            line-height: 3rem;
            background: v-bind('bgColor');
            font-size: 1.6rem;
            color: v-bind('color');
            border: none;
            outline: none;
        }

    }

    .circle {
        border-radius: 4.7rem;
    }
</style>