module.exports = function(grunt, options) {
	return {
		debug: {
			options: {
				root : process.cwd()
			},
			files: {
				'<%=destPath%>/<%=currentProject%>.js.map': ['<%=destPath%>/<%=currentProject%>.js']
			}
		},
		release: {
			options: {
//				root : process.cwd()
			},
			files: {
				'<%=destPath%>/<%=currentProject%>.js.map': ['<%=destPath%>/<%=currentProject%>.js']
			}
		}
	}
};