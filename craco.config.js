module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Add the rule for .mdx files
        webpackConfig.module.rules.push({
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
            }
          ],
        });
        return webpackConfig;
      },
    },
  };