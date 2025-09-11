"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation, type Translations } from "@/lib/i18n"

export function useTranslation() {
  const { locale } = useLanguage()

  const t = (key: keyof Translations): string => {
    return getTranslation(locale, key)
  }

  return { t, locale }
}
