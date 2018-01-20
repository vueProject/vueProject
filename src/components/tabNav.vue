<template>
    <div class="tab-nav">
        <div class="title">
            <!-- <span class="active" @click="myClick(0)">儿歌</span>
            <span>故事</span>
            <span>绘本</span>
            <span>动画片</span> -->
            <router-link :to="{name: 'HomeView'}">考拉看<span></span></router-link>
            <router-link :to="{name: 'HomeView'}">考拉听<span></span></router-link>
            <router-link :to="{name: 'HomeView'}">考拉学<span></span></router-link>
            <router-link :to="{name: 'HomeView'}">我的<span></span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "tab-nav",
    data() {
        return {
            // msg: "Welcome to Your Vue.js App"
        };
    },
    methods: {
        myClick(item) {
            console.log();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tab-nav {
    .title {
        display: flex;
        width: 100%;
        height: 0.55rem;
        border-bottom: 0.02rem solid #ccc;
        a {
            display: inline-block;
            width: 100% / 4;
            height: 0.55rem;
            text-align: center;
            line-height: 0.55rem;
            color: #434343;
            font-weight: bold;
        }
        .router-link-active {
            border-bottom: 0.03rem solid #1a6bc0;
        }
    }
}
</style>
