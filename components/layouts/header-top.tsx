import Image from 'next/image'
import Link from 'next/link'
import { Params } from '@/modules/interfaces/props.interface'
import { menuHeaderItems } from '@/modules/menu'

export default function headerTop({ lang, t }: Params)
{
    return (
        <div className="flex justify-between items-center">
            <div>
                <Link href="/">
                    <Image src={ require('@/assets/images/logo-outline.svg') } alt="Mostafa Effati's Logo" width={ 44 } />
                </Link>
            </div>

            <div>
                <nav>
                    <ul className="flex gap-x-4">
                        {
                            Object.entries(menuHeaderItems).map(([ k, v ]) => (
                                <li className={ "hidden sm:block sm:w-24 lg:w-28 xl:w-32 text-center" + (` ${ v.classNames }` || '') }>
                                    <Link href={ v.href || '#' } className="font-bold">{ t[ 'glossaries' ][ v.translateKey ] }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}