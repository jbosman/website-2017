import React, { Component } from 'react';
require('./main.scss');

const blueOrb = require('./images/blueOrb_200x200.png');
const rotateClasses = [ 'rotateTop', 'rotateRight', 'rotateBottom', 'rotateLeft'];
const linearClasses = [ 'topToCenter', 'rightToCenter', 'bottomToCenter', 'leftToCenter'];

const limitBreakAudio = document.createElement('audio');
const limitBreakSrc = 'sounds/limit.wav';
limitBreakAudio.src = limitBreakSrc;
limitBreakAudio.load();

const swordCrossAudio = document.createElement('audio');
const swordCrossSrc = 'sounds/cross.wav';
swordCrossAudio.src = swordCrossSrc;
swordCrossAudio.load();

export default class Main extends Component {

	// Animation sequence
	//	1. User clicks one of the orbs.
	//	2. All orbs begin orb rotation animation and limit break audio plays
	//  3. On end of orb rotation animation
	//		3a. All orbs begin linear movement animation to the center of the screen.
	//	4. On end of orb linear movement animation
	//		4a. Linear sword slash animations begin and sword cross audio plays
	//  5. On end of last sword slash animation
	//		5a. All rotational sword slash animations begin
	//	6. On end of rotational sword slash animations
	//		6a. All orbs begin orb disolve animation.

	// User kicks off animations with an orb click
	orbClick(orbNumber){
		let orbs = Array.prototype.slice.call(document.querySelectorAll('.orb-container'));

		orbs[orbNumber].setAttribute("style", "z-index: 5");

		orbs.forEach( (orb, i) => { orb.classList.toggle(rotateClasses[i]); })
		
		// This is required in order to work on mobile devices.
		// Mobile devices require the user to start all audio.
		// Here we start the audio, quickly pause it, and then play it later when we would like to, otherwise,
		// we won't be able to play it from animationend call back.
		// Tested on Android. Still need to try on iPhone.
		swordCrossAudio.play();
		swordCrossAudio.pause();
		
		// Play limit break sound right away
		limitBreakAudio.play();
	}

	componentDidMount(){

		let orbs = Array.prototype.slice.call(document.querySelectorAll('.orb-container'));
		let swordSlashes = Array.prototype.slice.call(document.querySelectorAll('.sword-slash'));
		let spiralSlashes = Array.prototype.slice.call(document.querySelectorAll('.spiral-sword-slash'));
		
		// spiral sword cuts triggered off of last sword slash
		swordSlashes[1].addEventListener('animationend', function(){
			setTimeout(function(){
				spiralSlashes[0].classList.add('rotate-border-h-to-v');
				spiralSlashes[1].classList.add('rotate-border-v-to-h');
				spiralSlashes[2].classList.add('rotate-border-v-to-h');
				spiralSlashes[3].classList.add('rotate-border-h-to-v');
			}, 500);
		});

		spiralSlashes[3].addEventListener('animationend', function(){
			let orbGroupContainer = document.getElementById('orb-group-container');
			orbGroupContainer.classList.add('fade-out-orbs');
		});

		// Register two seperate animations of the orb animationend event
		orbs.forEach( (orb, i) => {
			orb.addEventListener( 'animationend', function(){
				// First clean up the rotation animation class
				this.classList.remove(rotateClasses[i]);

				//  If this is the first animation end event it is due to the
				// rotation animation finishing. Otherwise it is due to the 
				// linear animation end. 
				// Anitmation Sequence: 
				//     1. Rotate Orbs 
				//     2. Move orbs linearly back to center 
				//     3. Sword Slashing animations 
				if( this.classList.contains(linearClasses[i]) ){
					swordCrossAudio.play();
					swordSlashes[0].classList.add('slash-animation');
					setTimeout(function(){
						swordSlashes[1].classList.add('slash-animation');
					}, 600)
				}
				else{
					this.classList.add(linearClasses[i]);
				}
			})
		});
	}

	render(){
		return (
		<div id='main'>

			<div className='spiral-sword-animation-container'>
				<div className='spiral-sword-slash'></div>
				<div className='spiral-sword-slash'></div>
				<div className='spiral-sword-slash'></div>
				<div className='spiral-sword-slash'></div>
			</div>
			
			<div className='sword-slash-container'>
				<div className='sword-slash'></div>
			</div>

			<div className='sword-slash-container vertical'>
				<div className='sword-slash'></div>
			</div>
			<div id='orb-group-container'>
				{ this.createOrbs() }
			</div>
			
		</div>
		);
	}

	createOrbs(){
		let siteLocations = ['skills', 'projects', 'contact', 'history'];

		return siteLocations.map( (location, i) => {
			return(
				<div 
					key={`${i}`} 
					className={ `orb-container orb-${i}` }
					onClick={() => { this.orbClick(i)} } 
				>
					<img 
						src={blueOrb} 
						alt='Blue Orb' 
					/>
					<h3 className='orb-text'>{location[0].toUpperCase() + location.slice(1)}</h3>
				</div>
			)
		});
	}




}

