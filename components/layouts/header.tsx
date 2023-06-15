import '@/assets/css/layouts/header.css'

import { Params } from '@/modules/interfaces/props.interface'
import { socialMediaItems } from '@/modules/menu'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button, { ButtonTypes } from '@/components/components/button'
import HeaderTop from './header-top'

export default function Header({ lang, t }: Params)
{
    return (
        <header className="sm:mt-16 sm:px-14 sm:py-11 sm:rounded-3xl bg-white shadow-header relative">

            <HeaderTop lang={ lang } t={ t } />

            <div className="grid grid-cols-3 gap-x-20 px-20 mb-16 mt-28">

                <div className="col-span-2">

                    <div>
                        <span className="text-2xl font-medium">{ t[ 'pages' ][ 'index' ][ 'header' ][ 'caption' ][ 'top' ] }</span>
                        <h1 className="text-5xl font-bold leading-15 mt-5">{ t[ 'pages' ][ 'index' ][ 'header' ][ 'caption' ][ 'title' ] }</h1>
                    </div>

                    <div className="mt-12 flex gap-x-6">
                        {
                            Object.entries(socialMediaItems).map(([ k, v ]) =>
                            {
                                return (
                                    <Link
                                        key={ `header-social-media-item-${ k }` }
                                        href={ v.href || '#' }
                                        target='_blank'
                                        rel="nofollow"
                                        className="opacity-50 hover:opacity-100 transition-opacity"
                                    >
                                        <FontAwesomeIcon icon={ v.icon! } color={ v.iconColor } width={ 24 } />
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className="mt-24 flex gap-x-9">
                        <Button>Portfolio</Button>
                        <Button type={ ButtonTypes.Primary }>Let's Talk!</Button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="rounded-full w-72 h-72 overflow-hidden bg-gradient-primary-to-b">
                        <Image
                            src={ require('@/assets/images/avatars/my-self.png') }
                            alt="Mostafa Effati's profile image"
                            priority
                            className="-rotate-6"
                            />
                    </div>
                </div>

            </div>

        </header>
    );
}