import * as React from "react";
import {IconProps} from "./types";
export const BiArrowSmallUp = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="m17.71 9.88-4.3-4.29a2 2 0 0 0-2.82 0l-4.3 4.29a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0L11 8v11a1 1 0 0 0 2 0V8l3.29 3.29a1 1 0 1 0 1.42-1.41" />
    </svg>
  );
});
export default BiArrowSmallUp;
