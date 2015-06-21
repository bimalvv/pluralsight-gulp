module.exports = function () {
	var client = './src/client/';
	var config = {
		temp: './.tmp',
		// All js files
		alljs: [
			'./src/**/*.js',
			'./*.js'
		],
		less: client + 'styles/styles.less'
	};

	return config;
};
