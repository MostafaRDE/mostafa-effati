import { Params } from '@/modules/interfaces/props.interface'
import { IconDefinition, faCode, faGroupArrowsRotate,   faSitemap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data: {
    icon: IconDefinition,
    text?: string,
    boldText?: string,
}[] = [
    { icon: faCode },
    { icon: faGroupArrowsRotate },
    { icon: faSitemap },
]

export default function whatIDo({ lang, t }: Params)
{
    return (
        <section id="what-i-do">
            <h2>{ t[ 'glossaries' ][ 'what_i_do_2' ] }</h2>
            
            <div className="columns-1 lg:columns-3 lg:gap-x-16 xl:gap-x-32">

                {
                    data.map((item, index) =>
                    {
                        return (
                            <div key={ `what-i-do-item-${ index }` } className="mb-16 last:mb-0 lg:mb-0">
                                <FontAwesomeIcon icon={ item.icon } width={ 100 } height={ 100 } color="white" className="mx-auto lg:ml-0" />
                                <p className="mt-10">{ item.text || t[ 'pages' ][ 'index' ][ 'what_i_do' ][ 'part' + (index + 1) ][ 'text' ] }</p>
                                <mark className="block mt-4 bg-transparent font-bold text-white">
                                    { item.boldText || t[ 'pages' ][ 'index' ][ 'what_i_do' ][ 'part' + (index + 1) ][ 'bold_text' ] }
                                </mark>
                            </div>
                        )
                    })
                }
                
            </div>
        </section>
    )
}