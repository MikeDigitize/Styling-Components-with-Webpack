import React, { Component } from 'react';
import './css-styles';

export default class Title2 extends Component {
	render() {
		return (
			<h2 className="centre-text font-family-arial small-text red">
				I'm just styled <span className="grey">SASS</span> in a Component!!
			</h2>
		)
	}
}