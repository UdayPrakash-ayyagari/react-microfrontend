const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
        webpackConfig.output.publicPath = 'auto';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "reactmfeone",  // Name of the remote project
          filename: "remoteEntry.js",  // Entry point for the remote component
          exposes: {
            './ComponentA': './src/ComponentA',  // Expose this component
            './App': './src/App', // Exposing the App component
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
