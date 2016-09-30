<template>
    <div class="user-media-object">
        <img :src="user.img" alt="User image" class="user-img img-rounded">
        <div class="user-info">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-role">{{ user.role }}</div>
        </div>
    </div>

</template>

<script type="text/babel">
    import store from '../store';

    export default {
        data () {
            return {
                user: {}
            };
        },
        ready () {
            store.getUserData()
                .then(
                    user => {
                        this.user = user;
                    }
                );
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">

    @import "../scss/base/variables";

    .user-media-object {
        display: flex;
        vertical-align: bottom;
        align-items: center;
    }

    .user-img {
        width: 50px;
        height: 50px;
        display: block;
    }

    .user-info {
        display: block;
        text-align: left;
        padding-right: 20px;
        padding-left: 20px;

        .user-name {
            font-size: $font-user-name-size;
            color: $font-user-name-color;
        }
        .user-role {
            font-size: $font-user-role-size;
            color: $font-user-role-color;
            font-weight: $font-user-role-weight;
        }
    }

</style>