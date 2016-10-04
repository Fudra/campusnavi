<template>
    <article class="tile is-child box">
        <div class="content center icon-tile">
          <span>{{count}}</span>
        </div>
    </article>
</template>

<script type="text/babel">
    import { getCountItems } from '../../vuex/getters'

    export default {
//        props: {
//            count: {
//               type: Number,
//                default () {
//                    return -1;
//                }
//
//            }
//        },
        vuex: {
            getters: {
                count: getCountItems
            }
        },
        created () {
        }
    }
</script>