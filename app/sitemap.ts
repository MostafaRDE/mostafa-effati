import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap
{
    return [
        {
            url: 'https://www.mostafaeffati.ir/en-us/',
            lastModified: new Date(),
        },
    ]
}