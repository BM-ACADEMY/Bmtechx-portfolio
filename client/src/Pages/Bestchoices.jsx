// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/Bestchoices.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// import { bookFreeCall } from "../Whatsapp/whatsappUtils";

// const BestChoice = () => {


//   return (
//     <div className="table-section">
//       <h2 className="text-center table-top-text fw-bold pb-5">Your best choice</h2>
//       <section className="best-choice text-white best-choice--home section--visible d-flex justify-content-center align-items-center">
//         <div className="container">
//           <div className="best-choice__content">
//             <ul className="best-choice__list">
//               {/* First Row */}
//               <li className="best-choice__li">
//                 <div className="best-choice__li-body">
//                   <div className="best-choice__li-body-cell"></div>
//                   <div className="best-choice__li-body-cell">Onboarding time</div>
//                   <div className="best-choice__li-body-cell">Request Handling</div>
//                   <div className="best-choice__li-body-cell">Project Completion Time</div>
//                   <div className="best-choice__li-body-cell">Flexible Resources</div>
//                   <div className="best-choice__li-body-cell">Expert Supervision</div>
//                   <div className="best-choice__li-body-cell">Subscription Flexibility</div>
//                   <div className="best-choice__li-body-cell">Team Expertise</div>
//                   <div className="best-choice__li-body-cell"></div>
//                 </div>
//               </li>

//               {/* Second Row */}
//               <li className="best-choice__li best-choice__li--main">
//                 <div className="best-choice__li-body">
//                   <div className="best-choice__li-body-cell">
//                     <img src="image/bmtechx.png" alt="Logo" />
//                   </div>
//                   <div className="best-choice__li-body-cell">Fast onboarding within 1 day</div>
//                   <div className="best-choice__li-body-cell">Quick turnaround via async or brief call</div>
//                   <div className="best-choice__li-body-cell">Completed within 2-3 business days</div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon mb-2" />
//                     <div>Available as needed</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon mb-2" />
//                     <div>Art Director and Tech Lead involved</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon mb-2" />
//                     <div>Can cancel or pause anytime</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon mb-2" />
//                     <div>Professional, experienced team with long-term growth</div>
//                   </div>
//                   <div className="best-choice__li-body-cell"></div>
//                   <div className="best-choice__li-body-cell">
//                     <button 
//                       className="btn btn--yellow best-choice__li-body-cell-btn js-contact-btn" 
//                       onClick={bookFreeCall}
//                     >
//                       Choose us
//                     </button>
//                   </div>
//                 </div>
//               </li>

//               {/* Third Row */}
//               <li className="best-choice__li">
//                 <div className="best-choice__li-body">
//                   <div className="best-choice__li-body-cell">Agency</div>
//                   <div className="best-choice__li-body-cell">Takes around 5-15 days</div>
//                   <div className="best-choice__li-body-cell">Requires multiple meetings and agreements</div>
//                   <div className="best-choice__li-body-cell">Typically takes 3-15 business days</div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>Limited availability</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>Not always provided</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>Fixed-term agreement</div>
//                   </div>
//                   <div className="best-choice__li-body-cell">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
//                   </div>
//                   <div className="best-choice__li-body-cell"></div>
//                 </div>
//               </li>

//               {/* Fourth Row */}
//               <li className="best-choice__li">
//                 <div className="best-choice__li-body">
//                   <div className="best-choice__li-body-cell">Freelancers</div>
//                   <div className="best-choice__li-body-cell">Takes about 2-4 days</div>
//                   <div className="best-choice__li-body-cell">Involves back-and-forth communication</div>
//                   <div className="best-choice__li-body-cell">Takes around 3-7 business days</div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>No flexibility</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>Not guaranteed</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>No flexibility</div>
//                   </div>
//                   <div className="best-choice__li-body-cell">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
//                   </div>
//                   <div className="best-choice__li-body-cell"></div>
//                 </div>
//               </li>

//               {/* Fifth Row */}
//               <li className="best-choice__li">
//                 <div className="best-choice__li-body">
//                   <div className="best-choice__li-body-cell">Hiring</div>
//                   <div className="best-choice__li-body-cell">May take 1-2 weeks</div>
//                   <div className="best-choice__li-body-cell">Time-consuming with extensive explanations</div>
//                   <div className="best-choice__li-body-cell">Completion within 3-7 business days</div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>Limited options</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>Not included</div>
//                   </div>
//                   <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon mb-2" />
//                     <div>No flexibility</div>
//                   </div>
//                   <div className="best-choice__li-body-cell">
//                     <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
//                   </div>
//                   <div className="best-choice__li-body-cell"></div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BestChoice;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Bestchoices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import { useTranslation } from "react-i18next";

