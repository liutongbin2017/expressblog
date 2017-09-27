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


exports.login = function(username,password){
    var sql = "insert into user (username, password)  values ('+ str +')";
    pool.query(sql,function(error,results,fields){
        if(error) console.log(error);
        callback(results);
    });
}

exports.home = function(title,content,createTime,abstract,userId,tagId,comment,articleId,commentTime,pages,background,name){
    var sql = "insert into user (title,content,createTime,abstract,userId,tagId,comment,articleId,commentTime,pages,background,name) values ('+ str +')";
    pool.query(sql,function(error,result,fields){
        if(error) comnsole.log(error);
        callback(results);
    });
}