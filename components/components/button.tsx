import clsx from 'clsx'
import { HTMLAttributeAnchorTarget, MouseEventHandler } from 'react'
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

export default function button({ children, className, href, hasLinkType, onClick, rel, target, type, withShadow }: {
    children: React.ReactNode,
    className?: string,
    hasLinkType?: LinkTypes,
    withShadow?: boolean,
    href?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    rel?: string,
    target?: HTMLAttributeAnchorTarget,
    type?: ButtonTypes,
})
{
    const classes = clsx({
        'btn': true,
        'btn-shadow': withShadow,
        'btn-primary': type === ButtonTypes.Primary,
        [ className || '' ]: !!className,
    })

    switch (hasLinkType)
    {
        case LinkTypes.HTML:
            return (
                <a className={ classes } href={ href } target={ target } rel={ rel }><div className="z-[1] relative">{ children }</div></a>
            )
            
        case LinkTypes.Next:
            return (
                <Link className={ classes } href={ href || '' }><div className="z-[1] relative">{ children }</div></Link>
            )
    }

    return (
        <button className={ classes } onClick={ onClick }><div className="z-[1] relative">{ children }</div></button>
    )
}