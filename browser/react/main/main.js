import React from 'react';
require('./main.scss');

const blueOrb = require('./images/blueOrb_200x200.png');

function orbs(){
	let siteLocations = ['skills', 'projects', 'contact', 'background'];

	return siteLocations.map( (location, i) => {
		return(
			<div 
				key={`${i}`} 
				className={ `orb-container orb-${i}` }
				onClick={() => { animate(i)} } 
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

function animate(orbNumber){
	let orbs = Array.prototype.slice.call(document.querySelectorAll('.orb-container'));
	orbs[0].classList.toggle('rotateTop');
	orbs[1].classList.toggle('rotateRight');
	orbs[2].classList.toggle('rotateBottom');
	orbs[3].classList.toggle('rotateLeft');
}

export default function(){
	return (
		<div id='main'>
			<div id='orb-group-container'>
				{ orbs() }
			</div>
		</div>
	);
}

// <div className='box circle'></div>

