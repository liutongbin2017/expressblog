/**
 * Created by liutongbin on 2017/9/26.
 */
;(function ($) {
    $(function(){
        $("#inputSuccess1").blur(function () {
            var text_value = $(this).val(),
                $par = $(this).parent();
            console.log($par);
            if(text_value == ""){
                $par.addClass("has-error");

            }else{
                $par.removeClass("has-error").addClass("has-success");
            }
        }).focus(function() {
            var $this = $(this),
                $par = $this.parent();

            $par.removeClass("has-error").removeClass("has-success");
        });
        $("#inputSuccess2").blur(function () {
            var text_value = $(this).val();
            var $par =$(this).parent();
            if(text_value == ""){
                $par.addClass("has-error");

            }else{
                $par.removeClass("has-error").addClass("has-success");
            }
        }).focus(function(){
            var $this = $(this);
            $par = $this.parent();
            $par.removeClass("has-error").removeClass("has-success");
        })
        $(".btn").click(function () {
            var username = $("#inputSuccess1").val();
            var password = $("#inputSuccess2").val();
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