# vueProject

> ceshi

## Build Setup

``` bash
# 下载npm包
# install dependencies
npm install

# 启动项目命令
# serve with hot reload at localhost:8080
npm run dev

# 打包
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test



# 头部、底部、我的-左侧
# 考拉看-动画片、考拉看-儿歌、考拉看-故事、考拉看-绘本
# 考拉看-动画片-列表
# 考拉看-故事-列表
# 考拉看-绘本-列表
# 考拉看-搜索页面-列表2
# 考拉听-儿歌-播放器列表2、考拉听-儿歌-播放应用、考拉听-儿歌、考拉听-故事、考拉听-英语
# 考拉听-儿歌-列表、考拉听-故事-列表、考拉听-诵读-列表、考拉听-英语-列表
# 考拉学、关于-新
# 我的-我下载的歌曲0、我的-我下载的故事、我的-最近收听、分享-评论

``` 

```js
// 用户表
// User
{
    _id: 'zdjdjenn_dkd',
    id: 123456, // 用户id
    userName: 'kenney',  // 用户名
    photo: './images/xxx.png', // 头像
    vip: true, // 是否会员
    vipEndTime: Date   // vip到期时间
}
// 数据表
// Data
{
    _id: 'zdjdjenn_dkd'
    id: 123456, // 数据id
    photo: '../images/xxx.png',  // 图片
    playUrl: './play/xxxx.mp3',  // 资源路径
    title: '小苹果',  // 标题
    dec: '超级可爱的小猫形象，让人不由自主....' // 描述
    author: '李白',  // 作者
    playCoumt: 111,   // 播放量
    label: ['考拉儿歌','兔宝贝儿歌',...], // 标签
    type: 1,  // 类型, 1:看, 2:听, 3:学
    dataSort: '故事', // 数据分类,  看: 儿歌,故事,绘本,动画片;  听: 儿歌, 故事, 朗诵, 英语; 学: 没有； 0:空  1:儿歌 2:故事 3:绘本 4: 动画片 5:朗诵 6: 英语
    collect: '100' // 收藏量
    minAge: 2, // 适合最小年龄
    maxAge: 4, // 适合最大年龄
    score: 9.7, // 评分
    vip: true, // 是否vip才能看, true false
    lyrics: './lyrics/xxxx.krc',  // 歌词
    time: Date, // 播放时长
    createdBy: 123456  // 上传人id
    createdAt: Date   // 上传时间
}

// 我的收藏
// MyProfile
{
    userId: 123456 //用户Id
    dataId: 123456  // 收藏Id
    profileTime: Date  // 收藏时间
}
// 意见反馈
// Feedback
{
    userId: 123456,  // 反馈人id
    content: 'dsfsdfdsf',  // 反馈内容
    number: 123456,  // 反馈联系人
    time: Date,   //反馈时间
}

```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

