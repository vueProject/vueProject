// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// const UserSchema = require('../lib/collections/User');

// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const UserSchema = mongoose.Schema({
    id: {
        label: '用户id',
        type: Number,
    },
    userName: {
        label: '用户名',
        type: String,
        // defaultValue: '',
    },
    password: {
        label: '密码',
        type: String,
    },
    photo: {
        label: '头像',
        type: String,
    },
    vip: {
        label: '是否会员',
        type: Boolean,
        // optional: true,
    },
    vipEndTime: {
        label: 'Date',
        type: Date,
    }
});
const DateSchema = mongoose.Schema({
    id: {
        label: '数据id',
        type: Number,
    },
    photo: {
        label: '图片',
        type: String,
    },
    playUrl: {
        label: '文件路径',
        type: String,
    },
    title: {
        label: '标题',
        type: String,
    },
    dec: {
        label: '描述',
        type: String,
    },
    author: {
        label: '作者',
        type: String,
    },
    playCoumt: {
        label: '播放量',
        type: Number,
    },
    label: {
        label: '标签',
        type: String,
    },
    type: {
        label: '类型',
        type: Number,
    },
    dataSort: {
        label: '分类',
        type: Number,
    },
    collect: {
        label: '播放量',
        type: Number,
    },
    minAge: {
        label: '最小年龄',
        type: Number,
    },
    maxAge: {
        label: '最大年龄',
        type: Number,
    },
    score: {
        label: '评分',
        type: Number,
    },
    vip: {
        label: '是否会员才能看',
        type: Boolean,
        // optional: true,
    },
    lyrics: {
        label: '歌词路径',
        type: String,
    },
    createdBy: {
        label: '上传人id',
        type: Number,
    },
    createdAt: {
        label: '创建时间',
        type: Date,
    }
});
const MyProfileSchema = mongoose.Schema({
    userId: {
        label: '用户id',
        type: Number,
    },
    dataId: {
        label: '收藏id',
        type: Number,
    },
    profileTime: {
        label: '收藏时间',
        type: Date,
    }
  // userId: 123456 //用户Id
  // dataId: 123456  // 收藏Id
  // profileTime: Date  // 收藏时间
})
/************** 定义模型Model **************/
const Models = {
    User : mongoose.model('User',UserSchema),
    Date : mongoose.model('Date',DateSchema),
    MyProfile : mongoose.model('MyProfile',MyProfileSchema),
}

module.exports = Models;
