var path =  "../..";
$(function () {
    var status=-1;
    $.get(path+"/orderdetails/toShow",{"status":status},function (data) {
        
    },"json");
});