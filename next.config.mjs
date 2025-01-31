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
                hostname: 'plus.unsplash.com', // Unsplash Plus domain
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com', // Regular Unsplash domain
            },
            {
                protocol: 'https',
                hostname: 'next-ecommerce-template-4.vercel.app',
            },
        ],
    },
};

export default nextConfig;
