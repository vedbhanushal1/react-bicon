import * as React from "react";
import {IconProps} from "./types";
export const BiFileText = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M17 14a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m-4 3H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m9-6.515V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.96 6.96 0 0 1 4.95 2.05l3.484 3.486A6.95 6.95 0 0 1 22 10.485m-6.949-7.021A5 5 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a5 5 0 0 0-.781-1.05zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" />
    </svg>
  );
});
export default BiFileText;
