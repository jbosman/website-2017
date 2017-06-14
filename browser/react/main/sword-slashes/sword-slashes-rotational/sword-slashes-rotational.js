import React from 'react';

require('./sword-slashes-circular.scss');

export default function SwordSlashRotational(){
	return (
		<div className='rotational-sword-animation-container'>
			<div className='rotational-sword-slash'></div>
			<div className='rotational-sword-slash'></div>
			<div className='rotational-sword-slash'></div>
			<div className='rotational-sword-slash'></div>
		</div>
	)
}