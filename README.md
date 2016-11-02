# Styling components with Webpack and React

This is just a simple demo of three different ways to style React components using Webpack - 

* one using React CSS Modules (locally scoped CSS - no global leakage).
* one using Webpack CSS Modules referencing classnames from an imported style object. 
* and one just importing SASS directly into a component.

All styles are compiled into a single bundle.

This might help anyone struggling to configure Webpack to compile CSS! All examples have ommitted basic stuff like importing `React` into Components and don't display the entire Webpacj bundle object etc. Components are not stateless components because there is no higher container component of note to bother with that pattern.

```javascript
// not used in these examples
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
			<h1 styleName="title">I'm a CSS <span styleName="enlarge-and-green">React</span>Module!!</h1>
		);
	}
}

export default CSSModule(Title, styles);
```

### Webpack

Tell Webpack to use load the styles as an object with the `modules!` instruction, then use the `ExtractTextPlugin` to export the locally scoped (hashed) styles to a `bundle.css` file.

```javascript
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
