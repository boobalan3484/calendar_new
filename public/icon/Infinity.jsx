import * as React from "react"
const InfinitySVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={217}
    height={217}
    preserveAspectRatio="xMidYMid"
    style={{
      shapeRendering: "auto",
      display: "block",
      background: "0 0",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      fill="none"
      stroke="#f90"
      strokeDasharray="42.76482137044271 42.76482137044271"
      strokeLinecap="round"
      strokeWidth={4}
      d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20c-19.3 0-32.1-40-51.4-40z"
      style={{
        transform: "scale(.76)",
        transformOrigin: "50px 50px",
      }}
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="1.408450704225352s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="0;256.58892822265625"
      />
    </path>
  </svg>
)
export default InfinitySVG
