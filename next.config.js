const path = require('path');

const aliases = {
  containers: path.resolve(__dirname, "containers"),
  components: path.resolve(__dirname, "components"),
  images: path.resolve(__dirname, "images"),
  layout: path.resolve(__dirname, "containers/layout"),
  types: path.resolve(__dirname, "types"),
  hooks: path.resolve(__dirname, "hooks"),
  contexts: path.resolve(__dirname, "contexts"),
  apollo: path.resolve(__dirname, "apollo"),
  lib: path.resolve(__dirname, "lib"),
  prisma: path.resolve(__dirname, "prisma"),
  styles: path.resolve(__dirname, "styles"),
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