const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "next1",
        filename: "remote.js",
        remotes: {
          next2: `next2@http://localhost:3001/_next/static/remote.js`,
        },
      })
    );

    return config;
  },
};
