<template>
    <div class="w-full relative z-50 flex justify-end items-center justify-end text-sm font-black font-medium mb-8 absolute pin-t pin-r z-50 h-16">
        <img class="w-16 md:w-20 absolute pin-t pin-l mt-2 ml-4" src="@/assets/OF_red.svg" alt="">
        <nav-list :menuActive="menuActive"
        ></nav-list>
        <font-awesome-icon
                class="nav-icon items-center justify-center mx-4 text-white flex lg:hidden"
                :class="menuActive ? 'active' : ''"
                :icon="menuActive ? 'chevron-left' : 'bars'"
                @click="toggleMenu"
                size="2x"/>
    </div>
</template>

<script>
    import navList from './NavList'

    export default {
        components: {
            navList,
        },
        data() {
            return {
                menuActive: false
            }
        },
        methods: {
            toggleMenu() {
                this.menuActive = !this.menuActive
            },
            catchScroll() {
                 if (window.pageYOffset > 10) {
                     this.menuActive = false
                 }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.catchScroll)
        },
        destroyed() {
            window.removeEventListener('scroll', this.catchScroll)
        },


    }
</script>

<style lang="sass">
    .nav-icon
        -webkit-transition: all 0.3s
        transition: all 0.3s
</style>