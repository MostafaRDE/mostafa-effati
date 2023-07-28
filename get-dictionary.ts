import 'server-only'
import '@/dictionary'
import { i18n, type Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    'en-us': () => import('./_dictionary/en-us.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale || i18n.defaultLocale]()