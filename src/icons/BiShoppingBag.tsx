import * as React from "react";
import {IconProps} from "./types";
export const BiShoppingBag = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M21 6h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a3 3 0 0 0-3-3m-9-4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4m10 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h3v2a1 1 0 0 0 2 0V8h8v2a1 1 0 0 0 2 0V8h3a1 1 0 0 1 1 1Z" />
    </svg>
  );
});
export default BiShoppingBag;
