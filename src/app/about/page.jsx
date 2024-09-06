import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver, and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver, and better.
          We believe in good ideas, flexibility, and precision. We're the
          world's best Special Team, providing the best consulting & finance
          solutions. We offer a wide range of web and software development
          services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/about.png"
          alt="Picture of the author"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
