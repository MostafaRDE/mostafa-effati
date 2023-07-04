import { Locale } from '@/i18n-config'

export const generateRouteLinkHref = (lang: Locale, path: string) => `/${ lang }/${ path.charAt(0) === '/' ? path.substring(1) : path }`
