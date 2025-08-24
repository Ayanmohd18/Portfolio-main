const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env, paths }) => {
      // Ensure proper build output
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: '/',
      };

      // Configuration for production environment
      if (env === 'production') {
        // Remove hot reload plugin in production
        webpackConfig.plugins = webpackConfig.plugins.filter(
          plugin => plugin.constructor.name !== 'HotModuleReplacementPlugin'
        );
        
        // Disable watch mode in production
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/,
        };
      } else {
        // Development watch options
        webpackConfig.watchOptions = {
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
          aggregateTimeout: 200,
          poll: 1000,
        };
      }

      return webpackConfig;
    },
  },
  babel: {
    presets: ['@babel/preset-react'],
    plugins: [],
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
    },
  },
};
