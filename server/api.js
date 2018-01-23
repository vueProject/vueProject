// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
// 创建账号接口
router.post('/api/user/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser');
    if(req.body.userName === '' && req.body.password === '') {
        res.send('账号或密码错误');
        return;
    }
    // const userName = models.User.findOne({userName: req.body.userName});
    // if(userName) {
    //     res.send('手机号已存在');
    //     return;
    // }
    let newUser = new models.User({
        userName : req.body.userName,
        password : req.body.password,
        id: Math.random()*900000|100000,
        photo: '../assets/content/photo.png',
        vip: false,
        vipEndTime: new Date()
    });
    // 保存数据newAccount数据进mongoDB
    newUser.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口 || 登陆
router.post('/api/user/getAccount', (req,res) => {
    // 通过模型去查找数据库
    const userName = req.body.userName;
    const password = req.body.password;
    console.log('userName',req.body);
    models.User.findOne({userName, password},{ password: 0 },(err,data) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
        }
    })
});

// 创建Data数据
router.post('/api/data/createData',(req,res) => {
    let newDate = new models.Date({
        id: Math.random()*900000|100000,
        photo: req.body.photo,
        playUrl: req.body.playUrl,
        title: req.body.title,
        dec: req.body.dec,
        author: req.body.author,
        playCoumt: 0,
        label: req.body.label,
        type: req.body.type,
        dataSort: req.body.dataSort,
        collect: 0,
        minAge: req.body.minAge,
        maxAge: req.body.maxAge,
        score: 1,
        vip: req.body.vip,
        lyrics: req.body.lyrics ? req.body.lyrics : '',
        time: new Date(),
        createdBy: req.body.createdBy,
        createdAt: new Date()
    });
    newDate.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });

});

router.post('/api/data/getData', (req,res) => {
  // 通过模型去查找数据库
  const type = req.body.type;
  const dataSort = req.body.dataSort;
  // console.log('userName',req.body);
  models.Date.find({type, dataSort},(err,data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(data);
      res.send(data);
    }
  })
});
// router.get('/api/MyProfile/createProfile', (req,res) => {
//   // 通过模型去查找数据库
//   const userId = req.body.type;
//   const dataSort = req.body.dataSort;
//   // console.log('userName',req.body);
//   models.Date.find({type, dataSort},(err,data) => {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else {
//       console.log(data);
//       res.send(data);
//     }
//   })
// });


module.exports = router;
