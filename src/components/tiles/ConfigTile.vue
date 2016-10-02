<template>
    <article class="tile is-child box">
        <div class="content center">
            <div class="columns">
                <div class="column secondary-tile" v-if="displayInfo">
                    <p class="title">{{data.info.title}}</p>
                    <p class="subtitle">{{data.info.count}} {{data.info.text}}</p>
                </div>
                <div class="column">
                    <a href="#" class="icon-link"><i :class="['fa', data.icon]"></i></a>
                </div>
            </div>
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
            },
            displayInfo: {
                type: Boolean,
                default: false
            }
        },

        ready () {
            console.log(this.data);
//            this.icon = this.data.icon | 'fa-heart';
//            this.link = this.data.link | '#';
//            this.info = this.data.info | {};
        },

        data () {
            return {
                link: '',
                icon: '',
                info: {}
            }
        }
    }
</script>
