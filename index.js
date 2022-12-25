$(".selection li").on("click", (e)=>{
    $(".feature-content").removeClass("show-content");
    $(".feature-content:nth-of-type(" + e.target.value + ")").addClass("show-content");
    $(".selection li").removeClass("selected");
    $(e.target).addClass("selected");
    $("#selection-img").attr("src", "images/illustration-features-tab-" + e.target.value + ".svg");
})

$(".question").on("click", (e)=>{
    $(e.target).toggleClass("expanded");
})

$(".hamburger").on("click", (e)=>{
    $(e.target).attr("src", "images/icon-" + ($(e.target).attr("src") == "images/icon-close.svg" ? "hamburger" : "close") + ".svg");
    $("nav").toggleClass("mobile-nav");
})