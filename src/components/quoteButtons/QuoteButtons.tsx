import React from 'react'
import style from './QuoteButtons.module.css'

const QuoteButtons = () => {
  return (
    <div className={style.quoteBtnGrpContainer}>
      <button type='button'>Car insurance quote <i className="fa-solid fa-pen"></i></button>
      <button type='button'>Car insurance quote <i className="fa-solid fa-pen"></i></button>
      <button type='button'>Car insurance quote <i className="fa-solid fa-pen"></i></button>
    </div>
  )
}

export default QuoteButtons