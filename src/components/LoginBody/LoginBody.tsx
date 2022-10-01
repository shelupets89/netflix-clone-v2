import React from 'react'
import './LoginBody.scss'
import useTranslation from '../../hooks/useCustomTranslation'

const LoginBody = () => {
    const { t } = useTranslation('login')

    return (
        <div className='loginScreen_body'>
            <>
                <h1>{t('title')}</h1>
                <h2>{t('subtitle')}</h2>
                <h3>{t('sub_subtitle')}</h3>

                <div className="loginScreen_input">
                    <form>
                        <input
                            type="email"
                            placeholder={t('input_placeholder')}
                        />
                        <button className='loginScreen_btn'>
                            {t('input_btn')}
                        </button>
                    </form>
                </div>
            </>
        </div>
    )
}

export default LoginBody