<template>
    <transition name="back-to-top-fade">
        <div class="vue-back-to-top"  v-show="visible"
             @click="backToTop">
            <div class="default bg-green">
                <span>
                    <font-awesome-icon
                            icon="angle-up"
                            size="2x">
                    </font-awesome-icon>
                    </span>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'BackToTop',
        data() {
            return {
                visible: false,
                visibleoffset: 600
            }
        },
        mounted() {
            window.smoothscroll = () => {
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
                if (currentScroll > 0) {
                    window.requestAnimationFrame(window.smoothscroll)
                    window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
                }
            }
            window.addEventListener('scroll', this.catchScroll)
        },
        destroyed() {
            window.removeEventListener('scroll', this.catchScroll)
        },
        methods: {
            catchScroll() {
                this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
            },
            backToTop() {
                window.smoothscroll()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .back-to-top-fade-enter-active, .back-to-top-fade-leave-active {
        transition: opacity .7s;
    }

    .back-to-top-fade-enter, .back-to-top-fade-leave-to {
        opacity: 0;
    }

    .vue-back-to-top {
        position: fixed;
        z-index: 1000;
        cursor: pointer;
        bottom: 40px;
        right: 40px;
    }

    .vue-back-to-top .default {
        width: 50px;
        border: 1px solid white;
        color: #ffffff;
        text-align: center;
        line-height: 30px;
        border-radius: 3px;

    }

    .vue-back-to-top .default span {
        color: #ffffff;
    }
</style>