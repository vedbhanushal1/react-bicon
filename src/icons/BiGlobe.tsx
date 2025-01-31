import * as React from "react";
import {IconProps} from "./types";
export const BiGlobe = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m8.647 7h-3.221a19.7 19.7 0 0 0-2.821-4.644A10.03 10.03 0 0 1 20.647 7M16.5 12a10.2 10.2 0 0 1-.476 3H7.976a10.2 10.2 0 0 1-.476-3 10.2 10.2 0 0 1 .476-3h8.048a10.2 10.2 0 0 1 .476 3m-7.722 5h6.444A19.6 19.6 0 0 1 12 21.588 19.6 19.6 0 0 1 8.778 17m0-10A19.6 19.6 0 0 1 12 2.412 19.6 19.6 0 0 1 15.222 7ZM9.4 2.356A19.7 19.7 0 0 0 6.574 7H3.353A10.03 10.03 0 0 1 9.4 2.356M2.461 9H5.9a12 12 0 0 0-.4 3 12 12 0 0 0 .4 3H2.461a10 10 0 0 1 0-6m.892 8h3.221A19.7 19.7 0 0 0 9.4 21.644 10.03 10.03 0 0 1 3.353 17m11.252 4.644A19.7 19.7 0 0 0 17.426 17h3.221a10.03 10.03 0 0 1-6.042 4.644M21.539 15H18.1a12 12 0 0 0 .4-3 12 12 0 0 0-.4-3h3.437a10 10 0 0 1 0 6Z" />
    </svg>
  );
});
export default BiGlobe;
