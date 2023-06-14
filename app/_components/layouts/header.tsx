import Image from 'next/image'
import Link from 'next/link'
import { Params } from '@/modules/interfaces/props.interface'
import { menuHeaderItems } from '@/modules/menu'

export default function Header({ lang, t }: Params)
{
    return (
        <header className="sm:mt-16 sm:px-14 sm:py-11 sm:rounded-3xl bg-white shadow-header flex justify-between">
            <div>
                <Image src={ require('@/assets/images/logo-outline.svg') } alt="" width={ 44 } />
            </div>

            <div>
                <nav>
                    <ul className="flex gap-x-4">
                        {
                            Object.entries(menuHeaderItems).map(([ k, v ]) =>(
                                <li className="hidden sm:flex md:w-24 lg:w-28 xl:w-32">
                                    <Link href={ v.href || '#' }>{ t[ 'glossaries' ][ v.translateKey ] }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}