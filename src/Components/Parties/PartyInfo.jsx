import styles from "./partyInfo.module.css";
import { useState } from "react";

// PartyInfo Component which renders the Party Information Form
function PartyInfo({ name, toggler, containerClass }) {
  const [checked, setChecked] = useState(true);
  const [info, setInfo] = useState("Don't Use Information on account");

  // This function handles the checkbox dynamic nature
  const handleChecked = () => {
    if (!checked) {
      setInfo("Don't Use Information on account");
    } else {
      setInfo("Use Information on account");
    }
    setChecked(!checked);
  };

  // This function handles the addition of counsel via the + Add additional counsel button
  const handleCounsel = () => {
    const container = document.querySelector(`.${containerClass}`);
    const div = document.createElement("div");
    div.className = "row mt-4 justify-content-center";
    div.innerHTML = `<div class="col-4">
                  <label htmlFor="input1-row4" class="form-label">
                    Lead counsel(s) Information
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="input1-row4"
                    placeholder="Name"
                  />
                </div>
                <div class="col-4">
                  <label htmlFor="input2-row4" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="input2-row4"
                    placeholder="Email"
                  />
                </div>
                <div class="col-2">
  <button type="button" class="btn btn-outline-danger w-100">Remove this arbitrator </button>
  </div>
                `;
    const lastChild = container.lastChild;
    container.insertBefore(div, lastChild);
    addCounselFunction();
  };

  // This function adds the remove counsel function to the  dynamically created new counsel entry
  const addCounselFunction = () => {
    const buttons = document.querySelectorAll(".btn-outline-danger");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        removeCounsel(button);
      });
    });
  };

  // This function removes the counsel entry
  const removeCounsel = (button) => {
    const CounselDiv = button.parentNode.parentNode;
    CounselDiv.parentNode.removeChild(CounselDiv);
  };
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${toggler}`}
              aria-expanded="true"
              aria-controls={toggler}
            >
              {`${name} Party Information`}
              <span className="fs-6 text-secondary">
                &nbsp; &nbsp;(Enter as much as possible)
              </span>
            </button>
          </h2>
          <div
            id={toggler}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={handleChecked}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  onClick={handleChecked}
                >
                  {info}
                </label>
              </div>
              <div className={styles.form}>
                <div className={`${containerClass}`}>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="input1-row1" className="form-label">
                        Firm Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row1"
                        placeholder="Input"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="input2-row1" className="form-label">
                        Booking Contact Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2-row1"
                        placeholder="Type Here"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="input3-row1" className="form-label">
                        Phone Number (No Spaces)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input3-row1"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="row mt-4 ">
                    <div className="col">
                      <label htmlFor="input1-row2" className="form-label">
                        Billing Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row2"
                        placeholder="Type Here"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="input2-row2" className="form-label">
                        ZIP/Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2-row2"
                        placeholder="Input"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="input3-row2" className="form-label">
                        Country/City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input3-row2"
                        placeholder="India"
                      />
                    </div>
                  </div>
                  <div className="row mt-4 justify-content-center">
                    <div className="col-4">
                      <label htmlFor="input1-row3" className="form-label">
                        Role{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row3"
                        placeholder="Input"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="input2-row3" className="form-label">
                        Name of Represented Client
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2-row3"
                        placeholder="Input"
                      />
                    </div>
                  </div>
                  <div className="row mt-4 justify-content-center">
                    <div className="col-4">
                      <label htmlFor="input1-row4" className="form-label">
                        Lead counsel(s) Information
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row4"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="input2-row4" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input2-row4"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row mt-4 justify-content-center">
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg w-100 rounded-pill"
                        onClick={handleCounsel}
                      >
                        + Add additional counsel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartyInfo;
