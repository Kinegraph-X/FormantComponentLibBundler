let mongoose = require('mongoose');
var path = require('path');


module.exports = function (grunt) {
	
	/**
	*
	* Gruntfile oriented to js bundles creation to which we could want to associate a spip dependencies list and inherent deployment logic
	* command : grunt build-debug --verbose --bundle MP4Parser --config-debug --stack
	*
	*/
//	console.log(grunt.cli.options, process.argv);

	grunt.file.setBase('../');
	const selfPath = '_formantComponentLibBundler-master';
	const coreBundlerPath = '_formantCoreBundler-master/';
	const projectPath = 'tasks';
	const destPath = 'build';
	
	var rootPath = 'codebase/', 
		gruntFilesPath = selfPath + '/_Grunt_files/',
		basePath,
		currentBundle = 'formant', 
		pathToComponentLib = rootPath + 'jsComponentLib',
		buildDeployPath = 'node_modules/formantjs';
	
	currentName = grunt.cli.options.name;
	
	if (grunt.cli.tasks[0] === 'newComponent') {
		if (!currentName) {
			console.error('executing the "newComponent" task requires passing a "name" parameter to the CLI');
			return;
		}
		basePath = gruntFilesPath + '_componentInLib/';
		require("grunt-load-gruntfile")(grunt,{requireResolution: true});
		grunt.loadGruntfile(basePath);
		return;
	}
	else
		basePath = selfPath + '/src';

	
	var bundleConfig = grunt.file.readJSON(selfPath + '/' + currentBundle + '.json');
	if (!bundleConfig) {
		console.error('Error : no bundle content given.', 'Please create the file "' + selfPath + '/' + currentBundle + '.json"')
		return;
	}
    
	var folderArray = bundleConfig.content;
	
	var configPath = [], browserifyPath = [];
	folderArray.forEach(function(val, key) {
		configPath.push(path.join(process.cwd(), rootPath + val));
		browserifyPath.push(rootPath + val);
	});
	configPath.push(path.join(process.cwd(), selfPath + '/' + projectPath));
	browserifyPath.push(basePath);
	browserifyPath.push(coreBundlerPath + destPath);
	
	var pkg = grunt.file.readJSON(selfPath + '/package.json');
	pkg.main = path.join(process.cwd(), selfPath + '/src/main.js');
	
    require('load-grunt-config')(grunt, {
        // path to config.js & task.js files is the tasks dir (be carefull, any js files in this folder shall be executed)
        configPath: configPath,
//		overridePath: path.join(process.cwd(), basePath + currentBundle + '/grunt-config-' + currentBundle),
		init : true,
		data : {
			rootPath : rootPath,
			basePath : basePath,
			currentProject : currentBundle,
			pathToProject : selfPath,
			pathToComponentLib : pathToComponentLib,
			browserifyPath : browserifyPath,
			UIpackage : bundleConfig.UIpackage,
			destPath : selfPath + '/' + destPath,
			exorciseRootPath : '_frameworkCoreBuild/' + destPath,
			buildDeployPath : buildDeployPath
		},
		postProcess : function (config) {
			config.package = pkg;
			return config;
		}
	});
	
	grunt.registerTask('default', ['execute:debug', 'browserify:debug', 'exorcise:debug', 'copy:buildCopy']);
//	grunt.registerTask('build-debug',   ['execute:debug', 'browserify:debug', 'exorcise:debug', 'copy:localRelease']);
//	grunt.registerTask('build-localRelease',   ['execute:debug', 'browserify:release', 'terser:release', 'copy:localRelease']);
	

//	mongoose.connection.watch().on('change', function() {
//		console.log('>>>>>>>>>>>>>>>>> change to db <<<<<<<<<<<<<<<<<<<<<');
//		grunt.file.delete(basePath + currentBundle + '/js/' + currentBundle + '.debug.js');
//	});
};