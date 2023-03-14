import PersonalInfo from './form-options/PersonalInfo'
import SelectPlan from './form-options/SelectPlan'
import AddOns from './form-options/AddOns'
import FinishingUp from './form-options/FinishingUp'
import ThankYou from './form-options/ThankYou'

const FormContents = ({ currentIndex, handleInputChange, formInputs, setCurrentIndex, errorMsg }) => {
   switch (currentIndex) {
      case 1:
         return (
            <div className="form-contents">
               <PersonalInfo
                  handleInputChange={handleInputChange} formInputs={formInputs}
                  errorMsg={errorMsg}
               />
            </div>
         )
      case 2:
         return (
            <div className="form-contents">
               <SelectPlan
                  handleInputChange={handleInputChange} formInputs={formInputs}
               />
            </div>
         )
      case 3:
         return (
            <div className="form-contents">
               <AddOns
                  handleInputChange={handleInputChange} formInputs={formInputs}
               />
            </div>
         )
      case 4:
         return (
            <div className="form-contents">
               <FinishingUp
                  formInputs={formInputs}
                  setCurrentIndex={setCurrentIndex}
               />
            </div>
         )
      case 5:
         return (
            <div className="form-contents">
               <ThankYou />
            </div>
         )
   }
}

export default FormContents
