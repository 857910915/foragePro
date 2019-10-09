var path =  "../..";
console.log($);
$(function () {
    //获取用户
    $.get(path+"/read/toGetUser",function (data) {
        if (data.username==undefined){
            $("#user").append('<a href="login.html" target="_top" class="h">亲，请登录</a>\n' +
                '\t\t\t\t\t\t\t<a href="register.html" target="_top">免费注册</a>');
        }else {
            $("#user").append('<a href="../person/index.html" target="_top" class="h">欢迎用户：'+data.username+'</a>\n');
        }
    },"json")

    //获取购物车
    $.get(path+"/shopcart/toShow",function (data) {
        // console.log(data);
        if (data.length!=0){
            $("#J_MiniCartNum").html("("+data.length+")");
        }
    },"json")


});