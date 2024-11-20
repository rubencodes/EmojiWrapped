//webpack.config.js
const path = require("path");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		main: "./src/content.ts",
	},
	output: {
		path: path.resolve(__dirname, "./scripts"),
		filename: "content.module.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
			},
		],
	},
};
