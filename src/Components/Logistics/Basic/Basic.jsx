import styles from "./basic.module.css";
function Basic() {
  // This function handles the dynamic nature of the tribunal secretary
  const handleTribunal = () => {
    const tribunal = document.querySelector("#tribunal");
    if (tribunal.classList.contains("d-none")) {
      tribunal.classList.remove("d-none");
    } else {
      tribunal.classList.add("d-none");
    }
  };
  // This is the helper function
  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  // This function handles the addition of arbitrator via the + Add additional arbitrator button
  const handleArbitrator = () => {
    const parentNode = document.querySelector("#parentArbitrator");
    const div = document.createElement("div");
    div.className = "row mt-4";
    div.innerHTML = `<div class="col-3">
    <label htmlFor="input1-row3" class="form-label">
      Additional Arbitrator
    </label>
    <input
      type="text"
      class="form-control"
      id="input1-row3"
      placeholder="Chair's name"
    />
  </div>
  <div class="col-3">
    <label htmlFor="input2-row3" class="form-label">
      Email
    </label>
    <input
      type="text"
      class="form-control"
      id="input2-row3"
      placeholder="Email"
    />
  </div>
  <div class="col-2">
  <button type="button" class="btn btn-outline-danger w-100">Remove this arbitrator </button>
  </div>`;
    insertAfter(div, parentNode);
    addArbitratorFunction();
  };
  // This function adds the remove arbitrator function to the  dynamically created new arbitrator entry
  const addArbitratorFunction = () => {
    const buttons = document.querySelectorAll(".btn-outline-danger");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        removeArbitrator(button);
      });
    });
  };
  // This function removes the arbitrator entry
  const removeArbitrator = (button) => {
    const arbitratorDiv = button.parentNode.parentNode;
    arbitratorDiv.parentNode.removeChild(arbitratorDiv);
  };
  // This function handles the addition of witness via the + Add additional witness button
  const handleWitness = () => {
    const parentNode = document.querySelector("#parentWitness");
    const div = document.createElement("div");
    div.className = "row mt-4";
    div.innerHTML = `<div class="col-3">
    <label htmlFor="input1-row3" class="form-label">
      Additional Witness
    </label>
    <input
      type="text"
      class="form-control"
      id="input1-row3"
      placeholder="Chair's name"
    />
  </div>
  <div class="col-3">
    <label htmlFor="input2-row3" class="form-label">
      Email
    </label>
    <input
      type="text"
      class="form-control"
      id="input2-row3"
      placeholder="Email"
    />
  </div>
  <div class="col-2">
  <button type="button" class="btn btn-outline-warning w-100">Remove this Witness </button>
  </div>`;
    insertAfter(div, parentNode);
    addWitnessFunction();
  };
  // This function adds the remove witness function to the  dynamically created new witness entry
  const addWitnessFunction = () => {
    const buttons = document.querySelectorAll(".btn-outline-warning");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        removeWitness(button);
      });
    });
  };
  // This function removes the witness entry
  const removeWitness = (button) => {
    const witnessDiv = button.parentNode.parentNode;
    witnessDiv.parentNode.removeChild(witnessDiv);
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
              data-bs-target="#basic"
              aria-expanded="false"
              aria-controls="basic"
            >
              Basic Logistics
            </button>
          </h2>
          <div
            id="basic"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className={styles.form}>
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="input1-row1" className="form-label">
                        Style of cause
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row1"
                        placeholder="Type Here"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="input2-row1" className="form-label">
                        Court File #
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2-row1"
                        placeholder="Type Here"
                      />
                    </div>
                    <div className="col-2">
                      <label htmlFor="input3-row1" className="form-label">
                        Booking Dates
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="input3-row1"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <label htmlFor="input1-row2" className="form-label">
                        Start Time
                      </label>
                      <select
                        className="form-select w-50"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">00:00</option>
                        <option value="2">01:00</option>
                        <option value="3">02:00</option>
                        <option value="4">03:00</option>
                        <option value="5">04:00</option>
                        <option value="6">05:00</option>
                        <option value="7">06:00</option>
                        <option value="8">07:00</option>
                        <option value="9">08:00</option>
                        <option value="10">09:00</option>
                        <option value="11">10:00</option>
                        <option value="12">11:00</option>
                        <option value="13">12:00</option>
                        <option value="14">13:00</option>
                        <option value="15">14:00</option>
                        <option value="16">15:00</option>
                        <option value="17">16:00</option>
                        <option value="18">17:00</option>
                        <option value="19">18:00</option>
                        <option value="20">19:00</option>
                        <option value="21">20:00</option>
                        <option value="22">21:00</option>
                        <option value="23">22:00</option>
                        <option value="24">23:00</option>
                        <option value="25">24:00</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="input2-row2" className="form-label">
                        End Time
                      </label>
                      <select
                        className="form-select w-50"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">00:00</option>
                        <option value="2">01:00</option>
                        <option value="3">02:00</option>
                        <option value="4">03:00</option>
                        <option value="5">04:00</option>
                        <option value="6">05:00</option>
                        <option value="7">06:00</option>
                        <option value="8">07:00</option>
                        <option value="9">08:00</option>
                        <option value="10">09:00</option>
                        <option value="11">10:00</option>
                        <option value="12">11:00</option>
                        <option value="13">12:00</option>
                        <option value="14">13:00</option>
                        <option value="15">14:00</option>
                        <option value="16">15:00</option>
                        <option value="17">16:00</option>
                        <option value="18">17:00</option>
                        <option value="19">18:00</option>
                        <option value="20">19:00</option>
                        <option value="21">20:00</option>
                        <option value="22">21:00</option>
                        <option value="23">22:00</option>
                        <option value="24">23:00</option>
                        <option value="25">24:00</option>
                      </select>
                    </div>
                    <div className="col-2">
                      <label htmlFor="input3-row2" className="form-label">
                        Time Zone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input3-row1"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="row mt-4" id="parentArbitrator">
                    <div className="col-3">
                      <label htmlFor="input1-row3" className="form-label">
                        Arbitrator(s)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row3"
                        placeholder="Chair's name"
                      />
                    </div>
                    <div className="col-3">
                      <label htmlFor="input2-row3" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2-row3"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg w-100 rounded-pill"
                        onClick={handleArbitrator}
                      >
                        + Add additional arbitrator
                      </button>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <div className="form-check form-switch ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          onClick={handleTribunal}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Tribunal secretary?
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 d-none" id="tribunal">
                    <div className="col-3">
                      <label htmlFor="input1-row6" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row6"
                        placeholder="Tribunal secretary's name"
                      />
                    </div>
                    <div className="col-3">
                      <label htmlFor="input2-row6" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2-row6"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row mt-4" id="parentWitness">
                    <div className="col-3">
                      <label htmlFor="input1-row7" className="form-label">
                        Witness(es)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1-row7"
                        placeholder="Witness' name"
                      />
                    </div>
                    <div className="col-3">
                      <label htmlFor="input2-row7" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2-row7"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg w-100 rounded-pill"
                        onClick={handleWitness}
                      >
                        + Add additional witness
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

export default Basic;
