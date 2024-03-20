/** @format */

import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({}) => {
  return (
    <LazyLoadImage
      alt={""}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
    />
  );
};
