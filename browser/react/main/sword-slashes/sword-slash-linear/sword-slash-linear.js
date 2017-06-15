import React, {Component} from 'react';

require('./sword-slash-linear.scss');

export default function SwordSlashLinear(props){
	console.log(props)
	return (
		<div className={ `sword-slash-container ${props.className}` }>
			<div className='sword-slash'></div>
		</div>
	)
}