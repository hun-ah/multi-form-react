import { useState } from 'react'
import FormContents from './FormContents'
import Button from './Button'
import Sidebar from './sidebar/Sidebar'

const UserForm = () => {
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

   const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target
      setFormInputs(prevInputs => {
         return {
            ...prevInputs,
            [name]: type === "checkbox" ? checked : value
         }
      })
   }

   // hacky way to set hover on back button
   const [hover, setHover] = useState({ hover: false })

   const onMouseEnter = () => {
      setHover(prevState => !prevState)
      console.log(hover)
   }

   const onMouseLeave = () => {
      setHover(prevState => !prevState)
      console.log(hover)

   }
   // hacky way to set hover on back button

   return (
      <div className="userform">
         <div className="sidebar">
            <div className='sidebar-content--container'>
               <Sidebar currentIndex={currentIndex} />
            </div>
         </div>
         <div className="form--container">
            <FormContents
               currentIndex={currentIndex}
               handleInputChange={handleInputChange}
               formInputs={formInputs}
               setCurrentIndex={setCurrentIndex}
               errorMsg={errorMsg}
            />
            <div className="navButtons--container">
               {currentIndex > 1 && currentIndex <= 4 ?
                  <Button
                     text='Go back'
                     style={
                        hover ?
                           {
                              color: 'rgb(174 175 180)',
                              background: 'white',
                              transition: '.1s'
                           } :
                           {
                              color: 'rgb(4 36 92)',
                              background: 'white',
                              transition: '.1s'
                           }
                     }
                     onClick={prevStep}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                  /> :
                  <Button
                     text=''
                     style={{ cursor: 'auto', background: 'white' }}
                  />}
               {currentIndex > 0 && currentIndex <= 4 && <Button
                  text={currentIndex === 4 ? 'Confirm' : 'Next step'}
                  onClick={nextStep}
                  currentIndex={currentIndex}
               />}
            </div>
         </div>
      </div>
   )
}

export default UserForm
