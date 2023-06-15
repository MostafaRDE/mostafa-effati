export type Menu = Record<string, MenuItemInterface>

export interface MenuItemInterface
{
    translateKey: string
    href?: string
    classNames?: string
    classNamesHover?: string
}

export const menuHeaderItems: Menu = {
    about: { translateKey: 'about', href: '#about' },
    whatIDo: { translateKey: 'what_i_do', href: '#what-i-do' },
    portfolio: { translateKey: 'portfolio', href: '#portfolio' },
    letsTalk: { translateKey: 'lets_talk', href: '#lets-talk', classNames: 'text-gradient-primary-reverse', classNamesHover: 'hover:text-gradient-primary' },
}