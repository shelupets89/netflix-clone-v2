import React from 'react'
import requests from '../../api/requests'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Row from '../../components/Row'
import './HomeScreen.scss'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Navbar />
      <Banner />
      {Object.values(requests).map((item, i) => {
        return (
          <Row
            title={item.titleKey}
            fetchUri={item.path}
            fetchParams={item.params}
            key={i}
          />
        )
      })}
    </div>
  )
}

export default HomeScreen
