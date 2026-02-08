import React from "react";

export const BuildingSkyline = ({ className = "" }) => (
  <svg
    viewBox="0 0 1200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMax slice"
  >
    {/* Building 1 - tall thin */}
    <rect x="50" y="60" width="40" height="140" rx="2" fill="currentColor" opacity="0.07" />
    <rect x="56" y="70" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="68" y="70" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="56" y="86" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="68" y="86" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="56" y="102" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="68" y="102" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="56" y="118" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="68" y="118" width="8" height="10" rx="1" fill="currentColor" opacity="0.04" />

    {/* Building 2 - wide */}
    <rect x="100" y="90" width="60" height="110" rx="2" fill="currentColor" opacity="0.06" />
    <rect x="108" y="98" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />
    <rect x="124" y="98" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />
    <rect x="140" y="98" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />
    <rect x="108" y="112" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />
    <rect x="124" y="112" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />
    <rect x="140" y="112" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />

    {/* Building 3 - tower */}
    <rect x="180" y="30" width="35" height="170" rx="2" fill="currentColor" opacity="0.08" />
    <rect x="186" y="38" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="196" y="38" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="186" y="52" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="196" y="52" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="186" y="66" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="196" y="66" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="186" y="80" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="196" y="80" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />

    {/* Building 4 */}
    <rect x="230" y="70" width="50" height="130" rx="2" fill="currentColor" opacity="0.065" />
    <rect x="238" y="80" width="8" height="10" rx="1" fill="currentColor" opacity="0.035" />
    <rect x="252" y="80" width="8" height="10" rx="1" fill="currentColor" opacity="0.035" />
    <rect x="266" y="80" width="8" height="10" rx="1" fill="currentColor" opacity="0.035" />

    {/* Building 5 - short */}
    <rect x="300" y="120" width="45" height="80" rx="2" fill="currentColor" opacity="0.055" />

    {/* Right side buildings */}
    <rect x="850" y="80" width="45" height="120" rx="2" fill="currentColor" opacity="0.06" />
    <rect x="858" y="88" width="8" height="10" rx="1" fill="currentColor" opacity="0.03" />
    <rect x="872" y="88" width="8" height="10" rx="1" fill="currentColor" opacity="0.03" />

    <rect x="910" y="40" width="38" height="160" rx="2" fill="currentColor" opacity="0.075" />
    <rect x="916" y="50" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="928" y="50" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="916" y="64" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />
    <rect x="928" y="64" width="6" height="8" rx="1" fill="currentColor" opacity="0.04" />

    <rect x="960" y="95" width="55" height="105" rx="2" fill="currentColor" opacity="0.06" />
    <rect x="968" y="103" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />
    <rect x="984" y="103" width="10" height="8" rx="1" fill="currentColor" opacity="0.03" />

    <rect x="1030" y="65" width="42" height="135" rx="2" fill="currentColor" opacity="0.07" />
    <rect x="1036" y="73" width="8" height="8" rx="1" fill="currentColor" opacity="0.035" />
    <rect x="1050" y="73" width="8" height="8" rx="1" fill="currentColor" opacity="0.035" />

    <rect x="1085" y="110" width="50" height="90" rx="2" fill="currentColor" opacity="0.055" />
    <rect x="1150" y="85" width="35" height="115" rx="2" fill="currentColor" opacity="0.065" />
  </svg>
);

export const PlotGridPattern = ({ className = "" }) => (
  <svg
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Plot grid */}
    {[0, 1, 2, 3, 4].map((row) =>
      [0, 1, 2, 3, 4, 5].map((col) => {
        const colors = ["#16A34A", "#CA8A04", "#DC2626"];
        const bgColors = ["#DCFCE7", "#FEF9C3", "#FEE2E2"];
        const idx = (row * 6 + col) % 3;
        const randomIdx = Math.floor(
          Math.sin(row * 7 + col * 13) * 10000
        ) % 3;
        const finalIdx = Math.abs(randomIdx) % 3;
        return (
          <React.Fragment key={`${row}-${col}`}>
            <rect
              x={10 + col * 48}
              y={10 + row * 38}
              width="40"
              height="30"
              rx="4"
              fill={bgColors[finalIdx]}
              stroke={colors[finalIdx]}
              strokeWidth="1"
              opacity="0.8"
            />
          </React.Fragment>
        );
      })
    )}
  </svg>
);

export const MapPinBuilding = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pin shape */}
    <path
      d="M60 135C60 135 105 88 105 55C105 30.1472 84.8528 10 60 10C35.1472 10 15 30.1472 15 55C15 88 60 135 60 135Z"
      fill="#1565C0"
      opacity="0.1"
      stroke="#1565C0"
      strokeWidth="2"
      strokeOpacity="0.2"
    />
    {/* Building inside pin */}
    <rect x="40" y="35" width="40" height="40" rx="3" fill="#1565C0" opacity="0.15" />
    <rect x="46" y="41" width="8" height="6" rx="1" fill="#1565C0" opacity="0.2" />
    <rect x="58" y="41" width="8" height="6" rx="1" fill="#1565C0" opacity="0.2" />
    <rect x="46" y="51" width="8" height="6" rx="1" fill="#1565C0" opacity="0.2" />
    <rect x="58" y="51" width="8" height="6" rx="1" fill="#1565C0" opacity="0.2" />
    <rect x="54" y="61" width="12" height="14" rx="1" fill="#1565C0" opacity="0.2" />
  </svg>
);
