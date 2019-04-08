const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
// const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const static = require('koa-static');
const path = require('path');
const Animal = require('./model/animal');
const mongoose = require('mongoose');
app.use(cors());
mongoose.connect('mongodb://localhost:27017');
// app.use(cors({
//     origin: function (ctx) {
//         // console.log(ctx.url)
//         // if (ctx.url === '/test') {
//             return "*"; // 允许来自所有域名请求
//         // }
//         // return 'http://localhost:3000';
//         // return "*";
//     },
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }));


mongoose.connection.on('connected', (err) => {
    if (err) return;
    console.log('链接成功');
    router.get('/animal', async (ctx) => {
        let o = {};
        let obj = ctx.request.query;
        console.log(obj.act);
        switch (obj.act) {
            case 'update':
                let {name:username,update} =obj;
                try {
                    await Animal.update({name:username},JSON.parse(update));
                    o.code = 0;
                    o.msg = '修改成功';
                } catch (error) {
                    o.code = 1;
                    o.msg = '修改失败';
                    o.data = [];
                }
            break;
            case 'add':
                let add = new Animal({
                    name: obj.name,
                    id: obj.id,
                    datum:[],
                });
                await add.save()
                o.code = 0;
                o.msg = '添加成功';
                break;
            case 'search':
                try {
                    let {name} = obj;
                    let arr = await Animal.find(JSON.parse(JSON.stringify({
                        name,
                    })));
                    console.log(arr);
                    console.log(obj);
                    if(!arr.length){
                        let add = new Animal({
                            name: obj.name,
                            id: obj.id,
                            datum:[],
                        });
                        await add.save()
                        o.code = 0;
                        o.msg = '注册成功';
                        o.data=arr;
                    }else{
                        o.code = 1;
                        o.msg = '已经有这个人了';
                        o.data=arr;
                    }
                } catch (error) {
                    o.code = 2;
                    o.msg = '查询失败';
                    o.data = [];
                }
                break;
            case 'enter':
                let {
                    id,
                    name
                } = obj;
                try {
                    let arr = await Animal.find(JSON.parse(JSON.stringify({
                        id,
                        name,
                    })));
                    console.log(arr)
                    if(arr.length){
                        o.code = 0;
                        o.msg = '登录成功';
                        o.data=arr;
                    }else{
                        o.code = 1;
                        o.msg = '账号或密码错误';
                        o.data=arr;
                    }
                } catch (error) {
                    o.code = 1;
                    o.msg = '查询失败';
                    o.data = [];
                }
                break;
        }
        ctx.body = o;
    });
    

    app.use(router.routes());
    app.use(static(path.join(__dirname, 'www')));
    app.listen(8080);
})