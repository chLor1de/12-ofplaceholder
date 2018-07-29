<template>
    <div class="bg-white w-full my-12">
        <div class="container mx-auto">
            <h1 id="sponsor" class="uppercase text-left text-center md:text-xl text-lg mb-4">Támogatóink</h1>
            <div class="flex justify-center items-center flex-wrap">
                <img @click="clicked('https://lathatatlan.hu')"
                        @mouseover="onHover($event)" @mouseleave="onLeave($event)" class="h-24 m-2 md:m-6 cursor-pointer"
                     src="@/assets/magyar_ketsoros_feher.jpg" alt="">
                <img @click="clicked('https://visualz.hu')"
                        @mouseover="onHover($event)" @mouseleave="onLeave($event)" class="h-24 m-2 md:m-6 cursor-pointer"
                     src="@/assets/unnamed-2.png" alt="">
                <img @click="clicked('http://mozduljerte.hu')"
                        @mouseover="onHover($event)" @mouseleave="onLeave($event)" class="h-24 m-2 md:m-6 cursor-pointer"
                     src="@/assets/2g.png" alt="">
                <img @click="clicked('https://runcard.eu')"
                        @mouseover="onHover($event)" @mouseleave="onLeave($event)" class="h-24 m-2 md:m-6 cursor-pointer"
                     src="@/assets/unnamed.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onHover(e) {
                e.target.classList.add("hover");
            },
            onLeave(e) {
                e.target.classList.remove('hover');
            },
            clicked(link) {
                window.open(link, '_blank').focus();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .heading {
        top: -2rem;
    }

    img {
        filter: grayscale(100%);
    }

    img.hover {
        filter: grayscale(0%);
    }

</style>