/**
 * Created by liutongbin on 2017/9/26.
 */
var db = require("../db/db");




exports.register = function(username, password,phone, nickname, avatar,callback) {

    var sql = "INSERT INTO user (username, password,phone, nickname, avatar)  VALUES (?,?,?,?,?)";
    
    var insertValue = [username, password,phone, nickname, avatar];

    db.execQuery(sql, insertValue,function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
            // ...
        });
}


exports.login = function(username,callback){
    var sql = "select * from user where username = ?" ;
    db.execQuery(sql, [username],function (error, results, fields) {
        if (error) console.log(error);
        callback(results);
        // ...
    });
}

exports.home = function(title,content,createTime,abstract,userId,tagId,comment,articleId,commentTime,pages,background,name){
    var sql = "";
    db.execQuery(sql, insertValue,function (error, results, fields) {
        if (error) console.log(error);
        callback(results);
        // ...
    });
}
