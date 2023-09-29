import React from 'react'
import Sidebar from '../components/Sidebar'
import './main.css'
import Feed from '../components/Feed'

const Main = () => {
  return (
    <div className="app_body">
      <Sidebar />
      <Feed />
    </div>
  )
}

export default Main