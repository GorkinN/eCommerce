let shoppingCartWindow = document.querySelector(".shopping-cart-window");
let openCartButton = document.getElementById("shopping-cart-open-button")
let closeCartButton = shoppingCartWindow.querySelector(".shopping-cart-window__close-button");

openCartButton.addEventListener("click", function() {
    shoppingCartWindow.style.display = "block";   
});
closeCartButton.addEventListener("click", function() {
    shoppingCartWindow.style.display = "none";   
});
