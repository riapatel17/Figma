import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./index.css";

const Slider = () => {
  return <div>
          <Carousel className="slide-container">
                <div>
                    <img src="./images/img2.png" alt="img1" />
                </div>
                <div>
                    <img src="./images/img2.png" alt="img2"/>
                </div>
                <div>
                    <img src="./images/img3.png" alt="img3"/>
                </div>
            </Carousel>
  </div>;
};

export default Slider;