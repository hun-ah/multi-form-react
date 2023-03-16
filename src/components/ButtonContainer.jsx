import { useState } from "react"
import Button from "./Button"

const ButtonContainer = ({ currentIndex, nextStep, prevStep, onSubmit }) => {
   // hacky way to set hover on back button, was having trouble with this
   const [hover, setHover] = useState({ hover: false })

   const onMouseEnter = () => {
      setHover(prevState => !prevState)
   }

   const onMouseLeave = () => {
      setHover(prevState => !prevState)
   }

   // spacer-left and spacer-right was a hacky way to help position the navButtons--container on desktop... probably not the best way to do it but I was stuck

   return (
      <div className="navButtons--container" style={currentIndex === 5 ? { background: 'rgb(237, 245, 255)', zIndex: '-1' } : {}}>
         <div className="spacer-left"></div>
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
               style={currentIndex === 5 ? { cursor: 'auto', background: 'rgb(237, 245, 255)' } : { cursor: 'auto', background: 'white' }}
            />}
         {currentIndex > 0 && currentIndex <= 4 &&
            <Button
               text={currentIndex === 4 ? 'Confirm' : 'Next step'}
               onClick={currentIndex === 4 ? onSubmit : nextStep}
               currentIndex={currentIndex}
            />}
         <div className="spacer-right"></div>
      </div>
   )
}

export default ButtonContainer
