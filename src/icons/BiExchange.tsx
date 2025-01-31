import * as React from "react";
import {IconProps} from "./types";
export const BiExchange = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M23 16H2.681l.014-.015L4.939 13.7a1 1 0 1 0-1.426-1.4l-2.239 2.277c-.163.163-.391.413-.624.676a2.59 2.59 0 0 0 0 3.429c.233.262.461.512.618.67l2.245 2.284a1 1 0 0 0 1.426-1.4L2.744 18H23a1 1 0 0 0 0-2M1 8h20.255l-2.194 2.233a1 1 0 1 0 1.426 1.4l2.239-2.279c.163-.163.391-.413.624-.675a2.59 2.59 0 0 0 0-3.429 17 17 0 0 0-.618-.67L20.487 2.3a1 1 0 0 0-1.426 1.4l2.251 2.29.008.01H1a1 1 0 0 0 0 2" />
    </svg>
  );
});
export default BiExchange;
