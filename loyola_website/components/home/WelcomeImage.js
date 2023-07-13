import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";
import slider1 from "../../Assets/slider1.jpg";
import slider2 from "../../Assets/slider2.jpg";
import slider3 from "../../Assets/slider3.jpg";

const WelcomeImage = () => {
  var items = [
    {
      image: slider1,
    },
    {
      image: slider2,
    },
    {
      image: slider3,
    },
  ];

  return (
    <Carousel
      className="lg:h-full "
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <Image
      src={props.item.image}
      fill={true}
      className="object-contain bg-slate-300"
    />
  );
};

export default WelcomeImage;
