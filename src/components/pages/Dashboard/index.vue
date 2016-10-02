<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-3">
                <main-tile :data="positionMainData"></main-tile>
            </div>
            <div class="tile is-parent is-3">
                <main-tile :data="infoMainData"></main-tile>
            </div>
            <div class="tile is-parent is-3">
                <main-tile :data="routeMainData"></main-tile>
            </div>
            <div class="tile is-parent is-3">
                <main-tile :data="taskMainData"></main-tile>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-vertical is-9">
                <div class="tile">
                    <div class="tile is-parent is-4">
                        <info-tile :data="taskInfoData"></info-tile>
                    </div>

                    <div class="tile is-parent is-4">
                        <info-tile :data="routesInfoData"></info-tile>
                    </div>

                    <div class="tile is-parent is-4">
                        <info-tile :data="positionInfoData"></info-tile>
                    </div>

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
                <!--<overview-tile :chart-data="chartData" :title="'Aufgabenübersicht'"></overview-tile>-->
                <article class="tile is-child box">
                    <div class="content">
                        <p class="title">Aufgabenübersicht</p>
                        <div class="content">
                            <chart :type="'pie'" :data="chartData" :options="chartOptions"></chart>
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
    import SettingTile from '../../tiles/ConfigTile';
    import OverviewTile from '../../tiles/OverviewTile';
    import MainTile from '../../tiles/MainTile';
    import store from '../../../store/tiles';

    export default {
        components: {
            Chart,
            InfoTile,
            SettingTile,
            OverviewTile,
            MainTile
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
            // Main tiles
            positionMainData () {
                return {
                    title: 'Position',
                    img: 'http://fillmurray.com/300/300',
                    url: '#',
                    tooltip: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                }
            },

            routeMainData () {
                return {
                    title: 'Routen',
                    img: 'http://fillmurray.com/300/300',
                    url: '#',
                    tooltip: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                }
            },

            infoMainData () {
                return {
                    title: 'Info',
                    img: 'http://fillmurray.com/300/300',
                    url: '#',
                    tooltip: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                }
            },

            taskMainData () {
                return {
                    title: 'Aufgaben',
                    img: 'http://fillmurray.com/300/300',
                    url: '#',
                    tooltip: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                }
            },

            // config tiles
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

//            Info Tiles
            taskInfoData () {
                return {
                    title: 'Aufgaben',
                    count: Math.ceil(Math.random() * 200),
                    text: 'zum <br> erkunden'
                }
            },

            positionInfoData () {
                return {
                    title: 'Positionen',
                    count: Math.ceil(Math.random() * 100),
                    text: 'markiert'
                }
            },

            routesInfoData () {
                return {
                    title: 'Routes',
                    count: Math.ceil(Math.random() * 150),
                    text: 'verfügbar'
                }
            },

            // chart data
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
            },
            chartOptions () {
                return {
                    legend: {
                        position: 'right'
                    },
                    elements: {
                        arc: {
                            borderColor: 'transparent'
                        }
                    }
                }
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
