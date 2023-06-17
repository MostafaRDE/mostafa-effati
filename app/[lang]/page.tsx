import { Props } from '@/modules/interfaces/props.interface'
import { getDictionary } from '@/get-dictionary'
import BottomNavigation from '@/components/layouts/bottom-navigation'
import Header from '@/components/layouts/header'
import WhatIDo from '@/components/layouts/what-i-do'
import Portfolio from '@/components/layouts/portfolio'
import PartnersTalking from '@/components/layouts/partners-talking'
import Footer from '@/components/layouts/footer'

export default async function Home({ params: { lang } }: Props)
{
    const t = await getDictionary(lang!)

    return (
        <div className="container mx-auto" id="home">

            <Header lang={ lang } t={ t } />

            <main className="my-24 px-6 sm:px-16 xl:px-24 text-white text-center lg:text-left">

                <WhatIDo lang={ lang } t={ t } />
                <Portfolio lang={ lang } t={ t } />
                <PartnersTalking lang={ lang } t={ t } />

            </main>

            <Footer lang={ lang } t={ t }></Footer>

            <BottomNavigation lang={ lang } t={ t } />

        </div>
    )
}
