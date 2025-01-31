import * as React from "react";
import {IconProps} from "./types";
export const BiLicense = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="m19.95 5.54-3.48-3.49A6.96 6.96 0 0 0 11.52 0H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h2c.55 0 1-.45 1-1s-.45-1-1-1H7c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h4.51c.16 0 .33 0 .49.02V7c0 1.65 1.35 3 3 3h4.98c.02.16.02.32.02.49V19c0 1.07-.58 2.06-1.5 2.6-.48.28-.64.89-.36 1.37.27.48.88.64 1.37.37 1.54-.89 2.5-2.55 2.5-4.33v-8.52c0-1.87-.73-3.63-2.05-4.95ZM15 8c-.55 0-1-.45-1-1V2.66q.57.33 1.05.81l3.48 3.49q.48.48.81 1.05H15Zm-1 4c-2.21 0-4 1.79-4 4a4 4 0 0 0 2 3.46v3.81c0 .64.78.96 1.23.51l.77-.77.77.77c.45.45 1.23.13 1.23-.51v-3.81c1.19-.69 2-1.99 2-3.46 0-2.21-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
    </svg>
  );
});
export default BiLicense;
