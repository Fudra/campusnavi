<template>
    <article class="tile is-child box">
        <div class="title text-left">{{title}}</div>
        <div class="content">
            <p class="control has-icon has-icon-right">
                <input class="input" type="text" placeholder="Suchen.." value="">
                <i :class="['fa', icon]"></i>
                <!--<span class="help is-danger">This email is invalid</span>-->
            </p>
        </div>
    </article>
</template>

<script type="text/babel">
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
           }
       }
   }
</script>