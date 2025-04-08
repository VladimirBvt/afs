import Image from "next/image";
import styles from "./_/styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <aside className={styles.aside}>
        <div className={styles.navPanel}>
          <button>
            <img className={styles.logo} src="/icons/logo.svg" alt="logo" />
          </button>
          <button>
            <img
              className={styles.img}
              src="/icons/сompany.svg"
              alt="company"
            />
          </button>
          <button>
            <img
              className={styles.img}
              src="/icons/magnifying-glass.svg"
              alt="magnifying glass"
            />
          </button>
          <div className={styles.divider}></div>
          <div>
            <img
              className={styles.img}
              src="/icons/settings.svg"
              alt="settings"
            />
          </div>
          <div>
            <img
              className={styles.img}
              src="/icons/sign-out.svg"
              alt="sign out"
            />
          </div>
        </div>
        <div></div>
      </aside>
      <main className={styles.main}></main>
    </div>
  );
}
