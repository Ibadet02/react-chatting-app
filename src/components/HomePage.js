import React from 'react'
import '../styles/homepage.scss'
import Home from './Home'
import Chat from './Chat'
import Settings from './Settings'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCommentSms, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import myImg from '../assets/myimg.png'
function HomePage() {
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
                            <Link to={'/'}><span><FontAwesomeIcon icon={faHouse} /></span>Home</Link>
                            <Link to={'/chat'}><span><FontAwesomeIcon icon={faCommentSms} /></span>Chat</Link>
                            <Link to={'/settings'}><span><FontAwesomeIcon icon={faUsersGear} /></span>Settings</Link>
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