const autoprefixer = require('autoprefixer');

module.exports = ({ file, options, env }) => ({

	plugins: {
		autoprefixer: (env === 'production') ? {
			browsers: ['last 2 versions', 'iOS >= 8']
		} : false
	}

});