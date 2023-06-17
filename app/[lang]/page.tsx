import { Props } from '@/modules/interfaces/props.interface'
import { getDictionary } from '@/get-dictionary'
import BottomNavigation from '@/components/layouts/bottom-navigation'
import Header from '@/components/layouts/header'
import WhatIDo from '@/components/layouts/what-i-do'

export default async function Home({ params: { lang } }: Props)
{
    const t = await getDictionary(lang!)

    return (
        <div className="container mx-auto" id="home">

            <Header lang={ lang } t={ t } />

            <main className="my-20 px-16">

                <WhatIDo lang={ lang } t={ t } />

            </main>

            <BottomNavigation lang={ lang } t={ t } />

        </div>
    )
}
