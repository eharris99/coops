import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Coops from './components/Coops'
import Frats from './components/Frats'

class App extends Component {

	render(){

		return(
			<div>
			
			<Coops />
			<Frats />
			</div>

			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))