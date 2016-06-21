import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Coops from './components/Coops'

class App extends Component {

	render(){

		return(
			<div>
			<h2> coops</h2>
			<Coops />
			</div>

			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))