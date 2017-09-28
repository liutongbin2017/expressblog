
;(function($){
    $(function(){
        $("#name").blur(function () {
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
        $("#nickname").blur(function () {
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
        $("#phone").blur(function () {
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
        $("#password").blur(function () {
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
        $("#confirm_password").blur(function () {
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
            var name = $("#name").val();
            var nickname = $("#nickname").val();
            var phone = $("#phone").val();
            var password = $("#password").val();
            var confirm_password = $("#confirm_password").val();
            if($.trim(name)==""){
                alert("用户名称错误");
                return false;
            }
            if($.trim(nickname)==""){
                alert("昵称错误");
                return false;
            }
            if($.trim(phone)==""){
                alert("手机号码错误");
                return false;
            }
            if($.trim(password)==""){
                alert("密码错误");
                return false;
            }
            if($.trim(confirm_password)==""){
                alert("密码错误");
                return false;
            }
            $.ajax({
                url:"/register",
                type:"POST",
                data:{
                    username:name,
                    password:nickname,
                    phone:phone,
                    nickname:password,
                    avatar:confirm_password
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