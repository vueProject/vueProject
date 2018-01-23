<template>
    <div class="tab-nav">
       <!-- <div class="title">
            &lt;!&ndash;<span class="active" @click="myClick(0)">儿歌</span>&ndash;&gt;
            &lt;!&ndash;<span @click="myClick(0)">故事</span>&ndash;&gt;
            &lt;!&ndash;<span @click="myClick(0)">绘本</span>&ndash;&gt;
            &lt;!&ndash;<span @click="myClick(0)">动画片</span>&ndash;&gt;
            <span v-for="(item,index) in title" @click="myClick(index)" ref="myspan">{{item}}</span>

        </div>-->
        <!--类型分类-->
        <div class="title">
            <ul>
                <li v-for="(item,index) in title" @click="getdetails(index)" ref="myli">{{item}}</li>
            </ul>
        </div>

        <div class="body">
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
                <div class="item" v-for="(item,index) in data">
                    <img class="photo" :src="item.photo"/>
                    <div class="info">
                        <div class="headline">{{index}}.{{item.title}}</div>
                        <div class="caption">{{item.type === 1 ? '考拉儿歌' : item.type===2?'考拉故事':'考拉学'}} 播放：{{item.playCoumt}}万</div>
                    </div>
                    <div class="download"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "tab-nav",
    data() {
        return {
            // msg: "Welcome to Your Vue.js App"
            title:["儿歌","故事","绘本","动画片"],
            type: 1,
            dataSort:0,
            data:{}

        };
    },

    created(){
        let params={
            type:1,
            dataSort:1
        }
        this.$http.post("/api/data/getData", params)
            .then((response) => {
                // 响应成功回调
                if(response.data === "") {
                    console.log(response)
                    return;
                }
                this.data=response.data;
                console.log(this.data);
                // 创建一个账号密码
            })
            .catch((reject) => {
                console.log(reject)
            });
    },
    mounted(){
        document.getElementsByClassName("title")[0].getElementsByTagName("li")[0].classList.add("active");
    },
    methods: {

        getdetails(index){
            //修改选中样式
            for(let i=0;i<this.$refs.myli.length;i++){
                this.$refs.myli[i].classList.remove("active");
            }
            this.$refs.myli[index].classList.add("active");
            this.dataSort=index+1;
            let params={
                type:this.type,
                dataSort:this.dataSort
            }
            // `/api/data/getData&type=${this.type}&dataSort=${this.dataSort}`
            this.$http.post("/api/data/getData", params)
                .then((response) => {
                    // 响应成功回调
                    if(response.data === "") {
                        console.log(response)
                        return;
                    }
                    this.data=response.data;
                    console.log(this.data);
                    // 创建一个账号密码
                })
                .catch((reject) => {
                    console.log(reject)
                });



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

    ul{
        list-style: none;
        width: 100%;
    }
        li {
            display: inline-block;
            width: 100% / 4;
            height: 0.55rem;
            text-align: center;
            line-height: 0.55rem;
            color: #434343;
            font-weight: bold;
        }
        .active {
            border-bottom: 0.03rem solid #1a6bc0;
        }
    }
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
    height: 1rem;
    border-bottom: 0.02rem solid #dddddd;
    text-align: left;
    /*background-color:red;*/
/**/
.photo {
    float: left;
    width: 1.13rem;
    height: 0.85rem;
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
