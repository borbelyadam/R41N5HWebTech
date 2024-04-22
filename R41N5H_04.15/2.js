$(document).ready(function(){
    // K1 gomb: elrejti a lista két első elemét és href-t.
    $("#K1").click(function(){
        $("#list1 li:first, #list2 li:first").hide();
    });

    // K2 gomb: elrejti a lista két első elemét, href-t és a K2 gombot.
    $("#K2").click(function(){
        $("#list1 a:last, #list2 a:last").hide();
        $(this).hide();
    });

    // K3 gomb: elrejti a fejlécet, lista két első elemét és href-t.
    $("#K3").click(function(){
        $("header").hide();
        $("#list1 li:lt(2)").hide();
        $("#list1 a").hide();
    });

    // K4 gomb: elrejti a lista két első elemét, link szöveget és href-t.
    $("#K4").click(function(){
        $("#list1 li:lt(2)").hide();
        $("#list1 a").text("");
        $("#list1 a").attr("href", "");
    });

    // K5 gomb: elrejti a lista két első elemét, href-t és a táblázat páros sorait.
    $("#K5").click(function(){
        $("#list1 li:lt(2)").hide();
        $("#list1 a").hide();
        $("#table tr:odd").hide();
    });

    // Kattintás a "Weboldal megjelenítése" linkre
    $("#showContent").click(function(){
        $("main").show();
    });

    // Kattintás a "Bekezdések elrejtése" gombra
    $("#hideParagraphs").click(function(){
        $("p").hide();
    });
});
