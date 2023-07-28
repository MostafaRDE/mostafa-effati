import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots
{
    return {
        rules: {
            userAgent: '*',
            allow: '/en-US/',
        },
        sitemap: 'https://www.mostafaeffati.ir/sitemap.xml',
    }
}