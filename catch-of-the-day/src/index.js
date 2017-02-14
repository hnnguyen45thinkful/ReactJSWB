// let's go!
import React from 'react';//Import React Package
import { render } from 'react-dom';

//Import BrowserRouter, Match, miss
import { BrowserRouter, Match, Miss} from 'react-router';


import './css/style.css';//Import CSS File in Style.css
import App from './components/App';

import StorePicker from './components/StorePicker';

import NotFound from './components/NotFound';

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern = "/" component={StorePicker} />
				<Match pattern = "/store/:storeId" component={App} />
				<Miss component ={NotFound} />
			</div>
		</BrowserRouter>
		)
}


//render(<StorePicker/>, document.querySelector('#main'));
//render(<App/>, document.querySelector('#main'));
render(<Root/>, document.querySelector('#main'));
