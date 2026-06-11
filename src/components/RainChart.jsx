import { rainChartData } from "../data/mockData"

export default function RainChart({ data = rainChartData }) {
  const max = 100
  const width = 236
  const height = 168
  const padding = { top: 12, right: 6, bottom: 22, left: 38 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const points = data.map((item, i) => {
    const x = padding.left + (i / (data.length - 1)) * chartW
    const y = padding.top + chartH - (item.value / max) * chartH
    return { x, y, ...item }
  })

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
  const gridLines = [0, 0.5, 1].map((ratio) => padding.top + chartH * (1 - ratio))

  return (
    <section
      className="h-[228px] w-full rounded-[24px] bg-card p-4 sm:rounded-[32px] sm:p-[16px]"
      aria-label="Chance of rain chart"
    >
      <h3 className="mb-2 text-[14px] font-semibold text-white sm:mb-[10px]">Chance Of Rain</h3>

      <svg viewBox={`0 0 ${width} ${height}`} className="h-[calc(100%-28px)] w-full min-h-[160px]" role="img">
        {gridLines.map((y, i) => (
          <line
            key={i}
            x1={padding.left}
            y1={y}
            x2={width - padding.right}
            y2={y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        <text x="0" y={padding.top + 8} fill="#a0a0a0" fontSize="9">
          Heavy
        </text>
        <text x="0" y={padding.top + chartH / 2 + 4} fill="#a0a0a0" fontSize="9">
          Sunny
        </text>
        <text x="0" y={padding.top + chartH + 2} fill="#a0a0a0" fontSize="9">
          Rainy
        </text>

        {points.map((point) => (
          <rect
            key={point.time}
            x={point.x - 9}
            y={point.y}
            width="18"
            height={padding.top + chartH - point.y}
            rx="6"
            fill="rgba(74, 144, 226, 0.14)"
          />
        ))}

        <path
          d={linePath}
          fill="none"
          stroke="#4a90e2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((point) => (
          <g key={`${point.time}-dot`}>
            <circle cx={point.x} cy={point.y} r="6" fill="rgba(74, 144, 226, 0.2)" />
            <circle cx={point.x} cy={point.y} r="3.5" fill="#4a90e2" />
          </g>
        ))}

        {points.map((point) => (
          <text
            key={`${point.time}-label`}
            x={point.x}
            y={height - 2}
            textAnchor="middle"
            fill="#a0a0a0"
            fontSize="8"
          >
            {point.time}
          </text>
        ))}
      </svg>
    </section>
  )
}
