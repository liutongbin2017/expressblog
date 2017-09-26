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
