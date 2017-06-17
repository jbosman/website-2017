let swordSlashes = [];
let rotationalSwordSlashes = [];

function getSwordsFromDOM(){
	swordSlashes = Array.prototype.slice.call( document.getElementsByClassName('sword-slash') );
	rotationalSwordSlashes = Array.prototype.slice.call( document.getElementsByClassName('rotational-sword-slash') );
}

function swordSlash(sword){
	sword.classList.add('slash-animation');
}

function swordSlashVertical(sword){
	sword.classList.add('slash-animation-vertical');
}

function staggeredSwordSlash(delay){
	swordSlash(swordSlashes[0]);
	setTimeout( function(){ swordSlashVertical(swordSlashes[1]) } , delay);
}

function registerSwordSlashEndEvent(cb){
	swordSlashes[1].addEventListener('animationend', cb);
}

function rotationalSlashHorizontalToVertical(sword){ 
	sword.classList.add('rotate-border-h-to-v')
}

function rotationalSlashVerticalToHorizontal(sword){
	sword.classList.add('rotate-border-v-to-h')
}

function rotationalSwordSlash(){
	setTimeout( function(){
		rotationalSlashHorizontalToVertical(rotationalSwordSlashes[0]);
		rotationalSlashVerticalToHorizontal(rotationalSwordSlashes[1]);
		rotationalSlashVerticalToHorizontal(rotationalSwordSlashes[2]);
		rotationalSlashHorizontalToVertical(rotationalSwordSlashes[3]);
	}, 500);
}

function registerRotationalSwordSlashEndEvent(cb, delay = 0){
	rotationalSwordSlashes[0].addEventListener('animationend', function(){
		setTimeout(cb(), delay);
	});
}

module.exports = {
	getSwordsFromDOM,
	staggeredSwordSlash,
	rotationalSwordSlash,
	registerSwordSlashEndEvent,
	registerRotationalSwordSlashEndEvent
}