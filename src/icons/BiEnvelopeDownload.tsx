import * as React from "react";
import {IconProps} from "./types";
export const BiEnvelopeDownload = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M14.73 7.7a1 1 0 1 1 1.43-1.4L18 8.181V1a1 1 0 0 1 2 0v7.181L21.84 6.3a1 1 0 0 1 1.43 1.4l-2.515 2.57a2.48 2.48 0 0 1-1.743.73.04.04 0 0 1-.019 0 2.46 2.46 0 0 1-1.74-.722ZM23 11a1 1 0 0 0-1 1v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9.071l6.465 6.465a5.025 5.025 0 0 0 7.06.01l1.882-1.829a1 1 0 1 0-1.394-1.434l-1.892 1.839a3.074 3.074 0 0 1-4.242 0L2.361 6.6A2.99 2.99 0 0 1 5 5h7a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-7a1 1 0 0 0-1-1" />
    </svg>
  );
});
export default BiEnvelopeDownload;
