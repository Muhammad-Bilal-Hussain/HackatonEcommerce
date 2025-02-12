/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'next-ecommerce-template-4.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com', // Googleusercontent images allow
            },
        ],
    },
};

export default nextConfig;
