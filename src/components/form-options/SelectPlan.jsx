import { ReactComponent as ArcadeIcon } from "../../assets/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../assets/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/icon-pro.svg";

const SelectPlan = ({ formInputs, handleInputChange }) => {

   return (
      <div className="select-plan--container">
         <div className="heading-text--container">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
         </div>
         <div className="plans--container">
            <label
               className="plan"
               style={formInputs.planType === "arcade" ? selectedPlan : {}}>
               <ArcadeIcon />
               <div className="plan-text">
                  <h2>Arcade</h2>
                  <span>{formInputs.monthlyPayment ? '$9/mo' : '$90/yr'}</span>
                  {!formInputs.monthlyPayment && <span style={monthsFree}>2 months free</span>}
                  <input
                     type="radio"
                     name="planType"
                     value="arcade"
                     checked={formInputs.planType === "arcade"}
                     className="select-plan--radio"
                     onChange={() => handleInputChange(event)}
                  />
               </div>
            </label>
            <label
               className="plan"
               style={formInputs.planType === "advanced" ? selectedPlan : {}}>
               <AdvancedIcon />
               <div className="plan-text">
                  <h2>Advanced</h2>
                  <span>{formInputs.monthlyPayment ? '$12/mo' : '$120/yr'}</span>
                  {!formInputs.monthlyPayment && <span style={monthsFree}>2 months free</span>}
                  <input
                     type="radio"
                     name="planType"
                     value="advanced"
                     checked={formInputs.planType === "advanced"}
                     className="select-plan--radio"
                     onChange={() => handleInputChange(event)}
                  />
               </div>
            </label>
            <label
               className="plan"
               style={formInputs.planType === "pro" ? selectedPlan : {}}>
               <ProIcon />
               <div className="plan-text">
                  <h2>Pro</h2>
                  <span>{formInputs.monthlyPayment ? '$15/mo' : '$150/yr'}</span>
                  {!formInputs.monthlyPayment && <span style={monthsFree}>2 months free</span>}
                  <input
                     type="radio"
                     name="planType"
                     value="pro"
                     checked={formInputs.planType === "pro"}
                     className="select-plan--radio"
                     onChange={() => handleInputChange(event)}
                  />
               </div>
            </label>
         </div>
         <div className="payment-interval--container">
            <span style={formInputs.monthlyPayment ? { color: 'rgb(174 175 180)', transition: '.4s' } : { color: 'rgb(4 36 92)', transition: '.4s' }}>Yearly</span>
            <label className="switch">
               <input
                  type="checkbox"
                  name="monthlyPayment"
                  checked={formInputs.monthlyPayment}
                  onChange={() => handleInputChange(event)}
               />
               <span className="slider round"></span>
            </label>
            <span style={formInputs.monthlyPayment ? { color: 'rgb(4 36 92)', transition: '.4s' } : { color: 'rgb(174 175 180)', transition: '.4s' }}>Monthly</span>
         </div>
      </div>
   )
}

const selectedPlan = {
   background: 'rgb(248	249 254)',
   border: '1px solid rgb(4 36 92)'
}

const monthsFree = {
   color: 'rgb(4 36 92)',
   fontSize: '14px'
}

export default SelectPlan
