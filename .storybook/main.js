const webpack = require("webpack");

module.exports = {
  addons: ["@storybook/addon-essentials"],
  features: {
    postcss: false,
  },
  staticDirs: ["../public"],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: async (config) => {
    config.plugins = config.plugins.filter(
      (plugin) => !(plugin instanceof webpack.ProgressPlugin)
    );
    return config;
  },
};
