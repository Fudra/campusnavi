<template>
    <article class="tile is-child box">
        <div class="content center icon-tile">
            <i :class="['fa', icon]"></i>
        </div>
    </article>
</template>

<script type="text/babel">
    export default {
        props: {
            icon: {
                type: String,
                required: false,
                default () {
                    return 'fa-heart';
                }
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>