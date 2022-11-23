import { useState } from "react"

export default function MenuButton ({handleClick}) {
  const [ariaExpanded, setAriaExpanded] = useState(false)

  const handleMenuClick = () => {
    setAriaExpanded(!ariaExpanded)
    handleClick
  }

  return (
    <>
      <button
        className="button-one"
        aria-controls="primary-navigation"
        aria-expanded={ariaExpanded}
        aria-hidden="true"
        onClick={handleMenuClick}
      >
        <div className="hamburger">
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
      </button>
    </>
  )
}