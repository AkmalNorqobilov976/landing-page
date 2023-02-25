<template>
    <div class="dropdown">
        <div class="dropdown__head" @click="isToggle=!isToggle;">
            {{ title }} <i class="ri-arrow-drop-down-line"></i> 
        </div>
        <transition name="fade-in-left">
            <ul class="dropdown__lists" v-if="isToggle">
                <li class="dropdown__lists__list" v-for="(option, i) in options" :key="i">
                    {{ option }}
                </li> 
            </ul>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
    export default defineComponent({
        props: {
            title: {
                type: String,
                required: true
            },
            options: {
                type: Array ,
                required: true
                
            }
        },
        setup() {
            const isToggle = ref(false)
            return {
                isToggle
            }
        }
    })    
</script>

<style lang="scss" scoped>
.dropdown {
    display: inline-block;
    position: relative;
    cursor: pointer;
    &__head {
        display: flex;
        align-items: center;
        gap: .4rem;
    }

    &__lists {

        position: absolute;
        border-radius: .8rem;
        padding: 1rem;
        background: rgb(222, 216, 216);
        list-style: none;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        
        & li:hover {
            color: white;

            transform: scale(1.2);
        }
    }
}
</style>