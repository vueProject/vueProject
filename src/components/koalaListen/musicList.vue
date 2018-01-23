<template>
    <div class="music-list">
        <span class="number">1</span>
        <div class="music-con">
            <div class="music-title">虫儿飞</div>
            <div class="music-info"><span class="music-sort">儿童歌曲</span><span class="play-bout">播放：123万</span></div>
        </div>
        <span class="download"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .music-list{
        width: 100%;
        height: 0.9rem;
        display: flex;
        .number{
            display: flex;
            flex: 0.8;
            color: #2975CD;
            font-size: 0.4rem;
            justify-content: center;
            align-items: center;
        }
        .music-con{
            display: flex;
            flex-direction: column;
            flex:4;
            text-align: left;
            justify-content: center;
            .music-title{
                font-size: 0.30rem;
                font-weight: bold;
            }
            .music-info{
                font-size: 0.20rem;
                margin-top: 0.1rem;
                color: #989898;
                .play-bout{
                    margin-left: 0.15rem;
                }
            }
        }
        .download{
            flex: 1;
            background-image: url('../../assets/content/download.png');
            background-size: 0.35rem;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
</style>