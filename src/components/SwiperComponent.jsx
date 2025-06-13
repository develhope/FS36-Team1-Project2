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
          <Button
            onClick={() => swiper.milano && swiper.milano.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.milano && swiper.milano.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, milano: swiperInstance }))
            }
            speed={800}
            id="swiper-milano"
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
          <Button
            onClick={() => swiper.roma && swiper.roma.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.roma && swiper.roma.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, roma: swiperInstance }))
            }
            speed={800}
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
          <Button
            onClick={() => swiper.torino && swiper.torino.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.torino && swiper.torino.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, torino: swiperInstance }))
            }
            speed={800}
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
          <Button
            onClick={() => swiper.napoli && swiper.napoli.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.napoli && swiper.napoli.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, napoli: swiperInstance }))
            }
            speed={800}
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
          <Button
            onClick={() => swiper.barcellona && swiper.barcellona.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.barcellona && swiper.barcellona.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, barcellona: swiperInstance }))
            }
            speed={800}
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
          <Button
            onClick={() => swiper.parigi && swiper.parigi.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.parigi && swiper.parigi.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, parigi: swiperInstance }))
            }
            speed={800}
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
          <Button
            onClick={() => swiper.bologna && swiper.bologna.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.bologna && swiper.bologna.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, bologna: swiperInstance }))
            }
            speed={800}
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
          <Button
            onClick={() => swiper.firenze && swiper.firenze.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.firenze && swiper.firenze.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, firenze: swiperInstance }))
            }
            speed={800}
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
          <Button
            onClick={() => swiper.budapest && swiper.budapest.slidePrev()}
            className="btn-prev"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.LeftArrow />}
          />
          <Button
            onClick={() => swiper.budapest && swiper.budapest.slideNext()}
            className="btn-next"
            size={Size.Sm}
            color={Color.First}
            icon={<Icons.RightArrow />}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={7}
            onSwiper={(swiperInstance) =>
              setSwiper((prev) => ({ ...prev, budapest: swiperInstance }))
            }
            speed={800}
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
