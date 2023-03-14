const Step = ({ number, step, stepName, styles }) => {
   return (
      <div className="step--container">
         <div className="step-number" style={styles}>
            {number}
         </div>
         <div className="step-text">
            <span>{step}</span>
            <span>{stepName}</span>
         </div>
      </div >
   )
}

export default Step
