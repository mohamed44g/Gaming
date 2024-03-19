import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import Card from "../../componantes/Card/index";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";
import product1 from "../../assets/Images/hat-stock.xyz894975.jpg";
import product2 from "../../assets/Images/product-3-1280x820.jpg";
import product3 from "../../assets/Images/product-7-1280x820.jpg";
import product4 from "../../assets/Images/title.jpg";
import product5 from "../../assets/Images/product-8-1280x820.jpg";

function Store() {
  const [data] = useState([
    { id: 1, title: "Game controller", img: product1, price: 25, discount: 50 },
    { id: 2, title: "Head phone", img: product2, price: 25, discount: 40 },
    { id: 3, title: "Game controller", img: product3, price: 50, discount: 60 },
    { id: 4, title: "Mouse RGB", img: product4, price: 45, discount: 70 },
    { id: 5, title: "Black camera", img: product5, price: 45, discount: 70 },
  ]);

  return (
    <div className="our-products">
      <h2>our products</h2>

      <div className="container">
        <div className="cards">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Navigation]}
            navigation={{ clickable: true }}
            className="swiper"
            spaceBetween={50}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {data.map((ele) => (
              <SwiperSlide key={ele.id}>
                <Card
                  productTitle={ele.title}
                  CardImg={ele.img}
                  price={ele.price}
                  discount={ele.discount}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Store;
