<template>
    <div class="circle-checkbox">
        <input :id="idKey" type="checkbox" @input="updateModel($event)"> 
        <label :for="idKey"> {{ label }} </label> 
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        idKey: {
            type: String
        },
        modelValue: {},
        label: {

        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const updateModel = (e: any) => {
            emit('update:modelValue', e.target.checked)
        }

        return {
            updateModel
        }
    }
})
</script>

<style lang="scss" scoped>
    .circle-checkbox {
        display: flex;
        align-items: center;
        gap: .8rem;
        & input {
            appearance: none;
            height: 1.8rem;
            width: 1.8rem;
            border-radius: 50%;
            border: .1rem solid #5D5FEF;

        }
        input[type="checkbox"]:checked {
            background: #5D5FEF no-repeat 50% 50%;

            background-image: url('@/assets/svgs/check.svg');
        }
        label {
            font-weight: 400;
            font-size: 1.7rem;
        }
    }
</style>