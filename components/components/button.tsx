import clsx from 'clsx'
import { MouseEventHandler } from 'react'

export enum ButtonTypes
{
    Primary = 'primary',
}

export default function button({ children, className, type, onClick }: {
    children: React.ReactNode,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: ButtonTypes,
})
{
    const classes = clsx({
        'btn': true,
        'btn-primary': type === ButtonTypes.Primary,
        [ className || '' ]: !!className,
    })

    return (
        <button className={ classes } onClick={ onClick }>{ children }</button>
    )
}