<template>
    <article class="tile is-child box">
        <div class="content">
            <p>Search: {{searchValue}}</p>
            <table class="table">
                <thead>
                <tr>
                    <th><a @click="sortKey ='name'">Name</a></th>
                    <th><a @click="sortKey ='active'">Aktiv</a></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <!--| orderBy: sortKey-->
                <tr v-for="item in data.data | filterBy searchValue in 'name' | orderBy sortKey | updateCount">
                    <td>{{item.name}}</td>
                    <td :class="['is-status', item.active ? 'is-active' : '' ]">
                        <i class="fa fa-circle"></i>
                    </td>
                    <td class="is-icon">
                        <a href="#" name="Edit">
                            <i class="fa fa-pencil"></i>
                        </a>
                    </td>
                    <td class="is-icon">
                        <a href="#" name="Toggle Visibility">
                            <i class="fa fa-eye"></i>
                        </a>
                    </td>
                    <td class="is-icon">
                        <a href="#" name="Toggle Visibility">
                            <i class="fa fa-trash"></i>
                        </a>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </article>
</template>

<script type="text/babel">
    import { getSearchItem } from '../../../vuex/getters';
    import { countItems } from '../../../vuex/actions';

    export default {
        data () {
           return {
               sortKey: ''
           };
        },
        props: {
            data: {
                type: Object,
                required: true,
                default () {
                    return {};
                }
            }
        },
        vuex: {
            getters: {
                searchValue: getSearchItem
            },
            actions: {
                updateItemCounter: countItems
            }
        },
        computed: {
            thisUpdateCounter: {
                set (val) {
                    this.updateItemCounter(val);
                }
            }
        },
        methods: {
            dataCount () {

            }
        },
        filters: {
            updateCount: function (arr) {
                this.thisUpdateCounter = arr.length;
                return arr;
            }
        }
    };
</script>