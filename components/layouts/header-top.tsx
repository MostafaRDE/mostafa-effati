import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Params } from '@/modules/interfaces/props.interface'
import { menuHeaderItems } from '@/modules/menu'
import { generateRouteLinkHref } from '@/modules/helpers'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function headerTop({ lang, t }: Params)
{
    return (
        <div className="flex justify-between items-center">
            <div className="relative flex justify-center w-full lg:block lg:w-auto">

                {/* For sidebar mode */}
                {/* <div className="absolute bottom-0 left-0 top-0 flex items-center sm:hidden">
                    <span className="cursor-pointer">
                        <FontAwesomeIcon icon={ faBars } color='#000' width={ 24 } className="text-gradient-primary-bold fill" />
                    </span>
                </div> */}

                <Link href={ generateRouteLinkHref(lang!, '') }>
                    <Image src={ require('@/assets/images/logo-outline.svg') } alt="Mostafa Effati's Logo" width={ 44 } />
                </Link>
            </div>

            <div className="hidden lg:block">
                <nav>
                    <ul className="flex gap-x-4">
                        {
                            Object.entries(menuHeaderItems).map(([ k, v ]) =>
                            {
                                const classNamesSpan = clsx({
                                    'hover:opacity-60 transition-opacity': !v.classNames,
                                    [ v.classNames || '' ]: v.classNames,
                                    [ v.classNamesHover || '' ]: v.classNamesHover,
                                })

                                return (
                                    <li key={ `header-top-menu-item-${ k }` } className="sm:w-24 lg:w-28 xl:w-32 text-center">
                                        <span className={ classNamesSpan }><a href={ v.href || '#' } className="font-bold " rel={ v.rel } target={ v.target }>{ t[ 'glossaries' ][ v.translateKey ] }</a></span>
                                        { v.target === '_blank' ? (<>&nbsp;&#8599;</>) : ''}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}