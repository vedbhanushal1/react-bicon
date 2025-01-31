import * as React from "react";
import {IconProps} from "./types";
export const BiFingerprint = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M5.972 22.285a1 1 0 0 1-.515-1.857C9 18.3 9 13.73 9 11a3 3 0 0 1 6 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0c0 2.947 0 8.434-4.514 11.143a1 1 0 0 1-.514.142m4.963 1.421c2.282-2.3 3.615-5.534 3.961-9.621A1 1 0 0 0 13.985 13a.983.983 0 0 0-1.081.911c-.311 3.657-1.419 6.4-3.388 8.381a1 1 0 0 0 1.419 1.41Zm5.2-.186a17.8 17.8 0 0 0 1.508-3.181 1 1 0 0 0-1.881-.678 16 16 0 0 1-1.338 2.821 1 1 0 0 0 1.711 1.038m2.365-6.329A31.5 31.5 0 0 0 19 11 7 7 0 0 0 6.787 6.333a1 1 0 1 0 1.489 1.334A5 5 0 0 1 17 11a29.7 29.7 0 0 1-.462 5.809 1 1 0 0 0 .79 1.172 1 1 0 0 0 .193.019 1 1 0 0 0 .979-.809M7 11a5 5 0 0 1 .069-.833A1 1 0 1 0 5.1 9.833 7 7 0 0 0 5 11c0 4.645-1.346 7-4 7a1 1 0 0 0 0 2c3.869 0 6-3.2 6-9m13.7 12.414A29.8 29.8 0 0 0 23 11a10.9 10.9 0 0 0-1.1-4.794 1 1 0 1 0-1.8.875A8.9 8.9 0 0 1 21 11a27.9 27.9 0 0 1-2.119 11.586 1 1 0 0 0 .5 1.324 1 1 0 0 0 .413.09 1 1 0 0 0 .906-.586M3 14v-3a9.01 9.01 0 0 1 9-9 8.9 8.9 0 0 1 5.4 1.8 1 1 0 0 0 1.2-1.6A10.9 10.9 0 0 0 12 0 11.013 11.013 0 0 0 1 11v3a1 1 0 0 0 2 0" />
    </svg>
  );
});
export default BiFingerprint;
