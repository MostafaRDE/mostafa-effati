import fs from 'fs'
import path from 'path'

type StringRecType = {
    [ name: string ]: string | StringRecType
}

export const objectCreator = (subPath?: string) =>
{
    const dictionary: StringRecType = {}
    const localesPath = path.join(process.cwd(), 'dictionary/locales', subPath || '')
    const languages = fs.readdirSync(localesPath)
    languages.forEach(language =>
    {
        if ((fs.lstatSync(path.join(localesPath, language)).isDirectory()))
            dictionary[ language ] = objectCreator(path.join(subPath || '', language))
        else dictionary[ language.replace(/.json$/, '') ] = JSON.parse(fs.readFileSync(path.join(localesPath, language), 'utf-8'))
    })
    return dictionary
}

if (process.env.NODE_ENV === 'development')
{
    Object.entries(objectCreator()).forEach(([ lang, translates ]) => fs.writeFileSync(
        path.join(process.cwd(), '_dictionary', `${ lang }.json`),
        JSON.stringify(translates, null, 2),
    ))
}