import * as React from "react";
import {IconProps} from "./types";
export const BiTimePast = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M12 0a11.97 11.97 0 0 0-8 3.073V1a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2H5a1 1 0 0 1-.1-.021A9.987 9.987 0 1 1 2 12a1 1 0 0 0-2 0A12 12 0 1 0 12 0" />
      <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1" />
    </svg>
  );
});
export default BiTimePast;
