import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined
{
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[ key ] = value))

    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest)
{
    if (!request.nextUrl.pathname.endsWith('/'))
        return
    
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${ locale }/`) && pathname !== `/${ locale }`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale)
    {
        const locale = getLocale(request)

        // e.g. incoming request is /login/
        // The new URL is now /en-us/login/
        return NextResponse.redirect(new URL(`/${ locale }/${ pathname }`, request.url))
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [ '\/((?!api|_next\/static|_next\/image).*)' ],
}