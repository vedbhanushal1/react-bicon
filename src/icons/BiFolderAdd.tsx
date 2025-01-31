import * as React from "react";
import {IconProps} from "./types";
export const BiFolderAdd = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M16 15a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1m8-7v10a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V6a5.006 5.006 0 0 1 5-5h2.528a3 3 0 0 1 1.341.316L12.025 2.9a1 1 0 0 0 .447.1H19a5.006 5.006 0 0 1 5 5M2 6v1h19.816A3 3 0 0 0 19 5h-6.528a3 3 0 0 1-1.341-.316L7.975 3.105A1 1 0 0 0 7.528 3H5a3 3 0 0 0-3 3m20 12V9H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3" />
    </svg>
  );
});
export default BiFolderAdd;
