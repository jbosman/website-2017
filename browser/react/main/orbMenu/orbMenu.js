import React, {Component} from 'react';
import Orb from './orb/orb';

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
				{ this.childrenWithProps() }
			</div>
		)
	}
}