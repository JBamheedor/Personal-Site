<template>
    <footer 
        class="footer" 
        v-anime="{  
            translateY: ['50', '0'],
            autoplay: true,
            easing: 'easeInOutSine',
            opacity: 1, 
            delay: 2800 
        }">
        <div class="content">
            <p class="copyright">
                &copy; {{year}} Josh Bromehead
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: ''
        }
    },
    created() {
        this.year = (new Date()).getFullYear() 
    }
}

</script>

<style lang="scss" scoped>
    .footer {
        font-size: 10px;
        padding: 50px 0 10px;
        width: 100%;
        background: inherit;
    }
    .copyright {
        color: $blue;
        width: fit-content;
        margin: 0 auto;
        background: $beige;
        text-transform: uppercase;
        font-family: $futura;
    }
</style>