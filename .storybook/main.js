const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  resolve: {
    extentions: [".js", ".jsx", ".ts", ".tsx"],
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx"];
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};