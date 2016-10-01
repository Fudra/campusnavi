<template>
    <article class="tile is-child box">
        <p class="title">Routen</p>
        <p class="emphasize">{{routes.count}}</p>
        <div class="content center">
            <p>verfügbar</p>
        </div>
    </article>
</template>

<script type="text/babel">
    import store from '../../store/tiles';

    let routes = 0;

    export default {
        data () {
            return {
                routes
            }
        },
        ready () {
            store.getRouteData()
                .then(
                        routes => {
                            this.routes = routes;
                        }
                )
        }
    };
</script>