import { Params } from '@/modules/interfaces/props.interface'

const data: {
    text: string,
    fullName: string,
    job: string,
    href?: string,
}[] = [
    {
        text: 'Mustafa is one of the most professional programmers I have ever worked with In addition to programming, he has excellent project management skills and he is an excellent mentor Working with him is a pleasure because of his commitment, adherence to tasks, and follow-up.',
        fullName: 'Ali Aynechian',
        job: 'Flutter Developer',
        href: 'https://www.linkedin.com/in/ali-aynechian/',
    },
    {
        text: 'Als erfahrener Profi in der Softwareentwicklung hat er sich als herausragender Lead Developer erwiesen. Sein technisches Fachwissen ist auf höchstem Niveau und er demonstriert umfassende Erfahrungen in diesem Bereich. Dadurch wird er zu einer wertvollen Ressource für das gesamte Team.',
        fullName: 'Yali Baschi',
        job: 'Frontend Developer',
        href: 'https://www.linkedin.com/in/yali-baschi-a9b994271/',
    },
    {
        text: 'Mustafa is my CEO at Cmorgh Group and I learned many technologies from him. He is truly skilled in backend development and programming.',
        fullName: 'Amir Nobari',
        job: 'Backend Developer',
        href: 'https://www.linkedin.com/in/amir-nobari1990/',
    },
    {
        text: 'Skilled, intelligent, active, well mannered and honest person',
        fullName: 'Arezoo Hosein Zadeh Attar',
        job: 'Python Developer',
        href: 'https://www.linkedin.com/in/a-attar-92705a155/',
    },
    {
        text: 'Mostafa is a greate employer and a Lead NodeJs Developer. He has 10 years experiences in programming and he is very professional is his working. I am learning him alot of thing and he is very helpful person. I proud that I am his employee.',
        fullName: 'Behzad Shafiee',
        job: 'Backend Developer',
        href: 'https://www.linkedin.com/in/behzad-shafiee-436952245/',
    },
    {
        text: 'I am very happy to be working with the professional team of CMorgh lead by Mr. Mustafa Affati, a cultural, creative and experienced personality. He creates a sense of intimacy among team members with high understanding and provides motivation and encouragement, leading to personal and group growth. This is a clear indication of his professionalism in the job.',
        fullName: 'Mahin Shibani',
        job: 'Python Developer',
        href: 'https://www.linkedin.com/in/mahin-shibani-752302276/',
    },
    {
        text: 'Mr Mostafa Effati is one of the most educated  person that I had the pleasure to work with. Not only he have the ability to keep the team organized and on schedule, but his constant guidance keeps morale of the team members high in challenging situations. His sympathy created a comfortable working environment for us. I will never hesitate to choose him as my mentor again.',
        fullName: 'Sarah Marjaei',
        job: 'Frontend Developer',
        href: 'https://www.linkedin.com/in/sarah-marjaei-567899226/',
    },
]

export default function partnersTalking({ lang, t }: Params)
{
    return (
        <section>
            <h2>{ t[ 'glossaries' ][ 'partners_talking' ] }</h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-center justify-stretch items-stretch">
                {
                    data.map((item, index) =>
                    {
                        return (
                            <div key={ `partners-talking-item-${ index }` } className="border-dashed border-2 border-white rounded-[10px] p-8 flex flex-col md:first:col-span-2 xl:last:col-span-2">
                                <div className="grow flex items-center">
                                    <p>{ item.text }</p>
                                </div>

                                <div className="mt-8 flex flex-col justify-center items-center">
                                    <a href={ item.href } target="_blank" rel="nofollow" className="hover:opacity-60 underline">{ item.fullName }</a>
                                    <span>{ item.job }</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}