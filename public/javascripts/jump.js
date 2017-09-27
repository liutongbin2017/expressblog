/**
 * Created by liutongbin on 2017/9/26.
 */
;(function ($) {
    $(function(){
        $("#jump").click(function () {
            var username = $("#username").val();
            var password = $("#password").val();
            if($.trim(username)==""){
                alert("name is error!");
                return false;
            }
            if($.trim(password)==""){
                alert("username is error!");
                return false;
            }
            window.open("/home");
        })
    })
})(jQuery)