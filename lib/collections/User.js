// import { Mongo } from 'mongodb';
// const Login = new Mongo.Collection('Login');
const mongoose = require('mongoose');

/**
 * 我的帐户
 * @type {SimpleSchema}
 */

const UserSchema = mongoose.Schema({
    id: {
        label: '用户id',
        type: Number,
    },
    userName: {
        label: '用户名',
        type: String,
        defaultValue: '',
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
        optional: true,
    },
    vipEndTime: {
        label: 'Date',
        type: Date,
    }
});

// Login.schema = new SimpleSchema({
//     id: {
//         label: '用户id',
//         type: Number,
//     },
//     userName: {
//         label: 'Token',
//         type: String,
//         defaultValue: '',
//     },
//     name: {
//         label: '用户名',
//         type: String,
//     },
//     photo: {
//         label: '头像',
//         type: String,
//     },
//     vip: {
//         label: '是否会员',
//         type: Boolean,
//         optional: true,
//     },
//     vipEndTime: {
//         label: 'Date',
//         type: Date,
//     }
// });

// User.attachSchema(UserSchema);

// export default UserSchema;