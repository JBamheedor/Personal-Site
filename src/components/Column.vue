<template>
    <div class="columns">
        <div class="column -first is-one-quarter">
            <div class="header">
                <p>{{ header }}</p>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Column',
    props: {
        header: String
    }
}

</script>

<style lang="scss" scoped>
.header {
    border-radius: 2px;
    color: $lightPink;
    font-family: $futura;
    font-size: 14px;
    text-transform: uppercase;
    background: $blue;
    text-align: center;
    margin-top: 6px;
    width: fit-content;
    padding: 0 10px;
    letter-spacing: 1px;
    font-weight: 100;
}
.content {
    font-size: 15px;
    color: $blue;
}
.columns {
    opacity: 0;
    padding-bottom: 15px;
    background: $beige;
}
.column {
    padding: .5rem;
}

@media (min-width: 769px) {
    .header {
        font-size: 16px;
    }
    .content {
        font-size: 16px;
    }
    .column {
        padding: .75rem;
    }
}
</style>