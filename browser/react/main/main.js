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

	componentDidMount(){

		let orbs = Array.prototype.slice.call(document.querySelectorAll('.orb-container'));

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
					let swordSlashes = document.querySelectorAll('.white-bar');
					swordCrossAudio.play();
					swordSlashes[0].classList.add('cross');
					setTimeout(function(){
						swordSlashes[1].classList.add('cross');
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
			<div className='white-bar-container diagonal-down'>
				<div className='white-bar'></div>
			</div>
			<div className='white-bar-container diagonal-up'>
				<div className='white-bar'></div>
			</div>
			<div id='orb-group-container'>
				{ this.createOrbs() }
			</div>
			
		</div>
		);
	}

	// <div className='white-bar diagonal-up'></div>

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
		limitBreakAudio.play();
	}


}

