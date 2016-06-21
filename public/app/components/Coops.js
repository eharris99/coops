import React, {Component} from 'react'
import ListItem from '../components/ListItem'

class Coops extends Component {

	constructor(props,context){
		super(props,context)
			this.state={
				coops:[
					{name:'ICH',members:33},
					{name:'Loth', members:55},
					{name:'Nottingham',members:22},
					{name:'PSFC', members:8000}
				]
		}
	}
	render() {
		var coopList=this.state.coops.map(function(coop,i){

			return <ListItem key={i} entity ={coop} />
		})
		return (
			<div>
			<ol>
			{coopList}
			</ol>
			</div>

			)
	}
}

export default Coops