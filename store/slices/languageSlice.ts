import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Locale } from '@/lib/i18n'
import { defaultLocale, locales } from '@/lib/i18n'

interface LanguageState {
  locale: Locale
  isRTL: boolean
}

const initialState: LanguageState = {
  locale: (typeof window !== 'undefined' &&
           locales.includes(localStorage.getItem('locale') as Locale)
           ? (localStorage.getItem('locale') as Locale)
           : defaultLocale),
  isRTL: defaultLocale === 'ar',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload
      state.isRTL = action.payload === 'ar'
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', action.payload)
        document.documentElement.dir = state.isRTL ? 'rtl' : 'ltr'
        document.documentElement.lang = action.payload
        if (state.isRTL) {
          document.body.classList.add('rtl')
        } else {
          document.body.classList.remove('rtl')
        }
      }
    },
  },
})

export const { setLocale } = languageSlice.actions
export default languageSlice.reducer
