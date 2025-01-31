import * as React from "react";
import {IconProps} from "./types";
export const BiFile = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19.949 5.536 16.465 2.05A6.96 6.96 0 0 0 11.515 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515a6.95 6.95 0 0 0-2.051-4.949M18.535 6.95A5 5 0 0 1 19.316 8H15a1 1 0 0 1-1-1V2.684a5 5 0 0 1 1.051.78ZM20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4.515c.164 0 .323.032.485.047V7a3 3 0 0 0 3 3h4.953c.015.162.047.32.047.485Z" />
    </svg>
  );
});
export default BiFile;
