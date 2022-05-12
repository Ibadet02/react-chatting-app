import React, { useState } from 'react'
import '../styles/chat.scss'
import enver from '../assets/enver.jpeg'
import mustafa from '../assets/mustafa.jpeg'
import nusret from '../assets/nusret.jpg'
import oruc from '../assets/oruc.jpeg'
import nopicture from '../assets/no-profile-pic.webp'
const FAKE_ACCOUNTS = {
  names: ["Mustafa", "Oruc", "Nusret", "Enver Teacher", "Ferid", "Samir", "Ilham"],
  images: [mustafa, oruc, nusret, enver, nopicture, nopicture, nopicture]
}
function Chat() {

  const [activePerson, setActivePerson] = useState(Array(FAKE_ACCOUNTS.names.length).fill(false))
  const [personClick, setPersonClick] = useState({
    pName: "Name",
    pImg: nopicture
  })
  const handlePersonClick = (personImg, personName, index)=>{
      setPersonClick(()=>{
        return {
          pName: personName,
          pImg: personImg
        }
      })
      setActivePerson(prev=>{
        return prev.map((el, i)=>i === index ? true : false)
      })
  }
  return (
    <div className='chat'>
      <div className='chat-flex'>
        <div className='contacts'>
          <div className='chat-header'>
            <h2>Chat</h2>
            <label>
              <input 
              placeholder='Search'
              type={"text"}
              />
            </label>
          </div>
          <div className='fake-accounts'>
            {FAKE_ACCOUNTS.names.map((el, index)=>{
              const personImg = FAKE_ACCOUNTS.images[index]
              const personName = FAKE_ACCOUNTS.names[index]
              {console.log(activePerson)}
              return (<div className={`person-link ${activePerson[index]?'active':''}`} onClick={()=>handlePersonClick(personImg, personName, index)} key={index}>
                        <div className='account-img-div'>
                          <img className='account-img' src={personImg} />
                        </div>
                        <div className='account-context'>
                          <h3>{FAKE_ACCOUNTS.names[index]}</h3>
                        </div>
                      </div>)
            })}
          </div>
        </div>
        <div className='chat-box'>
            <div className='person-account'>
                <div>
                  <img src={personClick.pImg} />
                </div>
              <h3>{personClick.pName}</h3>
            </div>
            <div className='message-box'></div>
        </div>
      </div>
    </div>
  )
}

export default Chat
