<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <!--<info-tile :text="Hallo World"></info-tile>-->
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
                        <info-tile :data="taskData"></info-tile>
                        <!--<task-count-tile></task-count-tile>-->
                    </div>

                    <div class="tile is-parent">
                        <info-tile :data="routesData"></info-tile>
                    </div>

                    <div class="tile is-parent">
                        <info-tile :data="positionData"></info-tile>
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
                        <setting-tile :data="configUserData" :display-info="true"></setting-tile>
                    </div>
                    <div class="tile is-parent">
                        <setting-tile :data="configTileData"></setting-tile>
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
                                libero rhoncus ut..</p>
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
    import SettingTile from '../../tiles/ConfigTile';
    import store from '../../../store/tiles';

    export default {
        components: {
            Chart,
            InfoTile,
            TaskCountTile,
            RouteCountTile,
            PositionCountTile,
            SettingTile
        },

        data () {
            return {
                data: [ 300, 50, 100 ],
                routes: 0,
                tasks: 0,
                positions: 0
            };
        },

        computed: {
            configTileData () {
                return {
                    icon: 'fa-gear',
                    link: '#',
                    info: {}
                }
            },

            configUserData () {
                return {
                    icon: 'fa-users',
                    link: '#',
                    info: {
                        title: 'Benutzereinstellungen',
                        count: '20',
                        text: 'Benutzer verfügbar'
                    }
                }
            },

            taskData () {
                return {
                    title: 'Aufgaben',
                    count: Math.ceil(Math.random() * 200),
                    text: 'zum <br> erkunden'
                }
            },

            positionData () {
                return {
                    title: 'Positionen',
                    count: Math.ceil(Math.random() * 100),
                    text: 'markiert'
                }
            },

            routesData () {
                return {
                    title: 'Routes',
                    count: Math.ceil(Math.random() * 150),
                    text: 'verfügbar'
                }
            },

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
        },

        ready () {
            this.getTaskDataCount();
            console.log(this.tasks);
        },

        methods: {
           getTaskDataCount () {
               store.getTaskData()
                   .then(
                       tasks => {
                         this.tasks = tasks;
                       }
                   )
              }
           }
    };

</script>

<style lang="scss" scoped>
</style>
