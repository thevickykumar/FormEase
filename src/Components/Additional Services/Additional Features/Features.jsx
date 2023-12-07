import styles from "./features.module.css";
function Features() {
  // This function handles the dynamic nature of the Interpretation checkbox
  const handleInterpretation = () => {
    const Interpretation = document.querySelector("#Interpretation");
    if (Interpretation.classList.contains("d-none")) {
      Interpretation.classList.remove("d-none");
    } else {
      Interpretation.classList.add("d-none");
    }
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
              data-bs-target="#Features"
              aria-expanded="false"
              aria-controls="Features"
            >
              Additional Features
            </button>
          </h2>
          <div
            id="Features"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className={styles.form}>
                <div className="container">
                  <div className="d-flex flex-column mb-3">
                    <div className="p-2">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          onClick={handleInterpretation}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Do you require interpretation?
                        </label>
                      </div>
                    </div>
                    <div
                      className="p-2 d-none col-lg-4 col-md-6 "
                      id="Interpretation"
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
                    <div className="p-2">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Do you require CART services?
                        </label>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Will you need a quote prior to confirmation?
                        </label>
                      </div>
                    </div>
                    <div className="p-2 col-lg-4 col-md-6">
                      <label htmlFor="input1-row6" className="form-label">
                        Please list any additional requests or considerations
                        you might have at this time
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row6"
                        placeholder="Input"
                      />
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

export default Features;
