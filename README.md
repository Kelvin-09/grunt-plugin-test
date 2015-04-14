# grunt-plugin-test

> The practice of making grunt plugin

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-plugin-test --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-plugin-test');
```

## The "plugin_test" task

### Overview
In your project's Gruntfile, add a section named `plugin_test` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  plugin_test: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `'test1'`

使用第一段代码

#### options.commentSymbol
Type: `String`
Default value: `'//'`

用来注释

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  plugin_test: {
    options: {
      who: 'test1',
      commentSymbol: '//'
    },
    dist: ['exapmle/*.js']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-04-14&nbsp;&nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp;init

## License
Copyright (c) 2015 Kelvin. Licensed under the MIT license.
