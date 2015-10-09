#!/usr/bin/env node

var imagely = require('../imagely');
var yargs = require('yargs');
var args = yargs.argv;

var source = args._[0];
var destination = args._[1];
var options = {};
var callback;

options.width = args.width || args.w;
options.height = args.height || args.h;
options.scale = args.scale || args.s;
options.bg = args.bg || args.b;
options.json = args.json || args.d;
options.log = args.log || args.l;

if (options.log) {
	callback = function(dimensions) {
		console.log(dimensions.width, dimensions.height);
	};
}

imagely(source, destination, options, callback);