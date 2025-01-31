import * as React from "react";
import {IconProps} from "./types";
export const BiFileCheck = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19.95 5.536 16.464 2.05A6.95 6.95 0 0 0 11.515 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515a6.95 6.95 0 0 0-2.05-4.949M18.536 6.95A5 5 0 0 1 19.317 8H15a1 1 0 0 1-1-1V2.683a5 5 0 0 1 1.05.781zM20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4.515c.165 0 .323.032.485.047V7a3 3 0 0 0 3 3h4.953c.015.162.047.32.047.485zm-3.276-5.689a1 1 0 0 1-.035 1.413L13.1 18.138a3 3 0 0 1-4.226-.017l-1.54-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.6-3.431a1 1 0 0 1 1.417.035" />
    </svg>
  );
});
export default BiFileCheck;
