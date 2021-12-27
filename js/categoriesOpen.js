var categoriesButton = document.querySelectorAll('.section__menu-button');
var menuList = document.querySelectorAll('.section__menu-list');

var openMenu = function (currentButton, currentMenu) {
    currentButton.addEventListener('click', function () {
        let listItems = currentMenu.querySelectorAll('.section__menu-list-item');
        // при помощи костыля в виде класса toggle меняем надпись на кнопке =(
        // через некоторое время сделаю нормально.
        // Надо глянуть как пересчитать объекты в коллекции, иначе так и придётся
        // костылить верстку пустыми классами
        if (currentButton.classList.contains('toggle')) {
            for (let listItem of listItems) {
                if (listItem.classList.contains('toggle')) {
                    listItem.classList.add('hidden');
                    listItem.classList.remove('toggle');
                }
            }
            currentButton.textContent = 'More ' + currentButton.dataset.buttonName;
        } else {
            for (let listItem of listItems) {
                if (listItem.classList.contains('hidden')) {
                    listItem.classList.remove('hidden');
                    listItem.classList.add('toggle');
                }
            }
            currentButton.textContent = 'Less ' + currentButton.dataset.buttonName;
        }
        currentButton.classList.toggle('toggle');
    });
};

//раздаём полномочия каждой кнопке для своего меню
for (let i = 0 ; i <= categoriesButton.length - 1 ; i++) {
    openMenu(categoriesButton[i], menuList[i]);
}

