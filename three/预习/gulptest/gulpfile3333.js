const gulp = require('gulp');
var rev = require("gulp-rev");
const pump = require('pump');
var revReplace = require("gulp-rev-replace");
gulp.task("revision", function (cb) {
	pump([
		gulp.src(["test1/**/*.css", "test1/**/*.js"]),
		rev(),
		gulp.dest('build'),
		rev.manifest(),
		gulp.dest('build')
	], cb);
})

gulp.task("revreplace", ['revision'],function (cb) {
	var manifest = gulp.src("./build/rev-manifest.json");
	pump([
		gulp.src("./build/**/*.html"),
		revReplace({ manifest: manifest }),
		gulp.dest('build')
	], cb);
});
gulp.task('default', ['revreplace', 'revision'], function () {
	console.log('任务已完成')
});