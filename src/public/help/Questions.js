import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from "react-router-dom";

const Questions = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  const [show8, setShow8] = useState(true);
  const [show9, setShow9] = useState(true);


  return (
    <div>
      <h2>common questions</h2>

      <div className="questions-container">
        {
          show ?
            <div onClick={() => setShow(false)} className="row-wrapper">
              <p>What category is the platform services targeting?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow(true)} className="row-wrapper">
                <p>What category is the platform services targeting?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>The categories targeted by the platform’s services are:</div>
                <div>- the elderly</div>
                <div>- orphans</div>
                <div>- beggars</div>
                <div>- juveniles</div>
                <div>- people with disabilities</div>
              </div>
            </div>
        }


        {
          show1 ?
            <div onClick={() => setShow1(false)} className="row-wrapper">
              <p>What services are available for people with disabilities on the platform?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow1(true)} className="row-wrapper">
                <p>What services are available for people with disabilities on the platform?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>- Request for disability assessment service</div>
                <div>- Request for an appointment for disability assessment (support services)</div>
                <div>- Request for an appointment for disability assessment (home visit)</div>
                <div>- Request for canceling an appointment for disability assessment</div>
                <div>- Service for submitting a request to grant exemption from visa fees</div>
                <div>- Service for requesting cards to reduce passenger fares</div>
                <div>- Request for facilities card service Traffic</div>
                <div>- Service for issuing a disability identification card for autism disorder</div>
                <div>- Service for classifying disability for university students and subsidy category</div>
                <div>- Service for issuing a disability scene</div>
                <div>- Service for requesting medical or supportive devices</div>
                <div>- Service for requesting financial aid - for people with disabilities</div>
              </div>
            </div>
        }

        {
          show2 ?
            <div onClick={() => setShow2(false)} className="row-wrapper">
              <p>What services are available for orphans on the platform?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow2(true)} className="row-wrapper">
                <p>What services are available for orphans on the platform?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>- Applying for the sponsoring families program</div>
                <div>- Requesting hosting with a friendly family</div>
                <div>- Assigning an orphan to a sponsoring family</div>
                <div>- Requesting a reward at the end of foster care</div>
                <div>- Issuing an identification certificate for fostering</div>
                <div>- Requesting a letter of recommendation for orphans</div>
                <div>- Requesting (issuing or renewing) a passport, travel permit</div>
                <div>- Scholarship request service</div>
                <div>- Transportation and school transportation</div>
                <div>- Investment account services</div>
                <div>- Public / private education</div>
                <div>- Remedial lessons</div>
                <div>- Request for payment of tuition fees</div>
                <div>- Training courses</div>
                <div>- Training and empowerment</div>
                <div>- Request for marriage subsidy for orphans</div>
                <div>- Subsidy request for a sponsoring family</div>
                <div>- Subsidy request for beneficiaries affiliated with Ekhaa Foundation</div>
                <div>- Request for issuance of identity papers</div>
                <div>- Request for disbursement of the monthly stipend for orphans</div>
              </div>
            </div>
        }

        {
          show3 ?
            <div onClick={() => setShow3(false)} className="row-wrapper">
              <p>What are the services available for the category of family counseling on the platform?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow3(true)} className="row-wrapper">
                <p>What are the services available for the category of family counseling on the platform?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>to be added later</div>
              </div>
            </div>
        }

        {
          show4 ?
            <div onClick={() => setShow4(false)} className="row-wrapper">
              <p>What services are available for the elderly category on the platform?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow4(true)} className="row-wrapper">
                <p>What services are available for the elderly category on the platform?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>to be added later</div>
              </div>
            </div>
        }

        {
          show5 ?
            <div onClick={() => setShow5(false)} className="row-wrapper">
              <p>What are the services available to the civil centers on the platform?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow5(true)} className="row-wrapper">
                <p>What are the services available to the civil centers on the platform?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>- Investment Registry</div>
                <div>- Service of issuing a temporary license certificate for a civil center</div>
                <div>- Service of changing location - Temporary license for a civil center</div>
                <div>- Service of canceling a temporary license certificate for a civil center</div>
                <div>- Service of issuing a final license certificate for a civil center</div>
                <div>- Service of renewing a final license for a civil center</div>
                <div>- Request for government facilities</div>
                <div>- Mowamah service And update the data of my family center</div>
                <div>- Ownership transfer service for my family center</div>
                <div>- Service of transferring headquarters to my family center</div>
                <div>- Request to cancel a license for my family center (from the owner)</div>
                <div>- Request to suspend work in my family center (from the owner)</div>
                <div>- Registration and management of beneficiary data</div>
                <div>- Registration and approval of programs offered in the centers</div>
                <div>- Application for registration in the state's fee-bearing program</div>
                <div>- Objection to fines</div>
                <div>- State's fee-bearing program</div>
                <div>- Financial claim</div>
              </div>
            </div>
        }

        {
          show6 ?
            <div onClick={() => setShow6(false)} className="row-wrapper">
              <p>What services are available for events on the platform?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow6(true)} className="row-wrapper">
                <p>What services are available for events on the platform?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>to be added later</div>
              </div>
            </div>
        }

        {
          show7 ?
            <div onClick={() => setShow7(false)} className="row-wrapper">
              <p>Is there financial support through the platform?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow7(true)} className="row-wrapper">
                <p>Is there financial support through the platform?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>no. You can go to the support platform for more details.</div>
              </div>
            </div>
        }

        {
          show8 ?
            <div onClick={() => setShow8(false)} className="row-wrapper">
              <p>Can the parent or legal guardian request services on behalf of the beneficiary?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow8(true)} className="row-wrapper">
                <p>Can the parent or legal guardian request services on behalf of the beneficiary?</p>
                <KeyboardArrowUpIcon/>
              </div>
              <div className="row-content-text">
                <div>Yes, the parent or legal guardian can request services on behalf of the beneficiary after the
                  platform verifies that.
                </div>
              </div>
            </div>
        }

        {
          show9 ?
            <div onClick={() => setShow9(false)} className="row-wrapper">
              <p>How can I reach the engineering offices in the area?</p>
              <KeyboardArrowDownIcon/>
            </div>
            :
            <div>
              <div onClick={() => setShow9(true)} className="row-wrapper">
                <p>How can I reach the engineering offices in the area?</p>
                <KeyboardArrowDownIcon/>
              </div>
              <div className="row-content-text">
                <div>Accredited engineering offices and their means of communication can be accessed through the
                  official website of the Saudi Council of Engineers (
                  <Link style={{textDecoration: 'none', color: '#147FBD'}}
                        to="https://saudieng.sa/Arabic/Inquiry/Pages/OfficeSearch.aspx" target="_blank">
                    click here
                  </Link>)

                </div>
              </div>
            </div>
        }

      </div>

    </div>
  );
};

export default Questions;
