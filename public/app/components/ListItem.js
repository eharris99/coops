import React, {Component} from 'react'

class ListItem extends Component {

	render(){
		return(

			<li>{this.props.entity.name}, {this.props.entity.members}</li>

			)
	}
}

export default ListItem