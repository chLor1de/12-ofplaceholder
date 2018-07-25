<template>
    <ul class="flex flex-col md:flex-row list-reset"
        :class="[menuActive ? 'pin-l, activeleft' : '', responsiveUl]">
        <li class="uppercase tracking-wide text-base mx-8 no-underline text-white
                   cursor-pointer hover:shadow-lg my-6 md:my-0"
            v-for="(link, label) in list">
            <span class="font-bold" :v-scroll-to="{el:select}">{{ label }}{{ link }}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['menuActive'],
        data() {
            return {
                select: '.vednok',
                responsiveUl: [
                    'bg-red',
                    'md:bg-transparent',
                    'justify-start',
                    'md:justify-end',
                    'items-center',
                    'pin-t',
                    'absolute',
                    'md:relative',
                    'h-screen',
                    'md:h-auto',
                    'md:w-full',
                    'fixed',
                ],
                list: {
                    'Országfutás': 'orszagfutas',
                    'Védnök': '.vednok',
                    'Támogatók': '.sponsor',
                    'Kapcsolat': '.contact',
                },
            }
        }
    }
</script>

<style lang="sass" scoped>
    $mobile: "only screen and (max-width : 767px)"

    ul.activeleft
        left: 0
    @media #{$mobile}
        ul
            left: -100%
            transition: left .5s
            -webkit-transition: left .5s
</style>