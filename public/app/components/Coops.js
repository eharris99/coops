import React, {Component} from 'react'
import ListItem from '../components/ListItem'

class Coops extends Component {
	constructor(props, context) {
		super(props, context)
		this.updateNextCoop = this.updateNextCoop.bind(this)
		this.addNextCoop=this.addNextCoop.bind(this)
		this.state = {
			coops:[
				{name:"Loth",address:"water", members:55, officers:["kook","keek"]},
				{name:"ICH",address:"gilman", members:33, officers:["elise","jeff"]},
				{name:"Nottingham",address:"spanish", members:22, officers:["bad","worse"]},
				],
				coop:{
					name: "",
					address: ""
				}
			}
	}

	updateNextCoop(event) {
		console.log('updateNextCoop: ' + event.target.id + '==' + event.target.value)
		var addNextCoop = Object.assign({}, this.state.coop)
		addNextCoop[event.target.id] = event.target.value
		this.setState({
			coop: addNextCoop
		})
	}

	addNextCoop(event){
		console.log('addNextCoop: ' +JSON.stringify(this.state.coop))
		var nextCoop = Object.assign({}, this.state.coop)
		var updatedCoops = Object.assign([], this.state.coops)
		updatedCoops.push(nextCoop)

		this.setState({
			coops: updatedCoops,
			coop:{
				name:'',
				address:'',
			}
		})
	}

	render() {
		var coopsList = this.state.coops.map(function(coop,i) {
			return <ListItem key={i} type = "coop" entity = {coop} />		
		})

		return (
			<div style={{marginTop:20, backgroundColor:"orange", border:"3px solid #000", padding:16}}>
			<h2>Coops</h2>
			<ol>
				{coopsList}
			</ol>
			<span >{this.state.coop.name}</span><br /> <br />

			<h4>Add Coop</h4>
			<span >{this.state.coop.name}</span><br /> <br />
			<input onChange = {this.updateNextCoop} type="text" id="name" value={this.state.coop.name} placeholder="name" /><br />
			<input onChange = {this.updateNextCoop}  type="text" id="address" value={this.state.coop.address}  placeholder="address" /><br />
			<input onChange = {this.updateNextCoop}  type="text" id="members" value={this.state.coop.members}  placeholder="members" /><br />
			<input onChange = {this.updateNextCoop}  type="text" id="officers" value={this.state.coop.officers}  placeholder="officers" /><br />
			<button onClick = {this.addNextCoop} >Add Coop</button>




			
			</div>
		)
	}
}

export default Coops