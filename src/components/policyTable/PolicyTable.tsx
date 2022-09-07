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
          <div className={style.secondary}>
            <thead>
              <tr>
                <th>Main feature</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Transport cover <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Damage by uninsured drivers{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Replacement car cover{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Emergency travel, accomodation and repairs{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Towing and storage costs{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Hire after car theft{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Lock and keys <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  New for old car replacement{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Trailor cover <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Excess-free windscreen and windowglass{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Breakdown cover <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>
                  Mechanical insurance{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>Download policy wordings</td>
                <td>
                  <i className="fa-solid fa-file-arrow-down"></i>
                </td>
                <td>
                  <i className="fa-solid fa-file-arrow-down"></i>
                </td>
                <td>
                  <i className="fa-solid fa-file-arrow-down"></i>
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyTable;
