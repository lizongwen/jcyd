const gulp = require('gulp');
const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
const pump = require('pump');
// const autoprefixer = require('gulp-autoprefixer')
// const cleanCSS = require('gulp-clean-css');
// const htmlmin = require('gulp-htmlmin');
// const rename = require("gulp-rename");
// const rev = require('gulp-rev');
// const useref = require('gulp-useref');
// const revReplace = require('gulp-rev-replace');
// 编译ES6
gulp.task('compile', (cb) => {
	pump([
		gulp.src(['./src/**/*.es','!src/public/**/*.es']),
		babel({
			presets: ['env']
		}),
		gulp.dest('build'),
	], cb);
});
// // 压缩JS
// gulp.task('compress', (cb) => {
// 	pump([
// 		gulp.src('./src/public/**/*.js'),
// 		uglify(),
// 		gulp.dest('dist'),
// 	], cb);
// });
// // 压缩CSS
// gulp.task('minify-css', (cb) => {
// 	pump([
// 		gulp.src('./src/public/**/*.css'),
// 		autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}),
// 		cleanCSS({ compatibility: 'ie8' }),
// 		gulp.dest('dist'),
// 	], cb);
// });

// // // 压缩html
// gulp.task('minify-html', function (cb) {
// 	pump([
// 		gulp.src('./src/**/*.html'),
// 		htmlmin({ collapseWhitespace: true }),
// 		gulp.dest('dist')
// 	], cb);
// });

// // MD5
// gulp.task("revision", ['minify-css', 'compress'], function (cb) {
// 	pump([
// 		gulp.src(["./dist/**/*.css", "./dist/**/*.js"]),
// 		rev(),
// 		gulp.dest('dist'),
// 		rev.manifest(),
// 		gulp.dest('dist')
// 	], cb);
// })

// // 修改HTML资源路径
// gulp.task("revreplace", ['revision', 'minify-html',], function (cb) {
// 	var manifest = gulp.src("./dist/rev-manifest.json");
// 	pump([
// 		gulp.src("./dist/**/*.html"),
// 		revReplace({ manifest: manifest }),
// 		gulp.dest('dist')
// 	], cb);
// });

gulp.task('default', ['compile'], function () {
	console.log('任务已完成');
	gulp.watch(['./src/**/*.es','!src/public/**/*.es'],['compile'])
});