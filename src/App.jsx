import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.calculator}>
      <input type="text" className={styles.display} />
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>C</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>3</button>
      </div>
    </div>
  );
}

export default App;
