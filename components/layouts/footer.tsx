import { Params } from '@/modules/interfaces/props.interface'
import { footerLinks } from '@/modules/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function footer({ lang, t }: Params)
{
    return (
        <footer id="lets-talk" className="pb-16 sm:pb-0 sm:mb-20 lg:mb-10 bg-white sm:bg-transparent">

            <section className="relative sm:mt-8 lg:mt-16 px-8 sm:px-8 md:px-14 lg:pl-[5.5rem] lg:pr-11 py-[4.5rem] sm:rounded-3xl bg-white w-full sm:shadow-header">
                <h3 className="text-gradient-primary inline-block font-bold text-4xl sm:text-5xl">{ t[ 'glossaries' ][ 'lets_talk' ] }</h3>
                
                <div className="mt-14">
                    <ul className="grid grid-cols-2 gap-5 max-w-lg">
                        {
                            Object.entries(footerLinks).map(([ k, v ]) =>
                            {
                                return (
                                    <li className="max-w-xs">
                                        <a href={ v.href } target="_blank" rel="nofollow" className="text-xl flex gap-4 items-center hover:underline">
                                            <FontAwesomeIcon icon={ v.icon! } color={ v.iconColor } width={ 24 } height={ 24 } />
                                            <span>{ v.title }</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </section>

            <div className="flex flex-col sm:flex-row text-black sm:text-white text-center sm:mt-1 pt-1 border-t-[1px] border-dashed border-gray-400 sm:border-none">
                <div className="grow">
                    Developed by
                    &nbsp;
                    <a href="https://www.linkedin.com/in/mostafaeffati/" target="_blank" rel="nofollow" className="underline font-medium">
                        Mostafa Effati
                    </a>
                </div>
                <div>&nbsp;&&nbsp;</div>
                <div className="grow">
                    UX/UI Designed by
                    &nbsp;
                    <a href={ process.env.SOCIAL_LINKS_SHIRLEY_BACILIO_LINKEDIN } target="_blank" rel="nofollow" className="underline font-medium">
                        Shirley Bacilio
                    </a>
                </div>
            </div>

        </footer>
    )
}