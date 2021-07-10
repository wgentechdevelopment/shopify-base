var gulp = require( "gulp" );
var concat = require( "gulp-concat" );
var uglify = require( "gulp-uglify" );
var sourcemaps = require( "gulp-sourcemaps" );
var vendorScripts = [
	"node_modules/addtocalendar/addtocalendar.js"
];

gulp.task( "vendors", function() {
	if ( vendorScripts.length < 1 ) {
		return false;
	}
	return gulp.src( vendorScripts )
    .pipe( sourcemaps.init() )
    .pipe( concat( "vendor.min.js" ) )
    .pipe( uglify() )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( "assets/js" ) );
});
