import { Params } from '@/modules/interfaces/props.interface'

export default function whatIDo({ lang, t }: Params)
{
    return (
        <div>
            <h2>{ t[ 'glossaries' ][ 'what_i_do_2' ] }</h2>
        </div>
    )
}