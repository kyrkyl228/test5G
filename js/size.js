function width(){
    if(document.documentElement.clientWidth <= 1920){
        let a = document.documentElement.clientWidth/1920;
        $(".wrapper").css("zoom", a);
        // alert(a);
    }else if(document.documentElement.clientWidth >= 1100){
        $("wrapper").css("zoom", 1);
    }
}

$(document).ready(function(){
    width();
    width();
});

$(window).resize(function(){
    width();   
});