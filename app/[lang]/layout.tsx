import '@/assets/css/globals.css'

import { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import BannerNewSiteEnglish from '@/assets/images/banners/gif-5.gif'

const inter = Inter({ subsets: [ 'latin' ] })

export async function generateMetadata({ params : { lang } }: { params: { lang: Locale } }): Promise<Metadata>
{
    const dictionary = await getDictionary(lang)

    return {
        title: dictionary[ 'pages' ][ 'index' ][ 'head' ][ 'title' ],
    }
}

export default function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode,
    params: { lang: string }
})
{
    return (
        <html lang={ lang }>
            <body className={ inter.className }>
                <div className="h-16 bg-gradient-to-r from-[#7148b5] via-[#8769e9] to-[#715dd3]">
                    <a
                        href="https://mostafaeffati.academy"
                        className="flex justify-center items-center w-100 h-100"
                        target="_blank"
                        rel="nofollow"
                    >
                        <Image src={ BannerNewSiteEnglish } alt="" width={ 300 }></Image>
                    </a>    
                </div>
                { children }
            </body>
        </html>
    )
}
