<template>
    <div id="tab-nav">
        <span class="active">儿歌</span>
        <span>故事</span>
        <span>朗诵</span>
        <span>英语</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    #tab-nav{
        display: flex;
        width: 100%;
        height: 0.55rem;
        justify-content: space-around;
        span{
            width: 25%;
            height: 0.55rem;
            line-height: 0.55rem;
            color: #434343;
            font-weight: bold;
            font-size: 0.30rem;
        }
        .active{
            border-bottom: 0.05rem solid #1a6bc0;
            color: #1a6bc0;
        }
    }
</style>
