<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-3">
                <icon-tile :icon="'fa-thumb-tack'"></icon-tile>
            </div>
            <div class="tile is-parent">
                <search-tile></search-tile>
            </div>
            <div class="tile is-parent is-3">
                <count-tile></count-tile>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-12">
                <table-tile :data="data"></table-tile>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-3"></div>
            <div class="tile is-parent">
                <pagination-tile :data="paginationData"></pagination-tile>
            </div>
            <div class="tile is-parent is-3">
                <config-tile :data="configAddData"></config-tile>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import IconTile from '../../tiles/IconTile';
    import CountTile from '../../tiles/CountTile';
    import SearchTile from '../../tiles/SearchTile';
    import ConfigTile from '../../tiles/ConfigTile';
    import PaginationTile from '../../tiles/PaginationTile';
    import TableTile from './Table';
    import vuex from '../../../vuex/store';
    import store from '../../../store/position';

    import { countItems } from '../../../vuex/actions'

    export default {
        components: {
            IconTile,
            CountTile,
            SearchTile,
            ConfigTile,
            PaginationTile,
            TableTile
        },

        data () {
            return {
                data: {}
            }
        },
        store: vuex,

        vuex: {
            actions: {
                updateItemCounter: countItems
            }
        },

        computed: {
            configAddData () {
                return {
                    icon: 'fa-plus-circle',
                    link: '#',
                    info: {}
                }
            },

            paginationData () {
                return {}
            },

            thisUpdateCounter: {
                set (val) {
                    this.updateItemCounter(val)
                }
            }

        },

        created () {
            store.getPositions()
                .then(
                    positions => {
                        this.data = positions;
                        this.thisUpdateCounter = positions.data.length;
                    }
                )
        },

        methods: {
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>