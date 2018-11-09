const express = require('express');//nodejs中没有完全支持es6语法，不能使用import，所以使用require引入模块
const mongoose = require('mongoose');

//连接mongo，并使用reactapp这个集合，若不存在该集合，会自动创建集合
let DB_URL = 'mongodb://127.0.0.1:27017/reactapp';
mongoose.connect(DB_URL);
//监听连接状态
mongoose.connection.on('connected', function () {
    console.log('mongo connect success');
});
//类似于mysql中的表，mongodb有"文档"、"字段"
//创建一个user表，字段名包括user和age
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true},
}));

/*//新增数据
User.create({
    user: 'haha',
    age: 10,
}, function (err, doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err)
    }
});
*/
User.create({
    user: '小红',
    age: 20,
}, function (err, doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err)
    }
});

/*//删除数据，命令行提示remove已过时，目前使用deleteOne，deleteMany
User.deleteMany({age: 20}, function (err, doc) {
    console.log(doc)
});*/

/*//更新，collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.
User.updateMany({user: 'haha'}, {'$set': {age: 22}}, function (err, doc) {
    console.log(doc);
});*/


//新建app
const app = express();

app.get('/', function (req, res) {
    //req表示请求，res表示响应
    res.send('<h1>hello world</h1>');//设置返回的数据
});

app.get('/data', function (req, res) {
    //查看
    User.find({}, function (err, doc) {//传入一个空对象{}表示查看所有数据
        res.json(doc);
    })
    // res.json({name: 'ydz', hobby: 'read'});//返回json格式的数据
});

app.get('/data/user', function (req, res) {
    //条件查看
    User.find({user: '小红'}, function (err, doc) {
        res.json(doc);
    })
});

//监听9090端口的请求
app.listen(9090, function () {
    console.log('Node app start at port 9090')
});