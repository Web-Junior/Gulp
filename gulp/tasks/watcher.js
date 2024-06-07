import { watch } from "gulp";
import { path } from "../config/path.js";
import { html } from "./html.js";
import { style } from "./style.js";
import { images } from "./images.js";
import { script } from "./script.js";

export const watcher = () => {
  watch(path.watcher.html, html);
  watch(path.watcher.style, style);
  watch(path.watcher.images, images);
  watch(path.watcher.script, script);
};
