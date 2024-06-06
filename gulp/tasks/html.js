import { src, dest } from "gulp";
import { path } from "../config/path.js";
import gulpReplaceImageSrc from "gulp-replace-image-src";
import gulpHtmlTagInclude from "gulp-html-tag-include";
import htmlmin from "gulp-htmlmin";
import gulpIf from "gulp-if";
import { isBuild } from "../../gulpfile.js";
import browserSync from "browser-sync";
import typograf from "gulp-typograf";

export const html = () => {
  return src(path.src.html)
    .pipe(gulpHtmlTagInclude())
    .pipe(
      gulpReplaceImageSrc({
        prependSrc: "./assets/images/",
        keepOrigin: false,
      })
    )
    .pipe(typograf({ locale: ["ru", "en-US"] }))
    .pipe(gulpIf(isBuild, htmlmin({ collapseWhitespace: true })))
    .pipe(dest(path.build.html))
    .pipe(gulpIf(!isBuild, browserSync.stream()));
};
