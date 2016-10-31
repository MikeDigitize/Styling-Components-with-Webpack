import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import styles from './css-modules-styles';

export default class Title3 extends Component {
	render() {
		return (
			<h1 className={ `${styles.centre} ${styles.georgia} ${styles.mediumText} ${styles.orange}` }>
				I'm a <span className={ `${styles.black}` }>Webpack</span> CSS Module
			</h1>
		)
	}
}