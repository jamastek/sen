const path = require('path');

const aliases = {
  containers: path.resolve(__dirname, "containers"),
  components: path.resolve(__dirname, "components"),
  images: path.resolve(__dirname, "images"),
  utils: path.resolve(__dirname, "components/utils"),
  layout: path.resolve(__dirname, "containers/layout"),
  types: path.resolve(__dirname, "types"),
  hooks: path.resolve(__dirname, "hooks"),
  contexts: path.resolve(__dirname, "contexts"),
};

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve = {
      ...config.resolve,
      alias: {...config.resolve.alias, ...aliases}
    }

    return config
  },
}