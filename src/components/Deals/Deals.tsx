import { FC } from "react";
import styles from "./Deals.module.css";

import imageGroup from "./images/Group.png";
import imageBogo from "./images/bogo.png";

const Deals: FC = () => {
  const data = [
    {
      id: "1",
      DealName: "Spend $100 of Dosist and Get 20% off of Kiva Confections",
      ActiveDeal: "Active everyday",
      imgGroup: imageGroup,
      imgBogo: imageBogo,
    },
    {
      id: "2",
      DealName: "Spend $100 of Dosist and Get 20% off of Kiva Confections",
      ActiveDeal: "Active everyday",
      imgGroup: imageGroup,
      imgBogo: imageBogo,
    },

    {
      id: "3",
      DealName: "Spend $100 of Dosist and Get 20% off of Kiva Confections",
      ActiveDeal: "Active everyday",
      imgGroup: imageGroup,
      imgBogo: imageBogo,
    },
  ];

  return (
    <div className={styles.MainDeal}>
      <div className={styles.BannerContainer}>
        <div className={styles.Banner}>
          <h4>Catridges</h4>
        </div>
      </div>

      <div className={styles.Deals}>
        <div className={styles.DealMain}>
          <h1>Deals</h1>
          <h6>View All 9 deals</h6>
          <button className={styles.DealsBtn}>SHOP BY DEALS</button>
        </div>
        {data.map((d) => (
          <div key={d.id} className={styles.DealsContainer}>
            <div className={styles.DealBox}>
              <div className={styles.Rec1}></div>
              <div className={styles.Deal1}>
                <h2>{d.DealName}</h2>
                <h4>{d.ActiveDeal}</h4>
              </div>
              <div className={styles.Group}>
                <img src={d.imgGroup} alt="" />
                <div className={styles.Bogo}>
                  <img src={d.imgBogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Deals;
