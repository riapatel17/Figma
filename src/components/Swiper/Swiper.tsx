import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../Product/Product";
import styles from "./Swiper.module.css";

import product1 from "./images/product1.png";
import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import product7 from "./images/product7.png";

const Swiper: FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
  };

  const products = [
    {
      imgProduct: product1,
      ProductName: "Flower",
    },

    {
      imgProduct: product2,
      ProductName: "PRE-ROLLS",
    },

    {
      imgProduct: product3,
      ProductName: "Vaporizers",
    },

    {
      imgProduct: product4,
      ProductName: "CONCENTRATES",
    },

    {
      imgProduct: product5,
      ProductName: "EDIBLES",
    },

    {
      imgProduct: product6,
      ProductName: "Capsules / Tablets",
    },

    {
      imgProduct: product7,
      ProductName: "Tinctures",
    },
  ];
  return (
    <>
      <Product category="Preroll" />
      <Carousel responsive={responsive} className={styles.SwiperContainer}>
        {products.map((p) => (
          <div className={styles.SwiperProducts} key={p.ProductName}>
            <img src={p.imgProduct} alt="product" />
            <div className={styles.ProdName}>{p.ProductName}</div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Swiper;
