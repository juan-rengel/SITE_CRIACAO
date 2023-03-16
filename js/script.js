function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if( menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assents/imagenes/botao-de-menu.png";
   
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assents/imagenes/marca-x.png";
    }
}
