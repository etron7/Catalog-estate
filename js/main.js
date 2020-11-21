// Support forEach - IE6.
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// Сайдбар мобильной версии
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

// Показать еще 3 карточки товара
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function() {
    hiddenCards.forEach(function(card) {

        card.classList.remove('card-link--hidden');

    })
})

// Виджеты сайдбара
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function(widget) {
    widget.addEventListener('click', function(e) {
        // Перевернуть иконку стрелка в заголовке
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            // Скрыть или показать опции виджета
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    });
});

// Виджет Близость к метро
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-param]');

// Если выбрана кнопка "Любая", то остальные отключены
checkBoxAny.addEventListener('change', function() {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function(item) {
            item.checked = false;
        });
    } 
})

// Если выбраны верхние кнопки то "Любая" отключена
topLocationCheckboxes.forEach(function(item) {
    item.addEventListener('change', function() {
        checkBoxAny.checked = false;
    })
})

// Виджет Доп. опции
const showMoreOptions = document.querySelector('.option-link-more');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

// Показать или скрыть еще 3 доп. опции
showMoreOptions.onclick = function(e) {
    e.preventDefault();

    // Если блоки были скрыты, значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {

        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = "Скрыть доп. опции";
        showMoreOptions.dataset.options = 'visible';
    }
    // Если блоки видны, то скрываем
    else if (showMoreOptions.dataset.options == 'visible') {

        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = "Показать ещё";
        showMoreOptions.dataset.options = 'hidden';
    }
}
