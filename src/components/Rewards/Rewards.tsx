import { FC } from "react";
import styles from "./Rewards.module.css";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import imgPoint from "./images/point.png";

const Rewards: FC = () => {
  const rewards = [
    {
      id: "1",
      RewardName: "Reward",
      ProductName: "Strawberry Banana",
      Points: "300",
      image: image1,
      ImgPoint: imgPoint,
    },

    {
      id: "2",
      RewardName: "Reward",
      ProductName: "Milk Chocolate Bar 100mg",
      Points: "300",
      image: image2,
      ImgPoint: imgPoint,
    },

    {
      id: "3",
      RewardName: "Dosist",
      ProductName: "Relief pen - 100 doses",
      Points: "300",
      image: image3,
      ImgPoint: imgPoint,
    },

    {
      id: "4",
      RewardName: "Dosist",
      ProductName: "Relief pen - 100 doses",
      Points: "300",
      image: image4,
      ImgPoint: imgPoint,
    },
  ];

  return (
    <div className={styles.MainRewards}>
      <div className={styles.RewardsContainer}>
        <h1>Rewards</h1>
        <h6>Earn points with each order and be rewarded for your loyalty</h6>
        <button className={styles.RewardBtn}>SHOP REWARDS</button>
      </div>

      <div className={styles.Rewards}>
        {rewards.map((r) => (
          <div className={styles.Reward} key={r.id}>
            <img src={r.image} alt="" />
            <div className={styles.RewardText}>
              <h6>{r.RewardName}</h6>
              <h1>{r.ProductName}</h1>
              <div className={styles.points}>
                <h6>{r.Points}</h6>
                <img src={r.ImgPoint} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
