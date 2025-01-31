import * as React from "react";
import {IconProps} from "./types";
export const BiCalendarWeek = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19,2h-1V1c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1v1H8V1c0-0.6-0.4-1-1-1C6.4,0,6,0.5,6,1v1H5C2.2,2,0,4.2,0,7v12 c0,2.8,2.2,5,5,5h14c2.8,0,5-2.2,5-5V7C24,4.2,21.8,2,19,2z M4.4,21.9C3.3,21.7,2,20.7,2,19v-9h2.4V21.9z M4.4,8H2V7 c0-1.7,1.3-2.7,2.4-3V8z M8.8,22H6.4V10h2.4V22z M8.8,8H6.4V4h2.4V8z M13.2,22h-2.4V10h2.4V22z M13.2,8h-2.4V4h2.4V8z M17.6,22h-2.4 V10h2.4V22z M17.6,8h-2.4V4h2.4V8z M22,19c0,1.7-1.3,2.7-2.4,3V10H22V19z M22,8h-2.4V4C20.7,4.3,22,5.3,22,7V8z" />
    </svg>
  );
});
export default BiCalendarWeek;
