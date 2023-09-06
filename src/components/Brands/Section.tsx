import { FC } from "react";
import styles from "./Section.module.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

const Section: FC = () => {
  const data = [
    { brandName: "Kiva Confections", image: img1 },
    { brandName: "Bloom Farms", image: img2 },
    { brandName: "Korova", image: img3 },
  ];
  return (
    <div className={styles.SectionWrapper}>
      {data.map((p) => (
        <div key={p.brandName}>
          <div className={styles.brandContainer}>
            <img src={p.image} alt="brand" />
          </div>
          <div className={styles.brandName}>{p.brandName}</div>
          <div className={styles.ViewAll}>View All 9 items</div>
          <a href="#" className={styles.SectionBtn}>
            Shop {p.brandName}
          </a>
        </div>
      ))}
    </div>
  );
};
export default Section;
