<template>
    <ul class="flex flex-col lg:flex-row list-reset w-1/2"
        :class="[menuActive ? 'pin-l, activeleft' : '', responsiveUl]">
        <li class="uppercase tracking-wide xl:text-base lg:mx-2 text-sm xl:mx-4 no-underline text-white
                   cursor-pointer hover:shadow-lg my-6 lg:my-0"
            v-for="(link, label) in list">
            <a :href="link" class="font-bold no-underline text-white">{{ label }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['menuActive'],
        data() {
            return {
                responsiveUl: [
                    'bg-red',
                    'lg:bg-transparent',
                    'justify-start',
                    'lg:justify-end',
                    'items-center',
                    'pin-t',
                    'absolute',
                    'lg:relative',
                    'h-screen',
                    'lg:h-auto',
                    'lg:w-full',
                    'fixed',
                ],
                list: {
                    'Országfutás': '#orszagfutas',
                    'Védnök': '#vednok',
                    'Motiváció' : '#motivation',
                    'Támogatók': '#sponsor',
                    'Kapcsolat': '#contact',
                },
            }
        }
    }
</script>

<style lang="sass" scoped>
    $mobile: "(max-width : 992px)"

    ul.activeleft
        left: 0
    @media (max-width: 993px)
        ul
            left: -100%
            transition: left .5s
            -webkit-transition: left .5s
</style>