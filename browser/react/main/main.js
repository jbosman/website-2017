import React, { Component } from 'react';
require('./main.scss');

import OrbMenu from './orbMenu/orbMenu';
import Orb from './orbMenu/orb/orb';
import SwordSlashLinear from './sword-slashes/sword-slash-linear/sword-slash-linear';
import SwordSlashRotational from './sword-slashes/sword-slashes-rotational/sword-slashes-rotational';

function createOrbs(){
	let orbTexts = ['skills', 'projects', 'contact', 'history'];

	return orbTexts.map( (text,i) => { return ( <Orb key={i} text={text} /> )  });
}

export default function Main(){
	return (
	<div id='main'>

		<SwordSlashRotational />
		
		<SwordSlashLinear />
		<SwordSlashLinear vertical={true} />

		<OrbMenu>
			{ createOrbs() }
		</OrbMenu>
		
	</div>
	);
}

