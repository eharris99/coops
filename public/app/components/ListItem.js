import React, {Component} from 'react'

class ListItem extends Component {


	render(){
		var content = this.props.entity.name + ", " + this.props.entity.members + ", " + this.props.entity.address + ", " + this.props.entity.officers

		return(
		
		<li>{content}</li>

			)
	}
}

export default ListItem