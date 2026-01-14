import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale
  }

  const mainMessages = (await import(`./main/${locale}.json`)).default
  const welcomeMessages = (await import(`./welcome-message/${locale}.json`))
    .default

  return {
    locale,
    messages: {
      ...mainMessages,
      'welcome-message': welcomeMessages
    }
  }
})
