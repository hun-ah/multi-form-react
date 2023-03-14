const AddOns = ({ formInputs, handleInputChange }) => {
   return (
      <div className="add-ons--container">
         <div className="heading-text--container">
            <h1>Pick add-ons</h1>
            <p>Add-ons enhance your gaming experience</p>
         </div>
         <label className="add-on" style={formInputs.onlineService ? selectedAddOn : {}}>
            <input
               type="checkbox"
               name="onlineService"
               checked={formInputs.onlineService}
               onChange={() => handleInputChange(event)}
            />
            <div className="add-on-text">
               <h2>Online service</h2>
               <p>Access to multiplayer games</p>
            </div>
            <span>{formInputs.monthlyPayment ? '+$1/mo' : '+$10/yr'}</span>
         </label>
         <label className="add-on" style={formInputs.largerStorage ? selectedAddOn : {}}>
            <input
               type="checkbox"
               name="largerStorage"
               checked={formInputs.largerStorage}
               onChange={() => handleInputChange(event)}
            />
            <div className="add-on-text">
               <h2>Larger storage</h2>
               <p>Extra 1TB of cloud save</p>
            </div>
            <span>{formInputs.monthlyPayment ? '+$2/mo' : '+$12/yr'}</span>
         </label>
         <label className="add-on" style={formInputs.customizeableProfile ? selectedAddOn : {}}>
            <input
               type="checkbox"
               name="customizeableProfile"
               checked={formInputs.customizeableProfile}
               onChange={() => handleInputChange(event)}
            />
            <div className="add-on-text">
               <h2>Customizable profile</h2>
               <p>Custom theme on your profile</p>
            </div>
            <span>{formInputs.monthlyPayment ? '+$2/mo' : '+$20/yr'}</span>
         </label>
      </div>
   )
}

const selectedAddOn = {
   background: 'rgb(248	249 254)',
   border: '1px solid rgb(4 36 92)'
}

export default AddOns
