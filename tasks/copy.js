module.exports = function (grunt, options) {
	
		return {
		buildCopy: {
			files : [
				{
					expand: true,
					cwd: '<%=destPath%>',
					src: [
						'<%=currentProject%>.js', '<%=currentProject%>.js.map',
						],
					dest: '<%=buildDeployPath%>',
					filter: 'isFile'
				}
			]
		}
	};
}