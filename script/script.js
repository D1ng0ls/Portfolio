window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").className = "fixed";
    } else {
        document.getElementById("header").className = "";
    }
}

function abreMenu() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("body").classList.toggle("hidden");
    document.getElementById("header-menu").classList.toggle("fecha");
    document.getElementById("header-fecha").classList.toggle("abre");
}