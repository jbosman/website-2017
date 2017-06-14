import React, {Component} from 'react';

require('./sword-slash-linear.scss');

export default function SwordSlashLinear(props){
	return (
		<div className={ `sword-slash-container ${props.vertical ? 'vertical': '' }` }>
			<div className='sword-slash'></div>
		</div>
	)
}