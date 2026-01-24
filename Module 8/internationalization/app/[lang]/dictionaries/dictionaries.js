

const dictionaries = {
    en: () => import('./en.json').then((module) => module.default),
    bn: () => import('./bn.json').then((module) => module.default)
}

export const getDisctonary = async (locale) => dictionaries[locale]();