<template>
   <article class="tile is-child box">
       <div class="content">
           <nav class="pagination">
               <a class="button"><i :class="['fa', prevButton]"></i></a>
               <a class="button"><i :class="['fa', nextButton]"></i></a>
               <ul>
                   <li>
                       <a class="button">1</a>
                   </li>
                   <li>
                       <span>...</span>
                   </li>
                   <li>
                       <a class="button">45</a>
                   </li>
                   <li>
                       <a class="button is-primary">46</a>
                   </li>
                   <li>
                       <a class="button">47</a>
                   </li>
                   <li>
                       <span>...</span>
                   </li>
                   <li>
                       <a class="button">86</a>
                   </li>
               </ul>
           </nav>
       </div>
   </article>
</template>

<script type="text/babel">
    export default {
        props: {
            prevButton: {
                type: String,
                default () {
                    return 'fa-chevron-left';
                }
            },
            nextButton: {
                type: String,
                default () {
                    return 'fa-chevron-right';
                }
            },
            data: {
                type: Object,
                default () {
                    return {};
                }
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .pagination {

        li {
            list-style: none;
            display: flex;
            align-self: baseline;
        }
        a {
            display: inherit;
        }
        ul {
            margin-top: 0;
        }
    }

    .content {
        display: flex;
        height: 100%;

    }

</style>