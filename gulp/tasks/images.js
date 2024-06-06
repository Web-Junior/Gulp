import { dest, src } from "gulp";
import { path } from "../config/path.js";
import browserSync from "browser-sync";
import gulpIf from "gulp-if";
import { isBuild } from "../../gulpfile.js";
import imageCompress from "compress-images";
import imagemin from "gulp-imagemin";

export const images = () => {
  return src(path.src.images, { encoding: false })
    .pipe(
      gulpIf(
        isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3,
        })
      )
    )
    .pipe(dest(path.build.images))
    .pipe(gulpIf(!isBuild, browserSync.stream()));
};
