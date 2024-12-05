import { IconDefinition, faGithub, faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInfo, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFaceLaughBeam, faSquareCheck, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

export type Menu = Record<string, MenuItemInterface>

export interface MenuItemInterface
{
    icon?: IconDefinition
    iconColor?: string
    iconWidth?: number
    translateKey: string
    title?: string,
    href?: string
    classNames?: string
    classNamesHover?: string
    rel?: string
    target?: string
    onMobile?: boolean
}

export const menuHeaderItems: Menu = {
    academy: {
        icon: faThumbsUp,
        translateKey: 'academy',
        href: 'https://mostafaeffati.academy',
        target: '_blank',
        rel: 'nofollow',
        onMobile: false,
    },
    whatIDo: {
        icon: faThumbsUp,
        translateKey: 'what_i_do',
        href: '#what-i-do',
    },
    portfolio: {
        icon: faSquareCheck,
        translateKey: 'portfolio',
        href: '#portfolio',
    },
    letsTalk: {
        icon: faFaceLaughBeam,
        translateKey: 'lets_talk',
        href: '#lets-talk',
        classNames: 'text-gradient-primary-bold',
        classNamesHover: 'hover:text-gradient-primary',
    },
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
    telegram: {
        icon: faTelegram,
        iconColor: '#0088cc',
        translateKey: 'telegram',
        href: 'https://t.me/mostafa_effati',
    },
}

export const footerLinks: Menu = {
    email: {
        icon: faPaperPlane,
        iconColor: '#d9b9d8',
        translateKey: '',
        title: 'contact@mostafaeffati.com',
        href: 'mailto:contact@mostafaeffati.com',
    },
    telegram: {
        icon: faTelegram,
        iconColor: '#0088cc',
        translateKey: '',
        title: '@mostafa_effati',
        href: 'https://t.me/mostafa_effati',
    },
    tel: {
        icon: faPhone,
        iconColor: '#a5bae5',
        translateKey: '',
        title: '+98 938 335 9523',
        href: 'tel:+989383359523',
    },
    instagram: {
        icon: faInstagram,
        iconColor: '#dd2a7b',
        translateKey: '',
        title: '@mostafaeffatii',
        href: 'https://www.instagram.com/mostafaeffatii/',
    },
}