import React, { FC, useCallback } from 'react'
import { Trans, useTranslation } from 'react-i18next'

export const PROJECT_NAME = 'netflix'

export type TranslateFn = (key: string, preferredApp?: string, opts?: any) => any

export default function useCustomTranslation(page: string, ...rest: string[]) {
  const { t } = useTranslation()

  const translateFn = useCallback<TranslateFn>(
    (key: string, preferredApp = '', opts = {}) =>
      t([PROJECT_NAME, page, ...rest, key, preferredApp].filter((e) => e).join('.'), opts),
    [page, rest, t],
  )

  const transComponent: FC<{ i18nKey: string; suffix: string } & any> = useCallback(
    ({ i18nKey, suffix = '', ...other }) => {
      i18nKey = [PROJECT_NAME, page, ...rest, i18nKey, suffix].filter((e) => e).join('.')
      return <Trans i18nKey={i18nKey} {...other} />
    },
    [page, rest],
  )

  return { t: translateFn, Trans: transComponent }
}
