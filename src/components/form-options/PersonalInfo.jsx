const PersonalInfo = ({ handleInputChange, formInputs, errorMsg }) => {
   return (
      <div className="personal-info--container">
         <div className="heading-text--container">
            <h1>Personal Info</h1>
            <p>Please provide your name, email address and phone number.</p>
         </div>
         <div className="personal-info--input">
            <div className="personal-info--input-group">
               <label htmlFor="name">Name</label>
               {errorMsg && formInputs.name.length <= 0 ? <span className="required-error-msg">This field is required</span> : ''}
            </div>
            <input
               type="text"
               id="name"
               name="name"
               value={formInputs.name}
               placeholder="e.g. Stephen King"
               style={errorMsg && formInputs.name.length <= 0 ? { border: '1px solid red' } : {}}
               onChange={() => handleInputChange(event)}
            />
            <div className="personal-info--input-group">
               <label htmlFor="emailAddress">Email Address</label>
               {errorMsg && formInputs.emailAddress.length <= 0 ? <span className="required-error-msg">This field is required</span> : ''}
            </div>
            <input
               type="text"
               id="emailAddress"
               name="emailAddress"
               value={formInputs.emailAddress}
               placeholder="e.g. stephenking@lorem.com"
               style={errorMsg && formInputs.emailAddress.length <= 0 ? { border: '1px solid red' } : {}}
               onChange={() => handleInputChange(event)}
            />
            <div className="personal-info--input-group">
               <label htmlFor="phoneNumber">Phone Number</label>
               {errorMsg && formInputs.phoneNumber.length <= 0 ? <span className="required-error-msg">This field is required</span> : ''}
            </div>
            <input
               type="text"
               id="phoneNumber"
               name="phoneNumber"
               value={formInputs.phoneNumber}
               placeholder="e.g. +1 234 567 890"
               style={errorMsg && formInputs.phoneNumber.length <= 0 ? { border: '1px solid red' } : {}}
               onChange={() => handleInputChange(event)}
            />
         </div>
      </div>
   )
}

export default PersonalInfo
