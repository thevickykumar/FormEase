import styles from "./court.module.css";
function Court() {
  // This function handles the dynamic nature of the Court Reporting accordion
  const handleAll = () => {
    const elements = document.querySelectorAll(
      "#ArbitrationSwitch, #ArbitrationInput, #TranscriptSwitch, #TranscriptSelect, #MultilingualSwitch, #MultilingualInput, #MultilingualSelect"
    );
    elements.forEach((element) => {
      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    });
  };
  // This function handles the dynamic nature of the Arbitration Place Court Reporter checkbox
  const handleAPCR = () => {
    const APCR = document.querySelector("#ArbitrationInput");
    if (APCR.classList.contains("d-none")) {
      APCR.classList.remove("d-none");
    } else {
      APCR.classList.add("d-none");
    }
  };
  // This function handles the dynamic nature of the Transcript checkbox
  const handleTranscript = () => {
    const Transcript = document.querySelector("#TranscriptSelect");
    if (Transcript.classList.contains("d-none")) {
      Transcript.classList.remove("d-none");
    } else {
      Transcript.classList.add("d-none");
    }
  };
  // This function handles the dynamic nature of the Multilingual checkbox
  const handleMultilingual = () => {
    const elements = document.querySelectorAll(
      "#MultilingualInput, #MultilingualSelect"
    );
    elements.forEach((element) => {
      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    });
  };
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#court"
              aria-expanded="false"
              aria-controls="court"
            >
              Court Reporting
            </button>
          </h2>
          <div
            id="court"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className={styles.form}>
                <div className="container">
                  <div className="col">
                    <div className="d-flex flex-column mb-3">
                      <div className="p-2">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={handleAll}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Will this matter plan to have a Court Reporter?
                          </label>
                        </div>
                      </div>
                      <div className="p-2 d-none" id="ArbitrationSwitch">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={handleAPCR}
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Would you like an Arbitration Place Court Reporter?
                          </label>
                        </div>
                      </div>
                      <div className="p-2 d-none" id="ArbitrationInput">
                        <label htmlFor="">
                          Is there a specific Arbitration Place Court Reporter
                          you prefer?
                        </label>
                        <select
                          className="form-select mt-2 w-auto"
                          aria-label="Default select example"
                        >
                          <option selected>Select AP Court Reporter</option>
                          <option value="1">AP Noida</option>
                          <option value="2">AP Mumbai</option>
                        </select>
                      </div>
                      <div className="p-2 d-none" id="TranscriptSwitch">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            defaultChecked
                            onClick={handleTranscript}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Will a transcript be required?
                          </label>
                        </div>
                      </div>
                      <div className="p-2 d-none" id="TranscriptSelect">
                        <label htmlFor="">Turnaround Time?</label>
                        <select
                          className="form-select mt-2 w-auto"
                          aria-label="Default select example"
                        >
                          <option selected>Standard</option>
                          <option value="1">Afternoon</option>
                          <option value="2">Evening</option>
                        </select>
                      </div>
                      <div className="p-2 d-none" id="MultilingualSwitch">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            defaultChecked
                            onClick={handleMultilingual}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Multilingual?
                          </label>
                        </div>
                      </div>
                      <div
                        className="p-2 d-none col-lg-4 col-md-6 col-auto"
                        id="MultilingualInput"
                      >
                        <label htmlFor="input1-row6" className="form-label">
                          Please list the non-english languages you would like
                          accommodated (separate by comma)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input1-row6"
                          placeholder="Input"
                        />
                      </div>
                      <div
                        className="p-2 d-none col-lg-4 col-md-6 col-auto"
                        id="MultilingualSelect"
                      >
                        <label htmlFor="">Daily Rough Draft?</label>
                        <select
                          className="form-select mt-2"
                          aria-label="Default select example"
                        >
                          <option selected>I don&apos;t Know</option>
                          <option value="1">I Know</option>
                          <option value="2">I will Know</option>
                        </select>
                      </div>
                      <div
                        className="p-2 d-none col-lg-4 col-md-6 col-auto"
                        id="MultilingualSelect"
                      >
                        <label htmlFor="">Realtime reporting?</label>
                        <select
                          className="form-select mt-2"
                          aria-label="Default select example"
                        >
                          <option selected>I don&apos;t Know</option>
                          <option value="1">I Know</option>
                          <option value="2">I will Know</option>
                        </select>
                      </div>
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

export default Court;
