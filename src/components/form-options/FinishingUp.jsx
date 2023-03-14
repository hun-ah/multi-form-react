import AddOn from "./AddOn"

const FinishingUp = ({ formInputs, setCurrentIndex }) => {
   // decide payment frequency
   let paymentFrequency = formInputs.monthlyPayment ? "(Monthly)" : "(Yearly)"

   let planType
   // decide plan type
   if (formInputs.planType === 'arcade') planType = "Arcade"
   else if (formInputs.planType === 'advanced') planType = "Advanced"
   else if (formInputs.planType === 'pro') planType = "Pro"


   let planCost
   // decide plan cost
   if (formInputs.planType === 'arcade' && formInputs.monthlyPayment) planCost = 9
   else if ((formInputs.planType === 'arcade' && !formInputs.monthlyPayment)) planCost = 90
   else if ((formInputs.planType === 'advanced' && formInputs.monthlyPayment)) planCost = 12
   else if ((formInputs.planType === 'advanced' && !formInputs.monthlyPayment)) planCost = 120
   else if ((formInputs.planType === 'pro' && formInputs.monthlyPayment)) planCost = 15
   else if ((formInputs.planType === 'pro' && !formInputs.monthlyPayment)) planCost = 150

   let totalCost = planCost

   const handleChangeStep = (e) => {
      e.preventDefault()
      setCurrentIndex(2)
   }

   return (
      <div className="finishing-up--container">
         <div className="heading-text--container">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
         </div>
         <div className="confirm-choices--container">
            <div className="final-choices">
               <div className="final-choice1">
                  <div className="final-plan-choice">
                     <h2>{planType} {paymentFrequency}</h2>
                     <a href="#" onClick={() => handleChangeStep(event)}>Change</a>
                  </div>
                  <span style={{ color: 'rgb(9 28 94)', fontWeight: 700 }}>${planCost}{formInputs.monthlyPayment ? '/mo' : '/yr'}</span>
               </div>
               <div className="divider"></div>
               <div className="final-addons">
                  {formInputs.onlineService &&
                     <AddOn
                        text={'Online service'}
                        price={formInputs.monthlyPayment ? 1 : 10}
                        updateTotal={formInputs.monthlyPayment ? totalCost += 1 : totalCost += 10}
                        formInputs={formInputs}
                     />}
                  {formInputs.largerStorage &&
                     <AddOn
                        text={'Larger Storage'}
                        price={formInputs.monthlyPayment ? 2 : 12}
                        updateTotal={formInputs.monthlyPayment ? totalCost += 2 : totalCost += 12}
                        formInputs={formInputs}
                     />}
                  {formInputs.customizeableProfile &&
                     <AddOn
                        text={'Customizeable Profile'}
                        price={formInputs.monthlyPayment ? 2 : 20}
                        updateTotal={formInputs.monthlyPayment ? totalCost += 2 : totalCost += 20}
                        formInputs={formInputs}
                     />}
               </div>

            </div>
            <div className="final-total">
               <h3>Total {formInputs.monthlyPayment ? '(per month)' : '(per year)'}</h3>
               <span>${totalCost}/{formInputs.monthlyPayment ? 'mo' : 'yr'}</span>
            </div>
         </div>
      </div>
   )
}

export default FinishingUp
