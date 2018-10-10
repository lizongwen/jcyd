'use strict';

//npm install gulp gulp-ignore gulp-htmlmin gulp-uglify gulp-clean-css gulp-rev gulp-rev-collector gulp-revplace gulp-if --save -dev
var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),//压缩html
	uglify = require('gulp-uglify'),//压缩js
	cleancss = require('gulp-clean-css'),//压缩css
	imagemin = require('gulp-imagemin'),//压缩image，特别耗资源建议不用
	rev = require('gulp-rev'),//生成md5的文件指纹
	//revcollector = require('gulp-rev-collector'),//感觉没什么用，和npm的说明没多少意义
	overrideurl = require('gulp-rev-css-url'),//重写css中的url
	revreplace = require('gulp-rev-replace'),//重写 md5指纹文件名
	urlreplace = require('gulp-url-replace');//url 前缀修改

//img file encode
gulp.task('img', function () {
	return gulp.src('static/{img,upload}/**/*.*', { base: './' })
		// .pipe( imagemin() ) //特别消耗性能建议不要使用
		.pipe(rev())
		.pipe(gulp.dest('/output'))
		.pipe(rev.manifest())//生成rev-manifest.json文件，内涵资源地址原地址和加了文件指纹地址对应的说明文件
		.pipe(gulp.dest('/output/static/img'));
})
//video font
gulp.task('video', function () {
	return gulp.src('static/{video,font}/**/*.*', { base: './' })
		.pipe(rev())
		.pipe(gulp.dest('/output'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('/output/static/video'));
})
//js file encode and minify
gulp.task('js', function () {
	return gulp.src('static/js/**/*.js', { base: './' })
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest('/output'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('/output/static/js'));
})
//css file encode and minify css
gulp.task('css', function () {
	return gulp.src(['static/css/**/*.css'], { base: './' })
		.pipe(cleancss({ compatibility: 'ie7' }))
		.pipe(rev())
		.pipe(overrideurl())
		.pipe(gulp.dest('/output'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('/output/static/css'));
})
//copy system file
gulp.task('copy', function () {
	return gulp.src(['*.*', 'src/**', 'app/**'], { base: './' })
		.pipe(gulp.dest('/output'));
})
//update css/js/img file url in html file and minify
gulp.task('html', ['img', 'video', 'js', 'css'], function () { // 
	var manifest = gulp.src("/output/static/**/rev-manifest.json");//这里指定文件，如果是泛匹配json文件，gulp-rev-replace插件在替换时可能出错
	return gulp.src(['template/**/*.{html,htm,tpl,jsp,php,ftl}'], { base: './' })
		//"/output/static/js/rev-manifest.json",
		.pipe(revreplace({ manifest: manifest }))//根据指纹文件替换相应的资源连接地址
		.pipe(urlreplace({
			'/static/js': '//js.360shouji.com/static/js',
			'/static/css': '//css.360shouji.com/static/css',
			'/static/img': '//res.360shouji.com/static/img',
			'/static/font': '//css.360shouji.com/static/font',
			'/static/video': '//res.360shouji.com/static/video'
		}))//资源文件引用地址添加域名
		// .pipe( htmlmin() )//插件对模板类文件压缩比较鸡肋
		.pipe(gulp.dest('/output'));
})
//update 
gulp.task('col-css', ['html'], function () {
	var manifest = gulp.src("/output/static/{css,video,font,img}/*.json");
	return gulp.src(['/output/static/css/**/*.css'], { base: "./output" })
		.pipe(revreplace({ manifest: manifest }))
		.pipe(urlreplace({
			'/static/img': '//res.360shouji.com/static/img',
			'/static/font': '//css.360shouji.com/static/font'
		}))
		.pipe(gulp.dest('/output'));
});
gulp.task('watch', function () {
	//暂时删除了
})

/* 执行所有 */
gulp.task('default', function () {
	gulp.run('copy', 'col-css');
});