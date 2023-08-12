function SetStyle(){
    $("*").css({
        fontFamily: "tahoma",
        fontSize: "12px",
        direction: "rtl",
    });
    
    $("table,tr,td,th").css({
        "border-color": "black", 
        "border-width":"1px", 
        "border-style":"solid"
    });

    $("table").css({
        "border-collapse": "collapse",
        "text-align": "center",
        "width": "100%",
        "height": "auto",
        "padding": "150px"  
    });
    
    $("div").css({
        "width": "60%",
        "height": "auto",
        "margin": "10px",
        "background-color": "aqua"
    });
    $("input[type=button]").css({
        "width": "auto", 
    });

    $('.save').css({
        "display": "none",
        "background": "#32AD60",
        "color": "#ffffff",
      });
};


$(function(){
    SetStyle();
    return;
})
