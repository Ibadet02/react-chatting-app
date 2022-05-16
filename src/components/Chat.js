import React, { useState } from 'react'
import '../styles/chat.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faSmile, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import enver from '../assets/enver.jpeg'
import mustafa from '../assets/mustafa.jpeg'
import nusret from '../assets/nusret.jpg'
import oruc from '../assets/oruc.jpeg'
import nopicture from '../assets/no-profile-pic.webp'
const FAKE_ACCOUNTS = {
  names: [["Mustafa", mustafa], ["Oruc", oruc], ["Nusret", nusret], ["Enver Teacher", enver], ["Ferid", nopicture], ["Samir", nopicture], ["Ilham", nopicture], ["Oruc", nopicture], ["Ibadet", nopicture]]
}
function Chat() {
  const [sendMessage, setSendMessage] = useState(Array(FAKE_ACCOUNTS.names.length).fill(['', '']))
  const [getMessage, setGetMessage] = useState(Array(FAKE_ACCOUNTS.names.length).fill(''))
  const [showAccounts, setShowAccounts] = useState(-1)
  const [searchPerson, setSearchPerson] = useState('')
  const [activePerson, setActivePerson] = useState(Array(FAKE_ACCOUNTS.names.length).fill(false))
  const [personClick, setPersonClick] = useState({
    pName: "Name",
    pImg: nopicture
  })
  const handleGetMessage = (event) =>{
    setGetMessage(prev=>{
      return prev.map((el, i)=>{
        if(i===showAccounts){
          return event.target.value
        }
        return el
      })
    })
  }
  const handleSendMessage = (getMessage) =>{
    setGetMessage(prev=>{
      return prev.map((el, i)=>{
        if(i===showAccounts){
          return ''
        }
        return el
      })
    })
    setSendMessage(prev=>{
      return prev.map((el, i)=>{
        if(i===showAccounts){
          return [getMessage, new Date()]
        }
        return el
      })
    })
  }
  const handlePersonClick = (personImg, personName, index)=>{
      setPersonClick(()=>{
        return {
          pName: personName,
          pImg: personImg,
          showChat: false
        }
      })
      setActivePerson(prev=>{
        return prev.map((el, i)=>i === index ? true : false)
      })
      setShowAccounts(index)
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
              value={searchPerson}
              onChange={event => setSearchPerson(event.target.value)}
              />
            </label>
          </div>
          <div className='fake-accounts'>
            {FAKE_ACCOUNTS.names.filter((val, index)=>{
              if(searchPerson == ''){
                return val
              }else if(val[0].toLowerCase().includes(searchPerson.toLowerCase())){
                return val
              }
            }).map((el, index)=>{
              const personImg = el[1]
              const personName = el[0]
              return (<div className={`person-link ${activePerson[index]?'active':''}`} onClick={()=>handlePersonClick(personImg, personName, index)} key={index}>
                        <div className='account-img-div'>
                          <img className='account-img' src={personImg} />
                        </div>
                        <div className='account-context'>
                          <h3>{personName}</h3>
                        </div>
                      </div>)
            })}
          </div>
        </div>
        {showAccounts !== -1 ? <div className='chat-box'>
            <div className='person-account'>
                <div>
                  <img src={personClick.pImg} />
                </div>
              <h3>{personClick.pName}</h3>
            </div>
            <div className='message-box'>
              <div className='messages'>
                <div className='demo-time-message'>
                  <div className='demo-message'>
                    <div className='my-message'>{sendMessage[showAccounts===-1?0:showAccounts][0]}</div>
                    <div className='triangle'></div>
                  </div>
                  {/* <span className='time'>{sendMessage[showAccounts===-1?0:showAccounts][1]}</span> */}
                </div>
                {/* <div className='demo-time-message'>
                  <div className='demo-message'>
                    <div className='my-message'></div>
                    <div className='triangle'></div>
                  </div>
                  <span className='time'>12:00 PM</span>
                </div> */}
              </div>
              <div className='type-box'>
                <label>
                  <div className='type-icons-left'>
                    <FontAwesomeIcon icon={faMicrophone} />
                  </div>
                  <input
                  placeholder='Type Something...'
                  type={'text'}
                  value={getMessage[showAccounts===-1?0:showAccounts]}
                  onChange={(event) => handleGetMessage(event)}
                  />
                  <div className='type-icons-right'>
                    <FontAwesomeIcon icon={faSmile} />
                    <FontAwesomeIcon icon={faPaperclip} />
                    <FontAwesomeIcon icon={faPaperPlane} onClick={() => handleSendMessage(getMessage)} />
                  </div>
                </label>
              </div>
            </div>
        </div> : null}
      </div>
    </div>
  )
}

export default Chat
