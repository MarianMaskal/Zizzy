const path = require("path");
const webpack = require("webpack");

module.exports = {

	entry: {
		"bundle": "./src/index.js",
		"bundle.min": "./src/index.js"
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "build")
    }
}