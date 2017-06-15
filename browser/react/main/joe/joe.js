import React from 'react';
require('./joe.scss');

const IMG = require('../images/joe.png');

export default function Joe(){
	return (
		<img id='JoeImg' src={IMG} alt='Image of Joe Bosman' />
	)
}