<template>
    <div class="pagesView">
        <header-nav></header-nav>
        <router-view></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import headerNav from '../components/headerNav'
import footerNav from '../components/footerNav'
export default {
    name: "pagesView",
    components: { headerNav, footerNav },
    data() {
        return {
            // msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .pagesView {
        padding-top: 1.1rem;
    }
</style>
