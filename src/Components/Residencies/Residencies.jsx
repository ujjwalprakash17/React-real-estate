import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../util/slider.json";
import { sliderSettings } from "../../util/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          <SwiperSlide>
            <div className=" flexColStart r-card">
              <img src={require("../assets/r1.png")} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span> <span>47,043</span>
              </span>
              <span className="primaryText">Aliva Priva Jardin</span>
              <span className="secondaryText">
                Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas,
                Serang, Banten
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flexColStart r-card">
              <img src={require("../assets/r2.png")} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span> <span>66,353</span>
              </span>
              <span className="primaryText">Asatti Garden City</span>
              <span className="secondaryText">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur,
                DKI Jakarta
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flexColStart r-card">
              <img src={require("../assets/r3.png")} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span> <span>35,853</span>
              </span>
              <span className="primaryText">Citralan Puri Serang</span>
              <span className="secondaryText">
                Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa
                Barat
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flexColStart r-card">
              <img src={require("../assets/r1.png")} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span> <span>47,043</span>
              </span>
              <span className="primaryText">Aliva Priva Jardin</span>
              <span className="secondaryText">
                Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas,
                Serang, Banten
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flexColStart r-card">
              <img src={require("../assets/r2.png")} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span> <span>66,353</span>
              </span>
              <span className="primaryText">Asatti Garden City</span>
              <span className="secondaryText">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur,
                DKI Jakarta
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flexColStart r-card">
              <img src={require("../assets/r3.png")} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span> <span>35,853</span>
              </span>
              <span className="primaryText">Citralan Puri Serang</span>
              <span className="secondaryText">
                Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa
                Barat
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} >&lt;</button>
      <button onClick={() => swiper.slideNext()}  >&gt;</button>
    </div>
  );
};
