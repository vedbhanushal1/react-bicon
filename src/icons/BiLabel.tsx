import * as React from "react";
import {IconProps} from "./types";
export const BiLabel = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M20.457 4.555 12.486.126a1 1 0 0 0-.972 0L3.543 4.555A3 3 0 0 0 2 7.177V19a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V7.177a3 3 0 0 0-1.543-2.622M20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7.177a1 1 0 0 1 .515-.877L12 2.144 19.486 6.3a1 1 0 0 1 .514.877Z" />
      <circle cx={12} cy={7} r={1.5} />
    </svg>
  );
});
export default BiLabel;
