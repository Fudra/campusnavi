<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <info-tile :text="Hallo World"></info-tile>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Two</p>
                    <p class="subtitle">Subtitle</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Three</p>
                    <p class="subtitle">Subtitle</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Four</p>
                    <p class="subtitle">Subtitle</p>
                </article>
            </div>
        </div>

        <!--<div class="tile is-ancestor">-->
            <!--<div class="tile is-parent">-->
                <!--<article class="tile is-child box">-->
                    <!--<h4 class="title">Five</h4>-->
                    <!--<div class="content">-->
                        <!--<chart :type="'doughnut'" :data="chartData"></chart>-->
                    <!--</div>-->
                <!--</article>-->
            <!--</div>-->
            <!--<div class="tile is-parent">-->
                <!--<article class="tile is-child box">-->
                    <!--<h4 class="title">Six</h4>-->
                    <!--<div class="content">-->
                        <!--<chart :type="'pie'" :data="chartData"></chart>-->
                    <!--</div>-->
                <!--</article>-->
            <!--</div>-->
        <!--</div>-->

        <div class="tile is-ancestor">
            <div class="tile is-vertical is-9">
                <div class="tile">
                    <div class="tile is-parent">
                        <task-count-tile></task-count-tile>
                    </div>

                    <div class="tile is-parent">
                        <route-count-tile></route-count-tile>
                    </div>

                    <div class="tile is-parent">
                        <position-count-tile></position-count-tile>
                    </div>

                    <!--<div class="tile is-8 is-parent">-->
                        <!--<article class="tile is-child box">-->
                            <!--<p class="title">Eight</p>-->
                            <!--<p class="subtitle">Subtitle</p>-->
                            <!--<div class="content">-->
                                <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu-->
                                    <!--pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis-->
                                    <!--feugiat facilisis.</p>-->
                            <!--</div>-->
                        <!--</article>-->
                    <!--</div>-->
                </div>
                <!-- Config -->
                <div class="tile">
                    <div class="tile is-parent is-8">
                        <article class="tile is-child box">
                            <p class="title">Benutzereinstellungen</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                    feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">gear</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                    feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <!--/ Config -->
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <div class="content">
                        <p class="title">Aufgabenübersicht</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
                                pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida
                                libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci,
                                quis semper odio felis ut quam.</p>

                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Chart from 'vue-bulma-chartjs';
    import InfoTile from '../../tiles/InfoTile';
    import TaskCountTile from '../../tiles/TaksCountTile';
    import RouteCountTile from '../../tiles/RouteCountTile';
    import PositionCountTile from '../../tiles/PositionCountTile';

    export default {
        components: {
            Chart,
            InfoTile,
            TaskCountTile,
            RouteCountTile,
            PositionCountTile
        },

        data () {
            return {
                data: [ 300, 50, 100 ]
            };
        },

        computed: {
            chartData () {
                return {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                    datasets: [
                        {
                            data: this.data,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                            ]
                        }
                    ]
                };
            }
        },

        created () {
            setInterval(
                    () => {
                        // https://vuejs.org/guide/list.html#Mutation-Methods
                        // this.data.unshift(this.data.pop())
                        this.data.forEach(
                                (item, i) => {
                                    this.data.$set(i, Math.ceil(Math.random() * 1000));
                                }
                        );
                    }, 1024
            );
        }
    };

</script>

<style lang="scss" scoped>
</style>
