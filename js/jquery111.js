//车点击事件
$(".add").click(function () {
　　$(".model").fadeTo(300,1)
　　//隐藏窗体的滚动条
　　$("body").css({ "overflow": "hidden" });
});

//模态框点击事件
$(".modelOk").click(function () {
　　$(".model").hide();
　　//显示窗体的滚动条
　　$("body").css({ "overflow": "visible" });
})


$(".edit").click(function () {
　　$(".model1").fadeTo(300,1)
　　//隐藏窗体的滚动条
　　$("body").css({ "overflow": "hidden" });
});
$(".modelOk").click(function () {
　　$(".model1").hide();
　　//显示窗体的滚动条
　　$("body").css({ "overflow": "visible" });
})