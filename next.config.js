/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const withFonts = require("next-fonts");
module.exports = withPlugins([
], {
  images: {
    domains: ['images.unsplash.com'],
  }, exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/wish': { page: '/wish' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
    }
  },
});