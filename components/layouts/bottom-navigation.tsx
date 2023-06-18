import { Params } from '@/modules/interfaces/props.interface'
import { menuHeaderItems } from '@/modules/menu'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function bottomNavigation({ lang, t }: Params)
{
    return (
        <nav className="block lg:hidden fixed bottom-0 left-0 right-0 h-14 bg-white">
            <ul className="flex justify-around items-center h-14 shadow-inner">
                <li>
                    <a href="#home">
                        <Image src={ require('@/assets/images/logo-outline.svg') } alt="Mostafa Effati's Logo" width={ 24 } />
                    </a>
                </li>
                {
                    Object.entries(menuHeaderItems).map(([ k, v ]) =>
                    {
                        return (
                            <li key={ `bottom-navigation-item-${ k }` }>
                                <a href={ v.href || '#' }>
                                    <FontAwesomeIcon icon={ v.icon! } width={ 24 } height={ 24 } color="#000" />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}