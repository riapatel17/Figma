import { FC } from "react";
import styles from "./Product.module.css";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

interface Iproducts {
  category: string;
  // productName: string;
  // minPrice: number;
  // maxPrice: number;
  // image: string;
}

export const Product: FC<Iproducts> = ({ category }) => {
  const data = [
    {
      id: "1",
      productName: "Strawberry Banana",
      minPrice: "36",
      maxPrice: "55",
      image: image1,
    },

    {
      id: "2",
      productName: "Milk Chocolate Bar 100mg",
      minPrice: "15",
      maxPrice: "15",
      image: image2,
    },

    {
      id: "3",
      productName: "Relief pen - 100 doses",
      minPrice: "54",
      maxPrice: "54",
      image: image3,
    },

    {
      id: "4",
      productName: "Hybrid Top Shelf 3.5 grams",
      minPrice: "49",
      maxPrice: "49",
      image: image4,
    },
  ];
  return (
    <div>
      <>
        <div className={styles.CategoryWrapper}>
          <div className={styles.PrerollHeader}>
            <h3>{category}</h3>
            <a href="#" className={styles.ViewCategory}>
              View All 9 items
            </a>
            <a href="#" className={styles.BtnPreroll}>
              SHOP {category}
            </a>
          </div>
          <div className={styles.ProductWrapper}>
            {data.map((p) => (
              <div className={styles.CategoryCard} key={p.id}>
                <img src={p.image} alt="product" />
                <div className={styles.ProductName}>{p.productName}</div>
                <div className={styles.ProductPrice}>
                  {p.minPrice === p.maxPrice
                    ? `$${p.minPrice}`
                    : `$${p.minPrice} - $${p.maxPrice}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};
