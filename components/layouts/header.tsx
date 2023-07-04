import { Params } from '@/modules/interfaces/props.interface'
import { socialMediaItems } from '@/modules/menu'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button, { ButtonTypes, LinkTypes } from '@/components/components/button'
import HeaderTop from './header-top'

export default function header({ lang, t }: Params)
{
    return (
        <header className="relative text-black sm:mt-8 lg:mt-16 px-8 sm:px-8 md:px-14 py-11 sm:rounded-3xl bg-white w-full shadow-header xl:bg-[url('../../images/shapes/cross-lines-1.svg')] xl:bg-no-repeat xl:bg-right-bottom">

            <HeaderTop lang={ lang } t={ t } />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-20 px-8 sm:px-12 md:px-20 mb-16 mt-24 sm:mt-28">

                <div className="xl:col-span-2 order-2 xl:order-1 mt-24 xl:mt-0">

                    <div>
                        <span className="text-xl sm:text-2xl font-medium">
                            { t[ 'pages' ][ 'index' ][ 'header' ][ 'caption' ][ 'top' ][ 'part1' ] }<br />
                            { t[ 'pages' ][ 'index' ][ 'header' ][ 'caption' ][ 'top' ][ 'part2' ] }
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-12 sm:leading-15 mt-5">{ t[ 'pages' ][ 'index' ][ 'header' ][ 'caption' ][ 'title' ] }</h1>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6">
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

                    <div className="mt-24 flex gap-9 flex-wrap">
                        <Button hasLinkType={ LinkTypes.HTML } href="#portfolio" withShadow>{ t[ 'glossaries' ][ 'portfolio' ] }</Button>
                        <Button type={ ButtonTypes.Primary } hasLinkType={ LinkTypes.HTML } href="#lets-talk" withShadow>{ t[ 'glossaries' ][ 'lets_talk' ] }!</Button>
                    </div>
                </div>

                <div className="flex justify-center items-start order-1 xl:order-2">
                    <div className="rounded-full w-72 aspect-square overflow-hidden bg-gradient-primary-to-b">
                        <Image
                            src={ require('@/assets/images/avatars/my-self.png') }
                            alt="Mostafa Effati's profile image"
                            priority
                            className="-rotate-6"
                            />
                    </div>
                </div>

            </div>

            <div className="absolute bottom-8 right-8 sm:right-10 xl:right-12">
                <span className="font-bold">
                    UX/UI Designed by&nbsp;
                    <Link href={ process.env.SOCIAL_LINKS_SHIRLEY_BACILIO_LINKEDIN || '' } target="_blank" rel="nofollow" className="underline text-black hover:text-gray-400">
                        <span className="text-gradient-primary-bold hover:text-gradient-primary">Shirley Bacilio</span>
                    </Link>
                </span>
            </div>

        </header>
    );
}