import * as React from "react";
import {IconProps} from "./types";
export const BiBasketShopping = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M23.27 9.03C22.7 8.37 21.87 8 21 8h-.09c-.5-4.49-4.32-8-8.94-8S3.52 3.51 3.02 8h-.05C2.1 8 1.27 8.38.7 9.03c-.57.66-.82 1.53-.7 2.39l1.06 7.42c.42 2.94 2.97 5.15 5.94 5.15h9.97c2.97 0 5.52-2.21 5.94-5.15l1.06-7.42c.12-.86-.13-1.73-.7-2.39M11.97 2c3.52 0 6.44 2.61 6.93 6H5.04c.49-3.39 3.41-6 6.93-6m10.02 9.14-1.06 7.42a4.01 4.01 0 0 1-3.96 3.43H7c-1.98 0-3.68-1.48-3.96-3.43l-1.06-7.42c-.04-.29.04-.57.23-.8.19-.22.46-.35.76-.35H21c.29 0 .56.12.75.34s.28.51.23.8Z" />
    </svg>
  );
});
export default BiBasketShopping;
