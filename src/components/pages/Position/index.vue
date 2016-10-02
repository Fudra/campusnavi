<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-3">
                <icon-tile :icon="'fa-thumb-tack'"></icon-tile>
            </div>
            <div class="tile is-parent">
                tile search
            </div>
            <div class="tile is-parent is-3">
                tile count
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-12">
                table
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-3"></div>
            <div class="tile is-parent">
                tile pagination
            </div>
            <div class="tile is-parent is-3">
                tile add
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import IconTile from '../../tiles/IconTile';

    export default {
        components: {
            IconTile
        }
    }

</script>