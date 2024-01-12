import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://dhimiterhelmi.it',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: 'https://dhimiterhelmi.it/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.it',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];
}
