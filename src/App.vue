<template>
    <div id="fullpage">
        <div class="section" id="section1">
            <div class="contain">
                <div class="hero-text">
                    <div class="hero-title">
                        <span>BOOK NOW</span>
                        <h1>Winter Special</h1>
                    </div>
                    <div>
                        <span class="cat">JUST FOR YOU</span>
                        <h3>JUST SCROLL DOWN</h3>
                    </div>
                </div>
            </div>
        </div>


        <div class="section" id="section2" ref="section2Ref">
            <div class="contain">
                <div class="description">
                    <span>About Us</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque fugit odio eos repellat
                        repellendus
                        a nisi dignissimos maiores. Aspernatur commodi omnis accusamus harum, maiores dicta sint praesentium
                        eveniet
                        iusto doloribus laboriosam, accusantium consequatur officia explicabo soluta vero. Fugit iure magnam
                        aspernatur soluta voluptatem dolor praesentium. Eius voluptate perferendis tenetur eos quia.
                        Repellendus
                        veniam quas in dolorum. Omnis consequuntur veniam repudiandae reiciendis ducimus hic officia fuga a
                        porro
                        sapiente ad illum ut sunt, accusantium perferendis deleniti asperiores nulla numquam! Recusandae
                        esse repellat
                        pariatur, iste, animi vel numquam magni iusto sunt harum illo neque! Distinctio quis nemo vitae
                        tempore
                        dolores ut!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque fugit odio eos repellat
                        repellendus
                        a nisi dignissimos maiores. Aspernatur commodi omnis accusamus harum, maiores dicta sint praesentium
                        eveniet
                        iusto doloribus laboriosam, accusantium consequatur officia explicabo soluta vero. Fugit iure magnam
                        aspernatur soluta voluptatem dolor praesentium. Eius voluptate perferendis tenetur eos quia.
                        Repellendus
                        veniam quas in dolorum. Omnis consequuntur veniam repudiandae reiciendis ducimus hic officia fuga a
                        porro
                        sapiente ad illum ut sunt, accusantium perferendis deleniti asperiores nulla numquam! Recusandae
                        esse repellat
                        pariatur, iste, animi vel numquam magni iusto sunt harum illo neque! Distinctio quis nemo vitae
                        tempore
                        dolores ut!
                    </p>

                </div>
            </div>
        </div>
    </div>

    <div class="section" id="section3" ref="section3Ref">
        <div class="contain">
            <span class="cat margin-bottom">Gallery</span>
        <div class="image-one">
            <img :src="require('@/assets/images/bg1.png')" alt="">
        </div>
    </div>

    <div id="bg">
        <img :src="require('@/assets/images/bg3.png')" ref="backgroundImgRef" alt="">
    </div>
</div>

</template>


<script>
import { onMounted, ref } from 'vue'
import { TimelineMax, TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
export default {
    setup() {
        const scene = ref({});
        const section2Ref = ref(null);
        const section3Ref = ref(null);
        const backgroundImgRef = ref(null);

        onMounted(() => {
            const controller = new ScrollMagic.Controller();
            scene.value = new ScrollMagic.Scene({
                triggerElement: section2Ref.value,
            }).setTween(backgroundImgRef.value, {
                top: "30%",
                left: '80%',
                opacity: .25
            }).addTo(controller);
            scene.value = new ScrollMagic.Scene({
                triggerElement: section3Ref.value,
                duration: 300
            }).setTween(backgroundImgRef.value, {
                top: '20%',
                opacity: 8
            }).addTo(controller);

        })

        return {
            section2Ref,
            section3Ref,
            backgroundImgRef
        }
    }
}
</script>