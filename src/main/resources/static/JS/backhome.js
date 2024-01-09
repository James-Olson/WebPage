/*$(".backbuttoncontainer, .backhomehide, .backhomelabel, .backhomeclick").click(function(){
    $(".hideemail").hide();
});*/

/*$(".backhomelabel.backhomehide").click(function(){
    $(".hideemail").hide();
});

$(".backhomeclick.backhomehide").click(function(){
    $(".hideemail").hide();
});*/

$(document).on("click", ".backhomehide", function(){
    $(".hideemail").hide();
});