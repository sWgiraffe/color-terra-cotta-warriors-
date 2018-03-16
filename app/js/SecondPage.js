//SecondPage.js
import React, {Component} from 'react'
import warrior1 from '../images/warrior1.png' 
class SecondPage extends Component {
	render() {
		const brower_height = screen.height;
		const brower_width = screen.width;
		console.log(screen.height);
		let img_width = brower_width * 1.0 * 0.9;
		let img_height = img_width / 800.0 * 1024.0;
		let img_left = (brower_width - img_width) / 2.0;
		let warrior_style = {};
		warrior_style.width = img_width;
		warrior_style.height = img_height;
		warrior_style.left = img_left;
		return (
			<div class="main">
				<div class="warrior">
					<img src={warrior1} style={warrior_style}/>
				</div>
			</div>
		);
	}
}

export default SecondPage