import { useState } from 'react'
import UserForm from './components/UserForm'
import Sidebar from './components/sidebar/Sidebar'
import ButtonContainer from './components/ButtonContainer'

function App() {
  const [currentIndex, setCurrentIndex] = useState(1)

  const [formInputs, setFormInputs] = useState(
    {
      name: '',
      emailAddress: '',
      phoneNumber: '',
      planType: 'arcade',
      monthlyPayment: true,
      onlineService: false,
      largerStorage: false,
      customizeableProfile: false
    }
  )

  // basic error validation for Personal Info inputs
  const [errorMsg, setErrorMsg] = useState(false)

  const nextStep = () => {
    if (!formInputs.name) {
      setErrorMsg(true)
      return
    }
    if (!formInputs.emailAddress) {
      setErrorMsg(true)
      return
    }
    if (!formInputs.phoneNumber) {
      setErrorMsg(true)
      return
    } else {
      setCurrentIndex(prevIndex => {
        if (prevIndex === 5) {
          return prevIndex
        } else {
          return prevIndex + 1
        }
      })
    }
  }

  const prevStep = () => {
    setCurrentIndex(prevIndex => prevIndex - 1)
  }

  // keep track of state for all inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormInputs(prevInputs => {
      return {
        ...prevInputs,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  // log user info on submit
  const onSubmit = () => {
    setCurrentIndex(prevIndex => prevIndex + 1)
    const newClient = { ...formInputs }
    console.log(newClient)
  }

  // adjust-sidebar-position and fix-buttons-mobile divs/classes used for styling Sidbar (on desktop) and ButtonsContainer (on mobile)

  return (
    <div className='app--container'>
      <div className='adjust-sidebar-position'>
        <Sidebar
          currentIndex={currentIndex}
        />
        <UserForm
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          formInputs={formInputs}
          handleInputChange={handleInputChange}
          errorMsg={errorMsg}
        />
      </div>
      <div className="fix-buttons-mobile" style={currentIndex === 5 ? { zIndex: '-1' } : {}}>
        <ButtonContainer
          currentIndex={currentIndex}
          prevStep={prevStep}
          nextStep={nextStep}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default App
