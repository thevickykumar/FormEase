import styles from "./virtual.module.css";
function Virtual() {
  // This function handles the dynamic nature of the VCM checkbox
  const handleVCM = () => {
    const VCM = document.querySelector("#VCM");
    if (VCM.classList.contains("d-none")) {
      VCM.classList.remove("d-none");
    } else {
      VCM.classList.add("d-none");
    }
  };
  // This function handles the dynamic nature of the DMS checkbox
  const handleDMS = () => {
    const VCM = document.querySelector("#DMS");
    if (VCM.classList.contains("d-none")) {
      VCM.classList.remove("d-none");
    } else {
      VCM.classList.add("d-none");
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
              data-bs-target="#virtual"
              aria-expanded="false"
              aria-controls="virtual"
            >
              Virtual Logistics
            </button>
          </h2>
          <div
            id="virtual"
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
                          defaultChecked
                          onClick={handleVCM}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Do you require a VCM (virtual case manager)?
                        </label>
                      </div>
                    </div>
                    <div className="p-2 d-block" id="VCM">
                      <label htmlFor="input1-row6" className="form-label">
                        Is there a particular VCM you want to work with?
                      </label>
                      <input
                        type="text"
                        className="form-control w-auto"
                        id="input1-row6"
                        placeholder="VCM’s name"
                      />
                    </div>
                    <div className="p-2 d-flex flex-lg-row flex-sm-column flex-md-column gap-4">
                      <div className="">
                        <label htmlFor="input1-row1" className="form-label">
                          Select a Virtual Platform
                        </label>
                        <select
                          className="form-select w-auto"
                          aria-label="Default select example"
                        >
                          <option selected>Zoom</option>
                          <option value="1">Meet</option>
                          <option value="2">Teams</option>
                        </select>
                      </div>
                      <div className="">
                        <label htmlFor="input2-row1" className="form-label">
                          Number of virtual breakout rooms
                        </label>
                        <input
                          type="text"
                          className="form-control w-auto"
                          id="input2-row1"
                          placeholder="Type Here"
                        />
                      </div>
                    </div>
                    <div className="p-2 mt-4">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          onClick={handleDMS}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Do you need us to provide Document Managing Services?
                        </label>
                      </div>
                    </div>
                    <div className="p-2 mt-4">
                      <div className="d-inline-block w-50">
                        <label htmlFor="input1-row6" className="form-label">
                          Do you have any special accommodations for your
                          booking that our I.T. team can look into prior to the
                          start date?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input1-row6"
                          placeholder="Type Here"
                        />
                      </div>
                      <div className="d-inline-block d-none mx-4" id="DMS">
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
                            Would you like the your matter to be recorded?
                          </label>
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
    </div>
  );
}

export default Virtual;
