/** @type {import('next').NextConfig} */
//const { i18n } = require("./next-i18next.config");
const nextConfig = {
  async redirects() {//Cambiar el index por home/index
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    /*const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;*/
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "url-loader" &&  require.resolve('@svgr/webpack'),
          options: {
            esModule: false,
          },
        },
      ],
    });
    return config;
  },

  reactStrictMode: true,
  swcMinify: true,

}

module.exports = nextConfig
