import React, { useState, useEffect } from 'react'
// import '../styles/chat.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faSmile, faPaperclip, faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import enver from '../assets/enver.jpeg'
import mustafa from '../assets/mustafa.jpeg'
import nusret from '../assets/nusret.jpg'
import oruc from '../assets/oruc.jpeg'
import nopicture from '../assets/no-profile-pic.webp'
const FAKE_ACCOUNTS = {
  names: [["Mustafa", mustafa], ["Oruc", oruc], ["Nusret", nusret], ["Enver Teacher", enver], ["Ferid", nopicture], ["Samir", nopicture], ["Ilham", nopicture], ["Oruc", nopicture], ["Ibadet", nopicture]]
}
function Chat() {
  const [sendMessage, setSendMessage] = useState([[[''], ['']], [[''], ['']],[[''], ['']],[[''], ['']],[[''], ['']],[[''], ['']],[[''], ['']],[[''], ['']],[[''], ['']]])
  const [getMessage, setGetMessage] = useState(Array(FAKE_ACCOUNTS.names.length).fill(''))
  const [showAccounts, setShowAccounts] = useState(-1)
  const [searchPerson, setSearchPerson] = useState('')
  const [activePerson, setActivePerson] = useState(Array(FAKE_ACCOUNTS.names.length).fill(false))
  const [personClick, setPersonClick] = useState({
    pName: "",
    pImg: ''
  })
  console.log(activePerson)
  const [{isActive, accountBox, chatBox}, setResponsiveMessageBox] = useState({
    isActive: window.innerWidth <= 680 ? true : false,
    accountBox: activePerson.find(el=>el == true) ? false : true,
    chatBox: activePerson.find(el=>el === true) ? false : true
  })
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      if(window.innerWidth <= 680){
        setResponsiveMessageBox(prev=>{
          return {...prev, isActive: true}
        })
      }
      else{
        setResponsiveMessageBox(prev=>{
          return {...prev, isActive: false}
        })
      }
    })
  },[])
  const backToAccounts = ()=>{
    setResponsiveMessageBox(prev=>{
      return {...prev, accountBox: true}
    })
    setActivePerson(prev=>Array(FAKE_ACCOUNTS.names.length).fill(false))
  }
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
  const handleSendMessage = (e) =>{
    e.preventDefault()
    if((/^\s+$|^$/gi).test(getMessage[showAccounts])){
      return
    }
    setGetMessage(prev=>{
      return prev.map((el, i)=>{
        if(i===showAccounts){
          return ''
        }
        return el
      })
    })
    setSendMessage(prev=>{
      var copyPrev = [...prev]
      if(copyPrev[showAccounts][0][0] == ''){
        copyPrev[showAccounts][0].shift()
        copyPrev[showAccounts][1].shift()
      }
      const now = new Date()
      copyPrev[showAccounts][0].push(getMessage[showAccounts])
      copyPrev[showAccounts][1].push(now.getHours() + ':' + now.getMinutes())
      return copyPrev
    })
  }
  const handlePersonClick = (personImg, personName, index)=>{
    setResponsiveMessageBox(prev=>{
      return {...prev, accountBox: false, chatBox: true}
    })
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
        <div className={`contacts ${(accountBox && isActive) ? 'show' : 'hide'}`}>
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
        {showAccounts !== -1 ? <div className={`chat-box ${(accountBox && isActive)? 'hide':'show'}`}>
            <div className='person-account'>
              <div className='left-arrow-div' onClick={()=>backToAccounts()}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className='img-div'>
                <img src={personClick.pImg} />
              </div>
              <h3>{personClick.pName}</h3>
            </div>
            <div className='message-box'>
              <div className='messages'>
              {
                sendMessage[showAccounts===-1?0:showAccounts][0][0] == '' ? null :
                sendMessage[showAccounts===-1?0:showAccounts][0].map((el, index)=>{
                  return <div key={index} className='demo-time-message'>
                          <div className='demo-message'>
                            <div className='my-message'>{el}</div>
                            <div className='triangle'></div>
                          </div>
                          <span className='time'>{sendMessage[showAccounts===-1?0:showAccounts][1][index]}</span>
                        </div>
                })
              }
                {/* <div className='demo-time-message'>
                  <div className='demo-message'>
                    <div className='my-message'>{sendMessage[showAccounts===-1?0:showAccounts][0]}</div>
                    <div className='triangle'></div>
                  </div>
                  <span className='time'>{sendMessage[showAccounts===-1?0:showAccounts][1]}</span>
                </div> */}
              </div>
              <form className='type-box' onSubmit={(e) => handleSendMessage(e)}>
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
                    <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
                  </div>
                </label>
              </form>
            </div>
        </div> : null}
      </div>
    </div>
  )
}

export default Chat
