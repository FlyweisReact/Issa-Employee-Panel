/** @format */

import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({alt : "" , }) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
    />
  );
};
