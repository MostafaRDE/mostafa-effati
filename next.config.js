/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        formats: ['image/webp'],
    },
    trailingSlash: true,
}

module.exports = nextConfig
