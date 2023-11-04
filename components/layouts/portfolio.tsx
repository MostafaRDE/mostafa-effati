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
        imageSrc: require('@/assets/images/portfolios/transportation-app.jpg'),
    },
    {
        imageSrc: require('@/assets/images/portfolios/encrypt-decrypt-finder.jpg'),
    },
    {
        imageSrc: require('@/assets/images/portfolios/repository-adapter.jpg'),
    },
    {
        imageSrc: require('@/assets/images/portfolios/pagination-sort-filter.jpg'),
        href: 'https://www.npmjs.com/package/nestjs-soft-pagination-filter-sort',
    },
    {
        imageSrc: require('@/assets/images/portfolios/nginx-dockerized.jpg'),
        href: 'https://github.com/cmorgh-org/web-server-nginx-docker',
    },
    {
        imageSrc: require('@/assets/images/portfolios/neshast.jpg'),
        href: 'https://www.neshastapp.ir',
    },
    {
        imageSrc: require('@/assets/images/portfolios/e-server.jpg'),
        href: 'https://github.com/MostafaRDE/eserver',
    },
    {
        imageSrc: require('@/assets/images/portfolios/eon.jpg'),
        href: 'https://github.com/MostafaRDE/eon',
    },
    {
        imageSrc: require('@/assets/images/portfolios/karzar.jpg'),
        href: 'https://github.com/MostafaRDE/karzar-v1',
    },
    {
        imageSrc: require('@/assets/images/portfolios/restyle.jpg'),
        href: 'https://github.com/MostafaRDE/restyle',
    },
    {
        imageSrc: require('@/assets/images/portfolios/fullclone.jpg'),
        href: 'https://github.com/MostafaRDE/fullclone',
    },
    {
        imageSrc: require('@/assets/images/portfolios/vue-ssr.jpg'),
        href: 'https://github.com/MostafaRDE/vue-ssr',
    },
]

export default function portfolio({ lang, t }: Params)
{
    return (
        <section id="portfolio" className="mt-24">
            <h2>{ t[ 'glossaries' ][ 'portfolio' ] }</h2>

            <div className="text-black">

                {
                    data.map((item, index) =>
                    {
                        return (
                            <section key={ `portfolio-item-${ index }` } className="bg-white rounded-3xl shadow-portfolio p-6 sm:p-10 md:p-[4.5rem] columns-1 lg:grid lg:grid-cols-3 gap-x-24 mb-12 sm:mb-24">

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