/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Añadir esto para asegurar que el favicon se gestiona correctamente
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ico$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig