const gulp = require('gulp');
const sass =  require('gulp-sass');
const bourbon = require('node-bourbon').includePaths;
const autoPrefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');


// paths
const srcPath = 'src/';
const cssPath = `${srcPath}css/`;
const sassPath = `${srcPath}sass/`;


// compiles
const compileSass = () => {
    console.log('------ Compile Sass ------');
    return gulp.src([`${sassPath}/sistent.sass`])
        .pipe(sass({
            // outputStyle: 'compressed',
            // sourceComments: 'map',
            sourceMap: 'scss',
            includePaths: bourbon
        }).on('error', sass.logError))
        .pipe(autoPrefix('last 2 versions'))
        .pipe(gulp.dest(cssPath));
}

const compileSassWithCompressed = () => {
    console.log('------ Compile Sass (Compressed / min) ------');
    return gulp.src([`${sassPath}/sistent.sass`])
        .pipe(sass({
            outputStyle: 'compressed',
            // sourceComments: 'map',
            sourceMap: 'scss',
            includePaths: bourbon
        }).on('error', sass.logError))
        .pipe(autoPrefix('last 2 versions'))
        .pipe(concat('sistent.min.css'))
        .pipe(gulp.dest(cssPath));
}

const watches = () => {
    gulp.watch([sassPath + '**/*', sassPath + '*'], compileSass)
}


// runs
exports.compile = gulp.series(
    compileSass, compileSassWithCompressed
);
exports.dev = gulp.series(
    compileSass, watches,
)
