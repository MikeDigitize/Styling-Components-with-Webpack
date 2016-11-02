# Styling components with Webpack and React

This is just a simple demo of three different ways to style React components using Webpack - 

* one using React CSS Modules (locally scoped CSS - no global leakage).
* one using Webpack CSS Modules referencing classnames from an imported style object. 
* and one just importing SASS directly into a component.

All styles are compiled into a single bundle.

This might help anyone struggling to configure Webpack to compile CSS! 

All examples in the `Readme` have ommitted basic stuff like importing `React` into components and don't display the entire Webpack bundle object etc. Components are not stateless components in these examples because there is no container component of note or reason to compromise readability.

```javascript
// stateless components are not used in these examples
const Title = props => <h1 className={ props.titleClass }>{ props.text }</h1>;
```

## React CSS Modules

Locally scoped CSS - what's not to love? CSS Modules use the `styleName` property not `className`. It's important to import your styles under a reference so they can be bundled and exported with the component.

### Component

```javascript
import CSSModule from 'react-css-modules';
import styles from './css-react-modules-styles';

class Title extends Component {
	render() {
		return (
			<h1 styleName="title">
				Im a CSS 
					<span styleName="enlarge-and-green">React</span>
				Module!!
			</h1>
		);
	}
}

export default CSSModule(Title, styles);
```

### Webpack

Tell Webpack to load the styles as an object with the `modules!` instruction, then use the `ExtractTextPlugin` to export the locally scoped (hashed) styles to a `bundle.css` file.

```javascript
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module: {
    loaders: [{
        test: /\.scss$/,
        exclude: /css-styles\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules!sass-loader')
    }]
},
plugins: [ 
    new ExtractTextPlugin('bundle.css')
]
```

## Webpack CSS Modules

Same Webpack config as above, the only difference is in the component itself. The classnames from the stylesheet are simply referenced from an object created by Webpack.

### React

```javascript
import styles from './css-modules-styles';

export default class Title3 extends Component {
	render() {
		return (
			<h1 className={ `${styles.centre} ${styles.georgia} ${styles.mediumText} ${styles.orange}` }>
				Im a <span className={ `${styles.black}` }>Webpack</span> CSS Module
			</h1>
		)
	}
}
```

## Webpack SASS

Simple conversion of SASS to CSS.

### React

Just import the styles without the need for a reference like in the previous two examples.

```javascript
import './css-styles';

export default class Title2 extends Component {
	render() {
		return (
			<h2 className="centre-text font-family-arial small-text red">
				Im just styled <span className="grey">SASS</span> in a Component!!
			</h2>
		)
	}
}
```

### Webpack

Only the ommission of the `loaders!` command is needed.

```javascript
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module: {
	loaders: [{
	    test: /\.scss$/,
	    exclude: /css-react-modules-styles\.scss$|css-modules-styles\.scss$/,
	    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sass-loader')
	}]
},
plugins: [
        new ExtractTextPlugin('bundle.css')
]
```

And that's it, easy! See the project for more details.
