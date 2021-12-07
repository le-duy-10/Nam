//Xu ly menu mobile
var button_menulist_mobile_show = document.getElementById('button_menulist_mobile_show');
var menulist_mobile = document.getElementById('menulist_mobile');
var button_menulist_mobile_close = document.getElementById('button_menulist_mobile_close');
var bg_close_menu = document.getElementById('bg-close-menu');

button_menulist_mobile_show.onclick = function() {
    menulist_mobile.style.visibility = "visible";
};

var close_element = function() {
    menulist_mobile.style.visibility = "hidden";
};
button_menulist_mobile_close.onclick = function() {
    close_element();
};
bg_close_menu.onclick = function() {
    close_element();
};

//Xu ly nut gio hang
var cart_icon = document.getElementsByClassName("cart-icon");
var cart_right = document.getElementsByClassName("cart-right");
var button_cart_mobile_close = document.getElementById("button_cart_mobile_close");
var bg_close_cart = document.getElementById("bg-close-cart");

cart_icon[0].onclick = function() {
    cart_right[0].style.visibility = "visible";
};
cart_icon[1].onclick = function() {
    cart_right[0].style.visibility = "visible";
};

var close_cart_right = function() {
    cart_right[0].style.visibility = "hidden";
};
button_cart_mobile_close.onclick = function() {
    close_cart_right();
};
bg_close_cart.onclick = function() {
    close_cart_right();
};

//Xu ly an