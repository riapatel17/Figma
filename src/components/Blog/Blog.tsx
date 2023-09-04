import { FC } from "react";
import styles from "./Blog.module.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

const Blog: FC = () => {
  const data = [
    {
      id: "1",
      contentText: "Papa & Barkley back in stock along with many options!",
      image: image1,
      btnContent: "Read More",
    },
    {
      id: "2",
      contentText: "Papa & Barkley back in stock along with many options!",
      image: image2,
      btnContent: "Read More",
    },
    {
      id: "3",
      contentText: "Papa & Barkley back in stock along with many options!",
      image: image3,
      btnContent: "Read More",
    },
    {
      id: "4",
      contentText: "Papa & Barkley back in stock along with many options!",
      image: image4,
      btnContent: "Read More",
    },
  ];
  return (
    <>
      <div className={styles.ContainerBlog}>
        <div className={styles.Blog}>
          <header className={styles.HeaderSection}>
            <h1>Blog</h1>
            <p className={styles.HeaderText}>Insert Blog short bio copy</p>
          </header>
          <div className={styles.Column}>
            {data.map((d) => (
              <div className={styles.BlogColumn} key={d.id}>
                <img
                  src={d.image}
                  alt="image"
                  className={styles.ContentImage}
                />
                <div className={styles.ContentText}>
                  <p>{d.contentText}</p>
                  <button className={styles.PrimaryBtn}>{d.btnContent}</button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.SecondaryBtn}>
            <button>View More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
