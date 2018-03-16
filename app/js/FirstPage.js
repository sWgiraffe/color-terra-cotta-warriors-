//FirstPage.js
import React, {Component} from 'react'

class FirstPage extends Component {
	handleClick(event) {
		document.getElementById("first-page").style.display="none";
		document.getElementById("second-page").style.display="block";
		event.stopPropagation();
		event.preventDefault();
	}
	render() {
		return (
			<div class="firstpage" onClick={this.handleClick}></div>
		);
	}
}

export default FirstPage 