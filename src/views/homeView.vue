<template>
    <div class="home">
        <tab-nav></tab-nav>
        <div class="label">
            <span>小猫当当</span>
            <span>小兔汤姆</span>
            <span>巴巴爸爸</span>
            <span>儿童目击者</span>
            <span>阿波林事件</span>
            <span>贝贝熊系列</span>
            <span>不一样的卡梅拉</span>
            <span>更多>></span>
        </div>
        <div class="content">
            <div class="item">
                <img class="photo" src="../assets/content/photo.png" />
                <div class="info">
                    <div class="headline">1.小苹果</div>
                    <div class="caption">考拉儿歌 播放：12345万</div>
                </div>
                <div class="download"></div>
            </div>
        </div>
    </div>
</template>

<script>
import tabNav from '../components/tabNav'
export default {
    name: "home",
    components: { tabNav },
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
    .label {
        width: 100%;
        height: 1.15rem;
        background-color: #f3f3f3;
        span {
            float: left;
            width: 1.51rem;
            height: 0.48rem;
            margin-left: 0.07rem;
            margin-top: 0.06rem;
            border: 0.02rem solid #ccc;
            font-size: 0.2rem;
            line-height: 0.48rem;
            border-radius: 0.05rem;
            color: #f9bd94;
            background-color: #fff;
            font-weight: bold;
        }
    }
    .content {
        width: 100%;
        height: 7.8rem;
        .item {
            position: relative;
            width: 100%;
            height: 0.85rem;
            border-bottom: 0.02rem solid #f9f9f9;
            text-align: left;
            .photo {
                float: left;
                width: 1.13rem;
                height: 0.68rem;
                border-radius: 0.05rem;
                margin-left: 0.15rem;
                margin-top: 0.07rem;
            }
            .info {
                float: left;
                font-size: 0.24rem;
                margin-left: 0.15rem;
                .headline {
                    font-weight: bold;
                    margin-top: 0.15rem;
                }
                .caption {
                    font-size: 0.2rem;
                }
            }
            .download {
                position: absolute;
                right: 0.48rem;
                top: 0.29rem;
                width: 0.27rem;
                height: 0.27rem;
                background-image: url('../assets/content/download.png');
                background-size: 0.27rem;
                background-repeat: no-repeat;
            }
        }
    }
}
</style>
