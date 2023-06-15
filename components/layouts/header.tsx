import '@/assets/css/layouts/header.css'

import Image from 'next/image'
import Link from 'next/link'
import { Params } from '@/modules/interfaces/props.interface'

import HeaderTop from './header-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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
                        <Link href="#">
                            <FontAwesomeIcon icon={ faLinkedinIn } color='#000' width={24} />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon icon={ faGithub } color='#000' width={24} />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon icon={ faInstagram } color='#000' width={24} />
                        </Link>
                    </div>

                    <div className="mt-24 flex gap-x-6">
                        
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="rounded-full w-72 h-72 overflow-hidden bg-primary-background">
                        <Image src={ require('@/assets/images/avatars/my-self.png') } alt="Mostafa Effati's profile image" priority />
                    </div>
                </div>

            </div>

        </header>
    );
}