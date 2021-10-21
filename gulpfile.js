const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

buildStyles = () => {
  return src("./sass/**/*.scss").pipe(sass()).pipe(dest("css"));
};

watchStyles = () => {
  watch(["./sass/**/*.scss"], buildStyles);
};

exports.default = series(watchStyles, buildStyles);
