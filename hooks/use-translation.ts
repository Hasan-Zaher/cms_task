'use client'

import { useAppSelector } from '@/store/hooks'      
import { getTranslation, type Translations } from '@/lib/i18n'

export function useTranslation() {
  // get locale from Redux instead of the old context
  const locale = useAppSelector((state) => state.language.locale)

  const t = (key: keyof Translations): string => {
    return getTranslation(locale, key)
  }

  return { t, locale }
}
