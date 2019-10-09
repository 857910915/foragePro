var path =  "../..";
$(function () {
    var code=showWindowHref();

    $.get(path+"/orderdetails/toShowOne",{"code":code},function (data) {
        var commodity1=data.set;
        console.log(data.set);
        for(var i in commodity1){
            var mode=commodity1[i].commodity;
            $(".comment-main").append('<div class="comment-list">\n' +
                '\t\t\t\t\t\t\t\t<div class="item-pic">\n' +
                '\t\t\t\t\t\t\t\t\t<a href="#" class="J_MakePoint">\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="'+(path+mode.imgPath)+'" class="itempic">\n' +
                '\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<div class="item-title">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="item-name">\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<p class="item-basic-info">'+mode.name+'</p>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="item-info">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="info-little">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span>'+mode.details+'</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="item-price">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t价格：<strong>'+mode.price+'</strong>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="clear"></div>\n' +
                '\t\t\t\t\t\t\t\t<div class="item-comment">\n' +
                '\t\t\t\t\t\t\t\t\t<textarea id="comm'+mode.id+'" placeholder="请写下对宝贝的感受吧，对他人帮助很大哦！"></textarea>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<div class="info-btn">\n' +
                '\t\t\t\t\t\t\t\t<div class="am-btn am-btn-danger" onclick="toComment('+mode.id+')">发表评论</div>\n' +
                '\t\t\t\t\t\t\t</div>');
        }
    },"json");
});

//获取参数
function showWindowHref() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    if (args[0] == sHref) {
        return "";
    }
    var arr = args[1].split('=');
    return arr[1];
}
//发表评价
function toComment(id) {
    var context=$("#comm"+id).val();
    console.log(context);
    $.post(path+"/evaluate/toAdd",{"cId":id,"context":context},function (data) {
        alert(data);
    },"json")
}