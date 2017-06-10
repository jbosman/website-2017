import React, { Component } from 'react';
require('./main.scss');

const blueOrb = require('./images/blueOrb_200x200.png');
const rotateClasses = [ 'rotateTop', 'rotateRight', 'rotateBottom', 'rotateLeft'];
const linearClasses = [ 'topToCenter', 'rightToCenter', 'bottomToCenter', 'leftToCenter'];

export default class Main extends Component {

	componentDidMount(){

		let orbs = Array.prototype.slice.call(document.querySelectorAll('.orb-container'));

		orbs.forEach( (orb, i) => {
			orb.addEventListener( 'animationend', function(){
				this.classList.remove(rotateClasses[i]);	
				
				if( !this.classList.contains(linearClasses[i]) )
					this.classList.add(linearClasses[i])
			})
		});
	}

	render(){
		return (
		<div id='main'>
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

		orbs[orbNumber].setAttribute("style", "z-index: 1");

		orbs.forEach( (orb, i) => { orb.classList.toggle(rotateClasses[i]); })
	}


}


// <div className='box circle'></div>

