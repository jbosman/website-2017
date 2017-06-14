import React, {Component} from 'react';

const blueOrb = require('./blueOrb_200x200.png');
require('./orbs.scss');

function moveOrbToFront(orbNum){
	document.getElementsByClassName('orb')[orbNum].classList.add('front');
}

export default function Orb(props){
	return (
		<div 
			className={ `orb orb-${props.orbNum}` } 
			onClick={ () => {
					moveOrbToFront(props.orbNum);
					props.handleOrbClick(); 
				}
			} 
		>
			<img 
				src={blueOrb} 
				alt='Orb' 
			/>
			<h3 className='orb-text'>{props.text}</h3>
		</div>
	)
	
}