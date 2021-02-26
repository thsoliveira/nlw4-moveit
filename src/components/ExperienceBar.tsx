import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div className={styles.progress} style={{ width: "50%" }} />
        <span className={styles.currentExperience} style={{ left: "50%" }}>
          300px
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
