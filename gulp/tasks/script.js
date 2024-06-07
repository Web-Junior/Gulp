import { dest, src } from "gulp";
import { path } from "../config/path.js";
import webpackStream from "webpack-stream";
import { config } from "../../webpack.config.js";
import { isBuild } from "../../gulpfile.js";

export const script = () => {
  return src(path.src.script)
    .pipe(
      webpackStream({
        mode: isBuild ? "production" : "development",
        ...config,
      })
    )
    .pipe(dest(path.build.script));
};
