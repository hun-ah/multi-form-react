import Step from "./Step"

const Sidebar = ({ currentIndex }) => {
   const steps = [
      {
         stepNumber: 1,
         stepNumberText: 'STEP 1',
         stepName: 'YOUR INFO'
      },
      {
         stepNumber: 2,
         stepNumberText: 'STEP 2',
         stepName: 'SELECT PLAN'
      },
      {
         stepNumber: 3,
         stepNumberText: 'STEP 3',
         stepName: 'ADD-ONS'
      },
      {
         stepNumber: 4,
         stepNumberText: 'STEP 4',
         stepName: 'SUMMARY'
      }
   ]

   const stepsList = steps.map(step => (
      <Step
         key={step.stepNumber}
         number={step.stepNumber}
         step={step.stepNumberText}
         stepName={step.stepName}
         styles={currentIndex === step.stepNumber ? selectedStep : { background: 'transparent' }}
      />
   ))

   return (
      <>
         {stepsList}
      </>
   )

}

const selectedStep = {
   background: 'rgb(188 224 255)',
   border: 'none',
   color: 'rgb(20 68 141)'
}

export default Sidebar