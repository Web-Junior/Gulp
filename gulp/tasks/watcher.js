import { watch } from "gulp";
import { path } from "../config/path.js";
import { html } from "./html.js";
import { style } from "./style.js";
import { images } from "./images.js";

export const watcher = () => {
  watch(path.watcher.html, html);
  watch(path.watcher.style, style);
  watch(path.watcher.images, images);
};
