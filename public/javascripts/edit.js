/**
 * Created by liutongbin on 2017/9/26.
 */
;(function ($) {
    $(function () {

        $(".tab-content").on('click','.post-btn', function(e){
            // alert(34);
            // e.preventOverflow();
            var title = $("#exampleInputTitle").val();
            var abstract = $("#exampleInputAbstract").val();
            var content = $('#summernote').summernote('code');
            var tags = "";
            $(".checkbox-inline input[type=checkbox]:checked").each(function(i,item){
                tags += $(item).data("id") + ",";

            });

            tags = tags.slice(0,-1);
            $.ajax({
                url:"/post/article",
                type:"post",
                data:{
                    title:title,
                    abstract:abstract,
                    content:content,
                    tags:tags
                },
                success:function(res){
                    console.log(res);
                    // location.href="/";
                },
                error:function(res){
                    console.log(res);
                }
            })
        })
        $(".tab-content").on('click','#personaList',function(){
            // window.location.href="/personaList";
        })
        $(".tab-content").on('click','#personalDetail',function(){

        })
        $(".tab-content").on('click','#personalInformation',function(){

        })
        $(".tab-content").on('click','#pageSetuo',function(){

        })
        $(".tab-content").on('click','#post',function(){

        })
    })
})(jQuery);
