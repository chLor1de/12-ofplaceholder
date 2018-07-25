<template>
    <div class="w-full h-auto relative">
        <div class="absolute pin">
            <img class="runner z-10" src="@/assets/walk-2635038_1920.jpg" alt="">
            <div class="after absolute bg-red z-20 pin"></div>
        </div>

        <div class="relative pin z-30 flex flex-col items-center">
            <div class="flex md:flex-row flex-col-reverse flex-col md:mt-16 mt-8 w-full justify-start md:justify-center xl:justify-start items-start">
                <div class="flex flex-col xl:ml-20  md:mr-12 items-center md:items-start w-full md:w-auto">
                    <div class="uppercase md:text-xl flex flex-col font-medium text-sm md:mb-12 mb-4">
                        <a class="no-underline text-white my-3" href="">Of logó használata</a>
                        <a class="no-underline text-white my-3" href="">Impresszum</a>
                        <a class="no-underline text-white my-3" href="">Adatvédelmi tájékoztató</a>
                        <a class="no-underline text-white my-3" href="">Általános szerződési feltételek</a>
                    </div>
                </div>
                <div class="flex flex-col text-white contact font-light self-center md:self-start">
                    <h1 class="text-xl mb-2 uppercase font-medium tracking-wide">Kapcsolat</h1>
                    <span class="my-1 text-md">Vadász Vince</span>
                    <span class="my-1 text-md">+36 30 579 2343</span>
                    <span class="my-1 text-md">info@orszagfutas.hu</span>
                    <h2 class="text-base mb-2 mt-6 uppercase font-medium tracking-wide">Mozdulj érte egyesület</h2>
                    <span class="my-1 text-md">1223 Budapest, Hant u. 18.</span>
                    <span class="my-1 text-md">adószám: 18731215-1-43</span>
                </div>
            </div>
            <div class="flex lg:ml-20 items-center lg:self-start self-center w-full justify-center md:mb-12 mb-4 flex-col md:flex-row container">
                <img class="w-24" src="@/assets/OF_white-shadow.svg" alt="">
                <span class="text-white md:text-base text-sm font-medium md:px-4 px-0">COPYRIGHT © 2018 ORSZÁGFUTÁS | Designed by VISUALZ</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .runner {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 80% 60%;
    }

    .after {
        opacity: 0.75;
    }
</style>