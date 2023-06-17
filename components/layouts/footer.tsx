import { Params } from '@/modules/interfaces/props.interface'

export default function footer({ lang, t }: Params)
{
    return (
        <footer id="lets-talk" className="pb-16 sm:pb-0 sm:mb-20 lg:mb-10 bg-white sm:bg-transparent">

            <div className="relative sm:mt-8 lg:mt-16 px-8 sm:px-8 md:px-14 py-11 sm:rounded-3xl bg-white w-full sm:shadow-header">
                
            </div>

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