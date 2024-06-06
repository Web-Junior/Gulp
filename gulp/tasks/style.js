import { dest, src } from "gulp";
import { path } from "../config/path.js";
import browserSync from "browser-sync";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import { isBuild } from "../../gulpfile.js";
import GulpCleanCss from "gulp-clean-css";
import gulpIf from "gulp-if";
import sourceMaps from "gulp-sourcemaps";
import groupMedia from "gulp-group-css-media-queries";
import cru from "gulp-css-rework-url";

const sass = gulpSass(dartSass);

export const style = () => {
  return (
    src(path.src.style)
      .pipe(gulpIf(!isBuild, sourceMaps.init()))
      .pipe(sass({ outputStyle: "expanded" }))
      // .pipe(cssUrlReplace({ img: "./assets/images/", font: "/assets/fonts/" }))
      .pipe(cru({ prefix: "/assets/" }))
      .pipe(gulpIf(isBuild, groupMedia()))
      .pipe(gulpIf(isBuild, GulpCleanCss()))
      .pipe(gulpIf(!isBuild, sourceMaps.write()))
      .pipe(dest(path.build.style))
      .pipe(gulpIf(!isBuild, browserSync.stream()))
  );
};
