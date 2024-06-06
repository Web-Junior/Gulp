import { src } from "gulp";
import { path } from "../config/path.js";
import { deleteAsync } from "del";

export const reset = () => {
  return deleteAsync(path.build.build);
};
