import React, {Component} from 'react'
import ListItem from '../components/ListItem'

class Frats extends Component {
	constructor(props, context) {
		super(props, context)
		this.updateNextFrat = this.updateNextFrat.bind(this)
		this.addNextFrat=this.addNextFrat.bind(this)
		this.state = {
			frats:[
				{name:"AAA",address:"langdon",members:33,officers:["chet","chad"]},
				{name:"BBB",address:"gilman",members:32,officers:["biff","buff"]},
				{name:"CCC",address:"langdon st",members:31,officers:["john","jim"]},
				],
				frat:{
					name: "",
					address: ""
				}
			}
	}

	updateNextFrat(event) {
		console.log('updateNextFrat: ' + event.target.id + '==' + event.target.value)
		var updatedFrat = Object.assign({}, this.state.frat)
		updatedFrat[event.target.id] = event.target.value
		this.setState({
			frat: updatedFrat
		})
	}

	addNextFrat(event){
		console.log('addNextFrat: ' +JSON.stringify(this.state.frat))
		var nextFrat = Object.assign({}, this.state.frat)
		var updatedFrats = Object.assign([], this.state.frats)
		updatedFrats.push(nextFrat)

		this.setState({
			frats: updatedFrats,
			frat:{
				name:'',
				address:'',
			}
		})
	}

	render() {
		var fratsList = this.state.frats.map(function(frat,i) {
			return <ListItem key={i} type = "frat" entity = {frat} />		
		})

		return (
			<div style={{marginTop:20, backgroundColor:"orange", border:"3px solid #000", padding:16}}>
			<h2>Frats</h2>
			<ol>
				{fratsList}
			</ol>
			<span >{this.state.frat.name}</span><br /> <br />

			<h4>Add Frat</h4>
			<span >{this.state.frat.name}</span><br /> <br />
			<input onChange = {this.updateNextFrat} type="text" id="name" value={this.state.frat.name} placeholder="name" /><br />
			<input onChange = {this.updateNextFrat}  type="text" id="address" value={this.state.frat.address}  placeholder="address" /><br />
			<input onChange = {this.updateNextFrat}  type="text" id="members" value={this.state.frat.members}  placeholder="members" /><br />
			<input onChange = {this.updateNextFrat}  type="text" id="officers" value={this.state.frat.officers}  placeholder="officers" /><br />
			<button onClick = {this.addNextFrat} >Add Frat</button>




			
			</div>
		)
	}
}

export default Frats