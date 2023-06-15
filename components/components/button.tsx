import clsx from 'clsx'

export enum ButtonTypes
{
    Primary = 'primary',
}

export default function button({ children, className, type }: { children: React.ReactNode, className?: string, type?: ButtonTypes })
{
    const classes = clsx({
        'btn': true,
        'btn-primary': type === ButtonTypes.Primary,
        [ className || '' ]: !!className,
    })

    return (
        <button className={ classes }>{ children }</button>
    )
}