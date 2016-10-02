<template>
    <article class="tile is-child box">
        <p class="title">{{data.title}}</p>
        <p class="emphasize">{{data.count}}</p>
        <div class="content center">
            <p>{{{ data.text }}}</p>
        </div>
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
        },
        data () {
            return {
                values: null
            }
        },
        watch: {
            data (val) {
                this.$nextTick(
                    () => {
                        this.values.count = val.count;
                    }
                )
            }
        }
    };
</script>
