let shoppingCartWindow = document.querySelector(".shopping-cart-window");
let openCartButton = document.getElementById("shopping-cart-open-button")
let closeCartButton = shoppingCartWindow.querySelector(".shopping-cart-window__close-button");

//show cart counter with "live" HTML collection
let shoppingCartItemsCounter = shoppingCartWindow.querySelector(".shopping-cart-window__products-list").getElementsByTagName("li");
let shoppingCartItemsCounterIcon = document.querySelector(".shopping-cart__counter");
shoppingCartItemsCounterIcon.textContent = shoppingCartItemsCounter.length;

openCartButton.addEventListener("click", function() {
    shoppingCartWindow.style.display = "block";   
});
closeCartButton.addEventListener("click", function() {
    shoppingCartWindow.style.display = "none";   
});
// label "added to cart"
let addToShoppingCartButtons = document.querySelectorAll(".btn-buy-now");
console.log(addToShoppingCartButtons)

function coords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        left: box.left + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset
    }
}

function createMessage (messageText, styleCSS) {
    let message = document.createElement("div");
    message.textContent = messageText;
    message.classList.add(styleCSS);
    return message;
}
function showMessageUnder(elem, objMessage, timeout) {
    let elemCoords = coords(elem);
    console.log(elemCoords);
    objMessage.style.left = elemCoords.left + "px";
    objMessage.style.top = elemCoords.bottom + "px";
    elem.addEventListener("click", function(){
        document.body.append(objMessage);
        setTimeout(()=>{objMessage.remove()}, timeout);        
    });
}

for (let buyButton of addToShoppingCartButtons) {
let addedToCartMessage = createMessage("Added to your shopping cart", "addedToCartMessage");
    showMessageUnder(buyButton, addedToCartMessage, 1500);
}