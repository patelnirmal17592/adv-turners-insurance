import React from "react";
import style from "./PolicyTable.module.css";

const PolicyTable = () => {
  return (
    <div className={style.policyTableContainer}>
      <div className={style.wrapper}>
        <div className={style.text}>
          <h1>
            Turner primary<br></br>insurance plans
          </h1>
          <p>
            Outlines the main aspects of each of the insurance our insurance
            plans:
          </p>
        </div>
        <div className={style.planBtnGroup}>
          <button type="button">1 Year plan</button>
          <button type="button">Monthly plan</button>
          <button type="button">Bi-weekly plan</button>
        </div>
        <div className={style.policyTable}>
            <div className={style.primary}>
                <table>
                    <thead>
                        <tr>
                            <th>Plans</th> 
                            <th>EVERYDAY PLUS</th>
                            <th>THIRD PARTY FIRE AND THEFT</th>
                            <th>THIRD PARTY DAMAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Prices starting from:</td>
                            <td>$25/month</td>
                            <td>$15/month</td>
                            <td>$10/month</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={style.secondary}></div>
        </div>
      </div>
    </div>
  );
};

export default PolicyTable;
