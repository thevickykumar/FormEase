// Progress Bar Component
import styles from "./Bar.module.css";
function Bar() {
  return (
    <>
      <div className={styles.container}>
        <button
          type="button"
          className="btn btn-lg btn-outline-secondary rounded-circle"
        >
          1
        </button>
        <div className={styles.line}></div>
        <button
          type="button"
          className="btn btn-lg btn-outline-secondary rounded-circle"
        >
          2
        </button>
        <div className={styles.line}></div>
        <button
          type="button"
          className="btn btn-lg btn-outline-secondary rounded-circle"
        >
          3
        </button>
        <div className={styles.line}></div>
        <button
          type="button"
          className="btn btn-lg btn-outline-secondary rounded-circle"
        >
          4
        </button>
      </div>
      <div className="d-flex justify-content-between">
        <h5>Initial Information</h5>
        <h5>Party Information</h5>
        <h5>Logistics</h5>
        <h5>Aditional Services</h5>
      </div>
    </>
  );
}

export default Bar;
