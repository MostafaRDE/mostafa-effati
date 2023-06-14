import { menuHeaderItems } from '@/modules/menu'
import Image from 'next/image'
import Link from 'next/link'

export default function Header()
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
                                    <Link href={ v.href || '#' }>{ v.translateKey }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}