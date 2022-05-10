import React from 'react'
import '../styles/form.scss'
import '../styles/responsive.scss'
import FormSignIn from './FormSignIn'
import FormSignUp from './FormSignUp'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function FormWrapper() {
  return (
            <Router>
                <div className='form-wrapper'>
                    <div className='form-flex'>
                        <div className='form-logo-wrapper'>
                            <a href='#' className='form-logo-link'>
                                <h1>Free4Chat</h1>
                            </a>
                        </div>
                        <Routes>
                            <Route path='/' element={<FormSignIn />} />
                            <Route path='/signup' element={<FormSignUp />} />
                        </Routes>
                    </div>
                </div>
            </Router>
  )
}

export default FormWrapper;
