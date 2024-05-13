$(document).ready(function(){
    // Szöveg gombra kattintva felugró ablakba írja a következő szöveget
    $("#textButton").click(function(){
        var text = "HTML kód...";
        alert(text);
    });

    // HTML gombra kattintva felugró ablakba írja a HTML kódot
    $("#htmlButton").click(function(){
        var html = "<strong>ME GEIK - PTI</strong>";
        alert(html);
    });

    // Név mezőbe írt név felugró ablakba írása Érték gombra kattintva
    $("#valueButton").click(function(){
        var name = $("#nameInput").val();
        var message = "Név: " + name;
        alert(message);
    });

    // Jelentkezés és Érték gombra kattintva felugró ablakba írja a szöveget
    $("#link").click(function(){
        alert("Jelentkezés");
    });

    // Paraméter gombra kattintva felugró ablakba írja a linket, a területet és az id-t
    $("#parameterButton").click(function(){
        var link = "https://www.tutorialspoint.com/jquery/index.htm";
        var area = "terület";
        var id = "ID";
        var parameters = "Paraméter értéke: " + link + "\n" + "Paraméter értéke: " + area + "\n" + "Paraméter értéke: " + id;
        alert(parameters);
    });
});
