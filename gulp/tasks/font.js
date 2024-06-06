import { dest, src } from "gulp";
import { path } from "../config/path.js";

export const font = () => {
  return src(path.src.fontTtf).pipe(dest(path.build.font));
};
