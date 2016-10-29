import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Title from './components/Title';
import Title2 from './components/Title2';

let wrapper = (
	<div>
		<Title />
		<Title2 />
	</div>
);

ReactDOM.render(wrapper, document.getElementById('kurtis-owes-me-alcohol'));