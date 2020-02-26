<template>
    <div class="page-wrapper">
        <div id="app">
            <div class="inner-wrap">
                    <div class="container-main">
                        <Title/>
                        <div class="container">
                            <Column :header=about.header v-anime="{  
                                translateX: ['250', '0'],
                                autoplay: true,
                                easing: 'easeInOutSine',
                                opacity: 1, 
                                delay: 2000 
                                }"
                            >
                                <p> {{about.content}} </p>
                            </Column>
                            <Column :header=work.header v-anime="{  
                                translateX: ['250', '0'],
                                autoplay: true,
                                easing: 'easeInOutSine',
                                opacity: 1, 
                                delay: 2400 
                                }"
                            >
                                <p v-html="work.paragraph_1"/>
                                <p v-html="work.paragraph_2"/>
                            </Column>
                            <Column :header=contact.header v-anime="{  
                                translateX: ['250', '0'],
                                autoplay: true,
                                easing: 'easeInOutSine',
                                opacity: 1, 
                                delay: 2800 
                                }"
                            >
                                <p v-html="contact.content"/>
                            </Column>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from './components/Footer'
import Title from './components/Title'
import Column from './components/Column'

export default {
  name: 'App',
  components: {
    Footer,
    Title,
    Column
  },
    data: () => ({
        about: {
            header: 'About',
            content: "By way of Scotland, Spain, and Japan, I'm a British expat now based in Nashville, TN. I'm passionate about seeing the world, having been to over 40 countries. I enjoy any hobby that involves being active or outdoors in nature.",
        },
        work: {
            header: 'Work',
            paragraph_1: "I currently work as a Web Developer at <a class='link' target='_blank' href='https://www.lewiscommunications.com/'>Lewis Communications</a>. Some recently completed projects I've been part of include: <a class='link' target='_blank' href='https://www.kaiyabeachresort.com/'>Kaiya</a>, <a class='link' target='_blank' href='https://trustmarkinvestmentadvisors.com/'>Trustmark</a> and <a class='link' target='_blank' href='https://caringways.com/'>CaringWays",
            paragraph_2: "I have also worked with <a class='link' target='_blank' href='https://numundo.org/'>NuMundo</a> as a Front-End Developer and remain passionate about permaculture, transformational travel and sustainability."
        },
        contact: {
            header: 'Contact',
            content: "Reach out at <a href='mailto:jmbromehead@gmail.com'>jmbromehead [at] gmail.com</a>",
        },
    }),
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond|Cormorant:300,400&display=swap');
@import "~bulma";
@import "~buefy/src/scss/buefy";
$primary: $blue;
$primary-invert: findColorInvert($primary);
$family-sans-serif: 'Cormorant', sans-serif;
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

.inner-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
    height: 100%;
    min-height: 100vh;
}

.container-main {
    background: $beige;
    padding: 50px 8% 50px;
}
.link {
    border-bottom: 1px solid $linkUnderline;
}

body {
    font-family: 'Cormorant', ;
    font-weight: 100;
    background: $beige;
    height: 100%;
    min-height: 100vh;
    font-size: 10px;
}


@media (min-width: 769px) {
    body {
        background: linear-gradient(90deg, $beige 50px, transparent 50%) center, linear-gradient($beige 50px, transparent 50%) center, $blue;
        background-size: 52px 52px;
    }
    .container-main {
        padding: 10px 3%;
        margin-top: 136px;
    }
    .inner-wrap {
        max-width: 600px;
    }
}
</style>
