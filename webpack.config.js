import HtmlWebpackPlugin from "html-webpack-plugin";

export const config = {
  entry: {
    main: "./src/scripts/main.js",
  },
  output: {
    filename: "[name].bundle.js",
  },
};
