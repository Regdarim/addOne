var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

///tasks PUG///

gulp.task('pug', function(){
	gulp.src('./*.pug')

	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./'))
});


gulp.task('watch', function(){
	gulp.watch('./*.pug', ['pug']);
	gulp.watch('./*.sass', ['sass']);
});

gulp.task('default',[ 'watch', 'pug']);


///task SASS///

gulp.task('sass',function(){
	gulp.src('./*.sass')
	 .pipe(sourcemaps.init())
	 .pipe(sass({
         errLogToConsole: true,
         outputStyle: 'expanded'  
        }).on('error', sass.logError))
     .pipe(sourcemaps.write())
	 .pipe(gulp.dest('css'))
})


 
