import { Props } from '@/modules/interfaces/props.interface'
import { getDictionary } from '@/get-dictionary'
import Header from '../_components/layouts/header'

export default async function Home({ params: { lang } }: Props)
{
    const t = await getDictionary(lang!)

    return (
        <main>
            <Header lang={ lang } t={ t } />
        </main>
    )
}
