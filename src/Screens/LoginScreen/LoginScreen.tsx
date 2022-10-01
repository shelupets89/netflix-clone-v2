import React from 'react'
import LoginBackground from '../../components/LoginBackground'
import LoginBody from '../../components/LoginBody/LoginBody'
import './LoginScreen.scss'

const LoginScreen = () => {
    return (
        <div className='loginScreen'>
            <LoginBackground />
            <LoginBody />
        </div>
    )
}

export default LoginScreen