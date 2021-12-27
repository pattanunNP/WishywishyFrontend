/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const withFonts = require("next-fonts");
module.exports = {
  images: {
    domains: ["res.cloudinary.com", "profile.line-scdn.net"]
  },

}