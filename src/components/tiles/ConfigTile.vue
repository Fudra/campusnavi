<template>
    <article class="tile is-child box">
        <div class="content center">
            <p v-if="displayInfo">
                <p class="subtitle">{{info.title}}</p>
                <p class="">{{info.count}} {{info.text}}</p>
            </p>
            <a href="#"><i :class="['fa', icon]"></i></a>
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
            this.icon = this.data.icon | 'fa-heart';
            this.link = this.data.link | '#';
            this.info = this.data.info | {};
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
