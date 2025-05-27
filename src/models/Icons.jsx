import { FiShare } from "react-icons/fi";
import { SiAirbnb } from "react-icons/si";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiCalendar, CiHeart } from "react-icons/ci";
import { RiSearchLine } from "react-icons/ri";
import { GoPlusCircle } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaConciergeBellSolid } from "react-icons/lia";
import { LuCalendarFold, LuGlobe } from "react-icons/lu";
import { TbAirBalloon, TbCurrencyEuro } from "react-icons/tb";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import {
  AiOutlineLoading3Quarters,
  AiOutlineMinusCircle,
  AiOutlineX,
  AiTwotoneCopyrightCircle,
} from "react-icons/ai";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  IoIosArrowForward,
  IoIosStar,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io";

export const Icons = {
  Heart: <CiHeart />,
  Share: <FiShare />,
  Globe: <LuGlobe />,
  Star: <IoIosStar />,
  Meta: <AiOutlineX />,
  House: <BiHomeAlt2 />,
  Euro: <TbCurrencyEuro />,
  Calendar: <CiCalendar />,
  AirBnbLogo: <SiAirbnb />,
  Search: <RiSearchLine />,
  Facebook: <IoLogoFacebook />,
  AirBalloon: <TbAirBalloon />,
  PlusCircle: <GoPlusCircle />,
  Hamburger: <RxHamburgerMenu />,
  Instagram: <IoLogoInstagram />,
  Bell: <LiaConciergeBellSolid />,
  RightArrow: <IoIosArrowForward />,
  CalendarActive: <LuCalendarFold />,
  Load: <AiOutlineLoading3Quarters />,
  MinusCircle: <AiOutlineMinusCircle />,
  PlusMinus: <MdOutlineArrowForwardIos />,
  LeftArrow: <MdOutlineArrowBackIosNew />,
  Copyright: <AiTwotoneCopyrightCircle />,
  LeftArrowCircle: <TfiArrowCircleLeft />,
  RightArrowCircle: <TfiArrowCircleRight />,
};
