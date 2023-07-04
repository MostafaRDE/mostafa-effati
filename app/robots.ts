import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots
{
    return {
        rules: {
            userAgent: '*',
            allow: '/en-us/',
        },
        sitemap: 'https://www.mostafaeffati.ir/sitemap.xml',
    }
}