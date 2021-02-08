const gulp = require('gulp');
const sass =  require('gulp-sass');
const bourbon = require('node-bourbon').includePaths;
const autoPrefix = require('gulp-autoprefixer');
const panini = require('panini');


// paths
const srcPath = 'src/';
const cssPath = `${srcPath}css/`;
const sassPath = `${srcPath}sass/`;

const docsPath = 'docs/';
const docsSourcePath = `${docsPath}source/`;
const docsBuildPath = `${docsPath}build/`;


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


// docs
const paniniDocs = () => {
    console.log('------ Generate Panini Docs ------');
    return gulp.src(`${docsSourcePath}pages/**/*.html`)
        .pipe(panini({
            root: `${docsSourcePath}pages/`,
            layouts: `${docsSourcePath}layouts/`,
            partials: `${docsSourcePath}partials/`,
            helpers: `${docsSourcePath}helpers/`,
            data: `${docsSourcePath}data/`
        }))
        .pipe(gulp.dest(docsBuildPath))
}


// runs
exports.compile = gulp.series(compileSass);
exports.docs = gulp.series(paniniDocs);
