import { Droplets, Eye } from "lucide-react"
import { images } from "../data/mockData"

function WindMiniChart() {
  const bars = [18, 32, 48, 62, 78, 92, 100, 92, 78, 62, 48, 32, 18, 42, 68, 88, 72, 52, 34, 20]

  return (
    <div className="mx-auto flex h-[52px] w-full max-w-[96px] items-end justify-center gap-[2px]">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-white/70 to-white/5"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

function OverviewIcon({ src, alt, className = "h-[56px] w-[56px]" }) {
  return <img src={src} alt={alt} className={`${className} object-contain`} draggable={false} />
}

function CardFooter({ value, unit, sub, subIcon: SubIcon }) {
  return (
    <div className="flex items-end justify-between gap-2">
      <p className="leading-none text-white">
        <span className="text-[20px] font-bold">{value}</span>
        {unit && <span className="text-[13px] font-normal"> {unit}</span>}
      </p>
      {sub && (
        <p className="flex max-w-[88px] items-start gap-[4px] text-right text-[9px] leading-[12px] text-muted">
          {SubIcon && (
            <SubIcon className="mt-[1px] h-[10px] w-[10px] shrink-0" strokeWidth={1.75} aria-hidden="true" />
          )}
          <span>{sub}</span>
        </p>
      )}
    </div>
  )
}

export default function StatCard({ type, title, value, unit, sub }) {
  return (
    <article
      className="flex h-[148px] w-full min-w-0 flex-col rounded-[24px] bg-card p-4 sm:h-[168px] sm:rounded-[32px] sm:p-[20px]"
      aria-label={`${title}: ${value}${unit ? ` ${unit}` : ""}`}
    >
      <p className="text-[12px] text-muted">{title}</p>

      {type === "wind" && (
        <>
          <div className="flex flex-1 items-center justify-center py-[6px]">
            <WindMiniChart />
          </div>
          <CardFooter value={value} unit={unit} sub={sub} />
        </>
      )}

      {type === "uv" && (
        <>
          <div className="relative flex flex-1 flex-col items-center justify-center">
            <OverviewIcon src={images.uvIndex} alt="UV Index gauge" className="h-[58px] w-[88px] sm:h-[64px] sm:w-[96px]" />
            <p className="mt-1 text-[14px] font-bold leading-none text-white">
              {value} {unit}
            </p>
          </div>
        </>
      )}

      {type === "humidity" && (
        <>
          <div className="flex flex-1 items-center justify-center">
            <OverviewIcon src={images.humidity} alt="Humidity" />
          </div>
          <CardFooter value={value} sub={sub} subIcon={Droplets} />
        </>
      )}

      {type === "visibility" && (
        <>
          <div className="flex flex-1 items-center justify-center">
            <OverviewIcon src={images.visibility} alt="Visibility" />
          </div>
          <CardFooter value={value} unit={unit} sub={sub} subIcon={Eye} />
        </>
      )}
    </article>
  )
}
