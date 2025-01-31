import * as React from "react";
import {IconProps} from "./types";
export const BiExpandArrows = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path
        d="M22.978 9.022a1 1 0 0 0 1-1V3.978a4 4 0 0 0-4-4h-4a1 1 0 0 0 0 2h4a2 2 0 0 1 .545.085L12 10.586 3.478 2.064A2 2 0 0 1 3.955 2H8a1 1 0 0 0 0-2H3.955a4 4 0 0 0-4 4v4a1 1 0 0 0 2 0V4a2 2 0 0 1 .085-.546L10.586 12l-8.551 8.551a2 2 0 0 1-.08-.529v-4.044a1 1 0 0 0-2 0v4.044a4 4 0 0 0 4 4h4a1 1 0 0 0 0-2h-4a2 2 0 0 1-.494-.069L12 13.414l8.506 8.506a2 2 0 0 1-.528.08h-4.045a1 1 0 0 0 0 2h4.045a4 4 0 0 0 4-4v-4a1 1 0 0 0-2 0v4a2 2 0 0 1-.07.494L13.414 12l8.5-8.5a2 2 0 0 1 .064.478v4.044a1 1 0 0 0 1 1"
        style={{
          fill: "#000",
        }}
      />
      <path d="M23 9a1 1 0 0 0 1-1V3a3 3 0 0 0-3-3h-5a1 1 0 0 0 0 2h4.586L12 10.586 3.414 2H8a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0V3.414L10.586 12 2 20.586V16a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2H3.414L12 13.414 20.586 22H16a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3v-5a1 1 0 0 0-2 0v4.586L13.414 12 22 3.414V8a1 1 0 0 0 1 1" />
    </svg>
  );
});
export default BiExpandArrows;
