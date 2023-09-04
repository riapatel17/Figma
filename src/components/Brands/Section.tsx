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
        <div className={styles.brandName} key={p.brandName}>
          <img src={p.image} alt="brand" />
          <div className={styles.brandName}>{p.brandName}</div>
        </div>
      ))}
    </div>
  );
};
export default Section;
