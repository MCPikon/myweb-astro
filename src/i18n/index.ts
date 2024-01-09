import english from './en.json'
import english_experience from './experience_en.json'
import english_projects from './projects_en.json'
import spanish from './es.json'
import spanish_experience from './experience_es.json'
import spanish_projects from './projects_es.json'

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es'
}

export const getI18N = ({
    currentLocale = 'es'
  }: {
    currentLocale: string | undefined
  }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return english
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    return spanish
}

export const getI18NExperience = ({
    currentLocale = 'es'
  }: {
    currentLocale: string | undefined
  }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return english_experience
    if (currentLocale === LANGUAGES.SPANISH) return spanish_experience
    return spanish_experience
}

export const getI18NProjects = ({
    currentLocale = 'es'
  }: {
    currentLocale: string | undefined
  }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return english_projects
    if (currentLocale === LANGUAGES.SPANISH) return spanish_projects
    return spanish_projects
}

export function getI18NPath(currentLocale: string | undefined, path: string) {
    if (currentLocale === LANGUAGES.ENGLISH) return "/en/" + path
    if (currentLocale === LANGUAGES.SPANISH) return "/" + path
    return "/" + path
}