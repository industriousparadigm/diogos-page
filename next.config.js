/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  exclude: ["infra"],
  // images: {
  //   domains: ["picsum.photos"],
  // },
}

module.exports = nextConfig