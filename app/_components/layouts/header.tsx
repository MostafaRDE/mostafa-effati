import Image from 'next/image'
import Link from 'next/link'
import { Params } from '@/modules/interfaces/props.interface'
import { menuHeaderItems } from '@/modules/menu'

export default function Header({ lang, t }: Params)
{
    return (
        <header>
            <div>
                <Image src={ require('@/assets/images/logo-outline.svg') } alt="" width={ 44 } />
            </div>

            <div>
                <nav>
                    <ul>
                        {
                            Object.entries(menuHeaderItems).map(([ k, v ]) =>(
                                <li>
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