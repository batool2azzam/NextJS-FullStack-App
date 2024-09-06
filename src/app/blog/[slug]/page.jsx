import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3220859/pexels-photo-3220859.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="A beautiful view"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/3220859/pexels-photo-3220859.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Avatar"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          illum exercitationem perferendis voluptates fugit atque, officiis
          similique nam vitae accusantium numquam voluptatem veritatis iure
          facilis? Nobis inventore ullam quaerat nisi.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
