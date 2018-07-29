<template>
    <div id="app" class="antialiased font-mon">
        <app-hero></app-hero>
        <general></general>
        <info-graph></info-graph>
        <patron></patron>
        <motivation></motivation>
        <sponsor></sponsor>
        <app-footer></app-footer>
        <top-button></top-button>
    </div>
</template>

<script>
    import appHero from './components/MainComponents/Hero.vue'
    import general from './components/MainComponents/GeneralInfo'
    import infoGraph from './components/MainComponents/InfoGraph'
    import appFooter from './components/Footer/Footer'
    import sponsor from './components/MainComponents/Sponsor'
    import patron from './components/MainComponents/Patron'
    import topButton from './components/MainComponents/TopButton'
    import motivation from './components/MainComponents/Motivation'
    export default {
        name: 'app',
        components: {
            appHero,
            general,
            infoGraph,
            appFooter,
            patron,
            topButton,
            sponsor,
            motivation
        }
    }
</script>

<style lang="scss">
</style>
