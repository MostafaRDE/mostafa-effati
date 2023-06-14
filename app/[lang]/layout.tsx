import '@/assets/css/globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

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
            <body className={ inter.className }>{ children }</body>
        </html>
    )
}
