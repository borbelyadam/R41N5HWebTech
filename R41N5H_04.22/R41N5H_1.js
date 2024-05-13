$(document).ready(function(){
    $("#startAnimation").click(function(){
        $("div").animate({
            left: '300px',
            width: '300px',
        }, 1000)
        .animate({
            top: '100px',
            height: '+=50px',
            fontSize: '30pt'
        }, 2000)
        .animate({
            left: '0',
            opacity: '0.4'
        }, 1000)
        .animate({
            top: '0px',
            width: '150px',
            height: '50px',
            opacity: '1',
            fontSize: '12pt'
        }, 1000, function(){
            alert("VÉGE");
        });
    });

    // Bekezdés elrejtése gombra kattintva elrejti a bekezdéseket és a doboz a bekezdések helyére kerül
    $("#hideParagraphs").click(function(){
        $("p").hide();
        $("#box").appendTo("body");
        alert("Bekezdések elrejtése");
    });

    // Összecsuk / Kinyit gombra kattintva összecsukja/kinyitja a dobozt
    $("#toggleBox").click(function(){
        $("div").slideUp(2000)
                .slideDown(2000)
                .animate({left: '300px', width: '300px'},1000)
    })
});
