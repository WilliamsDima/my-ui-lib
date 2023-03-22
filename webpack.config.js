const { dirname, join, resolve } = require("path")

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		filename: "index.js",
		path: resolve(__dirname, "dist"),
		libraryTarget: "umd",
		clean: true,
		globalObject: "this",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".scss", ".sass"],
	},
	externals: {
		react: "react",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
		],
	},
}
