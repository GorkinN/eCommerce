let chosenCategory = document.querySelector(".search-field__category-set_chosen span");
console.log(chosenCategory);
let categoriesNames = document.querySelectorAll(".category-set__item  .category-set__item_checked");
let categories = document.querySelectorAll(".category-set__item");


for (let item of categoriesNames) {
    console.log(item.textContent)
}

function changeCategoryText(categoryButton, text) {
    categoryButton.addEventListener("change", function() {
        chosenCategory.textContent = text;
    });
}
for (let i=0; i<categories.length; i++) {
    changeCategoryText(categories[i], categoriesNames[i].textContent);
}

