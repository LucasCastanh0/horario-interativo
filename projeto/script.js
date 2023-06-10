function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    // var hora = de 0 a 12 bom dia, 12 a 18 boa tarde e 18 ++ boa noite

    msg.innerHTML = `Agora São ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = "manha.png";
        document.body.style.background = "#5b888e";
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = "tarde.png";
        document.body.style.background = "#aa5d23";
    } else {
        //boa noite!
        img.src = "noite.png";
        document.body.style.background = "#001118";
    }
}
