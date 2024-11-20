import * as React from "react"
const LineSVG = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={133}
    height={4}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF9D00"
      strokeLinecap="round"
      strokeWidth={4}
      d="M2 2h100M109 2h10M126 2h5"
    />
  </svg>
)
export default LineSVG
