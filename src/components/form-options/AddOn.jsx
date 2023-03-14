const AddOn = ({ text, price, formInputs }) => {
   return (
      <div className="final-addon">
         <span>{text}</span>
         <span style={{ color: 'rgb(9 28 94)', fontWeight: 500 }}>
            {`+$${price}/${formInputs.monthlyPayment ? 'mo' : 'yr'}`}
         </span>
      </div >
   )
}

export default AddOn
