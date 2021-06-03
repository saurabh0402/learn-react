const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  "entry": path.join(__dirname, "./src/index.jsx"),
  "output": {
    "path": path.join(__dirname, "./build"),
    "filename": "[contenthash].build.js",
  },
  "mode": "development",
  "resolve": {
    "extensions": [".js", ".jsx"],
  },
  "module": {
    "rules": [
      {
        "test": /\.jsx?$/,
        "exclude": /node_modules/,
        "use": [
          {
            loader: "babel-loader",
          }
        ]
      }
    ]
  },
  "plugins": [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    })
  ],
  "devServer": {
    "port": 3001
  }
};