import React from 'react'
import style from './HeroImage.module.css'
import policyImage from '../../images/policyImage.png'

const HeroImage = () => {

    // interface button {
    //     type: 'button'
    // }

  return (
    <div className={style.heroImageContainer}>
        <div className={style.heroText}>
            <h1>Get more from your car insurance plan!</h1>
            <h2>Turners makes it ridiculously easy to insure your car.</h2>
            <p>Quote & buy online. Join us today.</p>
            <button type='button'>Car insurance quote <i className="fa-solid fa-pen"></i></button>
        </div>
        <div className={style.heroImage}>
            <img src={policyImage} alt='insurance policy'></img>
        </div>
    </div>
  )
}

export default HeroImage