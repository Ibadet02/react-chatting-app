import React, {useState} from 'react'
// import '../styles/homepage.scss'
import Home from './Home'
import Chat from './Chat'
import Settings from './Settings'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCommentSms, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import myImg from '../assets/myimg.png'
function HomePage() {
    const [clickedLink, setClickedLink] = useState(
        {
            home: true,
            chat: false,
            settings: false
        })
    return (
      <Router>
        <div className='homepage'>
            <div className='homepage-flex'>
                <div className='menu-bar'>
                    <div className='menu-bar-flex'>
                        <div className='user-profile'>
                            <div>
                                <img src={myImg} />
                            </div>
                            <h2>Ibadet Ismayilov</h2>
                        </div>
                        <div className='links'>
                            <Link to={'/'}><span><FontAwesomeIcon icon={faHouse} /></span><span>Home</span></Link>
                            <Link to={'/chat'}><span><FontAwesomeIcon icon={faCommentSms} /></span><span>Chat</span></Link>
                            <Link to={'/settings'}><span><FontAwesomeIcon icon={faUsersGear} /></span><span>Settings</span></Link>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>
      </Router>
  )
}

export default HomePage
