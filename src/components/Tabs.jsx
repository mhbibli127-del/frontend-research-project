import { useState } from "react"

const tabs = [
  { id: "today", label: "Today" },
  { id: "tomorrow", label: "Tomorrow" },
  { id: "week", label: "Next 7days" },
]

export default function Tabs() {
  const [active, setActive] = useState("week")

  return (
    <div className="mt-6 flex flex-col gap-4 sm:mt-[26px] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-6 overflow-x-auto sm:gap-[38px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`relative shrink-0 pb-[10px] text-[14px] transition sm:text-[15px] ${
              active === tab.id
                ? "font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-white"
                : "font-normal text-muted hover:text-white/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex w-fit items-center rounded-full bg-card p-[3px]">
        <span className="rounded-full bg-today px-4 py-[6px] text-[11px] font-semibold text-[#0d0d0d] sm:px-[18px] sm:text-[12px]">
          Forecast
        </span>
        <span className="px-4 py-[6px] text-[11px] font-medium text-muted sm:px-[18px] sm:text-[12px]">
          Air Quality
        </span>
      </div>
    </div>
  )
}
