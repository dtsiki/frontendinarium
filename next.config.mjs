import createMDX from '@next/mdx'
// import withMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/frontendinarium",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};


const withMDX = createMDX({
    extension: /\.mdx?$/,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default nextConfig;