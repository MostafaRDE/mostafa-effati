import { Params } from '@/modules/interfaces/props.interface'
import { menuHeaderItems } from '@/modules/menu'
import Image from 'next/image'

export default function sidebar({ lang, t }: Params)
{
    return (
        <div className="hidden fixed bottom-0 left-0 right-0 top-0 bg-gray-700 bg-opacity-50 z-50">
            <div className="ml-auto h-full bg-white py-8 flex flex-col justify-start w-4/5 items-center">
            
                <div>
                    <Image src={ require('@/assets/images/logo-outline.svg') } alt="Mostafa Effati's Logo" width={ 44 } />
                </div>

                <nav className="self-stretch flex-grow flex justify-center items-center">
                    <ul>
                        {
                            Object.entries(menuHeaderItems).map(([ k, v ]) =>
                            {
                                return (
                                    <li key={ `sidebar-menu-item-${ k }` } className="font-black text-4xl text-center first:mt-0 mt-10 text-gradient-primary-bold hover:text-gradient-primary">
                                        <a href={ v.href || '#' }>{ t[ 'glossaries' ][ v.translateKey ] }</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            
            <div>
                <span className="font-medium text-sm text-gray-300">Version: 1.0.0</span>
            </div>

            </div>
        </div>
    )
}