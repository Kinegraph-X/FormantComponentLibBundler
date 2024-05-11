module.exports = function (grunt) {
	
	/**
	*
	* command : grunt build-debug --verbose --bundle AbstractTable --config-debug
	*
	*/
//	console.log(grunt.cli.options, process.argv);
	if (!grunt.file.isDir('./node_modules'))
		grunt.file.setBase('C:/Production Data/Git/');
	
	var rootPath = 'codebase/',
		basePath,
		categoriesPath,
		helpersPath,
		pathToDest,
		componentName,
		projectVendor = 'Kinegraphx',
		baseAuthorName = '_authorName',
		baseWord = '_BaseComponent',
		componentWord = '_componentName';
		
	var configPath = [];
	
	componentName = grunt.cli.options.name;
	basePath = rootPath + 'jsComponentLib/src/';
	categoriesPath = basePath + 'UI/categories/';
	helpersPath = basePath + 'Helpers/_scaffolding/';
	pathToDest = categoriesPath + '_recentlyCreated/' + componentName + '/';
	
	var configPath = [];
	configPath.push(process.cwd() + '/' + basePath);
 	
    require('load-grunt-config')(grunt, {
        // path to config.js & task.js files, defaults to grunt dir
        configPath: configPath,
		init : true,
		data : {
			projectVendor : projectVendor,
			baseWord : baseWord,
			baseAuthorName : baseAuthorName,
			componentWord : componentWord,
			componentName : componentName,
			pathToTemplate : helpersPath + baseWord,
			pathToDest : pathToDest
		}
	});
	
	grunt.registerTask('newComponent', ['copy:newPackageComponent']);
	
};