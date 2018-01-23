<template>
    <div class="koalaListen">
        <tabNav/>
        <sortNav/>
        <musicList/>
    </div>
</template>

<script>
import tabNav from '../components/koalaListen/tabNav';
import sortNav from '../components/koalaListen/sortNav';
import musicList from '../components/koalaListen/musicList';
export default {
    name: "koalaListen",
    components:{ tabNav,sortNav,musicList },
    data() {
        return {
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
