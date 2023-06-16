import clsx from 'clsx'
import { MouseEventHandler } from 'react'
import Link from 'next/link'

export enum ButtonTypes
{
    Primary = 'primary',
}

export enum LinkTypes
{
    HTML,
    Next,
}

export default function button({ children, className, href, hasLinkType, onClick, type }: {
    children: React.ReactNode,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: ButtonTypes,
    hasLinkType?: LinkTypes,
    href?: string,
})
{
    const classes = clsx({
        'btn': true,
        'btn-primary': type === ButtonTypes.Primary,
        [ className || '' ]: !!className,
    })

    switch (hasLinkType)
    {
        case LinkTypes.HTML:
            return (
                <a className={ classes } href={ href }>{ children }</a>
            )
            
        case LinkTypes.Next:
            return (
                <Link className={ classes } href={ href || '' }>{ children }</Link>
            )
    }

    return (
        <button className={ classes } onClick={ onClick }>{ children }</button>
    )
}