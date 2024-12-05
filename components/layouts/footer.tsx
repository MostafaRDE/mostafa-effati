import { Params } from '@/modules/interfaces/props.interface'
import { footerLinks } from '@/modules/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Button, { ButtonTypes, LinkTypes } from '@/components/components/button'

const linkedInQRCodes = [
    {
        imageSrc: require('@/assets/images/qr-codes/qr-linkedin-mostafa-effati.png'),
        imageAlt: 'QR-Code Mostafa-Effati linkedin account url',
        linkedinId: 'mostafaeffati',
        href: 'https://www.linkedin.com/in/mostafaeffati/',
        myDonationLink: '#',
    },
    {
        imageSrc: require('@/assets/images/qr-codes/qr-linkedin-shirley-bacilio.png'),
        imageAlt: 'QR-Code Shirley-Bacilio linkedin account url',
        linkedinId: 'shirleybacilio',
        href: process.env.SOCIAL_LINKS_SHIRLEY_BACILIO_LINKEDIN,
        myDonationLink: 'https://www.paypal.me/sb0410',
    },
]

export default function footer({ lang, t }: Params)
{
    return (
        <footer id="lets-talk" className="pb-16 sm:pb-0 sm:mb-20 lg:mb-10 bg-white text-black sm:bg-transparent">

            <div className="mt-14 xl:grid xl:grid-cols-2 relative sm:mt-8 lg:mt-16 px-8 sm:px-8 md:px-14 lg:px-[5.5rem] py-[4.5rem] sm:rounded-3xl bg-white w-full sm:shadow-header bg-[url('../../images/shapes/line-1.svg')] bg-no-repeat bg-[80%_0]">

                <section>
                    <h3 className="text-gradient-primary inline-block font-bold text-4xl sm:text-5xl">{ t[ 'glossaries' ][ 'lets_talk' ] }</h3>
                    <div className="mt-8">
                        <ul className="grid sm:grid-cols-2 gap-5 xl:max-w-lg 2xl:max-w-2xl">
                            {
                                Object.entries(footerLinks).map(([ k, v ]) =>
                                {
                                    return (
                                        <li key={ `footer-links-item-${ k }` } className="max-w-xs">
                                            <a href={ v.href } target="_blank" rel="nofollow" className="text-xl flex gap-4 items-center hover:underline">
                                                <FontAwesomeIcon icon={ v.icon! } color={ v.iconColor } width={ 24 } height={ 24 } />
                                                <span>{ v.title }</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="mt-16">
                            <Button
                                type={ ButtonTypes.Primary }
                                hasLinkType={ LinkTypes.HTML }
                                href="https://drive.google.com/file/d/1kmkW47Np74FRYJ48q7kcKCpNTnkd3uvz/view?usp=sharing"
                                target="_blank"
                                className="rounded-md inline-block 2xl:w-96">
                                <span className="flex gap-4 justify-center">
                                    <FontAwesomeIcon icon={ faFileArrowDown } color="#fff" width={ 24 } height={ 24 } className="-ml-2" />
                                    { t[ 'glossaries' ][ 'download_my_resume' ] }
                                </span>
                            </Button>
                        </div>

                        <div className="mt-16">
                            <ul className="grid sm:grid-cols-2 xl:max-w-2xl 2xl:max-w-4xl">
                                {
                                    linkedInQRCodes.map(item => (
                                        <li key={ `footer-linkedin-qr-code-item-${ item.linkedinId }` } className="flex mt-8 sm:mt-0">
                                            <div className="mr-8">
                                                <Image
                                                    src={ item.imageSrc }
                                                    alt={ item.imageSrc }
                                                    width={ 100 }
                                                    height={ 100} />
                                            </div>
                                            <div className="flex flex-col justify-center items-start">
                                                <span>Connect in Linkedin</span>
                                                <a href={ item.href } target="_blank" rel="nofollow" className="underline">@{ item.linkedinId }</a>
                                                <br />
                                                <a href={ item.myDonationLink } target="_blank" rel="nofollow" className="text-sm text-gradient-primary-bold hover:text-gradient-primary underline">Donate me with a coffee</a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="hidden xl:flex justify-end items-end">
                    <div className="relative xl:w-96 xl:h-[24.5rem] 2xl:w-[29.625rem] 2xl:h-[30.125rem] -mb-[4.5rem] overflow-hidden">
                        <div className="rounded-full xl:w-96 2xl:w-[29.625rem] aspect-square overflow-hidden bg-gradient-primary-to-b">
                        </div>
                        <Image
                            src={ require('@/assets/images/avatars/my-self-2.png') }
                            alt="Mostafa Effati's profile image"
                            priority
                            className="absolute left-0 right-0 top-0"
                            />
                    </div>
                </div>

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