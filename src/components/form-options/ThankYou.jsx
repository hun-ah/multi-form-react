import { ReactComponent as ThankYouIcon } from "../../assets/icon-thank-you.svg";

const ThankYou = () => {
   return (
      <div className="thankyou--container">
         <div className="thankyou-contents">
            <ThankYouIcon style={{ marginBottom: '20px' }} />
            <h1>Thank You!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
         </div>
      </div>
   )
}

export default ThankYou
