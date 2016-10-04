<template>
    <article class="tile is-child box">
        <div class="title text-left">{{title}}</div>
        <div class="content">
            <p class="control has-icon has-icon-right">
                <input v-model="thisMessage" class="input" type="text" :placeholder="placeholder" value="">
                <i :class="['fa', icon]"></i>
                <!--<span class="help is-danger">This email is invalid</span>-->
            </p>
        </div>
    </article>
</template>

<script type="text/babel">
    import { searchItem } from '../../vuex/actions';
    import { getSearchItem } from '../../vuex/getters';

   export default {
       props: {
           title: {
               type: String,
               default () {
                   return 'Nach was möchten Sie suchen?';
               }
           },
           icon: {
               type: String,
               default () {
                   return 'fa-search';
               }
           },
           placeholder: {
               type: String,
               default () {
                   return 'Suche..';
               }
           }
       },
       vuex: {
           getters: {
               message: getSearchItem
           },
           actions: {
               updateMessage: searchItem
           }
       },
       computed: {
           thisMessage: {
               get () {
                   return this.message;
               },
               set (val) {
                   this.updateMessage(val);
               }
           }
       }
   };
</script>