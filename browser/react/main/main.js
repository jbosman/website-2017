import React from 'react';
require('./main.scss');

const blueOrb = require('./images/blueOrb_200x200.png');

function orbs(){
	let siteLocations = ['background', 'skills', 'projects', 'contact'];

	return siteLocations.map( (location, i) => {
		return <img 
					key={`${i}`} 
					onClick={() => { animate(i)}} 
					className={`box rotate blueOrb${i}` }
					src={blueOrb} 
					alt='Blue Orb' 
				/>
	});
}

function animate(orbNumber){
	let orbs = Array.prototype.slice.call(document.querySelectorAll('.box'));
	orbs[3].classList.toggle('rotateLeft');
}

export default function(){
	return (
		<div id='main'>
			<div id='orb-container'>
				{ orbs() }
			</div>
		</div>
	);
}

// <div className='box circle'></div>

