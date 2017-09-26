/**
 * Created by liutongbin on 2017/9/26.
 */
var pool = require("../db/db").pool;

// exports.login = function() {
//
//
// }



exports.register = function(username,password, phone, nickname,avatar,callback) {

    var sql = "insert into user (username, password,phone, nickname, avatar)  values ('+ str +')";
    pool.query(sql,function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
            // ...
        });
}