<template>
    <div class="title-wrapper">
        <div class="title-container">
            <div class="character-wrap">
                <span 
                    class="main-title"
                    v-bind:key="letter.id"
                    v-for="(letter, index) in name"
                    v-anime="{  
                        easing: 'easeInQuad',
                        translateX: ['10px', '0'], 
                        opacity: 1, 
                        delay: 60 * index, 
                    }" 
                    v-html="letter">
                    {{ letter }}
                </span>
            </div>
            <div class="supplement-wrap">
                <p 
                    class="supplement"
                    v-anime="{
                        easing: 'easeInQuad',
                        opacity: 1,
                        duration: 800,
                        delay: 1600 }">
                    Web Developer
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    data() {
        return {
            name: ['J','o','s','h','&nbsp;','B','r','o','m','e','h','e','a','d']
        }
    }
}
</script>

<style lang="scss">
.title-container {
    display: inline-flex;
    align-items: center;
} 
.title-wrapper {
    padding-bottom: 45px;
}
.main-title {
    color: $blue;
    font-size: 21px;
    font-weight: 100;
}
.supplement {
    border-radius: 2px;
    font-family: $futura;
    margin-left: 10px;
    text-transform: uppercase;
    color: $lightPink;
    font-weight: 100;
    font-size: 14px;
    background: $blue;
    padding: 0 10px;
    align-self: center;
    opacity: 0;
    letter-spacing: 1px;
    width: fit-content;
}

@media (min-width: 769px) {
    .title-container {
        flex-direction: row;
        align-items: center;
    }
    .title-wrapper {
        padding-bottom: 86px;
    }
    .main-title {
        font-size: 26px;
    }
    .supplement {
        font-size: 16px;
    }
}
</style>