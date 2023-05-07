const express = require('express');
const router = express.Router();
const mysql = require("../mysql");

//首页输出"Hello World"
router.get('/', function (req, res) {
    console.log("主页 GET 请求")
    
   // res.send('OK');

    const query = 'SELECT * from account LIMIT 2;';
   // 调用mysql.js中查询函
    mysql.mysqlQuery(query, (err, results) => {
        if (err) {
            res.status(500).send('Error executing query');
        } else {
            res.send(results);
        }
    })
});


            
//POST请求
router.post('/', function (req, res) {
    console, log(" POST ")
    res.send('Hello POST')
})

module.exports = router