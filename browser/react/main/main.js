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
// swordCrossAudio.muted = true;

export default class Main extends Component {

	componentDidMount(){

		let orbs = Array.prototype.slice.call(document.querySelectorAll('.orb-container'));
		let swordSlashes = Array.prototype.slice.call(document.querySelectorAll('.sword-slash'));
		let spiralSlashes = Array.prototype.slice.call(document.querySelectorAll('.spiral-sword-slash'));
		

		swordSlashes[1].addEventListener('animationend', function(){
			setTimeout(function(){
				spiralSlashes[0].classList.add('rotate-border-top-left');
				spiralSlashes[1].classList.add('rotate-border-top-right');
				spiralSlashes[3].classList.add('rotate-border-bottom-right');
			}, 500);
		});

		orbs.forEach( (orb, i) => {
			orb.addEventListener( 'animationend', function(){
				this.classList.remove(rotateClasses[i]);

				
				// Triggering two different animations via animation end
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

		

		let sq_container = document.querySelector('.spiral-sword-animation-container');
		sq_container.addEventListener('click', function(){
			squares[0].classList.add('rotate-border-top-left');
			squares[1].classList.add('rotate-border-top-right');
			// squares[2].classList.add('rotateBorder');
			// squares[3].classList.add('rotateBorder');
		})
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
					onClick={() => { this.animate(i)} } 
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

	animate(orbNumber){
		let orbs = Array.prototype.slice.call(document.querySelectorAll('.orb-container'));

		orbs[orbNumber].setAttribute("style", "z-index: 5");

		orbs.forEach( (orb, i) => { orb.classList.toggle(rotateClasses[i]); })
		
		// This is required in order to work on mobile devices.
		// Mobile devices require the user to start audio
		// Here we start the audio, quickly pause it, and then play it later when we would like to.
		// Tested on Android. Still need to try on iPhone.
		swordCrossAudio.play();
		swordCrossAudio.pause();
		
		limitBreakAudio.play();
	}


}

