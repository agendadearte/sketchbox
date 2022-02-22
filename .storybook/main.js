module.exports = {
  addons: ["@storybook/addon-essentials"],
  features: {
    postcss: false,
  },
  staticDirs: ["../public"],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
};
