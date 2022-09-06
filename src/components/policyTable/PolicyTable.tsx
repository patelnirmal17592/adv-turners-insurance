import React from 'react'
import style from './PolicyTable.module.css'

const PolicyTable = () => {
  return (
    <div className={style.policyTableContainer}>
        <div className={style.wrapper}>
            <div className={style.text}>
                <h1>Turner Primary<br></br>Insurance Plans</h1>
            </div>
            <div className={style.planBtnGroup}></div>
            <div className={style.policyTable}></div>
        </div>
    </div>
  )
}

export default PolicyTable