import memoize from 'lodash/memoize'
import i18next from 'i18next'

export const i18nInstance = i18next.createInstance()

export default memoize(function i18n(locale: string) {
  return i18nInstance
    .use({
      type: 'backend',
      read: async (language: string, _namespace: any, callback: any) => {
        return import(`./assets/locales/messages_${language}.json`)
          .then((translation) => callback(null, translation))
          .catch((error) => callback(error))
      },
    })
    .init({
      lng: locale,
      fallbackLng: 'en',
      keySeparator: false,
      react: {
        wait: true,
      },
    })
})
