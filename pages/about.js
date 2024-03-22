import Header from '../components/Header';
import styles from '../styles/About.module.css'; // Make sure to create an About.module.css for your custom styles

export default function About() {
  return (
    <div className={styles.container}>
      <Header>
        <title>About Me</title>
      </Header>
      <main className={styles.main}>
        <h1 className={styles.title}>Hey there! I'm at UNC Charlotte</h1>
        <p className={styles.description}>
          Pursuing a Bachelor's degree in Computer Science with a concentration in Cybersecurity at the University of North Carolina at Charlotte, I've embarked on a fascinating journey through the realms of technology and security.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>My Tech Journey </h3>
            <p>
              It all started with a coding course in high school, sparking a passion that would define my future. From Python to Java, JavaScript, Node.js, and Flask, my programming skills are as diverse as they are deep. Not just confined to code, I'm also proficient in Linux, Windows Administration, and macOS.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Security First </h3>
            <p>
              Cybersecurity isn't just a concentration; it's a calling. From understanding SQL injections to mastering tools like Kali Linux and Autopsy for digital forensics, I'm honing my skills to safeguard digital frontiers.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Beyond Bytes </h3>
            <p>
              When I'm not delving into code or cybersecurity, I'm either bringing creations to life with 3D printing or exploring the great outdoors through hiking. It's about finding the perfect balance between the digital and natural worlds.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Looking Ahead </h3>
            <p>
              As I navigate through my studies and beyond, my aim is to emerge as a well-rounded coder with a robust foundation in cybersecurity. The goal is clear: to make the digital world a safer place, one line of code at a time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}