const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
  build: {
    build: buildFolder,
    html: `${buildFolder}/`,
    style: `${buildFolder}/`,
    images: `${buildFolder}/assets/images/`,
    font: `${buildFolder}/assets/fonts/`,
    script: `${buildFolder}/`,
  },
  src: {
    html: `${srcFolder}/html/pages/*.html`,
    style: `${srcFolder}/style/style.scss`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    fontTtf: `${srcFolder}/fonts/*.ttf`,
    script: `${srcFolder}/scripts/main.js`,
  },
  watcher: {
    html: `${srcFolder}/html/**/*.html`,
    style: `${srcFolder}/style/**/*.scss`,
    images: `${srcFolder}/images/**/*`,
    script: `${srcFolder}/scripts/**/*.js`,
  },
};
