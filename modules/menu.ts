import { IconDefinition, faGithub, faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'

export type Menu = Record<string, MenuItemInterface>

export interface MenuItemInterface
{
    icon?: IconDefinition
    iconColor?: string
    iconWidth?: number
    translateKey: string
    href?: string
    classNames?: string
    classNamesHover?: string
}

export const menuHeaderItems: Menu = {
    about: { translateKey: 'about', href: '#about' },
    whatIDo: { translateKey: 'what_i_do', href: '#what-i-do' },
    portfolio: { translateKey: 'portfolio', href: '#portfolio' },
    letsTalk: { translateKey: 'lets_talk', href: '#lets-talk', classNames: 'text-gradient-primary-bold', classNamesHover: 'hover:text-gradient-primary' },
}

export const socialMediaItems: Menu = {
    linkedin: {
        icon: faLinkedinIn,
        iconColor: '#0075b5',
        translateKey: 'linkedin',
        href: 'https://www.linkedin.com/in/mostafaeffati/',
    },
    github: {
        icon: faGithub,
        iconColor: '#000',
        translateKey: 'github',
        href: 'https://github.com/MostafaRDE',
    },
    instagram: {
        icon: faInstagram,
        iconColor: '#dd2a7b',
        translateKey: 'instagram',
        href: 'https://www.instagram.com/mostafaeffatii/',
    },
    faTelegram: {
        icon: faTelegram,
        iconColor: '#0088cc',
        translateKey: 'telegram',
        href: 'https://t.me/mostafaeffati',
    },
}