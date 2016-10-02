<template>
    <article class="tile is-child box">
        <div class="content">
            <p class="title">{{title}}</p>
            <div class="content">
                <chart :type="'pie'" :data="chartData"></chart>
            </div>
        </div>
    </article>
</template>

<script type="text/babel">
    import Chart from 'vue-bulma-chartjs';

    export default {
        components: {
            Chart
        },
        props: {
            chartData: {
                type: Object,
                required: true,
                default () {
                    return {};
                }
            },
            title: {
                type: String,
                required: true,
                default () {
                    return 'No value provided'
                }
            }
        }
    }

</script>

