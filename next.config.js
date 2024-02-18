/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible');

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'yt3.googleusercontent.com',
			port: '',
		  },
		  {
			protocol: 'https',
			hostname: 'source.unsplash.com',
			port: '',
		  },
		],
	  },
};

module.exports = withPlausibleProxy()(nextConfig);
