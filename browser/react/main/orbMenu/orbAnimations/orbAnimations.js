const rotateOrbsClasses = [ 'rotateTop', 'rotateRight', 'rotateBottom', 'rotateLeft'];
const centerOrbsClasses = [ 'topToCenter', 'rightToCenter', 'bottomToCenter', 'leftToCenter'];
let orbs = [];

function getOrbsFromDOM(){
	orbs = Array.prototype.slice.call(document.querySelectorAll('.orb'));
}

function rotateOrb( orb, orbNum ){ orb.classList.toggle(rotateOrbsClasses[orbNum]); }
function rotateOrbs( orbs ){ orbs.forEach( (orb, i) => rotateOrb(orb, i) ); }
function rotateAllOrbs(){
	rotateOrbs( orbs );
}

function centerOrb( orb, orbNum ){ orb.classList.toggle(centerOrbsClasses[orbNum]); }
function centerOrbs( orbs ){ orbs.forEach( (orb, i) => centerOrb(orb,i) ); }
function centerAllOrbs(){
	centerOrbs( orbs );
}

function fadeOutOrbMenu(){
	const orbMenu = document.getElementById('orb-menu');
	orbMenu.classList.add('fade-out-orbs');
}

function registerOrbRotationEndEvent(cb){
	let called = false;
	orbs.forEach( (orb) => {
		orb.addEventListener('animationend', function(e){
			if( rotateOrbsClasses.includes( e.animationName ) ){
				if( !called ){
					called = true;
					cb();
				}
			}
		})
	})
}

function registerOrbCenterEndEvent(cb){
	let called = false;
	orbs.forEach( (orb) => {
		orb.addEventListener('animationend', function(e){
			if( centerOrbsClasses.includes( e.animationName ) ){
				if( !called ){
					called = true;
					cb();
				}
			}
		})
	})
}

module.exports = {
	getOrbsFromDOM,
	rotateAllOrbs,
	centerAllOrbs,
	fadeOutOrbMenu,
	registerOrbRotationEndEvent,
	registerOrbCenterEndEvent
}