<template>
    <article class="tile is-child box">
        <div class="content">
            <p>Search: {{searchValue}}</p>
            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Aktiv</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in data.data">
                    <td>{{item.name}}</td>
                    <td class="is-status">
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
    import { getSearchItem } from '../../../vuex/getters'

    export default {
        props: {
            data: {
                type: Object,
                required: true,
                default () {
                    return {}
                }
            }
        },
        vuex: {
            getters: {
                searchValue: getSearchItem
            }
        }
    }
</script>