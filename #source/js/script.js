// JavaScript - перетворення фотки у беґраунд

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

// --------------------------------------------------



// --------------------------------------------------

// jQuery - перетворення фотки у беґраунд


// function ibg() {

// 	$.each($('.ibg'), function (index, val) {
// 		if ($(this).find('img').length > 0) {
// 			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
// 		}
// 	});
// }

// ibg();


const iconMenu = document.querySelector('.menu-header__icon');
const menuBody = document.querySelector('.menu-header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
