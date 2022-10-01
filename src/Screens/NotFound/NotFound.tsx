import React from 'react'
import { Link } from 'react-router-dom'
import { NOT_FOUND } from '../../constants/links'
import Routes from '../../enums/Routes'

import './NotFound.scss'

const NotFound = () => {
  const backgroundImage = `url(${NOT_FOUND})`

  return (
    <div
      className='notFound'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage,
      }}>
      <p>
        <Link to={Routes.home}>Go to the home page</Link>
      </p>
    </div>
  )
}

export default NotFound
