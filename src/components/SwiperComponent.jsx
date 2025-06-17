import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icons } from "../models/Icons";
import { useState } from "react";
import Button from "./Button";
import { Size } from "../models/Size";
import { Color } from "../models/Color";
import {
  milanoData,
  romaData,
  torinoData,
  napoliData,
  barcellonaData,
  parigiData,
  bolognaData,
  firenzeData,
  budapestData,
} from "../locale/cardData";
import { Pagination } from "swiper/modules";
import Card from "./Card";

function SwiperComponent() {
  const [swiper, setSwiper] = useState({
    milano: null,
    roma: null,
    torino: null,
    napoli: null,
    barcellona: null,
    parigi: null,
    bologna: null,
    firenze: null,
    budapest: null,
  });

  const cityTitles = {
    Milano: "Milano: alloggi popolari",
    Roma: "Roma: disponibili questo week end",
    Napoli: "Napoli: alloggi",
    Torino: "Torino: disponibili il prossimo mese",
    Barcellona: "Barcellona: alloggi",
    Parigi: "Parigi: disponibili il prossimo mese",
    Bologna: "Bologna: tutti gli alloggi disponibili",
    Firenze: "Firenze: scopri gli alloggi",
    Budapest: "Budapest: alloggi popolari",
  };

  return (
    <>
      <div>
        <div
          className="btn-swiper"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        ></div>

        <div id="swiper-milano">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Milano} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.milano && swiper.milano.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.milano && swiper.milano.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, milano: swiperInstance }))
            }
            speed={800}
            id="swiper-milano"
            spaceBetween={10}
          >
            {milanoData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-roma">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Roma} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.roma && swiper.roma.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.roma && swiper.roma.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, roma: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {romaData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-torino">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Torino} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.torino && swiper.torino.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.torino && swiper.torino.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, torino: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {torinoData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-napoli">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Napoli} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.napoli && swiper.napoli.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.napoli && swiper.napoli.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, napoli: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {napoliData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-barcellona">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Barcellona} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() =>
                  swiper.barcellona && swiper.barcellona.slideNext()
                }
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() =>
                  swiper.barcellona && swiper.barcellona.slidePrev()
                }
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, barcellona: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {barcellonaData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-parigi">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Parigi} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.parigi && swiper.parigi.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.parigi && swiper.parigi.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, parigi: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {parigiData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-bologna">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Bologna} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.bologna && swiper.bologna.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.bologna && swiper.bologna.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, bologna: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {bolognaData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-firenze">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Firenze} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.firenze && swiper.firenze.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.firenze && swiper.firenze.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, firenze: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {firenzeData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="swiper-budapest">
          <div
            className="flex justify-between align-center"
            style={{ marginBottom: "10px" }}
          >
            <h3 style={{ fontWeight: "600" }}>
              {cityTitles.Budapest} <Icons.RightArrow size={"0.8rem"} />
            </h3>
            <div className="btn-container">
              <Button
                onClick={() => swiper.budapest && swiper.budapest.slideNext()}
                className="btn-next"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.RightArrow />}
              />
              <Button
                onClick={() => swiper.budapest && swiper.budapest.slidePrev()}
                className="btn-prev"
                size={Size.Sm}
                color={Color.First}
                icon={<Icons.LeftArrow />}
              />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, budapest: swiperInstance }))
            }
            speed={800}
            spaceBetween={10}
          >
            {budapestData.map((slides, i) => (
              <SwiperSlide key={i}>
                <Card
                  image={slides.image}
                  location={slides.location}
                  dates={slides.dates}
                  hostType={slides.hostType}
                  price={slides.price}
                  rating={slides.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SwiperComponent;
