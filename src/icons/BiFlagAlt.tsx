import * as React from "react";
import {IconProps} from "./types";
export const BiFlagAlt = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="m20.358 7.5 3.237-4.297c.459-.609.533-1.413.192-2.096S22.761 0 21.997 0H4C1.794 0 0 1.794 0 4v19a1 1 0 1 0 2 0v-8h19.998c.764 0 1.449-.425 1.79-1.107s.267-1.486-.192-2.096L20.359 7.5ZM2 13V4c0-1.103.897-2 2-2h17.998l-3.69 4.898a1 1 0 0 0 0 1.203l3.69 4.898H2Z" />
    </svg>
  );
});
export default BiFlagAlt;
