import React from 'react'

import { netflixBanner } from '../../constants/links'
import useTranslation from '../../hooks/useCustomTranslation'
import elipsis from '../../utils/elipsis'
import './Banner.scss'

const Banner = () => {
  const { t } = useTranslation('banner')

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${netflixBanner})`,
      }}
    >
      <div className='banner__content'>
        <h1 className='banner__title'>{t('title')}</h1>
        <div className='banner__buttons'>
          <button className='banner__btn'>{t('btn_play')}</button>
          <button className='banner__btn'>{t('btn_list')}</button>
        </div>
        <h1 className='banner__description'>
          {elipsis('some test description', 5)}
        </h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
