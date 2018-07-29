<template>
    <header class="h-screen min-w-screen h-screen flex-col flex">
        <responsive-nav></responsive-nav>

        <div class="w-full absolute h-full wrapper overflow-hidden flex rounded-l-full">
            <img class="h-full w-full runner z-10 self-end absoulte pin" src="@/assets/alex.jpg" alt="">
            <div class="after absolute bg-red z-20 pin"></div>
        </div>

        <div class="absolute pin flex flex-col md:flex-row z-40 justify-center items-center slogan">
            <div class="p-4 slogan">
                <h1 class="font-mont text-white uppercase mt-8 text-center md:text-left">Országfutás</h1>
                <h2 class="text-white mt-2 font-normal text-lg md:text-xl text-center">A regisztráció és nevezés hamarosan elindul,
                    ne maradj le róla!</h2>
            </div>
        </div>
    </header>
</template>

<script>
    import responsiveNav from '../Nav/ResponsiveNav'

    export default {
        components: {
            responsiveNav
        }
    }
</script>

<style scoped lang="scss">
    .slogan {
        @media (min-width: 768px) {
            margin-right: 200px;
        }
        @media (max-width: 768px) {

        }
    }
    .runner {
        object-fit: cover;
    }

    .after {
        opacity: 0.75;
    }
</style>
