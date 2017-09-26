/**
 * Created by liutongbin on 2017/9/26.
 */
var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'root',
    password        : '123456',
    database        : 'blog'
});

exports.pool = pool;
