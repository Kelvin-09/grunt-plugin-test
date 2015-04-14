/*
 * grunt-plugin-test
 *
 *
 * Copyright (c) 2015 Kelvin
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('plugin_test', 'The practice of making grunt plugin', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'test1',
      commentSymbol: '//'
    });

    var testExistRegexMap = {
      'test1': /\| \|/,
      'test2': /- -/
    };

    var who = options.who,
        commmentSymbol = options.commentSymbol,
        commentFilepathMap = {
          'test1': 'assets/test1.txt',
          'test2': 'assets/test2.txt'
        },
        commentFilepath = path.join(__dirname, commentFilepathMap[who]),
        commentContent = grunt.file.read(commentFilepath),
        lineCommentAttr = commentContent.split(grunt.util.normalizelf('\n'));

    lineCommentAttr.forEach(function (value, index, arr) {
      arr[index] = commmentSymbol + value;
    });

    commentContent = lineCommentAttr.join(grunt.util.normalizelf('\n'));

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath),
            newFileContent = commentContent +
                             grunt.util.normalizelf('\n') +
                             originalFileContent;

        if(testExistRegexMap[who].test(originalFileContent)) {
          return;
        }
        grunt.file.write(filepath, newFileContent);
      });

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
