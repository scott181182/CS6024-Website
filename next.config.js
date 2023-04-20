/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            loader: "raw-loader",
        });
        return config;
    },

    basePath: "/uc/cs6024"
};

module.exports = nextConfig;
