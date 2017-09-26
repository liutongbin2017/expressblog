/**
 * Created by liutongbin on 2017/9/26.
 */
var pool = require("../db/db").pool;

exports.users = function(callback) {
    pool.query('SELECT * from user', function (error, results, fields) {
        if (error) throw error;

        callback(results);
    });
}

exports.register = function(params,callback) {
    pool.query('insert into users (username, password,phone, nickname, avatar)  values (?,?,?,?,?)',
        [parmas.username, params.password, params,phone, params.nickname, params.avatar],
        function (error, results, fields) {
        if (error) throw error;
            callback(results);
        // ...
    });
}