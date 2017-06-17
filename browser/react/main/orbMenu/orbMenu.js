import React, {Component} from 'react';
import Orb from './orb/orb';
import Joe from '../joe/joe';
import SwordSlashLinear from '../sword-slashes/sword-slash-linear/sword-slash-linear';
import SwordSlashRotational from '../sword-slashes/sword-slashes-rotational/sword-slashes-rotational';

require('./orbMenu.scss');

import { handleOrbClick } from '../animations/controller';

export default class OrbMenu extends Component {

	childrenWithProps(){
		return this.props.children.map( ( child, i ) => {
				return( 
					<Orb 
						key={i} 
						text={child.props.text} 
						orbNum={i}
						handleOrbClick={ handleOrbClick } 
					/>
				)
			})
	}

	render(){
		return (
			<div id='orb-menu'>
				<Joe />
				<SwordSlashRotational />
				<SwordSlashLinear className='horizontal'/>
				<SwordSlashLinear className='vertical' />
				{ this.childrenWithProps() }
			</div>
		)
	}
}