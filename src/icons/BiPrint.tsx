import * as React from "react";
import {IconProps} from "./types";
export const BiPrint = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19 6V4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5 3 3 0 0 0 3 3h8a3 3 0 0 0 3-3 5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H7Zm10 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm5-5a3 3 0 0 1-3 3v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
      <path d="M18 10h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2" />
    </svg>
  );
});
export default BiPrint;
