//SecondPage.js
import React, {Component} from 'react'
import warrior1 from '../images/warrior1.png' 
import colored_warrior1 from '../images/colored_warrior1.png'
//获取浏览器高度，宽度
const brower_height = screen.height;
const brower_width = screen.width;
//设置图片宽度高度
let img_width = brower_width * 1.0 * 0.9;
let img_height = img_width / 800.0 * 1024.0;
class SecondPage extends Component {
	componentDidMount() {
		let warrior_canvas = this.refs.colored_warrior;
		warrior_canvas.width = img_width;
		warrior_canvas.height = img_height;
		let warrior_canvas_ctx = warrior_canvas.getContext("2d");
		
		let warrior_img = new Image();
		warrior_img.src = warrior1;
		warrior_img.onload = function() {
			warrior_canvas_ctx.drawImage(warrior_img, 0, 0, img_width, img_height);
		};
		
		
	}
	handleClick(event) {	
		//获取点击位置
		let clickX = event.clientX;											//鼠标点击位置x
		let clickY = event.clientY;											//鼠标点击位置y
		//对比绘图层，按颜色区分区域
		let colored_warrior_canvas = document.createElement("canvas");		//对比绘图
		colored_warrior_canvas.width = brower_width;						//绘图层宽度
		colored_warrior_canvas.height = brower_height;						//绘图层高度
		let colored_warrior_canvas_ctx = colored_warrior_canvas.getContext("2d");
		let colored_warrior_img = new Image();								//新建一个image对象							
		colored_warrior_img.src = colored_warrior1;							//设置图片url
		//在canvas上画图片
		colored_warrior_canvas_ctx.drawImage(colored_warrior_img, (brower_width - img_width) / 2.0, 0, img_width, img_height);
		//点击点的图像信息
		let current_click_obj = colored_warrior_canvas_ctx.getImageData(clickX, clickY, 1, 1);
		//console.log(current_click_obj.data[0] + " " + current_click_obj.data[1] + " " + current_click_obj.data[2]);
		//绘图层
		if ((current_click_obj.data[0] != 0) || (current_click_obj.data[1] != 0) || (current_click_obj.data[2] != 0)) {
			let warrior_canvas = this.refs.colored_warrior;
			let warrior_canvas_ctx = warrior_canvas.getContext("2d");
			let warrior_canvas_ctx_obj = warrior_canvas_ctx.getImageData(0, 0, img_width, img_height);
			
			let colored_warrior_obj = colored_warrior_canvas_ctx.getImageData((brower_width - img_width) / 2.0, 0, img_width, img_height);
			for (let i = 0; i < colored_warrior_obj.height; ++i) {
				for (let j = 0; j < colored_warrior_obj.width; ++j) {
					let x = (i * colored_warrior_obj.width + j) * 4;
					if ((colored_warrior_obj.data[x] == current_click_obj.data[0]) && (colored_warrior_obj.data[x + 1] == current_click_obj.data[1]) && (colored_warrior_obj.data[x + 2] == current_click_obj.data[2])) {
						warrior_canvas_ctx_obj.data[x] = 185;
						warrior_canvas_ctx_obj.data[x + 1] = 165;
						warrior_canvas_ctx_obj.data[x + 2] = 22;
						warrior_canvas_ctx_obj.data[x + 3] = 255;
					}
				}
			}
			warrior_canvas_ctx.putImageData(warrior_canvas_ctx_obj, 0, 0);
			let image_data = warrior_canvas.toDataURL("png");
			image_data = image_data.replace('image/png', 'image/octet-stream');
			//console.log(image_data);
			this.refs.colored_warrior_img.src = image_data;
		}
		
		event.stopPropagation();
		event.preventDefault();
	}
	render() {	
		let img_left = (brower_width - img_width) / 2.0;
		let warrior_style = {};
		warrior_style.width = img_width;
		warrior_style.height = img_height;
		warrior_style.left = img_left;
		return (
			<div class="main" onClick={this.handleClick.bind(this)}>				
				<div class="warrior">
					<img src={warrior1} style={warrior_style} ref="colored_warrior_img"/>
				</div>
				<canvas id="colored_warrior" style={warrior_style} ref="colored_warrior">
				</canvas>
			</div>
		);
	}
}

export default SecondPage