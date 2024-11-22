const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'auto';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "reactmfetwo",  // Name of the host app
          remotes: {
            reactmfeone: "reactmfeone@http://localhost:3000/remoteEntry.js",  // Remote from projectA
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        })
      );
      return webpackConfig;
    },
  },
};
