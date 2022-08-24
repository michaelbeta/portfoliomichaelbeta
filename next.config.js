/** @type {import('next').NextConfig} */
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
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
