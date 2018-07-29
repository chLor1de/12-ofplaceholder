<template>
    <div class="w-full bg-grey-lighter">
        <div class="container mx-auto" id="motivation">
            <carousel class="py-8" :per-page="1"
                      :autoplayTimeout="6000" :mouse-drag="true" :loop="true" :navigationEnabled="true" :autoplay="true" :scrollPerPage="true" :paginationEnabled="false">
                <slide class="flex items-center justify-center" v-for="(image, index) in images" :key="index">
                    <img class="h-auto"
                         v-lazy="image"
                         alt="">
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        },
        data() {
            return {
                images: [],
                count: 45
            }
        },
        mounted() {
            for (let i=1; i <= this.count; i++ ){
                let img = require('../../assets/motiv_' + i + '.jpg');
                this.images.push(img);
            }
            for (let i = this.images.length - 25; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = this.images[i];
                this.images[i] = this.images[j];
                this.images[j] = temp;
            }

        },
        methods: {
            loadImg(path) {
                return require(path)
            }

        }

    }
</script>

<style scoped>
img {
    max-height: 500px;
}
</style>