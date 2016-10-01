<template>
    <article class="tile is-child box">
        <p class="title">Aufgaben</p>
        <p class="emphasize">{{tasks.count}}</p>
        <div class="content center">
            <p>zum <br> erkunden</p>
        </div>
    </article>
</template>

<script type="text/babel">
    import store from '../../store/tiles';

    let tasks = 0;

    export default {
        data () {
            return {
                tasks
            }
        },
        ready () {
            store.getTaskData()
                .then(
                        tasks => {
                            this.tasks = tasks;
                        }
                )
        }
    }
</script>