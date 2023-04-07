<template>
    <Waypoint @change="onChangeWaypoint">
        <div ref="blogPostRef" class="blog-post">
            <div class="blog-post__title">Our Latest Blog Posts</div>
            <div class="blog-post__card--i1">
                <BlogCard 
                    :imageUrl="require('@/assets/images/BlogImage1.png')" 
                    :title="'Believing neglected so so allowance existence departure.'"
                    :category="'Category'"
                    :time="'08-11-2021'"
                    :article="'Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.'"
                />
            </div>
            <div class="blog-post__card--i2">
                <BlogCard 
                    :imageUrl="require('@/assets/images/BlogImage2.png')" 
                    :title="'In design active temper be uneasy. Thirty for remove plenty regard you.'"
                    :category="'Category'"
                    :time="'08-11-2021'"
                    :article="'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.'"
                />
            </div>
            <div class="blog-post__btn">
                <button>All Blog Posts</button>
            </div>
            <Waypoint @change="onChangeBlogPost">
                <div ref="lastSeenRef" class="blog-post__lists">
                    <div class="blog-post__lists__list">
                        <BlogList 
                            :imageUrl="require('@/assets/images/BlogImage3.png')"
                            :category="'Category'" 
                            :time="'08-11-2021'" 
                            :title="'Partiality on or continuing in particular principles'"
                        />
                    </div>
                    <div class="blog-post__lists__list">
                        <BlogList 
                            :imageUrl="require('@/assets/images/BlogImage4.png')"
                            :category="'Category'" 
                            :time="'08-11-2021'" 
                            :title="'Do believing oh disposing to supported allowance we.'"
                        />
                    </div>
                    <div class="blog-post__lists__list">
                        <BlogList 
                            :imageUrl="require('@/assets/images/BlogImage5.png')"
                            :category="'Category'" 
                            :time="'08-11-2021'" 
                            :title="'Village did removed enjoyed explain nor ham saw.'"
                        />
                    </div>
                    <div class="blog-post__lists__list">
                        <BlogList 
                            :imageUrl="require('@/assets/images/BlogImage6.png')"
                            :category="'Category'" 
                            :time="'08-11-2021'" 
                            :title="'Securing as informed declared or margaret'"
                        />
                    </div>
                </div>
            </Waypoint>
        </div>
    </Waypoint>
</template>

<script lang="ts">
import anime from "animejs";
import { defineComponent, Ref, ref } from "vue";
import BlogCard from "../cards/BlogCard.vue";
import BlogList from "../Lists/BlogList.vue";
    export default defineComponent({ 
        components: { 
            BlogCard, 
            BlogList 
        },
        setup() {
            const blogPostRef: Ref = ref<HTMLElement>();
            const lastSeenRef: Ref = ref<HTMLElement>();
            const onChangeBlogPost = () => {

                anime({
                    targets: lastSeenRef.value.children,
                    opacity: [0, 1],
                    translateX: [-60, 0],
                    delay: anime.stagger(100)
                })
            }
            const onChangeWaypoint = () => {
                
                anime({
                    targets: blogPostRef.value.children,
                    opacity: [0, 1],
                    translateX: [-60, 0],
                    delay: anime.stagger(10)
                })

            }

            return {
                blogPostRef,
                onChangeWaypoint,

                lastSeenRef,
                onChangeBlogPost
            }
        }
    })
</script>


<style lang="scss" scoped>
.blog-post {
    padding: 0 12.4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, minmax(min-content, max-content));
    grid-gap: 3rem;
    grid-row-gap: 3rem;
    &__title {
        grid-column: 1/3;
        font-weight: 800;
        font-size: 4.2rem;
        line-height: 5rem;
        letter-spacing: -0.03em;
    }

    &__card--i1 {
        grid-column: 1/2;
    }

    &__card--i2 {
        grid-column: 2/3;
    }
    &__btn {
        grid-column: 3/4;
        grid-row: 1/2;
        text-align: right;
        button {
            outline: none;
            border: none;
            background: #5D5FEF;
            border-radius: 1rem;
            padding: 2rem 3rem;
            color: white;

        }
    }
    &__lists {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        &__list {
            grid-column: 3/4;
            border-bottom: .1rem solid #DEE1E6;
            padding-bottom: 2rem;
            border-bottom: .1rem solid #DEE1E6;
        }
    }
}

@media screen and (max-width: 60rem) {
    .blog-post {
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
        padding: 0 2rem;
        
    }
}
</style>