$(function(){
    BAP.support_main={
        init:function(){
            var self=this;

            //加载首尾公共部分
            self.loadHeadFoot();

            //左边菜单导航切换
            self.changeLeftMenu();

            //咨询反馈框
            self.sakBoxAction();

        },
        loadHeadFoot:function(){
            $("#commonHeader").load('commonHeader.html?v=bap2.0.7');
            $("#commonFooter").load('commonFooter.html?v=bap2.0.7');
        },
        changeLeftMenu:function(){
            $(".support-box .panel-heading").on('click',function(){
                if(!$(this).next().hasClass('in')){
                    $(".support-box .panel-primary").removeClass('on');
                    $(this).parents(".panel-primary").addClass('on');
                }
            });
        },
        sakBoxAction:function(){
            var self=this;

            var yesOrNo=1;
            $(".ask-box .btn-primary").on('click',function(){
                yesOrNo=$(this).attr('answer');
                $(".ask-box").hide();
                $(".feedback-box").show();
            });

            $(".feedback-box .btn-primary").on('click',function(){

                $(".feedback-box").hide();
                if(!$(this).hasClass("commit-btn")){
                    $(".ask-box").show();
                }
            });
        }
    };
    BAP.support_main.init();
});
