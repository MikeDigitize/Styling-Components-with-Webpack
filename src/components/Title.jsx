import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import styles from './css-modules-styles';

class Title extends Component {
	render() {
		return (
			<h1 styleName="title">I'm a CSS <span styleName="enlarge-and-green">Module!!</span></h1>
		)
	}
}

export default CSSModule(Title, styles);