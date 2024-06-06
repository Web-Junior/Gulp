import { dest, src } from "gulp";
import { path } from "../config/path.js";
import browserSync from "browser-sync";
import gulpIf from "gulp-if";
import { isBuild } from "../../gulpfile.js";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";

export const images = () => {
  return src(path.src.images, { encoding: false })
    .pipe(newer(path.build.images))
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
