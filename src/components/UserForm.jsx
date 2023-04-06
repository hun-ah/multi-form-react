import FormContents from './FormContents'

const UserForm = ({ currentIndex, setCurrentIndex, handleInputChange, formInputs, errorMsg }) => {

   return (
      <div className="userform">
         <div className="form--container">
            <FormContents
               currentIndex={currentIndex}
               handleInputChange={handleInputChange}
               formInputs={formInputs}
               setCurrentIndex={setCurrentIndex}
               errorMsg={errorMsg}
            />
         </div>
      </div>
   )
}

export default UserForm
