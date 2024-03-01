/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'frontend-test-assignment-api.abz.agency',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
