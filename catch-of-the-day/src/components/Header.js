import React from 'react';

//class Header extends React.Component {
//	render() {
	//	console.log(this);
		// return (
		// 	//<p>Header</p>
		// 	<header className ='top'>
		// 	<h1>
		// 	Catch 
		// 	<span className = "ofThe">
		// 		<span className = "of">of</span> 
		// 		<span className = "the">the</span>
		// 	</span>
		// 	Day
		// 	</h1>
		// 	<h3 className = 'tagline'><span>{this.props.tagline}</span></h3> //this is taken out
		// 	</header>
		// )
//	}
//}
//Stateless Function Component
const Header = (props) => {
	return (
			//<p>Header</p>
			<header className ='top'>
			<h1>
			Catch 
			<span className = "ofThe">
				<span className = "of">of</span> 
				<span className = "the">the</span>
			</span>
			Day
			</h1>
			<h3 className = 'tagline'><span>{props.tagline}</span></h3>
			</header>
		)
}


export default Header;