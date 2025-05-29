import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icons } from "../models/Icons";
import { useState } from "react";
import Button from "./Button";
import { Size } from "../models/Size";
import { Color } from "../models/Color";

function SwiperComponent() {
  const [swiper, setSwiper] = useState(null);

  function PrevButton() {
    if (swiper) swiper.slidePrev();
  }

  function NextButton() {
    if (swiper) swiper.slideNext();
  }

  return (
    <>
      <Button
        onClick={PrevButton}
        className="btn-prev"
        size={Size.Sm}
        color={Color.First}
        icon={<Icons.LeftArrow />}
      />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
      <Button
        onClick={NextButton}
        className="btn-next"
        size={Size.Sm}
        color={Color.First}
        icon={<Icons.RightArrow />}
      />
    </>
  );
}

export default SwiperComponent;
