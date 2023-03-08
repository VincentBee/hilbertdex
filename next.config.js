/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
