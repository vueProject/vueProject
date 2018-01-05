<template>
    <div class="header-nav">
        <div class="navigate"></div>
        <input class="search" type="text" placeholder="搜儿歌、动画片、热门歌曲" />
        <div class="selectAge">选择年龄</div>
    </div>
</template>

<script>
export default {
    name: "headerNav",
    data() {
        return {
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header-nav {
        position: fixed;
        width: 6.4rem;
        height: 1.08rem;
        background-color: #2874cc;
        top: 0;
        left: 0;
        padding-top: 0.35rem;
        .navigate {
            float: left;
            width: 0.67rem;
            height: 100%;
            background-image: url('../assets/header/nav.png');
            background-repeat: no-repeat;
            background-size: 0.67rem 0.74rem;
        }
        .search {
            float: left;
            width: 4.45rem;
            height: 0.5rem;
            margin-top: 0.13rem;
            border: none;
            border-radius: 0.1rem;
            text-indent: 0.2rem;
            color: #000;
            font-size: 0.28rem;
        }
        .selectAge {
            float: left;
            width: 1.09rem;
            height: 0.5rem;
            border: 1px solid #fff;
            border-radius: 0.1rem;
            margin-top: 0.13rem;
            margin-left: 0.11rem;
            font-size: 0.24rem;
            color: #fff;
            line-height: 0.5rem;
        }

    }
</style>
