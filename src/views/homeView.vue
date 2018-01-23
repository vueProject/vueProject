<template>
    <div class="home">
        <tab-nav></tab-nav>

    </div>
</template>

<script>
import tabNav from '../components/tabNav';

export default {
    name: "home",
    components: {
        tabNav,

    },
    data() {
        return {
            // msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
}
</style>
