const Button = ({ text, style, onClick, currentIndex, onMouseEnter, onMouseLeave }) => {
   return (
      <button
         className={currentIndex === 4 ? "confirm-button" : "navButtons"}
         style={style}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         {text}
      </button>
   )
}

export default Button
