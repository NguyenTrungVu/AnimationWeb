const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles(){
    return src('../shin/style.scss')
    .pipe(sass())
    .pipe(dest('../css'))

}

function watchTask(){
    watch(['../shin/style.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)

// how to run scss file to convert code to css in terminal ?