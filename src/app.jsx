import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Title from './components/Title';
import Title2 from './components/Title2';
import Title3 from './components/Title3';

let wrapper = (
	<div>
		<Title />
		<Title2 />
		<Title3 />
	</div>
);

ReactDOM.render(wrapper, document.getElementById('webpack-css-examples'));