import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="container">
      <div className="Modal">
        <div className="modalHead" onClick={closeModal}>
          <h1>Create new assessment</h1>
          <FontAwesomeIcon icon={faXmark} id="faX" />
        </div>
        <div className="modalBody">
          <label>Name of assessment</label>
          <input type="text" placeholder="Type Here" />
          <label>Purpose of the test is</label>
          <select>
            <option>Select</option>
          </select>
          <label>Description</label>
          <select>
            <option>Select</option>
          </select>
          <div className="skillcont">
            <label>Skills</label>
            <div className="skills">
              <div className="display">
                <div className="skill1">
                  HTML
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="skill1">
                  HTML
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="skill1">
                  HTML
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="skill1">
                  HTML
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="skill1">
                  HTML
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="skill1">
                  HTML
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <input type="text" placeholder="Type Here" />
            </div>
          </div>
          <label>Duration of assessment</label>
          <input type="text" placeholder="HH:MM:SS" />
        </div>
      </div>
    </div>
  );
};
export default Modal;
