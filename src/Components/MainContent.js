import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsProgress,
  faBriefcase,
  faCalendarDays,
  faCirclePlus,
  faEllipsisVertical,
  faGlobe,
  faLightbulb,
  faLink,
  faPlus,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import { useState } from "react";
import Modal from "./Modal";

const MainContent = () => {
  const [showmodal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="table">
      <h2>Assessments Overview</h2>
      <section className="section1">
        <div className="totAss">
          <h4 className="h4head">Total Assessments</h4>
          <div className="secBody">
            <FontAwesomeIcon className="icon" icon={faBarsProgress} />
            <strong className="str">34</strong>
          </div>
        </div>
        <div className="candidate">
          <h4>Candidates</h4>
          <div className="secBody">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <div className="secspan">
              <strong className="str1">11,145</strong>
              <strong className="green">+89</strong>
              <p>Total candidate</p>
            </div>

            <div className="seperator1"></div>
            <div className="secspan">
              <strong className="str1">114</strong>
              <strong className="green">+89</strong>
              <p>Who Attamped</p>
            </div>
          </div>
        </div>

        <div className="candidate">
          <h4>Candidates Source</h4>
          <div className="secBody">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <div className="secspan">
              <strong className="str1">11,000</strong>
              <strong className="green">+89</strong>
              <p>E-mail</p>
            </div>

            <div className="seperator1"></div>
            <div className="secspan">
              <strong className="str1">145</strong>
              <strong className="green">+89</strong>
              <p>Social Share</p>
            </div>
            <div className="seperator1"></div>
            <div className="secspan">
              <strong className="str1">145</strong>
              <strong className="green">+89</strong>
              <p>Unique Link</p>
            </div>
          </div>
        </div>
        <div className="totAss">
          <h4 className="h4head">Total Purpose</h4>
          <div className="secBody">
            <FontAwesomeIcon className="icon" icon={faLink} />
            <strong className="str">11</strong>
          </div>
        </div>
      </section>
      <h1>My Assessment</h1>
      <div className="myasses">
        <div
          className="card1"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            id="faPlus"
            style={{ color: "#3f76d5" }}
          />
          {showmodal && <Modal closeModal={closeModal} />}
          <h2>New Assessment</h2>
          <p className="cardDescription">
            From here you can add questions of multiple types like
            MCQs,subjective(text or paragraph)!
          </p>
        </div>
        <div className="card2">
          <div className="iconsfa">
            <FontAwesomeIcon
              icon={faBriefcase}
              id="faBriefcase"
              style={{ color: "#3f76d5" }}
            />
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              id="faEllipsisVertical"
            />
          </div>
          <div className="cardHead">
            <h3>Math Assessment</h3>
            <div className="job">
              <strong>Job</strong>
              <div className="divsn"></div>
              <FontAwesomeIcon icon={faCalendarDays} />
              <strong className="date">20 Apr 2023</strong>
            </div>
          </div>

          <div className="cardBody">
            <div className="bPart1">
              <div className="span1">
                <strong>00</strong>
                <strong>Duration</strong>
              </div>
              <div className="span1">
                <strong>00</strong>
                <strong>Duration</strong>
              </div>
            </div>
            <div className="bPart2">
              <button className="Share">
                <FontAwesomeIcon icon={faLink} /> Share
              </button>
              <div className="LP">LP</div>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="iconsfa">
            <FontAwesomeIcon
              icon={faBriefcase}
              id="faBriefcase"
              style={{ color: "#3f76d5" }}
            />
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              id="faEllipsisVertical"
            />
          </div>
          <div className="cardHead">
            <h3>Math Assessment</h3>
            <div className="job">
              <strong>Job</strong>
              <div className="divsn"></div>
              <FontAwesomeIcon icon={faCalendarDays} />
              <strong className="date">20 Apr 2023</strong>
            </div>
          </div>

          <div className="cardBody">
            <div className="bPart1">
              <div className="span1">
                <strong>00</strong>
                <strong>Duration</strong>
              </div>
              <div className="span1">
                <strong>00</strong>
                <strong>Duration</strong>
              </div>
            </div>
            <div className="bPart2">
              <button className="Share">
                <FontAwesomeIcon icon={faLink} /> Share
              </button>
              <div className="LP">LP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
