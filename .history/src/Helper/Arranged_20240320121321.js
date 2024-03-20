/** @format */

import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ src, className }) => {
  return <LazyLoadImage alt={"alt"} src={src} className={className} />;
};
