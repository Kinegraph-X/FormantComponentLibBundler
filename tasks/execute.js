module.exports = function(grunt, options) {
	
	return {
		debug: {
			options: Object.assign(options, {
				module : true
			}),
			src: [
				options.rootPath + 'jsComponentLib/src/_buildTools/_UIpackages.js'
				],
			after : function(gr, opt){
				grunt.config.data.UIPackageList = opt.UIpackageList;
				grunt.config.data.UIvalidatorsList = opt.UIvalidatorsList;
			}
		},
		release: {
			options: Object.assign(options, {
				module : true
			}),
			src: [options.rootPath + 'jscore/src/_buildTools/_UIpackages.js'],
			after : function(gr, opt){
				grunt.config.data.UIPackageList = opt.UIpackageList;
				grunt.config.data.UIvalidatorsList = opt.UIvalidatorsList;
			}
		}
	}
};