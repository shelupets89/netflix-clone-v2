import React from 'react'
import { NFX_LOGO_BIG } from '../../constants/links'
import useTranslation from '../../hooks/useCustomTranslation'

import './LoginBackground.scss'

const LoginBackground = () => {
    const { t } = useTranslation('login')
    return (
        <div className="loginScreen_background">
            <img
                className='loginScreen_logo'
                src={NFX_LOGO_BIG}
                alt="loginScreen_banner" />

            <button
                className="loginScreen_button"
                onClick={() => { 123 }}
            >
                {t('sign_in')}
            </button>

            <div className='loginScreen__gradient' />
        </div>
    )
}

export default LoginBackground