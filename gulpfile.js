var gulp = require('gulp');
complexity = require('gulp-complexity');
var ts = require('gulp-typescript');

gulp.task('default', function () {

    return gulp.src('src/app/views/arenas/arena-create/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
		.pipe(complexity({breakOnErrors: false}));
});
