import React from 'react'
import './Home.css'
import UserDetails from '../UserDetails/UserDetails'
import Categories from '../Categories/Categories'

function Home() {
  return (
    <div className='home'>
      <UserDetails/>
      <Categories/>
    </div>
  )
}

export default Home