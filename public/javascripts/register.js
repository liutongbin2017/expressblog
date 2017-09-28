
;(function($){
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
        $("#inputSuccess3").blur(function () {
            var text_value = $(this).val();
            var $par = $(this).parent();
            if(text_value == ""){
                $par.addClass("has-error");
            }else{
                $par.removeClass("has-error").addClass("has-success");
            }
        }).focus(function () {
            var $this = $(this);
            var $par = $this.parent();
            $par.removeClass("has-error").removeClass("has-success")
        })
        $("#inputSuccess4").blur(function () {
            var text_value = $(this).val();
            var $par = $(this).parent();
            if(text_value == ""){
                $par.addClass("has-error");

            }else{
                $par.removeClass("has-error").addClass("has-success");
            }
        }).focus(function () {
            var $this = $(this);
            var $par = $this.parent();
            $par.removeClass("has-error").removeClass("has-success");
        })
        $("#inputSuccess5").blur(function () {
            var text_value = $(this).val();
            var $par = $(this).parent();
            if(text_value == ""){
                $par.addClass("has-error");

            }else{
                $par.removeClass("has-error").addClass("has-success");
            }
        }).focus(function () {
            var $this = $(this);
            var $par = $this.parent();
            $par.removeClass("has-error").removeClass("has-success");
        })
        $(".register-btn").click(function () {
            var text1 = $("#inputSuccess1").val();
            var text2 = $("#inputSuccess2").val();
            var text3 = $("#inputSuccess3").val();
            var text4 = $("#inputSuccess4").val();
            var text5 = $("#inputSuccess5").val();
            if($.trim(text1)==""){
                alert("用户名称错误");
                return false;
            }
            if($.trim(text2)==""){
                alert("昵称错误");
                return false;
            }
            if($.trim(text3)==""){
                alert("手机号码错误");
                return false;
            }
            if($.trim(text4)==""){
                alert("密码错误");
                return false;
            }
            if($.trim(text5)==""){
                alert("密码错误");
                return false;
            }
            $.ajax({
                url:"/register",
                type:"POST",
                data:{
                    username:text1,
                    password:text2,
                    phone:text3,
                    nickname:text4,
                    avatar:text5
                },
                success:function(res){

                    console.log(res);
                    if(res.affectedRows>0){
                        location.href="/login";
                    }else{
                        alert("错误")
                    }
                },
                error:function(res){
                    console.log(res);

                },

            });
            // window.open("/login");
        })
    })
})(jQuery);