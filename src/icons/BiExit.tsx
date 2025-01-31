import * as React from "react";
import {IconProps} from "./types";
export const BiExit = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M22.829 9.172 18.95 5.293a1 1 0 0 0-1.414 1.414l3.879 3.879a2 2 0 0 1 .3.39c-.015 0-.027-.008-.042-.008L5.989 11a1 1 0 0 0 0 2l15.678-.032c.028 0 .051-.014.078-.016a2 2 0 0 1-.334.462l-3.879 3.879a1 1 0 1 0 1.414 1.414l3.879-3.879a4 4 0 0 0 0-5.656Z" />
      <path d="M7 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2" />
    </svg>
  );
});
export default BiExit;
