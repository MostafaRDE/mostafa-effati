import { Params } from '@/modules/interfaces/props.interface'
import Image from 'next/image'
import Button, { LinkTypes } from '@/components/components/button'

const data: {
    imageSrc: string,
    imageAlt?: string,
    imageDescription?: string,
    title?: string,
    description?: string,
    href?: string,
}[] = [
    {
        imageSrc: require('@/assets/images/portfolios/neshast.png'),
        href: 'https://www.neshastapp.ir',
    },
]

export default function portfolio({ lang, t }: Params)
{
    return (
        <section className="mt-24">
            <h2>{ t[ 'glossaries' ][ 'portfolio' ] }</h2>

            <div className="text-black">

                {
                    data.map((item, index) =>
                    {
                        return (
                            <section className="bg-white rounded-3xl shadow-portfolio p-6 sm:p-10 md:p-[4.5rem] columns-1 lg:grid lg:grid-cols-3 gap-x-24 mb-12 sm:mb-24">

                                <div className="lg:order-2 flex flex-col justify-center items-center">
                                    <div className="rounded-xl overflow-hidden p-[1px] bg-gradient-primary-to-252">
                                        <div className="rounded-xl bg-white p-1">
                                            <Image src={ item.imageSrc } alt={ item.imageAlt || t[ 'pages' ][ 'index' ][ 'portfolio' ][ 'part' + (index + 1) ][ 'image_alt' ] } className="rounded-xl" width={ 486 } height={ 346 } placeholder="blur" />
                                        </div>
                                    </div>
                                    
                                    {
                                        (item.imageDescription || t[ 'pages' ][ 'index' ][ 'portfolio' ][ 'part' + (index + 1) ][ 'image_description' ]) &&
                                            <p className="mt-2">{ item.imageDescription || t[ 'pages' ][ 'index' ][ 'portfolio' ][ 'part' + (index + 1) ][ 'image_description' ] }</p>
                                    }
                                </div>

                                <div className="lg:order-1 col-span-2 mt-10 sm:mt-16 lg:mt-0">
                                    <h2 className="mb-0 text-2xl">{ item.title || t[ 'pages' ][ 'index' ][ 'portfolio' ][ 'part' + (index + 1) ][ 'title' ] }</h2>
                                    <p className="mt-6 sm:mt-8 text-xl">{ item.description || t[ 'pages' ][ 'index' ][ 'portfolio' ][ 'part' + (index + 1) ][ 'description' ] }</p>
                                    {
                                        item.href &&
                                            <Button hasLinkType={ LinkTypes.HTML } target="_blank" rel="nofollow" href={ item.href } className="mt-5 inline-block">
                                                { t[ 'glossaries' ][ 'look' ] }
                                            </Button>
                                    }
                                </div>
                                
                            </section>
                        )
                    })
                }

            </div>
        </section>
    )
}