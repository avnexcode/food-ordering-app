import './src/env.js';

/** @type {import("next").NextConfig} */
const config = {
    async rewrites() {
        return [
            {
                source: '/api/auth/:path*',
                destination: '/api/v1/auth/:path*',
            },
        ];
    },
    reactStrictMode: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    transpilePackages: ['geist'],
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default config;
