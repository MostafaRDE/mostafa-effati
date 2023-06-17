import { Params } from '@/modules/interfaces/props.interface'

const data: {
    imageSrc?: string,
    text: string,
    boldText: string,
}[] = [
    {
        text: 'Do you need to redesign a site or improve the design of your site or app to improve the experience of your customers?',
        boldText: 'I can do it.',
    },
    {
        text: 'Do you need to redesign a site or improve the design of your site or app to improve the experience of your customers?',
        boldText: 'I can do it.',
    },
    {
        text: 'Do you need to redesign a site or improve the design of your site or app to improve the experience of your customers?',
        boldText: 'I can do it.',
    },
]

export default function whatIDo({ lang, t }: Params)
{
    return (
        <section id="what-i-do">
            <h2>{ t[ 'glossaries' ][ 'what_i_do_2' ] }</h2>
            
            <div className="columns-1 md:columns-3 md:gap-x-8 lg:gap-x-16 xl:gap-x-32">

                {
                    data.map(item =>
                    {
                        return (
                            <div className="mb-16 last:mb-0 md:mb-0">
                                <p>{ item.text }</p>
                                <mark className="block mt-4 bg-transparent font-bold">{ item.boldText }</mark>
                            </div>
                        )
                    })
                }
                
            </div>
        </section>
    )
}