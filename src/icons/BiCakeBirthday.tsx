import * as React from "react";
import {IconProps} from "./types";
export const BiCakeBirthday = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M23 22h-1v-8a5.006 5.006 0 0 0-5-5h-4V6.039a2.5 2.5 0 0 0 1.5-2.289A7.3 7.3 0 0 0 12.738.327a1 1 0 0 0-1.476 0A7.3 7.3 0 0 0 9.5 3.75 2.5 2.5 0 0 0 11 6.039V9H7a5.006 5.006 0 0 0-5 5v8H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2M7 11h10a3 3 0 0 1 3 3v1.98c-.936-.1-1.5-.7-1.5-.98a1 1 0 0 0-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .315-.579.888-1.5.981V14a3 3 0 0 1 3-3m-3 6.979A4.16 4.16 0 0 0 6.5 17a4.31 4.31 0 0 0 5.5.015A4.31 4.31 0 0 0 17.5 17a4.16 4.16 0 0 0 2.5.978V22H4Z" />
    </svg>
  );
});
export default BiCakeBirthday;
