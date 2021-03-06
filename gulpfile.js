"use strick";
const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
//sass to css
gulp.task("styles", () => {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css/"));
});

gulp.task("clean", () => {
  return del(["css/portfolio.css"]);
});
gulp.task("default", gulp.series(["clean", "styles"]));
gulp.task("watch", () => {
  gulp.watch("sass/**/*.scss", (done) => {
    gulp.series(["clean", "styles"])(done);
  });
});