const BestChoice = () => {
  const { t } = useTranslation('bestChoice');  // use bestChoice namespace

  // Helper to render check or cross with text
  const renderIconCell = (condition, text) => (
    <div className="best-choice__li-body-cell d-flex flex-column align-items-center">
      <FontAwesomeIcon
        icon={condition ? faCheckCircle : faTimesCircle}
        className={`icon ${condition ? 'correct-icon' : 'wrong-icon'} mb-2`}
      />
      <div>{text}</div>
    </div>
  );

  return (
    <div className="table-section">
      <h2 className="text-center table-top-text fw-bold pb-5">{t('title')}</h2>
      <section className="best-choice text-white best-choice--home section--visible d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="best-choice__content">
            <ul className="best-choice__list">
              {/* Header Row */}
              <li className="best-choice__li">
                <div className="best-choice__li-body">
                  <div className="best-choice__li-body-cell"></div>
                  {t('headers', { returnObjects: true }).map((header, i) => (
                    <div key={i} className="best-choice__li-body-cell">{header}</div>
                  ))}
                  <div className="best-choice__li-body-cell"></div>
                </div>
              </li>

              {/* Main Row */}
              <li className="best-choice__li best-choice__li--main">
                <div className="best-choice__li-body">
                  <div className="best-choice__li-body-cell">
                    <img src="image/bmtechx.png" alt="Logo" />
                  </div>
                  <div className="best-choice__li-body-cell">{t('rows.main.onboarding')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.main.requestHandling')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.main.completionTime')}</div>
                  {renderIconCell(true, t('rows.main.flexibleResources'))}
                  {renderIconCell(true, t('rows.main.expertSupervision'))}
                  {renderIconCell(true, t('rows.main.subscriptionFlexibility'))}
                  {renderIconCell(true, t('rows.main.teamExpertise'))}
                  <div className="best-choice__li-body-cell"></div>
                  <div className="best-choice__li-body-cell">
                    <button 
                      className="btn btn--yellow best-choice__li-body-cell-btn js-contact-btn" 
                      onClick={bookFreeCall}
                    >
                      {t('buttonText')}
                    </button>
                  </div>
                </div>
              </li>

              {/* Agency Row */}
              <li className="best-choice__li">
                <div className="best-choice__li-body">
                  <div className="best-choice__li-body-cell">{t('rows.agency.brand')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.agency.onboarding')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.agency.requestHandling')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.agency.completionTime')}</div>
                  {renderIconCell(false, t('rows.agency.flexibleResources'))}
                  {renderIconCell(false, t('rows.agency.expertSupervision'))}
                  {renderIconCell(false, t('rows.agency.subscriptionFlexibility'))}
                  <div className="best-choice__li-body-cell">
                    <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                  </div>
                  <div className="best-choice__li-body-cell"></div>
                </div>
              </li>

              {/* Freelancer Row */}
              <li className="best-choice__li">
                <div className="best-choice__li-body">
                  <div className="best-choice__li-body-cell">{t('rows.freelancer.brand')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.freelancer.onboarding')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.freelancer.requestHandling')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.freelancer.completionTime')}</div>
                  {renderIconCell(false, t('rows.freelancer.flexibleResources'))}
                  {renderIconCell(false, t('rows.freelancer.expertSupervision'))}
                  {renderIconCell(false, t('rows.freelancer.subscriptionFlexibility'))}
                  <div className="best-choice__li-body-cell">
                    <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                  </div>
                  <div className="best-choice__li-body-cell"></div>
                </div>
              </li>

              {/* Hiring Row */}
              <li className="best-choice__li">
                <div className="best-choice__li-body">
                  <div className="best-choice__li-body-cell">{t('rows.hiring.brand')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.hiring.onboarding')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.hiring.requestHandling')}</div>
                  <div className="best-choice__li-body-cell">{t('rows.hiring.completionTime')}</div>
                  {renderIconCell(false, t('rows.hiring.flexibleResources'))}
                  {renderIconCell(false, t('rows.hiring.expertSupervision'))}
                  {renderIconCell(false, t('rows.hiring.subscriptionFlexibility'))}
                  <div className="best-choice__li-body-cell">
                    <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                  </div>
                  <div className="best-choice__li-body-cell"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestChoice;
