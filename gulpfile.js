// --------------------------------------
// Gulp Set up and configuration 
// --------------------------------------

// Define Gulp
gulp = require('gulp-help')(require('gulp'));

// Defining all tasks
var 
    // Clean and Initialise
    runSequence = require('run-sequence'),
    clean = require('gulp-clean'),
    
    // Build Process
    buildJs = require('tasks/construct/construct-js'),
    buildScss = require('tasks/construct/construct-scss')
    buildDocs = require('tasks/construct/construct-docs')
    watch = require('tasks/monitor/watch')(gulp),

    // Testing and Proofing
    scssLint = require('gulp-scss-lint'),
    jsLint = require('gulp-jslint'),

    // Utilities
    gutil = require('gulp-util'),
    map = require('map-stream');