<template>
    <article class="tile is-main is-child box">
        <p class="content">
            <img :src="data.img" alt="data.title">
        </p>
        <a :href="data.url">
            <div class="title columns">
                <div class="column">{{data.title}}</div>
                <div class="column"><i class="fa fa-info" title="{{data.tooltip}}"></i></div>
            </div>
        </a>
    </article>
</template>

<script type="text/babel">
    export default {
        props: {
            data: {
                type: Object,
                required: true,
                default () {
                    return {};
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

    .title {
        &.columns {
            margin-left: 0;
            margin-right: 0;
            margin-top:0;
        }
    }
</style>
