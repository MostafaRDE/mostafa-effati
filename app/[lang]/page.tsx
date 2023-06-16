import { Props } from '@/modules/interfaces/props.interface'
import { getDictionary } from '@/get-dictionary'
import Header from '@/components/layouts/header'
import BottomNavigation from '@/components/layouts/bottom-navigation'

export default async function Home({ params: { lang } }: Props)
{
    const t = await getDictionary(lang!)

    return (
        <div className="container mx-auto" id="#home">

            <Header lang={ lang } t={ t } />

            <main className="max-w-7xl mx-auto my-20">

            </main>

            <BottomNavigation lang={ lang } t={ t } />

        </div>
    )
}
