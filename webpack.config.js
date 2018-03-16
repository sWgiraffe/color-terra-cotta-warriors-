module.exports = {
	devtool: 'eval-source-map',						//调试代码
	entry: __dirname + "/app/js/main.js",			//入口文件
	output: {
		path: __dirname + "/dist/js",				//出口目录
		filename: "bundle.js",						//出口文件名
		publicPath: 'dist/js/'
	},
	devServer: {
		contentBase: ".",
		historyApiFallback: true,
    	inline: true
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"env", "react"
						]
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
				{
					loader: "style-loader"			//将js字符串生成style节点
				},{
					loader: "css-loader"			//将css转换为CommonJs模块
				},{
					loader: "sass-loader"			//将sass编译为css
				}
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
				{
					loader: "url-loader",			//处理图片
					options: {
						limit: 8192
					}
				}
				]
			}
		]
	}
}
