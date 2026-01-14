'use client'

import * as React from 'react'
import { Languages } from 'lucide-react'
import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('LanguageToggle')

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'zh' : 'en'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      title={t('switch')}
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
