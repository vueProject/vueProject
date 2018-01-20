<template>
    <div class="uploaduDate">
        <input text="text" placeholder="请输入标题" v-model="title">
        <input type="text" placeholder="请输入详情" v-model="dec">
        <input type="text" placeholder="请输入歌手名" v-model="author">
        <!-- <input type="text" placeholder="请输入歌手名" v-model="author"> -->
        <div>
            <span>文件类型:</span>
            <select v-model="selected"  @change="valueChange(selected)">
                <option v-for="option in type" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>
        <div>
            <span>分类:</span>
            <select v-model="selectes">
                <option v-for="option in dataSort" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>
        <div>
            <span>是否vip才能看:</span>
            <select v-model="vip">
                <option v-for="option in isVip" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>
        <input type="number" placeholder="请输入适合最小年龄" v-model="minAge" />
        <input type="number" placeholder="请输入适合最大年龄" v-model="maxAge" />
        <button type="submit" class="btn btn-default" @click="submit">提交</button>
    </div>
</template>

<script>    
export default {
    data() {
        return {
            title: "",
            dec: "",
            author: "",
            selected: 0,
            type: [
                { text: "请选择", value: 0},
                { text: "视频", value: 1 },
                { text: "听歌", value: 2 },
                { text: "学习", value: 3 }
            ],
            selectes: 7,
            dataSort: [
                { text: "请选择", value: 7}
            ],
            vip: false,
            isVip: [
                { text: '否', value: false },
                { text: '是', value: true }
            ],
            minAge: "",
            maxAge: ""
        };
    },
    methods: {
        valueChange(value) {
            if(value === 0) {
                const dataSort = [
                    { text: "请选择", value: 7},
                ];
                this.selectes = 7;
                return;
            }
            if(value === 1) {
                const dataSort = [
                    { text: "请选择", value: 7},
                    { text: "儿歌", value: 1},
                    { text: "故事", value: 2},
                    { text: "绘本", value: 3},
                    { text: "动画片", value: 4}
                ];
                this.dataSort = dataSort;
            }
            if(value === 2) {
                const dataSort = [
                    { text: "请选择", value: 7},
                    { text: "儿歌", value: 1},
                    { text: "故事", value: 2},
                    { text: "朗诵", value: 5},
                    { text: "英语", value: 6}
                ];
                this.dataSort = dataSort;
            }
            if(value === 3) {
                const dataSort = [
                    { text: "请选择", value: 7},
                    { text: "无", value: 0},
                ];
                this.dataSort = dataSort;
                this.selectes = 7;
            }
            console.log(this.dataSort);
        },
        submit() {
            console.log(this.vip);
            if(this.title === '') {
                alert('标题不能为空');
                return;
            }
            if(this.dec === '') {
                alert('描述不能为空');
                return;
            }
            if(this.author === '') {
                alert('歌手不能为空');
                return;
            }
            if(this.selected === 0) {
                alert('请选择文件类型');
                return;
            }
            if(this.selectes === 7) {
                alert('请选择分类');
                return;
            }
            if(this.minAge >= this.maxAge) {
                alert('适合最小年龄不能比最大年龄大');
                return;
            }
            let params = {
                photo: '../assets/content/photo.png',
                playUrl: '../assets/play/var.mp3',
                title: this.title,
                type: this.selected,
                dataSort: this.selectes,
                label: ['儿歌','考拉儿歌'],
                minAge: this.minAge,
                maxAge: this.maxAge,
                vip: this.vip,
                createdBy: 253669
            };
            this.$http
            .post("/api/data/createData", params)
            .then(response => {
                // 响应成功回调
                if (response.data === "") {
                    console.log(response);
                    alert("插入数据失败");
                    return;
                }
                console.log(response.data);
                alert("创建成功");
                // 创建一个账号密码
                // return this.$http.post('/api/login/createAccount',params);
            })
            .catch(reject => {
                console.log(reject);
            });
        }
        // login() {
        // // 获取已有账号密码
        //     let params = {
        //         userName: this.userName,
        //         password: this.password
        //     };
        //     this.$http
        //     .post("/api/user/getAccount", params)
        //     .then(response => {
        //         // 响应成功回调
        //         if (response.data === "") {
        //             console.log(response);
        //             alert("账号或密码错误");
        //             return;
        //         }
        //         console.log(response.data);
        //         alert("登陆成功");
        //         // 创建一个账号密码
        //         // return this.$http.post('/api/login/createAccount',params);
        //     })
        //     .catch(reject => {
        //         console.log(reject);
        //     });
        // }
    }
};
</script>
<style scoped lang="less">
.uploaduDate {
    select {
        text-align: center;
        border: 0.02rem solid #ccc;
        margin-top: 0.1rem;
    }
    input,
    button {
        display: block;
        margin: auto;
        text-align: center;
        border: 0.02rem solid #ccc;
        margin-top: 0.1rem;
    }
}
</style>
