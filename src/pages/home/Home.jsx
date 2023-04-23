import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
// import Header from '../..header/Header'
// import Posts from '../../posts/Posts'
// import Sidebar from '../../sidebar/Sidebar'


function Home() {
  return (
    <div>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>    
    </div>
  )
}

export default Home