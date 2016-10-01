<template>
    <article class="tile is-child box">
        <p class="title">Positionen</p>
        <p class="emphasize">{{positions.count}}</p>
        <div class="content center">
            <p>markiert</p>
        </div>
    </article>
</template>

<script type="text/babel">
    import store from '../../store/tiles';

    let positions = 0;

    export default {
        data () {
            return {
                positions
            }
        },
        ready () {
            store.getPositionData()
                .then(
                        positions => {
                            this.positions = positions;
                        }
                )
        }
    };
</script>