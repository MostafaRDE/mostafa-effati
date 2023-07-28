import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap
{
    return [
        {
            url: 'https://www.mostafaeffati.ir/en-US/',
            lastModified: new Date(),
        },
    ]
}